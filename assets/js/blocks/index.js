(()=>{var{__:fe}=window.wp.i18n,{useBlockProps:Og,useInnerBlocksProps:Ug,InspectorControls:jg,PanelColorSettings:vn,MediaUpload:xn,MediaUploadCheck:yn}=window.wp.blockEditor,{ToggleControl:Et,SelectControl:hi,RangeControl:tl,Button:Eo,Tooltip:Vg,__experimentalToggleGroupControl:Fg,__experimentalToggleGroupControlOption:Vr}=window.wp.components,{useState:Cn,useEffect:wn,useRef:Eg}=window.wp.element,{useDispatch:Wg,useSelect:Fr}=window.wp.data,{createBlock:Er}=window.wp.blocks,{useBlockId:qg,getDimensionCSS:Tt,animations:il,animationPreview:Wr}=digi.utils,{tabIcons:ia}=digi.icons,{ResponsiveControl:Wt,DimensionControl:la,BoxShadowControl:Gg,CustomTabPanel:Qg,TabPanelBody:Wo,ResponsiveRangeControl:qr,ResponsiveButtonGroup:aa}=digi.components,Gr=[{name:"1-col",label:fe("1 Column","digiblocks"),icon:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"0 0 90 48"},wp.element.createElement("path",{d:"M88 48H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0h86c1.1 0 2 .9 2 2v44c0 1.1-.9 2-2 2z"})),columns:[100]},{name:"2-col-equal",label:fe("2 Columns Equal","digiblocks"),icon:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"0 0 90 48"},wp.element.createElement("path",{d:"M41.3 48H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0h39.2c1.1 0 2 .9 2 2v44c.1 1.1-.8 2-1.9 2zM88 48H48.7c-1.1 0-2-.9-2-2V2c0-1.1.9-2 2-2H88c1.1 0 2 .9 2 2v44c0 1.1-.9 2-2 2z"})),columns:[50,50]},{name:"3-col-equal",label:fe("3 Columns Equal","digiblocks"),icon:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"0 0 90 48"},wp.element.createElement("path",{d:"M26.2 48H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0h24.2c1.1 0 2 .9 2 2v44c.1 1.1-.9 2-2 2zM57.1 48H32.9c-1.1 0-2-.9-2-2V2c0-1.1.9-2 2-2h24.2c1.1 0 2 .9 2 2v44c0 1.1-.9 2-2 2zM88 48H63.8c-1.1 0-2-.9-2-2V2c0-1.1.9-2 2-2H88c1.1 0 2 .9 2 2v44c0 1.1-.9 2-2 2z"})),columns:[33.33,33.33,33.33]},{name:"4-col-equal",label:fe("4 Columns Equal","digiblocks"),icon:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"0 0 90 48"},wp.element.createElement("path",{d:"M19 48H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0h17c1.1 0 2 .9 2 2v44c0 1.1-.9 2-2 2zM42 48H25c-1.1 0-2-.9-2-2V2c0-1.1.9-2 2-2h17c1.1 0 2 .9 2 2v44c0 1.1-.9 2-2 2zM64.9 48H48c-1.1 0-2-.9-2-2V2c0-1.1.9-2 2-2h16.9c1.1 0 2 .9 2 2v44c.1 1.1-.8 2-2 2zM87.9 48H71c-1.1 0-2-.9-2-2V2c0-1.1.9-2 2-2h16.9c1.1 0 2 .9 2 2v44c.1 1.1-.9 2-2 2z"})),columns:[25,25,25,25]},{name:"1-3-col",label:fe("1/3 + 2/3","digiblocks"),icon:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"0 0 90 48"},wp.element.createElement("path",{d:"M24.1 48H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0h22c1.1 0 2 .9 2 2v44c.1 1.1-.8 2-1.9 2zM87.9 48H30.2c-1.1 0-2-.9-2-2V2c0-1.1.9-2 2-2h57.7c1.1 0 2 .9 2 2v44c.1 1.1-.9 2-2 2z"})),columns:[33.33,66.67]},{name:"3-1-col",label:fe("2/3 + 1/3","digiblocks"),icon:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"0 0 90 48"},wp.element.createElement("path",{d:"M60.6 48H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0h58.6c1.1 0 2 .9 2 2v44c0 1.1-.9 2-2 2zM87.9 48H66.7c-1.1 0-2-.9-2-2V2c0-1.1.9-2 2-2h21.2c1.1 0 2 .9 2 2v44c.1 1.1-.9 2-2 2z"})),columns:[66.67,33.33]},{name:"1-4-1-4-2-4-col",label:fe("1/4 + 1/4 + 2/4","digiblocks"),icon:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"0 0 90 48"},wp.element.createElement("path",{d:"M20.1 48H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0h18.1c1.1 0 2 .9 2 2v44c.1 1.1-.8 2-2 2zM44.6 48H26.5c-1.1 0-2-.9-2-2V2c0-1.1.9-2 2-2h18.1c1.1 0 2 .9 2 2v44c0 1.1-.9 2-2 2zM87.9 48h-37c-1.1 0-2-.9-2-2V2c0-1.1.9-2 2-2h37c1.1 0 2 .9 2 2v44c.1 1.1-.9 2-2 2z"})),columns:[25,25,50]},{name:"2-4-1-4-1-4-col",label:fe("2/4 + 1/4 + 1/4","digiblocks"),icon:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"0 0 90 48"},wp.element.createElement("path",{d:"M69.8 48h18.1c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2H69.8c-1.1 0-2 .9-2 2v44c0 1.1.9 2 2 2zM45.4 48h18.1c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2H45.4c-1.1 0-2 .9-2 2v44c0 1.1.9 2 2 2zM2 48h37c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2H2C.9 0 0 .9 0 2v44c0 1.1.9 2 2 2z"})),columns:[50,25,25]},{name:"1-4-2-4-1-4-col",label:fe("1/4 + 2/4 + 1/4","digiblocks"),icon:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"0 0 90 48"},wp.element.createElement("path",{d:"M69.8 48h18.1c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2H69.8c-1.1 0-2 .9-2 2v44c0 1.1.9 2 2 2zM2 48h18.1c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2H2C.9 0 0 .9 0 2v44c0 1.1.9 2 2 2zM26.4 48h37c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2h-37c-1.1 0-2 .9-2 2v44c0 1.1.9 2 2 2z"})),columns:[25,50,25]},{name:"5-col-equal",label:fe("5 Columns Equal","digiblocks"),icon:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"0 0 90 48"},wp.element.createElement("path",{d:"M20.3 48h12.6c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2H20.3c-1.1 0-2 .9-2 2v44c0 1.1.9 2 2 2zM38.7 48h12.6c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2H38.7c-1.1 0-2 .9-2 2v44c-.1 1.1.9 2 2 2zM57.1 48h12.6c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2H57.1c-1.1 0-2 .9-2 2v44c0 1.1.9 2 2 2zM75.4 48H88c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2H75.4c-1.1 0-2 .9-2 2v44c0 1.1.9 2 2 2zM2 48h12.6c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2H2C.9 0 0 .9 0 2v44c0 1.1.9 2 2 2z"})),columns:[20,20,20,20,20]},{name:"6-col-equal",label:fe("6 Columns Equal","digiblocks"),icon:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"0 0 90 48"},wp.element.createElement("path",{d:"M17.3 48H27c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2h-9.7c-1.1 0-2 .9-2 2v44c-.1 1.1.8 2 2 2zM32.4 48h9.7c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2h-9.7c-1.1 0-2 .9-2 2v44c0 1.1.9 2 2 2zM47.8 48h9.7c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2h-9.7c-1.1 0-2 .9-2 2v44c-.1 1.1.8 2 2 2zM62.9 48h9.7c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2h-9.7c-1.1 0-2 .9-2 2v44c-.1 1.1.8 2 2 2zM78.3 48H88c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2h-9.7c-1.1 0-2 .9-2 2v44c-.1 1.1.9 2 2 2zM2 48h9.7c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2H2C.9 0 0 .9 0 2v44c0 1.1.9 2 2 2z"})),columns:[16.67,16.67,16.67,16.67,16.67,16.67]},{name:"1-6-4-6-1-6-col",label:fe("1/6 + 4/6 + 1/6","digiblocks"),icon:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"0 0 90 48"},wp.element.createElement("path",{d:"M19.2 48h51.5c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2H19.2c-1.1 0-2 .9-2 2v44c0 1.1.9 2 2 2zM77.1 48H88c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2H77.1c-1.1 0-2 .9-2 2v44c-.1 1.1.8 2 2 2zM2 48h11.1c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2H2C.9 0 0 .9 0 2v44c0 1.1.9 2 2 2z"})),columns:[16.67,66.67,16.67]}],Jg=({attributes:ie,setAttributes:e,clientId:X})=>{let{flexWrap:o,id:P,anchor:n,visibility:te,customClasses:l,layout:_,contentLayout:v,contentWidth:M,contentMaxWidth:N,horizontalAlign:m,verticalAlign:s,heightType:$,minHeight:I,columnGap:C,rowGap:k,reverseColumnsMobile:B,stackOnTablet:O,stackOnMobile:T,overflowHidden:V,zIndex:Z,backgroundColor:ee,backgroundImage:E,backgroundPosition:f,backgroundRepeat:b,backgroundSize:D,backgroundVideo:le,backgroundVideoFallbackImage:We,backgroundOverlay:Se,backgroundOverlayOpacity:K,backgroundOverlayBlendMode:L,padding:oe,margin:q,borderStyle:J,borderWidth:A,borderColor:re,borderRadius:se,boxShadow:Ce,boxShadowHover:Y,animation:de}=ie;qg(P,X,e);let[He,be]=Cn(window.digi.responsiveState.activeDevice),[H,xe]=Cn(()=>{if(window.digi.uiState){let a=window.digi.uiState.getActiveTab(X);if(a)return a}return"options"}),[x,ve]=Cn(!_),U=Eg(null);wn(()=>window.digi.responsiveState.subscribe(ue=>{be(ue)}),[]);let{isNested:me}=Fr(a=>{let{getBlockParentsByBlockName:ue}=a("core/block-editor");return{isNested:ue(X,"digiblocks/container").length>0}},[X]);wn(()=>{e({isNested:me})},[me,e]);let{innerBlocks:Te,hasChildBlocks:qe}=Fr(a=>{let{getBlocks:ue}=a("core/block-editor"),Fe=ue(X);return{innerBlocks:Fe,hasChildBlocks:Fe.length>0}},[X]),{replaceInnerBlocks:Ve}=Wg("core/block-editor"),Ee=a=>{let ue=Gr.find(t=>t.name===a);if(!ue)return;let Fe=Te.map(t=>({clientId:t.clientId,attributes:t.attributes,innerBlocks:t.innerBlocks})),eo=ue.columns.length,ao=Fe.length,go=[];if(ue.columns.forEach((t,p)=>{if(p<ao){let De=Fe[p];go.push(Er("digiblocks/column",{...De.attributes,width:{desktop:t,tablet:O?100:t,mobile:T?100:t}},[...De.innerBlocks]))}else go.push(Er("digiblocks/column",{id:`column-${P}-${p}`,width:{desktop:t,tablet:O?100:t,mobile:T?100:t}},[]))}),ao>eo&&eo>0){let t=[];for(let p=eo;p<ao;p++)t.push(...Fe[p].innerBlocks);if(t.length>0){let p=go[go.length-1].innerBlocks;go[go.length-1].innerBlocks=[...p,...t]}}Ve(X,go,!1),e({layout:a}),ve(!1)};wn(()=>{if(de&&de!=="none"){let a=setTimeout(()=>{Wr(P,de,il,U)},100);return()=>clearTimeout(a)}},[de]);let Oe=[{label:fe("None","digiblocks"),value:"none"},...Object.keys(il).map(a=>({label:a.replace(/-/g," ").replace(/\b\w/g,ue=>ue.toUpperCase()),value:a}))],j=()=>{Wr(P,de,il,U)},ye=[{label:fe("Top Left","digiblocks"),value:"top left"},{label:fe("Top Center","digiblocks"),value:"top center"},{label:fe("Top Right","digiblocks"),value:"top right"},{label:fe("Center Left","digiblocks"),value:"center left"},{label:fe("Center Center","digiblocks"),value:"center center"},{label:fe("Center Right","digiblocks"),value:"center right"},{label:fe("Bottom Left","digiblocks"),value:"bottom left"},{label:fe("Bottom Center","digiblocks"),value:"bottom center"},{label:fe("Bottom Right","digiblocks"),value:"bottom right"}],Je=[{label:fe("No Repeat","digiblocks"),value:"no-repeat"},{label:fe("Repeat","digiblocks"),value:"repeat"},{label:fe("Repeat X","digiblocks"),value:"repeat-x"},{label:fe("Repeat Y","digiblocks"),value:"repeat-y"}],G=[{label:fe("Cover","digiblocks"),value:"cover"},{label:fe("Contain","digiblocks"),value:"contain"},{label:fe("Auto","digiblocks"),value:"auto"},{label:fe("100%","digiblocks"),value:"100%"}],pe=[{label:fe("None","digiblocks"),value:"none"},{label:fe("Solid","digiblocks"),value:"solid"},{label:fe("Dashed","digiblocks"),value:"dashed"},{label:fe("Dotted","digiblocks"),value:"dotted"},{label:fe("Double","digiblocks"),value:"double"}],R=[{label:fe("Normal","digiblocks"),value:"normal"},{label:fe("Multiply","digiblocks"),value:"multiply"},{label:fe("Screen","digiblocks"),value:"screen"},{label:fe("Overlay","digiblocks"),value:"overlay"},{label:fe("Darken","digiblocks"),value:"darken"},{label:fe("Lighten","digiblocks"),value:"lighten"},{label:fe("Color Dodge","digiblocks"),value:"color-dodge"},{label:fe("Color Burn","digiblocks"),value:"color-burn"},{label:fe("Hard Light","digiblocks"),value:"hard-light"},{label:fe("Soft Light","digiblocks"),value:"soft-light"},{label:fe("Difference","digiblocks"),value:"difference"},{label:fe("Exclusion","digiblocks"),value:"exclusion"},{label:fe("Hue","digiblocks"),value:"hue"},{label:fe("Saturation","digiblocks"),value:"saturation"},{label:fe("Color","digiblocks"),value:"color"},{label:fe("Luminosity","digiblocks"),value:"luminosity"}],d=[{name:"options",title:fe("Layout","digiblocks"),icon:ia.optionsIcon},{name:"style",title:fe("Style","digiblocks"),icon:ia.styleIcon},{name:"background",title:fe("Background","digiblocks"),icon:ia.backgroundIcon},{name:"advanced",title:fe("Advanced","digiblocks"),icon:ia.advancedIcon}],ce=(a,ue)=>{let Fe=he=>a&&a[he]&&(a[he].top!==void 0&&a[he].top!==""||a[he].right!==void 0&&a[he].right!==""||a[he].bottom!==void 0&&a[he].bottom!==""||a[he].left!==void 0&&a[he].left!==""),eo;if(Fe(ue))eo=a[ue];else if(ue==="tablet"&&Fe("desktop"))eo=a.desktop;else if(ue==="mobile")if(Fe("tablet"))eo=a.tablet;else if(Fe("desktop"))eo=a.desktop;else return"";else return"";let ao=(he,oo)=>he===void 0||he===""?"0"+oo:oo==="px"&&parseFloat(he)<10?"10px":he+oo,go=eo.unit||"px",t=ao(eo.top,go),p=ao(eo.right,go),De=ao(eo.bottom,go),r=ao(eo.left,go);return`padding: ${t} ${p} ${De} ${r} !important;`},S=(a,ue)=>a[ue]&&a[ue].value!==""?{value:a[ue].value,unit:a[ue].unit||"px"}:ue==="tablet"?{value:a.desktop.value,unit:a.desktop.unit||"px"}:ue==="mobile"?a.tablet&&a.tablet.value!==""?{value:a.tablet.value,unit:a.tablet.unit||"px"}:{value:a.desktop.value,unit:a.desktop.unit||"px"}:{value:0,unit:"px"},g=()=>{let a=He,ue=ce(oe,a),Fe=ce(oe,"tablet"),eo=ce(oe,"mobile"),ao="";de&&de!=="none"&&il[de]&&(ao=il[de].keyframes);let go="";E&&E.url&&(go=`background-image: url(${E.url});
            background-position: ${f};
            background-repeat: ${b};
            background-size: ${D};`);let t="";Se&&(t=`
            .${P}:before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: ${Se};
                opacity: ${K};
                mix-blend-mode: ${L};
                z-index: 1;
                pointer-events: none;
                border-radius: inherit;
            }
            .${P} > * {
                position: relative;
                z-index: 2;
            }`);let p="";Ce&&Ce.enable&&(p=`box-shadow: ${Ce.horizontal}px ${Ce.vertical}px ${Ce.blur}px ${Ce.spread}px ${Ce.color};`);let De="";Y&&Y.enable&&(De=`box-shadow: ${Y.position==="inset"?"inset ":""}${Y.horizontal}px ${Y.vertical}px ${Y.blur}px ${Y.spread}px ${Y.color};`);let r="";$[a]==="full"?r="height: 100vh;":$[a]==="custom"&&(r=`min-height: ${I[a]}px !important;`);let he="";me||(v==="full"?he="width: 100%;":he=`width: ${M[a]!==void 0&&M[a]!==""?M[a]:M.desktop}px;
				margin-left: auto;
				margin-right: auto;`);let oo="";return me||(v==="full"?oo="max-width: 100%;":oo=`max-width: ${N[a]!==void 0&&N[a]!==""?N[a]:N.desktop}%;`),`
            /* Container Block - ${P} */
            .${P} {
                position: relative;
                ${ue}
				${Tt(q,"margin",a)}
                width: 100%;
                ${r}
                ${ee?`background-color: ${ee};`:""}
                ${go}
                ${J!=="none"?`
                border-style: ${J}!important;
				${Tt(A,"border-width",a,!0)}
                border-color: ${re}!important;`:""}
				${Tt(se,"border-radius",a)}
                ${p}
                ${V?"overflow: hidden;":""}
                ${Z?`z-index: ${Z};`:""}
                transition: all 0.3s ease;
            }
            
            /* Hover effects */
            .${P}:hover {
                ${De}
            }

			.${P} > .digiblocks-container-inner {
                display: flex;
				flex-wrap: ${o[a]};
                align-items: ${s[a]};
    			justify-content: ${m[a]};
				gap: ${S(k,a).value}${S(k,a).unit} ${S(C,a).value}${S(C,a).unit};
            }

			.${P}.alignfull > .digiblocks-container-inner {
				${me?"":he}
				${me?"":oo}
            }
            
            ${t}
            
            /* Background video */
            .${P} > .digiblocks-bg-video-container {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                overflow: hidden;
                z-index: 0;
                pointer-events: none;
                border-radius: inherit;
            }
            
            .${P} > .digiblocks-bg-video {
                position: absolute;
                top: 50%;
                left: 50%;
                min-width: 100%;
                min-height: 100%;
                width: auto;
                height: auto;
                transform: translateX(-50%) translateY(-50%);
                object-fit: cover;
            }
            
            /* Tablet styles */
            @media (max-width: 991px) {
                .${P} {
                    ${Fe}
					${Tt(q,"margin","tablet")}
					${$.tablet==="custom"?`min-height: ${I.tablet}px;`:""}
					${Tt(se,"border-radius","tablet")}
					${J!=="none"?`${Tt(A,"border-width","tablet",!0)}`:""}
                }

				.${P} > .digiblocks-container-inner {
					${!me&&v!=="full"?`
						width: ${M.tablet!==void 0&&M.tablet!==""?M.tablet:M.desktop}px;
						max-width: ${N.tablet!==void 0&&N.tablet!==""?N.tablet:N.desktop}%;
					`:""}
					flex-wrap: ${o.tablet};
					align-items: ${s.tablet};
					justify-content: ${m.tablet};
					gap: ${S(k,"tablet").value}${S(k,"tablet").unit} ${S(C,"tablet").value}${S(C,"tablet").unit};
                    ${O?"flex-direction: column;":""}
				}

				${O?`
					.${P} > .digiblocks-container-inner .digiblocks-column {
						width: 100%;
					}`:""}
            }
            
            /* Mobile styles */
            @media (max-width: 767px) {
                .${P} {
                    ${eo}
					${Tt(q,"margin","mobile")}
                    ${$.mobile==="custom"?`min-height: ${I.mobile}px;`:""}
					${Tt(se,"border-radius","mobile")}
                    ${J!=="none"?`border-width: ${A.mobile.top}${A.mobile.unit} ${A.mobile.right}${A.mobile.unit} ${A.mobile.bottom}${A.mobile.unit} ${A.mobile.left}${A.mobile.unit};`:""}
                }

				.${P} > .digiblocks-container-inner {
					${!me&&v!=="full"?`
						width: ${M.mobile!==void 0&&M.mobile!==""?M.mobile:M.tablet!==void 0&&M.tablet!==""?M.tablet:M.desktop}px;
						max-width: ${N.mobile!==void 0&&N.mobile!==""?N.mobile:N.tablet!==void 0&&N.tablet!==""?N.tablet:N.desktop}%;
					`:""}
					flex-wrap: ${o.mobile};
					align-items: ${s.mobile};
					justify-content: ${m.mobile};
					gap: ${S(k,"mobile").value}${S(k,"mobile").unit} ${S(C,"mobile").value}${S(C,"mobile").unit};
                    ${T?"flex-direction: column;":""}
                    ${B?"flex-direction: column-reverse;":""}
				}

				${T?`
					.${P} > .digiblocks-container-inner .digiblocks-column {
						width: 100%;
					}`:""}
            }
            
            /* Animation keyframes */
            ${ao}

			/* Visibility Controls */
			${te.desktop?`
				@media (min-width: 992px) {
					.${P} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${te.tablet?`
				@media (min-width: 768px) and (max-width: 991px) {
					.${P} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${te.mobile?`
				@media (max-width: 767px) {
					.${P} {
						opacity: 0.5 !important;
					}
				}
			`:""}
        `},Q=Og({className:`digiblocks-container ${me?"":"alignfull"} ${P} ${l||""}`,id:n||null}),ae=Ug({className:"digiblocks-container-inner"},{allowedBlocks:x?[]:["digiblocks/column"],orientation:"horizontal",renderAppender:qe?void 0:window.wp.blockEditor.ButtonBlockAppender}),y=()=>{switch(H){case"options":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Wo,{tab:"options",name:"layout",title:fe("Container Layout","digiblocks"),initialOpen:!0},wp.element.createElement(Eo,{variant:"secondary",onClick:()=>ve(!0),className:"digiblocks-change-layout-button"},fe(_?"Change Layout":"Select Layout","digiblocks")),!me&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Fg,{label:fe("Layout","digiblocks"),value:v,onChange:a=>e({contentLayout:a}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(Vr,{value:"boxed",label:fe("Boxed","digiblocks")}),wp.element.createElement(Vr,{value:"full",label:fe("Full Width","digiblocks")})),v==="boxed"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Wt,{label:fe("Content Width (px)","digiblocks")},wp.element.createElement(tl,{value:M[He]!==""?M[He]:He==="desktop"?digiBlocksData.contentWidth||1200:M.desktop||digiBlocksData.contentWidth||1200,onChange:a=>e({contentWidth:{...M,[He]:a}}),min:300,max:2e3,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(Wt,{label:fe("Content Max Width (%)","digiblocks")},wp.element.createElement(tl,{value:N[He]!==""?N[He]:He==="desktop"?digiBlocksData.contentMaxWidth||90:N.desktop||digiBlocksData.contentMaxWidth||90,onChange:a=>e({contentMaxWidth:{...N,[He]:a}}),min:0,max:100,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})))),wp.element.createElement(aa,{label:fe("Flex Wrap","digiblocks"),value:o,onChange:a=>e({flexWrap:a}),options:[{label:fe("No Wrap","digiblocks"),value:"nowrap"},{label:fe("Wrap","digiblocks"),value:"wrap"}]}),wp.element.createElement(aa,{label:fe("Height","digiblocks"),value:$,onChange:a=>e({heightType:a}),options:[{label:fe("Auto","digiblocks"),value:"auto"},{label:fe("Full","digiblocks"),value:"full"},{label:fe("Custom","digiblocks"),value:"custom"}]}),$[He]==="custom"&&wp.element.createElement(Wt,{label:fe("Min Height","digiblocks")},wp.element.createElement(tl,{value:I[He],onChange:a=>e({minHeight:{...I,[He]:a}}),min:0,max:1e3,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(aa,{label:fe("Horizontal Align","digiblocks"),value:m,onChange:a=>e({horizontalAlign:a}),options:[{label:fe("Left","digiblocks"),value:"flex-start"},{label:fe("Center","digiblocks"),value:"center"},{label:fe("Right","digiblocks"),value:"flex-end"},{label:fe("Space","digiblocks"),value:"space-between"}]}),wp.element.createElement(aa,{label:fe("Vertical Align","digiblocks"),value:s,onChange:a=>e({verticalAlign:a}),options:[{label:fe("Top","digiblocks"),value:"flex-start"},{label:fe("Middle","digiblocks"),value:"center"},{label:fe("Bottom","digiblocks"),value:"flex-end"}]})),wp.element.createElement(Wo,{tab:"layout",name:"spacing",title:fe("Spacing","digiblocks"),initialOpen:!1},wp.element.createElement(qr,{label:fe("Column Gap","digiblocks"),value:C,onChange:a=>e({columnGap:a}),units:[{label:"px",value:"px"},{label:"%",value:"%"},{label:"em",value:"em"},{label:"rem",value:"rem"}],defaultUnit:"px",min:0,max:100,step:1}),wp.element.createElement(qr,{label:fe("Row Gap","digiblocks"),value:k,onChange:a=>e({rowGap:a}),units:[{label:"px",value:"px"},{label:"em",value:"em"},{label:"rem",value:"rem"}],defaultUnit:"px",min:0,max:100,step:1}),wp.element.createElement(Wt,{label:fe("Padding","digiblocks")},wp.element.createElement(la,{values:oe[He],onChange:a=>e({padding:{...oe,[He]:a}})})),wp.element.createElement(Wt,{label:fe("Margin","digiblocks")},wp.element.createElement(la,{values:q[He],onChange:a=>e({margin:{...q,[He]:a}})}))),wp.element.createElement(Wo,{tab:"layout",name:"responsive",title:fe("Responsive","digiblocks"),initialOpen:!1},wp.element.createElement(Et,{label:fe("Stack on Tablet","digiblocks"),checked:O,onChange:a=>e({stackOnTablet:a}),help:fe("Stack columns vertically on tablet devices.","digiblocks"),__nextHasNoMarginBottom:!0}),wp.element.createElement(Et,{label:fe("Stack on Mobile","digiblocks"),checked:T,onChange:a=>e({stackOnMobile:a}),help:fe("Stack columns vertically on mobile devices.","digiblocks"),__nextHasNoMarginBottom:!0}),wp.element.createElement(Et,{label:fe("Reverse Columns on Mobile","digiblocks"),checked:B,onChange:a=>e({reverseColumnsMobile:a}),help:fe("Reverse the order of columns on mobile devices.","digiblocks"),__nextHasNoMarginBottom:!0})),wp.element.createElement(Wo,{tab:"layout",name:"visibility",title:fe("Visibility","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control__help",style:{padding:"12px",backgroundColor:"#f0f6fc",border:"1px solid #c3ddfd",borderRadius:"4px",marginBottom:"16px"}},wp.element.createElement("strong",null,fe("Editor Note:","digiblocks")),wp.element.createElement("br",null),fe("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.","digiblocks")),wp.element.createElement(Et,{label:fe("Hide on Desktop","digiblocks"),checked:te.desktop,onChange:a=>e({visibility:{...te,desktop:a}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(Et,{label:fe("Hide on Tablet","digiblocks"),checked:te.tablet,onChange:a=>e({visibility:{...te,tablet:a}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(Et,{label:fe("Hide on Mobile","digiblocks"),checked:te.mobile,onChange:a=>e({visibility:{...te,mobile:a}}),__nextHasNoMarginBottom:!0})));case"style":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Wo,{tab:"style",name:"borders",title:fe("Borders & Radius","digiblocks"),initialOpen:!0},wp.element.createElement(hi,{label:fe("Border Style","digiblocks"),value:J,options:pe,onChange:a=>e({borderStyle:a}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),J!=="none"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Wt,{label:fe("Border Width","digiblocks")},wp.element.createElement(la,{values:A[He],onChange:a=>e({borderWidth:{...A,[He]:a}})})),wp.element.createElement(vn,{title:"",enableAlpha:!0,colorSettings:[{value:re,onChange:a=>e({borderColor:a}),label:fe("Border Color","digiblocks")}]})),wp.element.createElement(Wt,{label:fe("Border Radius","digiblocks")},wp.element.createElement(la,{values:se[He],onChange:a=>e({borderRadius:{...se,[He]:a}}),units:[{label:"px",value:"px"},{label:"%",value:"%"},{label:"em",value:"em"}]})),wp.element.createElement(Gg,{normalValue:Ce,hoverValue:Y,onNormalChange:a=>e({boxShadow:a}),onHoverChange:a=>e({boxShadowHover:a})})),wp.element.createElement(Wo,{tab:"style",name:"advanced",title:fe("Advanced","digiblocks"),initialOpen:!1},wp.element.createElement(Et,{label:fe("Overflow Hidden","digiblocks"),checked:V,onChange:a=>e({overflowHidden:a}),help:fe("Hide content that overflows the container boundaries.","digiblocks"),__nextHasNoMarginBottom:!0}),wp.element.createElement(tl,{label:fe("Z-Index","digiblocks"),value:Z,onChange:a=>e({zIndex:a}),min:-99,max:99,step:1,allowReset:!0,resetFallbackValue:0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})));case"background":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Wo,{tab:"background",name:"background",title:fe("Background","digiblocks"),initialOpen:!0},wp.element.createElement(vn,{title:fe("Background Color","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:ee,onChange:a=>e({backgroundColor:a}),label:fe("Background Color","digiblocks")}]}),wp.element.createElement("div",{className:"digiblocks-media-control"},wp.element.createElement("p",{className:"components-base-control__label"},fe("Background Image","digiblocks")),wp.element.createElement(yn,null,wp.element.createElement(xn,{onSelect:a=>{e({backgroundImage:{url:a.url,id:a.id,alt:a.alt||"",size:a.sizes?.full?.url?"full":""}})},allowedTypes:["image"],value:E?.id,render:({open:a})=>wp.element.createElement("div",{className:"digiblocks-media-upload-wrapper"},E?.url?wp.element.createElement("div",{className:"digiblocks-media-preview"},wp.element.createElement("img",{src:E.url,alt:E.alt||""}),wp.element.createElement("div",{className:"digiblocks-media-controls"},wp.element.createElement(Eo,{isPrimary:!0,onClick:a},wp.element.createElement("span",{class:"dashicon dashicons dashicons-edit"})),wp.element.createElement(Eo,{isDestructive:!0,onClick:()=>e({backgroundImage:{url:"",id:0,alt:"",size:""}})},wp.element.createElement("span",{class:"dashicon dashicons dashicons-trash"})))):wp.element.createElement(Eo,{className:"digiblocks-media-upload-button",isPrimary:!0,onClick:a},fe("Select Image","digiblocks")))}))),E?.url&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(hi,{label:fe("Background Position","digiblocks"),value:f,options:ye,onChange:a=>e({backgroundPosition:a}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(hi,{label:fe("Background Repeat","digiblocks"),value:b,options:Je,onChange:a=>e({backgroundRepeat:a}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(hi,{label:fe("Background Size","digiblocks"),value:D,options:G,onChange:a=>e({backgroundSize:a}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}))),wp.element.createElement(Wo,{tab:"background",name:"backgroundVideo",title:fe("Background Video","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"digiblocks-media-control"},wp.element.createElement("p",{className:"components-base-control__label"},fe("Background Video","digiblocks")),wp.element.createElement(yn,null,wp.element.createElement(xn,{onSelect:a=>{e({backgroundVideo:{url:a.url,id:a.id}})},allowedTypes:["video"],value:le?.id,render:({open:a})=>wp.element.createElement("div",{className:"digiblocks-media-upload-wrapper"},le?.url?wp.element.createElement("div",{className:"digiblocks-media-preview"},wp.element.createElement("video",{controls:!0},wp.element.createElement("source",{src:le.url}),fe("Your browser does not support the video tag.","digiblocks")),wp.element.createElement("div",{className:"digiblocks-media-controls"},wp.element.createElement(Eo,{isPrimary:!0,onClick:a},wp.element.createElement("span",{class:"dashicon dashicons dashicons-edit"})),wp.element.createElement(Eo,{isDestructive:!0,onClick:()=>e({backgroundVideo:{url:"",id:0}})},wp.element.createElement("span",{class:"dashicon dashicons dashicons-trash"})))):wp.element.createElement(Eo,{className:"digiblocks-media-upload-button",isPrimary:!0,onClick:a},fe("Select Video","digiblocks")))}))),le?.url&&wp.element.createElement("div",{className:"digiblocks-media-control"},wp.element.createElement("p",{className:"components-base-control__label"},fe("Video Fallback Image","digiblocks")),wp.element.createElement(yn,null,wp.element.createElement(xn,{onSelect:a=>{e({backgroundVideoFallbackImage:{url:a.url,id:a.id,alt:a.alt||""}})},allowedTypes:["image"],value:We?.id,render:({open:a})=>wp.element.createElement("div",{className:"digiblocks-media-upload-wrapper"},We?.url?wp.element.createElement("div",{className:"digiblocks-media-preview"},wp.element.createElement("img",{src:We.url,alt:We.alt||""}),wp.element.createElement("div",{className:"digiblocks-media-controls"},wp.element.createElement(Eo,{isPrimary:!0,onClick:a},wp.element.createElement("span",{class:"dashicon dashicons dashicons-edit"})),wp.element.createElement(Eo,{isDestructive:!0,onClick:()=>e({backgroundVideoFallbackImage:{url:"",id:0,alt:""}})},wp.element.createElement("span",{class:"dashicon dashicons dashicons-trash"})))):wp.element.createElement(Eo,{className:"digiblocks-media-upload-button",isPrimary:!0,onClick:a},fe("Select Fallback Image","digiblocks")))})))),wp.element.createElement(Wo,{tab:"background",name:"overlay",title:fe("Background Overlay","digiblocks"),initialOpen:!1},wp.element.createElement(vn,{title:fe("Overlay Color","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:Se,onChange:a=>e({backgroundOverlay:a}),label:fe("Overlay Color","digiblocks")}]}),Se&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(tl,{label:fe("Overlay Opacity","digiblocks"),value:K,onChange:a=>e({backgroundOverlayOpacity:a}),min:0,max:1,step:.01,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(hi,{label:fe("Blend Mode","digiblocks"),value:L,options:R,onChange:a=>e({backgroundOverlayBlendMode:a}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}))));case"advanced":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Wo,{tab:"style",name:"animation",title:fe("Animation","digiblocks"),initialOpen:!0},wp.element.createElement(hi,{label:fe("Animation Effect","digiblocks"),value:de,options:Oe,onChange:a=>e({animation:a}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),de&&de!=="none"&&wp.element.createElement("div",{style:{marginTop:"10px"}},wp.element.createElement(Eo,{variant:"secondary",isSecondary:!0,onClick:j,style:{width:"100%"}},fe("Preview Animation","digiblocks")))),wp.element.createElement(Wo,{tab:"advanced",name:"additional",title:fe("Additional","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control html-anchor-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"html-anchor"},fe("HTML anchor","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"html-anchor",value:n||"",onChange:a=>e({anchor:a.target.value}),"aria-describedby":"html-anchor-help",autoCapitalize:"none",autoComplete:"off"})),wp.element.createElement("p",{id:"html-anchor-help",className:"components-base-control__help"},fe(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`,"digiblocks")," ",wp.element.createElement("a",{className:"components-external-link",href:"https://wordpress.org/documentation/article/page-jumps/",target:"_blank",rel:"external noreferrer noopener"},wp.element.createElement("span",{className:"components-external-link__contents"},fe("Learn more about anchors","digiblocks")),wp.element.createElement("span",{className:"components-external-link__icon","aria-label":"(opens in a new tab)"},"\u2197")))),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"additional-css-classes"},fe("Additional CSS class(es)","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"additional-css-classes",value:l||"",onChange:a=>e({customClasses:a.target.value}),"aria-describedby":"additional-css-classes-help",autoComplete:"off"})),wp.element.createElement("p",{id:"additional-css-classes-help",className:"components-base-control__help"},fe("Separate multiple classes with spaces.","digiblocks")))));default:return null}},u=()=>wp.element.createElement("div",{className:"digiblocks-layout-selector"},wp.element.createElement("h2",null,fe("Select a Layout","digiblocks")),wp.element.createElement("div",{className:"digiblocks-layout-grid"},Gr.map(a=>wp.element.createElement(Vg,{text:a.label,key:a.name},wp.element.createElement("div",{className:"digiblocks-layout-option",onClick:()=>Ee(a.name),"aria-label":a.label},wp.element.createElement("div",{className:"digiblocks-layout-icon"},a.icon),wp.element.createElement("span",{className:"screen-reader-text"},a.label)))))),Ne=()=>le?.url?wp.element.createElement("div",{className:"digiblocks-bg-video-container"},wp.element.createElement("video",{className:"digiblocks-bg-video",autoPlay:!0,muted:!0,loop:!0,playsInline:!0,poster:We?.url||""},wp.element.createElement("source",{src:le.url,type:"video/mp4"}))):null;return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(jg,null,wp.element.createElement(Qg,{tabs:d,activeTab:H,onSelect:xe,customClass:"four"},y())),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:g()}}),wp.element.createElement("div",{...Q},le?.url&&wp.element.createElement(Ne,null),x?wp.element.createElement(u,null):wp.element.createElement("div",{...ae})))},Qr=Jg;var{__:u1}=window.wp.i18n,{useBlockProps:Yg,useInnerBlocksProps:Zg}=window.wp.blockEditor,Kg=({attributes:ie})=>{let{isNested:e,id:X,anchor:o,customClasses:P,backgroundVideo:n,backgroundVideoFallbackImage:te,animation:l}=ie,_=`digiblocks-container ${e?"":"alignfull"} ${X} ${P||""}${l!=="none"?` animate-${l}`:""}`,v=Yg.save({className:_,id:o||null}),M=Zg.save({className:"digiblocks-container-inner"});return wp.element.createElement("div",{...v},n&&n.url&&wp.element.createElement("div",{className:"digiblocks-bg-video-container"},wp.element.createElement("video",{className:"digiblocks-bg-video",autoPlay:!0,muted:!0,loop:!0,playsInline:!0,poster:te?.url||""},wp.element.createElement("source",{src:n.url,type:"video/mp4"}))),wp.element.createElement("div",{...M}))},Jr=Kg;var{__:ll}=window.wp.i18n,{registerBlockType:Xg}=window.wp.blocks,{getBlockActiveStatus:Ag}=window.wp.digiBlocks;Xg("digiblocks/container",{apiVersion:2,title:digiBlocksData.blocks.container.title,category:"digiblocks",icon:{src:()=>{let{viewbox:ie,path:e}=digiBlocksData.blocks.container.icon;return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${ie}`,className:"digiblocks-editor-icons"},wp.element.createElement("path",{d:e}))}},description:digiBlocksData.blocks.container.description,keywords:[ll("container","digiblocks"),ll("section","digiblocks"),ll("row","digiblocks"),ll("layout","digiblocks"),ll("columns","digiblocks")],supports:{inserter:!!Ag("container"),html:!1,className:!1,customClassName:!1,anchor:!1},attributes:{isNested:{type:"boolean",default:!1},id:{type:"string",default:""},visibility:{type:"object",default:{desktop:!1,tablet:!1,mobile:!1}},flexWrap:{type:"object",default:{desktop:"nowrap",tablet:"nowrap",mobile:"nowrap"}},anchor:{type:"string",default:""},customClasses:{type:"string",default:""},layout:{type:"string",default:""},contentLayout:{type:"string",default:"boxed"},contentWidth:{type:"object",default:{desktop:parseInt(digiBlocksData.contentWidth)||1200,tablet:"",mobile:""}},contentMaxWidth:{type:"object",default:{desktop:parseInt(digiBlocksData.contentMaxWidth)||90,tablet:"",mobile:""}},heightType:{type:"object",default:{desktop:"auto",tablet:"auto",mobile:"auto"}},horizontalAlign:{type:"object",default:{desktop:"center",tablet:"center",mobile:"center"}},verticalAlign:{type:"object",default:{desktop:"center",tablet:"center",mobile:"center"}},minHeight:{type:"object",default:{desktop:0,tablet:0,mobile:0}},columnGap:{type:"object",default:{desktop:{value:20,unit:"px"},tablet:{value:"",unit:"px"},mobile:{value:"",unit:"px"}}},rowGap:{type:"object",default:{desktop:{value:20,unit:"px"},tablet:{value:"",unit:"px"},mobile:{value:"",unit:"px"}}},reverseColumnsMobile:{type:"boolean",default:!1},stackOnTablet:{type:"boolean",default:!1},stackOnMobile:{type:"boolean",default:!0},overflowHidden:{type:"boolean",default:!1},zIndex:{type:"number",default:0},backgroundColor:{type:"string",default:""},backgroundImage:{type:"object",default:{url:"",id:0,alt:"",size:""}},backgroundPosition:{type:"string",default:"center center"},backgroundRepeat:{type:"string",default:"no-repeat"},backgroundSize:{type:"string",default:"cover"},backgroundVideo:{type:"object",default:{url:"",id:0,alt:"",size:""}},backgroundVideoFallbackImage:{type:"object",default:{url:"",id:0,alt:"",size:""}},backgroundOverlay:{type:"string",default:""},backgroundOverlayOpacity:{type:"number",default:.7},backgroundOverlayBlendMode:{type:"string",default:"normal"},padding:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},margin:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderStyle:{type:"string",default:"none"},borderWidth:{type:"object",default:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderColor:{type:"string",default:"#e0e0e0"},borderRadius:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},boxShadow:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},boxShadowHover:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},animation:{type:"string",default:"none"}},example:{attributes:{layout:"",backgroundColor:"#f8f9fa",padding:{desktop:{top:20,right:20,bottom:20,left:20,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},innerBlocks:[],viewportWidth:500},edit:Qr,save:Jr});var{__:to}=window.wp.i18n,{useBlockProps:ep,RichText:Yr,InspectorControls:op,PanelColorSettings:tt}=window.wp.blockEditor,{SelectControl:Zr,RangeControl:tp,ToggleControl:na,Button:fi,Tooltip:sa,__experimentalToggleGroupControl:Kr,__experimentalToggleGroupControlOption:ra,TabPanel:ip}=window.wp.components,{useState:qt,useEffect:Xr,useRef:lp}=window.wp.element,{useBlockId:ap,animations:al,animationPreview:Ar}=digi.utils,{tabIcons:Sn}=digi.icons,{ResponsiveControl:nl,DimensionControl:ca,TypographyControl:ec,BoxShadowControl:np,CustomTabPanel:sp,TabPanelBody:Gt}=digi.components,rp=({attributes:ie,setAttributes:e,clientId:X})=>{let{id:o,anchor:P,visibility:n,customClasses:te,items:l,titleColor:_,titleHoverColor:v,titleActiveColor:M,backgroundColor:N,backgroundHoverColor:m,backgroundActiveColor:s,contentColor:$,contentHoverColor:I,borderColor:C,borderHoverColor:k,borderRadius:B,borderWidth:O,borderStyle:T,boxShadow:V,boxShadowHover:Z,padding:ee,margin:E,titleTypography:f,contentTypography:b,iconPosition:D,iconColor:le,iconHoverColor:We,iconActiveColor:Se,iconSize:K,animation:L,allowMultipleOpen:oe,iconType:q}=ie;ap(o,X,e);let[J,A]=qt(window.digi.responsiveState.activeDevice);Xr(()=>window.digi.responsiveState.subscribe(ae=>{A(ae)}),[]);let[re,se]=qt(()=>{if(window.digi.uiState){let c=window.digi.uiState.getActiveTab(X);if(c)return c}return"options"}),[Ce,Y]=qt("normal"),[de,He]=qt("normal"),[be,H]=qt("normal"),[xe,x]=qt("normal"),[ve,U]=qt("normal"),me=()=>{let c=[...l,{id:`item-${l.length+1}-${Date.now().toString(36)}`,title:to("New Accordion Item","digiblocks"),content:to("Add your content here.","digiblocks"),isOpen:!1}];e({items:c})},Te=c=>{let ae=[...l];ae.splice(c,1),e({items:ae})},qe=(c,ae)=>{let y=[...l];y[ae].title=c,e({items:y})},Ve=(c,ae)=>{let y=[...l];y[ae].content=c,e({items:y})},Ee=c=>{let ae=[...l];oe||ae.forEach((y,u)=>{u!==c&&(ae[u].isOpen=!1)}),ae[c].isOpen=!ae[c].isOpen,e({items:ae})},Oe=c=>{if(c===0)return;let ae=[...l],y=ae[c];ae[c]=ae[c-1],ae[c-1]=y,e({items:ae})},j=c=>{if(c===l.length-1)return;let ae=[...l],y=ae[c];ae[c]=ae[c+1],ae[c+1]=y,e({items:ae})},ye=c=>{let ae=l[c],y=Date.now(),u={...ae,id:`accordion-item-${X.substr(0,8)}-${y}`,isOpen:!1},Ne=[...l];Ne.splice(c+1,0,u),e({items:Ne})},Je=[{label:to("None","digiblocks"),value:"none"},{label:to("Solid","digiblocks"),value:"solid"},{label:to("Dotted","digiblocks"),value:"dotted"},{label:to("Dashed","digiblocks"),value:"dashed"},{label:to("Double","digiblocks"),value:"double"},{label:to("Groove","digiblocks"),value:"groove"},{label:to("Inset","digiblocks"),value:"inset"},{label:to("Outset","digiblocks"),value:"outset"},{label:to("Ridge","digiblocks"),value:"ridge"}],G=[{label:to("None","digiblocks"),value:"none"},...Object.keys(al).map(c=>({label:c.replace(/-/g," ").replace(/\b\w/g,ae=>ae.toUpperCase()),value:c}))],pe=lp(null);Xr(()=>{if(L&&L!=="none"){let c=setTimeout(()=>{Ar(o,L,al,pe)},100);return()=>clearTimeout(c)}},[L]);let R=()=>{Ar(o,L,al,pe)},d=[{name:"options",title:to("Options","digiblocks"),icon:Sn.optionsIcon},{name:"style",title:to("Style","digiblocks"),icon:Sn.styleIcon},{name:"advanced",title:to("Advanced","digiblocks"),icon:Sn.advancedIcon}],ce=c=>{let ae=K[J]||16;return q==="plusMinus"?wp.element.createElement("svg",{width:ae,height:ae,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},wp.element.createElement("path",{d:c?"M19 13H5v-2h14v2z":"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"})):q==="arrowUpDown"?wp.element.createElement("svg",{width:ae,height:ae,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},wp.element.createElement("path",{d:c?"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z":"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z"})):null},S=()=>{let c=window.digi.responsiveState.activeDevice,ae="";if(T&&T!=="none"){let ao=O&&O[c]?O[c]:{top:1,right:1,bottom:1,left:1,unit:"px"},go=B&&B[c]?B[c]:{top:8,right:8,bottom:8,left:8,unit:"px"};ae=`
                border-style: ${T};
                border-color: ${C||"#e0e0e0"};
                border-width: ${ao.top}${ao.unit} ${ao.right}${ao.unit} ${ao.bottom}${ao.unit} ${ao.left}${ao.unit};
                border-radius: ${go.top}${go.unit} ${go.right}${go.unit} ${go.bottom}${go.unit} ${go.left}${go.unit};
            `}else ae="border-style: none;";let y="box-shadow: none;";V&&V.enable&&(y=`box-shadow: ${V.position==="inset"?"inset ":""}${V.horizontal}px ${V.vertical}px ${V.blur}px ${V.spread}px ${V.color};`);let u="";Z&&Z.enable&&(u=`box-shadow: ${Z.position==="inset"?"inset ":""}${Z.horizontal}px ${Z.vertical}px ${Z.blur}px ${Z.spread}px ${Z.color};`);let Ne=`padding: ${ee[c].top}${ee[c].unit} ${ee[c].right}${ee[c].unit} ${ee[c].bottom}${ee[c].unit} ${ee[c].left}${ee[c].unit};`,a=`margin: ${E[c].top}${E[c].unit} ${E[c].right}${E[c].unit} ${E[c].bottom}${E[c].unit} ${E[c].left}${E[c].unit};`,ue="";f&&(f.fontFamily&&(ue+=`font-family: ${f.fontFamily};`),f.fontSize&&f.fontSize[c]&&(ue+=`font-size: ${f.fontSize[c]}${f.fontSizeUnit||"px"};`),f.fontWeight&&(ue+=`font-weight: ${f.fontWeight};`),f.fontStyle&&(ue+=`font-style: ${f.fontStyle};`),f.textTransform&&(ue+=`text-transform: ${f.textTransform};`),f.textDecoration&&(ue+=`text-decoration: ${f.textDecoration};`),f.lineHeight&&f.lineHeight[c]&&(ue+=`line-height: ${f.lineHeight[c]}${f.lineHeightUnit||"em"};`),f.letterSpacing&&f.letterSpacing[c]&&(ue+=`letter-spacing: ${f.letterSpacing[c]}${f.letterSpacingUnit||"px"};`));let Fe="";b&&(b.fontFamily&&(Fe+=`font-family: ${b.fontFamily};`),b.fontSize&&b.fontSize[c]&&(Fe+=`font-size: ${b.fontSize[c]}${b.fontSizeUnit||"px"};`),b.fontWeight&&(Fe+=`font-weight: ${b.fontWeight};`),b.fontStyle&&(Fe+=`font-style: ${b.fontStyle};`),b.textTransform&&(Fe+=`text-transform: ${b.textTransform};`),b.textDecoration&&(Fe+=`text-decoration: ${b.textDecoration};`),b.lineHeight&&b.lineHeight[c]&&(Fe+=`line-height: ${b.lineHeight[c]}${b.lineHeightUnit||"em"};`),b.letterSpacing&&b.letterSpacing[c]&&(Fe+=`letter-spacing: ${b.letterSpacing[c]}${b.letterSpacingUnit||"px"};`));let eo="";return L&&L!=="none"&&al[L]&&(eo=al[L].keyframes),`
            /* Accordion item */
            .${o} .digiblocks-accordion-item {
                overflow: hidden;
                background-color: ${N||"#ffffff"};
                ${ae}
                ${y}
				${a}
                transition: all 0.3s ease;
            }

			/* Hover effects */
            .${o} .digiblocks-accordion-item:hover {
                ${m?`background-color: ${m};`:""}
                ${k?`border-color: ${k};`:""}
				${Z&&Z.enable?u:""}
            }
            
            /* Accordion header */
            .${o} .digiblocks-accordion-header {
                position: relative;
                cursor: pointer;
                ${Ne}
                display: flex;
                align-items: center;
                justify-content: space-between;
				gap: .75rem;
                ${D==="left"?"flex-direction: row-reverse;":""}
                ${D==="left"?"justify-content: flex-end;":""}
                transition: background-color 0.3s ease;
            }
            
            /* Accordion title */
            .${o} .digiblocks-accordion-title {
                margin: 0;
                color: ${_||"#333333"};
                flex: 1;
                ${ue}
                transition: color 0.3s ease;
            }
            
            /* Hover effects for title */
            .${o} .digiblocks-accordion-header:hover .digiblocks-accordion-title {
                ${v?`color: ${v};`:""}
            }
            
            /* Accordion title active state */
            .${o} .digiblocks-accordion-item.is-active .digiblocks-accordion-title {
                color: ${M||"#1e73be"};
            }
            
            /* Accordion icon */
            .${o} .digiblocks-accordion-icon {
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            /* SVG icon fill color */
            .${o} .digiblocks-accordion-icon svg {
                fill: ${le||"#333333"};
                width: ${K[c]}px;
                height: ${K[c]}px;
                transition: transform 0.3s ease, fill 0.3s ease;
            }
            
            /* Hover effects for icon */
            .${o} .digiblocks-accordion-header:hover .digiblocks-accordion-icon svg {
                ${We?`fill: ${We};`:""}
            }
            
            /* Active icon color */
            .${o} .digiblocks-accordion-item.is-active .digiblocks-accordion-icon svg {
                fill: ${Se||"#1e73be"};
            }
            
            /* Active header background */
            .${o} .digiblocks-accordion-item.is-active .digiblocks-accordion-header {
                background-color: ${s||"#f7f7f7"};
            }
            
            /* Accordion content */
            .${o} .digiblocks-accordion-content {
                overflow: hidden;
                ${Ne}
                color: ${$||"#666666"};
                ${Fe}
                transition: color 0.3s ease;
            }
            
            /* Hover effects for content */
            .${o} .digiblocks-accordion-item:hover .digiblocks-accordion-content {
                ${I?`color: ${I};`:""}
            }
            
            .${o} .digiblocks-accordion-content p:first-child {
                margin-top: 0;
            }
            
            .${o} .digiblocks-accordion-content p:last-child {
                margin-bottom: 0;
            }
            
            /* Item controls in editor */
			.${o} .digiblocks-accordion-item {
				position: relative;
			}

			.${o} .digiblocks-accordion-item-controls {
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
            ${eo}

			/* Visibility Controls */
			${n.desktop?`
				@media (min-width: 992px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${n.tablet?`
				@media (min-width: 768px) and (max-width: 991px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${n.mobile?`
				@media (max-width: 767px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}
        `},g=()=>{switch(re){case"options":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:"components-panel__body is-opened"},wp.element.createElement(na,{label:to("Allow Multiple Open","digiblocks"),checked:oe,onChange:c=>e({allowMultipleOpen:c}),help:to("If enabled, multiple accordion items can be open at the same time.","digiblocks"),__nextHasNoMarginBottom:!0}),wp.element.createElement(Kr,{label:to("Icon Type","digiblocks"),value:q,onChange:c=>e({iconType:c}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(ra,{value:"plusMinus",label:to("Plus/Minus","digiblocks")}),wp.element.createElement(ra,{value:"arrowUpDown",label:to("Up/Down","digiblocks")})),wp.element.createElement(Kr,{label:to("Icon Position","digiblocks"),value:D,onChange:c=>e({iconPosition:c}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(ra,{value:"left",label:to("Left","digiblocks")}),wp.element.createElement(ra,{value:"right",label:to("Right","digiblocks")})),wp.element.createElement(nl,{label:to("Icon Size","digiblocks")},wp.element.createElement(tp,{value:K[J],onChange:c=>e({iconSize:{...K,[J]:c}}),min:12,max:48,step:1,__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0}))));case"style":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Gt,{tab:"style",name:"colors",title:to("Colors","digiblocks"),initialOpen:!0},wp.element.createElement(ip,{className:"digiblocks-control-tabs",activeClass:"active-tab",tabs:[{name:"normal",title:to("Normal","digiblocks"),className:"digiblocks-tab-1 normal"},{name:"hover",title:to("Hover","digiblocks"),className:"digiblocks-tab-2 hover"}],onSelect:c=>{Y(c),He(c),H(c),x(c),U(c)}},c=>c.name==="normal"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(tt,{title:to("Title Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:_,onChange:ae=>e({titleColor:ae}),label:to("Title Color","digiblocks")},{value:M,onChange:ae=>e({titleActiveColor:ae}),label:to("Active Title Color","digiblocks")}]}),wp.element.createElement(tt,{title:to("Icon Colors","digiblocks"),initialOpen:!1,enableAlpha:!0,colorSettings:[{value:le,onChange:ae=>e({iconColor:ae}),label:to("Icon Color","digiblocks")},{value:Se,onChange:ae=>e({iconActiveColor:ae}),label:to("Active Icon Color","digiblocks")}]}),wp.element.createElement(tt,{title:to("Background Colors","digiblocks"),initialOpen:!1,enableAlpha:!0,colorSettings:[{value:N,onChange:ae=>e({backgroundColor:ae}),label:to("Background Color","digiblocks")},{value:s,onChange:ae=>e({backgroundActiveColor:ae}),label:to("Active Background Color","digiblocks")}]}),wp.element.createElement(tt,{title:to("Content Colors","digiblocks"),initialOpen:!1,enableAlpha:!0,colorSettings:[{value:$,onChange:ae=>e({contentColor:ae}),label:to("Content Text Color","digiblocks")}]}),wp.element.createElement(tt,{title:to("Border Colors","digiblocks"),initialOpen:!1,enableAlpha:!0,colorSettings:[{value:C,onChange:ae=>e({borderColor:ae}),label:to("Border Color","digiblocks")}]})):wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(tt,{title:to("Title Hover Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:v,onChange:ae=>e({titleHoverColor:ae}),label:to("Title Hover Color","digiblocks")}]}),wp.element.createElement(tt,{title:to("Icon Hover Colors","digiblocks"),initialOpen:!1,enableAlpha:!0,colorSettings:[{value:We,onChange:ae=>e({iconHoverColor:ae}),label:to("Icon Hover Color","digiblocks")}]}),wp.element.createElement(tt,{title:to("Background Hover Colors","digiblocks"),initialOpen:!1,enableAlpha:!0,colorSettings:[{value:m,onChange:ae=>e({backgroundHoverColor:ae}),label:to("Background Hover Color","digiblocks")}]}),wp.element.createElement(tt,{title:to("Content Hover Colors","digiblocks"),initialOpen:!1,enableAlpha:!0,colorSettings:[{value:I,onChange:ae=>e({contentHoverColor:ae}),label:to("Content Hover Color","digiblocks")}]}),wp.element.createElement(tt,{title:to("Border Hover Colors","digiblocks"),initialOpen:!1,enableAlpha:!0,colorSettings:[{value:k,onChange:ae=>e({borderHoverColor:ae}),label:to("Border Hover Color","digiblocks")}]})))),wp.element.createElement(Gt,{tab:"style",name:"typo",title:to("Typography","digiblocks"),initialOpen:!1},wp.element.createElement(ec,{label:to("Title Typography","digiblocks"),value:f,onChange:c=>e({titleTypography:c}),defaults:{fontSize:{desktop:18,tablet:16,mobile:16},fontSizeUnit:"px",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em"}}),wp.element.createElement(ec,{label:to("Content Typography","digiblocks"),value:b,onChange:c=>e({contentTypography:c}),defaults:{fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em"}})),wp.element.createElement(Gt,{tab:"style",name:"border",title:to("Border & Shadow","digiblocks"),initialOpen:!1},wp.element.createElement(Zr,{label:to("Border Style","digiblocks"),value:T,options:Je,onChange:c=>e({borderStyle:c}),__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0}),T!=="none"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(nl,{label:to("Border Width","digiblocks")},wp.element.createElement(ca,{values:O[J],onChange:c=>e({borderWidth:{...O,[J]:c}})})),wp.element.createElement(nl,{label:to("Border Radius","digiblocks")},wp.element.createElement(ca,{values:B[J],onChange:c=>e({borderRadius:{...B,[J]:c}}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]}))),wp.element.createElement(np,{normalValue:V,hoverValue:Z,onNormalChange:c=>e({boxShadow:c}),onHoverChange:c=>e({boxShadowHover:c})})),wp.element.createElement(Gt,{tab:"style",name:"spacing",title:to("Spacing","digiblocks"),initialOpen:!1},wp.element.createElement(nl,{label:to("Padding","digiblocks")},wp.element.createElement(ca,{values:ee[J],onChange:c=>e({padding:{...ee,[J]:c}})})),wp.element.createElement(nl,{label:to("Margin","digiblocks")},wp.element.createElement(ca,{values:E[J],onChange:c=>e({margin:{...E,[J]:c}})}))));case"advanced":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Gt,{tab:"advanced",name:"animation",title:to("Animation","digiblocks"),initialOpen:!0},wp.element.createElement(Zr,{label:to("Animation","digiblocks"),value:L,options:G,onChange:c=>e({animation:c}),__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0}),L&&L!=="none"&&wp.element.createElement("div",{style:{marginTop:"10px"}},wp.element.createElement(fi,{variant:"secondary",isSecondary:!0,onClick:R,style:{width:"100%"}},to("Preview Animation","digiblocks")))),wp.element.createElement(Gt,{tab:"advanced",name:"visibility",title:to("Visibility","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control__help",style:{padding:"12px",backgroundColor:"#f0f6fc",border:"1px solid #c3ddfd",borderRadius:"4px",marginBottom:"16px"}},wp.element.createElement("strong",null,to("Editor Note:","digiblocks")),wp.element.createElement("br",null),to("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.","digiblocks")),wp.element.createElement(na,{label:to("Hide on Desktop","digiblocks"),checked:n.desktop,onChange:c=>e({visibility:{...n,desktop:c}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(na,{label:to("Hide on Tablet","digiblocks"),checked:n.tablet,onChange:c=>e({visibility:{...n,tablet:c}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(na,{label:to("Hide on Mobile","digiblocks"),checked:n.mobile,onChange:c=>e({visibility:{...n,mobile:c}}),__nextHasNoMarginBottom:!0})),wp.element.createElement(Gt,{tab:"advanced",name:"additional",title:to("Additional","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control html-anchor-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"html-anchor"},to("HTML anchor","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"html-anchor",value:P||"",onChange:c=>e({anchor:c.target.value}),"aria-describedby":"html-anchor-help",autoCapitalize:"none",autoComplete:"off"})),wp.element.createElement("p",{id:"html-anchor-help",className:"components-base-control__help"},to(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`,"digiblocks")," ",wp.element.createElement("a",{className:"components-external-link",href:"https://wordpress.org/documentation/article/page-jumps/",target:"_blank",rel:"external noreferrer noopener"},wp.element.createElement("span",{className:"components-external-link__contents"},to("Learn more about anchors","digiblocks")),wp.element.createElement("span",{className:"components-external-link__icon","aria-label":"(opens in a new tab)"},"\u2197")))),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"additional-css-classes"},to("Additional CSS class(es)","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"additional-css-classes",value:te||"",onChange:c=>e({customClasses:c.target.value}),"aria-describedby":"additional-css-classes-help",autoComplete:"off"})),wp.element.createElement("p",{id:"additional-css-classes-help",className:"components-base-control__help"},to("Separate multiple classes with spaces.","digiblocks")))));default:return null}},Q=ep({className:`digiblocks-accordion ${o} ${te||""}`,id:P||null});return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(op,null,wp.element.createElement(sp,{tabs:d,activeTab:re,onSelect:c=>{requestAnimationFrame(()=>{se(c)})}},g())),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:S()}}),wp.element.createElement("div",{...Q},wp.element.createElement("div",{className:"digiblocks-accordion-wrapper"},l.map((c,ae)=>wp.element.createElement("div",{key:c.id,className:`digiblocks-accordion-item ${c.isOpen?"is-active":""}`},wp.element.createElement("div",{className:"digiblocks-accordion-header",onClick:()=>Ee(ae)},wp.element.createElement(Yr,{tagName:"h4",className:"digiblocks-accordion-title",value:c.title,onChange:y=>qe(y,ae),placeholder:to("Accordion Title","digiblocks")}),wp.element.createElement("span",{className:"digiblocks-accordion-icon"},ce(c.isOpen))),wp.element.createElement("div",{className:"digiblocks-accordion-content",style:{display:c.isOpen?"block":"none"}},wp.element.createElement(Yr,{tagName:"div",value:c.content,onChange:y=>Ve(y,ae),placeholder:to("Add your content here.","digiblocks")})),wp.element.createElement("div",{className:"digiblocks-accordion-item-controls"},wp.element.createElement(sa,{text:to("Move Up","digiblocks")},wp.element.createElement(fi,{className:"digiblocks-accordion-item-move-up",onClick:y=>{y.stopPropagation(),Oe(ae)},icon:"arrow-up-alt2",disabled:ae===0,isSmall:!0})),wp.element.createElement(sa,{text:to("Move Down","digiblocks")},wp.element.createElement(fi,{className:"digiblocks-accordion-item-move-down",onClick:y=>{y.stopPropagation(),j(ae)},icon:"arrow-down-alt2",disabled:ae===l.length-1,isSmall:!0})),wp.element.createElement(sa,{text:to("Duplicate","digiblocks")},wp.element.createElement(fi,{className:"digiblocks-accordion-item-duplicate",onClick:y=>{y.stopPropagation(),ye(ae)},icon:"admin-page",isSmall:!0})),wp.element.createElement(sa,{text:to("Remove","digiblocks")},wp.element.createElement(fi,{className:"digiblocks-accordion-item-remove",onClick:y=>{y.stopPropagation(),Te(ae)},icon:"trash",isSmall:!0}))))),wp.element.createElement(fi,{variant:"primary",icon:"plus",onClick:me,style:{width:"100%",marginTop:"20px",justifyContent:"center"}},to("Add Accordion Item","digiblocks")))))},oc=rp;var{useBlockProps:cp,RichText:tc}=window.wp.blockEditor,dp=({attributes:ie})=>{let{id:e,anchor:X,customClasses:o,items:P,iconPosition:n,iconType:te,allowMultipleOpen:l,animation:_}=ie,v=m=>te==="plusMinus"?wp.element.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},wp.element.createElement("path",{d:m?"M19 13H5v-2h14v2z":"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"})):te==="arrowUpDown"?wp.element.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},wp.element.createElement("path",{d:m?"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z":"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z"})):null,M=["digiblocks-accordion",e,n==="left"?"icon-position-left":"icon-position-right",l?"allow-multiple-open":"single-open",_!=="none"?`animate-${_}`:"",o||""].filter(Boolean).join(" "),N=cp.save({className:M,id:X||null,"data-icon-type":te});return wp.element.createElement("div",{...N},wp.element.createElement("div",{className:"digiblocks-accordion-wrapper"},P.map(m=>wp.element.createElement("div",{key:m.id,className:`digiblocks-accordion-item ${m.isOpen?"is-active":""}`,"data-item-id":m.id},wp.element.createElement("div",{className:"digiblocks-accordion-header"},wp.element.createElement(tc.Content,{tagName:"h4",className:"digiblocks-accordion-title",value:m.title}),wp.element.createElement("span",{className:"digiblocks-accordion-icon"},v(m.isOpen))),wp.element.createElement("div",{className:"digiblocks-accordion-content",style:{display:m.isOpen?"block":"none"}},wp.element.createElement(tc.Content,{tagName:"div",value:m.content}))))))},ic=dp;var{__:Po}=window.wp.i18n,{registerBlockType:gp}=window.wp.blocks,{getBlockActiveStatus:pp}=window.wp.digiBlocks;gp("digiblocks/accordion",{apiVersion:2,title:digiBlocksData.blocks.accordion.title,category:"digiblocks",icon:{src:()=>{let{viewbox:ie,path:e}=digiBlocksData.blocks.accordion.icon;return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${ie}`,className:"digiblocks-editor-icons"},wp.element.createElement("path",{d:e}))}},description:digiBlocksData.blocks.accordion.description,keywords:[Po("accordion","digiblocks"),Po("toggle","digiblocks"),Po("collapse","digiblocks"),Po("faq","digiblocks")],supports:{inserter:!!pp("accordion"),html:!1,className:!1,customClassName:!1,anchor:!1},attributes:{id:{type:"string",default:""},anchor:{type:"string",default:""},visibility:{type:"object",default:{desktop:!1,tablet:!1,mobile:!1}},customClasses:{type:"string",default:""},items:{type:"array",default:[{id:"item-1",title:Po("Accordion Item 1","digiblocks"),content:Po("Add your content here. Edit or remove this text inline or in the module Content settings.","digiblocks"),isOpen:!0},{id:"item-2",title:Po("Accordion Item 2","digiblocks"),content:Po("Add your content here. Edit or remove this text inline or in the module Content settings.","digiblocks"),isOpen:!1}]},titleColor:{type:"string",default:"#333333"},titleHoverColor:{type:"string",default:""},titleActiveColor:{type:"string",default:"#1e73be"},backgroundColor:{type:"string",default:"#ffffff"},backgroundHoverColor:{type:"string",default:""},backgroundActiveColor:{type:"string",default:"#f7f7f7"},contentColor:{type:"string",default:"#666666"},contentHoverColor:{type:"string",default:""},borderColor:{type:"string",default:"#e0e0e0"},borderHoverColor:{type:"string",default:""},borderRadius:{type:"object",default:{desktop:{top:8,right:8,bottom:8,left:8,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderWidth:{type:"object",default:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderStyle:{type:"string",default:"solid"},boxShadow:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},boxShadowHover:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},padding:{type:"object",default:{desktop:{top:20,right:20,bottom:20,left:20,unit:"px"},tablet:{top:15,right:15,bottom:15,left:15,unit:"px"},mobile:{top:10,right:10,bottom:10,left:10,unit:"px"}}},margin:{type:"object",default:{desktop:{top:0,right:0,bottom:30,left:0,unit:"px"},tablet:{top:0,right:0,bottom:25,left:0,unit:"px"},mobile:{top:0,right:0,bottom:20,left:0,unit:"px"}}},titleTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:18,tablet:16,mobile:16},fontSizeUnit:"px",fontWeight:"600",fontStyle:"normal",textTransform:"none",textDecoration:"none",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}},contentTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",fontWeight:"",fontStyle:"normal",textTransform:"",textDecoration:"",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}},iconPosition:{type:"string",default:"right"},iconColor:{type:"string",default:"#333333"},iconHoverColor:{type:"string",default:""},iconActiveColor:{type:"string",default:"#1e73be"},iconSize:{type:"object",default:{desktop:16,tablet:14,mobile:12}},animation:{type:"string",default:"none"},allowMultipleOpen:{type:"boolean",default:!1},iconType:{type:"string",default:"plusMinus"}},example:{attributes:{items:[{id:"item-1",title:Po("Accordion Item 1","digiblocks"),content:Po("This is some sample content for the accordion item.","digiblocks"),isOpen:!0},{id:"item-2",title:Po("Accordion Item 2","digiblocks"),content:Po("Click on an accordion item to see it expand.","digiblocks"),isOpen:!1}]}},edit:oc,save:ic});var{__:co}=window.wp.i18n,{useBlockProps:bp,RichText:up,InspectorControls:mp,PanelColorSettings:lc,LinkControl:hp}=window.wp.blockEditor,{SelectControl:ac,TabPanel:nc,ToggleControl:sl,__experimentalToggleGroupControl:fp,__experimentalToggleGroupControlOption:sc}=window.wp.components,{useState:da,useEffect:rc}=window.wp.element,{useBlockId:kp,getDimensionCSS:ga}=digi.utils,{tabIcons:$n}=digi.icons,{ResponsiveControl:pa,DimensionControl:ba,BoxShadowControl:vp,TypographyControl:xp,CustomTabPanel:yp,TabPanelBody:qo,FontAwesomeControl:C1}=digi.components,Cp=({attributes:ie,setAttributes:e,clientId:X,isSelected:o})=>{let{id:P,anchor:n,visibility:te,customClasses:l,text:_,url:v,opensInNewTab:M,rel:N,iconValue:m,iconPosition:s,size:$,fill:I,textColor:C,textHoverColor:k,backgroundColor:B,backgroundHoverColor:O,borderStyle:T,borderWidth:V,borderRadius:Z,borderColor:ee,borderHoverColor:E,boxShadow:f,boxShadowHover:b,padding:D,margin:le,onlyIcon:We,buttonTypography:Se}=ie;kp(P,X,e);let[K,L]=da(window.digi.responsiveState.activeDevice),[oe,q]=da(!1),[J,A]=da(()=>{if(window.digi.uiState){let U=window.digi.uiState.getActiveTab(X);if(U)return U}return"options"}),[re,se]=da(!1);rc(()=>{let U=()=>window.digi&&window.digi.components&&window.digi.components.FontAwesomeControl?(se(!0),!0):!1;if(!U()){let me=setTimeout(()=>{U()&&clearTimeout(me)},500);return()=>clearTimeout(me)}},[]),rc(()=>window.digi.responsiveState.subscribe(me=>{L(me)}),[]);let Ce=[{label:co("Default","digiblocks"),value:"default"},{label:co("None","digiblocks"),value:"none"},{label:co("Solid","digiblocks"),value:"solid"},{label:co("Dotted","digiblocks"),value:"dotted"},{label:co("Dashed","digiblocks"),value:"dashed"},{label:co("Double","digiblocks"),value:"double"},{label:co("Groove","digiblocks"),value:"groove"},{label:co("Inset","digiblocks"),value:"inset"},{label:co("Outset","digiblocks"),value:"outset"},{label:co("Ridge","digiblocks"),value:"ridge"}],Y=[{label:co("Small","digiblocks"),value:"small"},{label:co("Medium","digiblocks"),value:"medium"},{label:co("Large","digiblocks"),value:"large"},{label:co("Custom","digiblocks"),value:"custom"}],de=[{name:"options",title:co("Options","digiblocks"),icon:$n.optionsIcon},{name:"style",title:co("Style","digiblocks"),icon:$n.styleIcon},{name:"advanced",title:co("Advanced","digiblocks"),icon:$n.advancedIcon}],He=[{name:"normal",title:co("Normal","digiblocks"),className:"digiblocks-tab-1 normal"},{name:"hover",title:co("Hover","digiblocks"),className:"digiblocks-tab-2 hover"}],be=re?window.digi.components.FontAwesomeControl:null,H=()=>{let U=K,me="";$==="custom"?me=ga(D,"padding",U):$==="small"?me="padding: 8px 16px;":$==="large"?me="padding: 16px 32px;":me="padding: 12px 24px;";let Te="";if(T&&T!=="default"&&T!=="none"){let Je=ga(V,"border-width",U)||"border-width: 1px 1px 1px 1px;";Te=`
                border-style: ${T};
                border-color: ${ee||"#333333"};
                ${Je}
            `}else Te="border: none;";let qe="";qe=ga(Z,"border-radius",U);let Ve="box-shadow: none;";f&&f.enable&&(Ve=`box-shadow: ${f.position==="inset"?"inset ":""}${f.horizontal}px ${f.vertical}px ${f.blur}px ${f.spread}px ${f.color};`);let Ee=ga(le,"margin",U),Oe="";if(b&&b.enable){let ye=b.position==="inset"?"inset ":"";Oe+=`box-shadow: ${ye}${b.horizontal}px ${b.vertical}px ${b.blur}px ${b.spread}px ${b.color};`}let j="";return Se&&(Se.fontFamily&&(j+=`font-family: ${Se.fontFamily};`),Se.fontSize&&Se.fontSize[U]&&(j+=`font-size: ${Se.fontSize[U]}${Se.fontSizeUnit||"px"};`),Se.fontWeight&&(j+=`font-weight: ${Se.fontWeight};`),Se.fontStyle&&(j+=`font-style: ${Se.fontStyle};`),Se.textTransform&&(j+=`text-transform: ${Se.textTransform};`),Se.textDecoration&&(j+=`text-decoration: ${Se.textDecoration};`),Se.lineHeight&&Se.lineHeight[U]&&(j+=`line-height: ${Se.lineHeight[U]}${Se.lineHeightUnit||"em"};`),Se.letterSpacing&&Se.letterSpacing[U]&&(j+=`letter-spacing: ${Se.letterSpacing[U]}${Se.letterSpacingUnit||"px"};`)),`
            /* Button Block - ${P} */
            .${P} {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                text-decoration: none;
                cursor: pointer;
                transition: all 0.3s ease;
                ${me}
                ${Te}
                ${qe}
                ${Ve}
                ${Ee}
                ${I?"width: 100%;":""}
                gap: 8px; /* Space between icon and text */
                ${B?`background-color: ${B};`:""}
                ${C?`color: ${C};`:""}
            }
            
            .${P}:hover {
                ${k?`color: ${k};`:""}
                ${O?`background-color: ${O};`:""}
                ${E?`border-color: ${E};`:""}
                ${Oe}
            }
            
            /* Icon styles */
            .${P} .digiblocks-button-icon {
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .${P} .digiblocks-button-icon svg {
                width: 1em;
                height: 1em;
                fill: currentColor;
            }
            
            /* Button typography */
            .${P} {
                ${j}
            }

			/* Visibility Controls */
			${te.desktop?`
				@media (min-width: 992px) {
					.${P} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${te.tablet?`
				@media (min-width: 768px) and (max-width: 991px) {
					.${P} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${te.mobile?`
				@media (max-width: 767px) {
					.${P} {
						opacity: 0.5 !important;
					}
				}
			`:""}
        `},xe=()=>{let U=m&&m.svg?wp.element.createElement("span",{key:"icon",className:"digiblocks-button-icon",dangerouslySetInnerHTML:{__html:m.svg}}):null,me=We?null:wp.element.createElement(up,{key:"text",value:_,onChange:Te=>e({text:Te}),placeholder:co("Add text\u2026","digiblocks"),allowedFormats:[],withoutInteractiveFormatting:!0,identifier:"text"});return s==="left"?[U,me].filter(Boolean):[me,U].filter(Boolean)},x=()=>{switch(J){case"options":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(qo,{tab:"options",name:"icon",title:co("Icon","digiblocks"),initialOpen:!0},re?wp.element.createElement(be,{label:co("Select Icon","digiblocks"),value:m,onChange:U=>e({iconValue:U})}):wp.element.createElement("div",{style:{textAlign:"center",padding:"20px 0"}},wp.element.createElement("div",{className:"components-spinner"}),wp.element.createElement("p",null,co("Loading icon selector...","digiblocks"))),m&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(sl,{label:co("Only Icon","digiblocks"),checked:We,onChange:U=>e({onlyIcon:U}),__nextHasNoMarginBottom:!0}),!We&&wp.element.createElement(fp,{label:co("Icon Position","digiblocks"),value:s,onChange:U=>e({iconPosition:U}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(sc,{value:"left",label:co("Left","digiblocks")}),wp.element.createElement(sc,{value:"right",label:co("Right","digiblocks")})))),wp.element.createElement(qo,{tab:"options",name:"link",title:co("Link","digiblocks"),initialOpen:!1},wp.element.createElement(hp,{value:v?{url:v,opensInNewTab:M,rel:N}:void 0,onChange:U=>{e({url:U.url,opensInNewTab:U.opensInNewTab,rel:U.rel||""}),q(!1)},settings:[{id:"opensInNewTab",title:co("Open in new tab")},{id:"rel",title:co("Add noopener noreferrer")}],onRemove:()=>{e({url:"",opensInNewTab:!1,rel:""}),q(!1)}})),wp.element.createElement(qo,{tab:"options",name:"size",title:co("Size and Fill","digiblocks"),initialOpen:!1},wp.element.createElement(ac,{label:co("Size","digiblocks"),value:$,options:Y,onChange:U=>e({size:U}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(sl,{label:co("Expand to Container Width","digiblocks"),checked:I,onChange:U=>e({fill:U}),__nextHasNoMarginBottom:!0})));case"style":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(qo,{tab:"style",name:"typography",title:co("Typography","digiblocks"),initialOpen:!0},wp.element.createElement(xp,{label:co("Button Typography","digiblocks"),value:Se,onChange:U=>e({buttonTypography:U}),defaults:{fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em"}})),wp.element.createElement(qo,{tab:"style",name:"colors",title:co("Colors","digiblocks"),initialOpen:!0},wp.element.createElement(nc,{className:"digiblocks-control-tabs",activeClass:"active-tab",tabs:He},U=>wp.element.createElement(lc,{title:U.name==="normal"?co("Normal Colors","digiblocks"):co("Hover Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:U.name==="normal"?C:k,onChange:me=>e(U.name==="normal"?{textColor:me}:{textHoverColor:me}),label:co("Text Color","digiblocks")},{value:U.name==="normal"?B:O,onChange:me=>e(U.name==="normal"?{backgroundColor:me}:{backgroundHoverColor:me}),label:co("Background Color","digiblocks")}]}))),$==="custom"&&wp.element.createElement(qo,{tab:"style",name:"spacing",title:co("Spacing","digiblocks"),initialOpen:!1},wp.element.createElement(pa,{label:co("Padding","digiblocks")},wp.element.createElement(ba,{values:D[K],onChange:U=>e({padding:{...D,[K]:U}})}))),wp.element.createElement(qo,{tab:"style",name:"margin",title:co("Margin","digiblocks"),initialOpen:!1},wp.element.createElement(pa,{label:co("Margin","digiblocks")},wp.element.createElement(ba,{values:le[K],onChange:U=>e({margin:{...le,[K]:U}})}))),wp.element.createElement(qo,{tab:"style",name:"box-style",title:co("Box Style","digiblocks"),initialOpen:!1},wp.element.createElement(ac,{label:co("Border Style","digiblocks"),value:T||"default",options:Ce,onChange:U=>{U!=="default"&&U!=="none"&&(T==="default"||T==="none"||!T)&&(!V||Object.keys(V).length===0)&&e({borderWidth:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}}),e({borderStyle:U})},__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),T&&T!=="default"&&T!=="none"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(nc,{className:"digiblocks-control-tabs",activeClass:"active-tab",tabs:He},U=>wp.element.createElement(lc,{title:co("Border Colors","digiblocks"),enableAlpha:!0,colorSettings:[{value:U.name==="normal"?ee:E,onChange:me=>e(U.name==="normal"?{borderColor:me}:{borderHoverColor:me}),label:co("Border Color","digiblocks")}]})),wp.element.createElement(pa,{label:co("Border Width","digiblocks")},wp.element.createElement(ba,{values:V[K],onChange:U=>e({borderWidth:{...V,[K]:U}})}))),wp.element.createElement(pa,{label:co("Border Radius","digiblocks")},wp.element.createElement(ba,{values:Z[K],onChange:U=>e({borderRadius:{...Z,[K]:U}}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]}))),wp.element.createElement(qo,{tab:"style",name:"shadow",title:co("Box Shadow","digiblocks"),initialOpen:!1},wp.element.createElement(vp,{normalValue:f,hoverValue:b,onNormalChange:U=>e({boxShadow:U}),onHoverChange:U=>e({boxShadowHover:U})})));case"advanced":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(qo,{tab:"advanced",name:"visibility",title:co("Visibility","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control__help",style:{padding:"12px",backgroundColor:"#f0f6fc",border:"1px solid #c3ddfd",borderRadius:"4px",marginBottom:"16px"}},wp.element.createElement("strong",null,co("Editor Note:","digiblocks")),wp.element.createElement("br",null),co("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.","digiblocks")),wp.element.createElement(sl,{label:co("Hide on Desktop","digiblocks"),checked:te.desktop,onChange:U=>e({visibility:{...te,desktop:U}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(sl,{label:co("Hide on Tablet","digiblocks"),checked:te.tablet,onChange:U=>e({visibility:{...te,tablet:U}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(sl,{label:co("Hide on Mobile","digiblocks"),checked:te.mobile,onChange:U=>e({visibility:{...te,mobile:U}}),__nextHasNoMarginBottom:!0})),wp.element.createElement(qo,{tab:"advanced",name:"additional",title:co("Additional","digiblocks"),initialOpen:!0},wp.element.createElement("div",{className:"components-base-control html-anchor-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"html-anchor"},co("HTML anchor","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"html-anchor",value:n||"",onChange:U=>e({anchor:U.target.value}),"aria-describedby":"html-anchor-help",autoCapitalize:"none",autoComplete:"off"})),wp.element.createElement("p",{id:"html-anchor-help",className:"components-base-control__help"},co(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`,"digiblocks")," ",wp.element.createElement("a",{className:"components-external-link",href:"https://wordpress.org/documentation/article/page-jumps/",target:"_blank",rel:"external noreferrer noopener"},wp.element.createElement("span",{className:"components-external-link__contents"},co("Learn more about anchors","digiblocks")),wp.element.createElement("span",{className:"components-external-link__icon","aria-label":"(opens in a new tab)"},"\u2197")))),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"additional-css-classes"},co("Additional CSS class(es)","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"additional-css-classes",value:l||"",onChange:U=>e({customClasses:U.target.value}),"aria-describedby":"additional-css-classes-help",autoComplete:"off"})),wp.element.createElement("p",{id:"additional-css-classes-help",className:"components-base-control__help"},co("Separate multiple classes with spaces.","digiblocks")))));default:return null}},ve=bp({className:`digiblocks-button ${P} ${$} ${I?"is-fill":""} ${l||""}`,id:n||null});return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(mp,null,wp.element.createElement(yp,{tabs:de,activeTab:J,onSelect:A},x())),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:H()}}),wp.element.createElement("div",{...ve},xe()))},cc=Cp;var{useBlockProps:dc,RichText:Sp}=window.wp.blockEditor,$p=({attributes:ie})=>{let{id:e,anchor:X,customClasses:o,text:P,url:n,opensInNewTab:te,rel:l,iconValue:_,iconPosition:v,size:M,fill:N,onlyIcon:m}=ie,s=["digiblocks-button",e,M,N?"is-fill":"",o||""].filter(Boolean).join(" "),$=wp.element.createElement(wp.element.Fragment,null,_&&_.svg&&v==="left"&&wp.element.createElement("span",{className:"digiblocks-button-icon",dangerouslySetInnerHTML:{__html:_.svg}}),!m&&wp.element.createElement(Sp.Content,{value:P}),_&&_.svg&&v==="right"&&wp.element.createElement("span",{className:"digiblocks-button-icon",dangerouslySetInnerHTML:{__html:_.svg}}));return n?wp.element.createElement("a",{...dc.save({className:s,id:X||null,href:n,target:te?"_blank":void 0,rel:l?"noopener noreferrer":void 0})},$):wp.element.createElement("div",{...dc.save({className:s,id:X||null})},$)},gc=$p;var{__:ua}=window.wp.i18n,{registerBlockType:_p}=window.wp.blocks;_p("digiblocks/button",{apiVersion:2,title:ua("Button","digiblocks"),parent:["digiblocks/buttons"],icon:{src:()=>wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24"},wp.element.createElement("path",{d:"M19 6.5H5c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7c0-1.1-.9-2-2-2zm0 9H5v-7h14v7z"}))},description:ua("A single button within the buttons block","digiblocks"),supports:{inserter:!1,html:!1,className:!1,customClassName:!1,anchor:!1,reusable:!1},attributes:{id:{type:"string",default:""},anchor:{type:"string",default:""},visibility:{type:"object",default:{desktop:!1,tablet:!1,mobile:!1}},customClasses:{type:"string",default:""},text:{type:"string",default:ua("Button","digiblocks")},url:{type:"string",default:""},opensInNewTab:{type:"boolean",default:!1},rel:{type:"boolean",default:!1},iconValue:{type:"object",default:null},iconPosition:{type:"string",default:"left"},size:{type:"string",default:"medium"},fill:{type:"boolean",default:!1},buttonTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",fontWeight:"",fontStyle:"normal",textTransform:"",textDecoration:"",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}},textColor:{type:"string",default:"#ffffff"},textHoverColor:{type:"string",default:""},backgroundColor:{type:"string",default:"#1e73be"},backgroundHoverColor:{type:"string",default:""},borderStyle:{type:"string",default:"default"},borderWidth:{type:"object",default:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderRadius:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderColor:{type:"string",default:""},borderHoverColor:{type:"string",default:""},boxShadow:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},boxShadowHover:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},padding:{type:"object",default:{desktop:{top:12,right:24,bottom:12,left:24,unit:"px"},tablet:{top:10,right:20,bottom:10,left:20,unit:"px"},mobile:{top:8,right:16,bottom:8,left:16,unit:"px"}}},margin:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},onlyIcon:{type:"boolean",default:!1}},example:{attributes:{text:ua("Button","digiblocks"),backgroundColor:"#1e73be",textColor:"#ffffff"}},edit:cc,save:gc});var{__:fo}=window.wp.i18n,{useBlockProps:Bp,useInnerBlocksProps:Tp,InspectorControls:Np}=window.wp.blockEditor,{SelectControl:Hp,RangeControl:zp,ToggleControl:_n,Button:Mp,__experimentalToggleGroupControl:pc,__experimentalToggleGroupControlOption:rl}=window.wp.components,{useState:bc,useEffect:Dp}=window.wp.element,{useBlockId:Pp,animations:Rp,animationPreview:B1}=digi.utils,{tabIcons:uc}=digi.icons,{ResponsiveControl:Ip,CustomTabPanel:Lp,TabPanelBody:Bn}=digi.components,Op=({attributes:ie,setAttributes:e,clientId:X})=>{let{id:o,anchor:P,visibility:n,customClasses:te,layout:l,align:_,buttonSpacing:v,animation:M}=ie,[N,m]=bc(window.digi.responsiveState.activeDevice),[s,$]=bc(()=>{if(window.digi.uiState){let ee=window.digi.uiState.getActiveTab(X);if(ee)return ee}return"options"});Dp(()=>window.digi.responsiveState.subscribe(E=>{m(E)}),[]),Pp(o,X,e);let I=[{label:fo("None","digiblocks"),value:"none"},...Object.keys(Rp).map(ee=>({label:ee.replace(/-/g," ").replace(/\b\w/g,E=>E.toUpperCase()),value:ee}))],C=[{name:"options",title:fo("Options","digiblocks"),icon:uc.optionsIcon},{name:"advanced",title:fo("Advanced","digiblocks"),icon:uc.advancedIcon}],k=()=>{let ee=window.digi.responsiveState.activeDevice;return`
            /* Buttons Block - ${o} */
            .${o} {
                display: flex;
                flex-wrap: wrap;
                ${l==="vertical"?"flex-direction: column;":""}
                align-items: ${_};
                gap: ${v[ee]}px;
                transition: all 0.3s ease;
            }

			/* Editor Style */
			.digiblocks-button-inserter {
				display: flex;
				position: absolute;
				bottom: 0;
				right: 0;
			}

			/* Visibility Controls */
			${n.desktop?`
				@media (min-width: 992px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${n.tablet?`
				@media (min-width: 768px) and (max-width: 991px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${n.mobile?`
				@media (max-width: 767px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}
        `},B=()=>{switch(s){case"options":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:"components-panel__body is-opened"},wp.element.createElement(pc,{label:fo("Layout","digiblocks"),value:l,onChange:ee=>e({layout:ee}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(rl,{value:"horizontal",label:fo("Horizontal","digiblocks")}),wp.element.createElement(rl,{value:"vertical",label:fo("Vertical","digiblocks")})),wp.element.createElement(pc,{label:fo("Alignment","digiblocks"),value:_,onChange:ee=>e({align:ee}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(rl,{value:"flex-start",label:fo(l==="horizontal"?"Top":"Left","digiblocks")}),wp.element.createElement(rl,{value:"center",label:fo("Center","digiblocks")}),wp.element.createElement(rl,{value:"flex-end",label:fo(l==="horizontal"?"Bottom":"Right","digiblocks")})),wp.element.createElement(Ip,{label:fo("Button Spacing","digiblocks")},wp.element.createElement(zp,{value:v[N],onChange:ee=>e({buttonSpacing:{...v,[N]:ee}}),min:0,max:50,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}))));case"advanced":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Bn,{tab:"advanced",name:"animation",title:fo("Animation","digiblocks"),initialOpen:!0},wp.element.createElement(Hp,{label:fo("Animation Effect","digiblocks"),value:M,options:I,onChange:ee=>e({animation:ee}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(Bn,{tab:"advanced",name:"visibility",title:fo("Visibility","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control__help",style:{padding:"12px",backgroundColor:"#f0f6fc",border:"1px solid #c3ddfd",borderRadius:"4px",marginBottom:"16px"}},wp.element.createElement("strong",null,fo("Editor Note:","digiblocks")),wp.element.createElement("br",null),fo("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.","digiblocks")),wp.element.createElement(_n,{label:fo("Hide on Desktop","digiblocks"),checked:n.desktop,onChange:ee=>e({visibility:{...n,desktop:ee}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(_n,{label:fo("Hide on Tablet","digiblocks"),checked:n.tablet,onChange:ee=>e({visibility:{...n,tablet:ee}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(_n,{label:fo("Hide on Mobile","digiblocks"),checked:n.mobile,onChange:ee=>e({visibility:{...n,mobile:ee}}),__nextHasNoMarginBottom:!0})),wp.element.createElement(Bn,{tab:"advanced",name:"additional",title:fo("Additional","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control html-anchor-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"html-anchor"},fo("HTML anchor","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"html-anchor",value:P||"",onChange:ee=>e({anchor:ee.target.value}),"aria-describedby":"html-anchor-help",autoCapitalize:"none",autoComplete:"off"})),wp.element.createElement("p",{id:"html-anchor-help",className:"components-base-control__help"},fo(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`,"digiblocks")," ",wp.element.createElement("a",{className:"components-external-link",href:"https://wordpress.org/documentation/article/page-jumps/",target:"_blank",rel:"external noreferrer noopener"},wp.element.createElement("span",{className:"components-external-link__contents"},fo("Learn more about anchors","digiblocks")),wp.element.createElement("span",{className:"components-external-link__icon","aria-label":"(opens in a new tab)"},"\u2197")))),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"additional-css-classes"},fo("Additional CSS class(es)","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"additional-css-classes",value:te||"",onChange:ee=>e({customClasses:ee.target.value}),"aria-describedby":"additional-css-classes-help",autoComplete:"off"})),wp.element.createElement("p",{id:"additional-css-classes-help",className:"components-base-control__help"},fo("Separate multiple classes with spaces.","digiblocks")))));default:return null}},O=Bp({className:`digiblocks-buttons-block ${o} ${te||""}`,id:P||null}),Z=Tp(O,{allowedBlocks:["digiblocks/button"],template:[["digiblocks/button",{}]],renderAppender:!1,orientation:l==="vertical"?"vertical":"horizontal"});return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Np,null,wp.element.createElement(Lp,{tabs:C,activeTab:s,onSelect:$},B())),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:k()}}),wp.element.createElement("div",{...Z},Z.children,wp.element.createElement("div",{className:"digiblocks-button-inserter"},wp.element.createElement(Mp,{variant:"primary",isSmall:!0,icon:"plus",onClick:()=>{let ee=window.wp.blocks.createBlock("digiblocks/button");window.wp.data.dispatch("core/block-editor").insertBlock(ee,void 0,X)}},fo("Add","digiblocks")))))},mc=Op;var{useBlockProps:Up,useInnerBlocksProps:jp}=window.wp.blockEditor,Vp=({attributes:ie})=>{let{id:e,anchor:X,customClasses:o,animation:P}=ie,n=["digiblocks-buttons-block",e,P!=="none"?`animate-${P}`:"",o||""].filter(Boolean).join(" "),te=Up.save({className:n,id:X||null}),l=jp.save(te);return wp.element.createElement("div",{...l})},hc=Vp;var{__:cl}=window.wp.i18n,{registerBlockType:Fp}=window.wp.blocks,{getBlockActiveStatus:Ep}=window.wp.digiBlocks;Fp("digiblocks/buttons",{apiVersion:2,title:digiBlocksData.blocks.buttons.title,category:"digiblocks",icon:{src:()=>{let{viewbox:ie,path:e}=digiBlocksData.blocks.buttons.icon;return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${ie}`,className:"digiblocks-editor-icons"},wp.element.createElement("path",{d:e}))}},description:digiBlocksData.blocks.buttons.description,keywords:[cl("buttons","digiblocks"),cl("button group","digiblocks"),cl("link","digiblocks")],supports:{inserter:!!Ep("buttons"),html:!1,className:!1,customClassName:!1,anchor:!1},attributes:{id:{type:"string",default:""},anchor:{type:"string",default:""},visibility:{type:"object",default:{desktop:!1,tablet:!1,mobile:!1}},customClasses:{type:"string",default:""},layout:{type:"string",default:"horizontal"},align:{type:"string",default:"flex-start"},buttonSpacing:{type:"object",default:{desktop:10,tablet:8,mobile:6}},animation:{type:"string",default:"none"}},example:{innerBlocks:[{name:"digiblocks/button",attributes:{text:cl("Call to Action","digiblocks")}},{name:"digiblocks/button",attributes:{text:cl("Learn More","digiblocks")}}]},edit:mc,save:hc});var{__:ne}=window.wp.i18n,{useBlockProps:Wp,RichText:ki,InspectorControls:qp,PanelColorSettings:Go,BlockControls:Gp,AlignmentToolbar:Qp,MediaUpload:Tn,MediaUploadCheck:Nn}=window.wp.blockEditor,{SelectControl:Qt,RangeControl:Hn,ToggleControl:it,Button:Jt,__experimentalToggleGroupControl:zn,__experimentalToggleGroupControlOption:Mn,TabPanel:Jp,TextControl:ma,BaseControl:fc}=window.wp.components,{useState:Dn,useEffect:Pn,useRef:Yp}=window.wp.element,{useBlockId:Zp,getDimensionCSS:Co,animations:Rn,animationPreview:kc}=digi.utils,{tabIcons:In}=digi.icons,{ResponsiveControl:Nt,DimensionControl:vi,TypographyControl:Ln,BoxShadowControl:Kp,CustomTabPanel:Xp,TabPanelBody:Ro}=digi.components,Ap=({attributes:ie,setAttributes:e,clientId:X})=>{let{id:o,anchor:P,visibility:n,customClasses:te,style:l,horizontalLayout:_,title:v,content:M,headingTag:N,titleColor:m,textColor:s,buttonColor:$,buttonTextColor:I,backgroundColor:C,backgroundType:k,backgroundImage:B,backgroundOverlayColor:O,backgroundOverlayOpacity:T,backgroundPosition:V,backgroundSize:Z,backgroundRepeat:ee,borderStyle:E,borderWidth:f,borderRadius:b,borderColor:D,padding:le,margin:We,align:Se,titleTypography:K,contentTypography:L,buttonTypography:oe,contentWidth:q,width:J,animation:A,boxShadow:re,boxShadowHover:se,buttonBorderRadius:Ce,buttonPadding:Y,buttonsAlign:de,buttons:He,titleHoverColor:be,textHoverColor:H,buttonHoverColor:xe,buttonTextHoverColor:x,backgroundHoverColor:ve,highlightText:U,highlightColor:me,highlightType:Te,verticalAlign:qe,reverseColumnsMobile:Ve,minHeight:Ee}=ie,[Oe,j]=Dn(window.digi.responsiveState.activeDevice),[ye,Je]=Dn(!1);Pn(()=>window.digi.responsiveState.subscribe(F=>{j(F)}),[]);let[G,pe]=Dn(()=>{if(window.digi.uiState){let i=window.digi.uiState.getActiveTab(X);if(i)return i}return"options"});Zp(o,X,e),Pn(()=>{(!He||!Array.isArray(He)||He.length===0)&&e({buttons:[{id:"button-1",text:ne("Click Here","digiblocks"),url:"#",openInNewTab:!1,rel:"",isPrimary:!0,isFullWidth:!1,customColors:!1,backgroundColor:"",textColor:"",hoverBackgroundColor:"",hoverTextColor:"",borderRadius:""}]}),K||e({titleTypography:{fontFamily:"",fontSize:{desktop:36,tablet:32,mobile:28},fontSizeUnit:"px",fontWeight:"700",fontStyle:"normal",textTransform:"none",textDecoration:"none",lineHeight:{desktop:1.2,tablet:1.2,mobile:1.2},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}}),L||e({contentTypography:{fontFamily:"",fontSize:{desktop:18,tablet:16,mobile:16},fontSizeUnit:"px",fontWeight:"400",fontStyle:"normal",textTransform:"none",textDecoration:"none",lineHeight:{desktop:1.6,tablet:1.6,mobile:1.5},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}}),oe||e({buttonTypography:{fontFamily:"",fontSize:{desktop:16,tablet:16,mobile:16},fontSizeUnit:"px",fontWeight:"500",fontStyle:"normal",textTransform:"none",textDecoration:"none",lineHeight:{desktop:1.5,tablet:1.5,mobile:1.5},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}}),se||e({boxShadowHover:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}})},[He,K,L,oe,se,e]);let R=Yp(null);Pn(()=>{if(A&&A!=="none"){let i=setTimeout(()=>{kc(o,A,Rn,R)},100);return()=>clearTimeout(i)}},[A]);let d=()=>{kc(o,A,Rn,R)},ce=[{label:ne("None","digiblocks"),value:"none"},{label:ne("Solid","digiblocks"),value:"solid"},{label:ne("Dotted","digiblocks"),value:"dotted"},{label:ne("Dashed","digiblocks"),value:"dashed"},{label:ne("Double","digiblocks"),value:"double"},{label:ne("Groove","digiblocks"),value:"groove"},{label:ne("Ridge","digiblocks"),value:"ridge"},{label:ne("Inset","digiblocks"),value:"inset"},{label:ne("Outset","digiblocks"),value:"outset"}],S=[{label:ne("None","digiblocks"),value:"none"},...Object.keys(Rn).map(i=>({label:i.replace(/-/g," ").replace(/\b\w/g,F=>F.toUpperCase()),value:i}))],g=[{label:ne("Basic","digiblocks"),value:"basic"},{label:ne("Split","digiblocks"),value:"split"},{label:ne("Cover","digiblocks"),value:"cover"},{label:ne("Box","digiblocks"),value:"box"},{label:ne("Modern","digiblocks"),value:"modern"},{label:ne("Gradient","digiblocks"),value:"gradient"},{label:ne("Minimal","digiblocks"),value:"minimal"},{label:ne("Callout","digiblocks"),value:"callout"},{label:ne("Banner","digiblocks"),value:"banner"}],Q=[{label:"H1",value:"h1"},{label:"H2",value:"h2"},{label:"H3",value:"h3"},{label:"H4",value:"h4"},{label:"H5",value:"h5"},{label:"H6",value:"h6"}],c=[{label:ne("Color","digiblocks"),value:"color"},{label:ne("Image","digiblocks"),value:"image"},{label:ne("Gradient","digiblocks"),value:"gradient"}],ae=[{label:ne("Center Center","digiblocks"),value:"center center"},{label:ne("Center Top","digiblocks"),value:"center top"},{label:ne("Center Bottom","digiblocks"),value:"center bottom"},{label:ne("Left Top","digiblocks"),value:"left top"},{label:ne("Left Center","digiblocks"),value:"left center"},{label:ne("Left Bottom","digiblocks"),value:"left bottom"},{label:ne("Right Top","digiblocks"),value:"right top"},{label:ne("Right Center","digiblocks"),value:"right center"},{label:ne("Right Bottom","digiblocks"),value:"right bottom"}],y=[{label:ne("Cover","digiblocks"),value:"cover"},{label:ne("Contain","digiblocks"),value:"contain"},{label:ne("Auto","digiblocks"),value:"auto"}],u=[{label:ne("No Repeat","digiblocks"),value:"no-repeat"},{label:ne("Repeat","digiblocks"),value:"repeat"},{label:ne("Repeat X","digiblocks"),value:"repeat-x"},{label:ne("Repeat Y","digiblocks"),value:"repeat-y"}],Ne=[{label:ne("Left","digiblocks"),value:"left"},{label:ne("Center","digiblocks"),value:"center"},{label:ne("Right","digiblocks"),value:"right"}],a=[{label:ne("Top","digiblocks"),value:"flex-start"},{label:ne("Center","digiblocks"),value:"center"},{label:ne("Bottom","digiblocks"),value:"flex-end"}],ue=[{label:ne("None","digiblocks"),value:"none"},{label:ne("Background","digiblocks"),value:"background"},{label:ne("Text","digiblocks"),value:"text"},{label:ne("Underline","digiblocks"),value:"underline"}],Fe={width:300,height:200},eo=[{name:"options",title:ne("Options","digiblocks"),icon:In.optionsIcon},{name:"style",title:ne("Style","digiblocks"),icon:In.styleIcon},{name:"advanced",title:ne("Advanced","digiblocks"),icon:In.advancedIcon}],ao=[{name:"normal",title:ne("Normal","digiblocks"),className:"digiblocks-tab-1 normal"},{name:"hover",title:ne("Hover","digiblocks"),className:"digiblocks-tab-2 hover"}],go=()=>{let i=`button-${He.length+1}`,F=[...He,{id:i,text:ne("Click Here","digiblocks"),url:"#",openInNewTab:!1,rel:"",isPrimary:!1,isFullWidth:!1,customColors:!1,backgroundColor:"",textColor:"",hoverBackgroundColor:"",hoverTextColor:"",borderRadius:""}];e({buttons:F})},t=i=>{let F=He.filter(Ue=>Ue.id!==i);e({buttons:F})},p=(i,F,Ue)=>{let po=He.map(z=>z.id===i?{...z,[F]:Ue}:z);e({buttons:po})},De=i=>{let F=l===i.value,Ue={display:"inline-flex",flexDirection:"column",width:"70px",height:"70px",margin:"5px",border:`1px solid ${F?"#007cba":"#ddd"}`,backgroundColor:F?"rgba(0,124,186,0.1)":"white",borderRadius:"4px",cursor:"pointer",overflow:"hidden",transition:"all 0.2s ease"},po={textAlign:"center",fontSize:"10px",padding:"3px 0",fontWeight:F?"500":"normal",borderBottom:`1px solid ${F?"#e0e0e0":"transparent"}`,backgroundColor:F?"rgba(0,124,186,0.05)":"transparent"},z={flex:1,display:"flex",justifyContent:"center",alignItems:"center",padding:"8px"},Ke=null;switch(i.value){case"basic":Ke=wp.element.createElement("div",{style:{width:"100%",height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}},wp.element.createElement("div",{style:{width:"80%",height:"4px",backgroundColor:"#333",marginBottom:"4px"}}),wp.element.createElement("div",{style:{width:"60%",height:"2px",backgroundColor:"#777",marginBottom:"6px"}}),wp.element.createElement("div",{style:{width:"40%",height:"6px",backgroundColor:"#007cba",borderRadius:"2px"}}));break;case"split":Ke=wp.element.createElement("div",{style:{width:"100%",height:"100%",display:"flex"}},wp.element.createElement("div",{style:{width:"50%",height:"100%",backgroundColor:"#007cba",display:"flex",alignItems:"center",justifyContent:"center"}},wp.element.createElement("div",{style:{width:"70%",height:"70%",backgroundColor:"#fff",opacity:.2}})),wp.element.createElement("div",{style:{width:"50%",height:"100%",backgroundColor:"#f5f5f5",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"2px"}},wp.element.createElement("div",{style:{width:"80%",height:"3px",backgroundColor:"#333",marginBottom:"2px"}}),wp.element.createElement("div",{style:{width:"60%",height:"2px",backgroundColor:"#777",marginBottom:"3px"}}),wp.element.createElement("div",{style:{width:"40%",height:"4px",backgroundColor:"#007cba",borderRadius:"2px"}})));break;case"cover":Ke=wp.element.createElement("div",{style:{width:"100%",height:"100%",backgroundColor:"#007cba",opacity:.7,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}},wp.element.createElement("div",{style:{width:"70%",height:"3px",backgroundColor:"#fff",marginBottom:"3px"}}),wp.element.createElement("div",{style:{width:"50%",height:"2px",backgroundColor:"#fff",marginBottom:"4px"}}),wp.element.createElement("div",{style:{width:"30%",height:"4px",backgroundColor:"#fff",borderRadius:"2px"}}));break;case"box":Ke=wp.element.createElement("div",{style:{width:"90%",height:"90%",margin:"auto",border:"2px solid #007cba",borderRadius:"3px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"3px"}},wp.element.createElement("div",{style:{width:"70%",height:"3px",backgroundColor:"#333",marginBottom:"3px"}}),wp.element.createElement("div",{style:{width:"50%",height:"2px",backgroundColor:"#777",marginBottom:"4px"}}),wp.element.createElement("div",{style:{width:"30%",height:"4px",backgroundColor:"#007cba",borderRadius:"2px"}}));break;case"modern":Ke=wp.element.createElement("div",{style:{width:"100%",height:"100%",display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"center",padding:"3px",position:"relative"}},wp.element.createElement("div",{style:{position:"absolute",left:"0",top:"20%",width:"5px",height:"60%",backgroundColor:"#007cba"}}),wp.element.createElement("div",{style:{width:"70%",height:"3px",backgroundColor:"#333",marginBottom:"3px",marginLeft:"8px"}}),wp.element.createElement("div",{style:{width:"50%",height:"2px",backgroundColor:"#777",marginBottom:"4px",marginLeft:"8px"}}),wp.element.createElement("div",{style:{width:"30%",height:"4px",backgroundColor:"#007cba",borderRadius:"2px",marginLeft:"8px"}}));break;case"gradient":Ke=wp.element.createElement("div",{style:{width:"100%",height:"100%",background:"linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}},wp.element.createElement("div",{style:{width:"70%",height:"3px",backgroundColor:"#fff",marginBottom:"3px"}}),wp.element.createElement("div",{style:{width:"50%",height:"2px",backgroundColor:"#fff",marginBottom:"4px"}}),wp.element.createElement("div",{style:{width:"30%",height:"4px",backgroundColor:"#fff",borderRadius:"2px"}}));break;case"minimal":Ke=wp.element.createElement("div",{style:{width:"100%",height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"3px"}},wp.element.createElement("div",{style:{width:"70%",height:"3px",backgroundColor:"#333",marginBottom:"3px"}}),wp.element.createElement("div",{style:{width:"50%",height:"2px",backgroundColor:"#777",marginBottom:"4px"}}),wp.element.createElement("div",{style:{width:"30%",height:"1px",backgroundColor:"#007cba",marginBottom:"1px"}}),wp.element.createElement("div",{style:{width:"30%",height:"4px",backgroundColor:"#007cba",borderRadius:"2px"}}));break;case"callout":Ke=wp.element.createElement("div",{style:{width:"100%",height:"100%",backgroundColor:"#fff",border:"1px solid #eee",borderLeft:"5px solid #007cba",display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"center",padding:"5px"}},wp.element.createElement("div",{style:{width:"70%",height:"3px",backgroundColor:"#333",marginBottom:"3px"}}),wp.element.createElement("div",{style:{width:"50%",height:"2px",backgroundColor:"#777",marginBottom:"4px"}}),wp.element.createElement("div",{style:{width:"30%",height:"4px",backgroundColor:"#007cba",borderRadius:"2px"}}));break;case"banner":Ke=wp.element.createElement("div",{style:{width:"100%",height:"100%",display:"flex",flexDirection:"column",backgroundColor:"#f0f7ff",position:"relative"}},wp.element.createElement("div",{style:{height:"4px",width:"100%",backgroundColor:"#007cba"}}),wp.element.createElement("div",{style:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"3px"}},wp.element.createElement("div",{style:{width:"70%",height:"3px",backgroundColor:"#333",marginBottom:"3px"}}),wp.element.createElement("div",{style:{width:"50%",height:"2px",backgroundColor:"#777",marginBottom:"4px"}}),wp.element.createElement("div",{style:{width:"30%",height:"4px",backgroundColor:"#007cba",borderRadius:"2px"}})));break;default:Ke=wp.element.createElement("div",{style:{width:"100%",height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}},wp.element.createElement("div",{style:{width:"80%",height:"4px",backgroundColor:"#333",marginBottom:"4px"}}),wp.element.createElement("div",{style:{width:"60%",height:"2px",backgroundColor:"#777",marginBottom:"6px"}}),wp.element.createElement("div",{style:{width:"40%",height:"6px",backgroundColor:"#007cba",borderRadius:"2px"}}))}return wp.element.createElement("div",{style:Ue,onClick:()=>e({style:i.value})},wp.element.createElement("div",{style:po},i.label),wp.element.createElement("div",{style:z},Ke))},r=()=>{let i=window.digi.responsiveState.activeDevice,F="";if(E&&E!=="none"){let ta=Co(f,"border-width",i)||"border-width: 1px 1px 1px 1px;";F=`
				border-style: ${E};
				border-color: ${D||"#e0e0e0"};
				${ta}
			`}else F="border-style: none;";let Ue="box-shadow: none;";re&&re.enable&&(Ue=`box-shadow: ${re.position==="inset"?"inset ":""}${re.horizontal}px ${re.vertical}px ${re.blur}px ${re.spread}px ${re.color};`);let po="";k==="color"?po=`background-color: ${C||"#f5f5f5"};`:k==="image"&&B&&B.url?po=`
                background-image: url(${B.url});
                background-position: ${V||"center center"};
                background-size: ${Z||"cover"};
                background-repeat: ${ee||"no-repeat"};
            `:k==="gradient"&&(po=`background: linear-gradient(135deg, ${C||"#6a11cb"} 0%, ${ve||"#2575fc"} 100%);`);let z=Ee&&Ee[i]?`min-height: ${Ee[i]}px;`:"",Ke="";K&&(K.fontFamily&&(Ke+=`font-family: ${K.fontFamily};`),K.fontSize&&K.fontSize[i]&&(Ke+=`font-size: ${K.fontSize[i]}${K.fontSizeUnit||"px"};`),K.fontWeight&&(Ke+=`font-weight: ${K.fontWeight};`),K.fontStyle&&(Ke+=`font-style: ${K.fontStyle};`),K.textTransform&&(Ke+=`text-transform: ${K.textTransform};`),K.textDecoration&&(Ke+=`text-decoration: ${K.textDecoration};`),K.lineHeight&&K.lineHeight[i]&&(Ke+=`line-height: ${K.lineHeight[i]}${K.lineHeightUnit||"em"};`),K.letterSpacing&&K.letterSpacing[i]&&(Ke+=`letter-spacing: ${K.letterSpacing[i]}${K.letterSpacingUnit||"px"};`));let ro="";L&&(L.fontFamily&&(ro+=`font-family: ${L.fontFamily};`),L.fontSize&&L.fontSize[i]&&(ro+=`font-size: ${L.fontSize[i]}${L.fontSizeUnit||"px"};`),L.fontWeight&&(ro+=`font-weight: ${L.fontWeight};`),L.fontStyle&&(ro+=`font-style: ${L.fontStyle};`),L.textTransform&&(ro+=`text-transform: ${L.textTransform};`),L.textDecoration&&(ro+=`text-decoration: ${L.textDecoration};`),L.lineHeight&&L.lineHeight[i]&&(ro+=`line-height: ${L.lineHeight[i]}${L.lineHeightUnit||"em"};`),L.letterSpacing&&L.letterSpacing[i]&&(ro+=`letter-spacing: ${L.letterSpacing[i]}${L.letterSpacingUnit||"px"};`));let W="";oe&&(oe.fontFamily&&(W+=`font-family: ${oe.fontFamily};`),oe.fontSize&&oe.fontSize[i]&&(W+=`font-size: ${oe.fontSize[i]}${oe.fontSizeUnit||"px"};`),oe.fontWeight&&(W+=`font-weight: ${oe.fontWeight};`),oe.fontStyle&&(W+=`font-style: ${oe.fontStyle};`),oe.textTransform&&(W+=`text-transform: ${oe.textTransform};`),oe.textDecoration&&(W+=`text-decoration: ${oe.textDecoration};`),oe.lineHeight&&oe.lineHeight[i]&&(W+=`line-height: ${oe.lineHeight[i]}${oe.lineHeightUnit||"em"};`),oe.letterSpacing&&oe.letterSpacing[i]&&(W+=`letter-spacing: ${oe.letterSpacing[i]}${oe.letterSpacingUnit||"px"};`));let ze=q?`max-width: ${q}${typeof q=="number"?"%":""};`:"",ho=J?`width: ${J}${typeof J=="number"?"px":""};`:"width: 100%;",uo=Se?`text-align: ${Se};`:"",xo=qe?`justify-content: ${qe};`:"justify-content: center;",Mo=de?`text-align: ${de};`:"text-align: left;",Do=Ve?"@media (max-width: 767px) { ."+o+" .digiblocks-cta-split-container { flex-direction: column-reverse; } }":"",ko="";if(U&&Te&&Te!=="none"&&me)switch(Te){case"background":ko=`
                        .${o} .digiblocks-cta-highlight {
                            background-color: ${me};
                            padding: 0 5px;
                            border-radius: 3px;
                        }
                    `;break;case"text":ko=`
                        .${o} .digiblocks-cta-highlight {
                            color: ${me};
                        }
                    `;break;case"underline":ko=`
                        .${o} .digiblocks-cta-highlight {
                            border-bottom: 2px solid ${me};
                            padding-bottom: 2px;
                        }
                    `;break}let mo="";switch(l){case"split":mo=`
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
                        background-image: url(${B?.url||""});
                        background-position: ${V||"center center"};
                        background-size: ${Z||"cover"};
                        background-repeat: ${ee||"no-repeat"};
                    }
                    
                    .${o} .digiblocks-cta-content-container {
                        flex: 1;
                        ${Co(le,"padding",i)}
                        ${C?`background-color: ${C};`:""}
                        display: flex;
                        flex-direction: column;
                        ${xo}
                    }

					@media (max-width: 767px) {
                        .${o} .digiblocks-cta-split-container {
                            flex-direction: column;
                        }
                        
                        .${o} .digiblocks-cta-image-container {
                            min-height: 200px;
                        }
                    }
                `;break;case"cover":mo=`
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
                        ${po}
                    }
                    
                    .${o} .digiblocks-cta-overlay {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        z-index: -1;
                        background-color: ${O||"rgba(0,0,0,0.5)"};
                        opacity: ${T!==void 0?T/100:.5};
                    }
                    
                    .${o} .digiblocks-cta-title {
                        color: ${m||"#fff"};
                    }
                    
                    .${o} .digiblocks-cta-content {
						color: ${s||"rgba(255, 255, 255, 0.9)"};
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
                `;break;case"box":mo=`
                    .${o} {
                        border: 2px solid ${D||"#e0e0e0"};
                        border-radius: 8px;
                        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
                    }
                `;break;case"modern":mo=`
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
                        background-color: ${$||"#1e73be"};
                        border-radius: 4px;
                    }
                `;break;case"gradient":mo=`
                    .${o} {
                        background: linear-gradient(135deg, ${C||"#6a11cb"} 0%, ${ve||"#2575fc"} 100%);
                        color: #fff;
                        border-radius: 10px;
                    }
                    
                    .${o} .digiblocks-cta-title {
                        color: ${m||"#fff"};
                    }
                    
                    .${o} .digiblocks-cta-content {
						color: ${s||"rgba(255, 255, 255, 0.9)"};
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
                `;break;case"minimal":mo=`
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
                        background-color: ${$||"#1e73be"};
                    }
                `;break;case"callout":mo=`
                    .${o} {
                        border-left: 5px solid ${$||"#1e73be"};
                        background-color: ${C||"#f5f5f5"};
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
                        background-color: ${$||"#1e73be"};
                        border-radius: 4px 0 0 4px;
                    }
                    
                    .${o} .digiblocks-cta-title {
                        color: ${m||"#333"};
                        margin-bottom: 15px;
                    }
                    
                    .${o} .digiblocks-cta-content {
                        color: ${s||"#666"};
                        margin-bottom: 20px;
                    }
                `;break;case"banner":mo=`
                    .${o} {
                        position: relative;
                        padding: 30px;
                        background-color: ${C||"#f0f7ff"};
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
                        background-color: ${$||"#1e73be"};
                    }
                    
                    .${o} .digiblocks-cta-title {
                        color: ${m||"#333"};
                        margin-bottom: 15px;
                    }
                    
                    .${o} .digiblocks-cta-content {
                        color: ${s||"#666"};
                        margin-bottom: 20px;
                    }
                    
                    .${o} .digiblocks-cta-button {
                        background-color: ${$||"#1e73be"};
                        color: ${I||"#fff"};
                        border-radius: 4px;
                        padding: 10px 20px;
                        transition: all 0.3s ease;
                    }
                    
                    .${o} .digiblocks-cta-button:hover {
                        transform: translateY(-2px);
                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    }
                `;break;default:mo=""}let yo="";_&&(ko=`
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
						align-items: ${Se==="center"?"center":Se==="right"?"flex-end":"flex-start"};
						gap: 1rem;
					}
					
					.${o} .digiblocks-cta-horizontal .digiblocks-cta-content-wrapper {
						width: 100%;
						text-align: ${Se};
					}
				}
			`);let ot=U&&Te&&Te!=="none"?`
            .${o} .digiblocks-cta-title {
                white-space: pre-wrap;
            }
        `:"",mi=`
            .${o} .digiblocks-cta-title {
                transition: color 0.3s ease;
            }
            
            .${o} .digiblocks-cta-content {
                transition: color 0.3s ease;
            }
            
            .${o}:hover .digiblocks-cta-title {
                ${be?`color: ${be};`:""}
            }
            
            .${o}:hover .digiblocks-cta-content {
                ${H?`color: ${H};`:""}
            }
            
            .${o}:hover {
                ${ve&&l!=="gradient"&&l!=="split"?`background-color: ${ve};`:""}
                
                ${se&&se.enable?`
                    ${se.position==="inset"?"box-shadow: inset":"box-shadow:"} 
                    ${se.horizontal}px 
                    ${se.vertical}px 
                    ${se.blur}px 
                    ${se.spread}px 
                    ${se.color};`:""}
            }
            
            .${o} .digiblocks-cta-button {
                transition: all 0.3s ease;
            }
            
            .${o} .digiblocks-cta-button:hover {
                ${xe?`background-color: ${xe};`:""}
                ${x?`color: ${x};`:""}
            }
        `;return`
            /* Call to Action Block - ${o} */
            .${o} {
                ${l!=="split"?po:""}
                ${F}
				${Co(b,"border-radius",i)}
                ${Ue}
                ${l!=="split"?`${Co(le,"padding",i)}`:""}
                ${Co(We,"margin",i)}
                ${ho}
                ${z}
                transition: all 0.3s ease;
                position: relative;
                overflow: hidden;
            }
            
            .${o} .digiblocks-cta-container {
                ${ze}
                margin: 0 auto;
                ${l!=="split"?uo:""}
            }
            
            .${o} .digiblocks-cta-title {
                color: ${m||"#333333"};
                margin-top: 0;
                margin-bottom: 20px;
                ${Ke}
            }
            
            .${o} .digiblocks-cta-content {
                color: ${s||"#666666"};
                margin-bottom: 30px;
                ${ro}
            }
            
            .${o} .digiblocks-cta-buttons {
                ${Mo}
                display: flex;
                flex-wrap: wrap;
                gap: 10px;
                ${de==="center"?"justify-content: center;":de==="right"?"justify-content: flex-end;":"justify-content: flex-start;"}
            }
            
            .${o} .digiblocks-cta-button {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                text-decoration: none;
                border: none;
                cursor: pointer;
                background-color: ${$||"#1e73be"};
                color: ${I||"#ffffff"};
                ${Co(Y,"padding",i)}
                ${Co(Ce,"border-radius",i)}
                ${W}
            }
            
            .${o} .digiblocks-cta-button.is-full-width {
                width: 100%;
            }
            
            .${o} .digiblocks-cta-button:not(.is-primary) {
                background-color: transparent;
                color: ${$||"#1e73be"};
                border: 2px solid ${$||"#1e73be"};
            }
            
            ${mo}
            ${yo}
            ${ko}
            ${ot}
            ${mi}
            ${Do}
            
            /* Responsive styles */
			@media (max-width: 991px) {
                .${o} {
                    ${l!=="split"?`${Co(le,"padding","tablet")}`:""}
                    
					${Co(We,"margin","tablet")}
                    
                    ${Ee&&Ee.tablet?`min-height: ${Ee.tablet}px;`:""}
                    
                    ${E&&E!=="none"&&f&&f.tablet?`${Co(f,"border-width","tablet")}`:""}
                    
                    ${E&&E!=="none"&&b&&b.tablet?`${Co(b,"border-radius","tablet")}`:""}
                }
                
                .${o} .digiblocks-cta-title {
                    ${K&&K.fontSize&&K.fontSize.tablet?`font-size: ${K.fontSize.tablet}${K.fontSizeUnit||"px"};`:""}
                    
                    ${K&&K.lineHeight&&K.lineHeight.tablet?`line-height: ${K.lineHeight.tablet}${K.lineHeightUnit||"em"};`:""}
                    
                    ${K&&K.letterSpacing&&K.letterSpacing.tablet?`letter-spacing: ${K.letterSpacing.tablet}${K.letterSpacingUnit||"px"};`:""}
                }
                
                .${o} .digiblocks-cta-content {
                    ${L&&L.fontSize&&L.fontSize.tablet?`font-size: ${L.fontSize.tablet}${L.fontSizeUnit||"px"};`:""}
                    
                    ${L&&L.lineHeight&&L.lineHeight.tablet?`line-height: ${L.lineHeight.tablet}${L.lineHeightUnit||"em"};`:""}
                    
                    ${L&&L.letterSpacing&&L.letterSpacing.tablet?`letter-spacing: ${L.letterSpacing.tablet}${L.letterSpacingUnit||"px"};`:""}
                }
                
                .${o} .digiblocks-cta-button {
                    ${oe&&oe.fontSize&&oe.fontSize.tablet?`font-size: ${oe.fontSize.tablet}${oe.fontSizeUnit||"px"};`:""}

					${Co(Y,"padding","tablet")}
					${Co(Ce,"border-radius","tablet")}
                }
            }

			@media (max-width: 767px) {
                .${o} {
					${l!=="split"?`${Co(le,"padding","mobile")}`:""}

					${Co(We,"margin","mobile")}
					
					${Ee&&Ee.mobile?`min-height: ${Ee.mobile}px;`:""}
					
					${E&&E!=="none"&&f&&f.mobile?`${Co(f,"border-width","mobile")}`:""}
					
					${Co(b,"border-radius","mobile")}
                }
                
                ${l==="split"?`.${o} .digiblocks-cta-split-container {
                        flex-direction: ${Ve?"column-reverse":"column"};
                    }
                    
                    .${o} .digiblocks-cta-image-container {
                        min-height: 200px;
                    }
                    
                    .${o} .digiblocks-cta-content-container {
                        ${Co(le,"padding","mobile")}
                    }`:""}
                
                .${o} .digiblocks-cta-title {
                    ${K&&K.fontSize&&K.fontSize.mobile?`font-size: ${K.fontSize.mobile}${K.fontSizeUnit||"px"};`:""}
                    
                    ${K&&K.lineHeight&&K.lineHeight.mobile?`line-height: ${K.lineHeight.mobile}${K.lineHeightUnit||"em"};`:""}
                    
                    ${K&&K.letterSpacing&&K.letterSpacing.mobile?`letter-spacing: ${K.letterSpacing.mobile}${K.letterSpacingUnit||"px"};`:""}
                }
                
                .${o} .digiblocks-cta-content {
                    ${L&&L.fontSize&&L.fontSize.mobile?`font-size: ${L.fontSize.mobile}${L.fontSizeUnit||"px"};`:""}
                    
                    ${L&&L.lineHeight&&L.lineHeight.mobile?`line-height: ${L.lineHeight.mobile}${L.lineHeightUnit||"em"};`:""}
                    
                    ${L&&L.letterSpacing&&L.letterSpacing.mobile?`letter-spacing: ${L.letterSpacing.mobile}${L.letterSpacingUnit||"px"};`:""}
                }
                
                .${o} .digiblocks-cta-button {
                    ${oe&&oe.fontSize&&oe.fontSize.mobile?`font-size: ${oe.fontSize.mobile}${oe.fontSizeUnit||"px"};`:""}
                    
					${Co(Y,"padding","mobile")}
					${Co(Ce,"border-radius","mobile")}
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
			${n.desktop?`
				@media (min-width: 992px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${n.tablet?`
				@media (min-width: 768px) and (max-width: 991px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${n.mobile?`
				@media (max-width: 767px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}
        `},he=()=>{if(!U||!v)return v;let i=v.indexOf(U);if(i===-1)return v;let F=v.substring(0,i),Ue=v.substring(i,i+U.length),po=v.substring(i+U.length);return wp.element.createElement(wp.element.Fragment,null,F,wp.element.createElement("span",{className:"digiblocks-cta-highlight"},Ue),po)},oo=(i,F)=>wp.element.createElement("div",{className:"digiblocks-button-editor",key:i.id,style:{marginBottom:"20px",padding:"15px",border:"1px solid #ddd",borderRadius:"5px"}},wp.element.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"15px"}},wp.element.createElement("h3",{style:{margin:0}},ne("Button","digiblocks")," ",F+1),He.length>1&&wp.element.createElement(Jt,{isDestructive:!0,onClick:()=>t(i.id),icon:"trash"},ne("Remove","digiblocks"))),wp.element.createElement(ma,{label:ne("Button Text","digiblocks"),value:i.text||"",onChange:Ue=>p(i.id,"text",Ue),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement("div",{style:{marginTop:"10px"}},wp.element.createElement(ma,{label:ne("Button URL","digiblocks"),value:i.url||"",onChange:Ue=>p(i.id,"url",Ue),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement("div",{style:{marginTop:"15px"}},wp.element.createElement(it,{label:ne("Open in new tab","digiblocks"),checked:i.openInNewTab||!1,onChange:Ue=>p(i.id,"openInNewTab",Ue),__nextHasNoMarginBottom:!0}),wp.element.createElement(it,{label:ne("Add noopener noreferrer","digiblocks"),checked:!!i.rel,onChange:Ue=>p(i.id,"rel",Ue?"noopener noreferrer":""),__nextHasNoMarginBottom:!0}),wp.element.createElement(it,{label:ne("Primary Button","digiblocks"),checked:i.isPrimary||!1,onChange:Ue=>p(i.id,"isPrimary",Ue),__nextHasNoMarginBottom:!0}),wp.element.createElement(it,{label:ne("Full Width Button","digiblocks"),checked:i.isFullWidth||!1,onChange:Ue=>p(i.id,"isFullWidth",Ue),__nextHasNoMarginBottom:!0}),wp.element.createElement(it,{label:ne("Custom Colors","digiblocks"),checked:i.customColors||!1,onChange:Ue=>p(i.id,"customColors",Ue),__nextHasNoMarginBottom:!0})),i.customColors&&wp.element.createElement("div",{style:{marginTop:"15px"}},wp.element.createElement(Go,{title:ne("Button Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:i.backgroundColor,onChange:Ue=>p(i.id,"backgroundColor",Ue),label:ne("Background Color","digiblocks")},{value:i.textColor,onChange:Ue=>p(i.id,"textColor",Ue),label:ne("Text Color","digiblocks")},{value:i.hoverBackgroundColor,onChange:Ue=>p(i.id,"hoverBackgroundColor",Ue),label:ne("Hover Background Color","digiblocks")},{value:i.hoverTextColor,onChange:Ue=>p(i.id,"hoverTextColor",Ue),label:ne("Hover Text Color","digiblocks")}]}),wp.element.createElement(ma,{label:ne("Border Radius","digiblocks"),type:"number",value:i.borderRadius||"",onChange:Ue=>p(i.id,"borderRadius",Ue),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}))),h=()=>{switch(G){case"options":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Ro,{tab:"options",name:"general",title:ne("General","digiblocks"),initialOpen:!0},wp.element.createElement(fc,{label:ne("CTA Style","digiblocks"),id:"cta-style-selector",className:"digiblocks-cta-style-selector",__nextHasNoMarginBottom:!0},wp.element.createElement("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px",justifyContent:"center",margin:"0 -5px"}},g.map(i=>wp.element.createElement("div",{key:i.value},De(i))))),wp.element.createElement(it,{label:ne("Horizontal Layout","digiblocks"),help:ne("Display content and buttons side by side","digiblocks"),checked:_||!1,onChange:i=>e({horizontalLayout:i}),__nextHasNoMarginBottom:!0}),wp.element.createElement(Qt,{label:ne("Heading Tag","digiblocks"),value:N||"h2",options:Q,onChange:i=>e({headingTag:i}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),l==="split"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(zn,{label:ne("Vertical Align","digiblocks"),value:qe||"center",onChange:i=>e({verticalAlign:i}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},a.map(i=>wp.element.createElement(Mn,{key:i.value,value:i.value,label:i.label}))),wp.element.createElement(it,{label:ne("Reverse Columns on Mobile","digiblocks"),help:ne("Place the image above the text on mobile devices","digiblocks"),checked:Ve||!1,onChange:i=>e({reverseColumnsMobile:i}),__nextHasNoMarginBottom:!0})),wp.element.createElement(Nt,{label:ne("Content Width","digiblocks")},wp.element.createElement(Hn,{value:q,onChange:i=>e({contentWidth:i}),min:10,max:100,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(Nt,{label:ne("Min Height","digiblocks")},wp.element.createElement(Hn,{value:Ee&&Ee[Oe]?Ee[Oe]:0,onChange:i=>e({minHeight:{...Ee||{},[Oe]:i}}),min:0,max:1e3,step:10,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}))),wp.element.createElement(Ro,{tab:"options",name:"content",title:ne("Content","digiblocks"),initialOpen:!1},wp.element.createElement(fc,{label:ne("Title Highlight","digiblocks"),id:"title-highlight",help:ne("Enter text within the title to highlight","digiblocks"),__nextHasNoMarginBottom:!0},wp.element.createElement(ma,{value:U||"",onChange:i=>e({highlightText:i}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),U&&wp.element.createElement(Qt,{label:ne("Highlight Type","digiblocks"),value:Te||"background",options:ue,onChange:i=>e({highlightType:i}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),U&&Te&&Te!=="none"&&wp.element.createElement(Go,{title:ne("Highlight Color","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:me,onChange:i=>e({highlightColor:i}),label:ne("Highlight Color","digiblocks")}]})),wp.element.createElement(Ro,{tab:"options",name:"buttons",title:ne("Buttons","digiblocks"),initialOpen:!1},wp.element.createElement(zn,{label:ne("Buttons Alignment","digiblocks"),value:de||"left",onChange:i=>e({buttonsAlign:i}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},Ne.map(i=>wp.element.createElement(Mn,{key:i.value,value:i.value,label:i.label}))),wp.element.createElement(Nt,{label:ne("Padding","digiblocks")},wp.element.createElement(vi,{values:Y&&Y[Oe]?Y[Oe]:{top:10,right:20,bottom:10,left:20,unit:"px"},onChange:i=>e({buttonPadding:{...Y||{},[Oe]:i}})})),wp.element.createElement(Nt,{label:ne("Border Radius","digiblocks")},wp.element.createElement(vi,{values:Ce&&Ce[Oe]?Ce[Oe]:{top:4,right:4,bottom:4,left:4,unit:"px"},onChange:i=>e({buttonBorderRadius:{...Ce||{},[Oe]:i}}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]})),wp.element.createElement("div",{className:"digiblocks-button-list"},He&&He.map((i,F)=>oo(i,F))),wp.element.createElement(Jt,{variant:"secondary",onClick:go,style:{marginTop:"10px",width:"100%"}},ne("Add Button","digiblocks"))));case"style":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Ro,{tab:"style",name:"colors",title:ne("Colors","digiblocks"),initialOpen:!0},wp.element.createElement(Jp,{className:"digiblocks-control-tabs",activeClass:"active-tab",tabs:ao},i=>i.name==="normal"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Go,{title:ne("Text Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:m,onChange:F=>e({titleColor:F}),label:ne("Title Color","digiblocks")},{value:s,onChange:F=>e({textColor:F}),label:ne("Text Color","digiblocks")}]}),wp.element.createElement(Go,{title:ne("Button Colors","digiblocks"),initialOpen:!1,enableAlpha:!0,colorSettings:[{value:$,onChange:F=>e({buttonColor:F}),label:ne("Button Color","digiblocks")},{value:I,onChange:F=>e({buttonTextColor:F}),label:ne("Button Text Color","digiblocks")}]}),E&&E!=="none"&&wp.element.createElement(Go,{title:ne("Border Color","digiblocks"),initialOpen:!1,enableAlpha:!0,colorSettings:[{value:D,onChange:F=>e({borderColor:F}),label:ne("Border Color","digiblocks")}]})):wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Go,{title:ne("Text Hover Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:be,onChange:F=>e({titleHoverColor:F}),label:ne("Title Hover Color","digiblocks")},{value:H,onChange:F=>e({textHoverColor:F}),label:ne("Text Hover Color","digiblocks")}]}),wp.element.createElement(Go,{title:ne("Button Hover Colors","digiblocks"),initialOpen:!1,enableAlpha:!0,colorSettings:[{value:xe,onChange:F=>e({buttonHoverColor:F}),label:ne("Button Hover Color","digiblocks")},{value:x,onChange:F=>e({buttonTextHoverColor:F}),label:ne("Button Text Hover Color","digiblocks")}]}),k==="color"&&l!=="gradient"&&wp.element.createElement(Go,{title:ne("Background Hover Color","digiblocks"),initialOpen:!1,enableAlpha:!0,colorSettings:[{value:ve,onChange:F=>e({backgroundHoverColor:F}),label:ne("Background Hover Color","digiblocks")}]})))),wp.element.createElement(Ro,{tab:"style",name:"background",title:ne("Background","digiblocks"),initialOpen:!1},l!=="gradient"&&wp.element.createElement(zn,{label:ne("Background Type","digiblocks"),value:k||"color",onChange:i=>e({backgroundType:i}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},c.map(i=>wp.element.createElement(Mn,{key:i.value,value:i.value,label:i.label}))),k==="color"&&l!=="gradient"&&wp.element.createElement(Go,{title:ne("Background Color","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:C,onChange:i=>e({backgroundColor:i}),label:ne("Background Color","digiblocks")}]}),k==="gradient"||l==="gradient"?wp.element.createElement(Go,{title:ne("Gradient Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:C,onChange:i=>e({backgroundColor:i}),label:ne("Start Color","digiblocks")},{value:ve,onChange:i=>e({backgroundHoverColor:i}),label:ne("End Color","digiblocks")}]}):null,k==="image"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{style:{marginBottom:"16px"}},wp.element.createElement(Nn,null,wp.element.createElement(Tn,{onSelect:i=>{e({backgroundImage:{id:i.id,url:i.url,alt:i.alt||"",width:i.width,height:i.height}})},allowedTypes:["image"],value:B?.id,render:({open:i})=>wp.element.createElement(wp.element.Fragment,null,B?.url?wp.element.createElement("div",{style:{marginBottom:"16px"}},wp.element.createElement("img",{src:B.url,alt:B.alt,style:{display:"block",width:"100%",height:"auto",maxHeight:"150px",objectFit:"cover",marginBottom:"8px"}}),wp.element.createElement("div",{style:{display:"flex",gap:"8px"}},wp.element.createElement(Jt,{variant:"secondary",onClick:i,style:{flexGrow:1}},ne("Replace","digiblocks")),wp.element.createElement(Jt,{variant:"secondary",onClick:()=>e({backgroundImage:null}),isDestructive:!0},ne("Remove","digiblocks")))):wp.element.createElement("div",{style:{marginBottom:"8px"}},wp.element.createElement(Jt,{variant:"secondary",onClick:i,icon:"format-image",style:{width:"100%"}},ne("Select Image","digiblocks"))))}))),B?.url&&!l.includes("split")&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Hn,{label:ne("Overlay Opacity (%)","digiblocks"),value:T||50,onChange:i=>e({backgroundOverlayOpacity:i}),min:0,max:100,step:5,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Go,{title:ne("Overlay Color","digiblocks"),enableAlpha:!0,colorSettings:[{value:O,onChange:i=>e({backgroundOverlayColor:i}),label:ne("Overlay Color","digiblocks")}]}),wp.element.createElement(Qt,{label:ne("Background Position","digiblocks"),value:V||"center center",options:ae,onChange:i=>e({backgroundPosition:i}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Qt,{label:ne("Background Size","digiblocks"),value:Z||"cover",options:y,onChange:i=>e({backgroundSize:i}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Qt,{label:ne("Background Repeat","digiblocks"),value:ee||"no-repeat",options:u,onChange:i=>e({backgroundRepeat:i}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})))),wp.element.createElement(Ro,{tab:"style",name:"typography",title:ne("Typography","digiblocks"),initialOpen:!1},wp.element.createElement(Ln,{label:ne("Title Typography","digiblocks"),value:K,onChange:i=>e({titleTypography:i})}),wp.element.createElement(Ln,{label:ne("Content Typography","digiblocks"),value:L,onChange:i=>e({contentTypography:i})}),wp.element.createElement(Ln,{label:ne("Button Typography","digiblocks"),value:oe,onChange:i=>e({buttonTypography:i})})),wp.element.createElement(Ro,{tab:"style",name:"border",title:ne("Border","digiblocks"),initialOpen:!1},wp.element.createElement(Qt,{label:ne("Border Style","digiblocks"),value:E||"none",options:ce,onChange:i=>e({borderStyle:i}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),E&&E!=="none"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Nt,{label:ne("Border Width","digiblocks")},wp.element.createElement(vi,{values:f&&f[Oe]?f[Oe]:{top:1,right:1,bottom:1,left:1,unit:"px"},onChange:i=>e({borderWidth:{...f||{},[Oe]:i}})}))),wp.element.createElement(Nt,{label:ne("Border Radius","digiblocks")},wp.element.createElement(vi,{values:b&&b[Oe]?b[Oe]:{top:0,right:0,bottom:0,left:0,unit:"px"},onChange:i=>e({borderRadius:{...b||{},[Oe]:i}}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]}))),wp.element.createElement(Ro,{tab:"style",name:"spacing",title:ne("Spacing","digiblocks"),initialOpen:!1},wp.element.createElement(Nt,{label:ne("Padding","digiblocks")},wp.element.createElement(vi,{values:le&&le[Oe]?le[Oe]:{top:40,right:30,bottom:40,left:30,unit:"px"},onChange:i=>e({padding:{...le||{},[Oe]:i}})})),wp.element.createElement(Nt,{label:ne("Margin","digiblocks")},wp.element.createElement(vi,{values:We&&We[Oe]?We[Oe]:{top:0,right:0,bottom:30,left:0,unit:"px"},onChange:i=>e({margin:{...We||{},[Oe]:i}})}))),wp.element.createElement(Ro,{tab:"style",name:"shadow",title:ne("Box Shadow","digiblocks"),initialOpen:!1},wp.element.createElement(Kp,{normalValue:re||{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"},hoverValue:se||{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"},onNormalChange:i=>e({boxShadow:i}),onHoverChange:i=>e({boxShadowHover:i})})));case"advanced":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Ro,{tab:"advanced",name:"animation",title:ne("Animation","digiblocks"),initialOpen:!0},wp.element.createElement(Qt,{label:ne("Animation Effect","digiblocks"),value:A||"none",options:S,onChange:i=>e({animation:i}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),A&&A!=="none"&&wp.element.createElement("div",{style:{marginTop:"10px"}},wp.element.createElement(Jt,{variant:"secondary",isSecondary:!0,onClick:d,style:{width:"100%"}},ne("Preview Animation","digiblocks")))),wp.element.createElement(Ro,{tab:"advanced",name:"visibility",title:ne("Visibility","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control__help",style:{padding:"12px",backgroundColor:"#f0f6fc",border:"1px solid #c3ddfd",borderRadius:"4px",marginBottom:"16px"}},wp.element.createElement("strong",null,ne("Editor Note:","digiblocks")),wp.element.createElement("br",null),ne("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.","digiblocks")),wp.element.createElement(it,{label:ne("Hide on Desktop","digiblocks"),checked:n.desktop,onChange:i=>e({visibility:{...n,desktop:i}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(it,{label:ne("Hide on Tablet","digiblocks"),checked:n.tablet,onChange:i=>e({visibility:{...n,tablet:i}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(it,{label:ne("Hide on Mobile","digiblocks"),checked:n.mobile,onChange:i=>e({visibility:{...n,mobile:i}}),__nextHasNoMarginBottom:!0})),wp.element.createElement(Ro,{tab:"advanced",name:"additional",title:ne("Additional","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control html-anchor-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"html-anchor"},ne("HTML anchor","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"html-anchor",value:P||"",onChange:i=>e({anchor:i.target.value}),"aria-describedby":"html-anchor-help",autoCapitalize:"none",autoComplete:"off"})),wp.element.createElement("p",{id:"html-anchor-help",className:"components-base-control__help"},ne(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`,"digiblocks")," ",wp.element.createElement("a",{className:"components-external-link",href:"https://wordpress.org/documentation/article/page-jumps/",target:"_blank",rel:"external noreferrer noopener"},wp.element.createElement("span",{className:"components-external-link__contents"},ne("Learn more about anchors","digiblocks")),wp.element.createElement("span",{className:"components-external-link__icon","aria-label":"(opens in a new tab)"},"\u2197")))),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"additional-css-classes"},ne("Additional CSS class(es)","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"additional-css-classes",value:te||"",onChange:i=>e({customClasses:i.target.value}),"aria-describedby":"additional-css-classes-help",autoComplete:"off"})),wp.element.createElement("p",{id:"additional-css-classes-help",className:"components-base-control__help"},ne("Separate multiple classes with spaces.","digiblocks")))));default:return null}},w=Wp({className:`digiblocks-cta ${o} style-${l} ${A!=="none"?`animate-${A}`:""} ${te||""}`,id:P||null}),Pe=()=>!He||He.length===0?null:wp.element.createElement("div",{className:"digiblocks-cta-buttons"},He.map(i=>{let F=["digiblocks-cta-button",i.isPrimary?"is-primary":"",i.isFullWidth?"is-full-width":""].filter(Boolean).join(" "),Ue=i.customColors?{backgroundColor:i.isPrimary?i.backgroundColor||$:"transparent",color:i.isPrimary?i.textColor||I:i.backgroundColor||$,borderColor:i.backgroundColor||$,borderStyle:"solid",borderWidth:"2px",borderRadius:i.borderRadius?`${i.borderRadius}px`:void 0}:{};return wp.element.createElement("span",{key:i.id,className:F,style:i.customColors?Ue:{}},i.text||ne("Click Here","digiblocks"))})),Ze=()=>{let i=N||"h2";switch(l){case"split":return wp.element.createElement("div",{className:"digiblocks-cta-split-container"},wp.element.createElement("div",{className:"digiblocks-cta-content-container"},wp.element.createElement("div",{className:`digiblocks-cta-container ${_?"digiblocks-cta-horizontal":""}`},wp.element.createElement("div",{className:"digiblocks-cta-content-wrapper"},wp.element.createElement(ki,{tagName:i,className:"digiblocks-cta-title",value:v,onChange:F=>e({title:F}),placeholder:ne("Add title...","digiblocks"),allowedFormats:["core/bold","core/italic"]}),wp.element.createElement(ki,{tagName:"p",className:"digiblocks-cta-content",value:M,onChange:F=>e({content:F}),placeholder:ne("Add content...","digiblocks")})),Pe())),wp.element.createElement("div",{className:"digiblocks-cta-image-container"},wp.element.createElement(Nn,null,wp.element.createElement(Tn,{onSelect:F=>{e({backgroundImage:{id:F.id,url:F.url,alt:F.alt||"",width:F.width,height:F.height}})},allowedTypes:["image"],value:B?.id,render:({open:F})=>wp.element.createElement("div",{className:"digiblocks-image-upload-container"},B?.url?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("img",{src:B.url,alt:B.alt||"",onClick:F}),wp.element.createElement("button",{className:"digiblocks-change-image-button",onClick:F},ne("Change Image","digiblocks"))):wp.element.createElement("div",{className:"digiblocks-image-placeholder",onClick:F},ne("Choose Image","digiblocks")))}))));case"cover":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:"digiblocks-cta-background"}),wp.element.createElement("div",{className:"digiblocks-cta-overlay"}),wp.element.createElement("div",{className:`digiblocks-cta-container ${_?"digiblocks-cta-horizontal":""}`},wp.element.createElement("div",{className:"digiblocks-cta-content-wrapper"},wp.element.createElement(ki,{tagName:i,className:"digiblocks-cta-title",value:v,onChange:F=>e({title:F}),placeholder:ne("Add title...","digiblocks"),allowedFormats:["core/bold","core/italic"]}),wp.element.createElement(ki,{tagName:"p",className:"digiblocks-cta-content",value:M,onChange:F=>e({content:F}),placeholder:ne("Add content...","digiblocks")})),Pe()),!B?.url&&wp.element.createElement("div",{className:"digiblocks-image-placeholder"},wp.element.createElement(Nn,null,wp.element.createElement(Tn,{onSelect:F=>{e({backgroundImage:{id:F.id,url:F.url,alt:F.alt||"",width:F.width,height:F.height}})},allowedTypes:["image"],value:B?.id,render:({open:F})=>wp.element.createElement(Jt,{variant:"secondary",onClick:F,icon:"format-image"},ne("Select Background Image","digiblocks"))}))));default:return wp.element.createElement("div",{className:`digiblocks-cta-container ${_?"digiblocks-cta-horizontal":""}`},wp.element.createElement("div",{className:"digiblocks-cta-content-wrapper"},wp.element.createElement(ki,{tagName:i,className:"digiblocks-cta-title",value:v,onChange:F=>e({title:F}),placeholder:ne("Add title...","digiblocks"),allowedFormats:["core/bold","core/italic"],withoutInteractiveFormatting:!0}),wp.element.createElement(ki,{tagName:"p",className:"digiblocks-cta-content",value:M,onChange:F=>e({content:F}),placeholder:ne("Add content...","digiblocks"),withoutInteractiveFormatting:!0})),Pe())}};return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(qp,null,wp.element.createElement(Xp,{tabs:eo,activeTab:G,onSelect:pe},h())),wp.element.createElement(Gp,null,wp.element.createElement(Qp,{value:Se,onChange:i=>e({align:i})})),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:r()}}),wp.element.createElement("div",{...w},Ze()))},vc=Ap;var{useBlockProps:eb,RichText:xi}=window.wp.blockEditor,ob=({attributes:ie})=>{let{id:e,anchor:X,customClasses:o,style:P,horizontalLayout:n,title:te,content:l,headingTag:_,backgroundImage:v,backgroundType:M,align:N,animation:m,buttons:s,highlightText:$,highlightType:I,highlightColor:C}=ie,k=["digiblocks-cta",e,`style-${P}`,m!=="none"?`animate-${m}`:"",o].filter(Boolean).join(" "),B=_||"h2",O=()=>!s||s.length===0?null:wp.element.createElement("div",{className:"digiblocks-cta-buttons"},s.map(V=>{let Z=["digiblocks-cta-button",V.isPrimary?"is-primary":"",V.isFullWidth?"is-full-width":""].filter(Boolean).join(" "),ee=V.openInNewTab?"_blank":void 0,E=V.rel||void 0;return wp.element.createElement("a",{key:V.id,className:Z,href:V.url||"#",target:ee,rel:E,"data-button-id":V.id},V.text||"Click Here")})),T=()=>{switch(P){case"split":return wp.element.createElement("div",{className:"digiblocks-cta-split-container"},wp.element.createElement("div",{className:"digiblocks-cta-content-container"},wp.element.createElement("div",{className:`digiblocks-cta-container ${n?"digiblocks-cta-horizontal":""}`},wp.element.createElement("div",{className:"digiblocks-cta-content-wrapper"},wp.element.createElement(xi.Content,{tagName:B,className:"digiblocks-cta-title",value:te}),wp.element.createElement(xi.Content,{tagName:"p",className:"digiblocks-cta-content",value:l})),O())),wp.element.createElement("div",{className:"digiblocks-cta-image-container"}));case"cover":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:"digiblocks-cta-background"}),wp.element.createElement("div",{className:"digiblocks-cta-overlay"}),wp.element.createElement("div",{className:`digiblocks-cta-container ${n?"digiblocks-cta-horizontal":""}`},wp.element.createElement("div",{className:"digiblocks-cta-content-wrapper"},wp.element.createElement(xi.Content,{tagName:B,className:"digiblocks-cta-title",value:te}),wp.element.createElement(xi.Content,{tagName:"p",className:"digiblocks-cta-content",value:l})),O()));default:return wp.element.createElement("div",{className:`digiblocks-cta-container ${n?"digiblocks-cta-horizontal":""}`},wp.element.createElement("div",{className:"digiblocks-cta-content-wrapper"},wp.element.createElement(xi.Content,{tagName:B,className:"digiblocks-cta-title",value:te}),wp.element.createElement(xi.Content,{tagName:"p",className:"digiblocks-cta-content",value:l})),O())}};return wp.element.createElement("div",{...eb.save({className:k,id:X||null,"data-style":P,"data-background-type":M||"color","data-align":N||"left","data-highlight-text":$||"","data-highlight-type":I||"none","data-highlight-color":C||"#ffde59"})},T())},xc=ob;var{__:ut}=window.wp.i18n,{registerBlockType:tb}=window.wp.blocks,{getBlockActiveStatus:ib}=window.wp.digiBlocks;tb("digiblocks/call-to-action",{apiVersion:2,title:digiBlocksData.blocks["call-to-action"].title,category:"digiblocks",icon:{src:()=>{let{viewbox:ie,path:e}=digiBlocksData.blocks["call-to-action"].icon;return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${ie}`,className:"digiblocks-editor-icons"},wp.element.createElement("path",{d:e}))}},description:digiBlocksData.blocks["call-to-action"].description,keywords:[ut("cta","digiblocks"),ut("call to action","digiblocks"),ut("button","digiblocks"),ut("conversion","digiblocks")],supports:{inserter:!!ib("call-to-action"),html:!1,className:!1,customClassName:!1,anchor:!1},attributes:{id:{type:"string",default:""},anchor:{type:"string",default:""},visibility:{type:"object",default:{desktop:!1,tablet:!1,mobile:!1}},customClasses:{type:"string",default:""},style:{type:"string",default:"basic"},horizontalLayout:{type:"boolean",default:!1},title:{type:"string",default:ut("Ready to Get Started?","digiblocks")},content:{type:"string",default:ut("Join thousands of satisfied customers who have already taken the next step. Sign up today and experience the difference.","digiblocks")},headingTag:{type:"string",default:"h2"},titleColor:{type:"string",default:"#333333"},textColor:{type:"string",default:"#666666"},buttonColor:{type:"string",default:"#1e73be"},buttonTextColor:{type:"string",default:"#ffffff"},backgroundColor:{type:"string",default:"#f5f5f5"},backgroundType:{type:"string",default:"color"},backgroundImage:{type:"object",default:null},backgroundOverlayColor:{type:"string",default:"rgba(0,0,0,0.5)"},backgroundOverlayOpacity:{type:"number",default:50},backgroundPosition:{type:"string",default:"center center"},backgroundSize:{type:"string",default:"cover"},backgroundRepeat:{type:"string",default:"no-repeat"},borderStyle:{type:"string",default:"none"},borderWidth:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderRadius:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderColor:{type:"string",default:"#e0e0e0"},padding:{type:"object",default:{desktop:{top:40,right:30,bottom:40,left:30,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},margin:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},align:{type:"string",default:"left"},titleTypography:{type:"object"},contentTypography:{type:"object"},buttonTypography:{type:"object"},contentWidth:{type:"number"},width:{type:"string",default:"100%"},animation:{type:"string",default:"none"},boxShadow:{type:"object"},boxShadowHover:{type:"object"},buttonBorderRadius:{type:"object",default:{desktop:{top:4,right:4,bottom:4,left:4,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},buttonPadding:{type:"object",default:{desktop:{top:10,right:20,bottom:10,left:20,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},buttonsAlign:{type:"string",default:"left"},buttons:{type:"array",default:[]},titleHoverColor:{type:"string",default:""},textHoverColor:{type:"string",default:""},buttonHoverColor:{type:"string",default:""},buttonTextHoverColor:{type:"string",default:""},backgroundHoverColor:{type:"string",default:""},highlightText:{type:"string",default:""},highlightColor:{type:"string",default:"#ffde59"},highlightType:{type:"string",default:"none"},verticalAlign:{type:"string",default:"center"},reverseColumnsMobile:{type:"boolean",default:!1},minHeight:{type:"object"},gradientDirection:{type:"number",default:135},ribbonColor:{type:"string",default:"#1e73be"},ribbonTextColor:{type:"string",default:"#ffffff"},ribbonPosition:{type:"string",default:"top-right"},ribbonText:{type:"string",default:"Special Offer"}},example:{attributes:{style:"basic",title:ut("Ready to Get Started?","digiblocks"),content:ut("Join us today and experience the difference.","digiblocks"),buttons:[{id:"button-1",text:ut("Sign Up Now","digiblocks"),url:"#",isPrimary:!0}],backgroundColor:"#f5f5f5"}},edit:vc,save:xc});var{__:lo}=window.wp.i18n,{useBlockProps:lb,useInnerBlocksProps:ab,InspectorControls:nb,PanelColorSettings:On,MediaUpload:sb,MediaUploadCheck:rb,ButtonBlockAppender:cb}=window.wp.blockEditor,{ToggleControl:Un,SelectControl:yi,RangeControl:jn,Button:Vn}=window.wp.components,{useState:Fn,useEffect:db}=window.wp.element,{useSelect:gb,useDispatch:I1}=window.wp.data,{useBlockId:pb,getDimensionCSS:mt}=digi.utils,{tabIcons:En}=digi.icons,{ResponsiveControl:Ci,DimensionControl:ha,BoxShadowControl:bb,CustomTabPanel:ub,TabPanelBody:Yt}=digi.components,mb=({attributes:ie,setAttributes:e,clientId:X})=>{let{id:o,visibility:P,width:n,order:te,hoverEffect:l,backgroundColor:_,backgroundImage:v,backgroundPosition:M,backgroundRepeat:N,backgroundSize:m,backgroundOverlay:s,backgroundOverlayOpacity:$,backgroundOverlayBlendMode:I,padding:C,margin:k,borderStyle:B,borderWidth:O,borderColor:T,borderRadius:V,boxShadow:Z,boxShadowHover:ee}=ie;pb(o,X,e);let[E,f]=Fn(window.digi.responsiveState.activeDevice),[b,D]=Fn(()=>{if(window.digi.uiState){let H=window.digi.uiState.getActiveTab(X);if(H)return H}return"options"}),[le,We]=Fn(!1),{parentClientId:Se,hasChildBlocks:K}=gb(H=>{let{getBlockParents:xe,getBlockCount:x}=H("core/block-editor"),ve=xe(X);return{parentClientId:ve.length>0?ve[0]:null,hasChildBlocks:x(X)>0}},[X]);db(()=>window.digi.responsiveState.subscribe(xe=>{f(xe)}),[]);let L=(H,xe)=>{e({width:{...n,[xe]:Math.round(H*100)/100}})},oe=[{label:lo("Top Left","digiblocks"),value:"top left"},{label:lo("Top Center","digiblocks"),value:"top center"},{label:lo("Top Right","digiblocks"),value:"top right"},{label:lo("Center Left","digiblocks"),value:"center left"},{label:lo("Center Center","digiblocks"),value:"center center"},{label:lo("Center Right","digiblocks"),value:"center right"},{label:lo("Bottom Left","digiblocks"),value:"bottom left"},{label:lo("Bottom Center","digiblocks"),value:"bottom center"},{label:lo("Bottom Right","digiblocks"),value:"bottom right"}],q=[{label:lo("No Repeat","digiblocks"),value:"no-repeat"},{label:lo("Repeat","digiblocks"),value:"repeat"},{label:lo("Repeat X","digiblocks"),value:"repeat-x"},{label:lo("Repeat Y","digiblocks"),value:"repeat-y"}],J=[{label:lo("Cover","digiblocks"),value:"cover"},{label:lo("Contain","digiblocks"),value:"contain"},{label:lo("Auto","digiblocks"),value:"auto"},{label:lo("100%","digiblocks"),value:"100%"}],A=[{label:lo("None","digiblocks"),value:"none"},{label:lo("Solid","digiblocks"),value:"solid"},{label:lo("Dashed","digiblocks"),value:"dashed"},{label:lo("Dotted","digiblocks"),value:"dotted"},{label:lo("Double","digiblocks"),value:"double"}],re=[{label:lo("Normal","digiblocks"),value:"normal"},{label:lo("Multiply","digiblocks"),value:"multiply"},{label:lo("Screen","digiblocks"),value:"screen"},{label:lo("Overlay","digiblocks"),value:"overlay"},{label:lo("Darken","digiblocks"),value:"darken"},{label:lo("Lighten","digiblocks"),value:"lighten"},{label:lo("Color Dodge","digiblocks"),value:"color-dodge"},{label:lo("Color Burn","digiblocks"),value:"color-burn"},{label:lo("Hard Light","digiblocks"),value:"hard-light"},{label:lo("Soft Light","digiblocks"),value:"soft-light"},{label:lo("Difference","digiblocks"),value:"difference"},{label:lo("Exclusion","digiblocks"),value:"exclusion"},{label:lo("Hue","digiblocks"),value:"hue"},{label:lo("Saturation","digiblocks"),value:"saturation"},{label:lo("Color","digiblocks"),value:"color"},{label:lo("Luminosity","digiblocks"),value:"luminosity"}],se=[{label:lo("None","digiblocks"),value:"none"},{label:lo("Lift","digiblocks"),value:"lift"},{label:lo("Scale","digiblocks"),value:"scale"},{label:lo("Glow","digiblocks"),value:"glow"}],Ce=[{name:"options",title:lo("Layout","digiblocks"),icon:En.optionsIcon},{name:"style",title:lo("Style","digiblocks"),icon:En.styleIcon},{name:"background",title:lo("Background","digiblocks"),icon:En.backgroundIcon}],Y=()=>{let H=E,xe=(Oe,j)=>{let ye=g=>Oe&&Oe[g]&&(Oe[g].top!==void 0&&Oe[g].top!==""||Oe[g].right!==void 0&&Oe[g].right!==""||Oe[g].bottom!==void 0&&Oe[g].bottom!==""||Oe[g].left!==void 0&&Oe[g].left!==""),Je;if(ye(j))Je=Oe[j];else if(j==="tablet"&&ye("desktop"))Je=Oe.desktop;else if(j==="mobile")if(ye("tablet"))Je=Oe.tablet;else if(ye("desktop"))Je=Oe.desktop;else return"";else return"";let G=(g,Q)=>g===void 0||g===""?Q==="px"?"10px":"0"+Q:Q==="px"&&parseFloat(g)<10?"10px":g+Q,pe=Je.unit||"px",R=G(Je.top,pe),d=G(Je.right,pe),ce=G(Je.bottom,pe),S=G(Je.left,pe);return`padding: ${R} ${d} ${ce} ${S} !important;`},x=xe(C,H),ve=xe(C,"tablet"),U=xe(C,"mobile"),me="";v&&v.url&&(me=`background-image: url(${v.url});
            background-position: ${M};
            background-repeat: ${N};
            background-size: ${m};`);let Te="";s&&(Te=`
            .${o}:before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: ${s};
                opacity: ${$};
                mix-blend-mode: ${I};
                z-index: 1;
                pointer-events: none;
                border-radius: inherit;
            }
            .${o} > * {
                position: relative;
                z-index: 2;
            }`);let qe="";Z&&Z.enable&&(qe=`box-shadow: ${Z.horizontal}px ${Z.vertical}px ${Z.blur}px ${Z.spread}px ${Z.color};`);let Ve="",Ee="";if(ee&&ee.enable){let Oe=ee.position==="inset"?"inset ":"";Ve+=`box-shadow: ${Oe}${ee.horizontal}px ${ee.vertical}px ${ee.blur}px ${ee.spread}px ${ee.color};`}return l==="lift"?Ve+="transform: translateY(-10px);":l==="scale"?Ve+="transform: scale(1.05);":l==="glow"&&(Ve+="filter: brightness(1.1);"),`
            /* Column Block - ${o} */
            .${o} {
                position: relative;
                width: ${n[H]}%;
                ${x}
				${mt(k,"margin",H)}
                display: flex;
                flex-direction: column;
                ${te[H]!==0?`order: ${te[H]};`:""}
                ${_?`background-color: ${_};`:""}
                ${me}
                ${B!=="none"?`
					border-style: ${B}!important;
					${mt(O,"border-width",H,!0)}
					border-color: ${T}!important;`:""}
                ${mt(V,"border-radius",H)}
				${qe}
                transition: all 0.3s ease;
            }
            
            /* Hover effects */
            .${o}:hover {
                ${Ee}
            }

            .${o} > div {
                width: 100%;
            }
            
            ${Te}
            
            /* Tablet styles */
            @media (max-width: 991px) {
                .${o} {
                    width: ${n.tablet}%;
					${ve}
					${mt(k,"margin","tablet")}
                    ${te.tablet!==0?`order: ${te.tablet};`:""}
					${mt(V,"border-radius","tablet")}
                    ${B!=="none"?`${mt(O,"border-width","tablet",!0)}`:""}
                }
            }
            
            /* Mobile styles */
            @media (max-width: 767px) {
                .${o} {
                    width: ${n.mobile}%;
					${U}
					${mt(k,"margin","mobile")}
                    ${te.mobile!==0?`order: ${te.mobile};`:""}
					${mt(V,"border-radius","mobile")}
                    ${B!=="none"?`${mt(O,"border-width","mobile",!0)}`:""}
                }
            }

			/* Visibility Controls */
			${P.desktop?`
				@media (min-width: 992px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${P.tablet?`
				@media (min-width: 768px) and (max-width: 991px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${P.mobile?`
				@media (max-width: 767px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}
        `},de=lb({className:`digiblocks-column ${o}`}),He=ab(de,{templateLock:!1,renderAppender:K?void 0:()=>wp.element.createElement(cb,{rootClientId:X})});return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(nb,null,wp.element.createElement(ub,{tabs:Ce,activeTab:b,onSelect:D},(()=>{switch(b){case"options":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Yt,{tab:"options",name:"column",title:lo("Column","digiblocks"),initialOpen:!0},wp.element.createElement(Ci,{label:lo("Width (%)","digiblocks")},wp.element.createElement(jn,{value:n[E],onChange:H=>L(H,E),min:10,max:100,step:.01,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(Ci,{label:lo("Order","digiblocks")},wp.element.createElement(jn,{value:te[E],onChange:H=>e({order:{...te,[E]:H}}),min:-10,max:10,step:1,allowReset:!0,resetFallbackValue:0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}))),wp.element.createElement(Yt,{tab:"layout",name:"spacing",title:lo("Spacing","digiblocks"),initialOpen:!1},wp.element.createElement(Ci,{label:lo("Padding","digiblocks")},wp.element.createElement(ha,{values:C[E],onChange:H=>e({padding:{...C,[E]:H}})})),wp.element.createElement(Ci,{label:lo("Margin","digiblocks")},wp.element.createElement(ha,{values:k[E],onChange:H=>e({margin:{...k,[E]:H}})}))),wp.element.createElement(Yt,{tab:"layout",name:"effect",title:lo("Hover Effect","digiblocks"),initialOpen:!1},wp.element.createElement(yi,{label:lo("Hover Effect","digiblocks"),value:l||"none",options:se,onChange:H=>e({hoverEffect:H}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(Yt,{tab:"layout",name:"visibility",title:lo("Visibility","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control__help",style:{padding:"12px",backgroundColor:"#f0f6fc",border:"1px solid #c3ddfd",borderRadius:"4px",marginBottom:"16px"}},wp.element.createElement("strong",null,lo("Editor Note:","digiblocks")),wp.element.createElement("br",null),lo("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.","digiblocks")),wp.element.createElement(Un,{label:lo("Hide on Desktop","digiblocks"),checked:P.desktop,onChange:H=>e({visibility:{...P,desktop:H}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(Un,{label:lo("Hide on Tablet","digiblocks"),checked:P.tablet,onChange:H=>e({visibility:{...P,tablet:H}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(Un,{label:lo("Hide on Mobile","digiblocks"),checked:P.mobile,onChange:H=>e({visibility:{...P,mobile:H}}),__nextHasNoMarginBottom:!0})));case"style":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Yt,{tab:"style",name:"borders",title:lo("Borders & Radius","digiblocks"),initialOpen:!0},wp.element.createElement(yi,{label:lo("Border Style","digiblocks"),value:B,options:A,onChange:H=>e({borderStyle:H}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),B!=="none"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Ci,{label:lo("Border Width","digiblocks")},wp.element.createElement(ha,{values:O[E],onChange:H=>e({borderWidth:{...O,[E]:H}})})),wp.element.createElement(On,{title:"",enableAlpha:!0,colorSettings:[{value:T,onChange:H=>e({borderColor:H}),label:lo("Border Color","digiblocks")}]})),wp.element.createElement(Ci,{label:lo("Border Radius","digiblocks")},wp.element.createElement(ha,{values:V[E],onChange:H=>e({borderRadius:{...V,[E]:H}}),units:[{label:"px",value:"px"},{label:"%",value:"%"},{label:"em",value:"em"}]})),wp.element.createElement(bb,{normalValue:Z,hoverValue:ee,onNormalChange:H=>e({boxShadow:H}),onHoverChange:H=>e({boxShadowHover:H})})));case"background":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Yt,{tab:"background",name:"background",title:lo("Background","digiblocks"),initialOpen:!0},wp.element.createElement(On,{title:lo("Background Color","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:_,onChange:H=>e({backgroundColor:H}),label:lo("Background Color","digiblocks")}]}),wp.element.createElement("div",{className:"digiblocks-media-control"},wp.element.createElement("p",{className:"components-base-control__label"},lo("Background Image","digiblocks")),wp.element.createElement(rb,null,wp.element.createElement(sb,{onSelect:H=>{e({backgroundImage:{url:H.url,id:H.id,alt:H.alt||"",size:H.sizes?.full?.url?"full":""}})},allowedTypes:["image"],value:v?.id,render:({open:H})=>wp.element.createElement("div",{className:"digiblocks-media-upload-wrapper"},v?.url?wp.element.createElement("div",{className:"digiblocks-media-preview"},wp.element.createElement("img",{src:v.url,alt:v.alt||""}),wp.element.createElement("div",{className:"digiblocks-media-controls"},wp.element.createElement(Vn,{isPrimary:!0,onClick:H},wp.element.createElement("span",{class:"dashicon dashicons dashicons-edit"})),wp.element.createElement(Vn,{isDestructive:!0,onClick:()=>e({backgroundImage:{url:"",id:0,alt:"",size:""}})},wp.element.createElement("span",{class:"dashicon dashicons dashicons-trash"})))):wp.element.createElement(Vn,{className:"digiblocks-media-upload-button",isPrimary:!0,onClick:H},lo("Select Image","digiblocks")))}))),v?.url&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(yi,{label:lo("Background Position","digiblocks"),value:M,options:oe,onChange:H=>e({backgroundPosition:H}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(yi,{label:lo("Background Repeat","digiblocks"),value:N,options:q,onChange:H=>e({backgroundRepeat:H}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(yi,{label:lo("Background Size","digiblocks"),value:m,options:J,onChange:H=>e({backgroundSize:H}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}))),wp.element.createElement(Yt,{tab:"background",name:"overlay",title:lo("Background Overlay","digiblocks"),initialOpen:!1},wp.element.createElement(On,{title:lo("Overlay Color","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:s,onChange:H=>e({backgroundOverlay:H}),label:lo("Overlay Color","digiblocks")}]}),s&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(jn,{label:lo("Overlay Opacity","digiblocks"),value:$,onChange:H=>e({backgroundOverlayOpacity:H}),min:0,max:1,step:.01,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(yi,{label:lo("Blend Mode","digiblocks"),value:I,options:re,onChange:H=>e({backgroundOverlayBlendMode:H}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}))));default:return null}})())),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:Y()}}),wp.element.createElement("div",{...He}))},yc=mb;var{__:O1}=window.wp.i18n,{useBlockProps:hb,useInnerBlocksProps:fb}=window.wp.blockEditor,kb=({attributes:ie})=>{let{id:e,backgroundOverlay:X}=ie,o=`digiblocks-column ${e}`,P=hb.save({className:o}),n=fb.save(P);return wp.element.createElement("div",{...n})},Cc=kb;var{__:wc}=window.wp.i18n,{registerBlockType:vb}=window.wp.blocks;vb("digiblocks/column",{apiVersion:2,title:wc("Column","digiblocks"),parent:["digiblocks/container"],icon:{src:()=>wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512",width:"24",height:"24"},wp.element.createElement("path",{d:"M448 64l0 384 128 0c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L448 64zm-32 0L224 64l0 384 192 0 0-384zM192 448l0-384L64 64C46.3 64 32 78.3 32 96l0 320c0 17.7 14.3 32 32 32l128 0zM0 96C0 60.7 28.7 32 64 32l512 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96z"}))},description:wc("Flexible column component to use within Container blocks","digiblocks"),supports:{inserter:!1,reusable:!1,html:!1,className:!1,customClassName:!1,anchor:!1},attributes:{id:{type:"string",default:""},visibility:{type:"object",default:{desktop:!1,tablet:!1,mobile:!1}},width:{type:"object",default:{desktop:100,tablet:100,mobile:100}},order:{type:"object",default:{desktop:0,tablet:0,mobile:0}},hoverEffect:{type:"string",default:"none"},backgroundColor:{type:"string",default:""},backgroundImage:{type:"object",default:{url:"",id:0,alt:"",size:""}},backgroundPosition:{type:"string",default:"center center"},backgroundRepeat:{type:"string",default:"no-repeat"},backgroundSize:{type:"string",default:"cover"},backgroundOverlay:{type:"string",default:""},backgroundOverlayOpacity:{type:"number",default:.7},backgroundOverlayBlendMode:{type:"string",default:"normal"},padding:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},margin:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderStyle:{type:"string",default:"none"},borderWidth:{type:"object",default:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderColor:{type:"string",default:"#e0e0e0"},borderRadius:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},boxShadow:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},boxShadowHover:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}}},edit:yc,save:Cc});var{__:Ge}=window.wp.i18n,{useBlockProps:xb,InspectorControls:Sc,PanelColorSettings:$c,BlockControls:yb,AlignmentToolbar:Cb}=window.wp.blockEditor,{SelectControl:fa,RangeControl:_c,TabPanel:wb,ToggleControl:lt,TextControl:dl,DateTimePicker:Sb,Button:$b,__experimentalToggleGroupControl:_b,__experimentalToggleGroupControlOption:Bb,BaseControl:Tb}=window.wp.components,{useState:gl,useEffect:Wn,useRef:Bc}=window.wp.element,{useBlockId:Nb,getDimensionCSS:at,animations:qn,animationPreview:Tc}=digi.utils,{tabIcons:Gn}=digi.icons,{ResponsiveControl:wi,DimensionControl:ka,TypographyControl:Nc,BoxShadowControl:Hb,CustomTabPanel:Hc,TabPanelBody:Zt}=digi.components,zb=({attributes:ie,setAttributes:e,clientId:X})=>{let{id:o,anchor:P,visibility:n,customClasses:te,endDate:l,showDays:_,showHours:v,showMinutes:M,showSeconds:N,daysLabel:m,hoursLabel:s,minutesLabel:$,secondsLabel:I,digitColor:C,digitBackground:k,digitHoverColor:B,digitHoverBackground:O,labelColor:T,labelHoverColor:V,separatorColor:Z,separatorHoverColor:ee,boxStyle:E,boxBorderRadius:f,boxPadding:b,boxMargin:D,boxBorderWidth:le,boxBorderColor:We,showBoxShadow:Se,boxShadow:K,boxShadowHover:L,itemSpacing:oe,align:q,labelPosition:J,labelSpacing:A,titleTypography:re,contentTypography:se,expiredMessage:Ce,animation:Y,displaySeparator:de,separatorType:He,boxesEqual:be,style:H}=ie;Nb(o,X,e);let[xe,x]=gl(window.digi.responsiveState.activeDevice),[ve,U]=gl({days:30,hours:23,minutes:59,seconds:59}),[me,Te]=gl(!1),qe=Bc(null);Wn(()=>window.digi.responsiveState.subscribe(ue=>{x(ue)}),[]);let[Ve,Ee]=gl(()=>{if(window.digi.uiState){let a=window.digi.uiState.getActiveTab(X);if(a)return a}return"options"}),[Oe,j]=gl("normal");Wn(()=>{if(!l){let ue=new Date;ue.setDate(ue.getDate()+7),e({endDate:ue.toISOString()})}let a=()=>{let ue=new Date,Fe=new Date;l?Fe=new Date(l):Fe.setDate(Fe.getDate()+30);let eo=Fe-ue;if(eo>0){let ao=Math.floor(eo/864e5),go=Math.floor(eo%(1e3*60*60*24)/(1e3*60*60)),t=Math.floor(eo%(1e3*60*60)/(1e3*60)),p=Math.floor(eo%(1e3*60)/1e3);U({days:ao,hours:go,minutes:t,seconds:p})}else U({days:0,hours:0,minutes:0,seconds:0})};return a(),qe.current=setInterval(a,1e3),()=>{qe.current&&clearInterval(qe.current)}},[l,e]);let ye=Bc(null);Wn(()=>{if(Y&&Y!=="none"){let a=setTimeout(()=>{Tc(o,Y,qn,ye)},100);return()=>clearTimeout(a)}},[Y]);let Je=()=>{Tc(o,Y,qn,ye)},G=[{label:Ge("Default","digiblocks"),value:"default"},{label:Ge("Filled","digiblocks"),value:"filled"},{label:Ge("Outlined","digiblocks"),value:"outlined"},{label:Ge("Pill","digiblocks"),value:"pill"},{label:Ge("Rounded","digiblocks"),value:"rounded"},{label:Ge("Circle","digiblocks"),value:"circle"}],pe=[{label:Ge("Bottom","digiblocks"),value:"bottom"},{label:Ge("Top","digiblocks"),value:"top"},{label:Ge("Inside","digiblocks"),value:"inside"}],R=[{label:Ge("Boxes","digiblocks"),value:"boxes"},{label:Ge("Simple","digiblocks"),value:"simple"}],d=[{label:Ge("Colon","digiblocks"),value:"colon"},{label:Ge("Hyphen","digiblocks"),value:"hyphen"},{label:Ge("Slash","digiblocks"),value:"slash"},{label:Ge("Dot","digiblocks"),value:"dot"}],ce=[{label:Ge("None","digiblocks"),value:"none"},...Object.keys(qn).map(a=>({label:a.replace(/-/g," ").replace(/\b\w/g,ue=>ue.toUpperCase()),value:a}))],S=[{name:"options",title:Ge("Options","digiblocks"),icon:Gn.optionsIcon},{name:"style",title:Ge("Style","digiblocks"),icon:Gn.styleIcon},{name:"advanced",title:Ge("Advanced","digiblocks"),icon:Gn.advancedIcon}],g=[{name:"normal",title:Ge("Normal","digiblocks"),className:"digiblocks-tab-1 normal"},{name:"hover",title:Ge("Hover","digiblocks"),className:"digiblocks-tab-2 hover"}],Q=a=>a.toString().padStart(2,"0"),c=()=>{let a=xe,ue=oe&&oe[a]!==void 0?oe[a]:20,Fe=A&&A[a]!==void 0?A[a]:5,eo="";re&&(re.fontFamily&&(eo+=`font-family: ${re.fontFamily};`),re.fontSize&&re.fontSize[a]&&(eo+=`font-size: ${re.fontSize[a]}${re.fontSizeUnit||"px"};`),re.fontWeight&&(eo+=`font-weight: ${re.fontWeight};`),re.fontStyle&&(eo+=`font-style: ${re.fontStyle};`),re.textTransform&&(eo+=`text-transform: ${re.textTransform};`),re.lineHeight&&re.lineHeight[a]&&(eo+=`line-height: ${re.lineHeight[a]}${re.lineHeightUnit||"em"};`),re.letterSpacing&&re.letterSpacing[a]&&(eo+=`letter-spacing: ${re.letterSpacing[a]}${re.letterSpacingUnit||"px"};`));let ao="";se&&(se.fontFamily&&(ao+=`font-family: ${se.fontFamily};`),se.fontSize&&se.fontSize[a]&&(ao+=`font-size: ${se.fontSize[a]}${se.fontSizeUnit||"px"};`),se.fontWeight&&(ao+=`font-weight: ${se.fontWeight};`),se.fontStyle&&(ao+=`font-style: ${se.fontStyle};`),se.textTransform&&(ao+=`text-transform: ${se.textTransform};`),se.lineHeight&&se.lineHeight[a]&&(ao+=`line-height: ${se.lineHeight[a]}${se.lineHeightUnit||"em"};`),se.letterSpacing&&se.letterSpacing[a]&&(ao+=`letter-spacing: ${se.letterSpacing[a]}${se.letterSpacingUnit||"px"};`));let go="";Se&&K&&K.enable&&(go=`box-shadow: ${K.position==="inset"?"inset ":""}${K.horizontal}px ${K.vertical}px ${K.blur}px ${K.spread}px ${K.color};`);let t="";Se&&L&&L.enable&&(t=`box-shadow: ${L.position==="inset"?"inset ":""}${L.horizontal}px ${L.vertical}px ${L.blur}px ${L.spread}px ${L.color};`);let p="";if(H==="boxes")switch(E){case"filled":p=`
                        .${o} .digiblocks-countdown-item-inner {
                            background-color: ${k||"#f0f0f0"};
                            color: ${C||"#333333"};
							${at(b,"padding",a)}
							${at(f,"border-radius",a)}
                            ${go}
                        }
                        .${o} .digiblocks-countdown-item:hover .digiblocks-countdown-item-inner {
                            background-color: ${O||k||"#e0e0e0"};
                            color: ${B||C||"#333333"};
                            ${t}
                        }
                    `;break;case"outlined":p=`
                        .${o} .digiblocks-countdown-item-inner {
                            background-color: transparent;
                            color: ${C||"#333333"};
							${at(b,"padding",a)}
							border-style: solid;
							${at(le,"border-width",a)}
							border-color: ${We||"#e0e0e0"};
							${at(f,"border-radius",a)}
							${at(b,"padding",a)}
                            ${go}
                        }
                        .${o} .digiblocks-countdown-item:hover .digiblocks-countdown-item-inner {
                            background-color: ${O||"transparent"};
                            color: ${B||C||"#333333"};
                            ${t}
                        }
                    `;break;case"pill":p=`
                        .${o} .digiblocks-countdown-item-inner {
                            background-color: ${k||"#f0f0f0"};
                            color: ${C||"#333333"};
                            border-radius: 50px;
							${at(b,"padding",a)}
                            ${go}
                        }
                        .${o} .digiblocks-countdown-item:hover .digiblocks-countdown-item-inner {
                            background-color: ${O||k||"#e0e0e0"};
                            color: ${B||C||"#333333"};
                            ${t}
                        }
                    `;break;case"rounded":p=`
                        .${o} .digiblocks-countdown-item-inner {
                            background-color: ${k||"#f0f0f0"};
                            color: ${C||"#333333"};
                            border-radius: 8px;
							${at(b,"padding",a)}
                            ${go}
                        }
                        .${o} .digiblocks-countdown-item:hover .digiblocks-countdown-item-inner {
                            background-color: ${O||k||"#e0e0e0"};
                            color: ${B||C||"#333333"};
                            ${t}
                        }
                    `;break;case"circle":p=`
                        .${o} .digiblocks-countdown-item-inner {
                            background-color: ${k||"#f0f0f0"};
                            color: ${C||"#333333"};
                            border-radius: 50%;
                            aspect-ratio: 1/1;
                            display: flex;
                            justify-content: center;
                            align-items: center;
							${at(b,"padding",a)}
                            ${go}
                        }
                        .${o} .digiblocks-countdown-item:hover .digiblocks-countdown-item-inner {
                            background-color: ${O||k||"#e0e0e0"};
                            color: ${B||C||"#333333"};
                            ${t}
                        }
                    `;break;case"default":default:p=`
                        .${o} .digiblocks-countdown-item-inner {
                            color: ${C||"#333333"};
                            ${go}
                        }
                        .${o} .digiblocks-countdown-item:hover .digiblocks-countdown-item-inner {
                            color: ${B||C||"#333333"};
                            ${t}
                        }
                    `;break}else p=`
                .${o} .digiblocks-countdown-item-inner {
                    color: ${C||"#333333"};
                }
                .${o} .digiblocks-countdown-item:hover .digiblocks-countdown-item-inner {
                    color: ${B||C||"#333333"};
                }
            `;let De="";if(de){let oo="";switch(He){case"colon":oo=":";break;case"hyphen":oo="-";break;case"slash":oo="/";break;case"dot":oo="\u2022";break;default:oo=":";break}De=`
                .${o} .digiblocks-countdown-separator {
                    color: ${Z||"#333333"};
                    font-size: ${re&&re.fontSize&&re.fontSize[a]?re.fontSize[a]+(re.fontSizeUnit||"px"):"2rem"};
                }
                .${o} .digiblocks-countdown-separator::before {
                    content: "${oo}";
                }
                .${o}:hover .digiblocks-countdown-separator {
                    color: ${ee||Z||"#333333"};
                }
            `}let r="";H==="boxes"&&be&&(r=`
                .${o} .digiblocks-countdown-item {
                    flex: 1 0 0;
                }
                .${o} .digiblocks-countdown-item-inner {
                    width: 100%;
                    text-align: center;
                    box-sizing: border-box;
                }
            `);let he="";return J==="top"?he=`
                .${o} .digiblocks-countdown-item {
                    flex-direction: column-reverse;
                }
                .${o} .digiblocks-countdown-label {
                    margin-bottom: ${Fe}px;
                    margin-top: 0;
                }
            `:J==="inside"?H==="boxes"?he=`
                    .${o} .digiblocks-countdown-item {
                        flex-direction: column;
                    }
                    .${o} .digiblocks-countdown-digit {
                        margin-bottom: ${Fe}px;
                    }
                    .${o} .digiblocks-countdown-label {
                        margin-top: 0;
                    }
                    .${o} .digiblocks-countdown-item-inner {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                    }
                `:he=`
                    .${o} .digiblocks-countdown-item {
                        flex-direction: column;
                    }
                    .${o} .digiblocks-countdown-label {
                        margin-top: ${Fe}px;
                    }
                `:he=`
                .${o} .digiblocks-countdown-item {
                    flex-direction: column;
                }
                .${o} .digiblocks-countdown-label {
                    margin-top: ${Fe}px;
                }
            `,`
            /* Countdown Block - ${o} */
            .${o} {
				${at(D,"margin",a)}
                text-align: ${q};
                display: block;
            }
            
            .${o} .digiblocks-countdown-container {
                display: inline-flex;
                flex-wrap: wrap;
                justify-content: ${q==="center"?"center":q==="right"?"flex-end":"flex-start"};
                gap: ${ue}px;
            }
            
            .${o} .digiblocks-countdown-item {
                display: flex;
                align-items: center;
            }
            
            .${o} .digiblocks-countdown-item-inner {
                transition: all 0.3s ease;
            }
            
            .${o} .digiblocks-countdown-digit {
                ${eo}
            }
            
            .${o} .digiblocks-countdown-label {
                ${ao}
                color: ${T||"#666666"};
                transition: color 0.3s ease;
            }
            
            .${o}:hover .digiblocks-countdown-label {
                color: ${V||T||"#666666"};
            }
            
            .${o} .digiblocks-countdown-expired {
                ${eo}
                color: ${C||"#333333"};
                text-align: ${q};
            }
            
            /* Box style specific */
            ${p}
            
            /* Separator styles */
            ${De}
            
            /* Equal width styles */
            ${r}
            
            /* Label positioning */
            ${he}

			/* Visibility Controls */
			${n.desktop?`
				@media (min-width: 992px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${n.tablet?`
				@media (min-width: 768px) and (max-width: 991px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${n.mobile?`
				@media (max-width: 767px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}
        `},ae=()=>{switch(Ve){case"options":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:"components-panel__body is-opened"},wp.element.createElement(_b,{label:Ge("Style","digiblocks"),value:H,onChange:a=>e({style:a}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},R.map(a=>wp.element.createElement(Bb,{key:a.value,value:a.value,label:a.label}))),H==="boxes"&&wp.element.createElement(fa,{label:Ge("Box Style","digiblocks"),value:E,options:G,onChange:a=>e({boxStyle:a}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),H==="boxes"&&wp.element.createElement(lt,{label:Ge("Equal Width Boxes","digiblocks"),checked:!!be,onChange:()=>e({boxesEqual:!be}),help:Ge("Make all countdown boxes the same width","digiblocks"),__nextHasNoMarginBottom:!0}),wp.element.createElement(fa,{label:Ge("Label Position","digiblocks"),value:J,options:pe,onChange:a=>e({labelPosition:a}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(lt,{label:Ge("Show Separators","digiblocks"),checked:!!de,onChange:()=>e({displaySeparator:!de}),__nextHasNoMarginBottom:!0}),de&&wp.element.createElement(fa,{label:Ge("Separator Type","digiblocks"),value:He,options:d,onChange:a=>e({separatorType:a}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Tb,{label:Ge("End Date & Time","digiblocks"),id:"countdown-date-time",__nextHasNoMarginBottom:!0},wp.element.createElement(Sb,{currentDate:l,onChange:a=>e({endDate:a}),is12Hour:!0})),wp.element.createElement(dl,{label:Ge("Expired Message","digiblocks"),value:Ce,onChange:a=>e({expiredMessage:a}),placeholder:Ge("Time's up!","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(dl,{label:Ge("Days Label","digiblocks"),value:m,onChange:a=>e({daysLabel:a}),placeholder:Ge("Days","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(dl,{label:Ge("Hours Label","digiblocks"),value:s,onChange:a=>e({hoursLabel:a}),placeholder:Ge("Hours","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(dl,{label:Ge("Minutes Label","digiblocks"),value:$,onChange:a=>e({minutesLabel:a}),placeholder:Ge("Minutes","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(dl,{label:Ge("Seconds Label","digiblocks"),value:I,onChange:a=>e({secondsLabel:a}),placeholder:Ge("Seconds","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(lt,{label:Ge("Show Days","digiblocks"),checked:_,onChange:()=>e({showDays:!_}),__nextHasNoMarginBottom:!0}),wp.element.createElement(lt,{label:Ge("Show Hours","digiblocks"),checked:v,onChange:()=>e({showHours:!v}),__nextHasNoMarginBottom:!0}),wp.element.createElement(lt,{label:Ge("Show Minutes","digiblocks"),checked:M,onChange:()=>e({showMinutes:!M}),__nextHasNoMarginBottom:!0}),wp.element.createElement(lt,{label:Ge("Show Seconds","digiblocks"),checked:N,onChange:()=>e({showSeconds:!N}),__nextHasNoMarginBottom:!0})));case"style":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Zt,{tab:"style",name:"colors",title:Ge("Colors","digiblocks"),initialOpen:!0},wp.element.createElement(wb,{className:"digiblocks-control-tabs",activeClass:"active-tab",tabs:g},a=>a.name==="normal"?wp.element.createElement($c,{title:Ge("Normal Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:C,onChange:ue=>e({digitColor:ue}),label:Ge("Digit Color","digiblocks")},...H==="boxes"?[{value:k,onChange:ue=>e({digitBackground:ue}),label:Ge("Box Background","digiblocks")}]:[],{value:T,onChange:ue=>e({labelColor:ue}),label:Ge("Label Color","digiblocks")},...de?[{value:Z,onChange:ue=>e({separatorColor:ue}),label:Ge("Separator Color","digiblocks")}]:[],...H==="boxes"&&E==="outlined"?[{value:We,onChange:ue=>e({boxBorderColor:ue}),label:Ge("Border Color","digiblocks")}]:[]]}):wp.element.createElement($c,{title:Ge("Hover Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:B,onChange:ue=>e({digitHoverColor:ue}),label:Ge("Digit Color","digiblocks")},...H==="boxes"?[{value:O,onChange:ue=>e({digitHoverBackground:ue}),label:Ge("Box Background","digiblocks")}]:[],{value:V,onChange:ue=>e({labelHoverColor:ue}),label:Ge("Label Color","digiblocks")},...de?[{value:ee,onChange:ue=>e({separatorHoverColor:ue}),label:Ge("Separator Color","digiblocks")}]:[]]}))),wp.element.createElement(Zt,{tab:"style",name:"typography",title:Ge("Typography","digiblocks"),initialOpen:!1},wp.element.createElement(Nc,{label:Ge("Digit Typography","digiblocks"),value:re,onChange:a=>e({titleTypography:a}),defaults:{fontSize:{desktop:32,tablet:28,mobile:24},fontSizeUnit:"px",lineHeight:{desktop:1.2,tablet:1.2,mobile:1.2},lineHeightUnit:"em",fontWeight:"600"}}),wp.element.createElement(Nc,{label:Ge("Label Typography","digiblocks"),value:se,onChange:a=>e({contentTypography:a}),defaults:{fontSize:{desktop:14,tablet:13,mobile:12},fontSizeUnit:"px",lineHeight:{desktop:1.4,tablet:1.4,mobile:1.4},lineHeightUnit:"em"}})),H==="boxes"&&wp.element.createElement(Zt,{tab:"style",name:"boxStyles",title:Ge("Box Style","digiblocks"),initialOpen:!1},wp.element.createElement(wi,{label:Ge("Border Radius","digiblocks")},wp.element.createElement(ka,{values:f&&f[xe]?f[xe]:{top:4,right:4,bottom:4,left:4,unit:"px"},onChange:a=>e({boxBorderRadius:{...f,[xe]:a}}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]})),E==="outlined"&&wp.element.createElement(wi,{label:Ge("Border Width","digiblocks")},wp.element.createElement(ka,{values:le&&le[xe]?le[xe]:{top:1,right:1,bottom:1,left:1,unit:"px"},onChange:a=>e({boxBorderWidth:{...le,[xe]:a}})})),wp.element.createElement(wi,{label:Ge("Padding","digiblocks")},wp.element.createElement(ka,{values:b&&b[xe]?b[xe]:{top:10,right:10,bottom:10,left:10,unit:"px"},onChange:a=>e({boxPadding:{...b,[xe]:a}})})),wp.element.createElement(wi,{label:Ge("Margin","digiblocks")},wp.element.createElement(ka,{values:D&&D[xe]?D[xe]:{top:0,right:0,bottom:0,left:0,unit:"px"},onChange:a=>e({boxMargin:{...D,[xe]:a}})})),wp.element.createElement(lt,{label:Ge("Box Shadow","digiblocks"),checked:!!Se,onChange:()=>e({showBoxShadow:!Se}),__nextHasNoMarginBottom:!0}),Se&&wp.element.createElement(Hb,{normalValue:K,hoverValue:L,onNormalChange:a=>e({boxShadow:a}),onHoverChange:a=>e({boxShadowHover:a})})),wp.element.createElement(Zt,{tab:"style",name:"spacing",title:Ge("Spacing","digiblocks"),initialOpen:!1},wp.element.createElement(wi,{label:Ge("Items Spacing","digiblocks")},wp.element.createElement(_c,{value:oe&&oe[xe]!==void 0?oe[xe]:20,onChange:a=>e({itemSpacing:{...oe,[xe]:a}}),min:0,max:100,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(wi,{label:Ge("Label Spacing","digiblocks")},wp.element.createElement(_c,{value:A&&A[xe]!==void 0?A[xe]:5,onChange:a=>e({labelSpacing:{...A,[xe]:a}}),min:0,max:50,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}))));case"advanced":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Zt,{tab:"advanced",name:"animation",title:Ge("Animation","digiblocks"),initialOpen:!0},wp.element.createElement(fa,{label:Ge("Animation Effect","digiblocks"),value:Y,options:ce,onChange:a=>e({animation:a}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),Y&&Y!=="none"&&wp.element.createElement("div",{style:{marginTop:"10px"}},wp.element.createElement($b,{variant:"secondary",isSecondary:!0,onClick:Je,disabled:me,style:{width:"100%"}},Ge(me?"Animating...":"Preview Animation","digiblocks")))),wp.element.createElement(Zt,{tab:"advanced",name:"visibility",title:Ge("Visibility","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control__help",style:{padding:"12px",backgroundColor:"#f0f6fc",border:"1px solid #c3ddfd",borderRadius:"4px",marginBottom:"16px"}},wp.element.createElement("strong",null,Ge("Editor Note:","digiblocks")),wp.element.createElement("br",null),Ge("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.","digiblocks")),wp.element.createElement(lt,{label:Ge("Hide on Desktop","digiblocks"),checked:n.desktop,onChange:a=>e({visibility:{...n,desktop:a}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(lt,{label:Ge("Hide on Tablet","digiblocks"),checked:n.tablet,onChange:a=>e({visibility:{...n,tablet:a}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(lt,{label:Ge("Hide on Mobile","digiblocks"),checked:n.mobile,onChange:a=>e({visibility:{...n,mobile:a}}),__nextHasNoMarginBottom:!0})),wp.element.createElement(Zt,{tab:"advanced",name:"additional",title:Ge("Additional","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control html-anchor-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"html-anchor"},Ge("HTML anchor","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"html-anchor",value:P||"",onChange:a=>e({anchor:a.target.value}),"aria-describedby":"html-anchor-help",autoCapitalize:"none",autoComplete:"off"})),wp.element.createElement("p",{id:"html-anchor-help",className:"components-base-control__help"},Ge(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`,"digiblocks")," ",wp.element.createElement("a",{className:"components-external-link",href:"https://wordpress.org/documentation/article/page-jumps/",target:"_blank",rel:"external noreferrer noopener"},wp.element.createElement("span",{className:"components-external-link__contents"},Ge("Learn more about anchors","digiblocks")),wp.element.createElement("span",{className:"components-external-link__icon","aria-label":"(opens in a new tab)"},"\u2197")))),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"additional-css-classes"},Ge("Additional CSS class(es)","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"additional-css-classes",value:te||"",onChange:a=>e({customClasses:a.target.value}),"aria-describedby":"additional-css-classes-help",autoComplete:"off"})),wp.element.createElement("p",{id:"additional-css-classes-help",className:"components-base-control__help"},Ge("Separate multiple classes with spaces.","digiblocks")))));default:return null}},y=xb({className:`digiblocks-countdown ${o} ${te||""}`,id:P||null});if(!_&&!v&&!M&&!N)return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Sc,null,wp.element.createElement(Hc,{tabs:S,activeTab:Ve,onSelect:Ee},ae())),wp.element.createElement("div",{...y,style:{textAlign:q}},wp.element.createElement("div",{className:"digiblocks-countdown-error"},Ge("Please enable at least one time unit in the block settings.","digiblocks"))));let u=()=>{let{days:a,hours:ue,minutes:Fe,seconds:eo}=ve,ao=[];return _&&(ao.push(wp.element.createElement("div",{key:"days",className:"digiblocks-countdown-item digiblocks-countdown-days"},wp.element.createElement("div",{className:"digiblocks-countdown-item-inner"},J==="inside"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:"digiblocks-countdown-digit"},Q(a)),wp.element.createElement("div",{className:"digiblocks-countdown-label"},m||Ge("Days","digiblocks"))):wp.element.createElement("div",{className:"digiblocks-countdown-digit"},Q(a))),J!=="inside"&&wp.element.createElement("div",{className:"digiblocks-countdown-label"},m||Ge("Days","digiblocks")))),de&&(v||M||N)&&ao.push(wp.element.createElement("div",{key:"days-separator",className:"digiblocks-countdown-separator"}))),v&&(ao.push(wp.element.createElement("div",{key:"hours",className:"digiblocks-countdown-item digiblocks-countdown-hours"},wp.element.createElement("div",{className:"digiblocks-countdown-item-inner"},J==="inside"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:"digiblocks-countdown-digit"},Q(ue)),wp.element.createElement("div",{className:"digiblocks-countdown-label"},s||Ge("Hours","digiblocks"))):wp.element.createElement("div",{className:"digiblocks-countdown-digit"},Q(ue))),J!=="inside"&&wp.element.createElement("div",{className:"digiblocks-countdown-label"},s||Ge("Hours","digiblocks")))),de&&(M||N)&&ao.push(wp.element.createElement("div",{key:"hours-separator",className:"digiblocks-countdown-separator"}))),M&&(ao.push(wp.element.createElement("div",{key:"minutes",className:"digiblocks-countdown-item digiblocks-countdown-minutes"},wp.element.createElement("div",{className:"digiblocks-countdown-item-inner"},J==="inside"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:"digiblocks-countdown-digit"},Q(Fe)),wp.element.createElement("div",{className:"digiblocks-countdown-label"},$||Ge("Minutes","digiblocks"))):wp.element.createElement("div",{className:"digiblocks-countdown-digit"},Q(Fe))),J!=="inside"&&wp.element.createElement("div",{className:"digiblocks-countdown-label"},$||Ge("Minutes","digiblocks")))),de&&N&&ao.push(wp.element.createElement("div",{key:"minutes-separator",className:"digiblocks-countdown-separator"}))),N&&ao.push(wp.element.createElement("div",{key:"seconds",className:"digiblocks-countdown-item digiblocks-countdown-seconds"},wp.element.createElement("div",{className:"digiblocks-countdown-item-inner"},J==="inside"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:"digiblocks-countdown-digit"},Q(eo)),wp.element.createElement("div",{className:"digiblocks-countdown-label"},I||Ge("Seconds","digiblocks"))):wp.element.createElement("div",{className:"digiblocks-countdown-digit"},Q(eo))),J!=="inside"&&wp.element.createElement("div",{className:"digiblocks-countdown-label"},I||Ge("Seconds","digiblocks")))),ao},Ne=ve.days===0&&ve.hours===0&&ve.minutes===0&&ve.seconds===0;return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(yb,null,wp.element.createElement(Cb,{value:q,onChange:a=>e({align:a})})),wp.element.createElement(Sc,null,wp.element.createElement(Hc,{tabs:S,activeTab:Ve,onSelect:Ee},ae())),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:c()}}),wp.element.createElement("div",{...y},Ne?wp.element.createElement("div",{className:"digiblocks-countdown-expired"},Ce||Ge("Time's up!","digiblocks")):wp.element.createElement("div",{className:"digiblocks-countdown-container"},u())))},zc=zb;var{useBlockProps:Mb}=window.wp.blockEditor,Db=({attributes:ie})=>{let{id:e,anchor:X,customClasses:o,endDate:P,showDays:n,showHours:te,showMinutes:l,showSeconds:_,daysLabel:v,hoursLabel:M,minutesLabel:N,secondsLabel:m,displaySeparator:s,separatorType:$,expiredMessage:I,animation:C,align:k,style:B,boxesEqual:O,labelPosition:T}=ie,V=["digiblocks-countdown",e,`align-${k}`,C!=="none"?`animate-${C}`:"",B==="boxes"?"digiblocks-countdown-boxes":"digiblocks-countdown-simple",O?"digiblocks-countdown-equal-width":"",`digiblocks-countdown-labels-${T}`,s?"digiblocks-countdown-has-separators":"",s?`digiblocks-countdown-separator-${$}`:"",o||""].filter(Boolean).join(" "),Z=Mb.save({className:V,id:X||null,"data-end-date":P||"","data-show-days":n?"true":"false","data-show-hours":te?"true":"false","data-show-minutes":l?"true":"false","data-show-seconds":_?"true":"false","data-days-label":v||"Days","data-hours-label":M||"Hours","data-minutes-label":N||"Minutes","data-seconds-label":m||"Seconds","data-expired-message":I||"Time's up!","data-label-position":T||"bottom"});return wp.element.createElement("div",{...Z},wp.element.createElement("div",{className:"digiblocks-countdown-container"},n&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:"digiblocks-countdown-item digiblocks-countdown-days"},wp.element.createElement("div",{className:"digiblocks-countdown-item-inner"},T==="inside"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:"digiblocks-countdown-digit"},"00"),wp.element.createElement("div",{className:"digiblocks-countdown-label"},v||"Days")):wp.element.createElement("div",{className:"digiblocks-countdown-digit"},"00")),T!=="inside"&&wp.element.createElement("div",{className:"digiblocks-countdown-label"},v||"Days")),s&&(te||l||_)&&wp.element.createElement("div",{className:"digiblocks-countdown-separator"})),te&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:"digiblocks-countdown-item digiblocks-countdown-hours"},wp.element.createElement("div",{className:"digiblocks-countdown-item-inner"},T==="inside"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:"digiblocks-countdown-digit"},"00"),wp.element.createElement("div",{className:"digiblocks-countdown-label"},M||"Hours")):wp.element.createElement("div",{className:"digiblocks-countdown-digit"},"00")),T!=="inside"&&wp.element.createElement("div",{className:"digiblocks-countdown-label"},M||"Hours")),s&&(l||_)&&wp.element.createElement("div",{className:"digiblocks-countdown-separator"})),l&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:"digiblocks-countdown-item digiblocks-countdown-minutes"},wp.element.createElement("div",{className:"digiblocks-countdown-item-inner"},T==="inside"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:"digiblocks-countdown-digit"},"00"),wp.element.createElement("div",{className:"digiblocks-countdown-label"},N||"Minutes")):wp.element.createElement("div",{className:"digiblocks-countdown-digit"},"00")),T!=="inside"&&wp.element.createElement("div",{className:"digiblocks-countdown-label"},N||"Minutes")),s&&_&&wp.element.createElement("div",{className:"digiblocks-countdown-separator"})),_&&wp.element.createElement("div",{className:"digiblocks-countdown-item digiblocks-countdown-seconds"},wp.element.createElement("div",{className:"digiblocks-countdown-item-inner"},T==="inside"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:"digiblocks-countdown-digit"},"00"),wp.element.createElement("div",{className:"digiblocks-countdown-label"},m||"Seconds")):wp.element.createElement("div",{className:"digiblocks-countdown-digit"},"00")),T!=="inside"&&wp.element.createElement("div",{className:"digiblocks-countdown-label"},m||"Seconds"))),wp.element.createElement("div",{className:"digiblocks-countdown-expired",style:{display:"none"}},I||"Time's up!"))},Mc=Db;var{__:Ht}=window.wp.i18n,{registerBlockType:Pb}=window.wp.blocks,{getBlockActiveStatus:Rb}=window.wp.digiBlocks;Pb("digiblocks/countdown",{apiVersion:2,title:digiBlocksData.blocks.countdown.title,category:"digiblocks",icon:{src:()=>{let{viewbox:ie,path:e}=digiBlocksData.blocks.countdown.icon;return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${ie}`,className:"digiblocks-editor-icons"},wp.element.createElement("path",{d:e}))}},description:digiBlocksData.blocks.countdown.description,keywords:[Ht("countdown","digiblocks"),Ht("timer","digiblocks"),Ht("clock","digiblocks")],supports:{inserter:!!Rb("countdown"),html:!1,className:!1,customClassName:!1,anchor:!1},attributes:{id:{type:"string",default:""},anchor:{type:"string",default:""},visibility:{type:"object",default:{desktop:!1,tablet:!1,mobile:!1}},customClasses:{type:"string",default:""},endDate:{type:"string",default:""},showDays:{type:"boolean",default:!0},showHours:{type:"boolean",default:!0},showMinutes:{type:"boolean",default:!0},showSeconds:{type:"boolean",default:!0},daysLabel:{type:"string",default:Ht("Days","digiblocks")},hoursLabel:{type:"string",default:Ht("Hours","digiblocks")},minutesLabel:{type:"string",default:Ht("Minutes","digiblocks")},secondsLabel:{type:"string",default:Ht("Seconds","digiblocks")},digitColor:{type:"string",default:"#333333"},digitBackground:{type:"string",default:"#f0f0f0"},digitHoverColor:{type:"string",default:""},digitHoverBackground:{type:"string",default:""},labelColor:{type:"string",default:"#666666"},labelHoverColor:{type:"string",default:""},separatorColor:{type:"string",default:"#333333"},separatorHoverColor:{type:"string",default:""},boxStyle:{type:"string",default:"default"},boxBorderRadius:{type:"object",default:{desktop:{top:4,right:4,bottom:4,left:4,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},boxPadding:{type:"object",default:{desktop:{top:10,right:10,bottom:10,left:10,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},boxMargin:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},boxBorderWidth:{type:"object",default:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},boxBorderColor:{type:"string",default:"#e0e0e0"},showBoxShadow:{type:"boolean",default:!1},boxShadow:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},boxShadowHover:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},itemSpacing:{type:"object",default:{desktop:48,tablet:30,mobile:16}},align:{type:"string",default:"center"},labelPosition:{type:"string",default:"bottom"},labelSpacing:{type:"object",default:{desktop:5,tablet:4,mobile:3}},titleTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:70,tablet:38,mobile:26},fontSizeUnit:"px",fontWeight:"600",fontStyle:"normal",textTransform:"",textDecoration:"",lineHeight:{desktop:1.2,tablet:1.2,mobile:1.2},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}},contentTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:16,tablet:14,mobile:12},fontSizeUnit:"px",fontWeight:"",fontStyle:"normal",textTransform:"",textDecoration:"",lineHeight:{desktop:1.4,tablet:1.4,mobile:1.4},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}},expiredMessage:{type:"string",default:Ht("Time's up!","digiblocks")},animation:{type:"string",default:"none"},displaySeparator:{type:"boolean",default:!1},separatorType:{type:"string",default:"colon"},boxesEqual:{type:"boolean",default:!1},style:{type:"string",default:"boxes"}},example:{attributes:{endDate:new Date(Date.now()+2592e6).toISOString(),style:"boxes",boxStyle:"filled",digitColor:"#ffffff",digitBackground:"#1e73be",labelColor:"#333333",showDays:!0,showHours:!0,showMinutes:!0,showSeconds:!0,titleTypography:{fontSize:{desktop:32}},contentTypography:{fontSize:{desktop:14}}}},edit:zc,save:Mc});var{__:Re}=window.wp.i18n,{useBlockProps:Ib,InspectorControls:Lb,PanelColorSettings:nt,BlockControls:Ob,AlignmentToolbar:Ub}=window.wp.blockEditor,{TabPanel:jb,SelectControl:pl,RangeControl:Kt,TextControl:zt,ToggleControl:bl,Button:Dc,__experimentalToggleGroupControl:G1,__experimentalToggleGroupControlOption:Q1}=window.wp.components,{useState:Xt,useEffect:Qn,useRef:Vb}=window.wp.element,{useBlockId:Fb,getDimensionCSS:Mt,animations:Jn,animationPreview:Pc}=digi.utils,{tabIcons:Yn}=digi.icons,{ResponsiveControl:ht,DimensionControl:Dt,TypographyControl:Zn,BoxShadowControl:Eb,CustomTabPanel:Wb,TabPanelBody:ft}=digi.components,qb=({attributes:ie,setAttributes:e,clientId:X})=>{let{id:o,anchor:P,visibility:n,customClasses:te,iconValue:l,startNumber:_,endNumber:v,title:M,description:N,counterColor:m,counterHoverColor:s,titleColor:$,titleHoverColor:I,textColor:C,textHoverColor:k,backgroundColor:B,backgroundHoverColor:O,iconColor:T,iconHoverColor:V,iconBackgroundColor:Z,iconHoverBackgroundColor:ee,iconSize:E,iconPadding:f,iconMargin:b,iconBorderStyle:D,iconBorderWidth:le,iconBorderRadius:We,iconBorderColor:Se,iconHoverBorderColor:K,typography:L,titleTypography:oe,contentTypography:q,padding:J,margin:A,align:re,animation:se,boxShadow:Ce,boxShadowHover:Y,borderStyle:de,borderWidth:He,borderRadius:be,borderColor:H,hoverEffect:xe,animationDuration:x,animationDelay:ve,thousandSeparator:U,decimalPlaces:me,decimalSeparator:Te,layoutStyle:qe,verticalSpacing:Ve,counterPrefix:Ee,counterPrefixSpacing:Oe,counterSuffix:j,counterSuffixSpacing:ye,numberWithCommas:Je,displayIcon:G}=ie;Fb(o,X,e);let[pe,R]=Xt(window.digi.responsiveState.activeDevice),[d,ce]=Xt(!1),[S,g]=Xt(_||0),[Q,c]=Xt(!1),[ae,y]=Xt("normal");Qn(()=>window.digi.responsiveState.subscribe(Ke=>{R(Ke)}),[]);let[u,Ne]=Xt(()=>{if(window.digi.uiState){let z=window.digi.uiState.getActiveTab(X);if(z)return z}return"options"}),[a,ue]=Xt(!1);Qn(()=>{let z=()=>window.digi&&window.digi.components&&window.digi.components.FontAwesomeControl?(ue(!0),!0):!1;if(!z()){let Ke=setTimeout(()=>{z()&&clearTimeout(Ke)},500);return()=>clearTimeout(Ke)}},[]);let Fe=z=>{e({iconValue:z})},eo=Vb(null);Qn(()=>{if(se&&se!=="none"){let z=setTimeout(()=>{Pc(o,se,Jn,eo)},100);return()=>clearTimeout(z)}},[se]);let ao=()=>{Pc(o,se,Jn,eo)},go=()=>{if(Q)return;let z=parseInt(_)||0,Ke=parseInt(v)||0,ro=x||2e3,W=50,ze=ro/W,ho=(Ke-z)/W;c(!0),g(z);let uo=0,xo=setInterval(()=>{if(uo++,uo>=W)g(Ke),clearInterval(xo),c(!1);else{let Mo=z+ho*uo;g(Math.round(Mo))}},ze);return()=>clearInterval(xo)},t=z=>{typeof z!="number"&&(z=parseFloat(z)||0);let Ke=z;me&&me>0?Ke=z.toFixed(me):Ke=Math.round(z);let ro=Ke.toString();if(me>0&&Te&&Te!=="."&&(ro=ro.replace(".",Te)),Je&&U){let W=ro.split(Te||".");W[0]=W[0].replace(/\B(?=(\d{3})+(?!\d))/g,U),ro=W.join(Te||".")}return ro},p=[{label:Re("Default","digiblocks"),value:"default"},{label:Re("None","digiblocks"),value:"none"},{label:Re("Solid","digiblocks"),value:"solid"},{label:Re("Dotted","digiblocks"),value:"dotted"},{label:Re("Dashed","digiblocks"),value:"dashed"},{label:Re("Double","digiblocks"),value:"double"},{label:Re("Groove","digiblocks"),value:"groove"},{label:Re("Inset","digiblocks"),value:"inset"},{label:Re("Outset","digiblocks"),value:"outset"},{label:Re("Ridge","digiblocks"),value:"ridge"}],De=[{label:Re("None","digiblocks"),value:"none"},{label:Re("Lift","digiblocks"),value:"lift"},{label:Re("Scale","digiblocks"),value:"scale"},{label:Re("Glow","digiblocks"),value:"glow"}],r=[{label:Re("None","digiblocks"),value:"none"},...Object.keys(Jn).map(z=>({label:z.replace(/-/g," ").replace(/\b\w/g,Ke=>Ke.toUpperCase()),value:z}))],he=[{label:Re("Stacked","digiblocks"),value:"stacked"},{label:Re("Inline","digiblocks"),value:"inline"},{label:Re("Centered","digiblocks"),value:"centered"}],oo=[{name:"options",title:Re("Options","digiblocks"),icon:Yn.optionsIcon},{name:"style",title:Re("Style","digiblocks"),icon:Yn.styleIcon},{name:"advanced",title:Re("Advanced","digiblocks"),icon:Yn.advancedIcon}],h=[{name:"normal",title:Re("Normal","digiblocks"),className:"digiblocks-tab-1 normal"},{name:"hover",title:Re("Hover","digiblocks"),className:"digiblocks-tab-2 hover"}],w=()=>{let z=window.digi.responsiveState.activeDevice,Ke="";de&&de!=="default"&&de!=="none"?Ke=`
                border-style: ${de};
                border-color: ${H||"#e0e0e0"};
				${Mt(He,"border-width",z)}
				${Mt(be,"border-radius",z)}
            `:Ke="border-style: none;";let ro="box-shadow: none;";Ce&&Ce.enable&&(ro=`box-shadow: ${Ce.position==="inset"?"inset ":""}${Ce.horizontal}px ${Ce.vertical}px ${Ce.blur}px ${Ce.spread}px ${Ce.color};`);let W=`${Mt(J,"padding",z)}`,ze=`${Mt(A,"margin",z)}`,ho="";oe&&(oe.fontFamily&&(ho+=`font-family: ${oe.fontFamily};`),oe.fontSize&&oe.fontSize[z]&&(ho+=`font-size: ${oe.fontSize[z]}${oe.fontSizeUnit||"px"};`),oe.fontWeight&&(ho+=`font-weight: ${oe.fontWeight};`),oe.fontStyle&&(ho+=`font-style: ${oe.fontStyle};`),oe.textTransform&&(ho+=`text-transform: ${oe.textTransform};`),oe.textDecoration&&(ho+=`text-decoration: ${oe.textDecoration};`),oe.lineHeight&&oe.lineHeight[z]&&(ho+=`line-height: ${oe.lineHeight[z]}${oe.lineHeightUnit||"em"};`),oe.letterSpacing&&oe.letterSpacing[z]&&(ho+=`letter-spacing: ${oe.letterSpacing[z]}${oe.letterSpacingUnit||"px"};`));let uo="";q&&(q.fontFamily&&(uo+=`font-family: ${q.fontFamily};`),q.fontSize&&q.fontSize[z]&&(uo+=`font-size: ${q.fontSize[z]}${q.fontSizeUnit||"px"};`),q.fontWeight&&(uo+=`font-weight: ${q.fontWeight};`),q.fontStyle&&(uo+=`font-style: ${q.fontStyle};`),q.textTransform&&(uo+=`text-transform: ${q.textTransform};`),q.textDecoration&&(uo+=`text-decoration: ${q.textDecoration};`),q.lineHeight&&q.lineHeight[z]&&(uo+=`line-height: ${q.lineHeight[z]}${q.lineHeightUnit||"em"};`),q.letterSpacing&&q.letterSpacing[z]&&(uo+=`letter-spacing: ${q.letterSpacing[z]}${q.letterSpacingUnit||"px"};`));let xo="";L&&(L.fontFamily&&(xo+=`font-family: ${L.fontFamily};`),L.fontSize&&L.fontSize[z]&&(xo+=`font-size: ${L.fontSize[z]}${L.fontSizeUnit||"px"};`),L.fontWeight&&(xo+=`font-weight: ${L.fontWeight};`),L.fontStyle&&(xo+=`font-style: ${L.fontStyle};`),L.textTransform&&(xo+=`text-transform: ${L.textTransform};`),L.textDecoration&&(xo+=`text-decoration: ${L.textDecoration};`),L.lineHeight&&L.lineHeight[z]&&(xo+=`line-height: ${L.lineHeight[z]}${L.lineHeightUnit||"em"};`),L.letterSpacing&&L.letterSpacing[z]&&(xo+=`letter-spacing: ${L.letterSpacing[z]}${L.letterSpacingUnit||"px"};`));let Mo="",Do="",ko="";G&&l&&l.svg&&(Z&&(Mo+=`background-color: ${Z};`),D&&D!=="default"&&D!=="none"&&(Mo+=`
                    border-style: ${D};
                    border-color: ${Se||"#e0e0e0"};
					${Mt(le,"border-width",z)}
					${Mt(We,"border-radius",z)}
                `),f&&f[z]&&(Mo+=`${Mt(f,"padding",z)}`),V&&(Do+=`fill: ${V} !important; color: ${V} !important;`),ee&&(Do+=`background-color: ${ee};`),K&&(Do+=`border-color: ${K};`),b&&b[z]?ko=`${Mt(b,"margin",z)}`:ko=`margin: 0px 0px ${z==="desktop"?20:z==="tablet"?15:10}px 0px;`);let mo="";if(Y&&Y.enable){let yo=Y.position==="inset"?"inset ":"";mo+=`box-shadow: ${yo}${Y.horizontal}px ${Y.vertical}px ${Y.blur}px ${Y.spread}px ${Y.color};`}return xe==="lift"?mo+="transform: translateY(-10px);":xe==="scale"?mo+="transform: scale(1.05);":xe==="glow"&&(mo+="filter: brightness(1.1);"),`
            /* Main block styles */
            .${o} {
                background-color: ${B||"transparent"};
                ${ro}
                ${W}
                ${ze}
                ${Ke}
                transition: all 0.3s ease;
                text-align: ${re||"center"};
            }
            
            /* Hover effects */
            .${o}:hover {
                ${O?`background-color: ${O};`:""}
                ${mo}
            }
            
            /* Layout styles */
            .${o} .digiblocks-counter-inner {
                display: flex;
                flex-direction: ${qe==="inline"?"row":"column"};
                align-items: ${qe==="inline"?"center":re==="left"?"flex-start":re==="right"?"flex-end":"center"};
                justify-content: ${qe==="inline"?"flex-start":"center"};
                gap: ${Ve||15}px;
                ${qe==="centered"?"text-align: center;":""}
            }
            
            ${G&&l&&l.svg?`
            /* Icon styles */
            .${o} .digiblocks-counter-icon {
				${ko}
                display: inline-flex;
                align-items: center;
                justify-content: center;
                ${Mo}
                transition: all 0.3s ease;
            }

            .${o} .digiblocks-counter-icon span {
                display: flex;
            }

            .${o} .digiblocks-counter-icon svg {
                width: ${E&&E[z]?E[z]:32}px;
                height: 100%;
                fill: ${T||"inherit"};
                transition: all 0.3s ease;
            }
            
            /* Icon hover styles */
            .${o}:hover .digiblocks-counter-icon {
                ${Do}
            }
            
            .${o}:hover .digiblocks-counter-icon svg {
                ${V?`fill: ${V};`:""}
            }
            `:""}
            
            /* Counter styles */
            .${o} .digiblocks-counter-number-wrapper {
                display: flex;
                align-items: center;
                justify-content: ${re==="left"?"flex-start":re==="right"?"flex-end":"center"};
                margin-bottom: 10px;
            }
            
            .${o} .digiblocks-counter-prefix {
                margin-right: ${Oe||5}px;
                color: ${m||"#333333"};
                ${xo}
                transition: color 0.3s ease;
            }
            
            .${o} .digiblocks-counter-suffix {
                margin-left: ${ye||5}px;
                color: ${m||"#333333"};
                ${xo}
                transition: color 0.3s ease;
            }
            
            .${o} .digiblocks-counter-number {
                color: ${m||"#333333"};
                ${xo}
                transition: color 0.3s ease;
            }
            
            /* Counter hover styles */
            .${o}:hover .digiblocks-counter-number,
            .${o}:hover .digiblocks-counter-prefix,
            .${o}:hover .digiblocks-counter-suffix {
                ${s?`color: ${s};`:""}
            }
            
            /* Title styles */
            .${o} .digiblocks-counter-title {
                color: ${$||"inherit"};
                margin-bottom: 10px;
                ${ho}
                transition: color 0.3s ease;
            }
            
            /* Title hover styles */
            .${o}:hover .digiblocks-counter-title {
                ${I?`color: ${I};`:""}
            }
            
            /* Content styles */
            .${o} .digiblocks-counter-description {
                color: ${C||"inherit"};
                ${uo}
                transition: color 0.3s ease;
            }
            
            /* Content hover styles */
            .${o}:hover .digiblocks-counter-description {
                ${k?`color: ${k};`:""}
            }

			/* Visibility Controls */
			${n.desktop?`
				@media (min-width: 992px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${n.tablet?`
				@media (min-width: 768px) and (max-width: 991px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${n.mobile?`
				@media (max-width: 767px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}
        `},Pe=a?window.digi.components.FontAwesomeControl:null,Ze=()=>!G||!l||!l.svg||l.svg.trim()===""?null:wp.element.createElement("div",{className:"digiblocks-counter-icon"},wp.element.createElement("span",{dangerouslySetInnerHTML:{__html:l.svg}})),i=z=>z==="normal"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(nt,{title:Re("Counter Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:m,onChange:Ke=>e({counterColor:Ke}),label:Re("Counter Color","digiblocks")}]}),wp.element.createElement(nt,{title:Re("Content Colors","digiblocks"),initialOpen:!1,enableAlpha:!0,colorSettings:[{value:$,onChange:Ke=>e({titleColor:Ke}),label:Re("Title Color","digiblocks")},{value:C,onChange:Ke=>e({textColor:Ke}),label:Re("Description Color","digiblocks")}]}),G&&wp.element.createElement(nt,{title:Re("Icon Colors","digiblocks"),initialOpen:!1,enableAlpha:!0,colorSettings:[{value:T,onChange:Ke=>e({iconColor:Ke}),label:Re("Icon Color","digiblocks")},{value:Z,onChange:Ke=>e({iconBackgroundColor:Ke}),label:Re("Icon Background","digiblocks")}]}),wp.element.createElement(nt,{title:Re("Block Colors","digiblocks"),initialOpen:!1,enableAlpha:!0,colorSettings:[{value:B,onChange:Ke=>e({backgroundColor:Ke}),label:Re("Background Color","digiblocks")}]})):z==="hover"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(nt,{title:Re("Counter Hover Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:s,onChange:Ke=>e({counterHoverColor:Ke}),label:Re("Counter Hover Color","digiblocks")}]}),wp.element.createElement(nt,{title:Re("Content Hover Colors","digiblocks"),initialOpen:!1,enableAlpha:!0,colorSettings:[{value:I,onChange:Ke=>e({titleHoverColor:Ke}),label:Re("Title Hover Color","digiblocks")},{value:k,onChange:Ke=>e({textHoverColor:Ke}),label:Re("Description Hover Color","digiblocks")}]}),G&&wp.element.createElement(nt,{title:Re("Icon Hover Colors","digiblocks"),initialOpen:!1,enableAlpha:!0,colorSettings:[{value:V,onChange:Ke=>e({iconHoverColor:Ke}),label:Re("Icon Hover Color","digiblocks")},{value:ee,onChange:Ke=>e({iconHoverBackgroundColor:Ke}),label:Re("Icon Hover Background","digiblocks")}]}),wp.element.createElement(nt,{title:Re("Block Hover Colors","digiblocks"),initialOpen:!1,enableAlpha:!0,colorSettings:[{value:O,onChange:Ke=>e({backgroundHoverColor:Ke}),label:Re("Background Hover Color","digiblocks")}]})):null,F=()=>{switch(u){case"options":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:"components-panel__body is-opened"},wp.element.createElement(bl,{label:Re("Display Icon","digiblocks"),checked:G,onChange:z=>e({displayIcon:z}),__nextHasNoMarginBottom:!0}),G&&wp.element.createElement("div",{style:{marginBottom:"2rem"}},a?wp.element.createElement(Pe,{label:Re("Select Icon","digiblocks"),value:l,onChange:Fe}):wp.element.createElement("div",{style:{textAlign:"center",padding:"20px 0"}},wp.element.createElement("div",{className:"components-spinner"}),wp.element.createElement("p",null,Re("Loading icon selector...","digiblocks"))),l&&a&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{style:{marginTop:"15px",marginBottom:"15px",padding:"10px",background:"#f0f0f1",borderRadius:"3px"}},wp.element.createElement("p",{style:{margin:"0 0 5px 0"}},wp.element.createElement("strong",null,Re("Selected Icon:","digiblocks"))," ",l.name),wp.element.createElement("p",{style:{margin:"0 0 5px 0"}},wp.element.createElement("strong",null,Re("Style:","digiblocks"))," ",l.style),l.categories&&l.categories.length>0&&wp.element.createElement("p",{style:{margin:"0"}},wp.element.createElement("strong",null,Re("Categories:","digiblocks"))," ",l.categories.join(", "))))),wp.element.createElement(pl,{label:Re("Layout Style","digiblocks"),value:qe||"stacked",options:he,onChange:z=>e({layoutStyle:z}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Kt,{label:Re("Spacing","digiblocks"),value:Ve||15,onChange:z=>e({verticalSpacing:z}),min:0,max:100,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(zt,{label:Re("Starting Number","digiblocks"),type:"number",value:_,onChange:z=>e({startNumber:z}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(zt,{label:Re("Ending Number","digiblocks"),type:"number",value:v,onChange:z=>e({endNumber:z}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(zt,{label:Re("Counter Prefix","digiblocks"),value:Ee||"",onChange:z=>e({counterPrefix:z}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),Ee&&wp.element.createElement(Kt,{label:Re("Prefix Spacing","digiblocks"),value:Oe||5,onChange:z=>e({counterPrefixSpacing:z}),min:0,max:30,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(zt,{label:Re("Counter Suffix","digiblocks"),value:j||"",onChange:z=>e({counterSuffix:z}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),j&&wp.element.createElement(Kt,{label:Re("Suffix Spacing","digiblocks"),value:ye||5,onChange:z=>e({counterSuffixSpacing:z}),min:0,max:30,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(zt,{label:Re("Title","digiblocks"),value:M||"",onChange:z=>e({title:z}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(zt,{label:Re("Description","digiblocks"),value:N||"",onChange:z=>e({description:z}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(bl,{label:Re("Use Thousand Separator","digiblocks"),checked:Je,onChange:z=>e({numberWithCommas:z}),__nextHasNoMarginBottom:!0}),Je&&wp.element.createElement(zt,{label:Re("Thousand Separator","digiblocks"),value:U||",",onChange:z=>e({thousandSeparator:z}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Kt,{label:Re("Decimal Places","digiblocks"),value:me||0,onChange:z=>e({decimalPlaces:z}),min:0,max:10,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),me>0&&wp.element.createElement(zt,{label:Re("Decimal Separator","digiblocks"),value:Te||".",onChange:z=>e({decimalSeparator:z}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement("div",{style:{marginTop:"10px"}},wp.element.createElement(Dc,{isPrimary:!0,onClick:go,disabled:Q},Re("Preview Counter Animation","digiblocks")))));case"style":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(ft,{tab:"style",name:"colors",title:Re("Colors","digiblocks"),initialOpen:!0},wp.element.createElement(jb,{className:"digiblocks-control-tabs",activeClass:"active-tab",tabs:h,onSelect:z=>y(z.name)},z=>i(z.name))),wp.element.createElement(ft,{tab:"style",name:"typography",title:Re("Typography","digiblocks"),initialOpen:!1},wp.element.createElement(Zn,{label:Re("Counter Typography","digiblocks"),value:L||{},onChange:z=>e({typography:z}),defaults:{fontSize:{desktop:48,tablet:42,mobile:36},fontSizeUnit:"px",lineHeight:{desktop:1.2,tablet:1.2,mobile:1.2},lineHeightUnit:"em"}}),wp.element.createElement(Zn,{label:Re("Title Typography","digiblocks"),value:oe||{},onChange:z=>e({titleTypography:z}),defaults:{fontSize:{desktop:20,tablet:18,mobile:16},fontSizeUnit:"px",lineHeight:{desktop:1.4,tablet:1.3,mobile:1.2},lineHeightUnit:"em"}}),wp.element.createElement(Zn,{label:Re("Description Typography","digiblocks"),value:q||{},onChange:z=>e({contentTypography:z}),defaults:{fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em"}})),G&&wp.element.createElement(ft,{tab:"style",name:"icon",title:Re("Icon","digiblocks"),initialOpen:!1},wp.element.createElement(ht,{label:Re("Icon Size","digiblocks")},wp.element.createElement(Kt,{value:E&&E[pe]?E[pe]:32,onChange:z=>e({iconSize:{...E||{desktop:32,tablet:28,mobile:24},[pe]:z}}),min:8,max:200,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(pl,{label:Re("Border Style","digiblocks"),value:D||"default",options:p,onChange:z=>{z!=="default"&&z!=="none"&&(D==="default"||D==="none"||!D)&&(!le||Object.keys(le).length===0)&&e({iconBorderWidth:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}}),e({iconBorderStyle:z})},__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),D&&D!=="default"&&D!=="none"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(nt,{title:Re("Border Colors","digiblocks"),enableAlpha:!0,colorSettings:[{value:Se,onChange:z=>e({iconBorderColor:z}),label:Re("Border Color","digiblocks")},{value:K,onChange:z=>e({iconHoverBorderColor:z}),label:Re("Border Hover Color","digiblocks")}]}),wp.element.createElement(ht,{label:Re("Border Width","digiblocks")},wp.element.createElement(Dt,{values:le[pe],onChange:z=>e({iconBorderWidth:{...le||{},[pe]:z}})})),wp.element.createElement(ht,{label:Re("Border Radius","digiblocks")},wp.element.createElement(Dt,{values:We[pe],onChange:z=>e({iconBorderRadius:{...We||{},[pe]:z}}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]}))),wp.element.createElement(ht,{label:Re("Icon Padding","digiblocks")},wp.element.createElement(Dt,{values:f[pe],onChange:z=>e({iconPadding:{...f||{},[pe]:z}})})),wp.element.createElement(ht,{label:Re("Icon Margin","digiblocks")},wp.element.createElement(Dt,{values:b&&b[pe]?b[pe]:{top:0,right:0,bottom:pe==="desktop"?20:pe==="tablet"?15:10,left:0,unit:"px"},onChange:z=>e({iconMargin:{...b||{desktop:{top:0,right:0,bottom:20,left:0,unit:"px"},tablet:{top:0,right:0,bottom:15,left:0,unit:"px"},mobile:{top:0,right:0,bottom:10,left:0,unit:"px"}},[pe]:z}})}))),wp.element.createElement(ft,{tab:"style",name:"animation",title:Re("Counter Animation","digiblocks"),initialOpen:!1},wp.element.createElement(Kt,{label:Re("Animation Duration (ms)","digiblocks"),value:x||2e3,onChange:z=>e({animationDuration:z}),min:100,max:1e4,step:100,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Kt,{label:Re("Animation Delay (ms)","digiblocks"),value:ve||0,onChange:z=>e({animationDelay:z}),min:0,max:1e4,step:100,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(ft,{tab:"style",name:"border",title:Re("Border & Shadow","digiblocks"),initialOpen:!1},wp.element.createElement(pl,{label:Re("Border Style","digiblocks"),value:de||"default",options:p,onChange:z=>{z!=="default"&&z!=="none"&&(de==="default"||de==="none"||!de)&&((!He||Object.keys(He).length===0)&&e({borderWidth:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}}),(!be||Object.keys(be).length===0)&&e({borderRadius:{desktop:{top:8,right:8,bottom:8,left:8,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}})),e({borderStyle:z})},__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),de&&de!=="default"&&de!=="none"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(nt,{title:Re("Border Color","digiblocks"),enableAlpha:!0,colorSettings:[{value:H,onChange:z=>e({borderColor:z}),label:Re("Border Color","digiblocks")}]}),wp.element.createElement(ht,{label:Re("Border Width","digiblocks")},wp.element.createElement(Dt,{values:He[pe],onChange:z=>e({borderWidth:{...He,[pe]:z}})})),wp.element.createElement(ht,{label:Re("Border Radius","digiblocks")},wp.element.createElement(Dt,{values:be[pe],onChange:z=>e({borderRadius:{...be,[pe]:z}}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]}))),wp.element.createElement(pl,{label:Re("Hover Effect","digiblocks"),value:xe||"none",options:De,onChange:z=>e({hoverEffect:z}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Eb,{normalValue:Ce,hoverValue:Y,onNormalChange:z=>e({boxShadow:z}),onHoverChange:z=>e({boxShadowHover:z})})),wp.element.createElement(ft,{tab:"style",name:"spacing",title:Re("Spacing","digiblocks"),initialOpen:!1},wp.element.createElement(ht,{label:Re("Padding","digiblocks")},wp.element.createElement(Dt,{values:J&&J[pe]?J[pe]:{top:30,right:30,bottom:30,left:30,unit:"px"},onChange:z=>e({padding:{...J,[pe]:z}})})),wp.element.createElement(ht,{label:Re("Margin","digiblocks")},wp.element.createElement(Dt,{values:A&&A[pe]?A[pe]:{top:0,right:0,bottom:30,left:0,unit:"px"},onChange:z=>e({margin:{...A,[pe]:z}})}))));case"advanced":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(ft,{tab:"advanced",name:"animation",title:Re("Animation","digiblocks"),initialOpen:!0},wp.element.createElement(pl,{label:Re("Animation Effect","digiblocks"),value:se,options:r,onChange:z=>e({animation:z}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),se&&se!=="none"&&wp.element.createElement("div",{style:{marginTop:"10px"}},wp.element.createElement(Dc,{variant:"secondary",isSecondary:!0,onClick:ao,style:{width:"100%"}},Re("Preview Animation","digiblocks")))),wp.element.createElement(ft,{tab:"advanced",name:"visibility",title:Re("Visibility","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control__help",style:{padding:"12px",backgroundColor:"#f0f6fc",border:"1px solid #c3ddfd",borderRadius:"4px",marginBottom:"16px"}},wp.element.createElement("strong",null,Re("Editor Note:","digiblocks")),wp.element.createElement("br",null),Re("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.","digiblocks")),wp.element.createElement(bl,{label:Re("Hide on Desktop","digiblocks"),checked:n.desktop,onChange:z=>e({visibility:{...n,desktop:z}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(bl,{label:Re("Hide on Tablet","digiblocks"),checked:n.tablet,onChange:z=>e({visibility:{...n,tablet:z}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(bl,{label:Re("Hide on Mobile","digiblocks"),checked:n.mobile,onChange:z=>e({visibility:{...n,mobile:z}}),__nextHasNoMarginBottom:!0})),wp.element.createElement(ft,{tab:"advanced",name:"additional",title:Re("Additional","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control html-anchor-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"html-anchor"},Re("HTML anchor","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"html-anchor",value:P||"",onChange:z=>e({anchor:z.target.value}),"aria-describedby":"html-anchor-help",autoCapitalize:"none",autoComplete:"off"})),wp.element.createElement("p",{id:"html-anchor-help",className:"components-base-control__help"},Re(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`,"digiblocks")," ",wp.element.createElement("a",{className:"components-external-link",href:"https://wordpress.org/documentation/article/page-jumps/",target:"_blank",rel:"external noreferrer noopener"},wp.element.createElement("span",{className:"components-external-link__contents"},Re("Learn more about anchors","digiblocks")),wp.element.createElement("span",{className:"components-external-link__icon","aria-label":"(opens in a new tab)"},"\u2197")))),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"additional-css-classes"},Re("Additional CSS class(es)","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"additional-css-classes",value:te||"",onChange:z=>e({customClasses:z.target.value}),"aria-describedby":"additional-css-classes-help",autoComplete:"off"})),wp.element.createElement("p",{id:"additional-css-classes-help",className:"components-base-control__help"},Re("Separate multiple classes with spaces.","digiblocks")))));default:return null}},Ue=Ib({className:`digiblocks-counter ${o} align-${re} ${te||""}`,id:P||null}),po=t(S);return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Ob,null,wp.element.createElement(Ub,{value:re,onChange:z=>e({align:z})})),wp.element.createElement(Lb,null,wp.element.createElement(Wb,{tabs:oo,activeTab:u,onSelect:Ne},F())),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:w()}}),wp.element.createElement("div",{...Ue},wp.element.createElement("div",{className:"digiblocks-counter-inner"},G&&Ze(),wp.element.createElement("div",{className:"digiblocks-counter-content"},wp.element.createElement("div",{className:"digiblocks-counter-number-wrapper"},Ee&&wp.element.createElement("span",{className:"digiblocks-counter-prefix"},Ee),wp.element.createElement("span",{className:"digiblocks-counter-number"},po),j&&wp.element.createElement("span",{className:"digiblocks-counter-suffix"},j)),M&&wp.element.createElement("h3",{className:"digiblocks-counter-title"},M),N&&wp.element.createElement("p",{className:"digiblocks-counter-description"},N)))))},Rc=qb;var{useBlockProps:Gb}=window.wp.blockEditor,Qb=({attributes:ie})=>{let{id:e,anchor:X,customClasses:o,iconValue:P,startNumber:n,endNumber:te,counterPrefix:l,counterSuffix:_,title:v,description:M,align:N,animation:m,layoutStyle:s,displayIcon:$,numberWithCommas:I,thousandSeparator:C,decimalPlaces:k,decimalSeparator:B,animationDuration:O,animationDelay:T}=ie,V=["digiblocks-counter",e,`align-${N||"center"}`,`layout-${s||"stacked"}`,m!=="none"?`animate-${m}`:"",o||""].filter(Boolean).join(" "),Z=Gb.save({className:V,id:X||null,"data-start-value":n||0,"data-end-value":te||0,"data-animation-duration":O||2e3,"data-animation-delay":T||0,"data-thousand-separator":I?C||",":"","data-decimal-places":k||0,"data-decimal-separator":B||"."}),ee=()=>!$||!P||!P.svg||P.svg.trim()===""?null:wp.element.createElement("div",{className:"digiblocks-counter-icon"},wp.element.createElement("span",{dangerouslySetInnerHTML:{__html:P.svg}}));return wp.element.createElement("div",{...Z},wp.element.createElement("div",{className:"digiblocks-counter-inner"},$&&ee(),wp.element.createElement("div",{className:"digiblocks-counter-content"},wp.element.createElement("div",{className:"digiblocks-counter-number-wrapper"},l&&wp.element.createElement("span",{className:"digiblocks-counter-prefix"},l),wp.element.createElement("span",{className:"digiblocks-counter-number"},n||0),_&&wp.element.createElement("span",{className:"digiblocks-counter-suffix"},_)),v&&wp.element.createElement("h3",{className:"digiblocks-counter-title"},v),M&&wp.element.createElement("p",{className:"digiblocks-counter-description"},M))))},Ic=Qb;var{__:va}=window.wp.i18n,{registerBlockType:Jb}=window.wp.blocks,{getBlockActiveStatus:Yb}=window.wp.digiBlocks;Jb("digiblocks/counter",{apiVersion:2,title:digiBlocksData.blocks.counter.title,category:"digiblocks",icon:{src:()=>{let{viewbox:ie,path:e}=digiBlocksData.blocks.counter.icon;return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${ie}`,className:"digiblocks-editor-icons"},wp.element.createElement("path",{d:e}))}},description:digiBlocksData.blocks.counter.description,keywords:[va("counter","digiblocks"),va("number","digiblocks"),va("stats","digiblocks"),va("count up","digiblocks")],supports:{inserter:!!Yb("counter"),html:!1,className:!1,customClassName:!1,anchor:!1},attributes:{id:{type:"string",default:""},anchor:{type:"string",default:""},visibility:{type:"object",default:{desktop:!1,tablet:!1,mobile:!1}},customClasses:{type:"string",default:""},iconValue:{type:"object",default:null},startNumber:{type:"string",default:"0"},endNumber:{type:"string",default:"100"},counterPrefix:{type:"string",default:""},counterPrefixSpacing:{type:"number",default:5},counterSuffix:{type:"string",default:""},counterSuffixSpacing:{type:"number",default:5},title:{type:"string",default:"Counter Title"},description:{type:"string",default:"Add description here."},counterColor:{type:"string",default:"#333333"},counterHoverColor:{type:"string",default:""},titleColor:{type:"string",default:"#333333"},titleHoverColor:{type:"string",default:""},textColor:{type:"string",default:"#666666"},textHoverColor:{type:"string",default:""},backgroundColor:{type:"string",default:"transparent"},backgroundHoverColor:{type:"string",default:""},iconColor:{type:"string",default:"#1e73be"},iconHoverColor:{type:"string",default:""},iconBackgroundColor:{type:"string",default:"transparent"},iconHoverBackgroundColor:{type:"string",default:""},iconSize:{type:"object",default:{desktop:32,tablet:28,mobile:24}},iconPadding:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},iconMargin:{type:"object",default:{desktop:{top:0,right:0,bottom:20,left:0,unit:"px"},tablet:{top:0,right:0,bottom:15,left:0,unit:"px"},mobile:{top:0,right:0,bottom:10,left:0,unit:"px"}}},iconBorderStyle:{type:"string",default:"default"},iconBorderWidth:{type:"object",default:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},iconBorderRadius:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},iconBorderColor:{type:"string",default:"#e0e0e0"},iconHoverBorderColor:{type:"string",default:""},typography:{type:"object",default:{fontFamily:"",fontSize:{desktop:48,tablet:42,mobile:36},fontSizeUnit:"px",fontWeight:"700",fontStyle:"normal",textTransform:"",textDecoration:"",lineHeight:{desktop:1.2,tablet:1.2,mobile:1.2},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}},titleTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:20,tablet:18,mobile:16},fontSizeUnit:"px",fontWeight:"500",fontStyle:"normal",textTransform:"",textDecoration:"",lineHeight:{desktop:1.4,tablet:1.3,mobile:1.2},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}},contentTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",fontWeight:"",fontStyle:"normal",textTransform:"",textDecoration:"",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}},padding:{type:"object",default:{desktop:{top:30,right:30,bottom:30,left:30,unit:"px"},tablet:{top:25,right:25,bottom:25,left:25,unit:"px"},mobile:{top:20,right:20,bottom:20,left:20,unit:"px"}}},margin:{type:"object",default:{desktop:{top:0,right:0,bottom:30,left:0,unit:"px"},tablet:{top:0,right:0,bottom:25,left:0,unit:"px"},mobile:{top:0,right:0,bottom:20,left:0,unit:"px"}}},align:{type:"string",default:"center"},animation:{type:"string",default:"none"},boxShadow:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},boxShadowHover:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},borderStyle:{type:"string",default:"default"},borderRadius:{type:"object",default:{desktop:{top:8,right:8,bottom:8,left:8,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderWidth:{type:"object",default:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderColor:{type:"string",default:"#e0e0e0"},hoverEffect:{type:"string",default:"none"},animationDuration:{type:"number",default:2e3},animationDelay:{type:"number",default:0},thousandSeparator:{type:"string",default:","},decimalPlaces:{type:"number",default:0},decimalSeparator:{type:"string",default:"."},layoutStyle:{type:"string",default:"stacked"},verticalSpacing:{type:"number",default:15},displayIcon:{type:"boolean",default:!1},numberWithCommas:{type:"boolean",default:!0}},example:{attributes:{startNumber:"0",endNumber:"100",counterPrefix:"",counterSuffix:"+",title:"Happy Clients",description:"Serving clients with excellence",displayIcon:!0,iconValue:{id:"user-check",name:"User Check",svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M274.7 304H173.3C77.61 304 0 381.6 0 477.3C0 496.5 15.52 512 34.66 512H413.3C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304zM224 256c70.7 0 128-57.31 128-128S294.7 0 224 0C153.3 0 96 57.31 96 128S153.3 256 224 256zM632.3 134.4c-9.703-9-24.91-8.453-33.92 1.266l-87.05 93.75l-38.39-38.39c-9.375-9.375-24.56-9.375-33.94 0s-9.375 24.56 0 33.94l56 56C499.5 285.5 505.6 288 512 288h.4375c6.531-.125 12.72-2.891 17.16-7.672l104-112C642.6 158.6 642 143.4 632.3 134.4z"/></svg>',style:"solid",categories:["users-people"]},counterColor:"#1e73be",iconColor:"#1e73be",backgroundColor:"#ffffff"}},edit:Rc,save:Ic});var{__:_e}=window.wp.i18n,{useBlockProps:Zb,RichText:Lc,InspectorControls:Kb,PanelColorSettings:Pt}=window.wp.blockEditor,{SelectControl:At,RangeControl:Oc,ToggleControl:xa,Button:Si,TextControl:Kn,Tooltip:ya,TabPanel:Uc,__experimentalToggleGroupControl:X1,__experimentalToggleGroupControlOption:A1}=window.wp.components,{useState:Xn,useEffect:An,useRef:Xb}=window.wp.element,{useBlockId:Ab,getDimensionCSS:Io,animations:ul,animationPreview:jc}=digi.utils,{tabIcons:es}=digi.icons,{ResponsiveControl:$i,DimensionControl:Ca,TypographyControl:Vc,BoxShadowControl:eu,CustomTabPanel:ou,TabPanelBody:Lo}=digi.components,tu=({attributes:ie,setAttributes:e,clientId:X})=>{let{id:o,anchor:P,visibility:n,customClasses:te,items:l,titleColor:_,titleHoverColor:v,titleActiveColor:M,backgroundColor:N,backgroundHoverColor:m,backgroundActiveColor:s,contentColor:$,contentBackgroundColor:I,borderColor:C,borderHoverColor:k,borderRadius:B,borderWidth:O,borderStyle:T,boxShadow:V,boxShadowHover:Z,padding:ee,margin:E,titleTypography:f,contentTypography:b,iconPosition:D,iconColor:le,iconHoverColor:We,iconActiveColor:Se,iconSize:K,animation:L,allowMultipleOpen:oe,iconType:q,titleTag:J,questionPrefix:A,questionPrefixColor:re,answerPrefix:se,answerPrefixColor:Ce,layout:Y,itemsSpacing:de,schemaType:He,schemaName:be}=ie;Ab(o,X,e);let[H,xe]=Xn(()=>{if(window.digi.uiState){let t=window.digi.uiState.getActiveTab(X);if(t)return t}return"options"}),[x,ve]=Xn(window.digi.responsiveState.activeDevice),[U,me]=Xn(!1);An(()=>window.digi.responsiveState.subscribe(p=>{ve(p)}),[]),An(()=>{if(l&&l.length>0){let t=l.map((p,De)=>p.id?p:{...p,id:`faq-item-${X.substr(0,8)}-${De}`});JSON.stringify(t)!==JSON.stringify(l)&&e({items:t})}},[X,l,e]);let Te=Xb(null);An(()=>{if(L&&L!=="none"){let t=setTimeout(()=>{jc(o,L,ul,Te)},100);return()=>clearTimeout(t)}},[L]);let qe=()=>{jc(o,L,ul,Te)},Ve=[{label:_e("Default","digiblocks"),value:"default"},{label:_e("None","digiblocks"),value:"none"},{label:_e("Solid","digiblocks"),value:"solid"},{label:_e("Dotted","digiblocks"),value:"dotted"},{label:_e("Dashed","digiblocks"),value:"dashed"},{label:_e("Double","digiblocks"),value:"double"},{label:_e("Groove","digiblocks"),value:"groove"},{label:_e("Inset","digiblocks"),value:"inset"},{label:_e("Outset","digiblocks"),value:"outset"},{label:_e("Ridge","digiblocks"),value:"ridge"}],Ee=[{label:_e("None","digiblocks"),value:"none"},...Object.keys(ul).map(t=>({label:t.replace(/-/g," ").replace(/\b\w/g,p=>p.toUpperCase()),value:t}))],Oe=[{label:_e("Plus/Minus","digiblocks"),value:"plusMinus"},{label:_e("Arrow","digiblocks"),value:"arrow"},{label:_e("Chevron","digiblocks"),value:"chevron"},{label:_e("Triangle","digiblocks"),value:"triangle"},{label:_e("Circle Plus/Minus","digiblocks"),value:"circlePlusMinus"}],j=[{label:_e("Right","digiblocks"),value:"right"},{label:_e("Left","digiblocks"),value:"left"}],ye=[{label:_e("H2","digiblocks"),value:"h2"},{label:_e("H3","digiblocks"),value:"h3"},{label:_e("H4","digiblocks"),value:"h4"},{label:_e("H5","digiblocks"),value:"h5"},{label:_e("H6","digiblocks"),value:"h6"},{label:_e("p","digiblocks"),value:"p"},{label:_e("div","digiblocks"),value:"div"}],Je=[{label:_e("Boxed","digiblocks"),value:"boxed"},{label:_e("Classic","digiblocks"),value:"classic"},{label:_e("Separated","digiblocks"),value:"separated"},{label:_e("Minimalist","digiblocks"),value:"minimalist"},{label:_e("Bordered","digiblocks"),value:"bordered"}],G=[{label:_e("Default FAQ Schema","digiblocks"),value:"FAQPage"},{label:_e("Q&A Schema","digiblocks"),value:"QAPage"}],pe=[{name:"options",title:_e("Options","digiblocks"),icon:es.optionsIcon},{name:"style",title:_e("Style","digiblocks"),icon:es.styleIcon},{name:"advanced",title:_e("Advanced","digiblocks"),icon:es.advancedIcon}],R=[{name:"normal",title:_e("Normal","digiblocks"),className:"digiblocks-tab-1 normal"},{name:"hover",title:_e("Hover","digiblocks"),className:"digiblocks-tab-2 hover"},{name:"active",title:_e("Active","digiblocks"),className:"digiblocks-tab-3 active"}],d=()=>{let t=l.length,p={id:`faq-item-${X.substr(0,8)}-${t}`,title:_e("New FAQ Question","digiblocks"),content:_e("Add your answer here. Edit or remove this text inline or in the module Content settings.","digiblocks"),isOpen:!1};e({items:[...l,p]})},ce=t=>{let p=[...l];p.splice(t,1),e({items:p})},S=t=>{let p=l[t],De=Date.now(),r={...p,id:`faq-item-${X.substr(0,8)}-${De}`,isOpen:!1},he=[...l];he.splice(t+1,0,r),e({items:he})},g=t=>{if(t===0)return;let p=[...l],De=p[t];p.splice(t,1),p.splice(t-1,0,De),e({items:p})},Q=t=>{if(t===l.length-1)return;let p=[...l],De=p[t];p.splice(t,1),p.splice(t+1,0,De),e({items:p})},c=t=>{let p=l.map((De,r)=>r===t?{...De,isOpen:!De.isOpen}:!oe&&r!==t&&De.isOpen?{...De,isOpen:!1}:De);e({items:p})},ae=(t,p)=>{let De=[...l];De[p].title=t,e({items:De})},y=(t,p)=>{let De=[...l];De[p].content=t,e({items:De})},u=(t,p=q)=>{switch(p){case"plusMinus":return t?wp.element.createElement("span",{className:"digiblocks-faq-icon-minus"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:"1em",height:"1em"},wp.element.createElement("path",{fillRule:"evenodd",d:"M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"}))):wp.element.createElement("span",{className:"digiblocks-faq-icon-plus"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:"1em",height:"1em"},wp.element.createElement("path",{fillRule:"evenodd",d:"M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"})));case"arrow":return wp.element.createElement("span",{className:`digiblocks-faq-icon-arrow ${t?"is-open":""}`},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:"1em",height:"1em"},wp.element.createElement("path",{fillRule:"evenodd",d:"M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"})));case"chevron":return wp.element.createElement("span",{className:`digiblocks-faq-icon-chevron ${t?"is-open":""}`},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:"1em",height:"1em"},wp.element.createElement("path",{fillRule:"evenodd",d:"M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"})));case"triangle":return wp.element.createElement("span",{className:`digiblocks-faq-icon-triangle ${t?"is-open":""}`},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:"1em",height:"1em"},wp.element.createElement("path",{d:"m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"})));case"circlePlusMinus":return t?wp.element.createElement("span",{className:"digiblocks-faq-icon-circle-minus"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),wp.element.createElement("path",{d:"M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"}))):wp.element.createElement("span",{className:"digiblocks-faq-icon-circle-plus"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),wp.element.createElement("path",{d:"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"})));default:return t?wp.element.createElement("span",{className:"digiblocks-faq-icon-minus"},"\u2014"):wp.element.createElement("span",{className:"digiblocks-faq-icon-plus"},"+")}},Ne=()=>{let t=window.digi.responsiveState.activeDevice,p=de[t]!==void 0?de[t]:16,De="";T&&T!=="default"&&T!=="none"?De=`
				border-style: ${T};
				border-color: ${C||"#e0e0e0"};
				${Io(O,"border-width",t)}
				${Io(B,"border-radius",t)}
			`:De="border: none;";let r="box-shadow: none;";V&&V.enable&&(r=`box-shadow: ${V.position==="inset"?"inset ":""}${V.horizontal}px ${V.vertical}px ${V.blur}px ${V.spread}px ${V.color};`);let he=`${Io(ee,"padding",t)}`,oo="";f&&(f.fontFamily&&(oo+=`font-family: ${f.fontFamily};`),f.fontSize&&f.fontSize[t]&&(oo+=`font-size: ${f.fontSize[t]}${f.fontSizeUnit||"px"};`),f.fontWeight&&(oo+=`font-weight: ${f.fontWeight};`),f.fontStyle&&(oo+=`font-style: ${f.fontStyle};`),f.textTransform&&(oo+=`text-transform: ${f.textTransform};`),f.textDecoration&&(oo+=`text-decoration: ${f.textDecoration};`),f.lineHeight&&f.lineHeight[t]&&(oo+=`line-height: ${f.lineHeight[t]}${f.lineHeightUnit||"em"};`),f.letterSpacing&&f.letterSpacing[t]&&(oo+=`letter-spacing: ${f.letterSpacing[t]}${f.letterSpacingUnit||"px"};`));let h="";b&&(b.fontFamily&&(h+=`font-family: ${b.fontFamily};`),b.fontSize&&b.fontSize[t]&&(h+=`font-size: ${b.fontSize[t]}${b.fontSizeUnit||"px"};`),b.fontWeight&&(h+=`font-weight: ${b.fontWeight};`),b.fontStyle&&(h+=`font-style: ${b.fontStyle};`),b.textTransform&&(h+=`text-transform: ${b.textTransform};`),b.textDecoration&&(h+=`text-decoration: ${b.textDecoration};`),b.lineHeight&&b.lineHeight[t]&&(h+=`line-height: ${b.lineHeight[t]}${b.lineHeightUnit||"em"};`),b.letterSpacing&&b.letterSpacing[t]&&(h+=`letter-spacing: ${b.letterSpacing[t]}${b.letterSpacingUnit||"px"};`));let w="";Z&&Z.enable&&(w=`box-shadow: ${Z.position==="inset"?"inset ":""}${Z.horizontal}px ${Z.vertical}px ${Z.blur}px ${Z.spread}px ${Z.color};`);let Pe=`
			/* FAQ Block - ${o} */
			.${o} {
				${Io(E,"margin",t)}
				width: 100%;
			}
			
			/* Base styles for questions and answers */
			.${o} .digiblocks-faq-question {
				cursor: pointer;
				-webkit-user-select: none;
				-moz-user-select: none;
				-ms-user-select: none;
				user-select: none;
				display: flex;
				align-items: center;
				${D==="left"?"flex-direction: row-reverse; justify-content: flex-end;":"justify-content: space-between;"}
			}
			
			.${o} .digiblocks-faq-question-text {
				color: ${_};
				${oo}
				margin: 0;
				flex: 1;
				${A?"display: flex; align-items: center; gap: .5rem;":""}
				transition: color 0.3s ease;
			}
			
			.${o} .digiblocks-faq-question-prefix {
				${re?`color: ${re};`:""}
				font-weight: bold;
			}
			
			.${o} .digiblocks-faq-answer-prefix {
				${Ce?`color: ${Ce};`:""}
				font-weight: bold;
			}
			
			.${o} .digiblocks-faq-answer-content {
				display: flex;
				${se?"display: flex; gap: .5rem;":""}
				color: ${$};
				${h}
			}
			
			/* Handle answer display states */
			.${o} .digiblocks-faq-answer {
				overflow: hidden;
				display: none;
				transition: height 0.3s ease;
			}
			
			.${o} .digiblocks-faq-item.is-active .digiblocks-faq-answer {
				display: block;
			}
			
			/* Icon styles */
			.${o} .digiblocks-faq-question {
				gap: 15px;
			}

			.${o} .digiblocks-faq-question-icon {
				display: flex;
				align-items: center;
				justify-content: center;
				color: ${le};
				transition: all 0.3s ease;
				font-size: ${K[t]}px;
			}
			
			.${o} .digiblocks-faq-question-icon span {
				display: flex;
				align-items: center;
				justify-content: center;
			}
			
			.${o} .digiblocks-faq-question-icon svg {
				width: ${K[t]}px;
				height: ${K[t]}px;
				transition: transform 0.3s ease;
				fill: currentColor;
			}
			
			/* Rotate icons when active */
			.${o} .digiblocks-faq-item.is-active .digiblocks-faq-question-icon .digiblocks-faq-icon-arrow,
			.${o} .digiblocks-faq-item.is-active .digiblocks-faq-question-icon .digiblocks-faq-icon-chevron,
			.${o} .digiblocks-faq-item.is-active .digiblocks-faq-question-icon .digiblocks-faq-icon-triangle {
				transform: rotate(180deg);
			}
			
			.${o} .digiblocks-faq-icon-arrow,
			.${o} .digiblocks-faq-icon-chevron,
			.${o} .digiblocks-faq-icon-triangle {
				display: inline-flex;
				transition: transform 0.3s ease;
			}
			
			/* Handle hover state */
			.${o} .digiblocks-faq-question:hover .digiblocks-faq-question-text {
				${v?`color: ${v};`:""}
			}
			
			.${o} .digiblocks-faq-question:hover .digiblocks-faq-question-icon {
				${We?`color: ${We};`:""}
			}
			
			/* Handle active state */
			.${o} .digiblocks-faq-item.is-active .digiblocks-faq-question-text {
				color: ${M};
			}
			
			.${o} .digiblocks-faq-item.is-active .digiblocks-faq-question-icon {
				color: ${Se};
			}

			/* Visibility Controls */
			${n.desktop?`
				@media (min-width: 992px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${n.tablet?`
				@media (min-width: 768px) and (max-width: 991px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${n.mobile?`
				@media (max-width: 767px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}
		`,Ze="";switch(Y){case"boxed":Ze=`
					.${o} .digiblocks-faq-item {
						${De}
						${r}
						background-color: ${N||"#ffffff"};
						transition: all 0.3s ease;
						margin-bottom: ${p}px;
					}
					
					.${o} .digiblocks-faq-item:hover {
						${w}
						${m?`background-color: ${m};`:""}
						${k?`border-color: ${k};`:""}
					}
					
					.${o} .digiblocks-faq-question {
						${he}
					}
					
					.${o} .digiblocks-faq-answer {
						${he}
						border-top: 1px solid ${C||"#e0e0e0"};
						${I?`background-color: ${I};`:""}
					}
					
					.${o} .digiblocks-faq-item.is-active {
						${s?`background-color: ${s};`:""}
					}
				`;break;case"classic":Ze=`
					.${o} .digiblocks-faq-item {
						border: none;
						border-bottom: 1px solid ${C||"#e0e0e0"};
						background-color: transparent;
						margin-bottom: ${p}px;
						transition: all 0.3s ease;
					}
					
					.${o} .digiblocks-faq-question {
						${he}
					}
					
					.${o} .digiblocks-faq-answer {
						${Io(ee,"padding",t)}
						padding-top: 0;
					}
				`;break;case"separated":Ze=`
					.${o} .digiblocks-faq-item {
						margin-bottom: ${p}px;
						transition: all 0.3s ease;
					}
					
					.${o} .digiblocks-faq-question {
						${he}
						${De}
						${r}
						background-color: ${N||"#ffffff"};
					}
					
					.${o} .digiblocks-faq-question:hover {
						${v?`color: ${v};`:""}
						${m?`background-color: ${m};`:""}
						${k?`border-color: ${k};`:""}
						${w}
					}
					
					.${o} .digiblocks-faq-item.is-active .digiblocks-faq-question {
						${M?`color: ${M};`:""}
						${s?`background-color: ${s};`:""}
					}
					
					.${o} .digiblocks-faq-answer {
						${he}
						${I?`background-color: ${I};`:""}
						${De}
						border-top: none;
						border-top-left-radius: 0;
						border-top-right-radius: 0;
						border-bottom-left-radius: ${B&&B[t]?B[t].left+B[t].unit:"8px"};
						border-bottom-right-radius: ${B&&B[t]?B[t].right+B[t].unit:"8px"};
						margin-top: -1px;
					}
				`;break;case"minimalist":Ze=`
					.${o} .digiblocks-faq-item {
						margin-bottom: ${p}px;
						transition: all 0.3s ease;
						background-color: transparent;
					}
					
					.${o} .digiblocks-faq-question {
						${he}
						border-bottom: 2px solid ${C||"#e0e0e0"};
					}
					
					.${o} .digiblocks-faq-question:hover {
						${v?`color: ${v};`:""}
						border-color: ${v||k||"#cccccc"};
					}
					
					.${o} .digiblocks-faq-item.is-active .digiblocks-faq-question {
						${M?`color: ${M};`:""}
						border-color: ${M||"#1e73be"};
					}
					
					.${o} .digiblocks-faq-answer {
						${Io(ee,"padding",t)}
					}
				`;break;case"bordered":Ze=`
					.${o} .digiblocks-faq-item {
						${De}
						background-color: transparent;
						margin-bottom: ${p}px;
						transition: all 0.3s ease;
						overflow: hidden;
					}
					
					.${o} .digiblocks-faq-item:hover {
						${k?`border-color: ${k};`:""}
					}
					
					.${o} .digiblocks-faq-question {
						${he}
						background-color: ${N||"#f8f9fa"};
					}
					
					.${o} .digiblocks-faq-question:hover {
						${v?`color: ${v};`:""}
						${m?`background-color: ${m};`:""}
					}
					
					.${o} .digiblocks-faq-item.is-active .digiblocks-faq-question {
						${M?`color: ${M};`:""}
						${s?`background-color: ${s};`:""}
					}
					
					.${o} .digiblocks-faq-answer {
						${he}
						${I?`background-color: ${I};`:""}
					}
					
					.${o} .digiblocks-faq-item.is-active {
						border-color: ${M||C||"#1e73be"};
					}
				`;break;default:Ze=`
					.${o} .digiblocks-faq-item {
						${De}
						${r}
						background-color: ${N||"#ffffff"};
						transition: all 0.3s ease;
						margin-bottom: ${p}px;
					}
					
					.${o} .digiblocks-faq-question {
						${he}
					}
					
					.${o} .digiblocks-faq-answer {
						${he}
						border-top: 1px solid #e0e0e0;
					}
				`}let i=`
			.${o} .digiblocks-faq-item {
				position: relative;
			}
			
			.${o} .digiblocks-faq-item-controls {
				display: flex;
				gap: 5px;
				position: absolute;
				right: 10px;
				top: -28px;
				background-color: #fff;
				padding: 2px;
				border-radius: 3px;
				box-shadow: 0 1px 3px rgba(0,0,0,0.12);
				z-index: 10;
			}
		
			/* Respect the is-active class for showing/hiding answers */
			.${o} .digiblocks-faq-answer {
				display: none;
				transition: height 0.3s ease;
			}
			
			.${o} .digiblocks-faq-item.is-active .digiblocks-faq-answer {
				display: block;
			}
			
			.${o} .digiblocks-faq-schema {
				margin-top: 15px;
			}
		`,F=`
			@media (max-width: 991px) {
				.${o} {
					${E.tablet?`${Io(E,"margin","tablet")}`:""}
				}
				
				.${o} .digiblocks-faq-item {
					margin-bottom: ${de.tablet!==void 0?de.tablet:p}px;
				}
				
				.${o} .digiblocks-faq-question,
				.${o} .digiblocks-faq-answer {
					${ee.tablet?`${Io(ee,"padding","tablet")}`:""}
				}
				
				${Y==="minimalist"?`
				.${o} .digiblocks-faq-answer {
					${Io(ee,"padding","tablet")}
					padding-left: 0;
					padding-right: 0;
				}
				`:""}
				
				${K&&K.tablet?`
				.${o} .digiblocks-faq-question-icon {
					font-size: ${K.tablet}px;
				}
				
				.${o} .digiblocks-faq-question-icon svg {
					width: ${K.tablet}px;
					height: ${K.tablet}px;
				}
				`:""}
				
				${f&&f.fontSize&&f.fontSize.tablet?`
				.${o} .digiblocks-faq-question-text {
					font-size: ${f.fontSize.tablet}${f.fontSizeUnit||"px"};
					${f.lineHeight&&f.lineHeight.tablet?`line-height: ${f.lineHeight.tablet}${f.lineHeightUnit||"em"};`:""}
				}
				`:""}
				
				${b&&b.fontSize&&b.fontSize.tablet?`
				.${o} .digiblocks-faq-answer-content {
					font-size: ${b.fontSize.tablet}${b.fontSizeUnit||"px"};
					${b.lineHeight&&b.lineHeight.tablet?`line-height: ${b.lineHeight.tablet}${b.lineHeightUnit||"em"};`:""}
				}
				`:""}
			}
		`,Ue=`
			@media (max-width: 767px) {
				.${o} {
					${E.mobile?`${Io(E,"margin","mobile")}`:""}
				}
				
				.${o} .digiblocks-faq-item {
					margin-bottom: ${de.mobile!==void 0?de.mobile:p}px;
				}
				
				.${o} .digiblocks-faq-question,
				.${o} .digiblocks-faq-answer {
					${ee.mobile?`${Io(ee,"padding","mobile")}`:""}
				}
				
				${Y==="minimalist"?`
				.${o} .digiblocks-faq-answer {
					${Io(ee,"padding","mobile")}
					padding-left: 0;
					padding-right: 0;
				}
				`:""}
				
				${K&&K.mobile?`
				.${o} .digiblocks-faq-question-icon {
					font-size: ${K.mobile}px;
				}
				
				.${o} .digiblocks-faq-question-icon svg {
					width: ${K.mobile}px;
					height: ${K.mobile}px;
				}
				`:""}
				
				${f&&f.fontSize&&f.fontSize.mobile?`
				.${o} .digiblocks-faq-question-text {
					font-size: ${f.fontSize.mobile}${f.fontSizeUnit||"px"};
					${f.lineHeight&&f.lineHeight.mobile?`line-height: ${f.lineHeight.mobile}${f.lineHeightUnit||"em"};`:""}
				}
				`:""}
				
				${b&&b.fontSize&&b.fontSize.mobile?`
				.${o} .digiblocks-faq-answer-content {
					font-size: ${b.fontSize.mobile}${b.fontSizeUnit||"px"};
					${b.lineHeight&&b.lineHeight.mobile?`line-height: ${b.lineHeight.mobile}${b.lineHeightUnit||"em"};`:""}
				}
				`:""}
			}
		`,po="";return L&&L!=="none"&&ul[L]&&(po=ul[L].keyframes),`
			${Pe}
			${Ze}
			${i}
			${F}
			${Ue}
			${po}
		`},a=t=>t==="normal"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Pt,{title:_e("Question Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:_,onChange:p=>e({titleColor:p}),label:_e("Text Color","digiblocks")},{value:N,onChange:p=>e({backgroundColor:p}),label:_e("Background Color","digiblocks")},{value:re,onChange:p=>e({questionPrefixColor:p}),label:_e("Prefix Color","digiblocks"),disableCustomColors:!A}]})):t==="hover"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Pt,{title:_e("Question Hover Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:v,onChange:p=>e({titleHoverColor:p}),label:_e("Text Color","digiblocks")},{value:m,onChange:p=>e({backgroundHoverColor:p}),label:_e("Background Color","digiblocks")}]})):t==="active"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Pt,{title:_e("Question Active Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:M,onChange:p=>e({titleActiveColor:p}),label:_e("Text Color","digiblocks")},{value:s,onChange:p=>e({backgroundActiveColor:p}),label:_e("Background Color","digiblocks")}]})):null,ue=t=>t==="normal"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Pt,{title:_e("Icon Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:le,onChange:p=>e({iconColor:p}),label:_e("Icon Color","digiblocks")}]})):t==="hover"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Pt,{title:_e("Icon Hover Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:We,onChange:p=>e({iconHoverColor:p}),label:_e("Icon Color","digiblocks")}]})):t==="active"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Pt,{title:_e("Icon Active Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:Se,onChange:p=>e({iconActiveColor:p}),label:_e("Icon Color","digiblocks")}]})):null,Fe=()=>wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Pt,{title:_e("Answer Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:$,onChange:t=>e({contentColor:t}),label:_e("Text Color","digiblocks")},{value:I,onChange:t=>e({contentBackgroundColor:t}),label:_e("Background Color","digiblocks")},{value:Ce,onChange:t=>e({answerPrefixColor:t}),label:_e("Prefix Color","digiblocks"),disableCustomColors:!se}]})),eo=()=>{switch(H){case"options":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Lo,{tab:"options",name:"content-settings",title:_e("Items","digiblocks"),initialOpen:!0},wp.element.createElement(xa,{label:_e("Allow Multiple Open","digiblocks"),checked:oe,onChange:()=>e({allowMultipleOpen:!oe}),help:_e("When enabled, multiple FAQ items can be open at the same time.","digiblocks"),__nextHasNoMarginBottom:!0}),wp.element.createElement(At,{label:_e("Layout","digiblocks"),value:Y,options:Je,onChange:t=>e({layout:t}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{htmlFor:"question-prefix",className:"components-base-control__label"},_e("Question Prefix","digiblocks")),wp.element.createElement(Kn,{id:"question-prefix",value:A||"",onChange:t=>e({questionPrefix:t}),placeholder:_e("Example: Q:","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement("p",{className:"components-base-control__help"},_e("Add a prefix to questions (e.g., 'Q:').","digiblocks")))),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{htmlFor:"answer-prefix",className:"components-base-control__label"},_e("Answer Prefix","digiblocks")),wp.element.createElement(Kn,{id:"answer-prefix",value:se||"",onChange:t=>e({answerPrefix:t}),placeholder:_e("Example: A:","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement("p",{className:"components-base-control__help"},_e("Add a prefix to answers (e.g., 'A:').","digiblocks")))),wp.element.createElement($i,{label:_e("Items Spacing","digiblocks")},wp.element.createElement(Oc,{value:de[x],onChange:t=>e({itemsSpacing:{...de,[x]:t}}),min:0,max:100,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}))),wp.element.createElement(Lo,{tab:"options",name:"icon-settings",title:_e("Icon Settings","digiblocks"),initialOpen:!1},wp.element.createElement(At,{label:_e("Icon Type","digiblocks"),value:q,options:Oe,onChange:t=>e({iconType:t}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(At,{label:_e("Icon Position","digiblocks"),value:D,options:j,onChange:t=>e({iconPosition:t}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement($i,{label:_e("Icon Size","digiblocks")},wp.element.createElement(Oc,{value:K[x],onChange:t=>e({iconSize:{...K,[x]:t}}),min:8,max:100,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}))),wp.element.createElement(Lo,{tab:"options",name:"schema-settings",title:_e("SEO Schema","digiblocks"),initialOpen:!1},wp.element.createElement(At,{label:_e("Schema Type","digiblocks"),value:He,options:G,onChange:t=>e({schemaType:t}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Kn,{label:_e("Schema Name","digiblocks"),value:be,onChange:t=>e({schemaName:t}),placeholder:_e("Example: Product FAQ","digiblocks"),help:_e("Name for your FAQ schema (e.g., Company FAQ, Product FAQ).","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(Lo,{tab:"options",name:"heading-settings",title:_e("HTML Settings","digiblocks"),initialOpen:!1},wp.element.createElement(At,{label:_e("Question Tag","digiblocks"),value:J,options:ye,onChange:t=>e({titleTag:t}),help:_e("HTML tag for questions. Default is h3.","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})));case"style":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Lo,{tab:"style",name:"question-styles",title:_e("Question Styles","digiblocks"),initialOpen:!0},wp.element.createElement(Uc,{className:"digiblocks-control-tabs",activeClass:"active-tab",tabs:R},t=>a(t.name)),wp.element.createElement(Vc,{label:_e("Question Typography","digiblocks"),value:f,onChange:t=>e({titleTypography:t}),defaults:{fontSize:{desktop:18,tablet:16,mobile:15},fontSizeUnit:"px",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em"}})),wp.element.createElement(Lo,{tab:"style",name:"answer-styles",title:_e("Answer Styles","digiblocks"),initialOpen:!1},Fe(),wp.element.createElement(Vc,{label:_e("Answer Typography","digiblocks"),value:b,onChange:t=>e({contentTypography:t}),defaults:{fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em"}})),wp.element.createElement(Lo,{tab:"style",name:"icon-styles",title:_e("Icon Styles","digiblocks"),initialOpen:!1},wp.element.createElement(Uc,{className:"digiblocks-control-tabs",activeClass:"active-tab",tabs:R},t=>ue(t.name))),wp.element.createElement(Lo,{tab:"style",name:"border-box",title:_e("Border & Shadow","digiblocks"),initialOpen:!1},Y!=="classic"&&Y!=="minimalist"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(At,{label:_e("Border Style","digiblocks"),value:T||"default",options:Ve,onChange:t=>{t!=="default"&&t!=="none"&&(T==="default"||T==="none"||!T)&&((!O||Object.keys(O).length===0)&&e({borderWidth:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:1,right:1,bottom:1,left:1,unit:"px"},mobile:{top:1,right:1,bottom:1,left:1,unit:"px"}}}),(!B||Object.keys(B).length===0)&&e({borderRadius:{desktop:{top:8,right:8,bottom:8,left:8,unit:"px"},tablet:{top:8,right:8,bottom:8,left:8,unit:"px"},mobile:{top:8,right:8,bottom:8,left:8,unit:"px"}}})),e({borderStyle:t})},__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),T&&T!=="default"&&T!=="none"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Pt,{title:_e("Border Colors","digiblocks"),enableAlpha:!0,colorSettings:[{value:C,onChange:t=>e({borderColor:t}),label:_e("Border Color","digiblocks")},{value:k,onChange:t=>e({borderHoverColor:t}),label:_e("Border Hover Color","digiblocks")}]}),wp.element.createElement($i,{label:_e("Border Width","digiblocks")},wp.element.createElement(Ca,{values:O&&O[x]?O[x]:{top:1,right:1,bottom:1,left:1,unit:"px"},onChange:t=>e({borderWidth:{...O,[x]:t}})})),wp.element.createElement($i,{label:_e("Border Radius","digiblocks")},wp.element.createElement(Ca,{values:B&&B[x]?B[x]:{top:8,right:8,bottom:8,left:8,unit:"px"},onChange:t=>e({borderRadius:{...B,[x]:t}}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]})))),wp.element.createElement(eu,{normalValue:V,hoverValue:Z,onNormalChange:t=>e({boxShadow:t}),onHoverChange:t=>e({boxShadowHover:t})})),wp.element.createElement(Lo,{tab:"style",name:"spacing",title:_e("Spacing","digiblocks"),initialOpen:!1},wp.element.createElement($i,{label:_e("Padding","digiblocks")},wp.element.createElement(Ca,{values:ee[x],onChange:t=>e({padding:{...ee,[x]:t}})})),wp.element.createElement($i,{label:_e("Margin","digiblocks")},wp.element.createElement(Ca,{values:E[x],onChange:t=>e({margin:{...E,[x]:t}})}))));case"advanced":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Lo,{tab:"advanced",name:"animation",title:_e("Animation","digiblocks"),initialOpen:!0},wp.element.createElement(At,{label:_e("Animation Effect","digiblocks"),value:L,options:Ee,onChange:t=>e({animation:t}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),L&&L!=="none"&&wp.element.createElement("div",{style:{marginTop:"10px"}},wp.element.createElement(Si,{variant:"secondary",isSecondary:!0,onClick:qe,style:{width:"100%"}},_e("Preview Animation","digiblocks")))),wp.element.createElement(Lo,{tab:"advanced",name:"visibility",title:_e("Visibility","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control__help",style:{padding:"12px",backgroundColor:"#f0f6fc",border:"1px solid #c3ddfd",borderRadius:"4px",marginBottom:"16px"}},wp.element.createElement("strong",null,_e("Editor Note:","digiblocks")),wp.element.createElement("br",null),_e("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.","digiblocks")),wp.element.createElement(xa,{label:_e("Hide on Desktop","digiblocks"),checked:n.desktop,onChange:t=>e({visibility:{...n,desktop:t}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(xa,{label:_e("Hide on Tablet","digiblocks"),checked:n.tablet,onChange:t=>e({visibility:{...n,tablet:t}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(xa,{label:_e("Hide on Mobile","digiblocks"),checked:n.mobile,onChange:t=>e({visibility:{...n,mobile:t}}),__nextHasNoMarginBottom:!0})),wp.element.createElement(Lo,{tab:"advanced",name:"additional",title:_e("Additional","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control html-anchor-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"html-anchor"},_e("HTML anchor","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"html-anchor",value:P||"",onChange:t=>e({anchor:t.target.value}),"aria-describedby":"html-anchor-help",autoCapitalize:"none",autoComplete:"off"})),wp.element.createElement("p",{id:"html-anchor-help",className:"components-base-control__help"},_e(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`,"digiblocks")," ",wp.element.createElement("a",{className:"components-external-link",href:"https://wordpress.org/documentation/article/page-jumps/",target:"_blank",rel:"external noreferrer noopener"},wp.element.createElement("span",{className:"components-external-link__contents"},_e("Learn more about anchors","digiblocks")),wp.element.createElement("span",{className:"components-external-link__icon","aria-label":"(opens in a new tab)"},"\u2197")))),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"additional-css-classes"},_e("Additional CSS class(es)","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"additional-css-classes",value:te||"",onChange:t=>e({customClasses:t.target.value}),"aria-describedby":"additional-css-classes-help",autoComplete:"off"})),wp.element.createElement("p",{id:"additional-css-classes-help",className:"components-base-control__help"},_e("Separate multiple classes with spaces.","digiblocks")))))}},ao=()=>!l||l.length===0?wp.element.createElement("div",{className:"digiblocks-no-items"},wp.element.createElement("p",null,_e("No FAQ items found. Please add some items.","digiblocks"))):l.map((t,p)=>{let De=p===l.length-1;return wp.element.createElement("div",{key:t.id,className:`digiblocks-faq-item ${t.isOpen?"is-active":""}`,style:De?{marginBottom:0}:{}},wp.element.createElement("div",{className:"digiblocks-faq-question",onClick:()=>c(p)},wp.element.createElement("div",{className:"digiblocks-faq-question-text"},A&&wp.element.createElement("span",{className:"digiblocks-faq-question-prefix"},A),wp.element.createElement(Lc,{tagName:"span",value:t.title,onChange:r=>ae(r,p),placeholder:_e("Enter question...","digiblocks"),allowedFormats:["core/bold","core/italic"],className:"digiblocks-faq-question-text-content"})),wp.element.createElement("span",{className:"digiblocks-faq-question-icon"},u(t.isOpen))),wp.element.createElement("div",{className:"digiblocks-faq-answer"},wp.element.createElement("div",{className:"digiblocks-faq-answer-content"},se&&wp.element.createElement("span",{className:"digiblocks-faq-answer-prefix"},se),wp.element.createElement(Lc,{tagName:"div",value:t.content,onChange:r=>y(r,p),placeholder:_e("Enter answer...","digiblocks"),allowedFormats:["core/bold","core/italic","core/link","core/image","core/list"],className:"digiblocks-faq-answer-text"}))),wp.element.createElement("div",{className:"digiblocks-faq-item-controls"},wp.element.createElement(ya,{text:_e("Move Up","digiblocks")},wp.element.createElement(Si,{className:"digiblocks-faq-item-move-up",onClick:()=>g(p),icon:"arrow-up-alt2",disabled:p===0,isSmall:!0})),wp.element.createElement(ya,{text:_e("Move Down","digiblocks")},wp.element.createElement(Si,{className:"digiblocks-faq-item-move-down",onClick:()=>Q(p),icon:"arrow-down-alt2",disabled:p===l.length-1,isSmall:!0})),wp.element.createElement(ya,{text:_e("Duplicate","digiblocks")},wp.element.createElement(Si,{className:"digiblocks-faq-item-duplicate",onClick:()=>S(p),icon:"admin-page",isSmall:!0})),wp.element.createElement(ya,{text:_e("Remove","digiblocks")},wp.element.createElement(Si,{className:"digiblocks-faq-item-remove",onClick:()=>ce(p),icon:"trash",isSmall:!0}))))}),go=Zb({className:`digiblocks-faq-block ${o} ${Y||"boxed"} ${te||""}`,id:P||null});return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Kb,null,wp.element.createElement(ou,{tabs:pe,activeTab:H,onSelect:xe},eo())),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:Ne()}}),wp.element.createElement("div",{...go},wp.element.createElement("div",{className:"digiblocks-faq-items"},ao()),wp.element.createElement(Si,{variant:"primary",icon:"plus",onClick:d,style:{width:"100%",marginTop:"20px",justifyContent:"center"}},_e("Add FAQ Item","digiblocks"))))},Fc=tu;var{useBlockProps:iu,RichText:Ec}=window.wp.blockEditor,lu=({attributes:ie})=>{let{id:e,anchor:X,customClasses:o,items:P,titleTag:n,layout:te,questionPrefix:l,answerPrefix:_,animation:v,allowMultipleOpen:M,iconType:N}=ie,m=["digiblocks-faq-block",e,te||"boxed",o||"",v!=="none"?`animate-${v}`:""].filter(Boolean).join(" "),s=(C,k=N)=>{switch(k){case"plusMinus":return C?wp.element.createElement("span",{className:"digiblocks-faq-icon-minus"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:"1em",height:"1em"},wp.element.createElement("path",{fillRule:"evenodd",d:"M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"}))):wp.element.createElement("span",{className:"digiblocks-faq-icon-plus"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:"1em",height:"1em"},wp.element.createElement("path",{fillRule:"evenodd",d:"M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"})));case"arrow":return wp.element.createElement("span",{className:`digiblocks-faq-icon-arrow ${C?"is-open":""}`},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:"1em",height:"1em"},wp.element.createElement("path",{fillRule:"evenodd",d:"M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"})));case"chevron":return wp.element.createElement("span",{className:`digiblocks-faq-icon-chevron ${C?"is-open":""}`},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:"1em",height:"1em"},wp.element.createElement("path",{fillRule:"evenodd",d:"M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"})));case"triangle":return wp.element.createElement("span",{className:`digiblocks-faq-icon-triangle ${C?"is-open":""}`},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:"1em",height:"1em"},wp.element.createElement("path",{d:"m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"})));case"circlePlusMinus":return C?wp.element.createElement("span",{className:"digiblocks-faq-icon-circle-minus"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),wp.element.createElement("path",{d:"M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"}))):wp.element.createElement("span",{className:"digiblocks-faq-icon-circle-plus"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),wp.element.createElement("path",{d:"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"})));default:return C?wp.element.createElement("span",{className:"digiblocks-faq-icon-minus"},"\u2014"):wp.element.createElement("span",{className:"digiblocks-faq-icon-plus"},"+")}},$=iu.save({className:m,id:X||null,"data-allow-multiple":M?"true":"false"}),I=()=>!P||P.length===0?null:P.map((C,k)=>wp.element.createElement("div",{key:C.id,className:`digiblocks-faq-item ${C.isOpen?"is-active":""}`,"data-item-id":C.id},wp.element.createElement("div",{className:"digiblocks-faq-question"},wp.element.createElement("div",{className:"digiblocks-faq-question-text"},l&&wp.element.createElement("span",{className:"digiblocks-faq-question-prefix"},l),wp.element.createElement(Ec.Content,{tagName:n||"h3",value:C.title,className:"digiblocks-faq-question-text-content"})),wp.element.createElement("span",{className:"digiblocks-faq-question-icon"},s(C.isOpen))),wp.element.createElement("div",{className:"digiblocks-faq-answer"},wp.element.createElement("div",{className:"digiblocks-faq-answer-content"},_&&wp.element.createElement("span",{className:"digiblocks-faq-answer-prefix"},_),wp.element.createElement(Ec.Content,{tagName:"div",className:"digiblocks-faq-answer-text",value:C.content})))));return wp.element.createElement("div",{...$},wp.element.createElement("div",{className:"digiblocks-faq-items"},I()))},Wc=lu;var{__:Oo}=window.wp.i18n,{registerBlockType:au}=window.wp.blocks,{getBlockActiveStatus:nu}=window.wp.digiBlocks;au("digiblocks/faq",{apiVersion:2,title:digiBlocksData.blocks.faq.title,category:"digiblocks",icon:{src:()=>{let{viewbox:ie,path:e}=digiBlocksData.blocks.faq.icon;return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${ie}`,className:"digiblocks-editor-icons"},wp.element.createElement("path",{d:e}))}},description:digiBlocksData.blocks.faq.description,keywords:[Oo("faq","digiblocks"),Oo("questions","digiblocks"),Oo("answers","digiblocks"),Oo("schema","digiblocks")],supports:{inserter:!!nu("faq"),html:!1,className:!1,customClassName:!1,anchor:!1},attributes:{id:{type:"string",default:""},anchor:{type:"string",default:""},visibility:{type:"object",default:{desktop:!1,tablet:!1,mobile:!1}},customClasses:{type:"string",default:""},items:{type:"array",default:[{id:"faq-item-1",title:Oo("What is a frequently asked question?","digiblocks"),content:Oo("A frequently asked question (FAQ) is a question that is commonly asked by users or customers. FAQs are typically displayed in a list with their answers to help visitors find information quickly.","digiblocks"),isOpen:!0},{id:"faq-item-2",title:Oo("How do I add more questions and answers?","digiblocks"),content:Oo('Simply click the "Add FAQ Item" button below to add more questions and answers to your FAQ section. You can also reorder, edit, or remove existing items using the control buttons.',"digiblocks"),isOpen:!1}]},titleColor:{type:"string",default:"#333333"},titleHoverColor:{type:"string",default:""},titleActiveColor:{type:"string",default:"#1e73be"},backgroundColor:{type:"string",default:"#ffffff"},backgroundHoverColor:{type:"string",default:""},backgroundActiveColor:{type:"string",default:"#f7f7f7"},contentColor:{type:"string",default:"#666666"},contentBackgroundColor:{type:"string",default:""},borderColor:{type:"string",default:"#e0e0e0"},borderHoverColor:{type:"string",default:""},borderRadius:{type:"object",default:{desktop:{top:8,right:8,bottom:8,left:8,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderWidth:{type:"object",default:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderStyle:{type:"string",default:"solid"},boxShadow:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},boxShadowHover:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},padding:{type:"object",default:{desktop:{top:20,right:20,bottom:20,left:20,unit:"px"},tablet:{top:15,right:15,bottom:15,left:15,unit:"px"},mobile:{top:10,right:10,bottom:10,left:10,unit:"px"}}},margin:{type:"object",default:{desktop:{top:0,right:0,bottom:30,left:0,unit:"px"},tablet:{top:0,right:0,bottom:25,left:0,unit:"px"},mobile:{top:0,right:0,bottom:20,left:0,unit:"px"}}},titleTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:18,tablet:16,mobile:15},fontSizeUnit:"px",fontWeight:"600",fontStyle:"normal",textTransform:"none",textDecoration:"none",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}},contentTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",fontWeight:"",fontStyle:"normal",textTransform:"",textDecoration:"",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}},iconPosition:{type:"string",default:"right"},iconColor:{type:"string",default:"#333333"},iconHoverColor:{type:"string",default:""},iconActiveColor:{type:"string",default:"#1e73be"},iconSize:{type:"object",default:{desktop:16,tablet:14,mobile:12}},animation:{type:"string",default:"none"},allowMultipleOpen:{type:"boolean",default:!1},iconType:{type:"string",default:"plusMinus"},titleTag:{type:"string",default:"h3"},questionPrefix:{type:"string",default:""},questionPrefixColor:{type:"string",default:""},answerPrefix:{type:"string",default:""},answerPrefixColor:{type:"string",default:""},layout:{type:"string",default:"boxed"},itemsSpacing:{type:"object",default:{desktop:16,tablet:12,mobile:8}},schemaType:{type:"string",default:"FAQPage"},schemaName:{type:"string",default:""}},example:{attributes:{items:[{id:"faq-item-1",title:Oo("What is a frequently asked question?","digiblocks"),content:Oo("A frequently asked question (FAQ) is a question that is commonly asked by users or customers.","digiblocks"),isOpen:!0},{id:"faq-item-2",title:Oo("How do I add more questions?","digiblocks"),content:Oo('Click the "Add FAQ Item" button to add more questions and answers.',"digiblocks"),isOpen:!1}],layout:"boxed",titleColor:"#333333",titleActiveColor:"#1e73be",backgroundColor:"#ffffff"}},edit:Fc,save:Wc});var{__:ge}=window.wp.i18n,{useBlockProps:su,InspectorControls:ru,PanelColorSettings:wa,MediaUpload:cu,MediaUploadCheck:du}=window.wp.blockEditor,{SelectControl:Sa,RangeControl:qc,ToggleControl:_i,TextControl:st,Button:wo,TextareaControl:ml,PanelBody:gu,Tooltip:hl,Dashicon:pu,__experimentalToggleGroupControl:Gc,__experimentalToggleGroupControlOption:rt}=window.wp.components,{useState:os,useEffect:ts,useRef:bu}=window.wp.element,{useDispatch:uu,useSelect:mu}=window.wp.data,{useBlockId:hu,getDimensionCSS:ei,animations:oi,animationPreview:Qc}=digi.utils,{tabIcons:$a}=digi.icons,{ResponsiveControl:kt,DimensionControl:ti,TypographyControl:is,BoxShadowControl:fu,CustomTabPanel:ku,TabPanelBody:No}=digi.components,vu=({attributes:ie,setAttributes:e,clientId:X})=>{let{id:o,anchor:P,visibility:n,customClasses:te,formName:l,recipientEmail:_,successMessage:v,errorMessage:M,enableRecaptcha:N,emailSubject:m,useSiteLogo:s,customLogo:$,businessName:I,emailHeader:C,emailFooter:k,businessAddress:B,submitButtonText:O,buttonAlign:T,backgroundColor:V,textColor:Z,labelColor:ee,buttonBackgroundColor:E,buttonTextColor:f,buttonBackgroundHoverColor:b,buttonTextHoverColor:D,borderStyle:le,borderColor:We,borderWidth:Se,borderRadius:K,padding:L,margin:oe,typography:q,textTypography:J,buttonTypography:A,boxShadow:re,boxShadowHover:se,inputBorderStyle:Ce,inputBorderColor:Y,inputBorderWidth:de,inputBorderRadius:He,inputPadding:be,inputBackgroundColor:H,inputTextColor:xe,inputFocusBorderColor:x,animation:ve,fieldGap:U,labelMargin:me,fields:Te}=ie;hu(o,X,e);let[qe,Ve]=os(window.digi.responsiveState.activeDevice),[Ee,Oe]=os(()=>{if(window.digi.uiState){let r=window.digi.uiState.getActiveTab(X);if(r)return r}return"options"}),[j,ye]=os(-1),{selectBlock:Je}=uu("core/block-editor"),G=mu(r=>r("core/block-editor").getSelectedBlockClientId());ts(()=>{G===X&&j===-1&&Te.length>0?ye(0):G!==X&&ye(-1)},[G,X,Te.length]),ts(()=>window.digi.responsiveState.subscribe(he=>{Ve(he)}),[]);let pe=bu(null);ts(()=>{if(ve&&ve!=="none"){let r=setTimeout(()=>{Qc(o,ve,oi,pe)},100);return()=>clearTimeout(r)}},[ve]);let R=()=>{Qc(o,ve,oi,pe)},d=[{label:ge("None","digiblocks"),value:"none"},...Object.keys(oi).map(r=>({label:r.replace(/-/g," ").replace(/\b\w/g,he=>he.toUpperCase()),value:r}))],ce=[{label:ge("Text","digiblocks"),value:"text"},{label:ge("Email","digiblocks"),value:"email"},{label:ge("Number","digiblocks"),value:"number"},{label:ge("Phone","digiblocks"),value:"tel"},{label:ge("URL","digiblocks"),value:"url"},{label:ge("Date","digiblocks"),value:"date"},{label:ge("Textarea","digiblocks"),value:"textarea"},{label:ge("Select","digiblocks"),value:"select"},{label:ge("Checkbox","digiblocks"),value:"checkbox"},{label:ge("Radio","digiblocks"),value:"radio"},{label:ge("Hidden","digiblocks"),value:"hidden"}],S=[{label:ge("None","digiblocks"),value:"none"},{label:ge("Solid","digiblocks"),value:"solid"},{label:ge("Dotted","digiblocks"),value:"dotted"},{label:ge("Dashed","digiblocks"),value:"dashed"},{label:ge("Double","digiblocks"),value:"double"},{label:ge("Groove","digiblocks"),value:"groove"},{label:ge("Inset","digiblocks"),value:"inset"},{label:ge("Outset","digiblocks"),value:"outset"},{label:ge("Ridge","digiblocks"),value:"ridge"}],g=[{name:"options",title:ge("Options","digiblocks"),icon:$a.optionsIcon},{name:"fields",title:ge("Fields","digiblocks"),icon:$a.fieldIcon},{name:"style",title:ge("Style","digiblocks"),icon:$a.styleIcon},{name:"advanced",title:ge("Advanced","digiblocks"),icon:$a.advancedIcon}],Q=(r="text")=>{let oo={id:`field-${Date.now()}`,type:r,label:`New ${r.charAt(0).toUpperCase()+r.slice(1)} Field`,placeholder:"Enter value",required:!1,width:100,options:r==="select"||r==="radio"?[{label:"Option 1",value:"option1"},{label:"Option 2",value:"option2"}]:[]},h=[...Te,oo];e({fields:h}),ye(h.length-1)},c=r=>{let he=[...Te];he.splice(r,1),e({fields:he}),j===r?ye(-1):j>r&&ye(j-1)},ae=r=>{let oo={...Te[r],id:`field-${Date.now()}`},h=[...Te];h.splice(r+1,0,oo),e({fields:h}),ye(r+1)},y=(r,he,oo)=>{let h=[...Te];h[r]={...h[r],[he]:oo},e({fields:h})},u=(r,he,oo,h)=>{let w=[...Te];w[r].options||(w[r].options=[]),w[r].options[he]={...w[r].options[he],[oo]:h},e({fields:w})},Ne=r=>{let he=[...Te];he[r].options||(he[r].options=[]);let oo=he[r].options.length;he[r].options.push({label:`Option ${oo+1}`,value:`option${oo+1}`}),e({fields:he})},a=(r,he)=>{let oo=[...Te];oo[r].options.splice(he,1),e({fields:oo})},ue=r=>{if(r<=0)return;let he=[...Te],oo=he[r];he[r]=he[r-1],he[r-1]=oo,e({fields:he}),j===r?ye(r-1):j===r-1&&ye(r)},Fe=r=>{if(r>=Te.length-1)return;let he=[...Te],oo=he[r];he[r]=he[r+1],he[r+1]=oo,e({fields:he}),j===r?ye(r+1):j===r+1&&ye(r)},eo=()=>{let r=qe,he="";ve&&ve!=="none"&&oi[ve]&&(he=oi[ve].keyframes);let oo="";le&&le!=="none"?oo=`
				border-style: ${le};
				border-color: ${We};
				${ei(Se,"border-width",r)}
				${ei(K,"border-radius",r)}
            `:oo="border: none;";let h="box-shadow: none;";re&&re.enable&&(h=`box-shadow: ${re.position==="inset"?"inset ":""}${re.horizontal}px ${re.vertical}px ${re.blur}px ${re.spread}px ${re.color};`);let w="";se&&se.enable&&(w=`box-shadow: ${se.position==="inset"?"inset ":""}${se.horizontal}px ${se.vertical}px ${se.blur}px ${se.spread}px ${se.color};`);let Pe=`${ei(L,"padding",r)}`,Ze=`${ei(oe,"margin",r)}`,i=`${ei(be,"padding",r)}`,F=`${ei(He,"border-radius",r)}`,Ue="";q&&(q.fontFamily&&(Ue+=`font-family: ${q.fontFamily};`),q.fontSize&&q.fontSize[r]&&(Ue+=`font-size: ${q.fontSize[r]}${q.fontSizeUnit||"px"};`),q.fontWeight&&(Ue+=`font-weight: ${q.fontWeight};`),q.fontStyle&&(Ue+=`font-style: ${q.fontStyle};`),q.textTransform&&(Ue+=`text-transform: ${q.textTransform};`),q.lineHeight&&q.lineHeight[r]&&(Ue+=`line-height: ${q.lineHeight[r]}${q.lineHeightUnit||"em"};`),q.letterSpacing&&q.letterSpacing[r]&&(Ue+=`letter-spacing: ${q.letterSpacing[r]}${q.letterSpacingUnit||"px"};`));let po="";J&&(J.fontFamily&&(po+=`font-family: ${J.fontFamily};`),J.fontSize&&J.fontSize[r]&&(po+=`font-size: ${J.fontSize[r]}${J.fontSizeUnit||"px"};`),J.fontWeight&&(po+=`font-weight: ${J.fontWeight};`),J.fontStyle&&(po+=`font-style: ${J.fontStyle};`),J.textTransform&&(po+=`text-transform: ${J.textTransform};`),J.lineHeight&&J.lineHeight[r]&&(po+=`line-height: ${J.lineHeight[r]}${J.lineHeightUnit||"em"};`),J.letterSpacing&&J.letterSpacing[r]&&(po+=`letter-spacing: ${J.letterSpacing[r]}${J.letterSpacingUnit||"px"};`));let z="";A&&(A.fontFamily&&(z+=`font-family: ${A.fontFamily};`),A.fontSize&&A.fontSize[r]&&(z+=`font-size: ${A.fontSize[r]}${A.fontSizeUnit||"px"};`),A.fontWeight&&(z+=`font-weight: ${A.fontWeight};`),A.fontStyle&&(z+=`font-style: ${A.fontStyle};`),A.textTransform&&(z+=`text-transform: ${A.textTransform};`),A.lineHeight&&A.lineHeight[r]&&(z+=`line-height: ${A.lineHeight[r]}${A.lineHeightUnit||"em"};`),A.letterSpacing&&A.letterSpacing[r]&&(z+=`letter-spacing: ${A.letterSpacing[r]}${A.letterSpacingUnit||"px"};`));let Ke=T==="full"?"width: 100%;":`text-align: ${T};`,ro=U&&U[r]?U[r]:20,W=me&&me[r]?me[r]:8,ze="";return ve&&ve!=="none"&&oi[ve]&&(ze=oi[ve].keyframes),`
            /* Forms Block - ${o} */
            .${o} {
                ${Pe}
                ${Ze}
                ${h}
                ${oo}
                background-color: ${V};
                color: ${Z};
                width: 100%;
                transition: all 0.3s ease;
                ${Ue}
            }
            
            /* Form container */
            .${o} .digiblocks-form {
                width: 100%;
                position: relative;
            }
            
            /* Form fields */
            .${o} .digiblocks-form-fields {
                display: flex;
                flex-wrap: wrap;
                gap: ${ro}px;
                margin-bottom: ${ro}px;
            }
            
            /* Form field */
            .${o} .digiblocks-form-field {
                margin-bottom: 0;
                transition: all 0.3s ease;
                position: relative;
            }
            
            /* Form field label */
            .${o} .digiblocks-form-field-label {
                display: block;
                margin-bottom: ${W}px;
                color: ${ee};
                ${po}
            }
            
            /* Required indicator */
            .${o} .digiblocks-form-field-required {
                color: #e53e3e;
                margin-left: 4px;
            }
            
            /* Form inputs */
            .${o} .digiblocks-form-input,
            .${o} .digiblocks-form-textarea,
            .${o} .digiblocks-form-select {
                width: 100%;
                ${i}
                ${F}
				border-style: ${Ce};
				border-color: ${Y};
				${ei(de,"border-width",r)}
                background-color: ${H};
                color: ${xe};
                transition: all 0.3s ease;
                ${Ue}
            }
            
            .${o} .digiblocks-form-textarea {
                min-height: 150px;
                resize: vertical;
            }
            
            /* Focus styles */
            .${o} .digiblocks-form-input:focus,
            .${o} .digiblocks-form-textarea:focus,
            .${o} .digiblocks-form-select:focus {
                outline: none;
                border-color: ${x};
            }
            
            /* Checkbox and radio styles */
            .${o} .digiblocks-form-checkbox-label,
            .${o} .digiblocks-form-radio-label {
                display: flex;
                align-items: center;
                cursor: pointer;
                margin-bottom: 8px;
            }
            
            .${o} .digiblocks-form-checkbox,
            .${o} .digiblocks-form-radio {
                margin-right: 8px;
            }
            
            /* Submit button container */
            .${o} .digiblocks-form-submit {
                ${Ke}
                margin-top: ${ro}px;
            }
            
            /* Submit button */
            .${o} .digiblocks-form-submit-button {
                background-color: ${E};
                color: ${f};
                border: none;
                ${F}
                padding: 12px 24px;
                cursor: pointer;
                transition: all 0.3s ease;
                ${z}
                ${T==="full"?"width: 100%;":""}
            }
            
            /* Submit button hover */
            .${o} .digiblocks-form-submit-button:hover {
                background-color: ${b};
                color: ${D};
            }
            
            /* Success message */
            .${o} .digiblocks-form-success {
                color: #38a169;
                padding: 10px;
                margin-top: 20px;
                border-radius: 4px;
                background-color: #f0fff4;
                border: 1px solid #c6f6d5;
                display: none;
            }
            
            /* Error message */
            .${o} .digiblocks-form-error {
                color: #e53e3e;
                padding: 10px;
                margin-top: 20px;
                border-radius: 4px;
                background-color: #fff5f5;
                border: 1px solid #fed7d7;
                display: none;
            }
            
            /* Field error message */
            .${o} .digiblocks-form-field-error {
                color: #e53e3e;
                font-size: 12px;
                margin-top: 4px;
                display: none;
            }
            
            /* Editor specific styles */
            .${o} .digiblocks-form-field.is-selected {
                outline: 2px dashed #4a6cf7;
            }
            
            .${o} .digiblocks-field-actions {
                position: absolute;
                right: 5px;
                top: 5px;
                display: flex;
                gap: 5px;
                z-index: 10;
            }
            
            .${o} .digiblocks-field-action-button {
                padding: 2px !important;
                min-width: auto !important;
                width: 24px !important;
                height: 24px !important;
            }
            
            .${o} .digiblocks-field-width-100 {
                width: 100%;
            }
            
            .${o} .digiblocks-field-width-75 {
				width: calc(75% - (${ro}px * 0.25));
			}
			
			.${o} .digiblocks-field-width-66 {
				width: calc(66.66% - (${ro}px * 0.33));
			}
			
			.${o} .digiblocks-field-width-50 {
				width: calc(50% - (${ro}px * 0.5));
			}
			
			.${o} .digiblocks-field-width-33 {
				width: calc(33.33% - (${ro}px * 0.67));
			}
			
			.${o} .digiblocks-field-width-25 {
				width: calc(25% - (${ro}px * 0.75));
			}
            
            .${o} .digiblocks-form-fields-empty {
                padding: 20px;
                border: 2px dashed #ddd;
                text-align: center;
                border-radius: 4px;
            }
            
            /* Animation keyframes */
            ${ze}
            
            /* Responsive styles */
            @media (max-width: 767px) {
                .${o} .digiblocks-field-width-25,
                .${o} .digiblocks-field-width-33,
                .${o} .digiblocks-field-width-50,
                .${o} .digiblocks-field-width-66,
                .${o} .digiblocks-field-width-75 {
                    width: 100%;
                }
            }

            /* Animation keyframes */
            ${he}

			/* Editor field selection */
			.digi-field-select {
				display: grid;
				grid-template-columns: repeat(3, 1fr);
				grid-gap: 12px;
				margin-bottom: 16px;
				width: 100%;
			}

			.digi-field-select button {
				font-size: .7rem;
				padding: 12px 8px;
				border-radius: 6px;
				border: 1px solid #e2e8f0;
				background-color: #f8fafc;
				color: #334155;
				transition: all 0.3s ease;
				font-weight: 500;
				box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
				text-align: center;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				gap: .5rem;
				height: 60px;
			}

			.digi-field-select button:hover:not(:disabled,[aria-disabled=true]) {
				background-color: #4a6cf7;
				color: white;
				transform: translateY(-2px);
				box-shadow: 0 4px 6px rgba(74, 108, 247, 0.2);
			}

			.digi-field-select button:not(:disabled,[aria-disabled=true]):active {
				transform: translateY(0);
				box-shadow: 0 1px 3px rgba(74, 108, 247, 0.2);
			}

			.block-editor-block-inspector .digiblocks-field-option .components-base-control {
				margin: 0;
			}

			/* Make the last button (Hidden) take up the full width */
			.digi-field-select button:last-child {
				grid-column: 1 / -1; /* Span all columns */
				margin-top: 4px;
				background-color: #f1f5f9;
			}

			.digi-field-select button svg {
				display: flex;
				width: 1.4rem;
				height: 1.4rem;
			}

			/* Visibility Controls */
			${n.desktop?`
				@media (min-width: 992px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${n.tablet?`
				@media (min-width: 768px) and (max-width: 991px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${n.mobile?`
				@media (max-width: 767px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}
        `},ao=r=>wp.element.createElement("div",{className:"digiblocks-field-actions"},wp.element.createElement(hl,{text:ge("Move Up","digiblocks")},wp.element.createElement(wo,{className:"digiblocks-field-action-button",onClick:he=>{he.stopPropagation(),ue(r)},icon:"arrow-up-alt2",disabled:r===0,isSmall:!0})),wp.element.createElement(hl,{text:ge("Move Down","digiblocks")},wp.element.createElement(wo,{className:"digiblocks-field-action-button",onClick:he=>{he.stopPropagation(),Fe(r)},icon:"arrow-down-alt2",disabled:r===Te.length-1,isSmall:!0})),wp.element.createElement(hl,{text:ge("Duplicate","digiblocks")},wp.element.createElement(wo,{className:"digiblocks-field-action-button",onClick:he=>{he.stopPropagation(),ae(r)},icon:"admin-page",isSmall:!0})),wp.element.createElement(hl,{text:ge("Remove","digiblocks")},wp.element.createElement(wo,{className:"digiblocks-field-action-button",onClick:he=>{he.stopPropagation(),c(r)},icon:"trash",isDestructive:!0,isSmall:!0}))),go=r=>{if(r<0||r>=Te.length)return null;let he=Te[r];return wp.element.createElement(gu,{title:ge("Field Settings","digiblocks"),initialOpen:!0},wp.element.createElement(st,{label:ge("Field Label","digiblocks"),value:he.label||"",onChange:oo=>y(r,"label",oo),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Sa,{label:ge("Field Type","digiblocks"),value:he.type,options:ce,onChange:oo=>{(oo==="select"||oo==="radio")&&(!he.options||he.options.length===0)&&y(r,"options",[{label:"Option 1",value:"option1"},{label:"Option 2",value:"option2"}]),y(r,"type",oo)},__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),he.type!=="hidden"&&he.type!=="checkbox"&&he.type!=="radio"&&wp.element.createElement(st,{label:ge("Placeholder","digiblocks"),value:he.placeholder||"",onChange:oo=>y(r,"placeholder",oo),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),he.type==="hidden"&&wp.element.createElement(st,{label:ge("Value","digiblocks"),value:he.value||"",onChange:oo=>y(r,"value",oo),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(_i,{label:ge("Required Field","digiblocks"),checked:he.required||!1,onChange:oo=>y(r,"required",oo),__nextHasNoMarginBottom:!0}),wp.element.createElement(Gc,{label:ge("Field Width (%)","digiblocks"),value:he.width?.toString()||"100",onChange:oo=>y(r,"width",parseInt(oo)),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(rt,{value:"100",label:ge("100","digiblocks")}),wp.element.createElement(rt,{value:"75",label:ge("75","digiblocks")}),wp.element.createElement(rt,{value:"66",label:ge("66","digiblocks")}),wp.element.createElement(rt,{value:"50",label:ge("50","digiblocks")}),wp.element.createElement(rt,{value:"33",label:ge("33","digiblocks")}),wp.element.createElement(rt,{value:"25",label:ge("25","digiblocks")})),(he.type==="select"||he.type==="radio")&&he.options&&wp.element.createElement("div",{className:"digiblocks-field-options"},wp.element.createElement("p",{className:"components-base-control__label"},ge("Options","digiblocks")),he.options.map((oo,h)=>wp.element.createElement("div",{key:h,className:"digiblocks-field-option"},wp.element.createElement("div",{style:{display:"flex",alignItems:"center",marginBottom:"15px"}},wp.element.createElement(st,{label:ge("Label","digiblocks"),value:oo.label||"",onChange:w=>u(r,h,"label",w),style:{flexGrow:1,marginRight:"8px"},__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(st,{label:ge("Value","digiblocks"),value:oo.value||"",onChange:w=>u(r,h,"value",w),style:{flexGrow:1,marginRight:"8px"},__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(hl,{text:ge("Remove Option","digiblocks")},wp.element.createElement(wo,{isDestructive:!0,isSmall:!0,icon:"trash",onClick:()=>a(r,h),style:{alignSelf:"flex-end",marginBottom:"8px"}}))))),wp.element.createElement(wo,{isSecondary:!0,onClick:()=>Ne(r),style:{marginTop:"8px",width:"100%"}},ge("Add Option","digiblocks"))))},t=(r,he)=>{let oo=j===he,h=`digiblocks-form-field digiblocks-field-width-${r.width||"100"} ${oo?"is-selected":""}`,w={readOnly:!0,tabIndex:-1,style:{pointerEvents:"none"}},Pe=({children:Ze})=>wp.element.createElement("div",{className:h,onClick:()=>ye(he)},oo&&ao(he),Ze);switch(r.type){case"text":case"email":case"number":case"tel":case"url":case"date":return wp.element.createElement(Pe,{key:r.id,index:he},wp.element.createElement("label",{className:"digiblocks-form-field-label"},r.label,r.required&&wp.element.createElement("span",{className:"digiblocks-form-field-required"},"*")),wp.element.createElement("input",{type:r.type,className:"digiblocks-form-input",placeholder:r.placeholder||"",...w}),wp.element.createElement("div",{className:"digiblocks-form-field-error"}));case"textarea":return wp.element.createElement(Pe,{key:r.id,index:he},wp.element.createElement("label",{className:"digiblocks-form-field-label"},r.label,r.required&&wp.element.createElement("span",{className:"digiblocks-form-field-required"},"*")),wp.element.createElement("textarea",{className:"digiblocks-form-textarea",placeholder:r.placeholder||"",...w}),wp.element.createElement("div",{className:"digiblocks-form-field-error"}));case"select":return wp.element.createElement(Pe,{key:r.id,index:he},wp.element.createElement("label",{className:"digiblocks-form-field-label"},r.label,r.required&&wp.element.createElement("span",{className:"digiblocks-form-field-required"},"*")),wp.element.createElement("select",{className:"digiblocks-form-select",...w},wp.element.createElement("option",{value:""},r.placeholder||ge("Select an option","digiblocks")),r.options&&r.options.map((Ze,i)=>wp.element.createElement("option",{key:i,value:Ze.value},Ze.label))),wp.element.createElement("div",{className:"digiblocks-form-field-error"}));case"checkbox":return wp.element.createElement(Pe,{key:r.id,index:he},wp.element.createElement("label",{className:"digiblocks-form-checkbox-label"},wp.element.createElement("input",{type:"checkbox",className:"digiblocks-form-checkbox",...w}),wp.element.createElement("span",null,r.label,r.required&&wp.element.createElement("span",{className:"digiblocks-form-field-required"},"*"))),wp.element.createElement("div",{className:"digiblocks-form-field-error"}));case"radio":return wp.element.createElement(Pe,{key:r.id,index:he},wp.element.createElement("label",{className:"digiblocks-form-field-label"},r.label,r.required&&wp.element.createElement("span",{className:"digiblocks-form-field-required"},"*")),r.options&&r.options.map((Ze,i)=>wp.element.createElement("label",{key:i,className:"digiblocks-form-radio-label"},wp.element.createElement("input",{type:"radio",className:"digiblocks-form-radio",name:`radio-${r.id}`,value:Ze.value,...w}),wp.element.createElement("span",null,Ze.label))),wp.element.createElement("div",{className:"digiblocks-form-field-error"}));case"hidden":return wp.element.createElement(Pe,{key:r.id,index:he},wp.element.createElement("div",{style:{padding:"10px",background:"#f7f7f7",borderRadius:"4px"}},wp.element.createElement("div",{style:{display:"flex",alignItems:"center"}},wp.element.createElement(pu,{icon:"hidden",style:{marginRight:"8px"}}),wp.element.createElement("span",null,wp.element.createElement("strong",null,ge("Hidden Field:","digiblocks"))," ",r.label,wp.element.createElement("br",null),wp.element.createElement("small",{style:{opacity:.7}},ge("Value:","digiblocks")," ",r.value||ge("Not set","digiblocks"))))));default:return null}},p=()=>{switch(Ee){case"options":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(No,{tab:"options",name:"form-settings",title:ge("Form Settings","digiblocks"),initialOpen:!0},wp.element.createElement(st,{label:ge("Form Name","digiblocks"),value:l,onChange:r=>e({formName:r}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(st,{label:ge("Recipient Email","digiblocks"),value:_,onChange:r=>e({recipientEmail:r}),help:ge("Leave empty to use the admin email","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(st,{label:ge("Button Text","digiblocks"),value:O,onChange:r=>e({submitButtonText:r}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Gc,{label:ge("Button Alignment","digiblocks"),value:T,onChange:r=>e({buttonAlign:r}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(rt,{value:"left",label:ge("Left","digiblocks")}),wp.element.createElement(rt,{value:"center",label:ge("Center","digiblocks")}),wp.element.createElement(rt,{value:"right",label:ge("Right","digiblocks")}),wp.element.createElement(rt,{value:"full",label:ge("Full","digiblocks")}))),wp.element.createElement(No,{tab:"options",name:"messages",title:ge("Messages","digiblocks"),initialOpen:!1},wp.element.createElement(ml,{label:ge("Success Message","digiblocks"),value:v,onChange:r=>e({successMessage:r}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(ml,{label:ge("Error Message","digiblocks"),value:M,onChange:r=>e({errorMessage:r}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(No,{tab:"options",name:"security",title:ge("Security","digiblocks"),initialOpen:!1},wp.element.createElement(_i,{label:ge("Enable reCAPTCHA","digiblocks"),checked:N,onChange:r=>e({enableRecaptcha:r}),help:ge("Enable Google reCAPTCHA to protect your form from spam.","digiblocks"),__nextHasNoMarginBottom:!0})),wp.element.createElement(No,{tab:"options",name:"email-settings",title:ge("Email Settings","digiblocks"),initialOpen:!1},wp.element.createElement(st,{label:ge("Email Subject","digiblocks"),value:m,onChange:r=>e({emailSubject:r}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(_i,{label:ge("Use Site Logo","digiblocks"),checked:s,onChange:r=>e({useSiteLogo:r}),help:ge("Display the site logo in email header","digiblocks"),__nextHasNoMarginBottom:!0}),!s&&wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("label",{className:"components-base-control__label"},ge("Custom Logo","digiblocks")),wp.element.createElement("div",{className:"editor-post-featured-image"},wp.element.createElement(du,null,wp.element.createElement(cu,{onSelect:r=>{e({customLogo:r.url})},allowedTypes:["image"],value:$,render:({open:r})=>wp.element.createElement("div",{className:"components-base-control__field"},$?wp.element.createElement("div",null,wp.element.createElement("img",{src:$,alt:ge("Logo","digiblocks"),style:{maxWidth:"100%",maxHeight:"100px",marginBottom:"8px",display:"block"}}),wp.element.createElement("div",{className:"components-button-group",style:{display:"flex"}},wp.element.createElement(wo,{onClick:r,variant:"secondary",isSmall:!0},ge("Replace","digiblocks")),wp.element.createElement(wo,{onClick:()=>e({customLogo:""}),variant:"secondary",isDestructive:!0,isSmall:!0,style:{marginLeft:"8px"}},ge("Remove","digiblocks")))):wp.element.createElement(wo,{onClick:r,variant:"secondary",className:"editor-post-featured-image__toggle"},ge("Upload Logo","digiblocks")))})))),wp.element.createElement(st,{label:ge("Business Name","digiblocks"),value:I,onChange:r=>e({businessName:r}),help:ge("Leave empty to use the site name","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(ml,{label:ge("Email Header Text","digiblocks"),value:C,onChange:r=>e({emailHeader:r}),help:ge("Optional text to display above the form data","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(ml,{label:ge("Email Footer Text","digiblocks"),value:k,onChange:r=>e({emailFooter:r}),help:ge("Optional text for the email footer (e.g., business address)","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(ml,{label:ge("Business Address","digiblocks"),value:B,onChange:r=>e({businessAddress:r}),help:ge("Business address to display in email footer","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})));case"fields":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(No,{tab:"fields",name:"field-types",title:ge("Add Fields","digiblocks"),initialOpen:!0},wp.element.createElement("div",{className:"digi-field-select"},wp.element.createElement(wo,{onClick:()=>Q("text")},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},wp.element.createElement("path",{d:"M64 96l0 32c0 17.7-14.3 32-32 32s-32-14.3-32-32L0 80C0 53.5 21.5 32 48 32l176 0 176 0c26.5 0 48 21.5 48 48l0 48c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-32L256 96l0 320 48 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-160 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l48 0 0-320L64 96z"})),wp.element.createElement("span",null,ge("Text","digiblocks"))),wp.element.createElement(wo,{onClick:()=>Q("email")},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},wp.element.createElement("path",{d:"M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"})),wp.element.createElement("span",null,ge("Email","digiblocks"))),wp.element.createElement(wo,{onClick:()=>Q("number")},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},wp.element.createElement("path",{d:"M181.3 32.4c17.4 2.9 29.2 19.4 26.3 36.8L197.8 128l95.1 0 11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3s29.2 19.4 26.3 36.8L357.8 128l58.2 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-68.9 0L325.8 320l58.2 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-68.9 0-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8l9.8-58.7-95.1 0-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8L90.2 384 32 384c-17.7 0-32-14.3-32-32s14.3-32 32-32l68.9 0 21.3-128L64 192c-17.7 0-32-14.3-32-32s14.3-32 32-32l68.9 0 11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3zM187.1 192L165.8 320l95.1 0 21.3-128-95.1 0z"})),wp.element.createElement("span",null,ge("Number","digiblocks"))),wp.element.createElement(wo,{onClick:()=>Q("tel")},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},wp.element.createElement("path",{d:"M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"})),wp.element.createElement("span",null,ge("Phone","digiblocks"))),wp.element.createElement(wo,{onClick:()=>Q("date")},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},wp.element.createElement("path",{d:"M96 32l0 32L48 64C21.5 64 0 85.5 0 112l0 48 448 0 0-48c0-26.5-21.5-48-48-48l-48 0 0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32L160 64l0-32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192L0 192 0 464c0 26.5 21.5 48 48 48l352 0c26.5 0 48-21.5 48-48l0-272z"})),wp.element.createElement("span",null,ge("Date","digiblocks"))),wp.element.createElement(wo,{onClick:()=>Q("textarea")},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},wp.element.createElement("path",{d:"M192 32l64 0 160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0 0 352c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-352-32 0 0 352c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-32 0c-88.4 0-160-71.6-160-160s71.6-160 160-160z"})),wp.element.createElement("span",null,ge("Textarea","digiblocks"))),wp.element.createElement(wo,{onClick:()=>Q("select")},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},wp.element.createElement("path",{d:"M384 480c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0zM224 352c-6.7 0-13-2.8-17.6-7.7l-104-112c-6.5-7-8.2-17.2-4.4-25.9s12.5-14.4 22-14.4l208 0c9.5 0 18.2 5.7 22 14.4s2.1 18.9-4.4 25.9l-104 112c-4.5 4.9-10.9 7.7-17.6 7.7z"})),wp.element.createElement("span",null,ge("Select","digiblocks"))),wp.element.createElement(wo,{onClick:()=>Q("checkbox")},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},wp.element.createElement("path",{d:"M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"})),wp.element.createElement("span",null,ge("Checkbox","digiblocks"))),wp.element.createElement(wo,{onClick:()=>Q("radio")},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},wp.element.createElement("path",{d:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-352a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"})),wp.element.createElement("span",null,ge("Radio","digiblocks"))),wp.element.createElement(wo,{onClick:()=>Q("hidden")},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512"},wp.element.createElement("path",{d:"M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"})),wp.element.createElement("span",null,ge("Hidden","digiblocks")))),wp.element.createElement(kt,{label:ge("Field Gap","digiblocks")},wp.element.createElement(qc,{value:U[qe],onChange:r=>e({fieldGap:{...U,[qe]:r}}),min:0,max:50,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(kt,{label:ge("Label Margin","digiblocks")},wp.element.createElement(qc,{value:me[qe],onChange:r=>e({labelMargin:{...me,[qe]:r}}),min:0,max:30,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}))),j>=0&&go(j));case"style":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(No,{tab:"style",name:"colors",title:ge("Colors","digiblocks"),initialOpen:!0},wp.element.createElement(wa,{title:ge("Form Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:V,onChange:r=>e({backgroundColor:r}),label:ge("Background Color","digiblocks")},{value:Z,onChange:r=>e({textColor:r}),label:ge("Text Color","digiblocks")},{value:ee,onChange:r=>e({labelColor:r}),label:ge("Label Color","digiblocks")}]}),wp.element.createElement(wa,{title:ge("Input Colors","digiblocks"),initialOpen:!1,enableAlpha:!0,colorSettings:[{value:H,onChange:r=>e({inputBackgroundColor:r}),label:ge("Input Background","digiblocks")},{value:xe,onChange:r=>e({inputTextColor:r}),label:ge("Input Text","digiblocks")},{value:Y,onChange:r=>e({inputBorderColor:r}),label:ge("Input Border","digiblocks")},{value:x,onChange:r=>e({inputFocusBorderColor:r}),label:ge("Input Focus Border","digiblocks")}]}),wp.element.createElement(wa,{title:ge("Button Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:E,onChange:r=>e({buttonBackgroundColor:r}),label:ge("Background Color","digiblocks")},{value:f,onChange:r=>e({buttonTextColor:r}),label:ge("Text Color","digiblocks")},{value:b,onChange:r=>e({buttonBackgroundHoverColor:r}),label:ge("Hover Background Color","digiblocks")},{value:D,onChange:r=>e({buttonTextHoverColor:r}),label:ge("Hover Text Color","digiblocks")}]})),wp.element.createElement(No,{tab:"style",name:"typography",title:ge("Typography","digiblocks"),initialOpen:!1},wp.element.createElement(is,{label:ge("Form Typography","digiblocks"),value:q,onChange:r=>e({typography:r}),defaults:{fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em"}}),wp.element.createElement(is,{label:ge("Label Typography","digiblocks"),value:J,onChange:r=>e({textTypography:r}),defaults:{fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em"}}),wp.element.createElement(is,{label:ge("Button Typography","digiblocks"),value:A,onChange:r=>e({buttonTypography:r}),defaults:{fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em"}})),wp.element.createElement(No,{tab:"style",name:"form-border",title:ge("Form Border","digiblocks"),initialOpen:!1},wp.element.createElement(Sa,{label:ge("Border Style","digiblocks"),value:le,options:S,onChange:r=>e({borderStyle:r}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),le!=="none"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(kt,{label:ge("Border Width","digiblocks")},wp.element.createElement(ti,{values:Se[qe],onChange:r=>e({borderWidth:{...Se,[qe]:r}}),units:[{label:"px",value:"px"},{label:"rem",value:"rem"},{label:"em",value:"em"},{label:"%",value:"%"}]})),wp.element.createElement(wa,{title:ge("Border Color","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:We,onChange:r=>e({borderColor:r}),label:ge("Border Color","digiblocks")}]}),wp.element.createElement(kt,{label:ge("Border Radius","digiblocks")},wp.element.createElement(ti,{values:K[qe],onChange:r=>e({borderRadius:{...K,[qe]:r}}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]}))),wp.element.createElement(fu,{normalValue:re,hoverValue:se,onNormalChange:r=>e({boxShadow:r}),onHoverChange:r=>e({boxShadowHover:r})})),wp.element.createElement(No,{tab:"style",name:"input-style",title:ge("Input Style","digiblocks"),initialOpen:!1},wp.element.createElement(Sa,{label:ge("Input Border Style","digiblocks"),value:Ce,options:S,onChange:r=>e({inputBorderStyle:r}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),Ce!=="none"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(kt,{label:ge("Input Border Width","digiblocks")},wp.element.createElement(ti,{values:de[qe],onChange:r=>e({inputBorderWidth:{...de,[qe]:r}}),units:[{label:"px",value:"px"},{label:"rem",value:"rem"},{label:"em",value:"em"},{label:"%",value:"%"}]})),wp.element.createElement(kt,{label:ge("Input Border Radius","digiblocks")},wp.element.createElement(ti,{values:He&&He[qe]?He[qe]:{top:4,right:4,bottom:4,left:4,unit:"px"},onChange:r=>e({inputBorderRadius:{...He,[qe]:r}}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]}))),wp.element.createElement(kt,{label:ge("Input Padding","digiblocks")},wp.element.createElement(ti,{values:be&&be[qe]?be[qe]:{top:12,right:15,bottom:12,left:15,unit:"px"},onChange:r=>e({inputPadding:{...be,[qe]:r}})}))),wp.element.createElement(No,{tab:"style",name:"spacing",title:ge("Spacing","digiblocks"),initialOpen:!1},wp.element.createElement(kt,{label:ge("Padding","digiblocks")},wp.element.createElement(ti,{values:L&&L[qe]?L[qe]:{top:30,right:30,bottom:30,left:30,unit:"px"},onChange:r=>e({padding:{...L,[qe]:r}})})),wp.element.createElement(kt,{label:ge("Margin","digiblocks")},wp.element.createElement(ti,{values:oe&&oe[qe]?oe[qe]:{top:0,right:0,bottom:30,left:0,unit:"px"},onChange:r=>e({margin:{...oe,[qe]:r}})}))));case"advanced":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(No,{tab:"advanced",name:"animation",title:ge("Animation","digiblocks"),initialOpen:!0},wp.element.createElement(Sa,{label:ge("Animation Effect","digiblocks"),value:ve,options:d,onChange:r=>e({animation:r}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),ve&&ve!=="none"&&wp.element.createElement("div",{style:{marginTop:"10px"}},wp.element.createElement(wo,{variant:"secondary",isSecondary:!0,onClick:R,style:{width:"100%"}},ge("Preview Animation","digiblocks")))),wp.element.createElement(No,{tab:"advanced",name:"visibility",title:ge("Visibility","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control__help",style:{padding:"12px",backgroundColor:"#f0f6fc",border:"1px solid #c3ddfd",borderRadius:"4px",marginBottom:"16px"}},wp.element.createElement("strong",null,ge("Editor Note:","digiblocks")),wp.element.createElement("br",null),ge("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.","digiblocks")),wp.element.createElement(_i,{label:ge("Hide on Desktop","digiblocks"),checked:n.desktop,onChange:r=>e({visibility:{...n,desktop:r}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(_i,{label:ge("Hide on Tablet","digiblocks"),checked:n.tablet,onChange:r=>e({visibility:{...n,tablet:r}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(_i,{label:ge("Hide on Mobile","digiblocks"),checked:n.mobile,onChange:r=>e({visibility:{...n,mobile:r}}),__nextHasNoMarginBottom:!0})),wp.element.createElement(No,{tab:"advanced",name:"additional",title:ge("Additional","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control html-anchor-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"html-anchor"},ge("HTML anchor","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"html-anchor",value:P||"",onChange:r=>e({anchor:r.target.value}),"aria-describedby":"html-anchor-help",autoCapitalize:"none",autoComplete:"off"})),wp.element.createElement("p",{id:"html-anchor-help",className:"components-base-control__help"},ge(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`,"digiblocks")," ",wp.element.createElement("a",{className:"components-external-link",href:"https://wordpress.org/documentation/article/page-jumps/",target:"_blank",rel:"external noreferrer noopener"},wp.element.createElement("span",{className:"components-external-link__contents"},ge("Learn more about anchors","digiblocks")),wp.element.createElement("span",{className:"components-external-link__icon","aria-label":"(opens in a new tab)"},"\u2197")))),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"additional-css-classes"},ge("Additional CSS class(es)","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"additional-css-classes",value:te||"",onChange:r=>e({customClasses:r.target.value}),"aria-describedby":"additional-css-classes-help",autoComplete:"off"})),wp.element.createElement("p",{id:"additional-css-classes-help",className:"components-base-control__help"},ge("Separate multiple classes with spaces.","digiblocks")))));default:return null}},De=su({className:`digiblocks-forms ${o} ${te||""}`,id:P||null});return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(ru,null,wp.element.createElement(ku,{tabs:g,activeTab:Ee,onSelect:Oe,customClass:"four"},p())),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:eo()}}),wp.element.createElement("div",{...De},wp.element.createElement("div",{className:"digiblocks-form"},wp.element.createElement("div",{className:"digiblocks-form-fields"},Te&&Te.length>0?Te.map((r,he)=>t(r,he)):wp.element.createElement("div",{className:"digiblocks-form-fields-empty"},ge('No fields added yet. Click the "Fields" tab to add form fields.',"digiblocks"))),wp.element.createElement("div",{className:"digiblocks-form-submit",style:{textAlign:T==="full"?"center":T}},wp.element.createElement("button",{className:"digiblocks-form-submit-button"},O)),wp.element.createElement("div",{className:"digiblocks-form-messages"},wp.element.createElement("div",{className:"digiblocks-form-success"},v),wp.element.createElement("div",{className:"digiblocks-form-error"},M)))))},Jc=vu;var{useBlockProps:xu}=window.wp.blockEditor,yu=({attributes:ie})=>{let{id:e,anchor:X,customClasses:o,animation:P,successMessage:n,errorMessage:te,submitButtonText:l,buttonAlign:_,fields:v}=ie,M=`digiblocks-forms ${e} ${P!=="none"?`animate-${P}`:""} ${o||""}`,N=xu.save({className:M,id:X||null}),m=(s,$)=>{let I=`digiblocks-field-width-${s.width||"100"}`;switch(s.type){case"text":case"email":case"number":case"tel":case"url":case"date":return wp.element.createElement("div",{key:s.id,className:`digiblocks-form-field ${I}`,"data-field-id":s.id,"data-field-type":s.type},wp.element.createElement("label",{className:"digiblocks-form-field-label",htmlFor:`${e}-${s.id}`},s.label,s.required&&wp.element.createElement("span",{className:"digiblocks-form-field-required"},"*")),wp.element.createElement("input",{type:s.type,id:`${e}-${s.id}`,name:s.id,className:"digiblocks-form-input",placeholder:s.placeholder||"",required:s.required}),wp.element.createElement("div",{className:"digiblocks-form-field-error"}));case"textarea":return wp.element.createElement("div",{key:s.id,className:`digiblocks-form-field ${I}`,"data-field-id":s.id,"data-field-type":s.type},wp.element.createElement("label",{className:"digiblocks-form-field-label",htmlFor:`${e}-${s.id}`},s.label,s.required&&wp.element.createElement("span",{className:"digiblocks-form-field-required"},"*")),wp.element.createElement("textarea",{id:`${e}-${s.id}`,name:s.id,className:"digiblocks-form-textarea",placeholder:s.placeholder||"",required:s.required}),wp.element.createElement("div",{className:"digiblocks-form-field-error"}));case"select":return wp.element.createElement("div",{key:s.id,className:`digiblocks-form-field ${I}`,"data-field-id":s.id,"data-field-type":s.type},wp.element.createElement("label",{className:"digiblocks-form-field-label",htmlFor:`${e}-${s.id}`},s.label,s.required&&wp.element.createElement("span",{className:"digiblocks-form-field-required"},"*")),wp.element.createElement("select",{id:`${e}-${s.id}`,name:s.id,className:"digiblocks-form-select",required:s.required},wp.element.createElement("option",{value:""},s.placeholder||"Select an option"),s.options&&s.options.map((C,k)=>wp.element.createElement("option",{key:k,value:C.value},C.label))),wp.element.createElement("div",{className:"digiblocks-form-field-error"}));case"checkbox":return wp.element.createElement("div",{key:s.id,className:`digiblocks-form-field ${I}`,"data-field-id":s.id,"data-field-type":s.type},wp.element.createElement("label",{className:"digiblocks-form-checkbox-label"},wp.element.createElement("input",{type:"checkbox",id:`${e}-${s.id}`,name:s.id,className:"digiblocks-form-checkbox",value:"1",required:s.required}),wp.element.createElement("span",null,s.label,s.required&&wp.element.createElement("span",{className:"digiblocks-form-field-required"},"*"))),wp.element.createElement("div",{className:"digiblocks-form-field-error"}));case"radio":return wp.element.createElement("div",{key:s.id,className:`digiblocks-form-field ${I}`,"data-field-id":s.id,"data-field-type":s.type},wp.element.createElement("label",{className:"digiblocks-form-field-label"},s.label,s.required&&wp.element.createElement("span",{className:"digiblocks-form-field-required"},"*")),s.options&&s.options.map((C,k)=>wp.element.createElement("label",{key:k,className:"digiblocks-form-radio-label"},wp.element.createElement("input",{type:"radio",id:`${e}-${s.id}-${k}`,name:s.id,className:"digiblocks-form-radio",value:C.value,required:s.required&&k===0}),wp.element.createElement("span",null,C.label))),wp.element.createElement("div",{className:"digiblocks-form-field-error"}));case"hidden":return wp.element.createElement("input",{key:s.id,type:"hidden",id:`${e}-${s.id}`,name:s.id,value:s.value||"","data-field-id":s.id,"data-field-type":s.type});default:return null}};return wp.element.createElement("div",{...N},wp.element.createElement("form",{className:"digiblocks-form",id:`${e}-form`,"data-form-id":e,onSubmit:"return false;"},wp.element.createElement("div",{className:"digiblocks-form-fields"},v&&v.map((s,$)=>m(s,$))),wp.element.createElement("div",{className:"digiblocks-form-submit",style:{textAlign:_==="full"?"center":_}},wp.element.createElement("button",{type:"submit",className:"digiblocks-form-submit-button",style:_==="full"?{width:"100%"}:{}},l)),wp.element.createElement("div",{className:"digiblocks-form-messages"},wp.element.createElement("div",{className:"digiblocks-form-success"},n),wp.element.createElement("div",{className:"digiblocks-form-error"},te))))},Yc=yu;var{__:vo}=window.wp.i18n,{registerBlockType:Cu}=window.wp.blocks,{getBlockActiveStatus:wu}=window.wp.digiBlocks;Cu("digiblocks/forms",{apiVersion:2,title:digiBlocksData.blocks.forms.title,category:"digiblocks",icon:{src:()=>{let{viewbox:ie,path:e}=digiBlocksData.blocks.forms.icon;return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${ie}`,className:"digiblocks-editor-icons"},wp.element.createElement("path",{d:e}))}},description:digiBlocksData.blocks.forms.description,keywords:[vo("form","digiblocks"),vo("contact","digiblocks"),vo("input","digiblocks"),vo("email","digiblocks"),vo("field","digiblocks")],supports:{inserter:!!wu("forms"),html:!1,className:!1,customClassName:!1,anchor:!1},attributes:{id:{type:"string",default:""},anchor:{type:"string"},visibility:{type:"object",default:{desktop:!1,tablet:!1,mobile:!1}},customClasses:{type:"string"},formName:{type:"string",default:vo("Contact Form","digiblocks")},recipientEmail:{type:"string",default:""},emailSubject:{type:"string",default:vo("New form submission","digiblocks")},successMessage:{type:"string",default:vo("Thank you for your submission!","digiblocks")},errorMessage:{type:"string",default:vo("There was an error submitting the form. Please try again.","digiblocks")},enableRecaptcha:{type:"boolean",default:!1},useSiteLogo:{type:"boolean",default:!0},customLogo:{type:"string",default:""},emailHeader:{type:"string",default:""},emailFooter:{type:"string",default:""},businessName:{type:"string",default:""},businessAddress:{type:"string",default:""},submitButtonText:{type:"string",default:vo("Submit","digiblocks")},buttonAlign:{type:"string",default:"left"},backgroundColor:{type:"string",default:"#ffffff"},textColor:{type:"string",default:"#333333"},labelColor:{type:"string",default:"#333333"},buttonBackgroundColor:{type:"string",default:"#4a6cf7"},buttonTextColor:{type:"string",default:"#ffffff"},buttonBackgroundHoverColor:{type:"string",default:"#3a5ce5"},buttonTextHoverColor:{type:"string",default:"#ffffff"},borderStyle:{type:"string",default:"solid"},borderColor:{type:"string",default:"#e0e0e0"},borderWidth:{type:"object",default:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderRadius:{type:"object",default:{desktop:{top:8,right:8,bottom:8,left:8,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},padding:{type:"object",default:{desktop:{top:30,right:30,bottom:30,left:30,unit:"px"},tablet:{top:25,right:25,bottom:25,left:25,unit:"px"},mobile:{top:20,right:20,bottom:20,left:20,unit:"px"}}},margin:{type:"object",default:{desktop:{top:0,right:0,bottom:30,left:0,unit:"px"},tablet:{top:0,right:0,bottom:25,left:0,unit:"px"},mobile:{top:0,right:0,bottom:20,left:0,unit:"px"}}},typography:{type:"object",default:{}},textTypography:{type:"object",default:{}},buttonTypography:{type:"object",default:{}},boxShadow:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.1)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},boxShadowHover:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},inputBorderStyle:{type:"string",default:"solid"},inputBorderColor:{type:"string",default:"#e0e0e0"},inputBorderWidth:{type:"object",default:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},inputBorderRadius:{type:"object",default:{desktop:{top:4,right:4,bottom:4,left:4,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},inputPadding:{type:"object",default:{desktop:{top:12,right:15,bottom:12,left:15,unit:"px"},tablet:{top:10,right:12,bottom:10,left:12,unit:"px"},mobile:{top:8,right:10,bottom:8,left:10,unit:"px"}}},inputBackgroundColor:{type:"string",default:"#ffffff"},inputTextColor:{type:"string",default:"#333333"},inputFocusBorderColor:{type:"string",default:"#4a6cf7"},animation:{type:"string",default:"none"},fieldGap:{type:"object",default:{desktop:20,tablet:15,mobile:12}},labelMargin:{type:"object",default:{desktop:8,tablet:6,mobile:5}},fields:{type:"array",default:[{id:"name",type:"text",label:vo("Name","digiblocks"),placeholder:vo("Enter your name","digiblocks"),required:!0,width:100},{id:"email",type:"email",label:vo("Email","digiblocks"),placeholder:vo("Enter your email","digiblocks"),required:!0,width:100},{id:"message",type:"textarea",label:vo("Message","digiblocks"),placeholder:vo("Enter your message","digiblocks"),required:!0,width:100}]}},example:{attributes:{fields:[{id:"name",type:"text",label:vo("Name","digiblocks"),placeholder:vo("Enter your name","digiblocks"),required:!0,width:100},{id:"email",type:"email",label:vo("Email","digiblocks"),placeholder:vo("Enter your email","digiblocks"),required:!0,width:100},{id:"message",type:"textarea",label:vo("Message","digiblocks"),placeholder:vo("Enter your message","digiblocks"),required:!0,width:100}],formName:vo("Contact Form","digiblocks"),backgroundColor:"#ffffff",textColor:"#333333",labelColor:"#333333",borderStyle:"solid",borderColor:"#e0e0e0",buttonBackgroundColor:"#4a6cf7",buttonTextColor:"#ffffff",submitButtonText:vo("Submit","digiblocks"),viewportWidth:450}},edit:Jc,save:Yc});var{__:Xe}=window.wp.i18n,{useBlockProps:Su,InspectorControls:$u,PanelColorSettings:_u}=window.wp.blockEditor,{TextControl:ls,TextareaControl:Zc,RangeControl:Kc,SelectControl:_a,Button:Bi,Placeholder:Bu,Spinner:Tu,ToggleControl:Rt,BaseControl:Nu,__experimentalToggleGroupControl:r0,__experimentalToggleGroupControlOption:c0}=window.wp.components,{useState:ii,useEffect:Ti,useRef:as}=window.wp.element,{useBlockId:Hu,getDimensionCSS:Xc,animations:fl,animationPreview:Ac}=digi.utils,{tabIcons:ns}=digi.icons,{ResponsiveControl:ss,DimensionControl:ed,CustomTabPanel:zu,BoxShadowControl:Mu,TabPanelBody:vt}=digi.components,Du=({attributes:ie,setAttributes:e,clientId:X})=>{let{id:o,anchor:P,visibility:n,customClasses:te,mapHeight:l,zoom:_,mapType:v,mapStyle:M,customMapStyle:N,markers:m,address:s,animation:$,enableZoom:I,enableScroll:C,enableFullscreenControl:k,enableStreetViewControl:B,enableMapTypeControl:O,borderStyle:T,borderWidth:V,borderRadius:Z,borderColor:ee,boxShadow:E,boxShadowHover:f}=ie;Hu(o,X,e);let[b,D]=ii(window.digi.responsiveState.activeDevice),[le,We]=ii(!1),[Se,K]=ii(null),[L,oe]=ii(!1),[q,J]=ii(null),[A,re]=ii([]),se=as(null),Ce=as(null),[Y,de]=ii(()=>{if(window.digi.uiState){let R=window.digi.uiState.getActiveTab(X);if(R)return R}return"options"});Ti(()=>window.digi.responsiveState.subscribe(d=>{D(d)}),[]),Ti(()=>{m||e({markers:[]})},[e]),Ti(()=>{if(!L&&typeof google>"u"&&!window.googleMapsLoading){if(!digiBlocksData.googleMapsApiKey){K(Xe("Google Maps API key not found. Please add it in the DigiBlocks settings.","digiblocks"));return}window.googleMapsLoading=!0,window.digiblocksGoogleMapsCallbacks=window.digiblocksGoogleMapsCallbacks||[];let R=()=>{oe(!0),Ce.current=new google.maps.Geocoder};window.digiblocksGoogleMapsCallbacks.push(R),typeof window.digiblocksGoogleMapsCallback!="function"&&(window.digiblocksGoogleMapsCallback=()=>{window.googleMapsInitialized=!0,window.googleMapsLoading=!1,window.digiblocksGoogleMapsCallbacks.forEach(ce=>{typeof ce=="function"&&ce()})});let d=document.createElement("script");return d.src=`https://maps.googleapis.com/maps/api/js?key=${digiBlocksData.googleMapsApiKey}&callback=digiblocksGoogleMapsCallback&loading=async`,d.async=!0,d.defer=!0,document.head.appendChild(d),()=>{let ce=window.digiblocksGoogleMapsCallbacks.indexOf(R);ce>-1&&window.digiblocksGoogleMapsCallbacks.splice(ce,1)}}else if(!L&&typeof google<"u")oe(!0),Ce.current=new google.maps.Geocoder;else if(!L&&window.googleMapsLoading){let R=()=>{oe(!0),Ce.current=new google.maps.Geocoder};return window.digiblocksGoogleMapsCallbacks=window.digiblocksGoogleMapsCallbacks||[],window.digiblocksGoogleMapsCallbacks.push(R),()=>{let d=window.digiblocksGoogleMapsCallbacks.indexOf(R);d>-1&&window.digiblocksGoogleMapsCallbacks.splice(d,1)}}},[L]),Ti(()=>{if(L&&se.current&&!q){let d={center:{lat:40.7128,lng:-74.006},zoom:_||10,mapTypeId:v||"roadmap",zoomControl:I,scrollwheel:C,fullscreenControl:k,streetViewControl:B,mapTypeControl:O},ce=m&&m.length>0;if(ce&&digiBlocksData.googleMapsMapId)d.mapId=digiBlocksData.googleMapsMapId;else if(M&&M!=="default")if(M==="custom"&&N)try{let g=JSON.parse(N);d.styles=g}catch(g){console.error("Invalid map style JSON:",g)}else Ee[M]&&(d.styles=Ee[M]);let S=new google.maps.Map(se.current,d);J(S),Ce.current||(Ce.current=new google.maps.Geocoder),s&&He(s,S),ce&&ve(m,S)}},[L,se,q,_,v,M,N,s,m,I,C,k,B,O]),Ti(()=>{if(q){if(q.setZoom(_),q.setMapTypeId(v),M&&M!=="default")if(M==="custom"&&N)try{let R=JSON.parse(N);q.setOptions({styles:R})}catch(R){console.error("Invalid map style JSON:",R)}else Ee[M]&&q.setOptions({styles:Ee[M]});else q.setOptions({styles:[]});q.setOptions({zoomControl:I,scrollwheel:C,fullscreenControl:k,streetViewControl:B,mapTypeControl:O})}},[q,_,v,M,N,I,C,k,B,O]);let He=(R,d,ce=-1)=>{Ce.current&&(We(!0),K(null),Ce.current.geocode({address:R},(S,g)=>{if(We(!1),g==="OK"&&S&&S.length>0){let Q=S[0].geometry.location;if(ce>=0){let c=[...m];c[ce]={...c[ce],latitude:Q.lat(),longitude:Q.lng()},e({markers:c}),q&&ve(c,q)}else if(d.setCenter(Q),m&&m.length>0){let c=[...m];c[0]={...c[0],address:R,latitude:Q.lat(),longitude:Q.lng()},e({markers:c}),q&&ve(c,q)}}else K(Xe("Could not find address. Please try a different one or use the map to position your marker.","digiblocks"))}))},be=()=>{let R=[...m||[]],d=`marker-${Date.now()}`,ce=q?q.getCenter():{lat:40.7128,lng:-74.006};if(R.push({id:d,address:"",latitude:typeof ce.lat=="function"?ce.lat():ce.lat,longitude:typeof ce.lng=="function"?ce.lng():ce.lng,title:""}),e({markers:R}),R.length===1&&q&&digiBlocksData.googleMapsMapId){let S=q.getCenter(),g=q.getZoom(),Q={center:S,zoom:g,mapTypeId:q.getMapTypeId(),zoomControl:I,scrollwheel:C,fullscreenControl:k,streetViewControl:B,mapTypeControl:O,mapId:digiBlocksData.googleMapsMapId};A.length>0&&(A.forEach(ae=>ae.map=null),re([]));let c=new google.maps.Map(se.current,Q);J(c),setTimeout(()=>{ve(R,c)},100)}else q&&ve(R,q)},H=(R,d,ce)=>{let S=[...m];S[R]={...S[R],[d]:ce},e({markers:S}),d==="address"&&ce&&Ce.current&&q&&He(ce,q)},xe=R=>{let d=[...m];if(d.splice(R,1),e({markers:d}),d.length===0&&q&&(q.mapId=null,M&&M!=="default"))if(M==="custom"&&N)try{let ce=JSON.parse(N);q.setOptions({styles:ce})}catch(ce){console.error("Invalid map style JSON:",ce)}else Ee[M]&&q.setOptions({styles:Ee[M]})},x=(R,d,ce)=>{if(R)if(d&&d!=="default")if(d==="custom"&&ce)try{let S=JSON.parse(ce);R.setOptions({styles:S})}catch(S){console.error("Invalid map style JSON:",S)}else Ee[d]&&R.setOptions({styles:Ee[d]});else R.setOptions({styles:[]})},ve=async(R,d)=>{if(!(!R||R.length===0)){A.length>0&&(A.forEach(ce=>ce.map=null),re([]));try{google.maps.marker||await google.maps.importLibrary("marker");let ce=R.map(S=>{if(!S.latitude||!S.longitude)return null;let g={lat:S.latitude,lng:S.longitude},Q=S.title||"",c=S.description||"",ae=new google.maps.marker.AdvancedMarkerElement({map:d,position:g,title:Q});if(c){let y=document.createElement("div");if(y.className="digiblocks-map-info-content",y.style.cssText="min-width: 200px; max-width: 300px; padding: 10px; background-color: white; border-radius: 8px; box-shadow: 0 2px 7px 1px rgba(0,0,0,0.3);",Q){let a=document.createElement("div");a.className="digiblocks-map-info-title",a.style.cssText="font-weight: bold; margin-bottom: 5px; font-size: 16px;",a.textContent=Q,y.appendChild(a)}let u=document.createElement("div");u.className="digiblocks-map-info-description",u.style.cssText="font-size: 14px;",u.innerHTML=c,y.appendChild(u);let Ne=new google.maps.InfoWindow({content:y});google.maps.event.addListener(ae,"click",function(){Ne.open({anchor:ae,map:d})}),R.length===1&&Ne.open({anchor:ae,map:d})}return ae}).filter(Boolean);re(ce)}catch(ce){console.error("Error creating advanced markers:",ce)}}},U=as(null);Ti(()=>{if($&&$!=="none"){let R=setTimeout(()=>{Ac(o,$,fl,U)},100);return()=>clearTimeout(R)}},[$]);let me=()=>{Ac(o,$,fl,U)},Te=[{label:Xe("None","digiblocks"),value:"none"},{label:Xe("Solid","digiblocks"),value:"solid"},{label:Xe("Dotted","digiblocks"),value:"dotted"},{label:Xe("Dashed","digiblocks"),value:"dashed"},{label:Xe("Double","digiblocks"),value:"double"},{label:Xe("Groove","digiblocks"),value:"groove"},{label:Xe("Ridge","digiblocks"),value:"ridge"},{label:Xe("Inset","digiblocks"),value:"inset"},{label:Xe("Outset","digiblocks"),value:"outset"}],qe=[{label:Xe("Roadmap","digiblocks"),value:"roadmap"},{label:Xe("Satellite","digiblocks"),value:"satellite"},{label:Xe("Hybrid","digiblocks"),value:"hybrid"},{label:Xe("Terrain","digiblocks"),value:"terrain"}],Ve=[{label:Xe("Default","digiblocks"),value:"default"},{label:Xe("Silver","digiblocks"),value:"silver"},{label:Xe("Retro","digiblocks"),value:"retro"},{label:Xe("Dark","digiblocks"),value:"dark"},{label:Xe("Night","digiblocks"),value:"night"},{label:Xe("Aubergine","digiblocks"),value:"aubergine"},{label:Xe("Custom","digiblocks"),value:"custom"}],Ee={default:[],silver:[{elementType:"geometry",stylers:[{color:"#f5f5f5"}]},{elementType:"labels.icon",stylers:[{visibility:"off"}]},{elementType:"labels.text.fill",stylers:[{color:"#616161"}]},{elementType:"labels.text.stroke",stylers:[{color:"#f5f5f5"}]},{featureType:"administrative.land_parcel",elementType:"labels.text.fill",stylers:[{color:"#bdbdbd"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#eeeeee"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#e5e5e5"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#ffffff"}]},{featureType:"road.arterial",elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#dadada"}]},{featureType:"road.highway",elementType:"labels.text.fill",stylers:[{color:"#616161"}]},{featureType:"road.local",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]},{featureType:"transit.line",elementType:"geometry",stylers:[{color:"#e5e5e5"}]},{featureType:"transit.station",elementType:"geometry",stylers:[{color:"#eeeeee"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#c9c9c9"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]}],retro:[{elementType:"geometry",stylers:[{color:"#ebe3cd"}]},{elementType:"labels.text.fill",stylers:[{color:"#523735"}]},{elementType:"labels.text.stroke",stylers:[{color:"#f5f1e6"}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#c9b2a6"}]},{featureType:"administrative.land_parcel",elementType:"geometry.stroke",stylers:[{color:"#dcd2be"}]},{featureType:"administrative.land_parcel",elementType:"labels.text.fill",stylers:[{color:"#ae9e90"}]},{featureType:"landscape.natural",elementType:"geometry",stylers:[{color:"#dfd2ae"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#dfd2ae"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#93817c"}]},{featureType:"poi.park",elementType:"geometry.fill",stylers:[{color:"#a5b076"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#447530"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#f5f1e6"}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#fdfcf8"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#f8c967"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#e9bc62"}]},{featureType:"road.highway.controlled_access",elementType:"geometry",stylers:[{color:"#e98d58"}]},{featureType:"road.highway.controlled_access",elementType:"geometry.stroke",stylers:[{color:"#db8555"}]},{featureType:"road.local",elementType:"labels.text.fill",stylers:[{color:"#806b63"}]},{featureType:"transit.line",elementType:"geometry",stylers:[{color:"#dfd2ae"}]},{featureType:"transit.line",elementType:"labels.text.fill",stylers:[{color:"#8f7d77"}]},{featureType:"transit.line",elementType:"labels.text.stroke",stylers:[{color:"#ebe3cd"}]},{featureType:"transit.station",elementType:"geometry",stylers:[{color:"#dfd2ae"}]},{featureType:"water",elementType:"geometry.fill",stylers:[{color:"#b9d3c2"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#92998d"}]}],dark:[{elementType:"geometry",stylers:[{color:"#212121"}]},{elementType:"labels.icon",stylers:[{visibility:"off"}]},{elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{elementType:"labels.text.stroke",stylers:[{color:"#212121"}]},{featureType:"administrative",elementType:"geometry",stylers:[{color:"#757575"}]},{featureType:"administrative.country",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]},{featureType:"administrative.land_parcel",stylers:[{visibility:"off"}]},{featureType:"administrative.locality",elementType:"labels.text.fill",stylers:[{color:"#bdbdbd"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#181818"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#616161"}]},{featureType:"poi.park",elementType:"labels.text.stroke",stylers:[{color:"#1b1b1b"}]},{featureType:"road",elementType:"geometry.fill",stylers:[{color:"#2c2c2c"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#8a8a8a"}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#373737"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#3c3c3c"}]},{featureType:"road.highway.controlled_access",elementType:"geometry",stylers:[{color:"#4e4e4e"}]},{featureType:"road.local",elementType:"labels.text.fill",stylers:[{color:"#616161"}]},{featureType:"transit",elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#000000"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#3d3d3d"}]}],night:[{elementType:"geometry",stylers:[{color:"#242f3e"}]},{elementType:"labels.text.fill",stylers:[{color:"#746855"}]},{elementType:"labels.text.stroke",stylers:[{color:"#242f3e"}]},{featureType:"administrative.locality",elementType:"labels.text.fill",stylers:[{color:"#d59563"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#d59563"}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#263c3f"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#6b9a76"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#38414e"}]},{featureType:"road",elementType:"geometry.stroke",stylers:[{color:"#212a37"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#9ca5b3"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#746855"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#1f2835"}]},{featureType:"road.highway",elementType:"labels.text.fill",stylers:[{color:"#f3d19c"}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#2f3948"}]},{featureType:"transit.station",elementType:"labels.text.fill",stylers:[{color:"#d59563"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#17263c"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#515c6d"}]},{featureType:"water",elementType:"labels.text.stroke",stylers:[{color:"#17263c"}]}],aubergine:[{elementType:"geometry",stylers:[{color:"#1d2c4d"}]},{elementType:"labels.text.fill",stylers:[{color:"#8ec3b9"}]},{elementType:"labels.text.stroke",stylers:[{color:"#1a3646"}]},{featureType:"administrative.country",elementType:"geometry.stroke",stylers:[{color:"#4b6878"}]},{featureType:"administrative.land_parcel",elementType:"labels.text.fill",stylers:[{color:"#64779e"}]},{featureType:"administrative.province",elementType:"geometry.stroke",stylers:[{color:"#4b6878"}]},{featureType:"landscape.man_made",elementType:"geometry.stroke",stylers:[{color:"#334e87"}]},{featureType:"landscape.natural",elementType:"geometry",stylers:[{color:"#023e58"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#283d6a"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#6f9ba5"}]},{featureType:"poi",elementType:"labels.text.stroke",stylers:[{color:"#1d2c4d"}]},{featureType:"poi.park",elementType:"geometry.fill",stylers:[{color:"#023e58"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#3C7680"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#304a7d"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#98a5be"}]},{featureType:"road",elementType:"labels.text.stroke",stylers:[{color:"#1d2c4d"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#2c6675"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#255763"}]},{featureType:"road.highway",elementType:"labels.text.fill",stylers:[{color:"#b0d5ce"}]},{featureType:"road.highway",elementType:"labels.text.stroke",stylers:[{color:"#023e58"}]},{featureType:"transit",elementType:"labels.text.fill",stylers:[{color:"#98a5be"}]},{featureType:"transit",elementType:"labels.text.stroke",stylers:[{color:"#1d2c4d"}]},{featureType:"transit.line",elementType:"geometry.fill",stylers:[{color:"#283d6a"}]},{featureType:"transit.station",elementType:"geometry",stylers:[{color:"#3a4762"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#0e1626"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#4e6d70"}]}]},Oe=[{label:Xe("None","digiblocks"),value:"none"},...Object.keys(fl).map(R=>({label:R.replace(/-/g," ").replace(/\b\w/g,d=>d.toUpperCase()),value:R}))],j=[{name:"options",title:Xe("Options","digiblocks"),icon:ns.optionsIcon},{name:"style",title:Xe("Style","digiblocks"),icon:ns.styleIcon},{name:"advanced",title:Xe("Advanced","digiblocks"),icon:ns.advancedIcon}],ye=()=>{let R=window.digi.responsiveState.activeDevice,d=l&&l[R]?l[R]:R==="desktop"?400:R==="tablet"?350:300,ce="";T&&T!=="none"&&(ce=`
                border-style: ${T};
                border-color: ${ee||"#e0e0e0"};
				${Xc(V,"border-width",R)}
				${Xc(Z,"border-radius",R)}
            `);let S="";E&&E.enable&&(S=`box-shadow: ${E.position==="inset"?"inset ":""}${E.horizontal}px ${E.vertical}px ${E.blur}px ${E.spread}px ${E.color};`);let g="";f&&f.enable&&(g=`box-shadow: ${f.position==="inset"?"inset ":""}${f.horizontal}px ${f.vertical}px ${f.blur}px ${f.spread}px ${f.color};`);let Q="";return $&&$!=="none"&&fl[$]&&(Q=fl[$].keyframes),`
            /* Google Map Block - ${o} */
            .${o} {
                height: ${d}px;
                width: 100%;
                overflow: hidden;
                ${ce}
                ${S}
				transition: all .3s ease;
            }

            .${o}:hover {
                ${g}
            }
            
            /* Animation keyframes */
            ${Q}
            
            /* Responsive styles */
            @media (max-width: 991px) {
                .${o} {
                    height: ${l&&l.tablet?l.tablet:350}px;
                }
            }
            
            @media (max-width: 767px) {
                .${o} {
                    height: ${l&&l.mobile?l.mobile:300}px;
                }
            }

			/* Visibility Controls */
			${n.desktop?`
				@media (min-width: 992px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${n.tablet?`
				@media (min-width: 768px) and (max-width: 991px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${n.mobile?`
				@media (max-width: 767px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}
        `},Je=()=>{let R=Array.isArray(m)?m.length:0,d=!!digiBlocksData.googleMapsMapId;return R>0&&!d?wp.element.createElement("div",{className:"components-notice is-warning",style:{margin:"0 0 16px 0"}},wp.element.createElement("div",{className:"components-notice__content"},wp.element.createElement("p",null,Xe("A Map ID is required to use markers with the Google Maps block.","digiblocks")),wp.element.createElement("p",null,Xe("Please configure a Map ID in the DigiBlocks settings before adding markers.","digiblocks")),wp.element.createElement(Bi,{isPrimary:!0,href:`${window.ajaxurl?window.ajaxurl.replace("admin-ajax.php",""):"/wp-admin/"}admin.php?page=digiblocks-settings`,target:"_blank",style:{marginTop:"10px"}},Xe("Go to Settings","digiblocks")))):wp.element.createElement(wp.element.Fragment,null,Array.isArray(m)&&m.length>0?wp.element.createElement("div",null,m.map((ce,S)=>wp.element.createElement("div",{key:ce.id||`marker-${S}`,className:"digiblocks-google-map-marker",style:{marginBottom:"16px",padding:"16px",backgroundColor:"#f0f0f0",borderRadius:"4px"}},wp.element.createElement("h3",{style:{margin:"0 0 10px 0"}},Xe("Marker","digiblocks")," #",S+1),wp.element.createElement(ls,{label:Xe("Title","digiblocks"),value:ce.title||"",onChange:g=>H(S,"title",g),placeholder:Xe("Enter marker title","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Zc,{label:Xe("Description","digiblocks"),value:ce.description||"",onChange:g=>H(S,"description",g),placeholder:Xe("Enter marker description (will appear above marker)","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(ls,{label:Xe("Address","digiblocks"),value:ce.address||"",onChange:g=>{let Q=[...m];Q[S]={...Q[S],address:g},e({markers:Q})},onBlur:()=>{m[S]?.address&&Ce.current&&q&&He(m[S].address,q,S)},placeholder:Xe("Enter marker address","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement("div",{style:{marginTop:"10px",display:"flex",justifyContent:"flex-end"}},wp.element.createElement(Bi,{isDestructive:!0,onClick:()=>xe(S)},Xe("Remove Marker","digiblocks"))))),wp.element.createElement(Bi,{isPrimary:!0,onClick:be,style:{marginTop:"10px",width:"100%",justifyContent:"center"}},Xe("Add Marker","digiblocks"))):wp.element.createElement("div",null,wp.element.createElement("p",null,Xe("No markers added yet. Add your first marker!","digiblocks")),wp.element.createElement(Bi,{isPrimary:!0,onClick:be,style:{width:"100%",justifyContent:"center"}},Xe("Add Marker","digiblocks"))))},G=()=>{switch(Y){case"options":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(vt,{tab:"options",name:"map-settings",title:Xe("Map Settings","digiblocks"),initialOpen:!0},wp.element.createElement(ls,{label:Xe("Address","digiblocks"),value:s||"",onChange:R=>{e({address:R}),R&&Ce.current&&q&&He(R,q)},placeholder:Xe("Enter location address","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),Se&&wp.element.createElement("div",{className:"components-notice is-error",style:{margin:"0 0 16px 0"}},wp.element.createElement("div",{className:"components-notice__content"},Se)),wp.element.createElement(_a,{label:Xe("Map Type","digiblocks"),value:v,options:qe,onChange:R=>e({mapType:R}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),(!m||m.length===0)&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(_a,{label:Xe("Map Style","digiblocks"),value:M,options:Ve,onChange:R=>e({mapStyle:R}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),M==="custom"&&wp.element.createElement(Zc,{label:Xe("Custom Map Style JSON","digiblocks"),help:Xe("Paste a valid Google Maps style JSON. You can create styles with the Google Maps Styling Wizard.","digiblocks"),value:N||"",onChange:R=>e({customMapStyle:R}),rows:6,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),m&&m.length>0&&wp.element.createElement("div",{className:"components-notice is-info",style:{margin:"0 0 16px 0"}},wp.element.createElement("div",{className:"components-notice__content"},Xe("Map Style options are not available when markers are present, as markers require a Map ID which overrides custom styling.","digiblocks"))),wp.element.createElement(Kc,{label:Xe("Zoom Level","digiblocks"),value:_,onChange:R=>e({zoom:R}),min:1,max:20,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(vt,{tab:"options",name:"marker-settings",title:Xe("Markers","digiblocks"),initialOpen:!1},Je()),wp.element.createElement(vt,{tab:"options",name:"map-controls",title:Xe("Map Controls","digiblocks"),initialOpen:!1},wp.element.createElement(Nu,{id:`${o}-map-controls`,__nextHasNoMarginBottom:!0},wp.element.createElement(Rt,{label:Xe("Enable Zoom Control","digiblocks"),checked:I!==!1,onChange:R=>e({enableZoom:R}),__nextHasNoMarginBottom:!0}),wp.element.createElement(Rt,{label:Xe("Enable Mousewheel Zoom","digiblocks"),checked:C!==!1,onChange:R=>e({enableScroll:R}),__nextHasNoMarginBottom:!0}),wp.element.createElement(Rt,{label:Xe("Enable Fullscreen Control","digiblocks"),checked:k!==!1,onChange:R=>e({enableFullscreenControl:R}),__nextHasNoMarginBottom:!0}),wp.element.createElement(Rt,{label:Xe("Enable Street View Control","digiblocks"),checked:B!==!1,onChange:R=>e({enableStreetViewControl:R}),__nextHasNoMarginBottom:!0}),wp.element.createElement(Rt,{label:Xe("Enable Map Type Control","digiblocks"),checked:O!==!1,onChange:R=>e({enableMapTypeControl:R}),__nextHasNoMarginBottom:!0}))));case"style":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(vt,{tab:"style",name:"map-dimensions",title:Xe("Map Size","digiblocks"),initialOpen:!0},wp.element.createElement(ss,{label:Xe("Map Height","digiblocks")},wp.element.createElement(Kc,{value:l&&l[b]?l[b]:b==="desktop"?400:b==="tablet"?350:300,onChange:R=>{e({mapHeight:{...l,[b]:R}})},min:150,max:800,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}))),wp.element.createElement(vt,{tab:"style",name:"map-border",title:Xe("Border","digiblocks"),initialOpen:!1},wp.element.createElement(_a,{label:Xe("Border Style","digiblocks"),value:T||"none",options:Te,onChange:R=>{R!=="none"&&(T==="none"||!T)&&((!V||Object.keys(V).length===0)&&e({borderWidth:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:1,right:1,bottom:1,left:1,unit:"px"},mobile:{top:1,right:1,bottom:1,left:1,unit:"px"}}}),(!Z||Object.keys(Z).length===0)&&e({borderRadius:{desktop:{top:0,right:0,bottom:0,left:0,unit:"px"},tablet:{top:0,right:0,bottom:0,left:0,unit:"px"},mobile:{top:0,right:0,bottom:0,left:0,unit:"px"}}})),e({borderStyle:R})},__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),T&&T!=="none"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(_u,{title:Xe("Border Color","digiblocks"),enableAlpha:!0,colorSettings:[{value:ee,onChange:R=>e({borderColor:R}),label:Xe("Border Color","digiblocks")}]}),wp.element.createElement(ss,{label:Xe("Border Width","digiblocks")},wp.element.createElement(ed,{values:V&&V[b]?V[b]:{top:1,right:1,bottom:1,left:1,unit:"px"},onChange:R=>e({borderWidth:{...V,[b]:R}})})),wp.element.createElement(ss,{label:Xe("Border Radius","digiblocks")},wp.element.createElement(ed,{values:Z&&Z[b]?Z[b]:{top:0,right:0,bottom:0,left:0,unit:"px"},onChange:R=>e({borderRadius:{...Z,[b]:R}}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]})))),wp.element.createElement(vt,{tab:"style",name:"box-shadow",title:Xe("Box Shadow","digiblocks"),initialOpen:!1},wp.element.createElement(Mu,{normalValue:E,hoverValue:f,onNormalChange:R=>e({boxShadow:R}),onHoverChange:R=>e({boxShadowHover:R})})));case"advanced":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(vt,{tab:"advanced",name:"animation",title:Xe("Animation","digiblocks"),initialOpen:!0},wp.element.createElement(_a,{label:Xe("Animation Effect","digiblocks"),value:$,options:Oe,onChange:R=>e({animation:R}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),$&&$!=="none"&&wp.element.createElement("div",{style:{marginTop:"10px"}},wp.element.createElement(Bi,{variant:"secondary",isSecondary:!0,onClick:me,style:{width:"100%"}},Xe("Preview Animation","digiblocks")))),wp.element.createElement(vt,{tab:"advanced",name:"visibility",title:Xe("Visibility","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control__help",style:{padding:"12px",backgroundColor:"#f0f6fc",border:"1px solid #c3ddfd",borderRadius:"4px",marginBottom:"16px"}},wp.element.createElement("strong",null,Xe("Editor Note:","digiblocks")),wp.element.createElement("br",null),Xe("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.","digiblocks")),wp.element.createElement(Rt,{label:Xe("Hide on Desktop","digiblocks"),checked:n.desktop,onChange:R=>e({visibility:{...n,desktop:R}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(Rt,{label:Xe("Hide on Tablet","digiblocks"),checked:n.tablet,onChange:R=>e({visibility:{...n,tablet:R}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(Rt,{label:Xe("Hide on Mobile","digiblocks"),checked:n.mobile,onChange:R=>e({visibility:{...n,mobile:R}}),__nextHasNoMarginBottom:!0})),wp.element.createElement(vt,{tab:"advanced",name:"additional",title:Xe("Additional","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control html-anchor-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"html-anchor"},Xe("HTML anchor","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"html-anchor",value:P||"",onChange:R=>e({anchor:R.target.value}),"aria-describedby":"html-anchor-help",autoCapitalize:"none",autoComplete:"off"})),wp.element.createElement("p",{id:"html-anchor-help",className:"components-base-control__help"},Xe(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`,"digiblocks")," ",wp.element.createElement("a",{className:"components-external-link",href:"https://wordpress.org/documentation/article/page-jumps/",target:"_blank",rel:"external noreferrer noopener"},wp.element.createElement("span",{className:"components-external-link__contents"},Xe("Learn more about anchors","digiblocks")),wp.element.createElement("span",{className:"components-external-link__icon","aria-label":"(opens in a new tab)"},"\u2197")))),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"additional-css-classes"},Xe("Additional CSS class(es)","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"additional-css-classes",value:te||"",onChange:R=>e({customClasses:R.target.value}),"aria-describedby":"additional-css-classes-help",autoComplete:"off"})),wp.element.createElement("p",{id:"additional-css-classes-help",className:"components-base-control__help"},Xe("Separate multiple classes with spaces.","digiblocks")))));default:return null}},pe=Su({className:`digiblocks-google-map ${o} ${$!=="none"?`animate-${$}`:""} ${te||""}`,id:P||null});return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement($u,null,wp.element.createElement(zu,{tabs:j,activeTab:Y,onSelect:de},G())),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:ye()}}),wp.element.createElement("div",{...pe},digiBlocksData.googleMapsApiKey?le?wp.element.createElement("div",{className:"digiblocks-google-map-loading",style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%"}},wp.element.createElement(Tu,null),wp.element.createElement("span",{style:{marginLeft:"10px"}},Xe("Loading map...","digiblocks"))):wp.element.createElement("div",{ref:se,className:"digiblocks-google-map-container",style:{width:"100%",height:"100%"}}):wp.element.createElement(Bu,{icon:"location-alt",label:Xe("Google Map","digiblocks"),instructions:Xe("You need to add your Google Maps API key in the DigiBlocks settings to use this block.","digiblocks")},wp.element.createElement(Bi,{isPrimary:!0,href:`${window.ajaxurl?window.ajaxurl.replace("admin-ajax.php",""):"/wp-admin/"}admin.php?page=digiblocks-settings`,target:"_blank"},Xe("Go to Settings","digiblocks")))))},od=Du;var{useBlockProps:Pu}=window.wp.blockEditor,Ru=({attributes:ie})=>{let{id:e,anchor:X,customClasses:o,mapHeight:P,zoom:n,mapType:te,mapStyle:l,customMapStyle:_,mapId:v,markers:M,address:N,animation:m,enableZoom:s,enableScroll:$,enableFullscreenControl:I,enableStreetViewControl:C,enableMapTypeControl:k}=ie,B=["digiblocks-google-map",e,m!=="none"?`animate-${m}`:"",o||""].filter(Boolean).join(" "),O=Pu.save({className:B,id:X||null,"data-map-zoom":n||10,"data-map-type":te||"roadmap","data-map-style":l||"default","data-custom-map-style":_||"","data-map-id":v||"","data-enable-zoom":s!==!1?"true":"false","data-enable-scroll":$!==!1?"true":"false","data-enable-fullscreen":I!==!1?"true":"false","data-enable-streetview":C!==!1?"true":"false","data-enable-maptype":k!==!1?"true":"false"});return wp.element.createElement("div",{...O},wp.element.createElement("div",{className:"digiblocks-google-map-container"}),M&&M.length>0&&wp.element.createElement("div",{className:"digiblocks-google-map-markers",style:{display:"none"}},M.map(T=>wp.element.createElement("div",{key:T.id,className:"digiblocks-google-map-marker","data-lat":T.latitude,"data-lng":T.longitude,"data-title":T.title||"","data-description":T.description||"","data-address":T.address||""}))),N&&wp.element.createElement("div",{className:"digiblocks-google-map-address",style:{display:"none"},"data-address":N}))},td=Ru;var{__:Ba}=window.wp.i18n,{registerBlockType:Iu}=window.wp.blocks,{getBlockActiveStatus:Lu}=window.wp.digiBlocks;Iu("digiblocks/google-map",{apiVersion:2,title:digiBlocksData.blocks["google-map"].title,category:"digiblocks",icon:{src:()=>{let{viewbox:ie,path:e}=digiBlocksData.blocks["google-map"].icon;return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${ie}`,className:"digiblocks-editor-icons"},wp.element.createElement("path",{d:e}))}},description:digiBlocksData.blocks["google-map"].description,keywords:[Ba("map","digiblocks"),Ba("google","digiblocks"),Ba("location","digiblocks"),Ba("marker","digiblocks")],supports:{inserter:!!Lu("google-map"),html:!1,className:!1,customClassName:!1,anchor:!1},attributes:{id:{type:"string",default:""},anchor:{type:"string",default:""},visibility:{type:"object",default:{desktop:!1,tablet:!1,mobile:!1}},customClasses:{type:"string",default:""},address:{type:"string",default:""},mapHeight:{type:"object",default:{desktop:400,tablet:350,mobile:300}},zoom:{type:"number",default:10},mapType:{type:"string",default:"roadmap"},mapStyle:{type:"string",default:"default"},customMapStyle:{type:"string",default:""},mapId:{type:"string",default:""},markers:{type:"array",default:[]},animation:{type:"string",default:"none"},enableZoom:{type:"boolean",default:!0},enableScroll:{type:"boolean",default:!0},enableFullscreenControl:{type:"boolean",default:!0},enableStreetViewControl:{type:"boolean",default:!0},enableMapTypeControl:{type:"boolean",default:!0},borderStyle:{type:"string",default:"none"},borderWidth:{type:"object",default:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderRadius:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderColor:{type:"string",default:"#e0e0e0"},boxShadow:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},boxShadowHover:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}}},example:{attributes:{address:"New York, NY",mapHeight:{desktop:300},zoom:12,mapType:"roadmap"}},edit:od,save:td});var{__:Ye}=window.wp.i18n,{useBlockProps:Ou,RichText:Uu,InspectorControls:ju,PanelColorSettings:kl,LinkControl:Vu,BlockControls:u0,AlignmentToolbar:m0}=window.wp.blockEditor,{SelectControl:id,RangeControl:Ni,ToggleControl:vl,Button:Fu,__experimentalToggleGroupControl:ld,__experimentalToggleGroupControlOption:xl,TabPanel:Eu,BaseControl:Wu}=window.wp.components,{useState:rs,useEffect:ad,useRef:qu}=window.wp.element,{useBlockId:Gu,getDimensionCSS:Qo,animations:yl,animationPreview:nd}=digi.utils,{tabIcons:cs}=digi.icons,{ResponsiveControl:Hi,ResponsiveButtonGroup:Qu,DimensionControl:ds,TypographyControl:Ju,CustomTabPanel:Yu,TabPanelBody:ct}=digi.components,Zu=({attributes:ie,setAttributes:e,clientId:X})=>{let{id:o,anchor:P,visibility:n,customClasses:te,content:l,headingTag:_,textColor:v,textHoverColor:M,backgroundColor:N,backgroundHoverColor:m,typography:s,align:$,padding:I,margin:C,animation:k,highlightText:B,highlightColor:O,highlightType:T,displaySeparator:V,separatorColor:Z,separatorSecondaryColor:ee,separatorWidth:E,separatorHeight:f,separatorBorderRadius:b,separatorPosition:D,separatorStyle:le,separatorSpacing:We,linkEnabled:Se,linkUrl:K,linkOpenInNewTab:L,linkRel:oe,shadowEnabled:q,textShadow:J}=ie;Gu(o,X,e);let[A,re]=rs(window.digi.responsiveState.activeDevice),[se,Ce]=rs(!1);ad(()=>window.digi.responsiveState.subscribe(ye=>{re(ye)}),[]);let[Y,de]=rs(()=>{if(window.digi.uiState){let j=window.digi.uiState.getActiveTab(X);if(j)return j}return"options"}),He=qu(null);ad(()=>{if(k&&k!=="none"){let j=setTimeout(()=>{nd(o,k,yl,He)},100);return()=>clearTimeout(j)}},[k]);let be=()=>{nd(o,k,yl,He)},H=[{label:Ye("None","digiblocks"),value:"none"},...Object.keys(yl).map(j=>({label:j.replace(/-/g," ").replace(/\b\w/g,ye=>ye.toUpperCase()),value:j}))],xe=[{label:Ye("H1","digiblocks"),value:"h1"},{label:Ye("H2","digiblocks"),value:"h2"},{label:Ye("H3","digiblocks"),value:"h3"},{label:Ye("H4","digiblocks"),value:"h4"},{label:Ye("H5","digiblocks"),value:"h5"},{label:Ye("H6","digiblocks"),value:"h6"}],x=[{label:Ye("Background","digiblocks"),value:"background"},{label:Ye("Text Color","digiblocks"),value:"color"},{label:Ye("Underline","digiblocks"),value:"underline"}],ve=[{name:"options",title:Ye("Options","digiblocks"),icon:cs.optionsIcon},{name:"style",title:Ye("Style","digiblocks"),icon:cs.styleIcon},{name:"advanced",title:Ye("Advanced","digiblocks"),icon:cs.advancedIcon}],U=[{name:"normal",title:Ye("Normal","digiblocks"),className:"digiblocks-tab-1 normal"},{name:"hover",title:Ye("Hover","digiblocks"),className:"digiblocks-tab-2 hover"}],me=()=>{let j=window.digi.responsiveState.activeDevice,ye="";s&&(s.fontFamily&&(ye+=`font-family: ${s.fontFamily};`),s.fontSize&&s.fontSize[j]&&(ye+=`font-size: ${s.fontSize[j]}${s.fontSizeUnit||"px"};`),s.fontWeight&&(ye+=`font-weight: ${s.fontWeight};`),s.fontStyle&&(ye+=`font-style: ${s.fontStyle};`),s.textTransform&&(ye+=`text-transform: ${s.textTransform};`),s.textDecoration&&(ye+=`text-decoration: ${s.textDecoration};`),s.lineHeight&&s.lineHeight[j]&&(ye+=`line-height: ${s.lineHeight[j]}${s.lineHeightUnit||"em"};`),s.letterSpacing&&s.letterSpacing[j]&&(ye+=`letter-spacing: ${s.letterSpacing[j]}${s.letterSpacingUnit||"px"};`));let Je="";q&&J&&(Je=`text-shadow: ${J.horizontal}px ${J.vertical}px ${J.blur}px ${J.color};`);let G=`${Qo(I,"padding",j)}`,pe=`${Qo(C,"margin",j)}`,R="";k&&k!=="none"&&yl[k]&&(R=yl[k].keyframes);let d="";if(V&&Z){let g=E[j]||50,Q=f[j]||3,c=We[j]||10,ae=D==="top"?"top: 0;":"bottom: 0;",y=$==="center"?"left: 50%; transform: translateX(-50%);":$==="right"?"right: 0;":"left: 0;";switch(le){case"line-solid":d=`
                        .${o}::before {
                            content: '';
                            position: absolute;
                            ${ae}
                            ${y}
                            width: ${g}px;
                            height: ${Q}px;
                            background-color: ${Z};
							${Qo(b,"border-radius",j)}
                            ${D==="top"?`margin-top: ${c}px;`:`margin-bottom: ${c}px;`}
                        }
                    `;break;case"line-gradient":d=`
                        .${o}::before {
                            content: '';
                            position: absolute;
                            ${ae}
                            ${y}
                            width: ${g}px;
                            height: ${Q}px;
                            background: linear-gradient(to right, ${Z}, ${ee||"#ffffff"}, ${Z});
							${Qo(b,"border-radius",j)}
                            ${D==="top"?`margin-top: ${c}px;`:`margin-bottom: ${c}px;`}
                        }
                    `;break;case"line-double":d=`
                        .${o}::before {
                            content: '';
                            position: absolute;
                            ${ae}
                            ${y}
                            width: ${g}px;
                            height: ${Q}px;
                            background-color: ${Z};
							${Qo(b,"border-radius",j)}
                            ${D==="top"?`margin-top: ${c}px;`:`margin-bottom: ${c}px;`}
                        }
                        
                        .${o}::after {
                            content: '';
                            position: absolute;
                            ${ae}
                            ${y}
                            width: ${g}px;
                            height: ${Q}px;
                            background-color: ${ee||Z};
							${Qo(b,"border-radius",j)}
                            ${D==="top"?`margin-top: ${c+Q+3}px;`:`margin-bottom: ${c+Q+3}px;`}
                        }
                    `;break;case"line-dashed":d=`
                        .${o}::before {
                            content: '';
                            position: absolute;
                            ${ae}
                            ${y}
                            width: ${g}px;
                            height: ${Q}px;
                            background-image: repeating-linear-gradient(
                                to right, 
                                ${Z}, 
                                ${Z} 8px, 
                                transparent 8px, 
                                transparent 12px
                            );
							${Qo(b,"border-radius",j)}
                            ${D==="top"?`margin-top: ${c}px;`:`margin-bottom: ${c}px;`}
                        }
                    `;break;case"line-dotted":d=`
                        .${o}::before {
                            content: '';
                            position: absolute;
                            ${ae}
                            ${y}
                            width: ${g}px;
                            height: ${Q}px;
                            background-image: repeating-linear-gradient(
                                to right, 
                                ${Z}, 
                                ${Z} 3px, 
                                transparent 3px, 
                                transparent 6px
                            );
							${Qo(b,"border-radius",j)}
                            ${D==="top"?`margin-top: ${c}px;`:`margin-bottom: ${c}px;`}
                        }
                    `;break;case"wave":d=`
                        .${o}::before {
                            content: '';
                            position: absolute;
                            ${ae}
                            ${y}
                            width: ${g}px;
                            height: ${Q*4}px;
                            background-image: repeating-linear-gradient(
                                45deg, 
                                ${Z}, 
                                ${Z} 5px, 
                                transparent 5px, 
                                transparent 15px
                            );
                            mask-image: linear-gradient(
                                to bottom, 
                                transparent 35%, 
                                black 35%, 
                                black 65%, 
                                transparent 65%
                            );
                            -webkit-mask-image: linear-gradient(
                                to bottom, 
                                transparent 35%, 
                                black 35%, 
                                black 65%, 
                                transparent 65%
                            );
                            ${D==="top"?`margin-top: ${c}px;`:`margin-bottom: ${c}px;`}
                        }
                    `;break;case"dots":d=`
                        .${o}::before {
                            content: '';
                            position: absolute;
                            ${ae}
                            ${y}
                            width: ${g}px;
                            height: ${Q*3}px;
                            background-image: radial-gradient(
                                circle, 
                                ${Z} 25%, 
                                transparent 25%
                            );
                            background-size: ${Q*3}px ${Q*3}px;
                            ${D==="top"?`margin-top: ${c}px;`:`margin-bottom: ${c}px;`}
                        }
                    `;break;case"glow":d=`
                        .${o}::before {
                            content: '';
                            position: absolute;
                            ${ae}
                            ${y}
                            width: ${g}px;
                            height: ${Q}px;
                            background-color: ${Z};
                            box-shadow: 0 0 ${Q*3}px ${Q}px ${Z};
							${Qo(b,"border-radius",j)}
                            ${D==="top"?`margin-top: ${c}px;`:`margin-bottom: ${c}px;`}
                        }
                    `;break;case"faded":d=`
                        .${o}::before {
                            content: '';
                            position: absolute;
                            ${ae}
                            ${y}
                            width: ${g}px;
                            height: ${Q}px;
                            background: linear-gradient(to right, transparent, ${Z}, transparent);
							${Qo(b,"border-radius",j)}
                            ${D==="top"?`margin-top: ${c}px;`:`margin-bottom: ${c}px;`}
                        }
                    `;break;default:d=`
                        .${o}::before {
                            content: '';
                            position: absolute;
                            ${ae}
                            ${y}
                            width: ${g}px;
                            height: ${Q}px;
                            background-color: ${Z};
							${Qo(b,"border-radius",j)}
                            ${D==="top"?`margin-top: ${c}px;`:`margin-bottom: ${c}px;`}
                        }
                    `}}let ce="";B&&B.trim()!==""&&(T==="background"?ce=`
                    .${o} .digiblocks-highlight {
                        background-color: ${O};
                        padding: 0 5px;
                        border-radius: 3px;
                    }
                `:T==="color"?ce=`
                    .${o} .digiblocks-highlight {
                        color: ${O};
                    }
                `:T==="underline"&&(ce=`
                    .${o} .digiblocks-highlight {
                        text-decoration: underline;
                        text-decoration-color: ${O};
                        text-decoration-thickness: 2px;
                        text-underline-offset: 2px;
                    }
                `));let S="";return Se&&(S=`
                .${o} {
                    cursor: pointer;
                    text-decoration: none;
                    transition: color 0.3s ease, background-color 0.3s ease;
                }
                
                .${o}:hover {
                    ${M?`color: ${M};`:""}
                    ${m?`background-color: ${m};`:""}
                }
            `),`
            /* Main heading styles */
            .${o} {
                display: flex;
                flex-direction: column;
                position: relative;
                text-align: ${$[j]};
                ${N?`background-color: ${N};`:""}
                ${G}
                ${pe}
                transition: color 0.3s ease, background-color 0.3s ease;
            }

            .${o} .digiblocks-heading-text {
                ${ye}
                ${Je}
                color: ${v||"inherit"};
                margin: 0;
            }
            
            /* Hover effects */
            .${o}:hover {
                ${m?`background-color: ${m};`:""}
            }

            .${o}:hover .digiblocks-heading-text {
                ${M?`color: ${M};`:""}
            }
            
            /* Animation keyframes */
            ${R}
            
            /* Separator styles */
            ${d}
            
            /* Highlight styles */
            ${ce}
            
            /* Link styles */
            ${S}

			/* Visibility Controls */
			${n.desktop?`
				@media (min-width: 992px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${n.tablet?`
				@media (min-width: 768px) and (max-width: 991px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${n.mobile?`
				@media (max-width: 767px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}
        `},Te=()=>{if(!B||B.trim()==="")return l;let j=Je=>Je.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");return l.split(new RegExp(`(${j(B)})`,"g")).map((Je,G)=>Je===B?`<span class="digiblocks-highlight">${Je}</span>`:Je).join("")},qe=({style:j,color:ye,secondaryColor:Je,isSelected:G,onClick:pe})=>{let R={container:{display:"inline-block",width:"60px",height:"40px",margin:"5px",padding:"5px",border:`1px solid ${G?"#007cba":"#ddd"}`,backgroundColor:G?"rgba(0,124,186,0.1)":"white",borderRadius:"4px",cursor:"pointer",position:"relative"},preview:{position:"absolute",bottom:"5px",left:"5px",right:"5px",height:"5px",display:"flex",justifyContent:"center",alignItems:"center"}},d=null;switch(j){case"line-solid":d=wp.element.createElement("div",{style:{width:"100%",height:"3px",backgroundColor:ye,borderRadius:"1px"}});break;case"line-gradient":d=wp.element.createElement("div",{style:{width:"100%",height:"3px",background:`linear-gradient(to right, ${ye}, ${Je||"#ffffff"}, ${ye})`,borderRadius:"1px"}});break;case"line-double":d=wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{style:{width:"100%",height:"2px",backgroundColor:ye,borderRadius:"1px",marginBottom:"2px"}}),wp.element.createElement("div",{style:{width:"100%",height:"2px",backgroundColor:Je||ye,borderRadius:"1px"}}));break;case"line-dashed":d=wp.element.createElement("div",{style:{width:"100%",height:"3px",backgroundImage:`repeating-linear-gradient(to right, ${ye}, ${ye} 6px, transparent 6px, transparent 10px)`,borderRadius:"1px"}});break;case"line-dotted":d=wp.element.createElement("div",{style:{width:"100%",height:"3px",backgroundImage:`repeating-linear-gradient(to right, ${ye}, ${ye} 2px, transparent 2px, transparent 4px)`,borderRadius:"1px"}});break;case"wave":d=wp.element.createElement("div",{style:{width:"100%",height:"3px",backgroundImage:`repeating-linear-gradient(45deg, ${ye}, ${ye} 2px, transparent 2px, transparent 6px)`,borderRadius:"1px"}});break;case"dots":d=wp.element.createElement("div",{style:{width:"100%",height:"5px",display:"flex",justifyContent:"space-between"}},[...Array(5)].map((ce,S)=>wp.element.createElement("div",{key:S,style:{width:"4px",height:"4px",borderRadius:"50%",backgroundColor:ye}})));break;case"glow":d=wp.element.createElement("div",{style:{width:"50%",height:"3px",backgroundColor:ye,boxShadow:`0 0 5px 1px ${ye}`,borderRadius:"1px"}});break;case"faded":d=wp.element.createElement("div",{style:{width:"100%",height:"3px",background:`linear-gradient(to right, transparent, ${ye}, transparent)`,borderRadius:"1px"}});break;default:d=wp.element.createElement("div",{style:{width:"100%",height:"3px",backgroundColor:ye,borderRadius:"1px"}})}return wp.element.createElement("div",{style:R.container,onClick:pe},wp.element.createElement("div",{style:{textAlign:"center",fontSize:"8px",marginBottom:"5px"}},j.replace("line-","").charAt(0).toUpperCase()+j.replace("line-","").slice(1)),wp.element.createElement("div",{style:R.preview},d))},Ve=()=>{let j=[{label:Ye("Solid Line","digiblocks"),value:"line-solid"},{label:Ye("Gradient Line","digiblocks"),value:"line-gradient"},{label:Ye("Double Line","digiblocks"),value:"line-double"},{label:Ye("Dashed Line","digiblocks"),value:"line-dashed"},{label:Ye("Dotted Line","digiblocks"),value:"line-dotted"},{label:Ye("Wave","digiblocks"),value:"wave"},{label:Ye("Dot Pattern","digiblocks"),value:"dots"},{label:Ye("Glow","digiblocks"),value:"glow"},{label:Ye("Faded Edges","digiblocks"),value:"faded"}];return wp.element.createElement("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px",justifyContent:"center",margin:"0 -5px",maxHeight:"200px",overflow:"auto",padding:"4px 0",border:"1px solid #e0e0e0",borderRadius:"4px",backgroundColor:"#f9f9f9"}},j.map(Je=>wp.element.createElement(qe,{key:Je.value,style:Je.value,color:Z,secondaryColor:ee,isSelected:le===Je.value,onClick:()=>e({separatorStyle:Je.value})})))},Ee=()=>{switch(Y){case"options":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(ct,{tab:"options",name:"heading-settings",title:Ye("Heading Settings","digiblocks"),initialOpen:!0},wp.element.createElement(id,{label:Ye("Heading Tags","digiblocks"),value:_,options:xe,onChange:j=>e({headingTag:j}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Qu,{label:Ye("Alignment","digiblocks"),value:$,onChange:j=>e({align:j}),options:[{label:Ye("Left","digiblocks"),value:"left"},{label:Ye("Center","digiblocks"),value:"center"},{label:Ye("Right","digiblocks"),value:"right"}]}),Se?wp.element.createElement(Vu,{key:"link-control",value:{url:K,opensInNewTab:L,rel:oe},settings:[{id:"opensInNewTab",title:Ye("Open in new tab","digiblocks")},{id:"rel",title:Ye("Add noopener noreferrer","digiblocks")}],onChange:j=>{e({linkUrl:j.url,linkOpenInNewTab:j.opensInNewTab,linkRel:j.rel})},onRemove:()=>{e({linkEnabled:!1,linkUrl:"",linkOpenInNewTab:!1,linkRel:""})},suggestionsQuery:{type:"post",subtype:"any"},forceIsEditingLink:!K}):wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("button",{className:"components-button width-full is-primary",onClick:()=>e({linkEnabled:!0})},Ye("Add Link","digiblocks"))))),wp.element.createElement(ct,{tab:"options",name:"separator",title:Ye("Separator","digiblocks"),initialOpen:!1},wp.element.createElement(vl,{label:Ye("Display Separator","digiblocks"),checked:V,onChange:j=>e({displaySeparator:j}),__nextHasNoMarginBottom:!0}),V&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Wu,{label:Ye("Separator Style","digiblocks"),className:"digiblocks-separator-style-selector",__nextHasNoMarginBottom:!0},Ve()),wp.element.createElement(ld,{label:Ye("Position","digiblocks"),value:D,onChange:j=>e({separatorPosition:j}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(xl,{value:"bottom",label:Ye("Bottom","digiblocks")}),wp.element.createElement(xl,{value:"top",label:Ye("Top","digiblocks")})),wp.element.createElement(kl,{title:Ye("Separator Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:Z,onChange:j=>e({separatorColor:j}),label:Ye("Primary Color","digiblocks")},...le==="line-gradient"||le==="line-double"?[{value:ee,onChange:j=>e({separatorSecondaryColor:j}),label:Ye("Secondary Color","digiblocks")}]:[]]}),wp.element.createElement(Hi,{label:Ye("Width","digiblocks")},wp.element.createElement(Ni,{value:E[A],onChange:j=>e({separatorWidth:{...E,[A]:j}}),min:10,max:300,step:1,__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0})),wp.element.createElement(Hi,{label:Ye("Height","digiblocks")},wp.element.createElement(Ni,{value:f[A],onChange:j=>e({separatorHeight:{...f,[A]:j}}),min:1,max:20,step:1,__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0})),wp.element.createElement(Hi,{label:Ye("Spacing","digiblocks")},wp.element.createElement(Ni,{value:We[A],onChange:j=>e({separatorSpacing:{...We,[A]:j}}),min:0,max:50,step:1,__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0})),["line-solid","line-gradient","line-double","line-dashed","line-dotted","glow","faded"].includes(le)&&wp.element.createElement(Hi,{label:Ye("Border Radius","digiblocks")},wp.element.createElement(ds,{values:b&&b[A]?b[A]:{top:0,right:0,bottom:0,left:0,unit:"px"},onChange:j=>e({separatorBorderRadius:{...b,[A]:j}}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]})))),wp.element.createElement(ct,{tab:"options",name:"text-highlight",title:Ye("Text Highlight","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"highlight-text"},Ye("Text to Highlight","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"highlight-text",value:B||"",onChange:j=>e({highlightText:j.target.value}),placeholder:Ye("Enter text to highlight","digiblocks")})),wp.element.createElement("p",{className:"components-base-control__help"},Ye("The text you enter here will be highlighted in your heading.","digiblocks"))),B&&B.trim()!==""&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(ld,{label:Ye("Highlight Type","digiblocks"),value:T,onChange:j=>e({highlightType:j}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(xl,{value:"background",label:Ye("Background","digiblocks")}),wp.element.createElement(xl,{value:"color",label:Ye("Text","digiblocks")}),wp.element.createElement(xl,{value:"underline",label:Ye("Underline","digiblocks")})),wp.element.createElement(kl,{title:Ye("Highlight Color","digiblocks"),initialOpen:!0,colorSettings:[{value:O,onChange:j=>e({highlightColor:j}),label:Ye("Color","digiblocks")}]}))));case"style":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(ct,{tab:"style",name:"colors",title:Ye("Colors","digiblocks"),initialOpen:!0},wp.element.createElement(Eu,{className:"digiblocks-control-tabs",activeClass:"active-tab",tabs:U},j=>j.name==="normal"?wp.element.createElement(kl,{title:Ye("Color Settings","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:v,onChange:ye=>e({textColor:ye}),label:Ye("Text Color","digiblocks")},{value:N,onChange:ye=>e({backgroundColor:ye}),label:Ye("Background Color","digiblocks")}]}):wp.element.createElement(kl,{title:Ye("Hover Color Settings","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:M,onChange:ye=>e({textHoverColor:ye}),label:Ye("Text Hover Color","digiblocks")},{value:m,onChange:ye=>e({backgroundHoverColor:ye}),label:Ye("Background Hover Color","digiblocks")}]}))),wp.element.createElement(ct,{tab:"style",name:"typo",title:Ye("Typography","digiblocks"),initialOpen:!1},wp.element.createElement(Ju,{label:Ye("Typography Settings","digiblocks"),value:s,onChange:j=>e({typography:j}),defaults:{fontSize:{desktop:32,tablet:28,mobile:24},fontSizeUnit:"px",lineHeight:{desktop:1.2,tablet:1.2,mobile:1.2},lineHeightUnit:"em"}})),wp.element.createElement(ct,{tab:"style",name:"text-shadow",title:Ye("Text Shadow","digiblocks"),initialOpen:!1},wp.element.createElement(vl,{label:Ye("Enable Text Shadow","digiblocks"),checked:q,onChange:j=>e({shadowEnabled:j}),__nextHasNoMarginBottom:!0}),q&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(kl,{title:Ye("Shadow Color","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:J.color,onChange:j=>e({textShadow:{...J,color:j}}),label:Ye("Color","digiblocks")}]}),wp.element.createElement(Ni,{label:Ye("Horizontal Offset","digiblocks"),value:J.horizontal,onChange:j=>e({textShadow:{...J,horizontal:j}}),min:-20,max:20,step:1,__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0}),wp.element.createElement(Ni,{label:Ye("Vertical Offset","digiblocks"),value:J.vertical,onChange:j=>e({textShadow:{...J,vertical:j}}),min:-20,max:20,step:1,__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0}),wp.element.createElement(Ni,{label:Ye("Blur Radius","digiblocks"),value:J.blur,onChange:j=>e({textShadow:{...J,blur:j}}),min:0,max:20,step:1,__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0}))),wp.element.createElement(ct,{tab:"style",name:"spacing",title:Ye("Spacing","digiblocks"),initialOpen:!1},wp.element.createElement(Hi,{label:Ye("Padding","digiblocks")},wp.element.createElement(ds,{values:I[A],onChange:j=>e({padding:{...I,[A]:j}})})),wp.element.createElement(Hi,{label:Ye("Margin","digiblocks")},wp.element.createElement(ds,{values:C[A],onChange:j=>e({margin:{...C,[A]:j}})}))));case"advanced":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(ct,{tab:"advanced",name:"animation",title:Ye("Animation","digiblocks"),initialOpen:!0},wp.element.createElement(id,{label:Ye("Animation Effect","digiblocks"),value:k,options:H,onChange:j=>e({animation:j}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),k&&k!=="none"&&wp.element.createElement("div",{style:{marginTop:"10px"}},wp.element.createElement(Fu,{variant:"secondary",isSecondary:!0,onClick:be,style:{width:"100%"}},Ye("Preview Animation","digiblocks")))),wp.element.createElement(ct,{tab:"advanced",name:"visibility",title:Ye("Visibility","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control__help",style:{padding:"12px",backgroundColor:"#f0f6fc",border:"1px solid #c3ddfd",borderRadius:"4px",marginBottom:"16px"}},wp.element.createElement("strong",null,Ye("Editor Note:","digiblocks")),wp.element.createElement("br",null),Ye("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.","digiblocks")),wp.element.createElement(vl,{label:Ye("Hide on Desktop","digiblocks"),checked:n.desktop,onChange:j=>e({visibility:{...n,desktop:j}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(vl,{label:Ye("Hide on Tablet","digiblocks"),checked:n.tablet,onChange:j=>e({visibility:{...n,tablet:j}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(vl,{label:Ye("Hide on Mobile","digiblocks"),checked:n.mobile,onChange:j=>e({visibility:{...n,mobile:j}}),__nextHasNoMarginBottom:!0})),wp.element.createElement(ct,{tab:"advanced",name:"additional",title:Ye("Additional","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control html-anchor-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"html-anchor"},Ye("HTML anchor","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"html-anchor",value:P||"",onChange:j=>e({anchor:j.target.value}),"aria-describedby":"html-anchor-help",autoCapitalize:"none",autoComplete:"off"})),wp.element.createElement("p",{id:"html-anchor-help",className:"components-base-control__help"},Ye(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`,"digiblocks")," ",wp.element.createElement("a",{className:"components-external-link",href:"https://wordpress.org/documentation/article/page-jumps/",target:"_blank",rel:"external noreferrer noopener"},wp.element.createElement("span",{className:"components-external-link__contents"},Ye("Learn more about anchors","digiblocks")),wp.element.createElement("span",{className:"components-external-link__icon","aria-label":"(opens in a new tab)"},"\u2197")))),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"additional-css-classes"},Ye("Additional CSS class(es)","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"additional-css-classes",value:te||"",onChange:j=>e({customClasses:j.target.value}),"aria-describedby":"additional-css-classes-help",autoComplete:"off"})),wp.element.createElement("p",{id:"additional-css-classes-help",className:"components-base-control__help"},Ye("Separate multiple classes with spaces.","digiblocks")))));default:return null}},Oe=Ou({className:`digiblocks-heading ${o} ${te||""}`,id:P||null});return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(ju,null,wp.element.createElement(Yu,{tabs:ve,activeTab:Y,onSelect:de},Ee())),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:me()}}),wp.element.createElement("div",{...Oe},wp.element.createElement(Uu,{tagName:_,className:"digiblocks-heading-text",value:l,onChange:j=>e({content:j}),placeholder:Ye("Add Your Heading","digiblocks"),allowedFormats:["core/bold","core/italic"]})))},sd=Zu;var{useBlockProps:f0,RichText:Ku}=window.wp.blockEditor,Xu=({attributes:ie})=>{let{id:e,anchor:X,customClasses:o,content:P,headingTag:n,align:te,animation:l,highlightText:_,highlightType:v,displaySeparator:M,separatorStyle:N,linkEnabled:m,linkUrl:s,linkOpenInNewTab:$,linkRel:I}=ie,k={className:["digiblocks-heading",e,`align-${te}`,l!=="none"?`animate-${l}`:"",M?`has-separator separator-${N}`:"",o||""].filter(Boolean).join(" "),id:X||null},B=()=>{if(!_||_.trim()==="")return P;let V=ee=>ee.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");return P.split(new RegExp(`(${V(_)})`,"g")).map((ee,E)=>ee===_?`<span class="digiblocks-highlight">${ee}</span>`:ee).join("")},O=n,T=_&&_.trim()!==""?wp.element.createElement("span",{dangerouslySetInnerHTML:{__html:B()}}):wp.element.createElement(Ku.Content,{value:P});return m&&s?wp.element.createElement("a",{href:s,target:$?"_blank":"_self",rel:$?"noopener noreferrer":void 0,...k},wp.element.createElement(O,{className:"digiblocks-heading-text"},T)):wp.element.createElement("div",{...k},wp.element.createElement(O,{className:"digiblocks-heading-text"},T))},rd=Xu;var{__:Cl}=window.wp.i18n,{registerBlockType:Au}=window.wp.blocks,{getBlockActiveStatus:em}=window.wp.digiBlocks;Au("digiblocks/heading",{apiVersion:2,title:digiBlocksData.blocks.heading.title,category:"digiblocks",icon:{src:()=>{let{viewbox:ie,path:e}=digiBlocksData.blocks.heading.icon;return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${ie}`,className:"digiblocks-editor-icons"},wp.element.createElement("path",{d:e}))}},description:digiBlocksData.blocks.heading.description,keywords:[Cl("heading","digiblocks"),Cl("title","digiblocks"),Cl("header","digiblocks")],supports:{inserter:!!em("heading"),html:!1,className:!1,customClassName:!1,anchor:!1},attributes:{id:{type:"string",default:""},anchor:{type:"string",default:""},visibility:{type:"object",default:{desktop:!1,tablet:!1,mobile:!1}},customClasses:{type:"string",default:""},content:{type:"string",default:Cl("Add Your Heading","digiblocks")},headingTag:{type:"string",default:"h2"},textColor:{type:"string",default:"#333333"},textHoverColor:{type:"string",default:""},backgroundColor:{type:"string",default:""},backgroundHoverColor:{type:"string",default:""},typography:{type:"object",default:{fontFamily:"",fontSize:{desktop:32,tablet:28,mobile:24},fontSizeUnit:"px",fontWeight:"600",fontStyle:"normal",textTransform:"none",textDecoration:"none",lineHeight:{desktop:1.2,tablet:1.2,mobile:1.2},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}},align:{type:"object",default:{desktop:"left",tablet:"left",mobile:"left"}},padding:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},margin:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},animation:{type:"string",default:"none"},highlightText:{type:"string",default:""},highlightColor:{type:"string",default:"#ffde59"},highlightType:{type:"string",default:"background"},displaySeparator:{type:"boolean",default:!1},separatorColor:{type:"string",default:"#1e73be"},separatorSecondaryColor:{type:"string",default:"#e0e0e0"},separatorWidth:{type:"object",default:{desktop:50,tablet:40,mobile:30}},separatorHeight:{type:"object",default:{desktop:3,tablet:2,mobile:2}},separatorPosition:{type:"string",default:"bottom"},separatorStyle:{type:"string",default:"line-solid"},separatorSpacing:{type:"object",default:{desktop:10,tablet:8,mobile:6}},separatorBorderRadius:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},linkEnabled:{type:"boolean",default:!1},linkUrl:{type:"string",default:""},linkOpenInNewTab:{type:"boolean",default:!1},linkRel:{type:"string",default:""},shadowEnabled:{type:"boolean",default:!1},textShadow:{type:"object",default:{horizontal:2,vertical:2,blur:3,color:"rgba(0,0,0,0.3)"}}},example:{attributes:{content:Cl("Beautiful Heading","digiblocks"),level:2,textColor:"#333333",typography:{fontSize:{desktop:32},fontWeight:"600",lineHeight:{desktop:1.2}},displaySeparator:!0,separatorStyle:"line-gradient",separatorColor:"#1e73be"}},edit:sd,save:rd});var{__:Qe}=window.wp.i18n,{useBlockProps:om,InspectorControls:tm,PanelColorSettings:zi,LinkControl:im}=window.wp.blockEditor,{ToggleControl:gs,SelectControl:Ta,RangeControl:cd,TabPanel:dd,Spinner:lm,Button:am,__experimentalToggleGroupControl:ps,__experimentalToggleGroupControlOption:Mi}=window.wp.components,{useState:Na,useEffect:Ha,useRef:nm}=window.wp.element,{useBlockId:sm,getDimensionCSS:Di,animations:bs,animationPreview:gd}=digi.utils,{tabIcons:us}=digi.icons,{ResponsiveControl:li,ResponsiveButtonGroup:rm,DimensionControl:Pi,BoxShadowControl:cm,CustomTabPanel:dm,TabPanelBody:Ri}=digi.components,gm=({attributes:ie,setAttributes:e,clientId:X})=>{let{id:o,anchor:P,visibility:n,customClasses:te,iconSource:l,customSvg:_,iconValue:v,iconSize:M,iconColor:N,iconBackgroundColor:m,iconBorderStyle:s,iconBorderWidth:$,iconBorderRadius:I,iconBorderColor:C,iconPadding:k,iconMargin:B,iconHoverColor:O,iconHoverBackgroundColor:T,iconHoverBorderColor:V,backgroundColor:Z,backgroundHoverColor:ee,align:E,animation:f,boxShadow:b,boxShadowHover:D,borderStyle:le,borderWidth:We,borderRadius:Se,borderColor:K,hoverEffect:L,linkEnabled:oe,linkUrl:q,linkOpenInNewTab:J,linkRel:A,rotateIcon:re,flipHorizontal:se,flipVertical:Ce}=ie;sm(o,X,e);let[Y,de]=Na(window.digi.responsiveState.activeDevice),[He,be]=Na(!1);Ha(()=>window.digi.responsiveState.subscribe(g=>{de(g)}),[]);let[H,xe]=Na(()=>{if(window.digi.uiState){let S=window.digi.uiState.getActiveTab(X);if(S)return S}return"options"});Ha(()=>{B||e({iconMargin:{desktop:{top:0,right:0,bottom:0,left:0,unit:"px"},tablet:{top:0,right:0,bottom:0,left:0,unit:"px"},mobile:{top:0,right:0,bottom:0,left:0,unit:"px"}}})},[B,e]);let[x,ve]=Na(!1);Ha(()=>{let S=()=>window.digi&&window.digi.components&&window.digi.components.FontAwesomeControl?(ve(!0),!0):!1;if(!S()){let g=setTimeout(()=>{S()&&clearTimeout(g)},500);return()=>clearTimeout(g)}},[]);let U=S=>{e({iconValue:S})},me=nm(null);Ha(()=>{if(f&&f!=="none"){let S=setTimeout(()=>{gd(o,f,bs,me)},100);return()=>clearTimeout(S)}},[f]);let Te=()=>{gd(o,f,bs,me)},qe=[{label:Qe("Default","digiblocks"),value:"default"},{label:Qe("None","digiblocks"),value:"none"},{label:Qe("Solid","digiblocks"),value:"solid"},{label:Qe("Dotted","digiblocks"),value:"dotted"},{label:Qe("Dashed","digiblocks"),value:"dashed"},{label:Qe("Double","digiblocks"),value:"double"},{label:Qe("Groove","digiblocks"),value:"groove"},{label:Qe("Inset","digiblocks"),value:"inset"},{label:Qe("Outset","digiblocks"),value:"outset"},{label:Qe("Ridge","digiblocks"),value:"ridge"}],Ve=[{label:Qe("None","digiblocks"),value:"none"},{label:Qe("Lift","digiblocks"),value:"lift"},{label:Qe("Scale","digiblocks"),value:"scale"},{label:Qe("Glow","digiblocks"),value:"glow"},{label:Qe("Spin","digiblocks"),value:"spin"},{label:Qe("Pulse","digiblocks"),value:"pulse"},{label:Qe("Shake","digiblocks"),value:"shake"}],Ee=[{label:Qe("None","digiblocks"),value:"none"},...Object.keys(bs).map(S=>({label:S.replace(/-/g," ").replace(/\b\w/g,g=>g.toUpperCase()),value:S}))],Oe=[{name:"options",title:Qe("Options","digiblocks"),icon:us.optionsIcon},{name:"style",title:Qe("Style","digiblocks"),icon:us.styleIcon},{name:"advanced",title:Qe("Advanced","digiblocks"),icon:us.advancedIcon}],j=[{name:"normal",title:Qe("Normal","digiblocks"),className:"digiblocks-tab-1 normal"},{name:"hover",title:Qe("Hover","digiblocks"),className:"digiblocks-tab-2 hover"}],ye=()=>{let S=window.digi.responsiveState.activeDevice,g="";le&&le!=="default"&&le!=="none"&&(g+=`
                border-style: ${le};
                border-color: ${K||"#e0e0e0"};
				${Di(We,"border-width",S)}
				${Di(Se,"border-radius",S)}
            `);let Q="";b&&b.enable&&(Q=`box-shadow: ${b.position==="inset"?"inset ":""}${b.horizontal}px ${b.vertical}px ${b.blur}px ${b.spread}px ${b.color};`);let c="",ae="",y="";if(v&&v.svg){m&&(c+=`background-color: ${m};`),s&&s!=="default"&&s!=="none"&&(c+=`
                    border-style: ${s};
                    border-color: ${C||"#e0e0e0"};
					${Di($,"border-width",S)}
					${Di(I,"border-radius",S)}
                `),k&&k[S]&&(c+=`${Di(k,"padding",S)}`),O&&(ae+=`fill: ${O} !important; color: ${O} !important;`),T&&(ae+=`background-color: ${T};`),V&&(ae+=`border-color: ${V};`);let ue=[];re&&ue.push(`rotate(${re}deg)`),se&&ue.push("scaleX(-1)"),Ce&&ue.push("scaleY(-1)"),ue.length>0&&(y=`transform: ${ue.join(" ")};`)}let u="";if(D&&D.enable){let ue=D.position==="inset"?"inset ":"";u+=`box-shadow: ${ue}${D.horizontal}px ${D.vertical}px ${D.blur}px ${D.spread}px ${D.color};`}L==="lift"?u+="transform: translateY(-10px);":L==="scale"?u+="transform: scale(1.05);":L==="glow"?u+="filter: brightness(1.1);":L==="spin"?u+="animation: digiblocks-icon-spin 2s linear infinite;":L==="pulse"?u+="animation: digiblocks-icon-pulse 1.5s ease-in-out infinite;":L==="shake"&&(u+="animation: digiblocks-icon-shake 0.5s ease-in-out infinite;");let Ne="";oe&&(Ne=`
                cursor: pointer;
                text-decoration: none;
            `);let a="";return B&&B[S]&&(a=`${Di(B,"margin",S)}`),`
            /* Icon Block - ${o} */
            .${o} {
                display: flex;
				justify-content: ${E[S]};
                align-items: center;
                background-color: ${Z||"transparent"};
                ${Q}
                ${g}
                transition: all 0.3s ease;
                ${oe?Ne:""}
                ${a}
            }
            
            /* Hover effects */
            .${o}:hover {
                ${ee?`background-color: ${ee};`:""}
                ${u}
            }
            
            /* Icon styles */
            .${o} .digiblocks-icon {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                ${c}
                transition: all 0.3s ease;
            }
            
            .${o} .digiblocks-icon span {
                display: flex;
                ${y}
            }
            
            .${o} .digiblocks-icon svg {
                width: ${M[S]}px;
                height: auto;
                fill: ${N||"inherit"};
                transition: all 0.3s ease;
            }
            
            /* Icon hover styles */
            .${o}:hover .digiblocks-icon {
                ${ae}
            }
            
            .${o}:hover .digiblocks-icon svg {
                ${O?`fill: ${O};`:""}
            }
            
            /* Hover effect animations */
            @keyframes digiblocks-icon-spin {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
            }
            
            @keyframes digiblocks-icon-pulse {
                0% { transform: scale(1); }
                50% { transform: scale(1.1); }
                100% { transform: scale(1); }
            }
            
            @keyframes digiblocks-icon-shake {
                0% { transform: translateX(0); }
                25% { transform: translateX(-5px); }
                50% { transform: translateX(0); }
                75% { transform: translateX(5px); }
                100% { transform: translateX(0); }
            }

			/* Visibility Controls */
			${n.desktop?`
				@media (min-width: 992px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${n.tablet?`
				@media (min-width: 768px) and (max-width: 991px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${n.mobile?`
				@media (max-width: 767px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}
        `},Je=x?window.digi.components.FontAwesomeControl:null,G=()=>l==="library"&&v&&v.svg&&v.svg.trim()!==""?wp.element.createElement("div",{className:"digiblocks-icon"},wp.element.createElement("span",{dangerouslySetInnerHTML:{__html:v.svg}})):l==="custom"&&_&&_.trim()!==""?wp.element.createElement("div",{className:"digiblocks-icon"},wp.element.createElement("span",{dangerouslySetInnerHTML:{__html:_}})):null,pe=S=>S==="normal"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(zi,{title:Qe("Icon Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:N,onChange:g=>e({iconColor:g}),label:Qe("Icon Color","digiblocks")},{value:m,onChange:g=>e({iconBackgroundColor:g}),label:Qe("Background Color","digiblocks")}]}),wp.element.createElement(Ta,{label:Qe("Border Style","digiblocks"),value:s||"default",options:qe,onChange:g=>{g!=="default"&&g!=="none"&&(s==="default"||s==="none"||!s)&&(!$||Object.keys($).length===0)&&e({iconBorderWidth:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:1,right:1,bottom:1,left:1,unit:"px"},mobile:{top:1,right:1,bottom:1,left:1,unit:"px"}}}),e({iconBorderStyle:g})},__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),s&&s!=="default"&&s!=="none"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(zi,{title:Qe("Border Color","digiblocks"),enableAlpha:!0,colorSettings:[{value:C,onChange:g=>e({iconBorderColor:g}),label:Qe("Border Color","digiblocks")}]}),wp.element.createElement(li,{label:Qe("Border Width","digiblocks")},wp.element.createElement(Pi,{values:$[Y],onChange:g=>e({iconBorderWidth:{...$,[Y]:g}})})),wp.element.createElement(li,{label:Qe("Border Radius","digiblocks")},wp.element.createElement(Pi,{values:I[Y],onChange:g=>e({iconBorderRadius:{...I,[Y]:g}}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]}))),wp.element.createElement(li,{label:Qe("Padding","digiblocks")},wp.element.createElement(Pi,{values:k[Y],onChange:g=>e({iconPadding:{...k,[Y]:g}})})),wp.element.createElement(li,{label:Qe("Margin","digiblocks")},wp.element.createElement(Pi,{values:B[Y],onChange:g=>e({iconMargin:{...B,[Y]:g}})}))):S==="hover"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(zi,{title:Qe("Icon Hover Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:O,onChange:g=>e({iconHoverColor:g}),label:Qe("Icon Color","digiblocks")},{value:T,onChange:g=>e({iconHoverBackgroundColor:g}),label:Qe("Background Color","digiblocks")},{value:V,onChange:g=>e({iconHoverBorderColor:g}),label:Qe("Border Color","digiblocks")}]})):null,R=S=>S==="normal"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(zi,{title:Qe("Container Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:Z,onChange:g=>e({backgroundColor:g}),label:Qe("Background Color","digiblocks")}]})):S==="hover"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(zi,{title:Qe("Container Hover Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:ee,onChange:g=>e({backgroundHoverColor:g}),label:Qe("Background Color","digiblocks")}]})):null,d=()=>{switch(H){case"options":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:"components-panel__body is-opened"},wp.element.createElement("div",{style:{marginBottom:"2rem"}},wp.element.createElement(ps,{label:Qe("Icon Source","digiblocks"),value:l||"library",onChange:S=>e({iconSource:S}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(Mi,{value:"library",label:Qe("Library","digiblocks")}),wp.element.createElement(Mi,{value:"custom",label:Qe("Custom","digiblocks")})),l==="library"&&wp.element.createElement(wp.element.Fragment,null,x?wp.element.createElement(Je,{label:Qe("Select Icon","digiblocks"),value:v,onChange:U}):wp.element.createElement("div",{style:{textAlign:"center",padding:"20px 0"}},wp.element.createElement(lm,null),wp.element.createElement("p",null,Qe("Loading icon selector...","digiblocks"))),v&&x&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{style:{marginTop:"15px",marginBottom:"15px",padding:"10px",background:"#f0f0f1",borderRadius:"3px"}},wp.element.createElement("p",{style:{margin:"0 0 5px 0"}},wp.element.createElement("strong",null,Qe("Selected Icon:","digiblocks"))," ",v.name),wp.element.createElement("p",{style:{margin:"0 0 5px 0"}},wp.element.createElement("strong",null,Qe("Style:","digiblocks"))," ",v.style),v.categories&&v.categories.length>0&&wp.element.createElement("p",{style:{margin:"0"}},wp.element.createElement("strong",null,Qe("Categories:","digiblocks"))," ",v.categories.join(", "))))),l==="custom"&&wp.element.createElement("div",{style:{marginTop:"15px"}},wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"custom-svg-input"},Qe("Custom SVG Code","digiblocks")),wp.element.createElement("textarea",{id:"custom-svg-input",className:"components-textarea-control__input",value:_||"",onChange:S=>{let g=S.target.value;e({customSvg:g,iconValue:{id:"custom-svg",name:"Custom SVG",svg:g,style:"custom",categories:["custom"]}})},placeholder:Qe("Paste your SVG code here...","digiblocks"),rows:10,style:{width:"100%",marginTop:"8px"}}),wp.element.createElement("p",{className:"components-base-control__help"},Qe("Paste your SVG code here. Make sure it only contains valid SVG markup. For security reasons, scripts and external references will be removed.","digiblocks"))),_&&wp.element.createElement("div",{style:{marginTop:"15px",marginBottom:"15px"}},wp.element.createElement("p",null,wp.element.createElement("strong",null,Qe("Preview:","digiblocks"))),wp.element.createElement("div",{style:{padding:"20px",background:"#f0f0f1",borderRadius:"3px",display:"flex",justifyContent:"center",alignItems:"center"}},wp.element.createElement("div",{className:"digiblocks-custom-svg-preview",style:{width:"50px",height:"50px"},dangerouslySetInnerHTML:{__html:_}}))))),wp.element.createElement(rm,{label:Qe("Alignment","digiblocks"),value:E,onChange:S=>e({align:S}),options:[{label:Qe("Left","digiblocks"),value:"flex-start"},{label:Qe("Center","digiblocks"),value:"center"},{label:Qe("Right","digiblocks"),value:"flex-end"}]}),wp.element.createElement("div",{className:"icon-transform-controls"},wp.element.createElement(cd,{label:Qe("Rotate","digiblocks"),value:re||0,onChange:S=>e({rotateIcon:S}),min:0,max:360,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement("div",{className:"digiblocks-toggle-controls",style:{display:"flex",justifyContent:"space-between",marginBottom:"20px"}},wp.element.createElement(ps,{label:Qe("Flip Horizontal","digiblocks"),value:se?"yes":"no",onChange:S=>e({flipHorizontal:S==="yes"}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(Mi,{value:"no",label:Qe("Off","digiblocks")}),wp.element.createElement(Mi,{value:"yes",label:Qe("On","digiblocks")}))),wp.element.createElement("div",{className:"digiblocks-toggle-controls",style:{display:"flex",justifyContent:"space-between",marginBottom:"20px"}},wp.element.createElement(ps,{label:Qe("Flip Vertical","digiblocks"),value:Ce?"yes":"no",onChange:S=>e({flipVertical:S==="yes"}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(Mi,{value:"no",label:Qe("Off","digiblocks")}),wp.element.createElement(Mi,{value:"yes",label:Qe("On","digiblocks")})))),oe?wp.element.createElement(im,{key:"link-control",value:{url:q,opensInNewTab:J,rel:A},settings:[{id:"opensInNewTab",title:Qe("Open in new tab","digiblocks")},{id:"rel",title:Qe("Add noopener noreferrer","digiblocks")}],onChange:S=>{e({linkUrl:S.url,linkOpenInNewTab:S.opensInNewTab,linkRel:S.rel})},onRemove:()=>{e({linkEnabled:!1,linkUrl:"",linkOpenInNewTab:!1,linkRel:""})},suggestionsQuery:{type:"post",subtype:"any"},forceIsEditingLink:!q}):wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("button",{className:"components-button width-full is-primary",onClick:()=>e({linkEnabled:!0})},Qe("Add Link","digiblocks"))))));case"style":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Ri,{tab:"style",name:"icon",title:Qe("Icon","digiblocks"),initialOpen:!0},wp.element.createElement(li,{label:Qe("Icon Size","digiblocks")},wp.element.createElement(cd,{value:M[Y],onChange:S=>e({iconSize:{...M,[Y]:S}}),min:8,max:500,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(dd,{className:"digiblocks-control-tabs",activeClass:"active-tab",tabs:j},S=>pe(S.name))),wp.element.createElement(Ri,{tab:"style",name:"container",title:Qe("Container","digiblocks"),initialOpen:!1},wp.element.createElement(dd,{className:"digiblocks-control-tabs",activeClass:"active-tab",tabs:j},S=>R(S.name)),wp.element.createElement(Ta,{label:Qe("Border Style","digiblocks"),value:le||"default",options:qe,onChange:S=>{S!=="default"&&S!=="none"&&(le==="default"||le==="none"||!le)&&((!We||Object.keys(We).length===0)&&e({borderWidth:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:1,right:1,bottom:1,left:1,unit:"px"},mobile:{top:1,right:1,bottom:1,left:1,unit:"px"}}}),(!Se||Object.keys(Se).length===0)&&e({borderRadius:{desktop:{top:8,right:8,bottom:8,left:8,unit:"px"},tablet:{top:8,right:8,bottom:8,left:8,unit:"px"},mobile:{top:8,right:8,bottom:8,left:8,unit:"px"}}})),e({borderStyle:S})},__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),le&&le!=="default"&&le!=="none"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(zi,{title:Qe("Border Color","digiblocks"),enableAlpha:!0,colorSettings:[{value:K,onChange:S=>e({borderColor:S}),label:Qe("Border Color","digiblocks")}]}),wp.element.createElement(li,{label:Qe("Border Width","digiblocks")},wp.element.createElement(Pi,{values:We&&We[Y]?We[Y]:{top:1,right:1,bottom:1,left:1,unit:"px"},onChange:S=>e({borderWidth:{...We,[Y]:S}})})),wp.element.createElement(li,{label:Qe("Border Radius","digiblocks")},wp.element.createElement(Pi,{values:Se&&Se[Y]?Se[Y]:{top:0,right:0,bottom:0,left:0,unit:"px"},onChange:S=>e({borderRadius:{...Se,[Y]:S}}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]}))),wp.element.createElement(Ta,{label:Qe("Hover Effect","digiblocks"),value:L,options:Ve,onChange:S=>e({hoverEffect:S}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(Ri,{tab:"style",name:"shadow",title:Qe("Box Shadow","digiblocks"),initialOpen:!1},wp.element.createElement(cm,{normalValue:b,hoverValue:D,onNormalChange:S=>e({boxShadow:S}),onHoverChange:S=>e({boxShadowHover:S})})));case"advanced":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Ri,{tab:"advanced",name:"animation",title:Qe("Animation","digiblocks"),initialOpen:!0},wp.element.createElement(Ta,{label:Qe("Animation Effect","digiblocks"),value:f,options:Ee,onChange:S=>e({animation:S}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),f&&f!=="none"&&wp.element.createElement("div",{style:{marginTop:"10px"}},wp.element.createElement(am,{variant:"secondary",isSecondary:!0,onClick:Te,style:{width:"100%"}},Qe("Preview Animation","digiblocks")))),wp.element.createElement(Ri,{tab:"advanced",name:"visibility",title:Qe("Visibility","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control__help",style:{padding:"12px",backgroundColor:"#f0f6fc",border:"1px solid #c3ddfd",borderRadius:"4px",marginBottom:"16px"}},wp.element.createElement("strong",null,Qe("Editor Note:","digiblocks")),wp.element.createElement("br",null),Qe("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.","digiblocks")),wp.element.createElement(gs,{label:Qe("Hide on Desktop","digiblocks"),checked:n.desktop,onChange:S=>e({visibility:{...n,desktop:S}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(gs,{label:Qe("Hide on Tablet","digiblocks"),checked:n.tablet,onChange:S=>e({visibility:{...n,tablet:S}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(gs,{label:Qe("Hide on Mobile","digiblocks"),checked:n.mobile,onChange:S=>e({visibility:{...n,mobile:S}}),__nextHasNoMarginBottom:!0})),wp.element.createElement(Ri,{tab:"advanced",name:"additional",title:Qe("Additional","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control html-anchor-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"html-anchor"},Qe("HTML anchor","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"html-anchor",value:P||"",onChange:S=>e({anchor:S.target.value}),"aria-describedby":"html-anchor-help",autoCapitalize:"none",autoComplete:"off"})),wp.element.createElement("p",{id:"html-anchor-help",className:"components-base-control__help"},Qe(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`,"digiblocks")," ",wp.element.createElement("a",{className:"components-external-link",href:"https://wordpress.org/documentation/article/page-jumps/",target:"_blank",rel:"external noreferrer noopener"},wp.element.createElement("span",{className:"components-external-link__contents"},Qe("Learn more about anchors","digiblocks")),wp.element.createElement("span",{className:"components-external-link__icon","aria-label":"(opens in a new tab)"},"\u2197")))),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"additional-css-classes"},Qe("Additional CSS class(es)","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"additional-css-classes",value:te||"",onChange:S=>e({customClasses:S.target.value}),"aria-describedby":"additional-css-classes-help",autoComplete:"off"})),wp.element.createElement("p",{id:"additional-css-classes-help",className:"components-base-control__help"},Qe("Separate multiple classes with spaces.","digiblocks")))));default:return null}},ce=om({className:`digiblocks-icon ${o} ${te||""}`,id:P||null});return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(tm,null,wp.element.createElement(dm,{tabs:Oe,activeTab:H,onSelect:xe},d())),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:ye()}}),wp.element.createElement("div",{...ce},G()))},pd=gm;var{useBlockProps:C0}=window.wp.blockEditor,pm=({attributes:ie})=>{let{id:e,iconSource:X,customSvg:o,iconValue:P,animation:n,hoverEffect:te,anchor:l,customClasses:_,linkEnabled:v,linkUrl:M,linkOpenInNewTab:N}=ie,s={className:["digiblocks-icon",e,n!=="none"?`animate-${n}`:"",te!=="none"?`has-hover-${te}`:"",_||""].filter(Boolean).join(" "),id:l||null},$=()=>X==="library"&&P&&P.svg&&P.svg.trim()!==""?wp.element.createElement("div",{className:"digiblocks-icon"},wp.element.createElement("span",{dangerouslySetInnerHTML:{__html:P.svg}})):X==="custom"&&o&&o.trim()!==""?wp.element.createElement("div",{className:"digiblocks-icon"},wp.element.createElement("span",{dangerouslySetInnerHTML:{__html:o}})):null;return v&&M?wp.element.createElement("a",{href:M,target:N?"_blank":"_self",rel:N?"noopener noreferrer":void 0,...s},$()):wp.element.createElement("div",{...s},$())},bd=pm;var{__:ms}=window.wp.i18n,{registerBlockType:bm}=window.wp.blocks,{getBlockActiveStatus:um}=window.wp.digiBlocks;bm("digiblocks/icon",{apiVersion:2,title:digiBlocksData.blocks.icon.title,category:"digiblocks",icon:{src:()=>{let{viewbox:ie,path:e}=digiBlocksData.blocks.icon.icon;return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${ie}`,className:"digiblocks-editor-icons"},wp.element.createElement("path",{d:e}))}},description:digiBlocksData.blocks.icon.description,keywords:[ms("icon","digiblocks"),ms("symbol","digiblocks"),ms("fontawesome","digiblocks")],supports:{inserter:!!um("icon"),html:!1,className:!1,customClassName:!1,anchor:!1},attributes:{id:{type:"string",default:""},anchor:{type:"string",default:""},visibility:{type:"object",default:{desktop:!1,tablet:!1,mobile:!1}},customClasses:{type:"string",default:""},iconSource:{type:"string",default:"library"},customSvg:{type:"string",default:""},iconValue:{type:"object",default:{id:"heart",name:"Heart",svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"></path></svg>',style:"solid",categories:["symbols","emoji"]}},align:{type:"object",default:{desktop:"flex-start",tablet:"",mobile:""}},iconColor:{type:"string",default:"#1e73be"},iconBackgroundColor:{type:"string",default:"transparent"},iconBorderStyle:{type:"string",default:"default"},iconBorderWidth:{type:"object",default:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},iconBorderRadius:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},iconBorderColor:{type:"string",default:"#e0e0e0"},iconPadding:{type:"object",default:{desktop:{top:10,right:10,bottom:10,left:10,unit:"px"},tablet:{top:8,right:8,bottom:8,left:8,unit:"px"},mobile:{top:5,right:5,bottom:5,left:5,unit:"px"}}},iconMargin:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},iconHoverColor:{type:"string",default:""},iconHoverBackgroundColor:{type:"string",default:""},iconHoverBorderColor:{type:"string",default:""},linkEnabled:{type:"boolean",default:!1},linkUrl:{type:"string",default:""},linkOpenInNewTab:{type:"boolean",default:!1},linkRel:{type:"string",default:""},iconSize:{type:"object",default:{desktop:48,tablet:40,mobile:32}},backgroundColor:{type:"string",default:"transparent"},backgroundHoverColor:{type:"string",default:""},animation:{type:"string",default:"none"},borderStyle:{type:"string",default:"default"},borderRadius:{type:"object",default:{desktop:{top:8,right:8,bottom:8,left:8,unit:"px"},tablet:{top:8,right:8,bottom:8,left:8,unit:"px"},mobile:{top:8,right:8,bottom:8,left:8,unit:"px"}}},borderWidth:{type:"object",default:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:1,right:1,bottom:1,left:1,unit:"px"},mobile:{top:1,right:1,bottom:1,left:1,unit:"px"}}},borderColor:{type:"string",default:"#e0e0e0"},hoverEffect:{type:"string",default:"none"},boxShadow:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},boxShadowHover:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},rotateIcon:{type:"number",default:0},flipHorizontal:{type:"boolean",default:!1},flipVertical:{type:"boolean",default:!1}},example:{attributes:{iconValue:{id:"star",name:"Star",svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="1em" height="1em"><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"></path></svg>',style:"solid",categories:["design","basic-shapes"]},iconColor:"#1e73be",backgroundColor:"transparent",iconSize:{desktop:80},iconPadding:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}}},edit:pd,save:bd});var{__:we}=window.wp.i18n,{useBlockProps:mm,RichText:hs,InspectorControls:hm,PanelColorSettings:xt,LinkControl:fm}=window.wp.blockEditor,{SelectControl:wl,RangeControl:km,ToggleControl:Sl,TabPanel:fs,Spinner:vm,Button:xm,TextControl:ym,__experimentalToggleGroupControl:ud,__experimentalToggleGroupControlOption:za}=window.wp.components,{useState:Ma,useEffect:ks,useRef:Cm}=window.wp.element,{useBlockId:wm,getDimensionCSS:Uo,animations:vs,animationPreview:md}=digi.utils,{tabIcons:xs}=digi.icons,{ResponsiveControl:Ho,DimensionControl:jo,TypographyControl:ys,BoxShadowControl:hd,CustomTabPanel:Sm,TabPanelBody:dt,ResponsiveButtonGroup:fd,ResponsiveRangeControl:$m}=digi.components,_m=({attributes:ie,setAttributes:e,clientId:X})=>{let{id:o,anchor:P,visibility:n,customClasses:te,iconSource:l,customSvg:_,iconValue:v,align:M,iconLayout:N,iconContentGap:m,showTitle:s,showContent:$,title:I,content:C,titleColor:k,titleHoverColor:B,textColor:O,textHoverColor:T,backgroundColor:V,backgroundHoverColor:Z,iconSize:ee,iconColor:E,iconBackgroundColor:f,iconBorderStyle:b,iconBorderWidth:D,iconBorderRadius:le,iconBorderColor:We,iconPadding:Se,iconMargin:K,iconHoverColor:L,iconHoverBackgroundColor:oe,iconHoverBorderColor:q,titleTypography:J,contentTypography:A,padding:re,margin:se,animation:Ce,boxShadow:Y,boxShadowHover:de,borderStyle:He,borderWidth:be,borderRadius:H,borderColor:xe,hoverEffect:x,linkEnabled:ve,linkType:U,linkUrl:me,linkOpenInNewTab:Te,linkRel:qe,buttonText:Ve,buttonBackgroundColor:Ee,buttonBackgroundHoverColor:Oe,buttonTextColor:j,buttonTextHoverColor:ye,buttonBorderStyle:Je,buttonBorderWidth:G,buttonBorderRadius:pe,buttonBorderColor:R,buttonBorderHoverColor:d,buttonBoxShadow:ce,buttonBoxShadowHover:S,buttonPadding:g,buttonMargin:Q,buttonTypography:c}=ie;wm(o,X,e);let[ae,y]=Ma(window.digi.responsiveState.activeDevice),[u,Ne]=Ma(!1);ks(()=>window.digi.responsiveState.subscribe(ze=>{y(ze)}),[]);let[a,ue]=Ma(()=>{if(window.digi.uiState){let W=window.digi.uiState.getActiveTab(X);if(W)return W}return"options"}),[Fe,eo]=Ma(!1);ks(()=>{let W=()=>window.digi&&window.digi.components&&window.digi.components.FontAwesomeControl?(eo(!0),!0):!1;if(!W()){let ze=setTimeout(()=>{W()&&clearTimeout(ze)},500);return()=>clearTimeout(ze)}},[]);let ao=W=>{e({iconValue:W})},go=Cm(null);ks(()=>{if(Ce&&Ce!=="none"){let W=setTimeout(()=>{md(o,Ce,vs,go)},100);return()=>clearTimeout(W)}},[Ce]);let t=()=>{md(o,Ce,vs,go)},p=[{label:we("Default","digiblocks"),value:"default"},{label:we("None","digiblocks"),value:"none"},{label:we("Solid","digiblocks"),value:"solid"},{label:we("Dotted","digiblocks"),value:"dotted"},{label:we("Dashed","digiblocks"),value:"dashed"},{label:we("Double","digiblocks"),value:"double"},{label:we("Groove","digiblocks"),value:"groove"},{label:we("Inset","digiblocks"),value:"inset"},{label:we("Outset","digiblocks"),value:"outset"},{label:we("Ridge","digiblocks"),value:"ridge"}],De=[{label:we("None","digiblocks"),value:"none"},{label:we("Lift","digiblocks"),value:"lift"},{label:we("Scale","digiblocks"),value:"scale"},{label:we("Glow","digiblocks"),value:"glow"}],r=[{label:we("None","digiblocks"),value:"none"},...Object.keys(vs).map(W=>({label:W.replace(/-/g," ").replace(/\b\w/g,ze=>ze.toUpperCase()),value:W}))],he=[{label:we("Box","digiblocks"),value:"box"},{label:we("Button","digiblocks"),value:"button"}],oo=[{name:"options",title:we("Options","digiblocks"),icon:xs.optionsIcon},{name:"style",title:we("Style","digiblocks"),icon:xs.styleIcon},{name:"advanced",title:we("Advanced","digiblocks"),icon:xs.advancedIcon}],h=[{name:"normal",title:we("Normal","digiblocks"),className:"digiblocks-tab-1 normal"},{name:"hover",title:we("Hover","digiblocks"),className:"digiblocks-tab-2 hover"}],w=()=>{let W=window.digi.responsiveState.activeDevice,ze="";M[W]==="flex-start"?ze=`
				align-items: flex-start;
				text-align: left;
			`:M[W]==="center"?ze=`
				align-items: center;
				text-align: center;
			`:M[W]==="flex-end"&&(ze=`
				align-items: flex-end;
				text-align: right;
			`);let ho=Uo(H,"border-radius",W),uo="";He&&He!=="default"&&He!=="none"?uo=`
                border-style: ${He};
                border-color: ${xe||"#e0e0e0"};
                ${Uo(be,"border-width",W)}
            `:uo="border-style: none;";let xo="box-shadow: none;";Y&&Y.enable&&(xo=`box-shadow: ${Y.position==="inset"?"inset ":""}${Y.horizontal}px ${Y.vertical}px ${Y.blur}px ${Y.spread}px ${Y.color};`);let Mo=`${Uo(re,"padding",W)}`,Do=`${Uo(se,"margin",W)}`,ko="";J&&(J.fontFamily&&(ko+=`font-family: ${J.fontFamily};`),J.fontSize&&J.fontSize[W]&&(ko+=`font-size: ${J.fontSize[W]}${J.fontSizeUnit||"px"};`),J.fontWeight&&(ko+=`font-weight: ${J.fontWeight};`),J.fontStyle&&(ko+=`font-style: ${J.fontStyle};`),J.textTransform&&(ko+=`text-transform: ${J.textTransform};`),J.textDecoration&&(ko+=`text-decoration: ${J.textDecoration};`),J.lineHeight&&J.lineHeight[W]&&(ko+=`line-height: ${J.lineHeight[W]}${J.lineHeightUnit||"em"};`),J.letterSpacing&&J.letterSpacing[W]&&(ko+=`letter-spacing: ${J.letterSpacing[W]}${J.letterSpacingUnit||"px"};`));let mo="";A&&(A.fontFamily&&(mo+=`font-family: ${A.fontFamily};`),A.fontSize&&A.fontSize[W]&&(mo+=`font-size: ${A.fontSize[W]}${A.fontSizeUnit||"px"};`),A.fontWeight&&(mo+=`font-weight: ${A.fontWeight};`),A.fontStyle&&(mo+=`font-style: ${A.fontStyle};`),A.textTransform&&(mo+=`text-transform: ${A.textTransform};`),A.textDecoration&&(mo+=`text-decoration: ${A.textDecoration};`),A.lineHeight&&A.lineHeight[W]&&(mo+=`line-height: ${A.lineHeight[W]}${A.lineHeightUnit||"em"};`),A.letterSpacing&&A.letterSpacing[W]&&(mo+=`letter-spacing: ${A.letterSpacing[W]}${A.letterSpacingUnit||"px"};`));let yo="";c&&(c.fontFamily&&(yo+=`font-family: ${c.fontFamily};`),c.fontSize&&c.fontSize[W]&&(yo+=`font-size: ${c.fontSize[W]}${c.fontSizeUnit||"px"};`),c.fontWeight&&(yo+=`font-weight: ${c.fontWeight};`),c.fontStyle&&(yo+=`font-style: ${c.fontStyle};`),c.textTransform&&(yo+=`text-transform: ${c.textTransform};`),c.textDecoration&&(yo+=`text-decoration: ${c.textDecoration};`),c.lineHeight&&c.lineHeight[W]&&(yo+=`line-height: ${c.lineHeight[W]}${c.lineHeightUnit||"em"};`),c.letterSpacing&&c.letterSpacing[W]&&(yo+=`letter-spacing: ${c.letterSpacing[W]}${c.letterSpacingUnit||"px"};`));let ot="",mi="",oa="",ta=v&&v.svg||l==="custom"&&_&&_.trim()!=="";if(ta){if(f&&(ot+=`background-color: ${f};`),b&&b!=="default"&&b!=="none"){let Ft=D&&D[W]?D[W]:{top:1,right:1,bottom:1,left:1,unit:"px"},kn=le&&le[W]?le[W]:{top:0,right:0,bottom:0,left:0,unit:"px"};ot+=`
                    border-style: ${b};
                    border-color: ${We||"#e0e0e0"};
					${Uo(D,"border-width",W)}
					${Uo(le,"border-radius",W)}
                `}Se&&Se[W]&&(ot+=`${Uo(Se,"padding",W)}`),L&&(mi+=`fill: ${L} !important; color: ${L} !important;`),oe&&(mi+=`background-color: ${oe};`),q&&(mi+=`border-color: ${q};`),K&&K[W]&&(oa=`${Uo(K,"margin",W)}`)}let el="";if(de&&de.enable){let Ft=de.position==="inset"?"inset ":"";el+=`box-shadow: ${Ft}${de.horizontal}px ${de.vertical}px ${de.blur}px ${de.spread}px ${de.color};`}x==="lift"?el+="transform: translateY(-10px);":x==="scale"?el+="transform: scale(1.05);":x==="glow"&&(el+="filter: brightness(1.1);");let Or="";ve&&U==="box"&&(Or=`
				cursor: pointer;
				text-decoration: none;
			`);let Ur="",ol="";if(ve&&U==="button"){let Ft="";Je&&Je!=="default"&&Je!=="none"?Ft=`
                    border-style: ${Je};
                    border-color: ${R||Ee};
                    ${Uo(G,"border-width",W)}
                `:Ft="border-style: none;";let kn="box-shadow: none;";ce&&ce.enable&&(kn=`box-shadow: ${ce.position==="inset"?"inset ":""}${ce.horizontal}px ${ce.vertical}px ${ce.blur}px ${ce.spread}px ${ce.color};`);let Ig=`${Uo(g,"padding",W)}`,Lg=`${Uo(Q,"margin",W)}`;if(S&&S.enable){let jr=S.position==="inset"?"inset ":"";ol+=`box-shadow: ${jr}${S.horizontal}px ${S.vertical}px ${S.blur}px ${S.spread}px ${S.color};`}Oe&&(ol+=`background-color: ${Oe};`),ye&&(ol+=`color: ${ye};`),d&&(ol+=`border-color: ${d};`),Ur=`
                .${o} .digiblocks-button-wrapper {
                    display: flex;
                    justify-content: ${M[W]==="center"?"center":M[W]==="flex-end"?"flex-end":"flex-start"};
                    ${Lg}
                }
                
                .${o} .digiblocks-button {
                    display: inline-block;
                    background-color: ${Ee};
                    color: ${j};
                    ${Ig}
                    ${Ft}
                    ${Uo(pe,"border-radius",W)}
                    ${kn}
                    ${yo}
                    text-decoration: none;
                    transition: all 0.3s ease;
                }
                
                .${o} .digiblocks-button:hover {
                    ${ol}
                }
            `}return`
            /* Main block styles */
            .${o} {
				display: flex;
				${ze}
                background-color: ${V||"transparent"};
                ${xo}
                ${Mo}
                ${Do}
                ${uo}
                ${ho}
				${N[W]==="above"?"flex-direction: column;":"flex-direction: row;"}
				${N[W]==="after"?"flex-direction: row-reverse;":""}
				gap: ${m[W].value}${m[W].unit};
                transition: all 0.3s ease;
                ${ve&&U==="box"?Or:""}
            }
            
            /* Hover effects */
            .${o}:hover {
                ${Z?`background-color: ${Z};`:""}
                ${el}
            }
            
            ${ta?`
				/* Icon styles */
				.${o} .digiblocks-icon-box-icon {
					${oa}
					display: inline-flex;
					align-items: center;
					justify-content: center;
					${ot}
					transition: all 0.3s ease;
				}

				.${o} .digiblocks-icon-box-icon span {
					display: flex;
				}

				.${o} .digiblocks-icon-box-icon svg {
					width: ${ee[W]}px;
					height: 100%;
					fill: ${E||"inherit"};
					transition: all 0.3s ease;
				}
				
				/* Icon hover styles */
				.${o}:hover .digiblocks-icon-box-icon {
					${mi}
				}
				
				.${o}:hover .digiblocks-icon-box-icon svg {
					${L?`fill: ${L};`:""}
				}
				`:""}
            
            /* Title styles */
            .${o} .digiblocks-icon-box-title {
                color: ${k||"inherit"};
				margin-top: 0;
                margin-bottom: 10px;
                ${ko}
                transition: color 0.3s ease;
            }
            
            /* Title hover styles */
            .${o}:hover .digiblocks-icon-box-title {
                ${B?`color: ${B};`:""}
            }
            
            /* Content styles */
            .${o} .digiblocks-icon-box-content {
                display: flex;
                flex-direction: column;
            }

            .${o} .digiblocks-icon-box-text {
                color: ${O||"inherit"};
                ${mo}
				margin: 0;
                transition: color 0.3s ease;
            }
            
            /* Content hover styles */
            .${o}:hover .digiblocks-icon-box-text {
                ${T?`color: ${T};`:""}
            }
            
            /* Button styles */
            ${Ur}

			/* Visibility Controls */
			${n.desktop?`
				@media (min-width: 992px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${n.tablet?`
				@media (min-width: 768px) and (max-width: 991px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${n.mobile?`
				@media (max-width: 767px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}
        `},Pe=Fe?window.digi.components.FontAwesomeControl:null,Ze=()=>l==="library"&&v&&v.svg&&v.svg.trim()!==""?wp.element.createElement("div",{className:"digiblocks-icon-box-icon"},wp.element.createElement("span",{dangerouslySetInnerHTML:{__html:v.svg}})):l==="custom"&&_&&_.trim()!==""?wp.element.createElement("div",{className:"digiblocks-icon-box-icon"},wp.element.createElement("span",{dangerouslySetInnerHTML:{__html:_}})):!l&&v&&v.svg&&v.svg.trim()!==""?wp.element.createElement("div",{className:"digiblocks-icon-box-icon"},wp.element.createElement("span",{dangerouslySetInnerHTML:{__html:v.svg}})):null,i=()=>!ve||U!=="button"?null:wp.element.createElement("div",{className:"digiblocks-button-wrapper"},wp.element.createElement("a",{className:"digiblocks-button",href:me||"#",target:Te?"_blank":"_self",rel:qe,onClick:W=>W.preventDefault()},wp.element.createElement(hs,{tagName:"span",value:Ve,onChange:W=>e({buttonText:W}),placeholder:we("Button Text","digiblocks")}))),F=W=>W==="normal"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(xt,{title:we("Icon Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:E,onChange:ze=>e({iconColor:ze}),label:we("Icon Color","digiblocks")},{value:f,onChange:ze=>e({iconBackgroundColor:ze}),label:we("Background Color","digiblocks")}]}),wp.element.createElement(wl,{label:we("Border Style","digiblocks"),value:b||"default",options:p,onChange:ze=>{ze!=="default"&&ze!=="none"&&(b==="default"||b==="none"||!b)&&(!D||Object.keys(D).length===0)&&e({iconBorderWidth:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}}),e({iconBorderStyle:ze})},__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),b&&b!=="default"&&b!=="none"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(xt,{title:we("Border Color","digiblocks"),enableAlpha:!0,colorSettings:[{value:We,onChange:ze=>e({iconBorderColor:ze}),label:we("Border Color","digiblocks")}]}),wp.element.createElement(Ho,{label:we("Border Width","digiblocks")},wp.element.createElement(jo,{values:D[ae],onChange:ze=>e({iconBorderWidth:{...D,[ae]:ze}})})),wp.element.createElement(Ho,{label:we("Border Radius","digiblocks")},wp.element.createElement(jo,{values:le[ae],onChange:ze=>e({iconBorderRadius:{...le,[ae]:ze}}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]}))),wp.element.createElement(Ho,{label:we("Padding","digiblocks")},wp.element.createElement(jo,{values:Se[ae],onChange:ze=>e({iconPadding:{...Se,[ae]:ze}})})),wp.element.createElement(Ho,{label:we("Margin","digiblocks")},wp.element.createElement(jo,{values:K[ae],onChange:ze=>e({iconMargin:{...K,[ae]:ze}})}))):W==="hover"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(xt,{title:we("Icon Hover Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:L,onChange:ze=>e({iconHoverColor:ze}),label:we("Icon Color","digiblocks")},{value:oe,onChange:ze=>e({iconHoverBackgroundColor:ze}),label:we("Background Color","digiblocks")},{value:q,onChange:ze=>e({iconHoverBorderColor:ze}),label:we("Border Color","digiblocks")}]})):null,Ue=W=>W==="normal"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(xt,{title:we("Color Settings","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:k,onChange:ze=>e({titleColor:ze}),label:we("Title Color","digiblocks")},{value:O,onChange:ze=>e({textColor:ze}),label:we("Text Color","digiblocks")},{value:V,onChange:ze=>e({backgroundColor:ze}),label:we("Background Color","digiblocks")}]})):W==="hover"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(xt,{title:we("Hover Color Settings","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:B,onChange:ze=>e({titleHoverColor:ze}),label:we("Title Color","digiblocks")},{value:T,onChange:ze=>e({textHoverColor:ze}),label:we("Text Color","digiblocks")},{value:Z,onChange:ze=>e({backgroundHoverColor:ze}),label:we("Background Color","digiblocks")}]})):null,po=W=>W==="normal"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(xt,{title:we("Button Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:j,onChange:ze=>e({buttonTextColor:ze}),label:we("Text Color","digiblocks")},{value:Ee,onChange:ze=>e({buttonBackgroundColor:ze}),label:we("Background Color","digiblocks")}]}),wp.element.createElement(wl,{label:we("Border Style","digiblocks"),value:Je||"default",options:p,onChange:ze=>{ze!=="default"&&ze!=="none"&&(Je==="default"||Je==="none"||!Je)&&(!G||Object.keys(G).length===0)&&e({buttonBorderWidth:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}}),e({buttonBorderStyle:ze})},__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),Je&&Je!=="default"&&Je!=="none"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(xt,{title:we("Border Color","digiblocks"),enableAlpha:!0,colorSettings:[{value:R,onChange:ze=>e({buttonBorderColor:ze}),label:we("Border Color","digiblocks")}]}),wp.element.createElement(Ho,{label:we("Border Width","digiblocks")},wp.element.createElement(jo,{values:G[ae],onChange:ze=>e({buttonBorderWidth:{...G,[ae]:ze}})}))),wp.element.createElement(Ho,{label:we("Border Radius","digiblocks")},wp.element.createElement(jo,{values:pe[ae],onChange:ze=>e({buttonBorderRadius:{...pe,[ae]:ze}}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]})),wp.element.createElement(Ho,{label:we("Padding","digiblocks")},wp.element.createElement(jo,{values:g[ae],onChange:ze=>e({buttonPadding:{...g,[ae]:ze}})})),wp.element.createElement(Ho,{label:we("Margin","digiblocks")},wp.element.createElement(jo,{values:Q[ae],onChange:ze=>e({buttonMargin:{...Q,[ae]:ze}})})),wp.element.createElement(hd,{normalValue:ce,hoverValue:S,onNormalChange:ze=>e({buttonBoxShadow:ze}),onHoverChange:ze=>e({buttonBoxShadowHover:ze})})):W==="hover"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(xt,{title:we("Button Hover Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:ye,onChange:ze=>e({buttonTextHoverColor:ze}),label:we("Text Color","digiblocks")},{value:Oe,onChange:ze=>e({buttonBackgroundHoverColor:ze}),label:we("Background Color","digiblocks")},{value:d,onChange:ze=>e({buttonBorderHoverColor:ze}),label:we("Border Color","digiblocks")}]})):null,z=()=>wp.element.createElement(ys,{label:we("Button Typography","digiblocks"),value:c,onChange:W=>e({buttonTypography:W}),defaults:{fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em"}}),Ke=()=>{switch(a){case"options":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:"components-panel__body is-opened"},wp.element.createElement("div",{style:{marginBottom:"2rem"}},wp.element.createElement(ud,{label:we("Icon Source","digiblocks"),value:l||"library",onChange:W=>e({iconSource:W}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(za,{value:"library",label:we("Library","digiblocks")}),wp.element.createElement(za,{value:"custom",label:we("Custom","digiblocks")})),l==="library"&&wp.element.createElement(wp.element.Fragment,null,Fe?wp.element.createElement(Pe,{label:we("Select Icon","digiblocks"),value:v,onChange:ao}):wp.element.createElement("div",{style:{textAlign:"center",padding:"20px 0"}},wp.element.createElement(vm,null),wp.element.createElement("p",null,we("Loading icon selector...","digiblocks"))),v&&Fe&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{style:{marginTop:"15px",marginBottom:"15px",padding:"10px",background:"#f0f0f1",borderRadius:"3px"}},wp.element.createElement("p",{style:{margin:"0 0 5px 0"}},wp.element.createElement("strong",null,we("Selected Icon:","digiblocks"))," ",v.name),wp.element.createElement("p",{style:{margin:"0 0 5px 0"}},wp.element.createElement("strong",null,we("Style:","digiblocks"))," ",v.style),v.categories&&v.categories.length>0&&wp.element.createElement("p",{style:{margin:"0"}},wp.element.createElement("strong",null,we("Categories:","digiblocks"))," ",v.categories.join(", "))))),l==="custom"&&wp.element.createElement("div",{style:{marginTop:"15px"}},wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"custom-svg-input"},we("Custom SVG Code","digiblocks")),wp.element.createElement("textarea",{id:"custom-svg-input",className:"components-textarea-control__input",value:_||"",onChange:W=>{let ze=W.target.value;e({customSvg:ze,iconValue:{id:"custom-svg",name:"Custom SVG",svg:ze,style:"custom",categories:["custom"]}})},placeholder:we("Paste your SVG code here...","digiblocks"),rows:10,style:{width:"100%",marginTop:"8px"}}),wp.element.createElement("p",{className:"components-base-control__help"},we("Paste your SVG code here. Make sure it only contains valid SVG markup. For security reasons, scripts and external references will be removed.","digiblocks"))),_&&wp.element.createElement("div",{style:{marginTop:"15px",marginBottom:"15px"}},wp.element.createElement("p",null,wp.element.createElement("strong",null,we("Preview:","digiblocks"))),wp.element.createElement("div",{style:{padding:"20px",background:"#f0f0f1",borderRadius:"3px",display:"flex",justifyContent:"center",alignItems:"center"}},wp.element.createElement("div",{className:"digiblocks-custom-svg-preview",style:{width:"50px",height:"50px"},dangerouslySetInnerHTML:{__html:_}}))))),wp.element.createElement(fd,{label:we("Alignment","digiblocks"),value:M,onChange:W=>e({align:W}),options:[{label:we("Left","digiblocks"),value:"flex-start"},{label:we("Center","digiblocks"),value:"center"},{label:we("Right","digiblocks"),value:"flex-end"}]}),wp.element.createElement(fd,{label:we("Icon Layout","digiblocks"),value:N,onChange:W=>e({iconLayout:W}),options:[{label:we("Before","digiblocks"),value:"before"},{label:we("Above","digiblocks"),value:"above"},{label:we("After","digiblocks"),value:"after"}]}),wp.element.createElement($m,{label:we("Gap","digiblocks"),value:m,onChange:W=>e({iconContentGap:W}),units:[{label:"px",value:"px"},{label:"%",value:"%"},{label:"em",value:"em"},{label:"rem",value:"rem"}],defaultUnit:"px",min:0,max:100,step:1,defaultValues:{desktop:20,tablet:15,mobile:10}}),wp.element.createElement(Sl,{label:we("Show Title","digiblocks"),checked:s,onChange:W=>e({showTitle:W}),__nextHasNoMarginBottom:!0}),wp.element.createElement(Sl,{label:we("Show Description","digiblocks"),checked:$,onChange:W=>e({showContent:W}),__nextHasNoMarginBottom:!0}),ve?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(fm,{key:"link-control",value:{url:me,opensInNewTab:Te,rel:qe},settings:[{id:"opensInNewTab",title:we("Open in new tab","digiblocks")},{id:"rel",title:we("Add noopener noreferrer","digiblocks")}],onChange:W=>{e({linkUrl:W.url,linkOpenInNewTab:W.opensInNewTab,linkRel:W.rel})},onRemove:()=>{e({linkEnabled:!1,linkUrl:"",linkOpenInNewTab:!1,linkRel:""})},suggestionsQuery:{type:"post",subtype:"any"},forceIsEditingLink:!me}),wp.element.createElement("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},wp.element.createElement(ud,{label:we("Link Type","digiblocks"),value:U,onChange:W=>e({linkType:W}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(za,{value:"box",label:we("Box","digiblocks")}),wp.element.createElement(za,{value:"button",label:we("Button","digiblocks")}))),U==="button"&&wp.element.createElement(ym,{label:we("Button Text","digiblocks"),value:Ve,onChange:W=>e({buttonText:W}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})):wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("button",{className:"components-button width-full is-primary",onClick:()=>e({linkEnabled:!0})},we("Add Link","digiblocks"))))));case"style":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(dt,{tab:"style",name:"colors",title:we("Colors","digiblocks"),initialOpen:!0},wp.element.createElement(fs,{className:"digiblocks-control-tabs",activeClass:"active-tab",tabs:h},W=>Ue(W.name))),wp.element.createElement(dt,{tab:"style",name:"typo",title:we("Typography","digiblocks"),initialOpen:!1},wp.element.createElement(ys,{label:we("Title Typography","digiblocks"),value:J,onChange:W=>e({titleTypography:W}),defaults:{fontSize:{desktop:24,tablet:22,mobile:20},fontSizeUnit:"px",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em"}}),wp.element.createElement(ys,{label:we("Content Typography","digiblocks"),value:A,onChange:W=>e({contentTypography:W}),defaults:{fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em"}}),ve&&U==="button"&&z()),wp.element.createElement(dt,{tab:"style",name:"icon",title:we("Icon","digiblocks"),initialOpen:!1},wp.element.createElement(Ho,{label:we("Icon Size","digiblocks")},wp.element.createElement(km,{value:ee[ae],onChange:W=>e({iconSize:{...ee,[ae]:W}}),min:16,max:500,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(fs,{className:"digiblocks-control-tabs",activeClass:"active-tab",tabs:h},W=>F(W.name))),wp.element.createElement(dt,{tab:"style",name:"box-style",title:we("Box Style","digiblocks"),initialOpen:!1},wp.element.createElement(wl,{label:we("Border Style","digiblocks"),value:He||"default",options:p,onChange:W=>{W!=="default"&&W!=="none"&&(He==="default"||He==="none"||!He)&&(!be||Object.keys(be).length===0)&&e({borderWidth:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:1,right:1,bottom:1,left:1,unit:"px"},mobile:{top:1,right:1,bottom:1,left:1,unit:"px"}}}),e({borderStyle:W})},__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),He&&He!=="default"&&He!=="none"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(xt,{title:we("Border Color","digiblocks"),enableAlpha:!0,colorSettings:[{value:xe,onChange:W=>e({borderColor:W}),label:we("Border Color","digiblocks")}]}),wp.element.createElement(Ho,{label:we("Border Width","digiblocks")},wp.element.createElement(jo,{values:be&&be[ae]?be[ae]:{top:1,right:1,bottom:1,left:1,unit:"px"},onChange:W=>e({borderWidth:{...be,[ae]:W}})}))),wp.element.createElement(Ho,{label:we("Border Radius","digiblocks")},wp.element.createElement(jo,{values:H&&H[ae]?H[ae]:{top:0,right:0,bottom:0,left:0,unit:"px"},onChange:W=>e({borderRadius:{...H,[ae]:W}}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]})),wp.element.createElement(wl,{label:we("Hover Effect","digiblocks"),value:x,options:De,onChange:W=>e({hoverEffect:W}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),ve&&U==="button"&&wp.element.createElement(dt,{tab:"style",name:"button",title:we("Button","digiblocks"),initialOpen:!1},wp.element.createElement(fs,{className:"digiblocks-control-tabs",activeClass:"active-tab",tabs:h},W=>po(W.name))),wp.element.createElement(dt,{tab:"style",name:"shadow",title:we("Box Shadow","digiblocks"),initialOpen:!1},wp.element.createElement(hd,{normalValue:Y,hoverValue:de,onNormalChange:W=>e({boxShadow:W}),onHoverChange:W=>e({boxShadowHover:W})})),wp.element.createElement(dt,{tab:"style",name:"spacing",title:we("Spacing","digiblocks"),initialOpen:!1},wp.element.createElement(Ho,{label:we("Padding","digiblocks")},wp.element.createElement(jo,{values:re[ae],onChange:W=>e({padding:{...re,[ae]:W}})})),wp.element.createElement(Ho,{label:we("Margin","digiblocks")},wp.element.createElement(jo,{values:se[ae],onChange:W=>e({margin:{...se,[ae]:W}})}))));case"advanced":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(dt,{tab:"advanced",name:"animation",title:we("Animation","digiblocks"),initialOpen:!0},wp.element.createElement(wl,{label:we("Animation Effect","digiblocks"),value:Ce,options:r,onChange:W=>e({animation:W}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),Ce&&Ce!=="none"&&wp.element.createElement("div",{style:{marginTop:"10px"}},wp.element.createElement(xm,{variant:"secondary",isSecondary:!0,onClick:t,style:{width:"100%"}},we("Preview Animation","digiblocks")))),wp.element.createElement(dt,{tab:"advanced",name:"visibility",title:we("Visibility","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control__help",style:{padding:"12px",backgroundColor:"#f0f6fc",border:"1px solid #c3ddfd",borderRadius:"4px",marginBottom:"16px"}},wp.element.createElement("strong",null,we("Editor Note:","digiblocks")),wp.element.createElement("br",null),we("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.","digiblocks")),wp.element.createElement(Sl,{label:we("Hide on Desktop","digiblocks"),checked:n.desktop,onChange:W=>e({visibility:{...n,desktop:W}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(Sl,{label:we("Hide on Tablet","digiblocks"),checked:n.tablet,onChange:W=>e({visibility:{...n,tablet:W}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(Sl,{label:we("Hide on Mobile","digiblocks"),checked:n.mobile,onChange:W=>e({visibility:{...n,mobile:W}}),__nextHasNoMarginBottom:!0})),wp.element.createElement(dt,{tab:"advanced",name:"additional",title:we("Additional","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control html-anchor-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"html-anchor"},we("HTML anchor","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"html-anchor",value:P||"",onChange:W=>e({anchor:W.target.value}),"aria-describedby":"html-anchor-help",autoCapitalize:"none",autoComplete:"off"})),wp.element.createElement("p",{id:"html-anchor-help",className:"components-base-control__help"},we(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`,"digiblocks")," ",wp.element.createElement("a",{className:"components-external-link",href:"https://wordpress.org/documentation/article/page-jumps/",target:"_blank",rel:"external noreferrer noopener"},wp.element.createElement("span",{className:"components-external-link__contents"},we("Learn more about anchors","digiblocks")),wp.element.createElement("span",{className:"components-external-link__icon","aria-label":"(opens in a new tab)"},"\u2197")))),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"additional-css-classes"},we("Additional CSS class(es)","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"additional-css-classes",value:te||"",onChange:W=>e({customClasses:W.target.value}),"aria-describedby":"additional-css-classes-help",autoComplete:"off"})),wp.element.createElement("p",{id:"additional-css-classes-help",className:"components-base-control__help"},we("Separate multiple classes with spaces.","digiblocks")))));default:return null}},ro=mm({className:`digiblocks-icon-box ${o} ${te||""}`,id:P||null});return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(hm,null,wp.element.createElement(Sm,{tabs:oo,activeTab:a,onSelect:ue},Ke())),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:w()}}),wp.element.createElement("div",{...ro},Ze(),wp.element.createElement("div",{className:"digiblocks-icon-box-content"},s&&wp.element.createElement(hs,{tagName:"h3",className:"digiblocks-icon-box-title",value:I,onChange:W=>e({title:W}),placeholder:we("Feature Title","digiblocks")}),$&&wp.element.createElement(hs,{tagName:"p",className:"digiblocks-icon-box-text",value:C,onChange:W=>e({content:W}),placeholder:we("Add your feature description here.","digiblocks")}),i())))},kd=_m;var{useBlockProps:Bm,RichText:Cs}=window.wp.blockEditor,Tm=({attributes:ie})=>{let{id:e,iconSource:X,customSvg:o,iconValue:P,title:n,showTitle:te,showContent:l,content:_,animation:v,hoverEffect:M,anchor:N,customClasses:m,linkEnabled:s,linkType:$,linkUrl:I,linkOpenInNewTab:C,linkRel:k,buttonText:B}=ie,O=["digiblocks-icon-box",e,v!=="none"?`animate-${v}`:"",M!=="none"?`has-hover-${M}`:"",m||""].filter(Boolean).join(" "),T=Bm.save({className:O,id:N||null}),V=()=>X==="library"&&P&&P.svg&&P.svg.trim()!==""?wp.element.createElement("div",{className:"digiblocks-icon-box-icon"},wp.element.createElement("span",{dangerouslySetInnerHTML:{__html:P.svg}})):X==="custom"&&o&&o.trim()!==""?wp.element.createElement("div",{className:"digiblocks-icon-box-icon"},wp.element.createElement("span",{dangerouslySetInnerHTML:{__html:o}})):null,Z=()=>!s||$!=="button"?null:wp.element.createElement("div",{className:"digiblocks-button-wrapper"},wp.element.createElement("a",{className:"digiblocks-button",href:I||"#",target:C?"_blank":"_self",rel:C?k||"noopener noreferrer":k},wp.element.createElement(Cs.Content,{tagName:"span",value:B}))),ee=wp.element.createElement("div",{className:"digiblocks-icon-box-content"},te!==!1&&wp.element.createElement(Cs.Content,{tagName:"h3",className:"digiblocks-icon-box-title",value:n}),l!==!1&&wp.element.createElement(Cs.Content,{tagName:"p",className:"digiblocks-icon-box-text",value:_}),Z());return s&&$==="box"&&I?wp.element.createElement("a",{...T,href:I,target:C?"_blank":"_self",rel:C?k||"noopener noreferrer":k},V(),ee):wp.element.createElement("div",{...T},V(),ee)},vd=Tm;var{__:yt}=window.wp.i18n,{registerBlockType:Nm}=window.wp.blocks,{getBlockActiveStatus:Hm}=window.wp.digiBlocks;Nm("digiblocks/icon-box",{apiVersion:2,title:digiBlocksData.blocks["icon-box"].title,category:"digiblocks",icon:{src:()=>{let{viewbox:ie,path:e}=digiBlocksData.blocks["icon-box"].icon;return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${ie}`,className:"digiblocks-editor-icons"},wp.element.createElement("path",{d:e}))}},description:digiBlocksData.blocks["icon-box"].description,keywords:[yt("icon","digiblocks"),yt("box","digiblocks"),yt("feature","digiblocks"),yt("service","digiblocks")],supports:{inserter:!!Hm("icon-box"),html:!1,className:!1,customClassName:!1,anchor:!1},attributes:{id:{type:"string",default:""},anchor:{type:"string",default:""},visibility:{type:"object",default:{desktop:!1,tablet:!1,mobile:!1}},customClasses:{type:"string",default:""},iconSource:{type:"string",default:"library"},customSvg:{type:"string",default:""},iconValue:{type:"object",default:null},align:{type:"object",default:{desktop:"center",tablet:"center",mobile:"center"}},iconLayout:{type:"object",default:{desktop:"above",tablet:"above",mobile:"above"}},iconContentGap:{type:"object",default:{desktop:{value:20,unit:"px"},tablet:{value:15,unit:"px"},mobile:{value:10,unit:"px"}}},showTitle:{type:"boolean",default:!0},showContent:{type:"boolean",default:!0},title:{type:"string",default:yt("Feature Title","digiblocks")},content:{type:"string",default:yt("Add your feature description here. Explain what makes this feature special.","digiblocks")},iconColor:{type:"string",default:"#1e73be"},titleColor:{type:"string",default:"#333333"},titleHoverColor:{type:"string",default:""},textColor:{type:"string",default:"#666666"},textHoverColor:{type:"string",default:""},backgroundColor:{type:"string",default:"#ffffff"},backgroundHoverColor:{type:"string",default:""},iconBackgroundColor:{type:"string",default:"transparent"},iconBorderStyle:{type:"string",default:"default"},iconBorderWidth:{type:"object",default:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},iconBorderRadius:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},iconBorderColor:{type:"string",default:"#e0e0e0"},iconPadding:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},iconMargin:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},iconHoverColor:{type:"string",default:""},iconHoverBackgroundColor:{type:"string",default:""},iconHoverBorderColor:{type:"string",default:""},linkEnabled:{type:"boolean",default:!1},linkType:{type:"string",default:"box"},linkUrl:{type:"string",default:""},linkOpenInNewTab:{type:"boolean",default:!1},linkRel:{type:"string",default:""},buttonText:{type:"string",default:yt("Learn More","digiblocks")},buttonBackgroundColor:{type:"string",default:"#1e73be"},buttonBackgroundHoverColor:{type:"string",default:"#135e9e"},buttonTextColor:{type:"string",default:"#ffffff"},buttonTextHoverColor:{type:"string",default:"#ffffff"},buttonBorderStyle:{type:"string",default:"default"},buttonBorderWidth:{type:"object",default:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},buttonBorderRadius:{type:"object",default:{desktop:{top:4,right:4,bottom:4,left:4,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},buttonBorderColor:{type:"string",default:""},buttonBorderHoverColor:{type:"string",default:""},buttonBoxShadow:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},buttonBoxShadowHover:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},buttonPadding:{type:"object",default:{desktop:{top:10,right:20,bottom:10,left:20,unit:"px"},tablet:{top:8,right:16,bottom:8,left:16,unit:"px"},mobile:{top:6,right:12,bottom:6,left:12,unit:"px"}}},buttonMargin:{type:"object",default:{desktop:{top:15,right:0,bottom:0,left:0,unit:"px"},tablet:{top:10,right:0,bottom:0,left:0,unit:"px"},mobile:{top:8,right:0,bottom:0,left:0,unit:"px"}}},buttonTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",fontWeight:"500",fontStyle:"normal",textTransform:"",textDecoration:"",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}},iconSize:{type:"object",default:{desktop:48,tablet:40,mobile:32}},titleTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:22,tablet:20,mobile:18},fontSizeUnit:"px",fontWeight:"",fontStyle:"normal",textTransform:"",textDecoration:"",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}},contentTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",fontWeight:"",fontStyle:"normal",textTransform:"",textDecoration:"",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}},padding:{type:"object",default:{desktop:{top:30,right:30,bottom:30,left:30,unit:"px"},tablet:{top:25,right:25,bottom:25,left:25,unit:"px"},mobile:{top:20,right:20,bottom:20,left:20,unit:"px"}}},margin:{type:"object",default:{desktop:{top:0,right:0,bottom:30,left:0,unit:"px"},tablet:{top:0,right:0,bottom:25,left:0,unit:"px"},mobile:{top:0,right:0,bottom:20,left:0,unit:"px"}}},animation:{type:"string",default:"none"},borderStyle:{type:"string",default:"default"},borderRadius:{type:"object",default:{desktop:{top:8,right:8,bottom:8,left:8,unit:"px"},tablet:{top:8,right:8,bottom:8,left:8,unit:"px"},mobile:{top:8,right:8,bottom:8,left:8,unit:"px"}}},borderWidth:{type:"object",default:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:1,right:1,bottom:1,left:1,unit:"px"},mobile:{top:1,right:1,bottom:1,left:1,unit:"px"}}},borderColor:{type:"string",default:"#e0e0e0"},hoverEffect:{type:"string",default:"none"},boxShadow:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},boxShadowHover:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}}},example:{attributes:{iconValue:{id:"star",name:"Star",svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="1em" height="1em"><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"></path></svg>',style:"solid",categories:["design","lifestyle-and-hobbies","social"]},title:yt("Feature Title","digiblocks"),content:yt("Add your feature description here. Explain what makes this feature special.","digiblocks"),iconColor:"#1e73be",backgroundColor:"#ffffff"},viewportWidth:400},edit:kd,save:vd});var{__:Le}=window.wp.i18n,{useBlockProps:zm,RichText:Mm,InspectorControls:Dm,PanelColorSettings:Da,LinkControl:Pm}=window.wp.blockEditor,{SelectControl:ws,RangeControl:Ss,TabPanel:$s,Button:Ct,ToggleControl:_s,Modal:xd,Tooltip:Ii,__experimentalToggleGroupControl:$l,__experimentalToggleGroupControlOption:Jo}=window.wp.components,{useState:ai,useEffect:Bs,useRef:Rm}=window.wp.element,{useBlockId:Im,getDimensionCSS:Pa,animations:Ts,animationPreview:yd}=digi.utils,{tabIcons:Ns}=digi.icons,{ResponsiveControl:ni,DimensionControl:Ra,TypographyControl:Lm,BoxShadowControl:Om,CustomTabPanel:Um,TabPanelBody:wt,FontAwesomeControl:H0}=digi.components,jm=({attributes:ie,setAttributes:e,clientId:X})=>{let{id:o,anchor:P,visibility:n,customClasses:te,items:l,defaultIconSource:_,defaultCustomSvg:v,defaultIcon:M,contentTypography:N,listLayout:m,listAlign:s,iconPosition:$,iconSize:I,iconSpace:C,itemSpace:k,iconColor:B,iconHoverColor:O,textColor:T,textHoverColor:V,animation:Z,padding:ee,margin:E,borderStyle:f,borderWidth:b,borderRadius:D,borderColor:le,borderHoverColor:We,boxShadow:Se,boxShadowHover:K,backgroundColor:L,backgroundHoverColor:oe,hoverEffect:q}=ie;Im(o,X,e);let[J,A]=ai(window.digi.responsiveState.activeDevice),[re,se]=ai(!1),[Ce,Y]=ai(!1),[de,He]=ai(null),[be,H]=ai(!1);Bs(()=>window.digi.responsiveState.subscribe(u=>{A(u)}),[]);let[xe,x]=ai(()=>{if(window.digi.uiState){let y=window.digi.uiState.getActiveTab(X);if(y)return y}return"options"}),[ve,U]=ai(!1);Bs(()=>{let y=()=>window.digi&&window.digi.components&&window.digi.components.FontAwesomeControl?(U(!0),!0):!1;if(!y()){let u=setTimeout(()=>{y()&&clearTimeout(u)},500);return()=>clearTimeout(u)}},[]);let me=Rm(null);Bs(()=>{if(Z&&Z!=="none"){let y=setTimeout(()=>{yd(o,Z,Ts,me)},100);return()=>clearTimeout(y)}},[Z]);let Te=()=>{yd(o,Z,Ts,me)},qe=[{label:Le("Default","digiblocks"),value:"default"},{label:Le("None","digiblocks"),value:"none"},{label:Le("Solid","digiblocks"),value:"solid"},{label:Le("Dotted","digiblocks"),value:"dotted"},{label:Le("Dashed","digiblocks"),value:"dashed"},{label:Le("Double","digiblocks"),value:"double"},{label:Le("Groove","digiblocks"),value:"groove"},{label:Le("Inset","digiblocks"),value:"inset"},{label:Le("Outset","digiblocks"),value:"outset"},{label:Le("Ridge","digiblocks"),value:"ridge"}],Ve=[{label:Le("None","digiblocks"),value:"none"},{label:Le("Lift","digiblocks"),value:"lift"},{label:Le("Scale","digiblocks"),value:"scale"},{label:Le("Glow","digiblocks"),value:"glow"}],Ee=[{label:Le("None","digiblocks"),value:"none"},...Object.keys(Ts).map(y=>({label:y.replace(/-/g," ").replace(/\b\w/g,u=>u.toUpperCase()),value:y}))],Oe=[{name:"options",title:Le("Options","digiblocks"),icon:Ns.optionsIcon},{name:"style",title:Le("Style","digiblocks"),icon:Ns.styleIcon},{name:"advanced",title:Le("Advanced","digiblocks"),icon:Ns.advancedIcon}],j=[{name:"normal",title:Le("Normal","digiblocks"),className:"digiblocks-tab-1 normal"},{name:"hover",title:Le("Hover","digiblocks"),className:"digiblocks-tab-2 hover"}],ye=()=>{let y=[...l];y.push({id:`item-${Date.now()}`,content:Le("New list item","digiblocks"),icon:{...M},linkUrl:"",linkOpenInNewTab:!1,linkRel:""}),e({items:y})},Je=y=>{let u=[...l];u.splice(y,1),e({items:u})},G=(y,u,Ne)=>{let a=[...l];a[y][u]=Ne,e({items:a})},pe=y=>{if(y===0)return;let u=[...l];[u[y-1],u[y]]=[u[y],u[y-1]],e({items:u})},R=y=>{if(y===l.length-1)return;let u=[...l];[u[y],u[y+1]]=[u[y+1],u[y]],e({items:u})},d=y=>{let u=[...l],Ne={...l[y],id:`item-${Date.now()}`};u.splice(y+1,0,Ne),e({items:u})},ce=(y,u)=>{let Ne=[...l];Ne[y].icon=u,e({items:Ne})},S=ve?window.digi.components.FontAwesomeControl:null,g=()=>{let y=window.digi.responsiveState.activeDevice,u="";f&&f!=="default"&&f!=="none"?u=`
                border-style: ${f};
                border-color: ${le||"#e0e0e0"};
				${Pa(b,"border-width",y)}
				${Pa(D,"border-radius",y)}
			`:u="border: none;";let Ne="box-shadow: none;";Se&&Se.enable&&(Ne=`box-shadow: ${Se.position==="inset"?"inset ":""}${Se.horizontal}px ${Se.vertical}px ${Se.blur}px ${Se.spread}px ${Se.color};`);let a=`${Pa(ee,"padding",y)}`,ue=`${Pa(E,"margin",y)}`,Fe="";N&&(N.fontFamily&&(Fe+=`font-family: ${N.fontFamily};`),N.fontSize&&N.fontSize[y]&&(Fe+=`font-size: ${N.fontSize[y]}${N.fontSizeUnit||"px"};`),N.fontWeight&&(Fe+=`font-weight: ${N.fontWeight};`),N.fontStyle&&(Fe+=`font-style: ${N.fontStyle};`),N.textTransform&&(Fe+=`text-transform: ${N.textTransform};`),N.textDecoration&&(Fe+=`text-decoration: ${N.textDecoration};`),N.lineHeight&&N.lineHeight[y]&&(Fe+=`line-height: ${N.lineHeight[y]}${N.lineHeightUnit||"em"};`),N.letterSpacing&&N.letterSpacing[y]&&(Fe+=`letter-spacing: ${N.letterSpacing[y]}${N.letterSpacingUnit||"px"};`));let eo="";if(K&&K.enable){let ao=K.position==="inset"?"inset ":"";eo+=`box-shadow: ${ao}${K.horizontal}px ${K.vertical}px ${K.blur}px ${K.spread}px ${K.color};`}return q==="lift"?eo+="transform: translateY(-10px);":q==="scale"?eo+="transform: scale(1.05);":q==="glow"&&(eo+="filter: brightness(1.1);"),`
            /* Icon List Block - ${o} */
            .${o} {
                ${a}
                ${ue}
                ${u}
                ${Ne}
                ${L?`background-color: ${L};`:""}
                transition: all 0.3s ease;
            }
            
            .${o}:hover {
                ${oe?`background-color: ${oe};`:""}
                ${We?`border-color: ${We};`:""}
                ${eo}
            }
            
            /* List container */
            .${o} .digiblocks-icon-list-wrapper {
                text-align: ${s};
            }
            
            .${o} .digiblocks-icon-list {
                list-style: none;
                margin: 0;
                padding: 0;
                display: flex;
				flex-direction: ${m==="horizontal"?"row":"column"};
				flex-wrap: wrap;
				gap: ${k[y]!==void 0?k[y]:16}px;
            }
            
            /* List item */
            .${o} .digiblocks-icon-list-item {
                display: inline-flex;
                align-items: center;
				gap: ${C[y]!==void 0?C[y]:12}px;
				justify-content: ${s==="center"?"center":s==="right"?"flex-end":"flex-start"};
                transition: all 0.3s ease;
            }
            
            .${o} .digiblocks-icon-list-item:last-child {
                margin-bottom: 0;
            }
            
            /* Icon */
            .${o} .digiblocks-icon-list-icon {
                flex-shrink: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                color: ${B||"#1e73be"};
                transition: color 0.3s ease;
            }
            
            .${o} .digiblocks-icon-list-icon span {
                display: flex;
            }
            
            .${o} .digiblocks-icon-list-icon svg {
                width: ${I[y]!==void 0?I[y]:24}px;
                height: ${I[y]!==void 0?I[y]:24}px;
                fill: currentColor;
            }
            
            /* Text content */
            .${o} .digiblocks-icon-list-content {
                color: ${T||"#333333"};
                ${Fe}
                transition: color 0.3s ease;
            }
            
            /* Hover states */
            .${o} .digiblocks-icon-list-item:hover .digiblocks-icon-list-icon {
                color: ${O};
            }
            
            .${o} .digiblocks-icon-list-item:hover .digiblocks-icon-list-content {
                color: ${V};
            }

            .${o} .digiblocks-icon-list-child {
                display: inline-flex;
                ${$==="after"?"flex-direction: row-reverse;":""}
				gap: ${C[y]!==void 0?C[y]:12}px;
                align-items: center;
            }
            
            /* Link cursor for clickable items */
            .${o} .digiblocks-icon-list-item a {
                cursor: pointer;
                text-decoration: none;
                color: inherit;
            }
            
            /* Editor specific styles */
            .digiblocks-icon-list-item-controls {
                display: flex;
                gap: 5px;
                position: absolute;
                right: 0;
                top: 0;
                background-color: #fff;
                padding: 2px;
                border-radius: 3px;
                box-shadow: 0 1px 3px rgba(0,0,0,0.12);
                z-index: 10;
                opacity: 0;
                transition: opacity 0.3s ease;
            }
            
            .${o} .digiblocks-icon-list-item {
                position: relative;
            }
            
            .${o} .digiblocks-icon-list-item:hover .digiblocks-icon-list-item-controls {
                opacity: 1;
            }

			/* Visibility Controls */
			${n.desktop?`
				@media (min-width: 992px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${n.tablet?`
				@media (min-width: 768px) and (max-width: 991px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${n.mobile?`
				@media (max-width: 767px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}
        `},Q=()=>{switch(xe){case"options":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(wt,{tab:"options",name:"list-items",title:Le("List Items","digiblocks"),initialOpen:!0},wp.element.createElement($l,{label:Le("Default Icon Source","digiblocks"),value:_||"library",onChange:y=>e({defaultIconSource:y}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(Jo,{value:"library",label:Le("Library","digiblocks")}),wp.element.createElement(Jo,{value:"custom",label:Le("Custom","digiblocks")})),(!_||_==="library")&&wp.element.createElement(wp.element.Fragment,null,ve?wp.element.createElement(S,{label:Le("Select Icon","digiblocks"),value:M,onChange:y=>e({defaultIcon:y})}):wp.element.createElement("div",{style:{textAlign:"center",padding:"20px 0"}},wp.element.createElement("div",{className:"components-spinner"}),wp.element.createElement("p",null,Le("Loading icon selector...","digiblocks")))),_==="custom"&&wp.element.createElement("div",{style:{marginTop:"15px"}},wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"default-custom-svg-input"},Le("Custom SVG Code","digiblocks")),wp.element.createElement("textarea",{id:"default-custom-svg-input",className:"components-textarea-control__input",value:v||"",onChange:y=>{let u=y.target.value;e({defaultCustomSvg:u,defaultIcon:{id:"custom-svg",name:"Custom SVG",svg:u,style:"custom",categories:["custom"]}})},placeholder:Le("Paste your SVG code here...","digiblocks"),rows:6,style:{width:"100%",marginTop:"8px"}}),wp.element.createElement("p",{className:"components-base-control__help"},Le("Paste your SVG code here. Make sure it only contains valid SVG markup.","digiblocks"))),v&&wp.element.createElement("div",{style:{marginTop:"15px",marginBottom:"15px"}},wp.element.createElement("p",null,wp.element.createElement("strong",null,Le("Preview:","digiblocks"))),wp.element.createElement("div",{style:{padding:"20px",background:"#f0f0f1",borderRadius:"3px",display:"flex",justifyContent:"center",alignItems:"center"}},wp.element.createElement("div",{style:{width:"50px",height:"50px"},dangerouslySetInnerHTML:{__html:v}})))),wp.element.createElement($l,{label:Le("List Layout","digiblocks"),value:m,onChange:y=>e({listLayout:y}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(Jo,{value:"horizontal",label:Le("Horizontal","digiblocks")}),wp.element.createElement(Jo,{value:"vertical",label:Le("Vertical","digiblocks")})),wp.element.createElement($l,{label:Le("List Alignment","digiblocks"),value:s,onChange:y=>e({listAlign:y}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(Jo,{value:"left",label:Le("Left","digiblocks")}),wp.element.createElement(Jo,{value:"center",label:Le("Center","digiblocks")}),wp.element.createElement(Jo,{value:"right",label:Le("Right","digiblocks")})),wp.element.createElement($l,{label:Le("Icon Position","digiblocks"),value:$,onChange:y=>e({iconPosition:y}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(Jo,{value:"before",label:Le("Before","digiblocks")}),wp.element.createElement(Jo,{value:"after",label:Le("After","digiblocks")})),wp.element.createElement(ni,{label:Le("Item Spacing","digiblocks")},wp.element.createElement(Ss,{value:k[J],onChange:y=>e({itemSpace:{...k,[J]:y}}),min:0,max:100,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(ni,{label:Le("Icon Spacing","digiblocks")},wp.element.createElement(Ss,{value:C[J],onChange:y=>e({iconSpace:{...C,[J]:y}}),min:0,max:50,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}))));case"style":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(wt,{tab:"style",name:"icon-style",title:Le("Icon Style","digiblocks"),initialOpen:!0},wp.element.createElement(ni,{label:Le("Icon Size","digiblocks")},wp.element.createElement(Ss,{value:I[J],onChange:y=>e({iconSize:{...I,[J]:y}}),min:8,max:100,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement($s,{className:"digiblocks-control-tabs",activeClass:"active-tab",tabs:j},y=>wp.element.createElement(Da,{title:y.name==="normal"?Le("Icon Colors","digiblocks"):Le("Icon Hover Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:y.name==="normal"?B:O,onChange:u=>e(y.name==="normal"?{iconColor:u}:{iconHoverColor:u}),label:Le("Icon Color","digiblocks")}]}))),wp.element.createElement(wt,{tab:"style",name:"text-style",title:Le("Text Style","digiblocks"),initialOpen:!1},wp.element.createElement($s,{className:"digiblocks-control-tabs",activeClass:"active-tab",tabs:j},y=>wp.element.createElement(Da,{title:y.name==="normal"?Le("Text Colors","digiblocks"):Le("Text Hover Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:y.name==="normal"?T:V,onChange:u=>e(y.name==="normal"?{textColor:u}:{textHoverColor:u}),label:Le("Text Color","digiblocks")}]})),wp.element.createElement(Lm,{label:Le("Typography","digiblocks"),value:N,onChange:y=>e({contentTypography:y}),defaults:{fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em"}})),wp.element.createElement(wt,{tab:"style",name:"box-style",title:Le("Box Style","digiblocks"),initialOpen:!1},wp.element.createElement(ws,{label:Le("Border Style","digiblocks"),value:f||"default",options:qe,onChange:y=>{e({borderStyle:y})},__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),f&&f!=="default"&&f!=="none"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Da,{title:Le("Border Colors","digiblocks"),enableAlpha:!0,colorSettings:[{value:le,onChange:y=>e({borderColor:y}),label:Le("Border Color","digiblocks")},{value:We,onChange:y=>e({borderHoverColor:y}),label:Le("Border Hover Color","digiblocks")}]}),wp.element.createElement(ni,{label:Le("Border Width","digiblocks")},wp.element.createElement(Ra,{values:b[J],onChange:y=>e({borderWidth:{...b,[J]:y}})})),wp.element.createElement(ni,{label:Le("Border Radius","digiblocks")},wp.element.createElement(Ra,{values:D[J],onChange:y=>e({borderRadius:{...D,[J]:y}}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]}))),wp.element.createElement($s,{className:"digiblocks-control-tabs",activeClass:"active-tab",tabs:j},y=>wp.element.createElement(Da,{title:y.name==="normal"?Le("Background Colors","digiblocks"):Le("Background Hover Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:y.name==="normal"?L:oe,onChange:u=>e(y.name==="normal"?{backgroundColor:u}:{backgroundHoverColor:u}),label:Le("Background Color","digiblocks")}]})),wp.element.createElement(ws,{label:Le("Hover Effect","digiblocks"),value:q,options:Ve,onChange:y=>e({hoverEffect:y}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(wt,{tab:"style",name:"shadow",title:Le("Box Shadow","digiblocks"),initialOpen:!1},wp.element.createElement(Om,{normalValue:Se,hoverValue:K,onNormalChange:y=>e({boxShadow:y}),onHoverChange:y=>e({boxShadowHover:y})})),wp.element.createElement(wt,{tab:"style",name:"spacing",title:Le("Spacing","digiblocks"),initialOpen:!1},wp.element.createElement(ni,{label:Le("Padding","digiblocks")},wp.element.createElement(Ra,{values:ee[J],onChange:y=>e({padding:{...ee,[J]:y}})})),wp.element.createElement(ni,{label:Le("Margin","digiblocks")},wp.element.createElement(Ra,{values:E[J],onChange:y=>e({margin:{...E,[J]:y}})}))));case"advanced":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(wt,{tab:"advanced",name:"animation",title:Le("Animation","digiblocks"),initialOpen:!0},wp.element.createElement(ws,{label:Le("Animation Effect","digiblocks"),value:Z,options:Ee,onChange:y=>e({animation:y}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),Z&&Z!=="none"&&wp.element.createElement("div",{style:{marginTop:"10px"}},wp.element.createElement(Ct,{variant:"secondary",isSecondary:!0,onClick:Te,style:{width:"100%"}},Le("Preview Animation","digiblocks")))),wp.element.createElement(wt,{tab:"advanced",name:"visibility",title:Le("Visibility","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control__help",style:{padding:"12px",backgroundColor:"#f0f6fc",border:"1px solid #c3ddfd",borderRadius:"4px",marginBottom:"16px"}},wp.element.createElement("strong",null,Le("Editor Note:","digiblocks")),wp.element.createElement("br",null),Le("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.","digiblocks")),wp.element.createElement(_s,{label:Le("Hide on Desktop","digiblocks"),checked:n.desktop,onChange:y=>e({visibility:{...n,desktop:y}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(_s,{label:Le("Hide on Tablet","digiblocks"),checked:n.tablet,onChange:y=>e({visibility:{...n,tablet:y}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(_s,{label:Le("Hide on Mobile","digiblocks"),checked:n.mobile,onChange:y=>e({visibility:{...n,mobile:y}}),__nextHasNoMarginBottom:!0})),wp.element.createElement(wt,{tab:"advanced",name:"additional",title:Le("Additional","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control html-anchor-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"html-anchor"},Le("HTML anchor","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"html-anchor",value:P||"",onChange:y=>e({anchor:y.target.value}),"aria-describedby":"html-anchor-help",autoCapitalize:"none",autoComplete:"off"})),wp.element.createElement("p",{id:"html-anchor-help",className:"components-base-control__help"},Le(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`,"digiblocks"))),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"additional-css-classes"},Le("Additional CSS class(es)","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"additional-css-classes",value:te||"",onChange:y=>e({customClasses:y.target.value}),"aria-describedby":"additional-css-classes-help",autoComplete:"off"})),wp.element.createElement("p",{id:"additional-css-classes-help",className:"components-base-control__help"},Le("Separate multiple classes with spaces.","digiblocks")))));default:return null}},c=()=>l.map((y,u)=>{let Ne=u===l.length-1,a=wp.element.createElement(wp.element.Fragment,null,y.icon&&y.icon.svg&&wp.element.createElement("div",{className:"digiblocks-icon-list-icon"},wp.element.createElement("span",{dangerouslySetInnerHTML:{__html:y.icon.svg}})),wp.element.createElement(Mm,{className:"digiblocks-icon-list-content",value:y.content,onChange:ue=>G(u,"content",ue),placeholder:Le("Enter list item text...","digiblocks"),allowedFormats:["core/bold","core/italic","core/inline-code"]}));return wp.element.createElement("li",{key:y.id,className:"digiblocks-icon-list-item",style:Ne?{marginBottom:0}:{}},y.linkUrl?wp.element.createElement("a",{href:"#",onClick:ue=>ue.preventDefault(),className:"digiblocks-icon-list-child"},a):wp.element.createElement("div",{className:"digiblocks-icon-list-child"},a),wp.element.createElement("div",{className:"digiblocks-icon-list-item-controls"},wp.element.createElement(Ii,{text:Le("Edit Icon","digiblocks")},wp.element.createElement(Ct,{icon:"admin-customizer",onClick:()=>{He(u),se(!0)},isSmall:!0})),wp.element.createElement(Ii,{text:Le("Link","digiblocks")},wp.element.createElement(Ct,{icon:"admin-links",onClick:()=>{He(u),Y(!0)},isSmall:!0,variant:y.linkUrl?"primary":"secondary"})),wp.element.createElement(Ii,{text:Le("Move Up","digiblocks")},wp.element.createElement(Ct,{icon:"arrow-up-alt2",onClick:()=>pe(u),disabled:u===0,isSmall:!0})),wp.element.createElement(Ii,{text:Le("Move Down","digiblocks")},wp.element.createElement(Ct,{icon:"arrow-down-alt2",onClick:()=>R(u),disabled:u===l.length-1,isSmall:!0})),wp.element.createElement(Ii,{text:Le("Duplicate","digiblocks")},wp.element.createElement(Ct,{icon:"admin-page",onClick:()=>d(u),isSmall:!0})),wp.element.createElement(Ii,{text:Le("Remove","digiblocks")},wp.element.createElement(Ct,{icon:"trash",onClick:()=>Je(u),isSmall:!0}))))}),ae=zm({className:`digiblocks-icon-list-block ${o} ${te||""}`,id:P||null});return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Dm,null,wp.element.createElement(Um,{tabs:Oe,activeTab:xe,onSelect:x},Q())),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:g()}}),wp.element.createElement("div",{...ae},wp.element.createElement("div",{className:"digiblocks-icon-list-wrapper"},wp.element.createElement("ul",{className:"digiblocks-icon-list"},c())),re&&de!==null&&wp.element.createElement(xd,{title:Le("Choose Icon","digiblocks"),onRequestClose:()=>se(!1),className:"digiblocks-icon-modal"},wp.element.createElement($l,{label:Le("Icon Source","digiblocks"),value:l[de].iconSource||"library",onChange:y=>{let u=[...l];u[de].iconSource=y,e({items:u})},isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(Jo,{value:"library",label:Le("Library","digiblocks")}),wp.element.createElement(Jo,{value:"custom",label:Le("Custom","digiblocks")})),(!l[de].iconSource||l[de].iconSource==="library")&&wp.element.createElement(wp.element.Fragment,null,ve?wp.element.createElement(S,{value:l[de].icon,onChange:y=>{ce(de,y),se(!1)}}):wp.element.createElement("div",{style:{textAlign:"center",padding:"20px 0"}},wp.element.createElement("div",{className:"components-spinner"}),wp.element.createElement("p",null,Le("Loading icon selector...","digiblocks")))),l[de].iconSource==="custom"&&wp.element.createElement("div",{style:{marginTop:"15px"}},wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"custom-svg-input"},Le("Custom SVG Code","digiblocks")),wp.element.createElement("textarea",{id:"custom-svg-input",className:"components-textarea-control__input",value:l[de].customSvg||"",onChange:y=>{let u=y.target.value,Ne=[...l],a={id:"custom-svg",name:"Custom SVG",svg:u,style:"custom",categories:["custom"]};Ne[de].customSvg=u,Ne[de].icon=a,e({items:Ne})},placeholder:Le("Paste your SVG code here...","digiblocks"),rows:6,style:{width:"100%",marginTop:"8px"}}),wp.element.createElement("p",{className:"components-base-control__help"},Le("Paste your SVG code here. Make sure it only contains valid SVG markup.","digiblocks"))),l[de].customSvg&&wp.element.createElement("div",{style:{marginTop:"15px",marginBottom:"15px"}},wp.element.createElement("p",null,wp.element.createElement("strong",null,Le("Preview:","digiblocks"))),wp.element.createElement("div",{style:{padding:"20px",background:"#f0f0f1",borderRadius:"3px",display:"flex",justifyContent:"center",alignItems:"center"}},wp.element.createElement("div",{style:{width:"50px",height:"50px"},dangerouslySetInnerHTML:{__html:l[de].customSvg}}))),wp.element.createElement("div",{style:{marginTop:"15px",display:"flex",justifyContent:"flex-end"}},wp.element.createElement(Ct,{variant:"primary",onClick:()=>se(!1)},Le("Apply","digiblocks"))))),Ce&&de!==null&&wp.element.createElement(xd,{title:Le("Link Settings","digiblocks"),onRequestClose:()=>Y(!1),className:"digiblocks-link-modal"},wp.element.createElement(Pm,{value:l[de].linkUrl?{url:l[de].linkUrl,opensInNewTab:l[de].linkOpenInNewTab,rel:l[de].linkRel}:void 0,settings:[{id:"opensInNewTab",title:Le("Open in new tab","digiblocks")},{id:"rel",title:Le("Add nofollow","digiblocks")}],onChange:y=>{y&&y.url&&(G(de,"linkUrl",y.url),G(de,"linkOpenInNewTab",!!y.opensInNewTab),G(de,"linkRel",y.rel||""),Y(!1))},onRemove:()=>{G(de,"linkUrl",""),G(de,"linkOpenInNewTab",!1),G(de,"linkRel",""),Y(!1)},forceIsEditingLink:!l[de].linkUrl,allowDirectEntry:!0,suggestionsQuery:{type:"post",subtype:"any"}})),wp.element.createElement(Ct,{variant:"primary",icon:"plus",onClick:ye,style:{marginTop:"20px",width:"100%",justifyContent:"center"}},Le("Add Icon List Item","digiblocks"))))},Cd=jm;var{useBlockProps:Vm,RichText:Fm}=window.wp.blockEditor,Em=({attributes:ie})=>{let{id:e,anchor:X,customClasses:o,items:P,animation:n,hoverEffect:te,listLayout:l,listAlign:_,iconPosition:v}=ie,M=["digiblocks-icon-list-block",e,n!=="none"?`animate-${n}`:"",te!=="none"?`has-hover-${te}`:"",o||""].filter(Boolean).join(" "),N=Vm.save({className:M,id:X||null}),m=()=>P.map(s=>{let I=wp.element.createElement(wp.element.Fragment,null,(!s.iconSource||s.iconSource==="library")&&s.icon&&s.icon.svg&&s.icon.svg.trim()!==""?wp.element.createElement("div",{className:"digiblocks-icon-list-icon"},wp.element.createElement("span",{dangerouslySetInnerHTML:{__html:s.icon.svg}})):s.iconSource==="custom"&&s.customSvg&&s.customSvg.trim()!==""?wp.element.createElement("div",{className:"digiblocks-icon-list-icon"},wp.element.createElement("span",{dangerouslySetInnerHTML:{__html:s.customSvg}})):null,wp.element.createElement("div",{className:"digiblocks-icon-list-content"},wp.element.createElement(Fm.Content,{value:s.content})));if(s.linkUrl){let C=s.linkRel||"";if(s.linkOpenInNewTab){let k=C.split(" ").filter(Boolean);k.includes("noopener")||k.push("noopener"),k.includes("noreferrer")||k.push("noreferrer"),C=k.join(" ")}return wp.element.createElement("li",{key:s.id,className:"digiblocks-icon-list-item"},wp.element.createElement("a",{className:"digiblocks-icon-list-child",href:s.linkUrl,target:s.linkOpenInNewTab?"_blank":"_self",rel:C||void 0},I))}return wp.element.createElement("li",{key:s.id,className:"digiblocks-icon-list-item"},wp.element.createElement("div",{className:"digiblocks-icon-list-child"},I))});return wp.element.createElement("div",{...N},wp.element.createElement("div",{className:"digiblocks-icon-list-wrapper"},wp.element.createElement("ul",{className:`digiblocks-icon-list ${v==="after"?"icon-position-after":"icon-position-before"}`},m())))},wd=Em;var{__:Yo}=window.wp.i18n,{registerBlockType:Wm}=window.wp.blocks,{getBlockActiveStatus:qm}=window.wp.digiBlocks;Wm("digiblocks/icon-list",{apiVersion:2,title:digiBlocksData.blocks["icon-list"].title,category:"digiblocks",icon:{src:()=>{let{viewbox:ie,path:e}=digiBlocksData.blocks["icon-list"].icon;return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${ie}`,className:"digiblocks-editor-icons"},wp.element.createElement("path",{d:e}))}},description:digiBlocksData.blocks["icon-list"].description,keywords:[Yo("icon","digiblocks"),Yo("list","digiblocks"),Yo("menu","digiblocks"),Yo("feature","digiblocks"),Yo("service","digiblocks")],supports:{inserter:!!qm("icon-list"),html:!1,className:!1,customClassName:!1,anchor:!1},attributes:{id:{type:"string",default:""},anchor:{type:"string",default:""},visibility:{type:"object",default:{desktop:!1,tablet:!1,mobile:!1}},customClasses:{type:"string",default:""},defaultIconSource:{type:"string",default:"library"},defaultCustomSvg:{type:"string",default:""},items:{type:"array",default:[{id:"item-1",content:Yo("First list item with icon","digiblocks"),iconSource:"library",icon:{id:"check",name:"Check",svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em"><path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>',style:"solid",categories:["design"]},customSvg:"",linkEnabled:!1,linkUrl:"",linkOpenInNewTab:!1,linkRel:""},{id:"item-2",content:Yo("Second list item with star icon","digiblocks"),iconSource:"library",icon:{id:"star",name:"Star",svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="1em" height="1em"><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"/></svg>',style:"solid",categories:["design"]},customSvg:"",linkUrl:"",linkOpenInNewTab:!1,linkRel:""},{id:"item-3",content:Yo("Third list item with heart icon","digiblocks"),iconSource:"library",icon:{id:"heart",name:"Heart",svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>',style:"solid",categories:["design"]},customSvg:"",linkUrl:"",linkOpenInNewTab:!1,linkRel:""}]},defaultIcon:{type:"object",default:{id:"check",name:"Check",svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em"><path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>',style:"solid",categories:["design"]}},contentTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",fontWeight:"",fontStyle:"normal",textTransform:"",textDecoration:"",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}},listLayout:{type:"string",default:"vertical"},listAlign:{type:"string",default:"left"},iconPosition:{type:"string",default:"before"},iconSize:{type:"object",default:{desktop:24,tablet:20,mobile:18}},iconSpace:{type:"object",default:{desktop:12,tablet:10,mobile:8}},itemSpace:{type:"object",default:{desktop:16,tablet:12,mobile:8}},iconColor:{type:"string",default:"#1e73be"},iconHoverColor:{type:"string",default:""},textColor:{type:"string",default:"#333333"},textHoverColor:{type:"string",default:""},animation:{type:"string",default:"none"},padding:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},margin:{type:"object",default:{desktop:{top:0,right:0,bottom:30,left:0,unit:"px"},tablet:{top:0,right:0,bottom:25,left:0,unit:"px"},mobile:{top:0,right:0,bottom:20,left:0,unit:"px"}}},borderStyle:{type:"string",default:"none"},borderWidth:{type:"object",default:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderRadius:{type:"object",default:{desktop:{top:8,right:8,bottom:8,left:8,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderColor:{type:"string",default:"#e0e0e0"},borderHoverColor:{type:"string",default:""},boxShadow:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},boxShadowHover:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},backgroundColor:{type:"string",default:""},backgroundHoverColor:{type:"string",default:""},hoverEffect:{type:"string",default:"none"}},example:{attributes:{items:[{id:"item-1",content:Yo("Professional feature","digiblocks"),icon:{id:"star",name:"Star",svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="1em" height="1em"><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"/></svg>',style:"solid",categories:["design"]}},{id:"item-2",content:Yo("24/7 support service","digiblocks"),icon:{id:"headset",name:"Headset",svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em"><path d="M256 48C141.1 48 48 141.1 48 256v40c0 13.3-10.7 24-24 24s-24-10.7-24-24V256C0 114.6 114.6 0 256 0S512 114.6 512 256V400.1c0 48.6-39.4 88-88.1 88L313.6 488c-8.3 14.3-23.8 24-41.6 24H240c-26.5 0-48-21.5-48-48s21.5-48 48-48h32c17.8 0 33.3 9.7 41.6 24l110.4 .1c22.1 0 40-17.9 40-40V256c0-114.9-93.1-208-208-208zM144 208h16c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H144c-35.3 0-64-28.7-64-64V272c0-35.3 28.7-64 64-64zm224 0c35.3 0 64 28.7 64 64v48c0 35.3-28.7 64-64 64H352c-17.7 0-32-14.3-32-32V240c0-17.7 14.3-32 32-32h16z"/></svg>',style:"solid",categories:["business","technology"]}},{id:"item-3",content:Yo("Free updates and documentation","digiblocks"),icon:{id:"download",name:"Download",svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em"><path d="M256 0c17.7 0 32 14.3 32 32V242.7l73.4-73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-128 128c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 242.7V32c0-17.7 14.3-32 32-32zM48 384c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H464c17.7 0 32-14.3 32-32V416c0-17.7-14.3-32-32-32H304 208 48zm272 80c0-8.8-7.2-16-16-16s-16 7.2-16 16s7.2 16 16 16s16-7.2 16-16zm80 0c0-8.8-7.2-16-16-16s-16 7.2-16 16s7.2 16 16 16s16-7.2 16-16z"/></svg>',style:"solid",categories:["arrows","technology"]}}],iconColor:"#1e73be",textColor:"#333333"},viewportWidth:800},edit:Cd,save:wd});var{__:Ie}=window.wp.i18n,{useBlockProps:Gm,InspectorControls:Qm,RichText:R0,MediaUpload:Hs,MediaUploadCheck:Sd,LinkControl:Jm,PanelColorSettings:zs}=window.wp.blockEditor,{TabPanel:Ym,Notice:Zm,SelectControl:_l,ToggleControl:Bl,Button:Vo,RangeControl:$d,__experimentalUnitControl:I0,__experimentalToggleGroupControl:Ms,__experimentalToggleGroupControlOption:Tl,Spinner:_d,Placeholder:Km,TextControl:Bd,PanelRow:Td,Modal:Xm}=window.wp.components,{useState:Zo,useEffect:Ia,useRef:Nd,useCallback:Am}=window.wp.element,{useBlockId:eh,getDimensionCSS:La,animations:Ds,animationPreview:Hd}=digi.utils,{tabIcons:Ps}=digi.icons,{ResponsiveControl:Oa,DimensionControl:Ua,TypographyControl:L0,BoxShadowControl:oh,CustomTabPanel:th,TabPanelBody:St}=digi.components,ih=({attributes:ie,setAttributes:e,clientId:X})=>{let{id:o,anchor:P,visibility:n,customClasses:te,imageId:l,imageUrl:_,altText:v,title:M,caption:N,width:m,widthUnit:s,height:$,heightUnit:I,sizeSlug:C,align:k,alignTablet:B,alignMobile:O,objectFit:T,borderStyle:V,borderWidth:Z,borderRadius:ee,borderColor:E,borderHoverColor:f,boxShadow:b,boxShadowHover:D,padding:le,margin:We,url:Se,opensInNewTab:K,rel:L,animation:oe,hoverEffect:q,overlayEnable:J,overlayColor:A,overlayHoverOnly:re}=ie;eh(o,X,e);let[se,Ce]=Zo(window.digi.responsiveState.activeDevice),[Y,de]=Zo(!1),[He,be]=Zo(!1),[H,xe]=Zo(!1),[x,ve]=Zo(""),[U,me]=Zo([]),[Te,qe]=Zo(!1),[Ve,Ee]=Zo(1),[Oe,j]=Zo(!1),[ye,Je]=Zo(!1),G=Nd(null);Ia(()=>window.digi.responsiveState.subscribe(Pe=>{Ce(Pe)}),[]);let[pe,R]=Zo(()=>{if(window.digi.uiState){let w=window.digi.uiState.getActiveTab(X);if(w)return w}return"options"});Ia(()=>{if(l&&C){let w=window.wp.media.attachment(l);w.get("url")?d(w):w.fetch().then(()=>{d(w)})}},[C,l]);let d=w=>{let Pe=w.get("url"),Ze=w.get("sizes");Ze&&Ze[C]&&(Pe=Ze[C].url),e({imageUrl:Pe})},ce=Nd(null);Ia(()=>{if(oe&&oe!=="none"){let w=setTimeout(()=>{Hd(o,oe,Ds,ce)},100);return()=>clearTimeout(w)}},[oe]);let S=()=>{Hd(o,oe,Ds,ce)},g=Am((w,Pe=1)=>{G.current&&clearTimeout(G.current),G.current=setTimeout(()=>{w.trim()?Q(w,Pe):(me([]),j(!1))},500)},[]);Ia(()=>(H&&x&&g(x,1),()=>{G.current&&clearTimeout(G.current)}),[x,H,g]);let Q=(w,Pe=1)=>{if(!w.trim())return;qe(!0);let Ze=new FormData;Ze.append("action","digiblocks_search_images"),Ze.append("query",w),Ze.append("page",Pe),Ze.append("per_page",20),Ze.append("nonce",digiBlocksData.image_search_nonce||""),fetch(digiBlocksData.ajax_url,{method:"POST",body:Ze}).then(i=>i.json()).then(i=>{qe(!1),i.success?(me(Pe===1?i.data.images:F=>[...F,...i.data.images]),j(i.data.images.length===20),Ee(Pe)):(console.error("Search error:",i.data),alert(Ie("Search failed. Please check your API configuration.","digiblocks")))}).catch(i=>{qe(!1),console.error("Search error:",i),alert(Ie("Search failed. Please try again.","digiblocks"))})},c=w=>{Je(!0);let Pe=new FormData;Pe.append("action","digiblocks_download_image"),Pe.append("image_data",JSON.stringify(w)),Pe.append("nonce",digiBlocksData.image_search_nonce||""),fetch(digiBlocksData.ajax_url,{method:"POST",body:Pe}).then(Ze=>Ze.json()).then(Ze=>{if(Je(!1),Ze.success){let i=Ze.data;e({imageUrl:i.url,imageId:i.id,altText:i.alt||"",title:i.title||""}),xe(!1),ve(""),me([]),Ee(1),j(!1)}else console.error("Download error:",Ze.data),alert(Ie("Failed to download image. Please try again.","digiblocks"))}).catch(Ze=>{Je(!1),console.error("Download error:",Ze),alert(Ie("Failed to download image. Please try again.","digiblocks"))})},ae=()=>{!Te&&Oe&&Q(x,Ve+1)},y=digiBlocksData&&digiBlocksData.image_search_available,u=[{label:Ie("None","digiblocks"),value:"none"},{label:Ie("Solid","digiblocks"),value:"solid"},{label:Ie("Dotted","digiblocks"),value:"dotted"},{label:Ie("Dashed","digiblocks"),value:"dashed"},{label:Ie("Double","digiblocks"),value:"double"},{label:Ie("Groove","digiblocks"),value:"groove"},{label:Ie("Inset","digiblocks"),value:"inset"},{label:Ie("Outset","digiblocks"),value:"outset"},{label:Ie("Ridge","digiblocks"),value:"ridge"}],Ne=[{label:Ie("None","digiblocks"),value:"none"},{label:Ie("Zoom In","digiblocks"),value:"zoom-in"},{label:Ie("Zoom Out","digiblocks"),value:"zoom-out"},{label:Ie("Grayscale to Color","digiblocks"),value:"grayscale"},{label:Ie("Blur to Clear","digiblocks"),value:"blur"},{label:Ie("Rotate","digiblocks"),value:"rotate"},{label:Ie("Glow","digiblocks"),value:"glow"}],a=[{label:Ie("Cover","digiblocks"),value:"cover"},{label:Ie("Contain","digiblocks"),value:"contain"},{label:Ie("Fill","digiblocks"),value:"fill"},{label:Ie("None","digiblocks"),value:"none"}],ue=[{label:Ie("None","digiblocks"),value:"none"},...Object.keys(Ds).map(w=>({label:w.replace(/-/g," ").replace(/\b\w/g,Pe=>Pe.toUpperCase()),value:w}))],Fe=[{label:Ie("Thumbnail","digiblocks"),value:"thumbnail"},{label:Ie("Medium","digiblocks"),value:"medium"},{label:Ie("Large","digiblocks"),value:"large"},{label:Ie("Full Size","digiblocks"),value:"full"}],eo=[{name:"options",title:Ie("Options","digiblocks"),icon:Ps.optionsIcon},{name:"style",title:Ie("Style","digiblocks"),icon:Ps.styleIcon},{name:"advanced",title:Ie("Advanced","digiblocks"),icon:Ps.advancedIcon}],ao=[{name:"normal",title:Ie("Normal","digiblocks"),className:"digiblocks-tab-1 normal"},{name:"hover",title:Ie("Hover","digiblocks"),className:"digiblocks-tab-2 hover"}],go=[{label:"px",value:"px"},{label:"%",value:"%"},{label:"vw",value:"vw"}],t=[{label:"px",value:"px"},{label:"%",value:"%"},{label:"vh",value:"vh"}],p=w=>{if(!w||!w.url){e({imageUrl:void 0,imageId:void 0,altText:""});return}let Pe=w.url;C&&w.sizes&&w.sizes[C]&&(Pe=w.sizes[C].url),e({imageUrl:Pe,imageId:w.id,altText:w.alt||"",title:w.title||""})},De=()=>{e({imageUrl:void 0,imageId:void 0,altText:"",title:""})},r=()=>{let w=window.digi.responsiveState.activeDevice,Pe=m[w]?m[w]==="auto"?"auto":`${m[w]}${s}`:"100%",Ze=$[w]?$[w]==="auto"?"auto":`${$[w]}${I}`:"auto",i="";V&&V!=="none"?i=`
                border-style: ${V};
                border-color: ${E||"#e0e0e0"};
				${La(Z,"border-width",w)}
            `:i="border-style: none;";let F="box-shadow: none;";b&&b.enable&&(F=`box-shadow: ${b.position==="inset"?"inset ":""}${b.horizontal}px ${b.vertical}px ${b.blur}px ${b.spread}px ${b.color};`);let Ue=le&&le[w]?`${La(le,"padding",w)}`:"padding: 0;",po=We&&We[w]?`${La(We,"margin",w)}`:"margin: 0 0 30px 0;",z="";J&&(z=`
                .${o} .digiblocks-image-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: ${A||"rgba(0,0,0,0.5)"};
                    opacity: ${re?"0":"1"};
                    transition: opacity 0.3s ease;
                }
                
                .${o}:hover .digiblocks-image-overlay {
                    opacity: 1;
                }
            `);let Ke="";if(D&&D.enable){let ze=D.position==="inset"?"inset ":"";Ke+=`box-shadow: ${ze}${D.horizontal}px ${D.vertical}px ${D.blur}px ${D.spread}px ${D.color};`}f&&(Ke+=`border-color: ${f};`);let ro="";q==="zoom-in"?ro="transform: scale(1.1);":q==="zoom-out"?ro="transform: scale(1);":q==="grayscale"?ro="filter: grayscale(0);":q==="blur"?ro="filter: blur(0);":q==="rotate"?ro="transform: rotate(5deg);":q==="glow"&&(ro="filter: brightness(1.1);");let W="";return q==="zoom-out"?W="transform: scale(1.1);":q==="grayscale"?W="filter: grayscale(100%);":q==="blur"&&(W="filter: blur(5px);"),`
            /* Main block styles */
            .${o} {
                display: flex;
				${k==="left"?"justify-content: flex-start;":k==="right"?"justify-content: flex-end;":"justify-content: center;"}
                text-align: ${k};
                width: 100%;
                ${po}
                transition: all 0.3s ease;
            }
            
            /* Figure styles */
            .${o} figure {
                display: inline-block;
                position: relative;
                margin: 0;
                width: ${Pe};
                max-width: 100%;
                ${Ue}
                ${i}
                ${F}
				${La(ee,"border-radius",w)}
                overflow: hidden;
                transition: all 0.3s ease;
            }
            
            /* Image styles */
            .${o} figure img {
                display: block;
                width: 100%;
                height: ${Ze};
                object-fit: ${T};
                ${W}
                transition: all 0.3s ease;
            }
            
            /* Hover styles */
            .${o} figure:hover {
                ${Ke}
            }
            
            .${o} figure:hover img {
                ${ro}
            }
            
            /* Overlay */
            ${z}

			/* Visibility Controls */
			${n.desktop?`
				@media (min-width: 992px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${n.tablet?`
				@media (min-width: 768px) and (max-width: 991px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${n.mobile?`
				@media (max-width: 767px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}
        `},he=()=>`
			.digiblocks-image-search-modal .components-modal__content {
				padding: 0 !important;
				overflow: hidden !important;
				width: 90vw !important;
				max-width: 1200px !important;
				display: flex !important;
				flex-direction: column !important;
			}

			.digiblocks-image-search-modal .components-modal__header {
				flex-shrink: 0;
			}

			.digiblocks-image-search-modal .components-modal__content > div:nth-child(2) {
				overflow: auto;
			}

			.digiblocks-image-search-content {
				height: 100%;
				display: flex;
				flex-direction: column;
				overflow: hidden;
				flex: 1;
			}

			.digiblocks-search-header {
				padding: 20px;
				border-bottom: 1px solid #ddd;
				background: #f9f9f9;
				flex-shrink: 0;
			}

			.digiblocks-search-input-wrapper {
				display: flex;
				gap: 10px;
				align-items: center;
			}

			.digiblocks-search-input {
				flex: 1;
				padding: 8px 12px;
				border: 1px solid #ddd;
				border-radius: 4px;
				font-size: 14px;
			}

			.digiblocks-search-input:focus {
				outline: none;
				border-color: #007cba;
				box-shadow: 0 0 0 1px #007cba;
			}

			.digiblocks-search-results {
				flex: 1;
				overflow-y: auto !important;
				overflow-x: hidden !important;
				padding: 20px;
				min-height: 0 !important;
				max-height: none !important;
			}

			.digiblocks-image-grid {
				display: grid;
				grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
				gap: 16px;
				margin-bottom: 20px;
			}

			.digiblocks-image-item {
				position: relative;
				aspect-ratio: 4/3;
				cursor: pointer;
				border-radius: 8px;
				overflow: hidden;
				transition: transform 0.2s ease;
				background: #f5f5f5;
			}

			.digiblocks-image-item:hover {
				transform: scale(1.02);
			}

			.digiblocks-image-item img {
				width: 100%;
				height: 100%;
				object-fit: cover;
			}

			.digiblocks-image-overlay {
				position: absolute;
				bottom: 0;
				left: 0;
				right: 0;
				background: linear-gradient(transparent, rgba(0,0,0,0.8));
				color: white;
				padding: 16px;
				opacity: 0;
				transition: opacity 0.2s ease;
			}

			.digiblocks-image-item:hover .digiblocks-image-overlay {
				opacity: 1;
			}

			.digiblocks-image-info {
				margin-bottom: 8px;
			}

			.digiblocks-image-title {
				display: block;
				font-weight: 600;
				font-size: 14px;
				margin-bottom: 4px;
				line-height: 1.2;
			}

			.digiblocks-image-author {
				display: block;
				font-size: 12px;
				opacity: 0.8;
			}

			.digiblocks-load-more {
				text-align: center;
				margin-top: 20px;
			}

			.digiblocks-no-results {
				text-align: center;
				padding: 40px 20px;
				color: #666;
			}

			.digiblocks-image-upload-buttons {
				display: flex;
				gap: 12px;
				align-items: center;
				flex-wrap: wrap;
			}

			.digiblocks-image-upload-buttons button {
				display: flex;
				gap: 5px;
				align-items: center;
			}

			.digiblocks-media-upload-button,
			.digiblocks-media-search-button {
				display: flex;
				align-items: center;
				gap: 8px;
				width: 100%;
			}

			.digiblocks-media-controls {
				display: flex;
				gap: 8px;
				align-items: center;
				margin-top: 12px;
				flex-wrap: wrap;
			}

			.digiblocks-media-controls .components-button {
				display: flex;
				align-items: center;
				gap: 6px;
			}

			.digiblocks-searching-state {
				text-align: center;
				padding: 40px 20px;
				color: #666;
			}

			.digiblocks-downloading-overlay {
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				background: rgba(0,0,0,0.8);
				display: flex;
				align-items: center;
				justify-content: center;
				color: white;
				font-weight: 600;
				z-index: 10;
			}

			.digiblocks-typing-indicator {
				text-align: center;
				padding: 20px;
				color: #666;
				font-style: italic;
			}
		`,oo=()=>{switch(pe){case"options":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(St,{tab:"options",name:"image",title:Ie("Image","digiblocks"),initialOpen:!0},wp.element.createElement(Sd,null,wp.element.createElement("div",{className:"digiblocks-image-upload-section"},_?wp.element.createElement("div",{className:"digiblocks-media-preview"},wp.element.createElement("img",{src:_,alt:v||""}),wp.element.createElement("div",{className:"digiblocks-media-controls"},y&&wp.element.createElement(Vo,{isPrimary:!0,onClick:()=>xe(!0),disabled:ye},wp.element.createElement("span",{className:"dashicon dashicons dashicons-search"})),wp.element.createElement(Hs,{onSelect:p,allowedTypes:["image"],value:l,render:({open:w})=>wp.element.createElement(Vo,{isPrimary:!0,onClick:w,disabled:ye},wp.element.createElement("span",{className:"dashicon dashicons dashicons-edit"}))}),wp.element.createElement(Vo,{isDestructive:!0,onClick:De,disabled:ye},wp.element.createElement("span",{className:"dashicon dashicons dashicons-trash"})))):wp.element.createElement("div",{className:"digiblocks-image-upload-buttons"},wp.element.createElement(Hs,{onSelect:p,allowedTypes:["image"],value:l,render:({open:w})=>wp.element.createElement(Vo,{className:"digiblocks-media-upload-button",isPrimary:!0,onClick:w,disabled:ye},wp.element.createElement("span",{className:"dashicon dashicons dashicons-admin-media"}),Ie("Select Image","digiblocks"))}),y&&wp.element.createElement(Vo,{className:"digiblocks-media-search-button",isSecondary:!0,onClick:()=>xe(!0),disabled:ye},wp.element.createElement("span",{className:"dashicon dashicons dashicons-search"}),Ie("Search Images","digiblocks"))))),_&&wp.element.createElement("div",{style:{marginTop:"16px"}},wp.element.createElement(Bd,{label:Ie("Alt Text","digiblocks"),value:v,onChange:w=>e({altText:w}),help:Ie("Alternative text describes your image to people who cannot see it. Add a descriptive text to help screen-reader users.","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Bd,{label:Ie("Title","digiblocks"),value:M,onChange:w=>e({title:w}),help:Ie("Shown as a tooltip when a user hovers over the image.","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(_l,{label:Ie("Image Size","digiblocks"),value:C,options:Fe,onChange:w=>e({sizeSlug:w}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement("div",{style:{marginTop:"16px"}},wp.element.createElement("p",{className:"components-base-control__label"},Ie("Link Settings","digiblocks")),wp.element.createElement(Jm,{value:Se?{url:Se,opensInNewTab:K,rel:L}:void 0,onChange:w=>{e({url:w.url,opensInNewTab:w.opensInNewTab,rel:w.rel||""}),be(!1)},settings:[{id:"opensInNewTab",title:Ie("Open in new tab")},{id:"rel",title:Ie("Add noopener noreferrer")}],onRemove:()=>{e({url:"",opensInNewTab:!1,rel:""}),be(!1)}}))),!y&&wp.element.createElement(Zm,{status:"info",isDismissible:!1,style:{marginTop:"16px"}},wp.element.createElement("p",{style:{margin:"0 0 8px 0"}},wp.element.createElement("strong",null,Ie("\u{1F4A1} Enhanced Image Search Available","digiblocks"))),wp.element.createElement("p",{style:{margin:"0 0 12px 0"}},Ie("Configure API providers to search and download images directly from Unsplash, Pexels, and Pixabay.","digiblocks")),wp.element.createElement(Vo,{isSecondary:!0,isSmall:!0,href:`${digiBlocksData.admin_url}admin.php?page=digiblocks-settings#image-providers`,target:"_blank",rel:"noopener noreferrer",icon:"admin-settings"},Ie("Configure Image Providers","digiblocks")))));case"style":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(St,{tab:"style",name:"dimensions",title:Ie("Dimensions","digiblocks"),initialOpen:!0},wp.element.createElement("div",{className:"digiblocks-size-type-field-tabs"},wp.element.createElement("div",{className:"digiblocks-responsive-control-inner"},wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"digiblocks-range-control digiblocks-size-type-field-tabs"},wp.element.createElement("div",{className:"digiblocks-control__header"},wp.element.createElement("div",{className:"digiblocks-responsive-label-wrap"},wp.element.createElement("span",{className:"digiblocks-control-label"},Ie("Width","digiblocks")),wp.element.createElement("button",{type:"button","aria-label":Ie(`Switch to ${window.digi.responsiveState.getNextDevice()} view`,"digiblocks"),className:`components-button digiblocks-responsive-common-button digiblocks-device-${se}`,onClick:()=>window.digi.responsiveState.toggleDevice()},window.digi.icons.deviceIcons[se])),wp.element.createElement("div",{className:"digiblocks-range-control__actions digiblocks-control__actions"},wp.element.createElement("div",{tabIndex:"0"},wp.element.createElement("button",{type:"button",disabled:m[se]===100,className:"components-button digiblocks-reset is-secondary is-small",onClick:()=>e({width:{...m,[se]:100}})},wp.element.createElement("span",{className:"dashicon dashicons dashicons-image-rotate"}))),wp.element.createElement(Ms,{value:s,onChange:w=>e({widthUnit:w}),isBlock:!0,isSmall:!0,hideLabelFromVision:!0,"aria-label":Ie("Width Unit","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},go.map(w=>wp.element.createElement(Tl,{key:w.value,value:w.value,label:w.label}))))),wp.element.createElement("div",{className:"digiblocks-range-control__mobile-controls"},wp.element.createElement($d,{value:m[se],onChange:w=>e({width:{...m,[se]:w}}),min:1,max:s==="%"?100:1e3,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})))))),wp.element.createElement("div",{className:"digiblocks-size-type-field-tabs"},wp.element.createElement("div",{className:"digiblocks-responsive-control-inner"},wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"digiblocks-range-control digiblocks-size-type-field-tabs"},wp.element.createElement("div",{className:"digiblocks-control__header"},wp.element.createElement("div",{className:"digiblocks-responsive-label-wrap"},wp.element.createElement("span",{className:"digiblocks-control-label"},Ie("Height","digiblocks")),wp.element.createElement("button",{type:"button","aria-label":Ie(`Switch to ${window.digi.responsiveState.getNextDevice()} view`,"digiblocks"),className:`components-button digiblocks-responsive-common-button digiblocks-device-${se}`,onClick:()=>window.digi.responsiveState.toggleDevice()},window.digi.icons.deviceIcons[se])),wp.element.createElement("div",{className:"digiblocks-range-control__actions digiblocks-control__actions"},wp.element.createElement("div",{tabIndex:"0"},wp.element.createElement("button",{type:"button",disabled:$[se]===300,className:"components-button digiblocks-reset is-secondary is-small",onClick:()=>e({height:{...$,[se]:300}})},wp.element.createElement("span",{className:"dashicon dashicons dashicons-image-rotate"}))),wp.element.createElement(Ms,{value:I,onChange:w=>e({heightUnit:w}),isBlock:!0,isSmall:!0,hideLabelFromVision:!0,"aria-label":Ie("Height Unit","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},t.map(w=>wp.element.createElement(Tl,{key:w.value,value:w.value,label:w.label}))))),wp.element.createElement("div",{className:"digiblocks-range-control__mobile-controls"},wp.element.createElement($d,{value:$[se],onChange:w=>e({height:{...$,[se]:w}}),min:1,max:I==="%"?100:1e3,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})))))),wp.element.createElement(_l,{label:Ie("Object Fit","digiblocks"),value:T,options:a,onChange:w=>e({objectFit:w}),help:Ie("Determines how the image should be resized to fit its container.","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Ms,{label:Ie("Alignment","digiblocks"),value:k,onChange:w=>e({align:w}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(Tl,{value:"left",label:Ie("Left","digiblocks")}),wp.element.createElement(Tl,{value:"center",label:Ie("Center","digiblocks")}),wp.element.createElement(Tl,{value:"right",label:Ie("Right","digiblocks")}))),wp.element.createElement(St,{tab:"style",name:"spacing",title:Ie("Spacing","digiblocks"),initialOpen:!1},wp.element.createElement(Oa,{label:Ie("Padding","digiblocks")},wp.element.createElement(Ua,{values:le[se],onChange:w=>e({padding:{...le,[se]:w}})})),wp.element.createElement(Oa,{label:Ie("Margin","digiblocks")},wp.element.createElement(Ua,{values:We[se],onChange:w=>e({margin:{...We,[se]:w}})}))),wp.element.createElement(St,{tab:"style",name:"border",title:Ie("Border","digiblocks"),initialOpen:!1},wp.element.createElement(Ym,{className:"digiblocks-control-tabs",activeClass:"active-tab",tabs:ao},w=>w.name==="normal"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(_l,{label:Ie("Border Style","digiblocks"),value:V,options:u,onChange:Pe=>{Pe!=="none"&&(V==="none"||!V)&&((!Z||Object.keys(Z).length===0)&&e({borderWidth:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}}),(!ee||Object.keys(ee).length===0)&&e({borderRadius:{desktop:{top:0,right:0,bottom:0,left:0,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}})),e({borderStyle:Pe})},__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),V&&V!=="none"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(zs,{title:Ie("Border Color","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:E,onChange:Pe=>e({borderColor:Pe}),label:Ie("Border Color","digiblocks")}]}),wp.element.createElement(Oa,{label:Ie("Border Width","digiblocks")},wp.element.createElement(Ua,{values:Z&&Z[se]?Z[se]:{top:1,right:1,bottom:1,left:1,unit:"px"},onChange:Pe=>e({borderWidth:{...Z,[se]:Pe}})}))),wp.element.createElement(Oa,{label:Ie("Border Radius","digiblocks")},wp.element.createElement(Ua,{values:ee&&ee[se]?ee[se]:{top:0,right:0,bottom:0,left:0,unit:"px"},onChange:Pe=>e({borderRadius:{...ee,[se]:Pe}}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]}))):wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(zs,{title:Ie("Border Hover Color","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:f,onChange:Pe=>e({borderHoverColor:Pe}),label:Ie("Border Hover Color","digiblocks")}]})))),wp.element.createElement(St,{tab:"style",name:"shadow",title:Ie("Box Shadow","digiblocks"),initialOpen:!1},wp.element.createElement(oh,{normalValue:b,hoverValue:D,onNormalChange:w=>e({boxShadow:w}),onHoverChange:w=>e({boxShadowHover:w})})),wp.element.createElement(St,{tab:"style",name:"effects",title:Ie("Effects","digiblocks"),initialOpen:!1},wp.element.createElement(_l,{label:Ie("Hover Effect","digiblocks"),value:q,options:Ne,onChange:w=>e({hoverEffect:w}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Td,null,wp.element.createElement(Bl,{label:Ie("Enable Overlay","digiblocks"),checked:J,onChange:()=>e({overlayEnable:!J})})),J&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(zs,{title:Ie("Overlay Color","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:A,onChange:w=>e({overlayColor:w}),label:Ie("Overlay Color","digiblocks")}]}),wp.element.createElement(Td,null,wp.element.createElement(Bl,{label:Ie("Show Overlay Only on Hover","digiblocks"),checked:re,onChange:()=>e({overlayHoverOnly:!re})})))));case"advanced":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(St,{tab:"advanced",name:"animation",title:Ie("Animation","digiblocks"),initialOpen:!0},wp.element.createElement(_l,{label:Ie("Animation Effect","digiblocks"),value:oe,options:ue,onChange:w=>e({animation:w}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),oe&&oe!=="none"&&wp.element.createElement("div",{style:{marginTop:"10px"}},wp.element.createElement(Vo,{variant:"secondary",isSecondary:!0,onClick:S,style:{width:"100%"}},Ie("Preview Animation","digiblocks")))),wp.element.createElement(St,{tab:"advanced",name:"visibility",title:Ie("Visibility","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control__help",style:{padding:"12px",backgroundColor:"#f0f6fc",border:"1px solid #c3ddfd",borderRadius:"4px",marginBottom:"16px"}},wp.element.createElement("strong",null,Ie("Editor Note:","digiblocks")),wp.element.createElement("br",null),Ie("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.","digiblocks")),wp.element.createElement(Bl,{label:Ie("Hide on Desktop","digiblocks"),checked:n.desktop,onChange:w=>e({visibility:{...n,desktop:w}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(Bl,{label:Ie("Hide on Tablet","digiblocks"),checked:n.tablet,onChange:w=>e({visibility:{...n,tablet:w}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(Bl,{label:Ie("Hide on Mobile","digiblocks"),checked:n.mobile,onChange:w=>e({visibility:{...n,mobile:w}}),__nextHasNoMarginBottom:!0})),wp.element.createElement(St,{tab:"advanced",name:"additional",title:Ie("Additional","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control html-anchor-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"html-anchor"},Ie("HTML anchor","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"html-anchor",value:P||"",onChange:w=>e({anchor:w.target.value}),"aria-describedby":"html-anchor-help",autoCapitalize:"none",autoComplete:"off"})),wp.element.createElement("p",{id:"html-anchor-help",className:"components-base-control__help"},Ie(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`,"digiblocks")," ",wp.element.createElement("a",{className:"components-external-link",href:"https://wordpress.org/documentation/article/page-jumps/",target:"_blank",rel:"external noreferrer noopener"},wp.element.createElement("span",{className:"components-external-link__contents"},Ie("Learn more about anchors","digiblocks")),wp.element.createElement("span",{className:"components-external-link__icon","aria-label":"(opens in a new tab)"},"\u2197")))),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"additional-css-classes"},Ie("Additional CSS class(es)","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"additional-css-classes",value:te||"",onChange:w=>e({customClasses:w.target.value}),"aria-describedby":"additional-css-classes-help",autoComplete:"off"})),wp.element.createElement("p",{id:"additional-css-classes-help",className:"components-base-control__help"},Ie("Separate multiple classes with spaces.","digiblocks")))));default:return null}},h=Gm({className:`digiblocks-image ${o} ${oe!=="none"?`animate-${oe}`:""} ${te||""}`,id:P||null});return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Qm,null,wp.element.createElement(th,{tabs:eo,activeTab:pe,onSelect:R},oo())),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:r()}}),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:he()}}),wp.element.createElement("div",{...h},wp.element.createElement("figure",null,_?wp.element.createElement(wp.element.Fragment,null,Se?wp.element.createElement("a",{href:"#",onClick:w=>w.preventDefault()},wp.element.createElement("img",{src:_,alt:v,title:M}),J&&wp.element.createElement("div",{className:"digiblocks-image-overlay"})):wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("img",{src:_,alt:v,title:M}),J&&wp.element.createElement("div",{className:"digiblocks-image-overlay"}))):wp.element.createElement(Km,{icon:"format-image",label:Ie("Image","digiblocks"),instructions:Ie("Upload an image or select one from your media library.","digiblocks")},wp.element.createElement("div",{className:"digiblocks-image-upload-buttons"},wp.element.createElement(Sd,null,wp.element.createElement(Hs,{onSelect:p,allowedTypes:["image"],value:l,render:({open:w})=>wp.element.createElement(Vo,{isPrimary:!0,onClick:w,disabled:ye},wp.element.createElement("span",{className:"dashicon dashicons dashicons-admin-media"}),Ie("Select Image","digiblocks"))})),y&&wp.element.createElement(Vo,{isSecondary:!0,onClick:()=>xe(!0),disabled:ye},wp.element.createElement("span",{className:"dashicon dashicons dashicons-search"}),Ie("Search Images","digiblocks")))))),H&&wp.element.createElement(Xm,{title:Ie("Search Images","digiblocks"),onRequestClose:()=>{xe(!1),ve(""),me([]),Ee(1),j(!1)},className:"digiblocks-image-search-modal",overlayClassName:"digiblocks-modal-overlay",shouldCloseOnClickOutside:!1},wp.element.createElement("div",{className:"digiblocks-image-search-content"},wp.element.createElement("div",{className:"digiblocks-search-header"},wp.element.createElement("div",{className:"digiblocks-search-input-wrapper"},wp.element.createElement("input",{type:"text",placeholder:Ie("Search for images...","digiblocks"),value:x,onChange:w=>ve(w.target.value),className:"digiblocks-search-input",autoFocus:!0}),wp.element.createElement(Vo,{isPrimary:!0,onClick:()=>Q(x,1),disabled:!x.trim()||Te},Ie(Te?"Searching...":"Search","digiblocks")))),wp.element.createElement("div",{className:"digiblocks-search-results"},Te&&U.length===0&&wp.element.createElement("div",{className:"digiblocks-searching-state"},wp.element.createElement(_d,null),wp.element.createElement("p",null,Ie("Searching for images...","digiblocks"))),x&&!Te&&U.length===0&&wp.element.createElement("div",{className:"digiblocks-typing-indicator"},wp.element.createElement("p",null,Ie("Type your search term and wait for results...","digiblocks"))),U.length>0&&wp.element.createElement("div",{className:"digiblocks-image-grid"},U.map((w,Pe)=>wp.element.createElement("div",{key:`${w.id}-${Pe}`,className:"digiblocks-image-item",onClick:()=>c(w)},wp.element.createElement("img",{src:w.thumb,alt:w.alt,loading:"lazy"}),wp.element.createElement("div",{className:"digiblocks-image-overlay"},wp.element.createElement("div",{className:"digiblocks-image-info"},wp.element.createElement("span",{className:"digiblocks-image-title"},w.title),wp.element.createElement("span",{className:"digiblocks-image-author"},"by ",w.author)),wp.element.createElement(Vo,{isPrimary:!0,size:"small"},Ie("Use Image","digiblocks"))),ye&&wp.element.createElement("div",{className:"digiblocks-downloading-overlay"},wp.element.createElement(_d,null))))),Oe&&wp.element.createElement("div",{className:"digiblocks-load-more"},wp.element.createElement(Vo,{isSecondary:!0,onClick:ae,disabled:Te},Ie(Te?"Loading...":"Load More","digiblocks")))))))},zd=ih;var{useBlockProps:lh,RichText:U0}=window.wp.blockEditor,ah=({attributes:ie})=>{let{id:e,anchor:X,customClasses:o,imageUrl:P,altText:n,title:te,animation:l,url:_,opensInNewTab:v,rel:M,overlayEnable:N}=ie,m=["digiblocks-image",e,l!=="none"?`animate-${l}`:"",o||""].filter(Boolean).join(" "),s=lh.save({className:m,id:X||void 0});if(!P)return null;let $=wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("img",{src:P,alt:n||"",title:te||""}),N&&wp.element.createElement("div",{className:"digiblocks-image-overlay"}));return _&&($=wp.element.createElement("a",{href:_,target:v?"_blank":void 0,rel:M?"noopener noreferrer":void 0},$)),wp.element.createElement("div",{...s},wp.element.createElement("figure",null,$))},Md=ah;var{__:ja}=window.wp.i18n,{registerBlockType:nh}=window.wp.blocks,{getBlockActiveStatus:sh}=window.wp.digiBlocks;nh("digiblocks/image",{apiVersion:2,title:digiBlocksData.blocks.image.title,category:"digiblocks",icon:{src:()=>{let{viewbox:ie,path:e}=digiBlocksData.blocks.image.icon;return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${ie}`,className:"digiblocks-editor-icons"},wp.element.createElement("path",{d:e}))}},description:digiBlocksData.blocks.image.description,keywords:[ja("image","digiblocks"),ja("picture","digiblocks"),ja("photo","digiblocks"),ja("media","digiblocks")],supports:{inserter:!!sh("image"),html:!1,className:!1,customClassName:!1,anchor:!1},attributes:{id:{type:"string",default:""},anchor:{type:"string",default:""},visibility:{type:"object",default:{desktop:!1,tablet:!1,mobile:!1}},customClasses:{type:"string",default:""},imageId:{type:"number"},imageUrl:{type:"string",source:"attribute",selector:"img",attribute:"src"},altText:{type:"string",source:"attribute",selector:"img",attribute:"alt",default:""},title:{type:"string",source:"attribute",selector:"img",attribute:"title",default:""},caption:{type:"string",source:"html",selector:"figcaption",default:""},width:{type:"object",default:{desktop:100,tablet:100,mobile:100}},widthUnit:{type:"string",default:"%"},height:{type:"object",default:{desktop:"auto",tablet:"auto",mobile:"auto"}},heightUnit:{type:"string",default:"px"},sizeSlug:{type:"string",default:"large"},align:{type:"string",default:"center"},alignTablet:{type:"string",default:"center"},alignMobile:{type:"string",default:"center"},objectFit:{type:"string",default:"cover"},borderStyle:{type:"string",default:"none"},borderWidth:{type:"object",default:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderRadius:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderColor:{type:"string",default:"#e0e0e0"},borderHoverColor:{type:"string"},boxShadow:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.1)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},boxShadowHover:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},padding:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},margin:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},url:{type:"string",default:""},opensInNewTab:{type:"boolean",default:!1},rel:{type:"string",default:""},animation:{type:"string",default:"none"},hoverEffect:{type:"string",default:"none"},overlayEnable:{type:"boolean",default:!1},overlayColor:{type:"string",default:"rgba(0,0,0,0.5)"},overlayHoverOnly:{type:"boolean",default:!0}},example:{attributes:{imageUrl:"https://s.w.org/images/core/5.3/MtBlanc1.jpg",sizeSlug:"large",width:{desktop:100,tablet:100,mobile:100},widthUnit:"%"}},edit:zd,save:Md});var{__:no}=window.wp.i18n,{useBlockProps:rh,InspectorControls:ch,PanelColorSettings:dh}=window.wp.blockEditor,{TextControl:Dd,ToggleControl:Li,SelectControl:Pd,RangeControl:Rs,Placeholder:gh,Spinner:E0,Button:si,RadioControl:ph,__experimentalToggleGroupControl:Is,__experimentalToggleGroupControlOption:Nl}=window.wp.components,{useState:Hl,useEffect:Oi,useRef:Ui}=window.wp.element,{MediaUpload:Rd,MediaUploadCheck:Id}=window.wp.blockEditor,{useBlockId:bh,getDimensionCSS:Va,animations:Fa,animationPreview:uh}=digi.utils,{tabIcons:Ls}=digi.icons,{ResponsiveControl:Ea,DimensionControl:Wa,BoxShadowControl:mh,CustomTabPanel:hh,TabPanelBody:$t}=digi.components,Os=!1,qa=null,fh=()=>Os?Promise.resolve():qa||(qa=new Promise((ie,e)=>{let X=digiBlocksData.lottie;if(!X){e(new Error("Lottie script URL not found in digiBlocksData"));return}let o=document.createElement("script");o.src=X,o.async=!0,o.onload=()=>{Os=!0,ie()},o.onerror=()=>{e(new Error("Failed to load Lottie script from: "+X))},document.head.appendChild(o)}),qa),kh=({attributes:ie,setAttributes:e,clientId:X})=>{let{id:o,anchor:P,visibility:n,customClasses:te,lottieSource:l,sourceType:_,lottieFile:v,autoplay:M,loop:N,speed:m,width:s,widthUnit:$,height:I,heightUnit:C,alignment:k,backgroundColor:B,showControls:O,padding:T,margin:V,borderStyle:Z,borderWidth:ee,borderRadius:E,borderColor:f,shadow:b,animation:D}=ie;bh(o,X,e);let[le,We]=Hl(window.digi.responsiveState.activeDevice),[Se,K]=Hl(()=>{if(window.digi.uiState){let d=window.digi.uiState.getActiveTab(X);if(d)return d}return"options"}),[L,oe]=Hl(!1),[q,J]=Hl(null),[A,re]=Hl(Os),se=Ui(null),Ce=Ui(null),Y=Ui(null),de=Ui(null),He=Ui(null),be=Ui(!0),H=[{label:"px",value:"px"},{label:"%",value:"%"},{label:"vw",value:"vw"}],xe=[{label:"px",value:"px"},{label:"%",value:"%"},{label:"vh",value:"vh"}];Oi(()=>window.digi.responsiveState.subscribe(ce=>{We(ce)}),[]),Oi(()=>(be.current=!0,()=>{if(be.current=!1,Y.current){try{Y.current.pause(),Y.current.destroy()}catch(d){console.warn("Error destroying animation during cleanup:",d)}Y.current=null}window.lottieResizeObserver&&(window.lottieResizeObserver.disconnect(),window.lottieResizeObserver=null)}),[]),Oi(()=>{A||(oe(!0),fh().then(()=>{be.current&&(re(!0),oe(!1),l&&Ce.current&&x())}).catch(d=>{be.current&&(J("Failed to load animation library: "+d.message),oe(!1))}))},[]),Oi(()=>{A&&l&&Ce.current&&x()},[A,l,Ce.current]),Oi(()=>{Y.current&&(O&&!de.current?U():!O&&de.current&&(de.current.remove(),de.current=null))},[O]);let x=()=>{if(!(!window.DotLottie||!l||!Ce.current)){oe(!0),J(null);try{Y.current&&(Y.current.destroy?.(),Y.current=null),Y.current=new window.DotLottie({autoplay:M,loop:N,canvas:Ce.current,src:l}),Y.current.addEventListener("DOMLoaded",()=>{be.current&&(m!==1&&Y.current.setSpeed(m),N||Y.current.addEventListener("complete",()=>{Y.current.pause(),Y.current.goToFrame(0)}),M||(Y.current.pause(),Y.current.goToFrame(0)),oe(!1),O&&U())}),Y.current.addEventListener("error",d=>{console.error("Animation failed to load:",d),be.current&&(J("Animation failed to load. Check the file or URL."),oe(!1))}),setTimeout(()=>{be.current&&L&&oe(!1)},3e3)}catch(d){console.error("Error initializing animation:",d),J("Failed to initialize animation: "+d.message),oe(!1)}}},ve=()=>{setTimeout(()=>{be.current&&U()},100)},U=()=>{if(!se.current||!Y.current)return;de.current&&de.current.remove();let d=document.createElement("div");d.className="digiblocks-lottie-controls",d.style.position="absolute",d.style.bottom="10px",d.style.left="0",d.style.right="0",d.style.display="flex",d.style.justifyContent="center",d.style.zIndex="10";let ce=document.createElement("button");ce.className="digiblocks-lottie-play-pause";let S=M;ce.innerHTML=S?"\u23F8\uFE0F":"\u25B6\uFE0F",ce.style.background="rgba(0,0,0,0.3)",ce.style.color="white",ce.style.border="none",ce.style.borderRadius="4px",ce.style.padding="5px 10px",ce.style.cursor="pointer",ce.addEventListener("click",()=>{Y.current&&(S?(Y.current.pause(),ce.innerHTML="\u25B6\uFE0F"):(Y.current.play(),ce.innerHTML="\u23F8\uFE0F"),S=!S)}),d.appendChild(ce),se.current.appendChild(d),de.current=d};Oi(()=>{if(!(!Y.current||!Y.current.isLoaded))try{Y.current.setLoop(N),Y.current.setSpeed(m),M?Y.current.play():(Y.current.pause(),Y.current.goToFrame(0)),N||(Y.current.removeEventListener("complete"),Y.current.addEventListener("complete",()=>{Y.current.pause(),Y.current.goToFrame(0)}))}catch(d){console.error("Error updating animation settings:",d)}},[M,N,m]);let me=d=>{!d||!d.url||e({lottieSource:d.url,lottieFile:d,sourceType:"file"})},Te=d=>{e({lottieSource:d,sourceType:"url"})},qe=()=>{if(!l){J("Please enter a valid URL");return}if(!A){J("Animation library is still loading. Please wait a moment.");return}x()},Ve=()=>{uh(o,D,Fa,He)},Ee=()=>{let d=le,ce="";return D&&D!=="none"&&Fa[D]&&(ce=Fa[D].keyframes),`
            /* Lottie Block - ${o} */
            .${o} {
				${Va(T,"padding",d)}
				${Va(V,"margin",d)}
                width: 100%;
                display: flex;
                justify-content: ${k==="left"?"flex-start":k==="right"?"flex-end":"center"};
            }
            
            .${o} .digiblocks-lottie-container {
                width: ${s[d]}${$};
                height: ${I[d]}${C};
                ${B?`background-color: ${B};`:""}
                overflow: hidden;
                position: relative;
                ${Z!=="none"?`
					border-style: ${Z};
					border-color: ${f};
					${Va(ee,"border-width",d)}
                `:""}
				${Va(E,"border-radius",d)}
                ${b.enable?`box-shadow: ${b.horizontal}px ${b.vertical}px ${b.blur}px ${b.spread}px ${b.color};`:""}
            }
            
            .${o} canvas {
                width: 100%;
                height: 100%;
            }
            
            .${o} .digiblocks-lottie-error {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                text-align: center;
            }
            
            .${o} .digiblocks-lottie-error {
                color: #cc1818;
                max-width: 90%;
                padding: 10px;
            }
            
            /* Animation keyframes */
            ${ce}

			/* Visibility Controls */
			${n.desktop?`
				@media (min-width: 992px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${n.tablet?`
				@media (min-width: 768px) and (max-width: 991px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${n.mobile?`
				@media (max-width: 767px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}
        `},Oe=[{label:no("None","digiblocks"),value:"none"},...Object.keys(Fa).map(d=>({label:d.replace(/-/g," ").replace(/\b\w/g,ce=>ce.toUpperCase()),value:d}))],j=[{label:no("None","digiblocks"),value:"none"},{label:no("Solid","digiblocks"),value:"solid"},{label:no("Dashed","digiblocks"),value:"dashed"},{label:no("Dotted","digiblocks"),value:"dotted"},{label:no("Double","digiblocks"),value:"double"}],ye=[{name:"options",title:no("Options","digiblocks"),icon:Ls.optionsIcon},{name:"style",title:no("Style","digiblocks"),icon:Ls.styleIcon},{name:"advanced",title:no("Advanced","digiblocks"),icon:Ls.advancedIcon}],Je=()=>{switch(Se){case"options":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement($t,{tab:"options",name:"source",title:no("Source","digiblocks"),initialOpen:!0},wp.element.createElement(ph,{label:no("Source Type","digiblocks"),selected:_,options:[{label:no("File","digiblocks"),value:"file"},{label:no("URL","digiblocks"),value:"url"}],onChange:d=>e({sourceType:d})}),_==="file"&&wp.element.createElement(Id,null,wp.element.createElement("div",{style:{marginTop:"12px"}},wp.element.createElement(Rd,{onSelect:me,allowedTypes:["application/json","text/plain","application/octet-stream"],value:v?.id||0,render:({open:d})=>wp.element.createElement("div",null,wp.element.createElement(si,{variant:"secondary",onClick:d,style:{marginBottom:"8px",width:"100%"}},no(l?"Replace Lottie File":"Upload Lottie File","digiblocks")),l&&wp.element.createElement("div",{className:"digiblocks-lottie-file-name",style:{fontSize:"12px",overflow:"hidden",textOverflow:"ellipsis",marginBottom:"8px"}},v?.filename||l.split("/").pop()))}))),_==="url"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Dd,{label:no("Lottie URL","digiblocks"),value:l,onChange:Te,placeholder:"https://example.com/animation.json",help:no("Enter the URL to a JSON Lottie animation file","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(si,{variant:"secondary",onClick:qe,style:{marginTop:"8px"},disabled:!l},no("Load Animation","digiblocks")))),wp.element.createElement($t,{tab:"options",name:"animation",title:no("Animation","digiblocks"),initialOpen:!1},wp.element.createElement(Li,{label:no("Autoplay","digiblocks"),checked:M,onChange:d=>e({autoplay:d}),help:no("Automatically start the animation when the page loads","digiblocks"),__nextHasNoMarginBottom:!0}),wp.element.createElement(Li,{label:no("Loop","digiblocks"),checked:N,onChange:d=>e({loop:d}),help:no("Repeat the animation indefinitely","digiblocks"),__nextHasNoMarginBottom:!0}),wp.element.createElement(Rs,{label:no("Animation Speed","digiblocks"),value:m,onChange:d=>e({speed:d}),min:.1,max:3,step:.1,help:no("1 = normal speed, 2 = double speed, 0.5 = half speed","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Li,{label:no("Show Controls","digiblocks"),checked:O,onChange:d=>e({showControls:d}),help:no("Display play/pause control","digiblocks"),__nextHasNoMarginBottom:!0})),wp.element.createElement($t,{tab:"options",name:"dimensions",title:no("Dimensions","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"digiblocks-size-type-field-tabs"},wp.element.createElement("div",{className:"digiblocks-responsive-control-inner"},wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"digiblocks-range-control digiblocks-size-type-field-tabs"},wp.element.createElement("div",{className:"digiblocks-control__header"},wp.element.createElement("div",{className:"digiblocks-responsive-label-wrap"},wp.element.createElement("span",{className:"digiblocks-control-label"},no("Width","digiblocks")),wp.element.createElement("button",{type:"button","aria-label":no(`Switch to ${window.digi.responsiveState.getNextDevice()} view`,"digiblocks"),className:`components-button digiblocks-responsive-common-button digiblocks-device-${le}`,onClick:()=>window.digi.responsiveState.toggleDevice()},window.digi.icons.deviceIcons[le])),wp.element.createElement("div",{className:"digiblocks-range-control__actions digiblocks-control__actions"},wp.element.createElement("div",{tabIndex:"0"},wp.element.createElement("button",{type:"button",disabled:s[le]===($==="%"||$==="vw"?100:300),className:"components-button digiblocks-reset is-secondary is-small",onClick:()=>e({width:{...s,[le]:$==="%"||$==="vw"?100:300}})},wp.element.createElement("span",{className:"dashicon dashicons dashicons-image-rotate"}))),wp.element.createElement(Is,{value:$,onChange:d=>{let ce=s[le],S=ce;(d==="%"||d==="vw")&&ce>100?S=100:($==="%"||$==="vw")&&d==="px"&&ce<50&&(S=300),e({widthUnit:d,width:{...s,[le]:S}})},isBlock:!0,isSmall:!0,hideLabelFromVision:!0,"aria-label":no("Width Unit","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},H.map(d=>wp.element.createElement(Nl,{key:d.value,value:d.value,label:d.label}))))),wp.element.createElement("div",{className:"digiblocks-range-control__mobile-controls"},wp.element.createElement(Rs,{value:s[le],onChange:d=>e({width:{...s,[le]:d}}),min:10,max:$==="%"||$==="vw"?100:1e3,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})))))),wp.element.createElement("div",{className:"digiblocks-size-type-field-tabs"},wp.element.createElement("div",{className:"digiblocks-responsive-control-inner"},wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"digiblocks-range-control digiblocks-size-type-field-tabs"},wp.element.createElement("div",{className:"digiblocks-control__header"},wp.element.createElement("div",{className:"digiblocks-responsive-label-wrap"},wp.element.createElement("span",{className:"digiblocks-control-label"},no("Height","digiblocks")),wp.element.createElement("button",{type:"button","aria-label":no(`Switch to ${window.digi.responsiveState.getNextDevice()} view`,"digiblocks"),className:`components-button digiblocks-responsive-common-button digiblocks-device-${le}`,onClick:()=>window.digi.responsiveState.toggleDevice()},window.digi.icons.deviceIcons[le])),wp.element.createElement("div",{className:"digiblocks-range-control__actions digiblocks-control__actions"},wp.element.createElement("div",{tabIndex:"0"},wp.element.createElement("button",{type:"button",disabled:I[le]===(C==="%"||C==="vh"?100:300),className:"components-button digiblocks-reset is-secondary is-small",onClick:()=>e({height:{...I,[le]:C==="%"||C==="vh"?100:300}})},wp.element.createElement("span",{className:"dashicon dashicons dashicons-image-rotate"}))),wp.element.createElement(Is,{value:C,onChange:d=>{let ce=I[le],S=ce;(d==="%"||d==="vh")&&ce>100?S=100:(C==="%"||C==="vh")&&d==="px"&&ce<50&&(S=300),e({heightUnit:d,height:{...I,[le]:S}})},isBlock:!0,isSmall:!0,hideLabelFromVision:!0,"aria-label":no("Height Unit","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},xe.map(d=>wp.element.createElement(Nl,{key:d.value,value:d.value,label:d.label}))))),wp.element.createElement("div",{className:"digiblocks-range-control__mobile-controls"},wp.element.createElement(Rs,{value:I[le],onChange:d=>e({height:{...I,[le]:d}}),min:10,max:C==="%"||C==="vh"?100:1e3,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})))))),wp.element.createElement(Is,{label:no("Alignment","digiblocks"),value:k,onChange:d=>e({alignment:d}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(Nl,{value:"left",label:no("Left","digiblocks")}),wp.element.createElement(Nl,{value:"center",label:no("Center","digiblocks")}),wp.element.createElement(Nl,{value:"right",label:no("Right","digiblocks")}))));case"style":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement($t,{tab:"style",name:"colors",title:no("Colors","digiblocks"),initialOpen:!0},wp.element.createElement(dh,{title:no("Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:B,onChange:d=>e({backgroundColor:d}),label:no("Background Color","digiblocks")},{value:f,onChange:d=>e({borderColor:d}),label:no("Border Color","digiblocks")}]})),wp.element.createElement($t,{tab:"style",name:"borders",title:no("Borders & Shadows","digiblocks"),initialOpen:!1},wp.element.createElement(Pd,{label:no("Border Style","digiblocks"),value:Z,options:j,onChange:d=>e({borderStyle:d}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),Z!=="none"&&wp.element.createElement(Ea,{label:no("Border Width","digiblocks")},wp.element.createElement(Wa,{values:ee[le],onChange:d=>e({borderWidth:{...ee,[le]:d}})})),wp.element.createElement(Ea,{label:no("Border Radius","digiblocks")},wp.element.createElement(Wa,{values:E[le],onChange:d=>e({borderRadius:{...E,[le]:d}}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]})),wp.element.createElement(mh,{label:no("Shadow","digiblocks"),normalValue:b,onNormalChange:d=>e({shadow:d})})),wp.element.createElement($t,{tab:"style",name:"spacing",title:no("Spacing","digiblocks"),initialOpen:!1},wp.element.createElement(Ea,{label:no("Padding","digiblocks")},wp.element.createElement(Wa,{values:T[le],onChange:d=>e({padding:{...T,[le]:d}})})),wp.element.createElement(Ea,{label:no("Margin","digiblocks")},wp.element.createElement(Wa,{values:V[le],onChange:d=>e({margin:{...V,[le]:d}})}))));case"advanced":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement($t,{tab:"advanced",name:"animation",title:no("Animation","digiblocks"),initialOpen:!0},wp.element.createElement(Pd,{label:no("Animation Effect","digiblocks"),value:D,options:Oe,onChange:d=>e({animation:d}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),D&&D!=="none"&&wp.element.createElement("div",{style:{marginTop:"10px"}},wp.element.createElement(si,{variant:"secondary",isSecondary:!0,onClick:Ve,style:{width:"100%"}},no("Preview Animation","digiblocks")))),wp.element.createElement($t,{tab:"advanced",name:"visibility",title:no("Visibility","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control__help",style:{padding:"12px",backgroundColor:"#f0f6fc",border:"1px solid #c3ddfd",borderRadius:"4px",marginBottom:"16px"}},wp.element.createElement("strong",null,no("Editor Note:","digiblocks")),wp.element.createElement("br",null),no("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.","digiblocks")),wp.element.createElement(Li,{label:no("Hide on Desktop","digiblocks"),checked:n.desktop,onChange:d=>e({visibility:{...n,desktop:d}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(Li,{label:no("Hide on Tablet","digiblocks"),checked:n.tablet,onChange:d=>e({visibility:{...n,tablet:d}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(Li,{label:no("Hide on Mobile","digiblocks"),checked:n.mobile,onChange:d=>e({visibility:{...n,mobile:d}}),__nextHasNoMarginBottom:!0})),wp.element.createElement($t,{tab:"advanced",name:"additional",title:no("Additional","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control html-anchor-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"html-anchor"},no("HTML anchor","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"html-anchor",value:P||"",onChange:d=>e({anchor:d.target.value}),"aria-describedby":"html-anchor-help",autoCapitalize:"none",autoComplete:"off"})),wp.element.createElement("p",{id:"html-anchor-help",className:"components-base-control__help"},no(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`,"digiblocks")," ",wp.element.createElement("a",{className:"components-external-link",href:"https://wordpress.org/documentation/article/page-jumps/",target:"_blank",rel:"external noreferrer noopener"},wp.element.createElement("span",{className:"components-external-link__contents"},no("Learn more about anchors","digiblocks")),wp.element.createElement("span",{className:"components-external-link__icon","aria-label":"(opens in a new tab)"},"\u2197")))),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"additional-css-classes"},no("Additional CSS class(es)","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"additional-css-classes",value:te||"",onChange:d=>e({customClasses:d.target.value}),"aria-describedby":"additional-css-classes-help",autoComplete:"off"})),wp.element.createElement("p",{id:"additional-css-classes-help",className:"components-base-control__help"},no("Separate multiple classes with spaces.","digiblocks")))));default:return null}},G=`digiblocks-lottie ${o} ${te||""}`,pe=D&&D!=="none"?` animate-${D}`:"",R=rh({className:G+pe,id:P||null});return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(ch,null,wp.element.createElement(hh,{tabs:ye,activeTab:Se,onSelect:K},Je())),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:Ee()}}),wp.element.createElement("div",{...R},l?wp.element.createElement("div",{className:"digiblocks-lottie-container",ref:se,style:{width:`${s[le]}${$}`,height:`${I[le]}${C}`,position:"relative"}},wp.element.createElement("canvas",{ref:Ce,style:{width:"100%",height:"100%",display:"block"}}),q&&wp.element.createElement("div",{className:"digiblocks-lottie-error",style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",textAlign:"center",color:"#cc1818",maxWidth:"90%",padding:"10px"}},wp.element.createElement("p",null,q),wp.element.createElement(si,{variant:"secondary",onClick:()=>{J(null),x()}},no("Try Again","digiblocks")))):wp.element.createElement(gh,{icon:"format-image",label:no("Lottie Animation","digiblocks"),instructions:no("Upload a Lottie animation file or provide a URL to a Lottie JSON file.","digiblocks")},_==="file"?wp.element.createElement(Id,null,wp.element.createElement(Rd,{onSelect:me,allowedTypes:["application/json","text/plain","application/octet-stream"],render:({open:d})=>wp.element.createElement(si,{variant:"primary",onClick:d},no("Upload Lottie File","digiblocks"))})):wp.element.createElement("div",{style:{width:"100%",maxWidth:"400px"}},wp.element.createElement(Dd,{placeholder:no("Enter Lottie JSON URL","digiblocks"),value:l,onChange:Te,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(si,{variant:"primary",onClick:qe,style:{marginTop:"10px"},disabled:!l},no("Load Animation","digiblocks"))),wp.element.createElement("div",{style:{marginTop:"12px",display:"flex",justifyContent:"center"}},wp.element.createElement(si,{variant:"link",onClick:()=>e({sourceType:_==="file"?"url":"file"})},no(_==="file"?"Or use URL instead":"Or upload a file instead","digiblocks"))))))},Ld=kh;var{__:q0}=window.wp.i18n,{useBlockProps:vh}=window.wp.blockEditor,xh=({attributes:ie})=>{let{id:e,anchor:X,customClasses:o,lottieSource:P,autoplay:n,loop:te,speed:l,width:_,widthUnit:v,height:M,heightUnit:N,alignment:m,backgroundColor:s,showControls:$,animation:I,borderStyle:C,borderColor:k,borderWidth:B,borderRadius:O,shadow:T}=ie;if(!P)return null;let V=`digiblocks-lottie ${e} ${o||""}`,Z=I&&I!=="none"?` animate-${I}`:"",ee=vh.save({className:V+Z,id:X||void 0});return wp.element.createElement("div",{...ee},wp.element.createElement("div",{className:"digiblocks-lottie-container","data-src":P,"data-autoplay":n.toString(),"data-loop":te.toString(),"data-speed":l.toString(),"data-controls":$.toString()},wp.element.createElement("canvas",{width:"100%",height:"100%",style:{width:"100%",height:"100%",display:"block"}})))},Od=xh;var{__:Ga}=window.wp.i18n,{registerBlockType:yh}=window.wp.blocks,{getBlockActiveStatus:Ch}=window.wp.digiBlocks;yh("digiblocks/lottie",{apiVersion:2,title:digiBlocksData.blocks.lottie.title,category:"digiblocks",icon:{src:()=>{let{viewbox:ie,path:e}=digiBlocksData.blocks.lottie.icon;return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${ie}`,className:"digiblocks-editor-icons"},wp.element.createElement("path",{d:e}))}},description:digiBlocksData.blocks.lottie.description,keywords:[Ga("lottie","digiblocks"),Ga("animation","digiblocks"),Ga("dotlottie","digiblocks"),Ga("motion","digiblocks")],supports:{inserter:!!Ch("lottie"),html:!1,className:!1,customClassName:!1,anchor:!1},attributes:{id:{type:"string",default:""},anchor:{type:"string",default:""},visibility:{type:"object",default:{desktop:!1,tablet:!1,mobile:!1}},customClasses:{type:"string",default:""},lottieSource:{type:"string",default:""},sourceType:{type:"string",default:"file"},lottieFile:{type:"object",default:null},autoplay:{type:"boolean",default:!0},loop:{type:"boolean",default:!0},speed:{type:"number",default:1},width:{type:"object",default:{desktop:300,tablet:300,mobile:300}},widthUnit:{type:"string",default:"px"},height:{type:"object",default:{desktop:300,tablet:300,mobile:300}},heightUnit:{type:"string",default:"px"},alignment:{type:"string",default:"center"},backgroundColor:{type:"string",default:""},showControls:{type:"boolean",default:!1},padding:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},margin:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderStyle:{type:"string",default:"none"},borderWidth:{type:"object",default:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderRadius:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderColor:{type:"string",default:"#e0e0e0"},shadow:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0}},animation:{type:"string",default:"none"}},example:{attributes:{lottieSource:"https://lottie.host/74c2e0cc-daa3-4269-b9a8-3205d6cd70d6/V7KchLpRt2.lottie",autoplay:!0,loop:!0,width:{desktop:300,tablet:300,mobile:300},height:{desktop:300,tablet:300,mobile:300}}},edit:Ld,save:Od});var{__:je}=window.wp.i18n,{useBlockProps:wh,InspectorControls:Sh,PanelColorSettings:zl,RichText:Us}=window.wp.blockEditor,{TextControl:Qa,ToggleControl:ji,SelectControl:Ja,RangeControl:js,TabPanel:$h,Notice:_h,Button:Bh,__experimentalToggleGroupControl:Th,__experimentalToggleGroupControlOption:Ud}=window.wp.components,{useState:jd,useEffect:Vd,useRef:Nh}=window.wp.element,{useBlockId:Hh,getDimensionCSS:Ml,animations:Dl,animationPreview:Fd}=digi.utils,{tabIcons:Vs}=digi.icons,{ResponsiveButtonGroup:zh,ResponsiveControl:It,DimensionControl:Pl,TypographyControl:Ya,BoxShadowControl:Fs,CustomTabPanel:Mh,TabPanelBody:gt,ResponsiveRangeControl:Ed}=digi.components,Dh=({attributes:ie,setAttributes:e,clientId:X})=>{let{id:o,anchor:P,visibility:n,customClasses:te,layout:l,align:_,title:v,showTitle:M,description:N,showDescription:m,emailPlaceholder:s,namePlaceholder:$,buttonText:I,showNameField:C,successMessage:k,errorMessage:B,titleColor:O,titleHoverColor:T,descriptionColor:V,inputTextColor:Z,inputBackgroundColor:ee,inputBorderColor:E,inputBorderFocusColor:f,inputPlaceholderColor:b,buttonTextColor:D,buttonBackgroundColor:le,buttonTextHoverColor:We,buttonBackgroundHoverColor:Se,buttonBorderColor:K,buttonBorderHoverColor:L,backgroundColor:oe,backgroundHoverColor:q,containerBorderColor:J,containerBorderHoverColor:A,titleTypography:re,contentTypography:se,textTypography:Ce,buttonTypography:Y,containerBorderRadius:de,containerBorderWidth:He,containerBorderStyle:be,inputBorderRadius:H,inputBorderWidth:xe,inputBorderStyle:x,buttonBorderRadius:ve,buttonBorderWidth:U,buttonBorderStyle:me,spacing:Te,inputSpacing:qe,padding:Ve,margin:Ee,boxShadow:Oe,boxShadowHover:j,buttonBoxShadow:ye,buttonBoxShadowHover:Je,inputBoxShadow:G,inputBoxShadowHover:pe,animation:R}=ie;Hh(o,X,e);let[d,ce]=jd(window.digi.responsiveState.activeDevice),[S,g]=jd(()=>{if(window.digi.uiState){let t=window.digi.uiState.getActiveTab(X);if(t)return t}return"options"});Vd(()=>window.digi.responsiveState.subscribe(p=>{ce(p)}),[]);let Q=Nh(null);Vd(()=>{if(R&&R!=="none"){let t=setTimeout(()=>{Fd(o,R,Dl,Q)},100);return()=>clearTimeout(t)}},[R]);let c=()=>{Fd(o,R,Dl,Q)},ae=[{label:je("None","digiblocks"),value:"none"},...Object.keys(Dl).map(t=>({label:t.replace(/-/g," ").replace(/\b\w/g,p=>p.toUpperCase()),value:t}))],y=[{label:je("Stacked","digiblocks"),value:"stacked"},{label:je("Inline","digiblocks"),value:"inline"}],u=[{label:je("None","digiblocks"),value:"none"},{label:je("Solid","digiblocks"),value:"solid"},{label:je("Dashed","digiblocks"),value:"dashed"},{label:je("Dotted","digiblocks"),value:"dotted"},{label:je("Double","digiblocks"),value:"double"}],Ne=[{name:"options",title:je("Options","digiblocks"),icon:Vs.optionsIcon},{name:"style",title:je("Style","digiblocks"),icon:Vs.styleIcon},{name:"advanced",title:je("Advanced","digiblocks"),icon:Vs.advancedIcon}],a=[{name:"normal",title:je("Normal","digiblocks"),className:"digiblocks-tab-1 normal"},{name:"hover",title:je("Hover","digiblocks"),className:"digiblocks-tab-2 hover"}],ue=()=>{let t=d,p="";return R&&R!=="none"&&Dl[R]&&(p=Dl[R].keyframes),`
            /* Newsletter Block - ${o} */
            .${o} {
                ${Ml(Ve,"padding",t)}
                ${Ml(Ee,"margin",t)}
                ${oe?`background-color: ${oe};`:""}
                ${Oe?.enable?`box-shadow: ${Oe.horizontal}px ${Oe.vertical}px ${Oe.blur}px ${Oe.spread}px ${Oe.color};`:""}
				${be!=="none"?"border: "+(He[t]||1)+"px "+(be||"solid")+" "+J+";":"border: none;"}
                ${Ml(de,"border-radius",t)}
                transition: all 0.3s ease;
                text-align: ${_[t]==="center"?"center":_[t]==="right"?"right":"left"};
            }

            .${o}:hover {
                ${q?`background-color: ${q};`:""}
                ${A?`border-color: ${A};`:""}
                ${j?.enable?`box-shadow: ${j.horizontal}px ${j.vertical}px ${j.blur}px ${j.spread}px ${j.color};`:""}
            }

            /* Newsletter Title */
            .${o} .digiblocks-newsletter-title {
                color: ${O};
                margin-top: 0;
                margin-bottom: ${Te[t]?.value||20}${Te[t]?.unit||"px"};
                ${re.fontFamily?`font-family: ${re.fontFamily};`:""}
                ${re.fontSize?.[t]?`font-size: ${re.fontSize[t]}${re.fontSizeUnit||"px"};`:""}
                ${re.fontWeight?`font-weight: ${re.fontWeight};`:""}
                ${re.fontStyle?`font-style: ${re.fontStyle};`:""}
                ${re.textTransform?`text-transform: ${re.textTransform};`:""}
                ${re.textDecoration?`text-decoration: ${re.textDecoration};`:""}
                ${re.lineHeight?.[t]?`line-height: ${re.lineHeight[t]}${re.lineHeightUnit||"em"};`:""}
                ${re.letterSpacing?.[t]?`letter-spacing: ${re.letterSpacing[t]}${re.letterSpacingUnit||"px"};`:""}
                transition: color 0.3s ease;
            }

            .${o}:hover .digiblocks-newsletter-title {
                ${T?`color: ${T};`:""}
            }

            /* Newsletter Description */
            .${o} .digiblocks-newsletter-description {
                color: ${V};
                margin-bottom: ${Te[t]?.value||20}${Te[t]?.unit||"px"};
                ${se.fontFamily?`font-family: ${se.fontFamily};`:""}
                ${se.fontSize?.[t]?`font-size: ${se.fontSize[t]}${se.fontSizeUnit||"px"};`:""}
                ${se.fontWeight?`font-weight: ${se.fontWeight};`:""}
                ${se.fontStyle?`font-style: ${se.fontStyle};`:""}
                ${se.textTransform?`text-transform: ${se.textTransform};`:""}
                ${se.textDecoration?`text-decoration: ${se.textDecoration};`:""}
                ${se.lineHeight?.[t]?`line-height: ${se.lineHeight[t]}${se.lineHeightUnit||"em"};`:""}
                ${se.letterSpacing?.[t]?`letter-spacing: ${se.letterSpacing[t]}${se.letterSpacingUnit||"px"};`:""}
            }

            /* Newsletter Form */
            .${o} .digiblocks-newsletter-form {
                display: flex;
                ${l==="stacked"?"flex-direction: column;":"flex-direction: row;"}
                gap: ${qe[t]?.value||10}${qe[t]?.unit||"px"};
                ${l==="inline"&&_[t]==="center"?"justify-content: center;":""}
                ${l==="inline"&&_[t]==="right"?"justify-content: flex-end;":""}
            }

            /* Form Fields */
            .${o} .digiblocks-newsletter-fields {
                display: flex;
                ${l==="stacked"?"flex-direction: column;":"flex-direction: row;"}
                gap: ${qe[t]?.value||10}${qe[t]?.unit||"px"};
                ${l==="inline"?"flex: 1;":"width: 100%;"}
            }

            .${o} .digiblocks-newsletter-field {
                ${l==="stacked"?"width: 100%;":"flex: 1;"}
            }

            /* Input Container with Icon */
            .${o} .digiblocks-newsletter-input-container {
                position: relative;
                width: 100%;
                display: flex;
                align-items: center;
            }

            .${o} .digiblocks-newsletter-input-icon {
                position: absolute;
                left: 16px;
                top: 50%;
                transform: translateY(-50%);
                ${Ce.fontSize?.[t]?`width: ${Ce.fontSize[t]}${Ce.fontSizeUnit||"px"};`:"width: 1em;"}
                ${Ce.fontSize?.[t]?`height: ${Ce.fontSize[t]}${Ce.fontSizeUnit||"px"};`:"height: 1em;"}
                fill: ${Z};
                pointer-events: none;
                z-index: 2;
                opacity: 0.7;
                transition: all 0.3s ease;
            }

            /* Input Styles */
            .${o} .digiblocks-newsletter-input {
                width: 100%;
                padding: 12px 16px 12px 50px;
                color: ${Z};
                background-color: ${ee};
				${x!=="none"?"border: "+(xe[t]||1)+"px "+(x||"solid")+" "+E+";":"border: none;"}
                ${Ml(H,"border-radius",t)}
                ${G?.enable?`box-shadow: ${G.horizontal}px ${G.vertical}px ${G.blur}px ${G.spread}px ${G.color};`:""}
                ${Ce.fontFamily?`font-family: ${Ce.fontFamily};`:""}
                ${Ce.fontSize?.[t]?`font-size: ${Ce.fontSize[t]}${Ce.fontSizeUnit||"px"};`:""}
                ${Ce.fontWeight?`font-weight: ${Ce.fontWeight};`:""}
                ${Ce.fontStyle?`font-style: ${Ce.fontStyle};`:""}
                ${Ce.textTransform?`text-transform: ${Ce.textTransform};`:""}
                ${Ce.textDecoration?`text-decoration: ${Ce.textDecoration};`:""}
                ${Ce.lineHeight?.[t]?`line-height: ${Ce.lineHeight[t]}${Ce.lineHeightUnit||"em"};`:""}
                ${Ce.letterSpacing?.[t]?`letter-spacing: ${Ce.letterSpacing[t]}${Ce.letterSpacingUnit||"px"};`:""}
                transition: all 0.3s ease;
                outline: none;
				box-shadow: none;
            }

            .${o} .digiblocks-newsletter-input::placeholder {
                color: ${b};
            }

            .${o} .digiblocks-newsletter-input:focus {
                border-color: ${f};
                ${pe?.enable?`box-shadow: ${pe.horizontal}px ${pe.vertical}px ${pe.blur}px ${pe.spread}px ${pe.color};`:""}
            }

            .${o} .digiblocks-newsletter-input:focus + .digiblocks-newsletter-input-icon {
                opacity: 1;
                fill: ${f||Z};
            }

            /* Button Styles */
            .${o} .digiblocks-newsletter-button {
                padding: 12px 24px;
                color: ${D};
                background-color: ${le};
				${me!=="none"?"border: "+(U[t]||1)+"px "+(me||"solid")+" "+K+";":"border: none;"}
                ${Ml(ve,"border-radius",t)}
                ${ye?.enable?`box-shadow: ${ye.horizontal}px ${ye.vertical}px ${ye.blur}px ${ye.spread}px ${ye.color};`:""}
                ${Y.fontFamily?`font-family: ${Y.fontFamily};`:""}
                ${Y.fontSize?.[t]?`font-size: ${Y.fontSize[t]}${Y.fontSizeUnit||"px"};`:""}
                ${Y.fontWeight?`font-weight: ${Y.fontWeight};`:""}
                ${Y.fontStyle?`font-style: ${Y.fontStyle};`:""}
                ${Y.textTransform?`text-transform: ${Y.textTransform};`:""}
                ${Y.textDecoration?`text-decoration: ${Y.textDecoration};`:""}
                ${Y.lineHeight?.[t]?`line-height: ${Y.lineHeight[t]}${Y.lineHeightUnit||"em"};`:""}
                ${Y.letterSpacing?.[t]?`letter-spacing: ${Y.letterSpacing[t]}${Y.letterSpacingUnit||"px"};`:""}
                cursor: pointer;
                transition: all 0.3s ease;
                ${l==="stacked"?"width: 100%;":"white-space: nowrap;"}
            }

            .${o} .digiblocks-newsletter-button:hover {
                color: ${We||D};
                background-color: ${Se||le};
                border-color: ${L||K};
                ${Je?.enable?`box-shadow: ${Je.horizontal}px ${Je.vertical}px ${Je.blur}px ${Je.spread}px ${Je.color};`:""}
            }

            /* Messages */
            .${o} .digiblocks-newsletter-message {
                margin-top: ${Te[t]}px;
                padding: 12px;
                border-radius: 4px;
                display: none;
            }

            .${o} .digiblocks-newsletter-message.success {
                background-color: #d4edda;
                color: #155724;
                border: 1px solid #c3e6cb;
            }

            .${o} .digiblocks-newsletter-message.error {
                background-color: #f8d7da;
                color: #721c24;
                border: 1px solid #f5c6cb;
            }

            /* Animation keyframes */
            ${p}

			/* Responsive */
			@media (max-width: 767px) {
				.${o} .digiblocks-newsletter-form {
					flex-direction: column;
				}
			}

			/* Visibility Controls */
			${n.desktop?`
				@media (min-width: 992px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${n.tablet?`
				@media (min-width: 768px) and (max-width: 991px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${n.mobile?`
				@media (max-width: 767px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}
        `},Fe=()=>{switch(S){case"options":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(gt,{tab:"options",name:"content",title:je("Content","digiblocks"),initialOpen:!0},wp.element.createElement(_h,{status:"warning",isDismissible:!1,className:"digiblocks-notice components-base-control"},wp.element.createElement(wp.element.Fragment,null,je("Configure your newsletter platform in ","digiblocks"),wp.element.createElement("a",{href:"/wp-admin/admin.php?page=digiblocks-settings",target:"_blank",rel:"noopener noreferrer"},je("DigiBlocks Settings","digiblocks")),je(" to enable subscriptions.","digiblocks"))),wp.element.createElement(ji,{label:je("Show Title","digiblocks"),checked:M,onChange:t=>e({showTitle:t}),__nextHasNoMarginBottom:!0}),wp.element.createElement(ji,{label:je("Show Description","digiblocks"),checked:m,onChange:t=>e({showDescription:t}),__nextHasNoMarginBottom:!0}),wp.element.createElement(ji,{label:je("Show Name Field","digiblocks"),checked:C,onChange:t=>e({showNameField:t}),__nextHasNoMarginBottom:!0}),wp.element.createElement(Qa,{label:je("Email Placeholder","digiblocks"),value:s,onChange:t=>e({emailPlaceholder:t}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),C&&wp.element.createElement(Qa,{label:je("Name Placeholder","digiblocks"),value:$,onChange:t=>e({namePlaceholder:t}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Qa,{label:je("Success Message","digiblocks"),value:k,onChange:t=>e({successMessage:t}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Qa,{label:je("Error Message","digiblocks"),value:B,onChange:t=>e({errorMessage:t}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(gt,{tab:"options",name:"layout",title:je("Layout","digiblocks"),initialOpen:!1},wp.element.createElement(Th,{label:je("Layout","digiblocks"),value:l,onChange:t=>e({layout:t}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(Ud,{value:"stacked",label:je("Stacked","digiblocks")}),wp.element.createElement(Ud,{value:"inline",label:je("Inline","digiblocks")})),wp.element.createElement(zh,{label:je("Alignment","digiblocks"),value:_,onChange:t=>e({align:t}),options:[{label:je("Left","digiblocks"),value:"left"},{label:je("Center","digiblocks"),value:"center"},{label:je("Right","digiblocks"),value:"right"}]}),wp.element.createElement(Ed,{label:je("Content Spacing","digiblocks"),value:Te,onChange:t=>e({spacing:t}),units:[{label:"px",value:"px"},{label:"em",value:"em"},{label:"rem",value:"rem"}],defaultUnit:"px",min:0,max:100,step:1,defaultValues:{desktop:{value:20,unit:"px"},tablet:{value:20,unit:"px"},mobile:{value:20,unit:"px"}}}),wp.element.createElement(Ed,{label:je("Field Spacing","digiblocks"),value:qe,onChange:t=>e({inputSpacing:t}),units:[{label:"px",value:"px"},{label:"em",value:"em"},{label:"rem",value:"rem"}],defaultUnit:"px",min:0,max:50,step:1,defaultValues:{desktop:{value:10,unit:"px"},tablet:{value:8,unit:"px"},mobile:{value:6,unit:"px"}}})));case"style":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(gt,{tab:"style",name:"colors",title:je("Colors","digiblocks"),initialOpen:!0},wp.element.createElement($h,{className:"digiblocks-control-tabs",activeClass:"active-tab",tabs:a},t=>t.name==="normal"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(zl,{title:je("Text Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:O,onChange:p=>e({titleColor:p}),label:je("Title Color","digiblocks")},{value:V,onChange:p=>e({descriptionColor:p}),label:je("Description Color","digiblocks")}]}),wp.element.createElement(zl,{title:je("Input Colors","digiblocks"),initialOpen:!1,enableAlpha:!0,colorSettings:[{value:Z,onChange:p=>e({inputTextColor:p}),label:je("Input Text Color","digiblocks")},{value:ee,onChange:p=>e({inputBackgroundColor:p}),label:je("Input Background","digiblocks")},{value:E,onChange:p=>e({inputBorderColor:p}),label:je("Input Border","digiblocks")},{value:f,onChange:p=>e({inputBorderFocusColor:p}),label:je("Input Border Focus","digiblocks")},{value:b,onChange:p=>e({inputPlaceholderColor:p}),label:je("Placeholder Color","digiblocks")}]}),wp.element.createElement(zl,{title:je("Button Colors","digiblocks"),initialOpen:!1,enableAlpha:!0,colorSettings:[{value:D,onChange:p=>e({buttonTextColor:p}),label:je("Button Text","digiblocks")},{value:le,onChange:p=>e({buttonBackgroundColor:p}),label:je("Button Background","digiblocks")},{value:K,onChange:p=>e({buttonBorderColor:p}),label:je("Button Border","digiblocks")}]}),wp.element.createElement(zl,{title:je("Background Colors","digiblocks"),initialOpen:!1,enableAlpha:!0,colorSettings:[{value:oe,onChange:p=>e({backgroundColor:p}),label:je("Background Color","digiblocks")},{value:J,onChange:p=>e({containerBorderColor:p}),label:je("Border Color","digiblocks")}]})):wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(zl,{title:je("Hover Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:T,onChange:p=>e({titleHoverColor:p}),label:je("Title Hover Color","digiblocks")},{value:We,onChange:p=>e({buttonTextHoverColor:p}),label:je("Button Text Hover","digiblocks")},{value:Se,onChange:p=>e({buttonBackgroundHoverColor:p}),label:je("Button Background Hover","digiblocks")},{value:L,onChange:p=>e({buttonBorderHoverColor:p}),label:je("Button Border Hover","digiblocks")},{value:q,onChange:p=>e({backgroundHoverColor:p}),label:je("Background Hover","digiblocks")},{value:A,onChange:p=>e({containerBorderHoverColor:p}),label:je("Border Hover","digiblocks")}]})))),wp.element.createElement(gt,{tab:"style",name:"typography",title:je("Typography","digiblocks"),initialOpen:!1},wp.element.createElement(Ya,{label:je("Title Typography","digiblocks"),value:re,onChange:t=>e({titleTypography:t}),defaults:{fontSize:{desktop:24,tablet:22,mobile:20},fontWeight:"600",lineHeight:{desktop:1.4,tablet:1.3,mobile:1.2}}}),wp.element.createElement(Ya,{label:je("Description Typography","digiblocks"),value:se,onChange:t=>e({contentTypography:t}),defaults:{fontSize:{desktop:16,tablet:15,mobile:14},lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3}}}),wp.element.createElement(Ya,{label:je("Input Typography","digiblocks"),value:Ce,onChange:t=>e({textTypography:t}),defaults:{fontSize:{desktop:16,tablet:15,mobile:14},lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3}}}),wp.element.createElement(Ya,{label:je("Button Typography","digiblocks"),value:Y,onChange:t=>e({buttonTypography:t}),defaults:{fontSize:{desktop:16,tablet:15,mobile:14},fontWeight:"500",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3}}})),wp.element.createElement(gt,{tab:"style",name:"borders",title:je("Borders & Radius","digiblocks"),initialOpen:!1},wp.element.createElement("h4",null,je("Container Border","digiblocks")),wp.element.createElement(Ja,{label:je("Container Border Style","digiblocks"),value:be,options:u,onChange:t=>e({containerBorderStyle:t}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(It,{label:je("Container Border Width","digiblocks")},wp.element.createElement(js,{value:He[d],onChange:t=>e({containerBorderWidth:{...He,[d]:t}}),min:0,max:10,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(It,{label:je("Container Border Radius","digiblocks")},wp.element.createElement(Pl,{values:de[d],onChange:t=>e({containerBorderRadius:{...de,[d]:t}}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]})),wp.element.createElement("h4",null,je("Input Border","digiblocks")),wp.element.createElement(Ja,{label:je("Input Border Style","digiblocks"),value:x,options:u,onChange:t=>e({inputBorderStyle:t}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(It,{label:je("Input Border Width","digiblocks")},wp.element.createElement(js,{value:xe[d],onChange:t=>e({inputBorderWidth:{...xe,[d]:t}}),min:0,max:10,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(It,{label:je("Input Border Radius","digiblocks")},wp.element.createElement(Pl,{values:H[d],onChange:t=>e({inputBorderRadius:{...H,[d]:t}}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]})),wp.element.createElement("h4",null,je("Button Border","digiblocks")),wp.element.createElement(Ja,{label:je("Button Border Style","digiblocks"),value:me,options:u,onChange:t=>e({buttonBorderStyle:t}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(It,{label:je("Button Border Width","digiblocks")},wp.element.createElement(js,{value:U[d],onChange:t=>e({buttonBorderWidth:{...U,[d]:t}}),min:0,max:10,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(It,{label:je("Button Border Radius","digiblocks")},wp.element.createElement(Pl,{values:ve[d],onChange:t=>e({buttonBorderRadius:{...ve,[d]:t}}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]}))),wp.element.createElement(gt,{tab:"style",name:"shadow",title:je("Box Shadow","digiblocks"),initialOpen:!1},wp.element.createElement(Fs,{label:je("Container Shadow","digiblocks"),normalValue:Oe,hoverValue:j,onNormalChange:t=>e({boxShadow:t}),onHoverChange:t=>e({boxShadowHover:t})}),wp.element.createElement(Fs,{label:je("Input Shadow","digiblocks"),normalValue:G,hoverValue:pe,onNormalChange:t=>e({inputBoxShadow:t}),onHoverChange:t=>e({inputBoxShadowHover:t})}),wp.element.createElement(Fs,{label:je("Button Shadow","digiblocks"),normalValue:ye,hoverValue:Je,onNormalChange:t=>e({buttonBoxShadow:t}),onHoverChange:t=>e({buttonBoxShadowHover:t})})),wp.element.createElement(gt,{tab:"style",name:"spacing",title:je("Spacing","digiblocks"),initialOpen:!1},wp.element.createElement(It,{label:je("Padding","digiblocks")},wp.element.createElement(Pl,{values:Ve[d],onChange:t=>e({padding:{...Ve,[d]:t}})})),wp.element.createElement(It,{label:je("Margin","digiblocks")},wp.element.createElement(Pl,{values:Ee[d],onChange:t=>e({margin:{...Ee,[d]:t}})}))));case"advanced":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(gt,{tab:"advanced",name:"animation",title:je("Animation","digiblocks"),initialOpen:!0},wp.element.createElement(Ja,{label:je("Animation Effect","digiblocks"),value:R,options:ae,onChange:t=>e({animation:t}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),R&&R!=="none"&&wp.element.createElement("div",{style:{marginTop:"10px"}},wp.element.createElement(Bh,{variant:"secondary",isSecondary:!0,onClick:c,style:{width:"100%"}},je("Preview Animation","digiblocks")))),wp.element.createElement(gt,{tab:"advanced",name:"visibility",title:je("Visibility","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control__help",style:{padding:"12px",backgroundColor:"#f0f6fc",border:"1px solid #c3ddfd",borderRadius:"4px",marginBottom:"16px"}},wp.element.createElement("strong",null,je("Editor Note:","digiblocks")),wp.element.createElement("br",null),je("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.","digiblocks")),wp.element.createElement(ji,{label:je("Hide on Desktop","digiblocks"),checked:n.desktop,onChange:t=>e({visibility:{...n,desktop:t}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(ji,{label:je("Hide on Tablet","digiblocks"),checked:n.tablet,onChange:t=>e({visibility:{...n,tablet:t}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(ji,{label:je("Hide on Mobile","digiblocks"),checked:n.mobile,onChange:t=>e({visibility:{...n,mobile:t}}),__nextHasNoMarginBottom:!0})),wp.element.createElement(gt,{tab:"advanced",name:"additional",title:je("Additional","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control html-anchor-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"html-anchor"},je("HTML anchor","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"html-anchor",value:P||"",onChange:t=>e({anchor:t.target.value}),"aria-describedby":"html-anchor-help",autoCapitalize:"none",autoComplete:"off"})),wp.element.createElement("p",{id:"html-anchor-help",className:"components-base-control__help"},je(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`,"digiblocks")," ",wp.element.createElement("a",{className:"components-external-link",href:"https://wordpress.org/documentation/article/page-jumps/",target:"_blank",rel:"external noreferrer noopener"},wp.element.createElement("span",{className:"components-external-link__contents"},je("Learn more about anchors","digiblocks")),wp.element.createElement("span",{className:"components-external-link__icon","aria-label":"(opens in a new tab)"},"\u2197")))),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"additional-css-classes"},je("Additional CSS class(es)","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"additional-css-classes",value:te||"",onChange:t=>e({customClasses:t.target.value}),"aria-describedby":"additional-css-classes-help",autoComplete:"off"})),wp.element.createElement("p",{id:"additional-css-classes-help",className:"components-base-control__help"},je("Separate multiple classes with spaces.","digiblocks")))));default:return null}},eo=R!=="none"?` animate-${R}`:"",ao=`digiblocks-newsletter ${o}${eo} ${te||""}`,go=wh({className:ao,id:P||null});return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Sh,null,wp.element.createElement(Mh,{tabs:Ne,activeTab:S,onSelect:g},Fe())),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:ue()}}),wp.element.createElement("div",{...go},M&&wp.element.createElement(Us,{tagName:"h3",className:"digiblocks-newsletter-title",value:v,onChange:t=>e({title:t}),placeholder:je("Subscribe to our Newsletter","digiblocks")}),m&&wp.element.createElement(Us,{tagName:"p",className:"digiblocks-newsletter-description",value:N,onChange:t=>e({description:t}),placeholder:je("Stay updated with our latest news and offers","digiblocks")}),wp.element.createElement("form",{className:"digiblocks-newsletter-form",onSubmit:t=>t.preventDefault()},wp.element.createElement("div",{className:"digiblocks-newsletter-fields"},C&&wp.element.createElement("div",{className:"digiblocks-newsletter-field"},wp.element.createElement("div",{className:"digiblocks-newsletter-input-container"},wp.element.createElement("input",{type:"text",className:"digiblocks-newsletter-input",placeholder:$,disabled:!0}),wp.element.createElement("svg",{className:"digiblocks-newsletter-input-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M320 128a96 96 0 1 0 -192 0 96 96 0 1 0 192 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM32 480l384 0c-1.2-79.7-66.2-144-146.3-144l-91.4 0c-80 0-145 64.3-146.3 144zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z"})))),wp.element.createElement("div",{className:"digiblocks-newsletter-field"},wp.element.createElement("div",{className:"digiblocks-newsletter-input-container"},wp.element.createElement("input",{type:"email",className:"digiblocks-newsletter-input",placeholder:s,disabled:!0}),wp.element.createElement("svg",{className:"digiblocks-newsletter-input-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M392 32L120 32c-13.3 0-24 10.7-24 24l0 166.5L77.5 207.2c-4.2-3.4-8.7-6.3-13.5-8.6L64 56C64 25.1 89.1 0 120 0L392 0c30.9 0 56 25.1 56 56l0 142.6c-4.8 2.3-9.3 5.2-13.4 8.6L416 222.5 416 56c0-13.3-10.7-24-24-24zM35 256c-1.6 0-3 1.3-3 3l0 189c0 17.7 14.3 32 32 32l384 0c17.7 0 32-14.3 32-32l0-189c0-1.6-1.3-3-3-3c-.7 0-1.3 .2-1.9 .7L294.5 405.1C283.7 414 270 418.9 256 418.9s-27.7-4.9-38.5-13.8L36.8 256.7c-.5-.4-1.2-.7-1.9-.7zM0 259c0-19.3 15.6-35 35-35c8.1 0 15.9 2.8 22.2 7.9L237.8 380.3c5.1 4.2 11.6 6.5 18.2 6.5s13.1-2.3 18.2-6.5L454.9 231.9c6.3-5.1 14.1-7.9 22.2-7.9c19.3 0 35 15.6 35 35l0 189c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 259zM176 128l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 96l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"}))))),wp.element.createElement(Us,{tagName:"button",className:"digiblocks-newsletter-button",value:I,onChange:t=>e({buttonText:t}),placeholder:je("Subscribe","digiblocks")})),wp.element.createElement("div",{className:"digiblocks-newsletter-message success"},k),wp.element.createElement("div",{className:"digiblocks-newsletter-message error"},B)))},Wd=Dh;var{useBlockProps:Ph,RichText:Es}=window.wp.blockEditor,Rh=({attributes:ie})=>{let{id:e,anchor:X,customClasses:o,title:P,showTitle:n,description:te,showDescription:l,emailPlaceholder:_,namePlaceholder:v,buttonText:M,showNameField:N,successMessage:m,errorMessage:s,animation:$}=ie,I=$!=="none"?` animate-${$}`:"",C=`digiblocks-newsletter ${e}${I} ${o||""}`,k=Ph.save({className:C,id:X||null});return wp.element.createElement("div",{...k},n&&wp.element.createElement(Es.Content,{tagName:"h3",className:"digiblocks-newsletter-title",value:P}),l&&wp.element.createElement(Es.Content,{tagName:"p",className:"digiblocks-newsletter-description",value:te}),wp.element.createElement("form",{className:"digiblocks-newsletter-form",method:"post"},wp.element.createElement("div",{className:"digiblocks-newsletter-fields"},N&&wp.element.createElement("div",{className:"digiblocks-newsletter-field"},wp.element.createElement("div",{className:"digiblocks-newsletter-input-container"},wp.element.createElement("input",{type:"text",name:"digiblocks_newsletter_name",className:"digiblocks-newsletter-input",placeholder:v,required:N}),wp.element.createElement("svg",{className:"digiblocks-newsletter-input-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M320 128a96 96 0 1 0 -192 0 96 96 0 1 0 192 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM32 480l384 0c-1.2-79.7-66.2-144-146.3-144l-91.4 0c-80 0-145 64.3-146.3 144zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z"})))),wp.element.createElement("div",{className:"digiblocks-newsletter-field"},wp.element.createElement("div",{className:"digiblocks-newsletter-input-container"},wp.element.createElement("input",{type:"email",name:"digiblocks_newsletter_email",className:"digiblocks-newsletter-input",placeholder:_,required:!0}),wp.element.createElement("svg",{className:"digiblocks-newsletter-input-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M392 32L120 32c-13.3 0-24 10.7-24 24l0 166.5L77.5 207.2c-4.2-3.4-8.7-6.3-13.5-8.6L64 56C64 25.1 89.1 0 120 0L392 0c30.9 0 56 25.1 56 56l0 142.6c-4.8 2.3-9.3 5.2-13.4 8.6L416 222.5 416 56c0-13.3-10.7-24-24-24zM35 256c-1.6 0-3 1.3-3 3l0 189c0 17.7 14.3 32 32 32l384 0c17.7 0 32-14.3 32-32l0-189c0-1.6-1.3-3-3-3c-.7 0-1.3 .2-1.9 .7L294.5 405.1C283.7 414 270 418.9 256 418.9s-27.7-4.9-38.5-13.8L36.8 256.7c-.5-.4-1.2-.7-1.9-.7zM0 259c0-19.3 15.6-35 35-35c8.1 0 15.9 2.8 22.2 7.9L237.8 380.3c5.1 4.2 11.6 6.5 18.2 6.5s13.1-2.3 18.2-6.5L454.9 231.9c6.3-5.1 14.1-7.9 22.2-7.9c19.3 0 35 15.6 35 35l0 189c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 259zM176 128l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 96l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"}))))),wp.element.createElement("button",{type:"submit",className:"digiblocks-newsletter-button"},wp.element.createElement(Es.Content,{value:M})),wp.element.createElement("input",{type:"hidden",name:"action",value:"digiblocks_newsletter_subscribe"}),wp.element.createElement("input",{type:"hidden",name:"digiblocks_newsletter_nonce",value:""}),wp.element.createElement("input",{type:"hidden",name:"block_id",value:e})),wp.element.createElement("div",{className:"digiblocks-newsletter-message success",style:{display:"none"}},m),wp.element.createElement("div",{className:"digiblocks-newsletter-message error",style:{display:"none"}},s))},qd=Rh;var{__:_o}=window.wp.i18n,{registerBlockType:Ih}=window.wp.blocks,{getBlockActiveStatus:Lh}=window.wp.digiBlocks;Ih("digiblocks/newsletter",{apiVersion:2,title:digiBlocksData.blocks.newsletter.title,category:"digiblocks",icon:{src:()=>{let{viewbox:ie,path:e}=digiBlocksData.blocks.newsletter.icon;return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${ie}`,className:"digiblocks-editor-icons"},wp.element.createElement("path",{d:e}))}},description:digiBlocksData.blocks.newsletter.description,keywords:[_o("newsletter","digiblocks"),_o("subscribe","digiblocks"),_o("email","digiblocks"),_o("mailchimp","digiblocks")],supports:{inserter:!!Lh("newsletter"),html:!1,className:!1,customClassName:!1,anchor:!1},attributes:{id:{type:"string",default:""},anchor:{type:"string",default:""},visibility:{type:"object",default:{desktop:!1,tablet:!1,mobile:!1}},customClasses:{type:"string",default:""},layout:{type:"string",default:"stacked"},align:{type:"object",default:{desktop:"left",tablet:"left",mobile:"left"}},title:{type:"string",default:_o("Subscribe to our Newsletter","digiblocks")},showTitle:{type:"boolean",default:!0},description:{type:"string",default:_o("Stay updated with our latest news and offers","digiblocks")},showDescription:{type:"boolean",default:!0},emailPlaceholder:{type:"string",default:_o("Enter your email address","digiblocks")},namePlaceholder:{type:"string",default:_o("Enter your name","digiblocks")},buttonText:{type:"string",default:_o("Subscribe","digiblocks")},showNameField:{type:"boolean",default:!1},successMessage:{type:"string",default:_o("Thank you for subscribing!","digiblocks")},errorMessage:{type:"string",default:_o("Something went wrong. Please try again.","digiblocks")},titleColor:{type:"string",default:"#333333"},titleHoverColor:{type:"string",default:""},descriptionColor:{type:"string",default:"#666666"},inputTextColor:{type:"string",default:"#333333"},inputBackgroundColor:{type:"string",default:"#ffffff"},inputBorderColor:{type:"string",default:"#e0e0e0"},inputBorderFocusColor:{type:"string",default:"#4a6cf7"},inputPlaceholderColor:{type:"string",default:"#999999"},buttonTextColor:{type:"string",default:"#ffffff"},buttonBackgroundColor:{type:"string",default:"#4a6cf7"},buttonTextHoverColor:{type:"string",default:""},buttonBackgroundHoverColor:{type:"string",default:""},buttonBorderColor:{type:"string",default:""},buttonBorderHoverColor:{type:"string",default:""},backgroundColor:{type:"string",default:""},backgroundHoverColor:{type:"string",default:""},containerBorderColor:{type:"string",default:""},containerBorderHoverColor:{type:"string",default:""},titleTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:24,tablet:22,mobile:20},fontSizeUnit:"px",fontWeight:"600",fontStyle:"normal",textTransform:"none",textDecoration:"none",lineHeight:{desktop:1.4,tablet:1.3,mobile:1.2},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}},contentTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",fontWeight:"normal",fontStyle:"normal",textTransform:"none",textDecoration:"none",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}},textTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",fontWeight:"normal",fontStyle:"normal",textTransform:"none",textDecoration:"none",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}},buttonTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",fontWeight:"500",fontStyle:"normal",textTransform:"none",textDecoration:"none",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}},containerBorderRadius:{type:"object",default:{desktop:{top:4,right:4,bottom:4,left:4,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},containerBorderWidth:{type:"object",default:{desktop:1,tablet:1,mobile:1}},containerBorderStyle:{type:"string",default:"none"},inputBorderRadius:{type:"object",default:{desktop:{top:4,right:4,bottom:4,left:4,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},inputBorderWidth:{type:"object",default:{desktop:1,tablet:1,mobile:1}},inputBorderStyle:{type:"string",default:"solid"},buttonBorderRadius:{type:"object",default:{desktop:{top:4,right:4,bottom:4,left:4,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},buttonBorderWidth:{type:"object",default:{desktop:1,tablet:1,mobile:1}},buttonBorderStyle:{type:"string",default:"solid"},spacing:{type:"object",default:{desktop:{value:20,unit:"px"},tablet:{value:15,unit:"px"},mobile:{value:10,unit:"px"}}},inputSpacing:{type:"object",default:{desktop:{value:10,unit:"px"},tablet:{value:8,unit:"px"},mobile:{value:6,unit:"px"}}},padding:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},margin:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},boxShadow:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.1)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},boxShadowHover:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},buttonBoxShadow:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.1)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},buttonBoxShadowHover:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.15)",horizontal:0,vertical:2,blur:8,spread:0,position:"outset"}},inputBoxShadow:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.1)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},inputBoxShadowHover:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.15)",horizontal:0,vertical:2,blur:4,spread:0,position:"outset"}},animation:{type:"string",default:"none"}},example:{attributes:{title:_o("Subscribe to our Newsletter","digiblocks"),description:_o("Stay updated with our latest news and offers","digiblocks"),layout:"stacked",showTitle:!0,showDescription:!0,showNameField:!1,buttonText:_o("Subscribe","digiblocks")}},edit:Wd,save:qd});var{__:Be}=window.wp.i18n,{useBlockProps:Oh,InspectorControls:Uh,PanelColorSettings:Ws}=window.wp.blockEditor,{TextControl:jh,ToggleControl:Bo,SelectControl:Vi,RangeControl:Fi,Placeholder:Vh,Spinner:Fh,TabPanel:Eh,Button:Wh,__experimentalToggleGroupControl:Gd,__experimentalToggleGroupControlOption:Rl}=window.wp.components,{useState:Qd,useEffect:Jd,useMemo:qs,useRef:qh}=window.wp.element,{useSelect:Yd}=window.wp.data,{useBlockId:Gh,getDimensionCSS:Lt,animations:Il,animationPreview:Zd}=digi.utils,{tabIcons:Gs}=digi.icons,{ResponsiveControl:Ko,DimensionControl:ri,TypographyControl:Za,BoxShadowControl:Qh,CustomTabPanel:Jh,TabPanelBody:Xo}=digi.components,Yh=({attributes:ie,setAttributes:e,clientId:X})=>{let{id:o,anchor:P,visibility:n,customClasses:te,postsToShow:l,columns:_,postStyle:v,displayFeaturedImage:M,displayTitle:N,displayMeta:m,displayExcerpt:s,displayReadMoreButton:$,metaSettings:I,excerptLength:C,readMoreText:k,order:B,orderBy:O,categories:T,enablePagination:V,paginationAlign:Z,paginationBackgroundColor:ee,paginationTextColor:E,paginationActiveBackgroundColor:f,paginationActiveTextColor:b,titleColor:D,titleHoverColor:le,excerptColor:We,catBackgroundColor:Se,catColor:K,catHoverBackgroundColor:L,catHoverColor:oe,metaColor:q,metaHoverColor:J,buttonBackgroundColor:A,buttonTextColor:re,buttonBackgroundHoverColor:se,buttonTextHoverColor:Ce,imageMargin:Y,contentMargin:de,padding:He,margin:be,itemSpacing:H,titleTypography:xe,textTypography:x,contentTypography:ve,buttonTypography:U,buttonPadding:me,buttonBorderRadius:Te,imageSize:qe,imageBorderRadius:Ve,cardStyle:Ee,cardBackgroundColor:Oe,cardPadding:j,cardBorderRadius:ye,cardBorderStyle:Je,cardBorderWidth:G,cardBorderColor:pe,cardShadow:R,cardShadowHover:d,animation:ce}=ie;Gh(o,X,e);let[S,g]=Qd(window.digi.responsiveState.activeDevice),[Q,c]=Qd(()=>{if(window.digi.uiState){let i=window.digi.uiState.getActiveTab(X);if(i)return i}return"options"});Jd(()=>window.digi.responsiveState.subscribe(F=>{g(F)}),[]);let ae=qs(()=>{let i={per_page:l,order:B,orderby:O,_embed:!0};return T&&T.length>0&&!T.includes(0)&&(i.categories=T),i},[l,B,O,T]),y=qs(()=>({postsToShow:l,order:B,orderBy:O,categories:T&&T.length>0?T.join(","):""}),[l,B,O,T]),u=Yd(i=>{let{getEntityRecords:F}=i("core");return F("taxonomy","category",{per_page:-1})||[]},[]),Ne=qs(()=>[{label:Be("All Categories","digiblocks"),value:"0"},...u.map(i=>({label:i.name,value:i.id.toString()}))],[u]),a=Yd(i=>{let{getEntityRecords:F}=i("core"),Ue={per_page:l,order:B,orderby:O,_embed:!0};return T&&T.length>0&&!T.includes(0)&&(Ue.categories=T),F("postType","post",Ue)},[JSON.stringify(y)]),ue=qh(null);Jd(()=>{if(ce&&ce!=="none"){let i=setTimeout(()=>{Zd(o,ce,Il,ue)},100);return()=>clearTimeout(i)}},[ce]);let Fe=()=>{Zd(o,ce,Il,ue)},eo=[{label:Be("None","digiblocks"),value:"none"},...Object.keys(Il).map(i=>({label:i.replace(/-/g," ").replace(/\b\w/g,F=>F.toUpperCase()),value:i}))],ao=[{name:"options",title:Be("Options","digiblocks"),icon:Gs.optionsIcon},{name:"style",title:Be("Style","digiblocks"),icon:Gs.styleIcon},{name:"advanced",title:Be("Advanced","digiblocks"),icon:Gs.advancedIcon}],go=[{name:"normal",title:Be("Normal","digiblocks"),className:"digiblocks-tab-1 normal"},{name:"hover",title:Be("Hover","digiblocks"),className:"digiblocks-tab-2 hover"}],t=[{label:Be("Thumbnail","digiblocks"),value:"thumbnail"},{label:Be("Medium","digiblocks"),value:"medium"},{label:Be("Large","digiblocks"),value:"large"},{label:Be("Full","digiblocks"),value:"full"}],p=[{label:Be("Ascending","digiblocks"),value:"asc"},{label:Be("Descending","digiblocks"),value:"desc"}],De=[{label:Be("Date","digiblocks"),value:"date"},{label:Be("Title","digiblocks"),value:"title"},{label:Be("Author","digiblocks"),value:"author"},{label:Be("Modified Date","digiblocks"),value:"modified"},{label:Be("Comment Count","digiblocks"),value:"comment_count"}],r=[{label:Be("None","digiblocks"),value:"none"},{label:Be("Solid","digiblocks"),value:"solid"},{label:Be("Dashed","digiblocks"),value:"dashed"},{label:Be("Dotted","digiblocks"),value:"dotted"},{label:Be("Double","digiblocks"),value:"double"}],he=(i,F)=>{e({metaSettings:{...I,[i]:F}})},oo=()=>{let i=S,F="";return ce&&ce!=="none"&&Il[ce]&&(F=Il[ce].keyframes),`
            /* Posts Block - ${o} */
            .${o} {
				${Lt(He,"padding",i)}
				${Lt(be,"margin",i)}
                width: 100%;
            }
            
            /* Grid layout */
            .${o} .digiblocks-posts-container {
                display: ${v==="list"?"flex":"grid"};
				${v==="list"?"flex-direction: column;":""}
                ${v!=="list"?`grid-template-columns: repeat(${_[i]}, 1fr);`:""}
                gap: ${H[i]}px;
            }
            
            /* List layout */
            .${o}.style-list .digiblocks-post-item {
				flex-direction: row;
				flex-wrap: wrap;
				align-items: stretch;
            }
            
            .${o}.style-list .digiblocks-post-image {
                max-width: 35%;
				width: auto;
            }
            
            .${o}.style-list .digiblocks-post-image img {
                height: 100%;
				object-fit: cover;
            }
            
            .${o}.style-list .digiblocks-post-content {
                flex: 1;
            }
            
            /* Post item */
            .${o} .digiblocks-post-item {
				display: flex;
				flex-direction: column;
				gap: ${Y[i]}px;
                ${Ee?`
					background-color: ${Oe};
					${Lt(j,"padding",i)}
					${Lt(ye,"border-radius",i)}
					`:""}
                
                ${Ee&&Je!=="none"?`
					border-style: ${Je};
					border-color: ${pe};
					${Lt(G,"border-width",i)}
					`:""}
                
                ${Ee&&R?.enable?`box-shadow: ${R.horizontal}px ${R.vertical}px ${R.blur}px ${R.spread}px ${R.color};`:""}
                transition: all 0.3s ease;
            }

            .${o} .digiblocks-post-item:hover {
				transform: translateY(-3px);
                ${Ee&&d?.enable?`box-shadow: ${d.horizontal}px ${d.vertical}px ${d.blur}px ${d.spread}px ${d.color};`:""}
				border-color: ${pe}80;
            }
            
            /* Featured image */
            .${o} .digiblocks-post-image {
                width: 100%;
                overflow: hidden;
				${Lt(Ve,"border-radius",i)}
            }
            
            .${o} .digiblocks-post-image img {
                width: 100%;
                height: auto;
                display: block;
                transition: transform 0.3s ease;
            }

			/* Content */
			.${o} .digiblocks-post-content {
				display: flex;
				flex-direction: column;
				gap: ${de[i]}px;
			}
            
            /* Post title */
            .${o} .digiblocks-post-title {
                margin: 0;
                color: ${D};
                ${xe.fontFamily?`font-family: ${xe.fontFamily};`:""}
                ${xe.fontSize?.[i]?`font-size: ${xe.fontSize[i]}${xe.fontSizeUnit||"px"};`:""}
                ${xe.fontWeight?`font-weight: ${xe.fontWeight};`:""}
                ${xe.fontStyle?`font-style: ${xe.fontStyle};`:""}
                ${xe.textTransform?`text-transform: ${xe.textTransform};`:""}
                ${xe.textDecoration?`text-decoration: ${xe.textDecoration};`:""}
                ${xe.lineHeight?.[i]?`line-height: ${xe.lineHeight[i]}${xe.lineHeightUnit||"em"};`:""}
                ${xe.letterSpacing?.[i]?`letter-spacing: ${xe.letterSpacing[i]}${xe.letterSpacingUnit||"px"};`:""}
            }
            
            .${o} .digiblocks-post-title a {
                color: ${D};
                text-decoration: none;
            }
            
            /* Post excerpt */
            .${o} .digiblocks-post-excerpt {
                color: ${We};
                ${ve.fontFamily?`font-family: ${ve.fontFamily};`:""}
                ${ve.fontSize?.[i]?`font-size: ${ve.fontSize[i]}${ve.fontSizeUnit||"px"};`:""}
                ${ve.fontWeight?`font-weight: ${ve.fontWeight};`:""}
                ${ve.fontStyle?`font-style: ${ve.fontStyle};`:""}
                ${ve.textTransform?`text-transform: ${ve.textTransform};`:""}
                ${ve.textDecoration?`text-decoration: ${ve.textDecoration};`:""}
                ${ve.lineHeight?.[i]?`line-height: ${ve.lineHeight[i]}${ve.lineHeightUnit||"em"};`:""}
                ${ve.letterSpacing?.[i]?`letter-spacing: ${ve.letterSpacing[i]}${ve.letterSpacingUnit||"px"};`:""}
            }
            
            /* Categories */
            .${o} .digiblocks-post-categories {
                display: flex;
				flex-wrap: wrap;
				gap: .5rem;
                ${x.fontFamily?`font-family: ${x.fontFamily};`:""}
                ${x.fontSize?.[i]?`font-size: ${x.fontSize[i]}${x.fontSizeUnit||"px"};`:""}
                ${x.fontWeight?`font-weight: ${x.fontWeight};`:""}
                ${x.fontStyle?`font-style: ${x.fontStyle};`:""}
                ${x.textTransform?`text-transform: ${x.textTransform};`:""}
                ${x.textDecoration?`text-decoration: ${x.textDecoration};`:""}
                ${x.lineHeight?.[i]?`line-height: ${x.lineHeight[i]}${x.lineHeightUnit||"em"};`:""}
                ${x.letterSpacing?.[i]?`letter-spacing: ${x.letterSpacing[i]}${x.letterSpacingUnit||"px"};`:""}
            }
            
            .${o} .digiblocks-post-categories a {
				display: inline-flex;
				border-radius: 3px;
				padding: 3px 5px;
				background-color: ${Se};
				color: ${K};
				text-decoration: none;
				transition: all 0.3s ease;
			}
			
			.${o} .digiblocks-post-categories a:hover {
				background-color: ${L};
				color: ${oe};
			}

			/* Footer meta */
			.${o} .digiblocks-post-footer-meta {
				display: flex;
				align-items: center;
				gap: 10px;
				${x.fontFamily?`font-family: ${x.fontFamily};`:""}
				${x.fontSize?.[i]?`font-size: ${x.fontSize[i]}${x.fontSizeUnit||"px"};`:""}
				${x.fontWeight?`font-weight: ${x.fontWeight};`:""}
				color: ${q};
				padding-top: ${de[i]}px;
				border-top: 1px solid ${pe}40;
			}

			.${o} .digiblocks-author-avatar,
			.${o} .digiblocks-author-avatar a {
				display: flex;
			}

			.${o} .digiblocks-author-avatar {
				flex-shrink: 0;
			}

			.${o} .digiblocks-author-avatar img {
				width: 32px;
				height: 32px;
				border-radius: 50%;
				object-fit: cover;
			}

			.${o} .digiblocks-footer-meta-items {
				display: flex;
				flex-wrap: wrap;
				gap: 6px;
                ${x.fontFamily?`font-family: ${x.fontFamily};`:""}
                ${x.fontSize?.[i]?`font-size: ${x.fontSize[i]}${x.fontSizeUnit||"px"};`:""}
                ${x.fontWeight?`font-weight: ${x.fontWeight};`:""}
                ${x.fontStyle?`font-style: ${x.fontStyle};`:""}
                ${x.textTransform?`text-transform: ${x.textTransform};`:""}
                ${x.textDecoration?`text-decoration: ${x.textDecoration};`:""}
                ${x.lineHeight?.[i]?`line-height: ${x.lineHeight[i]}${x.lineHeightUnit||"em"};`:""}
                ${x.letterSpacing?.[i]?`letter-spacing: ${x.letterSpacing[i]}${x.letterSpacingUnit||"px"};`:""}
			}

			.${o} .digiblocks-footer-meta-items a {
				color: ${q};
				text-decoration: none;
				transition: color 0.3s ease;
			}

			.${o} .digiblocks-footer-meta-items a:hover {
				color: ${J||D};
			}

			/* Footer actions */
			.${o} .digiblocks-post-footer-actions {
				display: flex;
				justify-content: space-between;
				align-items: center;
				flex-wrap: wrap;
				gap: 1rem;
                margin-top: ${de[i]}px;
			}
            
            /* Read more button */
            .${o} .digiblocks-post-read-more {
                display: inline-flex;
                background-color: ${A};
                color: ${re};
                ${U.fontFamily?`font-family: ${U.fontFamily};`:""}
                ${U.fontSize?.[i]?`font-size: ${U.fontSize[i]}${U.fontSizeUnit||"px"};`:""}
                ${U.fontWeight?`font-weight: ${U.fontWeight};`:""}
                ${U.fontStyle?`font-style: ${U.fontStyle};`:""}
                ${U.textTransform?`text-transform: ${U.textTransform};`:""}
                ${U.textDecoration?`text-decoration: ${U.textDecoration};`:""}
                ${U.lineHeight?.[i]?`line-height: ${U.lineHeight[i]}${U.lineHeightUnit||"em"};`:""}
                ${U.letterSpacing?.[i]?`letter-spacing: ${U.letterSpacing[i]}${U.letterSpacingUnit||"px"};`:""}
                text-decoration: none;
				${Lt(me,"padding",i)}
				${Lt(Te,"border-radius",i)}
                transition: all 0.3s ease;
            }

			.${o} .digiblocks-post-read-more:hover {
				background-color: ${se||A};
				color: ${Ce||re};
			}

			/* Date meta */
			.${o} .digiblocks-post-comments-count {
				color: ${q};
				text-decoration: none;
				transition: color 0.3s ease;
				${x.fontFamily?`font-family: ${x.fontFamily};`:""}
                ${x.fontSize?.[i]?`font-size: ${x.fontSize[i]}${x.fontSizeUnit||"px"};`:""}
                ${x.fontWeight?`font-weight: ${x.fontWeight};`:""}
                ${x.fontStyle?`font-style: ${x.fontStyle};`:""}
                ${x.textTransform?`text-transform: ${x.textTransform};`:""}
                ${x.textDecoration?`text-decoration: ${x.textDecoration};`:""}
                ${x.lineHeight?.[i]?`line-height: ${x.lineHeight[i]}${x.lineHeightUnit||"em"};`:""}
                ${x.letterSpacing?.[i]?`letter-spacing: ${x.letterSpacing[i]}${x.letterSpacingUnit||"px"};`:""}
				display: flex;
				align-items: center;
				gap: .5rem;
			}
			
			.${o} .digiblocks-post-comments-count:hover {
				color: ${J||D};
			}

			/* Pagination */
            .${o} .digiblocks-pagination {
                margin-top: 40px;
                display: flex;
                flex-wrap: wrap;
                gap: 8px;
                justify-content: ${Z};
            }

            .${o} .digiblocks-pagination .page-numbers {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                min-width: 42px;
                height: 42px;
                padding: 0 12px;
                background-color: ${ee};
                color: ${E};
                border-radius: 8px;
                text-decoration: none;
                transition: all 0.3s ease;
                font-weight: 500;
            }

            .${o} .digiblocks-pagination .page-numbers.current {
                background-color: ${f};
                color: ${b};
                transform: translateY(-1px);
                box-shadow: 0 4px 12px ${f}40;
            }

            .${o} .digiblocks-pagination .page-numbers:hover:not(.current) {
                background-color: ${f}20;
                transform: translateY(-1px);
            }

            .${o} .digiblocks-pagination .page-numbers svg {
                width: 1em;
                height: 1em;
                fill: currentColor;
            }
            
            /* Animation keyframes */
            ${F}

			/* Visibility Controls */
			${n.desktop?`
				@media (min-width: 992px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${n.tablet?`
				@media (min-width: 768px) and (max-width: 991px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${n.mobile?`
				@media (max-width: 767px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}
        `},h=()=>{switch(Q){case"options":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Xo,{tab:"options",name:"layout",title:Be("Layout","digiblocks"),initialOpen:!0},wp.element.createElement(Gd,{label:Be("Post Style","digiblocks"),value:v,onChange:i=>e({postStyle:i}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(Rl,{value:"grid",label:Be("Grid","digiblocks")}),wp.element.createElement(Rl,{value:"list",label:Be("List","digiblocks")})),wp.element.createElement(Fi,{label:Be("Posts to Show","digiblocks"),value:l,onChange:i=>e({postsToShow:i}),min:1,max:20,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),v==="grid"&&wp.element.createElement(Ko,{label:Be("Columns","digiblocks")},wp.element.createElement(Fi,{value:_[S],onChange:i=>e({columns:{..._,[S]:i}}),min:1,max:S==="desktop"?6:S==="tablet"?4:2,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(Ko,{label:Be("Item Spacing","digiblocks")},wp.element.createElement(Fi,{value:H[S],onChange:i=>e({itemSpacing:{...H,[S]:i}}),min:0,max:80,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(Bo,{label:Be("Card Style","digiblocks"),checked:Ee,onChange:i=>e({cardStyle:i}),help:Be("Enable to show posts as cards with backgrounds and borders","digiblocks"),__nextHasNoMarginBottom:!0})),wp.element.createElement(Xo,{tab:"options",name:"content",title:Be("Content","digiblocks"),initialOpen:!1},wp.element.createElement(Bo,{label:Be("Display Featured Image","digiblocks"),checked:M,onChange:i=>e({displayFeaturedImage:i}),__nextHasNoMarginBottom:!0}),M&&wp.element.createElement(Vi,{label:Be("Image Size","digiblocks"),value:qe,options:t,onChange:i=>e({imageSize:i}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Bo,{label:Be("Display Title","digiblocks"),checked:N,onChange:i=>e({displayTitle:i}),__nextHasNoMarginBottom:!0}),wp.element.createElement(Bo,{label:Be("Display Meta","digiblocks"),checked:m,onChange:i=>e({displayMeta:i}),__nextHasNoMarginBottom:!0}),m&&wp.element.createElement("div",{className:"digiblocks-meta-options",style:{marginLeft:"24px",marginBottom:"16px"}},wp.element.createElement(Bo,{label:Be("Show Author","digiblocks"),checked:I.displayAuthor,onChange:i=>he("displayAuthor",i),__nextHasNoMarginBottom:!0}),wp.element.createElement(Bo,{label:Be("Show Date","digiblocks"),checked:I.displayDate,onChange:i=>he("displayDate",i),__nextHasNoMarginBottom:!0}),wp.element.createElement(Bo,{label:Be("Show Categories","digiblocks"),checked:I.displayCategories,onChange:i=>he("displayCategories",i),__nextHasNoMarginBottom:!0}),wp.element.createElement(Bo,{label:Be("Show Comments Count","digiblocks"),checked:I.displayComments,onChange:i=>he("displayComments",i),__nextHasNoMarginBottom:!0})),wp.element.createElement(Bo,{label:Be("Display Excerpt","digiblocks"),checked:s,onChange:i=>e({displayExcerpt:i}),__nextHasNoMarginBottom:!0}),s&&wp.element.createElement(Fi,{label:Be("Excerpt Length (words)","digiblocks"),value:C,onChange:i=>e({excerptLength:i}),min:5,max:100,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Bo,{label:Be("Display Read More Button","digiblocks"),checked:$,onChange:i=>e({displayReadMoreButton:i}),__nextHasNoMarginBottom:!0}),$&&wp.element.createElement(jh,{label:Be("Read More Text","digiblocks"),value:k,onChange:i=>e({readMoreText:i}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(Xo,{tab:"options",name:"pagination",title:Be("Pagination","digiblocks"),initialOpen:!1},wp.element.createElement(Bo,{label:Be("Enable Pagination","digiblocks"),checked:V,onChange:i=>e({enablePagination:i}),__nextHasNoMarginBottom:!0}),V&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Gd,{label:Be("Pagination Alignment","digiblocks"),value:Z,onChange:i=>e({paginationAlign:i}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(Rl,{value:"flex-start",label:Be("Left","digiblocks")}),wp.element.createElement(Rl,{value:"center",label:Be("Center","digiblocks")}),wp.element.createElement(Rl,{value:"flex-end",label:Be("Right","digiblocks")})))),wp.element.createElement(Xo,{tab:"options",name:"query",title:Be("Query","digiblocks"),initialOpen:!1},wp.element.createElement(Vi,{label:Be("Order By","digiblocks"),value:O,options:De,onChange:i=>e({orderBy:i}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Vi,{label:Be("Order","digiblocks"),value:B,options:p,onChange:i=>e({order:i}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Vi,{label:Be("Category","digiblocks"),value:T.length===0?"0":T[0].toString(),options:Ne,onChange:i=>{let F=parseInt(i,10);e(F===0?{categories:[]}:{categories:[F]})},__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})));case"style":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Xo,{tab:"style",name:"colors",title:Be("Colors","digiblocks"),initialOpen:!0},wp.element.createElement(Eh,{className:"digiblocks-control-tabs",activeClass:"active-tab",tabs:go},i=>i.name==="normal"?wp.element.createElement(Ws,{title:Be("Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:D,onChange:F=>e({titleColor:F}),label:Be("Title Color","digiblocks")},{value:We,onChange:F=>e({excerptColor:F}),label:Be("Excerpt Color","digiblocks")},{value:Se,onChange:F=>e({catBackgroundColor:F}),label:Be("Categories Background Color","digiblocks")},{value:K,onChange:F=>e({catColor:F}),label:Be("Categories Color","digiblocks")},{value:q,onChange:F=>e({metaColor:F}),label:Be("Meta Color","digiblocks")},{value:A,onChange:F=>e({buttonBackgroundColor:F}),label:Be("Button Background","digiblocks")},{value:re,onChange:F=>e({buttonTextColor:F}),label:Be("Button Text","digiblocks")},{value:ee,onChange:F=>e({paginationBackgroundColor:F}),label:Be("Pagination Background","digiblocks")},{value:E,onChange:F=>e({paginationTextColor:F}),label:Be("Pagination Color","digiblocks")},{value:f,onChange:F=>e({paginationActiveBackgroundColor:F}),label:Be("Pagination Active Background","digiblocks")},{value:b,onChange:F=>e({paginationActiveTextColor:F}),label:Be("Pagination Active Color","digiblocks")}]}):wp.element.createElement(Ws,{title:Be("Hover Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:le,onChange:F=>e({titleHoverColor:F}),label:Be("Title Hover Color","digiblocks")},{value:L,onChange:F=>e({catHoverBackgroundColor:F}),label:Be("Categories Hover Background Color","digiblocks")},{value:oe,onChange:F=>e({catHoverColor:F}),label:Be("Categories Hover Color","digiblocks")},{value:J,onChange:F=>e({metaHoverColor:F}),label:Be("Meta Hover Color","digiblocks")},{value:se,onChange:F=>e({buttonBackgroundHoverColor:F}),label:Be("Button Background Hover","digiblocks")},{value:Ce,onChange:F=>e({buttonTextHoverColor:F}),label:Be("Button Text Hover","digiblocks")}]})),Ee&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("h3",null,Be("Card Colors","digiblocks")),wp.element.createElement(Ws,{title:"",colorSettings:[{value:Oe,onChange:i=>e({cardBackgroundColor:i}),label:Be("Card Background","digiblocks")},{value:pe,onChange:i=>e({cardBorderColor:i}),label:Be("Card Border","digiblocks")}]}))),wp.element.createElement(Xo,{tab:"style",name:"typography",title:Be("Typography","digiblocks"),initialOpen:!1},wp.element.createElement(Za,{label:Be("Title Typography","digiblocks"),value:xe,onChange:i=>e({titleTypography:i}),defaults:{fontSize:{desktop:20,tablet:18,mobile:16},fontWeight:"600",lineHeight:{desktop:1.4,tablet:1.3,mobile:1.2}}}),wp.element.createElement(Za,{label:Be("Meta Typography","digiblocks"),value:x,onChange:i=>e({textTypography:i}),defaults:{fontSize:{desktop:14,tablet:13,mobile:12},lineHeight:{desktop:1.4,tablet:1.3,mobile:1.2}}}),wp.element.createElement(Za,{label:Be("Excerpt Typography","digiblocks"),value:ve,onChange:i=>e({contentTypography:i}),defaults:{fontSize:{desktop:16,tablet:15,mobile:14},lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3}}}),wp.element.createElement(Za,{label:Be("Button Typography","digiblocks"),value:U,onChange:i=>e({buttonTypography:i}),defaults:{fontSize:{desktop:16,tablet:15,mobile:14},fontWeight:"500",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3}}})),wp.element.createElement(Xo,{tab:"style",name:"spacing",title:Be("Spacing","digiblocks"),initialOpen:!1},wp.element.createElement(Ko,{label:Be("Padding","digiblocks")},wp.element.createElement(ri,{values:He[S],onChange:i=>e({padding:{...He,[S]:i}})})),wp.element.createElement(Ko,{label:Be("Margin","digiblocks")},wp.element.createElement(ri,{values:be[S],onChange:i=>e({margin:{...be,[S]:i}})})),wp.element.createElement(Ko,{label:Be("Image Margin","digiblocks")},wp.element.createElement(Fi,{value:Y[S],onChange:i=>e({imageMargin:{...Y,[S]:i}}),min:1,max:100,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(Ko,{label:Be("Content Margin","digiblocks")},wp.element.createElement(Fi,{value:de[S],onChange:i=>e({contentMargin:{...de,[S]:i}}),min:1,max:100,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(Ko,{label:Be("Button Padding","digiblocks")},wp.element.createElement(ri,{values:me[S],onChange:i=>e({buttonPadding:{...me,[S]:i}})}))),wp.element.createElement(Xo,{tab:"style",name:"borders",title:Be("Borders & Radius","digiblocks"),initialOpen:!1},wp.element.createElement(Ko,{label:Be("Image Border Radius","digiblocks")},wp.element.createElement(ri,{values:Ve[S],onChange:i=>e({imageBorderRadius:{...Ve,[S]:i}}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]})),wp.element.createElement(Ko,{label:Be("Button Border Radius","digiblocks")},wp.element.createElement(ri,{values:Te[S],onChange:i=>e({buttonBorderRadius:{...Te,[S]:i}}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]})),Ee&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Vi,{label:Be("Card Border Style","digiblocks"),value:Je,options:r,onChange:i=>e({cardBorderStyle:i}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),Je!=="none"&&wp.element.createElement(Ko,{label:Be("Card Border Width","digiblocks")},wp.element.createElement(ri,{values:G[S],onChange:i=>e({cardBorderWidth:{...G,[S]:i}})})),wp.element.createElement(Ko,{label:Be("Card Border Radius","digiblocks")},wp.element.createElement(ri,{values:ye[S],onChange:i=>e({cardBorderRadius:{...ye,[S]:i}}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]})),wp.element.createElement(Qh,{label:Be("Card Shadow","digiblocks"),normalValue:R,hoverValue:d,onNormalChange:i=>e({cardShadow:i}),onHoverChange:i=>e({cardShadowHover:i})}))));case"advanced":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Xo,{tab:"advanced",name:"animation",title:Be("Animation","digiblocks"),initialOpen:!0},wp.element.createElement(Vi,{label:Be("Animation Effect","digiblocks"),value:ce,options:eo,onChange:i=>e({animation:i}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),ce&&ce!=="none"&&wp.element.createElement("div",{style:{marginTop:"10px"}},wp.element.createElement(Wh,{variant:"secondary",isSecondary:!0,onClick:Fe,style:{width:"100%"}},Be("Preview Animation","digiblocks")))),wp.element.createElement(Xo,{tab:"advanced",name:"visibility",title:Be("Visibility","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control__help",style:{padding:"12px",backgroundColor:"#f0f6fc",border:"1px solid #c3ddfd",borderRadius:"4px",marginBottom:"16px"}},wp.element.createElement("strong",null,Be("Editor Note:","digiblocks")),wp.element.createElement("br",null),Be("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.","digiblocks")),wp.element.createElement(Bo,{label:Be("Hide on Desktop","digiblocks"),checked:n.desktop,onChange:i=>e({visibility:{...n,desktop:i}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(Bo,{label:Be("Hide on Tablet","digiblocks"),checked:n.tablet,onChange:i=>e({visibility:{...n,tablet:i}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(Bo,{label:Be("Hide on Mobile","digiblocks"),checked:n.mobile,onChange:i=>e({visibility:{...n,mobile:i}}),__nextHasNoMarginBottom:!0})),wp.element.createElement(Xo,{tab:"advanced",name:"additional",title:Be("Additional","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control html-anchor-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"html-anchor"},Be("HTML anchor","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"html-anchor",value:P||"",onChange:i=>e({anchor:i.target.value}),"aria-describedby":"html-anchor-help",autoCapitalize:"none",autoComplete:"off"})),wp.element.createElement("p",{id:"html-anchor-help",className:"components-base-control__help"},Be(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`,"digiblocks")," ",wp.element.createElement("a",{className:"components-external-link",href:"https://wordpress.org/documentation/article/page-jumps/",target:"_blank",rel:"external noreferrer noopener"},wp.element.createElement("span",{className:"components-external-link__contents"},Be("Learn more about anchors","digiblocks")),wp.element.createElement("span",{className:"components-external-link__icon","aria-label":"(opens in a new tab)"},"\u2197")))),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"additional-css-classes"},Be("Additional CSS class(es)","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"additional-css-classes",value:te||"",onChange:i=>e({customClasses:i.target.value}),"aria-describedby":"additional-css-classes-help",autoComplete:"off"})),wp.element.createElement("p",{id:"additional-css-classes-help",className:"components-base-control__help"},Be("Separate multiple classes with spaces.","digiblocks")))));default:return null}},w=(i,F)=>{if(!i)return"";let Ue=document.createElement("div");Ue.innerHTML=i;let po=Ue.textContent||Ue.innerText||"",z=po.split(" ");return z.length<=F?po:z.slice(0,F).join(" ")+"..."},Pe=`digiblocks-posts ${o} style-${v} ${te||""}`,Ze=Oh({className:Pe,id:P||null});return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Uh,null,wp.element.createElement(Jh,{tabs:ao,activeTab:Q,onSelect:c},h())),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:oo()}}),wp.element.createElement("div",{...Ze},a?a.length===0?wp.element.createElement("p",{className:"digiblocks-posts-no-results"},Be("No posts found.","digiblocks")):wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:`digiblocks-posts-container layout-${v}`},a.map(i=>wp.element.createElement("div",{key:i.id,className:"digiblocks-post-item"},M&&i._embedded?.["wp:featuredmedia"]&&i._embedded["wp:featuredmedia"][0]&&wp.element.createElement("div",{className:"digiblocks-post-image"},wp.element.createElement("span",null,i._embedded["wp:featuredmedia"][0].source_url&&wp.element.createElement("img",{src:i._embedded["wp:featuredmedia"][0].source_url,alt:i._embedded["wp:featuredmedia"][0].alt_text||i.title.rendered}))),wp.element.createElement("div",{className:"digiblocks-post-content"},N&&wp.element.createElement("h3",{className:"digiblocks-post-title"},wp.element.createElement("a",{href:"#",onClick:F=>F.preventDefault()},i.title.rendered)),s&&wp.element.createElement("div",{className:"digiblocks-post-excerpt"},w(i.excerpt.rendered.replace(/<[^>]*>/g,""),C)),m&&I.displayCategories&&i._embedded?.["wp:term"]?.[0]&&wp.element.createElement("div",{className:"digiblocks-post-categories"},i._embedded["wp:term"][0].map(F=>wp.element.createElement("a",{key:F.id,href:"#",onClick:Ue=>Ue.preventDefault(),className:"digiblocks-category-link"},F.name))),m&&wp.element.createElement("div",{className:"digiblocks-post-footer-meta"},I.displayAuthor&&i._embedded?.author?.[0]&&wp.element.createElement("div",{className:"digiblocks-author-avatar"},wp.element.createElement("a",{href:"#",onClick:F=>F.preventDefault()},i._embedded.author[0].avatar_urls?.["96"]?wp.element.createElement("img",{src:i._embedded.author[0].avatar_urls[96],alt:i._embedded.author[0].name||""}):wp.element.createElement("span",{className:"digiblocks-avatar-placeholder"}))),wp.element.createElement("div",{className:"digiblocks-footer-meta-items"},I.displayAuthor&&i._embedded?.author?.[0]&&wp.element.createElement("span",{className:"digiblocks-posted-by"},wp.element.createElement("span",{className:"digiblocks-meta-prefix"},Be("by","digiblocks"))," ",wp.element.createElement("a",{href:"#",onClick:F=>F.preventDefault()},i._embedded.author[0].name)),I.displayDate&&wp.element.createElement("span",{className:"digiblocks-posted-on"},wp.element.createElement("span",{className:"digiblocks-meta-prefix"},Be("on","digiblocks"))," ",wp.element.createElement("time",{dateTime:i.date},new Date(i.date).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}))))),($||m&&I.displayComments)&&wp.element.createElement("div",{className:"digiblocks-post-footer-actions"},$&&wp.element.createElement("a",{href:"#",onClick:F=>F.preventDefault(),className:"digiblocks-post-read-more"},k),m&&I.displayComments&&wp.element.createElement("a",{href:"#",className:"digiblocks-post-comments-count",onClick:F=>F.preventDefault()},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M256 64C125.8 64 32 148.6 32 240c0 37.1 15.5 70.6 40 100c5.2 6.3 8.4 14.8 7.4 23.9c-3.1 27-11.4 52.5-25.7 76.3c-.5 .9-1.1 1.8-1.6 2.6c11.1-2.9 22.2-7 32.7-11.5L91.2 446l-6.4-14.7c17-7.4 33-16.7 48.4-27.4c8.5-5.9 19.4-7.5 29.2-4.2C193 410.1 224.1 416 256 416c130.2 0 224-84.6 224-176s-93.8-176-224-176zM0 240C0 125.2 114.5 32 256 32s256 93.2 256 208s-114.5 208-256 208c-36 0-70.5-6.7-103.8-17.9c-.2-.1-.5 0-.7 .1c-16.9 11.7-34.7 22.1-53.9 30.5C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.8s-1.1-12.8 3.4-17.4c8.1-8.2 15.2-18.2 21.7-29c11.7-19.6 18.7-40.6 21.3-63.1c0 0-.1-.1-.1-.2C19.6 327.1 0 286.6 0 240z"})),i.comment_count===0?Be("Leave a Comment","digiblocks"):i.comment_count===1?Be("1 Comment","digiblocks"):sprintf(Be("%d Comments","digiblocks"),i.comment_count||0))))))),V&&wp.element.createElement("div",{className:"digiblocks-pagination"},wp.element.createElement("a",{className:"page-numbers",href:"#",onClick:i=>i.preventDefault()},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M47 239c-9.4 9.4-9.4 24.6 0 33.9L207 433c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L97.9 256 241 113c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L47 239z"}))),wp.element.createElement("a",{className:"page-numbers",href:"#",onClick:i=>i.preventDefault()},"1"),wp.element.createElement("span",{className:"page-numbers current"},"2"),wp.element.createElement("a",{className:"page-numbers",href:"#",onClick:i=>i.preventDefault()},"3"),wp.element.createElement("span",{className:"page-numbers dots"},"\u2026"),wp.element.createElement("a",{className:"page-numbers",href:"#",onClick:i=>i.preventDefault()},"8"),wp.element.createElement("a",{className:"page-numbers",href:"#",onClick:i=>i.preventDefault()},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M273 239c9.4 9.4 9.4 24.6 0 33.9L113 433c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l143-143L79 113c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L273 239z"}))))):wp.element.createElement(Vh,{icon:"admin-post",label:Be("Posts","digiblocks")},wp.element.createElement(Fh,null))))},Kd=Yh;var Zh=()=>null,Xd=Zh;var{__:Ll}=window.wp.i18n,{registerBlockType:Kh}=window.wp.blocks,{getBlockActiveStatus:Xh}=window.wp.digiBlocks;Kh("digiblocks/posts",{apiVersion:2,title:digiBlocksData.blocks.posts.title,category:"digiblocks",icon:{src:()=>{let{viewbox:ie,path:e}=digiBlocksData.blocks.posts.icon;return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${ie}`,className:"digiblocks-editor-icons"},wp.element.createElement("path",{d:e}))}},description:digiBlocksData.blocks.posts.description,keywords:[Ll("post","digiblocks"),Ll("blog","digiblocks"),Ll("article","digiblocks"),Ll("grid","digiblocks")],supports:{inserter:!!Xh("posts"),html:!1,className:!1,customClassName:!1,anchor:!1},attributes:{id:{type:"string",default:""},anchor:{type:"string",default:""},visibility:{type:"object",default:{desktop:!1,tablet:!1,mobile:!1}},customClasses:{type:"string",default:""},postsToShow:{type:"number",default:3},columns:{type:"object",default:{desktop:3,tablet:2,mobile:1}},postStyle:{type:"string",default:"grid"},displayFeaturedImage:{type:"boolean",default:!0},displayTitle:{type:"boolean",default:!0},displayMeta:{type:"boolean",default:!0},displayExcerpt:{type:"boolean",default:!0},displayReadMoreButton:{type:"boolean",default:!0},metaSettings:{type:"object",default:{displayAuthor:!0,displayDate:!0,displayCategories:!0,displayComments:!0}},excerptLength:{type:"number",default:25},readMoreText:{type:"string",default:Ll("Read More","digiblocks")},order:{type:"string",default:"desc"},orderBy:{type:"string",default:"date"},categories:{type:"array",default:[]},enablePagination:{type:"boolean",default:!1},paginationAlign:{type:"string",default:"center"},paginationBackgroundColor:{type:"string",default:"#f8f9fa"},paginationTextColor:{type:"string",default:"#333333"},paginationActiveBackgroundColor:{type:"string",default:"#4a6cf7"},paginationActiveTextColor:{type:"string",default:"#ffffff"},titleColor:{type:"string",default:"#333333"},titleHoverColor:{type:"string",default:""},excerptColor:{type:"string",default:"#666666"},catBackgroundColor:{type:"string",default:"#52576b"},catColor:{type:"string",default:"#fff"},catHoverBackgroundColor:{type:"string",default:"#3f4a73"},catHoverColor:{type:"string",default:"#fff"},metaColor:{type:"string",default:"#666666"},metaHoverColor:{type:"string",default:""},buttonBackgroundColor:{type:"string",default:"#4a6cf7"},buttonTextColor:{type:"string",default:"#ffffff"},buttonBackgroundHoverColor:{type:"string",default:"#3a5ce5"},buttonTextHoverColor:{type:"string",default:"#ffffff"},imageMargin:{type:"object",default:{desktop:15,tablet:15,mobile:15}},contentMargin:{type:"object",default:{desktop:16,tablet:14,mobile:14}},padding:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},margin:{type:"object",default:{desktop:{top:0,right:0,bottom:30,left:0,unit:"px"},tablet:{top:0,right:0,bottom:25,left:0,unit:"px"},mobile:{top:0,right:0,bottom:20,left:0,unit:"px"}}},itemSpacing:{type:"object",default:{desktop:20,tablet:15,mobile:10}},titleTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:20,tablet:18,mobile:16},fontSizeUnit:"px",fontWeight:"600",fontStyle:"normal",textTransform:"none",textDecoration:"none",lineHeight:{desktop:1.4,tablet:1.3,mobile:1.2},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}},textTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:13,tablet:12,mobile:11},fontSizeUnit:"px",fontWeight:"normal",fontStyle:"normal",textTransform:"none",textDecoration:"none",lineHeight:{desktop:1.4,tablet:1.3,mobile:1.2},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}},contentTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",fontWeight:"normal",fontStyle:"normal",textTransform:"none",textDecoration:"none",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}},buttonTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:14,tablet:12,mobile:12},fontSizeUnit:"px",fontWeight:"500",fontStyle:"normal",textTransform:"none",textDecoration:"none",lineHeight:{desktop:1.4,tablet:1.4,mobile:1.3},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}},buttonPadding:{type:"object",default:{desktop:{top:8,right:16,bottom:8,left:16,unit:"px"},tablet:{top:7,right:14,bottom:7,left:14,unit:"px"},mobile:{top:6,right:12,bottom:6,left:12,unit:"px"}}},buttonBorderRadius:{type:"object",default:{desktop:{top:6,right:6,bottom:6,left:6,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},imageSize:{type:"string",default:"medium"},imageBorderRadius:{type:"object",default:{desktop:{top:12,right:12,bottom:12,left:12,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},cardStyle:{type:"boolean",default:!0},cardBackgroundColor:{type:"string",default:"#ffffff"},cardPadding:{type:"object",default:{desktop:{top:24,right:24,bottom:24,left:24,unit:"px"},tablet:{top:20,right:20,bottom:20,left:20,unit:"px"},mobile:{top:16,right:16,bottom:16,left:16,unit:"px"}}},cardBorderRadius:{type:"object",default:{desktop:{top:16,right:16,bottom:16,left:16,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},cardBorderStyle:{type:"string",default:"solid"},cardBorderWidth:{type:"object",default:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},cardBorderColor:{type:"string",default:"#e0e0e0"},cardShadow:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.1)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},cardShadowHover:{type:"object",default:{enable:!1,color:"rgba(74, 108, 247, 0.15)",horizontal:0,vertical:8,blur:25,spread:0,position:"outset"}},animation:{type:"string",default:"none"}},example:{attributes:{postStyle:"grid",postsToShow:1,columns:1,cardStyle:!0,displayFeaturedImage:!0,displayTitle:!0,displayExcerpt:!0,excerptLength:15,displayMeta:!0,titleColor:"#333333",excerptColor:"#666666",metaColor:"#666666",buttonBackgroundColor:"#4a6cf7",buttonTextColor:"#ffffff",itemSpacing:{desktop:20,tablet:15,mobile:10}},viewportWidth:600},edit:Kd,save:Xd});var{__:ke}=window.wp.i18n,{useBlockProps:Ah,RichText:ci,InspectorControls:ef,PanelColorSettings:Ei,LinkControl:of}=window.wp.blockEditor,{SelectControl:Wi,RangeControl:Ad,ToggleControl:Ol,Button:_t,Tooltip:qi,__experimentalToggleGroupControl:tf,__experimentalToggleGroupControlOption:Qs}=window.wp.components,{useState:Ul,useEffect:Ka,useRef:lf}=window.wp.element,{useBlockId:af,getDimensionCSS:Gi,animations:Js,animationPreview:eg}=digi.utils,{tabIcons:Ys}=digi.icons,{ResponsiveControl:Qi,DimensionControl:Ji,TypographyControl:jl,BoxShadowControl:nf,CustomTabPanel:sf,TabPanelBody:Ao,FontAwesomeControl:iv}=digi.components,rf=({attributes:ie,setAttributes:e,clientId:X})=>{let{id:o,anchor:P,visibility:n,customClasses:te,tables:l,columns:_,tableStyle:v,align:M,animation:N,titleTypography:m,headingTypography:s,textTypography:$,contentTypography:I,buttonTypography:C,padding:k,margin:B,borderRadius:O,borderWidth:T,borderStyle:V,borderColor:Z,boxShadow:ee,boxShadowHover:E,buttonRadius:f,buttonPadding:b,buttonBorderStyle:D,buttonBorderWidth:le,buttonBorderColor:We,buttonBorderHoverColor:Se,showRibbon:K,ribbonStyle:L,ribbonPosition:oe,tableTextColor:q,tableBackgroundColor:J,headerBackgroundColor:A,buttonTextColor:re,buttonBackgroundColor:se,buttonTextHoverColor:Ce,buttonBackgroundHoverColor:Y,ribbonTextColor:de,ribbonBackgroundColor:He}=ie;af(o,X,e);let[be,H]=Ul(window.digi.responsiveState.activeDevice),[xe,x]=Ul(!1),[ve,U]=Ul(()=>{if(window.digi.uiState){let t=window.digi.uiState.getActiveTab(X);if(t)return t}return"options"}),[me,Te]=Ul(0),[qe,Ve]=Ul(!1);Ka(()=>{let t=()=>window.digi&&window.digi.components&&window.digi.components.FontAwesomeControl?(Ve(!0),!0):!1;if(!t()){let p=setTimeout(()=>{t()&&clearTimeout(p)},500);return()=>clearTimeout(p)}},[]),Ka(()=>window.digi.responsiveState.subscribe(p=>{H(p)}),[]),Ka(()=>{(!l||l.length===0)&&e({tables:[{id:`table-1-${Date.now().toString(36)}`,title:ke("Basic Plan","digiblocks"),price:"$19",period:"/month",description:ke("Great for starters","digiblocks"),iconValue:null,features:[{text:ke("1 Website","digiblocks"),enabled:!0},{text:ke("5GB Storage","digiblocks"),enabled:!0},{text:ke("10k Visits Monthly","digiblocks"),enabled:!0},{text:ke("Premium Support","digiblocks"),enabled:!1}],buttonText:ke("Get Started","digiblocks"),buttonUrl:"",buttonOpenInNewTab:!1,buttonRel:"",isHighlighted:!1,ribbonText:ke("Popular","digiblocks"),backgroundColor:"",headerBackgroundColor:"",textColor:"",buttonBackgroundColor:"",buttonTextColor:""},{id:`table-2-${Date.now().toString(36)}`,title:ke("Pro Plan","digiblocks"),price:"$49",period:"/month",description:ke("For growing businesses","digiblocks"),iconValue:null,features:[{text:ke("5 Websites","digiblocks"),enabled:!0},{text:ke("20GB Storage","digiblocks"),enabled:!0},{text:ke("50k Visits Monthly","digiblocks"),enabled:!0},{text:ke("Premium Support","digiblocks"),enabled:!0}],buttonText:ke("Get Started","digiblocks"),buttonUrl:"",buttonOpenInNewTab:!1,buttonRel:"",isHighlighted:!0,ribbonText:ke("Popular","digiblocks"),backgroundColor:"",headerBackgroundColor:"",textColor:"",buttonBackgroundColor:"",buttonTextColor:""}],columns:2,tableStyle:"style1",align:"center",showRibbon:!0,ribbonStyle:"corner",ribbonPosition:"right",titleTypography:m||{fontSize:{desktop:24,tablet:20,mobile:18},fontSizeUnit:"px",lineHeight:{desktop:1.4,tablet:1.3,mobile:1.2},lineHeightUnit:"em",fontWeight:"",fontFamily:""},headingTypography:s||{fontSize:{desktop:36,tablet:30,mobile:26},fontSizeUnit:"px",lineHeight:{desktop:1.2,tablet:1.2,mobile:1.2},lineHeightUnit:"em",fontWeight:"bold",fontFamily:""},textTypography:$||{fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",lineHeight:{desktop:1.6,tablet:1.5,mobile:1.4},lineHeightUnit:"em",fontWeight:"",fontFamily:""},contentTypography:I||{fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",lineHeight:{desktop:1.6,tablet:1.5,mobile:1.4},lineHeightUnit:"em",fontWeight:"",fontFamily:""},buttonTypography:C||{fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em",fontWeight:"",fontFamily:""}})},[l,e]);let Ee=lf(null);Ka(()=>{if(N&&N!=="none"){let t=setTimeout(()=>{eg(o,N,Js,Ee)},100);return()=>clearTimeout(t)}},[N]);let Oe=()=>{eg(o,N,Js,Ee)},j=[{label:ke("Style 1","digiblocks"),value:"style1"},{label:ke("Style 2","digiblocks"),value:"style2"},{label:ke("Style 3","digiblocks"),value:"style3"},{label:ke("Style 4","digiblocks"),value:"style4"},{label:ke("Minimal","digiblocks"),value:"minimal"}],ye=[{label:ke("Corner","digiblocks"),value:"corner"},{label:ke("Banner","digiblocks"),value:"banner"},{label:ke("Side","digiblocks"),value:"side"},{label:ke("Flag","digiblocks"),value:"flag"}],Je=[{label:ke("Right","digiblocks"),value:"right"},{label:ke("Left","digiblocks"),value:"left"}],G=[{label:ke("None","digiblocks"),value:"none"},{label:ke("Solid","digiblocks"),value:"solid"},{label:ke("Dotted","digiblocks"),value:"dotted"},{label:ke("Dashed","digiblocks"),value:"dashed"},{label:ke("Double","digiblocks"),value:"double"}],pe=[{label:ke("None","digiblocks"),value:"none"},...Object.keys(Js).map(t=>({label:t.replace(/-/g," ").replace(/\b\w/g,p=>p.toUpperCase()),value:t}))],R=[{name:"options",title:ke("Options","digiblocks"),icon:Ys.optionsIcon},{name:"style",title:ke("Style","digiblocks"),icon:Ys.styleIcon},{name:"advanced",title:ke("Advanced","digiblocks"),icon:Ys.advancedIcon}],d=()=>{let t=[...l,{id:`table-${l.length+1}-${Date.now().toString(36)}`,title:ke("New Plan","digiblocks"),price:"$29",period:"/month",description:ke("Add your description","digiblocks"),iconValue:null,features:[{text:ke("Feature 1","digiblocks"),enabled:!0},{text:ke("Feature 2","digiblocks"),enabled:!0},{text:ke("Feature 3","digiblocks"),enabled:!1}],buttonText:ke("Get Started","digiblocks"),buttonUrl:"",buttonOpenInNewTab:!1,buttonRel:"",isHighlighted:!1,ribbonText:ke("Popular","digiblocks"),backgroundColor:"",headerBackgroundColor:"",textColor:"",buttonBackgroundColor:"",buttonTextColor:""}];e({tables:t}),Te(t.length-1)},ce=t=>{if(l.length<=1)return;let p=[...l];p.splice(t,1),e({tables:p}),me>=p.length&&Te(p.length-1)},S=t=>{let De={...l[t],id:`table-${l.length+1}-${Date.now().toString(36)}`},r=[...l];r.splice(t+1,0,De),e({tables:r}),Te(t+1)},g=t=>{if(t===0)return;let p=[...l],De=p[t];p[t]=p[t-1],p[t-1]=De,e({tables:p}),Te(t-1)},Q=t=>{if(t===l.length-1)return;let p=[...l],De=p[t];p[t]=p[t+1],p[t+1]=De,e({tables:p}),Te(t+1)},c=(t,p,De)=>{let r=[...l];r[t]={...r[t],[p]:De},e({tables:r})},ae=t=>{let p=[...l];p[t].features.push({text:ke("New Feature","digiblocks"),enabled:!0}),e({tables:p})},y=(t,p)=>{if(l[t].features.length<=1)return;let De=[...l];De[t].features.splice(p,1),e({tables:De})},u=(t,p,De,r)=>{let he=[...l];he[t].features[p]={...he[t].features[p],[De]:r},e({tables:he})},Ne=(t,p)=>{let De=[...l];De[t].features[p].enabled=!De[t].features[p].enabled,e({tables:De})},a=t=>{e({tableStyle:t});let p={};switch(t){case"style1":p={tableBackgroundColor:"#ffffff",headerBackgroundColor:"#f8f9fa",tableTextColor:"#333333",buttonBackgroundColor:"#4a6cf7",buttonTextColor:"#ffffff",buttonBackgroundHoverColor:"#3151e1",buttonTextHoverColor:"#ffffff",ribbonBackgroundColor:"#4a6cf7",ribbonTextColor:"#ffffff",borderStyle:"solid",borderWidth:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}},borderColor:"#e6e6e6",borderRadius:{desktop:{top:8,right:8,bottom:8,left:8,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}},boxShadow:{enable:!1,color:"rgba(0, 0, 0, 0.1)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}};break;case"style2":p={tableBackgroundColor:"#ffffff",headerBackgroundColor:"#4a6cf7",tableTextColor:"#333333",buttonBackgroundColor:"#4a6cf7",buttonTextColor:"#ffffff",buttonBackgroundHoverColor:"#3151e1",buttonTextHoverColor:"#ffffff",ribbonBackgroundColor:"#ff9800",ribbonTextColor:"#ffffff",borderStyle:"none",borderWidth:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}},borderColor:"#e6e6e6",borderRadius:{desktop:{top:8,right:8,bottom:8,left:8,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}},boxShadow:{enable:!0,color:"rgba(0, 0, 0, 0.1)",horizontal:0,vertical:4,blur:15,spread:0,position:"outset"}};break;case"style3":p={tableBackgroundColor:"#ffffff",headerBackgroundColor:"#ffffff",tableTextColor:"#333333",buttonBackgroundColor:"#4a6cf7",buttonTextColor:"#ffffff",buttonBackgroundHoverColor:"#3151e1",buttonTextHoverColor:"#ffffff",ribbonBackgroundColor:"#ff5252",ribbonTextColor:"#ffffff",borderStyle:"solid",borderWidth:{desktop:{top:3,right:3,bottom:3,left:3,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}},borderColor:"#4a6cf7",borderRadius:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}},boxShadow:{enable:!1,color:"rgba(0, 0, 0, 0.1)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}};break;case"style4":p={tableBackgroundColor:"#f8f9fa",headerBackgroundColor:"#ffffff",tableTextColor:"#333333",buttonBackgroundColor:"#333333",buttonTextColor:"#ffffff",buttonBackgroundHoverColor:"#000000",buttonTextHoverColor:"#ffffff",ribbonBackgroundColor:"#333333",ribbonTextColor:"#ffffff",borderStyle:"none",borderWidth:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}},borderColor:"#e6e6e6",borderRadius:{desktop:{top:16,right:16,bottom:16,left:16,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}},boxShadow:{enable:!0,color:"rgba(0, 0, 0, 0.08)",horizontal:0,vertical:10,blur:25,spread:0,position:"outset"}};break;case"minimal":p={tableBackgroundColor:"transparent",headerBackgroundColor:"transparent",tableTextColor:"#333333",buttonBackgroundColor:"transparent",buttonTextColor:"#4a6cf7",buttonBackgroundHoverColor:"transparent",buttonTextHoverColor:"#3151e1",ribbonBackgroundColor:"#f8f9fa",ribbonTextColor:"#333333",borderStyle:"solid",borderWidth:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}},borderColor:"#e6e6e6",borderRadius:{desktop:{top:"",right:"",bottom:0,left:0,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}},boxShadow:{enable:!1,color:"rgba(0, 0, 0, 0.1)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}};break;default:p={}}e(p)},ue=qe?window.digi.components.FontAwesomeControl:null,Fe=()=>{let t=be,p="";V&&V!=="none"?p=`
				border-style: ${V};
				border-color: ${Z||"#e6e6e6"};
				${Gi(T,"border-width",t)}
				${Gi(O,"border-radius",t)}
			`:p="border: none;";let De="box-shadow: none;";ee&&ee.enable&&(De=`box-shadow: ${ee.position==="inset"?"inset ":""}${ee.horizontal}px ${ee.vertical}px ${ee.blur}px ${ee.spread}px ${ee.color};`);let r="";E&&E.enable&&(r=`box-shadow: ${E.position==="inset"?"inset ":""}${E.horizontal}px ${E.vertical}px ${E.blur}px ${E.spread}px ${E.color};`);let he=`${Gi(k,"padding",t)}`,oo=`${Gi(B,"margin",t)}`,h={fontFamily:"",fontSize:{desktop:24,tablet:20,mobile:18},fontSizeUnit:"px",fontWeight:"",fontStyle:"normal",textTransform:"",textDecoration:"",lineHeight:{desktop:1.4,tablet:1.3,mobile:1.2},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"},w={fontFamily:"",fontSize:{desktop:36,tablet:30,mobile:26},fontSizeUnit:"px",fontWeight:"bold",fontStyle:"normal",textTransform:"",textDecoration:"",lineHeight:{desktop:1.2,tablet:1.2,mobile:1.2},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"},Pe={fontFamily:"",fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",fontWeight:"",fontStyle:"normal",textTransform:"",textDecoration:"",lineHeight:{desktop:1.6,tablet:1.5,mobile:1.4},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"},Ze={fontFamily:"",fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",fontWeight:"",fontStyle:"normal",textTransform:"",textDecoration:"",lineHeight:{desktop:1.6,tablet:1.5,mobile:1.4},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"},i={fontFamily:"",fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",fontWeight:"",fontStyle:"normal",textTransform:"",textDecoration:"",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"},F="",Ue=m||h;Ue.fontFamily&&(F+=`font-family: ${Ue.fontFamily};`),Ue.fontSize&&Ue.fontSize[t]?F+=`font-size: ${Ue.fontSize[t]}${Ue.fontSizeUnit||"px"};`:h.fontSize&&h.fontSize[t]&&(F+=`font-size: ${h.fontSize[t]}px;`),Ue.fontWeight&&(F+=`font-weight: ${Ue.fontWeight};`),Ue.fontStyle&&(F+=`font-style: ${Ue.fontStyle};`),Ue.textTransform&&(F+=`text-transform: ${Ue.textTransform};`),Ue.textDecoration&&(F+=`text-decoration: ${Ue.textDecoration};`),Ue.lineHeight&&Ue.lineHeight[t]?F+=`line-height: ${Ue.lineHeight[t]}${Ue.lineHeightUnit||"em"};`:h.lineHeight&&h.lineHeight[t]&&(F+=`line-height: ${h.lineHeight[t]}em;`),Ue.letterSpacing&&Ue.letterSpacing[t]&&(F+=`letter-spacing: ${Ue.letterSpacing[t]}${Ue.letterSpacingUnit||"px"};`);let po="",z=s||w;z.fontFamily&&(po+=`font-family: ${z.fontFamily};`),z.fontSize&&z.fontSize[t]?po+=`font-size: ${z.fontSize[t]}${z.fontSizeUnit||"px"};`:w.fontSize&&w.fontSize[t]&&(po+=`font-size: ${w.fontSize[t]}px;`),z.fontWeight?po+=`font-weight: ${z.fontWeight};`:po+="font-weight: bold;",z.fontStyle&&(po+=`font-style: ${z.fontStyle};`),z.textTransform&&(po+=`text-transform: ${z.textTransform};`),z.textDecoration&&(po+=`text-decoration: ${z.textDecoration};`),z.lineHeight&&z.lineHeight[t]?po+=`line-height: ${z.lineHeight[t]}${z.lineHeightUnit||"em"};`:w.lineHeight&&w.lineHeight[t]&&(po+=`line-height: ${w.lineHeight[t]}em;`),z.letterSpacing&&z.letterSpacing[t]&&(po+=`letter-spacing: ${z.letterSpacing[t]}${z.letterSpacingUnit||"px"};`);let Ke="",ro=$||Pe;ro.fontFamily&&(Ke+=`font-family: ${ro.fontFamily};`),ro.fontSize&&ro.fontSize[t]?Ke+=`font-size: ${ro.fontSize[t]}${ro.fontSizeUnit||"px"};`:Pe.fontSize&&Pe.fontSize[t]&&(Ke+=`font-size: ${Pe.fontSize[t]}px;`),ro.fontWeight&&(Ke+=`font-weight: ${ro.fontWeight};`),ro.fontStyle&&(Ke+=`font-style: ${ro.fontStyle};`),ro.textTransform&&(Ke+=`text-transform: ${ro.textTransform};`),ro.textDecoration&&(Ke+=`text-decoration: ${ro.textDecoration};`),ro.lineHeight&&ro.lineHeight[t]?Ke+=`line-height: ${ro.lineHeight[t]}${ro.lineHeightUnit||"em"};`:Pe.lineHeight&&Pe.lineHeight[t]&&(Ke+=`line-height: ${Pe.lineHeight[t]}em;`),ro.letterSpacing&&ro.letterSpacing[t]&&(Ke+=`letter-spacing: ${ro.letterSpacing[t]}${ro.letterSpacingUnit||"px"};`);let W="",ze=I||Ze;ze.fontFamily&&(W+=`font-family: ${ze.fontFamily};`),ze.fontSize&&ze.fontSize[t]?W+=`font-size: ${ze.fontSize[t]}${ze.fontSizeUnit||"px"};`:Ze.fontSize&&Ze.fontSize[t]&&(W+=`font-size: ${Ze.fontSize[t]}px;`),ze.fontWeight&&(W+=`font-weight: ${ze.fontWeight};`),ze.fontStyle&&(W+=`font-style: ${ze.fontStyle};`),ze.textTransform&&(W+=`text-transform: ${ze.textTransform};`),ze.textDecoration&&(W+=`text-decoration: ${ze.textDecoration};`),ze.lineHeight&&ze.lineHeight[t]?W+=`line-height: ${ze.lineHeight[t]}${ze.lineHeightUnit||"em"};`:Ze.lineHeight&&Ze.lineHeight[t]&&(W+=`line-height: ${Ze.lineHeight[t]}em;`),ze.letterSpacing&&ze.letterSpacing[t]&&(W+=`letter-spacing: ${ze.letterSpacing[t]}${ze.letterSpacingUnit||"px"};`);let ho="",uo=C||i;uo.fontFamily&&(ho+=`font-family: ${uo.fontFamily};`),uo.fontSize&&uo.fontSize[t]?ho+=`font-size: ${uo.fontSize[t]}${uo.fontSizeUnit||"px"};`:i.fontSize&&i.fontSize[t]&&(ho+=`font-size: ${i.fontSize[t]}px;`),uo.fontWeight&&(ho+=`font-weight: ${uo.fontWeight};`),uo.fontStyle&&(ho+=`font-style: ${uo.fontStyle};`),uo.textTransform&&(ho+=`text-transform: ${uo.textTransform};`),uo.textDecoration&&(ho+=`text-decoration: ${uo.textDecoration};`),uo.lineHeight&&uo.lineHeight[t]?ho+=`line-height: ${uo.lineHeight[t]}${uo.lineHeightUnit||"em"};`:i.lineHeight&&i.lineHeight[t]&&(ho+=`line-height: ${i.lineHeight[t]}em;`),uo.letterSpacing&&uo.letterSpacing[t]&&(ho+=`letter-spacing: ${uo.letterSpacing[t]}${uo.letterSpacingUnit||"px"};`);let xo=f||4,Mo=b&&b[t]?`${Gi(b,"padding",t)}`:"padding: 10px 20px",Do="";D&&D!=="none"?Do=`
				border-style: ${D};
				border-color: ${We||se||"#4a6cf7"};
				${Gi(le,"border-width",t)}
			`:Do="border: none;";let ko="";switch(v){case"style1":ko=`
					.${o} .digiblocks-pricing-table {
						text-align: center;
					}
					
					.${o} .digiblocks-pricing-table-header {
						display: flex;
						flex-direction: column;
						gap: 10px;
						padding: 20px;
						border-bottom: 1px solid #e6e6e6;
					}
					
					.${o} .digiblocks-pricing-table-features {
						padding: 20px;
					}
					
					.${o} .digiblocks-pricing-table-footer {
						padding: 20px;
						border-top: 1px solid #e6e6e6;
					}
				`;break;case"style2":ko=`
					.${o} .digiblocks-pricing-table {
						text-align: center;
						overflow: hidden;
					}
					
					.${o} .digiblocks-pricing-table-header {
						padding: 30px 20px;
						margin: -1px -1px 0 -1px;
						color: #ffffff;
					}
					
					.${o} .digiblocks-pricing-table-title {
						color: #ffffff !important;
					}
					
					.${o} .digiblocks-pricing-table-price {
						color: #ffffff !important;
					}
					
					.${o} .digiblocks-pricing-table-description {
						color: rgba(255, 255, 255, 0.8) !important;
					}
					
					.${o} .digiblocks-pricing-table-features {
						padding: 30px 20px;
					}
					
					.${o} .digiblocks-pricing-table-footer {
						padding: 30px 20px;
					}
					
					.${o} .digiblocks-pricing-table-highlighted {
						transform: scale(1.05);
						z-index: 1;
					}
				`;break;case"style3":ko=`
					.${o} .digiblocks-pricing-table {
						text-align: center;
					}
					
					.${o} .digiblocks-pricing-table-header {
						padding: 30px 20px;
					}
					
					.${o} .digiblocks-pricing-table-features {
						padding: 20px;
					}
					
					.${o} .digiblocks-pricing-table-footer {
						padding: 30px 20px;
					}
					
					.${o} .digiblocks-pricing-table-highlighted {
						border-top-width: 10px !important;
					}
				`;break;case"style4":ko=`
					.${o} .digiblocks-pricing-table {
						text-align: center;
						border-radius: 16px;
					}
					
					.${o} .digiblocks-pricing-table-header {
						padding: 40px 20px 20px;
						border-radius: 16px 16px 0 0;
					}
					
					.${o} .digiblocks-pricing-table-price {
						font-size: 3rem;
						line-height: 1;
					}
					
					.${o} .digiblocks-pricing-table-features {
						padding: 20px 30px;
					}
					
					.${o} .digiblocks-pricing-table-footer {
						padding: 20px 20px 40px;
					}
					
					.${o} .digiblocks-pricing-table-button {
						padding: 15px 35px;
						border-radius: 50px;
					}
				`;break;case"minimal":ko=`
					.${o} .digiblocks-pricing-table {
						text-align: center;
					}
					
					.${o} .digiblocks-pricing-table-header {
						padding: 20px;
						border-bottom: 1px solid #e6e6e6;
					}
					
					.${o} .digiblocks-pricing-table-features {
						padding: 20px;
					}
					
					.${o} .digiblocks-pricing-table-footer {
						padding: 20px;
						border-top: 1px solid #e6e6e6;
					}
					
					.${o} .digiblocks-pricing-table-button {
						background: transparent;
						border: 1px solid #4a6cf7;
						padding: 10px 25px;
					}
					
					.${o} .digiblocks-pricing-table-button:hover {
						background: #f8f9fa;
					}
				`;break;default:ko=""}let mo="";if(K)switch(L){case"corner":mo=`
						.${o} .digiblocks-pricing-table-ribbon {
							position: absolute;
							top: 0;
							${oe==="right"?"right":"left"}: 0;
							background: ${He||"#4a6cf7"};
							color: ${de||"#ffffff"};
							padding: 5px 10px;
							font-size: 12px;
							font-weight: bold;
							text-transform: uppercase;
							z-index: 2;
							${oe==="right"?"border-radius: 0 0 0 4px;":"border-radius: 0 0 4px 0;"}
						}
					`;break;case"banner":mo=`
						.${o} .digiblocks-pricing-table-highlighted {
							overflow: hidden;
						}

						.${o} .digiblocks-pricing-table-ribbon {
							position: absolute;
							top: 7px;
							${oe==="right"?"right":"left"}: -24px;
							background: ${He||"#4a6cf7"};
							color: ${de||"#ffffff"};
							padding: 5px 30px;
							font-size: 12px;
							font-weight: bold;
							transform: ${oe==="right"?"rotate(45deg)":"rotate(-45deg)"};
							z-index: 2;
							transform-origin: center center;
						}
					`;break;case"side":mo=`
						.${o} .digiblocks-pricing-table-ribbon {
							position: absolute;
							top: 30px;
							${oe==="right"?"right":"left"}: 0;
							background: ${He||"#4a6cf7"};
							color: ${de||"#ffffff"};
							padding: 5px 10px;
							font-size: 12px;
							font-weight: bold;
							${oe==="right"?"border-radius: 4px 0 0 4px;":"border-radius: 0 4px 4px 0;"}
							z-index: 2;
						}
					`;break;case"flag":mo=`
						.${o} .digiblocks-pricing-table-ribbon {
							position: absolute;
							top: 15px;
							${oe==="right"?"right":"left"}: 15px;
							background: ${He||"#4a6cf7"};
							color: ${de||"#ffffff"};
							padding: 8px 15px;
							font-size: 12px;
							font-weight: bold;
							border-radius: 50px;
							z-index: 2;
						}
					`;break;default:mo=""}return`
			/* Pricing Table Block - ${o} */
			.${o} {
				${oo}
				width: 100%;
				position: relative;
			}
			
			/* Grid container for tables */
			.${o} .digiblocks-pricing-tables-container {
				display: grid;
				gap: 30px;
				grid-template-columns: repeat(${_}, 1fr);
			}
			
			/* Individual pricing table */
			.${o} .digiblocks-pricing-table {
				display: flex;
				flex-direction: column;
				background-color: ${J||"#ffffff"};
				color: ${q||"#333333"};
				${p}
				${De}
				${he}
				position: relative;
				transition: all 0.3s ease;
			}
			
			/* Highlighted table */
			.${o} .digiblocks-pricing-table-highlighted {
				z-index: 1;
			}
			
			/* Hover effect */
			.${o} .digiblocks-pricing-table:hover {
				${E&&E.enable?r:""}
			}
			
			/* Header section */
			.${o} .digiblocks-pricing-table-header {
				background-color: ${A||"transparent"};
				text-align: center;
			}
			
			/* Icon */
			.${o} .digiblocks-pricing-table-icon {
				display: inline-flex;
				justify-content: center;
			}

			.${o} .digiblocks-pricing-table-icon span {
				display: flex;
			}
			
			.${o} .digiblocks-pricing-table-icon svg {
				width: 50px;
				height: 50px;
			}
			
			${l.map((yo,ot)=>`
				/* Custom colors for table ${ot+1} */
				.${o} .digiblocks-pricing-table:nth-child(${ot+1}) .digiblocks-pricing-table-icon svg {
					fill: ${yo.iconColor||q||"#333333"};
					transition: fill 0.3s ease;
				}
				
				.${o} .digiblocks-pricing-table:nth-child(${ot+1}):hover .digiblocks-pricing-table-icon svg {
					fill: ${yo.iconHoverColor||yo.iconColor||q||"#333333"};
				}
			`).join("")}
			
			/* Title */
			.${o} .digiblocks-pricing-table-title {
				margin: 0;
				color: ${q||"#333333"};
				${F}
			}
			
			/* Price section */
			.${o} .digiblocks-pricing-table-price {
				color: ${q||"#333333"};
				${po}
			}
			
			.${o} .digiblocks-pricing-table-period {
				${Ke}
				opacity: 0.8;
			}
			
			/* Description */
			.${o} .digiblocks-pricing-table-description {
				${Ke}
			}
			
			/* Features section */
			.${o} .digiblocks-pricing-table-feature-wrapper {
				display: flex;
				align-items: center;
				justify-content: ${M==="center"?"center":M==="right"?"flex-end":"space-between"};
				gap: 10px;
			}

			.${o} .digiblocks-pricing-table-feature-item {
				display: flex;
				align-items: center;
				justify-content: ${M==="center"?"center":M==="right"?"flex-end":"flex-start"};
				gap: 10px;
				${W}
			}
			
			.${o} .digiblocks-pricing-table-feature-icon {
				display: inline-flex;
				align-items: center;
			}
			
			.${o} .digiblocks-pricing-table-feature-icon span {
				display: flex;
			}
			
			.${o} .digiblocks-pricing-table-feature-check {
				color: #28a745;
			}
			
			.${o} .digiblocks-pricing-table-feature-cross {
				color: #dc3545;
			}
			
			.${o} .digiblocks-pricing-table-feature-text {
				flex: 1;
			}
			
			.${o} .digiblocks-pricing-table-feature-disabled {
				opacity: 0.5;
				text-decoration: line-through;
			}
			
			/* Footer section */
			.${o} .digiblocks-pricing-table-footer {
				margin-top: auto;
				text-align: center;
			}
			
			/* Button */
			.${o} .digiblocks-pricing-table-button {
				background-color: ${se||"#4a6cf7"};
				color: ${re||"#ffffff"};
				${Mo}
				border-radius: ${xo}px;
				cursor: pointer;
				display: inline-block;
				text-decoration: none;
				transition: all 0.3s ease;
				${Do}
				${ho}
			}
			
			.${o} .digiblocks-pricing-table-button:hover {
				background-color: ${Y||"#3151e1"};
				color: ${Ce||"#ffffff"};
				${Se?`border-color: ${Se};`:""}
			}
			
			/* Ribbon */
			${mo}
			
			/* Table-specific styles */
			${ko}
			
			/* Editor controls */
			.${o} .digiblocks-pricing-table-controls {
				margin-top: 20px;
				margin-bottom: 20px;
				display: flex;
				flex-wrap: wrap;
				gap: 10px;
				justify-content: center;
			}
			
			.${o} .digiblocks-table-item-controls {
				position: absolute;
				top: 5px;
				right: 5px;
				display: flex;
				gap: 5px;
				z-index: 10;
				background: rgba(255, 255, 255, 0.9);
				border-radius: 4px;
				padding: 3px;
			}
			
			.${o} .digiblocks-feature-item-controls {
				display: flex;
				gap: 5px;
			}
			
			.${o} .digiblocks-table-active {
				outline: 2px solid #4a6cf7;
				outline-offset: -2px;
			}
			
			/* Responsive styles */
			@media (max-width: 991px) {
				.${o} .digiblocks-pricing-tables-container {
					grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
				}
				
				.${o} .digiblocks-pricing-table-highlighted {
					transform: none !important;
				}
			}
			
			@media (max-width: 767px) {
				.${o} .digiblocks-pricing-tables-container {
					grid-template-columns: 1fr;
				}
			}

			/* Visibility Controls */
			${n.desktop?`
				@media (min-width: 992px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${n.tablet?`
				@media (min-width: 768px) and (max-width: 991px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${n.mobile?`
				@media (max-width: 767px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}
		`},eo=(t,p)=>wp.element.createElement("div",{key:t.id,className:`digiblocks-pricing-table ${me===p?"digiblocks-table-active":""} ${t.isHighlighted?"digiblocks-pricing-table-highlighted":""}`,onClick:()=>Te(p),style:t.backgroundColor?{backgroundColor:t.backgroundColor}:null},wp.element.createElement("div",{className:"digiblocks-table-item-controls"},wp.element.createElement(qi,{text:ke("Move Left","digiblocks")},wp.element.createElement(_t,{icon:"arrow-left-alt2",isSmall:!0,onClick:De=>{De.stopPropagation(),g(p)},disabled:p===0})),wp.element.createElement(qi,{text:ke("Move Right","digiblocks")},wp.element.createElement(_t,{icon:"arrow-right-alt2",isSmall:!0,onClick:De=>{De.stopPropagation(),Q(p)},disabled:p===l.length-1})),wp.element.createElement(qi,{text:ke("Duplicate","digiblocks")},wp.element.createElement(_t,{icon:"admin-page",isSmall:!0,onClick:De=>{De.stopPropagation(),S(p)}})),wp.element.createElement(qi,{text:ke("Remove","digiblocks")},wp.element.createElement(_t,{icon:"trash",isSmall:!0,onClick:De=>{De.stopPropagation(),ce(p)},disabled:l.length<=1}))),K&&t.isHighlighted&&wp.element.createElement("div",{className:"digiblocks-pricing-table-ribbon"},wp.element.createElement(ci,{tagName:"span",value:t.ribbonText,onChange:De=>c(p,"ribbonText",De),placeholder:ke("Popular","digiblocks")})),wp.element.createElement("div",{className:"digiblocks-pricing-table-header",style:t.headerBackgroundColor?{backgroundColor:t.headerBackgroundColor}:null},t.iconValue&&t.iconValue.svg&&wp.element.createElement("div",{className:"digiblocks-pricing-table-icon"},wp.element.createElement("span",{dangerouslySetInnerHTML:{__html:t.iconValue.svg}})),wp.element.createElement(ci,{tagName:"h3",className:"digiblocks-pricing-table-title",value:t.title,onChange:De=>c(p,"title",De),placeholder:ke("Plan Title","digiblocks"),style:t.textColor?{color:t.textColor}:null}),wp.element.createElement("div",{className:"digiblocks-pricing-table-price",style:t.textColor?{color:t.textColor}:null},wp.element.createElement(ci,{tagName:"span",className:"digiblocks-pricing-table-amount",value:t.price,onChange:De=>c(p,"price",De),placeholder:ke("$0","digiblocks")}),wp.element.createElement(ci,{tagName:"span",className:"digiblocks-pricing-table-period",value:t.period,onChange:De=>c(p,"period",De),placeholder:ke("/month","digiblocks")})),wp.element.createElement(ci,{tagName:"div",className:"digiblocks-pricing-table-description",value:t.description,onChange:De=>c(p,"description",De),placeholder:ke("Short description","digiblocks"),style:t.textColor?{color:t.textColor}:null})),wp.element.createElement("div",{className:"digiblocks-pricing-table-features"},t.features.map((De,r)=>wp.element.createElement("div",{key:`feature-${r}`,className:"digiblocks-pricing-table-feature-wrapper"},wp.element.createElement("div",{className:`digiblocks-pricing-table-feature-item ${De.enabled?"":"digiblocks-pricing-table-feature-disabled"}`},wp.element.createElement("div",{className:"digiblocks-pricing-table-feature-icon"},De.enabled?wp.element.createElement("span",{className:"digiblocks-pricing-table-feature-check"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"16",height:"16",fill:"currentColor"},wp.element.createElement("path",{d:"M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"}))):wp.element.createElement("span",{className:"digiblocks-pricing-table-feature-cross"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",width:"16",height:"16",fill:"currentColor"},wp.element.createElement("path",{d:"M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"})))),wp.element.createElement(ci,{tagName:"div",className:"digiblocks-pricing-table-feature-text",value:De.text,onChange:he=>u(p,r,"text",he),placeholder:ke("Feature","digiblocks"),style:t.textColor?{color:t.textColor}:null})),wp.element.createElement("div",{className:"digiblocks-feature-item-controls"},wp.element.createElement(qi,{text:De.enabled?ke("Disable","digiblocks"):ke("Enable","digiblocks")},wp.element.createElement(_t,{icon:De.enabled?"visibility":"hidden",isSmall:!0,onClick:he=>{he.stopPropagation(),Ne(p,r)}})),wp.element.createElement(qi,{text:ke("Remove","digiblocks")},wp.element.createElement(_t,{icon:"trash",isSmall:!0,onClick:he=>{he.stopPropagation(),y(p,r)},disabled:t.features.length<=1}))))),wp.element.createElement(_t,{variant:"secondary",isSmall:!0,onClick:De=>{De.stopPropagation(),ae(p)},style:{width:"100%",marginTop:"10px"}},ke("Add Feature","digiblocks"))),wp.element.createElement("div",{className:"digiblocks-pricing-table-footer"},wp.element.createElement("div",{className:"digiblocks-pricing-table-button",style:t.buttonBackgroundColor?{backgroundColor:t.buttonBackgroundColor,color:t.buttonTextColor||re||"#ffffff"}:null},wp.element.createElement(ci,{tagName:"span",value:t.buttonText,onChange:De=>c(p,"buttonText",De),placeholder:ke("Get Started","digiblocks")})))),ao=()=>{switch(ve){case"options":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Ao,{tab:"options",name:"layout",title:ke("Layout","digiblocks"),initialOpen:!0},wp.element.createElement(Ad,{label:ke("Columns","digiblocks"),value:_,onChange:t=>e({columns:t}),min:1,max:4,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Wi,{label:ke("Table Style","digiblocks"),value:v,options:j,onChange:t=>a(t),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(tf,{label:ke("Alignment","digiblocks"),value:M,onChange:t=>e({align:t}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(Qs,{value:"left",label:ke("Left","digiblocks")}),wp.element.createElement(Qs,{value:"center",label:ke("Center","digiblocks")}),wp.element.createElement(Qs,{value:"right",label:ke("Right","digiblocks")}))),wp.element.createElement(Ao,{tab:"options",name:"ribbon",title:ke("Ribbon","digiblocks"),initialOpen:!1},wp.element.createElement(Ol,{label:ke("Show Ribbon","digiblocks"),checked:K,onChange:t=>e({showRibbon:t}),help:ke("Display a ribbon on highlighted tables.","digiblocks"),__nextHasNoMarginBottom:!0}),K&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Wi,{label:ke("Ribbon Style","digiblocks"),value:L,options:ye,onChange:t=>e({ribbonStyle:t}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Wi,{label:ke("Ribbon Position","digiblocks"),value:oe,options:Je,onChange:t=>e({ribbonPosition:t}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Ei,{title:ke("Ribbon Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:He,onChange:t=>e({ribbonBackgroundColor:t}),label:ke("Background Color","digiblocks")},{value:de,onChange:t=>e({ribbonTextColor:t}),label:ke("Text Color","digiblocks")}]}))),wp.element.createElement(Ao,{tab:"options",name:"table-config",title:ke("Table Settings","digiblocks"),initialOpen:!1},l[me]&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("h3",null,ke("Editing Table","digiblocks")," #",me+1),wp.element.createElement(Ol,{label:ke("Highlight This Table","digiblocks"),checked:l[me].isHighlighted,onChange:t=>c(me,"isHighlighted",t),help:ke("Apply special styling to highlight this table.","digiblocks"),__nextHasNoMarginBottom:!0}),qe?wp.element.createElement(ue,{label:ke("Select Icon","digiblocks"),value:l[me].iconValue,onChange:t=>c(me,"iconValue",t)}):wp.element.createElement("div",{style:{textAlign:"center",padding:"20px 0"}},wp.element.createElement("div",{className:"components-spinner"}),wp.element.createElement("p",null,ke("Loading icon selector...","digiblocks"))),l[me]&&l[me].iconValue&&wp.element.createElement(Ei,{title:ke("Icon Colors","digiblocks"),initialOpen:!1,enableAlpha:!0,colorSettings:[{value:l[me].iconColor,onChange:t=>c(me,"iconColor",t),label:ke("Icon Color","digiblocks")},{value:l[me].iconHoverColor,onChange:t=>c(me,"iconHoverColor",t),label:ke("Icon Hover Color","digiblocks")}]}),wp.element.createElement("div",{style:{marginTop:"15px",marginBottom:"10px"}},wp.element.createElement("p",null,wp.element.createElement("strong",null,ke("Button Link","digiblocks"))),wp.element.createElement(of,{value:l[me].buttonUrl?{url:l[me].buttonUrl,opensInNewTab:!!l[me].buttonOpenInNewTab,rel:l[me].buttonRel||""}:void 0,settings:[{id:"opensInNewTab",title:ke("Open in new tab","digiblocks")},{id:"rel",title:ke("Add noopener noreferrer","digiblocks")}],onChange:t=>{if(t&&t.url){let p=[...l];p[me]={...p[me],buttonUrl:t.url,buttonOpenInNewTab:!!t.opensInNewTab,buttonRel:t.rel||""},e({tables:p})}},onRemove:()=>{let t=[...l];t[me]={...t[me],buttonUrl:"",buttonOpenInNewTab:!1,buttonRel:""},e({tables:t})},suggestionsQuery:{type:"post",subtype:"any"},forceIsEditingLink:!l[me].buttonUrl})))));case"style":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Ao,{tab:"style",name:"colors",title:ke("Colors","digiblocks"),initialOpen:!0},wp.element.createElement(Ei,{title:ke("Table Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:J,onChange:t=>e({tableBackgroundColor:t}),label:ke("Background Color","digiblocks")},{value:A,onChange:t=>e({headerBackgroundColor:t}),label:ke("Header Background","digiblocks")},{value:q,onChange:t=>e({tableTextColor:t}),label:ke("Text Color","digiblocks")}]}),wp.element.createElement(Ei,{title:ke("Button Colors","digiblocks"),initialOpen:!1,enableAlpha:!0,colorSettings:[{value:se,onChange:t=>e({buttonBackgroundColor:t}),label:ke("Background Color","digiblocks")},{value:re,onChange:t=>e({buttonTextColor:t}),label:ke("Text Color","digiblocks")},{value:Y,onChange:t=>e({buttonBackgroundHoverColor:t}),label:ke("Hover Background","digiblocks")},{value:Ce,onChange:t=>e({buttonTextHoverColor:t}),label:ke("Hover Text","digiblocks")}]})),wp.element.createElement(Ao,{tab:"style",name:"typography",title:ke("Typography","digiblocks"),initialOpen:!1},wp.element.createElement(jl,{label:ke("Title Typography","digiblocks"),value:m,onChange:t=>e({titleTypography:t}),defaults:{fontSize:{desktop:24,tablet:20,mobile:18},fontSizeUnit:"px",lineHeight:{desktop:1.4,tablet:1.3,mobile:1.2},lineHeightUnit:"em"}}),wp.element.createElement(jl,{label:ke("Price Typography","digiblocks"),value:s,onChange:t=>e({headingTypography:t}),defaults:{fontSize:{desktop:36,tablet:30,mobile:26},fontSizeUnit:"px",lineHeight:{desktop:1.2,tablet:1.2,mobile:1.2},lineHeightUnit:"em"}}),wp.element.createElement(jl,{label:ke("Description Typography","digiblocks"),value:$,onChange:t=>e({textTypography:t}),defaults:{fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",lineHeight:{desktop:1.6,tablet:1.5,mobile:1.4},lineHeightUnit:"em"}}),wp.element.createElement(jl,{label:ke("Features Typography","digiblocks"),value:I,onChange:t=>e({contentTypography:t}),defaults:{fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",lineHeight:{desktop:1.6,tablet:1.5,mobile:1.4},lineHeightUnit:"em"}}),wp.element.createElement(jl,{label:ke("Button Typography","digiblocks"),value:C,onChange:t=>e({buttonTypography:t}),defaults:{fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em"}})),wp.element.createElement(Ao,{tab:"style",name:"borders",title:ke("Borders & Shadow","digiblocks"),initialOpen:!1},wp.element.createElement(Wi,{label:ke("Border Style","digiblocks"),value:V,options:G,onChange:t=>e({borderStyle:t}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),V!=="none"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Qi,{label:ke("Border Width","digiblocks")},wp.element.createElement(Ji,{values:T&&T[be]?T[be]:{top:1,right:1,bottom:1,left:1,unit:"px"},onChange:t=>e({borderWidth:{...T,[be]:t}})})),wp.element.createElement(Ei,{title:ke("Border Color","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:Z,onChange:t=>e({borderColor:t}),label:ke("Border Color","digiblocks")}]})),wp.element.createElement(Qi,{label:ke("Border Radius","digiblocks")},wp.element.createElement(Ji,{values:O&&O[be]?O[be]:{top:8,right:8,bottom:8,left:8,unit:"px"},onChange:t=>e({borderRadius:{...O,[be]:t}}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]})),wp.element.createElement(nf,{normalValue:ee,hoverValue:E,onNormalChange:t=>e({boxShadow:t}),onHoverChange:t=>e({boxShadowHover:t})})),wp.element.createElement(Ao,{tab:"style",name:"button-style",title:ke("Button Style","digiblocks"),initialOpen:!1},wp.element.createElement(Ad,{label:ke("Border Radius","digiblocks"),value:f,onChange:t=>e({buttonRadius:t}),min:0,max:50,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Wi,{label:ke("Border Style","digiblocks"),value:D,options:G,onChange:t=>e({buttonBorderStyle:t}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),D!=="none"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Qi,{label:ke("Border Width","digiblocks")},wp.element.createElement(Ji,{values:le&&le[be]?le[be]:{top:1,right:1,bottom:1,left:1,unit:"px"},onChange:t=>e({buttonBorderWidth:{...le,[be]:t}})})),wp.element.createElement(Ei,{title:ke("Border Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:We,onChange:t=>e({buttonBorderColor:t}),label:ke("Border Color","digiblocks")},{value:Se,onChange:t=>e({buttonBorderHoverColor:t}),label:ke("Border Hover Color","digiblocks")}]})),wp.element.createElement(Qi,{label:ke("Button Padding","digiblocks")},wp.element.createElement(Ji,{values:b&&b[be]?b[be]:{top:10,right:20,bottom:10,left:20,unit:"px"},onChange:t=>e({buttonPadding:{...b,[be]:t}})}))),wp.element.createElement(Ao,{tab:"style",name:"spacing",title:ke("Spacing","digiblocks"),initialOpen:!1},wp.element.createElement(Qi,{label:ke("Padding","digiblocks")},wp.element.createElement(Ji,{values:k&&k[be]?k[be]:{top:0,right:0,bottom:0,left:0,unit:"px"},onChange:t=>e({padding:{...k,[be]:t}})})),wp.element.createElement(Qi,{label:ke("Margin","digiblocks")},wp.element.createElement(Ji,{values:B&&B[be]?B[be]:{top:0,right:0,bottom:30,left:0,unit:"px"},onChange:t=>e({margin:{...B,[be]:t}})}))));case"advanced":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Ao,{tab:"advanced",name:"animation",title:ke("Animation","digiblocks"),initialOpen:!0},wp.element.createElement(Wi,{label:ke("Animation Effect","digiblocks"),value:N,options:pe,onChange:t=>e({animation:t}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),N&&N!=="none"&&wp.element.createElement("div",{style:{marginTop:"10px"}},wp.element.createElement(_t,{variant:"secondary",isSecondary:!0,onClick:Oe,style:{width:"100%"}},ke("Preview Animation","digiblocks")))),wp.element.createElement(Ao,{tab:"advanced",name:"visibility",title:ke("Visibility","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control__help",style:{padding:"12px",backgroundColor:"#f0f6fc",border:"1px solid #c3ddfd",borderRadius:"4px",marginBottom:"16px"}},wp.element.createElement("strong",null,ke("Editor Note:","digiblocks")),wp.element.createElement("br",null),ke("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.","digiblocks")),wp.element.createElement(Ol,{label:ke("Hide on Desktop","digiblocks"),checked:n.desktop,onChange:t=>e({visibility:{...n,desktop:t}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(Ol,{label:ke("Hide on Tablet","digiblocks"),checked:n.tablet,onChange:t=>e({visibility:{...n,tablet:t}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(Ol,{label:ke("Hide on Mobile","digiblocks"),checked:n.mobile,onChange:t=>e({visibility:{...n,mobile:t}}),__nextHasNoMarginBottom:!0})),wp.element.createElement(Ao,{tab:"advanced",name:"additional",title:ke("Additional","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control html-anchor-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"html-anchor"},ke("HTML anchor","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"html-anchor",value:P||"",onChange:t=>e({anchor:t.target.value}),"aria-describedby":"html-anchor-help",autoCapitalize:"none",autoComplete:"off"})),wp.element.createElement("p",{id:"html-anchor-help",className:"components-base-control__help"},ke(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`,"digiblocks")," ",wp.element.createElement("a",{className:"components-external-link",href:"https://wordpress.org/documentation/article/page-jumps/",target:"_blank",rel:"external noreferrer noopener"},wp.element.createElement("span",{className:"components-external-link__contents"},ke("Learn more about anchors","digiblocks")),wp.element.createElement("span",{className:"components-external-link__icon","aria-label":"(opens in a new tab)"},"\u2197")))),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"additional-css-classes"},ke("Additional CSS class(es)","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"additional-css-classes",value:te||"",onChange:t=>e({customClasses:t.target.value}),"aria-describedby":"additional-css-classes-help",autoComplete:"off"})),wp.element.createElement("p",{id:"additional-css-classes-help",className:"components-base-control__help"},ke("Separate multiple classes with spaces.","digiblocks")))));default:return null}},go=Ah({className:`digiblocks-pricing-table-block ${o} ${te||""}`,id:P||null});return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(ef,null,wp.element.createElement(sf,{tabs:R,activeTab:ve,onSelect:U},ao())),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:Fe()}}),wp.element.createElement("div",{...go},wp.element.createElement("div",{className:"digiblocks-pricing-tables-container"},l.map((t,p)=>eo(t,p))),wp.element.createElement("div",{className:"digiblocks-pricing-table-controls"},wp.element.createElement(_t,{variant:"primary",icon:"plus",onClick:d},ke("Add Pricing Table","digiblocks")))))},og=rf;var{__:av}=window.wp.i18n,{useBlockProps:nv,RichText:di}=window.wp.blockEditor,cf=({attributes:ie})=>{let{id:e,anchor:X,customClasses:o,tables:P,columns:n,tableStyle:te,align:l,animation:_,showRibbon:v,ribbonStyle:M,ribbonPosition:N}=ie,m=["digiblocks-pricing-table-block",e,`align-${l}`,_!=="none"?`animate-${_}`:"",te?`style-${te}`:"",o||""].filter(Boolean).join(" ");return wp.element.createElement("div",{className:m,id:X||null},wp.element.createElement("div",{className:"digiblocks-pricing-tables-container"},P.map(s=>wp.element.createElement("div",{key:s.id,className:`digiblocks-pricing-table ${s.isHighlighted?"digiblocks-pricing-table-highlighted":""}`,style:s.backgroundColor?{backgroundColor:s.backgroundColor}:null},v&&s.isHighlighted&&wp.element.createElement("div",{className:"digiblocks-pricing-table-ribbon"},wp.element.createElement(di.Content,{value:s.ribbonText})),wp.element.createElement("div",{className:"digiblocks-pricing-table-header",style:s.headerBackgroundColor?{backgroundColor:s.headerBackgroundColor}:null},s.iconValue&&s.iconValue.svg&&wp.element.createElement("div",{className:"digiblocks-pricing-table-icon"},wp.element.createElement("span",{dangerouslySetInnerHTML:{__html:s.iconValue.svg}})),wp.element.createElement(di.Content,{tagName:"h3",className:"digiblocks-pricing-table-title",value:s.title,style:s.textColor?{color:s.textColor}:null}),wp.element.createElement("div",{className:"digiblocks-pricing-table-price",style:s.textColor?{color:s.textColor}:null},wp.element.createElement(di.Content,{tagName:"span",className:"digiblocks-pricing-table-amount",value:s.price}),wp.element.createElement(di.Content,{tagName:"span",className:"digiblocks-pricing-table-period",value:s.period})),wp.element.createElement(di.Content,{tagName:"div",className:"digiblocks-pricing-table-description",value:s.description,style:s.textColor?{color:s.textColor}:null})),wp.element.createElement("div",{className:"digiblocks-pricing-table-features"},s.features.map(($,I)=>wp.element.createElement("div",{key:`feature-${I}`,className:`digiblocks-pricing-table-feature-item ${$.enabled?"":"digiblocks-pricing-table-feature-disabled"}`},wp.element.createElement("div",{className:"digiblocks-pricing-table-feature-icon"},$.enabled?wp.element.createElement("span",{className:"digiblocks-pricing-table-feature-check"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"16",height:"16",fill:"currentColor"},wp.element.createElement("path",{d:"M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"}))):wp.element.createElement("span",{className:"digiblocks-pricing-table-feature-cross"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",width:"16",height:"16",fill:"currentColor"},wp.element.createElement("path",{d:"M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"})))),wp.element.createElement(di.Content,{tagName:"div",className:"digiblocks-pricing-table-feature-text",value:$.text,style:s.textColor?{color:s.textColor}:null})))),wp.element.createElement("div",{className:"digiblocks-pricing-table-footer"},wp.element.createElement("a",{href:s.buttonUrl||"#",className:"digiblocks-pricing-table-button",style:s.buttonBackgroundColor?{backgroundColor:s.buttonBackgroundColor,color:s.buttonTextColor||"#ffffff"}:null,target:s.buttonOpenInNewTab?"_blank":void 0,rel:s.buttonOpenInNewTab?`noopener noreferrer ${s.buttonRel||""}`.trim():s.buttonRel||void 0},wp.element.createElement(di.Content,{tagName:"span",value:s.buttonText})))))))},tg=cf;var{__:Vl}=window.wp.i18n,{registerBlockType:df}=window.wp.blocks,{getBlockActiveStatus:gf}=window.wp.digiBlocks;df("digiblocks/pricing-table",{apiVersion:2,title:digiBlocksData.blocks["pricing-table"].title,category:"digiblocks",icon:{src:()=>{let{viewbox:ie,path:e}=digiBlocksData.blocks["pricing-table"].icon;return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${ie}`,className:"digiblocks-editor-icons"},wp.element.createElement("path",{d:e}))}},description:digiBlocksData.blocks["pricing-table"].description,keywords:[Vl("pricing","digiblocks"),Vl("price","digiblocks"),Vl("table","digiblocks"),Vl("plan","digiblocks"),Vl("subscription","digiblocks")],supports:{inserter:!!gf("pricing-table"),html:!1,className:!1,customClassName:!1,anchor:!1},attributes:{id:{type:"string"},anchor:{type:"string"},visibility:{type:"object",default:{desktop:!1,tablet:!1,mobile:!1}},customClasses:{type:"string"},tables:{type:"array",default:[]},columns:{type:"number",default:2},tableStyle:{type:"string",default:"style1"},align:{type:"string",default:"center"},animation:{type:"string",default:"none"},titleTypography:{type:"object",default:{}},headingTypography:{type:"object",default:{}},textTypography:{type:"object",default:{}},contentTypography:{type:"object",default:{}},buttonTypography:{type:"object",default:{}},padding:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},margin:{type:"object",default:{desktop:{top:0,right:0,bottom:30,left:0,unit:"px"},tablet:{top:0,right:0,bottom:20,left:0,unit:"px"},mobile:{top:0,right:0,bottom:15,left:0,unit:"px"}}},borderRadius:{type:"object",default:{desktop:{top:8,right:8,bottom:8,left:8,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderStyle:{type:"string",default:"solid"},borderWidth:{type:"object",default:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderColor:{type:"string",default:"#e6e6e6"},boxShadow:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.1)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},boxShadowHover:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.15)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},buttonRadius:{type:"number",default:4},buttonPadding:{type:"object",default:{desktop:{top:10,right:20,bottom:10,left:20,unit:"px"},tablet:{top:8,right:16,bottom:8,left:16,unit:"px"},mobile:{top:6,right:12,bottom:6,left:12,unit:"px"}}},buttonBorderStyle:{type:"string",default:"none"},buttonBorderWidth:{type:"object",default:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},buttonBorderColor:{type:"string",default:""},buttonBorderHoverColor:{type:"string",default:""},showRibbon:{type:"boolean",default:!0},ribbonStyle:{type:"string",default:"corner"},ribbonPosition:{type:"string",default:"right"},tableTextColor:{type:"string",default:"#333333"},tableBackgroundColor:{type:"string",default:"#ffffff"},headerBackgroundColor:{type:"string",default:"#f8f9fa"},buttonTextColor:{type:"string",default:"#ffffff"},buttonBackgroundColor:{type:"string",default:"#4a6cf7"},buttonTextHoverColor:{type:"string",default:"#ffffff"},buttonBackgroundHoverColor:{type:"string",default:"#3151e1"},ribbonTextColor:{type:"string",default:"#ffffff"},ribbonBackgroundColor:{type:"string",default:"#4a6cf7"}},example:{attributes:{tables:[{id:"table-1-example",title:"Basic Plan",price:"$19",period:"/month",description:"Great for starters",features:[{text:"1 Website",enabled:!0},{text:"5GB Storage",enabled:!0},{text:"Premium Support",enabled:!1}],buttonText:"Get Started",isHighlighted:!1,ribbonText:"Popular"}],columns:1,tableStyle:"style1",showRibbon:!0}},edit:og,save:tg});var{__:bo}=window.wp.i18n,{useBlockProps:pf,InspectorControls:bf,PanelColorSettings:uf,BlockControls:mf,AlignmentToolbar:hf}=window.wp.blockEditor,{ToggleControl:Zs,SelectControl:ff,RangeControl:gi,Button:kf,TextControl:vf,__experimentalToggleGroupControl:Ks,__experimentalToggleGroupControlOption:Xs,BaseControl:xf}=window.wp.components,{useState:As,useEffect:er,useRef:yf}=window.wp.element,{useBlockId:Cf,animations:Fl,animationPreview:ig}=digi.utils,{tabIcons:or}=digi.icons,{ResponsiveControl:wf,TypographyControl:Sf,CustomTabPanel:$f,TabPanelBody:Yi}=digi.components,_f=({style:ie,primaryColor:e,secondaryColor:X,isSelected:o,onClick:P})=>{let n={display:"inline-flex",flexDirection:"column",width:"60px",height:"60px",margin:"5px",border:`1px solid ${o?"#007cba":"#ddd"}`,backgroundColor:o?"rgba(0,124,186,0.1)":"white",borderRadius:"4px",cursor:"pointer",overflow:"hidden",transition:"all 0.2s ease"},te={textAlign:"center",fontSize:"10px",padding:"3px 0",fontWeight:o?"500":"normal",borderBottom:`1px solid ${o?"#e0e0e0":"transparent"}`,backgroundColor:o?"rgba(0,124,186,0.05)":"transparent"},l={flex:1,display:"flex",justifyContent:"center",alignItems:"center",padding:"8px"},_=null;switch(ie){case"line":_=wp.element.createElement("div",{style:{width:"100%",height:"3px",backgroundColor:e,borderRadius:"1px"}});break;case"dashed":_=wp.element.createElement("div",{style:{width:"100%",height:"2px",backgroundImage:`linear-gradient(to right, ${e} 50%, transparent 50%)`,backgroundSize:"8px 2px",backgroundRepeat:"repeat-x",borderRadius:"1px"}});break;case"dotted":_=wp.element.createElement("div",{style:{width:"100%",height:"3px",backgroundImage:`radial-gradient(circle, ${e} 1px, transparent 1px)`,backgroundSize:"4px 3px",backgroundPosition:"center",backgroundRepeat:"repeat-x"}});break;case"double":_=wp.element.createElement("div",{style:{display:"flex",flexDirection:"column",width:"100%",gap:"2px"}},wp.element.createElement("div",{style:{height:"1px",backgroundColor:e,borderRadius:"1px"}}),wp.element.createElement("div",{style:{height:"1px",backgroundColor:e,borderRadius:"1px"}}));break;case"gradient":_=wp.element.createElement("div",{style:{width:"100%",height:"3px",background:`linear-gradient(to right, ${X||"transparent"}, ${e}, ${X||"transparent"})`,borderRadius:"1px"}});break;case"shadow":_=wp.element.createElement("div",{style:{width:"100%",height:"2px",backgroundColor:e,boxShadow:"0 1px 2px rgba(0,0,0,0.3)",borderRadius:"1px"}});break;case"wave":_=wp.element.createElement("svg",{height:"20",width:"100%",viewBox:"0 0 100 20",preserveAspectRatio:"none"},wp.element.createElement("path",{d:"M0,10 C20,5 30,15 50,10 C70,5 80,15 100,10 L100,20 L0,20 Z",fill:e}));break;case"zigzag":_=wp.element.createElement("svg",{height:"10",width:"100%",viewBox:"0 0 100 10",preserveAspectRatio:"none"},wp.element.createElement("polyline",{points:"0,0 10,10 20,0 30,10 40,0 50,10 60,0 70,10 80,0 90,10 100,0",fill:"none",stroke:e,strokeWidth:"2"}));break;case"slant":_=wp.element.createElement("svg",{height:"10",width:"100%",viewBox:"0 0 100 10",preserveAspectRatio:"none"},wp.element.createElement("polygon",{points:"0,0 100,10 100,0",fill:e}));break;default:_=wp.element.createElement("div",{style:{width:"100%",height:"3px",backgroundColor:e,borderRadius:"1px"}})}return wp.element.createElement("div",{style:n,onClick:P},wp.element.createElement("div",{style:te},(()=>{switch(ie){case"line":return"Line";case"dashed":return"Dashed";case"dotted":return"Dotted";case"double":return"Double";case"gradient":return"Gradient";case"shadow":return"Shadow";case"wave":return"Wave";case"zigzag":return"Zigzag";case"slant":return"Slant";default:return ie.charAt(0).toUpperCase()+ie.slice(1)}})()),wp.element.createElement("div",{style:l},_))},Bf=({attributes:ie,setAttributes:e,clientId:X})=>{let{id:o,anchor:P,visibility:n,customClasses:te,contentType:l,content:_,align:v,iconValue:M,separatorStyle:N,primaryColor:m,secondaryColor:s,width:$,widthUnit:I,height:C,heightUnit:k,borderRadius:B,margin:O,animation:T,typography:V,iconSize:Z,gap:ee,textColor:E}=ie;Cf(o,X,e);let[f,b]=As(window.digi.responsiveState.activeDevice);er(()=>window.digi.responsiveState.subscribe(ve=>{b(ve)}),[]);let[D,le]=As("options"),[We,Se]=As(!1);er(()=>{let x=()=>window.digi&&window.digi.components&&window.digi.components.FontAwesomeControl?(Se(!0),!0):!1;if(!x()){let ve=setTimeout(()=>{x()&&clearTimeout(ve)},500);return()=>clearTimeout(ve)}},[]);let K=x=>{e({iconValue:x})},L=yf(null);er(()=>{if(T&&T!=="none"){let x=setTimeout(()=>{ig(o,T,Fl,L)},100);return()=>clearTimeout(x)}},[T]);let oe=()=>{ig(o,T,Fl,L)},q=[{label:"px",value:"px"},{label:"%",value:"%"}],J=[{label:"px",value:"px"},{label:"%",value:"%"}],A=[{label:bo("None","digiblocks"),value:"none"},{label:bo("Text","digiblocks"),value:"text"},{label:bo("Icon","digiblocks"),value:"icon"}],re=[{label:bo("None","digiblocks"),value:"none"},...Object.keys(Fl).map(x=>({label:x.replace(/-/g," ").replace(/\b\w/g,ve=>ve.toUpperCase()),value:x}))],se=[{name:"options",title:bo("Options","digiblocks"),icon:or.optionsIcon},{name:"style",title:bo("Style","digiblocks"),icon:or.styleIcon},{name:"advanced",title:bo("Advanced","digiblocks"),icon:or.advancedIcon}],Ce=We?window.digi.components.FontAwesomeControl:null,Y=()=>{switch(N){case"wave":return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1200 120",preserveAspectRatio:"none"},wp.element.createElement("path",{d:"M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z",fill:m}));case"zigzag":return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1200 120",preserveAspectRatio:"none"},wp.element.createElement("path",{d:"M0,0 L100,120 L200,0 L300,120 L400,0 L500,120 L600,0 L700,120 L800,0 L900,120 L1000,0 L1100,120 L1200,0",fill:m}));case"slant":return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1200 120",preserveAspectRatio:"none"},wp.element.createElement("path",{d:"M1200 120L0 16.48 0 0 1200 0 1200 120z",fill:m}));default:return null}},de=()=>{let x=window.digi.responsiveState.activeDevice,ve="",U=O[x]||{top:30,bottom:30,unit:"px"},me=$[x]||100,Te=C[x]||3,qe="",Ve="";switch(N){case"line":ve=`
                    background-color: ${m};
                    height: ${Te}${k};
                    width: ${me}${I};
                    border-radius: ${B[x]||0}px;
                `;break;case"dashed":ve=`
                    border-top: ${Te}${k} dashed ${m};
                    width: ${me}${I};
                `;break;case"dotted":ve=`
                    border-top: ${Te}${k} dotted ${m};
                    width: ${me}${I};
                `;break;case"double":ve=`
                    border-top: ${Math.max(1,Math.floor(Te/3))}${k} solid ${m};
                    border-bottom: ${Math.max(1,Math.floor(Te/3))}${k} solid ${m};
                    height: ${Te}${k};
                    width: ${me}${I};
                `;break;case"gradient":ve=`
                    background: linear-gradient(90deg, ${s||"transparent"} 0%, ${m} 50%, ${s||"transparent"} 100%);
                    height: ${Te}${k};
                    width: ${me}${I};
                    border-radius: ${B[x]||0}px;
                `;break;case"shadow":ve=`
                    height: ${Te}${k};
                    width: ${me}${I};
                    background-color: ${m};
                    border-radius: ${B[x]||0}px;
                    box-shadow: 0 ${Math.max(2,Te/2)}px ${Math.max(4,Te)}px rgba(0,0,0,0.2);
                `;break;case"wave":case"zigzag":case"slant":ve=`
                    width: 100%;
                    height: 100%;
                    position: relative;
                `,qe=`
                    .${o} .digiblocks-separator-shape {
                        width: 100%;
                        height: 100%;
                    }
                    .${o} .digiblocks-separator-shape svg {
                        width: 100%;
                        height: 100%;
                        display: block;
                    }
                `;break}let Ee="";if((l==="text"||l==="icon")&&!["wave","zigzag","slant"].includes(N)){let ye=ee[x]||15;Ee=`
                .${o} .digiblocks-separator-content {
                    position: relative;
                    z-index: 2;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    background-color: #fff;
                    padding: 0 ${ye}px;
                    ${l==="text"&&E?`color: ${E};`:""}
                }
                
                .${o}.digiblocks-separator-has-content .digiblocks-separator-line {
                    position: absolute;
                    top: 50%;
                    left: 0;
                    right: 0;
                    z-index: 1;
                    transform: translateY(-50%);
                }
            `}if(l==="icon"&&M&&M.svg&&(Ee+=`
                .${o} .digiblocks-separator-icon {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                
                .${o} .digiblocks-separator-icon svg {
                    width: ${Z[x]||24}px;
                    height: ${Z[x]||24}px;
                    fill: ${E||m};
                }
            `),l==="text"&&V){let ye="";V.fontFamily&&(ye+=`font-family: ${V.fontFamily};`),V.fontSize&&V.fontSize[x]&&(ye+=`font-size: ${V.fontSize[x]}${V.fontSizeUnit||"px"};`),V.fontWeight&&(ye+=`font-weight: ${V.fontWeight};`),V.fontStyle&&(ye+=`font-style: ${V.fontStyle};`),V.textTransform&&(ye+=`text-transform: ${V.textTransform};`),V.lineHeight&&V.lineHeight[x]&&(ye+=`line-height: ${V.lineHeight[x]}${V.lineHeightUnit||"em"};`),V.letterSpacing&&V.letterSpacing[x]&&(ye+=`letter-spacing: ${V.letterSpacing[x]}${V.letterSpacingUnit||"px"};`),Ee+=`
                .${o} .digiblocks-separator-text {
                    ${ye}
                }
            `}let Oe="";T&&T!=="none"&&Fl[T]&&(Oe=Fl[T].keyframes);let j="";switch(v){case"center":j="margin-left: auto; margin-right: auto;";break;case"right":j="margin-left: auto; margin-right: 0;";break;default:j="margin-left: 0; margin-right: auto;";break}return`
            /* Separator Block - ${o} */
            .${o} {
                margin-top: ${U.top}${U.unit};
                margin-bottom: ${U.bottom}${U.unit};
                display: flex;
                align-items: center;
                justify-content: ${v==="center"?"center":v==="right"?"flex-end":"flex-start"};
                position: relative;
                clear: both;
                width: 100%;
            }
            
            .${o} .digiblocks-separator-container {
                position: relative;
                display: flex;
                flex-direction: column;
                align-items: ${v==="center"?"center":v==="right"?"flex-end":"flex-start"};
                width: 100%;
            }
            
            .${o} .digiblocks-separator-line {
                ${ve}
                ${j}
            }
            
            ${qe}
            ${Ee}
            ${Oe}
            
            /* Responsive styles will be handled by media queries */
            @media (max-width: 991px) {
                .${o} {
                    margin-top: ${O.tablet?O.tablet.top+(O.tablet.unit||"px"):U.top+U.unit};
                    margin-bottom: ${O.tablet?O.tablet.bottom+(O.tablet.unit||"px"):U.bottom+U.unit};
                }
                
                .${o} .digiblocks-separator-line {
                    width: ${$.tablet?$.tablet+I:me+I};
                    height: ${C.tablet?C.tablet+k:Te+k};
                    ${B.tablet?`border-radius: ${B.tablet}px;`:""}
                }
                
                ${l==="icon"?`
                .${o} .digiblocks-separator-icon svg {
                    width: ${Z.tablet||20}px;
                    height: ${Z.tablet||20}px;
                }`:""}
            }
            
            @media (max-width: 767px) {
                .${o} {
                    margin-top: ${O.mobile?O.mobile.top+(O.mobile.unit||"px"):U.top+U.unit};
                    margin-bottom: ${O.mobile?O.mobile.bottom+(O.mobile.unit||"px"):U.bottom+U.unit};
                }
                
                .${o} .digiblocks-separator-line {
                    width: ${$.mobile?$.mobile+I:me+I};
                    height: ${C.mobile?C.mobile+k:Te+k};
                    ${B.mobile?`border-radius: ${B.mobile}px;`:""}
                }
                
                ${l==="icon"?`
                .${o} .digiblocks-separator-icon svg {
                    width: ${Z.mobile||16}px;
                    height: ${Z.mobile||16}px;
                }`:""}
            }

			/* Visibility Controls */
			${n.desktop?`
				@media (min-width: 992px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${n.tablet?`
				@media (min-width: 768px) and (max-width: 991px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${n.mobile?`
				@media (max-width: 767px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}
        `},He=()=>!M||!M.svg||M.svg.trim()===""?null:wp.element.createElement("div",{className:"digiblocks-separator-icon"},wp.element.createElement("span",{dangerouslySetInnerHTML:{__html:M.svg}})),be=()=>wp.element.createElement("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px",justifyContent:"center",margin:"0 -5px",maxHeight:"200px",overflow:"auto",padding:"4px 0",border:"1px solid #e0e0e0",borderRadius:"4px",backgroundColor:"#f9f9f9"}},[{label:"Line",value:"line"},{label:"Dashed",value:"dashed"},{label:"Dotted",value:"dotted"},{label:"Double",value:"double"},{label:"Gradient",value:"gradient"},{label:"Shadow",value:"shadow"},{label:"Wave",value:"wave"},{label:"Zigzag",value:"zigzag"},{label:"Slant",value:"slant"}].map(U=>wp.element.createElement(_f,{key:U.value,style:U.value,primaryColor:m||"#1e73be",secondaryColor:s,isSelected:N===U.value,onClick:()=>{["wave","zigzag","slant"].includes(U.value)&&l!=="none"?e({separatorStyle:U.value,contentType:"none"}):e({separatorStyle:U.value})}}))),H=()=>{switch(D){case"options":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:"components-panel__body is-opened"},wp.element.createElement(xf,{label:bo("Separator Style","digiblocks"),id:"separator-style-selector",__nextHasNoMarginBottom:!0},be()),["wave","zigzag","slant"].includes(N)?wp.element.createElement("div",{className:"components-notice is-warning",style:{margin:"0 0 16px 0"}},wp.element.createElement("div",{className:"components-notice__content"},bo("Content is not available with this separator style.","digiblocks"))):wp.element.createElement(Ks,{label:bo("Content Type","digiblocks"),value:l,onChange:x=>e({contentType:x}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},A.map(x=>wp.element.createElement(Xs,{key:x.value,value:x.value,label:x.label}))),l==="text"&&wp.element.createElement(vf,{label:bo("Text Content","digiblocks"),value:_,onChange:x=>e({content:x}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),l==="icon"&&wp.element.createElement("div",{style:{marginTop:"15px"}},We?wp.element.createElement(Ce,{label:bo("Select Icon","digiblocks"),value:M,onChange:K}):wp.element.createElement("div",{style:{textAlign:"center",padding:"20px 0"}},wp.element.createElement("div",{className:"components-spinner"}),wp.element.createElement("p",null,bo("Loading icon selector...","digiblocks"))))));case"style":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Yi,{tab:"style",name:"colors",title:bo("Colors","digiblocks"),initialOpen:!0},wp.element.createElement(uf,{title:bo("Separator Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:m,onChange:x=>e({primaryColor:x}),label:bo("Primary Color","digiblocks")},...N==="gradient"?[{value:s,onChange:x=>e({secondaryColor:x}),label:bo("Secondary Color","digiblocks")}]:[],...l!=="none"?[{value:E,onChange:x=>e({textColor:x}),label:bo(l==="text"?"Text Color":"Icon Color","digiblocks")}]:[]]})),wp.element.createElement(Yi,{tab:"style",name:"dimensions",title:bo("Dimensions","digiblocks"),initialOpen:!1},!["wave","zigzag","slant"].includes(N)&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:"digiblocks-size-type-field-tabs"},wp.element.createElement("div",{className:"digiblocks-responsive-control-inner"},wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"digiblocks-range-control digiblocks-size-type-field-tabs"},wp.element.createElement("div",{className:"digiblocks-control__header"},wp.element.createElement("div",{className:"digiblocks-responsive-label-wrap"},wp.element.createElement("span",{className:"digiblocks-control-label"},bo("Width","digiblocks")),wp.element.createElement("button",{type:"button","aria-label":bo(`Switch to ${window.digi.responsiveState.getNextDevice()} view`,"digiblocks"),className:`components-button digiblocks-responsive-common-button digiblocks-device-${f}`,onClick:()=>window.digi.responsiveState.toggleDevice()},window.digi.icons.deviceIcons[f])),wp.element.createElement("div",{className:"digiblocks-range-control__actions digiblocks-control__actions"},wp.element.createElement("div",{tabIndex:"0"},wp.element.createElement("button",{type:"button",disabled:$[f]===100,className:"components-button digiblocks-reset is-secondary is-small",onClick:()=>e({width:{...$,[f]:100}})},wp.element.createElement("span",{className:"dashicon dashicons dashicons-image-rotate"}))),wp.element.createElement(Ks,{value:I,onChange:x=>e({widthUnit:x}),isBlock:!0,isSmall:!0,hideLabelFromVision:!0,"aria-label":bo("Width Unit","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},q.map(x=>wp.element.createElement(Xs,{key:x.value,value:x.value,label:x.label}))))),wp.element.createElement("div",{className:"digiblocks-range-control__mobile-controls"},wp.element.createElement(gi,{value:$[f],onChange:x=>e({width:{...$,[f]:x}}),min:1,max:I==="%"?100:1e3,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})))))),wp.element.createElement("div",{className:"digiblocks-size-type-field-tabs"},wp.element.createElement("div",{className:"digiblocks-responsive-control-inner"},wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"digiblocks-range-control digiblocks-size-type-field-tabs"},wp.element.createElement("div",{className:"digiblocks-control__header"},wp.element.createElement("div",{className:"digiblocks-responsive-label-wrap"},wp.element.createElement("span",{className:"digiblocks-control-label"},bo("Height","digiblocks")),wp.element.createElement("button",{type:"button","aria-label":bo(`Switch to ${window.digi.responsiveState.getNextDevice()} view`,"digiblocks"),className:`components-button digiblocks-responsive-common-button digiblocks-device-${f}`,onClick:()=>window.digi.responsiveState.toggleDevice()},window.digi.icons.deviceIcons[f])),wp.element.createElement("div",{className:"digiblocks-range-control__actions digiblocks-control__actions"},wp.element.createElement("div",{tabIndex:"0"},wp.element.createElement("button",{type:"button",disabled:C[f]===3,className:"components-button digiblocks-reset is-secondary is-small",onClick:()=>e({height:{...C,[f]:3}})},wp.element.createElement("span",{className:"dashicon dashicons dashicons-image-rotate"}))),wp.element.createElement(Ks,{value:k,onChange:x=>e({heightUnit:x}),isBlock:!0,isSmall:!0,hideLabelFromVision:!0,"aria-label":bo("Height Unit","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},J.map(x=>wp.element.createElement(Xs,{key:x.value,value:x.value,label:x.label}))))),wp.element.createElement("div",{className:"digiblocks-range-control__mobile-controls"},wp.element.createElement(gi,{value:C[f],onChange:x=>e({height:{...C,[f]:x}}),min:1,max:k==="%"?20:100,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}))))))),["line","gradient","shadow"].includes(N)&&wp.element.createElement("div",{className:"digiblocks-responsive-control"},wp.element.createElement("div",{className:"digiblocks-control__header"},wp.element.createElement("div",{className:"digiblocks-responsive-label-wrap"},wp.element.createElement("span",{className:"digiblocks-control-label"},bo("Border Radius","digiblocks")),wp.element.createElement("button",{type:"button","aria-label":bo(`Switch to ${window.digi.responsiveState.getNextDevice()} view`,"digiblocks"),className:`components-button digiblocks-responsive-common-button digiblocks-device-${f}`,onClick:()=>window.digi.responsiveState.toggleDevice()},window.digi.icons.deviceIcons[f]))),wp.element.createElement("div",{className:"digiblocks-responsive-control-content"},wp.element.createElement("div",{className:"digiblocks-unit-control"},wp.element.createElement(gi,{value:B[f],onChange:x=>e({borderRadius:{...B,[f]:x}}),min:0,max:50,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})))),(l==="text"||l==="icon")&&wp.element.createElement("div",{className:"digiblocks-responsive-control"},wp.element.createElement("div",{className:"digiblocks-control__header"},wp.element.createElement("div",{className:"digiblocks-responsive-label-wrap"},wp.element.createElement("span",{className:"digiblocks-control-label"},bo("Gap","digiblocks")),wp.element.createElement("button",{type:"button","aria-label":bo(`Switch to ${window.digi.responsiveState.getNextDevice()} view`,"digiblocks"),className:`components-button digiblocks-responsive-common-button digiblocks-device-${f}`,onClick:()=>window.digi.responsiveState.toggleDevice()},window.digi.icons.deviceIcons[f]))),wp.element.createElement("div",{className:"digiblocks-responsive-control-content"},wp.element.createElement("div",{className:"digiblocks-unit-control"},wp.element.createElement(gi,{value:ee[f],onChange:x=>e({gap:{...ee,[f]:x}}),min:0,max:100,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})))),l==="icon"&&wp.element.createElement("div",{className:"digiblocks-responsive-control"},wp.element.createElement("div",{className:"digiblocks-control__header"},wp.element.createElement("div",{className:"digiblocks-responsive-label-wrap"},wp.element.createElement("span",{className:"digiblocks-control-label"},bo("Icon Size","digiblocks")),wp.element.createElement("button",{type:"button","aria-label":bo(`Switch to ${window.digi.responsiveState.getNextDevice()} view`,"digiblocks"),className:`components-button digiblocks-responsive-common-button digiblocks-device-${f}`,onClick:()=>window.digi.responsiveState.toggleDevice()},window.digi.icons.deviceIcons[f]))),wp.element.createElement("div",{className:"digiblocks-responsive-control-content"},wp.element.createElement("div",{className:"digiblocks-unit-control"},wp.element.createElement(gi,{value:Z[f],onChange:x=>e({iconSize:{...Z,[f]:x}}),min:8,max:100,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})))),wp.element.createElement(wf,{label:bo("Margin","digiblocks")},wp.element.createElement("div",{className:"digiblocks-margin-control"},wp.element.createElement(gi,{label:bo("Top","digiblocks"),value:O[f]?.top||30,onChange:x=>{let ve={...O,[f]:{...O[f],top:x,unit:O[f]?.unit||"px"}};e({margin:ve})},min:0,max:200,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(gi,{label:bo("Bottom","digiblocks"),value:O[f]?.bottom||30,onChange:x=>{let ve={...O,[f]:{...O[f],bottom:x,unit:O[f]?.unit||"px"}};e({margin:ve})},min:0,max:200,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})))),l==="text"&&wp.element.createElement(Yi,{tab:"style",name:"typography",title:bo("Typography","digiblocks"),initialOpen:!1},wp.element.createElement(Sf,{label:bo("Text Typography","digiblocks"),value:V,onChange:x=>e({typography:x}),defaults:{fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",lineHeight:{desktop:1.5,tablet:1.5,mobile:1.5},lineHeightUnit:"em"}})));case"advanced":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Yi,{tab:"advanced",name:"animation",title:bo("Animation","digiblocks"),initialOpen:!0},wp.element.createElement(ff,{label:bo("Animation Effect","digiblocks"),value:T,options:re,onChange:x=>e({animation:x}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),T&&T!=="none"&&wp.element.createElement("div",{style:{marginTop:"10px"}},wp.element.createElement(kf,{variant:"secondary",isSecondary:!0,onClick:oe,style:{width:"100%"}},bo("Preview Animation","digiblocks")))),wp.element.createElement(Yi,{tab:"advanced",name:"visibility",title:bo("Visibility","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control__help",style:{padding:"12px",backgroundColor:"#f0f6fc",border:"1px solid #c3ddfd",borderRadius:"4px",marginBottom:"16px"}},wp.element.createElement("strong",null,bo("Editor Note:","digiblocks")),wp.element.createElement("br",null),bo("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.","digiblocks")),wp.element.createElement(Zs,{label:bo("Hide on Desktop","digiblocks"),checked:n.desktop,onChange:x=>e({visibility:{...n,desktop:x}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(Zs,{label:bo("Hide on Tablet","digiblocks"),checked:n.tablet,onChange:x=>e({visibility:{...n,tablet:x}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(Zs,{label:bo("Hide on Mobile","digiblocks"),checked:n.mobile,onChange:x=>e({visibility:{...n,mobile:x}}),__nextHasNoMarginBottom:!0})),wp.element.createElement(Yi,{tab:"advanced",name:"additional",title:bo("Additional","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control html-anchor-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"html-anchor"},bo("HTML anchor","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"html-anchor",value:P||"",onChange:x=>e({anchor:x.target.value}),"aria-describedby":"html-anchor-help",autoCapitalize:"none",autoComplete:"off"})),wp.element.createElement("p",{id:"html-anchor-help",className:"components-base-control__help"},bo(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`,"digiblocks")," ",wp.element.createElement("a",{className:"components-external-link",href:"https://wordpress.org/documentation/article/page-jumps/",target:"_blank",rel:"external noreferrer noopener"},wp.element.createElement("span",{className:"components-external-link__contents"},bo("Learn more about anchors","digiblocks")),wp.element.createElement("span",{className:"components-external-link__icon","aria-label":"(opens in a new tab)"},"\u2197")))),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"additional-css-classes"},bo("Additional CSS class(es)","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"additional-css-classes",value:te||"",onChange:x=>e({customClasses:x.target.value}),"aria-describedby":"additional-css-classes-help",autoComplete:"off"})),wp.element.createElement("p",{id:"additional-css-classes-help",className:"components-base-control__help"},bo("Separate multiple classes with spaces.","digiblocks")))));default:return null}},xe=pf({className:`digiblocks-separator ${o} ${l!=="none"&&!["wave","zigzag","slant"].includes(N)?"digiblocks-separator-has-content":""} ${te||""}`,id:P||null});return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(mf,null,wp.element.createElement(hf,{value:v,onChange:x=>e({align:x})})),wp.element.createElement(bf,null,wp.element.createElement($f,{tabs:se,activeTab:D,onSelect:le},H())),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:de()}}),wp.element.createElement("div",{...xe},wp.element.createElement("div",{className:"digiblocks-separator-container"},l!=="none"&&!["wave","zigzag","slant"].includes(N)&&wp.element.createElement("div",{className:"digiblocks-separator-content"},l==="text"&&wp.element.createElement("span",{className:"digiblocks-separator-text"},_),l==="icon"&&He()),["wave","zigzag","slant"].includes(N)?wp.element.createElement("div",{className:"digiblocks-separator-shape"},Y()):wp.element.createElement("div",{className:"digiblocks-separator-line"}))))},lg=Bf;var{useBlockProps:Tf,RichText:gv}=window.wp.blockEditor,Nf=({attributes:ie})=>{let{id:e,anchor:X,customClasses:o,contentType:P,content:n,align:te,iconValue:l,separatorStyle:_,primaryColor:v,secondaryColor:M,animation:N}=ie,m=()=>{switch(_){case"wave":return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1200 120",preserveAspectRatio:"none"},wp.element.createElement("path",{d:"M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z",fill:v}));case"zigzag":return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1200 120",preserveAspectRatio:"none"},wp.element.createElement("path",{d:"M0,0 L100,120 L200,0 L300,120 L400,0 L500,120 L600,0 L700,120 L800,0 L900,120 L1000,0 L1100,120 L1200,0",fill:v}));case"slant":return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1200 120",preserveAspectRatio:"none"},wp.element.createElement("path",{d:"M1200 120L0 16.48 0 0 1200 0 1200 120z",fill:v}));default:return null}},s=()=>!l||!l.svg||l.svg.trim()===""?null:wp.element.createElement("div",{className:"digiblocks-separator-icon"},wp.element.createElement("span",{dangerouslySetInnerHTML:{__html:l.svg}})),$=["digiblocks-separator",e,P!=="none"&&!["wave","zigzag","slant"].includes(_)?"digiblocks-separator-has-content":"",`align-${te}`,N!=="none"?`animate-${N}`:"",o||""].filter(Boolean).join(" "),I=Tf.save({className:$,id:X||null,"data-separator-style":_});return wp.element.createElement("div",{...I},wp.element.createElement("div",{className:"digiblocks-separator-container"},P!=="none"&&!["wave","zigzag","slant"].includes(_)&&wp.element.createElement("div",{className:"digiblocks-separator-content"},P==="text"&&wp.element.createElement("span",{className:"digiblocks-separator-text"},n),P==="icon"&&s()),["wave","zigzag","slant"].includes(_)?wp.element.createElement("div",{className:"digiblocks-separator-shape"},m()):wp.element.createElement("div",{className:"digiblocks-separator-line"})))},ag=Nf;var{__:Xa}=window.wp.i18n,{registerBlockType:Hf}=window.wp.blocks,{getBlockActiveStatus:zf}=window.wp.digiBlocks;Hf("digiblocks/separator",{apiVersion:2,title:digiBlocksData.blocks.separator.title,category:"digiblocks",icon:{src:()=>{let{viewbox:ie,path:e}=digiBlocksData.blocks.separator.icon;return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${ie}`,className:"digiblocks-editor-icons"},wp.element.createElement("path",{d:e}))}},description:digiBlocksData.blocks.separator.description,keywords:[Xa("separator","digiblocks"),Xa("divider","digiblocks"),Xa("horizontal rule","digiblocks"),Xa("hr","digiblocks")],supports:{inserter:!!zf("separator"),html:!1,className:!1,customClassName:!1,anchor:!1},attributes:{id:{type:"string",default:""},anchor:{type:"string",default:""},visibility:{type:"object",default:{desktop:!1,tablet:!1,mobile:!1}},customClasses:{type:"string",default:""},contentType:{type:"string",default:"none"},content:{type:"string",default:"Separator"},iconValue:{type:"object",default:null},separatorStyle:{type:"string",default:"line"},primaryColor:{type:"string",default:"#222222"},secondaryColor:{type:"string",default:"#f0f0f0"},textColor:{type:"string",default:"#333333"},width:{type:"object",default:{desktop:100,tablet:100,mobile:100}},widthUnit:{type:"string",default:"%"},height:{type:"object",default:{desktop:3,tablet:2,mobile:2}},heightUnit:{type:"string",default:"px"},borderRadius:{type:"object",default:{desktop:0,tablet:0,mobile:0}},margin:{type:"object",default:{desktop:{top:30,bottom:30,unit:"px"},tablet:{top:25,bottom:25,unit:"px"},mobile:{top:20,bottom:20,unit:"px"}}},align:{type:"string",default:"center"},animation:{type:"string",default:"none"},typography:{type:"object",default:{fontFamily:"",fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",fontWeight:"",fontStyle:"normal",textTransform:"",textDecoration:"",lineHeight:{desktop:1.5,tablet:1.5,mobile:1.5},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}},iconSize:{type:"object",default:{desktop:24,tablet:20,mobile:16}},gap:{type:"object",default:{desktop:15,tablet:10,mobile:8}}},example:{attributes:{separatorStyle:"gradient",primaryColor:"#1e73be",secondaryColor:"#f0f0f0",width:{desktop:80},height:{desktop:4},contentType:"text",content:"Section",textColor:"#333333"}},edit:lg,save:ag});var{__:io}=window.wp.i18n,{useBlockProps:Mf,InspectorControls:Df,PanelColorSettings:ng}=window.wp.blockEditor,{SelectControl:tr,RangeControl:ir,TabPanel:Pf,Button:Aa,ToggleControl:El,TextControl:lr,Popover:sg,__experimentalToggleGroupControl:Rf,__experimentalToggleGroupControlOption:en}=window.wp.components,{useState:on,useEffect:ar,useRef:If}=window.wp.element,{useBlockId:Lf,getDimensionCSS:nr,animations:Wl,animationPreview:rg}=digi.utils,{tabIcons:sr}=digi.icons,{ResponsiveControl:Zi,ResponsiveButtonGroup:Of,DimensionControl:rr,TypographyControl:Uf,CustomTabPanel:jf,TabPanelBody:Ki}=digi.components,ql={facebook:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"})),twitter:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"})),linkedin:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"})),instagram:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"})),pinterest:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z"})),youtube:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"})),dribbble:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M86.6 64l85.2 85.2C194.5 121.7 208 86.4 208 48c0-14.7-2-28.9-5.7-42.4C158.6 15 119 35.5 86.6 64zM64 86.6C35.5 119 15 158.6 5.6 202.3C19.1 206 33.3 208 48 208c38.4 0 73.7-13.5 101.3-36.1L64 86.6zM256 0c-7.3 0-14.6 .3-21.8 .9C238 16 240 31.8 240 48c0 47.3-17.1 90.5-45.4 124L256 233.4 425.4 64C380.2 24.2 320.9 0 256 0zM48 240c-16.2 0-32-2-47.1-5.8C.3 241.4 0 248.7 0 256c0 64.9 24.2 124.2 64 169.4L233.4 256 172 194.6C138.5 222.9 95.3 240 48 240zm463.1 37.8c.6-7.2 .9-14.5 .9-21.8c0-64.9-24.2-124.2-64-169.4L278.6 256 340 317.4c33.4-28.3 76.7-45.4 124-45.4c16.2 0 32 2 47.1 5.8zm-4.7 31.9C492.9 306 478.7 304 464 304c-38.4 0-73.7 13.5-101.3 36.1L448 425.4c28.5-32.3 49.1-71.9 58.4-115.7zM340.1 362.7C317.5 390.3 304 425.6 304 464c0 14.7 2 28.9 5.7 42.4C353.4 497 393 476.5 425.4 448l-85.2-85.2zM317.4 340L256 278.6 86.6 448c45.1 39.8 104.4 64 169.4 64c7.3 0 14.6-.3 21.8-.9C274 496 272 480.2 272 464c0-47.3 17.1-90.5 45.4-124z"})),github:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 496 512",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"})),behance:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M232 237.2c31.8-15.2 48.4-38.2 48.4-74 0-70.6-52.6-87.8-113.3-87.8H0v354.4h171.8c64.4 0 124.9-30.9 124.9-102.9 0-44.5-21.1-77.4-64.7-89.7zM77.9 135.9H151c28.1 0 53.4 7.9 53.4 40.5 0 30.1-19.7 42.2-47.5 42.2h-79v-82.7zm83.3 233.7H77.9V272h84.9c34.3 0 56 14.3 56 50.6 0 35.8-25.9 47-57.6 47zm358.5-240.7H376V94h143.7v34.9zM576 305.2c0-75.9-44.4-139.2-124.9-139.2-78.2 0-131.3 58.8-131.3 135.8 0 79.9 50.3 134.7 131.3 134.7 61.3 0 101-27.6 120.1-86.3H509c-6.7 21.9-34.3 33.5-55.7 33.5-41.3 0-63-24.2-63-65.3h185.1c.3-4.2 .6-8.7 .6-13.2zM390.4 274c2.3-33.7 24.7-54.8 58.5-54.8 35.4 0 53.2 20.8 56.2 54.8H390.4z"})),vimeo:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M447.8 153.6c-2 43.6-32.4 103.3-91.4 179.1-60.9 79.2-112.4 118.8-154.6 118.8-26.1 0-48.2-24.1-66.3-72.3C100.3 250 85.3 174.3 56.2 174.3c-3.4 0-15.1 7.1-35.2 21.1L0 168.2c51.6-45.3 100.9-95.7 131.8-98.5 34.9-3.4 56.3 20.5 64.4 71.5 28.7 181.5 41.4 208.9 93.6 126.7 18.7-29.6 28.8-52.1 30.2-67.6 4.8-45.9-35.8-42.8-63.3-31 22-72.1 64.1-107.1 126.2-105.1 45.8 1.2 67.5 31.1 64.9 89.4z"})),tiktok:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"})),email:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"})),website:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"}))},Vf=wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"})),Ff=({attributes:ie,setAttributes:e,clientId:X})=>{let{id:o,anchor:P,visibility:n,customClasses:te,align:l,icons:_,iconSize:v,iconSpacing:M,iconColor:N,iconHoverColor:m,iconBackground:s,iconHoverBackground:$,iconBorderStyle:I,iconBorderWidth:C,iconBorderRadius:k,iconBorderColor:B,iconHoverBorderColor:O,labelColor:T,labelHoverColor:V,labelSpacing:Z,padding:ee,animation:E,showLabels:f,labelPosition:b,textTypography:D}=ie;Lf(o,X,e);let[le,We]=on(window.digi.responsiveState.activeDevice),[Se,K]=on(()=>{if(window.digi.uiState){let G=window.digi.uiState.getActiveTab(X);if(G)return G}return"options"}),[L,oe]=on(null),[q,J]=on(null);ar(()=>window.digi.responsiveState.subscribe(pe=>{We(pe)}),[]),ar(()=>{(!_||_.length===0)&&e({icons:[{id:`social-icon-${X.substr(0,8)}-1`,iconValue:{name:"Facebook",network:"facebook",svg:"M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"},url:"https://facebook.com",label:"Facebook",openInNewTab:!0,rel:"nofollow"}]})},[X,_,e,o]);let A=If(null);ar(()=>{if(E&&E!=="none"){let G=setTimeout(()=>{rg(o,E,Wl,A)},100);return()=>clearTimeout(G)}},[E]);let re=()=>{rg(o,E,Wl,A)},se=[{label:io("None","digiblocks"),value:"none"},{label:io("Solid","digiblocks"),value:"solid"},{label:io("Dotted","digiblocks"),value:"dotted"},{label:io("Dashed","digiblocks"),value:"dashed"},{label:io("Double","digiblocks"),value:"double"}],Ce=[{label:io("None","digiblocks"),value:"none"},...Object.keys(Wl).map(G=>({label:G.replace(/-/g," ").replace(/\b\w/g,pe=>pe.toUpperCase()),value:G}))],Y=[{label:io("Facebook","digiblocks"),value:"facebook"},{label:io("Twitter","digiblocks"),value:"twitter"},{label:io("LinkedIn","digiblocks"),value:"linkedin"},{label:io("Instagram","digiblocks"),value:"instagram"},{label:io("Pinterest","digiblocks"),value:"pinterest"},{label:io("YouTube","digiblocks"),value:"youtube"},{label:io("Dribbble","digiblocks"),value:"dribbble"},{label:io("GitHub","digiblocks"),value:"github"},{label:io("Behance","digiblocks"),value:"behance"},{label:io("Vimeo","digiblocks"),value:"vimeo"},{label:io("TikTok","digiblocks"),value:"tiktok"},{label:io("Email","digiblocks"),value:"email"},{label:io("Website","digiblocks"),value:"website"}],de=[{name:"options",title:io("Options","digiblocks"),icon:sr.optionsIcon},{name:"style",title:io("Style","digiblocks"),icon:sr.styleIcon},{name:"advanced",title:io("Advanced","digiblocks"),icon:sr.advancedIcon}],He=[{name:"normal",title:io("Normal","digiblocks"),className:"digiblocks-tab-1 normal"},{name:"hover",title:io("Hover","digiblocks"),className:"digiblocks-tab-2 hover"}],be=()=>{H()},H=()=>{J({target:document.querySelector(".add-social")})},xe=()=>{J(null)},x=G=>{if(_.map(ce=>ce.iconValue&&ce.iconValue.network?ce.iconValue.network:null).filter(Boolean).includes(G))return;let d={id:`social-icon-${X.substr(0,8)}-${Date.now()}`,iconValue:{name:G.charAt(0).toUpperCase()+G.slice(1),network:G,svg:ql[G]?ql[G].props.children.props.d:""},url:"",label:G.charAt(0).toUpperCase()+G.slice(1),openInNewTab:!0,rel:"nofollow"};e({icons:[..._,d]}),xe(),setTimeout(()=>{let ce=_.length;me(ce)},100)},ve=G=>{if(_.length>1){let pe=[..._];pe.splice(G,1),e({icons:pe})}},U=(G,pe,R)=>{let d=[..._];d[G]={...d[G],[pe]:R},e({icons:d})},me=G=>{oe({index:G,target:document.getElementById(`social-icon-${G}`)})},Te=()=>{oe(null)},qe=()=>{let G=le,pe=v[G]||24,R=M[G]||10,d=Z[G]||5,ce="";I&&I!=="none"&&(ce=`
                border-style: ${I};
                border-color: ${B||"#e0e0e0"};
				${nr(C,"border-width",G)}
				${nr(k,"border-radius",G)}
            `);let S="";D&&(D.fontFamily&&(S+=`font-family: ${D.fontFamily};`),D.fontSize&&D.fontSize[G]&&(S+=`font-size: ${D.fontSize[G]}${D.fontSizeUnit||"px"};`),D.fontWeight&&(S+=`font-weight: ${D.fontWeight};`),D.fontStyle&&(S+=`font-style: ${D.fontStyle};`),D.textTransform&&(S+=`text-transform: ${D.textTransform};`),D.textDecoration&&(S+=`text-decoration: ${D.textDecoration};`),D.lineHeight&&D.lineHeight[G]&&(S+=`line-height: ${D.lineHeight[G]}${D.lineHeightUnit||"em"};`),D.letterSpacing&&D.letterSpacing[G]&&(S+=`letter-spacing: ${D.letterSpacing[G]}${D.letterSpacingUnit||"px"};`));let g=ee&&ee[G]?`${nr(ee,"padding",G)}`:"",Q="";E&&E!=="none"&&Wl[E]&&(Q=Wl[E].keyframes);let c="";if(f&&b)switch(b){case"top":c=`
                        .${o} .digiblocks-social-icon {
                            flex-direction: column-reverse;
                        }
                    `;break;case"right":c=`
                        .${o} .digiblocks-social-icon {
                            flex-direction: row;
                        }
                    `;break;case"bottom":c=`
                        .${o} .digiblocks-social-icon {
                            flex-direction: column;
                        }
                    `;break;case"left":c=`
                        .${o} .digiblocks-social-icon {
                            flex-direction: row-reverse;
                        }
                    `;break}return`
            /* Social Icons Block - ${o} */
            .${o} {
                display: flex;
                align-items: center;
                flex-wrap: wrap;
                gap: ${R}px;
                justify-content: ${l[G]};
            }
            
            .${o} .digiblocks-social-wrapper {
                position: relative;
				display: flex;
            }
            
            .${o} .digiblocks-social-icon {
                display: flex;
                align-items: center;
                text-decoration: none;
                gap: ${d}px;
            }
            
            .${o} .digiblocks-social-icon-icon {
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: ${s||"transparent"};
                color: ${N||"#333333"};
                ${ce}
                ${g}
                transition: all 0.3s ease;
                cursor: pointer;
            }
            
            .${o} .digiblocks-social-icon-icon span {
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .${o} .digiblocks-social-icon-icon svg {
                width: ${pe}px;
                height: ${pe}px;
                fill: currentColor;
                transition: all 0.3s ease;
            }
            
            .${o} .digiblocks-social-icon:hover .digiblocks-social-icon-icon {
                background-color: ${$||s||"transparent"};
                ${O?`border-color: ${O};`:""}
                ${m?`color: ${m};`:""}
            }
            
            .${o} .digiblocks-social-icon-label {
                ${S}
                color: ${T||N||"#333333"};
                transition: color 0.3s ease;
            }
            
            .${o} .digiblocks-social-icon:hover .digiblocks-social-icon-label {
                color: ${V||m||T||N||"#333333"};
            }
            
            /* Editor-specific styles */
            .${o} .digiblocks-social-icon-remove {
                position: absolute;
                top: -18px;
                right: -10px;
                background-color: #fff;
                border-radius: 50%;
                padding: 2px;
                display: none;
                box-shadow: 0 1px 3px rgba(0,0,0,0.2);
                z-index: 10;
            }
            
            .${o} .digiblocks-social-wrapper:hover .digiblocks-social-icon-remove {
                display: block;
            }
            
            .${o} .digiblocks-social-icon.add-social {
                background-color: #f0f0f0;
                color: #333;
                border-radius: 50%;
                width: 30px;
                height: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
            }
            
            .${o} .digiblocks-social-icon.add-social svg {
                width: .6rem;
                height: .6rem;
                fill: currentColor;
            }
            
            ${c}
            ${Q}
            
            /* Responsive styles */
            @media (max-width: 991px) {
                .${o} {
                    gap: ${M.tablet||R}px;
                }
                
                .${o} .digiblocks-social-icon {
                    gap: ${Z.tablet||d}px;
                }
                
                .${o} .digiblocks-social-icon-icon svg {
                    width: ${v.tablet||pe}px;
                    height: ${v.tablet||pe}px;
                }
                
                ${D&&D.fontSize&&D.fontSize.tablet?`
                .${o} .digiblocks-social-icon-label {
                    font-size: ${D.fontSize.tablet}${D.fontSizeUnit||"px"};
                }
                `:""}
                
                .${o} .digiblocks-social-icon.add-social {
                    width: ${v.tablet||pe}px;
                    height: ${v.tablet||pe}px;
                }
            }
            
            @media (max-width: 767px) {
                .${o} {
                    gap: ${M.mobile||M.tablet||R}px;
                }
                
                .${o} .digiblocks-social-icon {
                    gap: ${Z.mobile||Z.tablet||d}px;
                }
                
                .${o} .digiblocks-social-icon-icon svg {
                    width: ${v.mobile||v.tablet||pe}px;
                    height: ${v.mobile||v.tablet||pe}px;
                }
                
                ${D&&D.fontSize&&D.fontSize.mobile?`
                .${o} .digiblocks-social-icon-label {
                    font-size: ${D.fontSize.mobile}${D.fontSizeUnit||"px"};
                }
                `:""}
                
                .${o} .digiblocks-social-icon.add-social {
                    width: ${v.mobile||v.tablet||pe}px;
                    height: ${v.mobile||v.tablet||pe}px;
                }
            }

			/* Visibility Controls */
			${n.desktop?`
				@media (min-width: 992px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${n.tablet?`
				@media (min-width: 768px) and (max-width: 991px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${n.mobile?`
				@media (max-width: 767px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}
        `},Ve=G=>G==="normal"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(ng,{title:io("Icon Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:N,onChange:pe=>e({iconColor:pe}),label:io("Icon Color","digiblocks")},{value:s,onChange:pe=>e({iconBackground:pe}),label:io("Background Color","digiblocks")},{value:B,onChange:pe=>e({iconBorderColor:pe}),label:io("Border Color","digiblocks")},...f?[{value:T,onChange:pe=>e({labelColor:pe}),label:io("Label Color","digiblocks")}]:[]]})):wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(ng,{title:io("Icon Hover Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:m,onChange:pe=>e({iconHoverColor:pe}),label:io("Icon Hover Color","digiblocks")},{value:$,onChange:pe=>e({iconHoverBackground:pe}),label:io("Hover Background","digiblocks")},{value:O,onChange:pe=>e({iconHoverBorderColor:pe}),label:io("Hover Border Color","digiblocks")},...f?[{value:V,onChange:pe=>e({labelHoverColor:pe}),label:io("Label Hover Color","digiblocks")}]:[]]})),Ee=()=>{if(!q)return null;let{target:G}=q,pe=_.map(d=>d.iconValue&&d.iconValue.network?d.iconValue.network:null).filter(Boolean),R=Y.filter(d=>!pe.includes(d.value));return R.length===0?(xe(),null):wp.element.createElement(sg,{anchor:G,onClose:xe,position:"bottom center",expandOnMobile:!0,className:"digiblocks-social-select-popover"},wp.element.createElement("div",{style:{padding:"12px",width:"280px",maxHeight:"400px",overflowY:"auto"}},wp.element.createElement("div",{style:{marginBottom:"10px",fontWeight:"bold"}},io("Select Social Network","digiblocks")),wp.element.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"8px"}},R.map(d=>wp.element.createElement(Aa,{key:d.value,variant:"secondary",onClick:()=>x(d.value),style:{display:"flex",alignItems:"center",justifyContent:"flex-start",padding:"8px",gap:"8px"}},wp.element.createElement("span",{style:{display:"inline-flex",alignItems:"center"}},ql[d.value]),wp.element.createElement("span",null,d.label))))))},Oe=()=>{if(!L)return null;let{index:G,target:pe}=L,R=_[G];return wp.element.createElement(sg,{anchor:pe,onClose:Te,position:"bottom center",expandOnMobile:!0,className:"digiblocks-social-url-popover"},wp.element.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",padding:"12px",minWidth:"280px"}},wp.element.createElement(tr,{label:io("Social Network","digiblocks"),value:R.iconValue?R.iconValue.network:"",options:Y,onChange:d=>{let ce=[..._];ce[G]={...ce[G],iconValue:{name:d.charAt(0).toUpperCase()+d.slice(1),network:d,svg:ql[d]?ql[d].props.children.props.d:""}},e({icons:ce})},__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(lr,{label:io("URL","digiblocks"),value:R.url||"",onChange:d=>U(G,"url",d),placeholder:R.iconValue&&R.iconValue.network==="email"?"mailto:example@domain.com":R.iconValue&&R.iconValue.network==="website"?"https://example.com":`https://${R.iconValue?R.iconValue.network:"example"}.com/username`,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(lr,{label:io("Label","digiblocks"),value:R.label||"",onChange:d=>U(G,"label",d),placeholder:R.iconValue?R.iconValue.name:io("Social Media","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(El,{label:io("Open in new tab","digiblocks"),checked:R.openInNewTab===void 0?!0:R.openInNewTab,onChange:d=>U(G,"openInNewTab",d),__nextHasNoMarginBottom:!0}),wp.element.createElement(lr,{label:io("Rel Attribute","digiblocks"),value:R.rel||"",onChange:d=>U(G,"rel",d),placeholder:io("e.g. nofollow","digiblocks"),help:io('Optional. Add rel attributes like "nofollow", "sponsored", etc.',"digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Aa,{variant:"primary",onClick:Te,style:{justifyContent:"center",width:"100%"}},io("Done","digiblocks"))))},j=()=>{switch(Se){case"options":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:"components-panel__body is-opened"},wp.element.createElement(Of,{label:io("Alignment","digiblocks"),value:l,onChange:G=>e({align:G}),options:[{label:io("Left","digiblocks"),value:"flex-start"},{label:io("Center","digiblocks"),value:"center"},{label:io("Right","digiblocks"),value:"flex-end"}]}),wp.element.createElement(El,{label:io("Show Labels","digiblocks"),checked:f,onChange:G=>e({showLabels:G}),__nextHasNoMarginBottom:!0}),f&&wp.element.createElement(Rf,{label:io("Label Position","digiblocks"),value:b,onChange:G=>e({labelPosition:G}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(en,{value:"bottom",label:io("Bottom","digiblocks")}),wp.element.createElement(en,{value:"right",label:io("Right","digiblocks")}),wp.element.createElement(en,{value:"left",label:io("Left","digiblocks")}),wp.element.createElement(en,{value:"top",label:io("Top","digiblocks")}))));case"style":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Ki,{tab:"style",name:"colors",title:io("Colors","digiblocks"),initialOpen:!0},wp.element.createElement(Pf,{className:"digiblocks-control-tabs",activeClass:"active-tab",tabs:He},G=>Ve(G.name))),wp.element.createElement(Ki,{tab:"style",name:"size-shape",title:io("Size & Shape","digiblocks"),initialOpen:!1},wp.element.createElement(Zi,{label:io("Icon Size","digiblocks")},wp.element.createElement(ir,{value:v[le],onChange:G=>e({iconSize:{...v,[le]:G}}),min:0,max:100,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(Zi,{label:io("Icon Spacing","digiblocks")},wp.element.createElement(ir,{value:M[le],onChange:G=>e({iconSpacing:{...M,[le]:G}}),min:0,max:100,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),f&&wp.element.createElement(Zi,{label:io("Label Spacing","digiblocks")},wp.element.createElement(ir,{value:Z[le],onChange:G=>e({labelSpacing:{...Z,[le]:G}}),min:0,max:100,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(tr,{label:io("Border Style","digiblocks"),value:I||"none",options:se,onChange:G=>{G!=="none"&&(!C||Object.keys(C).length===0)&&e({iconBorderWidth:{desktop:{value:1,unit:"px"},tablet:{value:1,unit:"px"},mobile:{value:1,unit:"px"}}}),G!=="none"&&(!k||Object.keys(k).length===0)&&e({iconBorderRadius:{desktop:{value:0,unit:"px"},tablet:{value:0,unit:"px"},mobile:{value:0,unit:"px"}}}),e({iconBorderStyle:G})},__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),I&&I!=="none"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Zi,{label:io("Border Width","digiblocks")},wp.element.createElement(rr,{values:C[le],onChange:G=>e({iconBorderWidth:{...C,[le]:G}})})),wp.element.createElement(Zi,{label:io("Border Radius","digiblocks")},wp.element.createElement(rr,{values:k[le],onChange:G=>e({iconBorderRadius:{...k,[le]:G}})}))),wp.element.createElement(Zi,{label:io("Padding","digiblocks")},wp.element.createElement(rr,{values:ee[le],onChange:G=>e({padding:{...ee,[le]:G}})}))),f&&wp.element.createElement(Ki,{tab:"style",name:"typography",title:io("Typography","digiblocks"),initialOpen:!1},wp.element.createElement(Uf,{label:io("Label Typography","digiblocks"),value:D,onChange:G=>e({textTypography:G}),defaults:{fontSize:{desktop:14,tablet:13,mobile:12},fontSizeUnit:"px",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em"}})));case"advanced":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Ki,{tab:"advanced",name:"animation",title:io("Animation","digiblocks"),initialOpen:!0},wp.element.createElement(tr,{label:io("Animation Effect","digiblocks"),value:E,options:Ce,onChange:G=>e({animation:G}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),E&&E!=="none"&&wp.element.createElement("div",{style:{marginTop:"10px"}},wp.element.createElement(Aa,{variant:"secondary",isSecondary:!0,onClick:re,style:{width:"100%"}},io("Preview Animation","digiblocks")))),wp.element.createElement(Ki,{tab:"advanced",name:"visibility",title:io("Visibility","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control__help",style:{padding:"12px",backgroundColor:"#f0f6fc",border:"1px solid #c3ddfd",borderRadius:"4px",marginBottom:"16px"}},wp.element.createElement("strong",null,io("Editor Note:","digiblocks")),wp.element.createElement("br",null),io("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.","digiblocks")),wp.element.createElement(El,{label:io("Hide on Desktop","digiblocks"),checked:n.desktop,onChange:G=>e({visibility:{...n,desktop:G}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(El,{label:io("Hide on Tablet","digiblocks"),checked:n.tablet,onChange:G=>e({visibility:{...n,tablet:G}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(El,{label:io("Hide on Mobile","digiblocks"),checked:n.mobile,onChange:G=>e({visibility:{...n,mobile:G}}),__nextHasNoMarginBottom:!0})),wp.element.createElement(Ki,{tab:"advanced",name:"additional",title:io("Additional","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control html-anchor-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"html-anchor"},io("HTML anchor","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"html-anchor",value:P||"",onChange:G=>e({anchor:G.target.value}),"aria-describedby":"html-anchor-help",autoCapitalize:"none",autoComplete:"off"})),wp.element.createElement("p",{id:"html-anchor-help",className:"components-base-control__help"},io(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`,"digiblocks")," ",wp.element.createElement("a",{className:"components-external-link",href:"https://wordpress.org/documentation/article/page-jumps/",target:"_blank",rel:"external noreferrer noopener"},wp.element.createElement("span",{className:"components-external-link__contents"},io("Learn more about anchors","digiblocks")),wp.element.createElement("span",{className:"components-external-link__icon","aria-label":"(opens in a new tab)"},"\u2197")))),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"additional-css-classes"},io("Additional CSS class(es)","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"additional-css-classes",value:te||"",onChange:G=>e({customClasses:G.target.value}),"aria-describedby":"additional-css-classes-help",autoComplete:"off"})),wp.element.createElement("p",{id:"additional-css-classes-help",className:"components-base-control__help"},io("Separate multiple classes with spaces.","digiblocks")))));default:return null}},ye=Mf({className:`digiblocks-social-icons ${o} ${te||""}`,id:P||null}),Je=()=>{let G=_.map((pe,R)=>wp.element.createElement("div",{key:pe.id||R,className:"digiblocks-social-wrapper",id:`social-icon-${R}`},wp.element.createElement("div",{className:"digiblocks-social-icon",onClick:()=>{me(R)}},wp.element.createElement("div",{className:"digiblocks-social-icon-icon"},pe.iconValue&&pe.iconValue.network?wp.element.createElement("span",{dangerouslySetInnerHTML:{__html:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="${pe.iconValue.network==="facebook"?"0 0 320 512":pe.iconValue.network==="twitter"?"0 0 512 512":pe.iconValue.network==="linkedin"||pe.iconValue.network==="instagram"?"0 0 448 512":pe.iconValue.network==="pinterest"?"0 0 384 512":pe.iconValue.network==="youtube"?"0 0 576 512":pe.iconValue.network==="dribbble"?"0 0 512 512":pe.iconValue.network==="github"?"0 0 496 512":pe.iconValue.network==="behance"?"0 0 576 512":pe.iconValue.network==="vimeo"||pe.iconValue.network==="tiktok"?"0 0 448 512":pe.iconValue.network==="email"?"0 0 512 512":"0 0 640 512"}" fill="currentColor"><path d="${pe.iconValue.svg}"/></svg>`}}):wp.element.createElement("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#f0f0f0",borderRadius:"50%",fontSize:"20px",color:"#555"}},"?")),f&&pe.label&&wp.element.createElement("span",{className:"digiblocks-social-icon-label"},pe.label)),_.length>1&&wp.element.createElement(Aa,{className:"digiblocks-social-icon-remove",onClick:()=>ve(R),icon:"no-alt",isSmall:!0,label:io("Remove","digiblocks")})));return G.push(wp.element.createElement("div",{key:"add-social-icon",className:"digiblocks-social-icon add-social",onClick:be,title:io("Add Social Icon","digiblocks")},Vf)),G};return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Df,null,wp.element.createElement(jf,{tabs:de,activeTab:Se,onSelect:K},j())),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:qe()}}),wp.element.createElement("div",{...ye},Je(),Ee(),Oe()))},cg=Ff;var{useBlockProps:Ef}=window.wp.blockEditor,Wf=({attributes:ie})=>{let{id:e,anchor:X,customClasses:o,icons:P,align:n,animation:te,showLabels:l,labelPosition:_}=ie,v=["digiblocks-social-icons",e,`align-${n}`,te!=="none"?`animate-${te}`:"",o||""].filter(Boolean).join(" "),M=Ef.save({className:v,id:X||null}),N=()=>P.map((m,s)=>{if(!m.iconValue||!m.iconValue.network||!m.url)return null;let $=m.openInNewTab?"noopener noreferrer":"";return m.rel&&($=$?`${$} ${m.rel}`:m.rel),wp.element.createElement("a",{key:m.id||s,href:m.url,className:"digiblocks-social-icon",target:m.openInNewTab?"_blank":"_self",rel:$||void 0,"aria-label":m.label||m.iconValue.name||"Social icon"},wp.element.createElement("div",{className:"digiblocks-social-icon-icon"},wp.element.createElement("span",{dangerouslySetInnerHTML:{__html:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="${m.iconValue.network==="facebook"?"0 0 320 512":m.iconValue.network==="twitter"?"0 0 512 512":m.iconValue.network==="linkedin"||m.iconValue.network==="instagram"?"0 0 448 512":m.iconValue.network==="pinterest"?"0 0 384 512":m.iconValue.network==="youtube"?"0 0 576 512":m.iconValue.network==="dribbble"?"0 0 512 512":m.iconValue.network==="github"?"0 0 496 512":m.iconValue.network==="behance"?"0 0 576 512":m.iconValue.network==="vimeo"||m.iconValue.network==="tiktok"?"0 0 448 512":m.iconValue.network==="email"?"0 0 512 512":"0 0 640 512"}" fill="currentColor"><path d="${m.iconValue.network==="facebook"?"M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z":m.iconValue.network==="twitter"?"M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z":m.iconValue.network==="linkedin"?"M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z":m.iconValue.network==="instagram"?"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z":m.iconValue.network==="pinterest"?"M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z":m.iconValue.network==="youtube"?"M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z":m.iconValue.network==="dribbble"?"M86.6 64l85.2 85.2C194.5 121.7 208 86.4 208 48c0-14.7-2-28.9-5.7-42.4C158.6 15 119 35.5 86.6 64zM64 86.6C35.5 119 15 158.6 5.6 202.3C19.1 206 33.3 208 48 208c38.4 0 73.7-13.5 101.3-36.1L64 86.6zM256 0c-7.3 0-14.6 .3-21.8 .9C238 16 240 31.8 240 48c0 47.3-17.1 90.5-45.4 124L256 233.4 425.4 64C380.2 24.2 320.9 0 256 0zM48 240c-16.2 0-32-2-47.1-5.8C.3 241.4 0 248.7 0 256c0 64.9 24.2 124.2 64 169.4L233.4 256 172 194.6C138.5 222.9 95.3 240 48 240zm463.1 37.8c.6-7.2 .9-14.5 .9-21.8c0-64.9-24.2-124.2-64-169.4L278.6 256 340 317.4c33.4-28.3 76.7-45.4 124-45.4c16.2 0 32 2 47.1 5.8zm-4.7 31.9C492.9 306 478.7 304 464 304c-38.4 0-73.7 13.5-101.3 36.1L448 425.4c28.5-32.3 49.1-71.9 58.4-115.7zM340.1 362.7C317.5 390.3 304 425.6 304 464c0 14.7 2 28.9 5.7 42.4C353.4 497 393 476.5 425.4 448l-85.2-85.2zM317.4 340L256 278.6 86.6 448c45.1 39.8 104.4 64 169.4 64c7.3 0 14.6-.3 21.8-.9C274 496 272 480.2 272 464c0-47.3 17.1-90.5 45.4-124z":m.iconValue.network==="github"?"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z":m.iconValue.network==="behance"?"M232 237.2c31.8-15.2 48.4-38.2 48.4-74 0-70.6-52.6-87.8-113.3-87.8H0v354.4h171.8c64.4 0 124.9-30.9 124.9-102.9 0-44.5-21.1-77.4-64.7-89.7zM77.9 135.9H151c28.1 0 53.4 7.9 53.4 40.5 0 30.1-19.7 42.2-47.5 42.2h-79v-82.7zm83.3 233.7H77.9V272h84.9c34.3 0 56 14.3 56 50.6 0 35.8-25.9 47-57.6 47zm358.5-240.7H376V94h143.7v34.9zM576 305.2c0-75.9-44.4-139.2-124.9-139.2-78.2 0-131.3 58.8-131.3 135.8 0 79.9 50.3 134.7 131.3 134.7 61.3 0 101-27.6 120.1-86.3H509c-6.7 21.9-34.3 33.5-55.7 33.5-41.3 0-63-24.2-63-65.3h185.1c.3-4.2 .6-8.7 .6-13.2zM390.4 274c2.3-33.7 24.7-54.8 58.5-54.8 35.4 0 53.2 20.8 56.2 54.8H390.4z":m.iconValue.network==="vimeo"?"M447.8 153.6c-2 43.6-32.4 103.3-91.4 179.1-60.9 79.2-112.4 118.8-154.6 118.8-26.1 0-48.2-24.1-66.3-72.3C100.3 250 85.3 174.3 56.2 174.3c-3.4 0-15.1 7.1-35.2 21.1L0 168.2c51.6-45.3 100.9-95.7 131.8-98.5 34.9-3.4 56.3 20.5 64.4 71.5 28.7 181.5 41.4 208.9 93.6 126.7 18.7-29.6 28.8-52.1 30.2-67.6 4.8-45.9-35.8-42.8-63.3-31 22-72.1 64.1-107.1 126.2-105.1 45.8 1.2 67.5 31.1 64.9 89.4z":m.iconValue.network==="tiktok"?"M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z":m.iconValue.network==="email"?"M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z":"M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"}"/></svg>`}})),l&&m.label&&wp.element.createElement("span",{className:"digiblocks-social-icon-label"},m.label))}).filter(Boolean);return wp.element.createElement("div",{...M},N())},dg=Wf;var{__:tn}=window.wp.i18n,{registerBlockType:qf}=window.wp.blocks,{getBlockActiveStatus:Gf}=window.wp.digiBlocks;qf("digiblocks/social-icons",{apiVersion:2,title:digiBlocksData.blocks["social-icons"].title,category:"digiblocks",icon:{src:()=>{let{viewbox:ie,path:e}=digiBlocksData.blocks["social-icons"].icon;return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${ie}`,className:"digiblocks-editor-icons"},wp.element.createElement("path",{d:e}))}},description:digiBlocksData.blocks["social-icons"].description,keywords:[tn("social","digiblocks"),tn("icons","digiblocks"),tn("networks","digiblocks"),tn("media","digiblocks")],supports:{inserter:!!Gf("social-icons"),html:!1,className:!1,customClassName:!1,anchor:!1},attributes:{id:{type:"string",default:""},anchor:{type:"string",default:""},visibility:{type:"object",default:{desktop:!1,tablet:!1,mobile:!1}},customClasses:{type:"string",default:""},align:{type:"object",default:{desktop:"flex-start",tablet:"",mobile:""}},icons:{type:"array",default:[{id:"social-icon-1",iconValue:{name:"Facebook",network:"facebook",svg:"M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"},url:"https://facebook.com",label:"Facebook",openInNewTab:!0,rel:"nofollow"},{id:"social-icon-2",iconValue:{name:"Twitter",network:"twitter",svg:"M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"},url:"https://twitter.com",label:"Twitter",openInNewTab:!0,rel:"nofollow"},{id:"social-icon-3",iconValue:{name:"Instagram",network:"instagram",svg:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},url:"https://instagram.com",label:"Instagram",openInNewTab:!0,rel:"nofollow"}]},iconSize:{type:"object",default:{desktop:24,tablet:22,mobile:20}},iconSpacing:{type:"object",default:{desktop:10,tablet:8,mobile:6}},labelSpacing:{type:"object",default:{desktop:5,tablet:5,mobile:5}},iconColor:{type:"string",default:"#333333"},iconHoverColor:{type:"string",default:""},labelColor:{type:"string",default:""},labelHoverColor:{type:"string",default:""},iconBackground:{type:"string",default:"transparent"},iconHoverBackground:{type:"string",default:""},iconBorderStyle:{type:"string",default:"none"},iconBorderWidth:{type:"object",default:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},iconBorderRadius:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},iconBorderColor:{type:"string",default:"#e0e0e0"},iconHoverBorderColor:{type:"string",default:""},padding:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},animation:{type:"string",default:"none"},showLabels:{type:"boolean",default:!1},labelPosition:{type:"string",default:"bottom"},textTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:14,tablet:13,mobile:12},fontSizeUnit:"px",fontWeight:"",fontStyle:"normal",textTransform:"",textDecoration:"",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}}},example:{attributes:{icons:[{id:"example-icon-1",iconValue:{name:"Facebook",network:"facebook",svg:"M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"},url:"https://facebook.com",label:"Facebook",openInNewTab:!0,rel:"nofollow"},{id:"example-icon-2",iconValue:{name:"Twitter",network:"twitter",svg:"M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"},url:"https://twitter.com",label:"Twitter",openInNewTab:!0,rel:"nofollow"},{id:"example-icon-3",iconValue:{name:"Instagram",network:"instagram",svg:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},url:"https://instagram.com",label:"Instagram",openInNewTab:!0,rel:"nofollow"}],iconSpacing:{desktop:20},align:"center",iconColor:"#1e73be",labelColor:"#09053a",iconBackground:"transparent",showLabels:!0,labelPosition:"right"}},edit:cg,save:dg});var{__:To}=window.wp.i18n,{useBlockProps:Qf,InspectorControls:Jf}=window.wp.blockEditor,{ToggleControl:cr,RangeControl:Yf}=window.wp.components,{useState:gg,useEffect:Zf}=window.wp.element,{useBlockId:Kf}=digi.utils,{tabIcons:pg}=digi.icons,{ResponsiveControl:Xf,CustomTabPanel:Af}=digi.components,ek=({attributes:ie,setAttributes:e,clientId:X})=>{let{id:o,anchor:P,visibility:n,customClasses:te,height:l}=ie;Kf(o,X,e);let[_,v]=gg(window.digi.responsiveState.activeDevice);Zf(()=>window.digi.responsiveState.subscribe(k=>{v(k)}),[]);let[M,N]=gg(()=>{if(window.digi.uiState){let C=window.digi.uiState.getActiveTab(X);if(C)return C}return"options"}),m=[{name:"options",title:To("Options","digiblocks"),icon:pg.optionsIcon},{name:"advanced",title:To("Advanced","digiblocks"),icon:pg.advancedIcon}],s=()=>{let C=window.digi.responsiveState.activeDevice,k=l[C]||(C==="tablet"?60:C==="mobile"?40:80);return`
            /* Spacer Block Styles */
            .${o} {
                height: ${k}px;
                position: relative;
            }
            
            /* Editor-only styles */
            .editor-styles-wrapper .${o} .digiblocks-spacer-icon-wrapper {
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: #e4e4e4;
                height: 100%;
                border-radius: 4px;
                pointer-events: none;
            }
            
            .editor-styles-wrapper .${o} .digiblocks-spacer-icon-wrapper svg {
                width: 1em;
				min-width: 1.5rem;
                height: 100%;
                fill: #949494;
            }

			/* Visibility Controls */
			${n.desktop?`
				@media (min-width: 992px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${n.tablet?`
				@media (min-width: 768px) and (max-width: 991px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${n.mobile?`
				@media (max-width: 767px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}
        `},$=()=>{switch(M){case"options":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:"components-panel__body is-opened"},wp.element.createElement(Xf,{label:To("Height","digiblocks")},wp.element.createElement(Yf,{value:l[_],onChange:C=>e({height:{...l,[_]:C}}),min:1,max:500,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}))));case"advanced":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(TabPanelBody,{tab:"advanced",name:"visibility",title:To("Visibility","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control__help",style:{padding:"12px",backgroundColor:"#f0f6fc",border:"1px solid #c3ddfd",borderRadius:"4px",marginBottom:"16px"}},wp.element.createElement("strong",null,To("Editor Note:","digiblocks")),wp.element.createElement("br",null),To("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.","digiblocks")),wp.element.createElement(cr,{label:To("Hide on Desktop","digiblocks"),checked:n.desktop,onChange:C=>e({visibility:{...n,desktop:C}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(cr,{label:To("Hide on Tablet","digiblocks"),checked:n.tablet,onChange:C=>e({visibility:{...n,tablet:C}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(cr,{label:To("Hide on Mobile","digiblocks"),checked:n.mobile,onChange:C=>e({visibility:{...n,mobile:C}}),__nextHasNoMarginBottom:!0})),wp.element.createElement("div",{className:"components-panel__body is-opened"},wp.element.createElement("div",{className:"components-base-control html-anchor-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"html-anchor"},To("HTML anchor","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"html-anchor",value:P||"",onChange:C=>e({anchor:C.target.value}),"aria-describedby":"html-anchor-help",autoCapitalize:"none",autoComplete:"off"})),wp.element.createElement("p",{id:"html-anchor-help",className:"components-base-control__help"},To(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`,"digiblocks")," ",wp.element.createElement("a",{className:"components-external-link",href:"https://wordpress.org/documentation/article/page-jumps/",target:"_blank",rel:"external noreferrer noopener"},wp.element.createElement("span",{className:"components-external-link__contents"},To("Learn more about anchors","digiblocks")),wp.element.createElement("span",{className:"components-external-link__icon","aria-label":"(opens in a new tab)"},"\u2197")))),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"additional-css-classes"},To("Additional CSS class(es)","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"additional-css-classes",value:te||"",onChange:C=>e({customClasses:C.target.value}),"aria-describedby":"additional-css-classes-help",autoComplete:"off"})),wp.element.createElement("p",{id:"additional-css-classes-help",className:"components-base-control__help"},To("Separate multiple classes with spaces.","digiblocks")))));default:return null}},I=Qf({className:`digiblocks-spacer ${o} ${te||""}`,id:P||null});return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Jf,null,wp.element.createElement(Af,{tabs:m,activeTab:M,onSelect:C=>{requestAnimationFrame(()=>{N(C)})}},$())),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:s()}}),wp.element.createElement("div",{...I},wp.element.createElement("div",{className:"digiblocks-spacer-icon-wrapper"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},wp.element.createElement("path",{d:"M512 464c0-8.8-7.2-16-16-16L16 448c-8.8 0-16 7.2-16 16s7.2 16 16 16l480 0c8.8 0 16-7.2 16-16zM144 320c-8.8 0-16-7.2-16-16l0-96c0-8.8 7.2-16 16-16l224 0c8.8 0 16 7.2 16 16l0 96c0 8.8-7.2 16-16 16l-224 0zm224 32c26.5 0 48-21.5 48-48l0-96c0-26.5-21.5-48-48-48l-224 0c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48l224 0zM496 64c8.8 0 16-7.2 16-16s-7.2-16-16-16L16 32C7.2 32 0 39.2 0 48s7.2 16 16 16l480 0z"})))))},bg=ek;var{useBlockProps:ok}=window.wp.blockEditor,tk=({attributes:ie})=>{let{id:e,anchor:X,customClasses:o,height:P}=ie,n=["digiblocks-spacer",e,o||""].filter(Boolean).join(" "),te=ok.save({className:n,id:X||null});return wp.element.createElement("div",{...te})},ug=tk;var{__:dr}=window.wp.i18n,{registerBlockType:ik}=window.wp.blocks,{getBlockActiveStatus:lk}=window.wp.digiBlocks;ik("digiblocks/spacer",{apiVersion:2,title:digiBlocksData.blocks.spacer.title,category:"digiblocks",icon:{src:()=>{let{viewbox:ie,path:e}=digiBlocksData.blocks.spacer.icon;return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${ie}`,className:"digiblocks-editor-icons"},wp.element.createElement("path",{d:e}))}},description:digiBlocksData.blocks.spacer.description,keywords:[dr("spacer","digiblocks"),dr("gap","digiblocks"),dr("spacing","digiblocks")],supports:{inserter:!!lk("spacer"),html:!1,className:!1,customClassName:!1,anchor:!1},attributes:{id:{type:"string",default:""},anchor:{type:"string",default:""},visibility:{type:"object",default:{desktop:!1,tablet:!1,mobile:!1}},customClasses:{type:"string",default:""},height:{type:"object",default:{desktop:80,tablet:60,mobile:40}}},example:{attributes:{height:{desktop:80}}},edit:bg,save:ug});var{__:Me}=window.wp.i18n,{useBlockProps:ak,RichText:gr,InspectorControls:nk,PanelColorSettings:ln,BlockControls:sk}=window.wp.blockEditor,{SelectControl:an,RangeControl:rk,ToggleControl:Xi,Button:pi,ToolbarGroup:mg,ToolbarButton:Ai,BaseControl:nn,Popover:ck,__experimentalToggleGroupControl:Gl,__experimentalToggleGroupControlOption:Fo}=window.wp.components,{useState:Ql,useEffect:pr,useRef:dk}=window.wp.element,{useBlockId:gk,getDimensionCSS:br,animations:Jl,animationPreview:hg}=digi.utils,{tabIcons:ur}=digi.icons,{ResponsiveControl:mr,DimensionControl:hr,TypographyControl:fr,BoxShadowControl:pk,CustomTabPanel:bk,TabPanelBody:et}=digi.components,uk=({attributes:ie,setAttributes:e,clientId:X})=>{let{id:o,anchor:P,visibility:n,customClasses:te,tableData:l,hasHeader:_,hasFooter:v,tableBorderColor:M,tableBorderWidth:N,tableBorderStyle:m,cellPadding:s,tableBorderCollapse:$,headerBackgroundColor:I,headerTextColor:C,headingTypography:k,bodyBackgroundColor:B,altRowBackgroundColor:O,bodyTextColor:T,textTypography:V,footerBackgroundColor:Z,footerTextColor:ee,contentTypography:E,borderRadius:f,boxShadow:b,boxShadowHover:D,margin:le,cellAlignment:We,headerAlignment:Se,footerAlignment:K,tablePreset:L,responsiveMode:oe,animation:q,firstColHeader:J,cellControls:A}=ie;gk(o,X,e);let[re,se]=Ql(window.digi.responsiveState.activeDevice),[Ce,Y]=Ql(!1),[de,He]=Ql(()=>{if(window.digi.uiState){let u=window.digi.uiState.getActiveTab(X);if(u)return u}return"options"}),[be,H]=Ql({row:-1,col:-1}),[xe,x]=Ql(!1);pr(()=>window.digi.responsiveState.subscribe(Ne=>{se(Ne)}),[]),pr(()=>{(!l||l.length===0)&&e({tableData:[["Header 1","Header 2","Header 3"],["Row 1, Cell 1","Row 1, Cell 2","Row 1, Cell 3"],["Row 2, Cell 1","Row 2, Cell 2","Row 2, Cell 3"]]}),A||e({cellControls:{}})},[l,A,e]);let ve=dk(null);pr(()=>{if(q&&q!=="none"){let u=setTimeout(()=>{hg(o,q,Jl,ve)},100);return()=>clearTimeout(u)}},[q]);let U=()=>{hg(o,q,Jl,ve)},me=[{label:Me("Solid","digiblocks"),value:"solid"},{label:Me("Dotted","digiblocks"),value:"dotted"},{label:Me("Dashed","digiblocks"),value:"dashed"},{label:Me("Double","digiblocks"),value:"double"},{label:Me("None","digiblocks"),value:"none"}],Te=[{label:Me("Default","digiblocks"),value:"default"},{label:Me("Striped","digiblocks"),value:"striped"},{label:Me("Bordered","digiblocks"),value:"bordered"},{label:Me("Borderless","digiblocks"),value:"borderless"},{label:Me("Modern","digiblocks"),value:"modern"},{label:Me("Minimal","digiblocks"),value:"minimal"}],qe=[{label:Me("None","digiblocks"),value:"none"},...Object.keys(Jl).map(u=>({label:u.replace(/-/g," ").replace(/\b\w/g,Ne=>Ne.toUpperCase()),value:u}))],Ve=[{name:"options",title:Me("Options","digiblocks"),icon:ur.optionsIcon},{name:"style",title:Me("Style","digiblocks"),icon:ur.styleIcon},{name:"advanced",title:Me("Advanced","digiblocks"),icon:ur.advancedIcon}],Ee=u=>{if(!l||l.length===0)return;let Ne=[...l],a=Ne[0].length,ue=Array(a).fill("");Ne.splice(u+1,0,ue),e({tableData:Ne})},Oe=u=>{if(!l||l.length<=1)return;let Ne=[...l];Ne.splice(u,1),e({tableData:Ne})},j=u=>{if(!l||l.length===0)return;let Ne=l.map(a=>{let ue=[...a];return ue.splice(u+1,0,""),ue});e({tableData:Ne})},ye=u=>{if(!l||l[0].length<=1)return;let Ne=l.map(a=>{let ue=[...a];return ue.splice(u,1),ue});e({tableData:Ne})},Je=(u,Ne,a)=>{let ue=[...l];ue[Ne][a]=u,e({tableData:ue})},G=(u,Ne)=>{H({row:u,col:Ne})},pe=(u,Ne,a)=>{if(!A)return null;let ue=`${u}-${Ne}`;return A[ue]&&A[ue][a]?A[ue][a]:null},R=(u,Ne,a,ue)=>{let Fe=`${u}-${Ne}`,eo={...A||{}};eo[Fe]||(eo[Fe]={}),eo[Fe][a]=ue,e({cellControls:eo})},d=(u,Ne,a)=>{if(!A)return;let ue=`${u}-${Ne}`,Fe={...A};Fe[ue]&&Fe[ue][a]&&(delete Fe[ue][a],Object.keys(Fe[ue]).length===0&&delete Fe[ue],e({cellControls:Fe}))},ce=u=>{let Ne={};switch(u){case"striped":Ne={tablePreset:u,tableBorderStyle:"solid",tableBorderWidth:1,tableBorderColor:"#dee2e6",tableBorderCollapse:"collapse",headerBackgroundColor:"#f8f9fa",headerTextColor:"#212529",bodyBackgroundColor:"#ffffff",altRowBackgroundColor:"#f2f2f2",bodyTextColor:"#212529"};break;case"bordered":Ne={tablePreset:u,tableBorderStyle:"solid",tableBorderWidth:2,tableBorderColor:"#dee2e6",tableBorderCollapse:"collapse",headerBackgroundColor:"#f8f9fa",headerTextColor:"#212529",bodyBackgroundColor:"#ffffff",altRowBackgroundColor:"",bodyTextColor:"#212529"};break;case"borderless":Ne={tablePreset:u,tableBorderStyle:"none",tableBorderWidth:0,tableBorderColor:"transparent",tableBorderCollapse:"collapse",headerBackgroundColor:"transparent",headerTextColor:"#212529",bodyBackgroundColor:"transparent",altRowBackgroundColor:"",bodyTextColor:"#212529"};break;case"modern":Ne={tablePreset:u,tableBorderStyle:"solid",tableBorderWidth:1,tableBorderColor:"#e0e0e0",tableBorderCollapse:"separate",headerBackgroundColor:"#4a6cf7",headerTextColor:"#ffffff",bodyBackgroundColor:"#ffffff",altRowBackgroundColor:"#f8f9fa",bodyTextColor:"#212529",boxShadow:{enable:!0,color:"rgba(0, 0, 0, 0.1)",horizontal:0,vertical:4,blur:15,spread:0,position:"outset"},borderRadius:{desktop:{top:8,right:8,bottom:8,left:8,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}};break;case"minimal":Ne={tablePreset:u,tableBorderStyle:"solid",tableBorderWidth:1,tableBorderColor:"#e0e0e0",tableBorderCollapse:"collapse",headerBackgroundColor:"#ffffff",headerTextColor:"#212529",bodyBackgroundColor:"#ffffff",altRowBackgroundColor:"",bodyTextColor:"#212529",boxShadow:{enable:!1,color:"rgba(0, 0, 0, 0.1)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"},borderRadius:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}};break;default:Ne={tablePreset:"default",tableBorderStyle:"solid",tableBorderWidth:1,tableBorderColor:"#e0e0e0",tableBorderCollapse:"collapse",headerBackgroundColor:"#f8f9fa",headerTextColor:"#333333",bodyBackgroundColor:"#ffffff",altRowBackgroundColor:"",bodyTextColor:"#666666",boxShadow:{enable:!1,color:"rgba(0, 0, 0, 0.1)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"},borderRadius:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}}}e(Ne)},S=()=>{let u=window.digi.responsiveState.activeDevice;if(!o)return"";let Ne=r=>{switch(r){case"left":return"flex-start";case"center":return"center";case"right":return"flex-end";default:return"flex-start"}},a="";m!=="none"?a=`
                border-style: ${m};
                border-width: ${N}px;
                border-color: ${M};
            `:a="border: none;";let ue="box-shadow: none;";b&&b.enable&&(ue=`box-shadow: ${b.position==="inset"?"inset ":""}${b.horizontal}px ${b.vertical}px ${b.blur}px ${b.spread}px ${b.color};`);let Fe="";D&&D.enable&&(Fe=`box-shadow: ${D.position==="inset"?"inset ":""}${D.horizontal}px ${D.vertical}px ${D.blur}px ${D.spread}px ${D.color};`);let eo=`${br(f,"border-radius",u)}`,ao=`${br(s,"padding",u)}`,go=`${br(le,"margin",u)}`,t="";k&&(k.fontFamily&&(t+=`font-family: ${k.fontFamily};`),k.fontSize&&k.fontSize[u]&&(t+=`font-size: ${k.fontSize[u]}${k.fontSizeUnit||"px"};`),k.fontWeight&&(t+=`font-weight: ${k.fontWeight};`),k.fontStyle&&(t+=`font-style: ${k.fontStyle};`),k.textTransform&&(t+=`text-transform: ${k.textTransform};`),k.textDecoration&&(t+=`text-decoration: ${k.textDecoration};`),k.lineHeight&&k.lineHeight[u]&&(t+=`line-height: ${k.lineHeight[u]}${k.lineHeightUnit||"em"};`),k.letterSpacing&&k.letterSpacing[u]&&(t+=`letter-spacing: ${k.letterSpacing[u]}${k.letterSpacingUnit||"px"};`));let p="";V&&(V.fontFamily&&(p+=`font-family: ${V.fontFamily};`),V.fontSize&&V.fontSize[u]&&(p+=`font-size: ${V.fontSize[u]}${V.fontSizeUnit||"px"};`),V.fontWeight&&(p+=`font-weight: ${V.fontWeight};`),V.fontStyle&&(p+=`font-style: ${V.fontStyle};`),V.textTransform&&(p+=`text-transform: ${V.textTransform};`),V.textDecoration&&(p+=`text-decoration: ${V.textDecoration};`),V.lineHeight&&V.lineHeight[u]&&(p+=`line-height: ${V.lineHeight[u]}${V.lineHeightUnit||"em"};`),V.letterSpacing&&V.letterSpacing[u]&&(p+=`letter-spacing: ${V.letterSpacing[u]}${V.letterSpacingUnit||"px"};`));let De="";return E&&(E.fontFamily&&(De+=`font-family: ${E.fontFamily};`),E.fontSize&&E.fontSize[u]&&(De+=`font-size: ${E.fontSize[u]}${E.fontSizeUnit||"px"};`),E.fontWeight&&(De+=`font-weight: ${E.fontWeight};`),E.fontStyle&&(De+=`font-style: ${E.fontStyle};`),E.textTransform&&(De+=`text-transform: ${E.textTransform};`),E.textDecoration&&(De+=`text-decoration: ${E.textDecoration};`),E.lineHeight&&E.lineHeight[u]&&(De+=`line-height: ${E.lineHeight[u]}${E.lineHeightUnit||"em"};`),E.letterSpacing&&E.letterSpacing[u]&&(De+=`letter-spacing: ${E.letterSpacing[u]}${E.letterSpacingUnit||"px"};`)),`
            /* Table Block - ${o} */
            .${o} {
                ${go}
                ${ue}
                ${eo}
                width: 100%;
                transition: all 0.3s ease;
            }

			/* Hover effects */
            ${D&&D.enable?`
                .${o}:hover {
                    ${Fe}
                }
            `:""}
            
            /* Set up main table styles */
            .${o} .digiblocks-table {
                width: 100%;
                border-collapse: ${$};
                border-spacing: 0;
                color: ${T};
                ${p}
                ${a}
                ${eo}
            }
            
            /* Table header styles */
            .${o} .digiblocks-table thead th {
                background-color: ${I};
                color: ${C};
                ${t}
                ${ao}
                vertical-align: middle;
                border: ${N}px ${m} ${M};
            }

            .${o} .digiblocks-table thead th .digiblocks-cell-content {
                justify-content: ${Ne(Se)};
            }
            
            /* Table body styles */
            .${o} .digiblocks-table tbody td {
                background-color: ${B};
                ${ao}
                vertical-align: middle;
                border: ${N}px ${m} ${M};
            }

            .${o} .digiblocks-table tbody td .digiblocks-cell-content {
                justify-content: ${Ne(We)};
            }
            
            /* First column styles if it's a header */
            ${J?`
            .${o} .digiblocks-table tbody td:first-child {
                background-color: ${I};
                color: ${C};
                ${t}
                font-weight: bold;
            }

            .${o} .digiblocks-table tbody td:first-child .digiblocks-cell-content {
                justify-content: ${Ne(Se)};
            }
            `:""}
            
            /* Alternating row styles if enabled */
            ${O?`
            .${o} .digiblocks-table tbody tr:nth-child(even) td {
                background-color: ${O};
            }
            ${J?`
            .${o} .digiblocks-table tbody tr:nth-child(even) td:first-child {
                background-color: ${I};
            }
            `:""}
            `:""}
            
            /* Footer styles if enabled */
            ${v?`
            .${o} .digiblocks-table tfoot td {
                background-color: ${Z};
                color: ${ee};
                ${De}
                ${ao}
                vertical-align: middle;
                border: ${N}px ${m} ${M};
            }

            .${o} .digiblocks-table tfoot td .digiblocks-cell-content {
                justify-content: ${Ne(K)};
            }
            `:""}
            
            /* Responsive styles */
            @media (max-width: 767px) {
                /* Stack mode */
                ${oe==="stack"?`
                .${o} {
					border-radius: 0;
					box-shadow: none;
                }

                .${o} .digiblocks-table {
                    border-collapse: collapse;
					border: 0;
					border-radius: 0;
                }
                
                .${o} .digiblocks-table thead,
                .${o} .digiblocks-table tfoot {
                    display: none;
                }

				.${o} .digiblocks-table tbody {
					display: flex;
					flex-direction: column;
					gap: 1rem;
				}
                
                .${o} .digiblocks-table tbody tr {
                    display: block;
                    border: ${N}px ${m} ${M};
					${ue}
					transition: all 0.3s ease;
                }

				/* Hover effects */
				${D&&D.enable?`
				.${o} .digiblocks-table tbody tr:hover {
						${Fe}
					}
				`:""}
                
                .${o} .digiblocks-table tbody td {
                    display: flex;
                    justify-content: space-between;
					gap: 1rem;
                    text-align: right;
                    border-bottom: 1px solid ${M};
                    border-top: none;
                    border-left: none;
                    border-right: none;
                }
                
                .${o} .digiblocks-table tbody td::before {
                    content: attr(data-label);
                    font-weight: bold;
                    text-align: left;
                    flex: 1;
                }
                
                .${o} .digiblocks-table tbody td:last-child {
                    border-bottom: none;
                }
                
                ${J?`
                .${o} .digiblocks-table tbody td:first-child {
                    text-align: center;
                    background-color: ${I};
                    color: ${C};
                    justify-content: center;
                }
                
                .${o} .digiblocks-table tbody td:first-child::before {
                    content: '';
                    display: none;
                }
                `:""}
                `:""}
                
                /* Scroll mode */
                ${oe==="scroll"?`
                .${o} {
                    overflow-x: auto;
                }
                
                .${o} .digiblocks-table {
                    min-width: 600px; /* Ensure it's wider than most mobile screens */
                }
                `:""}
            }
            
            /* Cell content layout */
            .${o} .digiblocks-cell-content {
                display: flex;
                align-items: center;
                gap: 6px;
            }
            
            .${o} .digiblocks-cell-icon {
                flex-shrink: 0;
            }
            
            /* Cell control icons */
            .${o} .digiblocks-table .digiblocks-cell-icon {
                display: inline-flex;
                align-items: center;
                justify-content: center;
            }
            
            .${o} .digiblocks-table .digiblocks-cell-check {
                color: #28a745;
            }
            
            .${o} .digiblocks-table .digiblocks-cell-cross {
                color: #dc3545;
            }
            
            .${o} .digiblocks-table .digiblocks-cell-stars {
                color: #ffc107;
                display: inline-flex;
				gap: 5px;
            }
            
            /* Selected cell highlight */
            .${o} .digiblocks-table .digiblocks-selected-cell {
                position: relative;
                outline: 2px solid #4a6cf7;
                outline-offset: -2px;
                z-index: 1;
            }
            
            /* Cell Controls Toolbar */
            .${o} .digiblocks-cell-controls-toolbar {
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
            
            .${o} .digiblocks-cell-controls-label {
                font-weight: bold;
            }

			.${o} .digiblocks-cell-controls-buttons .components-button-group {
                display: flex;
                align-items: center;
            }

			.${o} .digiblocks-cell-controls-buttons .digiblocks-cell-control-check-button {
                color: #28a745;
            }

			.${o} .digiblocks-cell-controls-buttons .digiblocks-cell-control-cross-button {
                color: #dc3545;
            }

			.${o} .digiblocks-cell-controls-buttons .digiblocks-cell-control-rating-button {
                color: #ffc107;
            }

			.${o} .digiblocks-cell-controls-buttons .digiblocks-cell-control-remove-button {
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
            .${o} .digiblocks-table-instructions {
                margin-bottom: 15px;
                font-style: italic;
                color: #555;
            }
            
            /* Editor controls */
            .${o} .digiblocks-table-controls {
                margin-top: 20px;
                margin-bottom: 10px;
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                gap: 10px;
            }
            
            .${o} .digiblocks-row-controls,
            .${o} .digiblocks-col-controls {
                position: relative;
            }
            
            .${o} .digiblocks-cell-control-panel {
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
            
            .${o} .digiblocks-cell-control-panel h3 {
                margin-top: 0;
                font-size: 14px;
                margin-bottom: 10px;
            }
            
            .${o} .digiblocks-control-buttons {
                display: flex;
                flex-wrap: wrap;
                gap: 5px;
                margin-top: 5px;
            }
            
            /* Table caption if any */
            .${o} .digiblocks-table-caption {
                text-align: center;
                margin-bottom: 10px;
                font-style: italic;
            }
            
            /* Animation CSS for the table */
            ${q&&q!=="none"&&Jl[q]?Jl[q].keyframes:""}

			/* Visibility Controls */
			${n.desktop?`
				@media (min-width: 992px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${n.tablet?`
				@media (min-width: 768px) and (max-width: 991px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${n.mobile?`
				@media (max-width: 767px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}
        `},g=()=>be.row===-1||be.col===-1?null:wp.element.createElement("div",{className:"digiblocks-cell-controls-toolbar"},wp.element.createElement("div",{className:"digiblocks-cell-controls-label"},Me("Selected Cell:","digiblocks")," Row ",be.row+1,", Column ",be.col+1),wp.element.createElement("div",{className:"digiblocks-cell-controls-buttons"},wp.element.createElement("div",{className:"components-button-group"},wp.element.createElement(pi,{className:"digiblocks-cell-control-check-button",icon:()=>wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"20",height:"20",fill:"currentColor"},wp.element.createElement("path",{d:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"})),label:Me("Add Check","digiblocks"),onClick:()=>{d(be.row,be.col,"stars"),R(be.row,be.col,"icon","check")}}),wp.element.createElement(pi,{className:"digiblocks-cell-control-cross-button",icon:()=>wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"20",height:"20",fill:"currentColor"},wp.element.createElement("path",{d:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"})),label:Me("Add Cross","digiblocks"),onClick:()=>{d(be.row,be.col,"stars"),R(be.row,be.col,"icon","cross")}}),wp.element.createElement(pi,{className:"digiblocks-cell-control-rating-button",icon:()=>wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:"16",height:"16",fill:"currentColor"},wp.element.createElement("path",{d:"M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327l4.898.696c.441.062.612.636.282.95l-3.522 3.356l.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"})),label:Me("Add Rating","digiblocks"),onClick:()=>{d(be.row,be.col,"icon"),x(!0)}}),pe(be.row,be.col,"icon")||pe(be.row,be.col,"stars")?wp.element.createElement(pi,{className:"digiblocks-cell-control-remove-button",icon:()=>wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",width:"16",height:"16",fill:"currentColor"},wp.element.createElement("path",{d:"M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"})),label:Me("Remove Icons","digiblocks"),onClick:()=>{d(be.row,be.col,"icon"),d(be.row,be.col,"stars")}}):null),xe&&wp.element.createElement(ck,{className:"digiblocks-cell-control-popover",onClose:()=>x(!1),position:"bottom center"},wp.element.createElement("div",{className:"digiblocks-rating-selector"},wp.element.createElement("h3",null,Me("Select Rating","digiblocks")),wp.element.createElement(Gl,{isBlock:!0,onChange:u=>{R(be.row,be.col,"stars",u.toString()),x(!1)},__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},[1,2,3,4,5].map(u=>wp.element.createElement(Fo,{key:`star-${u}`,value:u,label:u.toString()}))))))),Q=(u,Ne)=>{if(!A)return null;let a=`${u}-${Ne}`;if(!A[a])return null;if(A[a].icon)switch(A[a].icon){case"check":return wp.element.createElement("span",{className:"digiblocks-cell-icon digiblocks-cell-check"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"20",height:"20",fill:"currentColor"},wp.element.createElement("path",{d:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"})));case"cross":return wp.element.createElement("span",{className:"digiblocks-cell-icon digiblocks-cell-cross"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"20",height:"20",fill:"currentColor"},wp.element.createElement("path",{d:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"})));default:return null}if(A[a].stars){let ue=parseInt(A[a].stars)||0,Fe=[];for(let eo=0;eo<5;eo++)eo<ue?Fe.push(wp.element.createElement("span",{key:`star-${eo}`,className:"digiblocks-cell-icon"},wp.element.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor"},wp.element.createElement("path",{d:"M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327l4.898.696c.441.062.612.636.282.95l-3.522 3.356l.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"})))):Fe.push(wp.element.createElement("span",{key:`star-empty-${eo}`,className:"digiblocks-cell-icon"},wp.element.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",opacity:"0.5"},wp.element.createElement("path",{d:"M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256l4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73l3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L7.538.792c-.197-.39-.73-.39-.927 0L4.427 5.124l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73z"}))));return wp.element.createElement("div",{className:"digiblocks-cell-stars"},Fe)}return null},c=()=>{switch(de){case"options":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(et,{tab:"options",name:"general-settings",title:Me("Table Structure","digiblocks"),initialOpen:!0},wp.element.createElement(Xi,{label:Me("Enable Header Row","digiblocks"),checked:_,onChange:()=>e({hasHeader:!_}),help:Me("Display the first row as table header.","digiblocks"),__nextHasNoMarginBottom:!0}),wp.element.createElement(Xi,{label:Me("Enable Footer Row","digiblocks"),checked:v,onChange:()=>e({hasFooter:!v}),help:Me("Display the last row as table footer.","digiblocks"),__nextHasNoMarginBottom:!0}),wp.element.createElement(Xi,{label:Me("First Column as Header","digiblocks"),checked:J,onChange:()=>e({firstColHeader:!J}),help:Me("Use the first column as a header column.","digiblocks"),__nextHasNoMarginBottom:!0})),wp.element.createElement(et,{tab:"options",name:"preset-settings",title:Me("Table Presets","digiblocks"),initialOpen:!1},wp.element.createElement(an,{label:Me("Table Style Preset","digiblocks"),value:L,options:Te,onChange:u=>ce(u),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(et,{tab:"options",name:"responsive-settings",title:Me("Responsive Settings","digiblocks"),initialOpen:!1},wp.element.createElement(nn,{label:Me("Mobile Behavior","digiblocks"),__nextHasNoMarginBottom:!0},wp.element.createElement(Gl,{value:oe,onChange:u=>e({responsiveMode:u}),help:Me("How the table should behave on small screens.","digiblocks"),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(Fo,{value:"stack",label:Me("Stack","digiblocks"),"aria-label":Me("Stack Behavior","digiblocks")}),wp.element.createElement(Fo,{value:"scroll",label:Me("Scroll","digiblocks"),"aria-label":Me("Scroll Behavior","digiblocks")})))));case"style":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(et,{tab:"style",name:"border-settings",title:Me("Borders & Shadow","digiblocks"),initialOpen:!0},wp.element.createElement(an,{label:Me("Border Style","digiblocks"),value:m,options:me,onChange:u=>e({tableBorderStyle:u}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),m!=="none"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(rk,{label:Me("Border Width","digiblocks"),value:N,onChange:u=>e({tableBorderWidth:u}),min:1,max:10,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(ln,{title:Me("Border Color","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:M,onChange:u=>e({tableBorderColor:u}),label:Me("Border Color","digiblocks")}]})),wp.element.createElement(an,{label:Me("Border Collapse","digiblocks"),value:$,options:[{label:Me("Collapse","digiblocks"),value:"collapse"},{label:Me("Separate","digiblocks"),value:"separate"}],onChange:u=>e({tableBorderCollapse:u}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(mr,{label:Me("Border Radius","digiblocks")},wp.element.createElement(hr,{values:f[re],onChange:u=>e({borderRadius:{...f,[re]:u}}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]})),wp.element.createElement(pk,{label:Me("Box Shadow","digiblocks"),normalValue:b,hoverValue:D,onNormalChange:u=>e({boxShadow:u}),onHoverChange:u=>e({boxShadowHover:u})})),wp.element.createElement(et,{tab:"style",name:"header-settings",title:Me("Header Styles","digiblocks"),initialOpen:!1},wp.element.createElement(ln,{title:Me("Header Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:I,onChange:u=>e({headerBackgroundColor:u}),label:Me("Background Color","digiblocks")},{value:C,onChange:u=>e({headerTextColor:u}),label:Me("Text Color","digiblocks")}]}),wp.element.createElement(fr,{label:Me("Header Typography","digiblocks"),value:k,onChange:u=>e({headingTypography:u}),defaults:{fontSize:{desktop:18,tablet:16,mobile:15},fontSizeUnit:"px",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em"}}),wp.element.createElement(nn,{label:Me("Text Alignment","digiblocks"),__nextHasNoMarginBottom:!0},wp.element.createElement(Gl,{value:Se,onChange:u=>e({headerAlignment:u}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(Fo,{value:"left",label:Me("Left","digiblocks"),"aria-label":Me("Left","digiblocks")}),wp.element.createElement(Fo,{value:"center",label:Me("Center","digiblocks"),"aria-label":Me("Center","digiblocks")}),wp.element.createElement(Fo,{value:"right",label:Me("Right","digiblocks"),"aria-label":Me("Right","digiblocks")})))),wp.element.createElement(et,{tab:"style",name:"body-settings",title:Me("Body Styles","digiblocks"),initialOpen:!1},wp.element.createElement(ln,{title:Me("Body Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:B,onChange:u=>e({bodyBackgroundColor:u}),label:Me("Background Color","digiblocks")},{value:O,onChange:u=>e({altRowBackgroundColor:u}),label:Me("Alternate Row Color","digiblocks")},{value:T,onChange:u=>e({bodyTextColor:u}),label:Me("Text Color","digiblocks")}]}),wp.element.createElement(fr,{label:Me("Body Typography","digiblocks"),value:V,onChange:u=>e({textTypography:u}),defaults:{fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em"}}),wp.element.createElement(nn,{label:Me("Text Alignment","digiblocks"),__nextHasNoMarginBottom:!0},wp.element.createElement(Gl,{value:We,onChange:u=>e({cellAlignment:u}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(Fo,{value:"left",label:Me("Left","digiblocks"),"aria-label":Me("Left","digiblocks")}),wp.element.createElement(Fo,{value:"center",label:Me("Center","digiblocks"),"aria-label":Me("Center","digiblocks")}),wp.element.createElement(Fo,{value:"right",label:Me("Right","digiblocks"),"aria-label":Me("Right","digiblocks")})))),v&&wp.element.createElement(et,{tab:"style",name:"footer-settings",title:Me("Footer Styles","digiblocks"),initialOpen:!1},wp.element.createElement(ln,{title:Me("Footer Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:Z,onChange:u=>e({footerBackgroundColor:u}),label:Me("Background Color","digiblocks")},{value:ee,onChange:u=>e({footerTextColor:u}),label:Me("Text Color","digiblocks")}]}),wp.element.createElement(fr,{label:Me("Footer Typography","digiblocks"),value:E,onChange:u=>e({contentTypography:u}),defaults:{fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em"}}),wp.element.createElement(nn,{label:Me("Text Alignment","digiblocks"),__nextHasNoMarginBottom:!0},wp.element.createElement(Gl,{value:K,onChange:u=>e({footerAlignment:u}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(Fo,{value:"left",label:Me("Left","digiblocks"),"aria-label":Me("Left","digiblocks")}),wp.element.createElement(Fo,{value:"center",label:Me("Center","digiblocks"),"aria-label":Me("Center","digiblocks")}),wp.element.createElement(Fo,{value:"right",label:Me("Right","digiblocks"),"aria-label":Me("Right","digiblocks")})))),wp.element.createElement(et,{tab:"style",name:"spacing",title:Me("Spacing","digiblocks"),initialOpen:!1},wp.element.createElement(mr,{label:Me("Cell Padding","digiblocks")},wp.element.createElement(hr,{values:s&&s[re]?s[re]:{top:15,right:15,bottom:15,left:15,unit:"px"},onChange:u=>e({cellPadding:{...s,[re]:u}})})),wp.element.createElement(mr,{label:Me("Margin","digiblocks")},wp.element.createElement(hr,{values:le&&le[re]?le[re]:{top:0,right:0,bottom:30,left:0,unit:"px"},onChange:u=>e({margin:{...le,[re]:u}})}))));case"advanced":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(et,{tab:"advanced",name:"animation",title:Me("Animation","digiblocks"),initialOpen:!0},wp.element.createElement(an,{label:Me("Animation Effect","digiblocks"),value:q,options:qe,onChange:u=>e({animation:u}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),q&&q!=="none"&&wp.element.createElement("div",{style:{marginTop:"10px"}},wp.element.createElement(pi,{variant:"secondary",isSecondary:!0,onClick:U,style:{width:"100%"}},Me("Preview Animation","digiblocks")))),wp.element.createElement(et,{tab:"advanced",name:"visibility",title:Me("Visibility","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control__help",style:{padding:"12px",backgroundColor:"#f0f6fc",border:"1px solid #c3ddfd",borderRadius:"4px",marginBottom:"16px"}},wp.element.createElement("strong",null,Me("Editor Note:","digiblocks")),wp.element.createElement("br",null),Me("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.","digiblocks")),wp.element.createElement(Xi,{label:Me("Hide on Desktop","digiblocks"),checked:n.desktop,onChange:u=>e({visibility:{...n,desktop:u}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(Xi,{label:Me("Hide on Tablet","digiblocks"),checked:n.tablet,onChange:u=>e({visibility:{...n,tablet:u}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(Xi,{label:Me("Hide on Mobile","digiblocks"),checked:n.mobile,onChange:u=>e({visibility:{...n,mobile:u}}),__nextHasNoMarginBottom:!0})),wp.element.createElement(et,{tab:"advanced",name:"additional",title:Me("Additional","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control html-anchor-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"html-anchor"},Me("HTML anchor","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"html-anchor",value:P||"",onChange:u=>e({anchor:u.target.value}),"aria-describedby":"html-anchor-help",autoCapitalize:"none",autoComplete:"off"})),wp.element.createElement("p",{id:"html-anchor-help",className:"components-base-control__help"},Me(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`,"digiblocks")," ",wp.element.createElement("a",{className:"components-external-link",href:"https://wordpress.org/documentation/article/page-jumps/",target:"_blank",rel:"external noreferrer noopener"},wp.element.createElement("span",{className:"components-external-link__contents"},Me("Learn more about anchors","digiblocks")),wp.element.createElement("span",{className:"components-external-link__icon","aria-label":"(opens in a new tab)"},"\u2197")))),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"additional-css-classes"},Me("Additional CSS class(es)","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"additional-css-classes",value:te||"",onChange:u=>e({customClasses:u.target.value}),"aria-describedby":"additional-css-classes-help",autoComplete:"off"})),wp.element.createElement("p",{id:"additional-css-classes-help",className:"components-base-control__help"},Me("Separate multiple classes with spaces.","digiblocks")))));default:return null}},ae=()=>wp.element.createElement("table",{className:"digiblocks-table"},_&&l.length>0&&wp.element.createElement("thead",null,wp.element.createElement("tr",null,l[0].map((u,Ne)=>wp.element.createElement("th",{key:`header-${Ne}`,onClick:()=>G(0,Ne),className:be.row===0&&be.col===Ne?"digiblocks-selected-cell":""},wp.element.createElement("div",{className:"digiblocks-cell-content"},Q(0,Ne),wp.element.createElement(gr,{tagName:"span",value:u,onChange:a=>Je(a,0,Ne),placeholder:Me("Header text","digiblocks")})))))),wp.element.createElement("tbody",null,l.slice(_?1:0,v?l.length-1:l.length).map((u,Ne)=>{let a=_?Ne+1:Ne;return wp.element.createElement("tr",{key:`row-${a}`},u.map((ue,Fe)=>wp.element.createElement("td",{key:`cell-${a}-${Fe}`,"data-label":_&&l[0]&&l[0][Fe]?l[0][Fe]:"",onClick:()=>G(a,Fe),className:be.row===a&&be.col===Fe?"digiblocks-selected-cell":""},wp.element.createElement("div",{className:"digiblocks-cell-content"},Q(a,Fe),wp.element.createElement(gr,{tagName:"span",value:ue,onChange:eo=>Je(eo,a,Fe),placeholder:Me("Cell text","digiblocks")})))))})),v&&l.length>1&&wp.element.createElement("tfoot",null,wp.element.createElement("tr",null,l[l.length-1].map((u,Ne)=>wp.element.createElement("td",{key:`footer-${Ne}`,onClick:()=>G(l.length-1,Ne),className:be.row===l.length-1&&be.col===Ne?"digiblocks-selected-cell":""},wp.element.createElement("div",{className:"digiblocks-cell-content"},Q(l.length-1,Ne),wp.element.createElement(gr,{tagName:"span",value:u,onChange:a=>Je(a,l.length-1,Ne),placeholder:Me("Footer text","digiblocks")}))))))),y=ak({className:`digiblocks-table-block ${o} ${te||""}`,id:P||null});return!l||!Array.isArray(l)||l.length===0?wp.element.createElement("div",{...y},wp.element.createElement("p",null,Me("Initializing table...","digiblocks"))):wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(sk,null,wp.element.createElement(mg,null,wp.element.createElement(Ai,{icon:"table-row-before",label:Me("Add Row Before","digiblocks"),onClick:()=>{be.row>=0?Ee(be.row-1):Ee(0)}}),wp.element.createElement(Ai,{icon:"table-row-after",label:Me("Add Row After","digiblocks"),onClick:()=>{be.row>=0?Ee(be.row):Ee(l.length-1)}}),wp.element.createElement(Ai,{icon:"table-row-delete",label:Me("Delete Row","digiblocks"),onClick:()=>{be.row>=0&&(Oe(be.row),H({row:-1,col:-1}))},disabled:l.length<=1||be.row<0})),wp.element.createElement(mg,null,wp.element.createElement(Ai,{icon:"table-col-before",label:Me("Add Column Before","digiblocks"),onClick:()=>{be.col>=0?j(be.col-1):j(0)}}),wp.element.createElement(Ai,{icon:"table-col-after",label:Me("Add Column After","digiblocks"),onClick:()=>{be.col>=0?j(be.col):j(l[0].length-1)}}),wp.element.createElement(Ai,{icon:"table-col-delete",label:Me("Delete Column","digiblocks"),onClick:()=>{be.col>=0&&(ye(be.col),H({row:-1,col:-1}))},disabled:l[0].length<=1||be.col<0}))),wp.element.createElement(nk,null,wp.element.createElement(bk,{tabs:Ve,activeTab:de,onSelect:He},c())),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:S()}}),wp.element.createElement("div",{...y},wp.element.createElement("div",{className:"digiblocks-table-instructions"},wp.element.createElement("p",null,Me("Click on any cell to select it and add icons, checks, crosses, or star ratings.","digiblocks"))),be.row!==-1&&be.col!==-1&&g(),wp.element.createElement("div",{className:"digiblocks-table-container"},ae()),wp.element.createElement("div",{className:"digiblocks-table-controls"},wp.element.createElement("div",{className:"digiblocks-row-controls"},wp.element.createElement(pi,{isPrimary:!0,icon:"plus",onClick:()=>Ee(l.length-1)},Me("Add Row","digiblocks"))),wp.element.createElement("div",{className:"digiblocks-col-controls"},wp.element.createElement(pi,{isPrimary:!0,icon:"plus",onClick:()=>j(l[0].length-1)},Me("Add Column","digiblocks"))))))},fg=uk;var{__:Sv}=window.wp.i18n,{useBlockProps:$v,RichText:kr}=window.wp.blockEditor,mk=({attributes:ie})=>{let{id:e,anchor:X,customClasses:o,tableData:P,hasHeader:n,hasFooter:te,responsiveMode:l,animation:_,cellControls:v}=ie,M=["digiblocks-table-block",e,`responsive-${l}`,_!=="none"?`animate-${_}`:"",o||""].filter(Boolean).join(" "),N=($,I,C)=>{let k=`${$}-${I}`;return v[k]&&v[k][C]?v[k][C]:null},m=($,I)=>{let C=`${$}-${I}`;if(!v[C])return null;if(v[C].icon)switch(v[C].icon){case"check":return wp.element.createElement("span",{className:"digiblocks-cell-icon digiblocks-cell-check"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"20",height:"20",fill:"currentColor"},wp.element.createElement("path",{d:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"})));case"cross":return wp.element.createElement("span",{className:"digiblocks-cell-icon digiblocks-cell-cross"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"20",height:"20",fill:"currentColor"},wp.element.createElement("path",{d:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"})));default:return null}if(v[C].stars){let k=parseInt(v[C].stars),B=[];for(let O=0;O<5;O++)O<k?B.push(wp.element.createElement("span",{key:`star-${O}`,className:"digiblocks-cell-icon"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor"},wp.element.createElement("path",{d:"M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327l4.898.696c.441.062.612.636.282.95l-3.522 3.356l.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"})))):B.push(wp.element.createElement("span",{key:`star-empty-${O}`,className:"digiblocks-cell-icon"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",opacity:"0.5"},wp.element.createElement("path",{d:"M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256l4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73l3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L7.538.792c-.197-.39-.73-.39-.927 0L4.427 5.124l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73z"}))));return wp.element.createElement("div",{className:"digiblocks-cell-stars"},B)}return null};return wp.element.createElement("div",{...{className:M,id:X||null}},wp.element.createElement("div",{className:"digiblocks-table-container"},wp.element.createElement("table",{className:"digiblocks-table"},n&&wp.element.createElement("thead",null,wp.element.createElement("tr",null,P[0].map(($,I)=>wp.element.createElement("th",{key:`header-${I}`},wp.element.createElement("div",{className:"digiblocks-cell-content"},m(0,I),wp.element.createElement(kr.Content,{tagName:"span",value:$})))))),wp.element.createElement("tbody",null,P.slice(n?1:0,te?P.length-1:P.length).map(($,I)=>{let C=n?I+1:I;return wp.element.createElement("tr",{key:`row-${C}`},$.map((k,B)=>wp.element.createElement("td",{key:`cell-${C}-${B}`,"data-label":n?P[0][B]:""},wp.element.createElement("div",{className:"digiblocks-cell-content"},m(C,B),wp.element.createElement(kr.Content,{tagName:"span",value:k})))))})),te&&wp.element.createElement("tfoot",null,wp.element.createElement("tr",null,P[P.length-1].map(($,I)=>wp.element.createElement("td",{key:`footer-${I}`},wp.element.createElement("div",{className:"digiblocks-cell-content"},m(P.length-1,I),wp.element.createElement(kr.Content,{tagName:"span",value:$})))))))))},kg=mk;var{__:sn}=window.wp.i18n,{registerBlockType:hk}=window.wp.blocks,{getBlockActiveStatus:fk}=window.wp.digiBlocks;hk("digiblocks/table",{apiVersion:2,title:digiBlocksData.blocks.table.title,category:"digiblocks",icon:{src:()=>{let{viewbox:ie,path:e}=digiBlocksData.blocks.table.icon;return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${ie}`,className:"digiblocks-editor-icons"},wp.element.createElement("path",{d:e}))}},description:digiBlocksData.blocks.table.description,keywords:[sn("table","digiblocks"),sn("comparison","digiblocks"),sn("grid","digiblocks"),sn("cells","digiblocks")],supports:{inserter:!!fk("table"),html:!1,className:!1,customClassName:!1,anchor:!1},attributes:{id:{type:"string",default:""},anchor:{type:"string",default:""},visibility:{type:"object",default:{desktop:!1,tablet:!1,mobile:!1}},customClasses:{type:"string",default:""},tableData:{type:"array",default:[["Header 1","Header 2","Header 3"],["Cell 1,1","Cell 1,2","Cell 1,3"],["Cell 2,1","Cell 2,2","Cell 2,3"]]},hasHeader:{type:"boolean",default:!0},hasFooter:{type:"boolean",default:!1},tableBorderColor:{type:"string",default:"#e0e0e0"},tableBorderWidth:{type:"number",default:1},tableBorderStyle:{type:"string",default:"solid"},cellPadding:{type:"object",default:{desktop:{top:15,right:15,bottom:15,left:15,unit:"px"},tablet:{top:12,right:12,bottom:12,left:12,unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},tableBorderCollapse:{type:"string",default:"collapse"},headerBackgroundColor:{type:"string",default:"#f8f9fa"},headerTextColor:{type:"string",default:"#333333"},headingTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:18,tablet:16,mobile:15},fontSizeUnit:"px",fontWeight:"600",fontStyle:"normal",textTransform:"none",textDecoration:"none",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}},bodyBackgroundColor:{type:"string",default:"#ffffff"},altRowBackgroundColor:{type:"string",default:""},bodyTextColor:{type:"string",default:"#666666"},textTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",fontWeight:"",fontStyle:"normal",textTransform:"",textDecoration:"",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}},footerBackgroundColor:{type:"string",default:"#f8f9fa"},footerTextColor:{type:"string",default:"#333333"},contentTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",fontWeight:"600",fontStyle:"normal",textTransform:"none",textDecoration:"none",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}},borderRadius:{type:"object",default:{desktop:{top:8,right:8,bottom:8,left:8,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},boxShadow:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.1)",horizontal:0,vertical:2,blur:10,spread:0,position:"outset"}},boxShadowHover:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:10,blur:25,spread:0,position:"outset"}},margin:{type:"object",default:{desktop:{top:0,right:0,bottom:30,left:0,unit:"px"},tablet:{top:0,right:0,bottom:25,left:0,unit:"px"},mobile:{top:0,right:0,bottom:20,left:0,unit:"px"}}},cellAlignment:{type:"string",default:"left"},headerAlignment:{type:"string",default:"left"},footerAlignment:{type:"string",default:"left"},tablePreset:{type:"string",default:"default"},responsiveMode:{type:"string",default:"stack"},animation:{type:"string",default:"none"},firstColHeader:{type:"boolean",default:!1},cellControls:{type:"object",default:{}}},example:{attributes:{tableData:[["Feature","Basic","Premium"],["Storage","10GB","1TB"],["Users","1","Unlimited"],["Support","Email","24/7 Phone"],["Price","$9.99","$29.99"]],hasHeader:!0,headerBackgroundColor:"#f8f9fa",bodyBackgroundColor:"#ffffff",altRowBackgroundColor:"#f9f9f9"}},edit:fg,save:kg});var{__:$e}=window.wp.i18n,{useBlockProps:kk,RichText:vr,InspectorControls:vk,PanelColorSettings:rn,MediaUpload:xk,MediaUploadCheck:yk,URLPopover:Nv}=window.wp.blockEditor,{SelectControl:Yl,RangeControl:Zl,Button:Bt,ToggleControl:bi,Tooltip:cn,TextControl:Ck,Popover:vg,__experimentalToggleGroupControl:xg,__experimentalToggleGroupControlOption:Kl,BaseControl:yg,Icon:Hv}=window.wp.components,{useState:Xl,useEffect:xr,useRef:wk,Fragment:zv}=window.wp.element,{useBlockId:Sk,getDimensionCSS:Ot,animations:yr,animationPreview:Cg}=digi.utils,{tabIcons:Cr}=digi.icons,{ResponsiveControl:zo,DimensionControl:Ut,TypographyControl:wr,BoxShadowControl:$k,CustomTabPanel:_k,TabPanelBody:pt}=digi.components,wg={facebook:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"})),twitter:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"})),linkedin:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"})),instagram:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"})),pinterest:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z"})),youtube:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"})),dribbble:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M86.6 64l85.2 85.2C194.5 121.7 208 86.4 208 48c0-14.7-2-28.9-5.7-42.4C158.6 15 119 35.5 86.6 64zM64 86.6C35.5 119 15 158.6 5.6 202.3C19.1 206 33.3 208 48 208c38.4 0 73.7-13.5 101.3-36.1L64 86.6zM256 0c-7.3 0-14.6 .3-21.8 .9C238 16 240 31.8 240 48c0 47.3-17.1 90.5-45.4 124L256 233.4 425.4 64C380.2 24.2 320.9 0 256 0zM48 240c-16.2 0-32-2-47.1-5.8C.3 241.4 0 248.7 0 256c0 64.9 24.2 124.2 64 169.4L233.4 256 172 194.6C138.5 222.9 95.3 240 48 240zm463.1 37.8c.6-7.2 .9-14.5 .9-21.8c0-64.9-24.2-124.2-64-169.4L278.6 256 340 317.4c33.4-28.3 76.7-45.4 124-45.4c16.2 0 32 2 47.1 5.8zm-4.7 31.9C492.9 306 478.7 304 464 304c-38.4 0-73.7 13.5-101.3 36.1L448 425.4c28.5-32.3 49.1-71.9 58.4-115.7zM340.1 362.7C317.5 390.3 304 425.6 304 464c0 14.7 2 28.9 5.7 42.4C353.4 497 393 476.5 425.4 448l-85.2-85.2zM317.4 340L256 278.6 86.6 448c45.1 39.8 104.4 64 169.4 64c7.3 0 14.6-.3 21.8-.9C274 496 272 480.2 272 464c0-47.3 17.1-90.5 45.4-124z"})),github:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 496 512",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"})),behance:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M232 237.2c31.8-15.2 48.4-38.2 48.4-74 0-70.6-52.6-87.8-113.3-87.8H0v354.4h171.8c64.4 0 124.9-30.9 124.9-102.9 0-44.5-21.1-77.4-64.7-89.7zM77.9 135.9H151c28.1 0 53.4 7.9 53.4 40.5 0 30.1-19.7 42.2-47.5 42.2h-79v-82.7zm83.3 233.7H77.9V272h84.9c34.3 0 56 14.3 56 50.6 0 35.8-25.9 47-57.6 47zm358.5-240.7H376V94h143.7v34.9zM576 305.2c0-75.9-44.4-139.2-124.9-139.2-78.2 0-131.3 58.8-131.3 135.8 0 79.9 50.3 134.7 131.3 134.7 61.3 0 101-27.6 120.1-86.3H509c-6.7 21.9-34.3 33.5-55.7 33.5-41.3 0-63-24.2-63-65.3h185.1c.3-4.2 .6-8.7 .6-13.2zM390.4 274c2.3-33.7 24.7-54.8 58.5-54.8 35.4 0 53.2 20.8 56.2 54.8H390.4z"})),vimeo:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M447.8 153.6c-2 43.6-32.4 103.3-91.4 179.1-60.9 79.2-112.4 118.8-154.6 118.8-26.1 0-48.2-24.1-66.3-72.3C100.3 250 85.3 174.3 56.2 174.3c-3.4 0-15.1 7.1-35.2 21.1L0 168.2c51.6-45.3 100.9-95.7 131.8-98.5 34.9-3.4 56.3 20.5 64.4 71.5 28.7 181.5 41.4 208.9 93.6 126.7 18.7-29.6 28.8-52.1 30.2-67.6 4.8-45.9-35.8-42.8-63.3-31 22-72.1 64.1-107.1 126.2-105.1 45.8 1.2 67.5 31.1 64.9 89.4z"})),tiktok:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"})),email:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"})),website:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"}))},Bk=wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},wp.element.createElement("path",{d:"M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"})),Tk=({attributes:ie,setAttributes:e,clientId:X})=>{let{id:o,anchor:P,visibility:n,customClasses:te,members:l,columns:_,gutter:v,layout:M,alignment:N,imageStyle:m,imageSize:s,imageBorderRadius:$,imageBorderWidth:I,imageBorderColor:C,imageBorderStyle:k,typography:B,textTypography:O,contentTypography:T,nameColor:V,positionColor:Z,bioColor:ee,iconColor:E,iconHoverColor:f,iconSize:b,iconSpacing:D,iconBackgroundColor:le,iconBackgroundHoverColor:We,iconBorderRadius:Se,iconPadding:K,boxBackgroundColor:L,boxBorderColor:oe,boxBorderRadius:q,boxBorderWidth:J,boxBorderStyle:A,boxPadding:re,boxMargin:se,boxShadow:Ce,boxShadowHover:Y,animation:de,showName:He,showPosition:be,showBio:H,showSocial:xe}=ie;Sk(o,X,e);let[x,ve]=Xl(()=>{if(window.digi.uiState){let h=window.digi.uiState.getActiveTab(X);if(h)return h}return"options"}),[U,me]=Xl(null),[Te,qe]=Xl(null),[Ve,Ee]=Xl(window.digi.responsiveState.activeDevice),[Oe,j]=Xl(!1);xr(()=>window.digi.responsiveState.subscribe(w=>{Ee(w)}),[]),xr(()=>{if(l&&l.length>0){let h=l.map((w,Pe)=>{if(!w.id)return{...w,id:`team-member-${X.substr(0,8)}-${Pe}`};if(w.socials&&w.socials.length>0){let Ze=w.socials.map((i,F)=>i.id?i:{...i,id:`social-${Pe}-${F}`});return{...w,socials:Ze}}return w});JSON.stringify(h)!==JSON.stringify(l)&&e({members:h})}},[X,l,e]);let ye=wk(null);xr(()=>{if(de&&de!=="none"){let h=setTimeout(()=>{Cg(o,de,yr,ye)},100);return()=>clearTimeout(h)}},[de]);let Je=()=>{Cg(o,de,yr,ye)},G=[{label:$e("Default","digiblocks"),value:"default"},{label:$e("Circle","digiblocks"),value:"circle"},{label:$e("Square","digiblocks"),value:"square"},{label:$e("Rounded","digiblocks"),value:"rounded"}],pe=[{label:$e("None","digiblocks"),value:"none"},{label:$e("Solid","digiblocks"),value:"solid"},{label:$e("Dotted","digiblocks"),value:"dotted"},{label:$e("Dashed","digiblocks"),value:"dashed"},{label:$e("Double","digiblocks"),value:"double"},{label:$e("Groove","digiblocks"),value:"groove"},{label:$e("Ridge","digiblocks"),value:"ridge"},{label:$e("Inset","digiblocks"),value:"inset"},{label:$e("Outset","digiblocks"),value:"outset"}],R=[{label:$e("Facebook","digiblocks"),value:"facebook"},{label:$e("Twitter","digiblocks"),value:"twitter"},{label:$e("LinkedIn","digiblocks"),value:"linkedin"},{label:$e("Instagram","digiblocks"),value:"instagram"},{label:$e("Pinterest","digiblocks"),value:"pinterest"},{label:$e("YouTube","digiblocks"),value:"youtube"},{label:$e("Dribbble","digiblocks"),value:"dribbble"},{label:$e("GitHub","digiblocks"),value:"github"},{label:$e("Behance","digiblocks"),value:"behance"},{label:$e("Vimeo","digiblocks"),value:"vimeo"},{label:$e("TikTok","digiblocks"),value:"tiktok"},{label:$e("Email","digiblocks"),value:"email"},{label:$e("Website","digiblocks"),value:"website"}],d=[{label:$e("None","digiblocks"),value:"none"},...Object.keys(yr).map(h=>({label:h.replace(/-/g," ").replace(/\b\w/g,w=>w.toUpperCase()),value:h}))],ce=[{name:"options",title:$e("Options","digiblocks"),icon:Cr.optionsIcon},{name:"style",title:$e("Style","digiblocks"),icon:Cr.styleIcon},{name:"advanced",title:$e("Advanced","digiblocks"),icon:Cr.advancedIcon}],S=()=>{let h=`team-member-${X.substr(0,8)}-${Date.now()}`,w={id:h,name:$e("New Team Member","digiblocks"),position:$e("Position","digiblocks"),bio:$e("Add a short bio about this team member.","digiblocks"),image:{url:"",id:"",alt:""},socials:[{id:`social-${h}-1`,network:"facebook",url:"https://facebook.com"},{id:`social-${h}-2`,network:"twitter",url:"https://twitter.com"}]};e({members:[...l,w]})},g=h=>{let w=[...l];w.splice(h,1),e({members:w})},Q=h=>{let w=l[h],Pe=Date.now(),Ze=`team-member-${X.substr(0,8)}-${Pe}`,i={...w,id:Ze,socials:w.socials?w.socials.map((Ue,po)=>({...Ue,id:`social-${Ze}-${po}`})):[]},F=[...l];F.splice(h+1,0,i),e({members:F})},c=h=>{if(h===0)return;let w=[...l],Pe=w[h];w.splice(h,1),w.splice(h-1,0,Pe),e({members:w})},ae=h=>{if(h===l.length-1)return;let w=[...l],Pe=w[h];w.splice(h,1),w.splice(h+1,0,Pe),e({members:w})},y=(h,w,Pe)=>{let Ze=[...l];Ze[h]={...Ze[h],[w]:Pe},e({members:Ze})},u=(h,w)=>{let Pe=[...l];Pe[h].image||(Pe[h].image={}),Pe[h].image={url:w.url||"",id:w.id||"",alt:w.alt||""},e({members:Pe})},Ne=h=>{me({memberIndex:h,target:document.getElementById(`add-social-${h}`)})},a=()=>{me(null)},ue=(h,w)=>{let Pe=[...l],Ze=Pe[h],i=Ze.socials||[];i.push({id:`social-${Ze.id}-${Date.now()}`,network:w,url:""}),Pe[h]={...Ze,socials:i},e({members:Pe}),a(),setTimeout(()=>{let F=i.length-1;go(h,F)},100)},Fe=()=>{if(!U)return null;let{memberIndex:h,target:w}=U,Pe=l[h].socials?l[h].socials.map(i=>i.network):[],Ze=R.filter(i=>!Pe.includes(i.value));return wp.element.createElement(vg,{anchor:w,onClose:a,position:"bottom center",expandOnMobile:!0,className:"digiblocks-team-social-select-popover"},wp.element.createElement("div",{style:{padding:"12px",width:"280px",maxHeight:"400px",overflowY:"auto"}},wp.element.createElement("div",{style:{marginBottom:"10px",fontWeight:"bold"}},$e("Select Social Network","digiblocks")),wp.element.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"8px"}},Ze.map(i=>wp.element.createElement(Bt,{key:i.value,variant:"secondary",onClick:()=>ue(h,i.value),style:{display:"flex",alignItems:"center",justifyContent:"flex-start",padding:"8px",gap:"8px"}},wp.element.createElement("span",{style:{display:"inline-flex",alignItems:"center"}},wg[i.value]),wp.element.createElement("span",null,i.label))))))},eo=(h,w)=>{let Pe=[...l],Ze=Pe[h],i=[...Ze.socials];i.splice(w,1),Pe[h]={...Ze,socials:i},e({members:Pe})},ao=(h,w,Pe,Ze)=>{let i=[...l],F=i[h],Ue=[...F.socials];Ue[w]={...Ue[w],[Pe]:Ze},i[h]={...F,socials:Ue},e({members:i})},go=(h,w)=>{qe({memberIndex:h,socialIndex:w,target:document.getElementById(`social-link-${h}-${w}`)})},t=()=>{qe(null)},p=()=>{let h=Ve,w={desktop:`calc((100% - ${(_.desktop-1)*v.desktop}px) / ${_.desktop})`,tablet:`calc((100% - ${(_.tablet-1)*v.tablet}px) / ${_.tablet})`,mobile:`calc((100% - ${(_.mobile-1)*v.mobile}px) / ${_.mobile})`},Pe="box-shadow: none;";Ce&&Ce.enable&&(Pe=`box-shadow: ${Ce.position==="inset"?"inset ":""}${Ce.horizontal}px ${Ce.vertical}px ${Ce.blur}px ${Ce.spread}px ${Ce.color};`);let Ze="";Y&&Y.enable&&(Ze=`box-shadow: ${Y.position==="inset"?"inset ":""}${Y.horizontal}px ${Y.vertical}px ${Y.blur}px ${Y.spread}px ${Y.color};`);let i="";B&&(B.fontFamily&&(i+=`font-family: ${B.fontFamily};`),B.fontSize&&B.fontSize[h]&&(i+=`font-size: ${B.fontSize[h]}${B.fontSizeUnit||"px"};`),B.fontWeight&&(i+=`font-weight: ${B.fontWeight};`),B.fontStyle&&(i+=`font-style: ${B.fontStyle};`),B.textTransform&&(i+=`text-transform: ${B.textTransform};`),B.textDecoration&&(i+=`text-decoration: ${B.textDecoration};`),B.lineHeight&&B.lineHeight[h]&&(i+=`line-height: ${B.lineHeight[h]}${B.lineHeightUnit||"em"};`),B.letterSpacing&&B.letterSpacing[h]&&(i+=`letter-spacing: ${B.letterSpacing[h]}${B.letterSpacingUnit||"px"};`));let F="";O&&(O.fontFamily&&(F+=`font-family: ${O.fontFamily};`),O.fontSize&&O.fontSize[h]&&(F+=`font-size: ${O.fontSize[h]}${O.fontSizeUnit||"px"};`),O.fontWeight&&(F+=`font-weight: ${O.fontWeight};`),O.fontStyle&&(F+=`font-style: ${O.fontStyle};`),O.textTransform&&(F+=`text-transform: ${O.textTransform};`),O.textDecoration&&(F+=`text-decoration: ${O.textDecoration};`),O.lineHeight&&O.lineHeight[h]&&(F+=`line-height: ${O.lineHeight[h]}${O.lineHeightUnit||"em"};`),O.letterSpacing&&O.letterSpacing[h]&&(F+=`letter-spacing: ${O.letterSpacing[h]}${O.letterSpacingUnit||"px"};`));let Ue="";T&&(T.fontFamily&&(Ue+=`font-family: ${T.fontFamily};`),T.fontSize&&T.fontSize[h]&&(Ue+=`font-size: ${T.fontSize[h]}${T.fontSizeUnit||"px"};`),T.fontWeight&&(Ue+=`font-weight: ${T.fontWeight};`),T.fontStyle&&(Ue+=`font-style: ${T.fontStyle};`),T.textTransform&&(Ue+=`text-transform: ${T.textTransform};`),T.textDecoration&&(Ue+=`text-decoration: ${T.textDecoration};`),T.lineHeight&&T.lineHeight[h]&&(Ue+=`line-height: ${T.lineHeight[h]}${T.lineHeightUnit||"em"};`),T.letterSpacing&&T.letterSpacing[h]&&(Ue+=`letter-spacing: ${T.letterSpacing[h]}${T.letterSpacingUnit||"px"};`));let po;m==="circle"?po="border-radius: 50%;":m==="square"?po="border-radius: 0;":m==="rounded"?po="border-radius: 8px;":po=`${Ot($,"border-radius",h)}`;let z=`${Ot(q,"border-radius",h)}`,Ke=`${Ot(J,"border-width",h)}`,ro=`${Ot(re,"padding",h)}`,W=`${Ot(se,"margin",h)}`,ze=`${Ot(I,"border-width",h)}`,ho=`${Ot(Se,"border-radius",h)}`,uo=`${Ot(K,"border-width",h)}`;return`
            /* Team Block - ${o} */
            .${o} {
                ${W}
            }
            
            /* Grid Layout */
            .${o} .digiblocks-team-container {
                display: flex;
                flex-wrap: wrap;
                gap: ${v[h]}px;
                justify-content: ${N==="center"?"center":N==="right"?"flex-end":"flex-start"};
            }
            
            /* List Layout */
            .${o}.layout-list .digiblocks-team-container {
                display: flex;
				flex-direction: column;
				gap: ${v[h]}px;
            }
            
            .${o}.layout-list .digiblocks-team-member {
                display: flex;
                align-items: center;
                width: 100%;
				gap: ${v[h]}px;
            }
            
            .${o}.layout-list .digiblocks-team-member-image {
                margin: 0;
            }
            
            .${o}.layout-list .digiblocks-team-member-content {
                text-align: left !important;
            }

			.${o}.layout-list .digiblocks-team-member-social {
				justify-content: flex-start;
			}
            
            /* Team Member */
            .${o} .digiblocks-team-member {
				display: flex;
				align-items: ${N==="center"?"center":N==="right"?"flex-end":"flex-start"};
				gap: 15px;
                ${M==="grid"?`width: ${w[h]}; flex-direction: column;`:""}
                text-align: ${N};
                position: relative;
				background-color: ${L||"transparent"};
				${A!=="none"?`
					border-style: ${A};
					border-color: ${oe||"#e0e0e0"};
					${Ke}
				`:""}
				${z}
				${Pe}
				${ro}
				transition: all 0.3s ease;
            }
            
            /* Hover effects */
            ${Y&&Y.enable?`
                .${o} .digiblocks-team-member:hover {
                    ${Ze}
                }
            `:""}
            
            /* Team Member Image */
            .${o} .digiblocks-team-member-image {
                width: ${s[h]}px;
                height: ${s[h]}px;
				max-width: 100%;
                ${po}
                overflow: hidden;
                display: flex;
                ${k!=="none"?`
					${ze}
					border-style: ${k};
					border-color: ${C};
                `:""}
            }
            
            .${o} .digiblocks-team-member-image img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                display: block;
            }
            
            /* Team Member Name */
            .${o} .digiblocks-team-member-name {
                color: ${V};
                margin-top: 0;
                margin-bottom: 5px;
                ${i}
            }
            
            /* Team Member Position */
            .${o} .digiblocks-team-member-position {
                color: ${Z};
                margin-bottom: 10px;
                ${F}
            }
            
            /* Team Member Bio */
            .${o} .digiblocks-team-member-bio {
                color: ${ee};
                margin-bottom: ${xe?"15px":"0"};
                ${Ue}
            }
            
            /* Team Member Social */
            .${o} .digiblocks-team-member-social {
				display: flex;
				align-items: center;
				justify-content: ${N==="center"?"center":N==="right"?"flex-end":"flex-start"};
				gap: ${D[h]}px;
				flex-wrap: wrap;
			}
			
			.${o} .digiblocks-team-member-social-icon {
				color: ${E};
				display: flex;
				align-items: center;
				justify-content: center;
				${ho}
				background-color: ${le};
				${uo}
				transition: all 0.3s ease;
				cursor: pointer;
				position: relative;
				z-index: 1;
			}
			
			.${o} .digiblocks-team-member-social-icon:hover {
				color: ${f};
				${We?`background-color: ${We};`:""}
			}
			
			.${o} .digiblocks-team-member-social-icon svg {
				width: ${b[h]?`${b[h]}px`:"1.2rem"};
				height: ${b[h]?`${b[h]}px`:"1.2rem"};
				fill: currentColor;
			}
			
			.${o} .digiblocks-team-member-social-icon-wrapper {
				position: relative;
			}
			
			.${o} .digiblocks-team-member-social-icon.add-social {
				background-color: #f0f0f0;
				color: #333;
				width: 30px;
				height: 30px;
			}
			
			.${o} .digiblocks-team-member-social-icon.add-social svg {
				width: .6rem;
				height: .6rem;
			}
            
            /* Editor Styles */
            .${o} .digiblocks-team-member-controls {
                display: flex;
                gap: 5px;
                position: absolute;
                right: 5px;
                top: 5px;
                background-color: rgba(255, 255, 255, 0.8);
                padding: 5px;
                border-radius: 5px;
                z-index: 10;
            }
            
            .${o} .digiblocks-team-member-placeholder {
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: #f0f0f0;
                color: #888;
                font-size: 14px;
                cursor: pointer;
            }
            
            .${o} .digiblocks-team-member-social-icon.add-social {
                background-color: #f0f0f0;
                color: #333;
            }
            
            .${o} .digiblocks-team-member-social-icon-controls {
                position: absolute;
                top: -5px;
                right: -5px;
                display: none;
                background-color: rgba(255, 255, 255, 0.8);
                border-radius: 50%;
                padding: 2px;
                z-index: 2;
            }
            
            .${o} .digiblocks-team-member-social-icon-wrapper {
                position: relative;
            }
            
            .${o} .digiblocks-team-member-social-icon-wrapper:hover .digiblocks-team-member-social-icon-controls {
                display: block;
            }

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

			/* Visibility Controls */
			${n.desktop?`
				@media (min-width: 992px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${n.tablet?`
				@media (min-width: 768px) and (max-width: 991px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${n.mobile?`
				@media (max-width: 767px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}
        `},De=()=>l.map((h,w)=>wp.element.createElement("div",{key:h.id,className:"digiblocks-team-member"},wp.element.createElement("div",{className:"digiblocks-team-member-controls"},wp.element.createElement(cn,{text:$e("Move Up","digiblocks")},wp.element.createElement(Bt,{className:"digiblocks-team-member-move-up",onClick:()=>c(w),icon:"arrow-up-alt2",disabled:w===0,isSmall:!0})),wp.element.createElement(cn,{text:$e("Move Down","digiblocks")},wp.element.createElement(Bt,{className:"digiblocks-team-member-move-down",onClick:()=>ae(w),icon:"arrow-down-alt2",disabled:w===l.length-1,isSmall:!0})),wp.element.createElement(cn,{text:$e("Duplicate","digiblocks")},wp.element.createElement(Bt,{className:"digiblocks-team-member-duplicate",onClick:()=>Q(w),icon:"admin-page",isSmall:!0})),wp.element.createElement(cn,{text:$e("Remove","digiblocks")},wp.element.createElement(Bt,{className:"digiblocks-team-member-remove",onClick:()=>g(w),icon:"trash",isSmall:!0,disabled:l.length<=1}))),He&&wp.element.createElement("div",{className:"digiblocks-team-member-image"},wp.element.createElement(yk,null,wp.element.createElement(xk,{onSelect:Pe=>u(w,Pe),allowedTypes:["image"],value:h.image&&h.image.id?h.image.id:"",render:({open:Pe})=>wp.element.createElement("div",{className:"digiblocks-image-upload-container"},h.image&&h.image.url?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("img",{src:h.image.url,alt:h.image.alt||h.name,onClick:Pe}),wp.element.createElement("button",{className:"digiblocks-change-image-button",onClick:Pe},$e("Change Image","digiblocks"))):wp.element.createElement("div",{className:"digiblocks-team-member-placeholder",onClick:Pe},$e("Choose Image","digiblocks")))}))),wp.element.createElement("div",{className:"digiblocks-team-member-content"},He&&wp.element.createElement(vr,{tagName:"h3",className:"digiblocks-team-member-name",value:h.name,onChange:Pe=>y(w,"name",Pe),placeholder:$e("Team Member Name","digiblocks"),allowedFormats:["core/bold","core/italic"]}),be&&wp.element.createElement(vr,{tagName:"div",className:"digiblocks-team-member-position",value:h.position,onChange:Pe=>y(w,"position",Pe),placeholder:$e("Position or Role","digiblocks"),allowedFormats:["core/bold","core/italic"]}),H&&wp.element.createElement(vr,{tagName:"div",className:"digiblocks-team-member-bio",value:h.bio,onChange:Pe=>y(w,"bio",Pe),placeholder:$e("Add a short bio about this team member.","digiblocks"),allowedFormats:["core/bold","core/italic","core/link"]}),xe&&wp.element.createElement("div",{className:"digiblocks-team-member-social"},h.socials&&h.socials.map((Pe,Ze)=>wp.element.createElement("div",{key:Pe.id,className:"digiblocks-team-member-social-icon-wrapper"},wp.element.createElement("div",{id:`social-link-${w}-${Ze}`,className:"digiblocks-team-member-social-icon",onClick:()=>go(w,Ze)},wg[Pe.network]),wp.element.createElement(Bt,{className:"digiblocks-team-member-social-icon-remove",onClick:()=>eo(w,Ze),icon:"no-alt",isSmall:!0,label:$e("Remove","digiblocks"),style:{position:"absolute",top:"-12px",right:"-10px",background:"#fff",borderRadius:"50%",padding:"2px",boxShadow:"0 1px 3px rgba(0,0,0,0.2)",zIndex:2}}))),wp.element.createElement("div",{id:`add-social-${w}`,className:"digiblocks-team-member-social-icon add-social",onClick:()=>Ne(w),title:$e("Add Social Link","digiblocks")},Bk))))),r=()=>{if(!Te)return null;let{memberIndex:h,socialIndex:w,target:Pe}=Te,Ze=l[h].socials[w];return wp.element.createElement(vg,{anchor:Pe,onClose:t,position:"bottom center",expandOnMobile:!0,className:"digiblocks-team-social-url-popover"},wp.element.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",padding:"12px",minWidth:"280px"}},wp.element.createElement(Yl,{label:$e("Social Network","digiblocks"),value:Ze.network,options:R,onChange:i=>ao(h,w,"network",i),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Ck,{label:$e("URL","digiblocks"),value:Ze.url,onChange:i=>ao(h,w,"url",i),placeholder:Ze.network==="email"?"mailto:example@domain.com":Ze.network==="website"?"https://example.com":`https://${Ze.network}.com/username`,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Bt,{variant:"primary",onClick:t,style:{justifyContent:"center",width:"100%"}},$e("Done","digiblocks"))))},he=()=>{switch(x){case"options":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(pt,{tab:"options",name:"layout-settings",title:$e("Layout Settings","digiblocks"),initialOpen:!0},wp.element.createElement(yg,{id:"team-alignment-control",label:$e("Layout Type","digiblocks"),__nextHasNoMarginBottom:!0},wp.element.createElement(xg,{value:M,onChange:h=>e({layout:h}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(Kl,{value:"grid",label:$e("Grid","digiblocks"),"aria-label":$e("Grid Layout","digiblocks")}),wp.element.createElement(Kl,{value:"list",label:$e("List","digiblocks"),"aria-label":$e("List Layout","digiblocks")}))),M==="grid"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(yg,{id:"team-alignment-control",label:$e("Alignment","digiblocks"),__nextHasNoMarginBottom:!0},wp.element.createElement(xg,{value:N,onChange:h=>e({alignment:h}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(Kl,{value:"left",label:$e("Left","digiblocks"),"aria-label":$e("Left alignment","digiblocks")}),wp.element.createElement(Kl,{value:"center",label:$e("Center","digiblocks"),"aria-label":$e("Center alignment","digiblocks")}),wp.element.createElement(Kl,{value:"right",label:$e("Right","digiblocks"),"aria-label":$e("Right alignment","digiblocks")}))),wp.element.createElement(zo,{label:$e("Columns","digiblocks")},wp.element.createElement(Zl,{value:_[Ve],onChange:h=>e({columns:{..._,[Ve]:h}}),min:1,max:6,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(zo,{label:$e("Spacing","digiblocks")},wp.element.createElement(Zl,{value:v[Ve],onChange:h=>e({gutter:{...v,[Ve]:h}}),min:0,max:100,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})))),wp.element.createElement(pt,{tab:"options",name:"content-settings",title:$e("Content Settings","digiblocks"),initialOpen:!1},wp.element.createElement(bi,{label:$e("Show Name","digiblocks"),checked:He,onChange:()=>e({showName:!He}),__nextHasNoMarginBottom:!0}),wp.element.createElement(bi,{label:$e("Show Position","digiblocks"),checked:be,onChange:()=>e({showPosition:!be}),__nextHasNoMarginBottom:!0}),wp.element.createElement(bi,{label:$e("Show Bio","digiblocks"),checked:H,onChange:()=>e({showBio:!H}),__nextHasNoMarginBottom:!0}),wp.element.createElement(bi,{label:$e("Show Social Icons","digiblocks"),checked:xe,onChange:()=>e({showSocial:!xe}),__nextHasNoMarginBottom:!0})),wp.element.createElement(pt,{tab:"options",name:"image-settings",title:$e("Image Settings","digiblocks"),initialOpen:!1},wp.element.createElement(Yl,{label:$e("Image Style","digiblocks"),value:m,options:G,onChange:h=>e({imageStyle:h}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(zo,{label:$e("Image Size","digiblocks")},wp.element.createElement(Zl,{value:s[Ve],onChange:h=>e({imageSize:{...s,[Ve]:h}}),min:50,max:300,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(Yl,{label:$e("Border Style","digiblocks"),value:k,options:pe,onChange:h=>e({imageBorderStyle:h}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),k!=="none"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(rn,{title:$e("Border Color","digiblocks"),initialOpen:!1,enableAlpha:!0,colorSettings:[{value:C,onChange:h=>e({imageBorderColor:h}),label:$e("Border Color","digiblocks")}]}),wp.element.createElement(zo,{label:$e("Border Width","digiblocks")},wp.element.createElement(Ut,{values:I[Ve],onChange:h=>e({imageBorderWidth:{...I,[Ve]:h}})}))),m==="default"&&wp.element.createElement(zo,{label:$e("Border Radius","digiblocks")},wp.element.createElement(Ut,{values:$[Ve],onChange:h=>e({imageBorderRadius:{...$,[Ve]:h}})}))));case"style":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(pt,{tab:"style",name:"colors",title:$e("Colors","digiblocks"),initialOpen:!0},wp.element.createElement(rn,{title:$e("Text Colors","digiblocks"),initialOpen:!0,colorSettings:[{value:V,onChange:h=>e({nameColor:h}),label:$e("Name Color","digiblocks")},{value:Z,onChange:h=>e({positionColor:h}),label:$e("Position Color","digiblocks")},{value:ee,onChange:h=>e({bioColor:h}),label:$e("Bio Color","digiblocks")}]}),wp.element.createElement(rn,{title:$e("Social Icon Colors","digiblocks"),initialOpen:!1,colorSettings:[{value:E,onChange:h=>e({iconColor:h}),label:$e("Icon Color","digiblocks")},{value:f,onChange:h=>e({iconHoverColor:h}),label:$e("Icon Hover Color","digiblocks")},{value:le,onChange:h=>e({iconBackgroundColor:h}),label:$e("Icon Background","digiblocks")},{value:We,onChange:h=>e({iconBackgroundHoverColor:h}),label:$e("Icon Background Hover","digiblocks")}]}),wp.element.createElement(rn,{title:$e("Box Colors","digiblocks"),initialOpen:!1,colorSettings:[{value:L,onChange:h=>e({boxBackgroundColor:h}),label:$e("Background Color","digiblocks")},{value:oe,onChange:h=>e({boxBorderColor:h}),label:$e("Border Color","digiblocks")}]})),wp.element.createElement(pt,{tab:"style",name:"typography",title:$e("Typography","digiblocks"),initialOpen:!1},wp.element.createElement(wr,{label:$e("Name Typography","digiblocks"),value:B,onChange:h=>e({typography:h}),defaults:{fontSize:{desktop:22,tablet:20,mobile:18},fontSizeUnit:"px",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em"}}),wp.element.createElement(wr,{label:$e("Position Typography","digiblocks"),value:O,onChange:h=>e({textTypography:h}),defaults:{fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em"}}),wp.element.createElement(wr,{label:$e("Bio Typography","digiblocks"),value:T,onChange:h=>e({contentTypography:h}),defaults:{fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em"}})),wp.element.createElement(pt,{tab:"style",name:"social-icons",title:$e("Social Icons","digiblocks"),initialOpen:!1},wp.element.createElement(zo,{label:$e("Icon Size","digiblocks")},wp.element.createElement(Zl,{value:b[Ve],onChange:h=>e({iconSize:{...b,[Ve]:h}}),min:10,max:50,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(zo,{label:$e("Icon Spacing","digiblocks")},wp.element.createElement(Zl,{value:D[Ve],onChange:h=>e({iconSpacing:{...D,[Ve]:h}}),min:0,max:30,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(zo,{label:$e("Icon Padding","digiblocks")},wp.element.createElement(Ut,{values:K[Ve],onChange:h=>e({iconPadding:{...K,[Ve]:h}})})),wp.element.createElement(zo,{label:$e("Border Radius","digiblocks")},wp.element.createElement(Ut,{values:Se[Ve],onChange:h=>e({iconBorderRadius:{...Se,[Ve]:h}})}))),wp.element.createElement(pt,{tab:"style",name:"box-style",title:$e("Box Style","digiblocks"),initialOpen:!1},wp.element.createElement(Yl,{label:$e("Border Style","digiblocks"),value:A,options:pe,onChange:h=>e({boxBorderStyle:h}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),A!=="none"&&wp.element.createElement(zo,{label:$e("Border Width","digiblocks")},wp.element.createElement(Ut,{values:J[Ve],onChange:h=>e({boxBorderWidth:{...J,[Ve]:h}})})),wp.element.createElement(zo,{label:$e("Border Radius","digiblocks")},wp.element.createElement(Ut,{values:q[Ve],onChange:h=>e({boxBorderRadius:{...q,[Ve]:h}})})),wp.element.createElement($k,{label:$e("Box Shadow","digiblocks"),normalValue:Ce,hoverValue:Y,onNormalChange:h=>e({boxShadow:h}),onHoverChange:h=>e({boxShadowHover:h})}),wp.element.createElement(zo,{label:$e("Padding","digiblocks")},wp.element.createElement(Ut,{values:re[Ve],onChange:h=>e({boxPadding:{...re,[Ve]:h}})})),wp.element.createElement(zo,{label:$e("Margin","digiblocks")},wp.element.createElement(Ut,{values:se[Ve],onChange:h=>e({boxMargin:{...se,[Ve]:h}})}))));case"advanced":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(pt,{tab:"advanced",name:"animation",title:$e("Animation","digiblocks"),initialOpen:!0},wp.element.createElement(Yl,{label:$e("Animation Effect","digiblocks"),value:de,options:d,onChange:h=>e({animation:h}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),de&&de!=="none"&&wp.element.createElement("div",{style:{marginTop:"10px"}},wp.element.createElement(Bt,{variant:"secondary",onClick:Je,style:{width:"100%"},disabled:Oe},$e(Oe?"Previewing...":"Preview Animation","digiblocks")))),wp.element.createElement(pt,{tab:"advanced",name:"visibility",title:$e("Visibility","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control__help",style:{padding:"12px",backgroundColor:"#f0f6fc",border:"1px solid #c3ddfd",borderRadius:"4px",marginBottom:"16px"}},wp.element.createElement("strong",null,$e("Editor Note:","digiblocks")),wp.element.createElement("br",null),$e("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.","digiblocks")),wp.element.createElement(bi,{label:$e("Hide on Desktop","digiblocks"),checked:n.desktop,onChange:h=>e({visibility:{...n,desktop:h}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(bi,{label:$e("Hide on Tablet","digiblocks"),checked:n.tablet,onChange:h=>e({visibility:{...n,tablet:h}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(bi,{label:$e("Hide on Mobile","digiblocks"),checked:n.mobile,onChange:h=>e({visibility:{...n,mobile:h}}),__nextHasNoMarginBottom:!0})),wp.element.createElement(pt,{tab:"advanced",name:"additional",title:$e("Additional","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control html-anchor-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"html-anchor"},$e("HTML anchor","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"html-anchor",value:P||"",onChange:h=>e({anchor:h.target.value}),"aria-describedby":"html-anchor-help",autoCapitalize:"none",autoComplete:"off"})),wp.element.createElement("p",{id:"html-anchor-help",className:"components-base-control__help"},$e(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`,"digiblocks")," ",wp.element.createElement("a",{className:"components-external-link",href:"https://wordpress.org/documentation/article/page-jumps/",target:"_blank",rel:"external noreferrer noopener"},wp.element.createElement("span",{className:"components-external-link__contents"},$e("Learn more about anchors","digiblocks")),wp.element.createElement("span",{className:"components-external-link__icon","aria-label":"(opens in a new tab)"},"\u2197")))),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"additional-css-classes"},$e("Additional CSS class(es)","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"additional-css-classes",value:te||"",onChange:h=>e({customClasses:h.target.value}),"aria-describedby":"additional-css-classes-help",autoComplete:"off"})),wp.element.createElement("p",{id:"additional-css-classes-help",className:"components-base-control__help"},$e("Separate multiple classes with spaces.","digiblocks")))));default:return null}},oo=kk({className:`digiblocks-team-block ${o} layout-${M} align-${N} ${te||""}`,id:P||null});return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(vk,null,wp.element.createElement(_k,{tabs:ce,activeTab:x,onSelect:ve},he())),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:p()}}),wp.element.createElement("div",{...oo},wp.element.createElement("div",{className:"digiblocks-team-container"},De()),wp.element.createElement(Bt,{variant:"primary",icon:"plus",onClick:S,style:{width:"100%",marginTop:"20px",justifyContent:"center"}},$e("Add Team Member","digiblocks")),r(),Fe()))},Sg=Tk;var{useBlockProps:Nk,RichText:Sr}=window.wp.blockEditor,Hk={facebook:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512"},wp.element.createElement("path",{d:"M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"})),twitter:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},wp.element.createElement("path",{d:"M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"})),linkedin:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},wp.element.createElement("path",{d:"M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"})),instagram:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},wp.element.createElement("path",{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"})),pinterest:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},wp.element.createElement("path",{d:"M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z"})),youtube:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},wp.element.createElement("path",{d:"M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"})),dribbble:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},wp.element.createElement("path",{d:"M86.6 64l85.2 85.2C194.5 121.7 208 86.4 208 48c0-14.7-2-28.9-5.7-42.4C158.6 15 119 35.5 86.6 64zM64 86.6C35.5 119 15 158.6 5.6 202.3C19.1 206 33.3 208 48 208c38.4 0 73.7-13.5 101.3-36.1L64 86.6zM256 0c-7.3 0-14.6 .3-21.8 .9C238 16 240 31.8 240 48c0 47.3-17.1 90.5-45.4 124L256 233.4 425.4 64C380.2 24.2 320.9 0 256 0zM48 240c-16.2 0-32-2-47.1-5.8C.3 241.4 0 248.7 0 256c0 64.9 24.2 124.2 64 169.4L233.4 256 172 194.6C138.5 222.9 95.3 240 48 240zm463.1 37.8c.6-7.2 .9-14.5 .9-21.8c0-64.9-24.2-124.2-64-169.4L278.6 256 340 317.4c33.4-28.3 76.7-45.4 124-45.4c16.2 0 32 2 47.1 5.8zm-4.7 31.9C492.9 306 478.7 304 464 304c-38.4 0-73.7 13.5-101.3 36.1L448 425.4c28.5-32.3 49.1-71.9 58.4-115.7zM340.1 362.7C317.5 390.3 304 425.6 304 464c0 14.7 2 28.9 5.7 42.4C353.4 497 393 476.5 425.4 448l-85.2-85.2zM317.4 340L256 278.6 86.6 448c45.1 39.8 104.4 64 169.4 64c7.3 0 14.6-.3 21.8-.9C274 496 272 480.2 272 464c0-47.3 17.1-90.5 45.4-124z"})),github:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 496 512"},wp.element.createElement("path",{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"})),behance:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},wp.element.createElement("path",{d:"M232 237.2c31.8-15.2 48.4-38.2 48.4-74 0-70.6-52.6-87.8-113.3-87.8H0v354.4h171.8c64.4 0 124.9-30.9 124.9-102.9 0-44.5-21.1-77.4-64.7-89.7zM77.9 135.9H151c28.1 0 53.4 7.9 53.4 40.5 0 30.1-19.7 42.2-47.5 42.2h-79v-82.7zm83.3 233.7H77.9V272h84.9c34.3 0 56 14.3 56 50.6 0 35.8-25.9 47-57.6 47zm358.5-240.7H376V94h143.7v34.9zM576 305.2c0-75.9-44.4-139.2-124.9-139.2-78.2 0-131.3 58.8-131.3 135.8 0 79.9 50.3 134.7 131.3 134.7 61.3 0 101-27.6 120.1-86.3H509c-6.7 21.9-34.3 33.5-55.7 33.5-41.3 0-63-24.2-63-65.3h185.1c.3-4.2 .6-8.7 .6-13.2zM390.4 274c2.3-33.7 24.7-54.8 58.5-54.8 35.4 0 53.2 20.8 56.2 54.8H390.4z"})),vimeo:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},wp.element.createElement("path",{d:"M447.8 153.6c-2 43.6-32.4 103.3-91.4 179.1-60.9 79.2-112.4 118.8-154.6 118.8-26.1 0-48.2-24.1-66.3-72.3C100.3 250 85.3 174.3 56.2 174.3c-3.4 0-15.1 7.1-35.2 21.1L0 168.2c51.6-45.3 100.9-95.7 131.8-98.5 34.9-3.4 56.3 20.5 64.4 71.5 28.7 181.5 41.4 208.9 93.6 126.7 18.7-29.6 28.8-52.1 30.2-67.6 4.8-45.9-35.8-42.8-63.3-31 22-72.1 64.1-107.1 126.2-105.1 45.8 1.2 67.5 31.1 64.9 89.4z"})),tiktok:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},wp.element.createElement("path",{d:"M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"})),email:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},wp.element.createElement("path",{d:"M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"})),website:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512"},wp.element.createElement("path",{d:"M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"}))},zk=({attributes:ie})=>{let{id:e,members:X,layout:o,alignment:P,animation:n,anchor:te,customClasses:l,showName:_,showPosition:v,showBio:M,showSocial:N}=ie,m=`digiblocks-team-block ${e} layout-${o} align-${P} ${n!=="none"?`animate-${n}`:""} ${l||""}`,s=Nk.save({className:m,id:te||null}),$=()=>X.map(I=>wp.element.createElement("div",{key:I.id,className:"digiblocks-team-member"},_&&I.image&&I.image.url&&wp.element.createElement("div",{className:"digiblocks-team-member-image"},wp.element.createElement("img",{src:I.image.url,alt:I.image.alt||I.name})),wp.element.createElement("div",{className:"digiblocks-team-member-content"},_&&wp.element.createElement(Sr.Content,{tagName:"h3",className:"digiblocks-team-member-name",value:I.name}),v&&wp.element.createElement(Sr.Content,{tagName:"div",className:"digiblocks-team-member-position",value:I.position}),M&&wp.element.createElement(Sr.Content,{tagName:"div",className:"digiblocks-team-member-bio",value:I.bio}),N&&I.socials&&I.socials.length>0&&wp.element.createElement("div",{className:"digiblocks-team-member-social"},I.socials.map(C=>{let k=Hk[C.network];return wp.element.createElement("a",{key:C.id,href:C.url,className:"digiblocks-team-member-social-icon",rel:"noopener noreferrer",target:"_blank","aria-label":C.network},k)})))));return wp.element.createElement("div",{...s},wp.element.createElement("div",{className:"digiblocks-team-container"},$()))},$g=zk;var{__:$o}=window.wp.i18n,{registerBlockType:Mk}=window.wp.blocks,{getBlockActiveStatus:Dk}=window.wp.digiBlocks;Mk("digiblocks/team",{apiVersion:2,title:digiBlocksData.blocks.team.title,category:"digiblocks",icon:{src:()=>{let{viewbox:ie,path:e}=digiBlocksData.blocks.team.icon;return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${ie}`,className:"digiblocks-editor-icons"},wp.element.createElement("path",{d:e}))}},description:digiBlocksData.blocks.team.description,keywords:[$o("team","digiblocks"),$o("members","digiblocks"),$o("staff","digiblocks"),$o("people","digiblocks")],supports:{inserter:!!Dk("team"),html:!1,className:!1,customClassName:!1,anchor:!1},attributes:{id:{type:"string",default:""},anchor:{type:"string",default:""},visibility:{type:"object",default:{desktop:!1,tablet:!1,mobile:!1}},customClasses:{type:"string",default:""},members:{type:"array",default:[{id:"team-member-1",name:$o("John Doe","digiblocks"),position:$o("CEO & Founder","digiblocks"),bio:$o("John has over 15 years of experience in the industry and leads our team with vision and expertise.","digiblocks"),image:{url:"",id:"",alt:""},socials:[{id:"social-1",network:"facebook",url:"https://facebook.com"},{id:"social-2",network:"twitter",url:"https://twitter.com"}]},{id:"team-member-2",name:$o("Jane Smith","digiblocks"),position:$o("Creative Director","digiblocks"),bio:$o("Jane brings creativity and innovation to every project with her background in design and marketing.","digiblocks"),image:{url:"",id:"",alt:""},socials:[{id:"social-3",network:"linkedin",url:"https://linkedin.com"},{id:"social-4",network:"instagram",url:"https://instagram.com"}]},{id:"team-member-3",name:$o("Mike Johnson","digiblocks"),position:$o("Lead Developer","digiblocks"),bio:$o("Mike is our technical expert, specializing in cutting-edge technologies and solving complex problems.","digiblocks"),image:{url:"",id:"",alt:""},socials:[{id:"social-5",network:"github",url:"https://github.com"},{id:"social-6",network:"dribbble",url:"https://dribbble.com"}]}]},columns:{type:"object",default:{desktop:3,tablet:2,mobile:1}},gutter:{type:"object",default:{desktop:30,tablet:20,mobile:15}},layout:{type:"string",default:"grid"},alignment:{type:"string",default:"center"},imageStyle:{type:"string",default:"circle"},imageSize:{type:"object",default:{desktop:150,tablet:120,mobile:100}},imageBorderRadius:{type:"object",default:{desktop:{top:8,right:8,bottom:8,left:8,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},imageBorderWidth:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},imageBorderColor:{type:"string",default:"#e0e0e0"},imageBorderStyle:{type:"string",default:"none"},typography:{type:"object",default:{fontFamily:"",fontSize:{desktop:22,tablet:20,mobile:18},fontSizeUnit:"px",fontWeight:"600",fontStyle:"normal",textTransform:"none",textDecoration:"none",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}},textTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",fontWeight:"400",fontStyle:"normal",textTransform:"none",textDecoration:"none",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}},contentTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",fontWeight:"400",fontStyle:"normal",textTransform:"none",textDecoration:"none",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}},nameColor:{type:"string",default:"#333333"},positionColor:{type:"string",default:"#666666"},bioColor:{type:"string",default:"#666666"},iconColor:{type:"string",default:"#1e73be"},iconHoverColor:{type:"string",default:"#135e9e"},iconSize:{type:"object",default:{desktop:20,tablet:18,mobile:16}},iconSpacing:{type:"object",default:{desktop:10,tablet:8,mobile:6}},iconBackgroundColor:{type:"string",default:"transparent"},iconBackgroundHoverColor:{type:"string",default:""},iconBorderRadius:{type:"object",default:{desktop:{top:50,right:50,bottom:50,left:50,unit:"%"},tablet:{top:"",right:"",bottom:"",left:"",unit:"%"},mobile:{top:"",right:"",bottom:"",left:50,unit:"%"}}},iconPadding:{type:"object",default:{desktop:{top:8,right:8,bottom:8,left:8,unit:"px"},tablet:{top:6,right:6,bottom:6,left:6,unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},boxBackgroundColor:{type:"string",default:"#ffffff"},boxBorderColor:{type:"string",default:"#e0e0e0"},boxBorderRadius:{type:"object",default:{desktop:{top:8,right:8,bottom:8,left:8,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},boxBorderWidth:{type:"object",default:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},boxBorderStyle:{type:"string",default:"solid"},boxPadding:{type:"object",default:{desktop:{top:30,right:30,bottom:30,left:30,unit:"px"},tablet:{top:25,right:25,bottom:25,left:25,unit:"px"},mobile:{top:20,right:20,bottom:20,left:20,unit:"px"}}},boxMargin:{type:"object",default:{desktop:{top:0,right:0,bottom:30,left:0,unit:"px"},tablet:{top:0,right:0,bottom:25,left:0,unit:"px"},mobile:{top:0,right:0,bottom:20,left:0,unit:"px"}}},boxShadow:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.1)",horizontal:0,vertical:5,blur:15,spread:0,position:"outset"}},boxShadowHover:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:10,blur:25,spread:0,position:"outset"}},animation:{type:"string",default:"none"},showName:{type:"boolean",default:!0},showPosition:{type:"boolean",default:!0},showBio:{type:"boolean",default:!0},showSocial:{type:"boolean",default:!0}},example:{attributes:{members:[{id:"team-member-1",name:$o("John Doe","digiblocks"),position:$o("CEO & Founder","digiblocks"),bio:$o("John has over 15 years of experience in the industry.","digiblocks"),socials:[{id:"social-1",network:"facebook",url:"https://facebook.com"},{id:"social-2",network:"twitter",url:"https://twitter.com"}]},{id:"team-member-2",name:$o("Jane Smith","digiblocks"),position:$o("Creative Director","digiblocks"),bio:$o("Jane brings creativity to every project.","digiblocks"),socials:[{id:"social-3",network:"linkedin",url:"https://linkedin.com"}]}],columns:{desktop:2,tablet:2,mobile:1}}},edit:Sg,save:$g});var{__:Ae}=window.wp.i18n,{useBlockProps:Pk,RichText:$r,InspectorControls:Rk,PanelColorSettings:_r,MediaUpload:Ik,MediaUploadCheck:Lk}=window.wp.blockEditor,{BaseControl:Ok,SelectControl:_g,RangeControl:dn,ToggleControl:Al,Button:ui,TabPanel:Uk,Tooltip:gn,__experimentalToggleGroupControl:jk,__experimentalToggleGroupControlOption:Br}=window.wp.components,{useState:Tr,useEffect:Nr,useRef:Vk}=window.wp.element,{useBlockId:Fk,getDimensionCSS:pn,animations:Hr,animationPreview:Bg}=digi.utils,{tabIcons:zr}=digi.icons,{ResponsiveControl:jt,DimensionControl:bn,TypographyControl:Mr,BoxShadowControl:Ek,CustomTabPanel:Wk,TabPanelBody:bt}=digi.components,qk=({attributes:ie,setAttributes:e,clientId:X})=>{let{id:o,anchor:P,visibility:n,customClasses:te,testimonials:l,columns:_,nameColor:v,nameHoverColor:M,positionColor:N,contentColor:m,backgroundColor:s,backgroundHoverColor:$,quoteIconColor:I,ratingColor:C,borderStyle:k,borderWidth:B,borderRadius:O,borderColor:T,boxShadow:V,boxShadowHover:Z,padding:ee,margin:E,contentTypography:f,headingTypography:b,textTypography:D,imageSize:le,quoteIconSize:We,showRating:Se,showQuoteIcon:K,animation:L,align:oe,itemSpacing:q}=ie;Fk(o,X,e);let[J,A]=Tr(()=>{if(window.digi.uiState){let g=window.digi.uiState.getActiveTab(X);if(g)return g}return"options"}),[re,se]=Tr(window.digi.responsiveState.activeDevice),[Ce,Y]=Tr(!1);Nr(()=>window.digi.responsiveState.subscribe(Q=>{se(Q)}),[]),Nr(()=>{if(l&&l.length>0){let g=l.map((Q,c)=>Q.id?Q:{...Q,id:`testimonial-${X.substr(0,8)}-${c}`});JSON.stringify(g)!==JSON.stringify(l)&&e({testimonials:g})}},[X,l,e]);let de=Vk(null);Nr(()=>{if(L&&L!=="none"){let g=setTimeout(()=>{Bg(o,L,Hr,de)},100);return()=>clearTimeout(g)}},[L]);let He=()=>{Bg(o,L,Hr,de)},be=[{label:Ae("Default","digiblocks"),value:"default"},{label:Ae("None","digiblocks"),value:"none"},{label:Ae("Solid","digiblocks"),value:"solid"},{label:Ae("Dotted","digiblocks"),value:"dotted"},{label:Ae("Dashed","digiblocks"),value:"dashed"},{label:Ae("Double","digiblocks"),value:"double"},{label:Ae("Groove","digiblocks"),value:"groove"},{label:Ae("Inset","digiblocks"),value:"inset"},{label:Ae("Outset","digiblocks"),value:"outset"},{label:Ae("Ridge","digiblocks"),value:"ridge"}],H=[{label:Ae("None","digiblocks"),value:"none"},...Object.keys(Hr).map(g=>({label:g.replace(/-/g," ").replace(/\b\w/g,Q=>Q.toUpperCase()),value:g}))],xe=[{name:"options",title:Ae("Options","digiblocks"),icon:zr.optionsIcon},{name:"style",title:Ae("Style","digiblocks"),icon:zr.styleIcon},{name:"advanced",title:Ae("Advanced","digiblocks"),icon:zr.advancedIcon}],x=[{name:"normal",title:Ae("Normal","digiblocks"),className:"digiblocks-tab-1 normal"},{name:"hover",title:Ae("Hover","digiblocks"),className:"digiblocks-tab-2 hover"}],ve=()=>{let g=l.length,Q={id:`testimonial-${X.substr(0,8)}-${g}`,name:Ae("New Name","digiblocks"),position:Ae("Position","digiblocks"),company:Ae("Company","digiblocks"),content:Ae("Add your testimonial content here...","digiblocks"),imageUrl:"",imageId:"",rating:5};e({testimonials:[...l,Q]})},U=g=>{let Q=[...l];Q.splice(g,1),e({testimonials:Q})},me=g=>{let Q=l[g],c=Date.now(),ae={...Q,id:`testimonial-${X.substr(0,8)}-${c}`},y=[...l];y.splice(g+1,0,ae),e({testimonials:y})},Te=g=>{if(g===0)return;let Q=[...l],c=Q[g];Q.splice(g,1),Q.splice(g-1,0,c),e({testimonials:Q})},qe=g=>{if(g===l.length-1)return;let Q=[...l],c=Q[g];Q.splice(g,1),Q.splice(g+1,0,c),e({testimonials:Q})},Ve=(g,Q)=>{let c=[...l];c[Q].name=g,e({testimonials:c})},Ee=(g,Q)=>{let c=[...l];c[Q].position=g,e({testimonials:c})},Oe=(g,Q)=>{let c=[...l];c[Q].company=g,e({testimonials:c})},j=(g,Q)=>{let c=[...l];c[Q].content=g,e({testimonials:c})},ye=(g,Q)=>{let c=[...l];c[Q].rating=g,e({testimonials:c})},Je=(g,Q)=>{let c=[...l];c[Q].imageUrl=g.url,c[Q].imageId=g.id,e({testimonials:c})},G=g=>{let Q=[];for(let c=1;c<=5;c++)Q.push(wp.element.createElement("span",{key:c,className:`digiblocks-rating-star ${c<=g?"filled":""}`,style:{color:c<=g?C:"#e0e0e0"}},wp.element.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor"},wp.element.createElement("path",{d:"M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327l4.898.696c.441.062.612.636.282.95l-3.522 3.356l.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"}))));return Q},pe=()=>{let g=window.digi.responsiveState.activeDevice,Q="";k&&k!=="default"&&k!=="none"?Q=`
                border-style: ${k};
                border-color: ${T||"#e0e0e0"};
				${pn(B,"border-width",g)}
				${pn(O,"border-radius",g)}
            `:Q="border: none;";let c="box-shadow: none;";V&&V.enable&&(c=`box-shadow: ${V.position==="inset"?"inset ":""}${V.horizontal}px ${V.vertical}px ${V.blur}px ${V.spread}px ${V.color};`);let ae=`${pn(ee,"padding",g)}`,y=`${pn(E,"margin",g)}`,u="";f&&(f.fontFamily&&(u+=`font-family: ${f.fontFamily};`),f.fontSize&&f.fontSize[g]&&(u+=`font-size: ${f.fontSize[g]}${f.fontSizeUnit||"px"};`),f.fontWeight&&(u+=`font-weight: ${f.fontWeight};`),f.fontStyle&&(u+=`font-style: ${f.fontStyle};`),f.textTransform&&(u+=`text-transform: ${f.textTransform};`),f.textDecoration&&(u+=`text-decoration: ${f.textDecoration};`),f.lineHeight&&f.lineHeight[g]&&(u+=`line-height: ${f.lineHeight[g]}${f.lineHeightUnit||"em"};`),f.letterSpacing&&f.letterSpacing[g]&&(u+=`letter-spacing: ${f.letterSpacing[g]}${f.letterSpacingUnit||"px"};`));let Ne="";b&&(b.fontFamily&&(Ne+=`font-family: ${b.fontFamily};`),b.fontSize&&b.fontSize[g]&&(Ne+=`font-size: ${b.fontSize[g]}${b.fontSizeUnit||"px"};`),b.fontWeight&&(Ne+=`font-weight: ${b.fontWeight};`),b.fontStyle&&(Ne+=`font-style: ${b.fontStyle};`),b.textTransform&&(Ne+=`text-transform: ${b.textTransform};`),b.textDecoration&&(Ne+=`text-decoration: ${b.textDecoration};`),b.lineHeight&&b.lineHeight[g]&&(Ne+=`line-height: ${b.lineHeight[g]}${b.lineHeightUnit||"em"};`),b.letterSpacing&&b.letterSpacing[g]&&(Ne+=`letter-spacing: ${b.letterSpacing[g]}${b.letterSpacingUnit||"px"};`));let a="";D&&(D.fontFamily&&(a+=`font-family: ${D.fontFamily};`),D.fontSize&&D.fontSize[g]&&(a+=`font-size: ${D.fontSize[g]}${D.fontSizeUnit||"px"};`),D.fontWeight&&(a+=`font-weight: ${D.fontWeight};`),D.fontStyle&&(a+=`font-style: ${D.fontStyle};`),D.textTransform&&(a+=`text-transform: ${D.textTransform};`),D.textDecoration&&(a+=`text-decoration: ${D.textDecoration};`),D.lineHeight&&D.lineHeight[g]&&(a+=`line-height: ${D.lineHeight[g]}${D.lineHeightUnit||"em"};`),D.letterSpacing&&D.letterSpacing[g]&&(a+=`letter-spacing: ${D.letterSpacing[g]}${D.letterSpacingUnit||"px"};`));let ue="";if(Z&&Z.enable){let ao=Z.position==="inset"?"inset ":"";ue+=`box-shadow: ${ao}${Z.horizontal}px ${Z.vertical}px ${Z.blur}px ${Z.spread}px ${Z.color};`}let Fe=_[g]||2,eo=q[g]||30;return`
            /* Testimonials Block - ${o} */
            .${o} {
                position: relative;
                width: 100%;
            }

			.${o} .digiblocks-testimonials-grid {
				display: grid;
				grid-template-columns: repeat(${Fe}, 1fr);
				gap: ${eo}px;
			}
            
            .${o} .digiblocks-testimonial-content {
				display: flex;
				flex-direction: column;
				gap: 1rem;
                ${ae}
                ${y}
                ${Q}
                ${c}
                background-color: ${s||"transparent"};
                transition: all 0.3s ease;
                position: relative;
				text-align: ${oe};
            }
            
            .${o} .digiblocks-testimonial-content:hover {
                ${$?`background-color: ${$};`:""}
                ${ue}
            }
            
            ${K?`
            .${o} .digiblocks-testimonial-quote-icon {
                position: absolute;
                top: 6px;
                left: 10px;
                color: ${I};
                opacity: 0.3;
                line-height: 1;
            }

            .${o} .digiblocks-testimonial-quote-icon svg {
                width: ${We[g]}px;
				height: ${We[g]}px;
            }
            `:""}
            
            .${o} .digiblocks-testimonial-text {
                ${u}
                color: ${m};
                margin: 0;
				position: relative;
				z-index: 1;
            }
            
            .${o} .digiblocks-testimonial-author {
                display: flex;
                align-items: center;
                gap: 15px;
				justify-content: ${oe==="center"?"center":"flex-start"};
				${oe==="center"?"flex-direction: column;":""}
				${oe==="right"?"flex-direction: row-reverse;":""}
				position: relative;
				z-index: 1;
            }
            
            .${o} .digiblocks-testimonial-image {
                width: ${le[g]}px;
                height: ${le[g]}px;
                border-radius: 50%;
                object-fit: cover;
                background: ${I};
                flex-shrink: 0;
            }
            
            .${o} .digiblocks-testimonial-name {
                ${Ne}
                color: ${v};
                margin: 0;
                transition: color 0.3s ease;
            }
            
            .${o} .digiblocks-testimonial-content:hover .digiblocks-testimonial-name {
                ${M?`color: ${M};`:""}
            }
            
            .${o} .digiblocks-testimonial-position {
                ${a}
                color: ${N};
                margin: 5px 0 0 0;
            }
            
            ${Se?`
            .${o} .digiblocks-testimonial-rating {
                display: flex;
				align-items: center;
				gap: 2px;
				justify-content: ${oe==="center"?"center":oe==="right"?"flex-end":"flex-start"};
				position: relative;
				z-index: 1;
            }
            
            .${o} .digiblocks-rating-star {
                font-size: 16px;
            }
            `:""}
            
            /* Editor-specific styles */
            .${o} .digiblocks-testimonial-item-controls {
                display: flex;
                gap: 5px;
                position: absolute;
                right: 10px;
                top: -28px;
                background-color: #fff;
                padding: 2px;
                border-radius: 3px;
                box-shadow: 0 1px 3px rgba(0,0,0,0.12);
                z-index: 10;
            }

			.${o} .digiblocks-image-button {
				position: relative;
				height: auto;
				padding: 0;
			}

			.${o} .digiblocks-image-button span {
				position: absolute;
			}

			/* Visibility Controls */
			${n.desktop?`
				@media (min-width: 992px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${n.tablet?`
				@media (min-width: 768px) and (max-width: 991px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${n.mobile?`
				@media (max-width: 767px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}
        `},R=()=>{switch(J){case"options":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(bt,{tab:"options",name:"layouts",title:Ae("Layout","digiblocks"),initialOpen:!0},wp.element.createElement(jt,{label:Ae("Columns","digiblocks")},wp.element.createElement(dn,{value:_[re],onChange:g=>e({columns:{..._,[re]:g}}),min:1,max:5,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(jt,{label:Ae("Item Spacing","digiblocks")},wp.element.createElement(dn,{value:q[re],onChange:g=>e({itemSpacing:{...q,[re]:g}}),min:0,max:100,step:5,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(Ok,{label:Ae("Alignment","digiblocks"),__nextHasNoMarginBottom:!0},wp.element.createElement(jk,{value:oe,onChange:g=>e({align:g}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(Br,{value:"left",label:Ae("Left","digiblocks"),"aria-label":Ae("Left alignment","digiblocks")}),wp.element.createElement(Br,{value:"center",label:Ae("Center","digiblocks"),"aria-label":Ae("Center alignment","digiblocks")}),wp.element.createElement(Br,{value:"right",label:Ae("Right","digiblocks"),"aria-label":Ae("Right alignment","digiblocks")})))),wp.element.createElement(bt,{tab:"options",name:"testimonial-items",title:Ae("Testimonials","digiblocks"),initialOpen:!1},wp.element.createElement(Al,{label:Ae("Show Ratings","digiblocks"),checked:Se,onChange:()=>e({showRating:!Se}),__nextHasNoMarginBottom:!0}),wp.element.createElement(Al,{label:Ae("Show Quote Icon","digiblocks"),checked:K,onChange:()=>e({showQuoteIcon:!K}),__nextHasNoMarginBottom:!0})));case"style":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(bt,{tab:"style",name:"colors",title:Ae("Colors","digiblocks"),initialOpen:!0},wp.element.createElement(Uk,{className:"digiblocks-control-tabs",activeClass:"active-tab",tabs:x},g=>g.name==="normal"?wp.element.createElement(_r,{title:Ae("Color Settings","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:v,onChange:Q=>e({nameColor:Q}),label:Ae("Name Color","digiblocks")},{value:N,onChange:Q=>e({positionColor:Q}),label:Ae("Position Color","digiblocks")},{value:m,onChange:Q=>e({contentColor:Q}),label:Ae("Content Color","digiblocks")},{value:s,onChange:Q=>e({backgroundColor:Q}),label:Ae("Background Color","digiblocks")},{value:I,onChange:Q=>e({quoteIconColor:Q}),label:Ae("Quote Icon Color","digiblocks")},{value:C,onChange:Q=>e({ratingColor:Q}),label:Ae("Rating Color","digiblocks")}]}):g.name==="hover"?wp.element.createElement(_r,{title:Ae("Hover Color Settings","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:M,onChange:Q=>e({nameHoverColor:Q}),label:Ae("Name Color","digiblocks")},{value:$,onChange:Q=>e({backgroundHoverColor:Q}),label:Ae("Background Color","digiblocks")}]}):null)),wp.element.createElement(bt,{tab:"style",name:"typography",title:Ae("Typography","digiblocks"),initialOpen:!1},wp.element.createElement(Mr,{label:Ae("Content Typography","digiblocks"),value:f,onChange:g=>e({contentTypography:g}),defaults:{fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",lineHeight:{desktop:1.7,tablet:1.6,mobile:1.5},lineHeightUnit:"em"}}),wp.element.createElement(Mr,{label:Ae("Name Typography","digiblocks"),value:b,onChange:g=>e({headingTypography:g}),defaults:{fontSize:{desktop:20,tablet:18,mobile:16},fontSizeUnit:"px",lineHeight:{desktop:1.3,tablet:1.3,mobile:1.3},lineHeightUnit:"em"}}),wp.element.createElement(Mr,{label:Ae("Position Typography","digiblocks"),value:D,onChange:g=>e({textTypography:g}),defaults:{fontSize:{desktop:14,tablet:13,mobile:12},fontSizeUnit:"px",lineHeight:{desktop:1.4,tablet:1.4,mobile:1.4},lineHeightUnit:"em"}})),wp.element.createElement(bt,{tab:"style",name:"sizes",title:Ae("Sizes & Spacing","digiblocks"),initialOpen:!1},wp.element.createElement(jt,{label:Ae("Image Size","digiblocks")},wp.element.createElement(dn,{value:le[re],onChange:g=>e({imageSize:{...le,[re]:g}}),min:32,max:200,step:4,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(jt,{label:Ae("Quote Icon Size","digiblocks")},wp.element.createElement(dn,{value:We[re],onChange:g=>e({quoteIconSize:{...We,[re]:g}}),min:20,max:200,step:5,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}))),wp.element.createElement(bt,{tab:"style",name:"border-shadow",title:Ae("Border & Shadow","digiblocks"),initialOpen:!1},wp.element.createElement(_g,{label:Ae("Border Style","digiblocks"),value:k||"default",options:be,onChange:g=>{g!=="default"&&g!=="none"&&(k==="default"||k==="none"||!k)&&((!B||Object.keys(B).length===0)&&e({borderWidth:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}}),(!O||Object.keys(O).length===0)&&e({borderRadius:{desktop:{top:12,right:12,bottom:12,left:12,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}})),e({borderStyle:g})},__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),k&&k!=="default"&&k!=="none"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(_r,{title:Ae("Border Color","digiblocks"),enableAlpha:!0,colorSettings:[{value:T,onChange:g=>e({borderColor:g}),label:Ae("Border Color","digiblocks")}]}),wp.element.createElement(jt,{label:Ae("Border Width","digiblocks")},wp.element.createElement(bn,{values:B[re],onChange:g=>e({borderWidth:{...B,[re]:g}})})),wp.element.createElement(jt,{label:Ae("Border Radius","digiblocks")},wp.element.createElement(bn,{values:O[re],onChange:g=>e({borderRadius:{...O,[re]:g}}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]}))),wp.element.createElement(Ek,{normalValue:V,hoverValue:Z,onNormalChange:g=>e({boxShadow:g}),onHoverChange:g=>e({boxShadowHover:g})})),wp.element.createElement(bt,{tab:"style",name:"spacing",title:Ae("Spacing","digiblocks"),initialOpen:!1},wp.element.createElement(jt,{label:Ae("Padding","digiblocks")},wp.element.createElement(bn,{values:ee[re],onChange:g=>e({padding:{...ee,[re]:g}})})),wp.element.createElement(jt,{label:Ae("Margin","digiblocks")},wp.element.createElement(bn,{values:E[re],onChange:g=>e({margin:{...E,[re]:g}})}))));case"advanced":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(bt,{tab:"advanced",name:"animation",title:Ae("Animation","digiblocks"),initialOpen:!0},wp.element.createElement(_g,{label:Ae("Animation Effect","digiblocks"),value:L,options:H,onChange:g=>e({animation:g}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),L&&L!=="none"&&wp.element.createElement("div",{style:{marginTop:"10px"}},wp.element.createElement(ui,{variant:"secondary",isSecondary:!0,onClick:He,style:{width:"100%"}},Ae("Preview Animation","digiblocks")))),wp.element.createElement(bt,{tab:"advanced",name:"visibility",title:Ae("Visibility","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control__help",style:{padding:"12px",backgroundColor:"#f0f6fc",border:"1px solid #c3ddfd",borderRadius:"4px",marginBottom:"16px"}},wp.element.createElement("strong",null,Ae("Editor Note:","digiblocks")),wp.element.createElement("br",null),Ae("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.","digiblocks")),wp.element.createElement(Al,{label:Ae("Hide on Desktop","digiblocks"),checked:n.desktop,onChange:g=>e({visibility:{...n,desktop:g}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(Al,{label:Ae("Hide on Tablet","digiblocks"),checked:n.tablet,onChange:g=>e({visibility:{...n,tablet:g}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(Al,{label:Ae("Hide on Mobile","digiblocks"),checked:n.mobile,onChange:g=>e({visibility:{...n,mobile:g}}),__nextHasNoMarginBottom:!0})),wp.element.createElement(bt,{tab:"advanced",name:"additional",title:Ae("Additional","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control html-anchor-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"html-anchor"},Ae("HTML anchor","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"html-anchor",value:P||"",onChange:g=>e({anchor:g.target.value}),"aria-describedby":"html-anchor-help",autoCapitalize:"none",autoComplete:"off"})),wp.element.createElement("p",{id:"html-anchor-help",className:"components-base-control__help"},Ae(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`,"digiblocks")," ",wp.element.createElement("a",{className:"components-external-link",href:"https://wordpress.org/documentation/article/page-jumps/",target:"_blank",rel:"external noreferrer noopener"},wp.element.createElement("span",{className:"components-external-link__contents"},Ae("Learn more about anchors","digiblocks")),wp.element.createElement("span",{className:"components-external-link__icon","aria-label":"(opens in a new tab)"},"\u2197")))),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"additional-css-classes"},Ae("Additional CSS class(es)","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"additional-css-classes",value:te||"",onChange:g=>e({customClasses:g.target.value}),"aria-describedby":"additional-css-classes-help",autoComplete:"off"})),wp.element.createElement("p",{id:"additional-css-classes-help",className:"components-base-control__help"},Ae("Separate multiple classes with spaces.","digiblocks")))));default:return null}},d=(g,Q)=>wp.element.createElement("div",{key:g.id,className:"digiblocks-testimonial-item"},wp.element.createElement("div",{className:"digiblocks-testimonial-content"},K&&wp.element.createElement("div",{className:"digiblocks-testimonial-quote-icon"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",fill:"currentColor"},wp.element.createElement("path",{d:"m54.75 61.7309799v-2.3699951c0-21.9786606 16.2715454-39.8894348 37.5211639-42.4388428 2.7931672-.3351097 5.2288361 1.917471 5.2288361 4.7306748v.0000095c0 2.4273148-1.8343735 4.4202805-4.2426605 4.7236137-7.4862671.9429264-14.1913986 4.3405972-19.203804 9.2676563-1.7802734 1.7499619-.5009689 4.7270927 1.9953613 4.7170334.0236969-.0000954.0474014-.000145.0710983-.000145 12.2492294 0 21.9682159 10.0996895 21.3522568 22.4834023-.538559 10.8274422-9.4114075 19.7002907-20.2388535 20.2388496-12.3837051.6159593-22.4833984-9.1030272-22.4833984-21.3522567z"}),wp.element.createElement("path",{d:"m2.5000021 61.2574081.000001-1.8964233c0-21.9786606 16.2715454-39.8894348 37.5211601-42.4388428 2.7931755-.3351097 5.2288368 1.917471 5.2288368 4.7306748v.0003147c0 2.4272079-1.8342209 4.4199734-4.2423592 4.7236252-7.481739.9434032-14.1888084 4.3410473-19.1987572 9.2678051-1.779623 1.7500687-.500473 4.7271957 1.9954643 4.7165833.025219-.0001068.0504398-.0001602.0756588-.0001602 11.8699932 0 21.3699932 9.5 21.3699932 21.3699951 0 12.0883865-9.8361855 21.7125397-21.996748 21.3711853-11.6399678-.3267442-20.7532557-10.200203-20.7532498-21.8447572z"}))),Se&&wp.element.createElement("div",{className:"digiblocks-testimonial-rating"},G(g.rating)),wp.element.createElement($r,{tagName:"p",className:"digiblocks-testimonial-text",value:g.content,onChange:c=>j(c,Q),placeholder:Ae("Enter testimonial content...","digiblocks"),allowedFormats:["core/bold","core/italic","core/link"]}),wp.element.createElement("div",{className:"digiblocks-testimonial-author"},wp.element.createElement(Lk,null,wp.element.createElement(Ik,{onSelect:c=>Je(c,Q),allowedTypes:["image"],value:g.imageId,render:({open:c})=>wp.element.createElement(ui,{className:`digiblocks-image-button ${g.imageUrl?"":"empty"}`,onClick:c,icon:g.imageUrl?"":"format-image"},g.imageUrl?wp.element.createElement("img",{src:g.imageUrl,alt:g.name,className:"digiblocks-testimonial-image"}):wp.element.createElement("div",{className:"digiblocks-testimonial-image",style:{background:I}}))})),wp.element.createElement("div",{className:"digiblocks-testimonial-info"},wp.element.createElement($r,{tagName:"h3",className:"digiblocks-testimonial-name",value:g.name,onChange:c=>Ve(c,Q),placeholder:Ae("Testimonial Name","digiblocks"),allowedFormats:["core/bold","core/italic"]}),wp.element.createElement($r,{tagName:"p",className:"digiblocks-testimonial-position",value:g.position+(g.company?`, ${g.company}`:""),onChange:c=>{let ae=c.split(",");Ee(ae[0].trim(),Q),ae[1]&&Oe(ae[1].trim(),Q)},placeholder:Ae("Position, Company","digiblocks"),allowedFormats:["core/bold","core/italic"]}))),wp.element.createElement("div",{className:"digiblocks-testimonial-item-controls"},wp.element.createElement(gn,{text:Ae("Move Up","digiblocks")},wp.element.createElement(ui,{className:"digiblocks-testimonial-item-move-up",onClick:()=>Te(Q),icon:"arrow-up-alt2",disabled:Q===0,isSmall:!0})),wp.element.createElement(gn,{text:Ae("Move Down","digiblocks")},wp.element.createElement(ui,{className:"digiblocks-testimonial-item-move-down",onClick:()=>qe(Q),icon:"arrow-down-alt2",disabled:Q===l.length-1,isSmall:!0})),wp.element.createElement(gn,{text:Ae("Duplicate","digiblocks")},wp.element.createElement(ui,{className:"digiblocks-testimonial-item-duplicate",onClick:()=>me(Q),icon:"admin-page",isSmall:!0})),wp.element.createElement(gn,{text:Ae("Remove","digiblocks")},wp.element.createElement(ui,{className:"digiblocks-testimonial-item-remove",onClick:()=>U(Q),icon:"trash",isSmall:!0}))))),ce=()=>!l||l.length===0?wp.element.createElement("div",{className:"digiblocks-no-testimonials"},wp.element.createElement("p",null,Ae("No testimonials found. Please add some testimonials.","digiblocks"))):l.map((g,Q)=>d(g,Q)),S=Pk({className:`digiblocks-testimonials-block ${o} grid ${te||""}`,id:P||null});return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Rk,null,wp.element.createElement(Wk,{tabs:xe,activeTab:J,onSelect:A},R())),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:pe()}}),wp.element.createElement("div",{...S},wp.element.createElement("div",{className:"digiblocks-testimonials-grid"},ce()),wp.element.createElement(ui,{variant:"primary",icon:"plus",onClick:ve,style:{width:"100%",marginTop:"40px",justifyContent:"center"}},Ae("Add Testimonial","digiblocks"))))},Tg=qk;var{useBlockProps:Gk,RichText:Dr}=window.wp.blockEditor,Qk=({attributes:ie})=>{let{id:e,anchor:X,customClasses:o,testimonials:P,showRating:n,showQuoteIcon:te,animation:l,columns:_,autoplay:v,autoplaySpeed:M,showArrows:N,showDots:m,ratingColor:s}=ie,$=["digiblocks-testimonials-block",e,"grid",l!=="none"?`animate-${l}`:"",o||""].filter(Boolean).join(" "),I=Gk.save({className:$,id:X||null}),C=B=>{let O=[];for(let T=1;T<=5;T++)O.push(wp.element.createElement("span",{key:T,className:`digiblocks-rating-star ${T<=B?"filled":""}`,style:{color:T<=B?s:"#e0e0e0"}},wp.element.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor"},wp.element.createElement("path",{d:"M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327l4.898.696c.441.062.612.636.282.95l-3.522 3.356l.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"}))));return O},k=()=>!P||P.length===0?null:P.map(B=>wp.element.createElement("div",{key:B.id,className:"digiblocks-testimonial-item"},wp.element.createElement("div",{className:"digiblocks-testimonial-content"},te&&wp.element.createElement("div",{className:"digiblocks-testimonial-quote-icon"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",fill:"currentColor"},wp.element.createElement("path",{d:"m54.75 61.7309799v-2.3699951c0-21.9786606 16.2715454-39.8894348 37.5211639-42.4388428 2.7931672-.3351097 5.2288361 1.917471 5.2288361 4.7306748v.0000095c0 2.4273148-1.8343735 4.4202805-4.2426605 4.7236137-7.4862671.9429264-14.1913986 4.3405972-19.203804 9.2676563-1.7802734 1.7499619-.5009689 4.7270927 1.9953613 4.7170334.0236969-.0000954.0474014-.000145.0710983-.000145 12.2492294 0 21.9682159 10.0996895 21.3522568 22.4834023-.538559 10.8274422-9.4114075 19.7002907-20.2388535 20.2388496-12.3837051.6159593-22.4833984-9.1030272-22.4833984-21.3522567z"}),wp.element.createElement("path",{d:"m2.5000021 61.2574081.000001-1.8964233c0-21.9786606 16.2715454-39.8894348 37.5211601-42.4388428 2.7931755-.3351097 5.2288368 1.917471 5.2288368 4.7306748v.0003147c0 2.4272079-1.8342209 4.4199734-4.2423592 4.7236252-7.481739.9434032-14.1888084 4.3410473-19.1987572 9.2678051-1.779623 1.7500687-.500473 4.7271957 1.9954643 4.7165833.025219-.0001068.0504398-.0001602.0756588-.0001602 11.8699932 0 21.3699932 9.5 21.3699932 21.3699951 0 12.0883865-9.8361855 21.7125397-21.996748 21.3711853-11.6399678-.3267442-20.7532557-10.200203-20.7532498-21.8447572z"}))),n&&wp.element.createElement("div",{className:"digiblocks-testimonial-rating"},C(B.rating)),wp.element.createElement(Dr.Content,{tagName:"p",className:"digiblocks-testimonial-text",value:B.content}),wp.element.createElement("div",{className:"digiblocks-testimonial-author"},B.imageUrl&&wp.element.createElement("img",{src:B.imageUrl,alt:B.name,className:"digiblocks-testimonial-image"}),wp.element.createElement("div",{className:"digiblocks-testimonial-info"},wp.element.createElement(Dr.Content,{tagName:"h3",className:"digiblocks-testimonial-name",value:B.name}),wp.element.createElement(Dr.Content,{tagName:"p",className:"digiblocks-testimonial-position",value:B.position+(B.company?`, ${B.company}`:"")}))))));return wp.element.createElement("div",{...I},wp.element.createElement("div",{className:"digiblocks-testimonials-grid"},k()))},Ng=Qk;var{__:So}=window.wp.i18n,{registerBlockType:Jk}=window.wp.blocks,{getBlockActiveStatus:Yk}=window.wp.digiBlocks;Jk("digiblocks/testimonials",{apiVersion:2,title:digiBlocksData.blocks.testimonials.title,category:"digiblocks",icon:{src:()=>{let{viewbox:ie,path:e}=digiBlocksData.blocks.testimonials.icon;return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${ie}`,className:"digiblocks-editor-icons"},wp.element.createElement("path",{d:e}))}},description:digiBlocksData.blocks.testimonials.description,keywords:[So("testimonials","digiblocks"),So("reviews","digiblocks"),So("quotes","digiblocks"),So("testimonial","digiblocks")],supports:{inserter:!!Yk("testimonials"),html:!1,className:!1,customClassName:!1,anchor:!1},attributes:{id:{type:"string",default:""},anchor:{type:"string",default:""},visibility:{type:"object",default:{desktop:!1,tablet:!1,mobile:!1}},customClasses:{type:"string",default:""},testimonials:{type:"array",default:[{id:"testimonial-1",name:So("John Doe","digiblocks"),position:So("CEO","digiblocks"),company:So("Tech Innovations Inc.","digiblocks"),content:So("This product has completely transformed our business operations. The support team is incredibly responsive and helpful.","digiblocks"),imageUrl:"",imageId:"",rating:5},{id:"testimonial-2",name:So("Sarah Johnson","digiblocks"),position:So("Marketing Director","digiblocks"),company:So("Creative Solutions","digiblocks"),content:So("I cannot recommend this service enough. The quality and attention to detail exceeded our expectations.","digiblocks"),imageUrl:"",imageId:"",rating:5}]},columns:{type:"object",default:{desktop:2,tablet:2,mobile:1}},align:{type:"string",default:"left"},autoplay:{type:"boolean",default:!0},autoplaySpeed:{type:"number",default:3e3},showArrows:{type:"boolean",default:!0},showDots:{type:"boolean",default:!0},nameColor:{type:"string",default:"#333333"},nameHoverColor:{type:"string",default:""},positionColor:{type:"string",default:"#666666"},contentColor:{type:"string",default:"#444444"},backgroundColor:{type:"string",default:"#ffffff"},backgroundHoverColor:{type:"string",default:""},quoteIconColor:{type:"string",default:"#e0e0e0"},ratingColor:{type:"string",default:"#ffc107"},borderStyle:{type:"string",default:"default"},borderWidth:{type:"object",default:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderRadius:{type:"object",default:{desktop:{top:12,right:12,bottom:12,left:12,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderColor:{type:"string",default:"#e0e0e0"},boxShadow:{type:"object",default:{enable:!0,color:"rgba(0, 0, 0, 0.12)",horizontal:0,vertical:5,blur:15,spread:0,position:"outset"}},boxShadowHover:{type:"object",default:{enable:!0,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:10,blur:20,spread:0,position:"outset"}},padding:{type:"object",default:{desktop:{top:40,right:40,bottom:40,left:40,unit:"px"},tablet:{top:30,right:30,bottom:30,left:30,unit:"px"},mobile:{top:20,right:20,bottom:20,left:20,unit:"px"}}},margin:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},contentTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",fontWeight:"",fontStyle:"italic",textTransform:"",textDecoration:"",lineHeight:{desktop:1.7,tablet:1.6,mobile:1.5},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}},headingTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:20,tablet:18,mobile:16},fontSizeUnit:"px",fontWeight:"600",fontStyle:"normal",textTransform:"",textDecoration:"",lineHeight:{desktop:1.3,tablet:1.3,mobile:1.3},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}},textTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:14,tablet:13,mobile:12},fontSizeUnit:"px",fontWeight:"",fontStyle:"normal",textTransform:"",textDecoration:"",lineHeight:{desktop:1.4,tablet:1.4,mobile:1.4},lineHeightUnit:"em",letterSpacing:{desktop:.5,tablet:.5,mobile:.5},letterSpacingUnit:"px"}},imageSize:{type:"object",default:{desktop:64,tablet:56,mobile:48}},quoteIconSize:{type:"object",default:{desktop:80,tablet:50,mobile:30}},showRating:{type:"boolean",default:!0},showQuoteIcon:{type:"boolean",default:!0},animation:{type:"string",default:"none"},itemSpacing:{type:"object",default:{desktop:30,tablet:25,mobile:20}}},example:{attributes:{testimonials:[{id:"testimonial-1",name:So("John Doe","digiblocks"),position:So("CEO","digiblocks"),company:So("Tech Innovations Inc.","digiblocks"),content:So("This product has completely transformed our business operations. The support team is incredibly responsive and helpful.","digiblocks"),imageUrl:"",imageId:"",rating:5},{id:"testimonial-2",name:So("Charlotte Lebon","digiblocks"),position:So("Marketing","digiblocks"),company:So("Creative Solutions","digiblocks"),content:So("We've seen a 40% increase in customer engagement since implementing this solution. Highly recommended for any business.","digiblocks"),imageUrl:"",imageId:"",rating:5}],layout:"card",backgroundColor:"#ffffff"},viewportWidth:800},edit:Tg,save:Ng});var{__:so}=window.wp.i18n,{useBlockProps:Zk,RichText:Kk,InspectorControls:Xk,PanelColorSettings:Pr}=window.wp.blockEditor,{SelectControl:un,ToggleControl:Rr,Button:Ak,__experimentalToggleGroupControl:e1,__experimentalToggleGroupControlOption:Hg}=window.wp.components,{useState:zg,useEffect:Mg,useRef:o1}=window.wp.element,{useBlockId:t1,getDimensionCSS:mn,animations:Ir,animationPreview:Dg}=digi.utils,{tabIcons:Lr}=digi.icons,{ResponsiveControl:hn,DimensionControl:fn,TypographyControl:i1,BoxShadowControl:l1,CustomTabPanel:a1,TabPanelBody:Vt,ResponsiveButtonGroup:n1}=digi.components,s1=({attributes:ie,setAttributes:e,clientId:X})=>{let{id:o,anchor:P,visibility:n,customClasses:te,content:l,align:_,htmlTag:v,textColor:M,textHoverColor:N,backgroundColor:m,backgroundHoverColor:s,typography:$,padding:I,margin:C,animation:k,boxShadow:B,boxShadowHover:O,borderStyle:T,borderWidth:V,borderRadius:Z,borderColor:ee,borderHoverColor:E,backgroundGradient:f,textShadow:b,hoverEffect:D}=ie;t1(o,X,e);let[le,We]=zg(window.digi.responsiveState.activeDevice);Mg(()=>window.digi.responsiveState.subscribe(xe=>{We(xe)}),[]);let[Se,K]=zg(()=>{if(window.digi.uiState){let H=window.digi.uiState.getActiveTab(X);if(H)return H}return"options"}),L=o1(null);Mg(()=>{if(k&&k!=="none"){let H=setTimeout(()=>{Dg(o,k,Ir,L)},100);return()=>clearTimeout(H)}},[k]);let oe=()=>{Dg(o,k,Ir,L)},q=[{label:so("Paragraph","digiblocks"),value:"p"},{label:so("Span","digiblocks"),value:"span"},{label:so("Div","digiblocks"),value:"div"}],J=[{label:so("Default","digiblocks"),value:"default"},{label:so("None","digiblocks"),value:"none"},{label:so("Solid","digiblocks"),value:"solid"},{label:so("Dotted","digiblocks"),value:"dotted"},{label:so("Dashed","digiblocks"),value:"dashed"},{label:so("Double","digiblocks"),value:"double"},{label:so("Groove","digiblocks"),value:"groove"},{label:so("Inset","digiblocks"),value:"inset"},{label:so("Outset","digiblocks"),value:"outset"},{label:so("Ridge","digiblocks"),value:"ridge"}],A=[{label:so("None","digiblocks"),value:"none"},{label:so("Lift","digiblocks"),value:"lift"},{label:so("Scale","digiblocks"),value:"scale"},{label:so("Glow","digiblocks"),value:"glow"},{label:so("Bounce","digiblocks"),value:"bounce"}],re=[{label:so("None","digiblocks"),value:"none"},...Object.keys(Ir).map(H=>({label:H.replace(/-/g," ").replace(/\b\w/g,xe=>xe.toUpperCase()),value:H}))],se=[{name:"options",title:so("Options","digiblocks"),icon:Lr.optionsIcon},{name:"style",title:so("Style","digiblocks"),icon:Lr.styleIcon},{name:"advanced",title:so("Advanced","digiblocks"),icon:Lr.advancedIcon}],Ce=[{name:"normal",title:so("Normal","digiblocks"),className:"digiblocks-tab-1 normal"},{name:"hover",title:so("Hover","digiblocks"),className:"digiblocks-tab-2 hover"}],Y=()=>{let H=window.digi.responsiveState.activeDevice,xe="";_[H]==="left"?xe="text-align: left;":_[H]==="center"?xe="text-align: center;":_[H]==="right"?xe="text-align: right;":_[H]==="justify"&&(xe="text-align: justify;");let x=mn(Z,"border-radius",H),ve="";T&&T!=="default"&&T!=="none"?ve=`
                border-style: ${T};
                border-color: ${ee||"#e0e0e0"};
                ${mn(V,"border-width",H)}
            `:ve="border-style: none;";let U="box-shadow: none;";B&&B.enable&&(U=`box-shadow: ${B.position==="inset"?"inset ":""}${B.horizontal}px ${B.vertical}px ${B.blur}px ${B.spread}px ${B.color};`);let me="";b&&b.enable&&(me=`text-shadow: ${b.horizontal}px ${b.vertical}px ${b.blur}px ${b.color};`);let Te=`${mn(I,"padding",H)}`,qe=`${mn(C,"margin",H)}`,Ve="";$&&($.fontFamily&&(Ve+=`font-family: ${$.fontFamily};`),$.fontSize&&$.fontSize[H]&&(Ve+=`font-size: ${$.fontSize[H]}${$.fontSizeUnit||"px"};`),$.fontWeight&&(Ve+=`font-weight: ${$.fontWeight};`),$.fontStyle&&(Ve+=`font-style: ${$.fontStyle};`),$.textTransform&&(Ve+=`text-transform: ${$.textTransform};`),$.textDecoration&&(Ve+=`text-decoration: ${$.textDecoration};`),$.lineHeight&&$.lineHeight[H]&&(Ve+=`line-height: ${$.lineHeight[H]}${$.lineHeightUnit||"em"};`),$.letterSpacing&&$.letterSpacing[H]&&(Ve+=`letter-spacing: ${$.letterSpacing[H]}${$.letterSpacingUnit||"px"};`));let Ee="";f&&f!=="none"?Ee=`background: ${f};`:m&&(Ee=`background-color: ${m};`);let Oe="";if(O&&O.enable){let j=O.position==="inset"?"inset ":"";Oe+=`box-shadow: ${j}${O.horizontal}px ${O.vertical}px ${O.blur}px ${O.spread}px ${O.color};`}return D==="lift"?Oe+="transform: translateY(-5px);":D==="scale"?Oe+="transform: scale(1.02);":D==="glow"?Oe+="filter: brightness(1.1);":D==="bounce"&&(Oe+="transform: translateY(-3px); transition: transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);"),`
            /* Main text block styles */
            .${o} {
                ${xe}
                color: ${M||"inherit"};
                ${Ee}
                ${U}
                ${me}
                ${Te}
                ${qe}
                ${ve}
                ${x}
                ${Ve}
                transition: all 0.3s ease;
                word-wrap: break-word;
                overflow-wrap: break-word;
            }
            
            /* Hover effects */
            .${o}:hover {
                ${N?`color: ${N};`:""}
                ${s?`background-color: ${s};`:""}
                ${E?`border-color: ${E};`:""}
                ${Oe}
            }

            /* Visibility Controls */
            ${n.desktop?`
                @media (min-width: 992px) {
                    .${o} {
                        opacity: 0.5 !important;
                    }
                }
            `:""}

            ${n.tablet?`
                @media (min-width: 768px) and (max-width: 991px) {
                    .${o} {
                        opacity: 0.5 !important;
                    }
                }
            `:""}

            ${n.mobile?`
                @media (max-width: 767px) {
                    .${o} {
                        opacity: 0.5 !important;
                    }
                }
            `:""}
        `},de=H=>H==="normal"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Pr,{title:so("Color Settings","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:M,onChange:xe=>e({textColor:xe}),label:so("Text Color","digiblocks")},{value:m,onChange:xe=>e({backgroundColor:xe}),label:so("Background Color","digiblocks")}]})):H==="hover"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Pr,{title:so("Hover Color Settings","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:N,onChange:xe=>e({textHoverColor:xe}),label:so("Text Color","digiblocks")},{value:s,onChange:xe=>e({backgroundHoverColor:xe}),label:so("Background Color","digiblocks")},{value:E,onChange:xe=>e({borderHoverColor:xe}),label:so("Border Color","digiblocks")}]})):null,He=()=>{switch(Se){case"options":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:"components-panel__body is-opened"},wp.element.createElement(un,{label:so("HTML Tag","digiblocks"),value:v,options:q,onChange:H=>e({htmlTag:H}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(n1,{label:so("Text Alignment","digiblocks"),value:_,onChange:H=>e({align:H}),options:[{label:so("Left","digiblocks"),value:"left"},{label:so("Center","digiblocks"),value:"center"},{label:so("Right","digiblocks"),value:"right"},{label:so("Justify","digiblocks"),value:"justify"}]})));case"style":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Vt,{tab:"style",name:"colors",title:so("Colors","digiblocks"),initialOpen:!0},wp.element.createElement(e1,{label:so("State","digiblocks"),value:"normal",isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(Hg,{value:"normal",label:so("Normal","digiblocks")}),wp.element.createElement(Hg,{value:"hover",label:so("Hover","digiblocks")})),de("normal")),wp.element.createElement(Vt,{tab:"style",name:"typo",title:so("Typography","digiblocks"),initialOpen:!1},wp.element.createElement(i1,{label:so("Typography","digiblocks"),value:$,onChange:H=>e({typography:H}),defaults:{fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em"}})),wp.element.createElement(Vt,{tab:"style",name:"border",title:so("Border","digiblocks"),initialOpen:!1},wp.element.createElement(un,{label:so("Border Style","digiblocks"),value:T||"default",options:J,onChange:H=>{H!=="default"&&H!=="none"&&(T==="default"||T==="none"||!T)&&(!V||Object.keys(V).length===0)&&e({borderWidth:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}}),e({borderStyle:H})},__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),T&&T!=="default"&&T!=="none"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Pr,{title:so("Border Color","digiblocks"),enableAlpha:!0,colorSettings:[{value:ee,onChange:H=>e({borderColor:H}),label:so("Border Color","digiblocks")}]}),wp.element.createElement(hn,{label:so("Border Width","digiblocks")},wp.element.createElement(fn,{values:V[le],onChange:H=>e({borderWidth:{...V,[le]:H}})}))),wp.element.createElement(hn,{label:so("Border Radius","digiblocks")},wp.element.createElement(fn,{values:Z[le],onChange:H=>e({borderRadius:{...Z,[le]:H}}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]})),wp.element.createElement(un,{label:so("Hover Effect","digiblocks"),value:D,options:A,onChange:H=>e({hoverEffect:H}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(Vt,{tab:"style",name:"shadow",title:so("Shadows","digiblocks"),initialOpen:!1},wp.element.createElement(l1,{normalValue:B,hoverValue:O,onNormalChange:H=>e({boxShadow:H}),onHoverChange:H=>e({boxShadowHover:H})})),wp.element.createElement(Vt,{tab:"style",name:"spacing",title:so("Spacing","digiblocks"),initialOpen:!1},wp.element.createElement(hn,{label:so("Padding","digiblocks")},wp.element.createElement(fn,{values:I[le],onChange:H=>e({padding:{...I,[le]:H}})})),wp.element.createElement(hn,{label:so("Margin","digiblocks")},wp.element.createElement(fn,{values:C[le],onChange:H=>e({margin:{...C,[le]:H}})}))));case"advanced":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Vt,{tab:"advanced",name:"animation",title:so("Animation","digiblocks"),initialOpen:!0},wp.element.createElement(un,{label:so("Animation Effect","digiblocks"),value:k,options:re,onChange:H=>e({animation:H}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),k&&k!=="none"&&wp.element.createElement("div",{style:{marginTop:"10px"}},wp.element.createElement(Ak,{variant:"secondary",isSecondary:!0,onClick:oe,style:{width:"100%"}},so("Preview Animation","digiblocks")))),wp.element.createElement(Vt,{tab:"advanced",name:"visibility",title:so("Visibility","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control__help",style:{padding:"12px",backgroundColor:"#f0f6fc",border:"1px solid #c3ddfd",borderRadius:"4px",marginBottom:"16px"}},wp.element.createElement("strong",null,so("Editor Note:","digiblocks")),wp.element.createElement("br",null),so("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.","digiblocks")),wp.element.createElement(Rr,{label:so("Hide on Desktop","digiblocks"),checked:n.desktop,onChange:H=>e({visibility:{...n,desktop:H}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(Rr,{label:so("Hide on Tablet","digiblocks"),checked:n.tablet,onChange:H=>e({visibility:{...n,tablet:H}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(Rr,{label:so("Hide on Mobile","digiblocks"),checked:n.mobile,onChange:H=>e({visibility:{...n,mobile:H}}),__nextHasNoMarginBottom:!0})),wp.element.createElement(Vt,{tab:"advanced",name:"additional",title:so("Additional","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control html-anchor-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"html-anchor"},so("HTML anchor","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"html-anchor",value:P||"",onChange:H=>e({anchor:H.target.value}),"aria-describedby":"html-anchor-help",autoCapitalize:"none",autoComplete:"off"})),wp.element.createElement("p",{id:"html-anchor-help",className:"components-base-control__help"},so(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`,"digiblocks")," ",wp.element.createElement("a",{className:"components-external-link",href:"https://wordpress.org/documentation/article/page-jumps/",target:"_blank",rel:"external noreferrer noopener"},wp.element.createElement("span",{className:"components-external-link__contents"},so("Learn more about anchors","digiblocks")),wp.element.createElement("span",{className:"components-external-link__icon","aria-label":"(opens in a new tab)"},"\u2197")))),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"additional-css-classes"},so("Additional CSS class(es)","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"additional-css-classes",value:te||"",onChange:H=>e({customClasses:H.target.value}),"aria-describedby":"additional-css-classes-help",autoComplete:"off"})),wp.element.createElement("p",{id:"additional-css-classes-help",className:"components-base-control__help"},so("Separate multiple classes with spaces.","digiblocks")))));default:return null}},be=Zk({className:`digiblocks-text ${o} ${te||""}`,id:P||null});return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Xk,null,wp.element.createElement(a1,{tabs:se,activeTab:Se,onSelect:K},He())),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:Y()}}),wp.element.createElement(Kk,{...be,tagName:v,value:l,onChange:H=>e({content:H}),placeholder:so("Start writing or type / to add blocks","digiblocks"),allowedFormats:["core/bold","core/italic","core/link","core/strikethrough","core/underline","core/text-color","core/code","core/superscript","core/subscript"]}))},Pg=s1;var{useBlockProps:r1,RichText:c1}=window.wp.blockEditor,d1=({attributes:ie})=>{let{id:e,htmlTag:X,content:o,animation:P,hoverEffect:n,anchor:te,customClasses:l}=ie,_=["digiblocks-text",e,P!=="none"?`animate-${P}`:"",n!=="none"?`has-hover-${n}`:"",l||""].filter(Boolean).join(" "),v=r1.save({className:_,id:te||null});return wp.element.createElement(c1.Content,{...v,tagName:X,value:o})},Rg=d1;var{__:ea}=window.wp.i18n,{registerBlockType:g1}=window.wp.blocks,{getBlockActiveStatus:p1}=window.wp.digiBlocks;g1("digiblocks/text",{apiVersion:2,title:digiBlocksData.blocks.text.title,category:"digiblocks",icon:{src:()=>{let{viewbox:ie,path:e}=digiBlocksData.blocks.text.icon;return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${ie}`,className:"digiblocks-editor-icons"},wp.element.createElement("path",{d:e}))}},description:digiBlocksData.blocks.text.description,keywords:[ea("text","digiblocks"),ea("paragraph","digiblocks"),ea("content","digiblocks")],supports:{inserter:!!p1("text"),html:!1,className:!1,customClassName:!1,anchor:!1},attributes:{id:{type:"string",default:""},anchor:{type:"string",default:""},visibility:{type:"object",default:{desktop:!1,tablet:!1,mobile:!1}},customClasses:{type:"string",default:""},content:{type:"string",default:ea("This is a powerful text block with advanced styling options.","digiblocks")},htmlTag:{type:"string",default:"p"},align:{type:"object",default:{desktop:"left",tablet:"left",mobile:"left"}},textColor:{type:"string",default:"#333333"},textHoverColor:{type:"string",default:""},backgroundColor:{type:"string",default:""},backgroundHoverColor:{type:"string",default:""},backgroundGradient:{type:"string",default:"none"},typography:{type:"object",default:{fontFamily:"",fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",fontWeight:"",fontStyle:"normal",textTransform:"",textDecoration:"",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}},textShadow:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.3)",horizontal:0,vertical:0,blur:0}},padding:{type:"object",default:{desktop:{top:0,right:0,bottom:0,left:0,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},margin:{type:"object",default:{desktop:{top:0,right:0,bottom:16,left:0,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},animation:{type:"string",default:"none"},borderStyle:{type:"string",default:"default"},borderRadius:{type:"object",default:{desktop:{top:0,right:0,bottom:0,left:0,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderWidth:{type:"object",default:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderColor:{type:"string",default:"#e0e0e0"},borderHoverColor:{type:"string",default:""},hoverEffect:{type:"string",default:"none"},boxShadow:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},boxShadowHover:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}}},example:{attributes:{content:ea("This is a powerful text block with advanced styling options. You can customize typography, colors, spacing, borders, shadows and add animations.","digiblocks"),textColor:"#2563eb",htmlTag:"h2"},viewportWidth:400},edit:Pg,save:Rg});})();
