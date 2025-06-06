(()=>{var{__:ue}=window.wp.i18n,{useBlockProps:Ig,useInnerBlocksProps:Lg,InspectorControls:Og,PanelColorSettings:kn,MediaUpload:vn,MediaUploadCheck:xn}=window.wp.blockEditor,{ToggleControl:Vt,SelectControl:ui,RangeControl:el,Button:Fo,Tooltip:Ug,__experimentalToggleGroupControl:jg,__experimentalToggleGroupControlOption:jr}=window.wp.components,{useState:yn,useEffect:Cn,useRef:Vg}=window.wp.element,{useDispatch:Fg,useSelect:Vr}=window.wp.data,{createBlock:Fr}=window.wp.blocks,{useBlockId:Eg,getDimensionCSS:_t,animations:ol,animationPreview:Er}=digi.utils,{tabIcons:ta}=digi.icons,{ResponsiveControl:Ft,DimensionControl:ia,BoxShadowControl:Wg,CustomTabPanel:qg,TabPanelBody:Eo,ResponsiveRangeControl:Wr,ResponsiveButtonGroup:la}=digi.components,qr=[{name:"1-col",label:ue("1 Column","digiblocks"),icon:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"0 0 90 48"},wp.element.createElement("path",{d:"M88 48H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0h86c1.1 0 2 .9 2 2v44c0 1.1-.9 2-2 2z"})),columns:[100]},{name:"2-col-equal",label:ue("2 Columns Equal","digiblocks"),icon:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"0 0 90 48"},wp.element.createElement("path",{d:"M41.3 48H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0h39.2c1.1 0 2 .9 2 2v44c.1 1.1-.8 2-1.9 2zM88 48H48.7c-1.1 0-2-.9-2-2V2c0-1.1.9-2 2-2H88c1.1 0 2 .9 2 2v44c0 1.1-.9 2-2 2z"})),columns:[50,50]},{name:"3-col-equal",label:ue("3 Columns Equal","digiblocks"),icon:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"0 0 90 48"},wp.element.createElement("path",{d:"M26.2 48H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0h24.2c1.1 0 2 .9 2 2v44c.1 1.1-.9 2-2 2zM57.1 48H32.9c-1.1 0-2-.9-2-2V2c0-1.1.9-2 2-2h24.2c1.1 0 2 .9 2 2v44c0 1.1-.9 2-2 2zM88 48H63.8c-1.1 0-2-.9-2-2V2c0-1.1.9-2 2-2H88c1.1 0 2 .9 2 2v44c0 1.1-.9 2-2 2z"})),columns:[33.33,33.33,33.33]},{name:"4-col-equal",label:ue("4 Columns Equal","digiblocks"),icon:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"0 0 90 48"},wp.element.createElement("path",{d:"M19 48H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0h17c1.1 0 2 .9 2 2v44c0 1.1-.9 2-2 2zM42 48H25c-1.1 0-2-.9-2-2V2c0-1.1.9-2 2-2h17c1.1 0 2 .9 2 2v44c0 1.1-.9 2-2 2zM64.9 48H48c-1.1 0-2-.9-2-2V2c0-1.1.9-2 2-2h16.9c1.1 0 2 .9 2 2v44c.1 1.1-.8 2-2 2zM87.9 48H71c-1.1 0-2-.9-2-2V2c0-1.1.9-2 2-2h16.9c1.1 0 2 .9 2 2v44c.1 1.1-.9 2-2 2z"})),columns:[25,25,25,25]},{name:"1-3-col",label:ue("1/3 + 2/3","digiblocks"),icon:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"0 0 90 48"},wp.element.createElement("path",{d:"M24.1 48H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0h22c1.1 0 2 .9 2 2v44c.1 1.1-.8 2-1.9 2zM87.9 48H30.2c-1.1 0-2-.9-2-2V2c0-1.1.9-2 2-2h57.7c1.1 0 2 .9 2 2v44c.1 1.1-.9 2-2 2z"})),columns:[33.33,66.67]},{name:"3-1-col",label:ue("2/3 + 1/3","digiblocks"),icon:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"0 0 90 48"},wp.element.createElement("path",{d:"M60.6 48H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0h58.6c1.1 0 2 .9 2 2v44c0 1.1-.9 2-2 2zM87.9 48H66.7c-1.1 0-2-.9-2-2V2c0-1.1.9-2 2-2h21.2c1.1 0 2 .9 2 2v44c.1 1.1-.9 2-2 2z"})),columns:[66.67,33.33]},{name:"1-4-1-4-2-4-col",label:ue("1/4 + 1/4 + 2/4","digiblocks"),icon:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"0 0 90 48"},wp.element.createElement("path",{d:"M20.1 48H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0h18.1c1.1 0 2 .9 2 2v44c.1 1.1-.8 2-2 2zM44.6 48H26.5c-1.1 0-2-.9-2-2V2c0-1.1.9-2 2-2h18.1c1.1 0 2 .9 2 2v44c0 1.1-.9 2-2 2zM87.9 48h-37c-1.1 0-2-.9-2-2V2c0-1.1.9-2 2-2h37c1.1 0 2 .9 2 2v44c.1 1.1-.9 2-2 2z"})),columns:[25,25,50]},{name:"2-4-1-4-1-4-col",label:ue("2/4 + 1/4 + 1/4","digiblocks"),icon:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"0 0 90 48"},wp.element.createElement("path",{d:"M69.8 48h18.1c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2H69.8c-1.1 0-2 .9-2 2v44c0 1.1.9 2 2 2zM45.4 48h18.1c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2H45.4c-1.1 0-2 .9-2 2v44c0 1.1.9 2 2 2zM2 48h37c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2H2C.9 0 0 .9 0 2v44c0 1.1.9 2 2 2z"})),columns:[50,25,25]},{name:"1-4-2-4-1-4-col",label:ue("1/4 + 2/4 + 1/4","digiblocks"),icon:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"0 0 90 48"},wp.element.createElement("path",{d:"M69.8 48h18.1c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2H69.8c-1.1 0-2 .9-2 2v44c0 1.1.9 2 2 2zM2 48h18.1c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2H2C.9 0 0 .9 0 2v44c0 1.1.9 2 2 2zM26.4 48h37c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2h-37c-1.1 0-2 .9-2 2v44c0 1.1.9 2 2 2z"})),columns:[25,50,25]},{name:"5-col-equal",label:ue("5 Columns Equal","digiblocks"),icon:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"0 0 90 48"},wp.element.createElement("path",{d:"M20.3 48h12.6c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2H20.3c-1.1 0-2 .9-2 2v44c0 1.1.9 2 2 2zM38.7 48h12.6c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2H38.7c-1.1 0-2 .9-2 2v44c-.1 1.1.9 2 2 2zM57.1 48h12.6c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2H57.1c-1.1 0-2 .9-2 2v44c0 1.1.9 2 2 2zM75.4 48H88c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2H75.4c-1.1 0-2 .9-2 2v44c0 1.1.9 2 2 2zM2 48h12.6c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2H2C.9 0 0 .9 0 2v44c0 1.1.9 2 2 2z"})),columns:[20,20,20,20,20]},{name:"6-col-equal",label:ue("6 Columns Equal","digiblocks"),icon:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"0 0 90 48"},wp.element.createElement("path",{d:"M17.3 48H27c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2h-9.7c-1.1 0-2 .9-2 2v44c-.1 1.1.8 2 2 2zM32.4 48h9.7c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2h-9.7c-1.1 0-2 .9-2 2v44c0 1.1.9 2 2 2zM47.8 48h9.7c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2h-9.7c-1.1 0-2 .9-2 2v44c-.1 1.1.8 2 2 2zM62.9 48h9.7c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2h-9.7c-1.1 0-2 .9-2 2v44c-.1 1.1.8 2 2 2zM78.3 48H88c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2h-9.7c-1.1 0-2 .9-2 2v44c-.1 1.1.9 2 2 2zM2 48h9.7c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2H2C.9 0 0 .9 0 2v44c0 1.1.9 2 2 2z"})),columns:[16.67,16.67,16.67,16.67,16.67,16.67]},{name:"1-6-4-6-1-6-col",label:ue("1/6 + 4/6 + 1/6","digiblocks"),icon:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"0 0 90 48"},wp.element.createElement("path",{d:"M19.2 48h51.5c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2H19.2c-1.1 0-2 .9-2 2v44c0 1.1.9 2 2 2zM77.1 48H88c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2H77.1c-1.1 0-2 .9-2 2v44c-.1 1.1.8 2 2 2zM2 48h11.1c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2H2C.9 0 0 .9 0 2v44c0 1.1.9 2 2 2z"})),columns:[16.67,66.67,16.67]}],Gg=({attributes:te,setAttributes:e,clientId:K})=>{let{flexWrap:o,id:P,anchor:s,visibility:oe,customClasses:l,layout:$,contentLayout:x,contentWidth:H,contentMaxWidth:T,horizontalAlign:u,verticalAlign:r,heightType:S,minHeight:D,columnGap:y,rowGap:v,reverseColumnsMobile:_,stackOnTablet:L,stackOnMobile:B,overflowHidden:O,zIndex:Y,backgroundColor:A,backgroundImage:V,backgroundPosition:k,backgroundRepeat:b,backgroundSize:M,backgroundVideo:le,backgroundVideoFallbackImage:Ve,backgroundOverlay:Ce,backgroundOverlayOpacity:Z,backgroundOverlayBlendMode:I,padding:ee,margin:F,borderStyle:Q,borderWidth:X,borderColor:se,borderRadius:ne,boxShadow:ve,boxShadowHover:J,animation:ce}=te;Eg(P,K,e);let[Te,be]=yn(window.digi.responsiveState.activeDevice),[N,xe]=yn(()=>{if(window.digi.uiState){let a=window.digi.uiState.getActiveTab(K);if(a)return a}return"options"}),[w,ke]=yn(!$),U=Vg(null);Cn(()=>window.digi.responsiveState.subscribe(ge=>{be(ge)}),[]);let{isNested:fe}=Vr(a=>{let{getBlockParentsByBlockName:ge}=a("core/block-editor");return{isNested:ge(K,"digiblocks/container").length>0}},[K]);Cn(()=>{e({isNested:fe})},[fe,e]);let{innerBlocks:ze,hasChildBlocks:qe}=Vr(a=>{let{getBlocks:ge}=a("core/block-editor"),Ue=ge(K);return{innerBlocks:Ue,hasChildBlocks:Ue.length>0}},[K]),{replaceInnerBlocks:je}=Fg("core/block-editor"),Fe=a=>{let ge=qr.find(t=>t.name===a);if(!ge)return;let Ue=ze.map(t=>({clientId:t.clientId,attributes:t.attributes,innerBlocks:t.innerBlocks})),Ke=ge.columns.length,ao=Ue.length,co=[];if(ge.columns.forEach((t,m)=>{if(m<ao){let Me=Ue[m];co.push(Fr("digiblocks/column",{...Me.attributes,width:{desktop:t,tablet:L?100:t,mobile:B?100:t}},[...Me.innerBlocks]))}else co.push(Fr("digiblocks/column",{id:`column-${P}-${m}`,width:{desktop:t,tablet:L?100:t,mobile:B?100:t}},[]))}),ao>Ke&&Ke>0){let t=[];for(let m=Ke;m<ao;m++)t.push(...Ue[m].innerBlocks);if(t.length>0){let m=co[co.length-1].innerBlocks;co[co.length-1].innerBlocks=[...m,...t]}}je(K,co,!1),e({layout:a}),ke(!1)};Cn(()=>{if(ce&&ce!=="none"){let a=setTimeout(()=>{Er(P,ce,ol,U)},100);return()=>clearTimeout(a)}},[ce]);let Ie=[{label:ue("None","digiblocks"),value:"none"},...Object.keys(ol).map(a=>({label:a.replace(/-/g," ").replace(/\b\w/g,ge=>ge.toUpperCase()),value:a}))],j=()=>{Er(P,ce,ol,U)},Se=[{label:ue("Top Left","digiblocks"),value:"top left"},{label:ue("Top Center","digiblocks"),value:"top center"},{label:ue("Top Right","digiblocks"),value:"top right"},{label:ue("Center Left","digiblocks"),value:"center left"},{label:ue("Center Center","digiblocks"),value:"center center"},{label:ue("Center Right","digiblocks"),value:"center right"},{label:ue("Bottom Left","digiblocks"),value:"bottom left"},{label:ue("Bottom Center","digiblocks"),value:"bottom center"},{label:ue("Bottom Right","digiblocks"),value:"bottom right"}],Qe=[{label:ue("No Repeat","digiblocks"),value:"no-repeat"},{label:ue("Repeat","digiblocks"),value:"repeat"},{label:ue("Repeat X","digiblocks"),value:"repeat-x"},{label:ue("Repeat Y","digiblocks"),value:"repeat-y"}],G=[{label:ue("Cover","digiblocks"),value:"cover"},{label:ue("Contain","digiblocks"),value:"contain"},{label:ue("Auto","digiblocks"),value:"auto"},{label:ue("100%","digiblocks"),value:"100%"}],pe=[{label:ue("None","digiblocks"),value:"none"},{label:ue("Solid","digiblocks"),value:"solid"},{label:ue("Dashed","digiblocks"),value:"dashed"},{label:ue("Dotted","digiblocks"),value:"dotted"},{label:ue("Double","digiblocks"),value:"double"}],R=[{label:ue("Normal","digiblocks"),value:"normal"},{label:ue("Multiply","digiblocks"),value:"multiply"},{label:ue("Screen","digiblocks"),value:"screen"},{label:ue("Overlay","digiblocks"),value:"overlay"},{label:ue("Darken","digiblocks"),value:"darken"},{label:ue("Lighten","digiblocks"),value:"lighten"},{label:ue("Color Dodge","digiblocks"),value:"color-dodge"},{label:ue("Color Burn","digiblocks"),value:"color-burn"},{label:ue("Hard Light","digiblocks"),value:"hard-light"},{label:ue("Soft Light","digiblocks"),value:"soft-light"},{label:ue("Difference","digiblocks"),value:"difference"},{label:ue("Exclusion","digiblocks"),value:"exclusion"},{label:ue("Hue","digiblocks"),value:"hue"},{label:ue("Saturation","digiblocks"),value:"saturation"},{label:ue("Color","digiblocks"),value:"color"},{label:ue("Luminosity","digiblocks"),value:"luminosity"}],p=[{name:"options",title:ue("Layout","digiblocks"),icon:ta.optionsIcon},{name:"style",title:ue("Style","digiblocks"),icon:ta.styleIcon},{name:"background",title:ue("Background","digiblocks"),icon:ta.backgroundIcon},{name:"advanced",title:ue("Advanced","digiblocks"),icon:ta.advancedIcon}],re=(a,ge)=>{let Ue=me=>a&&a[me]&&(a[me].top!==void 0&&a[me].top!==""||a[me].right!==void 0&&a[me].right!==""||a[me].bottom!==void 0&&a[me].bottom!==""||a[me].left!==void 0&&a[me].left!==""),Ke;if(Ue(ge))Ke=a[ge];else if(ge==="tablet"&&Ue("desktop"))Ke=a.desktop;else if(ge==="mobile")if(Ue("tablet"))Ke=a.tablet;else if(Ue("desktop"))Ke=a.desktop;else return"";else return"";let ao=(me,oo)=>me===void 0||me===""?"0"+oo:oo==="px"&&parseFloat(me)<10?"10px":me+oo,co=Ke.unit||"px",t=ao(Ke.top,co),m=ao(Ke.right,co),Me=ao(Ke.bottom,co),c=ao(Ke.left,co);return`padding: ${t} ${m} ${Me} ${c} !important;`},n=(a,ge)=>a[ge]&&a[ge].value!==""?{value:a[ge].value,unit:a[ge].unit||"px"}:ge==="tablet"?{value:a.desktop.value,unit:a.desktop.unit||"px"}:ge==="mobile"?a.tablet&&a.tablet.value!==""?{value:a.tablet.value,unit:a.tablet.unit||"px"}:{value:a.desktop.value,unit:a.desktop.unit||"px"}:{value:0,unit:"px"},g=()=>{let a=Te,ge=re(ee,a),Ue=re(ee,"tablet"),Ke=re(ee,"mobile"),ao="";ce&&ce!=="none"&&ol[ce]&&(ao=ol[ce].keyframes);let co="";V&&V.url&&(co=`background-image: url(${V.url});
            background-position: ${k};
            background-repeat: ${b};
            background-size: ${M};`);let t="";Ce&&(t=`
            .${P}:before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: ${Ce};
                opacity: ${Z};
                mix-blend-mode: ${I};
                z-index: 1;
                pointer-events: none;
                border-radius: inherit;
            }
            .${P} > * {
                position: relative;
                z-index: 2;
            }`);let m="";ve&&ve.enable&&(m=`box-shadow: ${ve.horizontal}px ${ve.vertical}px ${ve.blur}px ${ve.spread}px ${ve.color};`);let Me="";J&&J.enable&&(Me=`box-shadow: ${J.position==="inset"?"inset ":""}${J.horizontal}px ${J.vertical}px ${J.blur}px ${J.spread}px ${J.color};`);let c="";S[a]==="full"?c="height: 100vh;":S[a]==="custom"&&(c=`min-height: ${D[a]}px !important;`);let me="";fe||(x==="full"?me="width: 100%;":me=`width: ${H[a]!==void 0&&H[a]!==""?H[a]:H.desktop}px;
				margin-left: auto;
				margin-right: auto;`);let oo="";return fe||(x==="full"?oo="max-width: 100%;":oo=`max-width: ${T[a]!==void 0&&T[a]!==""?T[a]:T.desktop}%;`),`
            /* Container Block - ${P} */
            .${P} {
                position: relative;
                ${ge}
				${_t(F,"margin",a)}
                width: 100%;
                ${c}
                ${A?`background-color: ${A};`:""}
                ${co}
                ${Q!=="none"?`
                border-style: ${Q}!important;
				${_t(X,"border-width",a,!0)}
                border-color: ${se}!important;`:""}
				${_t(ne,"border-radius",a)}
                ${m}
                ${O?"overflow: hidden;":""}
                ${Y?`z-index: ${Y};`:""}
                transition: all 0.3s ease;
            }
            
            /* Hover effects */
            .${P}:hover {
                ${Me}
            }

			.${P} > .digiblocks-container-inner {
                display: flex;
				flex-wrap: ${o[a]};
                align-items: ${r[a]};
    			justify-content: ${u[a]};
				gap: ${n(v,a).value}${n(v,a).unit} ${n(y,a).value}${n(y,a).unit};
            }

			.${P}.alignfull > .digiblocks-container-inner {
				${fe?"":me}
				${fe?"":oo}
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
                    ${Ue}
					${_t(F,"margin","tablet")}
					${S.tablet==="custom"?`min-height: ${D.tablet}px;`:""}
					${_t(ne,"border-radius","tablet")}
					${Q!=="none"?`${_t(X,"border-width","tablet",!0)}`:""}
                }

				.${P} > .digiblocks-container-inner {
					${!fe&&x!=="full"?`
						width: ${H.tablet!==void 0&&H.tablet!==""?H.tablet:H.desktop}px;
						max-width: ${T.tablet!==void 0&&T.tablet!==""?T.tablet:T.desktop}%;
					`:""}
					flex-wrap: ${o.tablet};
					align-items: ${r.tablet};
					justify-content: ${u.tablet};
					gap: ${n(v,"tablet").value}${n(v,"tablet").unit} ${n(y,"tablet").value}${n(y,"tablet").unit};
                    ${L?"flex-direction: column;":""}
				}

				${L?`
					.${P} > .digiblocks-container-inner .digiblocks-column {
						width: 100%;
					}`:""}
            }
            
            /* Mobile styles */
            @media (max-width: 767px) {
                .${P} {
                    ${Ke}
					${_t(F,"margin","mobile")}
                    ${S.mobile==="custom"?`min-height: ${D.mobile}px;`:""}
					${_t(ne,"border-radius","mobile")}
                    ${Q!=="none"?`border-width: ${X.mobile.top}${X.mobile.unit} ${X.mobile.right}${X.mobile.unit} ${X.mobile.bottom}${X.mobile.unit} ${X.mobile.left}${X.mobile.unit};`:""}
                }

				.${P} > .digiblocks-container-inner {
					${!fe&&x!=="full"?`
						width: ${H.mobile!==void 0&&H.mobile!==""?H.mobile:H.tablet!==void 0&&H.tablet!==""?H.tablet:H.desktop}px;
						max-width: ${T.mobile!==void 0&&T.mobile!==""?T.mobile:T.tablet!==void 0&&T.tablet!==""?T.tablet:T.desktop}%;
					`:""}
					flex-wrap: ${o.mobile};
					align-items: ${r.mobile};
					justify-content: ${u.mobile};
					gap: ${n(v,"mobile").value}${n(v,"mobile").unit} ${n(y,"mobile").value}${n(y,"mobile").unit};
                    ${B?"flex-direction: column;":""}
                    ${_?"flex-direction: column-reverse;":""}
				}

				${B?`
					.${P} > .digiblocks-container-inner .digiblocks-column {
						width: 100%;
					}`:""}
            }
            
            /* Animation keyframes */
            ${ao}

			/* Visibility Controls */
			${oe.desktop?`
				@media (min-width: 992px) {
					.${P} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${oe.tablet?`
				@media (min-width: 768px) and (max-width: 991px) {
					.${P} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${oe.mobile?`
				@media (max-width: 767px) {
					.${P} {
						opacity: 0.5 !important;
					}
				}
			`:""}
        `},q=Ig({className:`digiblocks-container ${fe?"":"alignfull"} ${P} ${l||""}`,id:s||null}),ie=Lg({className:"digiblocks-container-inner"},{allowedBlocks:w?[]:["digiblocks/column"],orientation:"horizontal",renderAppender:qe?void 0:window.wp.blockEditor.ButtonBlockAppender}),C=()=>{switch(N){case"options":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Eo,{tab:"options",name:"layout",title:ue("Container Layout","digiblocks"),initialOpen:!0},wp.element.createElement(Fo,{variant:"secondary",onClick:()=>ke(!0),className:"digiblocks-change-layout-button"},ue($?"Change Layout":"Select Layout","digiblocks")),!fe&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(jg,{label:ue("Layout","digiblocks"),value:x,onChange:a=>e({contentLayout:a}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(jr,{value:"boxed",label:ue("Boxed","digiblocks")}),wp.element.createElement(jr,{value:"full",label:ue("Full Width","digiblocks")})),x==="boxed"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Ft,{label:ue("Content Width (px)","digiblocks")},wp.element.createElement(el,{value:H[Te]!==""?H[Te]:Te==="desktop"?digiBlocksData.contentWidth||1200:H.desktop||digiBlocksData.contentWidth||1200,onChange:a=>e({contentWidth:{...H,[Te]:a}}),min:300,max:2e3,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(Ft,{label:ue("Content Max Width (%)","digiblocks")},wp.element.createElement(el,{value:T[Te]!==""?T[Te]:Te==="desktop"?digiBlocksData.contentMaxWidth||90:T.desktop||digiBlocksData.contentMaxWidth||90,onChange:a=>e({contentMaxWidth:{...T,[Te]:a}}),min:0,max:100,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})))),wp.element.createElement(la,{label:ue("Flex Wrap","digiblocks"),value:o,onChange:a=>e({flexWrap:a}),options:[{label:ue("No Wrap","digiblocks"),value:"nowrap"},{label:ue("Wrap","digiblocks"),value:"wrap"}]}),wp.element.createElement(la,{label:ue("Height","digiblocks"),value:S,onChange:a=>e({heightType:a}),options:[{label:ue("Auto","digiblocks"),value:"auto"},{label:ue("Full","digiblocks"),value:"full"},{label:ue("Custom","digiblocks"),value:"custom"}]}),S[Te]==="custom"&&wp.element.createElement(Ft,{label:ue("Min Height","digiblocks")},wp.element.createElement(el,{value:D[Te],onChange:a=>e({minHeight:{...D,[Te]:a}}),min:0,max:1e3,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(la,{label:ue("Horizontal Align","digiblocks"),value:u,onChange:a=>e({horizontalAlign:a}),options:[{label:ue("Left","digiblocks"),value:"flex-start"},{label:ue("Center","digiblocks"),value:"center"},{label:ue("Right","digiblocks"),value:"flex-end"},{label:ue("Space","digiblocks"),value:"space-between"}]}),wp.element.createElement(la,{label:ue("Vertical Align","digiblocks"),value:r,onChange:a=>e({verticalAlign:a}),options:[{label:ue("Top","digiblocks"),value:"flex-start"},{label:ue("Middle","digiblocks"),value:"center"},{label:ue("Bottom","digiblocks"),value:"flex-end"}]})),wp.element.createElement(Eo,{tab:"layout",name:"spacing",title:ue("Spacing","digiblocks"),initialOpen:!1},wp.element.createElement(Wr,{label:ue("Column Gap","digiblocks"),value:y,onChange:a=>e({columnGap:a}),units:[{label:"px",value:"px"},{label:"%",value:"%"},{label:"em",value:"em"},{label:"rem",value:"rem"}],defaultUnit:"px",min:0,max:100,step:1}),wp.element.createElement(Wr,{label:ue("Row Gap","digiblocks"),value:v,onChange:a=>e({rowGap:a}),units:[{label:"px",value:"px"},{label:"em",value:"em"},{label:"rem",value:"rem"}],defaultUnit:"px",min:0,max:100,step:1}),wp.element.createElement(Ft,{label:ue("Padding","digiblocks")},wp.element.createElement(ia,{values:ee[Te],onChange:a=>e({padding:{...ee,[Te]:a}})})),wp.element.createElement(Ft,{label:ue("Margin","digiblocks")},wp.element.createElement(ia,{values:F[Te],onChange:a=>e({margin:{...F,[Te]:a}})}))),wp.element.createElement(Eo,{tab:"layout",name:"responsive",title:ue("Responsive","digiblocks"),initialOpen:!1},wp.element.createElement(Vt,{label:ue("Stack on Tablet","digiblocks"),checked:L,onChange:a=>e({stackOnTablet:a}),help:ue("Stack columns vertically on tablet devices.","digiblocks"),__nextHasNoMarginBottom:!0}),wp.element.createElement(Vt,{label:ue("Stack on Mobile","digiblocks"),checked:B,onChange:a=>e({stackOnMobile:a}),help:ue("Stack columns vertically on mobile devices.","digiblocks"),__nextHasNoMarginBottom:!0}),wp.element.createElement(Vt,{label:ue("Reverse Columns on Mobile","digiblocks"),checked:_,onChange:a=>e({reverseColumnsMobile:a}),help:ue("Reverse the order of columns on mobile devices.","digiblocks"),__nextHasNoMarginBottom:!0})),wp.element.createElement(Eo,{tab:"layout",name:"visibility",title:ue("Visibility","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control__help",style:{padding:"12px",backgroundColor:"#f0f6fc",border:"1px solid #c3ddfd",borderRadius:"4px",marginBottom:"16px"}},wp.element.createElement("strong",null,ue("Editor Note:","digiblocks")),wp.element.createElement("br",null),ue("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.","digiblocks")),wp.element.createElement(Vt,{label:ue("Hide on Desktop","digiblocks"),checked:oe.desktop,onChange:a=>e({visibility:{...oe,desktop:a}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(Vt,{label:ue("Hide on Tablet","digiblocks"),checked:oe.tablet,onChange:a=>e({visibility:{...oe,tablet:a}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(Vt,{label:ue("Hide on Mobile","digiblocks"),checked:oe.mobile,onChange:a=>e({visibility:{...oe,mobile:a}}),__nextHasNoMarginBottom:!0})));case"style":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Eo,{tab:"style",name:"borders",title:ue("Borders & Radius","digiblocks"),initialOpen:!0},wp.element.createElement(ui,{label:ue("Border Style","digiblocks"),value:Q,options:pe,onChange:a=>e({borderStyle:a}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),Q!=="none"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Ft,{label:ue("Border Width","digiblocks")},wp.element.createElement(ia,{values:X[Te],onChange:a=>e({borderWidth:{...X,[Te]:a}})})),wp.element.createElement(kn,{title:"",enableAlpha:!0,colorSettings:[{value:se,onChange:a=>e({borderColor:a}),label:ue("Border Color","digiblocks")}]})),wp.element.createElement(Ft,{label:ue("Border Radius","digiblocks")},wp.element.createElement(ia,{values:ne[Te],onChange:a=>e({borderRadius:{...ne,[Te]:a}}),units:[{label:"px",value:"px"},{label:"%",value:"%"},{label:"em",value:"em"}]})),wp.element.createElement(Wg,{normalValue:ve,hoverValue:J,onNormalChange:a=>e({boxShadow:a}),onHoverChange:a=>e({boxShadowHover:a})})),wp.element.createElement(Eo,{tab:"style",name:"advanced",title:ue("Advanced","digiblocks"),initialOpen:!1},wp.element.createElement(Vt,{label:ue("Overflow Hidden","digiblocks"),checked:O,onChange:a=>e({overflowHidden:a}),help:ue("Hide content that overflows the container boundaries.","digiblocks"),__nextHasNoMarginBottom:!0}),wp.element.createElement(el,{label:ue("Z-Index","digiblocks"),value:Y,onChange:a=>e({zIndex:a}),min:-99,max:99,step:1,allowReset:!0,resetFallbackValue:0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})));case"background":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Eo,{tab:"background",name:"background",title:ue("Background","digiblocks"),initialOpen:!0},wp.element.createElement(kn,{title:ue("Background Color","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:A,onChange:a=>e({backgroundColor:a}),label:ue("Background Color","digiblocks")}]}),wp.element.createElement("div",{className:"digiblocks-media-control"},wp.element.createElement("p",{className:"components-base-control__label"},ue("Background Image","digiblocks")),wp.element.createElement(xn,null,wp.element.createElement(vn,{onSelect:a=>{e({backgroundImage:{url:a.url,id:a.id,alt:a.alt||"",size:a.sizes?.full?.url?"full":""}})},allowedTypes:["image"],value:V?.id,render:({open:a})=>wp.element.createElement("div",{className:"digiblocks-media-upload-wrapper"},V?.url?wp.element.createElement("div",{className:"digiblocks-media-preview"},wp.element.createElement("img",{src:V.url,alt:V.alt||""}),wp.element.createElement("div",{className:"digiblocks-media-controls"},wp.element.createElement(Fo,{isPrimary:!0,onClick:a},wp.element.createElement("span",{class:"dashicon dashicons dashicons-edit"})),wp.element.createElement(Fo,{isDestructive:!0,onClick:()=>e({backgroundImage:{url:"",id:0,alt:"",size:""}})},wp.element.createElement("span",{class:"dashicon dashicons dashicons-trash"})))):wp.element.createElement(Fo,{className:"digiblocks-media-upload-button",isPrimary:!0,onClick:a},ue("Select Image","digiblocks")))}))),V?.url&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(ui,{label:ue("Background Position","digiblocks"),value:k,options:Se,onChange:a=>e({backgroundPosition:a}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(ui,{label:ue("Background Repeat","digiblocks"),value:b,options:Qe,onChange:a=>e({backgroundRepeat:a}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(ui,{label:ue("Background Size","digiblocks"),value:M,options:G,onChange:a=>e({backgroundSize:a}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}))),wp.element.createElement(Eo,{tab:"background",name:"backgroundVideo",title:ue("Background Video","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"digiblocks-media-control"},wp.element.createElement("p",{className:"components-base-control__label"},ue("Background Video","digiblocks")),wp.element.createElement(xn,null,wp.element.createElement(vn,{onSelect:a=>{e({backgroundVideo:{url:a.url,id:a.id}})},allowedTypes:["video"],value:le?.id,render:({open:a})=>wp.element.createElement("div",{className:"digiblocks-media-upload-wrapper"},le?.url?wp.element.createElement("div",{className:"digiblocks-media-preview"},wp.element.createElement("video",{controls:!0},wp.element.createElement("source",{src:le.url}),ue("Your browser does not support the video tag.","digiblocks")),wp.element.createElement("div",{className:"digiblocks-media-controls"},wp.element.createElement(Fo,{isPrimary:!0,onClick:a},wp.element.createElement("span",{class:"dashicon dashicons dashicons-edit"})),wp.element.createElement(Fo,{isDestructive:!0,onClick:()=>e({backgroundVideo:{url:"",id:0}})},wp.element.createElement("span",{class:"dashicon dashicons dashicons-trash"})))):wp.element.createElement(Fo,{className:"digiblocks-media-upload-button",isPrimary:!0,onClick:a},ue("Select Video","digiblocks")))}))),le?.url&&wp.element.createElement("div",{className:"digiblocks-media-control"},wp.element.createElement("p",{className:"components-base-control__label"},ue("Video Fallback Image","digiblocks")),wp.element.createElement(xn,null,wp.element.createElement(vn,{onSelect:a=>{e({backgroundVideoFallbackImage:{url:a.url,id:a.id,alt:a.alt||""}})},allowedTypes:["image"],value:Ve?.id,render:({open:a})=>wp.element.createElement("div",{className:"digiblocks-media-upload-wrapper"},Ve?.url?wp.element.createElement("div",{className:"digiblocks-media-preview"},wp.element.createElement("img",{src:Ve.url,alt:Ve.alt||""}),wp.element.createElement("div",{className:"digiblocks-media-controls"},wp.element.createElement(Fo,{isPrimary:!0,onClick:a},wp.element.createElement("span",{class:"dashicon dashicons dashicons-edit"})),wp.element.createElement(Fo,{isDestructive:!0,onClick:()=>e({backgroundVideoFallbackImage:{url:"",id:0,alt:""}})},wp.element.createElement("span",{class:"dashicon dashicons dashicons-trash"})))):wp.element.createElement(Fo,{className:"digiblocks-media-upload-button",isPrimary:!0,onClick:a},ue("Select Fallback Image","digiblocks")))})))),wp.element.createElement(Eo,{tab:"background",name:"overlay",title:ue("Background Overlay","digiblocks"),initialOpen:!1},wp.element.createElement(kn,{title:ue("Overlay Color","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:Ce,onChange:a=>e({backgroundOverlay:a}),label:ue("Overlay Color","digiblocks")}]}),Ce&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(el,{label:ue("Overlay Opacity","digiblocks"),value:Z,onChange:a=>e({backgroundOverlayOpacity:a}),min:0,max:1,step:.01,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(ui,{label:ue("Blend Mode","digiblocks"),value:I,options:R,onChange:a=>e({backgroundOverlayBlendMode:a}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}))));case"advanced":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Eo,{tab:"style",name:"animation",title:ue("Animation","digiblocks"),initialOpen:!0},wp.element.createElement(ui,{label:ue("Animation Effect","digiblocks"),value:ce,options:Ie,onChange:a=>e({animation:a}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),ce&&ce!=="none"&&wp.element.createElement("div",{style:{marginTop:"10px"}},wp.element.createElement(Fo,{variant:"secondary",isSecondary:!0,onClick:j,style:{width:"100%"}},ue("Preview Animation","digiblocks")))),wp.element.createElement(Eo,{tab:"advanced",name:"additional",title:ue("Additional","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control html-anchor-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"html-anchor"},ue("HTML anchor","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"html-anchor",value:s||"",onChange:a=>e({anchor:a.target.value}),"aria-describedby":"html-anchor-help",autoCapitalize:"none",autoComplete:"off"})),wp.element.createElement("p",{id:"html-anchor-help",className:"components-base-control__help"},ue(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`,"digiblocks")," ",wp.element.createElement("a",{className:"components-external-link",href:"https://wordpress.org/documentation/article/page-jumps/",target:"_blank",rel:"external noreferrer noopener"},wp.element.createElement("span",{className:"components-external-link__contents"},ue("Learn more about anchors","digiblocks")),wp.element.createElement("span",{className:"components-external-link__icon","aria-label":"(opens in a new tab)"},"\u2197")))),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"additional-css-classes"},ue("Additional CSS class(es)","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"additional-css-classes",value:l||"",onChange:a=>e({customClasses:a.target.value}),"aria-describedby":"additional-css-classes-help",autoComplete:"off"})),wp.element.createElement("p",{id:"additional-css-classes-help",className:"components-base-control__help"},ue("Separate multiple classes with spaces.","digiblocks")))));default:return null}},h=()=>wp.element.createElement("div",{className:"digiblocks-layout-selector"},wp.element.createElement("h2",null,ue("Select a Layout","digiblocks")),wp.element.createElement("div",{className:"digiblocks-layout-grid"},qr.map(a=>wp.element.createElement(Ug,{text:a.label,key:a.name},wp.element.createElement("div",{className:"digiblocks-layout-option",onClick:()=>Fe(a.name),"aria-label":a.label},wp.element.createElement("div",{className:"digiblocks-layout-icon"},a.icon),wp.element.createElement("span",{className:"screen-reader-text"},a.label)))))),Be=()=>le?.url?wp.element.createElement("div",{className:"digiblocks-bg-video-container"},wp.element.createElement("video",{className:"digiblocks-bg-video",autoPlay:!0,muted:!0,loop:!0,playsInline:!0,poster:Ve?.url||""},wp.element.createElement("source",{src:le.url,type:"video/mp4"}))):null;return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Og,null,wp.element.createElement(qg,{tabs:p,activeTab:N,onSelect:xe,customClass:"four"},C())),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:g()}}),wp.element.createElement("div",{...q},le?.url&&wp.element.createElement(Be,null),w?wp.element.createElement(h,null):wp.element.createElement("div",{...ie})))},Gr=Gg;var{__:d1}=window.wp.i18n,{useBlockProps:Qg,useInnerBlocksProps:Jg}=window.wp.blockEditor,Yg=({attributes:te})=>{let{isNested:e,id:K,anchor:o,customClasses:P,backgroundVideo:s,backgroundVideoFallbackImage:oe,animation:l}=te,$=`digiblocks-container ${e?"":"alignfull"} ${K} ${P||""}${l!=="none"?` animate-${l}`:""}`,x=Qg.save({className:$,id:o||null}),H=Jg.save({className:"digiblocks-container-inner"});return wp.element.createElement("div",{...x},s&&s.url&&wp.element.createElement("div",{className:"digiblocks-bg-video-container"},wp.element.createElement("video",{className:"digiblocks-bg-video",autoPlay:!0,muted:!0,loop:!0,playsInline:!0,poster:oe?.url||""},wp.element.createElement("source",{src:s.url,type:"video/mp4"}))),wp.element.createElement("div",{...H}))},Qr=Yg;var{__:tl}=window.wp.i18n,{registerBlockType:Zg}=window.wp.blocks,{getBlockActiveStatus:Kg}=window.wp.digiBlocks;Zg("digiblocks/container",{apiVersion:2,title:digiBlocksData.blocks.container.title,category:"digiblocks",icon:{src:()=>{let{viewbox:te,path:e}=digiBlocksData.blocks.container.icon;return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${te}`,className:"digiblocks-editor-icons"},wp.element.createElement("path",{d:e}))}},description:digiBlocksData.blocks.container.description,keywords:[tl("container","digiblocks"),tl("section","digiblocks"),tl("row","digiblocks"),tl("layout","digiblocks"),tl("columns","digiblocks")],supports:{inserter:!!Kg("container"),html:!1,className:!1,customClassName:!1,anchor:!1},attributes:{isNested:{type:"boolean",default:!1},id:{type:"string",default:""},visibility:{type:"object",default:{desktop:!1,tablet:!1,mobile:!1}},flexWrap:{type:"object",default:{desktop:"nowrap",tablet:"nowrap",mobile:"nowrap"}},anchor:{type:"string",default:""},customClasses:{type:"string",default:""},layout:{type:"string",default:""},contentLayout:{type:"string",default:"boxed"},contentWidth:{type:"object",default:{desktop:parseInt(digiBlocksData.contentWidth)||1200,tablet:"",mobile:""}},contentMaxWidth:{type:"object",default:{desktop:parseInt(digiBlocksData.contentMaxWidth)||90,tablet:"",mobile:""}},heightType:{type:"object",default:{desktop:"auto",tablet:"auto",mobile:"auto"}},horizontalAlign:{type:"object",default:{desktop:"center",tablet:"center",mobile:"center"}},verticalAlign:{type:"object",default:{desktop:"center",tablet:"center",mobile:"center"}},minHeight:{type:"object",default:{desktop:0,tablet:0,mobile:0}},columnGap:{type:"object",default:{desktop:{value:20,unit:"px"},tablet:{value:"",unit:"px"},mobile:{value:"",unit:"px"}}},rowGap:{type:"object",default:{desktop:{value:20,unit:"px"},tablet:{value:"",unit:"px"},mobile:{value:"",unit:"px"}}},reverseColumnsMobile:{type:"boolean",default:!1},stackOnTablet:{type:"boolean",default:!1},stackOnMobile:{type:"boolean",default:!0},overflowHidden:{type:"boolean",default:!1},zIndex:{type:"number",default:0},backgroundColor:{type:"string",default:""},backgroundImage:{type:"object",default:{url:"",id:0,alt:"",size:""}},backgroundPosition:{type:"string",default:"center center"},backgroundRepeat:{type:"string",default:"no-repeat"},backgroundSize:{type:"string",default:"cover"},backgroundVideo:{type:"object",default:{url:"",id:0,alt:"",size:""}},backgroundVideoFallbackImage:{type:"object",default:{url:"",id:0,alt:"",size:""}},backgroundOverlay:{type:"string",default:""},backgroundOverlayOpacity:{type:"number",default:.7},backgroundOverlayBlendMode:{type:"string",default:"normal"},padding:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},margin:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderStyle:{type:"string",default:"none"},borderWidth:{type:"object",default:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderColor:{type:"string",default:"#e0e0e0"},borderRadius:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},boxShadow:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},boxShadowHover:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},animation:{type:"string",default:"none"}},example:{attributes:{layout:"",backgroundColor:"#f8f9fa",padding:{desktop:{top:20,right:20,bottom:20,left:20,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},innerBlocks:[],viewportWidth:500},edit:Gr,save:Qr});var{__:Ae}=window.wp.i18n,{useBlockProps:Xg,RichText:Jr,InspectorControls:Ag,PanelColorSettings:et}=window.wp.blockEditor,{SelectControl:Yr,RangeControl:ep,ToggleControl:aa,Button:mi,Tooltip:na,__experimentalToggleGroupControl:Zr,__experimentalToggleGroupControlOption:sa,TabPanel:op}=window.wp.components,{useState:Et,useEffect:Kr,useRef:tp}=window.wp.element,{useBlockId:ip,animations:il,animationPreview:Xr}=digi.utils,{tabIcons:wn}=digi.icons,{ResponsiveControl:ll,DimensionControl:ra,TypographyControl:Ar,BoxShadowControl:lp,CustomTabPanel:ap,TabPanelBody:Wt}=digi.components,np=({attributes:te,setAttributes:e,clientId:K})=>{let{id:o,anchor:P,visibility:s,customClasses:oe,items:l,titleColor:$,titleHoverColor:x,titleActiveColor:H,backgroundColor:T,backgroundHoverColor:u,backgroundActiveColor:r,contentColor:S,contentHoverColor:D,borderColor:y,borderHoverColor:v,borderRadius:_,borderWidth:L,borderStyle:B,boxShadow:O,boxShadowHover:Y,padding:A,margin:V,titleTypography:k,contentTypography:b,iconPosition:M,iconColor:le,iconHoverColor:Ve,iconActiveColor:Ce,iconSize:Z,animation:I,allowMultipleOpen:ee,iconType:F}=te;ip(o,K,e);let[Q,X]=Et(window.digi.responsiveState.activeDevice);Kr(()=>window.digi.responsiveState.subscribe(ie=>{X(ie)}),[]);let[se,ne]=Et(()=>{if(window.digi.uiState){let d=window.digi.uiState.getActiveTab(K);if(d)return d}return"options"}),[ve,J]=Et("normal"),[ce,Te]=Et("normal"),[be,N]=Et("normal"),[xe,w]=Et("normal"),[ke,U]=Et("normal"),fe=()=>{let d=[...l,{id:`item-${l.length+1}-${Date.now().toString(36)}`,title:Ae("New Accordion Item","digiblocks"),content:Ae("Add your content here.","digiblocks"),isOpen:!1}];e({items:d})},ze=d=>{let ie=[...l];ie.splice(d,1),e({items:ie})},qe=(d,ie)=>{let C=[...l];C[ie].title=d,e({items:C})},je=(d,ie)=>{let C=[...l];C[ie].content=d,e({items:C})},Fe=d=>{let ie=[...l];ee||ie.forEach((C,h)=>{h!==d&&(ie[h].isOpen=!1)}),ie[d].isOpen=!ie[d].isOpen,e({items:ie})},Ie=d=>{if(d===0)return;let ie=[...l],C=ie[d];ie[d]=ie[d-1],ie[d-1]=C,e({items:ie})},j=d=>{if(d===l.length-1)return;let ie=[...l],C=ie[d];ie[d]=ie[d+1],ie[d+1]=C,e({items:ie})},Se=d=>{let ie=l[d],C=Date.now(),h={...ie,id:`accordion-item-${K.substr(0,8)}-${C}`,isOpen:!1},Be=[...l];Be.splice(d+1,0,h),e({items:Be})},Qe=[{label:Ae("None","digiblocks"),value:"none"},{label:Ae("Solid","digiblocks"),value:"solid"},{label:Ae("Dotted","digiblocks"),value:"dotted"},{label:Ae("Dashed","digiblocks"),value:"dashed"},{label:Ae("Double","digiblocks"),value:"double"},{label:Ae("Groove","digiblocks"),value:"groove"},{label:Ae("Inset","digiblocks"),value:"inset"},{label:Ae("Outset","digiblocks"),value:"outset"},{label:Ae("Ridge","digiblocks"),value:"ridge"}],G=[{label:Ae("None","digiblocks"),value:"none"},...Object.keys(il).map(d=>({label:d.replace(/-/g," ").replace(/\b\w/g,ie=>ie.toUpperCase()),value:d}))],pe=tp(null);Kr(()=>{if(I&&I!=="none"){let d=setTimeout(()=>{Xr(o,I,il,pe)},100);return()=>clearTimeout(d)}},[I]);let R=()=>{Xr(o,I,il,pe)},p=[{name:"options",title:Ae("Options","digiblocks"),icon:wn.optionsIcon},{name:"style",title:Ae("Style","digiblocks"),icon:wn.styleIcon},{name:"advanced",title:Ae("Advanced","digiblocks"),icon:wn.advancedIcon}],re=d=>{let ie=Z[Q]||16;return F==="plusMinus"?wp.element.createElement("svg",{width:ie,height:ie,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},wp.element.createElement("path",{d:d?"M19 13H5v-2h14v2z":"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"})):F==="arrowUpDown"?wp.element.createElement("svg",{width:ie,height:ie,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},wp.element.createElement("path",{d:d?"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z":"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z"})):null},n=()=>{let d=window.digi.responsiveState.activeDevice,ie="";if(B&&B!=="none"){let ao=L&&L[d]?L[d]:{top:1,right:1,bottom:1,left:1,unit:"px"},co=_&&_[d]?_[d]:{top:8,right:8,bottom:8,left:8,unit:"px"};ie=`
                border-style: ${B};
                border-color: ${y||"#e0e0e0"};
                border-width: ${ao.top}${ao.unit} ${ao.right}${ao.unit} ${ao.bottom}${ao.unit} ${ao.left}${ao.unit};
                border-radius: ${co.top}${co.unit} ${co.right}${co.unit} ${co.bottom}${co.unit} ${co.left}${co.unit};
            `}else ie="border-style: none;";let C="box-shadow: none;";O&&O.enable&&(C=`box-shadow: ${O.position==="inset"?"inset ":""}${O.horizontal}px ${O.vertical}px ${O.blur}px ${O.spread}px ${O.color};`);let h="";Y&&Y.enable&&(h=`box-shadow: ${Y.position==="inset"?"inset ":""}${Y.horizontal}px ${Y.vertical}px ${Y.blur}px ${Y.spread}px ${Y.color};`);let Be=`padding: ${A[d].top}${A[d].unit} ${A[d].right}${A[d].unit} ${A[d].bottom}${A[d].unit} ${A[d].left}${A[d].unit};`,a=`margin: ${V[d].top}${V[d].unit} ${V[d].right}${V[d].unit} ${V[d].bottom}${V[d].unit} ${V[d].left}${V[d].unit};`,ge="";k&&(k.fontFamily&&(ge+=`font-family: ${k.fontFamily};`),k.fontSize&&k.fontSize[d]&&(ge+=`font-size: ${k.fontSize[d]}${k.fontSizeUnit||"px"};`),k.fontWeight&&(ge+=`font-weight: ${k.fontWeight};`),k.fontStyle&&(ge+=`font-style: ${k.fontStyle};`),k.textTransform&&(ge+=`text-transform: ${k.textTransform};`),k.textDecoration&&(ge+=`text-decoration: ${k.textDecoration};`),k.lineHeight&&k.lineHeight[d]&&(ge+=`line-height: ${k.lineHeight[d]}${k.lineHeightUnit||"em"};`),k.letterSpacing&&k.letterSpacing[d]&&(ge+=`letter-spacing: ${k.letterSpacing[d]}${k.letterSpacingUnit||"px"};`));let Ue="";b&&(b.fontFamily&&(Ue+=`font-family: ${b.fontFamily};`),b.fontSize&&b.fontSize[d]&&(Ue+=`font-size: ${b.fontSize[d]}${b.fontSizeUnit||"px"};`),b.fontWeight&&(Ue+=`font-weight: ${b.fontWeight};`),b.fontStyle&&(Ue+=`font-style: ${b.fontStyle};`),b.textTransform&&(Ue+=`text-transform: ${b.textTransform};`),b.textDecoration&&(Ue+=`text-decoration: ${b.textDecoration};`),b.lineHeight&&b.lineHeight[d]&&(Ue+=`line-height: ${b.lineHeight[d]}${b.lineHeightUnit||"em"};`),b.letterSpacing&&b.letterSpacing[d]&&(Ue+=`letter-spacing: ${b.letterSpacing[d]}${b.letterSpacingUnit||"px"};`));let Ke="";return I&&I!=="none"&&il[I]&&(Ke=il[I].keyframes),`
            /* Accordion item */
            .${o} .digiblocks-accordion-item {
                overflow: hidden;
                background-color: ${T||"#ffffff"};
                ${ie}
                ${C}
				${a}
                transition: all 0.3s ease;
            }

			/* Hover effects */
            .${o} .digiblocks-accordion-item:hover {
                ${u?`background-color: ${u};`:""}
                ${v?`border-color: ${v};`:""}
				${Y&&Y.enable?h:""}
            }
            
            /* Accordion header */
            .${o} .digiblocks-accordion-header {
                position: relative;
                cursor: pointer;
                ${Be}
                display: flex;
                align-items: center;
                justify-content: space-between;
				gap: .75rem;
                ${M==="left"?"flex-direction: row-reverse;":""}
                ${M==="left"?"justify-content: flex-end;":""}
                transition: background-color 0.3s ease;
            }
            
            /* Accordion title */
            .${o} .digiblocks-accordion-title {
                margin: 0;
                color: ${$||"#333333"};
                flex: 1;
                ${ge}
                transition: color 0.3s ease;
            }
            
            /* Hover effects for title */
            .${o} .digiblocks-accordion-header:hover .digiblocks-accordion-title {
                ${x?`color: ${x};`:""}
            }
            
            /* Accordion title active state */
            .${o} .digiblocks-accordion-item.is-active .digiblocks-accordion-title {
                color: ${H||"#1e73be"};
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
                width: ${Z[d]}px;
                height: ${Z[d]}px;
                transition: transform 0.3s ease, fill 0.3s ease;
            }
            
            /* Hover effects for icon */
            .${o} .digiblocks-accordion-header:hover .digiblocks-accordion-icon svg {
                ${Ve?`fill: ${Ve};`:""}
            }
            
            /* Active icon color */
            .${o} .digiblocks-accordion-item.is-active .digiblocks-accordion-icon svg {
                fill: ${Ce||"#1e73be"};
            }
            
            /* Active header background */
            .${o} .digiblocks-accordion-item.is-active .digiblocks-accordion-header {
                background-color: ${r||"#f7f7f7"};
            }
            
            /* Accordion content */
            .${o} .digiblocks-accordion-content {
                overflow: hidden;
                ${Be}
                color: ${S||"#666666"};
                ${Ue}
                transition: color 0.3s ease;
            }
            
            /* Hover effects for content */
            .${o} .digiblocks-accordion-item:hover .digiblocks-accordion-content {
                ${D?`color: ${D};`:""}
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
            ${Ke}

			/* Visibility Controls */
			${s.desktop?`
				@media (min-width: 992px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${s.tablet?`
				@media (min-width: 768px) and (max-width: 991px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${s.mobile?`
				@media (max-width: 767px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}
        `},g=()=>{switch(se){case"options":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:"components-panel__body is-opened"},wp.element.createElement(aa,{label:Ae("Allow Multiple Open","digiblocks"),checked:ee,onChange:d=>e({allowMultipleOpen:d}),help:Ae("If enabled, multiple accordion items can be open at the same time.","digiblocks"),__nextHasNoMarginBottom:!0}),wp.element.createElement(Zr,{label:Ae("Icon Type","digiblocks"),value:F,onChange:d=>e({iconType:d}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(sa,{value:"plusMinus",label:Ae("Plus/Minus","digiblocks")}),wp.element.createElement(sa,{value:"arrowUpDown",label:Ae("Up/Down","digiblocks")})),wp.element.createElement(Zr,{label:Ae("Icon Position","digiblocks"),value:M,onChange:d=>e({iconPosition:d}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(sa,{value:"left",label:Ae("Left","digiblocks")}),wp.element.createElement(sa,{value:"right",label:Ae("Right","digiblocks")})),wp.element.createElement(ll,{label:Ae("Icon Size","digiblocks")},wp.element.createElement(ep,{value:Z[Q],onChange:d=>e({iconSize:{...Z,[Q]:d}}),min:12,max:48,step:1,__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0}))));case"style":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Wt,{tab:"style",name:"colors",title:Ae("Colors","digiblocks"),initialOpen:!0},wp.element.createElement(op,{className:"digiblocks-control-tabs",activeClass:"active-tab",tabs:[{name:"normal",title:Ae("Normal","digiblocks"),className:"digiblocks-tab-1 normal"},{name:"hover",title:Ae("Hover","digiblocks"),className:"digiblocks-tab-2 hover"}],onSelect:d=>{J(d),Te(d),N(d),w(d),U(d)}},d=>d.name==="normal"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(et,{title:Ae("Title Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:$,onChange:ie=>e({titleColor:ie}),label:Ae("Title Color","digiblocks")},{value:H,onChange:ie=>e({titleActiveColor:ie}),label:Ae("Active Title Color","digiblocks")}]}),wp.element.createElement(et,{title:Ae("Icon Colors","digiblocks"),initialOpen:!1,enableAlpha:!0,colorSettings:[{value:le,onChange:ie=>e({iconColor:ie}),label:Ae("Icon Color","digiblocks")},{value:Ce,onChange:ie=>e({iconActiveColor:ie}),label:Ae("Active Icon Color","digiblocks")}]}),wp.element.createElement(et,{title:Ae("Background Colors","digiblocks"),initialOpen:!1,enableAlpha:!0,colorSettings:[{value:T,onChange:ie=>e({backgroundColor:ie}),label:Ae("Background Color","digiblocks")},{value:r,onChange:ie=>e({backgroundActiveColor:ie}),label:Ae("Active Background Color","digiblocks")}]}),wp.element.createElement(et,{title:Ae("Content Colors","digiblocks"),initialOpen:!1,enableAlpha:!0,colorSettings:[{value:S,onChange:ie=>e({contentColor:ie}),label:Ae("Content Text Color","digiblocks")}]}),wp.element.createElement(et,{title:Ae("Border Colors","digiblocks"),initialOpen:!1,enableAlpha:!0,colorSettings:[{value:y,onChange:ie=>e({borderColor:ie}),label:Ae("Border Color","digiblocks")}]})):wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(et,{title:Ae("Title Hover Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:x,onChange:ie=>e({titleHoverColor:ie}),label:Ae("Title Hover Color","digiblocks")}]}),wp.element.createElement(et,{title:Ae("Icon Hover Colors","digiblocks"),initialOpen:!1,enableAlpha:!0,colorSettings:[{value:Ve,onChange:ie=>e({iconHoverColor:ie}),label:Ae("Icon Hover Color","digiblocks")}]}),wp.element.createElement(et,{title:Ae("Background Hover Colors","digiblocks"),initialOpen:!1,enableAlpha:!0,colorSettings:[{value:u,onChange:ie=>e({backgroundHoverColor:ie}),label:Ae("Background Hover Color","digiblocks")}]}),wp.element.createElement(et,{title:Ae("Content Hover Colors","digiblocks"),initialOpen:!1,enableAlpha:!0,colorSettings:[{value:D,onChange:ie=>e({contentHoverColor:ie}),label:Ae("Content Hover Color","digiblocks")}]}),wp.element.createElement(et,{title:Ae("Border Hover Colors","digiblocks"),initialOpen:!1,enableAlpha:!0,colorSettings:[{value:v,onChange:ie=>e({borderHoverColor:ie}),label:Ae("Border Hover Color","digiblocks")}]})))),wp.element.createElement(Wt,{tab:"style",name:"typo",title:Ae("Typography","digiblocks"),initialOpen:!1},wp.element.createElement(Ar,{label:Ae("Title Typography","digiblocks"),value:k,onChange:d=>e({titleTypography:d}),defaults:{fontSize:{desktop:18,tablet:16,mobile:16},fontSizeUnit:"px",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em"}}),wp.element.createElement(Ar,{label:Ae("Content Typography","digiblocks"),value:b,onChange:d=>e({contentTypography:d}),defaults:{fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em"}})),wp.element.createElement(Wt,{tab:"style",name:"border",title:Ae("Border & Shadow","digiblocks"),initialOpen:!1},wp.element.createElement(Yr,{label:Ae("Border Style","digiblocks"),value:B,options:Qe,onChange:d=>e({borderStyle:d}),__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0}),B!=="none"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(ll,{label:Ae("Border Width","digiblocks")},wp.element.createElement(ra,{values:L[Q],onChange:d=>e({borderWidth:{...L,[Q]:d}})})),wp.element.createElement(ll,{label:Ae("Border Radius","digiblocks")},wp.element.createElement(ra,{values:_[Q],onChange:d=>e({borderRadius:{..._,[Q]:d}}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]}))),wp.element.createElement(lp,{normalValue:O,hoverValue:Y,onNormalChange:d=>e({boxShadow:d}),onHoverChange:d=>e({boxShadowHover:d})})),wp.element.createElement(Wt,{tab:"style",name:"spacing",title:Ae("Spacing","digiblocks"),initialOpen:!1},wp.element.createElement(ll,{label:Ae("Padding","digiblocks")},wp.element.createElement(ra,{values:A[Q],onChange:d=>e({padding:{...A,[Q]:d}})})),wp.element.createElement(ll,{label:Ae("Margin","digiblocks")},wp.element.createElement(ra,{values:V[Q],onChange:d=>e({margin:{...V,[Q]:d}})}))));case"advanced":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Wt,{tab:"advanced",name:"animation",title:Ae("Animation","digiblocks"),initialOpen:!0},wp.element.createElement(Yr,{label:Ae("Animation","digiblocks"),value:I,options:G,onChange:d=>e({animation:d}),__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0}),I&&I!=="none"&&wp.element.createElement("div",{style:{marginTop:"10px"}},wp.element.createElement(mi,{variant:"secondary",isSecondary:!0,onClick:R,style:{width:"100%"}},Ae("Preview Animation","digiblocks")))),wp.element.createElement(Wt,{tab:"advanced",name:"visibility",title:Ae("Visibility","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control__help",style:{padding:"12px",backgroundColor:"#f0f6fc",border:"1px solid #c3ddfd",borderRadius:"4px",marginBottom:"16px"}},wp.element.createElement("strong",null,Ae("Editor Note:","digiblocks")),wp.element.createElement("br",null),Ae("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.","digiblocks")),wp.element.createElement(aa,{label:Ae("Hide on Desktop","digiblocks"),checked:s.desktop,onChange:d=>e({visibility:{...s,desktop:d}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(aa,{label:Ae("Hide on Tablet","digiblocks"),checked:s.tablet,onChange:d=>e({visibility:{...s,tablet:d}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(aa,{label:Ae("Hide on Mobile","digiblocks"),checked:s.mobile,onChange:d=>e({visibility:{...s,mobile:d}}),__nextHasNoMarginBottom:!0})),wp.element.createElement(Wt,{tab:"advanced",name:"additional",title:Ae("Additional","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control html-anchor-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"html-anchor"},Ae("HTML anchor","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"html-anchor",value:P||"",onChange:d=>e({anchor:d.target.value}),"aria-describedby":"html-anchor-help",autoCapitalize:"none",autoComplete:"off"})),wp.element.createElement("p",{id:"html-anchor-help",className:"components-base-control__help"},Ae(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`,"digiblocks")," ",wp.element.createElement("a",{className:"components-external-link",href:"https://wordpress.org/documentation/article/page-jumps/",target:"_blank",rel:"external noreferrer noopener"},wp.element.createElement("span",{className:"components-external-link__contents"},Ae("Learn more about anchors","digiblocks")),wp.element.createElement("span",{className:"components-external-link__icon","aria-label":"(opens in a new tab)"},"\u2197")))),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"additional-css-classes"},Ae("Additional CSS class(es)","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"additional-css-classes",value:oe||"",onChange:d=>e({customClasses:d.target.value}),"aria-describedby":"additional-css-classes-help",autoComplete:"off"})),wp.element.createElement("p",{id:"additional-css-classes-help",className:"components-base-control__help"},Ae("Separate multiple classes with spaces.","digiblocks")))));default:return null}},q=Xg({className:`digiblocks-accordion ${o} ${oe||""}`,id:P||null});return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Ag,null,wp.element.createElement(ap,{tabs:p,activeTab:se,onSelect:d=>{requestAnimationFrame(()=>{ne(d)})}},g())),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:n()}}),wp.element.createElement("div",{...q},wp.element.createElement("div",{className:"digiblocks-accordion-wrapper"},l.map((d,ie)=>wp.element.createElement("div",{key:d.id,className:`digiblocks-accordion-item ${d.isOpen?"is-active":""}`},wp.element.createElement("div",{className:"digiblocks-accordion-header",onClick:()=>Fe(ie)},wp.element.createElement(Jr,{tagName:"h4",className:"digiblocks-accordion-title",value:d.title,onChange:C=>qe(C,ie),placeholder:Ae("Accordion Title","digiblocks")}),wp.element.createElement("span",{className:"digiblocks-accordion-icon"},re(d.isOpen))),wp.element.createElement("div",{className:"digiblocks-accordion-content",style:{display:d.isOpen?"block":"none"}},wp.element.createElement(Jr,{tagName:"div",value:d.content,onChange:C=>je(C,ie),placeholder:Ae("Add your content here.","digiblocks")})),wp.element.createElement("div",{className:"digiblocks-accordion-item-controls"},wp.element.createElement(na,{text:Ae("Move Up","digiblocks")},wp.element.createElement(mi,{className:"digiblocks-accordion-item-move-up",onClick:C=>{C.stopPropagation(),Ie(ie)},icon:"arrow-up-alt2",disabled:ie===0,isSmall:!0})),wp.element.createElement(na,{text:Ae("Move Down","digiblocks")},wp.element.createElement(mi,{className:"digiblocks-accordion-item-move-down",onClick:C=>{C.stopPropagation(),j(ie)},icon:"arrow-down-alt2",disabled:ie===l.length-1,isSmall:!0})),wp.element.createElement(na,{text:Ae("Duplicate","digiblocks")},wp.element.createElement(mi,{className:"digiblocks-accordion-item-duplicate",onClick:C=>{C.stopPropagation(),Se(ie)},icon:"admin-page",isSmall:!0})),wp.element.createElement(na,{text:Ae("Remove","digiblocks")},wp.element.createElement(mi,{className:"digiblocks-accordion-item-remove",onClick:C=>{C.stopPropagation(),ze(ie)},icon:"trash",isSmall:!0}))))),wp.element.createElement(mi,{variant:"primary",icon:"plus",onClick:fe,style:{width:"100%",marginTop:"20px",justifyContent:"center"}},Ae("Add Accordion Item","digiblocks")))))},ec=np;var{useBlockProps:sp,RichText:oc}=window.wp.blockEditor,rp=({attributes:te})=>{let{id:e,anchor:K,customClasses:o,items:P,iconPosition:s,iconType:oe,allowMultipleOpen:l,animation:$}=te,x=u=>oe==="plusMinus"?wp.element.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},wp.element.createElement("path",{d:u?"M19 13H5v-2h14v2z":"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"})):oe==="arrowUpDown"?wp.element.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},wp.element.createElement("path",{d:u?"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z":"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z"})):null,H=["digiblocks-accordion",e,s==="left"?"icon-position-left":"icon-position-right",l?"allow-multiple-open":"single-open",$!=="none"?`animate-${$}`:"",o||""].filter(Boolean).join(" "),T=sp.save({className:H,id:K||null,"data-icon-type":oe});return wp.element.createElement("div",{...T},wp.element.createElement("div",{className:"digiblocks-accordion-wrapper"},P.map(u=>wp.element.createElement("div",{key:u.id,className:`digiblocks-accordion-item ${u.isOpen?"is-active":""}`,"data-item-id":u.id},wp.element.createElement("div",{className:"digiblocks-accordion-header"},wp.element.createElement(oc.Content,{tagName:"h4",className:"digiblocks-accordion-title",value:u.title}),wp.element.createElement("span",{className:"digiblocks-accordion-icon"},x(u.isOpen))),wp.element.createElement("div",{className:"digiblocks-accordion-content",style:{display:u.isOpen?"block":"none"}},wp.element.createElement(oc.Content,{tagName:"div",value:u.content}))))))},tc=rp;var{__:Po}=window.wp.i18n,{registerBlockType:cp}=window.wp.blocks,{getBlockActiveStatus:dp}=window.wp.digiBlocks;cp("digiblocks/accordion",{apiVersion:2,title:digiBlocksData.blocks.accordion.title,category:"digiblocks",icon:{src:()=>{let{viewbox:te,path:e}=digiBlocksData.blocks.accordion.icon;return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${te}`,className:"digiblocks-editor-icons"},wp.element.createElement("path",{d:e}))}},description:digiBlocksData.blocks.accordion.description,keywords:[Po("accordion","digiblocks"),Po("toggle","digiblocks"),Po("collapse","digiblocks"),Po("faq","digiblocks")],supports:{inserter:!!dp("accordion"),html:!1,className:!1,customClassName:!1,anchor:!1},attributes:{id:{type:"string",default:""},anchor:{type:"string",default:""},visibility:{type:"object",default:{desktop:!1,tablet:!1,mobile:!1}},customClasses:{type:"string",default:""},items:{type:"array",default:[{id:"item-1",title:Po("Accordion Item 1","digiblocks"),content:Po("Add your content here. Edit or remove this text inline or in the module Content settings.","digiblocks"),isOpen:!0},{id:"item-2",title:Po("Accordion Item 2","digiblocks"),content:Po("Add your content here. Edit or remove this text inline or in the module Content settings.","digiblocks"),isOpen:!1}]},titleColor:{type:"string",default:"#333333"},titleHoverColor:{type:"string",default:""},titleActiveColor:{type:"string",default:"#1e73be"},backgroundColor:{type:"string",default:"#ffffff"},backgroundHoverColor:{type:"string",default:""},backgroundActiveColor:{type:"string",default:"#f7f7f7"},contentColor:{type:"string",default:"#666666"},contentHoverColor:{type:"string",default:""},borderColor:{type:"string",default:"#e0e0e0"},borderHoverColor:{type:"string",default:""},borderRadius:{type:"object",default:{desktop:{top:8,right:8,bottom:8,left:8,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderWidth:{type:"object",default:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderStyle:{type:"string",default:"solid"},boxShadow:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},boxShadowHover:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},padding:{type:"object",default:{desktop:{top:20,right:20,bottom:20,left:20,unit:"px"},tablet:{top:15,right:15,bottom:15,left:15,unit:"px"},mobile:{top:10,right:10,bottom:10,left:10,unit:"px"}}},margin:{type:"object",default:{desktop:{top:0,right:0,bottom:30,left:0,unit:"px"},tablet:{top:0,right:0,bottom:25,left:0,unit:"px"},mobile:{top:0,right:0,bottom:20,left:0,unit:"px"}}},titleTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:18,tablet:16,mobile:16},fontSizeUnit:"px",fontWeight:"600",fontStyle:"normal",textTransform:"none",textDecoration:"none",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}},contentTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",fontWeight:"",fontStyle:"normal",textTransform:"",textDecoration:"",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}},iconPosition:{type:"string",default:"right"},iconColor:{type:"string",default:"#333333"},iconHoverColor:{type:"string",default:""},iconActiveColor:{type:"string",default:"#1e73be"},iconSize:{type:"object",default:{desktop:16,tablet:14,mobile:12}},animation:{type:"string",default:"none"},allowMultipleOpen:{type:"boolean",default:!1},iconType:{type:"string",default:"plusMinus"}},example:{attributes:{items:[{id:"item-1",title:Po("Accordion Item 1","digiblocks"),content:Po("This is some sample content for the accordion item.","digiblocks"),isOpen:!0},{id:"item-2",title:Po("Accordion Item 2","digiblocks"),content:Po("Click on an accordion item to see it expand.","digiblocks"),isOpen:!1}]}},edit:ec,save:tc});var{__:ro}=window.wp.i18n,{useBlockProps:gp,RichText:pp,InspectorControls:bp,PanelColorSettings:ic,LinkControl:up}=window.wp.blockEditor,{SelectControl:lc,TabPanel:ac,ToggleControl:al,__experimentalToggleGroupControl:mp,__experimentalToggleGroupControlOption:nc}=window.wp.components,{useState:ca,useEffect:sc}=window.wp.element,{useBlockId:hp,getDimensionCSS:da}=digi.utils,{tabIcons:Sn}=digi.icons,{ResponsiveControl:ga,DimensionControl:pa,BoxShadowControl:fp,TypographyControl:kp,CustomTabPanel:vp,TabPanelBody:Wo,FontAwesomeControl:k1}=digi.components,xp=({attributes:te,setAttributes:e,clientId:K,isSelected:o})=>{let{id:P,anchor:s,visibility:oe,customClasses:l,text:$,url:x,opensInNewTab:H,rel:T,iconValue:u,iconPosition:r,size:S,fill:D,textColor:y,textHoverColor:v,backgroundColor:_,backgroundHoverColor:L,borderStyle:B,borderWidth:O,borderRadius:Y,borderColor:A,borderHoverColor:V,boxShadow:k,boxShadowHover:b,padding:M,margin:le,onlyIcon:Ve,buttonTypography:Ce}=te;hp(P,K,e);let[Z,I]=ca(window.digi.responsiveState.activeDevice),[ee,F]=ca(!1),[Q,X]=ca(()=>{if(window.digi.uiState){let U=window.digi.uiState.getActiveTab(K);if(U)return U}return"options"}),[se,ne]=ca(!1);sc(()=>{let U=()=>window.digi&&window.digi.components&&window.digi.components.FontAwesomeControl?(ne(!0),!0):!1;if(!U()){let fe=setTimeout(()=>{U()&&clearTimeout(fe)},500);return()=>clearTimeout(fe)}},[]),sc(()=>window.digi.responsiveState.subscribe(fe=>{I(fe)}),[]);let ve=[{label:ro("Default","digiblocks"),value:"default"},{label:ro("None","digiblocks"),value:"none"},{label:ro("Solid","digiblocks"),value:"solid"},{label:ro("Dotted","digiblocks"),value:"dotted"},{label:ro("Dashed","digiblocks"),value:"dashed"},{label:ro("Double","digiblocks"),value:"double"},{label:ro("Groove","digiblocks"),value:"groove"},{label:ro("Inset","digiblocks"),value:"inset"},{label:ro("Outset","digiblocks"),value:"outset"},{label:ro("Ridge","digiblocks"),value:"ridge"}],J=[{label:ro("Small","digiblocks"),value:"small"},{label:ro("Medium","digiblocks"),value:"medium"},{label:ro("Large","digiblocks"),value:"large"},{label:ro("Custom","digiblocks"),value:"custom"}],ce=[{name:"options",title:ro("Options","digiblocks"),icon:Sn.optionsIcon},{name:"style",title:ro("Style","digiblocks"),icon:Sn.styleIcon},{name:"advanced",title:ro("Advanced","digiblocks"),icon:Sn.advancedIcon}],Te=[{name:"normal",title:ro("Normal","digiblocks"),className:"digiblocks-tab-1 normal"},{name:"hover",title:ro("Hover","digiblocks"),className:"digiblocks-tab-2 hover"}],be=se?window.digi.components.FontAwesomeControl:null,N=()=>{let U=Z,fe="";S==="custom"?fe=da(M,"padding",U):S==="small"?fe="padding: 8px 16px;":S==="large"?fe="padding: 16px 32px;":fe="padding: 12px 24px;";let ze="";if(B&&B!=="default"&&B!=="none"){let Qe=da(O,"border-width",U)||"border-width: 1px 1px 1px 1px;";ze=`
                border-style: ${B};
                border-color: ${A||"#333333"};
                ${Qe}
            `}else ze="border: none;";let qe="";qe=da(Y,"border-radius",U);let je="box-shadow: none;";k&&k.enable&&(je=`box-shadow: ${k.position==="inset"?"inset ":""}${k.horizontal}px ${k.vertical}px ${k.blur}px ${k.spread}px ${k.color};`);let Fe=da(le,"margin",U),Ie="";if(b&&b.enable){let Se=b.position==="inset"?"inset ":"";Ie+=`box-shadow: ${Se}${b.horizontal}px ${b.vertical}px ${b.blur}px ${b.spread}px ${b.color};`}let j="";return Ce&&(Ce.fontFamily&&(j+=`font-family: ${Ce.fontFamily};`),Ce.fontSize&&Ce.fontSize[U]&&(j+=`font-size: ${Ce.fontSize[U]}${Ce.fontSizeUnit||"px"};`),Ce.fontWeight&&(j+=`font-weight: ${Ce.fontWeight};`),Ce.fontStyle&&(j+=`font-style: ${Ce.fontStyle};`),Ce.textTransform&&(j+=`text-transform: ${Ce.textTransform};`),Ce.textDecoration&&(j+=`text-decoration: ${Ce.textDecoration};`),Ce.lineHeight&&Ce.lineHeight[U]&&(j+=`line-height: ${Ce.lineHeight[U]}${Ce.lineHeightUnit||"em"};`),Ce.letterSpacing&&Ce.letterSpacing[U]&&(j+=`letter-spacing: ${Ce.letterSpacing[U]}${Ce.letterSpacingUnit||"px"};`)),`
            /* Button Block - ${P} */
            .${P} {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                text-decoration: none;
                cursor: pointer;
                transition: all 0.3s ease;
                ${fe}
                ${ze}
                ${qe}
                ${je}
                ${Fe}
                ${D?"width: 100%;":""}
                gap: 8px; /* Space between icon and text */
                ${_?`background-color: ${_};`:""}
                ${y?`color: ${y};`:""}
            }
            
            .${P}:hover {
                ${v?`color: ${v};`:""}
                ${L?`background-color: ${L};`:""}
                ${V?`border-color: ${V};`:""}
                ${Ie}
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
			${oe.desktop?`
				@media (min-width: 992px) {
					.${P} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${oe.tablet?`
				@media (min-width: 768px) and (max-width: 991px) {
					.${P} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${oe.mobile?`
				@media (max-width: 767px) {
					.${P} {
						opacity: 0.5 !important;
					}
				}
			`:""}
        `},xe=()=>{let U=u&&u.svg?wp.element.createElement("span",{key:"icon",className:"digiblocks-button-icon",dangerouslySetInnerHTML:{__html:u.svg}}):null,fe=Ve?null:wp.element.createElement(pp,{key:"text",value:$,onChange:ze=>e({text:ze}),placeholder:ro("Add text\u2026","digiblocks"),allowedFormats:[],withoutInteractiveFormatting:!0,identifier:"text"});return r==="left"?[U,fe].filter(Boolean):[fe,U].filter(Boolean)},w=()=>{switch(Q){case"options":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Wo,{tab:"options",name:"icon",title:ro("Icon","digiblocks"),initialOpen:!0},se?wp.element.createElement(be,{label:ro("Select Icon","digiblocks"),value:u,onChange:U=>e({iconValue:U})}):wp.element.createElement("div",{style:{textAlign:"center",padding:"20px 0"}},wp.element.createElement("div",{className:"components-spinner"}),wp.element.createElement("p",null,ro("Loading icon selector...","digiblocks"))),u&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(al,{label:ro("Only Icon","digiblocks"),checked:Ve,onChange:U=>e({onlyIcon:U}),__nextHasNoMarginBottom:!0}),!Ve&&wp.element.createElement(mp,{label:ro("Icon Position","digiblocks"),value:r,onChange:U=>e({iconPosition:U}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(nc,{value:"left",label:ro("Left","digiblocks")}),wp.element.createElement(nc,{value:"right",label:ro("Right","digiblocks")})))),wp.element.createElement(Wo,{tab:"options",name:"link",title:ro("Link","digiblocks"),initialOpen:!1},wp.element.createElement(up,{value:x?{url:x,opensInNewTab:H,rel:T}:void 0,onChange:U=>{e({url:U.url,opensInNewTab:U.opensInNewTab,rel:U.rel||""}),F(!1)},settings:[{id:"opensInNewTab",title:ro("Open in new tab")},{id:"rel",title:ro("Add noopener noreferrer")}],onRemove:()=>{e({url:"",opensInNewTab:!1,rel:""}),F(!1)}})),wp.element.createElement(Wo,{tab:"options",name:"size",title:ro("Size and Fill","digiblocks"),initialOpen:!1},wp.element.createElement(lc,{label:ro("Size","digiblocks"),value:S,options:J,onChange:U=>e({size:U}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(al,{label:ro("Expand to Container Width","digiblocks"),checked:D,onChange:U=>e({fill:U}),__nextHasNoMarginBottom:!0})));case"style":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Wo,{tab:"style",name:"typography",title:ro("Typography","digiblocks"),initialOpen:!0},wp.element.createElement(kp,{label:ro("Button Typography","digiblocks"),value:Ce,onChange:U=>e({buttonTypography:U}),defaults:{fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em"}})),wp.element.createElement(Wo,{tab:"style",name:"colors",title:ro("Colors","digiblocks"),initialOpen:!0},wp.element.createElement(ac,{className:"digiblocks-control-tabs",activeClass:"active-tab",tabs:Te},U=>wp.element.createElement(ic,{title:U.name==="normal"?ro("Normal Colors","digiblocks"):ro("Hover Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:U.name==="normal"?y:v,onChange:fe=>e(U.name==="normal"?{textColor:fe}:{textHoverColor:fe}),label:ro("Text Color","digiblocks")},{value:U.name==="normal"?_:L,onChange:fe=>e(U.name==="normal"?{backgroundColor:fe}:{backgroundHoverColor:fe}),label:ro("Background Color","digiblocks")}]}))),S==="custom"&&wp.element.createElement(Wo,{tab:"style",name:"spacing",title:ro("Spacing","digiblocks"),initialOpen:!1},wp.element.createElement(ga,{label:ro("Padding","digiblocks")},wp.element.createElement(pa,{values:M[Z],onChange:U=>e({padding:{...M,[Z]:U}})}))),wp.element.createElement(Wo,{tab:"style",name:"margin",title:ro("Margin","digiblocks"),initialOpen:!1},wp.element.createElement(ga,{label:ro("Margin","digiblocks")},wp.element.createElement(pa,{values:le[Z],onChange:U=>e({margin:{...le,[Z]:U}})}))),wp.element.createElement(Wo,{tab:"style",name:"box-style",title:ro("Box Style","digiblocks"),initialOpen:!1},wp.element.createElement(lc,{label:ro("Border Style","digiblocks"),value:B||"default",options:ve,onChange:U=>{U!=="default"&&U!=="none"&&(B==="default"||B==="none"||!B)&&(!O||Object.keys(O).length===0)&&e({borderWidth:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}}),e({borderStyle:U})},__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),B&&B!=="default"&&B!=="none"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(ac,{className:"digiblocks-control-tabs",activeClass:"active-tab",tabs:Te},U=>wp.element.createElement(ic,{title:ro("Border Colors","digiblocks"),enableAlpha:!0,colorSettings:[{value:U.name==="normal"?A:V,onChange:fe=>e(U.name==="normal"?{borderColor:fe}:{borderHoverColor:fe}),label:ro("Border Color","digiblocks")}]})),wp.element.createElement(ga,{label:ro("Border Width","digiblocks")},wp.element.createElement(pa,{values:O[Z],onChange:U=>e({borderWidth:{...O,[Z]:U}})}))),wp.element.createElement(ga,{label:ro("Border Radius","digiblocks")},wp.element.createElement(pa,{values:Y[Z],onChange:U=>e({borderRadius:{...Y,[Z]:U}}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]}))),wp.element.createElement(Wo,{tab:"style",name:"shadow",title:ro("Box Shadow","digiblocks"),initialOpen:!1},wp.element.createElement(fp,{normalValue:k,hoverValue:b,onNormalChange:U=>e({boxShadow:U}),onHoverChange:U=>e({boxShadowHover:U})})));case"advanced":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Wo,{tab:"advanced",name:"visibility",title:ro("Visibility","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control__help",style:{padding:"12px",backgroundColor:"#f0f6fc",border:"1px solid #c3ddfd",borderRadius:"4px",marginBottom:"16px"}},wp.element.createElement("strong",null,ro("Editor Note:","digiblocks")),wp.element.createElement("br",null),ro("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.","digiblocks")),wp.element.createElement(al,{label:ro("Hide on Desktop","digiblocks"),checked:oe.desktop,onChange:U=>e({visibility:{...oe,desktop:U}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(al,{label:ro("Hide on Tablet","digiblocks"),checked:oe.tablet,onChange:U=>e({visibility:{...oe,tablet:U}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(al,{label:ro("Hide on Mobile","digiblocks"),checked:oe.mobile,onChange:U=>e({visibility:{...oe,mobile:U}}),__nextHasNoMarginBottom:!0})),wp.element.createElement(Wo,{tab:"advanced",name:"additional",title:ro("Additional","digiblocks"),initialOpen:!0},wp.element.createElement("div",{className:"components-base-control html-anchor-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"html-anchor"},ro("HTML anchor","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"html-anchor",value:s||"",onChange:U=>e({anchor:U.target.value}),"aria-describedby":"html-anchor-help",autoCapitalize:"none",autoComplete:"off"})),wp.element.createElement("p",{id:"html-anchor-help",className:"components-base-control__help"},ro(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`,"digiblocks")," ",wp.element.createElement("a",{className:"components-external-link",href:"https://wordpress.org/documentation/article/page-jumps/",target:"_blank",rel:"external noreferrer noopener"},wp.element.createElement("span",{className:"components-external-link__contents"},ro("Learn more about anchors","digiblocks")),wp.element.createElement("span",{className:"components-external-link__icon","aria-label":"(opens in a new tab)"},"\u2197")))),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"additional-css-classes"},ro("Additional CSS class(es)","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"additional-css-classes",value:l||"",onChange:U=>e({customClasses:U.target.value}),"aria-describedby":"additional-css-classes-help",autoComplete:"off"})),wp.element.createElement("p",{id:"additional-css-classes-help",className:"components-base-control__help"},ro("Separate multiple classes with spaces.","digiblocks")))));default:return null}},ke=gp({className:`digiblocks-button ${P} ${S} ${D?"is-fill":""} ${l||""}`,id:s||null});return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(bp,null,wp.element.createElement(vp,{tabs:ce,activeTab:Q,onSelect:X},w())),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:N()}}),wp.element.createElement("div",{...ke},xe()))},rc=xp;var{useBlockProps:cc,RichText:yp}=window.wp.blockEditor,Cp=({attributes:te})=>{let{id:e,anchor:K,customClasses:o,text:P,url:s,opensInNewTab:oe,rel:l,iconValue:$,iconPosition:x,size:H,fill:T,onlyIcon:u}=te,r=["digiblocks-button",e,H,T?"is-fill":"",o||""].filter(Boolean).join(" "),S=wp.element.createElement(wp.element.Fragment,null,$&&$.svg&&x==="left"&&wp.element.createElement("span",{className:"digiblocks-button-icon",dangerouslySetInnerHTML:{__html:$.svg}}),!u&&wp.element.createElement(yp.Content,{value:P}),$&&$.svg&&x==="right"&&wp.element.createElement("span",{className:"digiblocks-button-icon",dangerouslySetInnerHTML:{__html:$.svg}}));return s?wp.element.createElement("a",{...cc.save({className:r,id:K||null,href:s,target:oe?"_blank":void 0,rel:l?"noopener noreferrer":void 0})},S):wp.element.createElement("div",{...cc.save({className:r,id:K||null})},S)},dc=Cp;var{__:ba}=window.wp.i18n,{registerBlockType:Sp}=window.wp.blocks;Sp("digiblocks/button",{apiVersion:2,title:ba("Button","digiblocks"),parent:["digiblocks/buttons"],icon:{src:()=>wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24"},wp.element.createElement("path",{d:"M19 6.5H5c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7c0-1.1-.9-2-2-2zm0 9H5v-7h14v7z"}))},description:ba("A single button within the buttons block","digiblocks"),supports:{inserter:!1,html:!1,className:!1,customClassName:!1,anchor:!1,reusable:!1},attributes:{id:{type:"string",default:""},anchor:{type:"string",default:""},visibility:{type:"object",default:{desktop:!1,tablet:!1,mobile:!1}},customClasses:{type:"string",default:""},text:{type:"string",default:ba("Button","digiblocks")},url:{type:"string",default:""},opensInNewTab:{type:"boolean",default:!1},rel:{type:"boolean",default:!1},iconValue:{type:"object",default:null},iconPosition:{type:"string",default:"left"},size:{type:"string",default:"medium"},fill:{type:"boolean",default:!1},buttonTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",fontWeight:"",fontStyle:"normal",textTransform:"",textDecoration:"",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}},textColor:{type:"string",default:"#ffffff"},textHoverColor:{type:"string",default:""},backgroundColor:{type:"string",default:"#1e73be"},backgroundHoverColor:{type:"string",default:""},borderStyle:{type:"string",default:"default"},borderWidth:{type:"object",default:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderRadius:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderColor:{type:"string",default:""},borderHoverColor:{type:"string",default:""},boxShadow:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},boxShadowHover:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},padding:{type:"object",default:{desktop:{top:12,right:24,bottom:12,left:24,unit:"px"},tablet:{top:10,right:20,bottom:10,left:20,unit:"px"},mobile:{top:8,right:16,bottom:8,left:16,unit:"px"}}},margin:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},onlyIcon:{type:"boolean",default:!1}},example:{attributes:{text:ba("Button","digiblocks"),backgroundColor:"#1e73be",textColor:"#ffffff"}},edit:rc,save:dc});var{__:fo}=window.wp.i18n,{useBlockProps:$p,useInnerBlocksProps:_p,InspectorControls:Bp}=window.wp.blockEditor,{SelectControl:Tp,RangeControl:Np,ToggleControl:$n,Button:Hp,__experimentalToggleGroupControl:gc,__experimentalToggleGroupControlOption:nl}=window.wp.components,{useState:pc,useEffect:zp}=window.wp.element,{useBlockId:Mp,animations:Dp,animationPreview:w1}=digi.utils,{tabIcons:bc}=digi.icons,{ResponsiveControl:Pp,CustomTabPanel:Rp,TabPanelBody:_n}=digi.components,Ip=({attributes:te,setAttributes:e,clientId:K})=>{let{id:o,anchor:P,visibility:s,customClasses:oe,layout:l,align:$,buttonSpacing:x,animation:H}=te,[T,u]=pc(window.digi.responsiveState.activeDevice),[r,S]=pc(()=>{if(window.digi.uiState){let A=window.digi.uiState.getActiveTab(K);if(A)return A}return"options"});zp(()=>window.digi.responsiveState.subscribe(V=>{u(V)}),[]),Mp(o,K,e);let D=[{label:fo("None","digiblocks"),value:"none"},...Object.keys(Dp).map(A=>({label:A.replace(/-/g," ").replace(/\b\w/g,V=>V.toUpperCase()),value:A}))],y=[{name:"options",title:fo("Options","digiblocks"),icon:bc.optionsIcon},{name:"advanced",title:fo("Advanced","digiblocks"),icon:bc.advancedIcon}],v=()=>{let A=window.digi.responsiveState.activeDevice;return`
            /* Buttons Block - ${o} */
            .${o} {
                display: flex;
                flex-wrap: wrap;
                ${l==="vertical"?"flex-direction: column;":""}
                align-items: ${$};
                gap: ${x[A]}px;
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
			${s.desktop?`
				@media (min-width: 992px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${s.tablet?`
				@media (min-width: 768px) and (max-width: 991px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${s.mobile?`
				@media (max-width: 767px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}
        `},_=()=>{switch(r){case"options":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:"components-panel__body is-opened"},wp.element.createElement(gc,{label:fo("Layout","digiblocks"),value:l,onChange:A=>e({layout:A}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(nl,{value:"horizontal",label:fo("Horizontal","digiblocks")}),wp.element.createElement(nl,{value:"vertical",label:fo("Vertical","digiblocks")})),wp.element.createElement(gc,{label:fo("Alignment","digiblocks"),value:$,onChange:A=>e({align:A}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(nl,{value:"flex-start",label:fo(l==="horizontal"?"Top":"Left","digiblocks")}),wp.element.createElement(nl,{value:"center",label:fo("Center","digiblocks")}),wp.element.createElement(nl,{value:"flex-end",label:fo(l==="horizontal"?"Bottom":"Right","digiblocks")})),wp.element.createElement(Pp,{label:fo("Button Spacing","digiblocks")},wp.element.createElement(Np,{value:x[T],onChange:A=>e({buttonSpacing:{...x,[T]:A}}),min:0,max:50,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}))));case"advanced":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(_n,{tab:"advanced",name:"animation",title:fo("Animation","digiblocks"),initialOpen:!0},wp.element.createElement(Tp,{label:fo("Animation Effect","digiblocks"),value:H,options:D,onChange:A=>e({animation:A}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(_n,{tab:"advanced",name:"visibility",title:fo("Visibility","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control__help",style:{padding:"12px",backgroundColor:"#f0f6fc",border:"1px solid #c3ddfd",borderRadius:"4px",marginBottom:"16px"}},wp.element.createElement("strong",null,fo("Editor Note:","digiblocks")),wp.element.createElement("br",null),fo("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.","digiblocks")),wp.element.createElement($n,{label:fo("Hide on Desktop","digiblocks"),checked:s.desktop,onChange:A=>e({visibility:{...s,desktop:A}}),__nextHasNoMarginBottom:!0}),wp.element.createElement($n,{label:fo("Hide on Tablet","digiblocks"),checked:s.tablet,onChange:A=>e({visibility:{...s,tablet:A}}),__nextHasNoMarginBottom:!0}),wp.element.createElement($n,{label:fo("Hide on Mobile","digiblocks"),checked:s.mobile,onChange:A=>e({visibility:{...s,mobile:A}}),__nextHasNoMarginBottom:!0})),wp.element.createElement(_n,{tab:"advanced",name:"additional",title:fo("Additional","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control html-anchor-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"html-anchor"},fo("HTML anchor","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"html-anchor",value:P||"",onChange:A=>e({anchor:A.target.value}),"aria-describedby":"html-anchor-help",autoCapitalize:"none",autoComplete:"off"})),wp.element.createElement("p",{id:"html-anchor-help",className:"components-base-control__help"},fo(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`,"digiblocks")," ",wp.element.createElement("a",{className:"components-external-link",href:"https://wordpress.org/documentation/article/page-jumps/",target:"_blank",rel:"external noreferrer noopener"},wp.element.createElement("span",{className:"components-external-link__contents"},fo("Learn more about anchors","digiblocks")),wp.element.createElement("span",{className:"components-external-link__icon","aria-label":"(opens in a new tab)"},"\u2197")))),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"additional-css-classes"},fo("Additional CSS class(es)","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"additional-css-classes",value:oe||"",onChange:A=>e({customClasses:A.target.value}),"aria-describedby":"additional-css-classes-help",autoComplete:"off"})),wp.element.createElement("p",{id:"additional-css-classes-help",className:"components-base-control__help"},fo("Separate multiple classes with spaces.","digiblocks")))));default:return null}},L=$p({className:`digiblocks-buttons-block ${o} ${oe||""}`,id:P||null}),Y=_p(L,{allowedBlocks:["digiblocks/button"],template:[["digiblocks/button",{}]],renderAppender:!1,orientation:l==="vertical"?"vertical":"horizontal"});return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Bp,null,wp.element.createElement(Rp,{tabs:y,activeTab:r,onSelect:S},_())),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:v()}}),wp.element.createElement("div",{...Y},Y.children,wp.element.createElement("div",{className:"digiblocks-button-inserter"},wp.element.createElement(Hp,{variant:"primary",isSmall:!0,icon:"plus",onClick:()=>{let A=window.wp.blocks.createBlock("digiblocks/button");window.wp.data.dispatch("core/block-editor").insertBlock(A,void 0,K)}},fo("Add","digiblocks")))))},uc=Ip;var{useBlockProps:Lp,useInnerBlocksProps:Op}=window.wp.blockEditor,Up=({attributes:te})=>{let{id:e,anchor:K,customClasses:o,animation:P}=te,s=["digiblocks-buttons-block",e,P!=="none"?`animate-${P}`:"",o||""].filter(Boolean).join(" "),oe=Lp.save({className:s,id:K||null}),l=Op.save(oe);return wp.element.createElement("div",{...l})},mc=Up;var{__:sl}=window.wp.i18n,{registerBlockType:jp}=window.wp.blocks,{getBlockActiveStatus:Vp}=window.wp.digiBlocks;jp("digiblocks/buttons",{apiVersion:2,title:digiBlocksData.blocks.buttons.title,category:"digiblocks",icon:{src:()=>{let{viewbox:te,path:e}=digiBlocksData.blocks.buttons.icon;return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${te}`,className:"digiblocks-editor-icons"},wp.element.createElement("path",{d:e}))}},description:digiBlocksData.blocks.buttons.description,keywords:[sl("buttons","digiblocks"),sl("button group","digiblocks"),sl("link","digiblocks")],supports:{inserter:!!Vp("buttons"),html:!1,className:!1,customClassName:!1,anchor:!1},attributes:{id:{type:"string",default:""},anchor:{type:"string",default:""},visibility:{type:"object",default:{desktop:!1,tablet:!1,mobile:!1}},customClasses:{type:"string",default:""},layout:{type:"string",default:"horizontal"},align:{type:"string",default:"flex-start"},buttonSpacing:{type:"object",default:{desktop:10,tablet:8,mobile:6}},animation:{type:"string",default:"none"}},example:{innerBlocks:[{name:"digiblocks/button",attributes:{text:sl("Call to Action","digiblocks")}},{name:"digiblocks/button",attributes:{text:sl("Learn More","digiblocks")}}]},edit:uc,save:mc});var{__:ae}=window.wp.i18n,{useBlockProps:Fp,RichText:hi,InspectorControls:Ep,PanelColorSettings:qo,BlockControls:Wp,AlignmentToolbar:qp,MediaUpload:Bn,MediaUploadCheck:Tn}=window.wp.blockEditor,{SelectControl:qt,RangeControl:Nn,ToggleControl:ot,Button:Gt,__experimentalToggleGroupControl:Hn,__experimentalToggleGroupControlOption:zn,TabPanel:Gp,TextControl:ua,BaseControl:hc}=window.wp.components,{useState:Mn,useEffect:Dn,useRef:Qp}=window.wp.element,{useBlockId:Jp,getDimensionCSS:Co,animations:Pn,animationPreview:fc}=digi.utils,{tabIcons:Rn}=digi.icons,{ResponsiveControl:Bt,DimensionControl:fi,TypographyControl:In,BoxShadowControl:Yp,CustomTabPanel:Zp,TabPanelBody:Ro}=digi.components,Kp=({attributes:te,setAttributes:e,clientId:K})=>{let{id:o,anchor:P,visibility:s,customClasses:oe,style:l,horizontalLayout:$,title:x,content:H,headingTag:T,titleColor:u,textColor:r,buttonColor:S,buttonTextColor:D,backgroundColor:y,backgroundType:v,backgroundImage:_,backgroundOverlayColor:L,backgroundOverlayOpacity:B,backgroundPosition:O,backgroundSize:Y,backgroundRepeat:A,borderStyle:V,borderWidth:k,borderRadius:b,borderColor:M,padding:le,margin:Ve,align:Ce,titleTypography:Z,contentTypography:I,buttonTypography:ee,contentWidth:F,width:Q,animation:X,boxShadow:se,boxShadowHover:ne,buttonBorderRadius:ve,buttonPadding:J,buttonsAlign:ce,buttons:Te,titleHoverColor:be,textHoverColor:N,buttonHoverColor:xe,buttonTextHoverColor:w,backgroundHoverColor:ke,highlightText:U,highlightColor:fe,highlightType:ze,verticalAlign:qe,reverseColumnsMobile:je,minHeight:Fe}=te,[Ie,j]=Mn(window.digi.responsiveState.activeDevice),[Se,Qe]=Mn(!1);Dn(()=>window.digi.responsiveState.subscribe(E=>{j(E)}),[]);let[G,pe]=Mn(()=>{if(window.digi.uiState){let i=window.digi.uiState.getActiveTab(K);if(i)return i}return"options"});Jp(o,K,e),Dn(()=>{(!Te||!Array.isArray(Te)||Te.length===0)&&e({buttons:[{id:"button-1",text:ae("Click Here","digiblocks"),url:"#",openInNewTab:!1,rel:"",isPrimary:!0,isFullWidth:!1,customColors:!1,backgroundColor:"",textColor:"",hoverBackgroundColor:"",hoverTextColor:"",borderRadius:""}]}),Z||e({titleTypography:{fontFamily:"",fontSize:{desktop:36,tablet:32,mobile:28},fontSizeUnit:"px",fontWeight:"700",fontStyle:"normal",textTransform:"none",textDecoration:"none",lineHeight:{desktop:1.2,tablet:1.2,mobile:1.2},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}}),I||e({contentTypography:{fontFamily:"",fontSize:{desktop:18,tablet:16,mobile:16},fontSizeUnit:"px",fontWeight:"400",fontStyle:"normal",textTransform:"none",textDecoration:"none",lineHeight:{desktop:1.6,tablet:1.6,mobile:1.5},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}}),ee||e({buttonTypography:{fontFamily:"",fontSize:{desktop:16,tablet:16,mobile:16},fontSizeUnit:"px",fontWeight:"500",fontStyle:"normal",textTransform:"none",textDecoration:"none",lineHeight:{desktop:1.5,tablet:1.5,mobile:1.5},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}}),ne||e({boxShadowHover:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}})},[Te,Z,I,ee,ne,e]);let R=Qp(null);Dn(()=>{if(X&&X!=="none"){let i=setTimeout(()=>{fc(o,X,Pn,R)},100);return()=>clearTimeout(i)}},[X]);let p=()=>{fc(o,X,Pn,R)},re=[{label:ae("None","digiblocks"),value:"none"},{label:ae("Solid","digiblocks"),value:"solid"},{label:ae("Dotted","digiblocks"),value:"dotted"},{label:ae("Dashed","digiblocks"),value:"dashed"},{label:ae("Double","digiblocks"),value:"double"},{label:ae("Groove","digiblocks"),value:"groove"},{label:ae("Ridge","digiblocks"),value:"ridge"},{label:ae("Inset","digiblocks"),value:"inset"},{label:ae("Outset","digiblocks"),value:"outset"}],n=[{label:ae("None","digiblocks"),value:"none"},...Object.keys(Pn).map(i=>({label:i.replace(/-/g," ").replace(/\b\w/g,E=>E.toUpperCase()),value:i}))],g=[{label:ae("Basic","digiblocks"),value:"basic"},{label:ae("Split","digiblocks"),value:"split"},{label:ae("Cover","digiblocks"),value:"cover"},{label:ae("Box","digiblocks"),value:"box"},{label:ae("Modern","digiblocks"),value:"modern"},{label:ae("Gradient","digiblocks"),value:"gradient"},{label:ae("Minimal","digiblocks"),value:"minimal"},{label:ae("Callout","digiblocks"),value:"callout"},{label:ae("Banner","digiblocks"),value:"banner"}],q=[{label:"H1",value:"h1"},{label:"H2",value:"h2"},{label:"H3",value:"h3"},{label:"H4",value:"h4"},{label:"H5",value:"h5"},{label:"H6",value:"h6"}],d=[{label:ae("Color","digiblocks"),value:"color"},{label:ae("Image","digiblocks"),value:"image"},{label:ae("Gradient","digiblocks"),value:"gradient"}],ie=[{label:ae("Center Center","digiblocks"),value:"center center"},{label:ae("Center Top","digiblocks"),value:"center top"},{label:ae("Center Bottom","digiblocks"),value:"center bottom"},{label:ae("Left Top","digiblocks"),value:"left top"},{label:ae("Left Center","digiblocks"),value:"left center"},{label:ae("Left Bottom","digiblocks"),value:"left bottom"},{label:ae("Right Top","digiblocks"),value:"right top"},{label:ae("Right Center","digiblocks"),value:"right center"},{label:ae("Right Bottom","digiblocks"),value:"right bottom"}],C=[{label:ae("Cover","digiblocks"),value:"cover"},{label:ae("Contain","digiblocks"),value:"contain"},{label:ae("Auto","digiblocks"),value:"auto"}],h=[{label:ae("No Repeat","digiblocks"),value:"no-repeat"},{label:ae("Repeat","digiblocks"),value:"repeat"},{label:ae("Repeat X","digiblocks"),value:"repeat-x"},{label:ae("Repeat Y","digiblocks"),value:"repeat-y"}],Be=[{label:ae("Left","digiblocks"),value:"left"},{label:ae("Center","digiblocks"),value:"center"},{label:ae("Right","digiblocks"),value:"right"}],a=[{label:ae("Top","digiblocks"),value:"flex-start"},{label:ae("Center","digiblocks"),value:"center"},{label:ae("Bottom","digiblocks"),value:"flex-end"}],ge=[{label:ae("None","digiblocks"),value:"none"},{label:ae("Background","digiblocks"),value:"background"},{label:ae("Text","digiblocks"),value:"text"},{label:ae("Underline","digiblocks"),value:"underline"}],Ue={width:300,height:200},Ke=[{name:"options",title:ae("Options","digiblocks"),icon:Rn.optionsIcon},{name:"style",title:ae("Style","digiblocks"),icon:Rn.styleIcon},{name:"advanced",title:ae("Advanced","digiblocks"),icon:Rn.advancedIcon}],ao=[{name:"normal",title:ae("Normal","digiblocks"),className:"digiblocks-tab-1 normal"},{name:"hover",title:ae("Hover","digiblocks"),className:"digiblocks-tab-2 hover"}],co=()=>{let i=`button-${Te.length+1}`,E=[...Te,{id:i,text:ae("Click Here","digiblocks"),url:"#",openInNewTab:!1,rel:"",isPrimary:!1,isFullWidth:!1,customColors:!1,backgroundColor:"",textColor:"",hoverBackgroundColor:"",hoverTextColor:"",borderRadius:""}];e({buttons:E})},t=i=>{let E=Te.filter(Oe=>Oe.id!==i);e({buttons:E})},m=(i,E,Oe)=>{let bo=Te.map(z=>z.id===i?{...z,[E]:Oe}:z);e({buttons:bo})},Me=i=>{let E=l===i.value,Oe={display:"inline-flex",flexDirection:"column",width:"70px",height:"70px",margin:"5px",border:`1px solid ${E?"#007cba":"#ddd"}`,backgroundColor:E?"rgba(0,124,186,0.1)":"white",borderRadius:"4px",cursor:"pointer",overflow:"hidden",transition:"all 0.2s ease"},bo={textAlign:"center",fontSize:"10px",padding:"3px 0",fontWeight:E?"500":"normal",borderBottom:`1px solid ${E?"#e0e0e0":"transparent"}`,backgroundColor:E?"rgba(0,124,186,0.05)":"transparent"},z={flex:1,display:"flex",justifyContent:"center",alignItems:"center",padding:"8px"},Xe=null;switch(i.value){case"basic":Xe=wp.element.createElement("div",{style:{width:"100%",height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}},wp.element.createElement("div",{style:{width:"80%",height:"4px",backgroundColor:"#333",marginBottom:"4px"}}),wp.element.createElement("div",{style:{width:"60%",height:"2px",backgroundColor:"#777",marginBottom:"6px"}}),wp.element.createElement("div",{style:{width:"40%",height:"6px",backgroundColor:"#007cba",borderRadius:"2px"}}));break;case"split":Xe=wp.element.createElement("div",{style:{width:"100%",height:"100%",display:"flex"}},wp.element.createElement("div",{style:{width:"50%",height:"100%",backgroundColor:"#007cba",display:"flex",alignItems:"center",justifyContent:"center"}},wp.element.createElement("div",{style:{width:"70%",height:"70%",backgroundColor:"#fff",opacity:.2}})),wp.element.createElement("div",{style:{width:"50%",height:"100%",backgroundColor:"#f5f5f5",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"2px"}},wp.element.createElement("div",{style:{width:"80%",height:"3px",backgroundColor:"#333",marginBottom:"2px"}}),wp.element.createElement("div",{style:{width:"60%",height:"2px",backgroundColor:"#777",marginBottom:"3px"}}),wp.element.createElement("div",{style:{width:"40%",height:"4px",backgroundColor:"#007cba",borderRadius:"2px"}})));break;case"cover":Xe=wp.element.createElement("div",{style:{width:"100%",height:"100%",backgroundColor:"#007cba",opacity:.7,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}},wp.element.createElement("div",{style:{width:"70%",height:"3px",backgroundColor:"#fff",marginBottom:"3px"}}),wp.element.createElement("div",{style:{width:"50%",height:"2px",backgroundColor:"#fff",marginBottom:"4px"}}),wp.element.createElement("div",{style:{width:"30%",height:"4px",backgroundColor:"#fff",borderRadius:"2px"}}));break;case"box":Xe=wp.element.createElement("div",{style:{width:"90%",height:"90%",margin:"auto",border:"2px solid #007cba",borderRadius:"3px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"3px"}},wp.element.createElement("div",{style:{width:"70%",height:"3px",backgroundColor:"#333",marginBottom:"3px"}}),wp.element.createElement("div",{style:{width:"50%",height:"2px",backgroundColor:"#777",marginBottom:"4px"}}),wp.element.createElement("div",{style:{width:"30%",height:"4px",backgroundColor:"#007cba",borderRadius:"2px"}}));break;case"modern":Xe=wp.element.createElement("div",{style:{width:"100%",height:"100%",display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"center",padding:"3px",position:"relative"}},wp.element.createElement("div",{style:{position:"absolute",left:"0",top:"20%",width:"5px",height:"60%",backgroundColor:"#007cba"}}),wp.element.createElement("div",{style:{width:"70%",height:"3px",backgroundColor:"#333",marginBottom:"3px",marginLeft:"8px"}}),wp.element.createElement("div",{style:{width:"50%",height:"2px",backgroundColor:"#777",marginBottom:"4px",marginLeft:"8px"}}),wp.element.createElement("div",{style:{width:"30%",height:"4px",backgroundColor:"#007cba",borderRadius:"2px",marginLeft:"8px"}}));break;case"gradient":Xe=wp.element.createElement("div",{style:{width:"100%",height:"100%",background:"linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}},wp.element.createElement("div",{style:{width:"70%",height:"3px",backgroundColor:"#fff",marginBottom:"3px"}}),wp.element.createElement("div",{style:{width:"50%",height:"2px",backgroundColor:"#fff",marginBottom:"4px"}}),wp.element.createElement("div",{style:{width:"30%",height:"4px",backgroundColor:"#fff",borderRadius:"2px"}}));break;case"minimal":Xe=wp.element.createElement("div",{style:{width:"100%",height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"3px"}},wp.element.createElement("div",{style:{width:"70%",height:"3px",backgroundColor:"#333",marginBottom:"3px"}}),wp.element.createElement("div",{style:{width:"50%",height:"2px",backgroundColor:"#777",marginBottom:"4px"}}),wp.element.createElement("div",{style:{width:"30%",height:"1px",backgroundColor:"#007cba",marginBottom:"1px"}}),wp.element.createElement("div",{style:{width:"30%",height:"4px",backgroundColor:"#007cba",borderRadius:"2px"}}));break;case"callout":Xe=wp.element.createElement("div",{style:{width:"100%",height:"100%",backgroundColor:"#fff",border:"1px solid #eee",borderLeft:"5px solid #007cba",display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"center",padding:"5px"}},wp.element.createElement("div",{style:{width:"70%",height:"3px",backgroundColor:"#333",marginBottom:"3px"}}),wp.element.createElement("div",{style:{width:"50%",height:"2px",backgroundColor:"#777",marginBottom:"4px"}}),wp.element.createElement("div",{style:{width:"30%",height:"4px",backgroundColor:"#007cba",borderRadius:"2px"}}));break;case"banner":Xe=wp.element.createElement("div",{style:{width:"100%",height:"100%",display:"flex",flexDirection:"column",backgroundColor:"#f0f7ff",position:"relative"}},wp.element.createElement("div",{style:{height:"4px",width:"100%",backgroundColor:"#007cba"}}),wp.element.createElement("div",{style:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"3px"}},wp.element.createElement("div",{style:{width:"70%",height:"3px",backgroundColor:"#333",marginBottom:"3px"}}),wp.element.createElement("div",{style:{width:"50%",height:"2px",backgroundColor:"#777",marginBottom:"4px"}}),wp.element.createElement("div",{style:{width:"30%",height:"4px",backgroundColor:"#007cba",borderRadius:"2px"}})));break;default:Xe=wp.element.createElement("div",{style:{width:"100%",height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}},wp.element.createElement("div",{style:{width:"80%",height:"4px",backgroundColor:"#333",marginBottom:"4px"}}),wp.element.createElement("div",{style:{width:"60%",height:"2px",backgroundColor:"#777",marginBottom:"6px"}}),wp.element.createElement("div",{style:{width:"40%",height:"6px",backgroundColor:"#007cba",borderRadius:"2px"}}))}return wp.element.createElement("div",{style:Oe,onClick:()=>e({style:i.value})},wp.element.createElement("div",{style:bo},i.label),wp.element.createElement("div",{style:z},Xe))},c=()=>{let i=window.digi.responsiveState.activeDevice,E="";if(V&&V!=="none"){let oa=Co(k,"border-width",i)||"border-width: 1px 1px 1px 1px;";E=`
				border-style: ${V};
				border-color: ${M||"#e0e0e0"};
				${oa}
			`}else E="border-style: none;";let Oe="box-shadow: none;";se&&se.enable&&(Oe=`box-shadow: ${se.position==="inset"?"inset ":""}${se.horizontal}px ${se.vertical}px ${se.blur}px ${se.spread}px ${se.color};`);let bo="";v==="color"?bo=`background-color: ${y||"#f5f5f5"};`:v==="image"&&_&&_.url?bo=`
                background-image: url(${_.url});
                background-position: ${O||"center center"};
                background-size: ${Y||"cover"};
                background-repeat: ${A||"no-repeat"};
            `:v==="gradient"&&(bo=`background: linear-gradient(135deg, ${y||"#6a11cb"} 0%, ${ke||"#2575fc"} 100%);`);let z=Fe&&Fe[i]?`min-height: ${Fe[i]}px;`:"",Xe="";Z&&(Z.fontFamily&&(Xe+=`font-family: ${Z.fontFamily};`),Z.fontSize&&Z.fontSize[i]&&(Xe+=`font-size: ${Z.fontSize[i]}${Z.fontSizeUnit||"px"};`),Z.fontWeight&&(Xe+=`font-weight: ${Z.fontWeight};`),Z.fontStyle&&(Xe+=`font-style: ${Z.fontStyle};`),Z.textTransform&&(Xe+=`text-transform: ${Z.textTransform};`),Z.textDecoration&&(Xe+=`text-decoration: ${Z.textDecoration};`),Z.lineHeight&&Z.lineHeight[i]&&(Xe+=`line-height: ${Z.lineHeight[i]}${Z.lineHeightUnit||"em"};`),Z.letterSpacing&&Z.letterSpacing[i]&&(Xe+=`letter-spacing: ${Z.letterSpacing[i]}${Z.letterSpacingUnit||"px"};`));let go="";I&&(I.fontFamily&&(go+=`font-family: ${I.fontFamily};`),I.fontSize&&I.fontSize[i]&&(go+=`font-size: ${I.fontSize[i]}${I.fontSizeUnit||"px"};`),I.fontWeight&&(go+=`font-weight: ${I.fontWeight};`),I.fontStyle&&(go+=`font-style: ${I.fontStyle};`),I.textTransform&&(go+=`text-transform: ${I.textTransform};`),I.textDecoration&&(go+=`text-decoration: ${I.textDecoration};`),I.lineHeight&&I.lineHeight[i]&&(go+=`line-height: ${I.lineHeight[i]}${I.lineHeightUnit||"em"};`),I.letterSpacing&&I.letterSpacing[i]&&(go+=`letter-spacing: ${I.letterSpacing[i]}${I.letterSpacingUnit||"px"};`));let W="";ee&&(ee.fontFamily&&(W+=`font-family: ${ee.fontFamily};`),ee.fontSize&&ee.fontSize[i]&&(W+=`font-size: ${ee.fontSize[i]}${ee.fontSizeUnit||"px"};`),ee.fontWeight&&(W+=`font-weight: ${ee.fontWeight};`),ee.fontStyle&&(W+=`font-style: ${ee.fontStyle};`),ee.textTransform&&(W+=`text-transform: ${ee.textTransform};`),ee.textDecoration&&(W+=`text-decoration: ${ee.textDecoration};`),ee.lineHeight&&ee.lineHeight[i]&&(W+=`line-height: ${ee.lineHeight[i]}${ee.lineHeightUnit||"em"};`),ee.letterSpacing&&ee.letterSpacing[i]&&(W+=`letter-spacing: ${ee.letterSpacing[i]}${ee.letterSpacingUnit||"px"};`));let He=F?`max-width: ${F}${typeof F=="number"?"%":""};`:"",ho=Q?`width: ${Q}${typeof Q=="number"?"px":""};`:"width: 100%;",uo=Ce?`text-align: ${Ce};`:"",xo=qe?`justify-content: ${qe};`:"justify-content: center;",Mo=ce?`text-align: ${ce};`:"text-align: left;",Do=je?"@media (max-width: 767px) { ."+o+" .digiblocks-cta-split-container { flex-direction: column-reverse; } }":"",ko="";if(U&&ze&&ze!=="none"&&fe)switch(ze){case"background":ko=`
                        .${o} .digiblocks-cta-highlight {
                            background-color: ${fe};
                            padding: 0 5px;
                            border-radius: 3px;
                        }
                    `;break;case"text":ko=`
                        .${o} .digiblocks-cta-highlight {
                            color: ${fe};
                        }
                    `;break;case"underline":ko=`
                        .${o} .digiblocks-cta-highlight {
                            border-bottom: 2px solid ${fe};
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
                        background-image: url(${_?.url||""});
                        background-position: ${O||"center center"};
                        background-size: ${Y||"cover"};
                        background-repeat: ${A||"no-repeat"};
                    }
                    
                    .${o} .digiblocks-cta-content-container {
                        flex: 1;
                        ${Co(le,"padding",i)}
                        ${y?`background-color: ${y};`:""}
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
                        ${bo}
                    }
                    
                    .${o} .digiblocks-cta-overlay {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        z-index: -1;
                        background-color: ${L||"rgba(0,0,0,0.5)"};
                        opacity: ${B!==void 0?B/100:.5};
                    }
                    
                    .${o} .digiblocks-cta-title {
                        color: ${u||"#fff"};
                    }
                    
                    .${o} .digiblocks-cta-content {
						color: ${r||"rgba(255, 255, 255, 0.9)"};
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
                        border: 2px solid ${M||"#e0e0e0"};
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
                        background-color: ${S||"#1e73be"};
                        border-radius: 4px;
                    }
                `;break;case"gradient":mo=`
                    .${o} {
                        background: linear-gradient(135deg, ${y||"#6a11cb"} 0%, ${ke||"#2575fc"} 100%);
                        color: #fff;
                        border-radius: 10px;
                    }
                    
                    .${o} .digiblocks-cta-title {
                        color: ${u||"#fff"};
                    }
                    
                    .${o} .digiblocks-cta-content {
						color: ${r||"rgba(255, 255, 255, 0.9)"};
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
                        background-color: ${S||"#1e73be"};
                    }
                `;break;case"callout":mo=`
                    .${o} {
                        border-left: 5px solid ${S||"#1e73be"};
                        background-color: ${y||"#f5f5f5"};
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
                        background-color: ${S||"#1e73be"};
                        border-radius: 4px 0 0 4px;
                    }
                    
                    .${o} .digiblocks-cta-title {
                        color: ${u||"#333"};
                        margin-bottom: 15px;
                    }
                    
                    .${o} .digiblocks-cta-content {
                        color: ${r||"#666"};
                        margin-bottom: 20px;
                    }
                `;break;case"banner":mo=`
                    .${o} {
                        position: relative;
                        padding: 30px;
                        background-color: ${y||"#f0f7ff"};
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
                        background-color: ${S||"#1e73be"};
                    }
                    
                    .${o} .digiblocks-cta-title {
                        color: ${u||"#333"};
                        margin-bottom: 15px;
                    }
                    
                    .${o} .digiblocks-cta-content {
                        color: ${r||"#666"};
                        margin-bottom: 20px;
                    }
                    
                    .${o} .digiblocks-cta-button {
                        background-color: ${S||"#1e73be"};
                        color: ${D||"#fff"};
                        border-radius: 4px;
                        padding: 10px 20px;
                        transition: all 0.3s ease;
                    }
                    
                    .${o} .digiblocks-cta-button:hover {
                        transform: translateY(-2px);
                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    }
                `;break;default:mo=""}let yo="";$&&(ko=`
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
						align-items: ${Ce==="center"?"center":Ce==="right"?"flex-end":"flex-start"};
						gap: 1rem;
					}
					
					.${o} .digiblocks-cta-horizontal .digiblocks-cta-content-wrapper {
						width: 100%;
						text-align: ${Ce};
					}
				}
			`);let Ao=U&&ze&&ze!=="none"?`
            .${o} .digiblocks-cta-title {
                white-space: pre-wrap;
            }
        `:"",bi=`
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
                ${N?`color: ${N};`:""}
            }
            
            .${o}:hover {
                ${ke&&l!=="gradient"&&l!=="split"?`background-color: ${ke};`:""}
                
                ${ne&&ne.enable?`
                    ${ne.position==="inset"?"box-shadow: inset":"box-shadow:"} 
                    ${ne.horizontal}px 
                    ${ne.vertical}px 
                    ${ne.blur}px 
                    ${ne.spread}px 
                    ${ne.color};`:""}
            }
            
            .${o} .digiblocks-cta-button {
                transition: all 0.3s ease;
            }
            
            .${o} .digiblocks-cta-button:hover {
                ${xe?`background-color: ${xe};`:""}
                ${w?`color: ${w};`:""}
            }
        `;return`
            /* Call to Action Block - ${o} */
            .${o} {
                ${l!=="split"?bo:""}
                ${E}
				${Co(b,"border-radius",i)}
                ${Oe}
                ${l!=="split"?`${Co(le,"padding",i)}`:""}
                ${Co(Ve,"margin",i)}
                ${ho}
                ${z}
                transition: all 0.3s ease;
                position: relative;
                overflow: hidden;
            }
            
            .${o} .digiblocks-cta-container {
                ${He}
                margin: 0 auto;
                ${l!=="split"?uo:""}
            }
            
            .${o} .digiblocks-cta-title {
                color: ${u||"#333333"};
                margin-top: 0;
                margin-bottom: 20px;
                ${Xe}
            }
            
            .${o} .digiblocks-cta-content {
                color: ${r||"#666666"};
                margin-bottom: 30px;
                ${go}
            }
            
            .${o} .digiblocks-cta-buttons {
                ${Mo}
                display: flex;
                flex-wrap: wrap;
                gap: 10px;
                ${ce==="center"?"justify-content: center;":ce==="right"?"justify-content: flex-end;":"justify-content: flex-start;"}
            }
            
            .${o} .digiblocks-cta-button {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                text-decoration: none;
                border: none;
                cursor: pointer;
                background-color: ${S||"#1e73be"};
                color: ${D||"#ffffff"};
                ${Co(J,"padding",i)}
                ${Co(ve,"border-radius",i)}
                ${W}
            }
            
            .${o} .digiblocks-cta-button.is-full-width {
                width: 100%;
            }
            
            .${o} .digiblocks-cta-button:not(.is-primary) {
                background-color: transparent;
                color: ${S||"#1e73be"};
                border: 2px solid ${S||"#1e73be"};
            }
            
            ${mo}
            ${yo}
            ${ko}
            ${Ao}
            ${bi}
            ${Do}
            
            /* Responsive styles */
			@media (max-width: 991px) {
                .${o} {
                    ${l!=="split"?`${Co(le,"padding","tablet")}`:""}
                    
					${Co(Ve,"margin","tablet")}
                    
                    ${Fe&&Fe.tablet?`min-height: ${Fe.tablet}px;`:""}
                    
                    ${V&&V!=="none"&&k&&k.tablet?`${Co(k,"border-width","tablet")}`:""}
                    
                    ${V&&V!=="none"&&b&&b.tablet?`${Co(b,"border-radius","tablet")}`:""}
                }
                
                .${o} .digiblocks-cta-title {
                    ${Z&&Z.fontSize&&Z.fontSize.tablet?`font-size: ${Z.fontSize.tablet}${Z.fontSizeUnit||"px"};`:""}
                    
                    ${Z&&Z.lineHeight&&Z.lineHeight.tablet?`line-height: ${Z.lineHeight.tablet}${Z.lineHeightUnit||"em"};`:""}
                    
                    ${Z&&Z.letterSpacing&&Z.letterSpacing.tablet?`letter-spacing: ${Z.letterSpacing.tablet}${Z.letterSpacingUnit||"px"};`:""}
                }
                
                .${o} .digiblocks-cta-content {
                    ${I&&I.fontSize&&I.fontSize.tablet?`font-size: ${I.fontSize.tablet}${I.fontSizeUnit||"px"};`:""}
                    
                    ${I&&I.lineHeight&&I.lineHeight.tablet?`line-height: ${I.lineHeight.tablet}${I.lineHeightUnit||"em"};`:""}
                    
                    ${I&&I.letterSpacing&&I.letterSpacing.tablet?`letter-spacing: ${I.letterSpacing.tablet}${I.letterSpacingUnit||"px"};`:""}
                }
                
                .${o} .digiblocks-cta-button {
                    ${ee&&ee.fontSize&&ee.fontSize.tablet?`font-size: ${ee.fontSize.tablet}${ee.fontSizeUnit||"px"};`:""}

					${Co(J,"padding","tablet")}
					${Co(ve,"border-radius","tablet")}
                }
            }

			@media (max-width: 767px) {
                .${o} {
					${l!=="split"?`${Co(le,"padding","mobile")}`:""}

					${Co(Ve,"margin","mobile")}
					
					${Fe&&Fe.mobile?`min-height: ${Fe.mobile}px;`:""}
					
					${V&&V!=="none"&&k&&k.mobile?`${Co(k,"border-width","mobile")}`:""}
					
					${Co(b,"border-radius","mobile")}
                }
                
                ${l==="split"?`.${o} .digiblocks-cta-split-container {
                        flex-direction: ${je?"column-reverse":"column"};
                    }
                    
                    .${o} .digiblocks-cta-image-container {
                        min-height: 200px;
                    }
                    
                    .${o} .digiblocks-cta-content-container {
                        ${Co(le,"padding","mobile")}
                    }`:""}
                
                .${o} .digiblocks-cta-title {
                    ${Z&&Z.fontSize&&Z.fontSize.mobile?`font-size: ${Z.fontSize.mobile}${Z.fontSizeUnit||"px"};`:""}
                    
                    ${Z&&Z.lineHeight&&Z.lineHeight.mobile?`line-height: ${Z.lineHeight.mobile}${Z.lineHeightUnit||"em"};`:""}
                    
                    ${Z&&Z.letterSpacing&&Z.letterSpacing.mobile?`letter-spacing: ${Z.letterSpacing.mobile}${Z.letterSpacingUnit||"px"};`:""}
                }
                
                .${o} .digiblocks-cta-content {
                    ${I&&I.fontSize&&I.fontSize.mobile?`font-size: ${I.fontSize.mobile}${I.fontSizeUnit||"px"};`:""}
                    
                    ${I&&I.lineHeight&&I.lineHeight.mobile?`line-height: ${I.lineHeight.mobile}${I.lineHeightUnit||"em"};`:""}
                    
                    ${I&&I.letterSpacing&&I.letterSpacing.mobile?`letter-spacing: ${I.letterSpacing.mobile}${I.letterSpacingUnit||"px"};`:""}
                }
                
                .${o} .digiblocks-cta-button {
                    ${ee&&ee.fontSize&&ee.fontSize.mobile?`font-size: ${ee.fontSize.mobile}${ee.fontSizeUnit||"px"};`:""}
                    
					${Co(J,"padding","mobile")}
					${Co(ve,"border-radius","mobile")}
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
			${s.desktop?`
				@media (min-width: 992px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${s.tablet?`
				@media (min-width: 768px) and (max-width: 991px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${s.mobile?`
				@media (max-width: 767px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}
        `},me=()=>{if(!U||!x)return x;let i=x.indexOf(U);if(i===-1)return x;let E=x.substring(0,i),Oe=x.substring(i,i+U.length),bo=x.substring(i+U.length);return wp.element.createElement(wp.element.Fragment,null,E,wp.element.createElement("span",{className:"digiblocks-cta-highlight"},Oe),bo)},oo=(i,E)=>wp.element.createElement("div",{className:"digiblocks-button-editor",key:i.id,style:{marginBottom:"20px",padding:"15px",border:"1px solid #ddd",borderRadius:"5px"}},wp.element.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"15px"}},wp.element.createElement("h3",{style:{margin:0}},ae("Button","digiblocks")," ",E+1),Te.length>1&&wp.element.createElement(Gt,{isDestructive:!0,onClick:()=>t(i.id),icon:"trash"},ae("Remove","digiblocks"))),wp.element.createElement(ua,{label:ae("Button Text","digiblocks"),value:i.text||"",onChange:Oe=>m(i.id,"text",Oe),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement("div",{style:{marginTop:"10px"}},wp.element.createElement(ua,{label:ae("Button URL","digiblocks"),value:i.url||"",onChange:Oe=>m(i.id,"url",Oe),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement("div",{style:{marginTop:"15px"}},wp.element.createElement(ot,{label:ae("Open in new tab","digiblocks"),checked:i.openInNewTab||!1,onChange:Oe=>m(i.id,"openInNewTab",Oe),__nextHasNoMarginBottom:!0}),wp.element.createElement(ot,{label:ae("Add noopener noreferrer","digiblocks"),checked:!!i.rel,onChange:Oe=>m(i.id,"rel",Oe?"noopener noreferrer":""),__nextHasNoMarginBottom:!0}),wp.element.createElement(ot,{label:ae("Primary Button","digiblocks"),checked:i.isPrimary||!1,onChange:Oe=>m(i.id,"isPrimary",Oe),__nextHasNoMarginBottom:!0}),wp.element.createElement(ot,{label:ae("Full Width Button","digiblocks"),checked:i.isFullWidth||!1,onChange:Oe=>m(i.id,"isFullWidth",Oe),__nextHasNoMarginBottom:!0}),wp.element.createElement(ot,{label:ae("Custom Colors","digiblocks"),checked:i.customColors||!1,onChange:Oe=>m(i.id,"customColors",Oe),__nextHasNoMarginBottom:!0})),i.customColors&&wp.element.createElement("div",{style:{marginTop:"15px"}},wp.element.createElement(qo,{title:ae("Button Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:i.backgroundColor,onChange:Oe=>m(i.id,"backgroundColor",Oe),label:ae("Background Color","digiblocks")},{value:i.textColor,onChange:Oe=>m(i.id,"textColor",Oe),label:ae("Text Color","digiblocks")},{value:i.hoverBackgroundColor,onChange:Oe=>m(i.id,"hoverBackgroundColor",Oe),label:ae("Hover Background Color","digiblocks")},{value:i.hoverTextColor,onChange:Oe=>m(i.id,"hoverTextColor",Oe),label:ae("Hover Text Color","digiblocks")}]}),wp.element.createElement(ua,{label:ae("Border Radius","digiblocks"),type:"number",value:i.borderRadius||"",onChange:Oe=>m(i.id,"borderRadius",Oe),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}))),f=()=>{switch(G){case"options":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Ro,{tab:"options",name:"general",title:ae("General","digiblocks"),initialOpen:!0},wp.element.createElement(hc,{label:ae("CTA Style","digiblocks"),id:"cta-style-selector",className:"digiblocks-cta-style-selector",__nextHasNoMarginBottom:!0},wp.element.createElement("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px",justifyContent:"center",margin:"0 -5px"}},g.map(i=>wp.element.createElement("div",{key:i.value},Me(i))))),wp.element.createElement(ot,{label:ae("Horizontal Layout","digiblocks"),help:ae("Display content and buttons side by side","digiblocks"),checked:$||!1,onChange:i=>e({horizontalLayout:i}),__nextHasNoMarginBottom:!0}),wp.element.createElement(qt,{label:ae("Heading Tag","digiblocks"),value:T||"h2",options:q,onChange:i=>e({headingTag:i}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),l==="split"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Hn,{label:ae("Vertical Align","digiblocks"),value:qe||"center",onChange:i=>e({verticalAlign:i}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},a.map(i=>wp.element.createElement(zn,{key:i.value,value:i.value,label:i.label}))),wp.element.createElement(ot,{label:ae("Reverse Columns on Mobile","digiblocks"),help:ae("Place the image above the text on mobile devices","digiblocks"),checked:je||!1,onChange:i=>e({reverseColumnsMobile:i}),__nextHasNoMarginBottom:!0})),wp.element.createElement(Bt,{label:ae("Content Width","digiblocks")},wp.element.createElement(Nn,{value:F,onChange:i=>e({contentWidth:i}),min:10,max:100,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(Bt,{label:ae("Min Height","digiblocks")},wp.element.createElement(Nn,{value:Fe&&Fe[Ie]?Fe[Ie]:0,onChange:i=>e({minHeight:{...Fe||{},[Ie]:i}}),min:0,max:1e3,step:10,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}))),wp.element.createElement(Ro,{tab:"options",name:"content",title:ae("Content","digiblocks"),initialOpen:!1},wp.element.createElement(hc,{label:ae("Title Highlight","digiblocks"),id:"title-highlight",help:ae("Enter text within the title to highlight","digiblocks"),__nextHasNoMarginBottom:!0},wp.element.createElement(ua,{value:U||"",onChange:i=>e({highlightText:i}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),U&&wp.element.createElement(qt,{label:ae("Highlight Type","digiblocks"),value:ze||"background",options:ge,onChange:i=>e({highlightType:i}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),U&&ze&&ze!=="none"&&wp.element.createElement(qo,{title:ae("Highlight Color","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:fe,onChange:i=>e({highlightColor:i}),label:ae("Highlight Color","digiblocks")}]})),wp.element.createElement(Ro,{tab:"options",name:"buttons",title:ae("Buttons","digiblocks"),initialOpen:!1},wp.element.createElement(Hn,{label:ae("Buttons Alignment","digiblocks"),value:ce||"left",onChange:i=>e({buttonsAlign:i}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},Be.map(i=>wp.element.createElement(zn,{key:i.value,value:i.value,label:i.label}))),wp.element.createElement(Bt,{label:ae("Padding","digiblocks")},wp.element.createElement(fi,{values:J&&J[Ie]?J[Ie]:{top:10,right:20,bottom:10,left:20,unit:"px"},onChange:i=>e({buttonPadding:{...J||{},[Ie]:i}})})),wp.element.createElement(Bt,{label:ae("Border Radius","digiblocks")},wp.element.createElement(fi,{values:ve&&ve[Ie]?ve[Ie]:{top:4,right:4,bottom:4,left:4,unit:"px"},onChange:i=>e({buttonBorderRadius:{...ve||{},[Ie]:i}}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]})),wp.element.createElement("div",{className:"digiblocks-button-list"},Te&&Te.map((i,E)=>oo(i,E))),wp.element.createElement(Gt,{variant:"secondary",onClick:co,style:{marginTop:"10px",width:"100%"}},ae("Add Button","digiblocks"))));case"style":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Ro,{tab:"style",name:"colors",title:ae("Colors","digiblocks"),initialOpen:!0},wp.element.createElement(Gp,{className:"digiblocks-control-tabs",activeClass:"active-tab",tabs:ao},i=>i.name==="normal"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(qo,{title:ae("Text Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:u,onChange:E=>e({titleColor:E}),label:ae("Title Color","digiblocks")},{value:r,onChange:E=>e({textColor:E}),label:ae("Text Color","digiblocks")}]}),wp.element.createElement(qo,{title:ae("Button Colors","digiblocks"),initialOpen:!1,enableAlpha:!0,colorSettings:[{value:S,onChange:E=>e({buttonColor:E}),label:ae("Button Color","digiblocks")},{value:D,onChange:E=>e({buttonTextColor:E}),label:ae("Button Text Color","digiblocks")}]}),V&&V!=="none"&&wp.element.createElement(qo,{title:ae("Border Color","digiblocks"),initialOpen:!1,enableAlpha:!0,colorSettings:[{value:M,onChange:E=>e({borderColor:E}),label:ae("Border Color","digiblocks")}]})):wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(qo,{title:ae("Text Hover Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:be,onChange:E=>e({titleHoverColor:E}),label:ae("Title Hover Color","digiblocks")},{value:N,onChange:E=>e({textHoverColor:E}),label:ae("Text Hover Color","digiblocks")}]}),wp.element.createElement(qo,{title:ae("Button Hover Colors","digiblocks"),initialOpen:!1,enableAlpha:!0,colorSettings:[{value:xe,onChange:E=>e({buttonHoverColor:E}),label:ae("Button Hover Color","digiblocks")},{value:w,onChange:E=>e({buttonTextHoverColor:E}),label:ae("Button Text Hover Color","digiblocks")}]}),v==="color"&&l!=="gradient"&&wp.element.createElement(qo,{title:ae("Background Hover Color","digiblocks"),initialOpen:!1,enableAlpha:!0,colorSettings:[{value:ke,onChange:E=>e({backgroundHoverColor:E}),label:ae("Background Hover Color","digiblocks")}]})))),wp.element.createElement(Ro,{tab:"style",name:"background",title:ae("Background","digiblocks"),initialOpen:!1},l!=="gradient"&&wp.element.createElement(Hn,{label:ae("Background Type","digiblocks"),value:v||"color",onChange:i=>e({backgroundType:i}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},d.map(i=>wp.element.createElement(zn,{key:i.value,value:i.value,label:i.label}))),v==="color"&&l!=="gradient"&&wp.element.createElement(qo,{title:ae("Background Color","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:y,onChange:i=>e({backgroundColor:i}),label:ae("Background Color","digiblocks")}]}),v==="gradient"||l==="gradient"?wp.element.createElement(qo,{title:ae("Gradient Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:y,onChange:i=>e({backgroundColor:i}),label:ae("Start Color","digiblocks")},{value:ke,onChange:i=>e({backgroundHoverColor:i}),label:ae("End Color","digiblocks")}]}):null,v==="image"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{style:{marginBottom:"16px"}},wp.element.createElement(Tn,null,wp.element.createElement(Bn,{onSelect:i=>{e({backgroundImage:{id:i.id,url:i.url,alt:i.alt||"",width:i.width,height:i.height}})},allowedTypes:["image"],value:_?.id,render:({open:i})=>wp.element.createElement(wp.element.Fragment,null,_?.url?wp.element.createElement("div",{style:{marginBottom:"16px"}},wp.element.createElement("img",{src:_.url,alt:_.alt,style:{display:"block",width:"100%",height:"auto",maxHeight:"150px",objectFit:"cover",marginBottom:"8px"}}),wp.element.createElement("div",{style:{display:"flex",gap:"8px"}},wp.element.createElement(Gt,{variant:"secondary",onClick:i,style:{flexGrow:1}},ae("Replace","digiblocks")),wp.element.createElement(Gt,{variant:"secondary",onClick:()=>e({backgroundImage:null}),isDestructive:!0},ae("Remove","digiblocks")))):wp.element.createElement("div",{style:{marginBottom:"8px"}},wp.element.createElement(Gt,{variant:"secondary",onClick:i,icon:"format-image",style:{width:"100%"}},ae("Select Image","digiblocks"))))}))),_?.url&&!l.includes("split")&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Nn,{label:ae("Overlay Opacity (%)","digiblocks"),value:B||50,onChange:i=>e({backgroundOverlayOpacity:i}),min:0,max:100,step:5,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(qo,{title:ae("Overlay Color","digiblocks"),enableAlpha:!0,colorSettings:[{value:L,onChange:i=>e({backgroundOverlayColor:i}),label:ae("Overlay Color","digiblocks")}]}),wp.element.createElement(qt,{label:ae("Background Position","digiblocks"),value:O||"center center",options:ie,onChange:i=>e({backgroundPosition:i}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(qt,{label:ae("Background Size","digiblocks"),value:Y||"cover",options:C,onChange:i=>e({backgroundSize:i}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(qt,{label:ae("Background Repeat","digiblocks"),value:A||"no-repeat",options:h,onChange:i=>e({backgroundRepeat:i}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})))),wp.element.createElement(Ro,{tab:"style",name:"typography",title:ae("Typography","digiblocks"),initialOpen:!1},wp.element.createElement(In,{label:ae("Title Typography","digiblocks"),value:Z,onChange:i=>e({titleTypography:i})}),wp.element.createElement(In,{label:ae("Content Typography","digiblocks"),value:I,onChange:i=>e({contentTypography:i})}),wp.element.createElement(In,{label:ae("Button Typography","digiblocks"),value:ee,onChange:i=>e({buttonTypography:i})})),wp.element.createElement(Ro,{tab:"style",name:"border",title:ae("Border","digiblocks"),initialOpen:!1},wp.element.createElement(qt,{label:ae("Border Style","digiblocks"),value:V||"none",options:re,onChange:i=>e({borderStyle:i}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),V&&V!=="none"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Bt,{label:ae("Border Width","digiblocks")},wp.element.createElement(fi,{values:k&&k[Ie]?k[Ie]:{top:1,right:1,bottom:1,left:1,unit:"px"},onChange:i=>e({borderWidth:{...k||{},[Ie]:i}})}))),wp.element.createElement(Bt,{label:ae("Border Radius","digiblocks")},wp.element.createElement(fi,{values:b&&b[Ie]?b[Ie]:{top:0,right:0,bottom:0,left:0,unit:"px"},onChange:i=>e({borderRadius:{...b||{},[Ie]:i}}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]}))),wp.element.createElement(Ro,{tab:"style",name:"spacing",title:ae("Spacing","digiblocks"),initialOpen:!1},wp.element.createElement(Bt,{label:ae("Padding","digiblocks")},wp.element.createElement(fi,{values:le&&le[Ie]?le[Ie]:{top:40,right:30,bottom:40,left:30,unit:"px"},onChange:i=>e({padding:{...le||{},[Ie]:i}})})),wp.element.createElement(Bt,{label:ae("Margin","digiblocks")},wp.element.createElement(fi,{values:Ve&&Ve[Ie]?Ve[Ie]:{top:0,right:0,bottom:30,left:0,unit:"px"},onChange:i=>e({margin:{...Ve||{},[Ie]:i}})}))),wp.element.createElement(Ro,{tab:"style",name:"shadow",title:ae("Box Shadow","digiblocks"),initialOpen:!1},wp.element.createElement(Yp,{normalValue:se||{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"},hoverValue:ne||{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"},onNormalChange:i=>e({boxShadow:i}),onHoverChange:i=>e({boxShadowHover:i})})));case"advanced":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Ro,{tab:"advanced",name:"animation",title:ae("Animation","digiblocks"),initialOpen:!0},wp.element.createElement(qt,{label:ae("Animation Effect","digiblocks"),value:X||"none",options:n,onChange:i=>e({animation:i}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),X&&X!=="none"&&wp.element.createElement("div",{style:{marginTop:"10px"}},wp.element.createElement(Gt,{variant:"secondary",isSecondary:!0,onClick:p,style:{width:"100%"}},ae("Preview Animation","digiblocks")))),wp.element.createElement(Ro,{tab:"advanced",name:"visibility",title:ae("Visibility","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control__help",style:{padding:"12px",backgroundColor:"#f0f6fc",border:"1px solid #c3ddfd",borderRadius:"4px",marginBottom:"16px"}},wp.element.createElement("strong",null,ae("Editor Note:","digiblocks")),wp.element.createElement("br",null),ae("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.","digiblocks")),wp.element.createElement(ot,{label:ae("Hide on Desktop","digiblocks"),checked:s.desktop,onChange:i=>e({visibility:{...s,desktop:i}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(ot,{label:ae("Hide on Tablet","digiblocks"),checked:s.tablet,onChange:i=>e({visibility:{...s,tablet:i}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(ot,{label:ae("Hide on Mobile","digiblocks"),checked:s.mobile,onChange:i=>e({visibility:{...s,mobile:i}}),__nextHasNoMarginBottom:!0})),wp.element.createElement(Ro,{tab:"advanced",name:"additional",title:ae("Additional","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control html-anchor-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"html-anchor"},ae("HTML anchor","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"html-anchor",value:P||"",onChange:i=>e({anchor:i.target.value}),"aria-describedby":"html-anchor-help",autoCapitalize:"none",autoComplete:"off"})),wp.element.createElement("p",{id:"html-anchor-help",className:"components-base-control__help"},ae(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`,"digiblocks")," ",wp.element.createElement("a",{className:"components-external-link",href:"https://wordpress.org/documentation/article/page-jumps/",target:"_blank",rel:"external noreferrer noopener"},wp.element.createElement("span",{className:"components-external-link__contents"},ae("Learn more about anchors","digiblocks")),wp.element.createElement("span",{className:"components-external-link__icon","aria-label":"(opens in a new tab)"},"\u2197")))),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"additional-css-classes"},ae("Additional CSS class(es)","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"additional-css-classes",value:oe||"",onChange:i=>e({customClasses:i.target.value}),"aria-describedby":"additional-css-classes-help",autoComplete:"off"})),wp.element.createElement("p",{id:"additional-css-classes-help",className:"components-base-control__help"},ae("Separate multiple classes with spaces.","digiblocks")))));default:return null}},De=Fp({className:`digiblocks-cta ${o} style-${l} ${X!=="none"?`animate-${X}`:""} ${oe||""}`,id:P||null}),io=()=>!Te||Te.length===0?null:wp.element.createElement("div",{className:"digiblocks-cta-buttons"},Te.map(i=>{let E=["digiblocks-cta-button",i.isPrimary?"is-primary":"",i.isFullWidth?"is-full-width":""].filter(Boolean).join(" "),Oe=i.customColors?{backgroundColor:i.isPrimary?i.backgroundColor||S:"transparent",color:i.isPrimary?i.textColor||D:i.backgroundColor||S,borderColor:i.backgroundColor||S,borderStyle:"solid",borderWidth:"2px",borderRadius:i.borderRadius?`${i.borderRadius}px`:void 0}:{};return wp.element.createElement("span",{key:i.id,className:E,style:i.customColors?Oe:{}},i.text||ae("Click Here","digiblocks"))})),so=()=>{let i=T||"h2";switch(l){case"split":return wp.element.createElement("div",{className:"digiblocks-cta-split-container"},wp.element.createElement("div",{className:"digiblocks-cta-content-container"},wp.element.createElement("div",{className:`digiblocks-cta-container ${$?"digiblocks-cta-horizontal":""}`},wp.element.createElement("div",{className:"digiblocks-cta-content-wrapper"},wp.element.createElement(hi,{tagName:i,className:"digiblocks-cta-title",value:x,onChange:E=>e({title:E}),placeholder:ae("Add title...","digiblocks"),allowedFormats:["core/bold","core/italic"]}),wp.element.createElement(hi,{tagName:"p",className:"digiblocks-cta-content",value:H,onChange:E=>e({content:E}),placeholder:ae("Add content...","digiblocks")})),io())),wp.element.createElement("div",{className:"digiblocks-cta-image-container"},wp.element.createElement(Tn,null,wp.element.createElement(Bn,{onSelect:E=>{e({backgroundImage:{id:E.id,url:E.url,alt:E.alt||"",width:E.width,height:E.height}})},allowedTypes:["image"],value:_?.id,render:({open:E})=>wp.element.createElement("div",{className:"digiblocks-image-upload-container"},_?.url?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("img",{src:_.url,alt:_.alt||"",onClick:E}),wp.element.createElement("button",{className:"digiblocks-change-image-button",onClick:E},ae("Change Image","digiblocks"))):wp.element.createElement("div",{className:"digiblocks-image-placeholder",onClick:E},ae("Choose Image","digiblocks")))}))));case"cover":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:"digiblocks-cta-background"}),wp.element.createElement("div",{className:"digiblocks-cta-overlay"}),wp.element.createElement("div",{className:`digiblocks-cta-container ${$?"digiblocks-cta-horizontal":""}`},wp.element.createElement("div",{className:"digiblocks-cta-content-wrapper"},wp.element.createElement(hi,{tagName:i,className:"digiblocks-cta-title",value:x,onChange:E=>e({title:E}),placeholder:ae("Add title...","digiblocks"),allowedFormats:["core/bold","core/italic"]}),wp.element.createElement(hi,{tagName:"p",className:"digiblocks-cta-content",value:H,onChange:E=>e({content:E}),placeholder:ae("Add content...","digiblocks")})),io()),!_?.url&&wp.element.createElement("div",{className:"digiblocks-image-placeholder"},wp.element.createElement(Tn,null,wp.element.createElement(Bn,{onSelect:E=>{e({backgroundImage:{id:E.id,url:E.url,alt:E.alt||"",width:E.width,height:E.height}})},allowedTypes:["image"],value:_?.id,render:({open:E})=>wp.element.createElement(Gt,{variant:"secondary",onClick:E,icon:"format-image"},ae("Select Background Image","digiblocks"))}))));default:return wp.element.createElement("div",{className:`digiblocks-cta-container ${$?"digiblocks-cta-horizontal":""}`},wp.element.createElement("div",{className:"digiblocks-cta-content-wrapper"},wp.element.createElement(hi,{tagName:i,className:"digiblocks-cta-title",value:x,onChange:E=>e({title:E}),placeholder:ae("Add title...","digiblocks"),allowedFormats:["core/bold","core/italic"],withoutInteractiveFormatting:!0}),wp.element.createElement(hi,{tagName:"p",className:"digiblocks-cta-content",value:H,onChange:E=>e({content:E}),placeholder:ae("Add content...","digiblocks"),withoutInteractiveFormatting:!0})),io())}};return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Ep,null,wp.element.createElement(Zp,{tabs:Ke,activeTab:G,onSelect:pe},f())),wp.element.createElement(Wp,null,wp.element.createElement(qp,{value:Ce,onChange:i=>e({align:i})})),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:c()}}),wp.element.createElement("div",{...De},so()))},kc=Kp;var{useBlockProps:Xp,RichText:ki}=window.wp.blockEditor,Ap=({attributes:te})=>{let{id:e,anchor:K,customClasses:o,style:P,horizontalLayout:s,title:oe,content:l,headingTag:$,backgroundImage:x,backgroundType:H,align:T,animation:u,buttons:r,highlightText:S,highlightType:D,highlightColor:y}=te,v=["digiblocks-cta",e,`style-${P}`,u!=="none"?`animate-${u}`:"",o].filter(Boolean).join(" "),_=$||"h2",L=()=>!r||r.length===0?null:wp.element.createElement("div",{className:"digiblocks-cta-buttons"},r.map(O=>{let Y=["digiblocks-cta-button",O.isPrimary?"is-primary":"",O.isFullWidth?"is-full-width":""].filter(Boolean).join(" "),A=O.openInNewTab?"_blank":void 0,V=O.rel||void 0;return wp.element.createElement("a",{key:O.id,className:Y,href:O.url||"#",target:A,rel:V,"data-button-id":O.id},O.text||"Click Here")})),B=()=>{switch(P){case"split":return wp.element.createElement("div",{className:"digiblocks-cta-split-container"},wp.element.createElement("div",{className:"digiblocks-cta-content-container"},wp.element.createElement("div",{className:`digiblocks-cta-container ${s?"digiblocks-cta-horizontal":""}`},wp.element.createElement("div",{className:"digiblocks-cta-content-wrapper"},wp.element.createElement(ki.Content,{tagName:_,className:"digiblocks-cta-title",value:oe}),wp.element.createElement(ki.Content,{tagName:"p",className:"digiblocks-cta-content",value:l})),L())),wp.element.createElement("div",{className:"digiblocks-cta-image-container"}));case"cover":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:"digiblocks-cta-background"}),wp.element.createElement("div",{className:"digiblocks-cta-overlay"}),wp.element.createElement("div",{className:`digiblocks-cta-container ${s?"digiblocks-cta-horizontal":""}`},wp.element.createElement("div",{className:"digiblocks-cta-content-wrapper"},wp.element.createElement(ki.Content,{tagName:_,className:"digiblocks-cta-title",value:oe}),wp.element.createElement(ki.Content,{tagName:"p",className:"digiblocks-cta-content",value:l})),L()));default:return wp.element.createElement("div",{className:`digiblocks-cta-container ${s?"digiblocks-cta-horizontal":""}`},wp.element.createElement("div",{className:"digiblocks-cta-content-wrapper"},wp.element.createElement(ki.Content,{tagName:_,className:"digiblocks-cta-title",value:oe}),wp.element.createElement(ki.Content,{tagName:"p",className:"digiblocks-cta-content",value:l})),L())}};return wp.element.createElement("div",{...Xp.save({className:v,id:K||null,"data-style":P,"data-background-type":H||"color","data-align":T||"left","data-highlight-text":S||"","data-highlight-type":D||"none","data-highlight-color":y||"#ffde59"})},B())},vc=Ap;var{__:pt}=window.wp.i18n,{registerBlockType:eb}=window.wp.blocks,{getBlockActiveStatus:ob}=window.wp.digiBlocks;eb("digiblocks/call-to-action",{apiVersion:2,title:digiBlocksData.blocks["call-to-action"].title,category:"digiblocks",icon:{src:()=>{let{viewbox:te,path:e}=digiBlocksData.blocks["call-to-action"].icon;return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${te}`,className:"digiblocks-editor-icons"},wp.element.createElement("path",{d:e}))}},description:digiBlocksData.blocks["call-to-action"].description,keywords:[pt("cta","digiblocks"),pt("call to action","digiblocks"),pt("button","digiblocks"),pt("conversion","digiblocks")],supports:{inserter:!!ob("call-to-action"),html:!1,className:!1,customClassName:!1,anchor:!1},attributes:{id:{type:"string",default:""},anchor:{type:"string",default:""},visibility:{type:"object",default:{desktop:!1,tablet:!1,mobile:!1}},customClasses:{type:"string",default:""},style:{type:"string",default:"basic"},horizontalLayout:{type:"boolean",default:!1},title:{type:"string",default:pt("Ready to Get Started?","digiblocks")},content:{type:"string",default:pt("Join thousands of satisfied customers who have already taken the next step. Sign up today and experience the difference.","digiblocks")},headingTag:{type:"string",default:"h2"},titleColor:{type:"string",default:"#333333"},textColor:{type:"string",default:"#666666"},buttonColor:{type:"string",default:"#1e73be"},buttonTextColor:{type:"string",default:"#ffffff"},backgroundColor:{type:"string",default:"#f5f5f5"},backgroundType:{type:"string",default:"color"},backgroundImage:{type:"object",default:null},backgroundOverlayColor:{type:"string",default:"rgba(0,0,0,0.5)"},backgroundOverlayOpacity:{type:"number",default:50},backgroundPosition:{type:"string",default:"center center"},backgroundSize:{type:"string",default:"cover"},backgroundRepeat:{type:"string",default:"no-repeat"},borderStyle:{type:"string",default:"none"},borderWidth:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderRadius:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderColor:{type:"string",default:"#e0e0e0"},padding:{type:"object",default:{desktop:{top:40,right:30,bottom:40,left:30,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},margin:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},align:{type:"string",default:"left"},titleTypography:{type:"object"},contentTypography:{type:"object"},buttonTypography:{type:"object"},contentWidth:{type:"number"},width:{type:"string",default:"100%"},animation:{type:"string",default:"none"},boxShadow:{type:"object"},boxShadowHover:{type:"object"},buttonBorderRadius:{type:"object",default:{desktop:{top:4,right:4,bottom:4,left:4,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},buttonPadding:{type:"object",default:{desktop:{top:10,right:20,bottom:10,left:20,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},buttonsAlign:{type:"string",default:"left"},buttons:{type:"array",default:[]},titleHoverColor:{type:"string",default:""},textHoverColor:{type:"string",default:""},buttonHoverColor:{type:"string",default:""},buttonTextHoverColor:{type:"string",default:""},backgroundHoverColor:{type:"string",default:""},highlightText:{type:"string",default:""},highlightColor:{type:"string",default:"#ffde59"},highlightType:{type:"string",default:"none"},verticalAlign:{type:"string",default:"center"},reverseColumnsMobile:{type:"boolean",default:!1},minHeight:{type:"object"},gradientDirection:{type:"number",default:135},ribbonColor:{type:"string",default:"#1e73be"},ribbonTextColor:{type:"string",default:"#ffffff"},ribbonPosition:{type:"string",default:"top-right"},ribbonText:{type:"string",default:"Special Offer"}},example:{attributes:{style:"basic",title:pt("Ready to Get Started?","digiblocks"),content:pt("Join us today and experience the difference.","digiblocks"),buttons:[{id:"button-1",text:pt("Sign Up Now","digiblocks"),url:"#",isPrimary:!0}],backgroundColor:"#f5f5f5"}},edit:kc,save:vc});var{__:to}=window.wp.i18n,{useBlockProps:tb,useInnerBlocksProps:ib,InspectorControls:lb,PanelColorSettings:Ln,MediaUpload:ab,MediaUploadCheck:nb,ButtonBlockAppender:sb}=window.wp.blockEditor,{ToggleControl:On,SelectControl:vi,RangeControl:Un,Button:jn}=window.wp.components,{useState:Vn,useEffect:rb}=window.wp.element,{useSelect:cb,useDispatch:M1}=window.wp.data,{useBlockId:db,getDimensionCSS:bt}=digi.utils,{tabIcons:Fn}=digi.icons,{ResponsiveControl:xi,DimensionControl:ma,BoxShadowControl:gb,CustomTabPanel:pb,TabPanelBody:Qt}=digi.components,bb=({attributes:te,setAttributes:e,clientId:K})=>{let{id:o,visibility:P,width:s,order:oe,hoverEffect:l,backgroundColor:$,backgroundImage:x,backgroundPosition:H,backgroundRepeat:T,backgroundSize:u,backgroundOverlay:r,backgroundOverlayOpacity:S,backgroundOverlayBlendMode:D,padding:y,margin:v,borderStyle:_,borderWidth:L,borderColor:B,borderRadius:O,boxShadow:Y,boxShadowHover:A}=te;db(o,K,e);let[V,k]=Vn(window.digi.responsiveState.activeDevice),[b,M]=Vn(()=>{if(window.digi.uiState){let N=window.digi.uiState.getActiveTab(K);if(N)return N}return"options"}),[le,Ve]=Vn(!1),{parentClientId:Ce,hasChildBlocks:Z}=cb(N=>{let{getBlockParents:xe,getBlockCount:w}=N("core/block-editor"),ke=xe(K);return{parentClientId:ke.length>0?ke[0]:null,hasChildBlocks:w(K)>0}},[K]);rb(()=>window.digi.responsiveState.subscribe(xe=>{k(xe)}),[]);let I=(N,xe)=>{e({width:{...s,[xe]:Math.round(N*100)/100}})},ee=[{label:to("Top Left","digiblocks"),value:"top left"},{label:to("Top Center","digiblocks"),value:"top center"},{label:to("Top Right","digiblocks"),value:"top right"},{label:to("Center Left","digiblocks"),value:"center left"},{label:to("Center Center","digiblocks"),value:"center center"},{label:to("Center Right","digiblocks"),value:"center right"},{label:to("Bottom Left","digiblocks"),value:"bottom left"},{label:to("Bottom Center","digiblocks"),value:"bottom center"},{label:to("Bottom Right","digiblocks"),value:"bottom right"}],F=[{label:to("No Repeat","digiblocks"),value:"no-repeat"},{label:to("Repeat","digiblocks"),value:"repeat"},{label:to("Repeat X","digiblocks"),value:"repeat-x"},{label:to("Repeat Y","digiblocks"),value:"repeat-y"}],Q=[{label:to("Cover","digiblocks"),value:"cover"},{label:to("Contain","digiblocks"),value:"contain"},{label:to("Auto","digiblocks"),value:"auto"},{label:to("100%","digiblocks"),value:"100%"}],X=[{label:to("None","digiblocks"),value:"none"},{label:to("Solid","digiblocks"),value:"solid"},{label:to("Dashed","digiblocks"),value:"dashed"},{label:to("Dotted","digiblocks"),value:"dotted"},{label:to("Double","digiblocks"),value:"double"}],se=[{label:to("Normal","digiblocks"),value:"normal"},{label:to("Multiply","digiblocks"),value:"multiply"},{label:to("Screen","digiblocks"),value:"screen"},{label:to("Overlay","digiblocks"),value:"overlay"},{label:to("Darken","digiblocks"),value:"darken"},{label:to("Lighten","digiblocks"),value:"lighten"},{label:to("Color Dodge","digiblocks"),value:"color-dodge"},{label:to("Color Burn","digiblocks"),value:"color-burn"},{label:to("Hard Light","digiblocks"),value:"hard-light"},{label:to("Soft Light","digiblocks"),value:"soft-light"},{label:to("Difference","digiblocks"),value:"difference"},{label:to("Exclusion","digiblocks"),value:"exclusion"},{label:to("Hue","digiblocks"),value:"hue"},{label:to("Saturation","digiblocks"),value:"saturation"},{label:to("Color","digiblocks"),value:"color"},{label:to("Luminosity","digiblocks"),value:"luminosity"}],ne=[{label:to("None","digiblocks"),value:"none"},{label:to("Lift","digiblocks"),value:"lift"},{label:to("Scale","digiblocks"),value:"scale"},{label:to("Glow","digiblocks"),value:"glow"}],ve=[{name:"options",title:to("Layout","digiblocks"),icon:Fn.optionsIcon},{name:"style",title:to("Style","digiblocks"),icon:Fn.styleIcon},{name:"background",title:to("Background","digiblocks"),icon:Fn.backgroundIcon}],J=()=>{let N=V,xe=(Ie,j)=>{let Se=g=>Ie&&Ie[g]&&(Ie[g].top!==void 0&&Ie[g].top!==""||Ie[g].right!==void 0&&Ie[g].right!==""||Ie[g].bottom!==void 0&&Ie[g].bottom!==""||Ie[g].left!==void 0&&Ie[g].left!==""),Qe;if(Se(j))Qe=Ie[j];else if(j==="tablet"&&Se("desktop"))Qe=Ie.desktop;else if(j==="mobile")if(Se("tablet"))Qe=Ie.tablet;else if(Se("desktop"))Qe=Ie.desktop;else return"";else return"";let G=(g,q)=>g===void 0||g===""?q==="px"?"10px":"0"+q:q==="px"&&parseFloat(g)<10?"10px":g+q,pe=Qe.unit||"px",R=G(Qe.top,pe),p=G(Qe.right,pe),re=G(Qe.bottom,pe),n=G(Qe.left,pe);return`padding: ${R} ${p} ${re} ${n} !important;`},w=xe(y,N),ke=xe(y,"tablet"),U=xe(y,"mobile"),fe="";x&&x.url&&(fe=`background-image: url(${x.url});
            background-position: ${H};
            background-repeat: ${T};
            background-size: ${u};`);let ze="";r&&(ze=`
            .${o}:before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: ${r};
                opacity: ${S};
                mix-blend-mode: ${D};
                z-index: 1;
                pointer-events: none;
                border-radius: inherit;
            }
            .${o} > * {
                position: relative;
                z-index: 2;
            }`);let qe="";Y&&Y.enable&&(qe=`box-shadow: ${Y.horizontal}px ${Y.vertical}px ${Y.blur}px ${Y.spread}px ${Y.color};`);let je="",Fe="";if(A&&A.enable){let Ie=A.position==="inset"?"inset ":"";je+=`box-shadow: ${Ie}${A.horizontal}px ${A.vertical}px ${A.blur}px ${A.spread}px ${A.color};`}return l==="lift"?je+="transform: translateY(-10px);":l==="scale"?je+="transform: scale(1.05);":l==="glow"&&(je+="filter: brightness(1.1);"),`
            /* Column Block - ${o} */
            .${o} {
                position: relative;
                width: ${s[N]}%;
                ${w}
				${bt(v,"margin",N)}
                display: flex;
                flex-direction: column;
                ${oe[N]!==0?`order: ${oe[N]};`:""}
                ${$?`background-color: ${$};`:""}
                ${fe}
                ${_!=="none"?`
					border-style: ${_}!important;
					${bt(L,"border-width",N,!0)}
					border-color: ${B}!important;`:""}
                ${bt(O,"border-radius",N)}
				${qe}
                transition: all 0.3s ease;
            }
            
            /* Hover effects */
            .${o}:hover {
                ${Fe}
            }

            .${o} > div {
                width: 100%;
            }
            
            ${ze}
            
            /* Tablet styles */
            @media (max-width: 991px) {
                .${o} {
                    width: ${s.tablet}%;
					${ke}
					${bt(v,"margin","tablet")}
                    ${oe.tablet!==0?`order: ${oe.tablet};`:""}
					${bt(O,"border-radius","tablet")}
                    ${_!=="none"?`${bt(L,"border-width","tablet",!0)}`:""}
                }
            }
            
            /* Mobile styles */
            @media (max-width: 767px) {
                .${o} {
                    width: ${s.mobile}%;
					${U}
					${bt(v,"margin","mobile")}
                    ${oe.mobile!==0?`order: ${oe.mobile};`:""}
					${bt(O,"border-radius","mobile")}
                    ${_!=="none"?`${bt(L,"border-width","mobile",!0)}`:""}
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
        `},ce=tb({className:`digiblocks-column ${o}`}),Te=ib(ce,{templateLock:!1,renderAppender:Z?void 0:()=>wp.element.createElement(sb,{rootClientId:K})});return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(lb,null,wp.element.createElement(pb,{tabs:ve,activeTab:b,onSelect:M},(()=>{switch(b){case"options":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Qt,{tab:"options",name:"column",title:to("Column","digiblocks"),initialOpen:!0},wp.element.createElement(xi,{label:to("Width (%)","digiblocks")},wp.element.createElement(Un,{value:s[V],onChange:N=>I(N,V),min:10,max:100,step:.01,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(xi,{label:to("Order","digiblocks")},wp.element.createElement(Un,{value:oe[V],onChange:N=>e({order:{...oe,[V]:N}}),min:-10,max:10,step:1,allowReset:!0,resetFallbackValue:0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}))),wp.element.createElement(Qt,{tab:"layout",name:"spacing",title:to("Spacing","digiblocks"),initialOpen:!1},wp.element.createElement(xi,{label:to("Padding","digiblocks")},wp.element.createElement(ma,{values:y[V],onChange:N=>e({padding:{...y,[V]:N}})})),wp.element.createElement(xi,{label:to("Margin","digiblocks")},wp.element.createElement(ma,{values:v[V],onChange:N=>e({margin:{...v,[V]:N}})}))),wp.element.createElement(Qt,{tab:"layout",name:"effect",title:to("Hover Effect","digiblocks"),initialOpen:!1},wp.element.createElement(vi,{label:to("Hover Effect","digiblocks"),value:l||"none",options:ne,onChange:N=>e({hoverEffect:N}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(Qt,{tab:"layout",name:"visibility",title:to("Visibility","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control__help",style:{padding:"12px",backgroundColor:"#f0f6fc",border:"1px solid #c3ddfd",borderRadius:"4px",marginBottom:"16px"}},wp.element.createElement("strong",null,to("Editor Note:","digiblocks")),wp.element.createElement("br",null),to("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.","digiblocks")),wp.element.createElement(On,{label:to("Hide on Desktop","digiblocks"),checked:P.desktop,onChange:N=>e({visibility:{...P,desktop:N}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(On,{label:to("Hide on Tablet","digiblocks"),checked:P.tablet,onChange:N=>e({visibility:{...P,tablet:N}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(On,{label:to("Hide on Mobile","digiblocks"),checked:P.mobile,onChange:N=>e({visibility:{...P,mobile:N}}),__nextHasNoMarginBottom:!0})));case"style":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Qt,{tab:"style",name:"borders",title:to("Borders & Radius","digiblocks"),initialOpen:!0},wp.element.createElement(vi,{label:to("Border Style","digiblocks"),value:_,options:X,onChange:N=>e({borderStyle:N}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),_!=="none"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(xi,{label:to("Border Width","digiblocks")},wp.element.createElement(ma,{values:L[V],onChange:N=>e({borderWidth:{...L,[V]:N}})})),wp.element.createElement(Ln,{title:"",enableAlpha:!0,colorSettings:[{value:B,onChange:N=>e({borderColor:N}),label:to("Border Color","digiblocks")}]})),wp.element.createElement(xi,{label:to("Border Radius","digiblocks")},wp.element.createElement(ma,{values:O[V],onChange:N=>e({borderRadius:{...O,[V]:N}}),units:[{label:"px",value:"px"},{label:"%",value:"%"},{label:"em",value:"em"}]})),wp.element.createElement(gb,{normalValue:Y,hoverValue:A,onNormalChange:N=>e({boxShadow:N}),onHoverChange:N=>e({boxShadowHover:N})})));case"background":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Qt,{tab:"background",name:"background",title:to("Background","digiblocks"),initialOpen:!0},wp.element.createElement(Ln,{title:to("Background Color","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:$,onChange:N=>e({backgroundColor:N}),label:to("Background Color","digiblocks")}]}),wp.element.createElement("div",{className:"digiblocks-media-control"},wp.element.createElement("p",{className:"components-base-control__label"},to("Background Image","digiblocks")),wp.element.createElement(nb,null,wp.element.createElement(ab,{onSelect:N=>{e({backgroundImage:{url:N.url,id:N.id,alt:N.alt||"",size:N.sizes?.full?.url?"full":""}})},allowedTypes:["image"],value:x?.id,render:({open:N})=>wp.element.createElement("div",{className:"digiblocks-media-upload-wrapper"},x?.url?wp.element.createElement("div",{className:"digiblocks-media-preview"},wp.element.createElement("img",{src:x.url,alt:x.alt||""}),wp.element.createElement("div",{className:"digiblocks-media-controls"},wp.element.createElement(jn,{isPrimary:!0,onClick:N},wp.element.createElement("span",{class:"dashicon dashicons dashicons-edit"})),wp.element.createElement(jn,{isDestructive:!0,onClick:()=>e({backgroundImage:{url:"",id:0,alt:"",size:""}})},wp.element.createElement("span",{class:"dashicon dashicons dashicons-trash"})))):wp.element.createElement(jn,{className:"digiblocks-media-upload-button",isPrimary:!0,onClick:N},to("Select Image","digiblocks")))}))),x?.url&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(vi,{label:to("Background Position","digiblocks"),value:H,options:ee,onChange:N=>e({backgroundPosition:N}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(vi,{label:to("Background Repeat","digiblocks"),value:T,options:F,onChange:N=>e({backgroundRepeat:N}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(vi,{label:to("Background Size","digiblocks"),value:u,options:Q,onChange:N=>e({backgroundSize:N}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}))),wp.element.createElement(Qt,{tab:"background",name:"overlay",title:to("Background Overlay","digiblocks"),initialOpen:!1},wp.element.createElement(Ln,{title:to("Overlay Color","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:r,onChange:N=>e({backgroundOverlay:N}),label:to("Overlay Color","digiblocks")}]}),r&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Un,{label:to("Overlay Opacity","digiblocks"),value:S,onChange:N=>e({backgroundOverlayOpacity:N}),min:0,max:1,step:.01,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(vi,{label:to("Blend Mode","digiblocks"),value:D,options:se,onChange:N=>e({backgroundOverlayBlendMode:N}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}))));default:return null}})())),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:J()}}),wp.element.createElement("div",{...Te}))},xc=bb;var{__:P1}=window.wp.i18n,{useBlockProps:ub,useInnerBlocksProps:mb}=window.wp.blockEditor,hb=({attributes:te})=>{let{id:e,backgroundOverlay:K}=te,o=`digiblocks-column ${e}`,P=ub.save({className:o}),s=mb.save(P);return wp.element.createElement("div",{...s})},yc=hb;var{__:Cc}=window.wp.i18n,{registerBlockType:fb}=window.wp.blocks;fb("digiblocks/column",{apiVersion:2,title:Cc("Column","digiblocks"),parent:["digiblocks/container"],icon:{src:()=>wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512",width:"24",height:"24"},wp.element.createElement("path",{d:"M448 64l0 384 128 0c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L448 64zm-32 0L224 64l0 384 192 0 0-384zM192 448l0-384L64 64C46.3 64 32 78.3 32 96l0 320c0 17.7 14.3 32 32 32l128 0zM0 96C0 60.7 28.7 32 64 32l512 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96z"}))},description:Cc("Flexible column component to use within Container blocks","digiblocks"),supports:{inserter:!1,reusable:!1,html:!1,className:!1,customClassName:!1,anchor:!1},attributes:{id:{type:"string",default:""},visibility:{type:"object",default:{desktop:!1,tablet:!1,mobile:!1}},width:{type:"object",default:{desktop:100,tablet:100,mobile:100}},order:{type:"object",default:{desktop:0,tablet:0,mobile:0}},hoverEffect:{type:"string",default:"none"},backgroundColor:{type:"string",default:""},backgroundImage:{type:"object",default:{url:"",id:0,alt:"",size:""}},backgroundPosition:{type:"string",default:"center center"},backgroundRepeat:{type:"string",default:"no-repeat"},backgroundSize:{type:"string",default:"cover"},backgroundOverlay:{type:"string",default:""},backgroundOverlayOpacity:{type:"number",default:.7},backgroundOverlayBlendMode:{type:"string",default:"normal"},padding:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},margin:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderStyle:{type:"string",default:"none"},borderWidth:{type:"object",default:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderColor:{type:"string",default:"#e0e0e0"},borderRadius:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},boxShadow:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},boxShadowHover:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}}},edit:xc,save:yc});var{__:Ee}=window.wp.i18n,{useBlockProps:kb,InspectorControls:wc,PanelColorSettings:Sc,BlockControls:vb,AlignmentToolbar:xb}=window.wp.blockEditor,{SelectControl:ha,RangeControl:$c,TabPanel:yb,ToggleControl:tt,TextControl:rl,DateTimePicker:Cb,Button:wb,__experimentalToggleGroupControl:Sb,__experimentalToggleGroupControlOption:$b,BaseControl:_b}=window.wp.components,{useState:cl,useEffect:En,useRef:_c}=window.wp.element,{useBlockId:Bb,getDimensionCSS:it,animations:Wn,animationPreview:Bc}=digi.utils,{tabIcons:qn}=digi.icons,{ResponsiveControl:yi,DimensionControl:fa,TypographyControl:Tc,BoxShadowControl:Tb,CustomTabPanel:Nc,TabPanelBody:Jt}=digi.components,Nb=({attributes:te,setAttributes:e,clientId:K})=>{let{id:o,anchor:P,visibility:s,customClasses:oe,endDate:l,showDays:$,showHours:x,showMinutes:H,showSeconds:T,daysLabel:u,hoursLabel:r,minutesLabel:S,secondsLabel:D,digitColor:y,digitBackground:v,digitHoverColor:_,digitHoverBackground:L,labelColor:B,labelHoverColor:O,separatorColor:Y,separatorHoverColor:A,boxStyle:V,boxBorderRadius:k,boxPadding:b,boxMargin:M,boxBorderWidth:le,boxBorderColor:Ve,showBoxShadow:Ce,boxShadow:Z,boxShadowHover:I,itemSpacing:ee,align:F,labelPosition:Q,labelSpacing:X,titleTypography:se,contentTypography:ne,expiredMessage:ve,animation:J,displaySeparator:ce,separatorType:Te,boxesEqual:be,style:N}=te;Bb(o,K,e);let[xe,w]=cl(window.digi.responsiveState.activeDevice),[ke,U]=cl({days:30,hours:23,minutes:59,seconds:59}),[fe,ze]=cl(!1),qe=_c(null);En(()=>window.digi.responsiveState.subscribe(ge=>{w(ge)}),[]);let[je,Fe]=cl(()=>{if(window.digi.uiState){let a=window.digi.uiState.getActiveTab(K);if(a)return a}return"options"}),[Ie,j]=cl("normal");En(()=>{if(!l){let ge=new Date;ge.setDate(ge.getDate()+7),e({endDate:ge.toISOString()})}let a=()=>{let ge=new Date,Ue=new Date;l?Ue=new Date(l):Ue.setDate(Ue.getDate()+30);let Ke=Ue-ge;if(Ke>0){let ao=Math.floor(Ke/864e5),co=Math.floor(Ke%(1e3*60*60*24)/(1e3*60*60)),t=Math.floor(Ke%(1e3*60*60)/(1e3*60)),m=Math.floor(Ke%(1e3*60)/1e3);U({days:ao,hours:co,minutes:t,seconds:m})}else U({days:0,hours:0,minutes:0,seconds:0})};return a(),qe.current=setInterval(a,1e3),()=>{qe.current&&clearInterval(qe.current)}},[l,e]);let Se=_c(null);En(()=>{if(J&&J!=="none"){let a=setTimeout(()=>{Bc(o,J,Wn,Se)},100);return()=>clearTimeout(a)}},[J]);let Qe=()=>{Bc(o,J,Wn,Se)},G=[{label:Ee("Default","digiblocks"),value:"default"},{label:Ee("Filled","digiblocks"),value:"filled"},{label:Ee("Outlined","digiblocks"),value:"outlined"},{label:Ee("Pill","digiblocks"),value:"pill"},{label:Ee("Rounded","digiblocks"),value:"rounded"},{label:Ee("Circle","digiblocks"),value:"circle"}],pe=[{label:Ee("Bottom","digiblocks"),value:"bottom"},{label:Ee("Top","digiblocks"),value:"top"},{label:Ee("Inside","digiblocks"),value:"inside"}],R=[{label:Ee("Boxes","digiblocks"),value:"boxes"},{label:Ee("Simple","digiblocks"),value:"simple"}],p=[{label:Ee("Colon","digiblocks"),value:"colon"},{label:Ee("Hyphen","digiblocks"),value:"hyphen"},{label:Ee("Slash","digiblocks"),value:"slash"},{label:Ee("Dot","digiblocks"),value:"dot"}],re=[{label:Ee("None","digiblocks"),value:"none"},...Object.keys(Wn).map(a=>({label:a.replace(/-/g," ").replace(/\b\w/g,ge=>ge.toUpperCase()),value:a}))],n=[{name:"options",title:Ee("Options","digiblocks"),icon:qn.optionsIcon},{name:"style",title:Ee("Style","digiblocks"),icon:qn.styleIcon},{name:"advanced",title:Ee("Advanced","digiblocks"),icon:qn.advancedIcon}],g=[{name:"normal",title:Ee("Normal","digiblocks"),className:"digiblocks-tab-1 normal"},{name:"hover",title:Ee("Hover","digiblocks"),className:"digiblocks-tab-2 hover"}],q=a=>a.toString().padStart(2,"0"),d=()=>{let a=xe,ge=ee&&ee[a]!==void 0?ee[a]:20,Ue=X&&X[a]!==void 0?X[a]:5,Ke="";se&&(se.fontFamily&&(Ke+=`font-family: ${se.fontFamily};`),se.fontSize&&se.fontSize[a]&&(Ke+=`font-size: ${se.fontSize[a]}${se.fontSizeUnit||"px"};`),se.fontWeight&&(Ke+=`font-weight: ${se.fontWeight};`),se.fontStyle&&(Ke+=`font-style: ${se.fontStyle};`),se.textTransform&&(Ke+=`text-transform: ${se.textTransform};`),se.lineHeight&&se.lineHeight[a]&&(Ke+=`line-height: ${se.lineHeight[a]}${se.lineHeightUnit||"em"};`),se.letterSpacing&&se.letterSpacing[a]&&(Ke+=`letter-spacing: ${se.letterSpacing[a]}${se.letterSpacingUnit||"px"};`));let ao="";ne&&(ne.fontFamily&&(ao+=`font-family: ${ne.fontFamily};`),ne.fontSize&&ne.fontSize[a]&&(ao+=`font-size: ${ne.fontSize[a]}${ne.fontSizeUnit||"px"};`),ne.fontWeight&&(ao+=`font-weight: ${ne.fontWeight};`),ne.fontStyle&&(ao+=`font-style: ${ne.fontStyle};`),ne.textTransform&&(ao+=`text-transform: ${ne.textTransform};`),ne.lineHeight&&ne.lineHeight[a]&&(ao+=`line-height: ${ne.lineHeight[a]}${ne.lineHeightUnit||"em"};`),ne.letterSpacing&&ne.letterSpacing[a]&&(ao+=`letter-spacing: ${ne.letterSpacing[a]}${ne.letterSpacingUnit||"px"};`));let co="";Ce&&Z&&Z.enable&&(co=`box-shadow: ${Z.position==="inset"?"inset ":""}${Z.horizontal}px ${Z.vertical}px ${Z.blur}px ${Z.spread}px ${Z.color};`);let t="";Ce&&I&&I.enable&&(t=`box-shadow: ${I.position==="inset"?"inset ":""}${I.horizontal}px ${I.vertical}px ${I.blur}px ${I.spread}px ${I.color};`);let m="";if(N==="boxes")switch(V){case"filled":m=`
                        .${o} .digiblocks-countdown-item-inner {
                            background-color: ${v||"#f0f0f0"};
                            color: ${y||"#333333"};
							${it(b,"padding",a)}
							${it(k,"border-radius",a)}
                            ${co}
                        }
                        .${o} .digiblocks-countdown-item:hover .digiblocks-countdown-item-inner {
                            background-color: ${L||v||"#e0e0e0"};
                            color: ${_||y||"#333333"};
                            ${t}
                        }
                    `;break;case"outlined":m=`
                        .${o} .digiblocks-countdown-item-inner {
                            background-color: transparent;
                            color: ${y||"#333333"};
							${it(b,"padding",a)}
							border-style: solid;
							${it(le,"border-width",a)}
							border-color: ${Ve||"#e0e0e0"};
							${it(k,"border-radius",a)}
							${it(b,"padding",a)}
                            ${co}
                        }
                        .${o} .digiblocks-countdown-item:hover .digiblocks-countdown-item-inner {
                            background-color: ${L||"transparent"};
                            color: ${_||y||"#333333"};
                            ${t}
                        }
                    `;break;case"pill":m=`
                        .${o} .digiblocks-countdown-item-inner {
                            background-color: ${v||"#f0f0f0"};
                            color: ${y||"#333333"};
                            border-radius: 50px;
							${it(b,"padding",a)}
                            ${co}
                        }
                        .${o} .digiblocks-countdown-item:hover .digiblocks-countdown-item-inner {
                            background-color: ${L||v||"#e0e0e0"};
                            color: ${_||y||"#333333"};
                            ${t}
                        }
                    `;break;case"rounded":m=`
                        .${o} .digiblocks-countdown-item-inner {
                            background-color: ${v||"#f0f0f0"};
                            color: ${y||"#333333"};
                            border-radius: 8px;
							${it(b,"padding",a)}
                            ${co}
                        }
                        .${o} .digiblocks-countdown-item:hover .digiblocks-countdown-item-inner {
                            background-color: ${L||v||"#e0e0e0"};
                            color: ${_||y||"#333333"};
                            ${t}
                        }
                    `;break;case"circle":m=`
                        .${o} .digiblocks-countdown-item-inner {
                            background-color: ${v||"#f0f0f0"};
                            color: ${y||"#333333"};
                            border-radius: 50%;
                            aspect-ratio: 1/1;
                            display: flex;
                            justify-content: center;
                            align-items: center;
							${it(b,"padding",a)}
                            ${co}
                        }
                        .${o} .digiblocks-countdown-item:hover .digiblocks-countdown-item-inner {
                            background-color: ${L||v||"#e0e0e0"};
                            color: ${_||y||"#333333"};
                            ${t}
                        }
                    `;break;case"default":default:m=`
                        .${o} .digiblocks-countdown-item-inner {
                            color: ${y||"#333333"};
                            ${co}
                        }
                        .${o} .digiblocks-countdown-item:hover .digiblocks-countdown-item-inner {
                            color: ${_||y||"#333333"};
                            ${t}
                        }
                    `;break}else m=`
                .${o} .digiblocks-countdown-item-inner {
                    color: ${y||"#333333"};
                }
                .${o} .digiblocks-countdown-item:hover .digiblocks-countdown-item-inner {
                    color: ${_||y||"#333333"};
                }
            `;let Me="";if(ce){let oo="";switch(Te){case"colon":oo=":";break;case"hyphen":oo="-";break;case"slash":oo="/";break;case"dot":oo="\u2022";break;default:oo=":";break}Me=`
                .${o} .digiblocks-countdown-separator {
                    color: ${Y||"#333333"};
                    font-size: ${se&&se.fontSize&&se.fontSize[a]?se.fontSize[a]+(se.fontSizeUnit||"px"):"2rem"};
                }
                .${o} .digiblocks-countdown-separator::before {
                    content: "${oo}";
                }
                .${o}:hover .digiblocks-countdown-separator {
                    color: ${A||Y||"#333333"};
                }
            `}let c="";N==="boxes"&&be&&(c=`
                .${o} .digiblocks-countdown-item {
                    flex: 1 0 0;
                }
                .${o} .digiblocks-countdown-item-inner {
                    width: 100%;
                    text-align: center;
                    box-sizing: border-box;
                }
            `);let me="";return Q==="top"?me=`
                .${o} .digiblocks-countdown-item {
                    flex-direction: column-reverse;
                }
                .${o} .digiblocks-countdown-label {
                    margin-bottom: ${Ue}px;
                    margin-top: 0;
                }
            `:Q==="inside"?N==="boxes"?me=`
                    .${o} .digiblocks-countdown-item {
                        flex-direction: column;
                    }
                    .${o} .digiblocks-countdown-digit {
                        margin-bottom: ${Ue}px;
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
                `:me=`
                    .${o} .digiblocks-countdown-item {
                        flex-direction: column;
                    }
                    .${o} .digiblocks-countdown-label {
                        margin-top: ${Ue}px;
                    }
                `:me=`
                .${o} .digiblocks-countdown-item {
                    flex-direction: column;
                }
                .${o} .digiblocks-countdown-label {
                    margin-top: ${Ue}px;
                }
            `,`
            /* Countdown Block - ${o} */
            .${o} {
				${it(M,"margin",a)}
                text-align: ${F};
                display: block;
            }
            
            .${o} .digiblocks-countdown-container {
                display: inline-flex;
                flex-wrap: wrap;
                justify-content: ${F==="center"?"center":F==="right"?"flex-end":"flex-start"};
                gap: ${ge}px;
            }
            
            .${o} .digiblocks-countdown-item {
                display: flex;
                align-items: center;
            }
            
            .${o} .digiblocks-countdown-item-inner {
                transition: all 0.3s ease;
            }
            
            .${o} .digiblocks-countdown-digit {
                ${Ke}
            }
            
            .${o} .digiblocks-countdown-label {
                ${ao}
                color: ${B||"#666666"};
                transition: color 0.3s ease;
            }
            
            .${o}:hover .digiblocks-countdown-label {
                color: ${O||B||"#666666"};
            }
            
            .${o} .digiblocks-countdown-expired {
                ${Ke}
                color: ${y||"#333333"};
                text-align: ${F};
            }
            
            /* Box style specific */
            ${m}
            
            /* Separator styles */
            ${Me}
            
            /* Equal width styles */
            ${c}
            
            /* Label positioning */
            ${me}

			/* Visibility Controls */
			${s.desktop?`
				@media (min-width: 992px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${s.tablet?`
				@media (min-width: 768px) and (max-width: 991px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${s.mobile?`
				@media (max-width: 767px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}
        `},ie=()=>{switch(je){case"options":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:"components-panel__body is-opened"},wp.element.createElement(Sb,{label:Ee("Style","digiblocks"),value:N,onChange:a=>e({style:a}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},R.map(a=>wp.element.createElement($b,{key:a.value,value:a.value,label:a.label}))),N==="boxes"&&wp.element.createElement(ha,{label:Ee("Box Style","digiblocks"),value:V,options:G,onChange:a=>e({boxStyle:a}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),N==="boxes"&&wp.element.createElement(tt,{label:Ee("Equal Width Boxes","digiblocks"),checked:!!be,onChange:()=>e({boxesEqual:!be}),help:Ee("Make all countdown boxes the same width","digiblocks"),__nextHasNoMarginBottom:!0}),wp.element.createElement(ha,{label:Ee("Label Position","digiblocks"),value:Q,options:pe,onChange:a=>e({labelPosition:a}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(tt,{label:Ee("Show Separators","digiblocks"),checked:!!ce,onChange:()=>e({displaySeparator:!ce}),__nextHasNoMarginBottom:!0}),ce&&wp.element.createElement(ha,{label:Ee("Separator Type","digiblocks"),value:Te,options:p,onChange:a=>e({separatorType:a}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(_b,{label:Ee("End Date & Time","digiblocks"),id:"countdown-date-time",__nextHasNoMarginBottom:!0},wp.element.createElement(Cb,{currentDate:l,onChange:a=>e({endDate:a}),is12Hour:!0})),wp.element.createElement(rl,{label:Ee("Expired Message","digiblocks"),value:ve,onChange:a=>e({expiredMessage:a}),placeholder:Ee("Time's up!","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(rl,{label:Ee("Days Label","digiblocks"),value:u,onChange:a=>e({daysLabel:a}),placeholder:Ee("Days","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(rl,{label:Ee("Hours Label","digiblocks"),value:r,onChange:a=>e({hoursLabel:a}),placeholder:Ee("Hours","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(rl,{label:Ee("Minutes Label","digiblocks"),value:S,onChange:a=>e({minutesLabel:a}),placeholder:Ee("Minutes","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(rl,{label:Ee("Seconds Label","digiblocks"),value:D,onChange:a=>e({secondsLabel:a}),placeholder:Ee("Seconds","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(tt,{label:Ee("Show Days","digiblocks"),checked:$,onChange:()=>e({showDays:!$}),__nextHasNoMarginBottom:!0}),wp.element.createElement(tt,{label:Ee("Show Hours","digiblocks"),checked:x,onChange:()=>e({showHours:!x}),__nextHasNoMarginBottom:!0}),wp.element.createElement(tt,{label:Ee("Show Minutes","digiblocks"),checked:H,onChange:()=>e({showMinutes:!H}),__nextHasNoMarginBottom:!0}),wp.element.createElement(tt,{label:Ee("Show Seconds","digiblocks"),checked:T,onChange:()=>e({showSeconds:!T}),__nextHasNoMarginBottom:!0})));case"style":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Jt,{tab:"style",name:"colors",title:Ee("Colors","digiblocks"),initialOpen:!0},wp.element.createElement(yb,{className:"digiblocks-control-tabs",activeClass:"active-tab",tabs:g},a=>a.name==="normal"?wp.element.createElement(Sc,{title:Ee("Normal Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:y,onChange:ge=>e({digitColor:ge}),label:Ee("Digit Color","digiblocks")},...N==="boxes"?[{value:v,onChange:ge=>e({digitBackground:ge}),label:Ee("Box Background","digiblocks")}]:[],{value:B,onChange:ge=>e({labelColor:ge}),label:Ee("Label Color","digiblocks")},...ce?[{value:Y,onChange:ge=>e({separatorColor:ge}),label:Ee("Separator Color","digiblocks")}]:[],...N==="boxes"&&V==="outlined"?[{value:Ve,onChange:ge=>e({boxBorderColor:ge}),label:Ee("Border Color","digiblocks")}]:[]]}):wp.element.createElement(Sc,{title:Ee("Hover Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:_,onChange:ge=>e({digitHoverColor:ge}),label:Ee("Digit Color","digiblocks")},...N==="boxes"?[{value:L,onChange:ge=>e({digitHoverBackground:ge}),label:Ee("Box Background","digiblocks")}]:[],{value:O,onChange:ge=>e({labelHoverColor:ge}),label:Ee("Label Color","digiblocks")},...ce?[{value:A,onChange:ge=>e({separatorHoverColor:ge}),label:Ee("Separator Color","digiblocks")}]:[]]}))),wp.element.createElement(Jt,{tab:"style",name:"typography",title:Ee("Typography","digiblocks"),initialOpen:!1},wp.element.createElement(Tc,{label:Ee("Digit Typography","digiblocks"),value:se,onChange:a=>e({titleTypography:a}),defaults:{fontSize:{desktop:32,tablet:28,mobile:24},fontSizeUnit:"px",lineHeight:{desktop:1.2,tablet:1.2,mobile:1.2},lineHeightUnit:"em",fontWeight:"600"}}),wp.element.createElement(Tc,{label:Ee("Label Typography","digiblocks"),value:ne,onChange:a=>e({contentTypography:a}),defaults:{fontSize:{desktop:14,tablet:13,mobile:12},fontSizeUnit:"px",lineHeight:{desktop:1.4,tablet:1.4,mobile:1.4},lineHeightUnit:"em"}})),N==="boxes"&&wp.element.createElement(Jt,{tab:"style",name:"boxStyles",title:Ee("Box Style","digiblocks"),initialOpen:!1},wp.element.createElement(yi,{label:Ee("Border Radius","digiblocks")},wp.element.createElement(fa,{values:k&&k[xe]?k[xe]:{top:4,right:4,bottom:4,left:4,unit:"px"},onChange:a=>e({boxBorderRadius:{...k,[xe]:a}}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]})),V==="outlined"&&wp.element.createElement(yi,{label:Ee("Border Width","digiblocks")},wp.element.createElement(fa,{values:le&&le[xe]?le[xe]:{top:1,right:1,bottom:1,left:1,unit:"px"},onChange:a=>e({boxBorderWidth:{...le,[xe]:a}})})),wp.element.createElement(yi,{label:Ee("Padding","digiblocks")},wp.element.createElement(fa,{values:b&&b[xe]?b[xe]:{top:10,right:10,bottom:10,left:10,unit:"px"},onChange:a=>e({boxPadding:{...b,[xe]:a}})})),wp.element.createElement(yi,{label:Ee("Margin","digiblocks")},wp.element.createElement(fa,{values:M&&M[xe]?M[xe]:{top:0,right:0,bottom:0,left:0,unit:"px"},onChange:a=>e({boxMargin:{...M,[xe]:a}})})),wp.element.createElement(tt,{label:Ee("Box Shadow","digiblocks"),checked:!!Ce,onChange:()=>e({showBoxShadow:!Ce}),__nextHasNoMarginBottom:!0}),Ce&&wp.element.createElement(Tb,{normalValue:Z,hoverValue:I,onNormalChange:a=>e({boxShadow:a}),onHoverChange:a=>e({boxShadowHover:a})})),wp.element.createElement(Jt,{tab:"style",name:"spacing",title:Ee("Spacing","digiblocks"),initialOpen:!1},wp.element.createElement(yi,{label:Ee("Items Spacing","digiblocks")},wp.element.createElement($c,{value:ee&&ee[xe]!==void 0?ee[xe]:20,onChange:a=>e({itemSpacing:{...ee,[xe]:a}}),min:0,max:100,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(yi,{label:Ee("Label Spacing","digiblocks")},wp.element.createElement($c,{value:X&&X[xe]!==void 0?X[xe]:5,onChange:a=>e({labelSpacing:{...X,[xe]:a}}),min:0,max:50,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}))));case"advanced":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Jt,{tab:"advanced",name:"animation",title:Ee("Animation","digiblocks"),initialOpen:!0},wp.element.createElement(ha,{label:Ee("Animation Effect","digiblocks"),value:J,options:re,onChange:a=>e({animation:a}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),J&&J!=="none"&&wp.element.createElement("div",{style:{marginTop:"10px"}},wp.element.createElement(wb,{variant:"secondary",isSecondary:!0,onClick:Qe,disabled:fe,style:{width:"100%"}},Ee(fe?"Animating...":"Preview Animation","digiblocks")))),wp.element.createElement(Jt,{tab:"advanced",name:"visibility",title:Ee("Visibility","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control__help",style:{padding:"12px",backgroundColor:"#f0f6fc",border:"1px solid #c3ddfd",borderRadius:"4px",marginBottom:"16px"}},wp.element.createElement("strong",null,Ee("Editor Note:","digiblocks")),wp.element.createElement("br",null),Ee("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.","digiblocks")),wp.element.createElement(tt,{label:Ee("Hide on Desktop","digiblocks"),checked:s.desktop,onChange:a=>e({visibility:{...s,desktop:a}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(tt,{label:Ee("Hide on Tablet","digiblocks"),checked:s.tablet,onChange:a=>e({visibility:{...s,tablet:a}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(tt,{label:Ee("Hide on Mobile","digiblocks"),checked:s.mobile,onChange:a=>e({visibility:{...s,mobile:a}}),__nextHasNoMarginBottom:!0})),wp.element.createElement(Jt,{tab:"advanced",name:"additional",title:Ee("Additional","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control html-anchor-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"html-anchor"},Ee("HTML anchor","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"html-anchor",value:P||"",onChange:a=>e({anchor:a.target.value}),"aria-describedby":"html-anchor-help",autoCapitalize:"none",autoComplete:"off"})),wp.element.createElement("p",{id:"html-anchor-help",className:"components-base-control__help"},Ee(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`,"digiblocks")," ",wp.element.createElement("a",{className:"components-external-link",href:"https://wordpress.org/documentation/article/page-jumps/",target:"_blank",rel:"external noreferrer noopener"},wp.element.createElement("span",{className:"components-external-link__contents"},Ee("Learn more about anchors","digiblocks")),wp.element.createElement("span",{className:"components-external-link__icon","aria-label":"(opens in a new tab)"},"\u2197")))),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"additional-css-classes"},Ee("Additional CSS class(es)","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"additional-css-classes",value:oe||"",onChange:a=>e({customClasses:a.target.value}),"aria-describedby":"additional-css-classes-help",autoComplete:"off"})),wp.element.createElement("p",{id:"additional-css-classes-help",className:"components-base-control__help"},Ee("Separate multiple classes with spaces.","digiblocks")))));default:return null}},C=kb({className:`digiblocks-countdown ${o} ${oe||""}`,id:P||null});if(!$&&!x&&!H&&!T)return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(wc,null,wp.element.createElement(Nc,{tabs:n,activeTab:je,onSelect:Fe},ie())),wp.element.createElement("div",{...C,style:{textAlign:F}},wp.element.createElement("div",{className:"digiblocks-countdown-error"},Ee("Please enable at least one time unit in the block settings.","digiblocks"))));let h=()=>{let{days:a,hours:ge,minutes:Ue,seconds:Ke}=ke,ao=[];return $&&(ao.push(wp.element.createElement("div",{key:"days",className:"digiblocks-countdown-item digiblocks-countdown-days"},wp.element.createElement("div",{className:"digiblocks-countdown-item-inner"},Q==="inside"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:"digiblocks-countdown-digit"},q(a)),wp.element.createElement("div",{className:"digiblocks-countdown-label"},u||Ee("Days","digiblocks"))):wp.element.createElement("div",{className:"digiblocks-countdown-digit"},q(a))),Q!=="inside"&&wp.element.createElement("div",{className:"digiblocks-countdown-label"},u||Ee("Days","digiblocks")))),ce&&(x||H||T)&&ao.push(wp.element.createElement("div",{key:"days-separator",className:"digiblocks-countdown-separator"}))),x&&(ao.push(wp.element.createElement("div",{key:"hours",className:"digiblocks-countdown-item digiblocks-countdown-hours"},wp.element.createElement("div",{className:"digiblocks-countdown-item-inner"},Q==="inside"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:"digiblocks-countdown-digit"},q(ge)),wp.element.createElement("div",{className:"digiblocks-countdown-label"},r||Ee("Hours","digiblocks"))):wp.element.createElement("div",{className:"digiblocks-countdown-digit"},q(ge))),Q!=="inside"&&wp.element.createElement("div",{className:"digiblocks-countdown-label"},r||Ee("Hours","digiblocks")))),ce&&(H||T)&&ao.push(wp.element.createElement("div",{key:"hours-separator",className:"digiblocks-countdown-separator"}))),H&&(ao.push(wp.element.createElement("div",{key:"minutes",className:"digiblocks-countdown-item digiblocks-countdown-minutes"},wp.element.createElement("div",{className:"digiblocks-countdown-item-inner"},Q==="inside"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:"digiblocks-countdown-digit"},q(Ue)),wp.element.createElement("div",{className:"digiblocks-countdown-label"},S||Ee("Minutes","digiblocks"))):wp.element.createElement("div",{className:"digiblocks-countdown-digit"},q(Ue))),Q!=="inside"&&wp.element.createElement("div",{className:"digiblocks-countdown-label"},S||Ee("Minutes","digiblocks")))),ce&&T&&ao.push(wp.element.createElement("div",{key:"minutes-separator",className:"digiblocks-countdown-separator"}))),T&&ao.push(wp.element.createElement("div",{key:"seconds",className:"digiblocks-countdown-item digiblocks-countdown-seconds"},wp.element.createElement("div",{className:"digiblocks-countdown-item-inner"},Q==="inside"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:"digiblocks-countdown-digit"},q(Ke)),wp.element.createElement("div",{className:"digiblocks-countdown-label"},D||Ee("Seconds","digiblocks"))):wp.element.createElement("div",{className:"digiblocks-countdown-digit"},q(Ke))),Q!=="inside"&&wp.element.createElement("div",{className:"digiblocks-countdown-label"},D||Ee("Seconds","digiblocks")))),ao},Be=ke.days===0&&ke.hours===0&&ke.minutes===0&&ke.seconds===0;return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(vb,null,wp.element.createElement(xb,{value:F,onChange:a=>e({align:a})})),wp.element.createElement(wc,null,wp.element.createElement(Nc,{tabs:n,activeTab:je,onSelect:Fe},ie())),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:d()}}),wp.element.createElement("div",{...C},Be?wp.element.createElement("div",{className:"digiblocks-countdown-expired"},ve||Ee("Time's up!","digiblocks")):wp.element.createElement("div",{className:"digiblocks-countdown-container"},h())))},Hc=Nb;var{useBlockProps:Hb}=window.wp.blockEditor,zb=({attributes:te})=>{let{id:e,anchor:K,customClasses:o,endDate:P,showDays:s,showHours:oe,showMinutes:l,showSeconds:$,daysLabel:x,hoursLabel:H,minutesLabel:T,secondsLabel:u,displaySeparator:r,separatorType:S,expiredMessage:D,animation:y,align:v,style:_,boxesEqual:L,labelPosition:B}=te,O=["digiblocks-countdown",e,`align-${v}`,y!=="none"?`animate-${y}`:"",_==="boxes"?"digiblocks-countdown-boxes":"digiblocks-countdown-simple",L?"digiblocks-countdown-equal-width":"",`digiblocks-countdown-labels-${B}`,r?"digiblocks-countdown-has-separators":"",r?`digiblocks-countdown-separator-${S}`:"",o||""].filter(Boolean).join(" "),Y=Hb.save({className:O,id:K||null,"data-end-date":P||"","data-show-days":s?"true":"false","data-show-hours":oe?"true":"false","data-show-minutes":l?"true":"false","data-show-seconds":$?"true":"false","data-days-label":x||"Days","data-hours-label":H||"Hours","data-minutes-label":T||"Minutes","data-seconds-label":u||"Seconds","data-expired-message":D||"Time's up!","data-label-position":B||"bottom"});return wp.element.createElement("div",{...Y},wp.element.createElement("div",{className:"digiblocks-countdown-container"},s&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:"digiblocks-countdown-item digiblocks-countdown-days"},wp.element.createElement("div",{className:"digiblocks-countdown-item-inner"},B==="inside"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:"digiblocks-countdown-digit"},"00"),wp.element.createElement("div",{className:"digiblocks-countdown-label"},x||"Days")):wp.element.createElement("div",{className:"digiblocks-countdown-digit"},"00")),B!=="inside"&&wp.element.createElement("div",{className:"digiblocks-countdown-label"},x||"Days")),r&&(oe||l||$)&&wp.element.createElement("div",{className:"digiblocks-countdown-separator"})),oe&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:"digiblocks-countdown-item digiblocks-countdown-hours"},wp.element.createElement("div",{className:"digiblocks-countdown-item-inner"},B==="inside"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:"digiblocks-countdown-digit"},"00"),wp.element.createElement("div",{className:"digiblocks-countdown-label"},H||"Hours")):wp.element.createElement("div",{className:"digiblocks-countdown-digit"},"00")),B!=="inside"&&wp.element.createElement("div",{className:"digiblocks-countdown-label"},H||"Hours")),r&&(l||$)&&wp.element.createElement("div",{className:"digiblocks-countdown-separator"})),l&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:"digiblocks-countdown-item digiblocks-countdown-minutes"},wp.element.createElement("div",{className:"digiblocks-countdown-item-inner"},B==="inside"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:"digiblocks-countdown-digit"},"00"),wp.element.createElement("div",{className:"digiblocks-countdown-label"},T||"Minutes")):wp.element.createElement("div",{className:"digiblocks-countdown-digit"},"00")),B!=="inside"&&wp.element.createElement("div",{className:"digiblocks-countdown-label"},T||"Minutes")),r&&$&&wp.element.createElement("div",{className:"digiblocks-countdown-separator"})),$&&wp.element.createElement("div",{className:"digiblocks-countdown-item digiblocks-countdown-seconds"},wp.element.createElement("div",{className:"digiblocks-countdown-item-inner"},B==="inside"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:"digiblocks-countdown-digit"},"00"),wp.element.createElement("div",{className:"digiblocks-countdown-label"},u||"Seconds")):wp.element.createElement("div",{className:"digiblocks-countdown-digit"},"00")),B!=="inside"&&wp.element.createElement("div",{className:"digiblocks-countdown-label"},u||"Seconds"))),wp.element.createElement("div",{className:"digiblocks-countdown-expired",style:{display:"none"}},D||"Time's up!"))},zc=zb;var{__:Tt}=window.wp.i18n,{registerBlockType:Mb}=window.wp.blocks,{getBlockActiveStatus:Db}=window.wp.digiBlocks;Mb("digiblocks/countdown",{apiVersion:2,title:digiBlocksData.blocks.countdown.title,category:"digiblocks",icon:{src:()=>{let{viewbox:te,path:e}=digiBlocksData.blocks.countdown.icon;return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${te}`,className:"digiblocks-editor-icons"},wp.element.createElement("path",{d:e}))}},description:digiBlocksData.blocks.countdown.description,keywords:[Tt("countdown","digiblocks"),Tt("timer","digiblocks"),Tt("clock","digiblocks")],supports:{inserter:!!Db("countdown"),html:!1,className:!1,customClassName:!1,anchor:!1},attributes:{id:{type:"string",default:""},anchor:{type:"string",default:""},visibility:{type:"object",default:{desktop:!1,tablet:!1,mobile:!1}},customClasses:{type:"string",default:""},endDate:{type:"string",default:""},showDays:{type:"boolean",default:!0},showHours:{type:"boolean",default:!0},showMinutes:{type:"boolean",default:!0},showSeconds:{type:"boolean",default:!0},daysLabel:{type:"string",default:Tt("Days","digiblocks")},hoursLabel:{type:"string",default:Tt("Hours","digiblocks")},minutesLabel:{type:"string",default:Tt("Minutes","digiblocks")},secondsLabel:{type:"string",default:Tt("Seconds","digiblocks")},digitColor:{type:"string",default:"#333333"},digitBackground:{type:"string",default:"#f0f0f0"},digitHoverColor:{type:"string",default:""},digitHoverBackground:{type:"string",default:""},labelColor:{type:"string",default:"#666666"},labelHoverColor:{type:"string",default:""},separatorColor:{type:"string",default:"#333333"},separatorHoverColor:{type:"string",default:""},boxStyle:{type:"string",default:"default"},boxBorderRadius:{type:"object",default:{desktop:{top:4,right:4,bottom:4,left:4,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},boxPadding:{type:"object",default:{desktop:{top:10,right:10,bottom:10,left:10,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},boxMargin:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},boxBorderWidth:{type:"object",default:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},boxBorderColor:{type:"string",default:"#e0e0e0"},showBoxShadow:{type:"boolean",default:!1},boxShadow:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},boxShadowHover:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},itemSpacing:{type:"object",default:{desktop:48,tablet:30,mobile:16}},align:{type:"string",default:"center"},labelPosition:{type:"string",default:"bottom"},labelSpacing:{type:"object",default:{desktop:5,tablet:4,mobile:3}},titleTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:70,tablet:38,mobile:26},fontSizeUnit:"px",fontWeight:"600",fontStyle:"normal",textTransform:"",textDecoration:"",lineHeight:{desktop:1.2,tablet:1.2,mobile:1.2},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}},contentTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:16,tablet:14,mobile:12},fontSizeUnit:"px",fontWeight:"",fontStyle:"normal",textTransform:"",textDecoration:"",lineHeight:{desktop:1.4,tablet:1.4,mobile:1.4},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}},expiredMessage:{type:"string",default:Tt("Time's up!","digiblocks")},animation:{type:"string",default:"none"},displaySeparator:{type:"boolean",default:!1},separatorType:{type:"string",default:"colon"},boxesEqual:{type:"boolean",default:!1},style:{type:"string",default:"boxes"}},example:{attributes:{endDate:new Date(Date.now()+2592e6).toISOString(),style:"boxes",boxStyle:"filled",digitColor:"#ffffff",digitBackground:"#1e73be",labelColor:"#333333",showDays:!0,showHours:!0,showMinutes:!0,showSeconds:!0,titleTypography:{fontSize:{desktop:32}},contentTypography:{fontSize:{desktop:14}}}},edit:Hc,save:zc});var{__:Pe}=window.wp.i18n,{useBlockProps:Pb,InspectorControls:Rb,PanelColorSettings:lt,BlockControls:Ib,AlignmentToolbar:Lb}=window.wp.blockEditor,{TabPanel:Ob,SelectControl:dl,RangeControl:Yt,TextControl:Nt,ToggleControl:gl,Button:Mc,__experimentalToggleGroupControl:F1,__experimentalToggleGroupControlOption:E1}=window.wp.components,{useState:Zt,useEffect:Gn,useRef:Ub}=window.wp.element,{useBlockId:jb,getDimensionCSS:Ht,animations:Qn,animationPreview:Dc}=digi.utils,{tabIcons:Jn}=digi.icons,{ResponsiveControl:ut,DimensionControl:zt,TypographyControl:Yn,BoxShadowControl:Vb,CustomTabPanel:Fb,TabPanelBody:mt}=digi.components,Eb=({attributes:te,setAttributes:e,clientId:K})=>{let{id:o,anchor:P,visibility:s,customClasses:oe,iconValue:l,startNumber:$,endNumber:x,title:H,description:T,counterColor:u,counterHoverColor:r,titleColor:S,titleHoverColor:D,textColor:y,textHoverColor:v,backgroundColor:_,backgroundHoverColor:L,iconColor:B,iconHoverColor:O,iconBackgroundColor:Y,iconHoverBackgroundColor:A,iconSize:V,iconPadding:k,iconMargin:b,iconBorderStyle:M,iconBorderWidth:le,iconBorderRadius:Ve,iconBorderColor:Ce,iconHoverBorderColor:Z,typography:I,titleTypography:ee,contentTypography:F,padding:Q,margin:X,align:se,animation:ne,boxShadow:ve,boxShadowHover:J,borderStyle:ce,borderWidth:Te,borderRadius:be,borderColor:N,hoverEffect:xe,animationDuration:w,animationDelay:ke,thousandSeparator:U,decimalPlaces:fe,decimalSeparator:ze,layoutStyle:qe,verticalSpacing:je,counterPrefix:Fe,counterPrefixSpacing:Ie,counterSuffix:j,counterSuffixSpacing:Se,numberWithCommas:Qe,displayIcon:G}=te;jb(o,K,e);let[pe,R]=Zt(window.digi.responsiveState.activeDevice),[p,re]=Zt(!1),[n,g]=Zt($||0),[q,d]=Zt(!1),[ie,C]=Zt("normal");Gn(()=>window.digi.responsiveState.subscribe(Xe=>{R(Xe)}),[]);let[h,Be]=Zt(()=>{if(window.digi.uiState){let z=window.digi.uiState.getActiveTab(K);if(z)return z}return"options"}),[a,ge]=Zt(!1);Gn(()=>{let z=()=>window.digi&&window.digi.components&&window.digi.components.FontAwesomeControl?(ge(!0),!0):!1;if(!z()){let Xe=setTimeout(()=>{z()&&clearTimeout(Xe)},500);return()=>clearTimeout(Xe)}},[]);let Ue=z=>{e({iconValue:z})},Ke=Ub(null);Gn(()=>{if(ne&&ne!=="none"){let z=setTimeout(()=>{Dc(o,ne,Qn,Ke)},100);return()=>clearTimeout(z)}},[ne]);let ao=()=>{Dc(o,ne,Qn,Ke)},co=()=>{if(q)return;let z=parseInt($)||0,Xe=parseInt(x)||0,go=w||2e3,W=50,He=go/W,ho=(Xe-z)/W;d(!0),g(z);let uo=0,xo=setInterval(()=>{if(uo++,uo>=W)g(Xe),clearInterval(xo),d(!1);else{let Mo=z+ho*uo;g(Math.round(Mo))}},He);return()=>clearInterval(xo)},t=z=>{typeof z!="number"&&(z=parseFloat(z)||0);let Xe=z;fe&&fe>0?Xe=z.toFixed(fe):Xe=Math.round(z);let go=Xe.toString();if(fe>0&&ze&&ze!=="."&&(go=go.replace(".",ze)),Qe&&U){let W=go.split(ze||".");W[0]=W[0].replace(/\B(?=(\d{3})+(?!\d))/g,U),go=W.join(ze||".")}return go},m=[{label:Pe("Default","digiblocks"),value:"default"},{label:Pe("None","digiblocks"),value:"none"},{label:Pe("Solid","digiblocks"),value:"solid"},{label:Pe("Dotted","digiblocks"),value:"dotted"},{label:Pe("Dashed","digiblocks"),value:"dashed"},{label:Pe("Double","digiblocks"),value:"double"},{label:Pe("Groove","digiblocks"),value:"groove"},{label:Pe("Inset","digiblocks"),value:"inset"},{label:Pe("Outset","digiblocks"),value:"outset"},{label:Pe("Ridge","digiblocks"),value:"ridge"}],Me=[{label:Pe("None","digiblocks"),value:"none"},{label:Pe("Lift","digiblocks"),value:"lift"},{label:Pe("Scale","digiblocks"),value:"scale"},{label:Pe("Glow","digiblocks"),value:"glow"}],c=[{label:Pe("None","digiblocks"),value:"none"},...Object.keys(Qn).map(z=>({label:z.replace(/-/g," ").replace(/\b\w/g,Xe=>Xe.toUpperCase()),value:z}))],me=[{label:Pe("Stacked","digiblocks"),value:"stacked"},{label:Pe("Inline","digiblocks"),value:"inline"},{label:Pe("Centered","digiblocks"),value:"centered"}],oo=[{name:"options",title:Pe("Options","digiblocks"),icon:Jn.optionsIcon},{name:"style",title:Pe("Style","digiblocks"),icon:Jn.styleIcon},{name:"advanced",title:Pe("Advanced","digiblocks"),icon:Jn.advancedIcon}],f=[{name:"normal",title:Pe("Normal","digiblocks"),className:"digiblocks-tab-1 normal"},{name:"hover",title:Pe("Hover","digiblocks"),className:"digiblocks-tab-2 hover"}],De=()=>{let z=window.digi.responsiveState.activeDevice,Xe="";ce&&ce!=="default"&&ce!=="none"?Xe=`
                border-style: ${ce};
                border-color: ${N||"#e0e0e0"};
				${Ht(Te,"border-width",z)}
				${Ht(be,"border-radius",z)}
            `:Xe="border-style: none;";let go="box-shadow: none;";ve&&ve.enable&&(go=`box-shadow: ${ve.position==="inset"?"inset ":""}${ve.horizontal}px ${ve.vertical}px ${ve.blur}px ${ve.spread}px ${ve.color};`);let W=`${Ht(Q,"padding",z)}`,He=`${Ht(X,"margin",z)}`,ho="";ee&&(ee.fontFamily&&(ho+=`font-family: ${ee.fontFamily};`),ee.fontSize&&ee.fontSize[z]&&(ho+=`font-size: ${ee.fontSize[z]}${ee.fontSizeUnit||"px"};`),ee.fontWeight&&(ho+=`font-weight: ${ee.fontWeight};`),ee.fontStyle&&(ho+=`font-style: ${ee.fontStyle};`),ee.textTransform&&(ho+=`text-transform: ${ee.textTransform};`),ee.textDecoration&&(ho+=`text-decoration: ${ee.textDecoration};`),ee.lineHeight&&ee.lineHeight[z]&&(ho+=`line-height: ${ee.lineHeight[z]}${ee.lineHeightUnit||"em"};`),ee.letterSpacing&&ee.letterSpacing[z]&&(ho+=`letter-spacing: ${ee.letterSpacing[z]}${ee.letterSpacingUnit||"px"};`));let uo="";F&&(F.fontFamily&&(uo+=`font-family: ${F.fontFamily};`),F.fontSize&&F.fontSize[z]&&(uo+=`font-size: ${F.fontSize[z]}${F.fontSizeUnit||"px"};`),F.fontWeight&&(uo+=`font-weight: ${F.fontWeight};`),F.fontStyle&&(uo+=`font-style: ${F.fontStyle};`),F.textTransform&&(uo+=`text-transform: ${F.textTransform};`),F.textDecoration&&(uo+=`text-decoration: ${F.textDecoration};`),F.lineHeight&&F.lineHeight[z]&&(uo+=`line-height: ${F.lineHeight[z]}${F.lineHeightUnit||"em"};`),F.letterSpacing&&F.letterSpacing[z]&&(uo+=`letter-spacing: ${F.letterSpacing[z]}${F.letterSpacingUnit||"px"};`));let xo="";I&&(I.fontFamily&&(xo+=`font-family: ${I.fontFamily};`),I.fontSize&&I.fontSize[z]&&(xo+=`font-size: ${I.fontSize[z]}${I.fontSizeUnit||"px"};`),I.fontWeight&&(xo+=`font-weight: ${I.fontWeight};`),I.fontStyle&&(xo+=`font-style: ${I.fontStyle};`),I.textTransform&&(xo+=`text-transform: ${I.textTransform};`),I.textDecoration&&(xo+=`text-decoration: ${I.textDecoration};`),I.lineHeight&&I.lineHeight[z]&&(xo+=`line-height: ${I.lineHeight[z]}${I.lineHeightUnit||"em"};`),I.letterSpacing&&I.letterSpacing[z]&&(xo+=`letter-spacing: ${I.letterSpacing[z]}${I.letterSpacingUnit||"px"};`));let Mo="",Do="",ko="";G&&l&&l.svg&&(Y&&(Mo+=`background-color: ${Y};`),M&&M!=="default"&&M!=="none"&&(Mo+=`
                    border-style: ${M};
                    border-color: ${Ce||"#e0e0e0"};
					${Ht(le,"border-width",z)}
					${Ht(Ve,"border-radius",z)}
                `),k&&k[z]&&(Mo+=`${Ht(k,"padding",z)}`),O&&(Do+=`fill: ${O} !important; color: ${O} !important;`),A&&(Do+=`background-color: ${A};`),Z&&(Do+=`border-color: ${Z};`),b&&b[z]?ko=`${Ht(b,"margin",z)}`:ko=`margin: 0px 0px ${z==="desktop"?20:z==="tablet"?15:10}px 0px;`);let mo="";if(J&&J.enable){let yo=J.position==="inset"?"inset ":"";mo+=`box-shadow: ${yo}${J.horizontal}px ${J.vertical}px ${J.blur}px ${J.spread}px ${J.color};`}return xe==="lift"?mo+="transform: translateY(-10px);":xe==="scale"?mo+="transform: scale(1.05);":xe==="glow"&&(mo+="filter: brightness(1.1);"),`
            /* Main block styles */
            .${o} {
                background-color: ${_||"transparent"};
                ${go}
                ${W}
                ${He}
                ${Xe}
                transition: all 0.3s ease;
                text-align: ${se||"center"};
            }
            
            /* Hover effects */
            .${o}:hover {
                ${L?`background-color: ${L};`:""}
                ${mo}
            }
            
            /* Layout styles */
            .${o} .digiblocks-counter-inner {
                display: flex;
                flex-direction: ${qe==="inline"?"row":"column"};
                align-items: ${qe==="inline"?"center":se==="left"?"flex-start":se==="right"?"flex-end":"center"};
                justify-content: ${qe==="inline"?"flex-start":"center"};
                gap: ${je||15}px;
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
                width: ${V&&V[z]?V[z]:32}px;
                height: 100%;
                fill: ${B||"inherit"};
                transition: all 0.3s ease;
            }
            
            /* Icon hover styles */
            .${o}:hover .digiblocks-counter-icon {
                ${Do}
            }
            
            .${o}:hover .digiblocks-counter-icon svg {
                ${O?`fill: ${O};`:""}
            }
            `:""}
            
            /* Counter styles */
            .${o} .digiblocks-counter-number-wrapper {
                display: flex;
                align-items: center;
                justify-content: ${se==="left"?"flex-start":se==="right"?"flex-end":"center"};
                margin-bottom: 10px;
            }
            
            .${o} .digiblocks-counter-prefix {
                margin-right: ${Ie||5}px;
                color: ${u||"#333333"};
                ${xo}
                transition: color 0.3s ease;
            }
            
            .${o} .digiblocks-counter-suffix {
                margin-left: ${Se||5}px;
                color: ${u||"#333333"};
                ${xo}
                transition: color 0.3s ease;
            }
            
            .${o} .digiblocks-counter-number {
                color: ${u||"#333333"};
                ${xo}
                transition: color 0.3s ease;
            }
            
            /* Counter hover styles */
            .${o}:hover .digiblocks-counter-number,
            .${o}:hover .digiblocks-counter-prefix,
            .${o}:hover .digiblocks-counter-suffix {
                ${r?`color: ${r};`:""}
            }
            
            /* Title styles */
            .${o} .digiblocks-counter-title {
                color: ${S||"inherit"};
                margin-bottom: 10px;
                ${ho}
                transition: color 0.3s ease;
            }
            
            /* Title hover styles */
            .${o}:hover .digiblocks-counter-title {
                ${D?`color: ${D};`:""}
            }
            
            /* Content styles */
            .${o} .digiblocks-counter-description {
                color: ${y||"inherit"};
                ${uo}
                transition: color 0.3s ease;
            }
            
            /* Content hover styles */
            .${o}:hover .digiblocks-counter-description {
                ${v?`color: ${v};`:""}
            }

			/* Visibility Controls */
			${s.desktop?`
				@media (min-width: 992px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${s.tablet?`
				@media (min-width: 768px) and (max-width: 991px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${s.mobile?`
				@media (max-width: 767px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}
        `},io=a?window.digi.components.FontAwesomeControl:null,so=()=>!G||!l||!l.svg||l.svg.trim()===""?null:wp.element.createElement("div",{className:"digiblocks-counter-icon"},wp.element.createElement("span",{dangerouslySetInnerHTML:{__html:l.svg}})),i=z=>z==="normal"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(lt,{title:Pe("Counter Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:u,onChange:Xe=>e({counterColor:Xe}),label:Pe("Counter Color","digiblocks")}]}),wp.element.createElement(lt,{title:Pe("Content Colors","digiblocks"),initialOpen:!1,enableAlpha:!0,colorSettings:[{value:S,onChange:Xe=>e({titleColor:Xe}),label:Pe("Title Color","digiblocks")},{value:y,onChange:Xe=>e({textColor:Xe}),label:Pe("Description Color","digiblocks")}]}),G&&wp.element.createElement(lt,{title:Pe("Icon Colors","digiblocks"),initialOpen:!1,enableAlpha:!0,colorSettings:[{value:B,onChange:Xe=>e({iconColor:Xe}),label:Pe("Icon Color","digiblocks")},{value:Y,onChange:Xe=>e({iconBackgroundColor:Xe}),label:Pe("Icon Background","digiblocks")}]}),wp.element.createElement(lt,{title:Pe("Block Colors","digiblocks"),initialOpen:!1,enableAlpha:!0,colorSettings:[{value:_,onChange:Xe=>e({backgroundColor:Xe}),label:Pe("Background Color","digiblocks")}]})):z==="hover"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(lt,{title:Pe("Counter Hover Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:r,onChange:Xe=>e({counterHoverColor:Xe}),label:Pe("Counter Hover Color","digiblocks")}]}),wp.element.createElement(lt,{title:Pe("Content Hover Colors","digiblocks"),initialOpen:!1,enableAlpha:!0,colorSettings:[{value:D,onChange:Xe=>e({titleHoverColor:Xe}),label:Pe("Title Hover Color","digiblocks")},{value:v,onChange:Xe=>e({textHoverColor:Xe}),label:Pe("Description Hover Color","digiblocks")}]}),G&&wp.element.createElement(lt,{title:Pe("Icon Hover Colors","digiblocks"),initialOpen:!1,enableAlpha:!0,colorSettings:[{value:O,onChange:Xe=>e({iconHoverColor:Xe}),label:Pe("Icon Hover Color","digiblocks")},{value:A,onChange:Xe=>e({iconHoverBackgroundColor:Xe}),label:Pe("Icon Hover Background","digiblocks")}]}),wp.element.createElement(lt,{title:Pe("Block Hover Colors","digiblocks"),initialOpen:!1,enableAlpha:!0,colorSettings:[{value:L,onChange:Xe=>e({backgroundHoverColor:Xe}),label:Pe("Background Hover Color","digiblocks")}]})):null,E=()=>{switch(h){case"options":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:"components-panel__body is-opened"},wp.element.createElement(gl,{label:Pe("Display Icon","digiblocks"),checked:G,onChange:z=>e({displayIcon:z}),__nextHasNoMarginBottom:!0}),G&&wp.element.createElement("div",{style:{marginBottom:"2rem"}},a?wp.element.createElement(io,{label:Pe("Select Icon","digiblocks"),value:l,onChange:Ue}):wp.element.createElement("div",{style:{textAlign:"center",padding:"20px 0"}},wp.element.createElement("div",{className:"components-spinner"}),wp.element.createElement("p",null,Pe("Loading icon selector...","digiblocks"))),l&&a&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{style:{marginTop:"15px",marginBottom:"15px",padding:"10px",background:"#f0f0f1",borderRadius:"3px"}},wp.element.createElement("p",{style:{margin:"0 0 5px 0"}},wp.element.createElement("strong",null,Pe("Selected Icon:","digiblocks"))," ",l.name),wp.element.createElement("p",{style:{margin:"0 0 5px 0"}},wp.element.createElement("strong",null,Pe("Style:","digiblocks"))," ",l.style),l.categories&&l.categories.length>0&&wp.element.createElement("p",{style:{margin:"0"}},wp.element.createElement("strong",null,Pe("Categories:","digiblocks"))," ",l.categories.join(", "))))),wp.element.createElement(dl,{label:Pe("Layout Style","digiblocks"),value:qe||"stacked",options:me,onChange:z=>e({layoutStyle:z}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Yt,{label:Pe("Spacing","digiblocks"),value:je||15,onChange:z=>e({verticalSpacing:z}),min:0,max:100,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Nt,{label:Pe("Starting Number","digiblocks"),type:"number",value:$,onChange:z=>e({startNumber:z}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Nt,{label:Pe("Ending Number","digiblocks"),type:"number",value:x,onChange:z=>e({endNumber:z}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Nt,{label:Pe("Counter Prefix","digiblocks"),value:Fe||"",onChange:z=>e({counterPrefix:z}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),Fe&&wp.element.createElement(Yt,{label:Pe("Prefix Spacing","digiblocks"),value:Ie||5,onChange:z=>e({counterPrefixSpacing:z}),min:0,max:30,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Nt,{label:Pe("Counter Suffix","digiblocks"),value:j||"",onChange:z=>e({counterSuffix:z}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),j&&wp.element.createElement(Yt,{label:Pe("Suffix Spacing","digiblocks"),value:Se||5,onChange:z=>e({counterSuffixSpacing:z}),min:0,max:30,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Nt,{label:Pe("Title","digiblocks"),value:H||"",onChange:z=>e({title:z}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Nt,{label:Pe("Description","digiblocks"),value:T||"",onChange:z=>e({description:z}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(gl,{label:Pe("Use Thousand Separator","digiblocks"),checked:Qe,onChange:z=>e({numberWithCommas:z}),__nextHasNoMarginBottom:!0}),Qe&&wp.element.createElement(Nt,{label:Pe("Thousand Separator","digiblocks"),value:U||",",onChange:z=>e({thousandSeparator:z}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Yt,{label:Pe("Decimal Places","digiblocks"),value:fe||0,onChange:z=>e({decimalPlaces:z}),min:0,max:10,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),fe>0&&wp.element.createElement(Nt,{label:Pe("Decimal Separator","digiblocks"),value:ze||".",onChange:z=>e({decimalSeparator:z}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement("div",{style:{marginTop:"10px"}},wp.element.createElement(Mc,{isPrimary:!0,onClick:co,disabled:q},Pe("Preview Counter Animation","digiblocks")))));case"style":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(mt,{tab:"style",name:"colors",title:Pe("Colors","digiblocks"),initialOpen:!0},wp.element.createElement(Ob,{className:"digiblocks-control-tabs",activeClass:"active-tab",tabs:f,onSelect:z=>C(z.name)},z=>i(z.name))),wp.element.createElement(mt,{tab:"style",name:"typography",title:Pe("Typography","digiblocks"),initialOpen:!1},wp.element.createElement(Yn,{label:Pe("Counter Typography","digiblocks"),value:I||{},onChange:z=>e({typography:z}),defaults:{fontSize:{desktop:48,tablet:42,mobile:36},fontSizeUnit:"px",lineHeight:{desktop:1.2,tablet:1.2,mobile:1.2},lineHeightUnit:"em"}}),wp.element.createElement(Yn,{label:Pe("Title Typography","digiblocks"),value:ee||{},onChange:z=>e({titleTypography:z}),defaults:{fontSize:{desktop:20,tablet:18,mobile:16},fontSizeUnit:"px",lineHeight:{desktop:1.4,tablet:1.3,mobile:1.2},lineHeightUnit:"em"}}),wp.element.createElement(Yn,{label:Pe("Description Typography","digiblocks"),value:F||{},onChange:z=>e({contentTypography:z}),defaults:{fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em"}})),G&&wp.element.createElement(mt,{tab:"style",name:"icon",title:Pe("Icon","digiblocks"),initialOpen:!1},wp.element.createElement(ut,{label:Pe("Icon Size","digiblocks")},wp.element.createElement(Yt,{value:V&&V[pe]?V[pe]:32,onChange:z=>e({iconSize:{...V||{desktop:32,tablet:28,mobile:24},[pe]:z}}),min:8,max:200,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(dl,{label:Pe("Border Style","digiblocks"),value:M||"default",options:m,onChange:z=>{z!=="default"&&z!=="none"&&(M==="default"||M==="none"||!M)&&(!le||Object.keys(le).length===0)&&e({iconBorderWidth:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}}),e({iconBorderStyle:z})},__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),M&&M!=="default"&&M!=="none"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(lt,{title:Pe("Border Colors","digiblocks"),enableAlpha:!0,colorSettings:[{value:Ce,onChange:z=>e({iconBorderColor:z}),label:Pe("Border Color","digiblocks")},{value:Z,onChange:z=>e({iconHoverBorderColor:z}),label:Pe("Border Hover Color","digiblocks")}]}),wp.element.createElement(ut,{label:Pe("Border Width","digiblocks")},wp.element.createElement(zt,{values:le[pe],onChange:z=>e({iconBorderWidth:{...le||{},[pe]:z}})})),wp.element.createElement(ut,{label:Pe("Border Radius","digiblocks")},wp.element.createElement(zt,{values:Ve[pe],onChange:z=>e({iconBorderRadius:{...Ve||{},[pe]:z}}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]}))),wp.element.createElement(ut,{label:Pe("Icon Padding","digiblocks")},wp.element.createElement(zt,{values:k[pe],onChange:z=>e({iconPadding:{...k||{},[pe]:z}})})),wp.element.createElement(ut,{label:Pe("Icon Margin","digiblocks")},wp.element.createElement(zt,{values:b&&b[pe]?b[pe]:{top:0,right:0,bottom:pe==="desktop"?20:pe==="tablet"?15:10,left:0,unit:"px"},onChange:z=>e({iconMargin:{...b||{desktop:{top:0,right:0,bottom:20,left:0,unit:"px"},tablet:{top:0,right:0,bottom:15,left:0,unit:"px"},mobile:{top:0,right:0,bottom:10,left:0,unit:"px"}},[pe]:z}})}))),wp.element.createElement(mt,{tab:"style",name:"animation",title:Pe("Counter Animation","digiblocks"),initialOpen:!1},wp.element.createElement(Yt,{label:Pe("Animation Duration (ms)","digiblocks"),value:w||2e3,onChange:z=>e({animationDuration:z}),min:100,max:1e4,step:100,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Yt,{label:Pe("Animation Delay (ms)","digiblocks"),value:ke||0,onChange:z=>e({animationDelay:z}),min:0,max:1e4,step:100,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(mt,{tab:"style",name:"border",title:Pe("Border & Shadow","digiblocks"),initialOpen:!1},wp.element.createElement(dl,{label:Pe("Border Style","digiblocks"),value:ce||"default",options:m,onChange:z=>{z!=="default"&&z!=="none"&&(ce==="default"||ce==="none"||!ce)&&((!Te||Object.keys(Te).length===0)&&e({borderWidth:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}}),(!be||Object.keys(be).length===0)&&e({borderRadius:{desktop:{top:8,right:8,bottom:8,left:8,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}})),e({borderStyle:z})},__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),ce&&ce!=="default"&&ce!=="none"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(lt,{title:Pe("Border Color","digiblocks"),enableAlpha:!0,colorSettings:[{value:N,onChange:z=>e({borderColor:z}),label:Pe("Border Color","digiblocks")}]}),wp.element.createElement(ut,{label:Pe("Border Width","digiblocks")},wp.element.createElement(zt,{values:Te[pe],onChange:z=>e({borderWidth:{...Te,[pe]:z}})})),wp.element.createElement(ut,{label:Pe("Border Radius","digiblocks")},wp.element.createElement(zt,{values:be[pe],onChange:z=>e({borderRadius:{...be,[pe]:z}}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]}))),wp.element.createElement(dl,{label:Pe("Hover Effect","digiblocks"),value:xe||"none",options:Me,onChange:z=>e({hoverEffect:z}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Vb,{normalValue:ve,hoverValue:J,onNormalChange:z=>e({boxShadow:z}),onHoverChange:z=>e({boxShadowHover:z})})),wp.element.createElement(mt,{tab:"style",name:"spacing",title:Pe("Spacing","digiblocks"),initialOpen:!1},wp.element.createElement(ut,{label:Pe("Padding","digiblocks")},wp.element.createElement(zt,{values:Q&&Q[pe]?Q[pe]:{top:30,right:30,bottom:30,left:30,unit:"px"},onChange:z=>e({padding:{...Q,[pe]:z}})})),wp.element.createElement(ut,{label:Pe("Margin","digiblocks")},wp.element.createElement(zt,{values:X&&X[pe]?X[pe]:{top:0,right:0,bottom:30,left:0,unit:"px"},onChange:z=>e({margin:{...X,[pe]:z}})}))));case"advanced":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(mt,{tab:"advanced",name:"animation",title:Pe("Animation","digiblocks"),initialOpen:!0},wp.element.createElement(dl,{label:Pe("Animation Effect","digiblocks"),value:ne,options:c,onChange:z=>e({animation:z}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),ne&&ne!=="none"&&wp.element.createElement("div",{style:{marginTop:"10px"}},wp.element.createElement(Mc,{variant:"secondary",isSecondary:!0,onClick:ao,style:{width:"100%"}},Pe("Preview Animation","digiblocks")))),wp.element.createElement(mt,{tab:"advanced",name:"visibility",title:Pe("Visibility","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control__help",style:{padding:"12px",backgroundColor:"#f0f6fc",border:"1px solid #c3ddfd",borderRadius:"4px",marginBottom:"16px"}},wp.element.createElement("strong",null,Pe("Editor Note:","digiblocks")),wp.element.createElement("br",null),Pe("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.","digiblocks")),wp.element.createElement(gl,{label:Pe("Hide on Desktop","digiblocks"),checked:s.desktop,onChange:z=>e({visibility:{...s,desktop:z}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(gl,{label:Pe("Hide on Tablet","digiblocks"),checked:s.tablet,onChange:z=>e({visibility:{...s,tablet:z}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(gl,{label:Pe("Hide on Mobile","digiblocks"),checked:s.mobile,onChange:z=>e({visibility:{...s,mobile:z}}),__nextHasNoMarginBottom:!0})),wp.element.createElement(mt,{tab:"advanced",name:"additional",title:Pe("Additional","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control html-anchor-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"html-anchor"},Pe("HTML anchor","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"html-anchor",value:P||"",onChange:z=>e({anchor:z.target.value}),"aria-describedby":"html-anchor-help",autoCapitalize:"none",autoComplete:"off"})),wp.element.createElement("p",{id:"html-anchor-help",className:"components-base-control__help"},Pe(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`,"digiblocks")," ",wp.element.createElement("a",{className:"components-external-link",href:"https://wordpress.org/documentation/article/page-jumps/",target:"_blank",rel:"external noreferrer noopener"},wp.element.createElement("span",{className:"components-external-link__contents"},Pe("Learn more about anchors","digiblocks")),wp.element.createElement("span",{className:"components-external-link__icon","aria-label":"(opens in a new tab)"},"\u2197")))),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"additional-css-classes"},Pe("Additional CSS class(es)","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"additional-css-classes",value:oe||"",onChange:z=>e({customClasses:z.target.value}),"aria-describedby":"additional-css-classes-help",autoComplete:"off"})),wp.element.createElement("p",{id:"additional-css-classes-help",className:"components-base-control__help"},Pe("Separate multiple classes with spaces.","digiblocks")))));default:return null}},Oe=Pb({className:`digiblocks-counter ${o} align-${se} ${oe||""}`,id:P||null}),bo=t(n);return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Ib,null,wp.element.createElement(Lb,{value:se,onChange:z=>e({align:z})})),wp.element.createElement(Rb,null,wp.element.createElement(Fb,{tabs:oo,activeTab:h,onSelect:Be},E())),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:De()}}),wp.element.createElement("div",{...Oe},wp.element.createElement("div",{className:"digiblocks-counter-inner"},G&&so(),wp.element.createElement("div",{className:"digiblocks-counter-content"},wp.element.createElement("div",{className:"digiblocks-counter-number-wrapper"},Fe&&wp.element.createElement("span",{className:"digiblocks-counter-prefix"},Fe),wp.element.createElement("span",{className:"digiblocks-counter-number"},bo),j&&wp.element.createElement("span",{className:"digiblocks-counter-suffix"},j)),H&&wp.element.createElement("h3",{className:"digiblocks-counter-title"},H),T&&wp.element.createElement("p",{className:"digiblocks-counter-description"},T)))))},Pc=Eb;var{useBlockProps:Wb}=window.wp.blockEditor,qb=({attributes:te})=>{let{id:e,anchor:K,customClasses:o,iconValue:P,startNumber:s,endNumber:oe,counterPrefix:l,counterSuffix:$,title:x,description:H,align:T,animation:u,layoutStyle:r,displayIcon:S,numberWithCommas:D,thousandSeparator:y,decimalPlaces:v,decimalSeparator:_,animationDuration:L,animationDelay:B}=te,O=["digiblocks-counter",e,`align-${T||"center"}`,`layout-${r||"stacked"}`,u!=="none"?`animate-${u}`:"",o||""].filter(Boolean).join(" "),Y=Wb.save({className:O,id:K||null,"data-start-value":s||0,"data-end-value":oe||0,"data-animation-duration":L||2e3,"data-animation-delay":B||0,"data-thousand-separator":D?y||",":"","data-decimal-places":v||0,"data-decimal-separator":_||"."}),A=()=>!S||!P||!P.svg||P.svg.trim()===""?null:wp.element.createElement("div",{className:"digiblocks-counter-icon"},wp.element.createElement("span",{dangerouslySetInnerHTML:{__html:P.svg}}));return wp.element.createElement("div",{...Y},wp.element.createElement("div",{className:"digiblocks-counter-inner"},S&&A(),wp.element.createElement("div",{className:"digiblocks-counter-content"},wp.element.createElement("div",{className:"digiblocks-counter-number-wrapper"},l&&wp.element.createElement("span",{className:"digiblocks-counter-prefix"},l),wp.element.createElement("span",{className:"digiblocks-counter-number"},s||0),$&&wp.element.createElement("span",{className:"digiblocks-counter-suffix"},$)),x&&wp.element.createElement("h3",{className:"digiblocks-counter-title"},x),H&&wp.element.createElement("p",{className:"digiblocks-counter-description"},H))))},Rc=qb;var{__:ka}=window.wp.i18n,{registerBlockType:Gb}=window.wp.blocks,{getBlockActiveStatus:Qb}=window.wp.digiBlocks;Gb("digiblocks/counter",{apiVersion:2,title:digiBlocksData.blocks.counter.title,category:"digiblocks",icon:{src:()=>{let{viewbox:te,path:e}=digiBlocksData.blocks.counter.icon;return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${te}`,className:"digiblocks-editor-icons"},wp.element.createElement("path",{d:e}))}},description:digiBlocksData.blocks.counter.description,keywords:[ka("counter","digiblocks"),ka("number","digiblocks"),ka("stats","digiblocks"),ka("count up","digiblocks")],supports:{inserter:!!Qb("counter"),html:!1,className:!1,customClassName:!1,anchor:!1},attributes:{id:{type:"string",default:""},anchor:{type:"string",default:""},visibility:{type:"object",default:{desktop:!1,tablet:!1,mobile:!1}},customClasses:{type:"string",default:""},iconValue:{type:"object",default:null},startNumber:{type:"string",default:"0"},endNumber:{type:"string",default:"100"},counterPrefix:{type:"string",default:""},counterPrefixSpacing:{type:"number",default:5},counterSuffix:{type:"string",default:""},counterSuffixSpacing:{type:"number",default:5},title:{type:"string",default:"Counter Title"},description:{type:"string",default:"Add description here."},counterColor:{type:"string",default:"#333333"},counterHoverColor:{type:"string",default:""},titleColor:{type:"string",default:"#333333"},titleHoverColor:{type:"string",default:""},textColor:{type:"string",default:"#666666"},textHoverColor:{type:"string",default:""},backgroundColor:{type:"string",default:"transparent"},backgroundHoverColor:{type:"string",default:""},iconColor:{type:"string",default:"#1e73be"},iconHoverColor:{type:"string",default:""},iconBackgroundColor:{type:"string",default:"transparent"},iconHoverBackgroundColor:{type:"string",default:""},iconSize:{type:"object",default:{desktop:32,tablet:28,mobile:24}},iconPadding:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},iconMargin:{type:"object",default:{desktop:{top:0,right:0,bottom:20,left:0,unit:"px"},tablet:{top:0,right:0,bottom:15,left:0,unit:"px"},mobile:{top:0,right:0,bottom:10,left:0,unit:"px"}}},iconBorderStyle:{type:"string",default:"default"},iconBorderWidth:{type:"object",default:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},iconBorderRadius:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},iconBorderColor:{type:"string",default:"#e0e0e0"},iconHoverBorderColor:{type:"string",default:""},typography:{type:"object",default:{fontFamily:"",fontSize:{desktop:48,tablet:42,mobile:36},fontSizeUnit:"px",fontWeight:"700",fontStyle:"normal",textTransform:"",textDecoration:"",lineHeight:{desktop:1.2,tablet:1.2,mobile:1.2},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}},titleTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:20,tablet:18,mobile:16},fontSizeUnit:"px",fontWeight:"500",fontStyle:"normal",textTransform:"",textDecoration:"",lineHeight:{desktop:1.4,tablet:1.3,mobile:1.2},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}},contentTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",fontWeight:"",fontStyle:"normal",textTransform:"",textDecoration:"",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}},padding:{type:"object",default:{desktop:{top:30,right:30,bottom:30,left:30,unit:"px"},tablet:{top:25,right:25,bottom:25,left:25,unit:"px"},mobile:{top:20,right:20,bottom:20,left:20,unit:"px"}}},margin:{type:"object",default:{desktop:{top:0,right:0,bottom:30,left:0,unit:"px"},tablet:{top:0,right:0,bottom:25,left:0,unit:"px"},mobile:{top:0,right:0,bottom:20,left:0,unit:"px"}}},align:{type:"string",default:"center"},animation:{type:"string",default:"none"},boxShadow:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},boxShadowHover:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},borderStyle:{type:"string",default:"default"},borderRadius:{type:"object",default:{desktop:{top:8,right:8,bottom:8,left:8,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderWidth:{type:"object",default:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderColor:{type:"string",default:"#e0e0e0"},hoverEffect:{type:"string",default:"none"},animationDuration:{type:"number",default:2e3},animationDelay:{type:"number",default:0},thousandSeparator:{type:"string",default:","},decimalPlaces:{type:"number",default:0},decimalSeparator:{type:"string",default:"."},layoutStyle:{type:"string",default:"stacked"},verticalSpacing:{type:"number",default:15},displayIcon:{type:"boolean",default:!1},numberWithCommas:{type:"boolean",default:!0}},example:{attributes:{startNumber:"0",endNumber:"100",counterPrefix:"",counterSuffix:"+",title:"Happy Clients",description:"Serving clients with excellence",displayIcon:!0,iconValue:{id:"user-check",name:"User Check",svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M274.7 304H173.3C77.61 304 0 381.6 0 477.3C0 496.5 15.52 512 34.66 512H413.3C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304zM224 256c70.7 0 128-57.31 128-128S294.7 0 224 0C153.3 0 96 57.31 96 128S153.3 256 224 256zM632.3 134.4c-9.703-9-24.91-8.453-33.92 1.266l-87.05 93.75l-38.39-38.39c-9.375-9.375-24.56-9.375-33.94 0s-9.375 24.56 0 33.94l56 56C499.5 285.5 505.6 288 512 288h.4375c6.531-.125 12.72-2.891 17.16-7.672l104-112C642.6 158.6 642 143.4 632.3 134.4z"/></svg>',style:"solid",categories:["users-people"]},counterColor:"#1e73be",iconColor:"#1e73be",backgroundColor:"#ffffff"}},edit:Pc,save:Rc});var{__:$e}=window.wp.i18n,{useBlockProps:Jb,RichText:Ic,InspectorControls:Yb,PanelColorSettings:Mt}=window.wp.blockEditor,{SelectControl:Kt,RangeControl:Lc,ToggleControl:va,Button:Ci,TextControl:Zn,Tooltip:xa,TabPanel:Oc,__experimentalToggleGroupControl:J1,__experimentalToggleGroupControlOption:Y1}=window.wp.components,{useState:Kn,useEffect:Xn,useRef:Zb}=window.wp.element,{useBlockId:Kb,getDimensionCSS:Io,animations:pl,animationPreview:Uc}=digi.utils,{tabIcons:An}=digi.icons,{ResponsiveControl:wi,DimensionControl:ya,TypographyControl:jc,BoxShadowControl:Xb,CustomTabPanel:Ab,TabPanelBody:Lo}=digi.components,eu=({attributes:te,setAttributes:e,clientId:K})=>{let{id:o,anchor:P,visibility:s,customClasses:oe,items:l,titleColor:$,titleHoverColor:x,titleActiveColor:H,backgroundColor:T,backgroundHoverColor:u,backgroundActiveColor:r,contentColor:S,contentBackgroundColor:D,borderColor:y,borderHoverColor:v,borderRadius:_,borderWidth:L,borderStyle:B,boxShadow:O,boxShadowHover:Y,padding:A,margin:V,titleTypography:k,contentTypography:b,iconPosition:M,iconColor:le,iconHoverColor:Ve,iconActiveColor:Ce,iconSize:Z,animation:I,allowMultipleOpen:ee,iconType:F,titleTag:Q,questionPrefix:X,questionPrefixColor:se,answerPrefix:ne,answerPrefixColor:ve,layout:J,itemsSpacing:ce,schemaType:Te,schemaName:be}=te;Kb(o,K,e);let[N,xe]=Kn(()=>{if(window.digi.uiState){let t=window.digi.uiState.getActiveTab(K);if(t)return t}return"options"}),[w,ke]=Kn(window.digi.responsiveState.activeDevice),[U,fe]=Kn(!1);Xn(()=>window.digi.responsiveState.subscribe(m=>{ke(m)}),[]),Xn(()=>{if(l&&l.length>0){let t=l.map((m,Me)=>m.id?m:{...m,id:`faq-item-${K.substr(0,8)}-${Me}`});JSON.stringify(t)!==JSON.stringify(l)&&e({items:t})}},[K,l,e]);let ze=Zb(null);Xn(()=>{if(I&&I!=="none"){let t=setTimeout(()=>{Uc(o,I,pl,ze)},100);return()=>clearTimeout(t)}},[I]);let qe=()=>{Uc(o,I,pl,ze)},je=[{label:$e("Default","digiblocks"),value:"default"},{label:$e("None","digiblocks"),value:"none"},{label:$e("Solid","digiblocks"),value:"solid"},{label:$e("Dotted","digiblocks"),value:"dotted"},{label:$e("Dashed","digiblocks"),value:"dashed"},{label:$e("Double","digiblocks"),value:"double"},{label:$e("Groove","digiblocks"),value:"groove"},{label:$e("Inset","digiblocks"),value:"inset"},{label:$e("Outset","digiblocks"),value:"outset"},{label:$e("Ridge","digiblocks"),value:"ridge"}],Fe=[{label:$e("None","digiblocks"),value:"none"},...Object.keys(pl).map(t=>({label:t.replace(/-/g," ").replace(/\b\w/g,m=>m.toUpperCase()),value:t}))],Ie=[{label:$e("Plus/Minus","digiblocks"),value:"plusMinus"},{label:$e("Arrow","digiblocks"),value:"arrow"},{label:$e("Chevron","digiblocks"),value:"chevron"},{label:$e("Triangle","digiblocks"),value:"triangle"},{label:$e("Circle Plus/Minus","digiblocks"),value:"circlePlusMinus"}],j=[{label:$e("Right","digiblocks"),value:"right"},{label:$e("Left","digiblocks"),value:"left"}],Se=[{label:$e("H2","digiblocks"),value:"h2"},{label:$e("H3","digiblocks"),value:"h3"},{label:$e("H4","digiblocks"),value:"h4"},{label:$e("H5","digiblocks"),value:"h5"},{label:$e("H6","digiblocks"),value:"h6"},{label:$e("p","digiblocks"),value:"p"},{label:$e("div","digiblocks"),value:"div"}],Qe=[{label:$e("Boxed","digiblocks"),value:"boxed"},{label:$e("Classic","digiblocks"),value:"classic"},{label:$e("Separated","digiblocks"),value:"separated"},{label:$e("Minimalist","digiblocks"),value:"minimalist"},{label:$e("Bordered","digiblocks"),value:"bordered"}],G=[{label:$e("Default FAQ Schema","digiblocks"),value:"FAQPage"},{label:$e("Q&A Schema","digiblocks"),value:"QAPage"}],pe=[{name:"options",title:$e("Options","digiblocks"),icon:An.optionsIcon},{name:"style",title:$e("Style","digiblocks"),icon:An.styleIcon},{name:"advanced",title:$e("Advanced","digiblocks"),icon:An.advancedIcon}],R=[{name:"normal",title:$e("Normal","digiblocks"),className:"digiblocks-tab-1 normal"},{name:"hover",title:$e("Hover","digiblocks"),className:"digiblocks-tab-2 hover"},{name:"active",title:$e("Active","digiblocks"),className:"digiblocks-tab-3 active"}],p=()=>{let t=l.length,m={id:`faq-item-${K.substr(0,8)}-${t}`,title:$e("New FAQ Question","digiblocks"),content:$e("Add your answer here. Edit or remove this text inline or in the module Content settings.","digiblocks"),isOpen:!1};e({items:[...l,m]})},re=t=>{let m=[...l];m.splice(t,1),e({items:m})},n=t=>{let m=l[t],Me=Date.now(),c={...m,id:`faq-item-${K.substr(0,8)}-${Me}`,isOpen:!1},me=[...l];me.splice(t+1,0,c),e({items:me})},g=t=>{if(t===0)return;let m=[...l],Me=m[t];m.splice(t,1),m.splice(t-1,0,Me),e({items:m})},q=t=>{if(t===l.length-1)return;let m=[...l],Me=m[t];m.splice(t,1),m.splice(t+1,0,Me),e({items:m})},d=t=>{let m=l.map((Me,c)=>c===t?{...Me,isOpen:!Me.isOpen}:!ee&&c!==t&&Me.isOpen?{...Me,isOpen:!1}:Me);e({items:m})},ie=(t,m)=>{let Me=[...l];Me[m].title=t,e({items:Me})},C=(t,m)=>{let Me=[...l];Me[m].content=t,e({items:Me})},h=(t,m=F)=>{switch(m){case"plusMinus":return t?wp.element.createElement("span",{className:"digiblocks-faq-icon-minus"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:"1em",height:"1em"},wp.element.createElement("path",{fillRule:"evenodd",d:"M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"}))):wp.element.createElement("span",{className:"digiblocks-faq-icon-plus"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:"1em",height:"1em"},wp.element.createElement("path",{fillRule:"evenodd",d:"M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"})));case"arrow":return wp.element.createElement("span",{className:`digiblocks-faq-icon-arrow ${t?"is-open":""}`},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:"1em",height:"1em"},wp.element.createElement("path",{fillRule:"evenodd",d:"M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"})));case"chevron":return wp.element.createElement("span",{className:`digiblocks-faq-icon-chevron ${t?"is-open":""}`},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:"1em",height:"1em"},wp.element.createElement("path",{fillRule:"evenodd",d:"M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"})));case"triangle":return wp.element.createElement("span",{className:`digiblocks-faq-icon-triangle ${t?"is-open":""}`},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:"1em",height:"1em"},wp.element.createElement("path",{d:"m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"})));case"circlePlusMinus":return t?wp.element.createElement("span",{className:"digiblocks-faq-icon-circle-minus"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),wp.element.createElement("path",{d:"M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"}))):wp.element.createElement("span",{className:"digiblocks-faq-icon-circle-plus"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),wp.element.createElement("path",{d:"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"})));default:return t?wp.element.createElement("span",{className:"digiblocks-faq-icon-minus"},"\u2014"):wp.element.createElement("span",{className:"digiblocks-faq-icon-plus"},"+")}},Be=()=>{let t=window.digi.responsiveState.activeDevice,m=ce[t]!==void 0?ce[t]:16,Me="";B&&B!=="default"&&B!=="none"?Me=`
				border-style: ${B};
				border-color: ${y||"#e0e0e0"};
				${Io(L,"border-width",t)}
				${Io(_,"border-radius",t)}
			`:Me="border: none;";let c="box-shadow: none;";O&&O.enable&&(c=`box-shadow: ${O.position==="inset"?"inset ":""}${O.horizontal}px ${O.vertical}px ${O.blur}px ${O.spread}px ${O.color};`);let me=`${Io(A,"padding",t)}`,oo="";k&&(k.fontFamily&&(oo+=`font-family: ${k.fontFamily};`),k.fontSize&&k.fontSize[t]&&(oo+=`font-size: ${k.fontSize[t]}${k.fontSizeUnit||"px"};`),k.fontWeight&&(oo+=`font-weight: ${k.fontWeight};`),k.fontStyle&&(oo+=`font-style: ${k.fontStyle};`),k.textTransform&&(oo+=`text-transform: ${k.textTransform};`),k.textDecoration&&(oo+=`text-decoration: ${k.textDecoration};`),k.lineHeight&&k.lineHeight[t]&&(oo+=`line-height: ${k.lineHeight[t]}${k.lineHeightUnit||"em"};`),k.letterSpacing&&k.letterSpacing[t]&&(oo+=`letter-spacing: ${k.letterSpacing[t]}${k.letterSpacingUnit||"px"};`));let f="";b&&(b.fontFamily&&(f+=`font-family: ${b.fontFamily};`),b.fontSize&&b.fontSize[t]&&(f+=`font-size: ${b.fontSize[t]}${b.fontSizeUnit||"px"};`),b.fontWeight&&(f+=`font-weight: ${b.fontWeight};`),b.fontStyle&&(f+=`font-style: ${b.fontStyle};`),b.textTransform&&(f+=`text-transform: ${b.textTransform};`),b.textDecoration&&(f+=`text-decoration: ${b.textDecoration};`),b.lineHeight&&b.lineHeight[t]&&(f+=`line-height: ${b.lineHeight[t]}${b.lineHeightUnit||"em"};`),b.letterSpacing&&b.letterSpacing[t]&&(f+=`letter-spacing: ${b.letterSpacing[t]}${b.letterSpacingUnit||"px"};`));let De="";Y&&Y.enable&&(De=`box-shadow: ${Y.position==="inset"?"inset ":""}${Y.horizontal}px ${Y.vertical}px ${Y.blur}px ${Y.spread}px ${Y.color};`);let io=`
			/* FAQ Block - ${o} */
			.${o} {
				${Io(V,"margin",t)}
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
				${M==="left"?"flex-direction: row-reverse; justify-content: flex-end;":"justify-content: space-between;"}
			}
			
			.${o} .digiblocks-faq-question-text {
				color: ${$};
				${oo}
				margin: 0;
				flex: 1;
				${X?"display: flex; align-items: center; gap: .5rem;":""}
				transition: color 0.3s ease;
			}
			
			.${o} .digiblocks-faq-question-prefix {
				${se?`color: ${se};`:""}
				font-weight: bold;
			}
			
			.${o} .digiblocks-faq-answer-prefix {
				${ve?`color: ${ve};`:""}
				font-weight: bold;
			}
			
			.${o} .digiblocks-faq-answer-content {
				display: flex;
				${ne?"display: flex; gap: .5rem;":""}
				color: ${S};
				${f}
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
				font-size: ${Z[t]}px;
			}
			
			.${o} .digiblocks-faq-question-icon span {
				display: flex;
				align-items: center;
				justify-content: center;
			}
			
			.${o} .digiblocks-faq-question-icon svg {
				width: ${Z[t]}px;
				height: ${Z[t]}px;
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
				${x?`color: ${x};`:""}
			}
			
			.${o} .digiblocks-faq-question:hover .digiblocks-faq-question-icon {
				${Ve?`color: ${Ve};`:""}
			}
			
			/* Handle active state */
			.${o} .digiblocks-faq-item.is-active .digiblocks-faq-question-text {
				color: ${H};
			}
			
			.${o} .digiblocks-faq-item.is-active .digiblocks-faq-question-icon {
				color: ${Ce};
			}

			/* Visibility Controls */
			${s.desktop?`
				@media (min-width: 992px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${s.tablet?`
				@media (min-width: 768px) and (max-width: 991px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${s.mobile?`
				@media (max-width: 767px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}
		`,so="";switch(J){case"boxed":so=`
					.${o} .digiblocks-faq-item {
						${Me}
						${c}
						background-color: ${T||"#ffffff"};
						transition: all 0.3s ease;
						margin-bottom: ${m}px;
					}
					
					.${o} .digiblocks-faq-item:hover {
						${De}
						${u?`background-color: ${u};`:""}
						${v?`border-color: ${v};`:""}
					}
					
					.${o} .digiblocks-faq-question {
						${me}
					}
					
					.${o} .digiblocks-faq-answer {
						${me}
						border-top: 1px solid ${y||"#e0e0e0"};
						${D?`background-color: ${D};`:""}
					}
					
					.${o} .digiblocks-faq-item.is-active {
						${r?`background-color: ${r};`:""}
					}
				`;break;case"classic":so=`
					.${o} .digiblocks-faq-item {
						border: none;
						border-bottom: 1px solid ${y||"#e0e0e0"};
						background-color: transparent;
						margin-bottom: ${m}px;
						transition: all 0.3s ease;
					}
					
					.${o} .digiblocks-faq-question {
						${me}
					}
					
					.${o} .digiblocks-faq-answer {
						${Io(A,"padding",t)}
						padding-top: 0;
					}
				`;break;case"separated":so=`
					.${o} .digiblocks-faq-item {
						margin-bottom: ${m}px;
						transition: all 0.3s ease;
					}
					
					.${o} .digiblocks-faq-question {
						${me}
						${Me}
						${c}
						background-color: ${T||"#ffffff"};
					}
					
					.${o} .digiblocks-faq-question:hover {
						${x?`color: ${x};`:""}
						${u?`background-color: ${u};`:""}
						${v?`border-color: ${v};`:""}
						${De}
					}
					
					.${o} .digiblocks-faq-item.is-active .digiblocks-faq-question {
						${H?`color: ${H};`:""}
						${r?`background-color: ${r};`:""}
					}
					
					.${o} .digiblocks-faq-answer {
						${me}
						${D?`background-color: ${D};`:""}
						${Me}
						border-top: none;
						border-top-left-radius: 0;
						border-top-right-radius: 0;
						border-bottom-left-radius: ${_&&_[t]?_[t].left+_[t].unit:"8px"};
						border-bottom-right-radius: ${_&&_[t]?_[t].right+_[t].unit:"8px"};
						margin-top: -1px;
					}
				`;break;case"minimalist":so=`
					.${o} .digiblocks-faq-item {
						margin-bottom: ${m}px;
						transition: all 0.3s ease;
						background-color: transparent;
					}
					
					.${o} .digiblocks-faq-question {
						${me}
						border-bottom: 2px solid ${y||"#e0e0e0"};
					}
					
					.${o} .digiblocks-faq-question:hover {
						${x?`color: ${x};`:""}
						border-color: ${x||v||"#cccccc"};
					}
					
					.${o} .digiblocks-faq-item.is-active .digiblocks-faq-question {
						${H?`color: ${H};`:""}
						border-color: ${H||"#1e73be"};
					}
					
					.${o} .digiblocks-faq-answer {
						${Io(A,"padding",t)}
					}
				`;break;case"bordered":so=`
					.${o} .digiblocks-faq-item {
						${Me}
						background-color: transparent;
						margin-bottom: ${m}px;
						transition: all 0.3s ease;
						overflow: hidden;
					}
					
					.${o} .digiblocks-faq-item:hover {
						${v?`border-color: ${v};`:""}
					}
					
					.${o} .digiblocks-faq-question {
						${me}
						background-color: ${T||"#f8f9fa"};
					}
					
					.${o} .digiblocks-faq-question:hover {
						${x?`color: ${x};`:""}
						${u?`background-color: ${u};`:""}
					}
					
					.${o} .digiblocks-faq-item.is-active .digiblocks-faq-question {
						${H?`color: ${H};`:""}
						${r?`background-color: ${r};`:""}
					}
					
					.${o} .digiblocks-faq-answer {
						${me}
						${D?`background-color: ${D};`:""}
					}
					
					.${o} .digiblocks-faq-item.is-active {
						border-color: ${H||y||"#1e73be"};
					}
				`;break;default:so=`
					.${o} .digiblocks-faq-item {
						${Me}
						${c}
						background-color: ${T||"#ffffff"};
						transition: all 0.3s ease;
						margin-bottom: ${m}px;
					}
					
					.${o} .digiblocks-faq-question {
						${me}
					}
					
					.${o} .digiblocks-faq-answer {
						${me}
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
		`,E=`
			@media (max-width: 991px) {
				.${o} {
					${V.tablet?`${Io(V,"margin","tablet")}`:""}
				}
				
				.${o} .digiblocks-faq-item {
					margin-bottom: ${ce.tablet!==void 0?ce.tablet:m}px;
				}
				
				.${o} .digiblocks-faq-question,
				.${o} .digiblocks-faq-answer {
					${A.tablet?`${Io(A,"padding","tablet")}`:""}
				}
				
				${J==="minimalist"?`
				.${o} .digiblocks-faq-answer {
					${Io(A,"padding","tablet")}
					padding-left: 0;
					padding-right: 0;
				}
				`:""}
				
				${Z&&Z.tablet?`
				.${o} .digiblocks-faq-question-icon {
					font-size: ${Z.tablet}px;
				}
				
				.${o} .digiblocks-faq-question-icon svg {
					width: ${Z.tablet}px;
					height: ${Z.tablet}px;
				}
				`:""}
				
				${k&&k.fontSize&&k.fontSize.tablet?`
				.${o} .digiblocks-faq-question-text {
					font-size: ${k.fontSize.tablet}${k.fontSizeUnit||"px"};
					${k.lineHeight&&k.lineHeight.tablet?`line-height: ${k.lineHeight.tablet}${k.lineHeightUnit||"em"};`:""}
				}
				`:""}
				
				${b&&b.fontSize&&b.fontSize.tablet?`
				.${o} .digiblocks-faq-answer-content {
					font-size: ${b.fontSize.tablet}${b.fontSizeUnit||"px"};
					${b.lineHeight&&b.lineHeight.tablet?`line-height: ${b.lineHeight.tablet}${b.lineHeightUnit||"em"};`:""}
				}
				`:""}
			}
		`,Oe=`
			@media (max-width: 767px) {
				.${o} {
					${V.mobile?`${Io(V,"margin","mobile")}`:""}
				}
				
				.${o} .digiblocks-faq-item {
					margin-bottom: ${ce.mobile!==void 0?ce.mobile:m}px;
				}
				
				.${o} .digiblocks-faq-question,
				.${o} .digiblocks-faq-answer {
					${A.mobile?`${Io(A,"padding","mobile")}`:""}
				}
				
				${J==="minimalist"?`
				.${o} .digiblocks-faq-answer {
					${Io(A,"padding","mobile")}
					padding-left: 0;
					padding-right: 0;
				}
				`:""}
				
				${Z&&Z.mobile?`
				.${o} .digiblocks-faq-question-icon {
					font-size: ${Z.mobile}px;
				}
				
				.${o} .digiblocks-faq-question-icon svg {
					width: ${Z.mobile}px;
					height: ${Z.mobile}px;
				}
				`:""}
				
				${k&&k.fontSize&&k.fontSize.mobile?`
				.${o} .digiblocks-faq-question-text {
					font-size: ${k.fontSize.mobile}${k.fontSizeUnit||"px"};
					${k.lineHeight&&k.lineHeight.mobile?`line-height: ${k.lineHeight.mobile}${k.lineHeightUnit||"em"};`:""}
				}
				`:""}
				
				${b&&b.fontSize&&b.fontSize.mobile?`
				.${o} .digiblocks-faq-answer-content {
					font-size: ${b.fontSize.mobile}${b.fontSizeUnit||"px"};
					${b.lineHeight&&b.lineHeight.mobile?`line-height: ${b.lineHeight.mobile}${b.lineHeightUnit||"em"};`:""}
				}
				`:""}
			}
		`,bo="";return I&&I!=="none"&&pl[I]&&(bo=pl[I].keyframes),`
			${io}
			${so}
			${i}
			${E}
			${Oe}
			${bo}
		`},a=t=>t==="normal"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Mt,{title:$e("Question Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:$,onChange:m=>e({titleColor:m}),label:$e("Text Color","digiblocks")},{value:T,onChange:m=>e({backgroundColor:m}),label:$e("Background Color","digiblocks")},{value:se,onChange:m=>e({questionPrefixColor:m}),label:$e("Prefix Color","digiblocks"),disableCustomColors:!X}]})):t==="hover"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Mt,{title:$e("Question Hover Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:x,onChange:m=>e({titleHoverColor:m}),label:$e("Text Color","digiblocks")},{value:u,onChange:m=>e({backgroundHoverColor:m}),label:$e("Background Color","digiblocks")}]})):t==="active"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Mt,{title:$e("Question Active Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:H,onChange:m=>e({titleActiveColor:m}),label:$e("Text Color","digiblocks")},{value:r,onChange:m=>e({backgroundActiveColor:m}),label:$e("Background Color","digiblocks")}]})):null,ge=t=>t==="normal"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Mt,{title:$e("Icon Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:le,onChange:m=>e({iconColor:m}),label:$e("Icon Color","digiblocks")}]})):t==="hover"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Mt,{title:$e("Icon Hover Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:Ve,onChange:m=>e({iconHoverColor:m}),label:$e("Icon Color","digiblocks")}]})):t==="active"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Mt,{title:$e("Icon Active Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:Ce,onChange:m=>e({iconActiveColor:m}),label:$e("Icon Color","digiblocks")}]})):null,Ue=()=>wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Mt,{title:$e("Answer Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:S,onChange:t=>e({contentColor:t}),label:$e("Text Color","digiblocks")},{value:D,onChange:t=>e({contentBackgroundColor:t}),label:$e("Background Color","digiblocks")},{value:ve,onChange:t=>e({answerPrefixColor:t}),label:$e("Prefix Color","digiblocks"),disableCustomColors:!ne}]})),Ke=()=>{switch(N){case"options":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Lo,{tab:"options",name:"content-settings",title:$e("Items","digiblocks"),initialOpen:!0},wp.element.createElement(va,{label:$e("Allow Multiple Open","digiblocks"),checked:ee,onChange:()=>e({allowMultipleOpen:!ee}),help:$e("When enabled, multiple FAQ items can be open at the same time.","digiblocks"),__nextHasNoMarginBottom:!0}),wp.element.createElement(Kt,{label:$e("Layout","digiblocks"),value:J,options:Qe,onChange:t=>e({layout:t}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{htmlFor:"question-prefix",className:"components-base-control__label"},$e("Question Prefix","digiblocks")),wp.element.createElement(Zn,{id:"question-prefix",value:X||"",onChange:t=>e({questionPrefix:t}),placeholder:$e("Example: Q:","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement("p",{className:"components-base-control__help"},$e("Add a prefix to questions (e.g., 'Q:').","digiblocks")))),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{htmlFor:"answer-prefix",className:"components-base-control__label"},$e("Answer Prefix","digiblocks")),wp.element.createElement(Zn,{id:"answer-prefix",value:ne||"",onChange:t=>e({answerPrefix:t}),placeholder:$e("Example: A:","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement("p",{className:"components-base-control__help"},$e("Add a prefix to answers (e.g., 'A:').","digiblocks")))),wp.element.createElement(wi,{label:$e("Items Spacing","digiblocks")},wp.element.createElement(Lc,{value:ce[w],onChange:t=>e({itemsSpacing:{...ce,[w]:t}}),min:0,max:100,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}))),wp.element.createElement(Lo,{tab:"options",name:"icon-settings",title:$e("Icon Settings","digiblocks"),initialOpen:!1},wp.element.createElement(Kt,{label:$e("Icon Type","digiblocks"),value:F,options:Ie,onChange:t=>e({iconType:t}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Kt,{label:$e("Icon Position","digiblocks"),value:M,options:j,onChange:t=>e({iconPosition:t}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(wi,{label:$e("Icon Size","digiblocks")},wp.element.createElement(Lc,{value:Z[w],onChange:t=>e({iconSize:{...Z,[w]:t}}),min:8,max:100,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}))),wp.element.createElement(Lo,{tab:"options",name:"schema-settings",title:$e("SEO Schema","digiblocks"),initialOpen:!1},wp.element.createElement(Kt,{label:$e("Schema Type","digiblocks"),value:Te,options:G,onChange:t=>e({schemaType:t}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Zn,{label:$e("Schema Name","digiblocks"),value:be,onChange:t=>e({schemaName:t}),placeholder:$e("Example: Product FAQ","digiblocks"),help:$e("Name for your FAQ schema (e.g., Company FAQ, Product FAQ).","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(Lo,{tab:"options",name:"heading-settings",title:$e("HTML Settings","digiblocks"),initialOpen:!1},wp.element.createElement(Kt,{label:$e("Question Tag","digiblocks"),value:Q,options:Se,onChange:t=>e({titleTag:t}),help:$e("HTML tag for questions. Default is h3.","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})));case"style":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Lo,{tab:"style",name:"question-styles",title:$e("Question Styles","digiblocks"),initialOpen:!0},wp.element.createElement(Oc,{className:"digiblocks-control-tabs",activeClass:"active-tab",tabs:R},t=>a(t.name)),wp.element.createElement(jc,{label:$e("Question Typography","digiblocks"),value:k,onChange:t=>e({titleTypography:t}),defaults:{fontSize:{desktop:18,tablet:16,mobile:15},fontSizeUnit:"px",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em"}})),wp.element.createElement(Lo,{tab:"style",name:"answer-styles",title:$e("Answer Styles","digiblocks"),initialOpen:!1},Ue(),wp.element.createElement(jc,{label:$e("Answer Typography","digiblocks"),value:b,onChange:t=>e({contentTypography:t}),defaults:{fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em"}})),wp.element.createElement(Lo,{tab:"style",name:"icon-styles",title:$e("Icon Styles","digiblocks"),initialOpen:!1},wp.element.createElement(Oc,{className:"digiblocks-control-tabs",activeClass:"active-tab",tabs:R},t=>ge(t.name))),wp.element.createElement(Lo,{tab:"style",name:"border-box",title:$e("Border & Shadow","digiblocks"),initialOpen:!1},J!=="classic"&&J!=="minimalist"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Kt,{label:$e("Border Style","digiblocks"),value:B||"default",options:je,onChange:t=>{t!=="default"&&t!=="none"&&(B==="default"||B==="none"||!B)&&((!L||Object.keys(L).length===0)&&e({borderWidth:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:1,right:1,bottom:1,left:1,unit:"px"},mobile:{top:1,right:1,bottom:1,left:1,unit:"px"}}}),(!_||Object.keys(_).length===0)&&e({borderRadius:{desktop:{top:8,right:8,bottom:8,left:8,unit:"px"},tablet:{top:8,right:8,bottom:8,left:8,unit:"px"},mobile:{top:8,right:8,bottom:8,left:8,unit:"px"}}})),e({borderStyle:t})},__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),B&&B!=="default"&&B!=="none"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Mt,{title:$e("Border Colors","digiblocks"),enableAlpha:!0,colorSettings:[{value:y,onChange:t=>e({borderColor:t}),label:$e("Border Color","digiblocks")},{value:v,onChange:t=>e({borderHoverColor:t}),label:$e("Border Hover Color","digiblocks")}]}),wp.element.createElement(wi,{label:$e("Border Width","digiblocks")},wp.element.createElement(ya,{values:L&&L[w]?L[w]:{top:1,right:1,bottom:1,left:1,unit:"px"},onChange:t=>e({borderWidth:{...L,[w]:t}})})),wp.element.createElement(wi,{label:$e("Border Radius","digiblocks")},wp.element.createElement(ya,{values:_&&_[w]?_[w]:{top:8,right:8,bottom:8,left:8,unit:"px"},onChange:t=>e({borderRadius:{..._,[w]:t}}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]})))),wp.element.createElement(Xb,{normalValue:O,hoverValue:Y,onNormalChange:t=>e({boxShadow:t}),onHoverChange:t=>e({boxShadowHover:t})})),wp.element.createElement(Lo,{tab:"style",name:"spacing",title:$e("Spacing","digiblocks"),initialOpen:!1},wp.element.createElement(wi,{label:$e("Padding","digiblocks")},wp.element.createElement(ya,{values:A[w],onChange:t=>e({padding:{...A,[w]:t}})})),wp.element.createElement(wi,{label:$e("Margin","digiblocks")},wp.element.createElement(ya,{values:V[w],onChange:t=>e({margin:{...V,[w]:t}})}))));case"advanced":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Lo,{tab:"advanced",name:"animation",title:$e("Animation","digiblocks"),initialOpen:!0},wp.element.createElement(Kt,{label:$e("Animation Effect","digiblocks"),value:I,options:Fe,onChange:t=>e({animation:t}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),I&&I!=="none"&&wp.element.createElement("div",{style:{marginTop:"10px"}},wp.element.createElement(Ci,{variant:"secondary",isSecondary:!0,onClick:qe,style:{width:"100%"}},$e("Preview Animation","digiblocks")))),wp.element.createElement(Lo,{tab:"advanced",name:"visibility",title:$e("Visibility","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control__help",style:{padding:"12px",backgroundColor:"#f0f6fc",border:"1px solid #c3ddfd",borderRadius:"4px",marginBottom:"16px"}},wp.element.createElement("strong",null,$e("Editor Note:","digiblocks")),wp.element.createElement("br",null),$e("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.","digiblocks")),wp.element.createElement(va,{label:$e("Hide on Desktop","digiblocks"),checked:s.desktop,onChange:t=>e({visibility:{...s,desktop:t}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(va,{label:$e("Hide on Tablet","digiblocks"),checked:s.tablet,onChange:t=>e({visibility:{...s,tablet:t}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(va,{label:$e("Hide on Mobile","digiblocks"),checked:s.mobile,onChange:t=>e({visibility:{...s,mobile:t}}),__nextHasNoMarginBottom:!0})),wp.element.createElement(Lo,{tab:"advanced",name:"additional",title:$e("Additional","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control html-anchor-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"html-anchor"},$e("HTML anchor","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"html-anchor",value:P||"",onChange:t=>e({anchor:t.target.value}),"aria-describedby":"html-anchor-help",autoCapitalize:"none",autoComplete:"off"})),wp.element.createElement("p",{id:"html-anchor-help",className:"components-base-control__help"},$e(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`,"digiblocks")," ",wp.element.createElement("a",{className:"components-external-link",href:"https://wordpress.org/documentation/article/page-jumps/",target:"_blank",rel:"external noreferrer noopener"},wp.element.createElement("span",{className:"components-external-link__contents"},$e("Learn more about anchors","digiblocks")),wp.element.createElement("span",{className:"components-external-link__icon","aria-label":"(opens in a new tab)"},"\u2197")))),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"additional-css-classes"},$e("Additional CSS class(es)","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"additional-css-classes",value:oe||"",onChange:t=>e({customClasses:t.target.value}),"aria-describedby":"additional-css-classes-help",autoComplete:"off"})),wp.element.createElement("p",{id:"additional-css-classes-help",className:"components-base-control__help"},$e("Separate multiple classes with spaces.","digiblocks")))))}},ao=()=>!l||l.length===0?wp.element.createElement("div",{className:"digiblocks-no-items"},wp.element.createElement("p",null,$e("No FAQ items found. Please add some items.","digiblocks"))):l.map((t,m)=>{let Me=m===l.length-1;return wp.element.createElement("div",{key:t.id,className:`digiblocks-faq-item ${t.isOpen?"is-active":""}`,style:Me?{marginBottom:0}:{}},wp.element.createElement("div",{className:"digiblocks-faq-question",onClick:()=>d(m)},wp.element.createElement("div",{className:"digiblocks-faq-question-text"},X&&wp.element.createElement("span",{className:"digiblocks-faq-question-prefix"},X),wp.element.createElement(Ic,{tagName:"span",value:t.title,onChange:c=>ie(c,m),placeholder:$e("Enter question...","digiblocks"),allowedFormats:["core/bold","core/italic"],className:"digiblocks-faq-question-text-content"})),wp.element.createElement("span",{className:"digiblocks-faq-question-icon"},h(t.isOpen))),wp.element.createElement("div",{className:"digiblocks-faq-answer"},wp.element.createElement("div",{className:"digiblocks-faq-answer-content"},ne&&wp.element.createElement("span",{className:"digiblocks-faq-answer-prefix"},ne),wp.element.createElement(Ic,{tagName:"div",value:t.content,onChange:c=>C(c,m),placeholder:$e("Enter answer...","digiblocks"),allowedFormats:["core/bold","core/italic","core/link","core/image","core/list"],className:"digiblocks-faq-answer-text"}))),wp.element.createElement("div",{className:"digiblocks-faq-item-controls"},wp.element.createElement(xa,{text:$e("Move Up","digiblocks")},wp.element.createElement(Ci,{className:"digiblocks-faq-item-move-up",onClick:()=>g(m),icon:"arrow-up-alt2",disabled:m===0,isSmall:!0})),wp.element.createElement(xa,{text:$e("Move Down","digiblocks")},wp.element.createElement(Ci,{className:"digiblocks-faq-item-move-down",onClick:()=>q(m),icon:"arrow-down-alt2",disabled:m===l.length-1,isSmall:!0})),wp.element.createElement(xa,{text:$e("Duplicate","digiblocks")},wp.element.createElement(Ci,{className:"digiblocks-faq-item-duplicate",onClick:()=>n(m),icon:"admin-page",isSmall:!0})),wp.element.createElement(xa,{text:$e("Remove","digiblocks")},wp.element.createElement(Ci,{className:"digiblocks-faq-item-remove",onClick:()=>re(m),icon:"trash",isSmall:!0}))))}),co=Jb({className:`digiblocks-faq-block ${o} ${J||"boxed"} ${oe||""}`,id:P||null});return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Yb,null,wp.element.createElement(Ab,{tabs:pe,activeTab:N,onSelect:xe},Ke())),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:Be()}}),wp.element.createElement("div",{...co},wp.element.createElement("div",{className:"digiblocks-faq-items"},ao()),wp.element.createElement(Ci,{variant:"primary",icon:"plus",onClick:p,style:{width:"100%",marginTop:"20px",justifyContent:"center"}},$e("Add FAQ Item","digiblocks"))))},Vc=eu;var{useBlockProps:ou,RichText:Fc}=window.wp.blockEditor,tu=({attributes:te})=>{let{id:e,anchor:K,customClasses:o,items:P,titleTag:s,layout:oe,questionPrefix:l,answerPrefix:$,animation:x,allowMultipleOpen:H,iconType:T}=te,u=["digiblocks-faq-block",e,oe||"boxed",o||"",x!=="none"?`animate-${x}`:""].filter(Boolean).join(" "),r=(y,v=T)=>{switch(v){case"plusMinus":return y?wp.element.createElement("span",{className:"digiblocks-faq-icon-minus"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:"1em",height:"1em"},wp.element.createElement("path",{fillRule:"evenodd",d:"M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"}))):wp.element.createElement("span",{className:"digiblocks-faq-icon-plus"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:"1em",height:"1em"},wp.element.createElement("path",{fillRule:"evenodd",d:"M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"})));case"arrow":return wp.element.createElement("span",{className:`digiblocks-faq-icon-arrow ${y?"is-open":""}`},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:"1em",height:"1em"},wp.element.createElement("path",{fillRule:"evenodd",d:"M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"})));case"chevron":return wp.element.createElement("span",{className:`digiblocks-faq-icon-chevron ${y?"is-open":""}`},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:"1em",height:"1em"},wp.element.createElement("path",{fillRule:"evenodd",d:"M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"})));case"triangle":return wp.element.createElement("span",{className:`digiblocks-faq-icon-triangle ${y?"is-open":""}`},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:"1em",height:"1em"},wp.element.createElement("path",{d:"m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"})));case"circlePlusMinus":return y?wp.element.createElement("span",{className:"digiblocks-faq-icon-circle-minus"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),wp.element.createElement("path",{d:"M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"}))):wp.element.createElement("span",{className:"digiblocks-faq-icon-circle-plus"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),wp.element.createElement("path",{d:"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"})));default:return y?wp.element.createElement("span",{className:"digiblocks-faq-icon-minus"},"\u2014"):wp.element.createElement("span",{className:"digiblocks-faq-icon-plus"},"+")}},S=ou.save({className:u,id:K||null,"data-allow-multiple":H?"true":"false"}),D=()=>!P||P.length===0?null:P.map((y,v)=>wp.element.createElement("div",{key:y.id,className:`digiblocks-faq-item ${y.isOpen?"is-active":""}`,"data-item-id":y.id},wp.element.createElement("div",{className:"digiblocks-faq-question"},wp.element.createElement("div",{className:"digiblocks-faq-question-text"},l&&wp.element.createElement("span",{className:"digiblocks-faq-question-prefix"},l),wp.element.createElement(Fc.Content,{tagName:s||"h3",value:y.title,className:"digiblocks-faq-question-text-content"})),wp.element.createElement("span",{className:"digiblocks-faq-question-icon"},r(y.isOpen))),wp.element.createElement("div",{className:"digiblocks-faq-answer"},wp.element.createElement("div",{className:"digiblocks-faq-answer-content"},$&&wp.element.createElement("span",{className:"digiblocks-faq-answer-prefix"},$),wp.element.createElement(Fc.Content,{tagName:"div",className:"digiblocks-faq-answer-text",value:y.content})))));return wp.element.createElement("div",{...S},wp.element.createElement("div",{className:"digiblocks-faq-items"},D()))},Ec=tu;var{__:Oo}=window.wp.i18n,{registerBlockType:iu}=window.wp.blocks,{getBlockActiveStatus:lu}=window.wp.digiBlocks;iu("digiblocks/faq",{apiVersion:2,title:digiBlocksData.blocks.faq.title,category:"digiblocks",icon:{src:()=>{let{viewbox:te,path:e}=digiBlocksData.blocks.faq.icon;return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${te}`,className:"digiblocks-editor-icons"},wp.element.createElement("path",{d:e}))}},description:digiBlocksData.blocks.faq.description,keywords:[Oo("faq","digiblocks"),Oo("questions","digiblocks"),Oo("answers","digiblocks"),Oo("schema","digiblocks")],supports:{inserter:!!lu("faq"),html:!1,className:!1,customClassName:!1,anchor:!1},attributes:{id:{type:"string",default:""},anchor:{type:"string",default:""},visibility:{type:"object",default:{desktop:!1,tablet:!1,mobile:!1}},customClasses:{type:"string",default:""},items:{type:"array",default:[{id:"faq-item-1",title:Oo("What is a frequently asked question?","digiblocks"),content:Oo("A frequently asked question (FAQ) is a question that is commonly asked by users or customers. FAQs are typically displayed in a list with their answers to help visitors find information quickly.","digiblocks"),isOpen:!0},{id:"faq-item-2",title:Oo("How do I add more questions and answers?","digiblocks"),content:Oo('Simply click the "Add FAQ Item" button below to add more questions and answers to your FAQ section. You can also reorder, edit, or remove existing items using the control buttons.',"digiblocks"),isOpen:!1}]},titleColor:{type:"string",default:"#333333"},titleHoverColor:{type:"string",default:""},titleActiveColor:{type:"string",default:"#1e73be"},backgroundColor:{type:"string",default:"#ffffff"},backgroundHoverColor:{type:"string",default:""},backgroundActiveColor:{type:"string",default:"#f7f7f7"},contentColor:{type:"string",default:"#666666"},contentBackgroundColor:{type:"string",default:""},borderColor:{type:"string",default:"#e0e0e0"},borderHoverColor:{type:"string",default:""},borderRadius:{type:"object",default:{desktop:{top:8,right:8,bottom:8,left:8,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderWidth:{type:"object",default:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderStyle:{type:"string",default:"solid"},boxShadow:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},boxShadowHover:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},padding:{type:"object",default:{desktop:{top:20,right:20,bottom:20,left:20,unit:"px"},tablet:{top:15,right:15,bottom:15,left:15,unit:"px"},mobile:{top:10,right:10,bottom:10,left:10,unit:"px"}}},margin:{type:"object",default:{desktop:{top:0,right:0,bottom:30,left:0,unit:"px"},tablet:{top:0,right:0,bottom:25,left:0,unit:"px"},mobile:{top:0,right:0,bottom:20,left:0,unit:"px"}}},titleTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:18,tablet:16,mobile:15},fontSizeUnit:"px",fontWeight:"600",fontStyle:"normal",textTransform:"none",textDecoration:"none",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}},contentTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",fontWeight:"",fontStyle:"normal",textTransform:"",textDecoration:"",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}},iconPosition:{type:"string",default:"right"},iconColor:{type:"string",default:"#333333"},iconHoverColor:{type:"string",default:""},iconActiveColor:{type:"string",default:"#1e73be"},iconSize:{type:"object",default:{desktop:16,tablet:14,mobile:12}},animation:{type:"string",default:"none"},allowMultipleOpen:{type:"boolean",default:!1},iconType:{type:"string",default:"plusMinus"},titleTag:{type:"string",default:"h3"},questionPrefix:{type:"string",default:""},questionPrefixColor:{type:"string",default:""},answerPrefix:{type:"string",default:""},answerPrefixColor:{type:"string",default:""},layout:{type:"string",default:"boxed"},itemsSpacing:{type:"object",default:{desktop:16,tablet:12,mobile:8}},schemaType:{type:"string",default:"FAQPage"},schemaName:{type:"string",default:""}},example:{attributes:{items:[{id:"faq-item-1",title:Oo("What is a frequently asked question?","digiblocks"),content:Oo("A frequently asked question (FAQ) is a question that is commonly asked by users or customers.","digiblocks"),isOpen:!0},{id:"faq-item-2",title:Oo("How do I add more questions?","digiblocks"),content:Oo('Click the "Add FAQ Item" button to add more questions and answers.',"digiblocks"),isOpen:!1}],layout:"boxed",titleColor:"#333333",titleActiveColor:"#1e73be",backgroundColor:"#ffffff"}},edit:Vc,save:Ec});var{__:de}=window.wp.i18n,{useBlockProps:au,InspectorControls:nu,PanelColorSettings:Ca,MediaUpload:su,MediaUploadCheck:ru}=window.wp.blockEditor,{SelectControl:wa,RangeControl:Wc,ToggleControl:Si,TextControl:at,Button:wo,TextareaControl:bl,PanelBody:cu,Tooltip:ul,Dashicon:du,__experimentalToggleGroupControl:qc,__experimentalToggleGroupControlOption:nt}=window.wp.components,{useState:es,useEffect:os,useRef:gu}=window.wp.element,{useDispatch:pu,useSelect:bu}=window.wp.data,{useBlockId:uu,getDimensionCSS:Xt,animations:At,animationPreview:Gc}=digi.utils,{tabIcons:Sa}=digi.icons,{ResponsiveControl:ht,DimensionControl:ei,TypographyControl:ts,BoxShadowControl:mu,CustomTabPanel:hu,TabPanelBody:No}=digi.components,fu=({attributes:te,setAttributes:e,clientId:K})=>{let{id:o,anchor:P,visibility:s,customClasses:oe,formName:l,recipientEmail:$,successMessage:x,errorMessage:H,enableRecaptcha:T,emailSubject:u,useSiteLogo:r,customLogo:S,businessName:D,emailHeader:y,emailFooter:v,businessAddress:_,submitButtonText:L,buttonAlign:B,backgroundColor:O,textColor:Y,labelColor:A,buttonBackgroundColor:V,buttonTextColor:k,buttonBackgroundHoverColor:b,buttonTextHoverColor:M,borderStyle:le,borderColor:Ve,borderWidth:Ce,borderRadius:Z,padding:I,margin:ee,typography:F,textTypography:Q,buttonTypography:X,boxShadow:se,boxShadowHover:ne,inputBorderStyle:ve,inputBorderColor:J,inputBorderWidth:ce,inputBorderRadius:Te,inputPadding:be,inputBackgroundColor:N,inputTextColor:xe,inputFocusBorderColor:w,animation:ke,fieldGap:U,labelMargin:fe,fields:ze}=te;uu(o,K,e);let[qe,je]=es(window.digi.responsiveState.activeDevice),[Fe,Ie]=es(()=>{if(window.digi.uiState){let c=window.digi.uiState.getActiveTab(K);if(c)return c}return"options"}),[j,Se]=es(-1),{selectBlock:Qe}=pu("core/block-editor"),G=bu(c=>c("core/block-editor").getSelectedBlockClientId());os(()=>{G===K&&j===-1&&ze.length>0?Se(0):G!==K&&Se(-1)},[G,K,ze.length]),os(()=>window.digi.responsiveState.subscribe(me=>{je(me)}),[]);let pe=gu(null);os(()=>{if(ke&&ke!=="none"){let c=setTimeout(()=>{Gc(o,ke,At,pe)},100);return()=>clearTimeout(c)}},[ke]);let R=()=>{Gc(o,ke,At,pe)},p=[{label:de("None","digiblocks"),value:"none"},...Object.keys(At).map(c=>({label:c.replace(/-/g," ").replace(/\b\w/g,me=>me.toUpperCase()),value:c}))],re=[{label:de("Text","digiblocks"),value:"text"},{label:de("Email","digiblocks"),value:"email"},{label:de("Number","digiblocks"),value:"number"},{label:de("Phone","digiblocks"),value:"tel"},{label:de("URL","digiblocks"),value:"url"},{label:de("Date","digiblocks"),value:"date"},{label:de("Textarea","digiblocks"),value:"textarea"},{label:de("Select","digiblocks"),value:"select"},{label:de("Checkbox","digiblocks"),value:"checkbox"},{label:de("Radio","digiblocks"),value:"radio"},{label:de("Hidden","digiblocks"),value:"hidden"}],n=[{label:de("None","digiblocks"),value:"none"},{label:de("Solid","digiblocks"),value:"solid"},{label:de("Dotted","digiblocks"),value:"dotted"},{label:de("Dashed","digiblocks"),value:"dashed"},{label:de("Double","digiblocks"),value:"double"},{label:de("Groove","digiblocks"),value:"groove"},{label:de("Inset","digiblocks"),value:"inset"},{label:de("Outset","digiblocks"),value:"outset"},{label:de("Ridge","digiblocks"),value:"ridge"}],g=[{name:"options",title:de("Options","digiblocks"),icon:Sa.optionsIcon},{name:"fields",title:de("Fields","digiblocks"),icon:Sa.fieldIcon},{name:"style",title:de("Style","digiblocks"),icon:Sa.styleIcon},{name:"advanced",title:de("Advanced","digiblocks"),icon:Sa.advancedIcon}],q=(c="text")=>{let oo={id:`field-${Date.now()}`,type:c,label:`New ${c.charAt(0).toUpperCase()+c.slice(1)} Field`,placeholder:"Enter value",required:!1,width:100,options:c==="select"||c==="radio"?[{label:"Option 1",value:"option1"},{label:"Option 2",value:"option2"}]:[]},f=[...ze,oo];e({fields:f}),Se(f.length-1)},d=c=>{let me=[...ze];me.splice(c,1),e({fields:me}),j===c?Se(-1):j>c&&Se(j-1)},ie=c=>{let oo={...ze[c],id:`field-${Date.now()}`},f=[...ze];f.splice(c+1,0,oo),e({fields:f}),Se(c+1)},C=(c,me,oo)=>{let f=[...ze];f[c]={...f[c],[me]:oo},e({fields:f})},h=(c,me,oo,f)=>{let De=[...ze];De[c].options||(De[c].options=[]),De[c].options[me]={...De[c].options[me],[oo]:f},e({fields:De})},Be=c=>{let me=[...ze];me[c].options||(me[c].options=[]);let oo=me[c].options.length;me[c].options.push({label:`Option ${oo+1}`,value:`option${oo+1}`}),e({fields:me})},a=(c,me)=>{let oo=[...ze];oo[c].options.splice(me,1),e({fields:oo})},ge=c=>{if(c<=0)return;let me=[...ze],oo=me[c];me[c]=me[c-1],me[c-1]=oo,e({fields:me}),j===c?Se(c-1):j===c-1&&Se(c)},Ue=c=>{if(c>=ze.length-1)return;let me=[...ze],oo=me[c];me[c]=me[c+1],me[c+1]=oo,e({fields:me}),j===c?Se(c+1):j===c+1&&Se(c)},Ke=()=>{let c=qe,me="";ke&&ke!=="none"&&At[ke]&&(me=At[ke].keyframes);let oo="";le&&le!=="none"?oo=`
				border-style: ${le};
				border-color: ${Ve};
				${Xt(Ce,"border-width",c)}
				${Xt(Z,"border-radius",c)}
            `:oo="border: none;";let f="box-shadow: none;";se&&se.enable&&(f=`box-shadow: ${se.position==="inset"?"inset ":""}${se.horizontal}px ${se.vertical}px ${se.blur}px ${se.spread}px ${se.color};`);let De="";ne&&ne.enable&&(De=`box-shadow: ${ne.position==="inset"?"inset ":""}${ne.horizontal}px ${ne.vertical}px ${ne.blur}px ${ne.spread}px ${ne.color};`);let io=`${Xt(I,"padding",c)}`,so=`${Xt(ee,"margin",c)}`,i=`${Xt(be,"padding",c)}`,E=`${Xt(Te,"border-radius",c)}`,Oe="";F&&(F.fontFamily&&(Oe+=`font-family: ${F.fontFamily};`),F.fontSize&&F.fontSize[c]&&(Oe+=`font-size: ${F.fontSize[c]}${F.fontSizeUnit||"px"};`),F.fontWeight&&(Oe+=`font-weight: ${F.fontWeight};`),F.fontStyle&&(Oe+=`font-style: ${F.fontStyle};`),F.textTransform&&(Oe+=`text-transform: ${F.textTransform};`),F.lineHeight&&F.lineHeight[c]&&(Oe+=`line-height: ${F.lineHeight[c]}${F.lineHeightUnit||"em"};`),F.letterSpacing&&F.letterSpacing[c]&&(Oe+=`letter-spacing: ${F.letterSpacing[c]}${F.letterSpacingUnit||"px"};`));let bo="";Q&&(Q.fontFamily&&(bo+=`font-family: ${Q.fontFamily};`),Q.fontSize&&Q.fontSize[c]&&(bo+=`font-size: ${Q.fontSize[c]}${Q.fontSizeUnit||"px"};`),Q.fontWeight&&(bo+=`font-weight: ${Q.fontWeight};`),Q.fontStyle&&(bo+=`font-style: ${Q.fontStyle};`),Q.textTransform&&(bo+=`text-transform: ${Q.textTransform};`),Q.lineHeight&&Q.lineHeight[c]&&(bo+=`line-height: ${Q.lineHeight[c]}${Q.lineHeightUnit||"em"};`),Q.letterSpacing&&Q.letterSpacing[c]&&(bo+=`letter-spacing: ${Q.letterSpacing[c]}${Q.letterSpacingUnit||"px"};`));let z="";X&&(X.fontFamily&&(z+=`font-family: ${X.fontFamily};`),X.fontSize&&X.fontSize[c]&&(z+=`font-size: ${X.fontSize[c]}${X.fontSizeUnit||"px"};`),X.fontWeight&&(z+=`font-weight: ${X.fontWeight};`),X.fontStyle&&(z+=`font-style: ${X.fontStyle};`),X.textTransform&&(z+=`text-transform: ${X.textTransform};`),X.lineHeight&&X.lineHeight[c]&&(z+=`line-height: ${X.lineHeight[c]}${X.lineHeightUnit||"em"};`),X.letterSpacing&&X.letterSpacing[c]&&(z+=`letter-spacing: ${X.letterSpacing[c]}${X.letterSpacingUnit||"px"};`));let Xe=B==="full"?"width: 100%;":`text-align: ${B};`,go=U&&U[c]?U[c]:20,W=fe&&fe[c]?fe[c]:8,He="";return ke&&ke!=="none"&&At[ke]&&(He=At[ke].keyframes),`
            /* Forms Block - ${o} */
            .${o} {
                ${io}
                ${so}
                ${f}
                ${oo}
                background-color: ${O};
                color: ${Y};
                width: 100%;
                transition: all 0.3s ease;
                ${Oe}
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
                gap: ${go}px;
                margin-bottom: ${go}px;
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
                color: ${A};
                ${bo}
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
                ${E}
				border-style: ${ve};
				border-color: ${J};
				${Xt(ce,"border-width",c)}
                background-color: ${N};
                color: ${xe};
                transition: all 0.3s ease;
                ${Oe}
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
                border-color: ${w};
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
                ${Xe}
                margin-top: ${go}px;
            }
            
            /* Submit button */
            .${o} .digiblocks-form-submit-button {
                background-color: ${V};
                color: ${k};
                border: none;
                ${E}
                padding: 12px 24px;
                cursor: pointer;
                transition: all 0.3s ease;
                ${z}
                ${B==="full"?"width: 100%;":""}
            }
            
            /* Submit button hover */
            .${o} .digiblocks-form-submit-button:hover {
                background-color: ${b};
                color: ${M};
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
				width: calc(75% - (${go}px * 0.25));
			}
			
			.${o} .digiblocks-field-width-66 {
				width: calc(66.66% - (${go}px * 0.33));
			}
			
			.${o} .digiblocks-field-width-50 {
				width: calc(50% - (${go}px * 0.5));
			}
			
			.${o} .digiblocks-field-width-33 {
				width: calc(33.33% - (${go}px * 0.67));
			}
			
			.${o} .digiblocks-field-width-25 {
				width: calc(25% - (${go}px * 0.75));
			}
            
            .${o} .digiblocks-form-fields-empty {
                padding: 20px;
                border: 2px dashed #ddd;
                text-align: center;
                border-radius: 4px;
            }
            
            /* Animation keyframes */
            ${He}
            
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
            ${me}

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
			${s.desktop?`
				@media (min-width: 992px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${s.tablet?`
				@media (min-width: 768px) and (max-width: 991px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${s.mobile?`
				@media (max-width: 767px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}
        `},ao=c=>wp.element.createElement("div",{className:"digiblocks-field-actions"},wp.element.createElement(ul,{text:de("Move Up","digiblocks")},wp.element.createElement(wo,{className:"digiblocks-field-action-button",onClick:me=>{me.stopPropagation(),ge(c)},icon:"arrow-up-alt2",disabled:c===0,isSmall:!0})),wp.element.createElement(ul,{text:de("Move Down","digiblocks")},wp.element.createElement(wo,{className:"digiblocks-field-action-button",onClick:me=>{me.stopPropagation(),Ue(c)},icon:"arrow-down-alt2",disabled:c===ze.length-1,isSmall:!0})),wp.element.createElement(ul,{text:de("Duplicate","digiblocks")},wp.element.createElement(wo,{className:"digiblocks-field-action-button",onClick:me=>{me.stopPropagation(),ie(c)},icon:"admin-page",isSmall:!0})),wp.element.createElement(ul,{text:de("Remove","digiblocks")},wp.element.createElement(wo,{className:"digiblocks-field-action-button",onClick:me=>{me.stopPropagation(),d(c)},icon:"trash",isDestructive:!0,isSmall:!0}))),co=c=>{if(c<0||c>=ze.length)return null;let me=ze[c];return wp.element.createElement(cu,{title:de("Field Settings","digiblocks"),initialOpen:!0},wp.element.createElement(at,{label:de("Field Label","digiblocks"),value:me.label||"",onChange:oo=>C(c,"label",oo),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(wa,{label:de("Field Type","digiblocks"),value:me.type,options:re,onChange:oo=>{(oo==="select"||oo==="radio")&&(!me.options||me.options.length===0)&&C(c,"options",[{label:"Option 1",value:"option1"},{label:"Option 2",value:"option2"}]),C(c,"type",oo)},__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),me.type!=="hidden"&&me.type!=="checkbox"&&me.type!=="radio"&&wp.element.createElement(at,{label:de("Placeholder","digiblocks"),value:me.placeholder||"",onChange:oo=>C(c,"placeholder",oo),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),me.type==="hidden"&&wp.element.createElement(at,{label:de("Value","digiblocks"),value:me.value||"",onChange:oo=>C(c,"value",oo),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Si,{label:de("Required Field","digiblocks"),checked:me.required||!1,onChange:oo=>C(c,"required",oo),__nextHasNoMarginBottom:!0}),wp.element.createElement(qc,{label:de("Field Width (%)","digiblocks"),value:me.width?.toString()||"100",onChange:oo=>C(c,"width",parseInt(oo)),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(nt,{value:"100",label:de("100","digiblocks")}),wp.element.createElement(nt,{value:"75",label:de("75","digiblocks")}),wp.element.createElement(nt,{value:"66",label:de("66","digiblocks")}),wp.element.createElement(nt,{value:"50",label:de("50","digiblocks")}),wp.element.createElement(nt,{value:"33",label:de("33","digiblocks")}),wp.element.createElement(nt,{value:"25",label:de("25","digiblocks")})),(me.type==="select"||me.type==="radio")&&me.options&&wp.element.createElement("div",{className:"digiblocks-field-options"},wp.element.createElement("p",{className:"components-base-control__label"},de("Options","digiblocks")),me.options.map((oo,f)=>wp.element.createElement("div",{key:f,className:"digiblocks-field-option"},wp.element.createElement("div",{style:{display:"flex",alignItems:"center",marginBottom:"15px"}},wp.element.createElement(at,{label:de("Label","digiblocks"),value:oo.label||"",onChange:De=>h(c,f,"label",De),style:{flexGrow:1,marginRight:"8px"},__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(at,{label:de("Value","digiblocks"),value:oo.value||"",onChange:De=>h(c,f,"value",De),style:{flexGrow:1,marginRight:"8px"},__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(ul,{text:de("Remove Option","digiblocks")},wp.element.createElement(wo,{isDestructive:!0,isSmall:!0,icon:"trash",onClick:()=>a(c,f),style:{alignSelf:"flex-end",marginBottom:"8px"}}))))),wp.element.createElement(wo,{isSecondary:!0,onClick:()=>Be(c),style:{marginTop:"8px",width:"100%"}},de("Add Option","digiblocks"))))},t=(c,me)=>{let oo=j===me,f=`digiblocks-form-field digiblocks-field-width-${c.width||"100"} ${oo?"is-selected":""}`,De={readOnly:!0,tabIndex:-1,style:{pointerEvents:"none"}},io=({children:so})=>wp.element.createElement("div",{className:f,onClick:()=>Se(me)},oo&&ao(me),so);switch(c.type){case"text":case"email":case"number":case"tel":case"url":case"date":return wp.element.createElement(io,{key:c.id,index:me},wp.element.createElement("label",{className:"digiblocks-form-field-label"},c.label,c.required&&wp.element.createElement("span",{className:"digiblocks-form-field-required"},"*")),wp.element.createElement("input",{type:c.type,className:"digiblocks-form-input",placeholder:c.placeholder||"",...De}),wp.element.createElement("div",{className:"digiblocks-form-field-error"}));case"textarea":return wp.element.createElement(io,{key:c.id,index:me},wp.element.createElement("label",{className:"digiblocks-form-field-label"},c.label,c.required&&wp.element.createElement("span",{className:"digiblocks-form-field-required"},"*")),wp.element.createElement("textarea",{className:"digiblocks-form-textarea",placeholder:c.placeholder||"",...De}),wp.element.createElement("div",{className:"digiblocks-form-field-error"}));case"select":return wp.element.createElement(io,{key:c.id,index:me},wp.element.createElement("label",{className:"digiblocks-form-field-label"},c.label,c.required&&wp.element.createElement("span",{className:"digiblocks-form-field-required"},"*")),wp.element.createElement("select",{className:"digiblocks-form-select",...De},wp.element.createElement("option",{value:""},c.placeholder||de("Select an option","digiblocks")),c.options&&c.options.map((so,i)=>wp.element.createElement("option",{key:i,value:so.value},so.label))),wp.element.createElement("div",{className:"digiblocks-form-field-error"}));case"checkbox":return wp.element.createElement(io,{key:c.id,index:me},wp.element.createElement("label",{className:"digiblocks-form-checkbox-label"},wp.element.createElement("input",{type:"checkbox",className:"digiblocks-form-checkbox",...De}),wp.element.createElement("span",null,c.label,c.required&&wp.element.createElement("span",{className:"digiblocks-form-field-required"},"*"))),wp.element.createElement("div",{className:"digiblocks-form-field-error"}));case"radio":return wp.element.createElement(io,{key:c.id,index:me},wp.element.createElement("label",{className:"digiblocks-form-field-label"},c.label,c.required&&wp.element.createElement("span",{className:"digiblocks-form-field-required"},"*")),c.options&&c.options.map((so,i)=>wp.element.createElement("label",{key:i,className:"digiblocks-form-radio-label"},wp.element.createElement("input",{type:"radio",className:"digiblocks-form-radio",name:`radio-${c.id}`,value:so.value,...De}),wp.element.createElement("span",null,so.label))),wp.element.createElement("div",{className:"digiblocks-form-field-error"}));case"hidden":return wp.element.createElement(io,{key:c.id,index:me},wp.element.createElement("div",{style:{padding:"10px",background:"#f7f7f7",borderRadius:"4px"}},wp.element.createElement("div",{style:{display:"flex",alignItems:"center"}},wp.element.createElement(du,{icon:"hidden",style:{marginRight:"8px"}}),wp.element.createElement("span",null,wp.element.createElement("strong",null,de("Hidden Field:","digiblocks"))," ",c.label,wp.element.createElement("br",null),wp.element.createElement("small",{style:{opacity:.7}},de("Value:","digiblocks")," ",c.value||de("Not set","digiblocks"))))));default:return null}},m=()=>{switch(Fe){case"options":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(No,{tab:"options",name:"form-settings",title:de("Form Settings","digiblocks"),initialOpen:!0},wp.element.createElement(at,{label:de("Form Name","digiblocks"),value:l,onChange:c=>e({formName:c}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(at,{label:de("Recipient Email","digiblocks"),value:$,onChange:c=>e({recipientEmail:c}),help:de("Leave empty to use the admin email","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(at,{label:de("Button Text","digiblocks"),value:L,onChange:c=>e({submitButtonText:c}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(qc,{label:de("Button Alignment","digiblocks"),value:B,onChange:c=>e({buttonAlign:c}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(nt,{value:"left",label:de("Left","digiblocks")}),wp.element.createElement(nt,{value:"center",label:de("Center","digiblocks")}),wp.element.createElement(nt,{value:"right",label:de("Right","digiblocks")}),wp.element.createElement(nt,{value:"full",label:de("Full","digiblocks")}))),wp.element.createElement(No,{tab:"options",name:"messages",title:de("Messages","digiblocks"),initialOpen:!1},wp.element.createElement(bl,{label:de("Success Message","digiblocks"),value:x,onChange:c=>e({successMessage:c}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(bl,{label:de("Error Message","digiblocks"),value:H,onChange:c=>e({errorMessage:c}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(No,{tab:"options",name:"security",title:de("Security","digiblocks"),initialOpen:!1},wp.element.createElement(Si,{label:de("Enable reCAPTCHA","digiblocks"),checked:T,onChange:c=>e({enableRecaptcha:c}),help:de("Enable Google reCAPTCHA to protect your form from spam.","digiblocks"),__nextHasNoMarginBottom:!0})),wp.element.createElement(No,{tab:"options",name:"email-settings",title:de("Email Settings","digiblocks"),initialOpen:!1},wp.element.createElement(at,{label:de("Email Subject","digiblocks"),value:u,onChange:c=>e({emailSubject:c}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Si,{label:de("Use Site Logo","digiblocks"),checked:r,onChange:c=>e({useSiteLogo:c}),help:de("Display the site logo in email header","digiblocks"),__nextHasNoMarginBottom:!0}),!r&&wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("label",{className:"components-base-control__label"},de("Custom Logo","digiblocks")),wp.element.createElement("div",{className:"editor-post-featured-image"},wp.element.createElement(ru,null,wp.element.createElement(su,{onSelect:c=>{e({customLogo:c.url})},allowedTypes:["image"],value:S,render:({open:c})=>wp.element.createElement("div",{className:"components-base-control__field"},S?wp.element.createElement("div",null,wp.element.createElement("img",{src:S,alt:de("Logo","digiblocks"),style:{maxWidth:"100%",maxHeight:"100px",marginBottom:"8px",display:"block"}}),wp.element.createElement("div",{className:"components-button-group",style:{display:"flex"}},wp.element.createElement(wo,{onClick:c,variant:"secondary",isSmall:!0},de("Replace","digiblocks")),wp.element.createElement(wo,{onClick:()=>e({customLogo:""}),variant:"secondary",isDestructive:!0,isSmall:!0,style:{marginLeft:"8px"}},de("Remove","digiblocks")))):wp.element.createElement(wo,{onClick:c,variant:"secondary",className:"editor-post-featured-image__toggle"},de("Upload Logo","digiblocks")))})))),wp.element.createElement(at,{label:de("Business Name","digiblocks"),value:D,onChange:c=>e({businessName:c}),help:de("Leave empty to use the site name","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(bl,{label:de("Email Header Text","digiblocks"),value:y,onChange:c=>e({emailHeader:c}),help:de("Optional text to display above the form data","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(bl,{label:de("Email Footer Text","digiblocks"),value:v,onChange:c=>e({emailFooter:c}),help:de("Optional text for the email footer (e.g., business address)","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(bl,{label:de("Business Address","digiblocks"),value:_,onChange:c=>e({businessAddress:c}),help:de("Business address to display in email footer","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})));case"fields":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(No,{tab:"fields",name:"field-types",title:de("Add Fields","digiblocks"),initialOpen:!0},wp.element.createElement("div",{className:"digi-field-select"},wp.element.createElement(wo,{onClick:()=>q("text")},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},wp.element.createElement("path",{d:"M64 96l0 32c0 17.7-14.3 32-32 32s-32-14.3-32-32L0 80C0 53.5 21.5 32 48 32l176 0 176 0c26.5 0 48 21.5 48 48l0 48c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-32L256 96l0 320 48 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-160 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l48 0 0-320L64 96z"})),wp.element.createElement("span",null,de("Text","digiblocks"))),wp.element.createElement(wo,{onClick:()=>q("email")},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},wp.element.createElement("path",{d:"M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"})),wp.element.createElement("span",null,de("Email","digiblocks"))),wp.element.createElement(wo,{onClick:()=>q("number")},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},wp.element.createElement("path",{d:"M181.3 32.4c17.4 2.9 29.2 19.4 26.3 36.8L197.8 128l95.1 0 11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3s29.2 19.4 26.3 36.8L357.8 128l58.2 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-68.9 0L325.8 320l58.2 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-68.9 0-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8l9.8-58.7-95.1 0-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8L90.2 384 32 384c-17.7 0-32-14.3-32-32s14.3-32 32-32l68.9 0 21.3-128L64 192c-17.7 0-32-14.3-32-32s14.3-32 32-32l68.9 0 11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3zM187.1 192L165.8 320l95.1 0 21.3-128-95.1 0z"})),wp.element.createElement("span",null,de("Number","digiblocks"))),wp.element.createElement(wo,{onClick:()=>q("tel")},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},wp.element.createElement("path",{d:"M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"})),wp.element.createElement("span",null,de("Phone","digiblocks"))),wp.element.createElement(wo,{onClick:()=>q("date")},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},wp.element.createElement("path",{d:"M96 32l0 32L48 64C21.5 64 0 85.5 0 112l0 48 448 0 0-48c0-26.5-21.5-48-48-48l-48 0 0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32L160 64l0-32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192L0 192 0 464c0 26.5 21.5 48 48 48l352 0c26.5 0 48-21.5 48-48l0-272z"})),wp.element.createElement("span",null,de("Date","digiblocks"))),wp.element.createElement(wo,{onClick:()=>q("textarea")},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},wp.element.createElement("path",{d:"M192 32l64 0 160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0 0 352c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-352-32 0 0 352c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-32 0c-88.4 0-160-71.6-160-160s71.6-160 160-160z"})),wp.element.createElement("span",null,de("Textarea","digiblocks"))),wp.element.createElement(wo,{onClick:()=>q("select")},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},wp.element.createElement("path",{d:"M384 480c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0zM224 352c-6.7 0-13-2.8-17.6-7.7l-104-112c-6.5-7-8.2-17.2-4.4-25.9s12.5-14.4 22-14.4l208 0c9.5 0 18.2 5.7 22 14.4s2.1 18.9-4.4 25.9l-104 112c-4.5 4.9-10.9 7.7-17.6 7.7z"})),wp.element.createElement("span",null,de("Select","digiblocks"))),wp.element.createElement(wo,{onClick:()=>q("checkbox")},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},wp.element.createElement("path",{d:"M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"})),wp.element.createElement("span",null,de("Checkbox","digiblocks"))),wp.element.createElement(wo,{onClick:()=>q("radio")},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},wp.element.createElement("path",{d:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-352a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"})),wp.element.createElement("span",null,de("Radio","digiblocks"))),wp.element.createElement(wo,{onClick:()=>q("hidden")},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512"},wp.element.createElement("path",{d:"M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"})),wp.element.createElement("span",null,de("Hidden","digiblocks")))),wp.element.createElement(ht,{label:de("Field Gap","digiblocks")},wp.element.createElement(Wc,{value:U[qe],onChange:c=>e({fieldGap:{...U,[qe]:c}}),min:0,max:50,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(ht,{label:de("Label Margin","digiblocks")},wp.element.createElement(Wc,{value:fe[qe],onChange:c=>e({labelMargin:{...fe,[qe]:c}}),min:0,max:30,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}))),j>=0&&co(j));case"style":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(No,{tab:"style",name:"colors",title:de("Colors","digiblocks"),initialOpen:!0},wp.element.createElement(Ca,{title:de("Form Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:O,onChange:c=>e({backgroundColor:c}),label:de("Background Color","digiblocks")},{value:Y,onChange:c=>e({textColor:c}),label:de("Text Color","digiblocks")},{value:A,onChange:c=>e({labelColor:c}),label:de("Label Color","digiblocks")}]}),wp.element.createElement(Ca,{title:de("Input Colors","digiblocks"),initialOpen:!1,enableAlpha:!0,colorSettings:[{value:N,onChange:c=>e({inputBackgroundColor:c}),label:de("Input Background","digiblocks")},{value:xe,onChange:c=>e({inputTextColor:c}),label:de("Input Text","digiblocks")},{value:J,onChange:c=>e({inputBorderColor:c}),label:de("Input Border","digiblocks")},{value:w,onChange:c=>e({inputFocusBorderColor:c}),label:de("Input Focus Border","digiblocks")}]}),wp.element.createElement(Ca,{title:de("Button Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:V,onChange:c=>e({buttonBackgroundColor:c}),label:de("Background Color","digiblocks")},{value:k,onChange:c=>e({buttonTextColor:c}),label:de("Text Color","digiblocks")},{value:b,onChange:c=>e({buttonBackgroundHoverColor:c}),label:de("Hover Background Color","digiblocks")},{value:M,onChange:c=>e({buttonTextHoverColor:c}),label:de("Hover Text Color","digiblocks")}]})),wp.element.createElement(No,{tab:"style",name:"typography",title:de("Typography","digiblocks"),initialOpen:!1},wp.element.createElement(ts,{label:de("Form Typography","digiblocks"),value:F,onChange:c=>e({typography:c}),defaults:{fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em"}}),wp.element.createElement(ts,{label:de("Label Typography","digiblocks"),value:Q,onChange:c=>e({textTypography:c}),defaults:{fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em"}}),wp.element.createElement(ts,{label:de("Button Typography","digiblocks"),value:X,onChange:c=>e({buttonTypography:c}),defaults:{fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em"}})),wp.element.createElement(No,{tab:"style",name:"form-border",title:de("Form Border","digiblocks"),initialOpen:!1},wp.element.createElement(wa,{label:de("Border Style","digiblocks"),value:le,options:n,onChange:c=>e({borderStyle:c}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),le!=="none"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(ht,{label:de("Border Width","digiblocks")},wp.element.createElement(ei,{values:Ce[qe],onChange:c=>e({borderWidth:{...Ce,[qe]:c}}),units:[{label:"px",value:"px"},{label:"rem",value:"rem"},{label:"em",value:"em"},{label:"%",value:"%"}]})),wp.element.createElement(Ca,{title:de("Border Color","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:Ve,onChange:c=>e({borderColor:c}),label:de("Border Color","digiblocks")}]}),wp.element.createElement(ht,{label:de("Border Radius","digiblocks")},wp.element.createElement(ei,{values:Z[qe],onChange:c=>e({borderRadius:{...Z,[qe]:c}}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]}))),wp.element.createElement(mu,{normalValue:se,hoverValue:ne,onNormalChange:c=>e({boxShadow:c}),onHoverChange:c=>e({boxShadowHover:c})})),wp.element.createElement(No,{tab:"style",name:"input-style",title:de("Input Style","digiblocks"),initialOpen:!1},wp.element.createElement(wa,{label:de("Input Border Style","digiblocks"),value:ve,options:n,onChange:c=>e({inputBorderStyle:c}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),ve!=="none"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(ht,{label:de("Input Border Width","digiblocks")},wp.element.createElement(ei,{values:ce[qe],onChange:c=>e({inputBorderWidth:{...ce,[qe]:c}}),units:[{label:"px",value:"px"},{label:"rem",value:"rem"},{label:"em",value:"em"},{label:"%",value:"%"}]})),wp.element.createElement(ht,{label:de("Input Border Radius","digiblocks")},wp.element.createElement(ei,{values:Te&&Te[qe]?Te[qe]:{top:4,right:4,bottom:4,left:4,unit:"px"},onChange:c=>e({inputBorderRadius:{...Te,[qe]:c}}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]}))),wp.element.createElement(ht,{label:de("Input Padding","digiblocks")},wp.element.createElement(ei,{values:be&&be[qe]?be[qe]:{top:12,right:15,bottom:12,left:15,unit:"px"},onChange:c=>e({inputPadding:{...be,[qe]:c}})}))),wp.element.createElement(No,{tab:"style",name:"spacing",title:de("Spacing","digiblocks"),initialOpen:!1},wp.element.createElement(ht,{label:de("Padding","digiblocks")},wp.element.createElement(ei,{values:I&&I[qe]?I[qe]:{top:30,right:30,bottom:30,left:30,unit:"px"},onChange:c=>e({padding:{...I,[qe]:c}})})),wp.element.createElement(ht,{label:de("Margin","digiblocks")},wp.element.createElement(ei,{values:ee&&ee[qe]?ee[qe]:{top:0,right:0,bottom:30,left:0,unit:"px"},onChange:c=>e({margin:{...ee,[qe]:c}})}))));case"advanced":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(No,{tab:"advanced",name:"animation",title:de("Animation","digiblocks"),initialOpen:!0},wp.element.createElement(wa,{label:de("Animation Effect","digiblocks"),value:ke,options:p,onChange:c=>e({animation:c}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),ke&&ke!=="none"&&wp.element.createElement("div",{style:{marginTop:"10px"}},wp.element.createElement(wo,{variant:"secondary",isSecondary:!0,onClick:R,style:{width:"100%"}},de("Preview Animation","digiblocks")))),wp.element.createElement(No,{tab:"advanced",name:"visibility",title:de("Visibility","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control__help",style:{padding:"12px",backgroundColor:"#f0f6fc",border:"1px solid #c3ddfd",borderRadius:"4px",marginBottom:"16px"}},wp.element.createElement("strong",null,de("Editor Note:","digiblocks")),wp.element.createElement("br",null),de("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.","digiblocks")),wp.element.createElement(Si,{label:de("Hide on Desktop","digiblocks"),checked:s.desktop,onChange:c=>e({visibility:{...s,desktop:c}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(Si,{label:de("Hide on Tablet","digiblocks"),checked:s.tablet,onChange:c=>e({visibility:{...s,tablet:c}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(Si,{label:de("Hide on Mobile","digiblocks"),checked:s.mobile,onChange:c=>e({visibility:{...s,mobile:c}}),__nextHasNoMarginBottom:!0})),wp.element.createElement(No,{tab:"advanced",name:"additional",title:de("Additional","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control html-anchor-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"html-anchor"},de("HTML anchor","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"html-anchor",value:P||"",onChange:c=>e({anchor:c.target.value}),"aria-describedby":"html-anchor-help",autoCapitalize:"none",autoComplete:"off"})),wp.element.createElement("p",{id:"html-anchor-help",className:"components-base-control__help"},de(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`,"digiblocks")," ",wp.element.createElement("a",{className:"components-external-link",href:"https://wordpress.org/documentation/article/page-jumps/",target:"_blank",rel:"external noreferrer noopener"},wp.element.createElement("span",{className:"components-external-link__contents"},de("Learn more about anchors","digiblocks")),wp.element.createElement("span",{className:"components-external-link__icon","aria-label":"(opens in a new tab)"},"\u2197")))),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"additional-css-classes"},de("Additional CSS class(es)","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"additional-css-classes",value:oe||"",onChange:c=>e({customClasses:c.target.value}),"aria-describedby":"additional-css-classes-help",autoComplete:"off"})),wp.element.createElement("p",{id:"additional-css-classes-help",className:"components-base-control__help"},de("Separate multiple classes with spaces.","digiblocks")))));default:return null}},Me=au({className:`digiblocks-forms ${o} ${oe||""}`,id:P||null});return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(nu,null,wp.element.createElement(hu,{tabs:g,activeTab:Fe,onSelect:Ie,customClass:"four"},m())),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:Ke()}}),wp.element.createElement("div",{...Me},wp.element.createElement("div",{className:"digiblocks-form"},wp.element.createElement("div",{className:"digiblocks-form-fields"},ze&&ze.length>0?ze.map((c,me)=>t(c,me)):wp.element.createElement("div",{className:"digiblocks-form-fields-empty"},de('No fields added yet. Click the "Fields" tab to add form fields.',"digiblocks"))),wp.element.createElement("div",{className:"digiblocks-form-submit",style:{textAlign:B==="full"?"center":B}},wp.element.createElement("button",{className:"digiblocks-form-submit-button"},L)),wp.element.createElement("div",{className:"digiblocks-form-messages"},wp.element.createElement("div",{className:"digiblocks-form-success"},x),wp.element.createElement("div",{className:"digiblocks-form-error"},H)))))},Qc=fu;var{useBlockProps:ku}=window.wp.blockEditor,vu=({attributes:te})=>{let{id:e,anchor:K,customClasses:o,animation:P,successMessage:s,errorMessage:oe,submitButtonText:l,buttonAlign:$,fields:x}=te,H=`digiblocks-forms ${e} ${P!=="none"?`animate-${P}`:""} ${o||""}`,T=ku.save({className:H,id:K||null}),u=(r,S)=>{let D=`digiblocks-field-width-${r.width||"100"}`;switch(r.type){case"text":case"email":case"number":case"tel":case"url":case"date":return wp.element.createElement("div",{key:r.id,className:`digiblocks-form-field ${D}`,"data-field-id":r.id,"data-field-type":r.type},wp.element.createElement("label",{className:"digiblocks-form-field-label",htmlFor:`${e}-${r.id}`},r.label,r.required&&wp.element.createElement("span",{className:"digiblocks-form-field-required"},"*")),wp.element.createElement("input",{type:r.type,id:`${e}-${r.id}`,name:r.id,className:"digiblocks-form-input",placeholder:r.placeholder||"",required:r.required}),wp.element.createElement("div",{className:"digiblocks-form-field-error"}));case"textarea":return wp.element.createElement("div",{key:r.id,className:`digiblocks-form-field ${D}`,"data-field-id":r.id,"data-field-type":r.type},wp.element.createElement("label",{className:"digiblocks-form-field-label",htmlFor:`${e}-${r.id}`},r.label,r.required&&wp.element.createElement("span",{className:"digiblocks-form-field-required"},"*")),wp.element.createElement("textarea",{id:`${e}-${r.id}`,name:r.id,className:"digiblocks-form-textarea",placeholder:r.placeholder||"",required:r.required}),wp.element.createElement("div",{className:"digiblocks-form-field-error"}));case"select":return wp.element.createElement("div",{key:r.id,className:`digiblocks-form-field ${D}`,"data-field-id":r.id,"data-field-type":r.type},wp.element.createElement("label",{className:"digiblocks-form-field-label",htmlFor:`${e}-${r.id}`},r.label,r.required&&wp.element.createElement("span",{className:"digiblocks-form-field-required"},"*")),wp.element.createElement("select",{id:`${e}-${r.id}`,name:r.id,className:"digiblocks-form-select",required:r.required},wp.element.createElement("option",{value:""},r.placeholder||"Select an option"),r.options&&r.options.map((y,v)=>wp.element.createElement("option",{key:v,value:y.value},y.label))),wp.element.createElement("div",{className:"digiblocks-form-field-error"}));case"checkbox":return wp.element.createElement("div",{key:r.id,className:`digiblocks-form-field ${D}`,"data-field-id":r.id,"data-field-type":r.type},wp.element.createElement("label",{className:"digiblocks-form-checkbox-label"},wp.element.createElement("input",{type:"checkbox",id:`${e}-${r.id}`,name:r.id,className:"digiblocks-form-checkbox",value:"1",required:r.required}),wp.element.createElement("span",null,r.label,r.required&&wp.element.createElement("span",{className:"digiblocks-form-field-required"},"*"))),wp.element.createElement("div",{className:"digiblocks-form-field-error"}));case"radio":return wp.element.createElement("div",{key:r.id,className:`digiblocks-form-field ${D}`,"data-field-id":r.id,"data-field-type":r.type},wp.element.createElement("label",{className:"digiblocks-form-field-label"},r.label,r.required&&wp.element.createElement("span",{className:"digiblocks-form-field-required"},"*")),r.options&&r.options.map((y,v)=>wp.element.createElement("label",{key:v,className:"digiblocks-form-radio-label"},wp.element.createElement("input",{type:"radio",id:`${e}-${r.id}-${v}`,name:r.id,className:"digiblocks-form-radio",value:y.value,required:r.required&&v===0}),wp.element.createElement("span",null,y.label))),wp.element.createElement("div",{className:"digiblocks-form-field-error"}));case"hidden":return wp.element.createElement("input",{key:r.id,type:"hidden",id:`${e}-${r.id}`,name:r.id,value:r.value||"","data-field-id":r.id,"data-field-type":r.type});default:return null}};return wp.element.createElement("div",{...T},wp.element.createElement("form",{className:"digiblocks-form",id:`${e}-form`,"data-form-id":e,onSubmit:"return false;"},wp.element.createElement("div",{className:"digiblocks-form-fields"},x&&x.map((r,S)=>u(r,S))),wp.element.createElement("div",{className:"digiblocks-form-submit",style:{textAlign:$==="full"?"center":$}},wp.element.createElement("button",{type:"submit",className:"digiblocks-form-submit-button",style:$==="full"?{width:"100%"}:{}},l)),wp.element.createElement("div",{className:"digiblocks-form-messages"},wp.element.createElement("div",{className:"digiblocks-form-success"},s),wp.element.createElement("div",{className:"digiblocks-form-error"},oe))))},Jc=vu;var{__:vo}=window.wp.i18n,{registerBlockType:xu}=window.wp.blocks,{getBlockActiveStatus:yu}=window.wp.digiBlocks;xu("digiblocks/forms",{apiVersion:2,title:digiBlocksData.blocks.forms.title,category:"digiblocks",icon:{src:()=>{let{viewbox:te,path:e}=digiBlocksData.blocks.forms.icon;return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${te}`,className:"digiblocks-editor-icons"},wp.element.createElement("path",{d:e}))}},description:digiBlocksData.blocks.forms.description,keywords:[vo("form","digiblocks"),vo("contact","digiblocks"),vo("input","digiblocks"),vo("email","digiblocks"),vo("field","digiblocks")],supports:{inserter:!!yu("forms"),html:!1,className:!1,customClassName:!1,anchor:!1},attributes:{id:{type:"string",default:""},anchor:{type:"string"},visibility:{type:"object",default:{desktop:!1,tablet:!1,mobile:!1}},customClasses:{type:"string"},formName:{type:"string",default:vo("Contact Form","digiblocks")},recipientEmail:{type:"string",default:""},emailSubject:{type:"string",default:vo("New form submission","digiblocks")},successMessage:{type:"string",default:vo("Thank you for your submission!","digiblocks")},errorMessage:{type:"string",default:vo("There was an error submitting the form. Please try again.","digiblocks")},enableRecaptcha:{type:"boolean",default:!1},useSiteLogo:{type:"boolean",default:!0},customLogo:{type:"string",default:""},emailHeader:{type:"string",default:""},emailFooter:{type:"string",default:""},businessName:{type:"string",default:""},businessAddress:{type:"string",default:""},submitButtonText:{type:"string",default:vo("Submit","digiblocks")},buttonAlign:{type:"string",default:"left"},backgroundColor:{type:"string",default:"#ffffff"},textColor:{type:"string",default:"#333333"},labelColor:{type:"string",default:"#333333"},buttonBackgroundColor:{type:"string",default:"#4a6cf7"},buttonTextColor:{type:"string",default:"#ffffff"},buttonBackgroundHoverColor:{type:"string",default:"#3a5ce5"},buttonTextHoverColor:{type:"string",default:"#ffffff"},borderStyle:{type:"string",default:"solid"},borderColor:{type:"string",default:"#e0e0e0"},borderWidth:{type:"object",default:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderRadius:{type:"object",default:{desktop:{top:8,right:8,bottom:8,left:8,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},padding:{type:"object",default:{desktop:{top:30,right:30,bottom:30,left:30,unit:"px"},tablet:{top:25,right:25,bottom:25,left:25,unit:"px"},mobile:{top:20,right:20,bottom:20,left:20,unit:"px"}}},margin:{type:"object",default:{desktop:{top:0,right:0,bottom:30,left:0,unit:"px"},tablet:{top:0,right:0,bottom:25,left:0,unit:"px"},mobile:{top:0,right:0,bottom:20,left:0,unit:"px"}}},typography:{type:"object",default:{}},textTypography:{type:"object",default:{}},buttonTypography:{type:"object",default:{}},boxShadow:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.1)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},boxShadowHover:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},inputBorderStyle:{type:"string",default:"solid"},inputBorderColor:{type:"string",default:"#e0e0e0"},inputBorderWidth:{type:"object",default:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},inputBorderRadius:{type:"object",default:{desktop:{top:4,right:4,bottom:4,left:4,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},inputPadding:{type:"object",default:{desktop:{top:12,right:15,bottom:12,left:15,unit:"px"},tablet:{top:10,right:12,bottom:10,left:12,unit:"px"},mobile:{top:8,right:10,bottom:8,left:10,unit:"px"}}},inputBackgroundColor:{type:"string",default:"#ffffff"},inputTextColor:{type:"string",default:"#333333"},inputFocusBorderColor:{type:"string",default:"#4a6cf7"},animation:{type:"string",default:"none"},fieldGap:{type:"object",default:{desktop:20,tablet:15,mobile:12}},labelMargin:{type:"object",default:{desktop:8,tablet:6,mobile:5}},fields:{type:"array",default:[{id:"name",type:"text",label:vo("Name","digiblocks"),placeholder:vo("Enter your name","digiblocks"),required:!0,width:100},{id:"email",type:"email",label:vo("Email","digiblocks"),placeholder:vo("Enter your email","digiblocks"),required:!0,width:100},{id:"message",type:"textarea",label:vo("Message","digiblocks"),placeholder:vo("Enter your message","digiblocks"),required:!0,width:100}]}},example:{attributes:{fields:[{id:"name",type:"text",label:vo("Name","digiblocks"),placeholder:vo("Enter your name","digiblocks"),required:!0,width:100},{id:"email",type:"email",label:vo("Email","digiblocks"),placeholder:vo("Enter your email","digiblocks"),required:!0,width:100},{id:"message",type:"textarea",label:vo("Message","digiblocks"),placeholder:vo("Enter your message","digiblocks"),required:!0,width:100}],formName:vo("Contact Form","digiblocks"),backgroundColor:"#ffffff",textColor:"#333333",labelColor:"#333333",borderStyle:"solid",borderColor:"#e0e0e0",buttonBackgroundColor:"#4a6cf7",buttonTextColor:"#ffffff",submitButtonText:vo("Submit","digiblocks"),viewportWidth:450}},edit:Qc,save:Jc});var{__:Ye}=window.wp.i18n,{useBlockProps:Cu,InspectorControls:wu,PanelColorSettings:Su}=window.wp.blockEditor,{TextControl:is,TextareaControl:Yc,RangeControl:Zc,SelectControl:$a,Button:$i,Placeholder:$u,Spinner:_u,ToggleControl:Dt,BaseControl:Bu,__experimentalToggleGroupControl:l0,__experimentalToggleGroupControlOption:a0}=window.wp.components,{useState:oi,useEffect:_i,useRef:ls}=window.wp.element,{useBlockId:Tu,getDimensionCSS:Kc,animations:ml,animationPreview:Xc}=digi.utils,{tabIcons:as}=digi.icons,{ResponsiveControl:ns,DimensionControl:Ac,CustomTabPanel:Nu,BoxShadowControl:Hu,TabPanelBody:ft}=digi.components,zu=({attributes:te,setAttributes:e,clientId:K})=>{let{id:o,anchor:P,visibility:s,customClasses:oe,mapHeight:l,zoom:$,mapType:x,mapStyle:H,customMapStyle:T,markers:u,address:r,animation:S,enableZoom:D,enableScroll:y,enableFullscreenControl:v,enableStreetViewControl:_,enableMapTypeControl:L,borderStyle:B,borderWidth:O,borderRadius:Y,borderColor:A,boxShadow:V,boxShadowHover:k}=te;Tu(o,K,e);let[b,M]=oi(window.digi.responsiveState.activeDevice),[le,Ve]=oi(!1),[Ce,Z]=oi(null),[I,ee]=oi(!1),[F,Q]=oi(null),[X,se]=oi([]),ne=ls(null),ve=ls(null),[J,ce]=oi(()=>{if(window.digi.uiState){let R=window.digi.uiState.getActiveTab(K);if(R)return R}return"options"});_i(()=>window.digi.responsiveState.subscribe(p=>{M(p)}),[]),_i(()=>{u||e({markers:[]})},[e]),_i(()=>{if(!I&&typeof google>"u"&&!window.googleMapsLoading){if(!digiBlocksData.googleMapsApiKey){Z(Ye("Google Maps API key not found. Please add it in the DigiBlocks settings.","digiblocks"));return}window.googleMapsLoading=!0,window.digiblocksGoogleMapsCallbacks=window.digiblocksGoogleMapsCallbacks||[];let R=()=>{ee(!0),ve.current=new google.maps.Geocoder};window.digiblocksGoogleMapsCallbacks.push(R),typeof window.digiblocksGoogleMapsCallback!="function"&&(window.digiblocksGoogleMapsCallback=()=>{window.googleMapsInitialized=!0,window.googleMapsLoading=!1,window.digiblocksGoogleMapsCallbacks.forEach(re=>{typeof re=="function"&&re()})});let p=document.createElement("script");return p.src=`https://maps.googleapis.com/maps/api/js?key=${digiBlocksData.googleMapsApiKey}&callback=digiblocksGoogleMapsCallback&loading=async`,p.async=!0,p.defer=!0,document.head.appendChild(p),()=>{let re=window.digiblocksGoogleMapsCallbacks.indexOf(R);re>-1&&window.digiblocksGoogleMapsCallbacks.splice(re,1)}}else if(!I&&typeof google<"u")ee(!0),ve.current=new google.maps.Geocoder;else if(!I&&window.googleMapsLoading){let R=()=>{ee(!0),ve.current=new google.maps.Geocoder};return window.digiblocksGoogleMapsCallbacks=window.digiblocksGoogleMapsCallbacks||[],window.digiblocksGoogleMapsCallbacks.push(R),()=>{let p=window.digiblocksGoogleMapsCallbacks.indexOf(R);p>-1&&window.digiblocksGoogleMapsCallbacks.splice(p,1)}}},[I]),_i(()=>{if(I&&ne.current&&!F){let p={center:{lat:40.7128,lng:-74.006},zoom:$||10,mapTypeId:x||"roadmap",zoomControl:D,scrollwheel:y,fullscreenControl:v,streetViewControl:_,mapTypeControl:L},re=u&&u.length>0;if(re&&digiBlocksData.googleMapsMapId)p.mapId=digiBlocksData.googleMapsMapId;else if(H&&H!=="default")if(H==="custom"&&T)try{let g=JSON.parse(T);p.styles=g}catch(g){console.error("Invalid map style JSON:",g)}else Fe[H]&&(p.styles=Fe[H]);let n=new google.maps.Map(ne.current,p);Q(n),ve.current||(ve.current=new google.maps.Geocoder),r&&Te(r,n),re&&ke(u,n)}},[I,ne,F,$,x,H,T,r,u,D,y,v,_,L]),_i(()=>{if(F){if(F.setZoom($),F.setMapTypeId(x),H&&H!=="default")if(H==="custom"&&T)try{let R=JSON.parse(T);F.setOptions({styles:R})}catch(R){console.error("Invalid map style JSON:",R)}else Fe[H]&&F.setOptions({styles:Fe[H]});else F.setOptions({styles:[]});F.setOptions({zoomControl:D,scrollwheel:y,fullscreenControl:v,streetViewControl:_,mapTypeControl:L})}},[F,$,x,H,T,D,y,v,_,L]);let Te=(R,p,re=-1)=>{ve.current&&(Ve(!0),Z(null),ve.current.geocode({address:R},(n,g)=>{if(Ve(!1),g==="OK"&&n&&n.length>0){let q=n[0].geometry.location;if(re>=0){let d=[...u];d[re]={...d[re],latitude:q.lat(),longitude:q.lng()},e({markers:d}),F&&ke(d,F)}else if(p.setCenter(q),u&&u.length>0){let d=[...u];d[0]={...d[0],address:R,latitude:q.lat(),longitude:q.lng()},e({markers:d}),F&&ke(d,F)}}else Z(Ye("Could not find address. Please try a different one or use the map to position your marker.","digiblocks"))}))},be=()=>{let R=[...u||[]],p=`marker-${Date.now()}`,re=F?F.getCenter():{lat:40.7128,lng:-74.006};if(R.push({id:p,address:"",latitude:typeof re.lat=="function"?re.lat():re.lat,longitude:typeof re.lng=="function"?re.lng():re.lng,title:""}),e({markers:R}),R.length===1&&F&&digiBlocksData.googleMapsMapId){let n=F.getCenter(),g=F.getZoom(),q={center:n,zoom:g,mapTypeId:F.getMapTypeId(),zoomControl:D,scrollwheel:y,fullscreenControl:v,streetViewControl:_,mapTypeControl:L,mapId:digiBlocksData.googleMapsMapId};X.length>0&&(X.forEach(ie=>ie.map=null),se([]));let d=new google.maps.Map(ne.current,q);Q(d),setTimeout(()=>{ke(R,d)},100)}else F&&ke(R,F)},N=(R,p,re)=>{let n=[...u];n[R]={...n[R],[p]:re},e({markers:n}),p==="address"&&re&&ve.current&&F&&Te(re,F)},xe=R=>{let p=[...u];if(p.splice(R,1),e({markers:p}),p.length===0&&F&&(F.mapId=null,H&&H!=="default"))if(H==="custom"&&T)try{let re=JSON.parse(T);F.setOptions({styles:re})}catch(re){console.error("Invalid map style JSON:",re)}else Fe[H]&&F.setOptions({styles:Fe[H]})},w=(R,p,re)=>{if(R)if(p&&p!=="default")if(p==="custom"&&re)try{let n=JSON.parse(re);R.setOptions({styles:n})}catch(n){console.error("Invalid map style JSON:",n)}else Fe[p]&&R.setOptions({styles:Fe[p]});else R.setOptions({styles:[]})},ke=async(R,p)=>{if(!(!R||R.length===0)){X.length>0&&(X.forEach(re=>re.map=null),se([]));try{google.maps.marker||await google.maps.importLibrary("marker");let re=R.map(n=>{if(!n.latitude||!n.longitude)return null;let g={lat:n.latitude,lng:n.longitude},q=n.title||"",d=n.description||"",ie=new google.maps.marker.AdvancedMarkerElement({map:p,position:g,title:q});if(d){let C=document.createElement("div");if(C.className="digiblocks-map-info-content",C.style.cssText="min-width: 200px; max-width: 300px; padding: 10px; background-color: white; border-radius: 8px; box-shadow: 0 2px 7px 1px rgba(0,0,0,0.3);",q){let a=document.createElement("div");a.className="digiblocks-map-info-title",a.style.cssText="font-weight: bold; margin-bottom: 5px; font-size: 16px;",a.textContent=q,C.appendChild(a)}let h=document.createElement("div");h.className="digiblocks-map-info-description",h.style.cssText="font-size: 14px;",h.innerHTML=d,C.appendChild(h);let Be=new google.maps.InfoWindow({content:C});google.maps.event.addListener(ie,"click",function(){Be.open({anchor:ie,map:p})}),R.length===1&&Be.open({anchor:ie,map:p})}return ie}).filter(Boolean);se(re)}catch(re){console.error("Error creating advanced markers:",re)}}},U=ls(null);_i(()=>{if(S&&S!=="none"){let R=setTimeout(()=>{Xc(o,S,ml,U)},100);return()=>clearTimeout(R)}},[S]);let fe=()=>{Xc(o,S,ml,U)},ze=[{label:Ye("None","digiblocks"),value:"none"},{label:Ye("Solid","digiblocks"),value:"solid"},{label:Ye("Dotted","digiblocks"),value:"dotted"},{label:Ye("Dashed","digiblocks"),value:"dashed"},{label:Ye("Double","digiblocks"),value:"double"},{label:Ye("Groove","digiblocks"),value:"groove"},{label:Ye("Ridge","digiblocks"),value:"ridge"},{label:Ye("Inset","digiblocks"),value:"inset"},{label:Ye("Outset","digiblocks"),value:"outset"}],qe=[{label:Ye("Roadmap","digiblocks"),value:"roadmap"},{label:Ye("Satellite","digiblocks"),value:"satellite"},{label:Ye("Hybrid","digiblocks"),value:"hybrid"},{label:Ye("Terrain","digiblocks"),value:"terrain"}],je=[{label:Ye("Default","digiblocks"),value:"default"},{label:Ye("Silver","digiblocks"),value:"silver"},{label:Ye("Retro","digiblocks"),value:"retro"},{label:Ye("Dark","digiblocks"),value:"dark"},{label:Ye("Night","digiblocks"),value:"night"},{label:Ye("Aubergine","digiblocks"),value:"aubergine"},{label:Ye("Custom","digiblocks"),value:"custom"}],Fe={default:[],silver:[{elementType:"geometry",stylers:[{color:"#f5f5f5"}]},{elementType:"labels.icon",stylers:[{visibility:"off"}]},{elementType:"labels.text.fill",stylers:[{color:"#616161"}]},{elementType:"labels.text.stroke",stylers:[{color:"#f5f5f5"}]},{featureType:"administrative.land_parcel",elementType:"labels.text.fill",stylers:[{color:"#bdbdbd"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#eeeeee"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#e5e5e5"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#ffffff"}]},{featureType:"road.arterial",elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#dadada"}]},{featureType:"road.highway",elementType:"labels.text.fill",stylers:[{color:"#616161"}]},{featureType:"road.local",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]},{featureType:"transit.line",elementType:"geometry",stylers:[{color:"#e5e5e5"}]},{featureType:"transit.station",elementType:"geometry",stylers:[{color:"#eeeeee"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#c9c9c9"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]}],retro:[{elementType:"geometry",stylers:[{color:"#ebe3cd"}]},{elementType:"labels.text.fill",stylers:[{color:"#523735"}]},{elementType:"labels.text.stroke",stylers:[{color:"#f5f1e6"}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#c9b2a6"}]},{featureType:"administrative.land_parcel",elementType:"geometry.stroke",stylers:[{color:"#dcd2be"}]},{featureType:"administrative.land_parcel",elementType:"labels.text.fill",stylers:[{color:"#ae9e90"}]},{featureType:"landscape.natural",elementType:"geometry",stylers:[{color:"#dfd2ae"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#dfd2ae"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#93817c"}]},{featureType:"poi.park",elementType:"geometry.fill",stylers:[{color:"#a5b076"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#447530"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#f5f1e6"}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#fdfcf8"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#f8c967"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#e9bc62"}]},{featureType:"road.highway.controlled_access",elementType:"geometry",stylers:[{color:"#e98d58"}]},{featureType:"road.highway.controlled_access",elementType:"geometry.stroke",stylers:[{color:"#db8555"}]},{featureType:"road.local",elementType:"labels.text.fill",stylers:[{color:"#806b63"}]},{featureType:"transit.line",elementType:"geometry",stylers:[{color:"#dfd2ae"}]},{featureType:"transit.line",elementType:"labels.text.fill",stylers:[{color:"#8f7d77"}]},{featureType:"transit.line",elementType:"labels.text.stroke",stylers:[{color:"#ebe3cd"}]},{featureType:"transit.station",elementType:"geometry",stylers:[{color:"#dfd2ae"}]},{featureType:"water",elementType:"geometry.fill",stylers:[{color:"#b9d3c2"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#92998d"}]}],dark:[{elementType:"geometry",stylers:[{color:"#212121"}]},{elementType:"labels.icon",stylers:[{visibility:"off"}]},{elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{elementType:"labels.text.stroke",stylers:[{color:"#212121"}]},{featureType:"administrative",elementType:"geometry",stylers:[{color:"#757575"}]},{featureType:"administrative.country",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]},{featureType:"administrative.land_parcel",stylers:[{visibility:"off"}]},{featureType:"administrative.locality",elementType:"labels.text.fill",stylers:[{color:"#bdbdbd"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#181818"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#616161"}]},{featureType:"poi.park",elementType:"labels.text.stroke",stylers:[{color:"#1b1b1b"}]},{featureType:"road",elementType:"geometry.fill",stylers:[{color:"#2c2c2c"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#8a8a8a"}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#373737"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#3c3c3c"}]},{featureType:"road.highway.controlled_access",elementType:"geometry",stylers:[{color:"#4e4e4e"}]},{featureType:"road.local",elementType:"labels.text.fill",stylers:[{color:"#616161"}]},{featureType:"transit",elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#000000"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#3d3d3d"}]}],night:[{elementType:"geometry",stylers:[{color:"#242f3e"}]},{elementType:"labels.text.fill",stylers:[{color:"#746855"}]},{elementType:"labels.text.stroke",stylers:[{color:"#242f3e"}]},{featureType:"administrative.locality",elementType:"labels.text.fill",stylers:[{color:"#d59563"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#d59563"}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#263c3f"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#6b9a76"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#38414e"}]},{featureType:"road",elementType:"geometry.stroke",stylers:[{color:"#212a37"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#9ca5b3"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#746855"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#1f2835"}]},{featureType:"road.highway",elementType:"labels.text.fill",stylers:[{color:"#f3d19c"}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#2f3948"}]},{featureType:"transit.station",elementType:"labels.text.fill",stylers:[{color:"#d59563"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#17263c"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#515c6d"}]},{featureType:"water",elementType:"labels.text.stroke",stylers:[{color:"#17263c"}]}],aubergine:[{elementType:"geometry",stylers:[{color:"#1d2c4d"}]},{elementType:"labels.text.fill",stylers:[{color:"#8ec3b9"}]},{elementType:"labels.text.stroke",stylers:[{color:"#1a3646"}]},{featureType:"administrative.country",elementType:"geometry.stroke",stylers:[{color:"#4b6878"}]},{featureType:"administrative.land_parcel",elementType:"labels.text.fill",stylers:[{color:"#64779e"}]},{featureType:"administrative.province",elementType:"geometry.stroke",stylers:[{color:"#4b6878"}]},{featureType:"landscape.man_made",elementType:"geometry.stroke",stylers:[{color:"#334e87"}]},{featureType:"landscape.natural",elementType:"geometry",stylers:[{color:"#023e58"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#283d6a"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#6f9ba5"}]},{featureType:"poi",elementType:"labels.text.stroke",stylers:[{color:"#1d2c4d"}]},{featureType:"poi.park",elementType:"geometry.fill",stylers:[{color:"#023e58"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#3C7680"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#304a7d"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#98a5be"}]},{featureType:"road",elementType:"labels.text.stroke",stylers:[{color:"#1d2c4d"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#2c6675"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#255763"}]},{featureType:"road.highway",elementType:"labels.text.fill",stylers:[{color:"#b0d5ce"}]},{featureType:"road.highway",elementType:"labels.text.stroke",stylers:[{color:"#023e58"}]},{featureType:"transit",elementType:"labels.text.fill",stylers:[{color:"#98a5be"}]},{featureType:"transit",elementType:"labels.text.stroke",stylers:[{color:"#1d2c4d"}]},{featureType:"transit.line",elementType:"geometry.fill",stylers:[{color:"#283d6a"}]},{featureType:"transit.station",elementType:"geometry",stylers:[{color:"#3a4762"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#0e1626"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#4e6d70"}]}]},Ie=[{label:Ye("None","digiblocks"),value:"none"},...Object.keys(ml).map(R=>({label:R.replace(/-/g," ").replace(/\b\w/g,p=>p.toUpperCase()),value:R}))],j=[{name:"options",title:Ye("Options","digiblocks"),icon:as.optionsIcon},{name:"style",title:Ye("Style","digiblocks"),icon:as.styleIcon},{name:"advanced",title:Ye("Advanced","digiblocks"),icon:as.advancedIcon}],Se=()=>{let R=window.digi.responsiveState.activeDevice,p=l&&l[R]?l[R]:R==="desktop"?400:R==="tablet"?350:300,re="";B&&B!=="none"&&(re=`
                border-style: ${B};
                border-color: ${A||"#e0e0e0"};
				${Kc(O,"border-width",R)}
				${Kc(Y,"border-radius",R)}
            `);let n="";V&&V.enable&&(n=`box-shadow: ${V.position==="inset"?"inset ":""}${V.horizontal}px ${V.vertical}px ${V.blur}px ${V.spread}px ${V.color};`);let g="";k&&k.enable&&(g=`box-shadow: ${k.position==="inset"?"inset ":""}${k.horizontal}px ${k.vertical}px ${k.blur}px ${k.spread}px ${k.color};`);let q="";return S&&S!=="none"&&ml[S]&&(q=ml[S].keyframes),`
            /* Google Map Block - ${o} */
            .${o} {
                height: ${p}px;
                width: 100%;
                overflow: hidden;
                ${re}
                ${n}
				transition: all .3s ease;
            }

            .${o}:hover {
                ${g}
            }
            
            /* Animation keyframes */
            ${q}
            
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
			${s.desktop?`
				@media (min-width: 992px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${s.tablet?`
				@media (min-width: 768px) and (max-width: 991px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${s.mobile?`
				@media (max-width: 767px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}
        `},Qe=()=>{let R=Array.isArray(u)?u.length:0,p=!!digiBlocksData.googleMapsMapId;return R>0&&!p?wp.element.createElement("div",{className:"components-notice is-warning",style:{margin:"0 0 16px 0"}},wp.element.createElement("div",{className:"components-notice__content"},wp.element.createElement("p",null,Ye("A Map ID is required to use markers with the Google Maps block.","digiblocks")),wp.element.createElement("p",null,Ye("Please configure a Map ID in the DigiBlocks settings before adding markers.","digiblocks")),wp.element.createElement($i,{isPrimary:!0,href:`${window.ajaxurl?window.ajaxurl.replace("admin-ajax.php",""):"/wp-admin/"}admin.php?page=digiblocks-settings`,target:"_blank",style:{marginTop:"10px"}},Ye("Go to Settings","digiblocks")))):wp.element.createElement(wp.element.Fragment,null,Array.isArray(u)&&u.length>0?wp.element.createElement("div",null,u.map((re,n)=>wp.element.createElement("div",{key:re.id||`marker-${n}`,className:"digiblocks-google-map-marker",style:{marginBottom:"16px",padding:"16px",backgroundColor:"#f0f0f0",borderRadius:"4px"}},wp.element.createElement("h3",{style:{margin:"0 0 10px 0"}},Ye("Marker","digiblocks")," #",n+1),wp.element.createElement(is,{label:Ye("Title","digiblocks"),value:re.title||"",onChange:g=>N(n,"title",g),placeholder:Ye("Enter marker title","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Yc,{label:Ye("Description","digiblocks"),value:re.description||"",onChange:g=>N(n,"description",g),placeholder:Ye("Enter marker description (will appear above marker)","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(is,{label:Ye("Address","digiblocks"),value:re.address||"",onChange:g=>{let q=[...u];q[n]={...q[n],address:g},e({markers:q})},onBlur:()=>{u[n]?.address&&ve.current&&F&&Te(u[n].address,F,n)},placeholder:Ye("Enter marker address","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement("div",{style:{marginTop:"10px",display:"flex",justifyContent:"flex-end"}},wp.element.createElement($i,{isDestructive:!0,onClick:()=>xe(n)},Ye("Remove Marker","digiblocks"))))),wp.element.createElement($i,{isPrimary:!0,onClick:be,style:{marginTop:"10px",width:"100%",justifyContent:"center"}},Ye("Add Marker","digiblocks"))):wp.element.createElement("div",null,wp.element.createElement("p",null,Ye("No markers added yet. Add your first marker!","digiblocks")),wp.element.createElement($i,{isPrimary:!0,onClick:be,style:{width:"100%",justifyContent:"center"}},Ye("Add Marker","digiblocks"))))},G=()=>{switch(J){case"options":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(ft,{tab:"options",name:"map-settings",title:Ye("Map Settings","digiblocks"),initialOpen:!0},wp.element.createElement(is,{label:Ye("Address","digiblocks"),value:r||"",onChange:R=>{e({address:R}),R&&ve.current&&F&&Te(R,F)},placeholder:Ye("Enter location address","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),Ce&&wp.element.createElement("div",{className:"components-notice is-error",style:{margin:"0 0 16px 0"}},wp.element.createElement("div",{className:"components-notice__content"},Ce)),wp.element.createElement($a,{label:Ye("Map Type","digiblocks"),value:x,options:qe,onChange:R=>e({mapType:R}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),(!u||u.length===0)&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement($a,{label:Ye("Map Style","digiblocks"),value:H,options:je,onChange:R=>e({mapStyle:R}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),H==="custom"&&wp.element.createElement(Yc,{label:Ye("Custom Map Style JSON","digiblocks"),help:Ye("Paste a valid Google Maps style JSON. You can create styles with the Google Maps Styling Wizard.","digiblocks"),value:T||"",onChange:R=>e({customMapStyle:R}),rows:6,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),u&&u.length>0&&wp.element.createElement("div",{className:"components-notice is-info",style:{margin:"0 0 16px 0"}},wp.element.createElement("div",{className:"components-notice__content"},Ye("Map Style options are not available when markers are present, as markers require a Map ID which overrides custom styling.","digiblocks"))),wp.element.createElement(Zc,{label:Ye("Zoom Level","digiblocks"),value:$,onChange:R=>e({zoom:R}),min:1,max:20,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(ft,{tab:"options",name:"marker-settings",title:Ye("Markers","digiblocks"),initialOpen:!1},Qe()),wp.element.createElement(ft,{tab:"options",name:"map-controls",title:Ye("Map Controls","digiblocks"),initialOpen:!1},wp.element.createElement(Bu,{id:`${o}-map-controls`,__nextHasNoMarginBottom:!0},wp.element.createElement(Dt,{label:Ye("Enable Zoom Control","digiblocks"),checked:D!==!1,onChange:R=>e({enableZoom:R}),__nextHasNoMarginBottom:!0}),wp.element.createElement(Dt,{label:Ye("Enable Mousewheel Zoom","digiblocks"),checked:y!==!1,onChange:R=>e({enableScroll:R}),__nextHasNoMarginBottom:!0}),wp.element.createElement(Dt,{label:Ye("Enable Fullscreen Control","digiblocks"),checked:v!==!1,onChange:R=>e({enableFullscreenControl:R}),__nextHasNoMarginBottom:!0}),wp.element.createElement(Dt,{label:Ye("Enable Street View Control","digiblocks"),checked:_!==!1,onChange:R=>e({enableStreetViewControl:R}),__nextHasNoMarginBottom:!0}),wp.element.createElement(Dt,{label:Ye("Enable Map Type Control","digiblocks"),checked:L!==!1,onChange:R=>e({enableMapTypeControl:R}),__nextHasNoMarginBottom:!0}))));case"style":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(ft,{tab:"style",name:"map-dimensions",title:Ye("Map Size","digiblocks"),initialOpen:!0},wp.element.createElement(ns,{label:Ye("Map Height","digiblocks")},wp.element.createElement(Zc,{value:l&&l[b]?l[b]:b==="desktop"?400:b==="tablet"?350:300,onChange:R=>{e({mapHeight:{...l,[b]:R}})},min:150,max:800,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}))),wp.element.createElement(ft,{tab:"style",name:"map-border",title:Ye("Border","digiblocks"),initialOpen:!1},wp.element.createElement($a,{label:Ye("Border Style","digiblocks"),value:B||"none",options:ze,onChange:R=>{R!=="none"&&(B==="none"||!B)&&((!O||Object.keys(O).length===0)&&e({borderWidth:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:1,right:1,bottom:1,left:1,unit:"px"},mobile:{top:1,right:1,bottom:1,left:1,unit:"px"}}}),(!Y||Object.keys(Y).length===0)&&e({borderRadius:{desktop:{top:0,right:0,bottom:0,left:0,unit:"px"},tablet:{top:0,right:0,bottom:0,left:0,unit:"px"},mobile:{top:0,right:0,bottom:0,left:0,unit:"px"}}})),e({borderStyle:R})},__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),B&&B!=="none"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Su,{title:Ye("Border Color","digiblocks"),enableAlpha:!0,colorSettings:[{value:A,onChange:R=>e({borderColor:R}),label:Ye("Border Color","digiblocks")}]}),wp.element.createElement(ns,{label:Ye("Border Width","digiblocks")},wp.element.createElement(Ac,{values:O&&O[b]?O[b]:{top:1,right:1,bottom:1,left:1,unit:"px"},onChange:R=>e({borderWidth:{...O,[b]:R}})})),wp.element.createElement(ns,{label:Ye("Border Radius","digiblocks")},wp.element.createElement(Ac,{values:Y&&Y[b]?Y[b]:{top:0,right:0,bottom:0,left:0,unit:"px"},onChange:R=>e({borderRadius:{...Y,[b]:R}}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]})))),wp.element.createElement(ft,{tab:"style",name:"box-shadow",title:Ye("Box Shadow","digiblocks"),initialOpen:!1},wp.element.createElement(Hu,{normalValue:V,hoverValue:k,onNormalChange:R=>e({boxShadow:R}),onHoverChange:R=>e({boxShadowHover:R})})));case"advanced":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(ft,{tab:"advanced",name:"animation",title:Ye("Animation","digiblocks"),initialOpen:!0},wp.element.createElement($a,{label:Ye("Animation Effect","digiblocks"),value:S,options:Ie,onChange:R=>e({animation:R}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),S&&S!=="none"&&wp.element.createElement("div",{style:{marginTop:"10px"}},wp.element.createElement($i,{variant:"secondary",isSecondary:!0,onClick:fe,style:{width:"100%"}},Ye("Preview Animation","digiblocks")))),wp.element.createElement(ft,{tab:"advanced",name:"visibility",title:Ye("Visibility","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control__help",style:{padding:"12px",backgroundColor:"#f0f6fc",border:"1px solid #c3ddfd",borderRadius:"4px",marginBottom:"16px"}},wp.element.createElement("strong",null,Ye("Editor Note:","digiblocks")),wp.element.createElement("br",null),Ye("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.","digiblocks")),wp.element.createElement(Dt,{label:Ye("Hide on Desktop","digiblocks"),checked:s.desktop,onChange:R=>e({visibility:{...s,desktop:R}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(Dt,{label:Ye("Hide on Tablet","digiblocks"),checked:s.tablet,onChange:R=>e({visibility:{...s,tablet:R}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(Dt,{label:Ye("Hide on Mobile","digiblocks"),checked:s.mobile,onChange:R=>e({visibility:{...s,mobile:R}}),__nextHasNoMarginBottom:!0})),wp.element.createElement(ft,{tab:"advanced",name:"additional",title:Ye("Additional","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control html-anchor-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"html-anchor"},Ye("HTML anchor","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"html-anchor",value:P||"",onChange:R=>e({anchor:R.target.value}),"aria-describedby":"html-anchor-help",autoCapitalize:"none",autoComplete:"off"})),wp.element.createElement("p",{id:"html-anchor-help",className:"components-base-control__help"},Ye(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`,"digiblocks")," ",wp.element.createElement("a",{className:"components-external-link",href:"https://wordpress.org/documentation/article/page-jumps/",target:"_blank",rel:"external noreferrer noopener"},wp.element.createElement("span",{className:"components-external-link__contents"},Ye("Learn more about anchors","digiblocks")),wp.element.createElement("span",{className:"components-external-link__icon","aria-label":"(opens in a new tab)"},"\u2197")))),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"additional-css-classes"},Ye("Additional CSS class(es)","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"additional-css-classes",value:oe||"",onChange:R=>e({customClasses:R.target.value}),"aria-describedby":"additional-css-classes-help",autoComplete:"off"})),wp.element.createElement("p",{id:"additional-css-classes-help",className:"components-base-control__help"},Ye("Separate multiple classes with spaces.","digiblocks")))));default:return null}},pe=Cu({className:`digiblocks-google-map ${o} ${S!=="none"?`animate-${S}`:""} ${oe||""}`,id:P||null});return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(wu,null,wp.element.createElement(Nu,{tabs:j,activeTab:J,onSelect:ce},G())),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:Se()}}),wp.element.createElement("div",{...pe},digiBlocksData.googleMapsApiKey?le?wp.element.createElement("div",{className:"digiblocks-google-map-loading",style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%"}},wp.element.createElement(_u,null),wp.element.createElement("span",{style:{marginLeft:"10px"}},Ye("Loading map...","digiblocks"))):wp.element.createElement("div",{ref:ne,className:"digiblocks-google-map-container",style:{width:"100%",height:"100%"}}):wp.element.createElement($u,{icon:"location-alt",label:Ye("Google Map","digiblocks"),instructions:Ye("You need to add your Google Maps API key in the DigiBlocks settings to use this block.","digiblocks")},wp.element.createElement($i,{isPrimary:!0,href:`${window.ajaxurl?window.ajaxurl.replace("admin-ajax.php",""):"/wp-admin/"}admin.php?page=digiblocks-settings`,target:"_blank"},Ye("Go to Settings","digiblocks")))))},ed=zu;var{useBlockProps:Mu}=window.wp.blockEditor,Du=({attributes:te})=>{let{id:e,anchor:K,customClasses:o,mapHeight:P,zoom:s,mapType:oe,mapStyle:l,customMapStyle:$,mapId:x,markers:H,address:T,animation:u,enableZoom:r,enableScroll:S,enableFullscreenControl:D,enableStreetViewControl:y,enableMapTypeControl:v}=te,_=["digiblocks-google-map",e,u!=="none"?`animate-${u}`:"",o||""].filter(Boolean).join(" "),L=Mu.save({className:_,id:K||null,"data-map-zoom":s||10,"data-map-type":oe||"roadmap","data-map-style":l||"default","data-custom-map-style":$||"","data-map-id":x||"","data-enable-zoom":r!==!1?"true":"false","data-enable-scroll":S!==!1?"true":"false","data-enable-fullscreen":D!==!1?"true":"false","data-enable-streetview":y!==!1?"true":"false","data-enable-maptype":v!==!1?"true":"false"});return wp.element.createElement("div",{...L},wp.element.createElement("div",{className:"digiblocks-google-map-container"}),H&&H.length>0&&wp.element.createElement("div",{className:"digiblocks-google-map-markers",style:{display:"none"}},H.map(B=>wp.element.createElement("div",{key:B.id,className:"digiblocks-google-map-marker","data-lat":B.latitude,"data-lng":B.longitude,"data-title":B.title||"","data-description":B.description||"","data-address":B.address||""}))),T&&wp.element.createElement("div",{className:"digiblocks-google-map-address",style:{display:"none"},"data-address":T}))},od=Du;var{__:_a}=window.wp.i18n,{registerBlockType:Pu}=window.wp.blocks,{getBlockActiveStatus:Ru}=window.wp.digiBlocks;Pu("digiblocks/google-map",{apiVersion:2,title:digiBlocksData.blocks["google-map"].title,category:"digiblocks",icon:{src:()=>{let{viewbox:te,path:e}=digiBlocksData.blocks["google-map"].icon;return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${te}`,className:"digiblocks-editor-icons"},wp.element.createElement("path",{d:e}))}},description:digiBlocksData.blocks["google-map"].description,keywords:[_a("map","digiblocks"),_a("google","digiblocks"),_a("location","digiblocks"),_a("marker","digiblocks")],supports:{inserter:!!Ru("google-map"),html:!1,className:!1,customClassName:!1,anchor:!1},attributes:{id:{type:"string",default:""},anchor:{type:"string",default:""},visibility:{type:"object",default:{desktop:!1,tablet:!1,mobile:!1}},customClasses:{type:"string",default:""},address:{type:"string",default:""},mapHeight:{type:"object",default:{desktop:400,tablet:350,mobile:300}},zoom:{type:"number",default:10},mapType:{type:"string",default:"roadmap"},mapStyle:{type:"string",default:"default"},customMapStyle:{type:"string",default:""},mapId:{type:"string",default:""},markers:{type:"array",default:[]},animation:{type:"string",default:"none"},enableZoom:{type:"boolean",default:!0},enableScroll:{type:"boolean",default:!0},enableFullscreenControl:{type:"boolean",default:!0},enableStreetViewControl:{type:"boolean",default:!0},enableMapTypeControl:{type:"boolean",default:!0},borderStyle:{type:"string",default:"none"},borderWidth:{type:"object",default:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderRadius:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderColor:{type:"string",default:"#e0e0e0"},boxShadow:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},boxShadowHover:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}}},example:{attributes:{address:"New York, NY",mapHeight:{desktop:300},zoom:12,mapType:"roadmap"}},edit:ed,save:od});var{__:Ge}=window.wp.i18n,{useBlockProps:Iu,RichText:Lu,InspectorControls:Ou,PanelColorSettings:hl,LinkControl:Uu,BlockControls:d0,AlignmentToolbar:g0}=window.wp.blockEditor,{SelectControl:td,RangeControl:Bi,ToggleControl:fl,Button:ju,__experimentalToggleGroupControl:id,__experimentalToggleGroupControlOption:kl,TabPanel:Vu,BaseControl:Fu}=window.wp.components,{useState:ss,useEffect:ld,useRef:Eu}=window.wp.element,{useBlockId:Wu,getDimensionCSS:Go,animations:vl,animationPreview:ad}=digi.utils,{tabIcons:rs}=digi.icons,{ResponsiveControl:Ti,ResponsiveButtonGroup:qu,DimensionControl:cs,TypographyControl:Gu,CustomTabPanel:Qu,TabPanelBody:st}=digi.components,Ju=({attributes:te,setAttributes:e,clientId:K})=>{let{id:o,anchor:P,visibility:s,customClasses:oe,content:l,headingTag:$,textColor:x,textHoverColor:H,backgroundColor:T,backgroundHoverColor:u,typography:r,align:S,padding:D,margin:y,animation:v,highlightText:_,highlightColor:L,highlightType:B,displaySeparator:O,separatorColor:Y,separatorSecondaryColor:A,separatorWidth:V,separatorHeight:k,separatorBorderRadius:b,separatorPosition:M,separatorStyle:le,separatorSpacing:Ve,linkEnabled:Ce,linkUrl:Z,linkOpenInNewTab:I,linkRel:ee,shadowEnabled:F,textShadow:Q}=te;Wu(o,K,e);let[X,se]=ss(window.digi.responsiveState.activeDevice),[ne,ve]=ss(!1);ld(()=>window.digi.responsiveState.subscribe(Se=>{se(Se)}),[]);let[J,ce]=ss(()=>{if(window.digi.uiState){let j=window.digi.uiState.getActiveTab(K);if(j)return j}return"options"}),Te=Eu(null);ld(()=>{if(v&&v!=="none"){let j=setTimeout(()=>{ad(o,v,vl,Te)},100);return()=>clearTimeout(j)}},[v]);let be=()=>{ad(o,v,vl,Te)},N=[{label:Ge("None","digiblocks"),value:"none"},...Object.keys(vl).map(j=>({label:j.replace(/-/g," ").replace(/\b\w/g,Se=>Se.toUpperCase()),value:j}))],xe=[{label:Ge("H1","digiblocks"),value:"h1"},{label:Ge("H2","digiblocks"),value:"h2"},{label:Ge("H3","digiblocks"),value:"h3"},{label:Ge("H4","digiblocks"),value:"h4"},{label:Ge("H5","digiblocks"),value:"h5"},{label:Ge("H6","digiblocks"),value:"h6"}],w=[{label:Ge("Background","digiblocks"),value:"background"},{label:Ge("Text Color","digiblocks"),value:"color"},{label:Ge("Underline","digiblocks"),value:"underline"}],ke=[{name:"options",title:Ge("Options","digiblocks"),icon:rs.optionsIcon},{name:"style",title:Ge("Style","digiblocks"),icon:rs.styleIcon},{name:"advanced",title:Ge("Advanced","digiblocks"),icon:rs.advancedIcon}],U=[{name:"normal",title:Ge("Normal","digiblocks"),className:"digiblocks-tab-1 normal"},{name:"hover",title:Ge("Hover","digiblocks"),className:"digiblocks-tab-2 hover"}],fe=()=>{let j=window.digi.responsiveState.activeDevice,Se="";r&&(r.fontFamily&&(Se+=`font-family: ${r.fontFamily};`),r.fontSize&&r.fontSize[j]&&(Se+=`font-size: ${r.fontSize[j]}${r.fontSizeUnit||"px"};`),r.fontWeight&&(Se+=`font-weight: ${r.fontWeight};`),r.fontStyle&&(Se+=`font-style: ${r.fontStyle};`),r.textTransform&&(Se+=`text-transform: ${r.textTransform};`),r.textDecoration&&(Se+=`text-decoration: ${r.textDecoration};`),r.lineHeight&&r.lineHeight[j]&&(Se+=`line-height: ${r.lineHeight[j]}${r.lineHeightUnit||"em"};`),r.letterSpacing&&r.letterSpacing[j]&&(Se+=`letter-spacing: ${r.letterSpacing[j]}${r.letterSpacingUnit||"px"};`));let Qe="";F&&Q&&(Qe=`text-shadow: ${Q.horizontal}px ${Q.vertical}px ${Q.blur}px ${Q.color};`);let G=`${Go(D,"padding",j)}`,pe=`${Go(y,"margin",j)}`,R="";v&&v!=="none"&&vl[v]&&(R=vl[v].keyframes);let p="";if(O&&Y){let g=V[j]||50,q=k[j]||3,d=Ve[j]||10,ie=M==="top"?"top: 0;":"bottom: 0;",C=S==="center"?"left: 50%; transform: translateX(-50%);":S==="right"?"right: 0;":"left: 0;";switch(le){case"line-solid":p=`
                        .${o}::before {
                            content: '';
                            position: absolute;
                            ${ie}
                            ${C}
                            width: ${g}px;
                            height: ${q}px;
                            background-color: ${Y};
							${Go(b,"border-radius",j)}
                            ${M==="top"?`margin-top: ${d}px;`:`margin-bottom: ${d}px;`}
                        }
                    `;break;case"line-gradient":p=`
                        .${o}::before {
                            content: '';
                            position: absolute;
                            ${ie}
                            ${C}
                            width: ${g}px;
                            height: ${q}px;
                            background: linear-gradient(to right, ${Y}, ${A||"#ffffff"}, ${Y});
							${Go(b,"border-radius",j)}
                            ${M==="top"?`margin-top: ${d}px;`:`margin-bottom: ${d}px;`}
                        }
                    `;break;case"line-double":p=`
                        .${o}::before {
                            content: '';
                            position: absolute;
                            ${ie}
                            ${C}
                            width: ${g}px;
                            height: ${q}px;
                            background-color: ${Y};
							${Go(b,"border-radius",j)}
                            ${M==="top"?`margin-top: ${d}px;`:`margin-bottom: ${d}px;`}
                        }
                        
                        .${o}::after {
                            content: '';
                            position: absolute;
                            ${ie}
                            ${C}
                            width: ${g}px;
                            height: ${q}px;
                            background-color: ${A||Y};
							${Go(b,"border-radius",j)}
                            ${M==="top"?`margin-top: ${d+q+3}px;`:`margin-bottom: ${d+q+3}px;`}
                        }
                    `;break;case"line-dashed":p=`
                        .${o}::before {
                            content: '';
                            position: absolute;
                            ${ie}
                            ${C}
                            width: ${g}px;
                            height: ${q}px;
                            background-image: repeating-linear-gradient(
                                to right, 
                                ${Y}, 
                                ${Y} 8px, 
                                transparent 8px, 
                                transparent 12px
                            );
							${Go(b,"border-radius",j)}
                            ${M==="top"?`margin-top: ${d}px;`:`margin-bottom: ${d}px;`}
                        }
                    `;break;case"line-dotted":p=`
                        .${o}::before {
                            content: '';
                            position: absolute;
                            ${ie}
                            ${C}
                            width: ${g}px;
                            height: ${q}px;
                            background-image: repeating-linear-gradient(
                                to right, 
                                ${Y}, 
                                ${Y} 3px, 
                                transparent 3px, 
                                transparent 6px
                            );
							${Go(b,"border-radius",j)}
                            ${M==="top"?`margin-top: ${d}px;`:`margin-bottom: ${d}px;`}
                        }
                    `;break;case"wave":p=`
                        .${o}::before {
                            content: '';
                            position: absolute;
                            ${ie}
                            ${C}
                            width: ${g}px;
                            height: ${q*4}px;
                            background-image: repeating-linear-gradient(
                                45deg, 
                                ${Y}, 
                                ${Y} 5px, 
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
                            ${M==="top"?`margin-top: ${d}px;`:`margin-bottom: ${d}px;`}
                        }
                    `;break;case"dots":p=`
                        .${o}::before {
                            content: '';
                            position: absolute;
                            ${ie}
                            ${C}
                            width: ${g}px;
                            height: ${q*3}px;
                            background-image: radial-gradient(
                                circle, 
                                ${Y} 25%, 
                                transparent 25%
                            );
                            background-size: ${q*3}px ${q*3}px;
                            ${M==="top"?`margin-top: ${d}px;`:`margin-bottom: ${d}px;`}
                        }
                    `;break;case"glow":p=`
                        .${o}::before {
                            content: '';
                            position: absolute;
                            ${ie}
                            ${C}
                            width: ${g}px;
                            height: ${q}px;
                            background-color: ${Y};
                            box-shadow: 0 0 ${q*3}px ${q}px ${Y};
							${Go(b,"border-radius",j)}
                            ${M==="top"?`margin-top: ${d}px;`:`margin-bottom: ${d}px;`}
                        }
                    `;break;case"faded":p=`
                        .${o}::before {
                            content: '';
                            position: absolute;
                            ${ie}
                            ${C}
                            width: ${g}px;
                            height: ${q}px;
                            background: linear-gradient(to right, transparent, ${Y}, transparent);
							${Go(b,"border-radius",j)}
                            ${M==="top"?`margin-top: ${d}px;`:`margin-bottom: ${d}px;`}
                        }
                    `;break;default:p=`
                        .${o}::before {
                            content: '';
                            position: absolute;
                            ${ie}
                            ${C}
                            width: ${g}px;
                            height: ${q}px;
                            background-color: ${Y};
							${Go(b,"border-radius",j)}
                            ${M==="top"?`margin-top: ${d}px;`:`margin-bottom: ${d}px;`}
                        }
                    `}}let re="";_&&_.trim()!==""&&(B==="background"?re=`
                    .${o} .digiblocks-highlight {
                        background-color: ${L};
                        padding: 0 5px;
                        border-radius: 3px;
                    }
                `:B==="color"?re=`
                    .${o} .digiblocks-highlight {
                        color: ${L};
                    }
                `:B==="underline"&&(re=`
                    .${o} .digiblocks-highlight {
                        text-decoration: underline;
                        text-decoration-color: ${L};
                        text-decoration-thickness: 2px;
                        text-underline-offset: 2px;
                    }
                `));let n="";return Ce&&(n=`
                .${o} {
                    cursor: pointer;
                    text-decoration: none;
                    transition: color 0.3s ease, background-color 0.3s ease;
                }
                
                .${o}:hover {
                    ${H?`color: ${H};`:""}
                    ${u?`background-color: ${u};`:""}
                }
            `),`
            /* Main heading styles */
            .${o} {
                display: flex;
                flex-direction: column;
                position: relative;
                text-align: ${S[j]};
                ${T?`background-color: ${T};`:""}
                ${G}
                ${pe}
                transition: color 0.3s ease, background-color 0.3s ease;
            }

            .${o} .digiblocks-heading-text {
                ${Se}
                ${Qe}
                color: ${x||"inherit"};
                margin: 0;
            }
            
            /* Hover effects */
            .${o}:hover {
                ${u?`background-color: ${u};`:""}
            }

            .${o}:hover .digiblocks-heading-text {
                ${H?`color: ${H};`:""}
            }
            
            /* Animation keyframes */
            ${R}
            
            /* Separator styles */
            ${p}
            
            /* Highlight styles */
            ${re}
            
            /* Link styles */
            ${n}

			/* Visibility Controls */
			${s.desktop?`
				@media (min-width: 992px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${s.tablet?`
				@media (min-width: 768px) and (max-width: 991px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${s.mobile?`
				@media (max-width: 767px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}
        `},ze=()=>{if(!_||_.trim()==="")return l;let j=Qe=>Qe.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");return l.split(new RegExp(`(${j(_)})`,"g")).map((Qe,G)=>Qe===_?`<span class="digiblocks-highlight">${Qe}</span>`:Qe).join("")},qe=({style:j,color:Se,secondaryColor:Qe,isSelected:G,onClick:pe})=>{let R={container:{display:"inline-block",width:"60px",height:"40px",margin:"5px",padding:"5px",border:`1px solid ${G?"#007cba":"#ddd"}`,backgroundColor:G?"rgba(0,124,186,0.1)":"white",borderRadius:"4px",cursor:"pointer",position:"relative"},preview:{position:"absolute",bottom:"5px",left:"5px",right:"5px",height:"5px",display:"flex",justifyContent:"center",alignItems:"center"}},p=null;switch(j){case"line-solid":p=wp.element.createElement("div",{style:{width:"100%",height:"3px",backgroundColor:Se,borderRadius:"1px"}});break;case"line-gradient":p=wp.element.createElement("div",{style:{width:"100%",height:"3px",background:`linear-gradient(to right, ${Se}, ${Qe||"#ffffff"}, ${Se})`,borderRadius:"1px"}});break;case"line-double":p=wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{style:{width:"100%",height:"2px",backgroundColor:Se,borderRadius:"1px",marginBottom:"2px"}}),wp.element.createElement("div",{style:{width:"100%",height:"2px",backgroundColor:Qe||Se,borderRadius:"1px"}}));break;case"line-dashed":p=wp.element.createElement("div",{style:{width:"100%",height:"3px",backgroundImage:`repeating-linear-gradient(to right, ${Se}, ${Se} 6px, transparent 6px, transparent 10px)`,borderRadius:"1px"}});break;case"line-dotted":p=wp.element.createElement("div",{style:{width:"100%",height:"3px",backgroundImage:`repeating-linear-gradient(to right, ${Se}, ${Se} 2px, transparent 2px, transparent 4px)`,borderRadius:"1px"}});break;case"wave":p=wp.element.createElement("div",{style:{width:"100%",height:"3px",backgroundImage:`repeating-linear-gradient(45deg, ${Se}, ${Se} 2px, transparent 2px, transparent 6px)`,borderRadius:"1px"}});break;case"dots":p=wp.element.createElement("div",{style:{width:"100%",height:"5px",display:"flex",justifyContent:"space-between"}},[...Array(5)].map((re,n)=>wp.element.createElement("div",{key:n,style:{width:"4px",height:"4px",borderRadius:"50%",backgroundColor:Se}})));break;case"glow":p=wp.element.createElement("div",{style:{width:"50%",height:"3px",backgroundColor:Se,boxShadow:`0 0 5px 1px ${Se}`,borderRadius:"1px"}});break;case"faded":p=wp.element.createElement("div",{style:{width:"100%",height:"3px",background:`linear-gradient(to right, transparent, ${Se}, transparent)`,borderRadius:"1px"}});break;default:p=wp.element.createElement("div",{style:{width:"100%",height:"3px",backgroundColor:Se,borderRadius:"1px"}})}return wp.element.createElement("div",{style:R.container,onClick:pe},wp.element.createElement("div",{style:{textAlign:"center",fontSize:"8px",marginBottom:"5px"}},j.replace("line-","").charAt(0).toUpperCase()+j.replace("line-","").slice(1)),wp.element.createElement("div",{style:R.preview},p))},je=()=>{let j=[{label:Ge("Solid Line","digiblocks"),value:"line-solid"},{label:Ge("Gradient Line","digiblocks"),value:"line-gradient"},{label:Ge("Double Line","digiblocks"),value:"line-double"},{label:Ge("Dashed Line","digiblocks"),value:"line-dashed"},{label:Ge("Dotted Line","digiblocks"),value:"line-dotted"},{label:Ge("Wave","digiblocks"),value:"wave"},{label:Ge("Dot Pattern","digiblocks"),value:"dots"},{label:Ge("Glow","digiblocks"),value:"glow"},{label:Ge("Faded Edges","digiblocks"),value:"faded"}];return wp.element.createElement("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px",justifyContent:"center",margin:"0 -5px",maxHeight:"200px",overflow:"auto",padding:"4px 0",border:"1px solid #e0e0e0",borderRadius:"4px",backgroundColor:"#f9f9f9"}},j.map(Qe=>wp.element.createElement(qe,{key:Qe.value,style:Qe.value,color:Y,secondaryColor:A,isSelected:le===Qe.value,onClick:()=>e({separatorStyle:Qe.value})})))},Fe=()=>{switch(J){case"options":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(st,{tab:"options",name:"heading-settings",title:Ge("Heading Settings","digiblocks"),initialOpen:!0},wp.element.createElement(td,{label:Ge("Heading Tags","digiblocks"),value:$,options:xe,onChange:j=>e({headingTag:j}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(qu,{label:Ge("Alignment","digiblocks"),value:S,onChange:j=>e({align:j}),options:[{label:Ge("Left","digiblocks"),value:"left"},{label:Ge("Center","digiblocks"),value:"center"},{label:Ge("Right","digiblocks"),value:"right"}]}),Ce?wp.element.createElement(Uu,{key:"link-control",value:{url:Z,opensInNewTab:I,rel:ee},settings:[{id:"opensInNewTab",title:Ge("Open in new tab","digiblocks")},{id:"rel",title:Ge("Add noopener noreferrer","digiblocks")}],onChange:j=>{e({linkUrl:j.url,linkOpenInNewTab:j.opensInNewTab,linkRel:j.rel})},onRemove:()=>{e({linkEnabled:!1,linkUrl:"",linkOpenInNewTab:!1,linkRel:""})},suggestionsQuery:{type:"post",subtype:"any"},forceIsEditingLink:!Z}):wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("button",{className:"components-button width-full is-primary",onClick:()=>e({linkEnabled:!0})},Ge("Add Link","digiblocks"))))),wp.element.createElement(st,{tab:"options",name:"separator",title:Ge("Separator","digiblocks"),initialOpen:!1},wp.element.createElement(fl,{label:Ge("Display Separator","digiblocks"),checked:O,onChange:j=>e({displaySeparator:j}),__nextHasNoMarginBottom:!0}),O&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Fu,{label:Ge("Separator Style","digiblocks"),className:"digiblocks-separator-style-selector",__nextHasNoMarginBottom:!0},je()),wp.element.createElement(id,{label:Ge("Position","digiblocks"),value:M,onChange:j=>e({separatorPosition:j}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(kl,{value:"bottom",label:Ge("Bottom","digiblocks")}),wp.element.createElement(kl,{value:"top",label:Ge("Top","digiblocks")})),wp.element.createElement(hl,{title:Ge("Separator Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:Y,onChange:j=>e({separatorColor:j}),label:Ge("Primary Color","digiblocks")},...le==="line-gradient"||le==="line-double"?[{value:A,onChange:j=>e({separatorSecondaryColor:j}),label:Ge("Secondary Color","digiblocks")}]:[]]}),wp.element.createElement(Ti,{label:Ge("Width","digiblocks")},wp.element.createElement(Bi,{value:V[X],onChange:j=>e({separatorWidth:{...V,[X]:j}}),min:10,max:300,step:1,__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0})),wp.element.createElement(Ti,{label:Ge("Height","digiblocks")},wp.element.createElement(Bi,{value:k[X],onChange:j=>e({separatorHeight:{...k,[X]:j}}),min:1,max:20,step:1,__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0})),wp.element.createElement(Ti,{label:Ge("Spacing","digiblocks")},wp.element.createElement(Bi,{value:Ve[X],onChange:j=>e({separatorSpacing:{...Ve,[X]:j}}),min:0,max:50,step:1,__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0})),["line-solid","line-gradient","line-double","line-dashed","line-dotted","glow","faded"].includes(le)&&wp.element.createElement(Ti,{label:Ge("Border Radius","digiblocks")},wp.element.createElement(cs,{values:b&&b[X]?b[X]:{top:0,right:0,bottom:0,left:0,unit:"px"},onChange:j=>e({separatorBorderRadius:{...b,[X]:j}}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]})))),wp.element.createElement(st,{tab:"options",name:"text-highlight",title:Ge("Text Highlight","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"highlight-text"},Ge("Text to Highlight","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"highlight-text",value:_||"",onChange:j=>e({highlightText:j.target.value}),placeholder:Ge("Enter text to highlight","digiblocks")})),wp.element.createElement("p",{className:"components-base-control__help"},Ge("The text you enter here will be highlighted in your heading.","digiblocks"))),_&&_.trim()!==""&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(id,{label:Ge("Highlight Type","digiblocks"),value:B,onChange:j=>e({highlightType:j}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(kl,{value:"background",label:Ge("Background","digiblocks")}),wp.element.createElement(kl,{value:"color",label:Ge("Text","digiblocks")}),wp.element.createElement(kl,{value:"underline",label:Ge("Underline","digiblocks")})),wp.element.createElement(hl,{title:Ge("Highlight Color","digiblocks"),initialOpen:!0,colorSettings:[{value:L,onChange:j=>e({highlightColor:j}),label:Ge("Color","digiblocks")}]}))));case"style":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(st,{tab:"style",name:"colors",title:Ge("Colors","digiblocks"),initialOpen:!0},wp.element.createElement(Vu,{className:"digiblocks-control-tabs",activeClass:"active-tab",tabs:U},j=>j.name==="normal"?wp.element.createElement(hl,{title:Ge("Color Settings","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:x,onChange:Se=>e({textColor:Se}),label:Ge("Text Color","digiblocks")},{value:T,onChange:Se=>e({backgroundColor:Se}),label:Ge("Background Color","digiblocks")}]}):wp.element.createElement(hl,{title:Ge("Hover Color Settings","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:H,onChange:Se=>e({textHoverColor:Se}),label:Ge("Text Hover Color","digiblocks")},{value:u,onChange:Se=>e({backgroundHoverColor:Se}),label:Ge("Background Hover Color","digiblocks")}]}))),wp.element.createElement(st,{tab:"style",name:"typo",title:Ge("Typography","digiblocks"),initialOpen:!1},wp.element.createElement(Gu,{label:Ge("Typography Settings","digiblocks"),value:r,onChange:j=>e({typography:j}),defaults:{fontSize:{desktop:32,tablet:28,mobile:24},fontSizeUnit:"px",lineHeight:{desktop:1.2,tablet:1.2,mobile:1.2},lineHeightUnit:"em"}})),wp.element.createElement(st,{tab:"style",name:"text-shadow",title:Ge("Text Shadow","digiblocks"),initialOpen:!1},wp.element.createElement(fl,{label:Ge("Enable Text Shadow","digiblocks"),checked:F,onChange:j=>e({shadowEnabled:j}),__nextHasNoMarginBottom:!0}),F&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(hl,{title:Ge("Shadow Color","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:Q.color,onChange:j=>e({textShadow:{...Q,color:j}}),label:Ge("Color","digiblocks")}]}),wp.element.createElement(Bi,{label:Ge("Horizontal Offset","digiblocks"),value:Q.horizontal,onChange:j=>e({textShadow:{...Q,horizontal:j}}),min:-20,max:20,step:1,__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0}),wp.element.createElement(Bi,{label:Ge("Vertical Offset","digiblocks"),value:Q.vertical,onChange:j=>e({textShadow:{...Q,vertical:j}}),min:-20,max:20,step:1,__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0}),wp.element.createElement(Bi,{label:Ge("Blur Radius","digiblocks"),value:Q.blur,onChange:j=>e({textShadow:{...Q,blur:j}}),min:0,max:20,step:1,__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0}))),wp.element.createElement(st,{tab:"style",name:"spacing",title:Ge("Spacing","digiblocks"),initialOpen:!1},wp.element.createElement(Ti,{label:Ge("Padding","digiblocks")},wp.element.createElement(cs,{values:D[X],onChange:j=>e({padding:{...D,[X]:j}})})),wp.element.createElement(Ti,{label:Ge("Margin","digiblocks")},wp.element.createElement(cs,{values:y[X],onChange:j=>e({margin:{...y,[X]:j}})}))));case"advanced":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(st,{tab:"advanced",name:"animation",title:Ge("Animation","digiblocks"),initialOpen:!0},wp.element.createElement(td,{label:Ge("Animation Effect","digiblocks"),value:v,options:N,onChange:j=>e({animation:j}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),v&&v!=="none"&&wp.element.createElement("div",{style:{marginTop:"10px"}},wp.element.createElement(ju,{variant:"secondary",isSecondary:!0,onClick:be,style:{width:"100%"}},Ge("Preview Animation","digiblocks")))),wp.element.createElement(st,{tab:"advanced",name:"visibility",title:Ge("Visibility","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control__help",style:{padding:"12px",backgroundColor:"#f0f6fc",border:"1px solid #c3ddfd",borderRadius:"4px",marginBottom:"16px"}},wp.element.createElement("strong",null,Ge("Editor Note:","digiblocks")),wp.element.createElement("br",null),Ge("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.","digiblocks")),wp.element.createElement(fl,{label:Ge("Hide on Desktop","digiblocks"),checked:s.desktop,onChange:j=>e({visibility:{...s,desktop:j}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(fl,{label:Ge("Hide on Tablet","digiblocks"),checked:s.tablet,onChange:j=>e({visibility:{...s,tablet:j}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(fl,{label:Ge("Hide on Mobile","digiblocks"),checked:s.mobile,onChange:j=>e({visibility:{...s,mobile:j}}),__nextHasNoMarginBottom:!0})),wp.element.createElement(st,{tab:"advanced",name:"additional",title:Ge("Additional","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control html-anchor-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"html-anchor"},Ge("HTML anchor","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"html-anchor",value:P||"",onChange:j=>e({anchor:j.target.value}),"aria-describedby":"html-anchor-help",autoCapitalize:"none",autoComplete:"off"})),wp.element.createElement("p",{id:"html-anchor-help",className:"components-base-control__help"},Ge(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`,"digiblocks")," ",wp.element.createElement("a",{className:"components-external-link",href:"https://wordpress.org/documentation/article/page-jumps/",target:"_blank",rel:"external noreferrer noopener"},wp.element.createElement("span",{className:"components-external-link__contents"},Ge("Learn more about anchors","digiblocks")),wp.element.createElement("span",{className:"components-external-link__icon","aria-label":"(opens in a new tab)"},"\u2197")))),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"additional-css-classes"},Ge("Additional CSS class(es)","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"additional-css-classes",value:oe||"",onChange:j=>e({customClasses:j.target.value}),"aria-describedby":"additional-css-classes-help",autoComplete:"off"})),wp.element.createElement("p",{id:"additional-css-classes-help",className:"components-base-control__help"},Ge("Separate multiple classes with spaces.","digiblocks")))));default:return null}},Ie=Iu({className:`digiblocks-heading ${o} ${oe||""}`,id:P||null});return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Ou,null,wp.element.createElement(Qu,{tabs:ke,activeTab:J,onSelect:ce},Fe())),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:fe()}}),wp.element.createElement("div",{...Ie},wp.element.createElement(Lu,{tagName:$,className:"digiblocks-heading-text",value:l,onChange:j=>e({content:j}),placeholder:Ge("Add Your Heading","digiblocks"),allowedFormats:["core/bold","core/italic"]})))},nd=Ju;var{useBlockProps:b0,RichText:Yu}=window.wp.blockEditor,Zu=({attributes:te})=>{let{id:e,anchor:K,customClasses:o,content:P,headingTag:s,align:oe,animation:l,highlightText:$,highlightType:x,displaySeparator:H,separatorStyle:T,linkEnabled:u,linkUrl:r,linkOpenInNewTab:S,linkRel:D}=te,v={className:["digiblocks-heading",e,`align-${oe}`,l!=="none"?`animate-${l}`:"",H?`has-separator separator-${T}`:"",o||""].filter(Boolean).join(" "),id:K||null},_=()=>{if(!$||$.trim()==="")return P;let O=A=>A.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");return P.split(new RegExp(`(${O($)})`,"g")).map((A,V)=>A===$?`<span class="digiblocks-highlight">${A}</span>`:A).join("")},L=s,B=$&&$.trim()!==""?wp.element.createElement("span",{dangerouslySetInnerHTML:{__html:_()}}):wp.element.createElement(Yu.Content,{value:P});return u&&r?wp.element.createElement("a",{href:r,target:S?"_blank":"_self",rel:S?"noopener noreferrer":void 0,...v},wp.element.createElement(L,{className:"digiblocks-heading-text"},B)):wp.element.createElement("div",{...v},wp.element.createElement(L,{className:"digiblocks-heading-text"},B))},sd=Zu;var{__:xl}=window.wp.i18n,{registerBlockType:Ku}=window.wp.blocks,{getBlockActiveStatus:Xu}=window.wp.digiBlocks;Ku("digiblocks/heading",{apiVersion:2,title:digiBlocksData.blocks.heading.title,category:"digiblocks",icon:{src:()=>{let{viewbox:te,path:e}=digiBlocksData.blocks.heading.icon;return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${te}`,className:"digiblocks-editor-icons"},wp.element.createElement("path",{d:e}))}},description:digiBlocksData.blocks.heading.description,keywords:[xl("heading","digiblocks"),xl("title","digiblocks"),xl("header","digiblocks")],supports:{inserter:!!Xu("heading"),html:!1,className:!1,customClassName:!1,anchor:!1},attributes:{id:{type:"string",default:""},anchor:{type:"string",default:""},visibility:{type:"object",default:{desktop:!1,tablet:!1,mobile:!1}},customClasses:{type:"string",default:""},content:{type:"string",default:xl("Add Your Heading","digiblocks")},headingTag:{type:"string",default:"h2"},textColor:{type:"string",default:"#333333"},textHoverColor:{type:"string",default:""},backgroundColor:{type:"string",default:""},backgroundHoverColor:{type:"string",default:""},typography:{type:"object",default:{fontFamily:"",fontSize:{desktop:32,tablet:28,mobile:24},fontSizeUnit:"px",fontWeight:"600",fontStyle:"normal",textTransform:"none",textDecoration:"none",lineHeight:{desktop:1.2,tablet:1.2,mobile:1.2},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}},align:{type:"object",default:{desktop:"left",tablet:"left",mobile:"left"}},padding:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},margin:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},animation:{type:"string",default:"none"},highlightText:{type:"string",default:""},highlightColor:{type:"string",default:"#ffde59"},highlightType:{type:"string",default:"background"},displaySeparator:{type:"boolean",default:!1},separatorColor:{type:"string",default:"#1e73be"},separatorSecondaryColor:{type:"string",default:"#e0e0e0"},separatorWidth:{type:"object",default:{desktop:50,tablet:40,mobile:30}},separatorHeight:{type:"object",default:{desktop:3,tablet:2,mobile:2}},separatorPosition:{type:"string",default:"bottom"},separatorStyle:{type:"string",default:"line-solid"},separatorSpacing:{type:"object",default:{desktop:10,tablet:8,mobile:6}},separatorBorderRadius:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},linkEnabled:{type:"boolean",default:!1},linkUrl:{type:"string",default:""},linkOpenInNewTab:{type:"boolean",default:!1},linkRel:{type:"string",default:""},shadowEnabled:{type:"boolean",default:!1},textShadow:{type:"object",default:{horizontal:2,vertical:2,blur:3,color:"rgba(0,0,0,0.3)"}}},example:{attributes:{content:xl("Beautiful Heading","digiblocks"),level:2,textColor:"#333333",typography:{fontSize:{desktop:32},fontWeight:"600",lineHeight:{desktop:1.2}},displaySeparator:!0,separatorStyle:"line-gradient",separatorColor:"#1e73be"}},edit:nd,save:sd});var{__:We}=window.wp.i18n,{useBlockProps:Au,InspectorControls:em,PanelColorSettings:Ni,LinkControl:om}=window.wp.blockEditor,{ToggleControl:ds,SelectControl:Ba,RangeControl:rd,TabPanel:cd,Spinner:tm,Button:im,__experimentalToggleGroupControl:gs,__experimentalToggleGroupControlOption:Hi}=window.wp.components,{useState:Ta,useEffect:Na,useRef:lm}=window.wp.element,{useBlockId:am,getDimensionCSS:zi,animations:ps,animationPreview:dd}=digi.utils,{tabIcons:bs}=digi.icons,{ResponsiveControl:ti,ResponsiveButtonGroup:nm,DimensionControl:Mi,BoxShadowControl:sm,CustomTabPanel:rm,TabPanelBody:Di}=digi.components,cm=({attributes:te,setAttributes:e,clientId:K})=>{let{id:o,anchor:P,visibility:s,customClasses:oe,iconSource:l,customSvg:$,iconValue:x,iconSize:H,iconColor:T,iconBackgroundColor:u,iconBorderStyle:r,iconBorderWidth:S,iconBorderRadius:D,iconBorderColor:y,iconPadding:v,iconMargin:_,iconHoverColor:L,iconHoverBackgroundColor:B,iconHoverBorderColor:O,backgroundColor:Y,backgroundHoverColor:A,align:V,animation:k,boxShadow:b,boxShadowHover:M,borderStyle:le,borderWidth:Ve,borderRadius:Ce,borderColor:Z,hoverEffect:I,linkEnabled:ee,linkUrl:F,linkOpenInNewTab:Q,linkRel:X,rotateIcon:se,flipHorizontal:ne,flipVertical:ve}=te;am(o,K,e);let[J,ce]=Ta(window.digi.responsiveState.activeDevice),[Te,be]=Ta(!1);Na(()=>window.digi.responsiveState.subscribe(g=>{ce(g)}),[]);let[N,xe]=Ta(()=>{if(window.digi.uiState){let n=window.digi.uiState.getActiveTab(K);if(n)return n}return"options"});Na(()=>{_||e({iconMargin:{desktop:{top:0,right:0,bottom:0,left:0,unit:"px"},tablet:{top:0,right:0,bottom:0,left:0,unit:"px"},mobile:{top:0,right:0,bottom:0,left:0,unit:"px"}}})},[_,e]);let[w,ke]=Ta(!1);Na(()=>{let n=()=>window.digi&&window.digi.components&&window.digi.components.FontAwesomeControl?(ke(!0),!0):!1;if(!n()){let g=setTimeout(()=>{n()&&clearTimeout(g)},500);return()=>clearTimeout(g)}},[]);let U=n=>{e({iconValue:n})},fe=lm(null);Na(()=>{if(k&&k!=="none"){let n=setTimeout(()=>{dd(o,k,ps,fe)},100);return()=>clearTimeout(n)}},[k]);let ze=()=>{dd(o,k,ps,fe)},qe=[{label:We("Default","digiblocks"),value:"default"},{label:We("None","digiblocks"),value:"none"},{label:We("Solid","digiblocks"),value:"solid"},{label:We("Dotted","digiblocks"),value:"dotted"},{label:We("Dashed","digiblocks"),value:"dashed"},{label:We("Double","digiblocks"),value:"double"},{label:We("Groove","digiblocks"),value:"groove"},{label:We("Inset","digiblocks"),value:"inset"},{label:We("Outset","digiblocks"),value:"outset"},{label:We("Ridge","digiblocks"),value:"ridge"}],je=[{label:We("None","digiblocks"),value:"none"},{label:We("Lift","digiblocks"),value:"lift"},{label:We("Scale","digiblocks"),value:"scale"},{label:We("Glow","digiblocks"),value:"glow"},{label:We("Spin","digiblocks"),value:"spin"},{label:We("Pulse","digiblocks"),value:"pulse"},{label:We("Shake","digiblocks"),value:"shake"}],Fe=[{label:We("None","digiblocks"),value:"none"},...Object.keys(ps).map(n=>({label:n.replace(/-/g," ").replace(/\b\w/g,g=>g.toUpperCase()),value:n}))],Ie=[{name:"options",title:We("Options","digiblocks"),icon:bs.optionsIcon},{name:"style",title:We("Style","digiblocks"),icon:bs.styleIcon},{name:"advanced",title:We("Advanced","digiblocks"),icon:bs.advancedIcon}],j=[{name:"normal",title:We("Normal","digiblocks"),className:"digiblocks-tab-1 normal"},{name:"hover",title:We("Hover","digiblocks"),className:"digiblocks-tab-2 hover"}],Se=()=>{let n=window.digi.responsiveState.activeDevice,g="";le&&le!=="default"&&le!=="none"&&(g+=`
                border-style: ${le};
                border-color: ${Z||"#e0e0e0"};
				${zi(Ve,"border-width",n)}
				${zi(Ce,"border-radius",n)}
            `);let q="";b&&b.enable&&(q=`box-shadow: ${b.position==="inset"?"inset ":""}${b.horizontal}px ${b.vertical}px ${b.blur}px ${b.spread}px ${b.color};`);let d="",ie="",C="";if(x&&x.svg){u&&(d+=`background-color: ${u};`),r&&r!=="default"&&r!=="none"&&(d+=`
                    border-style: ${r};
                    border-color: ${y||"#e0e0e0"};
					${zi(S,"border-width",n)}
					${zi(D,"border-radius",n)}
                `),v&&v[n]&&(d+=`${zi(v,"padding",n)}`),L&&(ie+=`fill: ${L} !important; color: ${L} !important;`),B&&(ie+=`background-color: ${B};`),O&&(ie+=`border-color: ${O};`);let ge=[];se&&ge.push(`rotate(${se}deg)`),ne&&ge.push("scaleX(-1)"),ve&&ge.push("scaleY(-1)"),ge.length>0&&(C=`transform: ${ge.join(" ")};`)}let h="";if(M&&M.enable){let ge=M.position==="inset"?"inset ":"";h+=`box-shadow: ${ge}${M.horizontal}px ${M.vertical}px ${M.blur}px ${M.spread}px ${M.color};`}I==="lift"?h+="transform: translateY(-10px);":I==="scale"?h+="transform: scale(1.05);":I==="glow"?h+="filter: brightness(1.1);":I==="spin"?h+="animation: digiblocks-icon-spin 2s linear infinite;":I==="pulse"?h+="animation: digiblocks-icon-pulse 1.5s ease-in-out infinite;":I==="shake"&&(h+="animation: digiblocks-icon-shake 0.5s ease-in-out infinite;");let Be="";ee&&(Be=`
                cursor: pointer;
                text-decoration: none;
            `);let a="";return _&&_[n]&&(a=`${zi(_,"margin",n)}`),`
            /* Icon Block - ${o} */
            .${o} {
                display: flex;
				justify-content: ${V[n]};
                align-items: center;
                background-color: ${Y||"transparent"};
                ${q}
                ${g}
                transition: all 0.3s ease;
                ${ee?Be:""}
                ${a}
            }
            
            /* Hover effects */
            .${o}:hover {
                ${A?`background-color: ${A};`:""}
                ${h}
            }
            
            /* Icon styles */
            .${o} .digiblocks-icon {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                ${d}
                transition: all 0.3s ease;
            }
            
            .${o} .digiblocks-icon span {
                display: flex;
                ${C}
            }
            
            .${o} .digiblocks-icon svg {
                width: ${H[n]}px;
                height: auto;
                fill: ${T||"inherit"};
                transition: all 0.3s ease;
            }
            
            /* Icon hover styles */
            .${o}:hover .digiblocks-icon {
                ${ie}
            }
            
            .${o}:hover .digiblocks-icon svg {
                ${L?`fill: ${L};`:""}
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
			${s.desktop?`
				@media (min-width: 992px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${s.tablet?`
				@media (min-width: 768px) and (max-width: 991px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${s.mobile?`
				@media (max-width: 767px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}
        `},Qe=w?window.digi.components.FontAwesomeControl:null,G=()=>l==="library"&&x&&x.svg&&x.svg.trim()!==""?wp.element.createElement("div",{className:"digiblocks-icon"},wp.element.createElement("span",{dangerouslySetInnerHTML:{__html:x.svg}})):l==="custom"&&$&&$.trim()!==""?wp.element.createElement("div",{className:"digiblocks-icon"},wp.element.createElement("span",{dangerouslySetInnerHTML:{__html:$}})):null,pe=n=>n==="normal"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Ni,{title:We("Icon Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:T,onChange:g=>e({iconColor:g}),label:We("Icon Color","digiblocks")},{value:u,onChange:g=>e({iconBackgroundColor:g}),label:We("Background Color","digiblocks")}]}),wp.element.createElement(Ba,{label:We("Border Style","digiblocks"),value:r||"default",options:qe,onChange:g=>{g!=="default"&&g!=="none"&&(r==="default"||r==="none"||!r)&&(!S||Object.keys(S).length===0)&&e({iconBorderWidth:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:1,right:1,bottom:1,left:1,unit:"px"},mobile:{top:1,right:1,bottom:1,left:1,unit:"px"}}}),e({iconBorderStyle:g})},__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),r&&r!=="default"&&r!=="none"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Ni,{title:We("Border Color","digiblocks"),enableAlpha:!0,colorSettings:[{value:y,onChange:g=>e({iconBorderColor:g}),label:We("Border Color","digiblocks")}]}),wp.element.createElement(ti,{label:We("Border Width","digiblocks")},wp.element.createElement(Mi,{values:S[J],onChange:g=>e({iconBorderWidth:{...S,[J]:g}})})),wp.element.createElement(ti,{label:We("Border Radius","digiblocks")},wp.element.createElement(Mi,{values:D[J],onChange:g=>e({iconBorderRadius:{...D,[J]:g}}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]}))),wp.element.createElement(ti,{label:We("Padding","digiblocks")},wp.element.createElement(Mi,{values:v[J],onChange:g=>e({iconPadding:{...v,[J]:g}})})),wp.element.createElement(ti,{label:We("Margin","digiblocks")},wp.element.createElement(Mi,{values:_[J],onChange:g=>e({iconMargin:{..._,[J]:g}})}))):n==="hover"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Ni,{title:We("Icon Hover Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:L,onChange:g=>e({iconHoverColor:g}),label:We("Icon Color","digiblocks")},{value:B,onChange:g=>e({iconHoverBackgroundColor:g}),label:We("Background Color","digiblocks")},{value:O,onChange:g=>e({iconHoverBorderColor:g}),label:We("Border Color","digiblocks")}]})):null,R=n=>n==="normal"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Ni,{title:We("Container Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:Y,onChange:g=>e({backgroundColor:g}),label:We("Background Color","digiblocks")}]})):n==="hover"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Ni,{title:We("Container Hover Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:A,onChange:g=>e({backgroundHoverColor:g}),label:We("Background Color","digiblocks")}]})):null,p=()=>{switch(N){case"options":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:"components-panel__body is-opened"},wp.element.createElement("div",{style:{marginBottom:"2rem"}},wp.element.createElement(gs,{label:We("Icon Source","digiblocks"),value:l||"library",onChange:n=>e({iconSource:n}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(Hi,{value:"library",label:We("Library","digiblocks")}),wp.element.createElement(Hi,{value:"custom",label:We("Custom","digiblocks")})),l==="library"&&wp.element.createElement(wp.element.Fragment,null,w?wp.element.createElement(Qe,{label:We("Select Icon","digiblocks"),value:x,onChange:U}):wp.element.createElement("div",{style:{textAlign:"center",padding:"20px 0"}},wp.element.createElement(tm,null),wp.element.createElement("p",null,We("Loading icon selector...","digiblocks"))),x&&w&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{style:{marginTop:"15px",marginBottom:"15px",padding:"10px",background:"#f0f0f1",borderRadius:"3px"}},wp.element.createElement("p",{style:{margin:"0 0 5px 0"}},wp.element.createElement("strong",null,We("Selected Icon:","digiblocks"))," ",x.name),wp.element.createElement("p",{style:{margin:"0 0 5px 0"}},wp.element.createElement("strong",null,We("Style:","digiblocks"))," ",x.style),x.categories&&x.categories.length>0&&wp.element.createElement("p",{style:{margin:"0"}},wp.element.createElement("strong",null,We("Categories:","digiblocks"))," ",x.categories.join(", "))))),l==="custom"&&wp.element.createElement("div",{style:{marginTop:"15px"}},wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"custom-svg-input"},We("Custom SVG Code","digiblocks")),wp.element.createElement("textarea",{id:"custom-svg-input",className:"components-textarea-control__input",value:$||"",onChange:n=>{let g=n.target.value;e({customSvg:g,iconValue:{id:"custom-svg",name:"Custom SVG",svg:g,style:"custom",categories:["custom"]}})},placeholder:We("Paste your SVG code here...","digiblocks"),rows:10,style:{width:"100%",marginTop:"8px"}}),wp.element.createElement("p",{className:"components-base-control__help"},We("Paste your SVG code here. Make sure it only contains valid SVG markup. For security reasons, scripts and external references will be removed.","digiblocks"))),$&&wp.element.createElement("div",{style:{marginTop:"15px",marginBottom:"15px"}},wp.element.createElement("p",null,wp.element.createElement("strong",null,We("Preview:","digiblocks"))),wp.element.createElement("div",{style:{padding:"20px",background:"#f0f0f1",borderRadius:"3px",display:"flex",justifyContent:"center",alignItems:"center"}},wp.element.createElement("div",{className:"digiblocks-custom-svg-preview",style:{width:"50px",height:"50px"},dangerouslySetInnerHTML:{__html:$}}))))),wp.element.createElement(nm,{label:We("Alignment","digiblocks"),value:V,onChange:n=>e({align:n}),options:[{label:We("Left","digiblocks"),value:"flex-start"},{label:We("Center","digiblocks"),value:"center"},{label:We("Right","digiblocks"),value:"flex-end"}]}),wp.element.createElement("div",{className:"icon-transform-controls"},wp.element.createElement(rd,{label:We("Rotate","digiblocks"),value:se||0,onChange:n=>e({rotateIcon:n}),min:0,max:360,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement("div",{className:"digiblocks-toggle-controls",style:{display:"flex",justifyContent:"space-between",marginBottom:"20px"}},wp.element.createElement(gs,{label:We("Flip Horizontal","digiblocks"),value:ne?"yes":"no",onChange:n=>e({flipHorizontal:n==="yes"}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(Hi,{value:"no",label:We("Off","digiblocks")}),wp.element.createElement(Hi,{value:"yes",label:We("On","digiblocks")}))),wp.element.createElement("div",{className:"digiblocks-toggle-controls",style:{display:"flex",justifyContent:"space-between",marginBottom:"20px"}},wp.element.createElement(gs,{label:We("Flip Vertical","digiblocks"),value:ve?"yes":"no",onChange:n=>e({flipVertical:n==="yes"}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(Hi,{value:"no",label:We("Off","digiblocks")}),wp.element.createElement(Hi,{value:"yes",label:We("On","digiblocks")})))),ee?wp.element.createElement(om,{key:"link-control",value:{url:F,opensInNewTab:Q,rel:X},settings:[{id:"opensInNewTab",title:We("Open in new tab","digiblocks")},{id:"rel",title:We("Add noopener noreferrer","digiblocks")}],onChange:n=>{e({linkUrl:n.url,linkOpenInNewTab:n.opensInNewTab,linkRel:n.rel})},onRemove:()=>{e({linkEnabled:!1,linkUrl:"",linkOpenInNewTab:!1,linkRel:""})},suggestionsQuery:{type:"post",subtype:"any"},forceIsEditingLink:!F}):wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("button",{className:"components-button width-full is-primary",onClick:()=>e({linkEnabled:!0})},We("Add Link","digiblocks"))))));case"style":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Di,{tab:"style",name:"icon",title:We("Icon","digiblocks"),initialOpen:!0},wp.element.createElement(ti,{label:We("Icon Size","digiblocks")},wp.element.createElement(rd,{value:H[J],onChange:n=>e({iconSize:{...H,[J]:n}}),min:8,max:500,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(cd,{className:"digiblocks-control-tabs",activeClass:"active-tab",tabs:j},n=>pe(n.name))),wp.element.createElement(Di,{tab:"style",name:"container",title:We("Container","digiblocks"),initialOpen:!1},wp.element.createElement(cd,{className:"digiblocks-control-tabs",activeClass:"active-tab",tabs:j},n=>R(n.name)),wp.element.createElement(Ba,{label:We("Border Style","digiblocks"),value:le||"default",options:qe,onChange:n=>{n!=="default"&&n!=="none"&&(le==="default"||le==="none"||!le)&&((!Ve||Object.keys(Ve).length===0)&&e({borderWidth:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:1,right:1,bottom:1,left:1,unit:"px"},mobile:{top:1,right:1,bottom:1,left:1,unit:"px"}}}),(!Ce||Object.keys(Ce).length===0)&&e({borderRadius:{desktop:{top:8,right:8,bottom:8,left:8,unit:"px"},tablet:{top:8,right:8,bottom:8,left:8,unit:"px"},mobile:{top:8,right:8,bottom:8,left:8,unit:"px"}}})),e({borderStyle:n})},__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),le&&le!=="default"&&le!=="none"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Ni,{title:We("Border Color","digiblocks"),enableAlpha:!0,colorSettings:[{value:Z,onChange:n=>e({borderColor:n}),label:We("Border Color","digiblocks")}]}),wp.element.createElement(ti,{label:We("Border Width","digiblocks")},wp.element.createElement(Mi,{values:Ve&&Ve[J]?Ve[J]:{top:1,right:1,bottom:1,left:1,unit:"px"},onChange:n=>e({borderWidth:{...Ve,[J]:n}})})),wp.element.createElement(ti,{label:We("Border Radius","digiblocks")},wp.element.createElement(Mi,{values:Ce&&Ce[J]?Ce[J]:{top:0,right:0,bottom:0,left:0,unit:"px"},onChange:n=>e({borderRadius:{...Ce,[J]:n}}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]}))),wp.element.createElement(Ba,{label:We("Hover Effect","digiblocks"),value:I,options:je,onChange:n=>e({hoverEffect:n}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(Di,{tab:"style",name:"shadow",title:We("Box Shadow","digiblocks"),initialOpen:!1},wp.element.createElement(sm,{normalValue:b,hoverValue:M,onNormalChange:n=>e({boxShadow:n}),onHoverChange:n=>e({boxShadowHover:n})})));case"advanced":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Di,{tab:"advanced",name:"animation",title:We("Animation","digiblocks"),initialOpen:!0},wp.element.createElement(Ba,{label:We("Animation Effect","digiblocks"),value:k,options:Fe,onChange:n=>e({animation:n}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),k&&k!=="none"&&wp.element.createElement("div",{style:{marginTop:"10px"}},wp.element.createElement(im,{variant:"secondary",isSecondary:!0,onClick:ze,style:{width:"100%"}},We("Preview Animation","digiblocks")))),wp.element.createElement(Di,{tab:"advanced",name:"visibility",title:We("Visibility","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control__help",style:{padding:"12px",backgroundColor:"#f0f6fc",border:"1px solid #c3ddfd",borderRadius:"4px",marginBottom:"16px"}},wp.element.createElement("strong",null,We("Editor Note:","digiblocks")),wp.element.createElement("br",null),We("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.","digiblocks")),wp.element.createElement(ds,{label:We("Hide on Desktop","digiblocks"),checked:s.desktop,onChange:n=>e({visibility:{...s,desktop:n}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(ds,{label:We("Hide on Tablet","digiblocks"),checked:s.tablet,onChange:n=>e({visibility:{...s,tablet:n}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(ds,{label:We("Hide on Mobile","digiblocks"),checked:s.mobile,onChange:n=>e({visibility:{...s,mobile:n}}),__nextHasNoMarginBottom:!0})),wp.element.createElement(Di,{tab:"advanced",name:"additional",title:We("Additional","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control html-anchor-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"html-anchor"},We("HTML anchor","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"html-anchor",value:P||"",onChange:n=>e({anchor:n.target.value}),"aria-describedby":"html-anchor-help",autoCapitalize:"none",autoComplete:"off"})),wp.element.createElement("p",{id:"html-anchor-help",className:"components-base-control__help"},We(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`,"digiblocks")," ",wp.element.createElement("a",{className:"components-external-link",href:"https://wordpress.org/documentation/article/page-jumps/",target:"_blank",rel:"external noreferrer noopener"},wp.element.createElement("span",{className:"components-external-link__contents"},We("Learn more about anchors","digiblocks")),wp.element.createElement("span",{className:"components-external-link__icon","aria-label":"(opens in a new tab)"},"\u2197")))),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"additional-css-classes"},We("Additional CSS class(es)","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"additional-css-classes",value:oe||"",onChange:n=>e({customClasses:n.target.value}),"aria-describedby":"additional-css-classes-help",autoComplete:"off"})),wp.element.createElement("p",{id:"additional-css-classes-help",className:"components-base-control__help"},We("Separate multiple classes with spaces.","digiblocks")))));default:return null}},re=Au({className:`digiblocks-icon ${o} ${oe||""}`,id:P||null});return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(em,null,wp.element.createElement(rm,{tabs:Ie,activeTab:N,onSelect:xe},p())),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:Se()}}),wp.element.createElement("div",{...re},G()))},gd=cm;var{useBlockProps:k0}=window.wp.blockEditor,dm=({attributes:te})=>{let{id:e,iconSource:K,customSvg:o,iconValue:P,align:s,animation:oe,hoverEffect:l,anchor:$,customClasses:x,linkEnabled:H,linkUrl:T,linkOpenInNewTab:u}=te,S={className:["digiblocks-icon",e,`align-${s}`,oe!=="none"?`animate-${oe}`:"",l!=="none"?`has-hover-${l}`:"",x||""].filter(Boolean).join(" "),id:$||null},D=()=>K==="library"&&P&&P.svg&&P.svg.trim()!==""?wp.element.createElement("div",{className:"digiblocks-icon"},wp.element.createElement("span",{dangerouslySetInnerHTML:{__html:P.svg}})):K==="custom"&&o&&o.trim()!==""?wp.element.createElement("div",{className:"digiblocks-icon"},wp.element.createElement("span",{dangerouslySetInnerHTML:{__html:o}})):null;return H&&T?wp.element.createElement("a",{href:T,target:u?"_blank":"_self",rel:u?"noopener noreferrer":void 0,...S},D()):wp.element.createElement("div",{...S},D())},pd=dm;var{__:us}=window.wp.i18n,{registerBlockType:gm}=window.wp.blocks,{getBlockActiveStatus:pm}=window.wp.digiBlocks;gm("digiblocks/icon",{apiVersion:2,title:digiBlocksData.blocks.icon.title,category:"digiblocks",icon:{src:()=>{let{viewbox:te,path:e}=digiBlocksData.blocks.icon.icon;return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${te}`,className:"digiblocks-editor-icons"},wp.element.createElement("path",{d:e}))}},description:digiBlocksData.blocks.icon.description,keywords:[us("icon","digiblocks"),us("symbol","digiblocks"),us("fontawesome","digiblocks")],supports:{inserter:!!pm("icon"),html:!1,className:!1,customClassName:!1,anchor:!1},attributes:{id:{type:"string",default:""},anchor:{type:"string",default:""},visibility:{type:"object",default:{desktop:!1,tablet:!1,mobile:!1}},customClasses:{type:"string",default:""},iconSource:{type:"string",default:"library"},customSvg:{type:"string",default:""},iconValue:{type:"object",default:{id:"heart",name:"Heart",svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"></path></svg>',style:"solid",categories:["symbols","emoji"]}},align:{type:"object",default:{desktop:"flex-start",tablet:"",mobile:""}},iconColor:{type:"string",default:"#1e73be"},iconBackgroundColor:{type:"string",default:"transparent"},iconBorderStyle:{type:"string",default:"default"},iconBorderWidth:{type:"object",default:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},iconBorderRadius:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},iconBorderColor:{type:"string",default:"#e0e0e0"},iconPadding:{type:"object",default:{desktop:{top:10,right:10,bottom:10,left:10,unit:"px"},tablet:{top:8,right:8,bottom:8,left:8,unit:"px"},mobile:{top:5,right:5,bottom:5,left:5,unit:"px"}}},iconMargin:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},iconHoverColor:{type:"string",default:""},iconHoverBackgroundColor:{type:"string",default:""},iconHoverBorderColor:{type:"string",default:""},linkEnabled:{type:"boolean",default:!1},linkUrl:{type:"string",default:""},linkOpenInNewTab:{type:"boolean",default:!1},linkRel:{type:"string",default:""},iconSize:{type:"object",default:{desktop:48,tablet:40,mobile:32}},backgroundColor:{type:"string",default:"transparent"},backgroundHoverColor:{type:"string",default:""},animation:{type:"string",default:"none"},borderStyle:{type:"string",default:"default"},borderRadius:{type:"object",default:{desktop:{top:8,right:8,bottom:8,left:8,unit:"px"},tablet:{top:8,right:8,bottom:8,left:8,unit:"px"},mobile:{top:8,right:8,bottom:8,left:8,unit:"px"}}},borderWidth:{type:"object",default:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:1,right:1,bottom:1,left:1,unit:"px"},mobile:{top:1,right:1,bottom:1,left:1,unit:"px"}}},borderColor:{type:"string",default:"#e0e0e0"},hoverEffect:{type:"string",default:"none"},boxShadow:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},boxShadowHover:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},rotateIcon:{type:"number",default:0},flipHorizontal:{type:"boolean",default:!1},flipVertical:{type:"boolean",default:!1}},example:{attributes:{iconValue:{id:"star",name:"Star",svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="1em" height="1em"><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"></path></svg>',style:"solid",categories:["design","basic-shapes"]},iconColor:"#1e73be",backgroundColor:"transparent",iconSize:{desktop:80},iconPadding:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}}},edit:gd,save:pd});var{__:ye}=window.wp.i18n,{useBlockProps:bm,RichText:ms,InspectorControls:um,PanelColorSettings:kt,LinkControl:mm}=window.wp.blockEditor,{SelectControl:yl,RangeControl:hm,ToggleControl:Cl,TabPanel:hs,Spinner:fm,Button:km,TextControl:vm,__experimentalToggleGroupControl:bd,__experimentalToggleGroupControlOption:Ha}=window.wp.components,{useState:za,useEffect:fs,useRef:xm}=window.wp.element,{useBlockId:ym,getDimensionCSS:Uo,animations:ks,animationPreview:ud}=digi.utils,{tabIcons:vs}=digi.icons,{ResponsiveControl:Ho,DimensionControl:jo,TypographyControl:xs,BoxShadowControl:md,CustomTabPanel:Cm,TabPanelBody:rt,ResponsiveButtonGroup:hd,ResponsiveRangeControl:wm}=digi.components,Sm=({attributes:te,setAttributes:e,clientId:K})=>{let{id:o,anchor:P,visibility:s,customClasses:oe,iconSource:l,customSvg:$,iconValue:x,align:H,iconLayout:T,iconContentGap:u,showTitle:r,showContent:S,title:D,content:y,titleColor:v,titleHoverColor:_,textColor:L,textHoverColor:B,backgroundColor:O,backgroundHoverColor:Y,iconSize:A,iconColor:V,iconBackgroundColor:k,iconBorderStyle:b,iconBorderWidth:M,iconBorderRadius:le,iconBorderColor:Ve,iconPadding:Ce,iconMargin:Z,iconHoverColor:I,iconHoverBackgroundColor:ee,iconHoverBorderColor:F,titleTypography:Q,contentTypography:X,padding:se,margin:ne,animation:ve,boxShadow:J,boxShadowHover:ce,borderStyle:Te,borderWidth:be,borderRadius:N,borderColor:xe,hoverEffect:w,linkEnabled:ke,linkType:U,linkUrl:fe,linkOpenInNewTab:ze,linkRel:qe,buttonText:je,buttonBackgroundColor:Fe,buttonBackgroundHoverColor:Ie,buttonTextColor:j,buttonTextHoverColor:Se,buttonBorderStyle:Qe,buttonBorderWidth:G,buttonBorderRadius:pe,buttonBorderColor:R,buttonBorderHoverColor:p,buttonBoxShadow:re,buttonBoxShadowHover:n,buttonPadding:g,buttonMargin:q,buttonTypography:d}=te;ym(o,K,e);let[ie,C]=za(window.digi.responsiveState.activeDevice),[h,Be]=za(!1);fs(()=>window.digi.responsiveState.subscribe(He=>{C(He)}),[]);let[a,ge]=za(()=>{if(window.digi.uiState){let W=window.digi.uiState.getActiveTab(K);if(W)return W}return"options"}),[Ue,Ke]=za(!1);fs(()=>{let W=()=>window.digi&&window.digi.components&&window.digi.components.FontAwesomeControl?(Ke(!0),!0):!1;if(!W()){let He=setTimeout(()=>{W()&&clearTimeout(He)},500);return()=>clearTimeout(He)}},[]);let ao=W=>{e({iconValue:W})},co=xm(null);fs(()=>{if(ve&&ve!=="none"){let W=setTimeout(()=>{ud(o,ve,ks,co)},100);return()=>clearTimeout(W)}},[ve]);let t=()=>{ud(o,ve,ks,co)},m=[{label:ye("Default","digiblocks"),value:"default"},{label:ye("None","digiblocks"),value:"none"},{label:ye("Solid","digiblocks"),value:"solid"},{label:ye("Dotted","digiblocks"),value:"dotted"},{label:ye("Dashed","digiblocks"),value:"dashed"},{label:ye("Double","digiblocks"),value:"double"},{label:ye("Groove","digiblocks"),value:"groove"},{label:ye("Inset","digiblocks"),value:"inset"},{label:ye("Outset","digiblocks"),value:"outset"},{label:ye("Ridge","digiblocks"),value:"ridge"}],Me=[{label:ye("None","digiblocks"),value:"none"},{label:ye("Lift","digiblocks"),value:"lift"},{label:ye("Scale","digiblocks"),value:"scale"},{label:ye("Glow","digiblocks"),value:"glow"}],c=[{label:ye("None","digiblocks"),value:"none"},...Object.keys(ks).map(W=>({label:W.replace(/-/g," ").replace(/\b\w/g,He=>He.toUpperCase()),value:W}))],me=[{label:ye("Box","digiblocks"),value:"box"},{label:ye("Button","digiblocks"),value:"button"}],oo=[{name:"options",title:ye("Options","digiblocks"),icon:vs.optionsIcon},{name:"style",title:ye("Style","digiblocks"),icon:vs.styleIcon},{name:"advanced",title:ye("Advanced","digiblocks"),icon:vs.advancedIcon}],f=[{name:"normal",title:ye("Normal","digiblocks"),className:"digiblocks-tab-1 normal"},{name:"hover",title:ye("Hover","digiblocks"),className:"digiblocks-tab-2 hover"}],De=()=>{let W=window.digi.responsiveState.activeDevice,He="";H[W]==="flex-start"?He=`
				align-items: flex-start;
				text-align: left;
			`:H[W]==="center"?He=`
				align-items: center;
				text-align: center;
			`:H[W]==="flex-end"&&(He=`
				align-items: flex-end;
				text-align: right;
			`);let ho=Uo(N,"border-radius",W),uo="";Te&&Te!=="default"&&Te!=="none"?uo=`
                border-style: ${Te};
                border-color: ${xe||"#e0e0e0"};
                ${Uo(be,"border-width",W)}
            `:uo="border-style: none;";let xo="box-shadow: none;";J&&J.enable&&(xo=`box-shadow: ${J.position==="inset"?"inset ":""}${J.horizontal}px ${J.vertical}px ${J.blur}px ${J.spread}px ${J.color};`);let Mo=`${Uo(se,"padding",W)}`,Do=`${Uo(ne,"margin",W)}`,ko="";Q&&(Q.fontFamily&&(ko+=`font-family: ${Q.fontFamily};`),Q.fontSize&&Q.fontSize[W]&&(ko+=`font-size: ${Q.fontSize[W]}${Q.fontSizeUnit||"px"};`),Q.fontWeight&&(ko+=`font-weight: ${Q.fontWeight};`),Q.fontStyle&&(ko+=`font-style: ${Q.fontStyle};`),Q.textTransform&&(ko+=`text-transform: ${Q.textTransform};`),Q.textDecoration&&(ko+=`text-decoration: ${Q.textDecoration};`),Q.lineHeight&&Q.lineHeight[W]&&(ko+=`line-height: ${Q.lineHeight[W]}${Q.lineHeightUnit||"em"};`),Q.letterSpacing&&Q.letterSpacing[W]&&(ko+=`letter-spacing: ${Q.letterSpacing[W]}${Q.letterSpacingUnit||"px"};`));let mo="";X&&(X.fontFamily&&(mo+=`font-family: ${X.fontFamily};`),X.fontSize&&X.fontSize[W]&&(mo+=`font-size: ${X.fontSize[W]}${X.fontSizeUnit||"px"};`),X.fontWeight&&(mo+=`font-weight: ${X.fontWeight};`),X.fontStyle&&(mo+=`font-style: ${X.fontStyle};`),X.textTransform&&(mo+=`text-transform: ${X.textTransform};`),X.textDecoration&&(mo+=`text-decoration: ${X.textDecoration};`),X.lineHeight&&X.lineHeight[W]&&(mo+=`line-height: ${X.lineHeight[W]}${X.lineHeightUnit||"em"};`),X.letterSpacing&&X.letterSpacing[W]&&(mo+=`letter-spacing: ${X.letterSpacing[W]}${X.letterSpacingUnit||"px"};`));let yo="";d&&(d.fontFamily&&(yo+=`font-family: ${d.fontFamily};`),d.fontSize&&d.fontSize[W]&&(yo+=`font-size: ${d.fontSize[W]}${d.fontSizeUnit||"px"};`),d.fontWeight&&(yo+=`font-weight: ${d.fontWeight};`),d.fontStyle&&(yo+=`font-style: ${d.fontStyle};`),d.textTransform&&(yo+=`text-transform: ${d.textTransform};`),d.textDecoration&&(yo+=`text-decoration: ${d.textDecoration};`),d.lineHeight&&d.lineHeight[W]&&(yo+=`line-height: ${d.lineHeight[W]}${d.lineHeightUnit||"em"};`),d.letterSpacing&&d.letterSpacing[W]&&(yo+=`letter-spacing: ${d.letterSpacing[W]}${d.letterSpacingUnit||"px"};`));let Ao="",bi="",ea="",oa=x&&x.svg||l==="custom"&&$&&$.trim()!=="";if(oa){if(k&&(Ao+=`background-color: ${k};`),b&&b!=="default"&&b!=="none"){let jt=M&&M[W]?M[W]:{top:1,right:1,bottom:1,left:1,unit:"px"},fn=le&&le[W]?le[W]:{top:0,right:0,bottom:0,left:0,unit:"px"};Ao+=`
                    border-style: ${b};
                    border-color: ${Ve||"#e0e0e0"};
					${Uo(M,"border-width",W)}
					${Uo(le,"border-radius",W)}
                `}Ce&&Ce[W]&&(Ao+=`${Uo(Ce,"padding",W)}`),I&&(bi+=`fill: ${I} !important; color: ${I} !important;`),ee&&(bi+=`background-color: ${ee};`),F&&(bi+=`border-color: ${F};`),Z&&Z[W]&&(ea=`${Uo(Z,"margin",W)}`)}let Xi="";if(ce&&ce.enable){let jt=ce.position==="inset"?"inset ":"";Xi+=`box-shadow: ${jt}${ce.horizontal}px ${ce.vertical}px ${ce.blur}px ${ce.spread}px ${ce.color};`}w==="lift"?Xi+="transform: translateY(-10px);":w==="scale"?Xi+="transform: scale(1.05);":w==="glow"&&(Xi+="filter: brightness(1.1);");let Lr="";ke&&U==="box"&&(Lr=`
				cursor: pointer;
				text-decoration: none;
			`);let Or="",Ai="";if(ke&&U==="button"){let jt="";Qe&&Qe!=="default"&&Qe!=="none"?jt=`
                    border-style: ${Qe};
                    border-color: ${R||Fe};
                    ${Uo(G,"border-width",W)}
                `:jt="border-style: none;";let fn="box-shadow: none;";re&&re.enable&&(fn=`box-shadow: ${re.position==="inset"?"inset ":""}${re.horizontal}px ${re.vertical}px ${re.blur}px ${re.spread}px ${re.color};`);let Pg=`${Uo(g,"padding",W)}`,Rg=`${Uo(q,"margin",W)}`;if(n&&n.enable){let Ur=n.position==="inset"?"inset ":"";Ai+=`box-shadow: ${Ur}${n.horizontal}px ${n.vertical}px ${n.blur}px ${n.spread}px ${n.color};`}Ie&&(Ai+=`background-color: ${Ie};`),Se&&(Ai+=`color: ${Se};`),p&&(Ai+=`border-color: ${p};`),Or=`
                .${o} .digiblocks-button-wrapper {
                    display: flex;
                    justify-content: ${H[W]==="center"?"center":H[W]==="flex-end"?"flex-end":"flex-start"};
                    ${Rg}
                }
                
                .${o} .digiblocks-button {
                    display: inline-block;
                    background-color: ${Fe};
                    color: ${j};
                    ${Pg}
                    ${jt}
                    ${Uo(pe,"border-radius",W)}
                    ${fn}
                    ${yo}
                    text-decoration: none;
                    transition: all 0.3s ease;
                }
                
                .${o} .digiblocks-button:hover {
                    ${Ai}
                }
            `}return`
            /* Main block styles */
            .${o} {
				display: flex;
				${He}
                background-color: ${O||"transparent"};
                ${xo}
                ${Mo}
                ${Do}
                ${uo}
                ${ho}
				${T[W]==="above"?"flex-direction: column;":"flex-direction: row;"}
				${T[W]==="after"?"flex-direction: row-reverse;":""}
				gap: ${u[W].value}${u[W].unit};
                transition: all 0.3s ease;
                ${ke&&U==="box"?Lr:""}
            }
            
            /* Hover effects */
            .${o}:hover {
                ${Y?`background-color: ${Y};`:""}
                ${Xi}
            }
            
            ${oa?`
				/* Icon styles */
				.${o} .digiblocks-icon-box-icon {
					${ea}
					display: inline-flex;
					align-items: center;
					justify-content: center;
					${Ao}
					transition: all 0.3s ease;
				}

				.${o} .digiblocks-icon-box-icon span {
					display: flex;
				}

				.${o} .digiblocks-icon-box-icon svg {
					width: ${A[W]}px;
					height: 100%;
					fill: ${V||"inherit"};
					transition: all 0.3s ease;
				}
				
				/* Icon hover styles */
				.${o}:hover .digiblocks-icon-box-icon {
					${bi}
				}
				
				.${o}:hover .digiblocks-icon-box-icon svg {
					${I?`fill: ${I};`:""}
				}
				`:""}
            
            /* Title styles */
            .${o} .digiblocks-icon-box-title {
                color: ${v||"inherit"};
				margin-top: 0;
                margin-bottom: 10px;
                ${ko}
                transition: color 0.3s ease;
            }
            
            /* Title hover styles */
            .${o}:hover .digiblocks-icon-box-title {
                ${_?`color: ${_};`:""}
            }
            
            /* Content styles */
            .${o} .digiblocks-icon-box-content {
                display: flex;
                flex-direction: column;
            }

            .${o} .digiblocks-icon-box-text {
                color: ${L||"inherit"};
                ${mo}
				margin: 0;
                transition: color 0.3s ease;
            }
            
            /* Content hover styles */
            .${o}:hover .digiblocks-icon-box-text {
                ${B?`color: ${B};`:""}
            }
            
            /* Button styles */
            ${Or}

			/* Visibility Controls */
			${s.desktop?`
				@media (min-width: 992px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${s.tablet?`
				@media (min-width: 768px) and (max-width: 991px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${s.mobile?`
				@media (max-width: 767px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}
        `},io=Ue?window.digi.components.FontAwesomeControl:null,so=()=>l==="library"&&x&&x.svg&&x.svg.trim()!==""?wp.element.createElement("div",{className:"digiblocks-icon-box-icon"},wp.element.createElement("span",{dangerouslySetInnerHTML:{__html:x.svg}})):l==="custom"&&$&&$.trim()!==""?wp.element.createElement("div",{className:"digiblocks-icon-box-icon"},wp.element.createElement("span",{dangerouslySetInnerHTML:{__html:$}})):!l&&x&&x.svg&&x.svg.trim()!==""?wp.element.createElement("div",{className:"digiblocks-icon-box-icon"},wp.element.createElement("span",{dangerouslySetInnerHTML:{__html:x.svg}})):null,i=()=>!ke||U!=="button"?null:wp.element.createElement("div",{className:"digiblocks-button-wrapper"},wp.element.createElement("a",{className:"digiblocks-button",href:fe||"#",target:ze?"_blank":"_self",rel:qe,onClick:W=>W.preventDefault()},wp.element.createElement(ms,{tagName:"span",value:je,onChange:W=>e({buttonText:W}),placeholder:ye("Button Text","digiblocks")}))),E=W=>W==="normal"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(kt,{title:ye("Icon Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:V,onChange:He=>e({iconColor:He}),label:ye("Icon Color","digiblocks")},{value:k,onChange:He=>e({iconBackgroundColor:He}),label:ye("Background Color","digiblocks")}]}),wp.element.createElement(yl,{label:ye("Border Style","digiblocks"),value:b||"default",options:m,onChange:He=>{He!=="default"&&He!=="none"&&(b==="default"||b==="none"||!b)&&(!M||Object.keys(M).length===0)&&e({iconBorderWidth:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}}),e({iconBorderStyle:He})},__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),b&&b!=="default"&&b!=="none"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(kt,{title:ye("Border Color","digiblocks"),enableAlpha:!0,colorSettings:[{value:Ve,onChange:He=>e({iconBorderColor:He}),label:ye("Border Color","digiblocks")}]}),wp.element.createElement(Ho,{label:ye("Border Width","digiblocks")},wp.element.createElement(jo,{values:M[ie],onChange:He=>e({iconBorderWidth:{...M,[ie]:He}})})),wp.element.createElement(Ho,{label:ye("Border Radius","digiblocks")},wp.element.createElement(jo,{values:le[ie],onChange:He=>e({iconBorderRadius:{...le,[ie]:He}}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]}))),wp.element.createElement(Ho,{label:ye("Padding","digiblocks")},wp.element.createElement(jo,{values:Ce[ie],onChange:He=>e({iconPadding:{...Ce,[ie]:He}})})),wp.element.createElement(Ho,{label:ye("Margin","digiblocks")},wp.element.createElement(jo,{values:Z[ie],onChange:He=>e({iconMargin:{...Z,[ie]:He}})}))):W==="hover"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(kt,{title:ye("Icon Hover Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:I,onChange:He=>e({iconHoverColor:He}),label:ye("Icon Color","digiblocks")},{value:ee,onChange:He=>e({iconHoverBackgroundColor:He}),label:ye("Background Color","digiblocks")},{value:F,onChange:He=>e({iconHoverBorderColor:He}),label:ye("Border Color","digiblocks")}]})):null,Oe=W=>W==="normal"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(kt,{title:ye("Color Settings","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:v,onChange:He=>e({titleColor:He}),label:ye("Title Color","digiblocks")},{value:L,onChange:He=>e({textColor:He}),label:ye("Text Color","digiblocks")},{value:O,onChange:He=>e({backgroundColor:He}),label:ye("Background Color","digiblocks")}]})):W==="hover"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(kt,{title:ye("Hover Color Settings","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:_,onChange:He=>e({titleHoverColor:He}),label:ye("Title Color","digiblocks")},{value:B,onChange:He=>e({textHoverColor:He}),label:ye("Text Color","digiblocks")},{value:Y,onChange:He=>e({backgroundHoverColor:He}),label:ye("Background Color","digiblocks")}]})):null,bo=W=>W==="normal"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(kt,{title:ye("Button Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:j,onChange:He=>e({buttonTextColor:He}),label:ye("Text Color","digiblocks")},{value:Fe,onChange:He=>e({buttonBackgroundColor:He}),label:ye("Background Color","digiblocks")}]}),wp.element.createElement(yl,{label:ye("Border Style","digiblocks"),value:Qe||"default",options:m,onChange:He=>{He!=="default"&&He!=="none"&&(Qe==="default"||Qe==="none"||!Qe)&&(!G||Object.keys(G).length===0)&&e({buttonBorderWidth:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}}),e({buttonBorderStyle:He})},__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),Qe&&Qe!=="default"&&Qe!=="none"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(kt,{title:ye("Border Color","digiblocks"),enableAlpha:!0,colorSettings:[{value:R,onChange:He=>e({buttonBorderColor:He}),label:ye("Border Color","digiblocks")}]}),wp.element.createElement(Ho,{label:ye("Border Width","digiblocks")},wp.element.createElement(jo,{values:G[ie],onChange:He=>e({buttonBorderWidth:{...G,[ie]:He}})}))),wp.element.createElement(Ho,{label:ye("Border Radius","digiblocks")},wp.element.createElement(jo,{values:pe[ie],onChange:He=>e({buttonBorderRadius:{...pe,[ie]:He}}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]})),wp.element.createElement(Ho,{label:ye("Padding","digiblocks")},wp.element.createElement(jo,{values:g[ie],onChange:He=>e({buttonPadding:{...g,[ie]:He}})})),wp.element.createElement(Ho,{label:ye("Margin","digiblocks")},wp.element.createElement(jo,{values:q[ie],onChange:He=>e({buttonMargin:{...q,[ie]:He}})})),wp.element.createElement(md,{normalValue:re,hoverValue:n,onNormalChange:He=>e({buttonBoxShadow:He}),onHoverChange:He=>e({buttonBoxShadowHover:He})})):W==="hover"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(kt,{title:ye("Button Hover Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:Se,onChange:He=>e({buttonTextHoverColor:He}),label:ye("Text Color","digiblocks")},{value:Ie,onChange:He=>e({buttonBackgroundHoverColor:He}),label:ye("Background Color","digiblocks")},{value:p,onChange:He=>e({buttonBorderHoverColor:He}),label:ye("Border Color","digiblocks")}]})):null,z=()=>wp.element.createElement(xs,{label:ye("Button Typography","digiblocks"),value:d,onChange:W=>e({buttonTypography:W}),defaults:{fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em"}}),Xe=()=>{switch(a){case"options":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:"components-panel__body is-opened"},wp.element.createElement("div",{style:{marginBottom:"2rem"}},wp.element.createElement(bd,{label:ye("Icon Source","digiblocks"),value:l||"library",onChange:W=>e({iconSource:W}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(Ha,{value:"library",label:ye("Library","digiblocks")}),wp.element.createElement(Ha,{value:"custom",label:ye("Custom","digiblocks")})),l==="library"&&wp.element.createElement(wp.element.Fragment,null,Ue?wp.element.createElement(io,{label:ye("Select Icon","digiblocks"),value:x,onChange:ao}):wp.element.createElement("div",{style:{textAlign:"center",padding:"20px 0"}},wp.element.createElement(fm,null),wp.element.createElement("p",null,ye("Loading icon selector...","digiblocks"))),x&&Ue&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{style:{marginTop:"15px",marginBottom:"15px",padding:"10px",background:"#f0f0f1",borderRadius:"3px"}},wp.element.createElement("p",{style:{margin:"0 0 5px 0"}},wp.element.createElement("strong",null,ye("Selected Icon:","digiblocks"))," ",x.name),wp.element.createElement("p",{style:{margin:"0 0 5px 0"}},wp.element.createElement("strong",null,ye("Style:","digiblocks"))," ",x.style),x.categories&&x.categories.length>0&&wp.element.createElement("p",{style:{margin:"0"}},wp.element.createElement("strong",null,ye("Categories:","digiblocks"))," ",x.categories.join(", "))))),l==="custom"&&wp.element.createElement("div",{style:{marginTop:"15px"}},wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"custom-svg-input"},ye("Custom SVG Code","digiblocks")),wp.element.createElement("textarea",{id:"custom-svg-input",className:"components-textarea-control__input",value:$||"",onChange:W=>{let He=W.target.value;e({customSvg:He,iconValue:{id:"custom-svg",name:"Custom SVG",svg:He,style:"custom",categories:["custom"]}})},placeholder:ye("Paste your SVG code here...","digiblocks"),rows:10,style:{width:"100%",marginTop:"8px"}}),wp.element.createElement("p",{className:"components-base-control__help"},ye("Paste your SVG code here. Make sure it only contains valid SVG markup. For security reasons, scripts and external references will be removed.","digiblocks"))),$&&wp.element.createElement("div",{style:{marginTop:"15px",marginBottom:"15px"}},wp.element.createElement("p",null,wp.element.createElement("strong",null,ye("Preview:","digiblocks"))),wp.element.createElement("div",{style:{padding:"20px",background:"#f0f0f1",borderRadius:"3px",display:"flex",justifyContent:"center",alignItems:"center"}},wp.element.createElement("div",{className:"digiblocks-custom-svg-preview",style:{width:"50px",height:"50px"},dangerouslySetInnerHTML:{__html:$}}))))),wp.element.createElement(hd,{label:ye("Alignment","digiblocks"),value:H,onChange:W=>e({align:W}),options:[{label:ye("Left","digiblocks"),value:"flex-start"},{label:ye("Center","digiblocks"),value:"center"},{label:ye("Right","digiblocks"),value:"flex-end"}]}),wp.element.createElement(hd,{label:ye("Icon Layout","digiblocks"),value:T,onChange:W=>e({iconLayout:W}),options:[{label:ye("Before","digiblocks"),value:"before"},{label:ye("Above","digiblocks"),value:"above"},{label:ye("After","digiblocks"),value:"after"}]}),wp.element.createElement(wm,{label:ye("Gap","digiblocks"),value:u,onChange:W=>e({iconContentGap:W}),units:[{label:"px",value:"px"},{label:"%",value:"%"},{label:"em",value:"em"},{label:"rem",value:"rem"}],defaultUnit:"px",min:0,max:100,step:1,defaultValues:{desktop:20,tablet:15,mobile:10}}),wp.element.createElement(Cl,{label:ye("Show Title","digiblocks"),checked:r,onChange:W=>e({showTitle:W}),__nextHasNoMarginBottom:!0}),wp.element.createElement(Cl,{label:ye("Show Description","digiblocks"),checked:S,onChange:W=>e({showContent:W}),__nextHasNoMarginBottom:!0}),ke?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(mm,{key:"link-control",value:{url:fe,opensInNewTab:ze,rel:qe},settings:[{id:"opensInNewTab",title:ye("Open in new tab","digiblocks")},{id:"rel",title:ye("Add noopener noreferrer","digiblocks")}],onChange:W=>{e({linkUrl:W.url,linkOpenInNewTab:W.opensInNewTab,linkRel:W.rel})},onRemove:()=>{e({linkEnabled:!1,linkUrl:"",linkOpenInNewTab:!1,linkRel:""})},suggestionsQuery:{type:"post",subtype:"any"},forceIsEditingLink:!fe}),wp.element.createElement("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},wp.element.createElement(bd,{label:ye("Link Type","digiblocks"),value:U,onChange:W=>e({linkType:W}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(Ha,{value:"box",label:ye("Box","digiblocks")}),wp.element.createElement(Ha,{value:"button",label:ye("Button","digiblocks")}))),U==="button"&&wp.element.createElement(vm,{label:ye("Button Text","digiblocks"),value:je,onChange:W=>e({buttonText:W}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})):wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("button",{className:"components-button width-full is-primary",onClick:()=>e({linkEnabled:!0})},ye("Add Link","digiblocks"))))));case"style":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(rt,{tab:"style",name:"colors",title:ye("Colors","digiblocks"),initialOpen:!0},wp.element.createElement(hs,{className:"digiblocks-control-tabs",activeClass:"active-tab",tabs:f},W=>Oe(W.name))),wp.element.createElement(rt,{tab:"style",name:"typo",title:ye("Typography","digiblocks"),initialOpen:!1},wp.element.createElement(xs,{label:ye("Title Typography","digiblocks"),value:Q,onChange:W=>e({titleTypography:W}),defaults:{fontSize:{desktop:24,tablet:22,mobile:20},fontSizeUnit:"px",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em"}}),wp.element.createElement(xs,{label:ye("Content Typography","digiblocks"),value:X,onChange:W=>e({contentTypography:W}),defaults:{fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em"}}),ke&&U==="button"&&z()),wp.element.createElement(rt,{tab:"style",name:"icon",title:ye("Icon","digiblocks"),initialOpen:!1},wp.element.createElement(Ho,{label:ye("Icon Size","digiblocks")},wp.element.createElement(hm,{value:A[ie],onChange:W=>e({iconSize:{...A,[ie]:W}}),min:16,max:500,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(hs,{className:"digiblocks-control-tabs",activeClass:"active-tab",tabs:f},W=>E(W.name))),wp.element.createElement(rt,{tab:"style",name:"box-style",title:ye("Box Style","digiblocks"),initialOpen:!1},wp.element.createElement(yl,{label:ye("Border Style","digiblocks"),value:Te||"default",options:m,onChange:W=>{W!=="default"&&W!=="none"&&(Te==="default"||Te==="none"||!Te)&&(!be||Object.keys(be).length===0)&&e({borderWidth:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:1,right:1,bottom:1,left:1,unit:"px"},mobile:{top:1,right:1,bottom:1,left:1,unit:"px"}}}),e({borderStyle:W})},__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),Te&&Te!=="default"&&Te!=="none"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(kt,{title:ye("Border Color","digiblocks"),enableAlpha:!0,colorSettings:[{value:xe,onChange:W=>e({borderColor:W}),label:ye("Border Color","digiblocks")}]}),wp.element.createElement(Ho,{label:ye("Border Width","digiblocks")},wp.element.createElement(jo,{values:be&&be[ie]?be[ie]:{top:1,right:1,bottom:1,left:1,unit:"px"},onChange:W=>e({borderWidth:{...be,[ie]:W}})}))),wp.element.createElement(Ho,{label:ye("Border Radius","digiblocks")},wp.element.createElement(jo,{values:N&&N[ie]?N[ie]:{top:0,right:0,bottom:0,left:0,unit:"px"},onChange:W=>e({borderRadius:{...N,[ie]:W}}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]})),wp.element.createElement(yl,{label:ye("Hover Effect","digiblocks"),value:w,options:Me,onChange:W=>e({hoverEffect:W}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),ke&&U==="button"&&wp.element.createElement(rt,{tab:"style",name:"button",title:ye("Button","digiblocks"),initialOpen:!1},wp.element.createElement(hs,{className:"digiblocks-control-tabs",activeClass:"active-tab",tabs:f},W=>bo(W.name))),wp.element.createElement(rt,{tab:"style",name:"shadow",title:ye("Box Shadow","digiblocks"),initialOpen:!1},wp.element.createElement(md,{normalValue:J,hoverValue:ce,onNormalChange:W=>e({boxShadow:W}),onHoverChange:W=>e({boxShadowHover:W})})),wp.element.createElement(rt,{tab:"style",name:"spacing",title:ye("Spacing","digiblocks"),initialOpen:!1},wp.element.createElement(Ho,{label:ye("Padding","digiblocks")},wp.element.createElement(jo,{values:se[ie],onChange:W=>e({padding:{...se,[ie]:W}})})),wp.element.createElement(Ho,{label:ye("Margin","digiblocks")},wp.element.createElement(jo,{values:ne[ie],onChange:W=>e({margin:{...ne,[ie]:W}})}))));case"advanced":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(rt,{tab:"advanced",name:"animation",title:ye("Animation","digiblocks"),initialOpen:!0},wp.element.createElement(yl,{label:ye("Animation Effect","digiblocks"),value:ve,options:c,onChange:W=>e({animation:W}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),ve&&ve!=="none"&&wp.element.createElement("div",{style:{marginTop:"10px"}},wp.element.createElement(km,{variant:"secondary",isSecondary:!0,onClick:t,style:{width:"100%"}},ye("Preview Animation","digiblocks")))),wp.element.createElement(rt,{tab:"advanced",name:"visibility",title:ye("Visibility","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control__help",style:{padding:"12px",backgroundColor:"#f0f6fc",border:"1px solid #c3ddfd",borderRadius:"4px",marginBottom:"16px"}},wp.element.createElement("strong",null,ye("Editor Note:","digiblocks")),wp.element.createElement("br",null),ye("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.","digiblocks")),wp.element.createElement(Cl,{label:ye("Hide on Desktop","digiblocks"),checked:s.desktop,onChange:W=>e({visibility:{...s,desktop:W}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(Cl,{label:ye("Hide on Tablet","digiblocks"),checked:s.tablet,onChange:W=>e({visibility:{...s,tablet:W}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(Cl,{label:ye("Hide on Mobile","digiblocks"),checked:s.mobile,onChange:W=>e({visibility:{...s,mobile:W}}),__nextHasNoMarginBottom:!0})),wp.element.createElement(rt,{tab:"advanced",name:"additional",title:ye("Additional","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control html-anchor-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"html-anchor"},ye("HTML anchor","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"html-anchor",value:P||"",onChange:W=>e({anchor:W.target.value}),"aria-describedby":"html-anchor-help",autoCapitalize:"none",autoComplete:"off"})),wp.element.createElement("p",{id:"html-anchor-help",className:"components-base-control__help"},ye(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`,"digiblocks")," ",wp.element.createElement("a",{className:"components-external-link",href:"https://wordpress.org/documentation/article/page-jumps/",target:"_blank",rel:"external noreferrer noopener"},wp.element.createElement("span",{className:"components-external-link__contents"},ye("Learn more about anchors","digiblocks")),wp.element.createElement("span",{className:"components-external-link__icon","aria-label":"(opens in a new tab)"},"\u2197")))),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"additional-css-classes"},ye("Additional CSS class(es)","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"additional-css-classes",value:oe||"",onChange:W=>e({customClasses:W.target.value}),"aria-describedby":"additional-css-classes-help",autoComplete:"off"})),wp.element.createElement("p",{id:"additional-css-classes-help",className:"components-base-control__help"},ye("Separate multiple classes with spaces.","digiblocks")))));default:return null}},go=bm({className:`digiblocks-icon-box ${o} ${oe||""}`,id:P||null});return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(um,null,wp.element.createElement(Cm,{tabs:oo,activeTab:a,onSelect:ge},Xe())),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:De()}}),wp.element.createElement("div",{...go},so(),wp.element.createElement("div",{className:"digiblocks-icon-box-content"},r&&wp.element.createElement(ms,{tagName:"h3",className:"digiblocks-icon-box-title",value:D,onChange:W=>e({title:W}),placeholder:ye("Feature Title","digiblocks")}),S&&wp.element.createElement(ms,{tagName:"p",className:"digiblocks-icon-box-text",value:y,onChange:W=>e({content:W}),placeholder:ye("Add your feature description here.","digiblocks")}),i())))},fd=Sm;var{useBlockProps:$m,RichText:ys}=window.wp.blockEditor,_m=({attributes:te})=>{let{id:e,iconSource:K,customSvg:o,iconValue:P,title:s,showTitle:oe,showContent:l,content:$,animation:x,hoverEffect:H,anchor:T,customClasses:u,linkEnabled:r,linkType:S,linkUrl:D,linkOpenInNewTab:y,linkRel:v,buttonText:_}=te,L=["digiblocks-icon-box",e,x!=="none"?`animate-${x}`:"",H!=="none"?`has-hover-${H}`:"",u||""].filter(Boolean).join(" "),B=$m.save({className:L,id:T||null}),O=()=>K==="library"&&P&&P.svg&&P.svg.trim()!==""?wp.element.createElement("div",{className:"digiblocks-icon-box-icon"},wp.element.createElement("span",{dangerouslySetInnerHTML:{__html:P.svg}})):K==="custom"&&o&&o.trim()!==""?wp.element.createElement("div",{className:"digiblocks-icon-box-icon"},wp.element.createElement("span",{dangerouslySetInnerHTML:{__html:o}})):null,Y=()=>!r||S!=="button"?null:wp.element.createElement("div",{className:"digiblocks-button-wrapper"},wp.element.createElement("a",{className:"digiblocks-button",href:D||"#",target:y?"_blank":"_self",rel:y?v||"noopener noreferrer":v},wp.element.createElement(ys.Content,{tagName:"span",value:_}))),A=wp.element.createElement("div",{className:"digiblocks-icon-box-content"},oe!==!1&&wp.element.createElement(ys.Content,{tagName:"h3",className:"digiblocks-icon-box-title",value:s}),l!==!1&&wp.element.createElement(ys.Content,{tagName:"p",className:"digiblocks-icon-box-text",value:$}),Y());return r&&S==="box"&&D?wp.element.createElement("a",{...B,href:D,target:y?"_blank":"_self",rel:y?v||"noopener noreferrer":v},O(),A):wp.element.createElement("div",{...B},O(),A)},kd=_m;var{__:vt}=window.wp.i18n,{registerBlockType:Bm}=window.wp.blocks,{getBlockActiveStatus:Tm}=window.wp.digiBlocks;Bm("digiblocks/icon-box",{apiVersion:2,title:digiBlocksData.blocks["icon-box"].title,category:"digiblocks",icon:{src:()=>{let{viewbox:te,path:e}=digiBlocksData.blocks["icon-box"].icon;return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${te}`,className:"digiblocks-editor-icons"},wp.element.createElement("path",{d:e}))}},description:digiBlocksData.blocks["icon-box"].description,keywords:[vt("icon","digiblocks"),vt("box","digiblocks"),vt("feature","digiblocks"),vt("service","digiblocks")],supports:{inserter:!!Tm("icon-box"),html:!1,className:!1,customClassName:!1,anchor:!1},attributes:{id:{type:"string",default:""},anchor:{type:"string",default:""},visibility:{type:"object",default:{desktop:!1,tablet:!1,mobile:!1}},customClasses:{type:"string",default:""},iconSource:{type:"string",default:"library"},customSvg:{type:"string",default:""},iconValue:{type:"object",default:null},align:{type:"object",default:{desktop:"center",tablet:"center",mobile:"center"}},iconLayout:{type:"object",default:{desktop:"above",tablet:"above",mobile:"above"}},iconContentGap:{type:"object",default:{desktop:{value:20,unit:"px"},tablet:{value:15,unit:"px"},mobile:{value:10,unit:"px"}}},showTitle:{type:"boolean",default:!0},showContent:{type:"boolean",default:!0},title:{type:"string",default:vt("Feature Title","digiblocks")},content:{type:"string",default:vt("Add your feature description here. Explain what makes this feature special.","digiblocks")},iconColor:{type:"string",default:"#1e73be"},titleColor:{type:"string",default:"#333333"},titleHoverColor:{type:"string",default:""},textColor:{type:"string",default:"#666666"},textHoverColor:{type:"string",default:""},backgroundColor:{type:"string",default:"#ffffff"},backgroundHoverColor:{type:"string",default:""},iconBackgroundColor:{type:"string",default:"transparent"},iconBorderStyle:{type:"string",default:"default"},iconBorderWidth:{type:"object",default:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},iconBorderRadius:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},iconBorderColor:{type:"string",default:"#e0e0e0"},iconPadding:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},iconMargin:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},iconHoverColor:{type:"string",default:""},iconHoverBackgroundColor:{type:"string",default:""},iconHoverBorderColor:{type:"string",default:""},linkEnabled:{type:"boolean",default:!1},linkType:{type:"string",default:"box"},linkUrl:{type:"string",default:""},linkOpenInNewTab:{type:"boolean",default:!1},linkRel:{type:"string",default:""},buttonText:{type:"string",default:vt("Learn More","digiblocks")},buttonBackgroundColor:{type:"string",default:"#1e73be"},buttonBackgroundHoverColor:{type:"string",default:"#135e9e"},buttonTextColor:{type:"string",default:"#ffffff"},buttonTextHoverColor:{type:"string",default:"#ffffff"},buttonBorderStyle:{type:"string",default:"default"},buttonBorderWidth:{type:"object",default:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},buttonBorderRadius:{type:"object",default:{desktop:{top:4,right:4,bottom:4,left:4,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},buttonBorderColor:{type:"string",default:""},buttonBorderHoverColor:{type:"string",default:""},buttonBoxShadow:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},buttonBoxShadowHover:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},buttonPadding:{type:"object",default:{desktop:{top:10,right:20,bottom:10,left:20,unit:"px"},tablet:{top:8,right:16,bottom:8,left:16,unit:"px"},mobile:{top:6,right:12,bottom:6,left:12,unit:"px"}}},buttonMargin:{type:"object",default:{desktop:{top:15,right:0,bottom:0,left:0,unit:"px"},tablet:{top:10,right:0,bottom:0,left:0,unit:"px"},mobile:{top:8,right:0,bottom:0,left:0,unit:"px"}}},buttonTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",fontWeight:"500",fontStyle:"normal",textTransform:"",textDecoration:"",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}},iconSize:{type:"object",default:{desktop:48,tablet:40,mobile:32}},titleTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:22,tablet:20,mobile:18},fontSizeUnit:"px",fontWeight:"",fontStyle:"normal",textTransform:"",textDecoration:"",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}},contentTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",fontWeight:"",fontStyle:"normal",textTransform:"",textDecoration:"",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}},padding:{type:"object",default:{desktop:{top:30,right:30,bottom:30,left:30,unit:"px"},tablet:{top:25,right:25,bottom:25,left:25,unit:"px"},mobile:{top:20,right:20,bottom:20,left:20,unit:"px"}}},margin:{type:"object",default:{desktop:{top:0,right:0,bottom:30,left:0,unit:"px"},tablet:{top:0,right:0,bottom:25,left:0,unit:"px"},mobile:{top:0,right:0,bottom:20,left:0,unit:"px"}}},animation:{type:"string",default:"none"},borderStyle:{type:"string",default:"default"},borderRadius:{type:"object",default:{desktop:{top:8,right:8,bottom:8,left:8,unit:"px"},tablet:{top:8,right:8,bottom:8,left:8,unit:"px"},mobile:{top:8,right:8,bottom:8,left:8,unit:"px"}}},borderWidth:{type:"object",default:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:1,right:1,bottom:1,left:1,unit:"px"},mobile:{top:1,right:1,bottom:1,left:1,unit:"px"}}},borderColor:{type:"string",default:"#e0e0e0"},hoverEffect:{type:"string",default:"none"},boxShadow:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},boxShadowHover:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}}},example:{attributes:{iconValue:{id:"star",name:"Star",svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="1em" height="1em"><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"></path></svg>',style:"solid",categories:["design","lifestyle-and-hobbies","social"]},title:vt("Feature Title","digiblocks"),content:vt("Add your feature description here. Explain what makes this feature special.","digiblocks"),iconColor:"#1e73be",backgroundColor:"#ffffff"},viewportWidth:400},edit:fd,save:kd});var{__:Re}=window.wp.i18n,{useBlockProps:Nm,RichText:Hm,InspectorControls:zm,PanelColorSettings:Ma,LinkControl:Mm}=window.wp.blockEditor,{SelectControl:Cs,RangeControl:ws,TabPanel:Ss,Button:xt,ToggleControl:$s,Modal:vd,Tooltip:Pi,__experimentalToggleGroupControl:wl,__experimentalToggleGroupControlOption:Qo}=window.wp.components,{useState:ii,useEffect:_s,useRef:Dm}=window.wp.element,{useBlockId:Pm,getDimensionCSS:Da,animations:Bs,animationPreview:xd}=digi.utils,{tabIcons:Ts}=digi.icons,{ResponsiveControl:li,DimensionControl:Pa,TypographyControl:Rm,BoxShadowControl:Im,CustomTabPanel:Lm,TabPanelBody:yt,FontAwesomeControl:_0}=digi.components,Om=({attributes:te,setAttributes:e,clientId:K})=>{let{id:o,anchor:P,visibility:s,customClasses:oe,items:l,defaultIconSource:$,defaultCustomSvg:x,defaultIcon:H,contentTypography:T,listLayout:u,listAlign:r,iconPosition:S,iconSize:D,iconSpace:y,itemSpace:v,iconColor:_,iconHoverColor:L,textColor:B,textHoverColor:O,animation:Y,padding:A,margin:V,borderStyle:k,borderWidth:b,borderRadius:M,borderColor:le,borderHoverColor:Ve,boxShadow:Ce,boxShadowHover:Z,backgroundColor:I,backgroundHoverColor:ee,hoverEffect:F}=te;Pm(o,K,e);let[Q,X]=ii(window.digi.responsiveState.activeDevice),[se,ne]=ii(!1),[ve,J]=ii(!1),[ce,Te]=ii(null),[be,N]=ii(!1);_s(()=>window.digi.responsiveState.subscribe(h=>{X(h)}),[]);let[xe,w]=ii(()=>{if(window.digi.uiState){let C=window.digi.uiState.getActiveTab(K);if(C)return C}return"options"}),[ke,U]=ii(!1);_s(()=>{let C=()=>window.digi&&window.digi.components&&window.digi.components.FontAwesomeControl?(U(!0),!0):!1;if(!C()){let h=setTimeout(()=>{C()&&clearTimeout(h)},500);return()=>clearTimeout(h)}},[]);let fe=Dm(null);_s(()=>{if(Y&&Y!=="none"){let C=setTimeout(()=>{xd(o,Y,Bs,fe)},100);return()=>clearTimeout(C)}},[Y]);let ze=()=>{xd(o,Y,Bs,fe)},qe=[{label:Re("Default","digiblocks"),value:"default"},{label:Re("None","digiblocks"),value:"none"},{label:Re("Solid","digiblocks"),value:"solid"},{label:Re("Dotted","digiblocks"),value:"dotted"},{label:Re("Dashed","digiblocks"),value:"dashed"},{label:Re("Double","digiblocks"),value:"double"},{label:Re("Groove","digiblocks"),value:"groove"},{label:Re("Inset","digiblocks"),value:"inset"},{label:Re("Outset","digiblocks"),value:"outset"},{label:Re("Ridge","digiblocks"),value:"ridge"}],je=[{label:Re("None","digiblocks"),value:"none"},{label:Re("Lift","digiblocks"),value:"lift"},{label:Re("Scale","digiblocks"),value:"scale"},{label:Re("Glow","digiblocks"),value:"glow"}],Fe=[{label:Re("None","digiblocks"),value:"none"},...Object.keys(Bs).map(C=>({label:C.replace(/-/g," ").replace(/\b\w/g,h=>h.toUpperCase()),value:C}))],Ie=[{name:"options",title:Re("Options","digiblocks"),icon:Ts.optionsIcon},{name:"style",title:Re("Style","digiblocks"),icon:Ts.styleIcon},{name:"advanced",title:Re("Advanced","digiblocks"),icon:Ts.advancedIcon}],j=[{name:"normal",title:Re("Normal","digiblocks"),className:"digiblocks-tab-1 normal"},{name:"hover",title:Re("Hover","digiblocks"),className:"digiblocks-tab-2 hover"}],Se=()=>{let C=[...l];C.push({id:`item-${Date.now()}`,content:Re("New list item","digiblocks"),icon:{...H},linkUrl:"",linkOpenInNewTab:!1,linkRel:""}),e({items:C})},Qe=C=>{let h=[...l];h.splice(C,1),e({items:h})},G=(C,h,Be)=>{let a=[...l];a[C][h]=Be,e({items:a})},pe=C=>{if(C===0)return;let h=[...l];[h[C-1],h[C]]=[h[C],h[C-1]],e({items:h})},R=C=>{if(C===l.length-1)return;let h=[...l];[h[C],h[C+1]]=[h[C+1],h[C]],e({items:h})},p=C=>{let h=[...l],Be={...l[C],id:`item-${Date.now()}`};h.splice(C+1,0,Be),e({items:h})},re=(C,h)=>{let Be=[...l];Be[C].icon=h,e({items:Be})},n=ke?window.digi.components.FontAwesomeControl:null,g=()=>{let C=window.digi.responsiveState.activeDevice,h="";k&&k!=="default"&&k!=="none"?h=`
                border-style: ${k};
                border-color: ${le||"#e0e0e0"};
				${Da(b,"border-width",C)}
				${Da(M,"border-radius",C)}
			`:h="border: none;";let Be="box-shadow: none;";Ce&&Ce.enable&&(Be=`box-shadow: ${Ce.position==="inset"?"inset ":""}${Ce.horizontal}px ${Ce.vertical}px ${Ce.blur}px ${Ce.spread}px ${Ce.color};`);let a=`${Da(A,"padding",C)}`,ge=`${Da(V,"margin",C)}`,Ue="";T&&(T.fontFamily&&(Ue+=`font-family: ${T.fontFamily};`),T.fontSize&&T.fontSize[C]&&(Ue+=`font-size: ${T.fontSize[C]}${T.fontSizeUnit||"px"};`),T.fontWeight&&(Ue+=`font-weight: ${T.fontWeight};`),T.fontStyle&&(Ue+=`font-style: ${T.fontStyle};`),T.textTransform&&(Ue+=`text-transform: ${T.textTransform};`),T.textDecoration&&(Ue+=`text-decoration: ${T.textDecoration};`),T.lineHeight&&T.lineHeight[C]&&(Ue+=`line-height: ${T.lineHeight[C]}${T.lineHeightUnit||"em"};`),T.letterSpacing&&T.letterSpacing[C]&&(Ue+=`letter-spacing: ${T.letterSpacing[C]}${T.letterSpacingUnit||"px"};`));let Ke="";if(Z&&Z.enable){let ao=Z.position==="inset"?"inset ":"";Ke+=`box-shadow: ${ao}${Z.horizontal}px ${Z.vertical}px ${Z.blur}px ${Z.spread}px ${Z.color};`}return F==="lift"?Ke+="transform: translateY(-10px);":F==="scale"?Ke+="transform: scale(1.05);":F==="glow"&&(Ke+="filter: brightness(1.1);"),`
            /* Icon List Block - ${o} */
            .${o} {
                ${a}
                ${ge}
                ${h}
                ${Be}
                ${I?`background-color: ${I};`:""}
                transition: all 0.3s ease;
            }
            
            .${o}:hover {
                ${ee?`background-color: ${ee};`:""}
                ${Ve?`border-color: ${Ve};`:""}
                ${Ke}
            }
            
            /* List container */
            .${o} .digiblocks-icon-list-wrapper {
                text-align: ${r};
            }
            
            .${o} .digiblocks-icon-list {
                list-style: none;
                margin: 0;
                padding: 0;
                display: flex;
				flex-direction: ${u==="horizontal"?"row":"column"};
				flex-wrap: wrap;
				gap: ${v[C]!==void 0?v[C]:16}px;
            }
            
            /* List item */
            .${o} .digiblocks-icon-list-item {
                display: inline-flex;
                align-items: center;
				gap: ${y[C]!==void 0?y[C]:12}px;
				justify-content: ${r==="center"?"center":r==="right"?"flex-end":"flex-start"};
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
                color: ${_||"#1e73be"};
                transition: color 0.3s ease;
            }
            
            .${o} .digiblocks-icon-list-icon span {
                display: flex;
            }
            
            .${o} .digiblocks-icon-list-icon svg {
                width: ${D[C]!==void 0?D[C]:24}px;
                height: ${D[C]!==void 0?D[C]:24}px;
                fill: currentColor;
            }
            
            /* Text content */
            .${o} .digiblocks-icon-list-content {
                color: ${B||"#333333"};
                ${Ue}
                transition: color 0.3s ease;
            }
            
            /* Hover states */
            .${o} .digiblocks-icon-list-item:hover .digiblocks-icon-list-icon {
                color: ${L};
            }
            
            .${o} .digiblocks-icon-list-item:hover .digiblocks-icon-list-content {
                color: ${O};
            }

            .${o} .digiblocks-icon-list-child {
                display: inline-flex;
                ${S==="after"?"flex-direction: row-reverse;":""}
				gap: ${y[C]!==void 0?y[C]:12}px;
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
			${s.desktop?`
				@media (min-width: 992px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${s.tablet?`
				@media (min-width: 768px) and (max-width: 991px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${s.mobile?`
				@media (max-width: 767px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}
        `},q=()=>{switch(xe){case"options":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(yt,{tab:"options",name:"list-items",title:Re("List Items","digiblocks"),initialOpen:!0},wp.element.createElement(wl,{label:Re("Default Icon Source","digiblocks"),value:$||"library",onChange:C=>e({defaultIconSource:C}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(Qo,{value:"library",label:Re("Library","digiblocks")}),wp.element.createElement(Qo,{value:"custom",label:Re("Custom","digiblocks")})),(!$||$==="library")&&wp.element.createElement(wp.element.Fragment,null,ke?wp.element.createElement(n,{label:Re("Select Icon","digiblocks"),value:H,onChange:C=>e({defaultIcon:C})}):wp.element.createElement("div",{style:{textAlign:"center",padding:"20px 0"}},wp.element.createElement("div",{className:"components-spinner"}),wp.element.createElement("p",null,Re("Loading icon selector...","digiblocks")))),$==="custom"&&wp.element.createElement("div",{style:{marginTop:"15px"}},wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"default-custom-svg-input"},Re("Custom SVG Code","digiblocks")),wp.element.createElement("textarea",{id:"default-custom-svg-input",className:"components-textarea-control__input",value:x||"",onChange:C=>{let h=C.target.value;e({defaultCustomSvg:h,defaultIcon:{id:"custom-svg",name:"Custom SVG",svg:h,style:"custom",categories:["custom"]}})},placeholder:Re("Paste your SVG code here...","digiblocks"),rows:6,style:{width:"100%",marginTop:"8px"}}),wp.element.createElement("p",{className:"components-base-control__help"},Re("Paste your SVG code here. Make sure it only contains valid SVG markup.","digiblocks"))),x&&wp.element.createElement("div",{style:{marginTop:"15px",marginBottom:"15px"}},wp.element.createElement("p",null,wp.element.createElement("strong",null,Re("Preview:","digiblocks"))),wp.element.createElement("div",{style:{padding:"20px",background:"#f0f0f1",borderRadius:"3px",display:"flex",justifyContent:"center",alignItems:"center"}},wp.element.createElement("div",{style:{width:"50px",height:"50px"},dangerouslySetInnerHTML:{__html:x}})))),wp.element.createElement(wl,{label:Re("List Layout","digiblocks"),value:u,onChange:C=>e({listLayout:C}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(Qo,{value:"horizontal",label:Re("Horizontal","digiblocks")}),wp.element.createElement(Qo,{value:"vertical",label:Re("Vertical","digiblocks")})),wp.element.createElement(wl,{label:Re("List Alignment","digiblocks"),value:r,onChange:C=>e({listAlign:C}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(Qo,{value:"left",label:Re("Left","digiblocks")}),wp.element.createElement(Qo,{value:"center",label:Re("Center","digiblocks")}),wp.element.createElement(Qo,{value:"right",label:Re("Right","digiblocks")})),wp.element.createElement(wl,{label:Re("Icon Position","digiblocks"),value:S,onChange:C=>e({iconPosition:C}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(Qo,{value:"before",label:Re("Before","digiblocks")}),wp.element.createElement(Qo,{value:"after",label:Re("After","digiblocks")})),wp.element.createElement(li,{label:Re("Item Spacing","digiblocks")},wp.element.createElement(ws,{value:v[Q],onChange:C=>e({itemSpace:{...v,[Q]:C}}),min:0,max:100,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(li,{label:Re("Icon Spacing","digiblocks")},wp.element.createElement(ws,{value:y[Q],onChange:C=>e({iconSpace:{...y,[Q]:C}}),min:0,max:50,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}))));case"style":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(yt,{tab:"style",name:"icon-style",title:Re("Icon Style","digiblocks"),initialOpen:!0},wp.element.createElement(li,{label:Re("Icon Size","digiblocks")},wp.element.createElement(ws,{value:D[Q],onChange:C=>e({iconSize:{...D,[Q]:C}}),min:8,max:100,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(Ss,{className:"digiblocks-control-tabs",activeClass:"active-tab",tabs:j},C=>wp.element.createElement(Ma,{title:C.name==="normal"?Re("Icon Colors","digiblocks"):Re("Icon Hover Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:C.name==="normal"?_:L,onChange:h=>e(C.name==="normal"?{iconColor:h}:{iconHoverColor:h}),label:Re("Icon Color","digiblocks")}]}))),wp.element.createElement(yt,{tab:"style",name:"text-style",title:Re("Text Style","digiblocks"),initialOpen:!1},wp.element.createElement(Ss,{className:"digiblocks-control-tabs",activeClass:"active-tab",tabs:j},C=>wp.element.createElement(Ma,{title:C.name==="normal"?Re("Text Colors","digiblocks"):Re("Text Hover Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:C.name==="normal"?B:O,onChange:h=>e(C.name==="normal"?{textColor:h}:{textHoverColor:h}),label:Re("Text Color","digiblocks")}]})),wp.element.createElement(Rm,{label:Re("Typography","digiblocks"),value:T,onChange:C=>e({contentTypography:C}),defaults:{fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em"}})),wp.element.createElement(yt,{tab:"style",name:"box-style",title:Re("Box Style","digiblocks"),initialOpen:!1},wp.element.createElement(Cs,{label:Re("Border Style","digiblocks"),value:k||"default",options:qe,onChange:C=>{e({borderStyle:C})},__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),k&&k!=="default"&&k!=="none"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Ma,{title:Re("Border Colors","digiblocks"),enableAlpha:!0,colorSettings:[{value:le,onChange:C=>e({borderColor:C}),label:Re("Border Color","digiblocks")},{value:Ve,onChange:C=>e({borderHoverColor:C}),label:Re("Border Hover Color","digiblocks")}]}),wp.element.createElement(li,{label:Re("Border Width","digiblocks")},wp.element.createElement(Pa,{values:b[Q],onChange:C=>e({borderWidth:{...b,[Q]:C}})})),wp.element.createElement(li,{label:Re("Border Radius","digiblocks")},wp.element.createElement(Pa,{values:M[Q],onChange:C=>e({borderRadius:{...M,[Q]:C}}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]}))),wp.element.createElement(Ss,{className:"digiblocks-control-tabs",activeClass:"active-tab",tabs:j},C=>wp.element.createElement(Ma,{title:C.name==="normal"?Re("Background Colors","digiblocks"):Re("Background Hover Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:C.name==="normal"?I:ee,onChange:h=>e(C.name==="normal"?{backgroundColor:h}:{backgroundHoverColor:h}),label:Re("Background Color","digiblocks")}]})),wp.element.createElement(Cs,{label:Re("Hover Effect","digiblocks"),value:F,options:je,onChange:C=>e({hoverEffect:C}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(yt,{tab:"style",name:"shadow",title:Re("Box Shadow","digiblocks"),initialOpen:!1},wp.element.createElement(Im,{normalValue:Ce,hoverValue:Z,onNormalChange:C=>e({boxShadow:C}),onHoverChange:C=>e({boxShadowHover:C})})),wp.element.createElement(yt,{tab:"style",name:"spacing",title:Re("Spacing","digiblocks"),initialOpen:!1},wp.element.createElement(li,{label:Re("Padding","digiblocks")},wp.element.createElement(Pa,{values:A[Q],onChange:C=>e({padding:{...A,[Q]:C}})})),wp.element.createElement(li,{label:Re("Margin","digiblocks")},wp.element.createElement(Pa,{values:V[Q],onChange:C=>e({margin:{...V,[Q]:C}})}))));case"advanced":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(yt,{tab:"advanced",name:"animation",title:Re("Animation","digiblocks"),initialOpen:!0},wp.element.createElement(Cs,{label:Re("Animation Effect","digiblocks"),value:Y,options:Fe,onChange:C=>e({animation:C}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),Y&&Y!=="none"&&wp.element.createElement("div",{style:{marginTop:"10px"}},wp.element.createElement(xt,{variant:"secondary",isSecondary:!0,onClick:ze,style:{width:"100%"}},Re("Preview Animation","digiblocks")))),wp.element.createElement(yt,{tab:"advanced",name:"visibility",title:Re("Visibility","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control__help",style:{padding:"12px",backgroundColor:"#f0f6fc",border:"1px solid #c3ddfd",borderRadius:"4px",marginBottom:"16px"}},wp.element.createElement("strong",null,Re("Editor Note:","digiblocks")),wp.element.createElement("br",null),Re("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.","digiblocks")),wp.element.createElement($s,{label:Re("Hide on Desktop","digiblocks"),checked:s.desktop,onChange:C=>e({visibility:{...s,desktop:C}}),__nextHasNoMarginBottom:!0}),wp.element.createElement($s,{label:Re("Hide on Tablet","digiblocks"),checked:s.tablet,onChange:C=>e({visibility:{...s,tablet:C}}),__nextHasNoMarginBottom:!0}),wp.element.createElement($s,{label:Re("Hide on Mobile","digiblocks"),checked:s.mobile,onChange:C=>e({visibility:{...s,mobile:C}}),__nextHasNoMarginBottom:!0})),wp.element.createElement(yt,{tab:"advanced",name:"additional",title:Re("Additional","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control html-anchor-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"html-anchor"},Re("HTML anchor","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"html-anchor",value:P||"",onChange:C=>e({anchor:C.target.value}),"aria-describedby":"html-anchor-help",autoCapitalize:"none",autoComplete:"off"})),wp.element.createElement("p",{id:"html-anchor-help",className:"components-base-control__help"},Re(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`,"digiblocks"))),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"additional-css-classes"},Re("Additional CSS class(es)","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"additional-css-classes",value:oe||"",onChange:C=>e({customClasses:C.target.value}),"aria-describedby":"additional-css-classes-help",autoComplete:"off"})),wp.element.createElement("p",{id:"additional-css-classes-help",className:"components-base-control__help"},Re("Separate multiple classes with spaces.","digiblocks")))));default:return null}},d=()=>l.map((C,h)=>{let Be=h===l.length-1,a=wp.element.createElement(wp.element.Fragment,null,C.icon&&C.icon.svg&&wp.element.createElement("div",{className:"digiblocks-icon-list-icon"},wp.element.createElement("span",{dangerouslySetInnerHTML:{__html:C.icon.svg}})),wp.element.createElement(Hm,{className:"digiblocks-icon-list-content",value:C.content,onChange:ge=>G(h,"content",ge),placeholder:Re("Enter list item text...","digiblocks"),allowedFormats:["core/bold","core/italic","core/inline-code"]}));return wp.element.createElement("li",{key:C.id,className:"digiblocks-icon-list-item",style:Be?{marginBottom:0}:{}},C.linkUrl?wp.element.createElement("a",{href:"#",onClick:ge=>ge.preventDefault(),className:"digiblocks-icon-list-child"},a):wp.element.createElement("div",{className:"digiblocks-icon-list-child"},a),wp.element.createElement("div",{className:"digiblocks-icon-list-item-controls"},wp.element.createElement(Pi,{text:Re("Edit Icon","digiblocks")},wp.element.createElement(xt,{icon:"admin-customizer",onClick:()=>{Te(h),ne(!0)},isSmall:!0})),wp.element.createElement(Pi,{text:Re("Link","digiblocks")},wp.element.createElement(xt,{icon:"admin-links",onClick:()=>{Te(h),J(!0)},isSmall:!0,variant:C.linkUrl?"primary":"secondary"})),wp.element.createElement(Pi,{text:Re("Move Up","digiblocks")},wp.element.createElement(xt,{icon:"arrow-up-alt2",onClick:()=>pe(h),disabled:h===0,isSmall:!0})),wp.element.createElement(Pi,{text:Re("Move Down","digiblocks")},wp.element.createElement(xt,{icon:"arrow-down-alt2",onClick:()=>R(h),disabled:h===l.length-1,isSmall:!0})),wp.element.createElement(Pi,{text:Re("Duplicate","digiblocks")},wp.element.createElement(xt,{icon:"admin-page",onClick:()=>p(h),isSmall:!0})),wp.element.createElement(Pi,{text:Re("Remove","digiblocks")},wp.element.createElement(xt,{icon:"trash",onClick:()=>Qe(h),isSmall:!0}))))}),ie=Nm({className:`digiblocks-icon-list-block ${o} ${oe||""}`,id:P||null});return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(zm,null,wp.element.createElement(Lm,{tabs:Ie,activeTab:xe,onSelect:w},q())),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:g()}}),wp.element.createElement("div",{...ie},wp.element.createElement("div",{className:"digiblocks-icon-list-wrapper"},wp.element.createElement("ul",{className:"digiblocks-icon-list"},d())),se&&ce!==null&&wp.element.createElement(vd,{title:Re("Choose Icon","digiblocks"),onRequestClose:()=>ne(!1),className:"digiblocks-icon-modal"},wp.element.createElement(wl,{label:Re("Icon Source","digiblocks"),value:l[ce].iconSource||"library",onChange:C=>{let h=[...l];h[ce].iconSource=C,e({items:h})},isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(Qo,{value:"library",label:Re("Library","digiblocks")}),wp.element.createElement(Qo,{value:"custom",label:Re("Custom","digiblocks")})),(!l[ce].iconSource||l[ce].iconSource==="library")&&wp.element.createElement(wp.element.Fragment,null,ke?wp.element.createElement(n,{value:l[ce].icon,onChange:C=>{re(ce,C),ne(!1)}}):wp.element.createElement("div",{style:{textAlign:"center",padding:"20px 0"}},wp.element.createElement("div",{className:"components-spinner"}),wp.element.createElement("p",null,Re("Loading icon selector...","digiblocks")))),l[ce].iconSource==="custom"&&wp.element.createElement("div",{style:{marginTop:"15px"}},wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"custom-svg-input"},Re("Custom SVG Code","digiblocks")),wp.element.createElement("textarea",{id:"custom-svg-input",className:"components-textarea-control__input",value:l[ce].customSvg||"",onChange:C=>{let h=C.target.value,Be=[...l],a={id:"custom-svg",name:"Custom SVG",svg:h,style:"custom",categories:["custom"]};Be[ce].customSvg=h,Be[ce].icon=a,e({items:Be})},placeholder:Re("Paste your SVG code here...","digiblocks"),rows:6,style:{width:"100%",marginTop:"8px"}}),wp.element.createElement("p",{className:"components-base-control__help"},Re("Paste your SVG code here. Make sure it only contains valid SVG markup.","digiblocks"))),l[ce].customSvg&&wp.element.createElement("div",{style:{marginTop:"15px",marginBottom:"15px"}},wp.element.createElement("p",null,wp.element.createElement("strong",null,Re("Preview:","digiblocks"))),wp.element.createElement("div",{style:{padding:"20px",background:"#f0f0f1",borderRadius:"3px",display:"flex",justifyContent:"center",alignItems:"center"}},wp.element.createElement("div",{style:{width:"50px",height:"50px"},dangerouslySetInnerHTML:{__html:l[ce].customSvg}}))),wp.element.createElement("div",{style:{marginTop:"15px",display:"flex",justifyContent:"flex-end"}},wp.element.createElement(xt,{variant:"primary",onClick:()=>ne(!1)},Re("Apply","digiblocks"))))),ve&&ce!==null&&wp.element.createElement(vd,{title:Re("Link Settings","digiblocks"),onRequestClose:()=>J(!1),className:"digiblocks-link-modal"},wp.element.createElement(Mm,{value:l[ce].linkUrl?{url:l[ce].linkUrl,opensInNewTab:l[ce].linkOpenInNewTab,rel:l[ce].linkRel}:void 0,settings:[{id:"opensInNewTab",title:Re("Open in new tab","digiblocks")},{id:"rel",title:Re("Add nofollow","digiblocks")}],onChange:C=>{C&&C.url&&(G(ce,"linkUrl",C.url),G(ce,"linkOpenInNewTab",!!C.opensInNewTab),G(ce,"linkRel",C.rel||""),J(!1))},onRemove:()=>{G(ce,"linkUrl",""),G(ce,"linkOpenInNewTab",!1),G(ce,"linkRel",""),J(!1)},forceIsEditingLink:!l[ce].linkUrl,allowDirectEntry:!0,suggestionsQuery:{type:"post",subtype:"any"}})),wp.element.createElement(xt,{variant:"primary",icon:"plus",onClick:Se,style:{marginTop:"20px",width:"100%",justifyContent:"center"}},Re("Add Icon List Item","digiblocks"))))},yd=Om;var{useBlockProps:Um,RichText:jm}=window.wp.blockEditor,Vm=({attributes:te})=>{let{id:e,anchor:K,customClasses:o,items:P,animation:s,hoverEffect:oe,listLayout:l,listAlign:$,iconPosition:x}=te,H=["digiblocks-icon-list-block",e,s!=="none"?`animate-${s}`:"",oe!=="none"?`has-hover-${oe}`:"",o||""].filter(Boolean).join(" "),T=Um.save({className:H,id:K||null}),u=()=>P.map(r=>{let D=wp.element.createElement(wp.element.Fragment,null,(!r.iconSource||r.iconSource==="library")&&r.icon&&r.icon.svg&&r.icon.svg.trim()!==""?wp.element.createElement("div",{className:"digiblocks-icon-list-icon"},wp.element.createElement("span",{dangerouslySetInnerHTML:{__html:r.icon.svg}})):r.iconSource==="custom"&&r.customSvg&&r.customSvg.trim()!==""?wp.element.createElement("div",{className:"digiblocks-icon-list-icon"},wp.element.createElement("span",{dangerouslySetInnerHTML:{__html:r.customSvg}})):null,wp.element.createElement("div",{className:"digiblocks-icon-list-content"},wp.element.createElement(jm.Content,{value:r.content})));if(r.linkUrl){let y=r.linkRel||"";if(r.linkOpenInNewTab){let v=y.split(" ").filter(Boolean);v.includes("noopener")||v.push("noopener"),v.includes("noreferrer")||v.push("noreferrer"),y=v.join(" ")}return wp.element.createElement("li",{key:r.id,className:"digiblocks-icon-list-item"},wp.element.createElement("a",{className:"digiblocks-icon-list-child",href:r.linkUrl,target:r.linkOpenInNewTab?"_blank":"_self",rel:y||void 0},D))}return wp.element.createElement("li",{key:r.id,className:"digiblocks-icon-list-item"},wp.element.createElement("div",{className:"digiblocks-icon-list-child"},D))});return wp.element.createElement("div",{...T},wp.element.createElement("div",{className:"digiblocks-icon-list-wrapper"},wp.element.createElement("ul",{className:`digiblocks-icon-list ${x==="after"?"icon-position-after":"icon-position-before"}`},u())))},Cd=Vm;var{__:Jo}=window.wp.i18n,{registerBlockType:Fm}=window.wp.blocks,{getBlockActiveStatus:Em}=window.wp.digiBlocks;Fm("digiblocks/icon-list",{apiVersion:2,title:digiBlocksData.blocks["icon-list"].title,category:"digiblocks",icon:{src:()=>{let{viewbox:te,path:e}=digiBlocksData.blocks["icon-list"].icon;return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${te}`,className:"digiblocks-editor-icons"},wp.element.createElement("path",{d:e}))}},description:digiBlocksData.blocks["icon-list"].description,keywords:[Jo("icon","digiblocks"),Jo("list","digiblocks"),Jo("menu","digiblocks"),Jo("feature","digiblocks"),Jo("service","digiblocks")],supports:{inserter:!!Em("icon-list"),html:!1,className:!1,customClassName:!1,anchor:!1},attributes:{id:{type:"string",default:""},anchor:{type:"string",default:""},visibility:{type:"object",default:{desktop:!1,tablet:!1,mobile:!1}},customClasses:{type:"string",default:""},defaultIconSource:{type:"string",default:"library"},defaultCustomSvg:{type:"string",default:""},items:{type:"array",default:[{id:"item-1",content:Jo("First list item with icon","digiblocks"),iconSource:"library",icon:{id:"check",name:"Check",svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em"><path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>',style:"solid",categories:["design"]},customSvg:"",linkEnabled:!1,linkUrl:"",linkOpenInNewTab:!1,linkRel:""},{id:"item-2",content:Jo("Second list item with star icon","digiblocks"),iconSource:"library",icon:{id:"star",name:"Star",svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="1em" height="1em"><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"/></svg>',style:"solid",categories:["design"]},customSvg:"",linkUrl:"",linkOpenInNewTab:!1,linkRel:""},{id:"item-3",content:Jo("Third list item with heart icon","digiblocks"),iconSource:"library",icon:{id:"heart",name:"Heart",svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>',style:"solid",categories:["design"]},customSvg:"",linkUrl:"",linkOpenInNewTab:!1,linkRel:""}]},defaultIcon:{type:"object",default:{id:"check",name:"Check",svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em"><path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>',style:"solid",categories:["design"]}},contentTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",fontWeight:"",fontStyle:"normal",textTransform:"",textDecoration:"",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}},listLayout:{type:"string",default:"vertical"},listAlign:{type:"string",default:"left"},iconPosition:{type:"string",default:"before"},iconSize:{type:"object",default:{desktop:24,tablet:20,mobile:18}},iconSpace:{type:"object",default:{desktop:12,tablet:10,mobile:8}},itemSpace:{type:"object",default:{desktop:16,tablet:12,mobile:8}},iconColor:{type:"string",default:"#1e73be"},iconHoverColor:{type:"string",default:""},textColor:{type:"string",default:"#333333"},textHoverColor:{type:"string",default:""},animation:{type:"string",default:"none"},padding:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},margin:{type:"object",default:{desktop:{top:0,right:0,bottom:30,left:0,unit:"px"},tablet:{top:0,right:0,bottom:25,left:0,unit:"px"},mobile:{top:0,right:0,bottom:20,left:0,unit:"px"}}},borderStyle:{type:"string",default:"none"},borderWidth:{type:"object",default:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderRadius:{type:"object",default:{desktop:{top:8,right:8,bottom:8,left:8,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderColor:{type:"string",default:"#e0e0e0"},borderHoverColor:{type:"string",default:""},boxShadow:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},boxShadowHover:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},backgroundColor:{type:"string",default:""},backgroundHoverColor:{type:"string",default:""},hoverEffect:{type:"string",default:"none"}},example:{attributes:{items:[{id:"item-1",content:Jo("Professional feature","digiblocks"),icon:{id:"star",name:"Star",svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="1em" height="1em"><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"/></svg>',style:"solid",categories:["design"]}},{id:"item-2",content:Jo("24/7 support service","digiblocks"),icon:{id:"headset",name:"Headset",svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em"><path d="M256 48C141.1 48 48 141.1 48 256v40c0 13.3-10.7 24-24 24s-24-10.7-24-24V256C0 114.6 114.6 0 256 0S512 114.6 512 256V400.1c0 48.6-39.4 88-88.1 88L313.6 488c-8.3 14.3-23.8 24-41.6 24H240c-26.5 0-48-21.5-48-48s21.5-48 48-48h32c17.8 0 33.3 9.7 41.6 24l110.4 .1c22.1 0 40-17.9 40-40V256c0-114.9-93.1-208-208-208zM144 208h16c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H144c-35.3 0-64-28.7-64-64V272c0-35.3 28.7-64 64-64zm224 0c35.3 0 64 28.7 64 64v48c0 35.3-28.7 64-64 64H352c-17.7 0-32-14.3-32-32V240c0-17.7 14.3-32 32-32h16z"/></svg>',style:"solid",categories:["business","technology"]}},{id:"item-3",content:Jo("Free updates and documentation","digiblocks"),icon:{id:"download",name:"Download",svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em"><path d="M256 0c17.7 0 32 14.3 32 32V242.7l73.4-73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-128 128c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 242.7V32c0-17.7 14.3-32 32-32zM48 384c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H464c17.7 0 32-14.3 32-32V416c0-17.7-14.3-32-32-32H304 208 48zm272 80c0-8.8-7.2-16-16-16s-16 7.2-16 16s7.2 16 16 16s16-7.2 16-16zm80 0c0-8.8-7.2-16-16-16s-16 7.2-16 16s7.2 16 16 16s16-7.2 16-16z"/></svg>',style:"solid",categories:["arrows","technology"]}}],iconColor:"#1e73be",textColor:"#333333"},viewportWidth:800},edit:yd,save:Cd});var{__:Je}=window.wp.i18n,{useBlockProps:Wm,InspectorControls:qm,RichText:z0,MediaUpload:wd,MediaUploadCheck:Sd,LinkControl:Gm,PanelColorSettings:Ns}=window.wp.blockEditor,{TabPanel:Qm,PanelBody:M0,SelectControl:Sl,ToggleControl:$l,Button:_l,RangeControl:$d,__experimentalUnitControl:D0,__experimentalToggleGroupControl:Hs,__experimentalToggleGroupControlOption:Bl,Spinner:P0,Placeholder:Jm,TextControl:_d,PanelRow:Bd}=window.wp.components,{useState:Ra,useEffect:zs,useRef:Ym}=window.wp.element,{useBlockId:Zm,getDimensionCSS:Ia,animations:Ms,animationPreview:Td}=digi.utils,{tabIcons:Ds}=digi.icons,{ResponsiveControl:La,DimensionControl:Oa,TypographyControl:R0,BoxShadowControl:Km,CustomTabPanel:Xm,TabPanelBody:Ct}=digi.components,Am=({attributes:te,setAttributes:e,clientId:K})=>{let{id:o,anchor:P,visibility:s,customClasses:oe,imageId:l,imageUrl:$,altText:x,title:H,caption:T,width:u,widthUnit:r,height:S,heightUnit:D,sizeSlug:y,align:v,alignTablet:_,alignMobile:L,objectFit:B,borderStyle:O,borderWidth:Y,borderRadius:A,borderColor:V,borderHoverColor:k,boxShadow:b,boxShadowHover:M,padding:le,margin:Ve,url:Ce,opensInNewTab:Z,rel:I,animation:ee,hoverEffect:F,overlayEnable:Q,overlayColor:X,overlayHoverOnly:se}=te;Zm(o,K,e);let[ne,ve]=Ra(window.digi.responsiveState.activeDevice),[J,ce]=Ra(!1),[Te,be]=Ra(!1);zs(()=>window.digi.responsiveState.subscribe(g=>{ve(g)}),[]);let[N,xe]=Ra(()=>{if(window.digi.uiState){let n=window.digi.uiState.getActiveTab(K);if(n)return n}return"options"});zs(()=>{if(l&&y){let n=window.wp.media.attachment(l);n.get("url")?w(n):n.fetch().then(()=>{w(n)})}},[y,l]);let w=n=>{let g=n.get("url"),q=n.get("sizes");q&&q[y]&&(g=q[y].url),e({imageUrl:g})},ke=Ym(null);zs(()=>{if(ee&&ee!=="none"){let n=setTimeout(()=>{Td(o,ee,Ms,ke)},100);return()=>clearTimeout(n)}},[ee]);let U=()=>{Td(o,ee,Ms,ke)},fe=[{label:Je("None","digiblocks"),value:"none"},{label:Je("Solid","digiblocks"),value:"solid"},{label:Je("Dotted","digiblocks"),value:"dotted"},{label:Je("Dashed","digiblocks"),value:"dashed"},{label:Je("Double","digiblocks"),value:"double"},{label:Je("Groove","digiblocks"),value:"groove"},{label:Je("Inset","digiblocks"),value:"inset"},{label:Je("Outset","digiblocks"),value:"outset"},{label:Je("Ridge","digiblocks"),value:"ridge"}],ze=[{label:Je("None","digiblocks"),value:"none"},{label:Je("Zoom In","digiblocks"),value:"zoom-in"},{label:Je("Zoom Out","digiblocks"),value:"zoom-out"},{label:Je("Grayscale to Color","digiblocks"),value:"grayscale"},{label:Je("Blur to Clear","digiblocks"),value:"blur"},{label:Je("Rotate","digiblocks"),value:"rotate"},{label:Je("Glow","digiblocks"),value:"glow"}],qe=[{label:Je("Cover","digiblocks"),value:"cover"},{label:Je("Contain","digiblocks"),value:"contain"},{label:Je("Fill","digiblocks"),value:"fill"},{label:Je("None","digiblocks"),value:"none"}],je=[{label:Je("None","digiblocks"),value:"none"},...Object.keys(Ms).map(n=>({label:n.replace(/-/g," ").replace(/\b\w/g,g=>g.toUpperCase()),value:n}))],Fe=[{label:Je("Thumbnail","digiblocks"),value:"thumbnail"},{label:Je("Medium","digiblocks"),value:"medium"},{label:Je("Large","digiblocks"),value:"large"},{label:Je("Full Size","digiblocks"),value:"full"}],Ie=[{name:"options",title:Je("Options","digiblocks"),icon:Ds.optionsIcon},{name:"style",title:Je("Style","digiblocks"),icon:Ds.styleIcon},{name:"advanced",title:Je("Advanced","digiblocks"),icon:Ds.advancedIcon}],j=[{name:"normal",title:Je("Normal","digiblocks"),className:"digiblocks-tab-1 normal"},{name:"hover",title:Je("Hover","digiblocks"),className:"digiblocks-tab-2 hover"}],Se=[{label:"px",value:"px"},{label:"%",value:"%"},{label:"vw",value:"vw"}],Qe=[{label:"px",value:"px"},{label:"%",value:"%"},{label:"vh",value:"vh"}],G=n=>{if(!n||!n.url){e({imageUrl:void 0,imageId:void 0,altText:""});return}let g=n.url;y&&n.sizes&&n.sizes[y]&&(g=n.sizes[y].url),e({imageUrl:g,imageId:n.id,altText:n.alt||"",title:n.title||""})},pe=()=>{e({imageUrl:void 0,imageId:void 0,altText:"",title:""})},R=()=>{let n=window.digi.responsiveState.activeDevice,g=u[n]?u[n]==="auto"?"auto":`${u[n]}${r}`:"100%",q=S[n]?S[n]==="auto"?"auto":`${S[n]}${D}`:"auto",d="";O&&O!=="none"?d=`
                border-style: ${O};
                border-color: ${V||"#e0e0e0"};
				${Ia(Y,"border-width",n)}
            `:d="border-style: none;";let ie="box-shadow: none;";b&&b.enable&&(ie=`box-shadow: ${b.position==="inset"?"inset ":""}${b.horizontal}px ${b.vertical}px ${b.blur}px ${b.spread}px ${b.color};`);let C=le&&le[n]?`${Ia(le,"padding",n)}`:"padding: 0;",h=Ve&&Ve[n]?`${Ia(Ve,"margin",n)}`:"margin: 0 0 30px 0;",Be="";Q&&(Be=`
                .${o} .digiblocks-image-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: ${X||"rgba(0,0,0,0.5)"};
                    opacity: ${se?"0":"1"};
                    transition: opacity 0.3s ease;
                }
                
                .${o}:hover .digiblocks-image-overlay {
                    opacity: 1;
                }
            `);let a="";if(M&&M.enable){let Ke=M.position==="inset"?"inset ":"";a+=`box-shadow: ${Ke}${M.horizontal}px ${M.vertical}px ${M.blur}px ${M.spread}px ${M.color};`}k&&(a+=`border-color: ${k};`);let ge="";F==="zoom-in"?ge="transform: scale(1.1);":F==="zoom-out"?ge="transform: scale(1);":F==="grayscale"?ge="filter: grayscale(0);":F==="blur"?ge="filter: blur(0);":F==="rotate"?ge="transform: rotate(5deg);":F==="glow"&&(ge="filter: brightness(1.1);");let Ue="";return F==="zoom-out"?Ue="transform: scale(1.1);":F==="grayscale"?Ue="filter: grayscale(100%);":F==="blur"&&(Ue="filter: blur(5px);"),`
            /* Main block styles */
            .${o} {
                display: flex;
				${v==="left"?"justify-content: flex-start;":v==="right"?"justify-content: flex-end;":"justify-content: center;"}
                text-align: ${v};
                width: 100%;
                ${h}
                transition: all 0.3s ease;
            }
            
            /* Figure styles */
            .${o} figure {
                display: inline-block;
                position: relative;
                margin: 0;
                width: ${g};
                max-width: 100%;
                ${C}
                ${d}
                ${ie}
				${Ia(A,"border-radius",n)}
                overflow: hidden;
                transition: all 0.3s ease;
            }
            
            /* Image styles */
            .${o} figure img {
                display: block;
                width: 100%;
                height: ${q};
                object-fit: ${B};
                ${Ue}
                transition: all 0.3s ease;
            }
            
            /* Hover styles */
            .${o} figure:hover {
                ${a}
            }
            
            .${o} figure:hover img {
                ${ge}
            }
            
            /* Overlay */
            ${Be}

			/* Visibility Controls */
			${s.desktop?`
				@media (min-width: 992px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${s.tablet?`
				@media (min-width: 768px) and (max-width: 991px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${s.mobile?`
				@media (max-width: 767px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}
        `},p=()=>{switch(N){case"options":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Ct,{tab:"options",name:"image",title:Je("Image","digiblocks"),initialOpen:!0},wp.element.createElement(Sd,null,wp.element.createElement(wd,{onSelect:G,allowedTypes:["image"],value:l,render:({open:n})=>wp.element.createElement("div",{className:"digiblocks-media-upload-wrapper"},$?wp.element.createElement("div",{className:"digiblocks-media-preview"},wp.element.createElement("img",{src:$,alt:x||""}),wp.element.createElement("div",{className:"digiblocks-media-controls"},wp.element.createElement(_l,{isPrimary:!0,onClick:n},wp.element.createElement("span",{className:"dashicon dashicons dashicons-edit"})),wp.element.createElement(_l,{isDestructive:!0,onClick:pe},wp.element.createElement("span",{className:"dashicon dashicons dashicons-trash"})))):wp.element.createElement(_l,{className:"digiblocks-media-upload-button",isPrimary:!0,onClick:n},Je("Select Image","digiblocks")))})),$&&wp.element.createElement("div",{style:{marginTop:"16px"}},wp.element.createElement(_d,{label:Je("Alt Text","digiblocks"),value:x,onChange:n=>e({altText:n}),help:Je("Alternative text describes your image to people who cannot see it. Add a descriptive text to help screen-reader users.","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(_d,{label:Je("Title","digiblocks"),value:H,onChange:n=>e({title:n}),help:Je("Shown as a tooltip when a user hovers over the image.","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Sl,{label:Je("Image Size","digiblocks"),value:y,options:Fe,onChange:n=>e({sizeSlug:n}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement("div",{style:{marginTop:"16px"}},wp.element.createElement("p",{className:"components-base-control__label"},Je("Link Settings","digiblocks")),wp.element.createElement(Gm,{value:Ce?{url:Ce,opensInNewTab:Z,rel:I}:void 0,onChange:n=>{e({url:n.url,opensInNewTab:n.opensInNewTab,rel:n.rel||""}),be(!1)},settings:[{id:"opensInNewTab",title:Je("Open in new tab")},{id:"rel",title:Je("Add noopener noreferrer")}],onRemove:()=>{e({url:"",opensInNewTab:!1,rel:""}),be(!1)}})))));case"style":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Ct,{tab:"style",name:"dimensions",title:Je("Dimensions","digiblocks"),initialOpen:!0},wp.element.createElement("div",{className:"digiblocks-size-type-field-tabs"},wp.element.createElement("div",{className:"digiblocks-responsive-control-inner"},wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"digiblocks-range-control digiblocks-size-type-field-tabs"},wp.element.createElement("div",{className:"digiblocks-control__header"},wp.element.createElement("div",{className:"digiblocks-responsive-label-wrap"},wp.element.createElement("span",{className:"digiblocks-control-label"},Je("Width","digiblocks")),wp.element.createElement("button",{type:"button","aria-label":Je(`Switch to ${window.digi.responsiveState.getNextDevice()} view`,"digiblocks"),className:`components-button digiblocks-responsive-common-button digiblocks-device-${ne}`,onClick:()=>window.digi.responsiveState.toggleDevice()},window.digi.icons.deviceIcons[ne])),wp.element.createElement("div",{className:"digiblocks-range-control__actions digiblocks-control__actions"},wp.element.createElement("div",{tabIndex:"0"},wp.element.createElement("button",{type:"button",disabled:u[ne]===100,className:"components-button digiblocks-reset is-secondary is-small",onClick:()=>e({width:{...u,[ne]:100}})},wp.element.createElement("span",{className:"dashicon dashicons dashicons-image-rotate"}))),wp.element.createElement(Hs,{value:r,onChange:n=>e({widthUnit:n}),isBlock:!0,isSmall:!0,hideLabelFromVision:!0,"aria-label":Je("Width Unit","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},Se.map(n=>wp.element.createElement(Bl,{key:n.value,value:n.value,label:n.label}))))),wp.element.createElement("div",{className:"digiblocks-range-control__mobile-controls"},wp.element.createElement($d,{value:u[ne],onChange:n=>e({width:{...u,[ne]:n}}),min:1,max:r==="%"?100:1e3,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})))))),wp.element.createElement("div",{className:"digiblocks-size-type-field-tabs"},wp.element.createElement("div",{className:"digiblocks-responsive-control-inner"},wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"digiblocks-range-control digiblocks-size-type-field-tabs"},wp.element.createElement("div",{className:"digiblocks-control__header"},wp.element.createElement("div",{className:"digiblocks-responsive-label-wrap"},wp.element.createElement("span",{className:"digiblocks-control-label"},Je("Height","digiblocks")),wp.element.createElement("button",{type:"button","aria-label":Je(`Switch to ${window.digi.responsiveState.getNextDevice()} view`,"digiblocks"),className:`components-button digiblocks-responsive-common-button digiblocks-device-${ne}`,onClick:()=>window.digi.responsiveState.toggleDevice()},window.digi.icons.deviceIcons[ne])),wp.element.createElement("div",{className:"digiblocks-range-control__actions digiblocks-control__actions"},wp.element.createElement("div",{tabIndex:"0"},wp.element.createElement("button",{type:"button",disabled:S[ne]===300,className:"components-button digiblocks-reset is-secondary is-small",onClick:()=>e({height:{...S,[ne]:300}})},wp.element.createElement("span",{className:"dashicon dashicons dashicons-image-rotate"}))),wp.element.createElement(Hs,{value:D,onChange:n=>e({heightUnit:n}),isBlock:!0,isSmall:!0,hideLabelFromVision:!0,"aria-label":Je("Height Unit","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},Qe.map(n=>wp.element.createElement(Bl,{key:n.value,value:n.value,label:n.label}))))),wp.element.createElement("div",{className:"digiblocks-range-control__mobile-controls"},wp.element.createElement($d,{value:S[ne],onChange:n=>e({height:{...S,[ne]:n}}),min:1,max:D==="%"?100:1e3,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})))))),wp.element.createElement(Sl,{label:Je("Object Fit","digiblocks"),value:B,options:qe,onChange:n=>e({objectFit:n}),help:Je("Determines how the image should be resized to fit its container.","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Hs,{label:Je("Alignment","digiblocks"),value:v,onChange:n=>e({align:n}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(Bl,{value:"left",label:Je("Left","digiblocks")}),wp.element.createElement(Bl,{value:"center",label:Je("Center","digiblocks")}),wp.element.createElement(Bl,{value:"right",label:Je("Right","digiblocks")}))),wp.element.createElement(Ct,{tab:"style",name:"spacing",title:Je("Spacing","digiblocks"),initialOpen:!1},wp.element.createElement(La,{label:Je("Padding","digiblocks")},wp.element.createElement(Oa,{values:le[ne],onChange:n=>e({padding:{...le,[ne]:n}})})),wp.element.createElement(La,{label:Je("Margin","digiblocks")},wp.element.createElement(Oa,{values:Ve[ne],onChange:n=>e({margin:{...Ve,[ne]:n}})}))),wp.element.createElement(Ct,{tab:"style",name:"border",title:Je("Border","digiblocks"),initialOpen:!1},wp.element.createElement(Qm,{className:"digiblocks-control-tabs",activeClass:"active-tab",tabs:j},n=>n.name==="normal"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Sl,{label:Je("Border Style","digiblocks"),value:O,options:fe,onChange:g=>{g!=="none"&&(O==="none"||!O)&&((!Y||Object.keys(Y).length===0)&&e({borderWidth:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}}),(!A||Object.keys(A).length===0)&&e({borderRadius:{desktop:{top:0,right:0,bottom:0,left:0,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}})),e({borderStyle:g})},__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),O&&O!=="none"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Ns,{title:Je("Border Color","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:V,onChange:g=>e({borderColor:g}),label:Je("Border Color","digiblocks")}]}),wp.element.createElement(La,{label:Je("Border Width","digiblocks")},wp.element.createElement(Oa,{values:Y&&Y[ne]?Y[ne]:{top:1,right:1,bottom:1,left:1,unit:"px"},onChange:g=>e({borderWidth:{...Y,[ne]:g}})}))),wp.element.createElement(La,{label:Je("Border Radius","digiblocks")},wp.element.createElement(Oa,{values:A&&A[ne]?A[ne]:{top:0,right:0,bottom:0,left:0,unit:"px"},onChange:g=>e({borderRadius:{...A,[ne]:g}}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]}))):wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Ns,{title:Je("Border Hover Color","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:k,onChange:g=>e({borderHoverColor:g}),label:Je("Border Hover Color","digiblocks")}]})))),wp.element.createElement(Ct,{tab:"style",name:"shadow",title:Je("Box Shadow","digiblocks"),initialOpen:!1},wp.element.createElement(Km,{normalValue:b,hoverValue:M,onNormalChange:n=>e({boxShadow:n}),onHoverChange:n=>e({boxShadowHover:n})})),wp.element.createElement(Ct,{tab:"style",name:"effects",title:Je("Effects","digiblocks"),initialOpen:!1},wp.element.createElement(Sl,{label:Je("Hover Effect","digiblocks"),value:F,options:ze,onChange:n=>e({hoverEffect:n}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Bd,null,wp.element.createElement($l,{label:Je("Enable Overlay","digiblocks"),checked:Q,onChange:()=>e({overlayEnable:!Q})})),Q&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Ns,{title:Je("Overlay Color","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:X,onChange:n=>e({overlayColor:n}),label:Je("Overlay Color","digiblocks")}]}),wp.element.createElement(Bd,null,wp.element.createElement($l,{label:Je("Show Overlay Only on Hover","digiblocks"),checked:se,onChange:()=>e({overlayHoverOnly:!se})})))));case"advanced":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Ct,{tab:"advanced",name:"animation",title:Je("Animation","digiblocks"),initialOpen:!0},wp.element.createElement(Sl,{label:Je("Animation Effect","digiblocks"),value:ee,options:je,onChange:n=>e({animation:n}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),ee&&ee!=="none"&&wp.element.createElement("div",{style:{marginTop:"10px"}},wp.element.createElement(_l,{variant:"secondary",isSecondary:!0,onClick:U,style:{width:"100%"}},Je("Preview Animation","digiblocks")))),wp.element.createElement(Ct,{tab:"advanced",name:"visibility",title:Je("Visibility","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control__help",style:{padding:"12px",backgroundColor:"#f0f6fc",border:"1px solid #c3ddfd",borderRadius:"4px",marginBottom:"16px"}},wp.element.createElement("strong",null,Je("Editor Note:","digiblocks")),wp.element.createElement("br",null),Je("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.","digiblocks")),wp.element.createElement($l,{label:Je("Hide on Desktop","digiblocks"),checked:s.desktop,onChange:n=>e({visibility:{...s,desktop:n}}),__nextHasNoMarginBottom:!0}),wp.element.createElement($l,{label:Je("Hide on Tablet","digiblocks"),checked:s.tablet,onChange:n=>e({visibility:{...s,tablet:n}}),__nextHasNoMarginBottom:!0}),wp.element.createElement($l,{label:Je("Hide on Mobile","digiblocks"),checked:s.mobile,onChange:n=>e({visibility:{...s,mobile:n}}),__nextHasNoMarginBottom:!0})),wp.element.createElement(Ct,{tab:"advanced",name:"additional",title:Je("Additional","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control html-anchor-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"html-anchor"},Je("HTML anchor","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"html-anchor",value:P||"",onChange:n=>e({anchor:n.target.value}),"aria-describedby":"html-anchor-help",autoCapitalize:"none",autoComplete:"off"})),wp.element.createElement("p",{id:"html-anchor-help",className:"components-base-control__help"},Je(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`,"digiblocks")," ",wp.element.createElement("a",{className:"components-external-link",href:"https://wordpress.org/documentation/article/page-jumps/",target:"_blank",rel:"external noreferrer noopener"},wp.element.createElement("span",{className:"components-external-link__contents"},Je("Learn more about anchors","digiblocks")),wp.element.createElement("span",{className:"components-external-link__icon","aria-label":"(opens in a new tab)"},"\u2197")))),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"additional-css-classes"},Je("Additional CSS class(es)","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"additional-css-classes",value:oe||"",onChange:n=>e({customClasses:n.target.value}),"aria-describedby":"additional-css-classes-help",autoComplete:"off"})),wp.element.createElement("p",{id:"additional-css-classes-help",className:"components-base-control__help"},Je("Separate multiple classes with spaces.","digiblocks")))));default:return null}},re=Wm({className:`digiblocks-image ${o} ${ee!=="none"?`animate-${ee}`:""} ${oe||""}`,id:P||null});return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(qm,null,wp.element.createElement(Xm,{tabs:Ie,activeTab:N,onSelect:xe},p())),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:R()}}),wp.element.createElement("div",{...re},wp.element.createElement("figure",null,$?wp.element.createElement(wp.element.Fragment,null,Ce?wp.element.createElement("a",{href:"#",onClick:n=>n.preventDefault()},wp.element.createElement("img",{src:$,alt:x,title:H}),Q&&wp.element.createElement("div",{className:"digiblocks-image-overlay"})):wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("img",{src:$,alt:x,title:H}),Q&&wp.element.createElement("div",{className:"digiblocks-image-overlay"}))):wp.element.createElement(Jm,{icon:"format-image",label:Je("Image","digiblocks"),instructions:Je("Upload an image or select one from your media library.","digiblocks")},wp.element.createElement(Sd,null,wp.element.createElement(wd,{onSelect:G,allowedTypes:["image"],value:l,render:({open:n})=>wp.element.createElement(_l,{isPrimary:!0,onClick:n},Je("Select Image","digiblocks"))}))))))},Nd=Am;var{useBlockProps:eh,RichText:L0}=window.wp.blockEditor,oh=({attributes:te})=>{let{id:e,anchor:K,customClasses:o,imageUrl:P,altText:s,title:oe,animation:l,url:$,opensInNewTab:x,rel:H,overlayEnable:T}=te,u=["digiblocks-image",e,l!=="none"?`animate-${l}`:"",o||""].filter(Boolean).join(" "),r=eh.save({className:u,id:K||void 0});if(!P)return null;let S=wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("img",{src:P,alt:s||"",title:oe||""}),T&&wp.element.createElement("div",{className:"digiblocks-image-overlay"}));return $&&(S=wp.element.createElement("a",{href:$,target:x?"_blank":void 0,rel:H?"noopener noreferrer":void 0},S)),wp.element.createElement("div",{...r},wp.element.createElement("figure",null,S))},Hd=oh;var{__:Ua}=window.wp.i18n,{registerBlockType:th}=window.wp.blocks,{getBlockActiveStatus:ih}=window.wp.digiBlocks;th("digiblocks/image",{apiVersion:2,title:digiBlocksData.blocks.image.title,category:"digiblocks",icon:{src:()=>{let{viewbox:te,path:e}=digiBlocksData.blocks.image.icon;return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${te}`,className:"digiblocks-editor-icons"},wp.element.createElement("path",{d:e}))}},description:digiBlocksData.blocks.image.description,keywords:[Ua("image","digiblocks"),Ua("picture","digiblocks"),Ua("photo","digiblocks"),Ua("media","digiblocks")],supports:{inserter:!!ih("image"),html:!1,className:!1,customClassName:!1,anchor:!1},attributes:{id:{type:"string",default:""},anchor:{type:"string",default:""},visibility:{type:"object",default:{desktop:!1,tablet:!1,mobile:!1}},customClasses:{type:"string",default:""},imageId:{type:"number"},imageUrl:{type:"string",source:"attribute",selector:"img",attribute:"src"},altText:{type:"string",source:"attribute",selector:"img",attribute:"alt",default:""},title:{type:"string",source:"attribute",selector:"img",attribute:"title",default:""},caption:{type:"string",source:"html",selector:"figcaption",default:""},width:{type:"object",default:{desktop:100,tablet:100,mobile:100}},widthUnit:{type:"string",default:"%"},height:{type:"object",default:{desktop:"auto",tablet:"auto",mobile:"auto"}},heightUnit:{type:"string",default:"px"},sizeSlug:{type:"string",default:"large"},align:{type:"string",default:"center"},alignTablet:{type:"string",default:"center"},alignMobile:{type:"string",default:"center"},objectFit:{type:"string",default:"cover"},borderStyle:{type:"string",default:"none"},borderWidth:{type:"object",default:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderRadius:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderColor:{type:"string",default:"#e0e0e0"},borderHoverColor:{type:"string"},boxShadow:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.1)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},boxShadowHover:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},padding:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},margin:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},url:{type:"string",default:""},opensInNewTab:{type:"boolean",default:!1},rel:{type:"string",default:""},animation:{type:"string",default:"none"},hoverEffect:{type:"string",default:"none"},overlayEnable:{type:"boolean",default:!1},overlayColor:{type:"string",default:"rgba(0,0,0,0.5)"},overlayHoverOnly:{type:"boolean",default:!0}},example:{attributes:{imageUrl:"https://s.w.org/images/core/5.3/MtBlanc1.jpg",sizeSlug:"large",width:{desktop:100,tablet:100,mobile:100},widthUnit:"%"}},edit:Nd,save:Hd});var{__:lo}=window.wp.i18n,{useBlockProps:lh,InspectorControls:ah,PanelColorSettings:nh}=window.wp.blockEditor,{TextControl:zd,ToggleControl:Ri,SelectControl:Md,RangeControl:Ps,Placeholder:sh,Spinner:V0,Button:ai,RadioControl:rh,__experimentalToggleGroupControl:Rs,__experimentalToggleGroupControlOption:Tl}=window.wp.components,{useState:Nl,useEffect:Ii,useRef:Li}=window.wp.element,{MediaUpload:Dd,MediaUploadCheck:Pd}=window.wp.blockEditor,{useBlockId:ch,getDimensionCSS:ja,animations:Va,animationPreview:dh}=digi.utils,{tabIcons:Is}=digi.icons,{ResponsiveControl:Fa,DimensionControl:Ea,BoxShadowControl:gh,CustomTabPanel:ph,TabPanelBody:wt}=digi.components,Ls=!1,Wa=null,bh=()=>Ls?Promise.resolve():Wa||(Wa=new Promise((te,e)=>{let K=digiBlocksData.lottie;if(!K){e(new Error("Lottie script URL not found in digiBlocksData"));return}let o=document.createElement("script");o.src=K,o.async=!0,o.onload=()=>{Ls=!0,te()},o.onerror=()=>{e(new Error("Failed to load Lottie script from: "+K))},document.head.appendChild(o)}),Wa),uh=({attributes:te,setAttributes:e,clientId:K})=>{let{id:o,anchor:P,visibility:s,customClasses:oe,lottieSource:l,sourceType:$,lottieFile:x,autoplay:H,loop:T,speed:u,width:r,widthUnit:S,height:D,heightUnit:y,alignment:v,backgroundColor:_,showControls:L,padding:B,margin:O,borderStyle:Y,borderWidth:A,borderRadius:V,borderColor:k,shadow:b,animation:M}=te;ch(o,K,e);let[le,Ve]=Nl(window.digi.responsiveState.activeDevice),[Ce,Z]=Nl(()=>{if(window.digi.uiState){let p=window.digi.uiState.getActiveTab(K);if(p)return p}return"options"}),[I,ee]=Nl(!1),[F,Q]=Nl(null),[X,se]=Nl(Ls),ne=Li(null),ve=Li(null),J=Li(null),ce=Li(null),Te=Li(null),be=Li(!0),N=[{label:"px",value:"px"},{label:"%",value:"%"},{label:"vw",value:"vw"}],xe=[{label:"px",value:"px"},{label:"%",value:"%"},{label:"vh",value:"vh"}];Ii(()=>window.digi.responsiveState.subscribe(re=>{Ve(re)}),[]),Ii(()=>(be.current=!0,()=>{if(be.current=!1,J.current){try{J.current.pause(),J.current.destroy()}catch(p){console.warn("Error destroying animation during cleanup:",p)}J.current=null}window.lottieResizeObserver&&(window.lottieResizeObserver.disconnect(),window.lottieResizeObserver=null)}),[]),Ii(()=>{X||(ee(!0),bh().then(()=>{be.current&&(se(!0),ee(!1),l&&ve.current&&w())}).catch(p=>{be.current&&(Q("Failed to load animation library: "+p.message),ee(!1))}))},[]),Ii(()=>{X&&l&&ve.current&&w()},[X,l,ve.current]),Ii(()=>{J.current&&(L&&!ce.current?U():!L&&ce.current&&(ce.current.remove(),ce.current=null))},[L]);let w=()=>{if(!(!window.DotLottie||!l||!ve.current)){ee(!0),Q(null);try{J.current&&(J.current.destroy?.(),J.current=null),J.current=new window.DotLottie({autoplay:H,loop:T,canvas:ve.current,src:l}),J.current.addEventListener("DOMLoaded",()=>{be.current&&(u!==1&&J.current.setSpeed(u),T||J.current.addEventListener("complete",()=>{J.current.pause(),J.current.goToFrame(0)}),H||(J.current.pause(),J.current.goToFrame(0)),ee(!1),L&&U())}),J.current.addEventListener("error",p=>{console.error("Animation failed to load:",p),be.current&&(Q("Animation failed to load. Check the file or URL."),ee(!1))}),setTimeout(()=>{be.current&&I&&ee(!1)},3e3)}catch(p){console.error("Error initializing animation:",p),Q("Failed to initialize animation: "+p.message),ee(!1)}}},ke=()=>{setTimeout(()=>{be.current&&U()},100)},U=()=>{if(!ne.current||!J.current)return;ce.current&&ce.current.remove();let p=document.createElement("div");p.className="digiblocks-lottie-controls",p.style.position="absolute",p.style.bottom="10px",p.style.left="0",p.style.right="0",p.style.display="flex",p.style.justifyContent="center",p.style.zIndex="10";let re=document.createElement("button");re.className="digiblocks-lottie-play-pause";let n=H;re.innerHTML=n?"\u23F8\uFE0F":"\u25B6\uFE0F",re.style.background="rgba(0,0,0,0.3)",re.style.color="white",re.style.border="none",re.style.borderRadius="4px",re.style.padding="5px 10px",re.style.cursor="pointer",re.addEventListener("click",()=>{J.current&&(n?(J.current.pause(),re.innerHTML="\u25B6\uFE0F"):(J.current.play(),re.innerHTML="\u23F8\uFE0F"),n=!n)}),p.appendChild(re),ne.current.appendChild(p),ce.current=p};Ii(()=>{if(!(!J.current||!J.current.isLoaded))try{J.current.setLoop(T),J.current.setSpeed(u),H?J.current.play():(J.current.pause(),J.current.goToFrame(0)),T||(J.current.removeEventListener("complete"),J.current.addEventListener("complete",()=>{J.current.pause(),J.current.goToFrame(0)}))}catch(p){console.error("Error updating animation settings:",p)}},[H,T,u]);let fe=p=>{!p||!p.url||e({lottieSource:p.url,lottieFile:p,sourceType:"file"})},ze=p=>{e({lottieSource:p,sourceType:"url"})},qe=()=>{if(!l){Q("Please enter a valid URL");return}if(!X){Q("Animation library is still loading. Please wait a moment.");return}w()},je=()=>{dh(o,M,Va,Te)},Fe=()=>{let p=le,re="";return M&&M!=="none"&&Va[M]&&(re=Va[M].keyframes),`
            /* Lottie Block - ${o} */
            .${o} {
				${ja(B,"padding",p)}
				${ja(O,"margin",p)}
                width: 100%;
                display: flex;
                justify-content: ${v==="left"?"flex-start":v==="right"?"flex-end":"center"};
            }
            
            .${o} .digiblocks-lottie-container {
                width: ${r[p]}${S};
                height: ${D[p]}${y};
                ${_?`background-color: ${_};`:""}
                overflow: hidden;
                position: relative;
                ${Y!=="none"?`
					border-style: ${Y};
					border-color: ${k};
					${ja(A,"border-width",p)}
                `:""}
				${ja(V,"border-radius",p)}
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
            ${re}

			/* Visibility Controls */
			${s.desktop?`
				@media (min-width: 992px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${s.tablet?`
				@media (min-width: 768px) and (max-width: 991px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${s.mobile?`
				@media (max-width: 767px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}
        `},Ie=[{label:lo("None","digiblocks"),value:"none"},...Object.keys(Va).map(p=>({label:p.replace(/-/g," ").replace(/\b\w/g,re=>re.toUpperCase()),value:p}))],j=[{label:lo("None","digiblocks"),value:"none"},{label:lo("Solid","digiblocks"),value:"solid"},{label:lo("Dashed","digiblocks"),value:"dashed"},{label:lo("Dotted","digiblocks"),value:"dotted"},{label:lo("Double","digiblocks"),value:"double"}],Se=[{name:"options",title:lo("Options","digiblocks"),icon:Is.optionsIcon},{name:"style",title:lo("Style","digiblocks"),icon:Is.styleIcon},{name:"advanced",title:lo("Advanced","digiblocks"),icon:Is.advancedIcon}],Qe=()=>{switch(Ce){case"options":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(wt,{tab:"options",name:"source",title:lo("Source","digiblocks"),initialOpen:!0},wp.element.createElement(rh,{label:lo("Source Type","digiblocks"),selected:$,options:[{label:lo("File","digiblocks"),value:"file"},{label:lo("URL","digiblocks"),value:"url"}],onChange:p=>e({sourceType:p})}),$==="file"&&wp.element.createElement(Pd,null,wp.element.createElement("div",{style:{marginTop:"12px"}},wp.element.createElement(Dd,{onSelect:fe,allowedTypes:["application/json","text/plain","application/octet-stream"],value:x?.id||0,render:({open:p})=>wp.element.createElement("div",null,wp.element.createElement(ai,{variant:"secondary",onClick:p,style:{marginBottom:"8px",width:"100%"}},lo(l?"Replace Lottie File":"Upload Lottie File","digiblocks")),l&&wp.element.createElement("div",{className:"digiblocks-lottie-file-name",style:{fontSize:"12px",overflow:"hidden",textOverflow:"ellipsis",marginBottom:"8px"}},x?.filename||l.split("/").pop()))}))),$==="url"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(zd,{label:lo("Lottie URL","digiblocks"),value:l,onChange:ze,placeholder:"https://example.com/animation.json",help:lo("Enter the URL to a JSON Lottie animation file","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(ai,{variant:"secondary",onClick:qe,style:{marginTop:"8px"},disabled:!l},lo("Load Animation","digiblocks")))),wp.element.createElement(wt,{tab:"options",name:"animation",title:lo("Animation","digiblocks"),initialOpen:!1},wp.element.createElement(Ri,{label:lo("Autoplay","digiblocks"),checked:H,onChange:p=>e({autoplay:p}),help:lo("Automatically start the animation when the page loads","digiblocks"),__nextHasNoMarginBottom:!0}),wp.element.createElement(Ri,{label:lo("Loop","digiblocks"),checked:T,onChange:p=>e({loop:p}),help:lo("Repeat the animation indefinitely","digiblocks"),__nextHasNoMarginBottom:!0}),wp.element.createElement(Ps,{label:lo("Animation Speed","digiblocks"),value:u,onChange:p=>e({speed:p}),min:.1,max:3,step:.1,help:lo("1 = normal speed, 2 = double speed, 0.5 = half speed","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Ri,{label:lo("Show Controls","digiblocks"),checked:L,onChange:p=>e({showControls:p}),help:lo("Display play/pause control","digiblocks"),__nextHasNoMarginBottom:!0})),wp.element.createElement(wt,{tab:"options",name:"dimensions",title:lo("Dimensions","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"digiblocks-size-type-field-tabs"},wp.element.createElement("div",{className:"digiblocks-responsive-control-inner"},wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"digiblocks-range-control digiblocks-size-type-field-tabs"},wp.element.createElement("div",{className:"digiblocks-control__header"},wp.element.createElement("div",{className:"digiblocks-responsive-label-wrap"},wp.element.createElement("span",{className:"digiblocks-control-label"},lo("Width","digiblocks")),wp.element.createElement("button",{type:"button","aria-label":lo(`Switch to ${window.digi.responsiveState.getNextDevice()} view`,"digiblocks"),className:`components-button digiblocks-responsive-common-button digiblocks-device-${le}`,onClick:()=>window.digi.responsiveState.toggleDevice()},window.digi.icons.deviceIcons[le])),wp.element.createElement("div",{className:"digiblocks-range-control__actions digiblocks-control__actions"},wp.element.createElement("div",{tabIndex:"0"},wp.element.createElement("button",{type:"button",disabled:r[le]===(S==="%"||S==="vw"?100:300),className:"components-button digiblocks-reset is-secondary is-small",onClick:()=>e({width:{...r,[le]:S==="%"||S==="vw"?100:300}})},wp.element.createElement("span",{className:"dashicon dashicons dashicons-image-rotate"}))),wp.element.createElement(Rs,{value:S,onChange:p=>{let re=r[le],n=re;(p==="%"||p==="vw")&&re>100?n=100:(S==="%"||S==="vw")&&p==="px"&&re<50&&(n=300),e({widthUnit:p,width:{...r,[le]:n}})},isBlock:!0,isSmall:!0,hideLabelFromVision:!0,"aria-label":lo("Width Unit","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},N.map(p=>wp.element.createElement(Tl,{key:p.value,value:p.value,label:p.label}))))),wp.element.createElement("div",{className:"digiblocks-range-control__mobile-controls"},wp.element.createElement(Ps,{value:r[le],onChange:p=>e({width:{...r,[le]:p}}),min:10,max:S==="%"||S==="vw"?100:1e3,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})))))),wp.element.createElement("div",{className:"digiblocks-size-type-field-tabs"},wp.element.createElement("div",{className:"digiblocks-responsive-control-inner"},wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"digiblocks-range-control digiblocks-size-type-field-tabs"},wp.element.createElement("div",{className:"digiblocks-control__header"},wp.element.createElement("div",{className:"digiblocks-responsive-label-wrap"},wp.element.createElement("span",{className:"digiblocks-control-label"},lo("Height","digiblocks")),wp.element.createElement("button",{type:"button","aria-label":lo(`Switch to ${window.digi.responsiveState.getNextDevice()} view`,"digiblocks"),className:`components-button digiblocks-responsive-common-button digiblocks-device-${le}`,onClick:()=>window.digi.responsiveState.toggleDevice()},window.digi.icons.deviceIcons[le])),wp.element.createElement("div",{className:"digiblocks-range-control__actions digiblocks-control__actions"},wp.element.createElement("div",{tabIndex:"0"},wp.element.createElement("button",{type:"button",disabled:D[le]===(y==="%"||y==="vh"?100:300),className:"components-button digiblocks-reset is-secondary is-small",onClick:()=>e({height:{...D,[le]:y==="%"||y==="vh"?100:300}})},wp.element.createElement("span",{className:"dashicon dashicons dashicons-image-rotate"}))),wp.element.createElement(Rs,{value:y,onChange:p=>{let re=D[le],n=re;(p==="%"||p==="vh")&&re>100?n=100:(y==="%"||y==="vh")&&p==="px"&&re<50&&(n=300),e({heightUnit:p,height:{...D,[le]:n}})},isBlock:!0,isSmall:!0,hideLabelFromVision:!0,"aria-label":lo("Height Unit","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},xe.map(p=>wp.element.createElement(Tl,{key:p.value,value:p.value,label:p.label}))))),wp.element.createElement("div",{className:"digiblocks-range-control__mobile-controls"},wp.element.createElement(Ps,{value:D[le],onChange:p=>e({height:{...D,[le]:p}}),min:10,max:y==="%"||y==="vh"?100:1e3,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})))))),wp.element.createElement(Rs,{label:lo("Alignment","digiblocks"),value:v,onChange:p=>e({alignment:p}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(Tl,{value:"left",label:lo("Left","digiblocks")}),wp.element.createElement(Tl,{value:"center",label:lo("Center","digiblocks")}),wp.element.createElement(Tl,{value:"right",label:lo("Right","digiblocks")}))));case"style":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(wt,{tab:"style",name:"colors",title:lo("Colors","digiblocks"),initialOpen:!0},wp.element.createElement(nh,{title:lo("Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:_,onChange:p=>e({backgroundColor:p}),label:lo("Background Color","digiblocks")},{value:k,onChange:p=>e({borderColor:p}),label:lo("Border Color","digiblocks")}]})),wp.element.createElement(wt,{tab:"style",name:"borders",title:lo("Borders & Shadows","digiblocks"),initialOpen:!1},wp.element.createElement(Md,{label:lo("Border Style","digiblocks"),value:Y,options:j,onChange:p=>e({borderStyle:p}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),Y!=="none"&&wp.element.createElement(Fa,{label:lo("Border Width","digiblocks")},wp.element.createElement(Ea,{values:A[le],onChange:p=>e({borderWidth:{...A,[le]:p}})})),wp.element.createElement(Fa,{label:lo("Border Radius","digiblocks")},wp.element.createElement(Ea,{values:V[le],onChange:p=>e({borderRadius:{...V,[le]:p}}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]})),wp.element.createElement(gh,{label:lo("Shadow","digiblocks"),normalValue:b,onNormalChange:p=>e({shadow:p})})),wp.element.createElement(wt,{tab:"style",name:"spacing",title:lo("Spacing","digiblocks"),initialOpen:!1},wp.element.createElement(Fa,{label:lo("Padding","digiblocks")},wp.element.createElement(Ea,{values:B[le],onChange:p=>e({padding:{...B,[le]:p}})})),wp.element.createElement(Fa,{label:lo("Margin","digiblocks")},wp.element.createElement(Ea,{values:O[le],onChange:p=>e({margin:{...O,[le]:p}})}))));case"advanced":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(wt,{tab:"advanced",name:"animation",title:lo("Animation","digiblocks"),initialOpen:!0},wp.element.createElement(Md,{label:lo("Animation Effect","digiblocks"),value:M,options:Ie,onChange:p=>e({animation:p}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),M&&M!=="none"&&wp.element.createElement("div",{style:{marginTop:"10px"}},wp.element.createElement(ai,{variant:"secondary",isSecondary:!0,onClick:je,style:{width:"100%"}},lo("Preview Animation","digiblocks")))),wp.element.createElement(wt,{tab:"advanced",name:"visibility",title:lo("Visibility","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control__help",style:{padding:"12px",backgroundColor:"#f0f6fc",border:"1px solid #c3ddfd",borderRadius:"4px",marginBottom:"16px"}},wp.element.createElement("strong",null,lo("Editor Note:","digiblocks")),wp.element.createElement("br",null),lo("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.","digiblocks")),wp.element.createElement(Ri,{label:lo("Hide on Desktop","digiblocks"),checked:s.desktop,onChange:p=>e({visibility:{...s,desktop:p}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(Ri,{label:lo("Hide on Tablet","digiblocks"),checked:s.tablet,onChange:p=>e({visibility:{...s,tablet:p}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(Ri,{label:lo("Hide on Mobile","digiblocks"),checked:s.mobile,onChange:p=>e({visibility:{...s,mobile:p}}),__nextHasNoMarginBottom:!0})),wp.element.createElement(wt,{tab:"advanced",name:"additional",title:lo("Additional","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control html-anchor-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"html-anchor"},lo("HTML anchor","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"html-anchor",value:P||"",onChange:p=>e({anchor:p.target.value}),"aria-describedby":"html-anchor-help",autoCapitalize:"none",autoComplete:"off"})),wp.element.createElement("p",{id:"html-anchor-help",className:"components-base-control__help"},lo(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`,"digiblocks")," ",wp.element.createElement("a",{className:"components-external-link",href:"https://wordpress.org/documentation/article/page-jumps/",target:"_blank",rel:"external noreferrer noopener"},wp.element.createElement("span",{className:"components-external-link__contents"},lo("Learn more about anchors","digiblocks")),wp.element.createElement("span",{className:"components-external-link__icon","aria-label":"(opens in a new tab)"},"\u2197")))),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"additional-css-classes"},lo("Additional CSS class(es)","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"additional-css-classes",value:oe||"",onChange:p=>e({customClasses:p.target.value}),"aria-describedby":"additional-css-classes-help",autoComplete:"off"})),wp.element.createElement("p",{id:"additional-css-classes-help",className:"components-base-control__help"},lo("Separate multiple classes with spaces.","digiblocks")))));default:return null}},G=`digiblocks-lottie ${o} ${oe||""}`,pe=M&&M!=="none"?` animate-${M}`:"",R=lh({className:G+pe,id:P||null});return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(ah,null,wp.element.createElement(ph,{tabs:Se,activeTab:Ce,onSelect:Z},Qe())),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:Fe()}}),wp.element.createElement("div",{...R},l?wp.element.createElement("div",{className:"digiblocks-lottie-container",ref:ne,style:{width:`${r[le]}${S}`,height:`${D[le]}${y}`,position:"relative"}},wp.element.createElement("canvas",{ref:ve,style:{width:"100%",height:"100%",display:"block"}}),F&&wp.element.createElement("div",{className:"digiblocks-lottie-error",style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",textAlign:"center",color:"#cc1818",maxWidth:"90%",padding:"10px"}},wp.element.createElement("p",null,F),wp.element.createElement(ai,{variant:"secondary",onClick:()=>{Q(null),w()}},lo("Try Again","digiblocks")))):wp.element.createElement(sh,{icon:"format-image",label:lo("Lottie Animation","digiblocks"),instructions:lo("Upload a Lottie animation file or provide a URL to a Lottie JSON file.","digiblocks")},$==="file"?wp.element.createElement(Pd,null,wp.element.createElement(Dd,{onSelect:fe,allowedTypes:["application/json","text/plain","application/octet-stream"],render:({open:p})=>wp.element.createElement(ai,{variant:"primary",onClick:p},lo("Upload Lottie File","digiblocks"))})):wp.element.createElement("div",{style:{width:"100%",maxWidth:"400px"}},wp.element.createElement(zd,{placeholder:lo("Enter Lottie JSON URL","digiblocks"),value:l,onChange:ze,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(ai,{variant:"primary",onClick:qe,style:{marginTop:"10px"},disabled:!l},lo("Load Animation","digiblocks"))),wp.element.createElement("div",{style:{marginTop:"12px",display:"flex",justifyContent:"center"}},wp.element.createElement(ai,{variant:"link",onClick:()=>e({sourceType:$==="file"?"url":"file"})},lo($==="file"?"Or use URL instead":"Or upload a file instead","digiblocks"))))))},Rd=uh;var{__:E0}=window.wp.i18n,{useBlockProps:mh}=window.wp.blockEditor,hh=({attributes:te})=>{let{id:e,anchor:K,customClasses:o,lottieSource:P,autoplay:s,loop:oe,speed:l,width:$,widthUnit:x,height:H,heightUnit:T,alignment:u,backgroundColor:r,showControls:S,animation:D,borderStyle:y,borderColor:v,borderWidth:_,borderRadius:L,shadow:B}=te;if(!P)return null;let O=`digiblocks-lottie ${e} ${o||""}`,Y=D&&D!=="none"?` animate-${D}`:"",A=mh.save({className:O+Y,id:K||void 0});return wp.element.createElement("div",{...A},wp.element.createElement("div",{className:"digiblocks-lottie-container","data-src":P,"data-autoplay":s.toString(),"data-loop":oe.toString(),"data-speed":l.toString(),"data-controls":S.toString()},wp.element.createElement("canvas",{width:"100%",height:"100%",style:{width:"100%",height:"100%",display:"block"}})))},Id=hh;var{__:qa}=window.wp.i18n,{registerBlockType:fh}=window.wp.blocks,{getBlockActiveStatus:kh}=window.wp.digiBlocks;fh("digiblocks/lottie",{apiVersion:2,title:digiBlocksData.blocks.lottie.title,category:"digiblocks",icon:{src:()=>{let{viewbox:te,path:e}=digiBlocksData.blocks.lottie.icon;return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${te}`,className:"digiblocks-editor-icons"},wp.element.createElement("path",{d:e}))}},description:digiBlocksData.blocks.lottie.description,keywords:[qa("lottie","digiblocks"),qa("animation","digiblocks"),qa("dotlottie","digiblocks"),qa("motion","digiblocks")],supports:{inserter:!!kh("lottie"),html:!1,className:!1,customClassName:!1,anchor:!1},attributes:{id:{type:"string",default:""},anchor:{type:"string",default:""},visibility:{type:"object",default:{desktop:!1,tablet:!1,mobile:!1}},customClasses:{type:"string",default:""},lottieSource:{type:"string",default:""},sourceType:{type:"string",default:"file"},lottieFile:{type:"object",default:null},autoplay:{type:"boolean",default:!0},loop:{type:"boolean",default:!0},speed:{type:"number",default:1},width:{type:"object",default:{desktop:300,tablet:300,mobile:300}},widthUnit:{type:"string",default:"px"},height:{type:"object",default:{desktop:300,tablet:300,mobile:300}},heightUnit:{type:"string",default:"px"},alignment:{type:"string",default:"center"},backgroundColor:{type:"string",default:""},showControls:{type:"boolean",default:!1},padding:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},margin:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderStyle:{type:"string",default:"none"},borderWidth:{type:"object",default:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderRadius:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderColor:{type:"string",default:"#e0e0e0"},shadow:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0}},animation:{type:"string",default:"none"}},example:{attributes:{lottieSource:"https://lottie.host/74c2e0cc-daa3-4269-b9a8-3205d6cd70d6/V7KchLpRt2.lottie",autoplay:!0,loop:!0,width:{desktop:300,tablet:300,mobile:300},height:{desktop:300,tablet:300,mobile:300}}},edit:Rd,save:Id});var{__:Le}=window.wp.i18n,{useBlockProps:vh,InspectorControls:xh,PanelColorSettings:Hl,RichText:Os}=window.wp.blockEditor,{TextControl:Ga,ToggleControl:Oi,SelectControl:Qa,RangeControl:Us,TabPanel:yh,Notice:Ch,Button:wh,__experimentalToggleGroupControl:Sh,__experimentalToggleGroupControlOption:Ld}=window.wp.components,{useState:Od,useEffect:Ud,useRef:$h}=window.wp.element,{useBlockId:_h,getDimensionCSS:zl,animations:Ml,animationPreview:jd}=digi.utils,{tabIcons:js}=digi.icons,{ResponsiveButtonGroup:Bh,ResponsiveControl:Pt,DimensionControl:Dl,TypographyControl:Ja,BoxShadowControl:Vs,CustomTabPanel:Th,TabPanelBody:ct,ResponsiveRangeControl:Vd}=digi.components,Nh=({attributes:te,setAttributes:e,clientId:K})=>{let{id:o,anchor:P,visibility:s,customClasses:oe,layout:l,align:$,title:x,showTitle:H,description:T,showDescription:u,emailPlaceholder:r,namePlaceholder:S,buttonText:D,showNameField:y,successMessage:v,errorMessage:_,titleColor:L,titleHoverColor:B,descriptionColor:O,inputTextColor:Y,inputBackgroundColor:A,inputBorderColor:V,inputBorderFocusColor:k,inputPlaceholderColor:b,buttonTextColor:M,buttonBackgroundColor:le,buttonTextHoverColor:Ve,buttonBackgroundHoverColor:Ce,buttonBorderColor:Z,buttonBorderHoverColor:I,backgroundColor:ee,backgroundHoverColor:F,containerBorderColor:Q,containerBorderHoverColor:X,titleTypography:se,contentTypography:ne,textTypography:ve,buttonTypography:J,containerBorderRadius:ce,containerBorderWidth:Te,containerBorderStyle:be,inputBorderRadius:N,inputBorderWidth:xe,inputBorderStyle:w,buttonBorderRadius:ke,buttonBorderWidth:U,buttonBorderStyle:fe,spacing:ze,inputSpacing:qe,padding:je,margin:Fe,boxShadow:Ie,boxShadowHover:j,buttonBoxShadow:Se,buttonBoxShadowHover:Qe,inputBoxShadow:G,inputBoxShadowHover:pe,animation:R}=te;_h(o,K,e);let[p,re]=Od(window.digi.responsiveState.activeDevice),[n,g]=Od(()=>{if(window.digi.uiState){let t=window.digi.uiState.getActiveTab(K);if(t)return t}return"options"});Ud(()=>window.digi.responsiveState.subscribe(m=>{re(m)}),[]);let q=$h(null);Ud(()=>{if(R&&R!=="none"){let t=setTimeout(()=>{jd(o,R,Ml,q)},100);return()=>clearTimeout(t)}},[R]);let d=()=>{jd(o,R,Ml,q)},ie=[{label:Le("None","digiblocks"),value:"none"},...Object.keys(Ml).map(t=>({label:t.replace(/-/g," ").replace(/\b\w/g,m=>m.toUpperCase()),value:t}))],C=[{label:Le("Stacked","digiblocks"),value:"stacked"},{label:Le("Inline","digiblocks"),value:"inline"}],h=[{label:Le("None","digiblocks"),value:"none"},{label:Le("Solid","digiblocks"),value:"solid"},{label:Le("Dashed","digiblocks"),value:"dashed"},{label:Le("Dotted","digiblocks"),value:"dotted"},{label:Le("Double","digiblocks"),value:"double"}],Be=[{name:"options",title:Le("Options","digiblocks"),icon:js.optionsIcon},{name:"style",title:Le("Style","digiblocks"),icon:js.styleIcon},{name:"advanced",title:Le("Advanced","digiblocks"),icon:js.advancedIcon}],a=[{name:"normal",title:Le("Normal","digiblocks"),className:"digiblocks-tab-1 normal"},{name:"hover",title:Le("Hover","digiblocks"),className:"digiblocks-tab-2 hover"}],ge=()=>{let t=p,m="";return R&&R!=="none"&&Ml[R]&&(m=Ml[R].keyframes),`
            /* Newsletter Block - ${o} */
            .${o} {
                ${zl(je,"padding",t)}
                ${zl(Fe,"margin",t)}
                ${ee?`background-color: ${ee};`:""}
                ${Ie?.enable?`box-shadow: ${Ie.horizontal}px ${Ie.vertical}px ${Ie.blur}px ${Ie.spread}px ${Ie.color};`:""}
				${be!=="none"?"border: "+(Te[t]||1)+"px "+(be||"solid")+" "+Q+";":"border: none;"}
                ${zl(ce,"border-radius",t)}
                transition: all 0.3s ease;
                text-align: ${$[t]==="center"?"center":$[t]==="right"?"right":"left"};
            }

            .${o}:hover {
                ${F?`background-color: ${F};`:""}
                ${X?`border-color: ${X};`:""}
                ${j?.enable?`box-shadow: ${j.horizontal}px ${j.vertical}px ${j.blur}px ${j.spread}px ${j.color};`:""}
            }

            /* Newsletter Title */
            .${o} .digiblocks-newsletter-title {
                color: ${L};
                margin-top: 0;
                margin-bottom: ${ze[t]?.value||20}${ze[t]?.unit||"px"};
                ${se.fontFamily?`font-family: ${se.fontFamily};`:""}
                ${se.fontSize?.[t]?`font-size: ${se.fontSize[t]}${se.fontSizeUnit||"px"};`:""}
                ${se.fontWeight?`font-weight: ${se.fontWeight};`:""}
                ${se.fontStyle?`font-style: ${se.fontStyle};`:""}
                ${se.textTransform?`text-transform: ${se.textTransform};`:""}
                ${se.textDecoration?`text-decoration: ${se.textDecoration};`:""}
                ${se.lineHeight?.[t]?`line-height: ${se.lineHeight[t]}${se.lineHeightUnit||"em"};`:""}
                ${se.letterSpacing?.[t]?`letter-spacing: ${se.letterSpacing[t]}${se.letterSpacingUnit||"px"};`:""}
                transition: color 0.3s ease;
            }

            .${o}:hover .digiblocks-newsletter-title {
                ${B?`color: ${B};`:""}
            }

            /* Newsletter Description */
            .${o} .digiblocks-newsletter-description {
                color: ${O};
                margin-bottom: ${ze[t]?.value||20}${ze[t]?.unit||"px"};
                ${ne.fontFamily?`font-family: ${ne.fontFamily};`:""}
                ${ne.fontSize?.[t]?`font-size: ${ne.fontSize[t]}${ne.fontSizeUnit||"px"};`:""}
                ${ne.fontWeight?`font-weight: ${ne.fontWeight};`:""}
                ${ne.fontStyle?`font-style: ${ne.fontStyle};`:""}
                ${ne.textTransform?`text-transform: ${ne.textTransform};`:""}
                ${ne.textDecoration?`text-decoration: ${ne.textDecoration};`:""}
                ${ne.lineHeight?.[t]?`line-height: ${ne.lineHeight[t]}${ne.lineHeightUnit||"em"};`:""}
                ${ne.letterSpacing?.[t]?`letter-spacing: ${ne.letterSpacing[t]}${ne.letterSpacingUnit||"px"};`:""}
            }

            /* Newsletter Form */
            .${o} .digiblocks-newsletter-form {
                display: flex;
                ${l==="stacked"?"flex-direction: column;":"flex-direction: row;"}
                gap: ${qe[t]?.value||10}${qe[t]?.unit||"px"};
                ${l==="inline"&&$[t]==="center"?"justify-content: center;":""}
                ${l==="inline"&&$[t]==="right"?"justify-content: flex-end;":""}
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
                ${ve.fontSize?.[t]?`width: ${ve.fontSize[t]}${ve.fontSizeUnit||"px"};`:"width: 1em;"}
                ${ve.fontSize?.[t]?`height: ${ve.fontSize[t]}${ve.fontSizeUnit||"px"};`:"height: 1em;"}
                fill: ${Y};
                pointer-events: none;
                z-index: 2;
                opacity: 0.7;
                transition: all 0.3s ease;
            }

            /* Input Styles */
            .${o} .digiblocks-newsletter-input {
                width: 100%;
                padding: 12px 16px 12px 50px;
                color: ${Y};
                background-color: ${A};
				${w!=="none"?"border: "+(xe[t]||1)+"px "+(w||"solid")+" "+V+";":"border: none;"}
                ${zl(N,"border-radius",t)}
                ${G?.enable?`box-shadow: ${G.horizontal}px ${G.vertical}px ${G.blur}px ${G.spread}px ${G.color};`:""}
                ${ve.fontFamily?`font-family: ${ve.fontFamily};`:""}
                ${ve.fontSize?.[t]?`font-size: ${ve.fontSize[t]}${ve.fontSizeUnit||"px"};`:""}
                ${ve.fontWeight?`font-weight: ${ve.fontWeight};`:""}
                ${ve.fontStyle?`font-style: ${ve.fontStyle};`:""}
                ${ve.textTransform?`text-transform: ${ve.textTransform};`:""}
                ${ve.textDecoration?`text-decoration: ${ve.textDecoration};`:""}
                ${ve.lineHeight?.[t]?`line-height: ${ve.lineHeight[t]}${ve.lineHeightUnit||"em"};`:""}
                ${ve.letterSpacing?.[t]?`letter-spacing: ${ve.letterSpacing[t]}${ve.letterSpacingUnit||"px"};`:""}
                transition: all 0.3s ease;
                outline: none;
				box-shadow: none;
            }

            .${o} .digiblocks-newsletter-input::placeholder {
                color: ${b};
            }

            .${o} .digiblocks-newsletter-input:focus {
                border-color: ${k};
                ${pe?.enable?`box-shadow: ${pe.horizontal}px ${pe.vertical}px ${pe.blur}px ${pe.spread}px ${pe.color};`:""}
            }

            .${o} .digiblocks-newsletter-input:focus + .digiblocks-newsletter-input-icon {
                opacity: 1;
                fill: ${k||Y};
            }

            /* Button Styles */
            .${o} .digiblocks-newsletter-button {
                padding: 12px 24px;
                color: ${M};
                background-color: ${le};
				${fe!=="none"?"border: "+(U[t]||1)+"px "+(fe||"solid")+" "+Z+";":"border: none;"}
                ${zl(ke,"border-radius",t)}
                ${Se?.enable?`box-shadow: ${Se.horizontal}px ${Se.vertical}px ${Se.blur}px ${Se.spread}px ${Se.color};`:""}
                ${J.fontFamily?`font-family: ${J.fontFamily};`:""}
                ${J.fontSize?.[t]?`font-size: ${J.fontSize[t]}${J.fontSizeUnit||"px"};`:""}
                ${J.fontWeight?`font-weight: ${J.fontWeight};`:""}
                ${J.fontStyle?`font-style: ${J.fontStyle};`:""}
                ${J.textTransform?`text-transform: ${J.textTransform};`:""}
                ${J.textDecoration?`text-decoration: ${J.textDecoration};`:""}
                ${J.lineHeight?.[t]?`line-height: ${J.lineHeight[t]}${J.lineHeightUnit||"em"};`:""}
                ${J.letterSpacing?.[t]?`letter-spacing: ${J.letterSpacing[t]}${J.letterSpacingUnit||"px"};`:""}
                cursor: pointer;
                transition: all 0.3s ease;
                ${l==="stacked"?"width: 100%;":"white-space: nowrap;"}
            }

            .${o} .digiblocks-newsletter-button:hover {
                color: ${Ve||M};
                background-color: ${Ce||le};
                border-color: ${I||Z};
                ${Qe?.enable?`box-shadow: ${Qe.horizontal}px ${Qe.vertical}px ${Qe.blur}px ${Qe.spread}px ${Qe.color};`:""}
            }

            /* Messages */
            .${o} .digiblocks-newsletter-message {
                margin-top: ${ze[t]}px;
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
            ${m}

			/* Responsive */
			@media (max-width: 767px) {
				.${o} .digiblocks-newsletter-form {
					flex-direction: column;
				}
			}

			/* Visibility Controls */
			${s.desktop?`
				@media (min-width: 992px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${s.tablet?`
				@media (min-width: 768px) and (max-width: 991px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${s.mobile?`
				@media (max-width: 767px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}
        `},Ue=()=>{switch(n){case"options":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(ct,{tab:"options",name:"content",title:Le("Content","digiblocks"),initialOpen:!0},wp.element.createElement(Ch,{status:"warning",isDismissible:!1,className:"digiblocks-notice components-base-control"},wp.element.createElement(wp.element.Fragment,null,Le("Configure your newsletter platform in ","digiblocks"),wp.element.createElement("a",{href:"/wp-admin/admin.php?page=digiblocks-settings",target:"_blank",rel:"noopener noreferrer"},Le("DigiBlocks Settings","digiblocks")),Le(" to enable subscriptions.","digiblocks"))),wp.element.createElement(Oi,{label:Le("Show Title","digiblocks"),checked:H,onChange:t=>e({showTitle:t}),__nextHasNoMarginBottom:!0}),wp.element.createElement(Oi,{label:Le("Show Description","digiblocks"),checked:u,onChange:t=>e({showDescription:t}),__nextHasNoMarginBottom:!0}),wp.element.createElement(Oi,{label:Le("Show Name Field","digiblocks"),checked:y,onChange:t=>e({showNameField:t}),__nextHasNoMarginBottom:!0}),wp.element.createElement(Ga,{label:Le("Email Placeholder","digiblocks"),value:r,onChange:t=>e({emailPlaceholder:t}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),y&&wp.element.createElement(Ga,{label:Le("Name Placeholder","digiblocks"),value:S,onChange:t=>e({namePlaceholder:t}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Ga,{label:Le("Success Message","digiblocks"),value:v,onChange:t=>e({successMessage:t}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Ga,{label:Le("Error Message","digiblocks"),value:_,onChange:t=>e({errorMessage:t}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(ct,{tab:"options",name:"layout",title:Le("Layout","digiblocks"),initialOpen:!1},wp.element.createElement(Sh,{label:Le("Layout","digiblocks"),value:l,onChange:t=>e({layout:t}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(Ld,{value:"stacked",label:Le("Stacked","digiblocks")}),wp.element.createElement(Ld,{value:"inline",label:Le("Inline","digiblocks")})),wp.element.createElement(Bh,{label:Le("Alignment","digiblocks"),value:$,onChange:t=>e({align:t}),options:[{label:Le("Left","digiblocks"),value:"left"},{label:Le("Center","digiblocks"),value:"center"},{label:Le("Right","digiblocks"),value:"right"}]}),wp.element.createElement(Vd,{label:Le("Content Spacing","digiblocks"),value:ze,onChange:t=>e({spacing:t}),units:[{label:"px",value:"px"},{label:"em",value:"em"},{label:"rem",value:"rem"}],defaultUnit:"px",min:0,max:100,step:1,defaultValues:{desktop:{value:20,unit:"px"},tablet:{value:20,unit:"px"},mobile:{value:20,unit:"px"}}}),wp.element.createElement(Vd,{label:Le("Field Spacing","digiblocks"),value:qe,onChange:t=>e({inputSpacing:t}),units:[{label:"px",value:"px"},{label:"em",value:"em"},{label:"rem",value:"rem"}],defaultUnit:"px",min:0,max:50,step:1,defaultValues:{desktop:{value:10,unit:"px"},tablet:{value:8,unit:"px"},mobile:{value:6,unit:"px"}}})));case"style":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(ct,{tab:"style",name:"colors",title:Le("Colors","digiblocks"),initialOpen:!0},wp.element.createElement(yh,{className:"digiblocks-control-tabs",activeClass:"active-tab",tabs:a},t=>t.name==="normal"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Hl,{title:Le("Text Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:L,onChange:m=>e({titleColor:m}),label:Le("Title Color","digiblocks")},{value:O,onChange:m=>e({descriptionColor:m}),label:Le("Description Color","digiblocks")}]}),wp.element.createElement(Hl,{title:Le("Input Colors","digiblocks"),initialOpen:!1,enableAlpha:!0,colorSettings:[{value:Y,onChange:m=>e({inputTextColor:m}),label:Le("Input Text Color","digiblocks")},{value:A,onChange:m=>e({inputBackgroundColor:m}),label:Le("Input Background","digiblocks")},{value:V,onChange:m=>e({inputBorderColor:m}),label:Le("Input Border","digiblocks")},{value:k,onChange:m=>e({inputBorderFocusColor:m}),label:Le("Input Border Focus","digiblocks")},{value:b,onChange:m=>e({inputPlaceholderColor:m}),label:Le("Placeholder Color","digiblocks")}]}),wp.element.createElement(Hl,{title:Le("Button Colors","digiblocks"),initialOpen:!1,enableAlpha:!0,colorSettings:[{value:M,onChange:m=>e({buttonTextColor:m}),label:Le("Button Text","digiblocks")},{value:le,onChange:m=>e({buttonBackgroundColor:m}),label:Le("Button Background","digiblocks")},{value:Z,onChange:m=>e({buttonBorderColor:m}),label:Le("Button Border","digiblocks")}]}),wp.element.createElement(Hl,{title:Le("Background Colors","digiblocks"),initialOpen:!1,enableAlpha:!0,colorSettings:[{value:ee,onChange:m=>e({backgroundColor:m}),label:Le("Background Color","digiblocks")},{value:Q,onChange:m=>e({containerBorderColor:m}),label:Le("Border Color","digiblocks")}]})):wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Hl,{title:Le("Hover Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:B,onChange:m=>e({titleHoverColor:m}),label:Le("Title Hover Color","digiblocks")},{value:Ve,onChange:m=>e({buttonTextHoverColor:m}),label:Le("Button Text Hover","digiblocks")},{value:Ce,onChange:m=>e({buttonBackgroundHoverColor:m}),label:Le("Button Background Hover","digiblocks")},{value:I,onChange:m=>e({buttonBorderHoverColor:m}),label:Le("Button Border Hover","digiblocks")},{value:F,onChange:m=>e({backgroundHoverColor:m}),label:Le("Background Hover","digiblocks")},{value:X,onChange:m=>e({containerBorderHoverColor:m}),label:Le("Border Hover","digiblocks")}]})))),wp.element.createElement(ct,{tab:"style",name:"typography",title:Le("Typography","digiblocks"),initialOpen:!1},wp.element.createElement(Ja,{label:Le("Title Typography","digiblocks"),value:se,onChange:t=>e({titleTypography:t}),defaults:{fontSize:{desktop:24,tablet:22,mobile:20},fontWeight:"600",lineHeight:{desktop:1.4,tablet:1.3,mobile:1.2}}}),wp.element.createElement(Ja,{label:Le("Description Typography","digiblocks"),value:ne,onChange:t=>e({contentTypography:t}),defaults:{fontSize:{desktop:16,tablet:15,mobile:14},lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3}}}),wp.element.createElement(Ja,{label:Le("Input Typography","digiblocks"),value:ve,onChange:t=>e({textTypography:t}),defaults:{fontSize:{desktop:16,tablet:15,mobile:14},lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3}}}),wp.element.createElement(Ja,{label:Le("Button Typography","digiblocks"),value:J,onChange:t=>e({buttonTypography:t}),defaults:{fontSize:{desktop:16,tablet:15,mobile:14},fontWeight:"500",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3}}})),wp.element.createElement(ct,{tab:"style",name:"borders",title:Le("Borders & Radius","digiblocks"),initialOpen:!1},wp.element.createElement("h4",null,Le("Container Border","digiblocks")),wp.element.createElement(Qa,{label:Le("Container Border Style","digiblocks"),value:be,options:h,onChange:t=>e({containerBorderStyle:t}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Pt,{label:Le("Container Border Width","digiblocks")},wp.element.createElement(Us,{value:Te[p],onChange:t=>e({containerBorderWidth:{...Te,[p]:t}}),min:0,max:10,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(Pt,{label:Le("Container Border Radius","digiblocks")},wp.element.createElement(Dl,{values:ce[p],onChange:t=>e({containerBorderRadius:{...ce,[p]:t}}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]})),wp.element.createElement("h4",null,Le("Input Border","digiblocks")),wp.element.createElement(Qa,{label:Le("Input Border Style","digiblocks"),value:w,options:h,onChange:t=>e({inputBorderStyle:t}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Pt,{label:Le("Input Border Width","digiblocks")},wp.element.createElement(Us,{value:xe[p],onChange:t=>e({inputBorderWidth:{...xe,[p]:t}}),min:0,max:10,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(Pt,{label:Le("Input Border Radius","digiblocks")},wp.element.createElement(Dl,{values:N[p],onChange:t=>e({inputBorderRadius:{...N,[p]:t}}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]})),wp.element.createElement("h4",null,Le("Button Border","digiblocks")),wp.element.createElement(Qa,{label:Le("Button Border Style","digiblocks"),value:fe,options:h,onChange:t=>e({buttonBorderStyle:t}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Pt,{label:Le("Button Border Width","digiblocks")},wp.element.createElement(Us,{value:U[p],onChange:t=>e({buttonBorderWidth:{...U,[p]:t}}),min:0,max:10,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(Pt,{label:Le("Button Border Radius","digiblocks")},wp.element.createElement(Dl,{values:ke[p],onChange:t=>e({buttonBorderRadius:{...ke,[p]:t}}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]}))),wp.element.createElement(ct,{tab:"style",name:"shadow",title:Le("Box Shadow","digiblocks"),initialOpen:!1},wp.element.createElement(Vs,{label:Le("Container Shadow","digiblocks"),normalValue:Ie,hoverValue:j,onNormalChange:t=>e({boxShadow:t}),onHoverChange:t=>e({boxShadowHover:t})}),wp.element.createElement(Vs,{label:Le("Input Shadow","digiblocks"),normalValue:G,hoverValue:pe,onNormalChange:t=>e({inputBoxShadow:t}),onHoverChange:t=>e({inputBoxShadowHover:t})}),wp.element.createElement(Vs,{label:Le("Button Shadow","digiblocks"),normalValue:Se,hoverValue:Qe,onNormalChange:t=>e({buttonBoxShadow:t}),onHoverChange:t=>e({buttonBoxShadowHover:t})})),wp.element.createElement(ct,{tab:"style",name:"spacing",title:Le("Spacing","digiblocks"),initialOpen:!1},wp.element.createElement(Pt,{label:Le("Padding","digiblocks")},wp.element.createElement(Dl,{values:je[p],onChange:t=>e({padding:{...je,[p]:t}})})),wp.element.createElement(Pt,{label:Le("Margin","digiblocks")},wp.element.createElement(Dl,{values:Fe[p],onChange:t=>e({margin:{...Fe,[p]:t}})}))));case"advanced":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(ct,{tab:"advanced",name:"animation",title:Le("Animation","digiblocks"),initialOpen:!0},wp.element.createElement(Qa,{label:Le("Animation Effect","digiblocks"),value:R,options:ie,onChange:t=>e({animation:t}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),R&&R!=="none"&&wp.element.createElement("div",{style:{marginTop:"10px"}},wp.element.createElement(wh,{variant:"secondary",isSecondary:!0,onClick:d,style:{width:"100%"}},Le("Preview Animation","digiblocks")))),wp.element.createElement(ct,{tab:"advanced",name:"visibility",title:Le("Visibility","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control__help",style:{padding:"12px",backgroundColor:"#f0f6fc",border:"1px solid #c3ddfd",borderRadius:"4px",marginBottom:"16px"}},wp.element.createElement("strong",null,Le("Editor Note:","digiblocks")),wp.element.createElement("br",null),Le("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.","digiblocks")),wp.element.createElement(Oi,{label:Le("Hide on Desktop","digiblocks"),checked:s.desktop,onChange:t=>e({visibility:{...s,desktop:t}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(Oi,{label:Le("Hide on Tablet","digiblocks"),checked:s.tablet,onChange:t=>e({visibility:{...s,tablet:t}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(Oi,{label:Le("Hide on Mobile","digiblocks"),checked:s.mobile,onChange:t=>e({visibility:{...s,mobile:t}}),__nextHasNoMarginBottom:!0})),wp.element.createElement(ct,{tab:"advanced",name:"additional",title:Le("Additional","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control html-anchor-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"html-anchor"},Le("HTML anchor","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"html-anchor",value:P||"",onChange:t=>e({anchor:t.target.value}),"aria-describedby":"html-anchor-help",autoCapitalize:"none",autoComplete:"off"})),wp.element.createElement("p",{id:"html-anchor-help",className:"components-base-control__help"},Le(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`,"digiblocks")," ",wp.element.createElement("a",{className:"components-external-link",href:"https://wordpress.org/documentation/article/page-jumps/",target:"_blank",rel:"external noreferrer noopener"},wp.element.createElement("span",{className:"components-external-link__contents"},Le("Learn more about anchors","digiblocks")),wp.element.createElement("span",{className:"components-external-link__icon","aria-label":"(opens in a new tab)"},"\u2197")))),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"additional-css-classes"},Le("Additional CSS class(es)","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"additional-css-classes",value:oe||"",onChange:t=>e({customClasses:t.target.value}),"aria-describedby":"additional-css-classes-help",autoComplete:"off"})),wp.element.createElement("p",{id:"additional-css-classes-help",className:"components-base-control__help"},Le("Separate multiple classes with spaces.","digiblocks")))));default:return null}},Ke=R!=="none"?` animate-${R}`:"",ao=`digiblocks-newsletter ${o}${Ke} ${oe||""}`,co=vh({className:ao,id:P||null});return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(xh,null,wp.element.createElement(Th,{tabs:Be,activeTab:n,onSelect:g},Ue())),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:ge()}}),wp.element.createElement("div",{...co},H&&wp.element.createElement(Os,{tagName:"h3",className:"digiblocks-newsletter-title",value:x,onChange:t=>e({title:t}),placeholder:Le("Subscribe to our Newsletter","digiblocks")}),u&&wp.element.createElement(Os,{tagName:"p",className:"digiblocks-newsletter-description",value:T,onChange:t=>e({description:t}),placeholder:Le("Stay updated with our latest news and offers","digiblocks")}),wp.element.createElement("form",{className:"digiblocks-newsletter-form",onSubmit:t=>t.preventDefault()},wp.element.createElement("div",{className:"digiblocks-newsletter-fields"},y&&wp.element.createElement("div",{className:"digiblocks-newsletter-field"},wp.element.createElement("div",{className:"digiblocks-newsletter-input-container"},wp.element.createElement("input",{type:"text",className:"digiblocks-newsletter-input",placeholder:S,disabled:!0}),wp.element.createElement("svg",{className:"digiblocks-newsletter-input-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M320 128a96 96 0 1 0 -192 0 96 96 0 1 0 192 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM32 480l384 0c-1.2-79.7-66.2-144-146.3-144l-91.4 0c-80 0-145 64.3-146.3 144zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z"})))),wp.element.createElement("div",{className:"digiblocks-newsletter-field"},wp.element.createElement("div",{className:"digiblocks-newsletter-input-container"},wp.element.createElement("input",{type:"email",className:"digiblocks-newsletter-input",placeholder:r,disabled:!0}),wp.element.createElement("svg",{className:"digiblocks-newsletter-input-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M392 32L120 32c-13.3 0-24 10.7-24 24l0 166.5L77.5 207.2c-4.2-3.4-8.7-6.3-13.5-8.6L64 56C64 25.1 89.1 0 120 0L392 0c30.9 0 56 25.1 56 56l0 142.6c-4.8 2.3-9.3 5.2-13.4 8.6L416 222.5 416 56c0-13.3-10.7-24-24-24zM35 256c-1.6 0-3 1.3-3 3l0 189c0 17.7 14.3 32 32 32l384 0c17.7 0 32-14.3 32-32l0-189c0-1.6-1.3-3-3-3c-.7 0-1.3 .2-1.9 .7L294.5 405.1C283.7 414 270 418.9 256 418.9s-27.7-4.9-38.5-13.8L36.8 256.7c-.5-.4-1.2-.7-1.9-.7zM0 259c0-19.3 15.6-35 35-35c8.1 0 15.9 2.8 22.2 7.9L237.8 380.3c5.1 4.2 11.6 6.5 18.2 6.5s13.1-2.3 18.2-6.5L454.9 231.9c6.3-5.1 14.1-7.9 22.2-7.9c19.3 0 35 15.6 35 35l0 189c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 259zM176 128l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 96l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"}))))),wp.element.createElement(Os,{tagName:"button",className:"digiblocks-newsletter-button",value:D,onChange:t=>e({buttonText:t}),placeholder:Le("Subscribe","digiblocks")})),wp.element.createElement("div",{className:"digiblocks-newsletter-message success"},v),wp.element.createElement("div",{className:"digiblocks-newsletter-message error"},_)))},Fd=Nh;var{useBlockProps:Hh,RichText:Fs}=window.wp.blockEditor,zh=({attributes:te})=>{let{id:e,anchor:K,customClasses:o,title:P,showTitle:s,description:oe,showDescription:l,emailPlaceholder:$,namePlaceholder:x,buttonText:H,showNameField:T,successMessage:u,errorMessage:r,animation:S}=te,D=S!=="none"?` animate-${S}`:"",y=`digiblocks-newsletter ${e}${D} ${o||""}`,v=Hh.save({className:y,id:K||null});return wp.element.createElement("div",{...v},s&&wp.element.createElement(Fs.Content,{tagName:"h3",className:"digiblocks-newsletter-title",value:P}),l&&wp.element.createElement(Fs.Content,{tagName:"p",className:"digiblocks-newsletter-description",value:oe}),wp.element.createElement("form",{className:"digiblocks-newsletter-form",method:"post"},wp.element.createElement("div",{className:"digiblocks-newsletter-fields"},T&&wp.element.createElement("div",{className:"digiblocks-newsletter-field"},wp.element.createElement("div",{className:"digiblocks-newsletter-input-container"},wp.element.createElement("input",{type:"text",name:"digiblocks_newsletter_name",className:"digiblocks-newsletter-input",placeholder:x,required:T}),wp.element.createElement("svg",{className:"digiblocks-newsletter-input-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M320 128a96 96 0 1 0 -192 0 96 96 0 1 0 192 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM32 480l384 0c-1.2-79.7-66.2-144-146.3-144l-91.4 0c-80 0-145 64.3-146.3 144zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z"})))),wp.element.createElement("div",{className:"digiblocks-newsletter-field"},wp.element.createElement("div",{className:"digiblocks-newsletter-input-container"},wp.element.createElement("input",{type:"email",name:"digiblocks_newsletter_email",className:"digiblocks-newsletter-input",placeholder:$,required:!0}),wp.element.createElement("svg",{className:"digiblocks-newsletter-input-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M392 32L120 32c-13.3 0-24 10.7-24 24l0 166.5L77.5 207.2c-4.2-3.4-8.7-6.3-13.5-8.6L64 56C64 25.1 89.1 0 120 0L392 0c30.9 0 56 25.1 56 56l0 142.6c-4.8 2.3-9.3 5.2-13.4 8.6L416 222.5 416 56c0-13.3-10.7-24-24-24zM35 256c-1.6 0-3 1.3-3 3l0 189c0 17.7 14.3 32 32 32l384 0c17.7 0 32-14.3 32-32l0-189c0-1.6-1.3-3-3-3c-.7 0-1.3 .2-1.9 .7L294.5 405.1C283.7 414 270 418.9 256 418.9s-27.7-4.9-38.5-13.8L36.8 256.7c-.5-.4-1.2-.7-1.9-.7zM0 259c0-19.3 15.6-35 35-35c8.1 0 15.9 2.8 22.2 7.9L237.8 380.3c5.1 4.2 11.6 6.5 18.2 6.5s13.1-2.3 18.2-6.5L454.9 231.9c6.3-5.1 14.1-7.9 22.2-7.9c19.3 0 35 15.6 35 35l0 189c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 259zM176 128l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 96l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"}))))),wp.element.createElement("button",{type:"submit",className:"digiblocks-newsletter-button"},wp.element.createElement(Fs.Content,{value:H})),wp.element.createElement("input",{type:"hidden",name:"action",value:"digiblocks_newsletter_subscribe"}),wp.element.createElement("input",{type:"hidden",name:"digiblocks_newsletter_nonce",value:""}),wp.element.createElement("input",{type:"hidden",name:"block_id",value:e})),wp.element.createElement("div",{className:"digiblocks-newsletter-message success",style:{display:"none"}},u),wp.element.createElement("div",{className:"digiblocks-newsletter-message error",style:{display:"none"}},r))},Ed=zh;var{__:_o}=window.wp.i18n,{registerBlockType:Mh}=window.wp.blocks,{getBlockActiveStatus:Dh}=window.wp.digiBlocks;Mh("digiblocks/newsletter",{apiVersion:2,title:digiBlocksData.blocks.newsletter.title,category:"digiblocks",icon:{src:()=>{let{viewbox:te,path:e}=digiBlocksData.blocks.newsletter.icon;return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${te}`,className:"digiblocks-editor-icons"},wp.element.createElement("path",{d:e}))}},description:digiBlocksData.blocks.newsletter.description,keywords:[_o("newsletter","digiblocks"),_o("subscribe","digiblocks"),_o("email","digiblocks"),_o("mailchimp","digiblocks")],supports:{inserter:!!Dh("newsletter"),html:!1,className:!1,customClassName:!1,anchor:!1},attributes:{id:{type:"string",default:""},anchor:{type:"string",default:""},visibility:{type:"object",default:{desktop:!1,tablet:!1,mobile:!1}},customClasses:{type:"string",default:""},layout:{type:"string",default:"stacked"},align:{type:"object",default:{desktop:"left",tablet:"left",mobile:"left"}},title:{type:"string",default:_o("Subscribe to our Newsletter","digiblocks")},showTitle:{type:"boolean",default:!0},description:{type:"string",default:_o("Stay updated with our latest news and offers","digiblocks")},showDescription:{type:"boolean",default:!0},emailPlaceholder:{type:"string",default:_o("Enter your email address","digiblocks")},namePlaceholder:{type:"string",default:_o("Enter your name","digiblocks")},buttonText:{type:"string",default:_o("Subscribe","digiblocks")},showNameField:{type:"boolean",default:!1},successMessage:{type:"string",default:_o("Thank you for subscribing!","digiblocks")},errorMessage:{type:"string",default:_o("Something went wrong. Please try again.","digiblocks")},titleColor:{type:"string",default:"#333333"},titleHoverColor:{type:"string",default:""},descriptionColor:{type:"string",default:"#666666"},inputTextColor:{type:"string",default:"#333333"},inputBackgroundColor:{type:"string",default:"#ffffff"},inputBorderColor:{type:"string",default:"#e0e0e0"},inputBorderFocusColor:{type:"string",default:"#4a6cf7"},inputPlaceholderColor:{type:"string",default:"#999999"},buttonTextColor:{type:"string",default:"#ffffff"},buttonBackgroundColor:{type:"string",default:"#4a6cf7"},buttonTextHoverColor:{type:"string",default:""},buttonBackgroundHoverColor:{type:"string",default:""},buttonBorderColor:{type:"string",default:""},buttonBorderHoverColor:{type:"string",default:""},backgroundColor:{type:"string",default:""},backgroundHoverColor:{type:"string",default:""},containerBorderColor:{type:"string",default:""},containerBorderHoverColor:{type:"string",default:""},titleTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:24,tablet:22,mobile:20},fontSizeUnit:"px",fontWeight:"600",fontStyle:"normal",textTransform:"none",textDecoration:"none",lineHeight:{desktop:1.4,tablet:1.3,mobile:1.2},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}},contentTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",fontWeight:"normal",fontStyle:"normal",textTransform:"none",textDecoration:"none",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}},textTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",fontWeight:"normal",fontStyle:"normal",textTransform:"none",textDecoration:"none",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}},buttonTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",fontWeight:"500",fontStyle:"normal",textTransform:"none",textDecoration:"none",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}},containerBorderRadius:{type:"object",default:{desktop:{top:4,right:4,bottom:4,left:4,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},containerBorderWidth:{type:"object",default:{desktop:1,tablet:1,mobile:1}},containerBorderStyle:{type:"string",default:"none"},inputBorderRadius:{type:"object",default:{desktop:{top:4,right:4,bottom:4,left:4,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},inputBorderWidth:{type:"object",default:{desktop:1,tablet:1,mobile:1}},inputBorderStyle:{type:"string",default:"solid"},buttonBorderRadius:{type:"object",default:{desktop:{top:4,right:4,bottom:4,left:4,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},buttonBorderWidth:{type:"object",default:{desktop:1,tablet:1,mobile:1}},buttonBorderStyle:{type:"string",default:"solid"},spacing:{type:"object",default:{desktop:{value:20,unit:"px"},tablet:{value:15,unit:"px"},mobile:{value:10,unit:"px"}}},inputSpacing:{type:"object",default:{desktop:{value:10,unit:"px"},tablet:{value:8,unit:"px"},mobile:{value:6,unit:"px"}}},padding:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},margin:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},boxShadow:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.1)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},boxShadowHover:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},buttonBoxShadow:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.1)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},buttonBoxShadowHover:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.15)",horizontal:0,vertical:2,blur:8,spread:0,position:"outset"}},inputBoxShadow:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.1)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},inputBoxShadowHover:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.15)",horizontal:0,vertical:2,blur:4,spread:0,position:"outset"}},animation:{type:"string",default:"none"}},example:{attributes:{title:_o("Subscribe to our Newsletter","digiblocks"),description:_o("Stay updated with our latest news and offers","digiblocks"),layout:"stacked",showTitle:!0,showDescription:!0,showNameField:!1,buttonText:_o("Subscribe","digiblocks")}},edit:Fd,save:Ed});var{__:_e}=window.wp.i18n,{useBlockProps:Ph,InspectorControls:Rh,PanelColorSettings:Es}=window.wp.blockEditor,{TextControl:Ih,ToggleControl:Bo,SelectControl:Ui,RangeControl:ji,Placeholder:Lh,Spinner:Oh,TabPanel:Uh,Button:jh,__experimentalToggleGroupControl:Wd,__experimentalToggleGroupControlOption:Pl}=window.wp.components,{useState:qd,useEffect:Gd,useMemo:Ws,useRef:Vh}=window.wp.element,{useSelect:Qd}=window.wp.data,{useBlockId:Fh,getDimensionCSS:Rt,animations:Rl,animationPreview:Jd}=digi.utils,{tabIcons:qs}=digi.icons,{ResponsiveControl:Yo,DimensionControl:ni,TypographyControl:Ya,BoxShadowControl:Eh,CustomTabPanel:Wh,TabPanelBody:Zo}=digi.components,qh=({attributes:te,setAttributes:e,clientId:K})=>{let{id:o,anchor:P,visibility:s,customClasses:oe,postsToShow:l,columns:$,postStyle:x,displayFeaturedImage:H,displayTitle:T,displayMeta:u,displayExcerpt:r,displayReadMoreButton:S,metaSettings:D,excerptLength:y,readMoreText:v,order:_,orderBy:L,categories:B,enablePagination:O,paginationAlign:Y,paginationBackgroundColor:A,paginationTextColor:V,paginationActiveBackgroundColor:k,paginationActiveTextColor:b,titleColor:M,titleHoverColor:le,excerptColor:Ve,catBackgroundColor:Ce,catColor:Z,catHoverBackgroundColor:I,catHoverColor:ee,metaColor:F,metaHoverColor:Q,buttonBackgroundColor:X,buttonTextColor:se,buttonBackgroundHoverColor:ne,buttonTextHoverColor:ve,imageMargin:J,contentMargin:ce,padding:Te,margin:be,itemSpacing:N,titleTypography:xe,textTypography:w,contentTypography:ke,buttonTypography:U,buttonPadding:fe,buttonBorderRadius:ze,imageSize:qe,imageBorderRadius:je,cardStyle:Fe,cardBackgroundColor:Ie,cardPadding:j,cardBorderRadius:Se,cardBorderStyle:Qe,cardBorderWidth:G,cardBorderColor:pe,cardShadow:R,cardShadowHover:p,animation:re}=te;Fh(o,K,e);let[n,g]=qd(window.digi.responsiveState.activeDevice),[q,d]=qd(()=>{if(window.digi.uiState){let i=window.digi.uiState.getActiveTab(K);if(i)return i}return"options"});Gd(()=>window.digi.responsiveState.subscribe(E=>{g(E)}),[]);let ie=Ws(()=>{let i={per_page:l,order:_,orderby:L,_embed:!0};return B&&B.length>0&&!B.includes(0)&&(i.categories=B),i},[l,_,L,B]),C=Ws(()=>({postsToShow:l,order:_,orderBy:L,categories:B&&B.length>0?B.join(","):""}),[l,_,L,B]),h=Qd(i=>{let{getEntityRecords:E}=i("core");return E("taxonomy","category",{per_page:-1})||[]},[]),Be=Ws(()=>[{label:_e("All Categories","digiblocks"),value:"0"},...h.map(i=>({label:i.name,value:i.id.toString()}))],[h]),a=Qd(i=>{let{getEntityRecords:E}=i("core"),Oe={per_page:l,order:_,orderby:L,_embed:!0};return B&&B.length>0&&!B.includes(0)&&(Oe.categories=B),E("postType","post",Oe)},[JSON.stringify(C)]),ge=Vh(null);Gd(()=>{if(re&&re!=="none"){let i=setTimeout(()=>{Jd(o,re,Rl,ge)},100);return()=>clearTimeout(i)}},[re]);let Ue=()=>{Jd(o,re,Rl,ge)},Ke=[{label:_e("None","digiblocks"),value:"none"},...Object.keys(Rl).map(i=>({label:i.replace(/-/g," ").replace(/\b\w/g,E=>E.toUpperCase()),value:i}))],ao=[{name:"options",title:_e("Options","digiblocks"),icon:qs.optionsIcon},{name:"style",title:_e("Style","digiblocks"),icon:qs.styleIcon},{name:"advanced",title:_e("Advanced","digiblocks"),icon:qs.advancedIcon}],co=[{name:"normal",title:_e("Normal","digiblocks"),className:"digiblocks-tab-1 normal"},{name:"hover",title:_e("Hover","digiblocks"),className:"digiblocks-tab-2 hover"}],t=[{label:_e("Thumbnail","digiblocks"),value:"thumbnail"},{label:_e("Medium","digiblocks"),value:"medium"},{label:_e("Large","digiblocks"),value:"large"},{label:_e("Full","digiblocks"),value:"full"}],m=[{label:_e("Ascending","digiblocks"),value:"asc"},{label:_e("Descending","digiblocks"),value:"desc"}],Me=[{label:_e("Date","digiblocks"),value:"date"},{label:_e("Title","digiblocks"),value:"title"},{label:_e("Author","digiblocks"),value:"author"},{label:_e("Modified Date","digiblocks"),value:"modified"},{label:_e("Comment Count","digiblocks"),value:"comment_count"}],c=[{label:_e("None","digiblocks"),value:"none"},{label:_e("Solid","digiblocks"),value:"solid"},{label:_e("Dashed","digiblocks"),value:"dashed"},{label:_e("Dotted","digiblocks"),value:"dotted"},{label:_e("Double","digiblocks"),value:"double"}],me=(i,E)=>{e({metaSettings:{...D,[i]:E}})},oo=()=>{let i=n,E="";return re&&re!=="none"&&Rl[re]&&(E=Rl[re].keyframes),`
            /* Posts Block - ${o} */
            .${o} {
				${Rt(Te,"padding",i)}
				${Rt(be,"margin",i)}
                width: 100%;
            }
            
            /* Grid layout */
            .${o} .digiblocks-posts-container {
                display: ${x==="list"?"flex":"grid"};
				${x==="list"?"flex-direction: column;":""}
                ${x!=="list"?`grid-template-columns: repeat(${$[i]}, 1fr);`:""}
                gap: ${N[i]}px;
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
				gap: ${J[i]}px;
                ${Fe?`
					background-color: ${Ie};
					${Rt(j,"padding",i)}
					${Rt(Se,"border-radius",i)}
					`:""}
                
                ${Fe&&Qe!=="none"?`
					border-style: ${Qe};
					border-color: ${pe};
					${Rt(G,"border-width",i)}
					`:""}
                
                ${Fe&&R?.enable?`box-shadow: ${R.horizontal}px ${R.vertical}px ${R.blur}px ${R.spread}px ${R.color};`:""}
                transition: all 0.3s ease;
            }

            .${o} .digiblocks-post-item:hover {
				transform: translateY(-3px);
                ${Fe&&p?.enable?`box-shadow: ${p.horizontal}px ${p.vertical}px ${p.blur}px ${p.spread}px ${p.color};`:""}
				border-color: ${pe}80;
            }
            
            /* Featured image */
            .${o} .digiblocks-post-image {
                width: 100%;
                overflow: hidden;
				${Rt(je,"border-radius",i)}
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
				gap: ${ce[i]}px;
			}
            
            /* Post title */
            .${o} .digiblocks-post-title {
                margin: 0;
                color: ${M};
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
                color: ${M};
                text-decoration: none;
            }
            
            /* Post excerpt */
            .${o} .digiblocks-post-excerpt {
                color: ${Ve};
                ${ke.fontFamily?`font-family: ${ke.fontFamily};`:""}
                ${ke.fontSize?.[i]?`font-size: ${ke.fontSize[i]}${ke.fontSizeUnit||"px"};`:""}
                ${ke.fontWeight?`font-weight: ${ke.fontWeight};`:""}
                ${ke.fontStyle?`font-style: ${ke.fontStyle};`:""}
                ${ke.textTransform?`text-transform: ${ke.textTransform};`:""}
                ${ke.textDecoration?`text-decoration: ${ke.textDecoration};`:""}
                ${ke.lineHeight?.[i]?`line-height: ${ke.lineHeight[i]}${ke.lineHeightUnit||"em"};`:""}
                ${ke.letterSpacing?.[i]?`letter-spacing: ${ke.letterSpacing[i]}${ke.letterSpacingUnit||"px"};`:""}
            }
            
            /* Categories */
            .${o} .digiblocks-post-categories {
                display: flex;
				flex-wrap: wrap;
				gap: .5rem;
                ${w.fontFamily?`font-family: ${w.fontFamily};`:""}
                ${w.fontSize?.[i]?`font-size: ${w.fontSize[i]}${w.fontSizeUnit||"px"};`:""}
                ${w.fontWeight?`font-weight: ${w.fontWeight};`:""}
                ${w.fontStyle?`font-style: ${w.fontStyle};`:""}
                ${w.textTransform?`text-transform: ${w.textTransform};`:""}
                ${w.textDecoration?`text-decoration: ${w.textDecoration};`:""}
                ${w.lineHeight?.[i]?`line-height: ${w.lineHeight[i]}${w.lineHeightUnit||"em"};`:""}
                ${w.letterSpacing?.[i]?`letter-spacing: ${w.letterSpacing[i]}${w.letterSpacingUnit||"px"};`:""}
            }
            
            .${o} .digiblocks-post-categories a {
				display: inline-flex;
				border-radius: 3px;
				padding: 3px 5px;
				background-color: ${Ce};
				color: ${Z};
				text-decoration: none;
				transition: all 0.3s ease;
			}
			
			.${o} .digiblocks-post-categories a:hover {
				background-color: ${I};
				color: ${ee};
			}

			/* Footer meta */
			.${o} .digiblocks-post-footer-meta {
				display: flex;
				align-items: center;
				gap: 10px;
				${w.fontFamily?`font-family: ${w.fontFamily};`:""}
				${w.fontSize?.[i]?`font-size: ${w.fontSize[i]}${w.fontSizeUnit||"px"};`:""}
				${w.fontWeight?`font-weight: ${w.fontWeight};`:""}
				color: ${F};
				padding-top: ${ce[i]}px;
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
                ${w.fontFamily?`font-family: ${w.fontFamily};`:""}
                ${w.fontSize?.[i]?`font-size: ${w.fontSize[i]}${w.fontSizeUnit||"px"};`:""}
                ${w.fontWeight?`font-weight: ${w.fontWeight};`:""}
                ${w.fontStyle?`font-style: ${w.fontStyle};`:""}
                ${w.textTransform?`text-transform: ${w.textTransform};`:""}
                ${w.textDecoration?`text-decoration: ${w.textDecoration};`:""}
                ${w.lineHeight?.[i]?`line-height: ${w.lineHeight[i]}${w.lineHeightUnit||"em"};`:""}
                ${w.letterSpacing?.[i]?`letter-spacing: ${w.letterSpacing[i]}${w.letterSpacingUnit||"px"};`:""}
			}

			.${o} .digiblocks-footer-meta-items a {
				color: ${F};
				text-decoration: none;
				transition: color 0.3s ease;
			}

			.${o} .digiblocks-footer-meta-items a:hover {
				color: ${Q||M};
			}

			/* Footer actions */
			.${o} .digiblocks-post-footer-actions {
				display: flex;
				justify-content: space-between;
				align-items: center;
				flex-wrap: wrap;
				gap: 1rem;
                margin-top: ${ce[i]}px;
			}
            
            /* Read more button */
            .${o} .digiblocks-post-read-more {
                display: inline-flex;
                background-color: ${X};
                color: ${se};
                ${U.fontFamily?`font-family: ${U.fontFamily};`:""}
                ${U.fontSize?.[i]?`font-size: ${U.fontSize[i]}${U.fontSizeUnit||"px"};`:""}
                ${U.fontWeight?`font-weight: ${U.fontWeight};`:""}
                ${U.fontStyle?`font-style: ${U.fontStyle};`:""}
                ${U.textTransform?`text-transform: ${U.textTransform};`:""}
                ${U.textDecoration?`text-decoration: ${U.textDecoration};`:""}
                ${U.lineHeight?.[i]?`line-height: ${U.lineHeight[i]}${U.lineHeightUnit||"em"};`:""}
                ${U.letterSpacing?.[i]?`letter-spacing: ${U.letterSpacing[i]}${U.letterSpacingUnit||"px"};`:""}
                text-decoration: none;
				${Rt(fe,"padding",i)}
				${Rt(ze,"border-radius",i)}
                transition: all 0.3s ease;
            }

			.${o} .digiblocks-post-read-more:hover {
				background-color: ${ne||X};
				color: ${ve||se};
			}

			/* Date meta */
			.${o} .digiblocks-post-comments-count {
				color: ${F};
				text-decoration: none;
				transition: color 0.3s ease;
				${w.fontFamily?`font-family: ${w.fontFamily};`:""}
                ${w.fontSize?.[i]?`font-size: ${w.fontSize[i]}${w.fontSizeUnit||"px"};`:""}
                ${w.fontWeight?`font-weight: ${w.fontWeight};`:""}
                ${w.fontStyle?`font-style: ${w.fontStyle};`:""}
                ${w.textTransform?`text-transform: ${w.textTransform};`:""}
                ${w.textDecoration?`text-decoration: ${w.textDecoration};`:""}
                ${w.lineHeight?.[i]?`line-height: ${w.lineHeight[i]}${w.lineHeightUnit||"em"};`:""}
                ${w.letterSpacing?.[i]?`letter-spacing: ${w.letterSpacing[i]}${w.letterSpacingUnit||"px"};`:""}
				display: flex;
				align-items: center;
				gap: .5rem;
			}
			
			.${o} .digiblocks-post-comments-count:hover {
				color: ${Q||M};
			}

			/* Pagination */
            .${o} .digiblocks-pagination {
                margin-top: 40px;
                display: flex;
                flex-wrap: wrap;
                gap: 8px;
                justify-content: ${Y};
            }

            .${o} .digiblocks-pagination .page-numbers {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                min-width: 42px;
                height: 42px;
                padding: 0 12px;
                background-color: ${A};
                color: ${V};
                border-radius: 8px;
                text-decoration: none;
                transition: all 0.3s ease;
                font-weight: 500;
            }

            .${o} .digiblocks-pagination .page-numbers.current {
                background-color: ${k};
                color: ${b};
                transform: translateY(-1px);
                box-shadow: 0 4px 12px ${k}40;
            }

            .${o} .digiblocks-pagination .page-numbers:hover:not(.current) {
                background-color: ${k}20;
                transform: translateY(-1px);
            }

            .${o} .digiblocks-pagination .page-numbers svg {
                width: 1em;
                height: 1em;
                fill: currentColor;
            }
            
            /* Animation keyframes */
            ${E}

			/* Visibility Controls */
			${s.desktop?`
				@media (min-width: 992px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${s.tablet?`
				@media (min-width: 768px) and (max-width: 991px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${s.mobile?`
				@media (max-width: 767px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}
        `},f=()=>{switch(q){case"options":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Zo,{tab:"options",name:"layout",title:_e("Layout","digiblocks"),initialOpen:!0},wp.element.createElement(Wd,{label:_e("Post Style","digiblocks"),value:x,onChange:i=>e({postStyle:i}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(Pl,{value:"grid",label:_e("Grid","digiblocks")}),wp.element.createElement(Pl,{value:"list",label:_e("List","digiblocks")})),wp.element.createElement(ji,{label:_e("Posts to Show","digiblocks"),value:l,onChange:i=>e({postsToShow:i}),min:1,max:20,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),x==="grid"&&wp.element.createElement(Yo,{label:_e("Columns","digiblocks")},wp.element.createElement(ji,{value:$[n],onChange:i=>e({columns:{...$,[n]:i}}),min:1,max:n==="desktop"?6:n==="tablet"?4:2,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(Yo,{label:_e("Item Spacing","digiblocks")},wp.element.createElement(ji,{value:N[n],onChange:i=>e({itemSpacing:{...N,[n]:i}}),min:0,max:80,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(Bo,{label:_e("Card Style","digiblocks"),checked:Fe,onChange:i=>e({cardStyle:i}),help:_e("Enable to show posts as cards with backgrounds and borders","digiblocks"),__nextHasNoMarginBottom:!0})),wp.element.createElement(Zo,{tab:"options",name:"content",title:_e("Content","digiblocks"),initialOpen:!1},wp.element.createElement(Bo,{label:_e("Display Featured Image","digiblocks"),checked:H,onChange:i=>e({displayFeaturedImage:i}),__nextHasNoMarginBottom:!0}),H&&wp.element.createElement(Ui,{label:_e("Image Size","digiblocks"),value:qe,options:t,onChange:i=>e({imageSize:i}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Bo,{label:_e("Display Title","digiblocks"),checked:T,onChange:i=>e({displayTitle:i}),__nextHasNoMarginBottom:!0}),wp.element.createElement(Bo,{label:_e("Display Meta","digiblocks"),checked:u,onChange:i=>e({displayMeta:i}),__nextHasNoMarginBottom:!0}),u&&wp.element.createElement("div",{className:"digiblocks-meta-options",style:{marginLeft:"24px",marginBottom:"16px"}},wp.element.createElement(Bo,{label:_e("Show Author","digiblocks"),checked:D.displayAuthor,onChange:i=>me("displayAuthor",i),__nextHasNoMarginBottom:!0}),wp.element.createElement(Bo,{label:_e("Show Date","digiblocks"),checked:D.displayDate,onChange:i=>me("displayDate",i),__nextHasNoMarginBottom:!0}),wp.element.createElement(Bo,{label:_e("Show Categories","digiblocks"),checked:D.displayCategories,onChange:i=>me("displayCategories",i),__nextHasNoMarginBottom:!0}),wp.element.createElement(Bo,{label:_e("Show Comments Count","digiblocks"),checked:D.displayComments,onChange:i=>me("displayComments",i),__nextHasNoMarginBottom:!0})),wp.element.createElement(Bo,{label:_e("Display Excerpt","digiblocks"),checked:r,onChange:i=>e({displayExcerpt:i}),__nextHasNoMarginBottom:!0}),r&&wp.element.createElement(ji,{label:_e("Excerpt Length (words)","digiblocks"),value:y,onChange:i=>e({excerptLength:i}),min:5,max:100,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Bo,{label:_e("Display Read More Button","digiblocks"),checked:S,onChange:i=>e({displayReadMoreButton:i}),__nextHasNoMarginBottom:!0}),S&&wp.element.createElement(Ih,{label:_e("Read More Text","digiblocks"),value:v,onChange:i=>e({readMoreText:i}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(Zo,{tab:"options",name:"pagination",title:_e("Pagination","digiblocks"),initialOpen:!1},wp.element.createElement(Bo,{label:_e("Enable Pagination","digiblocks"),checked:O,onChange:i=>e({enablePagination:i}),__nextHasNoMarginBottom:!0}),O&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Wd,{label:_e("Pagination Alignment","digiblocks"),value:Y,onChange:i=>e({paginationAlign:i}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(Pl,{value:"flex-start",label:_e("Left","digiblocks")}),wp.element.createElement(Pl,{value:"center",label:_e("Center","digiblocks")}),wp.element.createElement(Pl,{value:"flex-end",label:_e("Right","digiblocks")})))),wp.element.createElement(Zo,{tab:"options",name:"query",title:_e("Query","digiblocks"),initialOpen:!1},wp.element.createElement(Ui,{label:_e("Order By","digiblocks"),value:L,options:Me,onChange:i=>e({orderBy:i}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Ui,{label:_e("Order","digiblocks"),value:_,options:m,onChange:i=>e({order:i}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Ui,{label:_e("Category","digiblocks"),value:B.length===0?"0":B[0].toString(),options:Be,onChange:i=>{let E=parseInt(i,10);e(E===0?{categories:[]}:{categories:[E]})},__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})));case"style":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Zo,{tab:"style",name:"colors",title:_e("Colors","digiblocks"),initialOpen:!0},wp.element.createElement(Uh,{className:"digiblocks-control-tabs",activeClass:"active-tab",tabs:co},i=>i.name==="normal"?wp.element.createElement(Es,{title:_e("Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:M,onChange:E=>e({titleColor:E}),label:_e("Title Color","digiblocks")},{value:Ve,onChange:E=>e({excerptColor:E}),label:_e("Excerpt Color","digiblocks")},{value:Ce,onChange:E=>e({catBackgroundColor:E}),label:_e("Categories Background Color","digiblocks")},{value:Z,onChange:E=>e({catColor:E}),label:_e("Categories Color","digiblocks")},{value:F,onChange:E=>e({metaColor:E}),label:_e("Meta Color","digiblocks")},{value:X,onChange:E=>e({buttonBackgroundColor:E}),label:_e("Button Background","digiblocks")},{value:se,onChange:E=>e({buttonTextColor:E}),label:_e("Button Text","digiblocks")},{value:A,onChange:E=>e({paginationBackgroundColor:E}),label:_e("Pagination Background","digiblocks")},{value:V,onChange:E=>e({paginationTextColor:E}),label:_e("Pagination Color","digiblocks")},{value:k,onChange:E=>e({paginationActiveBackgroundColor:E}),label:_e("Pagination Active Background","digiblocks")},{value:b,onChange:E=>e({paginationActiveTextColor:E}),label:_e("Pagination Active Color","digiblocks")}]}):wp.element.createElement(Es,{title:_e("Hover Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:le,onChange:E=>e({titleHoverColor:E}),label:_e("Title Hover Color","digiblocks")},{value:I,onChange:E=>e({catHoverBackgroundColor:E}),label:_e("Categories Hover Background Color","digiblocks")},{value:ee,onChange:E=>e({catHoverColor:E}),label:_e("Categories Hover Color","digiblocks")},{value:Q,onChange:E=>e({metaHoverColor:E}),label:_e("Meta Hover Color","digiblocks")},{value:ne,onChange:E=>e({buttonBackgroundHoverColor:E}),label:_e("Button Background Hover","digiblocks")},{value:ve,onChange:E=>e({buttonTextHoverColor:E}),label:_e("Button Text Hover","digiblocks")}]})),Fe&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("h3",null,_e("Card Colors","digiblocks")),wp.element.createElement(Es,{title:"",colorSettings:[{value:Ie,onChange:i=>e({cardBackgroundColor:i}),label:_e("Card Background","digiblocks")},{value:pe,onChange:i=>e({cardBorderColor:i}),label:_e("Card Border","digiblocks")}]}))),wp.element.createElement(Zo,{tab:"style",name:"typography",title:_e("Typography","digiblocks"),initialOpen:!1},wp.element.createElement(Ya,{label:_e("Title Typography","digiblocks"),value:xe,onChange:i=>e({titleTypography:i}),defaults:{fontSize:{desktop:20,tablet:18,mobile:16},fontWeight:"600",lineHeight:{desktop:1.4,tablet:1.3,mobile:1.2}}}),wp.element.createElement(Ya,{label:_e("Meta Typography","digiblocks"),value:w,onChange:i=>e({textTypography:i}),defaults:{fontSize:{desktop:14,tablet:13,mobile:12},lineHeight:{desktop:1.4,tablet:1.3,mobile:1.2}}}),wp.element.createElement(Ya,{label:_e("Excerpt Typography","digiblocks"),value:ke,onChange:i=>e({contentTypography:i}),defaults:{fontSize:{desktop:16,tablet:15,mobile:14},lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3}}}),wp.element.createElement(Ya,{label:_e("Button Typography","digiblocks"),value:U,onChange:i=>e({buttonTypography:i}),defaults:{fontSize:{desktop:16,tablet:15,mobile:14},fontWeight:"500",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3}}})),wp.element.createElement(Zo,{tab:"style",name:"spacing",title:_e("Spacing","digiblocks"),initialOpen:!1},wp.element.createElement(Yo,{label:_e("Padding","digiblocks")},wp.element.createElement(ni,{values:Te[n],onChange:i=>e({padding:{...Te,[n]:i}})})),wp.element.createElement(Yo,{label:_e("Margin","digiblocks")},wp.element.createElement(ni,{values:be[n],onChange:i=>e({margin:{...be,[n]:i}})})),wp.element.createElement(Yo,{label:_e("Image Margin","digiblocks")},wp.element.createElement(ji,{value:J[n],onChange:i=>e({imageMargin:{...J,[n]:i}}),min:1,max:100,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(Yo,{label:_e("Content Margin","digiblocks")},wp.element.createElement(ji,{value:ce[n],onChange:i=>e({contentMargin:{...ce,[n]:i}}),min:1,max:100,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(Yo,{label:_e("Button Padding","digiblocks")},wp.element.createElement(ni,{values:fe[n],onChange:i=>e({buttonPadding:{...fe,[n]:i}})}))),wp.element.createElement(Zo,{tab:"style",name:"borders",title:_e("Borders & Radius","digiblocks"),initialOpen:!1},wp.element.createElement(Yo,{label:_e("Image Border Radius","digiblocks")},wp.element.createElement(ni,{values:je[n],onChange:i=>e({imageBorderRadius:{...je,[n]:i}}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]})),wp.element.createElement(Yo,{label:_e("Button Border Radius","digiblocks")},wp.element.createElement(ni,{values:ze[n],onChange:i=>e({buttonBorderRadius:{...ze,[n]:i}}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]})),Fe&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Ui,{label:_e("Card Border Style","digiblocks"),value:Qe,options:c,onChange:i=>e({cardBorderStyle:i}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),Qe!=="none"&&wp.element.createElement(Yo,{label:_e("Card Border Width","digiblocks")},wp.element.createElement(ni,{values:G[n],onChange:i=>e({cardBorderWidth:{...G,[n]:i}})})),wp.element.createElement(Yo,{label:_e("Card Border Radius","digiblocks")},wp.element.createElement(ni,{values:Se[n],onChange:i=>e({cardBorderRadius:{...Se,[n]:i}}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]})),wp.element.createElement(Eh,{label:_e("Card Shadow","digiblocks"),normalValue:R,hoverValue:p,onNormalChange:i=>e({cardShadow:i}),onHoverChange:i=>e({cardShadowHover:i})}))));case"advanced":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Zo,{tab:"advanced",name:"animation",title:_e("Animation","digiblocks"),initialOpen:!0},wp.element.createElement(Ui,{label:_e("Animation Effect","digiblocks"),value:re,options:Ke,onChange:i=>e({animation:i}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),re&&re!=="none"&&wp.element.createElement("div",{style:{marginTop:"10px"}},wp.element.createElement(jh,{variant:"secondary",isSecondary:!0,onClick:Ue,style:{width:"100%"}},_e("Preview Animation","digiblocks")))),wp.element.createElement(Zo,{tab:"advanced",name:"visibility",title:_e("Visibility","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control__help",style:{padding:"12px",backgroundColor:"#f0f6fc",border:"1px solid #c3ddfd",borderRadius:"4px",marginBottom:"16px"}},wp.element.createElement("strong",null,_e("Editor Note:","digiblocks")),wp.element.createElement("br",null),_e("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.","digiblocks")),wp.element.createElement(Bo,{label:_e("Hide on Desktop","digiblocks"),checked:s.desktop,onChange:i=>e({visibility:{...s,desktop:i}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(Bo,{label:_e("Hide on Tablet","digiblocks"),checked:s.tablet,onChange:i=>e({visibility:{...s,tablet:i}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(Bo,{label:_e("Hide on Mobile","digiblocks"),checked:s.mobile,onChange:i=>e({visibility:{...s,mobile:i}}),__nextHasNoMarginBottom:!0})),wp.element.createElement(Zo,{tab:"advanced",name:"additional",title:_e("Additional","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control html-anchor-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"html-anchor"},_e("HTML anchor","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"html-anchor",value:P||"",onChange:i=>e({anchor:i.target.value}),"aria-describedby":"html-anchor-help",autoCapitalize:"none",autoComplete:"off"})),wp.element.createElement("p",{id:"html-anchor-help",className:"components-base-control__help"},_e(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`,"digiblocks")," ",wp.element.createElement("a",{className:"components-external-link",href:"https://wordpress.org/documentation/article/page-jumps/",target:"_blank",rel:"external noreferrer noopener"},wp.element.createElement("span",{className:"components-external-link__contents"},_e("Learn more about anchors","digiblocks")),wp.element.createElement("span",{className:"components-external-link__icon","aria-label":"(opens in a new tab)"},"\u2197")))),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"additional-css-classes"},_e("Additional CSS class(es)","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"additional-css-classes",value:oe||"",onChange:i=>e({customClasses:i.target.value}),"aria-describedby":"additional-css-classes-help",autoComplete:"off"})),wp.element.createElement("p",{id:"additional-css-classes-help",className:"components-base-control__help"},_e("Separate multiple classes with spaces.","digiblocks")))));default:return null}},De=(i,E)=>{if(!i)return"";let Oe=document.createElement("div");Oe.innerHTML=i;let bo=Oe.textContent||Oe.innerText||"",z=bo.split(" ");return z.length<=E?bo:z.slice(0,E).join(" ")+"..."},io=`digiblocks-posts ${o} style-${x} ${oe||""}`,so=Ph({className:io,id:P||null});return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Rh,null,wp.element.createElement(Wh,{tabs:ao,activeTab:q,onSelect:d},f())),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:oo()}}),wp.element.createElement("div",{...so},a?a.length===0?wp.element.createElement("p",{className:"digiblocks-posts-no-results"},_e("No posts found.","digiblocks")):wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:`digiblocks-posts-container layout-${x}`},a.map(i=>wp.element.createElement("div",{key:i.id,className:"digiblocks-post-item"},H&&i._embedded?.["wp:featuredmedia"]&&i._embedded["wp:featuredmedia"][0]&&wp.element.createElement("div",{className:"digiblocks-post-image"},wp.element.createElement("span",null,i._embedded["wp:featuredmedia"][0].source_url&&wp.element.createElement("img",{src:i._embedded["wp:featuredmedia"][0].source_url,alt:i._embedded["wp:featuredmedia"][0].alt_text||i.title.rendered}))),wp.element.createElement("div",{className:"digiblocks-post-content"},T&&wp.element.createElement("h3",{className:"digiblocks-post-title"},wp.element.createElement("a",{href:"#",onClick:E=>E.preventDefault()},i.title.rendered)),r&&wp.element.createElement("div",{className:"digiblocks-post-excerpt"},De(i.excerpt.rendered.replace(/<[^>]*>/g,""),y)),u&&D.displayCategories&&i._embedded?.["wp:term"]?.[0]&&wp.element.createElement("div",{className:"digiblocks-post-categories"},i._embedded["wp:term"][0].map(E=>wp.element.createElement("a",{key:E.id,href:"#",onClick:Oe=>Oe.preventDefault(),className:"digiblocks-category-link"},E.name))),u&&wp.element.createElement("div",{className:"digiblocks-post-footer-meta"},D.displayAuthor&&i._embedded?.author?.[0]&&wp.element.createElement("div",{className:"digiblocks-author-avatar"},wp.element.createElement("a",{href:"#",onClick:E=>E.preventDefault()},i._embedded.author[0].avatar_urls?.["96"]?wp.element.createElement("img",{src:i._embedded.author[0].avatar_urls[96],alt:i._embedded.author[0].name||""}):wp.element.createElement("span",{className:"digiblocks-avatar-placeholder"}))),wp.element.createElement("div",{className:"digiblocks-footer-meta-items"},D.displayAuthor&&i._embedded?.author?.[0]&&wp.element.createElement("span",{className:"digiblocks-posted-by"},wp.element.createElement("span",{className:"digiblocks-meta-prefix"},_e("by","digiblocks"))," ",wp.element.createElement("a",{href:"#",onClick:E=>E.preventDefault()},i._embedded.author[0].name)),D.displayDate&&wp.element.createElement("span",{className:"digiblocks-posted-on"},wp.element.createElement("span",{className:"digiblocks-meta-prefix"},_e("on","digiblocks"))," ",wp.element.createElement("time",{dateTime:i.date},new Date(i.date).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}))))),(S||u&&D.displayComments)&&wp.element.createElement("div",{className:"digiblocks-post-footer-actions"},S&&wp.element.createElement("a",{href:"#",onClick:E=>E.preventDefault(),className:"digiblocks-post-read-more"},v),u&&D.displayComments&&wp.element.createElement("a",{href:"#",className:"digiblocks-post-comments-count",onClick:E=>E.preventDefault()},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M256 64C125.8 64 32 148.6 32 240c0 37.1 15.5 70.6 40 100c5.2 6.3 8.4 14.8 7.4 23.9c-3.1 27-11.4 52.5-25.7 76.3c-.5 .9-1.1 1.8-1.6 2.6c11.1-2.9 22.2-7 32.7-11.5L91.2 446l-6.4-14.7c17-7.4 33-16.7 48.4-27.4c8.5-5.9 19.4-7.5 29.2-4.2C193 410.1 224.1 416 256 416c130.2 0 224-84.6 224-176s-93.8-176-224-176zM0 240C0 125.2 114.5 32 256 32s256 93.2 256 208s-114.5 208-256 208c-36 0-70.5-6.7-103.8-17.9c-.2-.1-.5 0-.7 .1c-16.9 11.7-34.7 22.1-53.9 30.5C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.8s-1.1-12.8 3.4-17.4c8.1-8.2 15.2-18.2 21.7-29c11.7-19.6 18.7-40.6 21.3-63.1c0 0-.1-.1-.1-.2C19.6 327.1 0 286.6 0 240z"})),i.comment_count===0?_e("Leave a Comment","digiblocks"):i.comment_count===1?_e("1 Comment","digiblocks"):sprintf(_e("%d Comments","digiblocks"),i.comment_count||0))))))),O&&wp.element.createElement("div",{className:"digiblocks-pagination"},wp.element.createElement("a",{className:"page-numbers",href:"#",onClick:i=>i.preventDefault()},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M47 239c-9.4 9.4-9.4 24.6 0 33.9L207 433c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L97.9 256 241 113c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L47 239z"}))),wp.element.createElement("a",{className:"page-numbers",href:"#",onClick:i=>i.preventDefault()},"1"),wp.element.createElement("span",{className:"page-numbers current"},"2"),wp.element.createElement("a",{className:"page-numbers",href:"#",onClick:i=>i.preventDefault()},"3"),wp.element.createElement("span",{className:"page-numbers dots"},"\u2026"),wp.element.createElement("a",{className:"page-numbers",href:"#",onClick:i=>i.preventDefault()},"8"),wp.element.createElement("a",{className:"page-numbers",href:"#",onClick:i=>i.preventDefault()},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M273 239c9.4 9.4 9.4 24.6 0 33.9L113 433c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l143-143L79 113c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L273 239z"}))))):wp.element.createElement(Lh,{icon:"admin-post",label:_e("Posts","digiblocks")},wp.element.createElement(Oh,null))))},Yd=qh;var Gh=()=>null,Zd=Gh;var{__:Il}=window.wp.i18n,{registerBlockType:Qh}=window.wp.blocks,{getBlockActiveStatus:Jh}=window.wp.digiBlocks;Qh("digiblocks/posts",{apiVersion:2,title:digiBlocksData.blocks.posts.title,category:"digiblocks",icon:{src:()=>{let{viewbox:te,path:e}=digiBlocksData.blocks.posts.icon;return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${te}`,className:"digiblocks-editor-icons"},wp.element.createElement("path",{d:e}))}},description:digiBlocksData.blocks.posts.description,keywords:[Il("post","digiblocks"),Il("blog","digiblocks"),Il("article","digiblocks"),Il("grid","digiblocks")],supports:{inserter:!!Jh("posts"),html:!1,className:!1,customClassName:!1,anchor:!1},attributes:{id:{type:"string",default:""},anchor:{type:"string",default:""},visibility:{type:"object",default:{desktop:!1,tablet:!1,mobile:!1}},customClasses:{type:"string",default:""},postsToShow:{type:"number",default:3},columns:{type:"object",default:{desktop:3,tablet:2,mobile:1}},postStyle:{type:"string",default:"grid"},displayFeaturedImage:{type:"boolean",default:!0},displayTitle:{type:"boolean",default:!0},displayMeta:{type:"boolean",default:!0},displayExcerpt:{type:"boolean",default:!0},displayReadMoreButton:{type:"boolean",default:!0},metaSettings:{type:"object",default:{displayAuthor:!0,displayDate:!0,displayCategories:!0,displayComments:!0}},excerptLength:{type:"number",default:25},readMoreText:{type:"string",default:Il("Read More","digiblocks")},order:{type:"string",default:"desc"},orderBy:{type:"string",default:"date"},categories:{type:"array",default:[]},enablePagination:{type:"boolean",default:!1},paginationAlign:{type:"string",default:"center"},paginationBackgroundColor:{type:"string",default:"#f8f9fa"},paginationTextColor:{type:"string",default:"#333333"},paginationActiveBackgroundColor:{type:"string",default:"#4a6cf7"},paginationActiveTextColor:{type:"string",default:"#ffffff"},titleColor:{type:"string",default:"#333333"},titleHoverColor:{type:"string",default:""},excerptColor:{type:"string",default:"#666666"},catBackgroundColor:{type:"string",default:"#52576b"},catColor:{type:"string",default:"#fff"},catHoverBackgroundColor:{type:"string",default:"#3f4a73"},catHoverColor:{type:"string",default:"#fff"},metaColor:{type:"string",default:"#666666"},metaHoverColor:{type:"string",default:""},buttonBackgroundColor:{type:"string",default:"#4a6cf7"},buttonTextColor:{type:"string",default:"#ffffff"},buttonBackgroundHoverColor:{type:"string",default:"#3a5ce5"},buttonTextHoverColor:{type:"string",default:"#ffffff"},imageMargin:{type:"object",default:{desktop:15,tablet:15,mobile:15}},contentMargin:{type:"object",default:{desktop:16,tablet:14,mobile:14}},padding:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},margin:{type:"object",default:{desktop:{top:0,right:0,bottom:30,left:0,unit:"px"},tablet:{top:0,right:0,bottom:25,left:0,unit:"px"},mobile:{top:0,right:0,bottom:20,left:0,unit:"px"}}},itemSpacing:{type:"object",default:{desktop:20,tablet:15,mobile:10}},titleTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:20,tablet:18,mobile:16},fontSizeUnit:"px",fontWeight:"600",fontStyle:"normal",textTransform:"none",textDecoration:"none",lineHeight:{desktop:1.4,tablet:1.3,mobile:1.2},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}},textTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:13,tablet:12,mobile:11},fontSizeUnit:"px",fontWeight:"normal",fontStyle:"normal",textTransform:"none",textDecoration:"none",lineHeight:{desktop:1.4,tablet:1.3,mobile:1.2},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}},contentTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",fontWeight:"normal",fontStyle:"normal",textTransform:"none",textDecoration:"none",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}},buttonTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:14,tablet:12,mobile:12},fontSizeUnit:"px",fontWeight:"500",fontStyle:"normal",textTransform:"none",textDecoration:"none",lineHeight:{desktop:1.4,tablet:1.4,mobile:1.3},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}},buttonPadding:{type:"object",default:{desktop:{top:8,right:16,bottom:8,left:16,unit:"px"},tablet:{top:7,right:14,bottom:7,left:14,unit:"px"},mobile:{top:6,right:12,bottom:6,left:12,unit:"px"}}},buttonBorderRadius:{type:"object",default:{desktop:{top:6,right:6,bottom:6,left:6,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},imageSize:{type:"string",default:"medium"},imageBorderRadius:{type:"object",default:{desktop:{top:12,right:12,bottom:12,left:12,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},cardStyle:{type:"boolean",default:!0},cardBackgroundColor:{type:"string",default:"#ffffff"},cardPadding:{type:"object",default:{desktop:{top:24,right:24,bottom:24,left:24,unit:"px"},tablet:{top:20,right:20,bottom:20,left:20,unit:"px"},mobile:{top:16,right:16,bottom:16,left:16,unit:"px"}}},cardBorderRadius:{type:"object",default:{desktop:{top:16,right:16,bottom:16,left:16,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},cardBorderStyle:{type:"string",default:"solid"},cardBorderWidth:{type:"object",default:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},cardBorderColor:{type:"string",default:"#e0e0e0"},cardShadow:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.1)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},cardShadowHover:{type:"object",default:{enable:!1,color:"rgba(74, 108, 247, 0.15)",horizontal:0,vertical:8,blur:25,spread:0,position:"outset"}},animation:{type:"string",default:"none"}},example:{attributes:{postStyle:"grid",postsToShow:1,columns:1,cardStyle:!0,displayFeaturedImage:!0,displayTitle:!0,displayExcerpt:!0,excerptLength:15,displayMeta:!0,titleColor:"#333333",excerptColor:"#666666",metaColor:"#666666",buttonBackgroundColor:"#4a6cf7",buttonTextColor:"#ffffff",itemSpacing:{desktop:20,tablet:15,mobile:10}},viewportWidth:600},edit:Yd,save:Zd});var{__:he}=window.wp.i18n,{useBlockProps:Yh,RichText:si,InspectorControls:Zh,PanelColorSettings:Vi,LinkControl:Kh}=window.wp.blockEditor,{SelectControl:Fi,RangeControl:Kd,ToggleControl:Ll,Button:St,Tooltip:Ei,__experimentalToggleGroupControl:Xh,__experimentalToggleGroupControlOption:Gs}=window.wp.components,{useState:Ol,useEffect:Za,useRef:Ah}=window.wp.element,{useBlockId:ef,getDimensionCSS:Wi,animations:Qs,animationPreview:Xd}=digi.utils,{tabIcons:Js}=digi.icons,{ResponsiveControl:qi,DimensionControl:Gi,TypographyControl:Ul,BoxShadowControl:of,CustomTabPanel:tf,TabPanelBody:Ko,FontAwesomeControl:ov}=digi.components,lf=({attributes:te,setAttributes:e,clientId:K})=>{let{id:o,anchor:P,visibility:s,customClasses:oe,tables:l,columns:$,tableStyle:x,align:H,animation:T,titleTypography:u,headingTypography:r,textTypography:S,contentTypography:D,buttonTypography:y,padding:v,margin:_,borderRadius:L,borderWidth:B,borderStyle:O,borderColor:Y,boxShadow:A,boxShadowHover:V,buttonRadius:k,buttonPadding:b,buttonBorderStyle:M,buttonBorderWidth:le,buttonBorderColor:Ve,buttonBorderHoverColor:Ce,showRibbon:Z,ribbonStyle:I,ribbonPosition:ee,tableTextColor:F,tableBackgroundColor:Q,headerBackgroundColor:X,buttonTextColor:se,buttonBackgroundColor:ne,buttonTextHoverColor:ve,buttonBackgroundHoverColor:J,ribbonTextColor:ce,ribbonBackgroundColor:Te}=te;ef(o,K,e);let[be,N]=Ol(window.digi.responsiveState.activeDevice),[xe,w]=Ol(!1),[ke,U]=Ol(()=>{if(window.digi.uiState){let t=window.digi.uiState.getActiveTab(K);if(t)return t}return"options"}),[fe,ze]=Ol(0),[qe,je]=Ol(!1);Za(()=>{let t=()=>window.digi&&window.digi.components&&window.digi.components.FontAwesomeControl?(je(!0),!0):!1;if(!t()){let m=setTimeout(()=>{t()&&clearTimeout(m)},500);return()=>clearTimeout(m)}},[]),Za(()=>window.digi.responsiveState.subscribe(m=>{N(m)}),[]),Za(()=>{(!l||l.length===0)&&e({tables:[{id:`table-1-${Date.now().toString(36)}`,title:he("Basic Plan","digiblocks"),price:"$19",period:"/month",description:he("Great for starters","digiblocks"),iconValue:null,features:[{text:he("1 Website","digiblocks"),enabled:!0},{text:he("5GB Storage","digiblocks"),enabled:!0},{text:he("10k Visits Monthly","digiblocks"),enabled:!0},{text:he("Premium Support","digiblocks"),enabled:!1}],buttonText:he("Get Started","digiblocks"),buttonUrl:"",buttonOpenInNewTab:!1,buttonRel:"",isHighlighted:!1,ribbonText:he("Popular","digiblocks"),backgroundColor:"",headerBackgroundColor:"",textColor:"",buttonBackgroundColor:"",buttonTextColor:""},{id:`table-2-${Date.now().toString(36)}`,title:he("Pro Plan","digiblocks"),price:"$49",period:"/month",description:he("For growing businesses","digiblocks"),iconValue:null,features:[{text:he("5 Websites","digiblocks"),enabled:!0},{text:he("20GB Storage","digiblocks"),enabled:!0},{text:he("50k Visits Monthly","digiblocks"),enabled:!0},{text:he("Premium Support","digiblocks"),enabled:!0}],buttonText:he("Get Started","digiblocks"),buttonUrl:"",buttonOpenInNewTab:!1,buttonRel:"",isHighlighted:!0,ribbonText:he("Popular","digiblocks"),backgroundColor:"",headerBackgroundColor:"",textColor:"",buttonBackgroundColor:"",buttonTextColor:""}],columns:2,tableStyle:"style1",align:"center",showRibbon:!0,ribbonStyle:"corner",ribbonPosition:"right",titleTypography:u||{fontSize:{desktop:24,tablet:20,mobile:18},fontSizeUnit:"px",lineHeight:{desktop:1.4,tablet:1.3,mobile:1.2},lineHeightUnit:"em",fontWeight:"",fontFamily:""},headingTypography:r||{fontSize:{desktop:36,tablet:30,mobile:26},fontSizeUnit:"px",lineHeight:{desktop:1.2,tablet:1.2,mobile:1.2},lineHeightUnit:"em",fontWeight:"bold",fontFamily:""},textTypography:S||{fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",lineHeight:{desktop:1.6,tablet:1.5,mobile:1.4},lineHeightUnit:"em",fontWeight:"",fontFamily:""},contentTypography:D||{fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",lineHeight:{desktop:1.6,tablet:1.5,mobile:1.4},lineHeightUnit:"em",fontWeight:"",fontFamily:""},buttonTypography:y||{fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em",fontWeight:"",fontFamily:""}})},[l,e]);let Fe=Ah(null);Za(()=>{if(T&&T!=="none"){let t=setTimeout(()=>{Xd(o,T,Qs,Fe)},100);return()=>clearTimeout(t)}},[T]);let Ie=()=>{Xd(o,T,Qs,Fe)},j=[{label:he("Style 1","digiblocks"),value:"style1"},{label:he("Style 2","digiblocks"),value:"style2"},{label:he("Style 3","digiblocks"),value:"style3"},{label:he("Style 4","digiblocks"),value:"style4"},{label:he("Minimal","digiblocks"),value:"minimal"}],Se=[{label:he("Corner","digiblocks"),value:"corner"},{label:he("Banner","digiblocks"),value:"banner"},{label:he("Side","digiblocks"),value:"side"},{label:he("Flag","digiblocks"),value:"flag"}],Qe=[{label:he("Right","digiblocks"),value:"right"},{label:he("Left","digiblocks"),value:"left"}],G=[{label:he("None","digiblocks"),value:"none"},{label:he("Solid","digiblocks"),value:"solid"},{label:he("Dotted","digiblocks"),value:"dotted"},{label:he("Dashed","digiblocks"),value:"dashed"},{label:he("Double","digiblocks"),value:"double"}],pe=[{label:he("None","digiblocks"),value:"none"},...Object.keys(Qs).map(t=>({label:t.replace(/-/g," ").replace(/\b\w/g,m=>m.toUpperCase()),value:t}))],R=[{name:"options",title:he("Options","digiblocks"),icon:Js.optionsIcon},{name:"style",title:he("Style","digiblocks"),icon:Js.styleIcon},{name:"advanced",title:he("Advanced","digiblocks"),icon:Js.advancedIcon}],p=()=>{let t=[...l,{id:`table-${l.length+1}-${Date.now().toString(36)}`,title:he("New Plan","digiblocks"),price:"$29",period:"/month",description:he("Add your description","digiblocks"),iconValue:null,features:[{text:he("Feature 1","digiblocks"),enabled:!0},{text:he("Feature 2","digiblocks"),enabled:!0},{text:he("Feature 3","digiblocks"),enabled:!1}],buttonText:he("Get Started","digiblocks"),buttonUrl:"",buttonOpenInNewTab:!1,buttonRel:"",isHighlighted:!1,ribbonText:he("Popular","digiblocks"),backgroundColor:"",headerBackgroundColor:"",textColor:"",buttonBackgroundColor:"",buttonTextColor:""}];e({tables:t}),ze(t.length-1)},re=t=>{if(l.length<=1)return;let m=[...l];m.splice(t,1),e({tables:m}),fe>=m.length&&ze(m.length-1)},n=t=>{let Me={...l[t],id:`table-${l.length+1}-${Date.now().toString(36)}`},c=[...l];c.splice(t+1,0,Me),e({tables:c}),ze(t+1)},g=t=>{if(t===0)return;let m=[...l],Me=m[t];m[t]=m[t-1],m[t-1]=Me,e({tables:m}),ze(t-1)},q=t=>{if(t===l.length-1)return;let m=[...l],Me=m[t];m[t]=m[t+1],m[t+1]=Me,e({tables:m}),ze(t+1)},d=(t,m,Me)=>{let c=[...l];c[t]={...c[t],[m]:Me},e({tables:c})},ie=t=>{let m=[...l];m[t].features.push({text:he("New Feature","digiblocks"),enabled:!0}),e({tables:m})},C=(t,m)=>{if(l[t].features.length<=1)return;let Me=[...l];Me[t].features.splice(m,1),e({tables:Me})},h=(t,m,Me,c)=>{let me=[...l];me[t].features[m]={...me[t].features[m],[Me]:c},e({tables:me})},Be=(t,m)=>{let Me=[...l];Me[t].features[m].enabled=!Me[t].features[m].enabled,e({tables:Me})},a=t=>{e({tableStyle:t});let m={};switch(t){case"style1":m={tableBackgroundColor:"#ffffff",headerBackgroundColor:"#f8f9fa",tableTextColor:"#333333",buttonBackgroundColor:"#4a6cf7",buttonTextColor:"#ffffff",buttonBackgroundHoverColor:"#3151e1",buttonTextHoverColor:"#ffffff",ribbonBackgroundColor:"#4a6cf7",ribbonTextColor:"#ffffff",borderStyle:"solid",borderWidth:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}},borderColor:"#e6e6e6",borderRadius:{desktop:{top:8,right:8,bottom:8,left:8,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}},boxShadow:{enable:!1,color:"rgba(0, 0, 0, 0.1)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}};break;case"style2":m={tableBackgroundColor:"#ffffff",headerBackgroundColor:"#4a6cf7",tableTextColor:"#333333",buttonBackgroundColor:"#4a6cf7",buttonTextColor:"#ffffff",buttonBackgroundHoverColor:"#3151e1",buttonTextHoverColor:"#ffffff",ribbonBackgroundColor:"#ff9800",ribbonTextColor:"#ffffff",borderStyle:"none",borderWidth:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}},borderColor:"#e6e6e6",borderRadius:{desktop:{top:8,right:8,bottom:8,left:8,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}},boxShadow:{enable:!0,color:"rgba(0, 0, 0, 0.1)",horizontal:0,vertical:4,blur:15,spread:0,position:"outset"}};break;case"style3":m={tableBackgroundColor:"#ffffff",headerBackgroundColor:"#ffffff",tableTextColor:"#333333",buttonBackgroundColor:"#4a6cf7",buttonTextColor:"#ffffff",buttonBackgroundHoverColor:"#3151e1",buttonTextHoverColor:"#ffffff",ribbonBackgroundColor:"#ff5252",ribbonTextColor:"#ffffff",borderStyle:"solid",borderWidth:{desktop:{top:3,right:3,bottom:3,left:3,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}},borderColor:"#4a6cf7",borderRadius:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}},boxShadow:{enable:!1,color:"rgba(0, 0, 0, 0.1)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}};break;case"style4":m={tableBackgroundColor:"#f8f9fa",headerBackgroundColor:"#ffffff",tableTextColor:"#333333",buttonBackgroundColor:"#333333",buttonTextColor:"#ffffff",buttonBackgroundHoverColor:"#000000",buttonTextHoverColor:"#ffffff",ribbonBackgroundColor:"#333333",ribbonTextColor:"#ffffff",borderStyle:"none",borderWidth:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}},borderColor:"#e6e6e6",borderRadius:{desktop:{top:16,right:16,bottom:16,left:16,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}},boxShadow:{enable:!0,color:"rgba(0, 0, 0, 0.08)",horizontal:0,vertical:10,blur:25,spread:0,position:"outset"}};break;case"minimal":m={tableBackgroundColor:"transparent",headerBackgroundColor:"transparent",tableTextColor:"#333333",buttonBackgroundColor:"transparent",buttonTextColor:"#4a6cf7",buttonBackgroundHoverColor:"transparent",buttonTextHoverColor:"#3151e1",ribbonBackgroundColor:"#f8f9fa",ribbonTextColor:"#333333",borderStyle:"solid",borderWidth:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}},borderColor:"#e6e6e6",borderRadius:{desktop:{top:"",right:"",bottom:0,left:0,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}},boxShadow:{enable:!1,color:"rgba(0, 0, 0, 0.1)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}};break;default:m={}}e(m)},ge=qe?window.digi.components.FontAwesomeControl:null,Ue=()=>{let t=be,m="";O&&O!=="none"?m=`
				border-style: ${O};
				border-color: ${Y||"#e6e6e6"};
				${Wi(B,"border-width",t)}
				${Wi(L,"border-radius",t)}
			`:m="border: none;";let Me="box-shadow: none;";A&&A.enable&&(Me=`box-shadow: ${A.position==="inset"?"inset ":""}${A.horizontal}px ${A.vertical}px ${A.blur}px ${A.spread}px ${A.color};`);let c="";V&&V.enable&&(c=`box-shadow: ${V.position==="inset"?"inset ":""}${V.horizontal}px ${V.vertical}px ${V.blur}px ${V.spread}px ${V.color};`);let me=`${Wi(v,"padding",t)}`,oo=`${Wi(_,"margin",t)}`,f={fontFamily:"",fontSize:{desktop:24,tablet:20,mobile:18},fontSizeUnit:"px",fontWeight:"",fontStyle:"normal",textTransform:"",textDecoration:"",lineHeight:{desktop:1.4,tablet:1.3,mobile:1.2},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"},De={fontFamily:"",fontSize:{desktop:36,tablet:30,mobile:26},fontSizeUnit:"px",fontWeight:"bold",fontStyle:"normal",textTransform:"",textDecoration:"",lineHeight:{desktop:1.2,tablet:1.2,mobile:1.2},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"},io={fontFamily:"",fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",fontWeight:"",fontStyle:"normal",textTransform:"",textDecoration:"",lineHeight:{desktop:1.6,tablet:1.5,mobile:1.4},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"},so={fontFamily:"",fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",fontWeight:"",fontStyle:"normal",textTransform:"",textDecoration:"",lineHeight:{desktop:1.6,tablet:1.5,mobile:1.4},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"},i={fontFamily:"",fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",fontWeight:"",fontStyle:"normal",textTransform:"",textDecoration:"",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"},E="",Oe=u||f;Oe.fontFamily&&(E+=`font-family: ${Oe.fontFamily};`),Oe.fontSize&&Oe.fontSize[t]?E+=`font-size: ${Oe.fontSize[t]}${Oe.fontSizeUnit||"px"};`:f.fontSize&&f.fontSize[t]&&(E+=`font-size: ${f.fontSize[t]}px;`),Oe.fontWeight&&(E+=`font-weight: ${Oe.fontWeight};`),Oe.fontStyle&&(E+=`font-style: ${Oe.fontStyle};`),Oe.textTransform&&(E+=`text-transform: ${Oe.textTransform};`),Oe.textDecoration&&(E+=`text-decoration: ${Oe.textDecoration};`),Oe.lineHeight&&Oe.lineHeight[t]?E+=`line-height: ${Oe.lineHeight[t]}${Oe.lineHeightUnit||"em"};`:f.lineHeight&&f.lineHeight[t]&&(E+=`line-height: ${f.lineHeight[t]}em;`),Oe.letterSpacing&&Oe.letterSpacing[t]&&(E+=`letter-spacing: ${Oe.letterSpacing[t]}${Oe.letterSpacingUnit||"px"};`);let bo="",z=r||De;z.fontFamily&&(bo+=`font-family: ${z.fontFamily};`),z.fontSize&&z.fontSize[t]?bo+=`font-size: ${z.fontSize[t]}${z.fontSizeUnit||"px"};`:De.fontSize&&De.fontSize[t]&&(bo+=`font-size: ${De.fontSize[t]}px;`),z.fontWeight?bo+=`font-weight: ${z.fontWeight};`:bo+="font-weight: bold;",z.fontStyle&&(bo+=`font-style: ${z.fontStyle};`),z.textTransform&&(bo+=`text-transform: ${z.textTransform};`),z.textDecoration&&(bo+=`text-decoration: ${z.textDecoration};`),z.lineHeight&&z.lineHeight[t]?bo+=`line-height: ${z.lineHeight[t]}${z.lineHeightUnit||"em"};`:De.lineHeight&&De.lineHeight[t]&&(bo+=`line-height: ${De.lineHeight[t]}em;`),z.letterSpacing&&z.letterSpacing[t]&&(bo+=`letter-spacing: ${z.letterSpacing[t]}${z.letterSpacingUnit||"px"};`);let Xe="",go=S||io;go.fontFamily&&(Xe+=`font-family: ${go.fontFamily};`),go.fontSize&&go.fontSize[t]?Xe+=`font-size: ${go.fontSize[t]}${go.fontSizeUnit||"px"};`:io.fontSize&&io.fontSize[t]&&(Xe+=`font-size: ${io.fontSize[t]}px;`),go.fontWeight&&(Xe+=`font-weight: ${go.fontWeight};`),go.fontStyle&&(Xe+=`font-style: ${go.fontStyle};`),go.textTransform&&(Xe+=`text-transform: ${go.textTransform};`),go.textDecoration&&(Xe+=`text-decoration: ${go.textDecoration};`),go.lineHeight&&go.lineHeight[t]?Xe+=`line-height: ${go.lineHeight[t]}${go.lineHeightUnit||"em"};`:io.lineHeight&&io.lineHeight[t]&&(Xe+=`line-height: ${io.lineHeight[t]}em;`),go.letterSpacing&&go.letterSpacing[t]&&(Xe+=`letter-spacing: ${go.letterSpacing[t]}${go.letterSpacingUnit||"px"};`);let W="",He=D||so;He.fontFamily&&(W+=`font-family: ${He.fontFamily};`),He.fontSize&&He.fontSize[t]?W+=`font-size: ${He.fontSize[t]}${He.fontSizeUnit||"px"};`:so.fontSize&&so.fontSize[t]&&(W+=`font-size: ${so.fontSize[t]}px;`),He.fontWeight&&(W+=`font-weight: ${He.fontWeight};`),He.fontStyle&&(W+=`font-style: ${He.fontStyle};`),He.textTransform&&(W+=`text-transform: ${He.textTransform};`),He.textDecoration&&(W+=`text-decoration: ${He.textDecoration};`),He.lineHeight&&He.lineHeight[t]?W+=`line-height: ${He.lineHeight[t]}${He.lineHeightUnit||"em"};`:so.lineHeight&&so.lineHeight[t]&&(W+=`line-height: ${so.lineHeight[t]}em;`),He.letterSpacing&&He.letterSpacing[t]&&(W+=`letter-spacing: ${He.letterSpacing[t]}${He.letterSpacingUnit||"px"};`);let ho="",uo=y||i;uo.fontFamily&&(ho+=`font-family: ${uo.fontFamily};`),uo.fontSize&&uo.fontSize[t]?ho+=`font-size: ${uo.fontSize[t]}${uo.fontSizeUnit||"px"};`:i.fontSize&&i.fontSize[t]&&(ho+=`font-size: ${i.fontSize[t]}px;`),uo.fontWeight&&(ho+=`font-weight: ${uo.fontWeight};`),uo.fontStyle&&(ho+=`font-style: ${uo.fontStyle};`),uo.textTransform&&(ho+=`text-transform: ${uo.textTransform};`),uo.textDecoration&&(ho+=`text-decoration: ${uo.textDecoration};`),uo.lineHeight&&uo.lineHeight[t]?ho+=`line-height: ${uo.lineHeight[t]}${uo.lineHeightUnit||"em"};`:i.lineHeight&&i.lineHeight[t]&&(ho+=`line-height: ${i.lineHeight[t]}em;`),uo.letterSpacing&&uo.letterSpacing[t]&&(ho+=`letter-spacing: ${uo.letterSpacing[t]}${uo.letterSpacingUnit||"px"};`);let xo=k||4,Mo=b&&b[t]?`${Wi(b,"padding",t)}`:"padding: 10px 20px",Do="";M&&M!=="none"?Do=`
				border-style: ${M};
				border-color: ${Ve||ne||"#4a6cf7"};
				${Wi(le,"border-width",t)}
			`:Do="border: none;";let ko="";switch(x){case"style1":ko=`
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
				`;break;default:ko=""}let mo="";if(Z)switch(I){case"corner":mo=`
						.${o} .digiblocks-pricing-table-ribbon {
							position: absolute;
							top: 0;
							${ee==="right"?"right":"left"}: 0;
							background: ${Te||"#4a6cf7"};
							color: ${ce||"#ffffff"};
							padding: 5px 10px;
							font-size: 12px;
							font-weight: bold;
							text-transform: uppercase;
							z-index: 2;
							${ee==="right"?"border-radius: 0 0 0 4px;":"border-radius: 0 0 4px 0;"}
						}
					`;break;case"banner":mo=`
						.${o} .digiblocks-pricing-table-highlighted {
							overflow: hidden;
						}

						.${o} .digiblocks-pricing-table-ribbon {
							position: absolute;
							top: 7px;
							${ee==="right"?"right":"left"}: -24px;
							background: ${Te||"#4a6cf7"};
							color: ${ce||"#ffffff"};
							padding: 5px 30px;
							font-size: 12px;
							font-weight: bold;
							transform: ${ee==="right"?"rotate(45deg)":"rotate(-45deg)"};
							z-index: 2;
							transform-origin: center center;
						}
					`;break;case"side":mo=`
						.${o} .digiblocks-pricing-table-ribbon {
							position: absolute;
							top: 30px;
							${ee==="right"?"right":"left"}: 0;
							background: ${Te||"#4a6cf7"};
							color: ${ce||"#ffffff"};
							padding: 5px 10px;
							font-size: 12px;
							font-weight: bold;
							${ee==="right"?"border-radius: 4px 0 0 4px;":"border-radius: 0 4px 4px 0;"}
							z-index: 2;
						}
					`;break;case"flag":mo=`
						.${o} .digiblocks-pricing-table-ribbon {
							position: absolute;
							top: 15px;
							${ee==="right"?"right":"left"}: 15px;
							background: ${Te||"#4a6cf7"};
							color: ${ce||"#ffffff"};
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
				grid-template-columns: repeat(${$}, 1fr);
			}
			
			/* Individual pricing table */
			.${o} .digiblocks-pricing-table {
				display: flex;
				flex-direction: column;
				background-color: ${Q||"#ffffff"};
				color: ${F||"#333333"};
				${m}
				${Me}
				${me}
				position: relative;
				transition: all 0.3s ease;
			}
			
			/* Highlighted table */
			.${o} .digiblocks-pricing-table-highlighted {
				z-index: 1;
			}
			
			/* Hover effect */
			.${o} .digiblocks-pricing-table:hover {
				${V&&V.enable?c:""}
			}
			
			/* Header section */
			.${o} .digiblocks-pricing-table-header {
				background-color: ${X||"transparent"};
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
			
			${l.map((yo,Ao)=>`
				/* Custom colors for table ${Ao+1} */
				.${o} .digiblocks-pricing-table:nth-child(${Ao+1}) .digiblocks-pricing-table-icon svg {
					fill: ${yo.iconColor||F||"#333333"};
					transition: fill 0.3s ease;
				}
				
				.${o} .digiblocks-pricing-table:nth-child(${Ao+1}):hover .digiblocks-pricing-table-icon svg {
					fill: ${yo.iconHoverColor||yo.iconColor||F||"#333333"};
				}
			`).join("")}
			
			/* Title */
			.${o} .digiblocks-pricing-table-title {
				margin: 0;
				color: ${F||"#333333"};
				${E}
			}
			
			/* Price section */
			.${o} .digiblocks-pricing-table-price {
				color: ${F||"#333333"};
				${bo}
			}
			
			.${o} .digiblocks-pricing-table-period {
				${Xe}
				opacity: 0.8;
			}
			
			/* Description */
			.${o} .digiblocks-pricing-table-description {
				${Xe}
			}
			
			/* Features section */
			.${o} .digiblocks-pricing-table-feature-wrapper {
				display: flex;
				align-items: center;
				justify-content: ${H==="center"?"center":H==="right"?"flex-end":"space-between"};
				gap: 10px;
			}

			.${o} .digiblocks-pricing-table-feature-item {
				display: flex;
				align-items: center;
				justify-content: ${H==="center"?"center":H==="right"?"flex-end":"flex-start"};
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
				background-color: ${ne||"#4a6cf7"};
				color: ${se||"#ffffff"};
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
				background-color: ${J||"#3151e1"};
				color: ${ve||"#ffffff"};
				${Ce?`border-color: ${Ce};`:""}
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
			${s.desktop?`
				@media (min-width: 992px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${s.tablet?`
				@media (min-width: 768px) and (max-width: 991px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${s.mobile?`
				@media (max-width: 767px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}
		`},Ke=(t,m)=>wp.element.createElement("div",{key:t.id,className:`digiblocks-pricing-table ${fe===m?"digiblocks-table-active":""} ${t.isHighlighted?"digiblocks-pricing-table-highlighted":""}`,onClick:()=>ze(m),style:t.backgroundColor?{backgroundColor:t.backgroundColor}:null},wp.element.createElement("div",{className:"digiblocks-table-item-controls"},wp.element.createElement(Ei,{text:he("Move Left","digiblocks")},wp.element.createElement(St,{icon:"arrow-left-alt2",isSmall:!0,onClick:Me=>{Me.stopPropagation(),g(m)},disabled:m===0})),wp.element.createElement(Ei,{text:he("Move Right","digiblocks")},wp.element.createElement(St,{icon:"arrow-right-alt2",isSmall:!0,onClick:Me=>{Me.stopPropagation(),q(m)},disabled:m===l.length-1})),wp.element.createElement(Ei,{text:he("Duplicate","digiblocks")},wp.element.createElement(St,{icon:"admin-page",isSmall:!0,onClick:Me=>{Me.stopPropagation(),n(m)}})),wp.element.createElement(Ei,{text:he("Remove","digiblocks")},wp.element.createElement(St,{icon:"trash",isSmall:!0,onClick:Me=>{Me.stopPropagation(),re(m)},disabled:l.length<=1}))),Z&&t.isHighlighted&&wp.element.createElement("div",{className:"digiblocks-pricing-table-ribbon"},wp.element.createElement(si,{tagName:"span",value:t.ribbonText,onChange:Me=>d(m,"ribbonText",Me),placeholder:he("Popular","digiblocks")})),wp.element.createElement("div",{className:"digiblocks-pricing-table-header",style:t.headerBackgroundColor?{backgroundColor:t.headerBackgroundColor}:null},t.iconValue&&t.iconValue.svg&&wp.element.createElement("div",{className:"digiblocks-pricing-table-icon"},wp.element.createElement("span",{dangerouslySetInnerHTML:{__html:t.iconValue.svg}})),wp.element.createElement(si,{tagName:"h3",className:"digiblocks-pricing-table-title",value:t.title,onChange:Me=>d(m,"title",Me),placeholder:he("Plan Title","digiblocks"),style:t.textColor?{color:t.textColor}:null}),wp.element.createElement("div",{className:"digiblocks-pricing-table-price",style:t.textColor?{color:t.textColor}:null},wp.element.createElement(si,{tagName:"span",className:"digiblocks-pricing-table-amount",value:t.price,onChange:Me=>d(m,"price",Me),placeholder:he("$0","digiblocks")}),wp.element.createElement(si,{tagName:"span",className:"digiblocks-pricing-table-period",value:t.period,onChange:Me=>d(m,"period",Me),placeholder:he("/month","digiblocks")})),wp.element.createElement(si,{tagName:"div",className:"digiblocks-pricing-table-description",value:t.description,onChange:Me=>d(m,"description",Me),placeholder:he("Short description","digiblocks"),style:t.textColor?{color:t.textColor}:null})),wp.element.createElement("div",{className:"digiblocks-pricing-table-features"},t.features.map((Me,c)=>wp.element.createElement("div",{key:`feature-${c}`,className:"digiblocks-pricing-table-feature-wrapper"},wp.element.createElement("div",{className:`digiblocks-pricing-table-feature-item ${Me.enabled?"":"digiblocks-pricing-table-feature-disabled"}`},wp.element.createElement("div",{className:"digiblocks-pricing-table-feature-icon"},Me.enabled?wp.element.createElement("span",{className:"digiblocks-pricing-table-feature-check"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"16",height:"16",fill:"currentColor"},wp.element.createElement("path",{d:"M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"}))):wp.element.createElement("span",{className:"digiblocks-pricing-table-feature-cross"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",width:"16",height:"16",fill:"currentColor"},wp.element.createElement("path",{d:"M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"})))),wp.element.createElement(si,{tagName:"div",className:"digiblocks-pricing-table-feature-text",value:Me.text,onChange:me=>h(m,c,"text",me),placeholder:he("Feature","digiblocks"),style:t.textColor?{color:t.textColor}:null})),wp.element.createElement("div",{className:"digiblocks-feature-item-controls"},wp.element.createElement(Ei,{text:Me.enabled?he("Disable","digiblocks"):he("Enable","digiblocks")},wp.element.createElement(St,{icon:Me.enabled?"visibility":"hidden",isSmall:!0,onClick:me=>{me.stopPropagation(),Be(m,c)}})),wp.element.createElement(Ei,{text:he("Remove","digiblocks")},wp.element.createElement(St,{icon:"trash",isSmall:!0,onClick:me=>{me.stopPropagation(),C(m,c)},disabled:t.features.length<=1}))))),wp.element.createElement(St,{variant:"secondary",isSmall:!0,onClick:Me=>{Me.stopPropagation(),ie(m)},style:{width:"100%",marginTop:"10px"}},he("Add Feature","digiblocks"))),wp.element.createElement("div",{className:"digiblocks-pricing-table-footer"},wp.element.createElement("div",{className:"digiblocks-pricing-table-button",style:t.buttonBackgroundColor?{backgroundColor:t.buttonBackgroundColor,color:t.buttonTextColor||se||"#ffffff"}:null},wp.element.createElement(si,{tagName:"span",value:t.buttonText,onChange:Me=>d(m,"buttonText",Me),placeholder:he("Get Started","digiblocks")})))),ao=()=>{switch(ke){case"options":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Ko,{tab:"options",name:"layout",title:he("Layout","digiblocks"),initialOpen:!0},wp.element.createElement(Kd,{label:he("Columns","digiblocks"),value:$,onChange:t=>e({columns:t}),min:1,max:4,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Fi,{label:he("Table Style","digiblocks"),value:x,options:j,onChange:t=>a(t),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Xh,{label:he("Alignment","digiblocks"),value:H,onChange:t=>e({align:t}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(Gs,{value:"left",label:he("Left","digiblocks")}),wp.element.createElement(Gs,{value:"center",label:he("Center","digiblocks")}),wp.element.createElement(Gs,{value:"right",label:he("Right","digiblocks")}))),wp.element.createElement(Ko,{tab:"options",name:"ribbon",title:he("Ribbon","digiblocks"),initialOpen:!1},wp.element.createElement(Ll,{label:he("Show Ribbon","digiblocks"),checked:Z,onChange:t=>e({showRibbon:t}),help:he("Display a ribbon on highlighted tables.","digiblocks"),__nextHasNoMarginBottom:!0}),Z&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Fi,{label:he("Ribbon Style","digiblocks"),value:I,options:Se,onChange:t=>e({ribbonStyle:t}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Fi,{label:he("Ribbon Position","digiblocks"),value:ee,options:Qe,onChange:t=>e({ribbonPosition:t}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Vi,{title:he("Ribbon Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:Te,onChange:t=>e({ribbonBackgroundColor:t}),label:he("Background Color","digiblocks")},{value:ce,onChange:t=>e({ribbonTextColor:t}),label:he("Text Color","digiblocks")}]}))),wp.element.createElement(Ko,{tab:"options",name:"table-config",title:he("Table Settings","digiblocks"),initialOpen:!1},l[fe]&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("h3",null,he("Editing Table","digiblocks")," #",fe+1),wp.element.createElement(Ll,{label:he("Highlight This Table","digiblocks"),checked:l[fe].isHighlighted,onChange:t=>d(fe,"isHighlighted",t),help:he("Apply special styling to highlight this table.","digiblocks"),__nextHasNoMarginBottom:!0}),qe?wp.element.createElement(ge,{label:he("Select Icon","digiblocks"),value:l[fe].iconValue,onChange:t=>d(fe,"iconValue",t)}):wp.element.createElement("div",{style:{textAlign:"center",padding:"20px 0"}},wp.element.createElement("div",{className:"components-spinner"}),wp.element.createElement("p",null,he("Loading icon selector...","digiblocks"))),l[fe]&&l[fe].iconValue&&wp.element.createElement(Vi,{title:he("Icon Colors","digiblocks"),initialOpen:!1,enableAlpha:!0,colorSettings:[{value:l[fe].iconColor,onChange:t=>d(fe,"iconColor",t),label:he("Icon Color","digiblocks")},{value:l[fe].iconHoverColor,onChange:t=>d(fe,"iconHoverColor",t),label:he("Icon Hover Color","digiblocks")}]}),wp.element.createElement("div",{style:{marginTop:"15px",marginBottom:"10px"}},wp.element.createElement("p",null,wp.element.createElement("strong",null,he("Button Link","digiblocks"))),wp.element.createElement(Kh,{value:l[fe].buttonUrl?{url:l[fe].buttonUrl,opensInNewTab:!!l[fe].buttonOpenInNewTab,rel:l[fe].buttonRel||""}:void 0,settings:[{id:"opensInNewTab",title:he("Open in new tab","digiblocks")},{id:"rel",title:he("Add noopener noreferrer","digiblocks")}],onChange:t=>{if(t&&t.url){let m=[...l];m[fe]={...m[fe],buttonUrl:t.url,buttonOpenInNewTab:!!t.opensInNewTab,buttonRel:t.rel||""},e({tables:m})}},onRemove:()=>{let t=[...l];t[fe]={...t[fe],buttonUrl:"",buttonOpenInNewTab:!1,buttonRel:""},e({tables:t})},suggestionsQuery:{type:"post",subtype:"any"},forceIsEditingLink:!l[fe].buttonUrl})))));case"style":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Ko,{tab:"style",name:"colors",title:he("Colors","digiblocks"),initialOpen:!0},wp.element.createElement(Vi,{title:he("Table Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:Q,onChange:t=>e({tableBackgroundColor:t}),label:he("Background Color","digiblocks")},{value:X,onChange:t=>e({headerBackgroundColor:t}),label:he("Header Background","digiblocks")},{value:F,onChange:t=>e({tableTextColor:t}),label:he("Text Color","digiblocks")}]}),wp.element.createElement(Vi,{title:he("Button Colors","digiblocks"),initialOpen:!1,enableAlpha:!0,colorSettings:[{value:ne,onChange:t=>e({buttonBackgroundColor:t}),label:he("Background Color","digiblocks")},{value:se,onChange:t=>e({buttonTextColor:t}),label:he("Text Color","digiblocks")},{value:J,onChange:t=>e({buttonBackgroundHoverColor:t}),label:he("Hover Background","digiblocks")},{value:ve,onChange:t=>e({buttonTextHoverColor:t}),label:he("Hover Text","digiblocks")}]})),wp.element.createElement(Ko,{tab:"style",name:"typography",title:he("Typography","digiblocks"),initialOpen:!1},wp.element.createElement(Ul,{label:he("Title Typography","digiblocks"),value:u,onChange:t=>e({titleTypography:t}),defaults:{fontSize:{desktop:24,tablet:20,mobile:18},fontSizeUnit:"px",lineHeight:{desktop:1.4,tablet:1.3,mobile:1.2},lineHeightUnit:"em"}}),wp.element.createElement(Ul,{label:he("Price Typography","digiblocks"),value:r,onChange:t=>e({headingTypography:t}),defaults:{fontSize:{desktop:36,tablet:30,mobile:26},fontSizeUnit:"px",lineHeight:{desktop:1.2,tablet:1.2,mobile:1.2},lineHeightUnit:"em"}}),wp.element.createElement(Ul,{label:he("Description Typography","digiblocks"),value:S,onChange:t=>e({textTypography:t}),defaults:{fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",lineHeight:{desktop:1.6,tablet:1.5,mobile:1.4},lineHeightUnit:"em"}}),wp.element.createElement(Ul,{label:he("Features Typography","digiblocks"),value:D,onChange:t=>e({contentTypography:t}),defaults:{fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",lineHeight:{desktop:1.6,tablet:1.5,mobile:1.4},lineHeightUnit:"em"}}),wp.element.createElement(Ul,{label:he("Button Typography","digiblocks"),value:y,onChange:t=>e({buttonTypography:t}),defaults:{fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em"}})),wp.element.createElement(Ko,{tab:"style",name:"borders",title:he("Borders & Shadow","digiblocks"),initialOpen:!1},wp.element.createElement(Fi,{label:he("Border Style","digiblocks"),value:O,options:G,onChange:t=>e({borderStyle:t}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),O!=="none"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(qi,{label:he("Border Width","digiblocks")},wp.element.createElement(Gi,{values:B&&B[be]?B[be]:{top:1,right:1,bottom:1,left:1,unit:"px"},onChange:t=>e({borderWidth:{...B,[be]:t}})})),wp.element.createElement(Vi,{title:he("Border Color","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:Y,onChange:t=>e({borderColor:t}),label:he("Border Color","digiblocks")}]})),wp.element.createElement(qi,{label:he("Border Radius","digiblocks")},wp.element.createElement(Gi,{values:L&&L[be]?L[be]:{top:8,right:8,bottom:8,left:8,unit:"px"},onChange:t=>e({borderRadius:{...L,[be]:t}}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]})),wp.element.createElement(of,{normalValue:A,hoverValue:V,onNormalChange:t=>e({boxShadow:t}),onHoverChange:t=>e({boxShadowHover:t})})),wp.element.createElement(Ko,{tab:"style",name:"button-style",title:he("Button Style","digiblocks"),initialOpen:!1},wp.element.createElement(Kd,{label:he("Border Radius","digiblocks"),value:k,onChange:t=>e({buttonRadius:t}),min:0,max:50,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Fi,{label:he("Border Style","digiblocks"),value:M,options:G,onChange:t=>e({buttonBorderStyle:t}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),M!=="none"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(qi,{label:he("Border Width","digiblocks")},wp.element.createElement(Gi,{values:le&&le[be]?le[be]:{top:1,right:1,bottom:1,left:1,unit:"px"},onChange:t=>e({buttonBorderWidth:{...le,[be]:t}})})),wp.element.createElement(Vi,{title:he("Border Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:Ve,onChange:t=>e({buttonBorderColor:t}),label:he("Border Color","digiblocks")},{value:Ce,onChange:t=>e({buttonBorderHoverColor:t}),label:he("Border Hover Color","digiblocks")}]})),wp.element.createElement(qi,{label:he("Button Padding","digiblocks")},wp.element.createElement(Gi,{values:b&&b[be]?b[be]:{top:10,right:20,bottom:10,left:20,unit:"px"},onChange:t=>e({buttonPadding:{...b,[be]:t}})}))),wp.element.createElement(Ko,{tab:"style",name:"spacing",title:he("Spacing","digiblocks"),initialOpen:!1},wp.element.createElement(qi,{label:he("Padding","digiblocks")},wp.element.createElement(Gi,{values:v&&v[be]?v[be]:{top:0,right:0,bottom:0,left:0,unit:"px"},onChange:t=>e({padding:{...v,[be]:t}})})),wp.element.createElement(qi,{label:he("Margin","digiblocks")},wp.element.createElement(Gi,{values:_&&_[be]?_[be]:{top:0,right:0,bottom:30,left:0,unit:"px"},onChange:t=>e({margin:{..._,[be]:t}})}))));case"advanced":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Ko,{tab:"advanced",name:"animation",title:he("Animation","digiblocks"),initialOpen:!0},wp.element.createElement(Fi,{label:he("Animation Effect","digiblocks"),value:T,options:pe,onChange:t=>e({animation:t}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),T&&T!=="none"&&wp.element.createElement("div",{style:{marginTop:"10px"}},wp.element.createElement(St,{variant:"secondary",isSecondary:!0,onClick:Ie,style:{width:"100%"}},he("Preview Animation","digiblocks")))),wp.element.createElement(Ko,{tab:"advanced",name:"visibility",title:he("Visibility","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control__help",style:{padding:"12px",backgroundColor:"#f0f6fc",border:"1px solid #c3ddfd",borderRadius:"4px",marginBottom:"16px"}},wp.element.createElement("strong",null,he("Editor Note:","digiblocks")),wp.element.createElement("br",null),he("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.","digiblocks")),wp.element.createElement(Ll,{label:he("Hide on Desktop","digiblocks"),checked:s.desktop,onChange:t=>e({visibility:{...s,desktop:t}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(Ll,{label:he("Hide on Tablet","digiblocks"),checked:s.tablet,onChange:t=>e({visibility:{...s,tablet:t}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(Ll,{label:he("Hide on Mobile","digiblocks"),checked:s.mobile,onChange:t=>e({visibility:{...s,mobile:t}}),__nextHasNoMarginBottom:!0})),wp.element.createElement(Ko,{tab:"advanced",name:"additional",title:he("Additional","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control html-anchor-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"html-anchor"},he("HTML anchor","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"html-anchor",value:P||"",onChange:t=>e({anchor:t.target.value}),"aria-describedby":"html-anchor-help",autoCapitalize:"none",autoComplete:"off"})),wp.element.createElement("p",{id:"html-anchor-help",className:"components-base-control__help"},he(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`,"digiblocks")," ",wp.element.createElement("a",{className:"components-external-link",href:"https://wordpress.org/documentation/article/page-jumps/",target:"_blank",rel:"external noreferrer noopener"},wp.element.createElement("span",{className:"components-external-link__contents"},he("Learn more about anchors","digiblocks")),wp.element.createElement("span",{className:"components-external-link__icon","aria-label":"(opens in a new tab)"},"\u2197")))),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"additional-css-classes"},he("Additional CSS class(es)","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"additional-css-classes",value:oe||"",onChange:t=>e({customClasses:t.target.value}),"aria-describedby":"additional-css-classes-help",autoComplete:"off"})),wp.element.createElement("p",{id:"additional-css-classes-help",className:"components-base-control__help"},he("Separate multiple classes with spaces.","digiblocks")))));default:return null}},co=Yh({className:`digiblocks-pricing-table-block ${o} ${oe||""}`,id:P||null});return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Zh,null,wp.element.createElement(tf,{tabs:R,activeTab:ke,onSelect:U},ao())),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:Ue()}}),wp.element.createElement("div",{...co},wp.element.createElement("div",{className:"digiblocks-pricing-tables-container"},l.map((t,m)=>Ke(t,m))),wp.element.createElement("div",{className:"digiblocks-pricing-table-controls"},wp.element.createElement(St,{variant:"primary",icon:"plus",onClick:p},he("Add Pricing Table","digiblocks")))))},Ad=lf;var{__:iv}=window.wp.i18n,{useBlockProps:lv,RichText:ri}=window.wp.blockEditor,af=({attributes:te})=>{let{id:e,anchor:K,customClasses:o,tables:P,columns:s,tableStyle:oe,align:l,animation:$,showRibbon:x,ribbonStyle:H,ribbonPosition:T}=te,u=["digiblocks-pricing-table-block",e,`align-${l}`,$!=="none"?`animate-${$}`:"",oe?`style-${oe}`:"",o||""].filter(Boolean).join(" ");return wp.element.createElement("div",{className:u,id:K||null},wp.element.createElement("div",{className:"digiblocks-pricing-tables-container"},P.map(r=>wp.element.createElement("div",{key:r.id,className:`digiblocks-pricing-table ${r.isHighlighted?"digiblocks-pricing-table-highlighted":""}`,style:r.backgroundColor?{backgroundColor:r.backgroundColor}:null},x&&r.isHighlighted&&wp.element.createElement("div",{className:"digiblocks-pricing-table-ribbon"},wp.element.createElement(ri.Content,{value:r.ribbonText})),wp.element.createElement("div",{className:"digiblocks-pricing-table-header",style:r.headerBackgroundColor?{backgroundColor:r.headerBackgroundColor}:null},r.iconValue&&r.iconValue.svg&&wp.element.createElement("div",{className:"digiblocks-pricing-table-icon"},wp.element.createElement("span",{dangerouslySetInnerHTML:{__html:r.iconValue.svg}})),wp.element.createElement(ri.Content,{tagName:"h3",className:"digiblocks-pricing-table-title",value:r.title,style:r.textColor?{color:r.textColor}:null}),wp.element.createElement("div",{className:"digiblocks-pricing-table-price",style:r.textColor?{color:r.textColor}:null},wp.element.createElement(ri.Content,{tagName:"span",className:"digiblocks-pricing-table-amount",value:r.price}),wp.element.createElement(ri.Content,{tagName:"span",className:"digiblocks-pricing-table-period",value:r.period})),wp.element.createElement(ri.Content,{tagName:"div",className:"digiblocks-pricing-table-description",value:r.description,style:r.textColor?{color:r.textColor}:null})),wp.element.createElement("div",{className:"digiblocks-pricing-table-features"},r.features.map((S,D)=>wp.element.createElement("div",{key:`feature-${D}`,className:`digiblocks-pricing-table-feature-item ${S.enabled?"":"digiblocks-pricing-table-feature-disabled"}`},wp.element.createElement("div",{className:"digiblocks-pricing-table-feature-icon"},S.enabled?wp.element.createElement("span",{className:"digiblocks-pricing-table-feature-check"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"16",height:"16",fill:"currentColor"},wp.element.createElement("path",{d:"M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"}))):wp.element.createElement("span",{className:"digiblocks-pricing-table-feature-cross"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",width:"16",height:"16",fill:"currentColor"},wp.element.createElement("path",{d:"M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"})))),wp.element.createElement(ri.Content,{tagName:"div",className:"digiblocks-pricing-table-feature-text",value:S.text,style:r.textColor?{color:r.textColor}:null})))),wp.element.createElement("div",{className:"digiblocks-pricing-table-footer"},wp.element.createElement("a",{href:r.buttonUrl||"#",className:"digiblocks-pricing-table-button",style:r.buttonBackgroundColor?{backgroundColor:r.buttonBackgroundColor,color:r.buttonTextColor||"#ffffff"}:null,target:r.buttonOpenInNewTab?"_blank":void 0,rel:r.buttonOpenInNewTab?`noopener noreferrer ${r.buttonRel||""}`.trim():r.buttonRel||void 0},wp.element.createElement(ri.Content,{tagName:"span",value:r.buttonText})))))))},eg=af;var{__:jl}=window.wp.i18n,{registerBlockType:nf}=window.wp.blocks,{getBlockActiveStatus:sf}=window.wp.digiBlocks;nf("digiblocks/pricing-table",{apiVersion:2,title:digiBlocksData.blocks["pricing-table"].title,category:"digiblocks",icon:{src:()=>{let{viewbox:te,path:e}=digiBlocksData.blocks["pricing-table"].icon;return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${te}`,className:"digiblocks-editor-icons"},wp.element.createElement("path",{d:e}))}},description:digiBlocksData.blocks["pricing-table"].description,keywords:[jl("pricing","digiblocks"),jl("price","digiblocks"),jl("table","digiblocks"),jl("plan","digiblocks"),jl("subscription","digiblocks")],supports:{inserter:!!sf("pricing-table"),html:!1,className:!1,customClassName:!1,anchor:!1},attributes:{id:{type:"string"},anchor:{type:"string"},visibility:{type:"object",default:{desktop:!1,tablet:!1,mobile:!1}},customClasses:{type:"string"},tables:{type:"array",default:[]},columns:{type:"number",default:2},tableStyle:{type:"string",default:"style1"},align:{type:"string",default:"center"},animation:{type:"string",default:"none"},titleTypography:{type:"object",default:{}},headingTypography:{type:"object",default:{}},textTypography:{type:"object",default:{}},contentTypography:{type:"object",default:{}},buttonTypography:{type:"object",default:{}},padding:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},margin:{type:"object",default:{desktop:{top:0,right:0,bottom:30,left:0,unit:"px"},tablet:{top:0,right:0,bottom:20,left:0,unit:"px"},mobile:{top:0,right:0,bottom:15,left:0,unit:"px"}}},borderRadius:{type:"object",default:{desktop:{top:8,right:8,bottom:8,left:8,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderStyle:{type:"string",default:"solid"},borderWidth:{type:"object",default:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderColor:{type:"string",default:"#e6e6e6"},boxShadow:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.1)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},boxShadowHover:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.15)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},buttonRadius:{type:"number",default:4},buttonPadding:{type:"object",default:{desktop:{top:10,right:20,bottom:10,left:20,unit:"px"},tablet:{top:8,right:16,bottom:8,left:16,unit:"px"},mobile:{top:6,right:12,bottom:6,left:12,unit:"px"}}},buttonBorderStyle:{type:"string",default:"none"},buttonBorderWidth:{type:"object",default:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},buttonBorderColor:{type:"string",default:""},buttonBorderHoverColor:{type:"string",default:""},showRibbon:{type:"boolean",default:!0},ribbonStyle:{type:"string",default:"corner"},ribbonPosition:{type:"string",default:"right"},tableTextColor:{type:"string",default:"#333333"},tableBackgroundColor:{type:"string",default:"#ffffff"},headerBackgroundColor:{type:"string",default:"#f8f9fa"},buttonTextColor:{type:"string",default:"#ffffff"},buttonBackgroundColor:{type:"string",default:"#4a6cf7"},buttonTextHoverColor:{type:"string",default:"#ffffff"},buttonBackgroundHoverColor:{type:"string",default:"#3151e1"},ribbonTextColor:{type:"string",default:"#ffffff"},ribbonBackgroundColor:{type:"string",default:"#4a6cf7"}},example:{attributes:{tables:[{id:"table-1-example",title:"Basic Plan",price:"$19",period:"/month",description:"Great for starters",features:[{text:"1 Website",enabled:!0},{text:"5GB Storage",enabled:!0},{text:"Premium Support",enabled:!1}],buttonText:"Get Started",isHighlighted:!1,ribbonText:"Popular"}],columns:1,tableStyle:"style1",showRibbon:!0}},edit:Ad,save:eg});var{__:po}=window.wp.i18n,{useBlockProps:rf,InspectorControls:cf,PanelColorSettings:df,BlockControls:gf,AlignmentToolbar:pf}=window.wp.blockEditor,{ToggleControl:Ys,SelectControl:bf,RangeControl:ci,Button:uf,TextControl:mf,__experimentalToggleGroupControl:Zs,__experimentalToggleGroupControlOption:Ks,BaseControl:hf}=window.wp.components,{useState:Xs,useEffect:As,useRef:ff}=window.wp.element,{useBlockId:kf,animations:Vl,animationPreview:og}=digi.utils,{tabIcons:er}=digi.icons,{ResponsiveControl:vf,TypographyControl:xf,CustomTabPanel:yf,TabPanelBody:Qi}=digi.components,Cf=({style:te,primaryColor:e,secondaryColor:K,isSelected:o,onClick:P})=>{let s={display:"inline-flex",flexDirection:"column",width:"60px",height:"60px",margin:"5px",border:`1px solid ${o?"#007cba":"#ddd"}`,backgroundColor:o?"rgba(0,124,186,0.1)":"white",borderRadius:"4px",cursor:"pointer",overflow:"hidden",transition:"all 0.2s ease"},oe={textAlign:"center",fontSize:"10px",padding:"3px 0",fontWeight:o?"500":"normal",borderBottom:`1px solid ${o?"#e0e0e0":"transparent"}`,backgroundColor:o?"rgba(0,124,186,0.05)":"transparent"},l={flex:1,display:"flex",justifyContent:"center",alignItems:"center",padding:"8px"},$=null;switch(te){case"line":$=wp.element.createElement("div",{style:{width:"100%",height:"3px",backgroundColor:e,borderRadius:"1px"}});break;case"dashed":$=wp.element.createElement("div",{style:{width:"100%",height:"2px",backgroundImage:`linear-gradient(to right, ${e} 50%, transparent 50%)`,backgroundSize:"8px 2px",backgroundRepeat:"repeat-x",borderRadius:"1px"}});break;case"dotted":$=wp.element.createElement("div",{style:{width:"100%",height:"3px",backgroundImage:`radial-gradient(circle, ${e} 1px, transparent 1px)`,backgroundSize:"4px 3px",backgroundPosition:"center",backgroundRepeat:"repeat-x"}});break;case"double":$=wp.element.createElement("div",{style:{display:"flex",flexDirection:"column",width:"100%",gap:"2px"}},wp.element.createElement("div",{style:{height:"1px",backgroundColor:e,borderRadius:"1px"}}),wp.element.createElement("div",{style:{height:"1px",backgroundColor:e,borderRadius:"1px"}}));break;case"gradient":$=wp.element.createElement("div",{style:{width:"100%",height:"3px",background:`linear-gradient(to right, ${K||"transparent"}, ${e}, ${K||"transparent"})`,borderRadius:"1px"}});break;case"shadow":$=wp.element.createElement("div",{style:{width:"100%",height:"2px",backgroundColor:e,boxShadow:"0 1px 2px rgba(0,0,0,0.3)",borderRadius:"1px"}});break;case"wave":$=wp.element.createElement("svg",{height:"20",width:"100%",viewBox:"0 0 100 20",preserveAspectRatio:"none"},wp.element.createElement("path",{d:"M0,10 C20,5 30,15 50,10 C70,5 80,15 100,10 L100,20 L0,20 Z",fill:e}));break;case"zigzag":$=wp.element.createElement("svg",{height:"10",width:"100%",viewBox:"0 0 100 10",preserveAspectRatio:"none"},wp.element.createElement("polyline",{points:"0,0 10,10 20,0 30,10 40,0 50,10 60,0 70,10 80,0 90,10 100,0",fill:"none",stroke:e,strokeWidth:"2"}));break;case"slant":$=wp.element.createElement("svg",{height:"10",width:"100%",viewBox:"0 0 100 10",preserveAspectRatio:"none"},wp.element.createElement("polygon",{points:"0,0 100,10 100,0",fill:e}));break;default:$=wp.element.createElement("div",{style:{width:"100%",height:"3px",backgroundColor:e,borderRadius:"1px"}})}return wp.element.createElement("div",{style:s,onClick:P},wp.element.createElement("div",{style:oe},(()=>{switch(te){case"line":return"Line";case"dashed":return"Dashed";case"dotted":return"Dotted";case"double":return"Double";case"gradient":return"Gradient";case"shadow":return"Shadow";case"wave":return"Wave";case"zigzag":return"Zigzag";case"slant":return"Slant";default:return te.charAt(0).toUpperCase()+te.slice(1)}})()),wp.element.createElement("div",{style:l},$))},wf=({attributes:te,setAttributes:e,clientId:K})=>{let{id:o,anchor:P,visibility:s,customClasses:oe,contentType:l,content:$,align:x,iconValue:H,separatorStyle:T,primaryColor:u,secondaryColor:r,width:S,widthUnit:D,height:y,heightUnit:v,borderRadius:_,margin:L,animation:B,typography:O,iconSize:Y,gap:A,textColor:V}=te;kf(o,K,e);let[k,b]=Xs(window.digi.responsiveState.activeDevice);As(()=>window.digi.responsiveState.subscribe(ke=>{b(ke)}),[]);let[M,le]=Xs("options"),[Ve,Ce]=Xs(!1);As(()=>{let w=()=>window.digi&&window.digi.components&&window.digi.components.FontAwesomeControl?(Ce(!0),!0):!1;if(!w()){let ke=setTimeout(()=>{w()&&clearTimeout(ke)},500);return()=>clearTimeout(ke)}},[]);let Z=w=>{e({iconValue:w})},I=ff(null);As(()=>{if(B&&B!=="none"){let w=setTimeout(()=>{og(o,B,Vl,I)},100);return()=>clearTimeout(w)}},[B]);let ee=()=>{og(o,B,Vl,I)},F=[{label:"px",value:"px"},{label:"%",value:"%"}],Q=[{label:"px",value:"px"},{label:"%",value:"%"}],X=[{label:po("None","digiblocks"),value:"none"},{label:po("Text","digiblocks"),value:"text"},{label:po("Icon","digiblocks"),value:"icon"}],se=[{label:po("None","digiblocks"),value:"none"},...Object.keys(Vl).map(w=>({label:w.replace(/-/g," ").replace(/\b\w/g,ke=>ke.toUpperCase()),value:w}))],ne=[{name:"options",title:po("Options","digiblocks"),icon:er.optionsIcon},{name:"style",title:po("Style","digiblocks"),icon:er.styleIcon},{name:"advanced",title:po("Advanced","digiblocks"),icon:er.advancedIcon}],ve=Ve?window.digi.components.FontAwesomeControl:null,J=()=>{switch(T){case"wave":return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1200 120",preserveAspectRatio:"none"},wp.element.createElement("path",{d:"M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z",fill:u}));case"zigzag":return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1200 120",preserveAspectRatio:"none"},wp.element.createElement("path",{d:"M0,0 L100,120 L200,0 L300,120 L400,0 L500,120 L600,0 L700,120 L800,0 L900,120 L1000,0 L1100,120 L1200,0",fill:u}));case"slant":return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1200 120",preserveAspectRatio:"none"},wp.element.createElement("path",{d:"M1200 120L0 16.48 0 0 1200 0 1200 120z",fill:u}));default:return null}},ce=()=>{let w=window.digi.responsiveState.activeDevice,ke="",U=L[w]||{top:30,bottom:30,unit:"px"},fe=S[w]||100,ze=y[w]||3,qe="",je="";switch(T){case"line":ke=`
                    background-color: ${u};
                    height: ${ze}${v};
                    width: ${fe}${D};
                    border-radius: ${_[w]||0}px;
                `;break;case"dashed":ke=`
                    border-top: ${ze}${v} dashed ${u};
                    width: ${fe}${D};
                `;break;case"dotted":ke=`
                    border-top: ${ze}${v} dotted ${u};
                    width: ${fe}${D};
                `;break;case"double":ke=`
                    border-top: ${Math.max(1,Math.floor(ze/3))}${v} solid ${u};
                    border-bottom: ${Math.max(1,Math.floor(ze/3))}${v} solid ${u};
                    height: ${ze}${v};
                    width: ${fe}${D};
                `;break;case"gradient":ke=`
                    background: linear-gradient(90deg, ${r||"transparent"} 0%, ${u} 50%, ${r||"transparent"} 100%);
                    height: ${ze}${v};
                    width: ${fe}${D};
                    border-radius: ${_[w]||0}px;
                `;break;case"shadow":ke=`
                    height: ${ze}${v};
                    width: ${fe}${D};
                    background-color: ${u};
                    border-radius: ${_[w]||0}px;
                    box-shadow: 0 ${Math.max(2,ze/2)}px ${Math.max(4,ze)}px rgba(0,0,0,0.2);
                `;break;case"wave":case"zigzag":case"slant":ke=`
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
                `;break}let Fe="";if((l==="text"||l==="icon")&&!["wave","zigzag","slant"].includes(T)){let Se=A[w]||15;Fe=`
                .${o} .digiblocks-separator-content {
                    position: relative;
                    z-index: 2;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    background-color: #fff;
                    padding: 0 ${Se}px;
                    ${l==="text"&&V?`color: ${V};`:""}
                }
                
                .${o}.digiblocks-separator-has-content .digiblocks-separator-line {
                    position: absolute;
                    top: 50%;
                    left: 0;
                    right: 0;
                    z-index: 1;
                    transform: translateY(-50%);
                }
            `}if(l==="icon"&&H&&H.svg&&(Fe+=`
                .${o} .digiblocks-separator-icon {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                
                .${o} .digiblocks-separator-icon svg {
                    width: ${Y[w]||24}px;
                    height: ${Y[w]||24}px;
                    fill: ${V||u};
                }
            `),l==="text"&&O){let Se="";O.fontFamily&&(Se+=`font-family: ${O.fontFamily};`),O.fontSize&&O.fontSize[w]&&(Se+=`font-size: ${O.fontSize[w]}${O.fontSizeUnit||"px"};`),O.fontWeight&&(Se+=`font-weight: ${O.fontWeight};`),O.fontStyle&&(Se+=`font-style: ${O.fontStyle};`),O.textTransform&&(Se+=`text-transform: ${O.textTransform};`),O.lineHeight&&O.lineHeight[w]&&(Se+=`line-height: ${O.lineHeight[w]}${O.lineHeightUnit||"em"};`),O.letterSpacing&&O.letterSpacing[w]&&(Se+=`letter-spacing: ${O.letterSpacing[w]}${O.letterSpacingUnit||"px"};`),Fe+=`
                .${o} .digiblocks-separator-text {
                    ${Se}
                }
            `}let Ie="";B&&B!=="none"&&Vl[B]&&(Ie=Vl[B].keyframes);let j="";switch(x){case"center":j="margin-left: auto; margin-right: auto;";break;case"right":j="margin-left: auto; margin-right: 0;";break;default:j="margin-left: 0; margin-right: auto;";break}return`
            /* Separator Block - ${o} */
            .${o} {
                margin-top: ${U.top}${U.unit};
                margin-bottom: ${U.bottom}${U.unit};
                display: flex;
                align-items: center;
                justify-content: ${x==="center"?"center":x==="right"?"flex-end":"flex-start"};
                position: relative;
                clear: both;
                width: 100%;
            }
            
            .${o} .digiblocks-separator-container {
                position: relative;
                display: flex;
                flex-direction: column;
                align-items: ${x==="center"?"center":x==="right"?"flex-end":"flex-start"};
                width: 100%;
            }
            
            .${o} .digiblocks-separator-line {
                ${ke}
                ${j}
            }
            
            ${qe}
            ${Fe}
            ${Ie}
            
            /* Responsive styles will be handled by media queries */
            @media (max-width: 991px) {
                .${o} {
                    margin-top: ${L.tablet?L.tablet.top+(L.tablet.unit||"px"):U.top+U.unit};
                    margin-bottom: ${L.tablet?L.tablet.bottom+(L.tablet.unit||"px"):U.bottom+U.unit};
                }
                
                .${o} .digiblocks-separator-line {
                    width: ${S.tablet?S.tablet+D:fe+D};
                    height: ${y.tablet?y.tablet+v:ze+v};
                    ${_.tablet?`border-radius: ${_.tablet}px;`:""}
                }
                
                ${l==="icon"?`
                .${o} .digiblocks-separator-icon svg {
                    width: ${Y.tablet||20}px;
                    height: ${Y.tablet||20}px;
                }`:""}
            }
            
            @media (max-width: 767px) {
                .${o} {
                    margin-top: ${L.mobile?L.mobile.top+(L.mobile.unit||"px"):U.top+U.unit};
                    margin-bottom: ${L.mobile?L.mobile.bottom+(L.mobile.unit||"px"):U.bottom+U.unit};
                }
                
                .${o} .digiblocks-separator-line {
                    width: ${S.mobile?S.mobile+D:fe+D};
                    height: ${y.mobile?y.mobile+v:ze+v};
                    ${_.mobile?`border-radius: ${_.mobile}px;`:""}
                }
                
                ${l==="icon"?`
                .${o} .digiblocks-separator-icon svg {
                    width: ${Y.mobile||16}px;
                    height: ${Y.mobile||16}px;
                }`:""}
            }

			/* Visibility Controls */
			${s.desktop?`
				@media (min-width: 992px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${s.tablet?`
				@media (min-width: 768px) and (max-width: 991px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${s.mobile?`
				@media (max-width: 767px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}
        `},Te=()=>!H||!H.svg||H.svg.trim()===""?null:wp.element.createElement("div",{className:"digiblocks-separator-icon"},wp.element.createElement("span",{dangerouslySetInnerHTML:{__html:H.svg}})),be=()=>wp.element.createElement("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px",justifyContent:"center",margin:"0 -5px",maxHeight:"200px",overflow:"auto",padding:"4px 0",border:"1px solid #e0e0e0",borderRadius:"4px",backgroundColor:"#f9f9f9"}},[{label:"Line",value:"line"},{label:"Dashed",value:"dashed"},{label:"Dotted",value:"dotted"},{label:"Double",value:"double"},{label:"Gradient",value:"gradient"},{label:"Shadow",value:"shadow"},{label:"Wave",value:"wave"},{label:"Zigzag",value:"zigzag"},{label:"Slant",value:"slant"}].map(U=>wp.element.createElement(Cf,{key:U.value,style:U.value,primaryColor:u||"#1e73be",secondaryColor:r,isSelected:T===U.value,onClick:()=>{["wave","zigzag","slant"].includes(U.value)&&l!=="none"?e({separatorStyle:U.value,contentType:"none"}):e({separatorStyle:U.value})}}))),N=()=>{switch(M){case"options":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:"components-panel__body is-opened"},wp.element.createElement(hf,{label:po("Separator Style","digiblocks"),id:"separator-style-selector",__nextHasNoMarginBottom:!0},be()),["wave","zigzag","slant"].includes(T)?wp.element.createElement("div",{className:"components-notice is-warning",style:{margin:"0 0 16px 0"}},wp.element.createElement("div",{className:"components-notice__content"},po("Content is not available with this separator style.","digiblocks"))):wp.element.createElement(Zs,{label:po("Content Type","digiblocks"),value:l,onChange:w=>e({contentType:w}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},X.map(w=>wp.element.createElement(Ks,{key:w.value,value:w.value,label:w.label}))),l==="text"&&wp.element.createElement(mf,{label:po("Text Content","digiblocks"),value:$,onChange:w=>e({content:w}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),l==="icon"&&wp.element.createElement("div",{style:{marginTop:"15px"}},Ve?wp.element.createElement(ve,{label:po("Select Icon","digiblocks"),value:H,onChange:Z}):wp.element.createElement("div",{style:{textAlign:"center",padding:"20px 0"}},wp.element.createElement("div",{className:"components-spinner"}),wp.element.createElement("p",null,po("Loading icon selector...","digiblocks"))))));case"style":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Qi,{tab:"style",name:"colors",title:po("Colors","digiblocks"),initialOpen:!0},wp.element.createElement(df,{title:po("Separator Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:u,onChange:w=>e({primaryColor:w}),label:po("Primary Color","digiblocks")},...T==="gradient"?[{value:r,onChange:w=>e({secondaryColor:w}),label:po("Secondary Color","digiblocks")}]:[],...l!=="none"?[{value:V,onChange:w=>e({textColor:w}),label:po(l==="text"?"Text Color":"Icon Color","digiblocks")}]:[]]})),wp.element.createElement(Qi,{tab:"style",name:"dimensions",title:po("Dimensions","digiblocks"),initialOpen:!1},!["wave","zigzag","slant"].includes(T)&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:"digiblocks-size-type-field-tabs"},wp.element.createElement("div",{className:"digiblocks-responsive-control-inner"},wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"digiblocks-range-control digiblocks-size-type-field-tabs"},wp.element.createElement("div",{className:"digiblocks-control__header"},wp.element.createElement("div",{className:"digiblocks-responsive-label-wrap"},wp.element.createElement("span",{className:"digiblocks-control-label"},po("Width","digiblocks")),wp.element.createElement("button",{type:"button","aria-label":po(`Switch to ${window.digi.responsiveState.getNextDevice()} view`,"digiblocks"),className:`components-button digiblocks-responsive-common-button digiblocks-device-${k}`,onClick:()=>window.digi.responsiveState.toggleDevice()},window.digi.icons.deviceIcons[k])),wp.element.createElement("div",{className:"digiblocks-range-control__actions digiblocks-control__actions"},wp.element.createElement("div",{tabIndex:"0"},wp.element.createElement("button",{type:"button",disabled:S[k]===100,className:"components-button digiblocks-reset is-secondary is-small",onClick:()=>e({width:{...S,[k]:100}})},wp.element.createElement("span",{className:"dashicon dashicons dashicons-image-rotate"}))),wp.element.createElement(Zs,{value:D,onChange:w=>e({widthUnit:w}),isBlock:!0,isSmall:!0,hideLabelFromVision:!0,"aria-label":po("Width Unit","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},F.map(w=>wp.element.createElement(Ks,{key:w.value,value:w.value,label:w.label}))))),wp.element.createElement("div",{className:"digiblocks-range-control__mobile-controls"},wp.element.createElement(ci,{value:S[k],onChange:w=>e({width:{...S,[k]:w}}),min:1,max:D==="%"?100:1e3,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})))))),wp.element.createElement("div",{className:"digiblocks-size-type-field-tabs"},wp.element.createElement("div",{className:"digiblocks-responsive-control-inner"},wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"digiblocks-range-control digiblocks-size-type-field-tabs"},wp.element.createElement("div",{className:"digiblocks-control__header"},wp.element.createElement("div",{className:"digiblocks-responsive-label-wrap"},wp.element.createElement("span",{className:"digiblocks-control-label"},po("Height","digiblocks")),wp.element.createElement("button",{type:"button","aria-label":po(`Switch to ${window.digi.responsiveState.getNextDevice()} view`,"digiblocks"),className:`components-button digiblocks-responsive-common-button digiblocks-device-${k}`,onClick:()=>window.digi.responsiveState.toggleDevice()},window.digi.icons.deviceIcons[k])),wp.element.createElement("div",{className:"digiblocks-range-control__actions digiblocks-control__actions"},wp.element.createElement("div",{tabIndex:"0"},wp.element.createElement("button",{type:"button",disabled:y[k]===3,className:"components-button digiblocks-reset is-secondary is-small",onClick:()=>e({height:{...y,[k]:3}})},wp.element.createElement("span",{className:"dashicon dashicons dashicons-image-rotate"}))),wp.element.createElement(Zs,{value:v,onChange:w=>e({heightUnit:w}),isBlock:!0,isSmall:!0,hideLabelFromVision:!0,"aria-label":po("Height Unit","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},Q.map(w=>wp.element.createElement(Ks,{key:w.value,value:w.value,label:w.label}))))),wp.element.createElement("div",{className:"digiblocks-range-control__mobile-controls"},wp.element.createElement(ci,{value:y[k],onChange:w=>e({height:{...y,[k]:w}}),min:1,max:v==="%"?20:100,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}))))))),["line","gradient","shadow"].includes(T)&&wp.element.createElement("div",{className:"digiblocks-responsive-control"},wp.element.createElement("div",{className:"digiblocks-control__header"},wp.element.createElement("div",{className:"digiblocks-responsive-label-wrap"},wp.element.createElement("span",{className:"digiblocks-control-label"},po("Border Radius","digiblocks")),wp.element.createElement("button",{type:"button","aria-label":po(`Switch to ${window.digi.responsiveState.getNextDevice()} view`,"digiblocks"),className:`components-button digiblocks-responsive-common-button digiblocks-device-${k}`,onClick:()=>window.digi.responsiveState.toggleDevice()},window.digi.icons.deviceIcons[k]))),wp.element.createElement("div",{className:"digiblocks-responsive-control-content"},wp.element.createElement("div",{className:"digiblocks-unit-control"},wp.element.createElement(ci,{value:_[k],onChange:w=>e({borderRadius:{..._,[k]:w}}),min:0,max:50,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})))),(l==="text"||l==="icon")&&wp.element.createElement("div",{className:"digiblocks-responsive-control"},wp.element.createElement("div",{className:"digiblocks-control__header"},wp.element.createElement("div",{className:"digiblocks-responsive-label-wrap"},wp.element.createElement("span",{className:"digiblocks-control-label"},po("Gap","digiblocks")),wp.element.createElement("button",{type:"button","aria-label":po(`Switch to ${window.digi.responsiveState.getNextDevice()} view`,"digiblocks"),className:`components-button digiblocks-responsive-common-button digiblocks-device-${k}`,onClick:()=>window.digi.responsiveState.toggleDevice()},window.digi.icons.deviceIcons[k]))),wp.element.createElement("div",{className:"digiblocks-responsive-control-content"},wp.element.createElement("div",{className:"digiblocks-unit-control"},wp.element.createElement(ci,{value:A[k],onChange:w=>e({gap:{...A,[k]:w}}),min:0,max:100,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})))),l==="icon"&&wp.element.createElement("div",{className:"digiblocks-responsive-control"},wp.element.createElement("div",{className:"digiblocks-control__header"},wp.element.createElement("div",{className:"digiblocks-responsive-label-wrap"},wp.element.createElement("span",{className:"digiblocks-control-label"},po("Icon Size","digiblocks")),wp.element.createElement("button",{type:"button","aria-label":po(`Switch to ${window.digi.responsiveState.getNextDevice()} view`,"digiblocks"),className:`components-button digiblocks-responsive-common-button digiblocks-device-${k}`,onClick:()=>window.digi.responsiveState.toggleDevice()},window.digi.icons.deviceIcons[k]))),wp.element.createElement("div",{className:"digiblocks-responsive-control-content"},wp.element.createElement("div",{className:"digiblocks-unit-control"},wp.element.createElement(ci,{value:Y[k],onChange:w=>e({iconSize:{...Y,[k]:w}}),min:8,max:100,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})))),wp.element.createElement(vf,{label:po("Margin","digiblocks")},wp.element.createElement("div",{className:"digiblocks-margin-control"},wp.element.createElement(ci,{label:po("Top","digiblocks"),value:L[k]?.top||30,onChange:w=>{let ke={...L,[k]:{...L[k],top:w,unit:L[k]?.unit||"px"}};e({margin:ke})},min:0,max:200,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(ci,{label:po("Bottom","digiblocks"),value:L[k]?.bottom||30,onChange:w=>{let ke={...L,[k]:{...L[k],bottom:w,unit:L[k]?.unit||"px"}};e({margin:ke})},min:0,max:200,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})))),l==="text"&&wp.element.createElement(Qi,{tab:"style",name:"typography",title:po("Typography","digiblocks"),initialOpen:!1},wp.element.createElement(xf,{label:po("Text Typography","digiblocks"),value:O,onChange:w=>e({typography:w}),defaults:{fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",lineHeight:{desktop:1.5,tablet:1.5,mobile:1.5},lineHeightUnit:"em"}})));case"advanced":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Qi,{tab:"advanced",name:"animation",title:po("Animation","digiblocks"),initialOpen:!0},wp.element.createElement(bf,{label:po("Animation Effect","digiblocks"),value:B,options:se,onChange:w=>e({animation:w}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),B&&B!=="none"&&wp.element.createElement("div",{style:{marginTop:"10px"}},wp.element.createElement(uf,{variant:"secondary",isSecondary:!0,onClick:ee,style:{width:"100%"}},po("Preview Animation","digiblocks")))),wp.element.createElement(Qi,{tab:"advanced",name:"visibility",title:po("Visibility","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control__help",style:{padding:"12px",backgroundColor:"#f0f6fc",border:"1px solid #c3ddfd",borderRadius:"4px",marginBottom:"16px"}},wp.element.createElement("strong",null,po("Editor Note:","digiblocks")),wp.element.createElement("br",null),po("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.","digiblocks")),wp.element.createElement(Ys,{label:po("Hide on Desktop","digiblocks"),checked:s.desktop,onChange:w=>e({visibility:{...s,desktop:w}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(Ys,{label:po("Hide on Tablet","digiblocks"),checked:s.tablet,onChange:w=>e({visibility:{...s,tablet:w}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(Ys,{label:po("Hide on Mobile","digiblocks"),checked:s.mobile,onChange:w=>e({visibility:{...s,mobile:w}}),__nextHasNoMarginBottom:!0})),wp.element.createElement(Qi,{tab:"advanced",name:"additional",title:po("Additional","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control html-anchor-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"html-anchor"},po("HTML anchor","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"html-anchor",value:P||"",onChange:w=>e({anchor:w.target.value}),"aria-describedby":"html-anchor-help",autoCapitalize:"none",autoComplete:"off"})),wp.element.createElement("p",{id:"html-anchor-help",className:"components-base-control__help"},po(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`,"digiblocks")," ",wp.element.createElement("a",{className:"components-external-link",href:"https://wordpress.org/documentation/article/page-jumps/",target:"_blank",rel:"external noreferrer noopener"},wp.element.createElement("span",{className:"components-external-link__contents"},po("Learn more about anchors","digiblocks")),wp.element.createElement("span",{className:"components-external-link__icon","aria-label":"(opens in a new tab)"},"\u2197")))),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"additional-css-classes"},po("Additional CSS class(es)","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"additional-css-classes",value:oe||"",onChange:w=>e({customClasses:w.target.value}),"aria-describedby":"additional-css-classes-help",autoComplete:"off"})),wp.element.createElement("p",{id:"additional-css-classes-help",className:"components-base-control__help"},po("Separate multiple classes with spaces.","digiblocks")))));default:return null}},xe=rf({className:`digiblocks-separator ${o} ${l!=="none"&&!["wave","zigzag","slant"].includes(T)?"digiblocks-separator-has-content":""} ${oe||""}`,id:P||null});return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(gf,null,wp.element.createElement(pf,{value:x,onChange:w=>e({align:w})})),wp.element.createElement(cf,null,wp.element.createElement(yf,{tabs:ne,activeTab:M,onSelect:le},N())),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:ce()}}),wp.element.createElement("div",{...xe},wp.element.createElement("div",{className:"digiblocks-separator-container"},l!=="none"&&!["wave","zigzag","slant"].includes(T)&&wp.element.createElement("div",{className:"digiblocks-separator-content"},l==="text"&&wp.element.createElement("span",{className:"digiblocks-separator-text"},$),l==="icon"&&Te()),["wave","zigzag","slant"].includes(T)?wp.element.createElement("div",{className:"digiblocks-separator-shape"},J()):wp.element.createElement("div",{className:"digiblocks-separator-line"}))))},tg=wf;var{useBlockProps:Sf,RichText:cv}=window.wp.blockEditor,$f=({attributes:te})=>{let{id:e,anchor:K,customClasses:o,contentType:P,content:s,align:oe,iconValue:l,separatorStyle:$,primaryColor:x,secondaryColor:H,animation:T}=te,u=()=>{switch($){case"wave":return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1200 120",preserveAspectRatio:"none"},wp.element.createElement("path",{d:"M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z",fill:x}));case"zigzag":return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1200 120",preserveAspectRatio:"none"},wp.element.createElement("path",{d:"M0,0 L100,120 L200,0 L300,120 L400,0 L500,120 L600,0 L700,120 L800,0 L900,120 L1000,0 L1100,120 L1200,0",fill:x}));case"slant":return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1200 120",preserveAspectRatio:"none"},wp.element.createElement("path",{d:"M1200 120L0 16.48 0 0 1200 0 1200 120z",fill:x}));default:return null}},r=()=>!l||!l.svg||l.svg.trim()===""?null:wp.element.createElement("div",{className:"digiblocks-separator-icon"},wp.element.createElement("span",{dangerouslySetInnerHTML:{__html:l.svg}})),S=["digiblocks-separator",e,P!=="none"&&!["wave","zigzag","slant"].includes($)?"digiblocks-separator-has-content":"",`align-${oe}`,T!=="none"?`animate-${T}`:"",o||""].filter(Boolean).join(" "),D=Sf.save({className:S,id:K||null,"data-separator-style":$});return wp.element.createElement("div",{...D},wp.element.createElement("div",{className:"digiblocks-separator-container"},P!=="none"&&!["wave","zigzag","slant"].includes($)&&wp.element.createElement("div",{className:"digiblocks-separator-content"},P==="text"&&wp.element.createElement("span",{className:"digiblocks-separator-text"},s),P==="icon"&&r()),["wave","zigzag","slant"].includes($)?wp.element.createElement("div",{className:"digiblocks-separator-shape"},u()):wp.element.createElement("div",{className:"digiblocks-separator-line"})))},ig=$f;var{__:Ka}=window.wp.i18n,{registerBlockType:_f}=window.wp.blocks,{getBlockActiveStatus:Bf}=window.wp.digiBlocks;_f("digiblocks/separator",{apiVersion:2,title:digiBlocksData.blocks.separator.title,category:"digiblocks",icon:{src:()=>{let{viewbox:te,path:e}=digiBlocksData.blocks.separator.icon;return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${te}`,className:"digiblocks-editor-icons"},wp.element.createElement("path",{d:e}))}},description:digiBlocksData.blocks.separator.description,keywords:[Ka("separator","digiblocks"),Ka("divider","digiblocks"),Ka("horizontal rule","digiblocks"),Ka("hr","digiblocks")],supports:{inserter:!!Bf("separator"),html:!1,className:!1,customClassName:!1,anchor:!1},attributes:{id:{type:"string",default:""},anchor:{type:"string",default:""},visibility:{type:"object",default:{desktop:!1,tablet:!1,mobile:!1}},customClasses:{type:"string",default:""},contentType:{type:"string",default:"none"},content:{type:"string",default:"Separator"},iconValue:{type:"object",default:null},separatorStyle:{type:"string",default:"line"},primaryColor:{type:"string",default:"#222222"},secondaryColor:{type:"string",default:"#f0f0f0"},textColor:{type:"string",default:"#333333"},width:{type:"object",default:{desktop:100,tablet:100,mobile:100}},widthUnit:{type:"string",default:"%"},height:{type:"object",default:{desktop:3,tablet:2,mobile:2}},heightUnit:{type:"string",default:"px"},borderRadius:{type:"object",default:{desktop:0,tablet:0,mobile:0}},margin:{type:"object",default:{desktop:{top:30,bottom:30,unit:"px"},tablet:{top:25,bottom:25,unit:"px"},mobile:{top:20,bottom:20,unit:"px"}}},align:{type:"string",default:"center"},animation:{type:"string",default:"none"},typography:{type:"object",default:{fontFamily:"",fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",fontWeight:"",fontStyle:"normal",textTransform:"",textDecoration:"",lineHeight:{desktop:1.5,tablet:1.5,mobile:1.5},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}},iconSize:{type:"object",default:{desktop:24,tablet:20,mobile:16}},gap:{type:"object",default:{desktop:15,tablet:10,mobile:8}}},example:{attributes:{separatorStyle:"gradient",primaryColor:"#1e73be",secondaryColor:"#f0f0f0",width:{desktop:80},height:{desktop:4},contentType:"text",content:"Section",textColor:"#333333"}},edit:tg,save:ig});var{__:eo}=window.wp.i18n,{useBlockProps:Tf,InspectorControls:Nf,PanelColorSettings:lg}=window.wp.blockEditor,{SelectControl:or,RangeControl:tr,TabPanel:Hf,Button:Xa,ToggleControl:Fl,TextControl:ir,Popover:ag,__experimentalToggleGroupControl:zf,__experimentalToggleGroupControlOption:Aa}=window.wp.components,{useState:en,useEffect:lr,useRef:Mf}=window.wp.element,{useBlockId:Df,getDimensionCSS:ar,animations:El,animationPreview:ng}=digi.utils,{tabIcons:nr}=digi.icons,{ResponsiveControl:Ji,ResponsiveButtonGroup:Pf,DimensionControl:sr,TypographyControl:Rf,CustomTabPanel:If,TabPanelBody:Yi}=digi.components,Wl={facebook:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"})),twitter:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"})),linkedin:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"})),instagram:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"})),pinterest:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z"})),youtube:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"})),dribbble:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M86.6 64l85.2 85.2C194.5 121.7 208 86.4 208 48c0-14.7-2-28.9-5.7-42.4C158.6 15 119 35.5 86.6 64zM64 86.6C35.5 119 15 158.6 5.6 202.3C19.1 206 33.3 208 48 208c38.4 0 73.7-13.5 101.3-36.1L64 86.6zM256 0c-7.3 0-14.6 .3-21.8 .9C238 16 240 31.8 240 48c0 47.3-17.1 90.5-45.4 124L256 233.4 425.4 64C380.2 24.2 320.9 0 256 0zM48 240c-16.2 0-32-2-47.1-5.8C.3 241.4 0 248.7 0 256c0 64.9 24.2 124.2 64 169.4L233.4 256 172 194.6C138.5 222.9 95.3 240 48 240zm463.1 37.8c.6-7.2 .9-14.5 .9-21.8c0-64.9-24.2-124.2-64-169.4L278.6 256 340 317.4c33.4-28.3 76.7-45.4 124-45.4c16.2 0 32 2 47.1 5.8zm-4.7 31.9C492.9 306 478.7 304 464 304c-38.4 0-73.7 13.5-101.3 36.1L448 425.4c28.5-32.3 49.1-71.9 58.4-115.7zM340.1 362.7C317.5 390.3 304 425.6 304 464c0 14.7 2 28.9 5.7 42.4C353.4 497 393 476.5 425.4 448l-85.2-85.2zM317.4 340L256 278.6 86.6 448c45.1 39.8 104.4 64 169.4 64c7.3 0 14.6-.3 21.8-.9C274 496 272 480.2 272 464c0-47.3 17.1-90.5 45.4-124z"})),github:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 496 512",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"})),behance:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M232 237.2c31.8-15.2 48.4-38.2 48.4-74 0-70.6-52.6-87.8-113.3-87.8H0v354.4h171.8c64.4 0 124.9-30.9 124.9-102.9 0-44.5-21.1-77.4-64.7-89.7zM77.9 135.9H151c28.1 0 53.4 7.9 53.4 40.5 0 30.1-19.7 42.2-47.5 42.2h-79v-82.7zm83.3 233.7H77.9V272h84.9c34.3 0 56 14.3 56 50.6 0 35.8-25.9 47-57.6 47zm358.5-240.7H376V94h143.7v34.9zM576 305.2c0-75.9-44.4-139.2-124.9-139.2-78.2 0-131.3 58.8-131.3 135.8 0 79.9 50.3 134.7 131.3 134.7 61.3 0 101-27.6 120.1-86.3H509c-6.7 21.9-34.3 33.5-55.7 33.5-41.3 0-63-24.2-63-65.3h185.1c.3-4.2 .6-8.7 .6-13.2zM390.4 274c2.3-33.7 24.7-54.8 58.5-54.8 35.4 0 53.2 20.8 56.2 54.8H390.4z"})),vimeo:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M447.8 153.6c-2 43.6-32.4 103.3-91.4 179.1-60.9 79.2-112.4 118.8-154.6 118.8-26.1 0-48.2-24.1-66.3-72.3C100.3 250 85.3 174.3 56.2 174.3c-3.4 0-15.1 7.1-35.2 21.1L0 168.2c51.6-45.3 100.9-95.7 131.8-98.5 34.9-3.4 56.3 20.5 64.4 71.5 28.7 181.5 41.4 208.9 93.6 126.7 18.7-29.6 28.8-52.1 30.2-67.6 4.8-45.9-35.8-42.8-63.3-31 22-72.1 64.1-107.1 126.2-105.1 45.8 1.2 67.5 31.1 64.9 89.4z"})),tiktok:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"})),email:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"})),website:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"}))},Lf=wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"})),Of=({attributes:te,setAttributes:e,clientId:K})=>{let{id:o,anchor:P,visibility:s,customClasses:oe,align:l,icons:$,iconSize:x,iconSpacing:H,iconColor:T,iconHoverColor:u,iconBackground:r,iconHoverBackground:S,iconBorderStyle:D,iconBorderWidth:y,iconBorderRadius:v,iconBorderColor:_,iconHoverBorderColor:L,labelColor:B,labelHoverColor:O,labelSpacing:Y,padding:A,animation:V,showLabels:k,labelPosition:b,textTypography:M}=te;Df(o,K,e);let[le,Ve]=en(window.digi.responsiveState.activeDevice),[Ce,Z]=en(()=>{if(window.digi.uiState){let G=window.digi.uiState.getActiveTab(K);if(G)return G}return"options"}),[I,ee]=en(null),[F,Q]=en(null);lr(()=>window.digi.responsiveState.subscribe(pe=>{Ve(pe)}),[]),lr(()=>{(!$||$.length===0)&&e({icons:[{id:`social-icon-${K.substr(0,8)}-1`,iconValue:{name:"Facebook",network:"facebook",svg:"M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"},url:"https://facebook.com",label:"Facebook",openInNewTab:!0,rel:"nofollow"}]})},[K,$,e,o]);let X=Mf(null);lr(()=>{if(V&&V!=="none"){let G=setTimeout(()=>{ng(o,V,El,X)},100);return()=>clearTimeout(G)}},[V]);let se=()=>{ng(o,V,El,X)},ne=[{label:eo("None","digiblocks"),value:"none"},{label:eo("Solid","digiblocks"),value:"solid"},{label:eo("Dotted","digiblocks"),value:"dotted"},{label:eo("Dashed","digiblocks"),value:"dashed"},{label:eo("Double","digiblocks"),value:"double"}],ve=[{label:eo("None","digiblocks"),value:"none"},...Object.keys(El).map(G=>({label:G.replace(/-/g," ").replace(/\b\w/g,pe=>pe.toUpperCase()),value:G}))],J=[{label:eo("Facebook","digiblocks"),value:"facebook"},{label:eo("Twitter","digiblocks"),value:"twitter"},{label:eo("LinkedIn","digiblocks"),value:"linkedin"},{label:eo("Instagram","digiblocks"),value:"instagram"},{label:eo("Pinterest","digiblocks"),value:"pinterest"},{label:eo("YouTube","digiblocks"),value:"youtube"},{label:eo("Dribbble","digiblocks"),value:"dribbble"},{label:eo("GitHub","digiblocks"),value:"github"},{label:eo("Behance","digiblocks"),value:"behance"},{label:eo("Vimeo","digiblocks"),value:"vimeo"},{label:eo("TikTok","digiblocks"),value:"tiktok"},{label:eo("Email","digiblocks"),value:"email"},{label:eo("Website","digiblocks"),value:"website"}],ce=[{name:"options",title:eo("Options","digiblocks"),icon:nr.optionsIcon},{name:"style",title:eo("Style","digiblocks"),icon:nr.styleIcon},{name:"advanced",title:eo("Advanced","digiblocks"),icon:nr.advancedIcon}],Te=[{name:"normal",title:eo("Normal","digiblocks"),className:"digiblocks-tab-1 normal"},{name:"hover",title:eo("Hover","digiblocks"),className:"digiblocks-tab-2 hover"}],be=()=>{N()},N=()=>{Q({target:document.querySelector(".add-social")})},xe=()=>{Q(null)},w=G=>{if($.map(re=>re.iconValue&&re.iconValue.network?re.iconValue.network:null).filter(Boolean).includes(G))return;let p={id:`social-icon-${K.substr(0,8)}-${Date.now()}`,iconValue:{name:G.charAt(0).toUpperCase()+G.slice(1),network:G,svg:Wl[G]?Wl[G].props.children.props.d:""},url:"",label:G.charAt(0).toUpperCase()+G.slice(1),openInNewTab:!0,rel:"nofollow"};e({icons:[...$,p]}),xe(),setTimeout(()=>{let re=$.length;fe(re)},100)},ke=G=>{if($.length>1){let pe=[...$];pe.splice(G,1),e({icons:pe})}},U=(G,pe,R)=>{let p=[...$];p[G]={...p[G],[pe]:R},e({icons:p})},fe=G=>{ee({index:G,target:document.getElementById(`social-icon-${G}`)})},ze=()=>{ee(null)},qe=()=>{let G=le,pe=x[G]||24,R=H[G]||10,p=Y[G]||5,re="";D&&D!=="none"&&(re=`
                border-style: ${D};
                border-color: ${_||"#e0e0e0"};
				${ar(y,"border-width",G)}
				${ar(v,"border-radius",G)}
            `);let n="";M&&(M.fontFamily&&(n+=`font-family: ${M.fontFamily};`),M.fontSize&&M.fontSize[G]&&(n+=`font-size: ${M.fontSize[G]}${M.fontSizeUnit||"px"};`),M.fontWeight&&(n+=`font-weight: ${M.fontWeight};`),M.fontStyle&&(n+=`font-style: ${M.fontStyle};`),M.textTransform&&(n+=`text-transform: ${M.textTransform};`),M.textDecoration&&(n+=`text-decoration: ${M.textDecoration};`),M.lineHeight&&M.lineHeight[G]&&(n+=`line-height: ${M.lineHeight[G]}${M.lineHeightUnit||"em"};`),M.letterSpacing&&M.letterSpacing[G]&&(n+=`letter-spacing: ${M.letterSpacing[G]}${M.letterSpacingUnit||"px"};`));let g=A&&A[G]?`${ar(A,"padding",G)}`:"",q="";V&&V!=="none"&&El[V]&&(q=El[V].keyframes);let d="";if(k&&b)switch(b){case"top":d=`
                        .${o} .digiblocks-social-icon {
                            flex-direction: column-reverse;
                        }
                    `;break;case"right":d=`
                        .${o} .digiblocks-social-icon {
                            flex-direction: row;
                        }
                    `;break;case"bottom":d=`
                        .${o} .digiblocks-social-icon {
                            flex-direction: column;
                        }
                    `;break;case"left":d=`
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
                gap: ${p}px;
            }
            
            .${o} .digiblocks-social-icon-icon {
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: ${r||"transparent"};
                color: ${T||"#333333"};
                ${re}
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
                background-color: ${S||r||"transparent"};
                ${L?`border-color: ${L};`:""}
                ${u?`color: ${u};`:""}
            }
            
            .${o} .digiblocks-social-icon-label {
                ${n}
                color: ${B||T||"#333333"};
                transition: color 0.3s ease;
            }
            
            .${o} .digiblocks-social-icon:hover .digiblocks-social-icon-label {
                color: ${O||u||B||T||"#333333"};
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
            
            ${d}
            ${q}
            
            /* Responsive styles */
            @media (max-width: 991px) {
                .${o} {
                    gap: ${H.tablet||R}px;
                }
                
                .${o} .digiblocks-social-icon {
                    gap: ${Y.tablet||p}px;
                }
                
                .${o} .digiblocks-social-icon-icon svg {
                    width: ${x.tablet||pe}px;
                    height: ${x.tablet||pe}px;
                }
                
                ${M&&M.fontSize&&M.fontSize.tablet?`
                .${o} .digiblocks-social-icon-label {
                    font-size: ${M.fontSize.tablet}${M.fontSizeUnit||"px"};
                }
                `:""}
                
                .${o} .digiblocks-social-icon.add-social {
                    width: ${x.tablet||pe}px;
                    height: ${x.tablet||pe}px;
                }
            }
            
            @media (max-width: 767px) {
                .${o} {
                    gap: ${H.mobile||H.tablet||R}px;
                }
                
                .${o} .digiblocks-social-icon {
                    gap: ${Y.mobile||Y.tablet||p}px;
                }
                
                .${o} .digiblocks-social-icon-icon svg {
                    width: ${x.mobile||x.tablet||pe}px;
                    height: ${x.mobile||x.tablet||pe}px;
                }
                
                ${M&&M.fontSize&&M.fontSize.mobile?`
                .${o} .digiblocks-social-icon-label {
                    font-size: ${M.fontSize.mobile}${M.fontSizeUnit||"px"};
                }
                `:""}
                
                .${o} .digiblocks-social-icon.add-social {
                    width: ${x.mobile||x.tablet||pe}px;
                    height: ${x.mobile||x.tablet||pe}px;
                }
            }

			/* Visibility Controls */
			${s.desktop?`
				@media (min-width: 992px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${s.tablet?`
				@media (min-width: 768px) and (max-width: 991px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${s.mobile?`
				@media (max-width: 767px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}
        `},je=G=>G==="normal"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(lg,{title:eo("Icon Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:T,onChange:pe=>e({iconColor:pe}),label:eo("Icon Color","digiblocks")},{value:r,onChange:pe=>e({iconBackground:pe}),label:eo("Background Color","digiblocks")},{value:_,onChange:pe=>e({iconBorderColor:pe}),label:eo("Border Color","digiblocks")},...k?[{value:B,onChange:pe=>e({labelColor:pe}),label:eo("Label Color","digiblocks")}]:[]]})):wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(lg,{title:eo("Icon Hover Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:u,onChange:pe=>e({iconHoverColor:pe}),label:eo("Icon Hover Color","digiblocks")},{value:S,onChange:pe=>e({iconHoverBackground:pe}),label:eo("Hover Background","digiblocks")},{value:L,onChange:pe=>e({iconHoverBorderColor:pe}),label:eo("Hover Border Color","digiblocks")},...k?[{value:O,onChange:pe=>e({labelHoverColor:pe}),label:eo("Label Hover Color","digiblocks")}]:[]]})),Fe=()=>{if(!F)return null;let{target:G}=F,pe=$.map(p=>p.iconValue&&p.iconValue.network?p.iconValue.network:null).filter(Boolean),R=J.filter(p=>!pe.includes(p.value));return R.length===0?(xe(),null):wp.element.createElement(ag,{anchor:G,onClose:xe,position:"bottom center",expandOnMobile:!0,className:"digiblocks-social-select-popover"},wp.element.createElement("div",{style:{padding:"12px",width:"280px",maxHeight:"400px",overflowY:"auto"}},wp.element.createElement("div",{style:{marginBottom:"10px",fontWeight:"bold"}},eo("Select Social Network","digiblocks")),wp.element.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"8px"}},R.map(p=>wp.element.createElement(Xa,{key:p.value,variant:"secondary",onClick:()=>w(p.value),style:{display:"flex",alignItems:"center",justifyContent:"flex-start",padding:"8px",gap:"8px"}},wp.element.createElement("span",{style:{display:"inline-flex",alignItems:"center"}},Wl[p.value]),wp.element.createElement("span",null,p.label))))))},Ie=()=>{if(!I)return null;let{index:G,target:pe}=I,R=$[G];return wp.element.createElement(ag,{anchor:pe,onClose:ze,position:"bottom center",expandOnMobile:!0,className:"digiblocks-social-url-popover"},wp.element.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",padding:"12px",minWidth:"280px"}},wp.element.createElement(or,{label:eo("Social Network","digiblocks"),value:R.iconValue?R.iconValue.network:"",options:J,onChange:p=>{let re=[...$];re[G]={...re[G],iconValue:{name:p.charAt(0).toUpperCase()+p.slice(1),network:p,svg:Wl[p]?Wl[p].props.children.props.d:""}},e({icons:re})},__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(ir,{label:eo("URL","digiblocks"),value:R.url||"",onChange:p=>U(G,"url",p),placeholder:R.iconValue&&R.iconValue.network==="email"?"mailto:example@domain.com":R.iconValue&&R.iconValue.network==="website"?"https://example.com":`https://${R.iconValue?R.iconValue.network:"example"}.com/username`,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(ir,{label:eo("Label","digiblocks"),value:R.label||"",onChange:p=>U(G,"label",p),placeholder:R.iconValue?R.iconValue.name:eo("Social Media","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Fl,{label:eo("Open in new tab","digiblocks"),checked:R.openInNewTab===void 0?!0:R.openInNewTab,onChange:p=>U(G,"openInNewTab",p),__nextHasNoMarginBottom:!0}),wp.element.createElement(ir,{label:eo("Rel Attribute","digiblocks"),value:R.rel||"",onChange:p=>U(G,"rel",p),placeholder:eo("e.g. nofollow","digiblocks"),help:eo('Optional. Add rel attributes like "nofollow", "sponsored", etc.',"digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Xa,{variant:"primary",onClick:ze,style:{justifyContent:"center",width:"100%"}},eo("Done","digiblocks"))))},j=()=>{switch(Ce){case"options":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:"components-panel__body is-opened"},wp.element.createElement(Pf,{label:eo("Alignment","digiblocks"),value:l,onChange:G=>e({align:G}),options:[{label:eo("Left","digiblocks"),value:"flex-start"},{label:eo("Center","digiblocks"),value:"center"},{label:eo("Right","digiblocks"),value:"flex-end"}]}),wp.element.createElement(Fl,{label:eo("Show Labels","digiblocks"),checked:k,onChange:G=>e({showLabels:G}),__nextHasNoMarginBottom:!0}),k&&wp.element.createElement(zf,{label:eo("Label Position","digiblocks"),value:b,onChange:G=>e({labelPosition:G}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(Aa,{value:"bottom",label:eo("Bottom","digiblocks")}),wp.element.createElement(Aa,{value:"right",label:eo("Right","digiblocks")}),wp.element.createElement(Aa,{value:"left",label:eo("Left","digiblocks")}),wp.element.createElement(Aa,{value:"top",label:eo("Top","digiblocks")}))));case"style":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Yi,{tab:"style",name:"colors",title:eo("Colors","digiblocks"),initialOpen:!0},wp.element.createElement(Hf,{className:"digiblocks-control-tabs",activeClass:"active-tab",tabs:Te},G=>je(G.name))),wp.element.createElement(Yi,{tab:"style",name:"size-shape",title:eo("Size & Shape","digiblocks"),initialOpen:!1},wp.element.createElement(Ji,{label:eo("Icon Size","digiblocks")},wp.element.createElement(tr,{value:x[le],onChange:G=>e({iconSize:{...x,[le]:G}}),min:0,max:100,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(Ji,{label:eo("Icon Spacing","digiblocks")},wp.element.createElement(tr,{value:H[le],onChange:G=>e({iconSpacing:{...H,[le]:G}}),min:0,max:100,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),k&&wp.element.createElement(Ji,{label:eo("Label Spacing","digiblocks")},wp.element.createElement(tr,{value:Y[le],onChange:G=>e({labelSpacing:{...Y,[le]:G}}),min:0,max:100,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(or,{label:eo("Border Style","digiblocks"),value:D||"none",options:ne,onChange:G=>{G!=="none"&&(!y||Object.keys(y).length===0)&&e({iconBorderWidth:{desktop:{value:1,unit:"px"},tablet:{value:1,unit:"px"},mobile:{value:1,unit:"px"}}}),G!=="none"&&(!v||Object.keys(v).length===0)&&e({iconBorderRadius:{desktop:{value:0,unit:"px"},tablet:{value:0,unit:"px"},mobile:{value:0,unit:"px"}}}),e({iconBorderStyle:G})},__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),D&&D!=="none"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Ji,{label:eo("Border Width","digiblocks")},wp.element.createElement(sr,{values:y[le],onChange:G=>e({iconBorderWidth:{...y,[le]:G}})})),wp.element.createElement(Ji,{label:eo("Border Radius","digiblocks")},wp.element.createElement(sr,{values:v[le],onChange:G=>e({iconBorderRadius:{...v,[le]:G}})}))),wp.element.createElement(Ji,{label:eo("Padding","digiblocks")},wp.element.createElement(sr,{values:A[le],onChange:G=>e({padding:{...A,[le]:G}})}))),k&&wp.element.createElement(Yi,{tab:"style",name:"typography",title:eo("Typography","digiblocks"),initialOpen:!1},wp.element.createElement(Rf,{label:eo("Label Typography","digiblocks"),value:M,onChange:G=>e({textTypography:G}),defaults:{fontSize:{desktop:14,tablet:13,mobile:12},fontSizeUnit:"px",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em"}})));case"advanced":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Yi,{tab:"advanced",name:"animation",title:eo("Animation","digiblocks"),initialOpen:!0},wp.element.createElement(or,{label:eo("Animation Effect","digiblocks"),value:V,options:ve,onChange:G=>e({animation:G}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),V&&V!=="none"&&wp.element.createElement("div",{style:{marginTop:"10px"}},wp.element.createElement(Xa,{variant:"secondary",isSecondary:!0,onClick:se,style:{width:"100%"}},eo("Preview Animation","digiblocks")))),wp.element.createElement(Yi,{tab:"advanced",name:"visibility",title:eo("Visibility","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control__help",style:{padding:"12px",backgroundColor:"#f0f6fc",border:"1px solid #c3ddfd",borderRadius:"4px",marginBottom:"16px"}},wp.element.createElement("strong",null,eo("Editor Note:","digiblocks")),wp.element.createElement("br",null),eo("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.","digiblocks")),wp.element.createElement(Fl,{label:eo("Hide on Desktop","digiblocks"),checked:s.desktop,onChange:G=>e({visibility:{...s,desktop:G}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(Fl,{label:eo("Hide on Tablet","digiblocks"),checked:s.tablet,onChange:G=>e({visibility:{...s,tablet:G}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(Fl,{label:eo("Hide on Mobile","digiblocks"),checked:s.mobile,onChange:G=>e({visibility:{...s,mobile:G}}),__nextHasNoMarginBottom:!0})),wp.element.createElement(Yi,{tab:"advanced",name:"additional",title:eo("Additional","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control html-anchor-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"html-anchor"},eo("HTML anchor","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"html-anchor",value:P||"",onChange:G=>e({anchor:G.target.value}),"aria-describedby":"html-anchor-help",autoCapitalize:"none",autoComplete:"off"})),wp.element.createElement("p",{id:"html-anchor-help",className:"components-base-control__help"},eo(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`,"digiblocks")," ",wp.element.createElement("a",{className:"components-external-link",href:"https://wordpress.org/documentation/article/page-jumps/",target:"_blank",rel:"external noreferrer noopener"},wp.element.createElement("span",{className:"components-external-link__contents"},eo("Learn more about anchors","digiblocks")),wp.element.createElement("span",{className:"components-external-link__icon","aria-label":"(opens in a new tab)"},"\u2197")))),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"additional-css-classes"},eo("Additional CSS class(es)","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"additional-css-classes",value:oe||"",onChange:G=>e({customClasses:G.target.value}),"aria-describedby":"additional-css-classes-help",autoComplete:"off"})),wp.element.createElement("p",{id:"additional-css-classes-help",className:"components-base-control__help"},eo("Separate multiple classes with spaces.","digiblocks")))));default:return null}},Se=Tf({className:`digiblocks-social-icons ${o} ${oe||""}`,id:P||null}),Qe=()=>{let G=$.map((pe,R)=>wp.element.createElement("div",{key:pe.id||R,className:"digiblocks-social-wrapper",id:`social-icon-${R}`},wp.element.createElement("div",{className:"digiblocks-social-icon",onClick:()=>{fe(R)}},wp.element.createElement("div",{className:"digiblocks-social-icon-icon"},pe.iconValue&&pe.iconValue.network?wp.element.createElement("span",{dangerouslySetInnerHTML:{__html:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="${pe.iconValue.network==="facebook"?"0 0 320 512":pe.iconValue.network==="twitter"?"0 0 512 512":pe.iconValue.network==="linkedin"||pe.iconValue.network==="instagram"?"0 0 448 512":pe.iconValue.network==="pinterest"?"0 0 384 512":pe.iconValue.network==="youtube"?"0 0 576 512":pe.iconValue.network==="dribbble"?"0 0 512 512":pe.iconValue.network==="github"?"0 0 496 512":pe.iconValue.network==="behance"?"0 0 576 512":pe.iconValue.network==="vimeo"||pe.iconValue.network==="tiktok"?"0 0 448 512":pe.iconValue.network==="email"?"0 0 512 512":"0 0 640 512"}" fill="currentColor"><path d="${pe.iconValue.svg}"/></svg>`}}):wp.element.createElement("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#f0f0f0",borderRadius:"50%",fontSize:"20px",color:"#555"}},"?")),k&&pe.label&&wp.element.createElement("span",{className:"digiblocks-social-icon-label"},pe.label)),$.length>1&&wp.element.createElement(Xa,{className:"digiblocks-social-icon-remove",onClick:()=>ke(R),icon:"no-alt",isSmall:!0,label:eo("Remove","digiblocks")})));return G.push(wp.element.createElement("div",{key:"add-social-icon",className:"digiblocks-social-icon add-social",onClick:be,title:eo("Add Social Icon","digiblocks")},Lf)),G};return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Nf,null,wp.element.createElement(If,{tabs:ce,activeTab:Ce,onSelect:Z},j())),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:qe()}}),wp.element.createElement("div",{...Se},Qe(),Fe(),Ie()))},sg=Of;var{useBlockProps:Uf}=window.wp.blockEditor,jf=({attributes:te})=>{let{id:e,anchor:K,customClasses:o,icons:P,align:s,animation:oe,showLabels:l,labelPosition:$}=te,x=["digiblocks-social-icons",e,`align-${s}`,oe!=="none"?`animate-${oe}`:"",o||""].filter(Boolean).join(" "),H=Uf.save({className:x,id:K||null}),T=()=>P.map((u,r)=>{if(!u.iconValue||!u.iconValue.network||!u.url)return null;let S=u.openInNewTab?"noopener noreferrer":"";return u.rel&&(S=S?`${S} ${u.rel}`:u.rel),wp.element.createElement("a",{key:u.id||r,href:u.url,className:"digiblocks-social-icon",target:u.openInNewTab?"_blank":"_self",rel:S||void 0,"aria-label":u.label||u.iconValue.name||"Social icon"},wp.element.createElement("div",{className:"digiblocks-social-icon-icon"},wp.element.createElement("span",{dangerouslySetInnerHTML:{__html:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="${u.iconValue.network==="facebook"?"0 0 320 512":u.iconValue.network==="twitter"?"0 0 512 512":u.iconValue.network==="linkedin"||u.iconValue.network==="instagram"?"0 0 448 512":u.iconValue.network==="pinterest"?"0 0 384 512":u.iconValue.network==="youtube"?"0 0 576 512":u.iconValue.network==="dribbble"?"0 0 512 512":u.iconValue.network==="github"?"0 0 496 512":u.iconValue.network==="behance"?"0 0 576 512":u.iconValue.network==="vimeo"||u.iconValue.network==="tiktok"?"0 0 448 512":u.iconValue.network==="email"?"0 0 512 512":"0 0 640 512"}" fill="currentColor"><path d="${u.iconValue.network==="facebook"?"M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z":u.iconValue.network==="twitter"?"M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z":u.iconValue.network==="linkedin"?"M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z":u.iconValue.network==="instagram"?"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z":u.iconValue.network==="pinterest"?"M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z":u.iconValue.network==="youtube"?"M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z":u.iconValue.network==="dribbble"?"M86.6 64l85.2 85.2C194.5 121.7 208 86.4 208 48c0-14.7-2-28.9-5.7-42.4C158.6 15 119 35.5 86.6 64zM64 86.6C35.5 119 15 158.6 5.6 202.3C19.1 206 33.3 208 48 208c38.4 0 73.7-13.5 101.3-36.1L64 86.6zM256 0c-7.3 0-14.6 .3-21.8 .9C238 16 240 31.8 240 48c0 47.3-17.1 90.5-45.4 124L256 233.4 425.4 64C380.2 24.2 320.9 0 256 0zM48 240c-16.2 0-32-2-47.1-5.8C.3 241.4 0 248.7 0 256c0 64.9 24.2 124.2 64 169.4L233.4 256 172 194.6C138.5 222.9 95.3 240 48 240zm463.1 37.8c.6-7.2 .9-14.5 .9-21.8c0-64.9-24.2-124.2-64-169.4L278.6 256 340 317.4c33.4-28.3 76.7-45.4 124-45.4c16.2 0 32 2 47.1 5.8zm-4.7 31.9C492.9 306 478.7 304 464 304c-38.4 0-73.7 13.5-101.3 36.1L448 425.4c28.5-32.3 49.1-71.9 58.4-115.7zM340.1 362.7C317.5 390.3 304 425.6 304 464c0 14.7 2 28.9 5.7 42.4C353.4 497 393 476.5 425.4 448l-85.2-85.2zM317.4 340L256 278.6 86.6 448c45.1 39.8 104.4 64 169.4 64c7.3 0 14.6-.3 21.8-.9C274 496 272 480.2 272 464c0-47.3 17.1-90.5 45.4-124z":u.iconValue.network==="github"?"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z":u.iconValue.network==="behance"?"M232 237.2c31.8-15.2 48.4-38.2 48.4-74 0-70.6-52.6-87.8-113.3-87.8H0v354.4h171.8c64.4 0 124.9-30.9 124.9-102.9 0-44.5-21.1-77.4-64.7-89.7zM77.9 135.9H151c28.1 0 53.4 7.9 53.4 40.5 0 30.1-19.7 42.2-47.5 42.2h-79v-82.7zm83.3 233.7H77.9V272h84.9c34.3 0 56 14.3 56 50.6 0 35.8-25.9 47-57.6 47zm358.5-240.7H376V94h143.7v34.9zM576 305.2c0-75.9-44.4-139.2-124.9-139.2-78.2 0-131.3 58.8-131.3 135.8 0 79.9 50.3 134.7 131.3 134.7 61.3 0 101-27.6 120.1-86.3H509c-6.7 21.9-34.3 33.5-55.7 33.5-41.3 0-63-24.2-63-65.3h185.1c.3-4.2 .6-8.7 .6-13.2zM390.4 274c2.3-33.7 24.7-54.8 58.5-54.8 35.4 0 53.2 20.8 56.2 54.8H390.4z":u.iconValue.network==="vimeo"?"M447.8 153.6c-2 43.6-32.4 103.3-91.4 179.1-60.9 79.2-112.4 118.8-154.6 118.8-26.1 0-48.2-24.1-66.3-72.3C100.3 250 85.3 174.3 56.2 174.3c-3.4 0-15.1 7.1-35.2 21.1L0 168.2c51.6-45.3 100.9-95.7 131.8-98.5 34.9-3.4 56.3 20.5 64.4 71.5 28.7 181.5 41.4 208.9 93.6 126.7 18.7-29.6 28.8-52.1 30.2-67.6 4.8-45.9-35.8-42.8-63.3-31 22-72.1 64.1-107.1 126.2-105.1 45.8 1.2 67.5 31.1 64.9 89.4z":u.iconValue.network==="tiktok"?"M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z":u.iconValue.network==="email"?"M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z":"M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"}"/></svg>`}})),l&&u.label&&wp.element.createElement("span",{className:"digiblocks-social-icon-label"},u.label))}).filter(Boolean);return wp.element.createElement("div",{...H},T())},rg=jf;var{__:on}=window.wp.i18n,{registerBlockType:Vf}=window.wp.blocks,{getBlockActiveStatus:Ff}=window.wp.digiBlocks;Vf("digiblocks/social-icons",{apiVersion:2,title:digiBlocksData.blocks["social-icons"].title,category:"digiblocks",icon:{src:()=>{let{viewbox:te,path:e}=digiBlocksData.blocks["social-icons"].icon;return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${te}`,className:"digiblocks-editor-icons"},wp.element.createElement("path",{d:e}))}},description:digiBlocksData.blocks["social-icons"].description,keywords:[on("social","digiblocks"),on("icons","digiblocks"),on("networks","digiblocks"),on("media","digiblocks")],supports:{inserter:!!Ff("social-icons"),html:!1,className:!1,customClassName:!1,anchor:!1},attributes:{id:{type:"string",default:""},anchor:{type:"string",default:""},visibility:{type:"object",default:{desktop:!1,tablet:!1,mobile:!1}},customClasses:{type:"string",default:""},align:{type:"object",default:{desktop:"flex-start",tablet:"",mobile:""}},icons:{type:"array",default:[{id:"social-icon-1",iconValue:{name:"Facebook",network:"facebook",svg:"M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"},url:"https://facebook.com",label:"Facebook",openInNewTab:!0,rel:"nofollow"},{id:"social-icon-2",iconValue:{name:"Twitter",network:"twitter",svg:"M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"},url:"https://twitter.com",label:"Twitter",openInNewTab:!0,rel:"nofollow"},{id:"social-icon-3",iconValue:{name:"Instagram",network:"instagram",svg:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},url:"https://instagram.com",label:"Instagram",openInNewTab:!0,rel:"nofollow"}]},iconSize:{type:"object",default:{desktop:24,tablet:22,mobile:20}},iconSpacing:{type:"object",default:{desktop:10,tablet:8,mobile:6}},labelSpacing:{type:"object",default:{desktop:5,tablet:5,mobile:5}},iconColor:{type:"string",default:"#333333"},iconHoverColor:{type:"string",default:""},labelColor:{type:"string",default:""},labelHoverColor:{type:"string",default:""},iconBackground:{type:"string",default:"transparent"},iconHoverBackground:{type:"string",default:""},iconBorderStyle:{type:"string",default:"none"},iconBorderWidth:{type:"object",default:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},iconBorderRadius:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},iconBorderColor:{type:"string",default:"#e0e0e0"},iconHoverBorderColor:{type:"string",default:""},padding:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},animation:{type:"string",default:"none"},showLabels:{type:"boolean",default:!1},labelPosition:{type:"string",default:"bottom"},textTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:14,tablet:13,mobile:12},fontSizeUnit:"px",fontWeight:"",fontStyle:"normal",textTransform:"",textDecoration:"",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}}},example:{attributes:{icons:[{id:"example-icon-1",iconValue:{name:"Facebook",network:"facebook",svg:"M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"},url:"https://facebook.com",label:"Facebook",openInNewTab:!0,rel:"nofollow"},{id:"example-icon-2",iconValue:{name:"Twitter",network:"twitter",svg:"M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"},url:"https://twitter.com",label:"Twitter",openInNewTab:!0,rel:"nofollow"},{id:"example-icon-3",iconValue:{name:"Instagram",network:"instagram",svg:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},url:"https://instagram.com",label:"Instagram",openInNewTab:!0,rel:"nofollow"}],iconSpacing:{desktop:20},align:"center",iconColor:"#1e73be",labelColor:"#09053a",iconBackground:"transparent",showLabels:!0,labelPosition:"right"}},edit:sg,save:rg});var{__:To}=window.wp.i18n,{useBlockProps:Ef,InspectorControls:Wf}=window.wp.blockEditor,{ToggleControl:rr,RangeControl:qf}=window.wp.components,{useState:cg,useEffect:Gf}=window.wp.element,{useBlockId:Qf}=digi.utils,{tabIcons:dg}=digi.icons,{ResponsiveControl:Jf,CustomTabPanel:Yf}=digi.components,Zf=({attributes:te,setAttributes:e,clientId:K})=>{let{id:o,anchor:P,visibility:s,customClasses:oe,height:l}=te;Qf(o,K,e);let[$,x]=cg(window.digi.responsiveState.activeDevice);Gf(()=>window.digi.responsiveState.subscribe(v=>{x(v)}),[]);let[H,T]=cg(()=>{if(window.digi.uiState){let y=window.digi.uiState.getActiveTab(K);if(y)return y}return"options"}),u=[{name:"options",title:To("Options","digiblocks"),icon:dg.optionsIcon},{name:"advanced",title:To("Advanced","digiblocks"),icon:dg.advancedIcon}],r=()=>{let y=window.digi.responsiveState.activeDevice,v=l[y]||(y==="tablet"?60:y==="mobile"?40:80);return`
            /* Spacer Block Styles */
            .${o} {
                height: ${v}px;
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
			${s.desktop?`
				@media (min-width: 992px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${s.tablet?`
				@media (min-width: 768px) and (max-width: 991px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${s.mobile?`
				@media (max-width: 767px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}
        `},S=()=>{switch(H){case"options":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:"components-panel__body is-opened"},wp.element.createElement(Jf,{label:To("Height","digiblocks")},wp.element.createElement(qf,{value:l[$],onChange:y=>e({height:{...l,[$]:y}}),min:1,max:500,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}))));case"advanced":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(TabPanelBody,{tab:"advanced",name:"visibility",title:To("Visibility","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control__help",style:{padding:"12px",backgroundColor:"#f0f6fc",border:"1px solid #c3ddfd",borderRadius:"4px",marginBottom:"16px"}},wp.element.createElement("strong",null,To("Editor Note:","digiblocks")),wp.element.createElement("br",null),To("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.","digiblocks")),wp.element.createElement(rr,{label:To("Hide on Desktop","digiblocks"),checked:s.desktop,onChange:y=>e({visibility:{...s,desktop:y}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(rr,{label:To("Hide on Tablet","digiblocks"),checked:s.tablet,onChange:y=>e({visibility:{...s,tablet:y}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(rr,{label:To("Hide on Mobile","digiblocks"),checked:s.mobile,onChange:y=>e({visibility:{...s,mobile:y}}),__nextHasNoMarginBottom:!0})),wp.element.createElement("div",{className:"components-panel__body is-opened"},wp.element.createElement("div",{className:"components-base-control html-anchor-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"html-anchor"},To("HTML anchor","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"html-anchor",value:P||"",onChange:y=>e({anchor:y.target.value}),"aria-describedby":"html-anchor-help",autoCapitalize:"none",autoComplete:"off"})),wp.element.createElement("p",{id:"html-anchor-help",className:"components-base-control__help"},To(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`,"digiblocks")," ",wp.element.createElement("a",{className:"components-external-link",href:"https://wordpress.org/documentation/article/page-jumps/",target:"_blank",rel:"external noreferrer noopener"},wp.element.createElement("span",{className:"components-external-link__contents"},To("Learn more about anchors","digiblocks")),wp.element.createElement("span",{className:"components-external-link__icon","aria-label":"(opens in a new tab)"},"\u2197")))),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"additional-css-classes"},To("Additional CSS class(es)","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"additional-css-classes",value:oe||"",onChange:y=>e({customClasses:y.target.value}),"aria-describedby":"additional-css-classes-help",autoComplete:"off"})),wp.element.createElement("p",{id:"additional-css-classes-help",className:"components-base-control__help"},To("Separate multiple classes with spaces.","digiblocks")))));default:return null}},D=Ef({className:`digiblocks-spacer ${o} ${oe||""}`,id:P||null});return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Wf,null,wp.element.createElement(Yf,{tabs:u,activeTab:H,onSelect:y=>{requestAnimationFrame(()=>{T(y)})}},S())),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:r()}}),wp.element.createElement("div",{...D},wp.element.createElement("div",{className:"digiblocks-spacer-icon-wrapper"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},wp.element.createElement("path",{d:"M512 464c0-8.8-7.2-16-16-16L16 448c-8.8 0-16 7.2-16 16s7.2 16 16 16l480 0c8.8 0 16-7.2 16-16zM144 320c-8.8 0-16-7.2-16-16l0-96c0-8.8 7.2-16 16-16l224 0c8.8 0 16 7.2 16 16l0 96c0 8.8-7.2 16-16 16l-224 0zm224 32c26.5 0 48-21.5 48-48l0-96c0-26.5-21.5-48-48-48l-224 0c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48l224 0zM496 64c8.8 0 16-7.2 16-16s-7.2-16-16-16L16 32C7.2 32 0 39.2 0 48s7.2 16 16 16l480 0z"})))))},gg=Zf;var{useBlockProps:Kf}=window.wp.blockEditor,Xf=({attributes:te})=>{let{id:e,anchor:K,customClasses:o,height:P}=te,s=["digiblocks-spacer",e,o||""].filter(Boolean).join(" "),oe=Kf.save({className:s,id:K||null});return wp.element.createElement("div",{...oe})},pg=Xf;var{__:cr}=window.wp.i18n,{registerBlockType:Af}=window.wp.blocks,{getBlockActiveStatus:ek}=window.wp.digiBlocks;Af("digiblocks/spacer",{apiVersion:2,title:digiBlocksData.blocks.spacer.title,category:"digiblocks",icon:{src:()=>{let{viewbox:te,path:e}=digiBlocksData.blocks.spacer.icon;return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${te}`,className:"digiblocks-editor-icons"},wp.element.createElement("path",{d:e}))}},description:digiBlocksData.blocks.spacer.description,keywords:[cr("spacer","digiblocks"),cr("gap","digiblocks"),cr("spacing","digiblocks")],supports:{inserter:!!ek("spacer"),html:!1,className:!1,customClassName:!1,anchor:!1},attributes:{id:{type:"string",default:""},anchor:{type:"string",default:""},visibility:{type:"object",default:{desktop:!1,tablet:!1,mobile:!1}},customClasses:{type:"string",default:""},height:{type:"object",default:{desktop:80,tablet:60,mobile:40}}},example:{attributes:{height:{desktop:80}}},edit:gg,save:pg});var{__:Ne}=window.wp.i18n,{useBlockProps:ok,RichText:dr,InspectorControls:tk,PanelColorSettings:tn,BlockControls:ik}=window.wp.blockEditor,{SelectControl:ln,RangeControl:lk,ToggleControl:Zi,Button:di,ToolbarGroup:bg,ToolbarButton:Ki,BaseControl:an,Popover:ak,__experimentalToggleGroupControl:ql,__experimentalToggleGroupControlOption:Vo}=window.wp.components,{useState:Gl,useEffect:gr,useRef:nk}=window.wp.element,{useBlockId:sk,getDimensionCSS:pr,animations:Ql,animationPreview:ug}=digi.utils,{tabIcons:br}=digi.icons,{ResponsiveControl:ur,DimensionControl:mr,TypographyControl:hr,BoxShadowControl:rk,CustomTabPanel:ck,TabPanelBody:Xo}=digi.components,dk=({attributes:te,setAttributes:e,clientId:K})=>{let{id:o,anchor:P,visibility:s,customClasses:oe,tableData:l,hasHeader:$,hasFooter:x,tableBorderColor:H,tableBorderWidth:T,tableBorderStyle:u,cellPadding:r,tableBorderCollapse:S,headerBackgroundColor:D,headerTextColor:y,headingTypography:v,bodyBackgroundColor:_,altRowBackgroundColor:L,bodyTextColor:B,textTypography:O,footerBackgroundColor:Y,footerTextColor:A,contentTypography:V,borderRadius:k,boxShadow:b,boxShadowHover:M,margin:le,cellAlignment:Ve,headerAlignment:Ce,footerAlignment:Z,tablePreset:I,responsiveMode:ee,animation:F,firstColHeader:Q,cellControls:X}=te;sk(o,K,e);let[se,ne]=Gl(window.digi.responsiveState.activeDevice),[ve,J]=Gl(!1),[ce,Te]=Gl(()=>{if(window.digi.uiState){let h=window.digi.uiState.getActiveTab(K);if(h)return h}return"options"}),[be,N]=Gl({row:-1,col:-1}),[xe,w]=Gl(!1);gr(()=>window.digi.responsiveState.subscribe(Be=>{ne(Be)}),[]),gr(()=>{(!l||l.length===0)&&e({tableData:[["Header 1","Header 2","Header 3"],["Row 1, Cell 1","Row 1, Cell 2","Row 1, Cell 3"],["Row 2, Cell 1","Row 2, Cell 2","Row 2, Cell 3"]]}),X||e({cellControls:{}})},[l,X,e]);let ke=nk(null);gr(()=>{if(F&&F!=="none"){let h=setTimeout(()=>{ug(o,F,Ql,ke)},100);return()=>clearTimeout(h)}},[F]);let U=()=>{ug(o,F,Ql,ke)},fe=[{label:Ne("Solid","digiblocks"),value:"solid"},{label:Ne("Dotted","digiblocks"),value:"dotted"},{label:Ne("Dashed","digiblocks"),value:"dashed"},{label:Ne("Double","digiblocks"),value:"double"},{label:Ne("None","digiblocks"),value:"none"}],ze=[{label:Ne("Default","digiblocks"),value:"default"},{label:Ne("Striped","digiblocks"),value:"striped"},{label:Ne("Bordered","digiblocks"),value:"bordered"},{label:Ne("Borderless","digiblocks"),value:"borderless"},{label:Ne("Modern","digiblocks"),value:"modern"},{label:Ne("Minimal","digiblocks"),value:"minimal"}],qe=[{label:Ne("None","digiblocks"),value:"none"},...Object.keys(Ql).map(h=>({label:h.replace(/-/g," ").replace(/\b\w/g,Be=>Be.toUpperCase()),value:h}))],je=[{name:"options",title:Ne("Options","digiblocks"),icon:br.optionsIcon},{name:"style",title:Ne("Style","digiblocks"),icon:br.styleIcon},{name:"advanced",title:Ne("Advanced","digiblocks"),icon:br.advancedIcon}],Fe=h=>{if(!l||l.length===0)return;let Be=[...l],a=Be[0].length,ge=Array(a).fill("");Be.splice(h+1,0,ge),e({tableData:Be})},Ie=h=>{if(!l||l.length<=1)return;let Be=[...l];Be.splice(h,1),e({tableData:Be})},j=h=>{if(!l||l.length===0)return;let Be=l.map(a=>{let ge=[...a];return ge.splice(h+1,0,""),ge});e({tableData:Be})},Se=h=>{if(!l||l[0].length<=1)return;let Be=l.map(a=>{let ge=[...a];return ge.splice(h,1),ge});e({tableData:Be})},Qe=(h,Be,a)=>{let ge=[...l];ge[Be][a]=h,e({tableData:ge})},G=(h,Be)=>{N({row:h,col:Be})},pe=(h,Be,a)=>{if(!X)return null;let ge=`${h}-${Be}`;return X[ge]&&X[ge][a]?X[ge][a]:null},R=(h,Be,a,ge)=>{let Ue=`${h}-${Be}`,Ke={...X||{}};Ke[Ue]||(Ke[Ue]={}),Ke[Ue][a]=ge,e({cellControls:Ke})},p=(h,Be,a)=>{if(!X)return;let ge=`${h}-${Be}`,Ue={...X};Ue[ge]&&Ue[ge][a]&&(delete Ue[ge][a],Object.keys(Ue[ge]).length===0&&delete Ue[ge],e({cellControls:Ue}))},re=h=>{let Be={};switch(h){case"striped":Be={tablePreset:h,tableBorderStyle:"solid",tableBorderWidth:1,tableBorderColor:"#dee2e6",tableBorderCollapse:"collapse",headerBackgroundColor:"#f8f9fa",headerTextColor:"#212529",bodyBackgroundColor:"#ffffff",altRowBackgroundColor:"#f2f2f2",bodyTextColor:"#212529"};break;case"bordered":Be={tablePreset:h,tableBorderStyle:"solid",tableBorderWidth:2,tableBorderColor:"#dee2e6",tableBorderCollapse:"collapse",headerBackgroundColor:"#f8f9fa",headerTextColor:"#212529",bodyBackgroundColor:"#ffffff",altRowBackgroundColor:"",bodyTextColor:"#212529"};break;case"borderless":Be={tablePreset:h,tableBorderStyle:"none",tableBorderWidth:0,tableBorderColor:"transparent",tableBorderCollapse:"collapse",headerBackgroundColor:"transparent",headerTextColor:"#212529",bodyBackgroundColor:"transparent",altRowBackgroundColor:"",bodyTextColor:"#212529"};break;case"modern":Be={tablePreset:h,tableBorderStyle:"solid",tableBorderWidth:1,tableBorderColor:"#e0e0e0",tableBorderCollapse:"separate",headerBackgroundColor:"#4a6cf7",headerTextColor:"#ffffff",bodyBackgroundColor:"#ffffff",altRowBackgroundColor:"#f8f9fa",bodyTextColor:"#212529",boxShadow:{enable:!0,color:"rgba(0, 0, 0, 0.1)",horizontal:0,vertical:4,blur:15,spread:0,position:"outset"},borderRadius:{desktop:{top:8,right:8,bottom:8,left:8,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}};break;case"minimal":Be={tablePreset:h,tableBorderStyle:"solid",tableBorderWidth:1,tableBorderColor:"#e0e0e0",tableBorderCollapse:"collapse",headerBackgroundColor:"#ffffff",headerTextColor:"#212529",bodyBackgroundColor:"#ffffff",altRowBackgroundColor:"",bodyTextColor:"#212529",boxShadow:{enable:!1,color:"rgba(0, 0, 0, 0.1)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"},borderRadius:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}};break;default:Be={tablePreset:"default",tableBorderStyle:"solid",tableBorderWidth:1,tableBorderColor:"#e0e0e0",tableBorderCollapse:"collapse",headerBackgroundColor:"#f8f9fa",headerTextColor:"#333333",bodyBackgroundColor:"#ffffff",altRowBackgroundColor:"",bodyTextColor:"#666666",boxShadow:{enable:!1,color:"rgba(0, 0, 0, 0.1)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"},borderRadius:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}}}e(Be)},n=()=>{let h=window.digi.responsiveState.activeDevice;if(!o)return"";let Be=c=>{switch(c){case"left":return"flex-start";case"center":return"center";case"right":return"flex-end";default:return"flex-start"}},a="";u!=="none"?a=`
                border-style: ${u};
                border-width: ${T}px;
                border-color: ${H};
            `:a="border: none;";let ge="box-shadow: none;";b&&b.enable&&(ge=`box-shadow: ${b.position==="inset"?"inset ":""}${b.horizontal}px ${b.vertical}px ${b.blur}px ${b.spread}px ${b.color};`);let Ue="";M&&M.enable&&(Ue=`box-shadow: ${M.position==="inset"?"inset ":""}${M.horizontal}px ${M.vertical}px ${M.blur}px ${M.spread}px ${M.color};`);let Ke=`${pr(k,"border-radius",h)}`,ao=`${pr(r,"padding",h)}`,co=`${pr(le,"margin",h)}`,t="";v&&(v.fontFamily&&(t+=`font-family: ${v.fontFamily};`),v.fontSize&&v.fontSize[h]&&(t+=`font-size: ${v.fontSize[h]}${v.fontSizeUnit||"px"};`),v.fontWeight&&(t+=`font-weight: ${v.fontWeight};`),v.fontStyle&&(t+=`font-style: ${v.fontStyle};`),v.textTransform&&(t+=`text-transform: ${v.textTransform};`),v.textDecoration&&(t+=`text-decoration: ${v.textDecoration};`),v.lineHeight&&v.lineHeight[h]&&(t+=`line-height: ${v.lineHeight[h]}${v.lineHeightUnit||"em"};`),v.letterSpacing&&v.letterSpacing[h]&&(t+=`letter-spacing: ${v.letterSpacing[h]}${v.letterSpacingUnit||"px"};`));let m="";O&&(O.fontFamily&&(m+=`font-family: ${O.fontFamily};`),O.fontSize&&O.fontSize[h]&&(m+=`font-size: ${O.fontSize[h]}${O.fontSizeUnit||"px"};`),O.fontWeight&&(m+=`font-weight: ${O.fontWeight};`),O.fontStyle&&(m+=`font-style: ${O.fontStyle};`),O.textTransform&&(m+=`text-transform: ${O.textTransform};`),O.textDecoration&&(m+=`text-decoration: ${O.textDecoration};`),O.lineHeight&&O.lineHeight[h]&&(m+=`line-height: ${O.lineHeight[h]}${O.lineHeightUnit||"em"};`),O.letterSpacing&&O.letterSpacing[h]&&(m+=`letter-spacing: ${O.letterSpacing[h]}${O.letterSpacingUnit||"px"};`));let Me="";return V&&(V.fontFamily&&(Me+=`font-family: ${V.fontFamily};`),V.fontSize&&V.fontSize[h]&&(Me+=`font-size: ${V.fontSize[h]}${V.fontSizeUnit||"px"};`),V.fontWeight&&(Me+=`font-weight: ${V.fontWeight};`),V.fontStyle&&(Me+=`font-style: ${V.fontStyle};`),V.textTransform&&(Me+=`text-transform: ${V.textTransform};`),V.textDecoration&&(Me+=`text-decoration: ${V.textDecoration};`),V.lineHeight&&V.lineHeight[h]&&(Me+=`line-height: ${V.lineHeight[h]}${V.lineHeightUnit||"em"};`),V.letterSpacing&&V.letterSpacing[h]&&(Me+=`letter-spacing: ${V.letterSpacing[h]}${V.letterSpacingUnit||"px"};`)),`
            /* Table Block - ${o} */
            .${o} {
                ${co}
                ${ge}
                ${Ke}
                width: 100%;
                transition: all 0.3s ease;
            }

			/* Hover effects */
            ${M&&M.enable?`
                .${o}:hover {
                    ${Ue}
                }
            `:""}
            
            /* Set up main table styles */
            .${o} .digiblocks-table {
                width: 100%;
                border-collapse: ${S};
                border-spacing: 0;
                color: ${B};
                ${m}
                ${a}
                ${Ke}
            }
            
            /* Table header styles */
            .${o} .digiblocks-table thead th {
                background-color: ${D};
                color: ${y};
                ${t}
                ${ao}
                vertical-align: middle;
                border: ${T}px ${u} ${H};
            }

            .${o} .digiblocks-table thead th .digiblocks-cell-content {
                justify-content: ${Be(Ce)};
            }
            
            /* Table body styles */
            .${o} .digiblocks-table tbody td {
                background-color: ${_};
                ${ao}
                vertical-align: middle;
                border: ${T}px ${u} ${H};
            }

            .${o} .digiblocks-table tbody td .digiblocks-cell-content {
                justify-content: ${Be(Ve)};
            }
            
            /* First column styles if it's a header */
            ${Q?`
            .${o} .digiblocks-table tbody td:first-child {
                background-color: ${D};
                color: ${y};
                ${t}
                font-weight: bold;
            }

            .${o} .digiblocks-table tbody td:first-child .digiblocks-cell-content {
                justify-content: ${Be(Ce)};
            }
            `:""}
            
            /* Alternating row styles if enabled */
            ${L?`
            .${o} .digiblocks-table tbody tr:nth-child(even) td {
                background-color: ${L};
            }
            ${Q?`
            .${o} .digiblocks-table tbody tr:nth-child(even) td:first-child {
                background-color: ${D};
            }
            `:""}
            `:""}
            
            /* Footer styles if enabled */
            ${x?`
            .${o} .digiblocks-table tfoot td {
                background-color: ${Y};
                color: ${A};
                ${Me}
                ${ao}
                vertical-align: middle;
                border: ${T}px ${u} ${H};
            }

            .${o} .digiblocks-table tfoot td .digiblocks-cell-content {
                justify-content: ${Be(Z)};
            }
            `:""}
            
            /* Responsive styles */
            @media (max-width: 767px) {
                /* Stack mode */
                ${ee==="stack"?`
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
                    border: ${T}px ${u} ${H};
					${ge}
					transition: all 0.3s ease;
                }

				/* Hover effects */
				${M&&M.enable?`
				.${o} .digiblocks-table tbody tr:hover {
						${Ue}
					}
				`:""}
                
                .${o} .digiblocks-table tbody td {
                    display: flex;
                    justify-content: space-between;
					gap: 1rem;
                    text-align: right;
                    border-bottom: 1px solid ${H};
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
                
                ${Q?`
                .${o} .digiblocks-table tbody td:first-child {
                    text-align: center;
                    background-color: ${D};
                    color: ${y};
                    justify-content: center;
                }
                
                .${o} .digiblocks-table tbody td:first-child::before {
                    content: '';
                    display: none;
                }
                `:""}
                `:""}
                
                /* Scroll mode */
                ${ee==="scroll"?`
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
            ${F&&F!=="none"&&Ql[F]?Ql[F].keyframes:""}

			/* Visibility Controls */
			${s.desktop?`
				@media (min-width: 992px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${s.tablet?`
				@media (min-width: 768px) and (max-width: 991px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${s.mobile?`
				@media (max-width: 767px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}
        `},g=()=>be.row===-1||be.col===-1?null:wp.element.createElement("div",{className:"digiblocks-cell-controls-toolbar"},wp.element.createElement("div",{className:"digiblocks-cell-controls-label"},Ne("Selected Cell:","digiblocks")," Row ",be.row+1,", Column ",be.col+1),wp.element.createElement("div",{className:"digiblocks-cell-controls-buttons"},wp.element.createElement("div",{className:"components-button-group"},wp.element.createElement(di,{className:"digiblocks-cell-control-check-button",icon:()=>wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"20",height:"20",fill:"currentColor"},wp.element.createElement("path",{d:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"})),label:Ne("Add Check","digiblocks"),onClick:()=>{p(be.row,be.col,"stars"),R(be.row,be.col,"icon","check")}}),wp.element.createElement(di,{className:"digiblocks-cell-control-cross-button",icon:()=>wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"20",height:"20",fill:"currentColor"},wp.element.createElement("path",{d:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"})),label:Ne("Add Cross","digiblocks"),onClick:()=>{p(be.row,be.col,"stars"),R(be.row,be.col,"icon","cross")}}),wp.element.createElement(di,{className:"digiblocks-cell-control-rating-button",icon:()=>wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:"16",height:"16",fill:"currentColor"},wp.element.createElement("path",{d:"M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327l4.898.696c.441.062.612.636.282.95l-3.522 3.356l.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"})),label:Ne("Add Rating","digiblocks"),onClick:()=>{p(be.row,be.col,"icon"),w(!0)}}),pe(be.row,be.col,"icon")||pe(be.row,be.col,"stars")?wp.element.createElement(di,{className:"digiblocks-cell-control-remove-button",icon:()=>wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",width:"16",height:"16",fill:"currentColor"},wp.element.createElement("path",{d:"M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"})),label:Ne("Remove Icons","digiblocks"),onClick:()=>{p(be.row,be.col,"icon"),p(be.row,be.col,"stars")}}):null),xe&&wp.element.createElement(ak,{className:"digiblocks-cell-control-popover",onClose:()=>w(!1),position:"bottom center"},wp.element.createElement("div",{className:"digiblocks-rating-selector"},wp.element.createElement("h3",null,Ne("Select Rating","digiblocks")),wp.element.createElement(ql,{isBlock:!0,onChange:h=>{R(be.row,be.col,"stars",h.toString()),w(!1)},__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},[1,2,3,4,5].map(h=>wp.element.createElement(Vo,{key:`star-${h}`,value:h,label:h.toString()}))))))),q=(h,Be)=>{if(!X)return null;let a=`${h}-${Be}`;if(!X[a])return null;if(X[a].icon)switch(X[a].icon){case"check":return wp.element.createElement("span",{className:"digiblocks-cell-icon digiblocks-cell-check"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"20",height:"20",fill:"currentColor"},wp.element.createElement("path",{d:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"})));case"cross":return wp.element.createElement("span",{className:"digiblocks-cell-icon digiblocks-cell-cross"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"20",height:"20",fill:"currentColor"},wp.element.createElement("path",{d:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"})));default:return null}if(X[a].stars){let ge=parseInt(X[a].stars)||0,Ue=[];for(let Ke=0;Ke<5;Ke++)Ke<ge?Ue.push(wp.element.createElement("span",{key:`star-${Ke}`,className:"digiblocks-cell-icon"},wp.element.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor"},wp.element.createElement("path",{d:"M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327l4.898.696c.441.062.612.636.282.95l-3.522 3.356l.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"})))):Ue.push(wp.element.createElement("span",{key:`star-empty-${Ke}`,className:"digiblocks-cell-icon"},wp.element.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",opacity:"0.5"},wp.element.createElement("path",{d:"M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256l4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73l3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L7.538.792c-.197-.39-.73-.39-.927 0L4.427 5.124l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73z"}))));return wp.element.createElement("div",{className:"digiblocks-cell-stars"},Ue)}return null},d=()=>{switch(ce){case"options":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Xo,{tab:"options",name:"general-settings",title:Ne("Table Structure","digiblocks"),initialOpen:!0},wp.element.createElement(Zi,{label:Ne("Enable Header Row","digiblocks"),checked:$,onChange:()=>e({hasHeader:!$}),help:Ne("Display the first row as table header.","digiblocks"),__nextHasNoMarginBottom:!0}),wp.element.createElement(Zi,{label:Ne("Enable Footer Row","digiblocks"),checked:x,onChange:()=>e({hasFooter:!x}),help:Ne("Display the last row as table footer.","digiblocks"),__nextHasNoMarginBottom:!0}),wp.element.createElement(Zi,{label:Ne("First Column as Header","digiblocks"),checked:Q,onChange:()=>e({firstColHeader:!Q}),help:Ne("Use the first column as a header column.","digiblocks"),__nextHasNoMarginBottom:!0})),wp.element.createElement(Xo,{tab:"options",name:"preset-settings",title:Ne("Table Presets","digiblocks"),initialOpen:!1},wp.element.createElement(ln,{label:Ne("Table Style Preset","digiblocks"),value:I,options:ze,onChange:h=>re(h),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(Xo,{tab:"options",name:"responsive-settings",title:Ne("Responsive Settings","digiblocks"),initialOpen:!1},wp.element.createElement(an,{label:Ne("Mobile Behavior","digiblocks"),__nextHasNoMarginBottom:!0},wp.element.createElement(ql,{value:ee,onChange:h=>e({responsiveMode:h}),help:Ne("How the table should behave on small screens.","digiblocks"),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(Vo,{value:"stack",label:Ne("Stack","digiblocks"),"aria-label":Ne("Stack Behavior","digiblocks")}),wp.element.createElement(Vo,{value:"scroll",label:Ne("Scroll","digiblocks"),"aria-label":Ne("Scroll Behavior","digiblocks")})))));case"style":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Xo,{tab:"style",name:"border-settings",title:Ne("Borders & Shadow","digiblocks"),initialOpen:!0},wp.element.createElement(ln,{label:Ne("Border Style","digiblocks"),value:u,options:fe,onChange:h=>e({tableBorderStyle:h}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),u!=="none"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(lk,{label:Ne("Border Width","digiblocks"),value:T,onChange:h=>e({tableBorderWidth:h}),min:1,max:10,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(tn,{title:Ne("Border Color","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:H,onChange:h=>e({tableBorderColor:h}),label:Ne("Border Color","digiblocks")}]})),wp.element.createElement(ln,{label:Ne("Border Collapse","digiblocks"),value:S,options:[{label:Ne("Collapse","digiblocks"),value:"collapse"},{label:Ne("Separate","digiblocks"),value:"separate"}],onChange:h=>e({tableBorderCollapse:h}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(ur,{label:Ne("Border Radius","digiblocks")},wp.element.createElement(mr,{values:k[se],onChange:h=>e({borderRadius:{...k,[se]:h}}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]})),wp.element.createElement(rk,{label:Ne("Box Shadow","digiblocks"),normalValue:b,hoverValue:M,onNormalChange:h=>e({boxShadow:h}),onHoverChange:h=>e({boxShadowHover:h})})),wp.element.createElement(Xo,{tab:"style",name:"header-settings",title:Ne("Header Styles","digiblocks"),initialOpen:!1},wp.element.createElement(tn,{title:Ne("Header Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:D,onChange:h=>e({headerBackgroundColor:h}),label:Ne("Background Color","digiblocks")},{value:y,onChange:h=>e({headerTextColor:h}),label:Ne("Text Color","digiblocks")}]}),wp.element.createElement(hr,{label:Ne("Header Typography","digiblocks"),value:v,onChange:h=>e({headingTypography:h}),defaults:{fontSize:{desktop:18,tablet:16,mobile:15},fontSizeUnit:"px",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em"}}),wp.element.createElement(an,{label:Ne("Text Alignment","digiblocks"),__nextHasNoMarginBottom:!0},wp.element.createElement(ql,{value:Ce,onChange:h=>e({headerAlignment:h}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(Vo,{value:"left",label:Ne("Left","digiblocks"),"aria-label":Ne("Left","digiblocks")}),wp.element.createElement(Vo,{value:"center",label:Ne("Center","digiblocks"),"aria-label":Ne("Center","digiblocks")}),wp.element.createElement(Vo,{value:"right",label:Ne("Right","digiblocks"),"aria-label":Ne("Right","digiblocks")})))),wp.element.createElement(Xo,{tab:"style",name:"body-settings",title:Ne("Body Styles","digiblocks"),initialOpen:!1},wp.element.createElement(tn,{title:Ne("Body Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:_,onChange:h=>e({bodyBackgroundColor:h}),label:Ne("Background Color","digiblocks")},{value:L,onChange:h=>e({altRowBackgroundColor:h}),label:Ne("Alternate Row Color","digiblocks")},{value:B,onChange:h=>e({bodyTextColor:h}),label:Ne("Text Color","digiblocks")}]}),wp.element.createElement(hr,{label:Ne("Body Typography","digiblocks"),value:O,onChange:h=>e({textTypography:h}),defaults:{fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em"}}),wp.element.createElement(an,{label:Ne("Text Alignment","digiblocks"),__nextHasNoMarginBottom:!0},wp.element.createElement(ql,{value:Ve,onChange:h=>e({cellAlignment:h}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(Vo,{value:"left",label:Ne("Left","digiblocks"),"aria-label":Ne("Left","digiblocks")}),wp.element.createElement(Vo,{value:"center",label:Ne("Center","digiblocks"),"aria-label":Ne("Center","digiblocks")}),wp.element.createElement(Vo,{value:"right",label:Ne("Right","digiblocks"),"aria-label":Ne("Right","digiblocks")})))),x&&wp.element.createElement(Xo,{tab:"style",name:"footer-settings",title:Ne("Footer Styles","digiblocks"),initialOpen:!1},wp.element.createElement(tn,{title:Ne("Footer Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:Y,onChange:h=>e({footerBackgroundColor:h}),label:Ne("Background Color","digiblocks")},{value:A,onChange:h=>e({footerTextColor:h}),label:Ne("Text Color","digiblocks")}]}),wp.element.createElement(hr,{label:Ne("Footer Typography","digiblocks"),value:V,onChange:h=>e({contentTypography:h}),defaults:{fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em"}}),wp.element.createElement(an,{label:Ne("Text Alignment","digiblocks"),__nextHasNoMarginBottom:!0},wp.element.createElement(ql,{value:Z,onChange:h=>e({footerAlignment:h}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(Vo,{value:"left",label:Ne("Left","digiblocks"),"aria-label":Ne("Left","digiblocks")}),wp.element.createElement(Vo,{value:"center",label:Ne("Center","digiblocks"),"aria-label":Ne("Center","digiblocks")}),wp.element.createElement(Vo,{value:"right",label:Ne("Right","digiblocks"),"aria-label":Ne("Right","digiblocks")})))),wp.element.createElement(Xo,{tab:"style",name:"spacing",title:Ne("Spacing","digiblocks"),initialOpen:!1},wp.element.createElement(ur,{label:Ne("Cell Padding","digiblocks")},wp.element.createElement(mr,{values:r&&r[se]?r[se]:{top:15,right:15,bottom:15,left:15,unit:"px"},onChange:h=>e({cellPadding:{...r,[se]:h}})})),wp.element.createElement(ur,{label:Ne("Margin","digiblocks")},wp.element.createElement(mr,{values:le&&le[se]?le[se]:{top:0,right:0,bottom:30,left:0,unit:"px"},onChange:h=>e({margin:{...le,[se]:h}})}))));case"advanced":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Xo,{tab:"advanced",name:"animation",title:Ne("Animation","digiblocks"),initialOpen:!0},wp.element.createElement(ln,{label:Ne("Animation Effect","digiblocks"),value:F,options:qe,onChange:h=>e({animation:h}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),F&&F!=="none"&&wp.element.createElement("div",{style:{marginTop:"10px"}},wp.element.createElement(di,{variant:"secondary",isSecondary:!0,onClick:U,style:{width:"100%"}},Ne("Preview Animation","digiblocks")))),wp.element.createElement(Xo,{tab:"advanced",name:"visibility",title:Ne("Visibility","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control__help",style:{padding:"12px",backgroundColor:"#f0f6fc",border:"1px solid #c3ddfd",borderRadius:"4px",marginBottom:"16px"}},wp.element.createElement("strong",null,Ne("Editor Note:","digiblocks")),wp.element.createElement("br",null),Ne("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.","digiblocks")),wp.element.createElement(Zi,{label:Ne("Hide on Desktop","digiblocks"),checked:s.desktop,onChange:h=>e({visibility:{...s,desktop:h}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(Zi,{label:Ne("Hide on Tablet","digiblocks"),checked:s.tablet,onChange:h=>e({visibility:{...s,tablet:h}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(Zi,{label:Ne("Hide on Mobile","digiblocks"),checked:s.mobile,onChange:h=>e({visibility:{...s,mobile:h}}),__nextHasNoMarginBottom:!0})),wp.element.createElement(Xo,{tab:"advanced",name:"additional",title:Ne("Additional","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control html-anchor-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"html-anchor"},Ne("HTML anchor","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"html-anchor",value:P||"",onChange:h=>e({anchor:h.target.value}),"aria-describedby":"html-anchor-help",autoCapitalize:"none",autoComplete:"off"})),wp.element.createElement("p",{id:"html-anchor-help",className:"components-base-control__help"},Ne(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`,"digiblocks")," ",wp.element.createElement("a",{className:"components-external-link",href:"https://wordpress.org/documentation/article/page-jumps/",target:"_blank",rel:"external noreferrer noopener"},wp.element.createElement("span",{className:"components-external-link__contents"},Ne("Learn more about anchors","digiblocks")),wp.element.createElement("span",{className:"components-external-link__icon","aria-label":"(opens in a new tab)"},"\u2197")))),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"additional-css-classes"},Ne("Additional CSS class(es)","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"additional-css-classes",value:oe||"",onChange:h=>e({customClasses:h.target.value}),"aria-describedby":"additional-css-classes-help",autoComplete:"off"})),wp.element.createElement("p",{id:"additional-css-classes-help",className:"components-base-control__help"},Ne("Separate multiple classes with spaces.","digiblocks")))));default:return null}},ie=()=>wp.element.createElement("table",{className:"digiblocks-table"},$&&l.length>0&&wp.element.createElement("thead",null,wp.element.createElement("tr",null,l[0].map((h,Be)=>wp.element.createElement("th",{key:`header-${Be}`,onClick:()=>G(0,Be),className:be.row===0&&be.col===Be?"digiblocks-selected-cell":""},wp.element.createElement("div",{className:"digiblocks-cell-content"},q(0,Be),wp.element.createElement(dr,{tagName:"span",value:h,onChange:a=>Qe(a,0,Be),placeholder:Ne("Header text","digiblocks")})))))),wp.element.createElement("tbody",null,l.slice($?1:0,x?l.length-1:l.length).map((h,Be)=>{let a=$?Be+1:Be;return wp.element.createElement("tr",{key:`row-${a}`},h.map((ge,Ue)=>wp.element.createElement("td",{key:`cell-${a}-${Ue}`,"data-label":$&&l[0]&&l[0][Ue]?l[0][Ue]:"",onClick:()=>G(a,Ue),className:be.row===a&&be.col===Ue?"digiblocks-selected-cell":""},wp.element.createElement("div",{className:"digiblocks-cell-content"},q(a,Ue),wp.element.createElement(dr,{tagName:"span",value:ge,onChange:Ke=>Qe(Ke,a,Ue),placeholder:Ne("Cell text","digiblocks")})))))})),x&&l.length>1&&wp.element.createElement("tfoot",null,wp.element.createElement("tr",null,l[l.length-1].map((h,Be)=>wp.element.createElement("td",{key:`footer-${Be}`,onClick:()=>G(l.length-1,Be),className:be.row===l.length-1&&be.col===Be?"digiblocks-selected-cell":""},wp.element.createElement("div",{className:"digiblocks-cell-content"},q(l.length-1,Be),wp.element.createElement(dr,{tagName:"span",value:h,onChange:a=>Qe(a,l.length-1,Be),placeholder:Ne("Footer text","digiblocks")}))))))),C=ok({className:`digiblocks-table-block ${o} ${oe||""}`,id:P||null});return!l||!Array.isArray(l)||l.length===0?wp.element.createElement("div",{...C},wp.element.createElement("p",null,Ne("Initializing table...","digiblocks"))):wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(ik,null,wp.element.createElement(bg,null,wp.element.createElement(Ki,{icon:"table-row-before",label:Ne("Add Row Before","digiblocks"),onClick:()=>{be.row>=0?Fe(be.row-1):Fe(0)}}),wp.element.createElement(Ki,{icon:"table-row-after",label:Ne("Add Row After","digiblocks"),onClick:()=>{be.row>=0?Fe(be.row):Fe(l.length-1)}}),wp.element.createElement(Ki,{icon:"table-row-delete",label:Ne("Delete Row","digiblocks"),onClick:()=>{be.row>=0&&(Ie(be.row),N({row:-1,col:-1}))},disabled:l.length<=1||be.row<0})),wp.element.createElement(bg,null,wp.element.createElement(Ki,{icon:"table-col-before",label:Ne("Add Column Before","digiblocks"),onClick:()=>{be.col>=0?j(be.col-1):j(0)}}),wp.element.createElement(Ki,{icon:"table-col-after",label:Ne("Add Column After","digiblocks"),onClick:()=>{be.col>=0?j(be.col):j(l[0].length-1)}}),wp.element.createElement(Ki,{icon:"table-col-delete",label:Ne("Delete Column","digiblocks"),onClick:()=>{be.col>=0&&(Se(be.col),N({row:-1,col:-1}))},disabled:l[0].length<=1||be.col<0}))),wp.element.createElement(tk,null,wp.element.createElement(ck,{tabs:je,activeTab:ce,onSelect:Te},d())),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:n()}}),wp.element.createElement("div",{...C},wp.element.createElement("div",{className:"digiblocks-table-instructions"},wp.element.createElement("p",null,Ne("Click on any cell to select it and add icons, checks, crosses, or star ratings.","digiblocks"))),be.row!==-1&&be.col!==-1&&g(),wp.element.createElement("div",{className:"digiblocks-table-container"},ie()),wp.element.createElement("div",{className:"digiblocks-table-controls"},wp.element.createElement("div",{className:"digiblocks-row-controls"},wp.element.createElement(di,{isPrimary:!0,icon:"plus",onClick:()=>Fe(l.length-1)},Ne("Add Row","digiblocks"))),wp.element.createElement("div",{className:"digiblocks-col-controls"},wp.element.createElement(di,{isPrimary:!0,icon:"plus",onClick:()=>j(l[0].length-1)},Ne("Add Column","digiblocks"))))))},mg=dk;var{__:Cv}=window.wp.i18n,{useBlockProps:wv,RichText:fr}=window.wp.blockEditor,gk=({attributes:te})=>{let{id:e,anchor:K,customClasses:o,tableData:P,hasHeader:s,hasFooter:oe,responsiveMode:l,animation:$,cellControls:x}=te,H=["digiblocks-table-block",e,`responsive-${l}`,$!=="none"?`animate-${$}`:"",o||""].filter(Boolean).join(" "),T=(S,D,y)=>{let v=`${S}-${D}`;return x[v]&&x[v][y]?x[v][y]:null},u=(S,D)=>{let y=`${S}-${D}`;if(!x[y])return null;if(x[y].icon)switch(x[y].icon){case"check":return wp.element.createElement("span",{className:"digiblocks-cell-icon digiblocks-cell-check"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"20",height:"20",fill:"currentColor"},wp.element.createElement("path",{d:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"})));case"cross":return wp.element.createElement("span",{className:"digiblocks-cell-icon digiblocks-cell-cross"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"20",height:"20",fill:"currentColor"},wp.element.createElement("path",{d:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"})));default:return null}if(x[y].stars){let v=parseInt(x[y].stars),_=[];for(let L=0;L<5;L++)L<v?_.push(wp.element.createElement("span",{key:`star-${L}`,className:"digiblocks-cell-icon"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor"},wp.element.createElement("path",{d:"M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327l4.898.696c.441.062.612.636.282.95l-3.522 3.356l.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"})))):_.push(wp.element.createElement("span",{key:`star-empty-${L}`,className:"digiblocks-cell-icon"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",opacity:"0.5"},wp.element.createElement("path",{d:"M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256l4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73l3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L7.538.792c-.197-.39-.73-.39-.927 0L4.427 5.124l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73z"}))));return wp.element.createElement("div",{className:"digiblocks-cell-stars"},_)}return null};return wp.element.createElement("div",{...{className:H,id:K||null}},wp.element.createElement("div",{className:"digiblocks-table-container"},wp.element.createElement("table",{className:"digiblocks-table"},s&&wp.element.createElement("thead",null,wp.element.createElement("tr",null,P[0].map((S,D)=>wp.element.createElement("th",{key:`header-${D}`},wp.element.createElement("div",{className:"digiblocks-cell-content"},u(0,D),wp.element.createElement(fr.Content,{tagName:"span",value:S})))))),wp.element.createElement("tbody",null,P.slice(s?1:0,oe?P.length-1:P.length).map((S,D)=>{let y=s?D+1:D;return wp.element.createElement("tr",{key:`row-${y}`},S.map((v,_)=>wp.element.createElement("td",{key:`cell-${y}-${_}`,"data-label":s?P[0][_]:""},wp.element.createElement("div",{className:"digiblocks-cell-content"},u(y,_),wp.element.createElement(fr.Content,{tagName:"span",value:v})))))})),oe&&wp.element.createElement("tfoot",null,wp.element.createElement("tr",null,P[P.length-1].map((S,D)=>wp.element.createElement("td",{key:`footer-${D}`},wp.element.createElement("div",{className:"digiblocks-cell-content"},u(P.length-1,D),wp.element.createElement(fr.Content,{tagName:"span",value:S})))))))))},hg=gk;var{__:nn}=window.wp.i18n,{registerBlockType:pk}=window.wp.blocks,{getBlockActiveStatus:bk}=window.wp.digiBlocks;pk("digiblocks/table",{apiVersion:2,title:digiBlocksData.blocks.table.title,category:"digiblocks",icon:{src:()=>{let{viewbox:te,path:e}=digiBlocksData.blocks.table.icon;return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${te}`,className:"digiblocks-editor-icons"},wp.element.createElement("path",{d:e}))}},description:digiBlocksData.blocks.table.description,keywords:[nn("table","digiblocks"),nn("comparison","digiblocks"),nn("grid","digiblocks"),nn("cells","digiblocks")],supports:{inserter:!!bk("table"),html:!1,className:!1,customClassName:!1,anchor:!1},attributes:{id:{type:"string",default:""},anchor:{type:"string",default:""},visibility:{type:"object",default:{desktop:!1,tablet:!1,mobile:!1}},customClasses:{type:"string",default:""},tableData:{type:"array",default:[["Header 1","Header 2","Header 3"],["Cell 1,1","Cell 1,2","Cell 1,3"],["Cell 2,1","Cell 2,2","Cell 2,3"]]},hasHeader:{type:"boolean",default:!0},hasFooter:{type:"boolean",default:!1},tableBorderColor:{type:"string",default:"#e0e0e0"},tableBorderWidth:{type:"number",default:1},tableBorderStyle:{type:"string",default:"solid"},cellPadding:{type:"object",default:{desktop:{top:15,right:15,bottom:15,left:15,unit:"px"},tablet:{top:12,right:12,bottom:12,left:12,unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},tableBorderCollapse:{type:"string",default:"collapse"},headerBackgroundColor:{type:"string",default:"#f8f9fa"},headerTextColor:{type:"string",default:"#333333"},headingTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:18,tablet:16,mobile:15},fontSizeUnit:"px",fontWeight:"600",fontStyle:"normal",textTransform:"none",textDecoration:"none",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}},bodyBackgroundColor:{type:"string",default:"#ffffff"},altRowBackgroundColor:{type:"string",default:""},bodyTextColor:{type:"string",default:"#666666"},textTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",fontWeight:"",fontStyle:"normal",textTransform:"",textDecoration:"",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}},footerBackgroundColor:{type:"string",default:"#f8f9fa"},footerTextColor:{type:"string",default:"#333333"},contentTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",fontWeight:"600",fontStyle:"normal",textTransform:"none",textDecoration:"none",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}},borderRadius:{type:"object",default:{desktop:{top:8,right:8,bottom:8,left:8,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},boxShadow:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.1)",horizontal:0,vertical:2,blur:10,spread:0,position:"outset"}},boxShadowHover:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:10,blur:25,spread:0,position:"outset"}},margin:{type:"object",default:{desktop:{top:0,right:0,bottom:30,left:0,unit:"px"},tablet:{top:0,right:0,bottom:25,left:0,unit:"px"},mobile:{top:0,right:0,bottom:20,left:0,unit:"px"}}},cellAlignment:{type:"string",default:"left"},headerAlignment:{type:"string",default:"left"},footerAlignment:{type:"string",default:"left"},tablePreset:{type:"string",default:"default"},responsiveMode:{type:"string",default:"stack"},animation:{type:"string",default:"none"},firstColHeader:{type:"boolean",default:!1},cellControls:{type:"object",default:{}}},example:{attributes:{tableData:[["Feature","Basic","Premium"],["Storage","10GB","1TB"],["Users","1","Unlimited"],["Support","Email","24/7 Phone"],["Price","$9.99","$29.99"]],hasHeader:!0,headerBackgroundColor:"#f8f9fa",bodyBackgroundColor:"#ffffff",altRowBackgroundColor:"#f9f9f9"}},edit:mg,save:hg});var{__:we}=window.wp.i18n,{useBlockProps:uk,RichText:kr,InspectorControls:mk,PanelColorSettings:sn,MediaUpload:hk,MediaUploadCheck:fk,URLPopover:Bv}=window.wp.blockEditor,{SelectControl:Jl,RangeControl:Yl,Button:$t,ToggleControl:gi,Tooltip:rn,TextControl:kk,Popover:fg,__experimentalToggleGroupControl:kg,__experimentalToggleGroupControlOption:Zl,BaseControl:vg,Icon:Tv}=window.wp.components,{useState:Kl,useEffect:vr,useRef:vk,Fragment:Nv}=window.wp.element,{useBlockId:xk,getDimensionCSS:It,animations:xr,animationPreview:xg}=digi.utils,{tabIcons:yr}=digi.icons,{ResponsiveControl:zo,DimensionControl:Lt,TypographyControl:Cr,BoxShadowControl:yk,CustomTabPanel:Ck,TabPanelBody:dt}=digi.components,yg={facebook:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"})),twitter:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"})),linkedin:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"})),instagram:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"})),pinterest:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z"})),youtube:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"})),dribbble:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M86.6 64l85.2 85.2C194.5 121.7 208 86.4 208 48c0-14.7-2-28.9-5.7-42.4C158.6 15 119 35.5 86.6 64zM64 86.6C35.5 119 15 158.6 5.6 202.3C19.1 206 33.3 208 48 208c38.4 0 73.7-13.5 101.3-36.1L64 86.6zM256 0c-7.3 0-14.6 .3-21.8 .9C238 16 240 31.8 240 48c0 47.3-17.1 90.5-45.4 124L256 233.4 425.4 64C380.2 24.2 320.9 0 256 0zM48 240c-16.2 0-32-2-47.1-5.8C.3 241.4 0 248.7 0 256c0 64.9 24.2 124.2 64 169.4L233.4 256 172 194.6C138.5 222.9 95.3 240 48 240zm463.1 37.8c.6-7.2 .9-14.5 .9-21.8c0-64.9-24.2-124.2-64-169.4L278.6 256 340 317.4c33.4-28.3 76.7-45.4 124-45.4c16.2 0 32 2 47.1 5.8zm-4.7 31.9C492.9 306 478.7 304 464 304c-38.4 0-73.7 13.5-101.3 36.1L448 425.4c28.5-32.3 49.1-71.9 58.4-115.7zM340.1 362.7C317.5 390.3 304 425.6 304 464c0 14.7 2 28.9 5.7 42.4C353.4 497 393 476.5 425.4 448l-85.2-85.2zM317.4 340L256 278.6 86.6 448c45.1 39.8 104.4 64 169.4 64c7.3 0 14.6-.3 21.8-.9C274 496 272 480.2 272 464c0-47.3 17.1-90.5 45.4-124z"})),github:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 496 512",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"})),behance:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M232 237.2c31.8-15.2 48.4-38.2 48.4-74 0-70.6-52.6-87.8-113.3-87.8H0v354.4h171.8c64.4 0 124.9-30.9 124.9-102.9 0-44.5-21.1-77.4-64.7-89.7zM77.9 135.9H151c28.1 0 53.4 7.9 53.4 40.5 0 30.1-19.7 42.2-47.5 42.2h-79v-82.7zm83.3 233.7H77.9V272h84.9c34.3 0 56 14.3 56 50.6 0 35.8-25.9 47-57.6 47zm358.5-240.7H376V94h143.7v34.9zM576 305.2c0-75.9-44.4-139.2-124.9-139.2-78.2 0-131.3 58.8-131.3 135.8 0 79.9 50.3 134.7 131.3 134.7 61.3 0 101-27.6 120.1-86.3H509c-6.7 21.9-34.3 33.5-55.7 33.5-41.3 0-63-24.2-63-65.3h185.1c.3-4.2 .6-8.7 .6-13.2zM390.4 274c2.3-33.7 24.7-54.8 58.5-54.8 35.4 0 53.2 20.8 56.2 54.8H390.4z"})),vimeo:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M447.8 153.6c-2 43.6-32.4 103.3-91.4 179.1-60.9 79.2-112.4 118.8-154.6 118.8-26.1 0-48.2-24.1-66.3-72.3C100.3 250 85.3 174.3 56.2 174.3c-3.4 0-15.1 7.1-35.2 21.1L0 168.2c51.6-45.3 100.9-95.7 131.8-98.5 34.9-3.4 56.3 20.5 64.4 71.5 28.7 181.5 41.4 208.9 93.6 126.7 18.7-29.6 28.8-52.1 30.2-67.6 4.8-45.9-35.8-42.8-63.3-31 22-72.1 64.1-107.1 126.2-105.1 45.8 1.2 67.5 31.1 64.9 89.4z"})),tiktok:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"})),email:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"})),website:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"}))},wk=wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},wp.element.createElement("path",{d:"M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"})),Sk=({attributes:te,setAttributes:e,clientId:K})=>{let{id:o,anchor:P,visibility:s,customClasses:oe,members:l,columns:$,gutter:x,layout:H,alignment:T,imageStyle:u,imageSize:r,imageBorderRadius:S,imageBorderWidth:D,imageBorderColor:y,imageBorderStyle:v,typography:_,textTypography:L,contentTypography:B,nameColor:O,positionColor:Y,bioColor:A,iconColor:V,iconHoverColor:k,iconSize:b,iconSpacing:M,iconBackgroundColor:le,iconBackgroundHoverColor:Ve,iconBorderRadius:Ce,iconPadding:Z,boxBackgroundColor:I,boxBorderColor:ee,boxBorderRadius:F,boxBorderWidth:Q,boxBorderStyle:X,boxPadding:se,boxMargin:ne,boxShadow:ve,boxShadowHover:J,animation:ce,showName:Te,showPosition:be,showBio:N,showSocial:xe}=te;xk(o,K,e);let[w,ke]=Kl(()=>{if(window.digi.uiState){let f=window.digi.uiState.getActiveTab(K);if(f)return f}return"options"}),[U,fe]=Kl(null),[ze,qe]=Kl(null),[je,Fe]=Kl(window.digi.responsiveState.activeDevice),[Ie,j]=Kl(!1);vr(()=>window.digi.responsiveState.subscribe(De=>{Fe(De)}),[]),vr(()=>{if(l&&l.length>0){let f=l.map((De,io)=>{if(!De.id)return{...De,id:`team-member-${K.substr(0,8)}-${io}`};if(De.socials&&De.socials.length>0){let so=De.socials.map((i,E)=>i.id?i:{...i,id:`social-${io}-${E}`});return{...De,socials:so}}return De});JSON.stringify(f)!==JSON.stringify(l)&&e({members:f})}},[K,l,e]);let Se=vk(null);vr(()=>{if(ce&&ce!=="none"){let f=setTimeout(()=>{xg(o,ce,xr,Se)},100);return()=>clearTimeout(f)}},[ce]);let Qe=()=>{xg(o,ce,xr,Se)},G=[{label:we("Default","digiblocks"),value:"default"},{label:we("Circle","digiblocks"),value:"circle"},{label:we("Square","digiblocks"),value:"square"},{label:we("Rounded","digiblocks"),value:"rounded"}],pe=[{label:we("None","digiblocks"),value:"none"},{label:we("Solid","digiblocks"),value:"solid"},{label:we("Dotted","digiblocks"),value:"dotted"},{label:we("Dashed","digiblocks"),value:"dashed"},{label:we("Double","digiblocks"),value:"double"},{label:we("Groove","digiblocks"),value:"groove"},{label:we("Ridge","digiblocks"),value:"ridge"},{label:we("Inset","digiblocks"),value:"inset"},{label:we("Outset","digiblocks"),value:"outset"}],R=[{label:we("Facebook","digiblocks"),value:"facebook"},{label:we("Twitter","digiblocks"),value:"twitter"},{label:we("LinkedIn","digiblocks"),value:"linkedin"},{label:we("Instagram","digiblocks"),value:"instagram"},{label:we("Pinterest","digiblocks"),value:"pinterest"},{label:we("YouTube","digiblocks"),value:"youtube"},{label:we("Dribbble","digiblocks"),value:"dribbble"},{label:we("GitHub","digiblocks"),value:"github"},{label:we("Behance","digiblocks"),value:"behance"},{label:we("Vimeo","digiblocks"),value:"vimeo"},{label:we("TikTok","digiblocks"),value:"tiktok"},{label:we("Email","digiblocks"),value:"email"},{label:we("Website","digiblocks"),value:"website"}],p=[{label:we("None","digiblocks"),value:"none"},...Object.keys(xr).map(f=>({label:f.replace(/-/g," ").replace(/\b\w/g,De=>De.toUpperCase()),value:f}))],re=[{name:"options",title:we("Options","digiblocks"),icon:yr.optionsIcon},{name:"style",title:we("Style","digiblocks"),icon:yr.styleIcon},{name:"advanced",title:we("Advanced","digiblocks"),icon:yr.advancedIcon}],n=()=>{let f=`team-member-${K.substr(0,8)}-${Date.now()}`,De={id:f,name:we("New Team Member","digiblocks"),position:we("Position","digiblocks"),bio:we("Add a short bio about this team member.","digiblocks"),image:{url:"",id:"",alt:""},socials:[{id:`social-${f}-1`,network:"facebook",url:"https://facebook.com"},{id:`social-${f}-2`,network:"twitter",url:"https://twitter.com"}]};e({members:[...l,De]})},g=f=>{let De=[...l];De.splice(f,1),e({members:De})},q=f=>{let De=l[f],io=Date.now(),so=`team-member-${K.substr(0,8)}-${io}`,i={...De,id:so,socials:De.socials?De.socials.map((Oe,bo)=>({...Oe,id:`social-${so}-${bo}`})):[]},E=[...l];E.splice(f+1,0,i),e({members:E})},d=f=>{if(f===0)return;let De=[...l],io=De[f];De.splice(f,1),De.splice(f-1,0,io),e({members:De})},ie=f=>{if(f===l.length-1)return;let De=[...l],io=De[f];De.splice(f,1),De.splice(f+1,0,io),e({members:De})},C=(f,De,io)=>{let so=[...l];so[f]={...so[f],[De]:io},e({members:so})},h=(f,De)=>{let io=[...l];io[f].image||(io[f].image={}),io[f].image={url:De.url||"",id:De.id||"",alt:De.alt||""},e({members:io})},Be=f=>{fe({memberIndex:f,target:document.getElementById(`add-social-${f}`)})},a=()=>{fe(null)},ge=(f,De)=>{let io=[...l],so=io[f],i=so.socials||[];i.push({id:`social-${so.id}-${Date.now()}`,network:De,url:""}),io[f]={...so,socials:i},e({members:io}),a(),setTimeout(()=>{let E=i.length-1;co(f,E)},100)},Ue=()=>{if(!U)return null;let{memberIndex:f,target:De}=U,io=l[f].socials?l[f].socials.map(i=>i.network):[],so=R.filter(i=>!io.includes(i.value));return wp.element.createElement(fg,{anchor:De,onClose:a,position:"bottom center",expandOnMobile:!0,className:"digiblocks-team-social-select-popover"},wp.element.createElement("div",{style:{padding:"12px",width:"280px",maxHeight:"400px",overflowY:"auto"}},wp.element.createElement("div",{style:{marginBottom:"10px",fontWeight:"bold"}},we("Select Social Network","digiblocks")),wp.element.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"8px"}},so.map(i=>wp.element.createElement($t,{key:i.value,variant:"secondary",onClick:()=>ge(f,i.value),style:{display:"flex",alignItems:"center",justifyContent:"flex-start",padding:"8px",gap:"8px"}},wp.element.createElement("span",{style:{display:"inline-flex",alignItems:"center"}},yg[i.value]),wp.element.createElement("span",null,i.label))))))},Ke=(f,De)=>{let io=[...l],so=io[f],i=[...so.socials];i.splice(De,1),io[f]={...so,socials:i},e({members:io})},ao=(f,De,io,so)=>{let i=[...l],E=i[f],Oe=[...E.socials];Oe[De]={...Oe[De],[io]:so},i[f]={...E,socials:Oe},e({members:i})},co=(f,De)=>{qe({memberIndex:f,socialIndex:De,target:document.getElementById(`social-link-${f}-${De}`)})},t=()=>{qe(null)},m=()=>{let f=je,De={desktop:`calc((100% - ${($.desktop-1)*x.desktop}px) / ${$.desktop})`,tablet:`calc((100% - ${($.tablet-1)*x.tablet}px) / ${$.tablet})`,mobile:`calc((100% - ${($.mobile-1)*x.mobile}px) / ${$.mobile})`},io="box-shadow: none;";ve&&ve.enable&&(io=`box-shadow: ${ve.position==="inset"?"inset ":""}${ve.horizontal}px ${ve.vertical}px ${ve.blur}px ${ve.spread}px ${ve.color};`);let so="";J&&J.enable&&(so=`box-shadow: ${J.position==="inset"?"inset ":""}${J.horizontal}px ${J.vertical}px ${J.blur}px ${J.spread}px ${J.color};`);let i="";_&&(_.fontFamily&&(i+=`font-family: ${_.fontFamily};`),_.fontSize&&_.fontSize[f]&&(i+=`font-size: ${_.fontSize[f]}${_.fontSizeUnit||"px"};`),_.fontWeight&&(i+=`font-weight: ${_.fontWeight};`),_.fontStyle&&(i+=`font-style: ${_.fontStyle};`),_.textTransform&&(i+=`text-transform: ${_.textTransform};`),_.textDecoration&&(i+=`text-decoration: ${_.textDecoration};`),_.lineHeight&&_.lineHeight[f]&&(i+=`line-height: ${_.lineHeight[f]}${_.lineHeightUnit||"em"};`),_.letterSpacing&&_.letterSpacing[f]&&(i+=`letter-spacing: ${_.letterSpacing[f]}${_.letterSpacingUnit||"px"};`));let E="";L&&(L.fontFamily&&(E+=`font-family: ${L.fontFamily};`),L.fontSize&&L.fontSize[f]&&(E+=`font-size: ${L.fontSize[f]}${L.fontSizeUnit||"px"};`),L.fontWeight&&(E+=`font-weight: ${L.fontWeight};`),L.fontStyle&&(E+=`font-style: ${L.fontStyle};`),L.textTransform&&(E+=`text-transform: ${L.textTransform};`),L.textDecoration&&(E+=`text-decoration: ${L.textDecoration};`),L.lineHeight&&L.lineHeight[f]&&(E+=`line-height: ${L.lineHeight[f]}${L.lineHeightUnit||"em"};`),L.letterSpacing&&L.letterSpacing[f]&&(E+=`letter-spacing: ${L.letterSpacing[f]}${L.letterSpacingUnit||"px"};`));let Oe="";B&&(B.fontFamily&&(Oe+=`font-family: ${B.fontFamily};`),B.fontSize&&B.fontSize[f]&&(Oe+=`font-size: ${B.fontSize[f]}${B.fontSizeUnit||"px"};`),B.fontWeight&&(Oe+=`font-weight: ${B.fontWeight};`),B.fontStyle&&(Oe+=`font-style: ${B.fontStyle};`),B.textTransform&&(Oe+=`text-transform: ${B.textTransform};`),B.textDecoration&&(Oe+=`text-decoration: ${B.textDecoration};`),B.lineHeight&&B.lineHeight[f]&&(Oe+=`line-height: ${B.lineHeight[f]}${B.lineHeightUnit||"em"};`),B.letterSpacing&&B.letterSpacing[f]&&(Oe+=`letter-spacing: ${B.letterSpacing[f]}${B.letterSpacingUnit||"px"};`));let bo;u==="circle"?bo="border-radius: 50%;":u==="square"?bo="border-radius: 0;":u==="rounded"?bo="border-radius: 8px;":bo=`${It(S,"border-radius",f)}`;let z=`${It(F,"border-radius",f)}`,Xe=`${It(Q,"border-width",f)}`,go=`${It(se,"padding",f)}`,W=`${It(ne,"margin",f)}`,He=`${It(D,"border-width",f)}`,ho=`${It(Ce,"border-radius",f)}`,uo=`${It(Z,"border-width",f)}`;return`
            /* Team Block - ${o} */
            .${o} {
                ${W}
            }
            
            /* Grid Layout */
            .${o} .digiblocks-team-container {
                display: flex;
                flex-wrap: wrap;
                gap: ${x[f]}px;
                justify-content: ${T==="center"?"center":T==="right"?"flex-end":"flex-start"};
            }
            
            /* List Layout */
            .${o}.layout-list .digiblocks-team-container {
                display: flex;
				flex-direction: column;
				gap: ${x[f]}px;
            }
            
            .${o}.layout-list .digiblocks-team-member {
                display: flex;
                align-items: center;
                width: 100%;
				gap: ${x[f]}px;
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
				align-items: ${T==="center"?"center":T==="right"?"flex-end":"flex-start"};
				gap: 15px;
                ${H==="grid"?`width: ${De[f]}; flex-direction: column;`:""}
                text-align: ${T};
                position: relative;
				background-color: ${I||"transparent"};
				${X!=="none"?`
					border-style: ${X};
					border-color: ${ee||"#e0e0e0"};
					${Xe}
				`:""}
				${z}
				${io}
				${go}
				transition: all 0.3s ease;
            }
            
            /* Hover effects */
            ${J&&J.enable?`
                .${o} .digiblocks-team-member:hover {
                    ${so}
                }
            `:""}
            
            /* Team Member Image */
            .${o} .digiblocks-team-member-image {
                width: ${r[f]}px;
                height: ${r[f]}px;
				max-width: 100%;
                ${bo}
                overflow: hidden;
                display: flex;
                ${v!=="none"?`
					${He}
					border-style: ${v};
					border-color: ${y};
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
                color: ${O};
                margin-top: 0;
                margin-bottom: 5px;
                ${i}
            }
            
            /* Team Member Position */
            .${o} .digiblocks-team-member-position {
                color: ${Y};
                margin-bottom: 10px;
                ${E}
            }
            
            /* Team Member Bio */
            .${o} .digiblocks-team-member-bio {
                color: ${A};
                margin-bottom: ${xe?"15px":"0"};
                ${Oe}
            }
            
            /* Team Member Social */
            .${o} .digiblocks-team-member-social {
				display: flex;
				align-items: center;
				justify-content: ${T==="center"?"center":T==="right"?"flex-end":"flex-start"};
				gap: ${M[f]}px;
				flex-wrap: wrap;
			}
			
			.${o} .digiblocks-team-member-social-icon {
				color: ${V};
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
				color: ${k};
				${Ve?`background-color: ${Ve};`:""}
			}
			
			.${o} .digiblocks-team-member-social-icon svg {
				width: ${b[f]?`${b[f]}px`:"1.2rem"};
				height: ${b[f]?`${b[f]}px`:"1.2rem"};
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
			${s.desktop?`
				@media (min-width: 992px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${s.tablet?`
				@media (min-width: 768px) and (max-width: 991px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${s.mobile?`
				@media (max-width: 767px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}
        `},Me=()=>l.map((f,De)=>wp.element.createElement("div",{key:f.id,className:"digiblocks-team-member"},wp.element.createElement("div",{className:"digiblocks-team-member-controls"},wp.element.createElement(rn,{text:we("Move Up","digiblocks")},wp.element.createElement($t,{className:"digiblocks-team-member-move-up",onClick:()=>d(De),icon:"arrow-up-alt2",disabled:De===0,isSmall:!0})),wp.element.createElement(rn,{text:we("Move Down","digiblocks")},wp.element.createElement($t,{className:"digiblocks-team-member-move-down",onClick:()=>ie(De),icon:"arrow-down-alt2",disabled:De===l.length-1,isSmall:!0})),wp.element.createElement(rn,{text:we("Duplicate","digiblocks")},wp.element.createElement($t,{className:"digiblocks-team-member-duplicate",onClick:()=>q(De),icon:"admin-page",isSmall:!0})),wp.element.createElement(rn,{text:we("Remove","digiblocks")},wp.element.createElement($t,{className:"digiblocks-team-member-remove",onClick:()=>g(De),icon:"trash",isSmall:!0,disabled:l.length<=1}))),Te&&wp.element.createElement("div",{className:"digiblocks-team-member-image"},wp.element.createElement(fk,null,wp.element.createElement(hk,{onSelect:io=>h(De,io),allowedTypes:["image"],value:f.image&&f.image.id?f.image.id:"",render:({open:io})=>wp.element.createElement("div",{className:"digiblocks-image-upload-container"},f.image&&f.image.url?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("img",{src:f.image.url,alt:f.image.alt||f.name,onClick:io}),wp.element.createElement("button",{className:"digiblocks-change-image-button",onClick:io},we("Change Image","digiblocks"))):wp.element.createElement("div",{className:"digiblocks-team-member-placeholder",onClick:io},we("Choose Image","digiblocks")))}))),wp.element.createElement("div",{className:"digiblocks-team-member-content"},Te&&wp.element.createElement(kr,{tagName:"h3",className:"digiblocks-team-member-name",value:f.name,onChange:io=>C(De,"name",io),placeholder:we("Team Member Name","digiblocks"),allowedFormats:["core/bold","core/italic"]}),be&&wp.element.createElement(kr,{tagName:"div",className:"digiblocks-team-member-position",value:f.position,onChange:io=>C(De,"position",io),placeholder:we("Position or Role","digiblocks"),allowedFormats:["core/bold","core/italic"]}),N&&wp.element.createElement(kr,{tagName:"div",className:"digiblocks-team-member-bio",value:f.bio,onChange:io=>C(De,"bio",io),placeholder:we("Add a short bio about this team member.","digiblocks"),allowedFormats:["core/bold","core/italic","core/link"]}),xe&&wp.element.createElement("div",{className:"digiblocks-team-member-social"},f.socials&&f.socials.map((io,so)=>wp.element.createElement("div",{key:io.id,className:"digiblocks-team-member-social-icon-wrapper"},wp.element.createElement("div",{id:`social-link-${De}-${so}`,className:"digiblocks-team-member-social-icon",onClick:()=>co(De,so)},yg[io.network]),wp.element.createElement($t,{className:"digiblocks-team-member-social-icon-remove",onClick:()=>Ke(De,so),icon:"no-alt",isSmall:!0,label:we("Remove","digiblocks"),style:{position:"absolute",top:"-12px",right:"-10px",background:"#fff",borderRadius:"50%",padding:"2px",boxShadow:"0 1px 3px rgba(0,0,0,0.2)",zIndex:2}}))),wp.element.createElement("div",{id:`add-social-${De}`,className:"digiblocks-team-member-social-icon add-social",onClick:()=>Be(De),title:we("Add Social Link","digiblocks")},wk))))),c=()=>{if(!ze)return null;let{memberIndex:f,socialIndex:De,target:io}=ze,so=l[f].socials[De];return wp.element.createElement(fg,{anchor:io,onClose:t,position:"bottom center",expandOnMobile:!0,className:"digiblocks-team-social-url-popover"},wp.element.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",padding:"12px",minWidth:"280px"}},wp.element.createElement(Jl,{label:we("Social Network","digiblocks"),value:so.network,options:R,onChange:i=>ao(f,De,"network",i),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(kk,{label:we("URL","digiblocks"),value:so.url,onChange:i=>ao(f,De,"url",i),placeholder:so.network==="email"?"mailto:example@domain.com":so.network==="website"?"https://example.com":`https://${so.network}.com/username`,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement($t,{variant:"primary",onClick:t,style:{justifyContent:"center",width:"100%"}},we("Done","digiblocks"))))},me=()=>{switch(w){case"options":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(dt,{tab:"options",name:"layout-settings",title:we("Layout Settings","digiblocks"),initialOpen:!0},wp.element.createElement(vg,{id:"team-alignment-control",label:we("Layout Type","digiblocks"),__nextHasNoMarginBottom:!0},wp.element.createElement(kg,{value:H,onChange:f=>e({layout:f}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(Zl,{value:"grid",label:we("Grid","digiblocks"),"aria-label":we("Grid Layout","digiblocks")}),wp.element.createElement(Zl,{value:"list",label:we("List","digiblocks"),"aria-label":we("List Layout","digiblocks")}))),H==="grid"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(vg,{id:"team-alignment-control",label:we("Alignment","digiblocks"),__nextHasNoMarginBottom:!0},wp.element.createElement(kg,{value:T,onChange:f=>e({alignment:f}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(Zl,{value:"left",label:we("Left","digiblocks"),"aria-label":we("Left alignment","digiblocks")}),wp.element.createElement(Zl,{value:"center",label:we("Center","digiblocks"),"aria-label":we("Center alignment","digiblocks")}),wp.element.createElement(Zl,{value:"right",label:we("Right","digiblocks"),"aria-label":we("Right alignment","digiblocks")}))),wp.element.createElement(zo,{label:we("Columns","digiblocks")},wp.element.createElement(Yl,{value:$[je],onChange:f=>e({columns:{...$,[je]:f}}),min:1,max:6,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(zo,{label:we("Spacing","digiblocks")},wp.element.createElement(Yl,{value:x[je],onChange:f=>e({gutter:{...x,[je]:f}}),min:0,max:100,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})))),wp.element.createElement(dt,{tab:"options",name:"content-settings",title:we("Content Settings","digiblocks"),initialOpen:!1},wp.element.createElement(gi,{label:we("Show Name","digiblocks"),checked:Te,onChange:()=>e({showName:!Te}),__nextHasNoMarginBottom:!0}),wp.element.createElement(gi,{label:we("Show Position","digiblocks"),checked:be,onChange:()=>e({showPosition:!be}),__nextHasNoMarginBottom:!0}),wp.element.createElement(gi,{label:we("Show Bio","digiblocks"),checked:N,onChange:()=>e({showBio:!N}),__nextHasNoMarginBottom:!0}),wp.element.createElement(gi,{label:we("Show Social Icons","digiblocks"),checked:xe,onChange:()=>e({showSocial:!xe}),__nextHasNoMarginBottom:!0})),wp.element.createElement(dt,{tab:"options",name:"image-settings",title:we("Image Settings","digiblocks"),initialOpen:!1},wp.element.createElement(Jl,{label:we("Image Style","digiblocks"),value:u,options:G,onChange:f=>e({imageStyle:f}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(zo,{label:we("Image Size","digiblocks")},wp.element.createElement(Yl,{value:r[je],onChange:f=>e({imageSize:{...r,[je]:f}}),min:50,max:300,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(Jl,{label:we("Border Style","digiblocks"),value:v,options:pe,onChange:f=>e({imageBorderStyle:f}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),v!=="none"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(sn,{title:we("Border Color","digiblocks"),initialOpen:!1,enableAlpha:!0,colorSettings:[{value:y,onChange:f=>e({imageBorderColor:f}),label:we("Border Color","digiblocks")}]}),wp.element.createElement(zo,{label:we("Border Width","digiblocks")},wp.element.createElement(Lt,{values:D[je],onChange:f=>e({imageBorderWidth:{...D,[je]:f}})}))),u==="default"&&wp.element.createElement(zo,{label:we("Border Radius","digiblocks")},wp.element.createElement(Lt,{values:S[je],onChange:f=>e({imageBorderRadius:{...S,[je]:f}})}))));case"style":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(dt,{tab:"style",name:"colors",title:we("Colors","digiblocks"),initialOpen:!0},wp.element.createElement(sn,{title:we("Text Colors","digiblocks"),initialOpen:!0,colorSettings:[{value:O,onChange:f=>e({nameColor:f}),label:we("Name Color","digiblocks")},{value:Y,onChange:f=>e({positionColor:f}),label:we("Position Color","digiblocks")},{value:A,onChange:f=>e({bioColor:f}),label:we("Bio Color","digiblocks")}]}),wp.element.createElement(sn,{title:we("Social Icon Colors","digiblocks"),initialOpen:!1,colorSettings:[{value:V,onChange:f=>e({iconColor:f}),label:we("Icon Color","digiblocks")},{value:k,onChange:f=>e({iconHoverColor:f}),label:we("Icon Hover Color","digiblocks")},{value:le,onChange:f=>e({iconBackgroundColor:f}),label:we("Icon Background","digiblocks")},{value:Ve,onChange:f=>e({iconBackgroundHoverColor:f}),label:we("Icon Background Hover","digiblocks")}]}),wp.element.createElement(sn,{title:we("Box Colors","digiblocks"),initialOpen:!1,colorSettings:[{value:I,onChange:f=>e({boxBackgroundColor:f}),label:we("Background Color","digiblocks")},{value:ee,onChange:f=>e({boxBorderColor:f}),label:we("Border Color","digiblocks")}]})),wp.element.createElement(dt,{tab:"style",name:"typography",title:we("Typography","digiblocks"),initialOpen:!1},wp.element.createElement(Cr,{label:we("Name Typography","digiblocks"),value:_,onChange:f=>e({typography:f}),defaults:{fontSize:{desktop:22,tablet:20,mobile:18},fontSizeUnit:"px",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em"}}),wp.element.createElement(Cr,{label:we("Position Typography","digiblocks"),value:L,onChange:f=>e({textTypography:f}),defaults:{fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em"}}),wp.element.createElement(Cr,{label:we("Bio Typography","digiblocks"),value:B,onChange:f=>e({contentTypography:f}),defaults:{fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em"}})),wp.element.createElement(dt,{tab:"style",name:"social-icons",title:we("Social Icons","digiblocks"),initialOpen:!1},wp.element.createElement(zo,{label:we("Icon Size","digiblocks")},wp.element.createElement(Yl,{value:b[je],onChange:f=>e({iconSize:{...b,[je]:f}}),min:10,max:50,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(zo,{label:we("Icon Spacing","digiblocks")},wp.element.createElement(Yl,{value:M[je],onChange:f=>e({iconSpacing:{...M,[je]:f}}),min:0,max:30,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(zo,{label:we("Icon Padding","digiblocks")},wp.element.createElement(Lt,{values:Z[je],onChange:f=>e({iconPadding:{...Z,[je]:f}})})),wp.element.createElement(zo,{label:we("Border Radius","digiblocks")},wp.element.createElement(Lt,{values:Ce[je],onChange:f=>e({iconBorderRadius:{...Ce,[je]:f}})}))),wp.element.createElement(dt,{tab:"style",name:"box-style",title:we("Box Style","digiblocks"),initialOpen:!1},wp.element.createElement(Jl,{label:we("Border Style","digiblocks"),value:X,options:pe,onChange:f=>e({boxBorderStyle:f}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),X!=="none"&&wp.element.createElement(zo,{label:we("Border Width","digiblocks")},wp.element.createElement(Lt,{values:Q[je],onChange:f=>e({boxBorderWidth:{...Q,[je]:f}})})),wp.element.createElement(zo,{label:we("Border Radius","digiblocks")},wp.element.createElement(Lt,{values:F[je],onChange:f=>e({boxBorderRadius:{...F,[je]:f}})})),wp.element.createElement(yk,{label:we("Box Shadow","digiblocks"),normalValue:ve,hoverValue:J,onNormalChange:f=>e({boxShadow:f}),onHoverChange:f=>e({boxShadowHover:f})}),wp.element.createElement(zo,{label:we("Padding","digiblocks")},wp.element.createElement(Lt,{values:se[je],onChange:f=>e({boxPadding:{...se,[je]:f}})})),wp.element.createElement(zo,{label:we("Margin","digiblocks")},wp.element.createElement(Lt,{values:ne[je],onChange:f=>e({boxMargin:{...ne,[je]:f}})}))));case"advanced":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(dt,{tab:"advanced",name:"animation",title:we("Animation","digiblocks"),initialOpen:!0},wp.element.createElement(Jl,{label:we("Animation Effect","digiblocks"),value:ce,options:p,onChange:f=>e({animation:f}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),ce&&ce!=="none"&&wp.element.createElement("div",{style:{marginTop:"10px"}},wp.element.createElement($t,{variant:"secondary",onClick:Qe,style:{width:"100%"},disabled:Ie},we(Ie?"Previewing...":"Preview Animation","digiblocks")))),wp.element.createElement(dt,{tab:"advanced",name:"visibility",title:we("Visibility","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control__help",style:{padding:"12px",backgroundColor:"#f0f6fc",border:"1px solid #c3ddfd",borderRadius:"4px",marginBottom:"16px"}},wp.element.createElement("strong",null,we("Editor Note:","digiblocks")),wp.element.createElement("br",null),we("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.","digiblocks")),wp.element.createElement(gi,{label:we("Hide on Desktop","digiblocks"),checked:s.desktop,onChange:f=>e({visibility:{...s,desktop:f}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(gi,{label:we("Hide on Tablet","digiblocks"),checked:s.tablet,onChange:f=>e({visibility:{...s,tablet:f}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(gi,{label:we("Hide on Mobile","digiblocks"),checked:s.mobile,onChange:f=>e({visibility:{...s,mobile:f}}),__nextHasNoMarginBottom:!0})),wp.element.createElement(dt,{tab:"advanced",name:"additional",title:we("Additional","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control html-anchor-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"html-anchor"},we("HTML anchor","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"html-anchor",value:P||"",onChange:f=>e({anchor:f.target.value}),"aria-describedby":"html-anchor-help",autoCapitalize:"none",autoComplete:"off"})),wp.element.createElement("p",{id:"html-anchor-help",className:"components-base-control__help"},we(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`,"digiblocks")," ",wp.element.createElement("a",{className:"components-external-link",href:"https://wordpress.org/documentation/article/page-jumps/",target:"_blank",rel:"external noreferrer noopener"},wp.element.createElement("span",{className:"components-external-link__contents"},we("Learn more about anchors","digiblocks")),wp.element.createElement("span",{className:"components-external-link__icon","aria-label":"(opens in a new tab)"},"\u2197")))),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"additional-css-classes"},we("Additional CSS class(es)","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"additional-css-classes",value:oe||"",onChange:f=>e({customClasses:f.target.value}),"aria-describedby":"additional-css-classes-help",autoComplete:"off"})),wp.element.createElement("p",{id:"additional-css-classes-help",className:"components-base-control__help"},we("Separate multiple classes with spaces.","digiblocks")))));default:return null}},oo=uk({className:`digiblocks-team-block ${o} layout-${H} align-${T} ${oe||""}`,id:P||null});return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(mk,null,wp.element.createElement(Ck,{tabs:re,activeTab:w,onSelect:ke},me())),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:m()}}),wp.element.createElement("div",{...oo},wp.element.createElement("div",{className:"digiblocks-team-container"},Me()),wp.element.createElement($t,{variant:"primary",icon:"plus",onClick:n,style:{width:"100%",marginTop:"20px",justifyContent:"center"}},we("Add Team Member","digiblocks")),c(),Ue()))},Cg=Sk;var{useBlockProps:$k,RichText:wr}=window.wp.blockEditor,_k={facebook:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512"},wp.element.createElement("path",{d:"M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"})),twitter:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},wp.element.createElement("path",{d:"M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"})),linkedin:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},wp.element.createElement("path",{d:"M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"})),instagram:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},wp.element.createElement("path",{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"})),pinterest:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},wp.element.createElement("path",{d:"M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z"})),youtube:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},wp.element.createElement("path",{d:"M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"})),dribbble:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},wp.element.createElement("path",{d:"M86.6 64l85.2 85.2C194.5 121.7 208 86.4 208 48c0-14.7-2-28.9-5.7-42.4C158.6 15 119 35.5 86.6 64zM64 86.6C35.5 119 15 158.6 5.6 202.3C19.1 206 33.3 208 48 208c38.4 0 73.7-13.5 101.3-36.1L64 86.6zM256 0c-7.3 0-14.6 .3-21.8 .9C238 16 240 31.8 240 48c0 47.3-17.1 90.5-45.4 124L256 233.4 425.4 64C380.2 24.2 320.9 0 256 0zM48 240c-16.2 0-32-2-47.1-5.8C.3 241.4 0 248.7 0 256c0 64.9 24.2 124.2 64 169.4L233.4 256 172 194.6C138.5 222.9 95.3 240 48 240zm463.1 37.8c.6-7.2 .9-14.5 .9-21.8c0-64.9-24.2-124.2-64-169.4L278.6 256 340 317.4c33.4-28.3 76.7-45.4 124-45.4c16.2 0 32 2 47.1 5.8zm-4.7 31.9C492.9 306 478.7 304 464 304c-38.4 0-73.7 13.5-101.3 36.1L448 425.4c28.5-32.3 49.1-71.9 58.4-115.7zM340.1 362.7C317.5 390.3 304 425.6 304 464c0 14.7 2 28.9 5.7 42.4C353.4 497 393 476.5 425.4 448l-85.2-85.2zM317.4 340L256 278.6 86.6 448c45.1 39.8 104.4 64 169.4 64c7.3 0 14.6-.3 21.8-.9C274 496 272 480.2 272 464c0-47.3 17.1-90.5 45.4-124z"})),github:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 496 512"},wp.element.createElement("path",{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"})),behance:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},wp.element.createElement("path",{d:"M232 237.2c31.8-15.2 48.4-38.2 48.4-74 0-70.6-52.6-87.8-113.3-87.8H0v354.4h171.8c64.4 0 124.9-30.9 124.9-102.9 0-44.5-21.1-77.4-64.7-89.7zM77.9 135.9H151c28.1 0 53.4 7.9 53.4 40.5 0 30.1-19.7 42.2-47.5 42.2h-79v-82.7zm83.3 233.7H77.9V272h84.9c34.3 0 56 14.3 56 50.6 0 35.8-25.9 47-57.6 47zm358.5-240.7H376V94h143.7v34.9zM576 305.2c0-75.9-44.4-139.2-124.9-139.2-78.2 0-131.3 58.8-131.3 135.8 0 79.9 50.3 134.7 131.3 134.7 61.3 0 101-27.6 120.1-86.3H509c-6.7 21.9-34.3 33.5-55.7 33.5-41.3 0-63-24.2-63-65.3h185.1c.3-4.2 .6-8.7 .6-13.2zM390.4 274c2.3-33.7 24.7-54.8 58.5-54.8 35.4 0 53.2 20.8 56.2 54.8H390.4z"})),vimeo:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},wp.element.createElement("path",{d:"M447.8 153.6c-2 43.6-32.4 103.3-91.4 179.1-60.9 79.2-112.4 118.8-154.6 118.8-26.1 0-48.2-24.1-66.3-72.3C100.3 250 85.3 174.3 56.2 174.3c-3.4 0-15.1 7.1-35.2 21.1L0 168.2c51.6-45.3 100.9-95.7 131.8-98.5 34.9-3.4 56.3 20.5 64.4 71.5 28.7 181.5 41.4 208.9 93.6 126.7 18.7-29.6 28.8-52.1 30.2-67.6 4.8-45.9-35.8-42.8-63.3-31 22-72.1 64.1-107.1 126.2-105.1 45.8 1.2 67.5 31.1 64.9 89.4z"})),tiktok:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},wp.element.createElement("path",{d:"M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"})),email:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},wp.element.createElement("path",{d:"M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"})),website:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512"},wp.element.createElement("path",{d:"M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"}))},Bk=({attributes:te})=>{let{id:e,members:K,layout:o,alignment:P,animation:s,anchor:oe,customClasses:l,showName:$,showPosition:x,showBio:H,showSocial:T}=te,u=`digiblocks-team-block ${e} layout-${o} align-${P} ${s!=="none"?`animate-${s}`:""} ${l||""}`,r=$k.save({className:u,id:oe||null}),S=()=>K.map(D=>wp.element.createElement("div",{key:D.id,className:"digiblocks-team-member"},$&&D.image&&D.image.url&&wp.element.createElement("div",{className:"digiblocks-team-member-image"},wp.element.createElement("img",{src:D.image.url,alt:D.image.alt||D.name})),wp.element.createElement("div",{className:"digiblocks-team-member-content"},$&&wp.element.createElement(wr.Content,{tagName:"h3",className:"digiblocks-team-member-name",value:D.name}),x&&wp.element.createElement(wr.Content,{tagName:"div",className:"digiblocks-team-member-position",value:D.position}),H&&wp.element.createElement(wr.Content,{tagName:"div",className:"digiblocks-team-member-bio",value:D.bio}),T&&D.socials&&D.socials.length>0&&wp.element.createElement("div",{className:"digiblocks-team-member-social"},D.socials.map(y=>{let v=_k[y.network];return wp.element.createElement("a",{key:y.id,href:y.url,className:"digiblocks-team-member-social-icon",rel:"noopener noreferrer",target:"_blank","aria-label":y.network},v)})))));return wp.element.createElement("div",{...r},wp.element.createElement("div",{className:"digiblocks-team-container"},S()))},wg=Bk;var{__:$o}=window.wp.i18n,{registerBlockType:Tk}=window.wp.blocks,{getBlockActiveStatus:Nk}=window.wp.digiBlocks;Tk("digiblocks/team",{apiVersion:2,title:digiBlocksData.blocks.team.title,category:"digiblocks",icon:{src:()=>{let{viewbox:te,path:e}=digiBlocksData.blocks.team.icon;return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${te}`,className:"digiblocks-editor-icons"},wp.element.createElement("path",{d:e}))}},description:digiBlocksData.blocks.team.description,keywords:[$o("team","digiblocks"),$o("members","digiblocks"),$o("staff","digiblocks"),$o("people","digiblocks")],supports:{inserter:!!Nk("team"),html:!1,className:!1,customClassName:!1,anchor:!1},attributes:{id:{type:"string",default:""},anchor:{type:"string",default:""},visibility:{type:"object",default:{desktop:!1,tablet:!1,mobile:!1}},customClasses:{type:"string",default:""},members:{type:"array",default:[{id:"team-member-1",name:$o("John Doe","digiblocks"),position:$o("CEO & Founder","digiblocks"),bio:$o("John has over 15 years of experience in the industry and leads our team with vision and expertise.","digiblocks"),image:{url:"",id:"",alt:""},socials:[{id:"social-1",network:"facebook",url:"https://facebook.com"},{id:"social-2",network:"twitter",url:"https://twitter.com"}]},{id:"team-member-2",name:$o("Jane Smith","digiblocks"),position:$o("Creative Director","digiblocks"),bio:$o("Jane brings creativity and innovation to every project with her background in design and marketing.","digiblocks"),image:{url:"",id:"",alt:""},socials:[{id:"social-3",network:"linkedin",url:"https://linkedin.com"},{id:"social-4",network:"instagram",url:"https://instagram.com"}]},{id:"team-member-3",name:$o("Mike Johnson","digiblocks"),position:$o("Lead Developer","digiblocks"),bio:$o("Mike is our technical expert, specializing in cutting-edge technologies and solving complex problems.","digiblocks"),image:{url:"",id:"",alt:""},socials:[{id:"social-5",network:"github",url:"https://github.com"},{id:"social-6",network:"dribbble",url:"https://dribbble.com"}]}]},columns:{type:"object",default:{desktop:3,tablet:2,mobile:1}},gutter:{type:"object",default:{desktop:30,tablet:20,mobile:15}},layout:{type:"string",default:"grid"},alignment:{type:"string",default:"center"},imageStyle:{type:"string",default:"circle"},imageSize:{type:"object",default:{desktop:150,tablet:120,mobile:100}},imageBorderRadius:{type:"object",default:{desktop:{top:8,right:8,bottom:8,left:8,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},imageBorderWidth:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},imageBorderColor:{type:"string",default:"#e0e0e0"},imageBorderStyle:{type:"string",default:"none"},typography:{type:"object",default:{fontFamily:"",fontSize:{desktop:22,tablet:20,mobile:18},fontSizeUnit:"px",fontWeight:"600",fontStyle:"normal",textTransform:"none",textDecoration:"none",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}},textTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",fontWeight:"400",fontStyle:"normal",textTransform:"none",textDecoration:"none",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}},contentTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",fontWeight:"400",fontStyle:"normal",textTransform:"none",textDecoration:"none",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}},nameColor:{type:"string",default:"#333333"},positionColor:{type:"string",default:"#666666"},bioColor:{type:"string",default:"#666666"},iconColor:{type:"string",default:"#1e73be"},iconHoverColor:{type:"string",default:"#135e9e"},iconSize:{type:"object",default:{desktop:20,tablet:18,mobile:16}},iconSpacing:{type:"object",default:{desktop:10,tablet:8,mobile:6}},iconBackgroundColor:{type:"string",default:"transparent"},iconBackgroundHoverColor:{type:"string",default:""},iconBorderRadius:{type:"object",default:{desktop:{top:50,right:50,bottom:50,left:50,unit:"%"},tablet:{top:"",right:"",bottom:"",left:"",unit:"%"},mobile:{top:"",right:"",bottom:"",left:50,unit:"%"}}},iconPadding:{type:"object",default:{desktop:{top:8,right:8,bottom:8,left:8,unit:"px"},tablet:{top:6,right:6,bottom:6,left:6,unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},boxBackgroundColor:{type:"string",default:"#ffffff"},boxBorderColor:{type:"string",default:"#e0e0e0"},boxBorderRadius:{type:"object",default:{desktop:{top:8,right:8,bottom:8,left:8,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},boxBorderWidth:{type:"object",default:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},boxBorderStyle:{type:"string",default:"solid"},boxPadding:{type:"object",default:{desktop:{top:30,right:30,bottom:30,left:30,unit:"px"},tablet:{top:25,right:25,bottom:25,left:25,unit:"px"},mobile:{top:20,right:20,bottom:20,left:20,unit:"px"}}},boxMargin:{type:"object",default:{desktop:{top:0,right:0,bottom:30,left:0,unit:"px"},tablet:{top:0,right:0,bottom:25,left:0,unit:"px"},mobile:{top:0,right:0,bottom:20,left:0,unit:"px"}}},boxShadow:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.1)",horizontal:0,vertical:5,blur:15,spread:0,position:"outset"}},boxShadowHover:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:10,blur:25,spread:0,position:"outset"}},animation:{type:"string",default:"none"},showName:{type:"boolean",default:!0},showPosition:{type:"boolean",default:!0},showBio:{type:"boolean",default:!0},showSocial:{type:"boolean",default:!0}},example:{attributes:{members:[{id:"team-member-1",name:$o("John Doe","digiblocks"),position:$o("CEO & Founder","digiblocks"),bio:$o("John has over 15 years of experience in the industry.","digiblocks"),socials:[{id:"social-1",network:"facebook",url:"https://facebook.com"},{id:"social-2",network:"twitter",url:"https://twitter.com"}]},{id:"team-member-2",name:$o("Jane Smith","digiblocks"),position:$o("Creative Director","digiblocks"),bio:$o("Jane brings creativity to every project.","digiblocks"),socials:[{id:"social-3",network:"linkedin",url:"https://linkedin.com"}]}],columns:{desktop:2,tablet:2,mobile:1}}},edit:Cg,save:wg});var{__:Ze}=window.wp.i18n,{useBlockProps:Hk,RichText:Sr,InspectorControls:zk,PanelColorSettings:$r,MediaUpload:Mk,MediaUploadCheck:Dk}=window.wp.blockEditor,{BaseControl:Pk,SelectControl:Sg,RangeControl:cn,ToggleControl:Xl,Button:pi,TabPanel:Rk,Tooltip:dn,__experimentalToggleGroupControl:Ik,__experimentalToggleGroupControlOption:_r}=window.wp.components,{useState:Br,useEffect:Tr,useRef:Lk}=window.wp.element,{useBlockId:Ok,getDimensionCSS:gn,animations:Nr,animationPreview:$g}=digi.utils,{tabIcons:Hr}=digi.icons,{ResponsiveControl:Ot,DimensionControl:pn,TypographyControl:zr,BoxShadowControl:Uk,CustomTabPanel:jk,TabPanelBody:gt}=digi.components,Vk=({attributes:te,setAttributes:e,clientId:K})=>{let{id:o,anchor:P,visibility:s,customClasses:oe,testimonials:l,columns:$,nameColor:x,nameHoverColor:H,positionColor:T,contentColor:u,backgroundColor:r,backgroundHoverColor:S,quoteIconColor:D,ratingColor:y,borderStyle:v,borderWidth:_,borderRadius:L,borderColor:B,boxShadow:O,boxShadowHover:Y,padding:A,margin:V,contentTypography:k,headingTypography:b,textTypography:M,imageSize:le,quoteIconSize:Ve,showRating:Ce,showQuoteIcon:Z,animation:I,align:ee,itemSpacing:F}=te;Ok(o,K,e);let[Q,X]=Br(()=>{if(window.digi.uiState){let g=window.digi.uiState.getActiveTab(K);if(g)return g}return"options"}),[se,ne]=Br(window.digi.responsiveState.activeDevice),[ve,J]=Br(!1);Tr(()=>window.digi.responsiveState.subscribe(q=>{ne(q)}),[]),Tr(()=>{if(l&&l.length>0){let g=l.map((q,d)=>q.id?q:{...q,id:`testimonial-${K.substr(0,8)}-${d}`});JSON.stringify(g)!==JSON.stringify(l)&&e({testimonials:g})}},[K,l,e]);let ce=Lk(null);Tr(()=>{if(I&&I!=="none"){let g=setTimeout(()=>{$g(o,I,Nr,ce)},100);return()=>clearTimeout(g)}},[I]);let Te=()=>{$g(o,I,Nr,ce)},be=[{label:Ze("Default","digiblocks"),value:"default"},{label:Ze("None","digiblocks"),value:"none"},{label:Ze("Solid","digiblocks"),value:"solid"},{label:Ze("Dotted","digiblocks"),value:"dotted"},{label:Ze("Dashed","digiblocks"),value:"dashed"},{label:Ze("Double","digiblocks"),value:"double"},{label:Ze("Groove","digiblocks"),value:"groove"},{label:Ze("Inset","digiblocks"),value:"inset"},{label:Ze("Outset","digiblocks"),value:"outset"},{label:Ze("Ridge","digiblocks"),value:"ridge"}],N=[{label:Ze("None","digiblocks"),value:"none"},...Object.keys(Nr).map(g=>({label:g.replace(/-/g," ").replace(/\b\w/g,q=>q.toUpperCase()),value:g}))],xe=[{name:"options",title:Ze("Options","digiblocks"),icon:Hr.optionsIcon},{name:"style",title:Ze("Style","digiblocks"),icon:Hr.styleIcon},{name:"advanced",title:Ze("Advanced","digiblocks"),icon:Hr.advancedIcon}],w=[{name:"normal",title:Ze("Normal","digiblocks"),className:"digiblocks-tab-1 normal"},{name:"hover",title:Ze("Hover","digiblocks"),className:"digiblocks-tab-2 hover"}],ke=()=>{let g=l.length,q={id:`testimonial-${K.substr(0,8)}-${g}`,name:Ze("New Name","digiblocks"),position:Ze("Position","digiblocks"),company:Ze("Company","digiblocks"),content:Ze("Add your testimonial content here...","digiblocks"),imageUrl:"",imageId:"",rating:5};e({testimonials:[...l,q]})},U=g=>{let q=[...l];q.splice(g,1),e({testimonials:q})},fe=g=>{let q=l[g],d=Date.now(),ie={...q,id:`testimonial-${K.substr(0,8)}-${d}`},C=[...l];C.splice(g+1,0,ie),e({testimonials:C})},ze=g=>{if(g===0)return;let q=[...l],d=q[g];q.splice(g,1),q.splice(g-1,0,d),e({testimonials:q})},qe=g=>{if(g===l.length-1)return;let q=[...l],d=q[g];q.splice(g,1),q.splice(g+1,0,d),e({testimonials:q})},je=(g,q)=>{let d=[...l];d[q].name=g,e({testimonials:d})},Fe=(g,q)=>{let d=[...l];d[q].position=g,e({testimonials:d})},Ie=(g,q)=>{let d=[...l];d[q].company=g,e({testimonials:d})},j=(g,q)=>{let d=[...l];d[q].content=g,e({testimonials:d})},Se=(g,q)=>{let d=[...l];d[q].rating=g,e({testimonials:d})},Qe=(g,q)=>{let d=[...l];d[q].imageUrl=g.url,d[q].imageId=g.id,e({testimonials:d})},G=g=>{let q=[];for(let d=1;d<=5;d++)q.push(wp.element.createElement("span",{key:d,className:`digiblocks-rating-star ${d<=g?"filled":""}`,style:{color:d<=g?y:"#e0e0e0"}},wp.element.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor"},wp.element.createElement("path",{d:"M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327l4.898.696c.441.062.612.636.282.95l-3.522 3.356l.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"}))));return q},pe=()=>{let g=window.digi.responsiveState.activeDevice,q="";v&&v!=="default"&&v!=="none"?q=`
                border-style: ${v};
                border-color: ${B||"#e0e0e0"};
				${gn(_,"border-width",g)}
				${gn(L,"border-radius",g)}
            `:q="border: none;";let d="box-shadow: none;";O&&O.enable&&(d=`box-shadow: ${O.position==="inset"?"inset ":""}${O.horizontal}px ${O.vertical}px ${O.blur}px ${O.spread}px ${O.color};`);let ie=`${gn(A,"padding",g)}`,C=`${gn(V,"margin",g)}`,h="";k&&(k.fontFamily&&(h+=`font-family: ${k.fontFamily};`),k.fontSize&&k.fontSize[g]&&(h+=`font-size: ${k.fontSize[g]}${k.fontSizeUnit||"px"};`),k.fontWeight&&(h+=`font-weight: ${k.fontWeight};`),k.fontStyle&&(h+=`font-style: ${k.fontStyle};`),k.textTransform&&(h+=`text-transform: ${k.textTransform};`),k.textDecoration&&(h+=`text-decoration: ${k.textDecoration};`),k.lineHeight&&k.lineHeight[g]&&(h+=`line-height: ${k.lineHeight[g]}${k.lineHeightUnit||"em"};`),k.letterSpacing&&k.letterSpacing[g]&&(h+=`letter-spacing: ${k.letterSpacing[g]}${k.letterSpacingUnit||"px"};`));let Be="";b&&(b.fontFamily&&(Be+=`font-family: ${b.fontFamily};`),b.fontSize&&b.fontSize[g]&&(Be+=`font-size: ${b.fontSize[g]}${b.fontSizeUnit||"px"};`),b.fontWeight&&(Be+=`font-weight: ${b.fontWeight};`),b.fontStyle&&(Be+=`font-style: ${b.fontStyle};`),b.textTransform&&(Be+=`text-transform: ${b.textTransform};`),b.textDecoration&&(Be+=`text-decoration: ${b.textDecoration};`),b.lineHeight&&b.lineHeight[g]&&(Be+=`line-height: ${b.lineHeight[g]}${b.lineHeightUnit||"em"};`),b.letterSpacing&&b.letterSpacing[g]&&(Be+=`letter-spacing: ${b.letterSpacing[g]}${b.letterSpacingUnit||"px"};`));let a="";M&&(M.fontFamily&&(a+=`font-family: ${M.fontFamily};`),M.fontSize&&M.fontSize[g]&&(a+=`font-size: ${M.fontSize[g]}${M.fontSizeUnit||"px"};`),M.fontWeight&&(a+=`font-weight: ${M.fontWeight};`),M.fontStyle&&(a+=`font-style: ${M.fontStyle};`),M.textTransform&&(a+=`text-transform: ${M.textTransform};`),M.textDecoration&&(a+=`text-decoration: ${M.textDecoration};`),M.lineHeight&&M.lineHeight[g]&&(a+=`line-height: ${M.lineHeight[g]}${M.lineHeightUnit||"em"};`),M.letterSpacing&&M.letterSpacing[g]&&(a+=`letter-spacing: ${M.letterSpacing[g]}${M.letterSpacingUnit||"px"};`));let ge="";if(Y&&Y.enable){let ao=Y.position==="inset"?"inset ":"";ge+=`box-shadow: ${ao}${Y.horizontal}px ${Y.vertical}px ${Y.blur}px ${Y.spread}px ${Y.color};`}let Ue=$[g]||2,Ke=F[g]||30;return`
            /* Testimonials Block - ${o} */
            .${o} {
                position: relative;
                width: 100%;
            }

			.${o} .digiblocks-testimonials-grid {
				display: grid;
				grid-template-columns: repeat(${Ue}, 1fr);
				gap: ${Ke}px;
			}
            
            .${o} .digiblocks-testimonial-content {
				display: flex;
				flex-direction: column;
				gap: 1rem;
                ${ie}
                ${C}
                ${q}
                ${d}
                background-color: ${r||"transparent"};
                transition: all 0.3s ease;
                position: relative;
				text-align: ${ee};
            }
            
            .${o} .digiblocks-testimonial-content:hover {
                ${S?`background-color: ${S};`:""}
                ${ge}
            }
            
            ${Z?`
            .${o} .digiblocks-testimonial-quote-icon {
                position: absolute;
                top: 6px;
                left: 10px;
                color: ${D};
                opacity: 0.3;
                line-height: 1;
            }

            .${o} .digiblocks-testimonial-quote-icon svg {
                width: ${Ve[g]}px;
				height: ${Ve[g]}px;
            }
            `:""}
            
            .${o} .digiblocks-testimonial-text {
                ${h}
                color: ${u};
                margin: 0;
				position: relative;
				z-index: 1;
            }
            
            .${o} .digiblocks-testimonial-author {
                display: flex;
                align-items: center;
                gap: 15px;
				justify-content: ${ee==="center"?"center":"flex-start"};
				${ee==="center"?"flex-direction: column;":""}
				${ee==="right"?"flex-direction: row-reverse;":""}
				position: relative;
				z-index: 1;
            }
            
            .${o} .digiblocks-testimonial-image {
                width: ${le[g]}px;
                height: ${le[g]}px;
                border-radius: 50%;
                object-fit: cover;
                background: ${D};
                flex-shrink: 0;
            }
            
            .${o} .digiblocks-testimonial-name {
                ${Be}
                color: ${x};
                margin: 0;
                transition: color 0.3s ease;
            }
            
            .${o} .digiblocks-testimonial-content:hover .digiblocks-testimonial-name {
                ${H?`color: ${H};`:""}
            }
            
            .${o} .digiblocks-testimonial-position {
                ${a}
                color: ${T};
                margin: 5px 0 0 0;
            }
            
            ${Ce?`
            .${o} .digiblocks-testimonial-rating {
                display: flex;
				align-items: center;
				gap: 2px;
				justify-content: ${ee==="center"?"center":ee==="right"?"flex-end":"flex-start"};
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
			${s.desktop?`
				@media (min-width: 992px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${s.tablet?`
				@media (min-width: 768px) and (max-width: 991px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${s.mobile?`
				@media (max-width: 767px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}
        `},R=()=>{switch(Q){case"options":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(gt,{tab:"options",name:"layouts",title:Ze("Layout","digiblocks"),initialOpen:!0},wp.element.createElement(Ot,{label:Ze("Columns","digiblocks")},wp.element.createElement(cn,{value:$[se],onChange:g=>e({columns:{...$,[se]:g}}),min:1,max:5,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(Ot,{label:Ze("Item Spacing","digiblocks")},wp.element.createElement(cn,{value:F[se],onChange:g=>e({itemSpacing:{...F,[se]:g}}),min:0,max:100,step:5,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(Pk,{label:Ze("Alignment","digiblocks"),__nextHasNoMarginBottom:!0},wp.element.createElement(Ik,{value:ee,onChange:g=>e({align:g}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(_r,{value:"left",label:Ze("Left","digiblocks"),"aria-label":Ze("Left alignment","digiblocks")}),wp.element.createElement(_r,{value:"center",label:Ze("Center","digiblocks"),"aria-label":Ze("Center alignment","digiblocks")}),wp.element.createElement(_r,{value:"right",label:Ze("Right","digiblocks"),"aria-label":Ze("Right alignment","digiblocks")})))),wp.element.createElement(gt,{tab:"options",name:"testimonial-items",title:Ze("Testimonials","digiblocks"),initialOpen:!1},wp.element.createElement(Xl,{label:Ze("Show Ratings","digiblocks"),checked:Ce,onChange:()=>e({showRating:!Ce}),__nextHasNoMarginBottom:!0}),wp.element.createElement(Xl,{label:Ze("Show Quote Icon","digiblocks"),checked:Z,onChange:()=>e({showQuoteIcon:!Z}),__nextHasNoMarginBottom:!0})));case"style":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(gt,{tab:"style",name:"colors",title:Ze("Colors","digiblocks"),initialOpen:!0},wp.element.createElement(Rk,{className:"digiblocks-control-tabs",activeClass:"active-tab",tabs:w},g=>g.name==="normal"?wp.element.createElement($r,{title:Ze("Color Settings","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:x,onChange:q=>e({nameColor:q}),label:Ze("Name Color","digiblocks")},{value:T,onChange:q=>e({positionColor:q}),label:Ze("Position Color","digiblocks")},{value:u,onChange:q=>e({contentColor:q}),label:Ze("Content Color","digiblocks")},{value:r,onChange:q=>e({backgroundColor:q}),label:Ze("Background Color","digiblocks")},{value:D,onChange:q=>e({quoteIconColor:q}),label:Ze("Quote Icon Color","digiblocks")},{value:y,onChange:q=>e({ratingColor:q}),label:Ze("Rating Color","digiblocks")}]}):g.name==="hover"?wp.element.createElement($r,{title:Ze("Hover Color Settings","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:H,onChange:q=>e({nameHoverColor:q}),label:Ze("Name Color","digiblocks")},{value:S,onChange:q=>e({backgroundHoverColor:q}),label:Ze("Background Color","digiblocks")}]}):null)),wp.element.createElement(gt,{tab:"style",name:"typography",title:Ze("Typography","digiblocks"),initialOpen:!1},wp.element.createElement(zr,{label:Ze("Content Typography","digiblocks"),value:k,onChange:g=>e({contentTypography:g}),defaults:{fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",lineHeight:{desktop:1.7,tablet:1.6,mobile:1.5},lineHeightUnit:"em"}}),wp.element.createElement(zr,{label:Ze("Name Typography","digiblocks"),value:b,onChange:g=>e({headingTypography:g}),defaults:{fontSize:{desktop:20,tablet:18,mobile:16},fontSizeUnit:"px",lineHeight:{desktop:1.3,tablet:1.3,mobile:1.3},lineHeightUnit:"em"}}),wp.element.createElement(zr,{label:Ze("Position Typography","digiblocks"),value:M,onChange:g=>e({textTypography:g}),defaults:{fontSize:{desktop:14,tablet:13,mobile:12},fontSizeUnit:"px",lineHeight:{desktop:1.4,tablet:1.4,mobile:1.4},lineHeightUnit:"em"}})),wp.element.createElement(gt,{tab:"style",name:"sizes",title:Ze("Sizes & Spacing","digiblocks"),initialOpen:!1},wp.element.createElement(Ot,{label:Ze("Image Size","digiblocks")},wp.element.createElement(cn,{value:le[se],onChange:g=>e({imageSize:{...le,[se]:g}}),min:32,max:200,step:4,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(Ot,{label:Ze("Quote Icon Size","digiblocks")},wp.element.createElement(cn,{value:Ve[se],onChange:g=>e({quoteIconSize:{...Ve,[se]:g}}),min:20,max:200,step:5,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}))),wp.element.createElement(gt,{tab:"style",name:"border-shadow",title:Ze("Border & Shadow","digiblocks"),initialOpen:!1},wp.element.createElement(Sg,{label:Ze("Border Style","digiblocks"),value:v||"default",options:be,onChange:g=>{g!=="default"&&g!=="none"&&(v==="default"||v==="none"||!v)&&((!_||Object.keys(_).length===0)&&e({borderWidth:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}}),(!L||Object.keys(L).length===0)&&e({borderRadius:{desktop:{top:12,right:12,bottom:12,left:12,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}})),e({borderStyle:g})},__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),v&&v!=="default"&&v!=="none"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement($r,{title:Ze("Border Color","digiblocks"),enableAlpha:!0,colorSettings:[{value:B,onChange:g=>e({borderColor:g}),label:Ze("Border Color","digiblocks")}]}),wp.element.createElement(Ot,{label:Ze("Border Width","digiblocks")},wp.element.createElement(pn,{values:_[se],onChange:g=>e({borderWidth:{..._,[se]:g}})})),wp.element.createElement(Ot,{label:Ze("Border Radius","digiblocks")},wp.element.createElement(pn,{values:L[se],onChange:g=>e({borderRadius:{...L,[se]:g}}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]}))),wp.element.createElement(Uk,{normalValue:O,hoverValue:Y,onNormalChange:g=>e({boxShadow:g}),onHoverChange:g=>e({boxShadowHover:g})})),wp.element.createElement(gt,{tab:"style",name:"spacing",title:Ze("Spacing","digiblocks"),initialOpen:!1},wp.element.createElement(Ot,{label:Ze("Padding","digiblocks")},wp.element.createElement(pn,{values:A[se],onChange:g=>e({padding:{...A,[se]:g}})})),wp.element.createElement(Ot,{label:Ze("Margin","digiblocks")},wp.element.createElement(pn,{values:V[se],onChange:g=>e({margin:{...V,[se]:g}})}))));case"advanced":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(gt,{tab:"advanced",name:"animation",title:Ze("Animation","digiblocks"),initialOpen:!0},wp.element.createElement(Sg,{label:Ze("Animation Effect","digiblocks"),value:I,options:N,onChange:g=>e({animation:g}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),I&&I!=="none"&&wp.element.createElement("div",{style:{marginTop:"10px"}},wp.element.createElement(pi,{variant:"secondary",isSecondary:!0,onClick:Te,style:{width:"100%"}},Ze("Preview Animation","digiblocks")))),wp.element.createElement(gt,{tab:"advanced",name:"visibility",title:Ze("Visibility","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control__help",style:{padding:"12px",backgroundColor:"#f0f6fc",border:"1px solid #c3ddfd",borderRadius:"4px",marginBottom:"16px"}},wp.element.createElement("strong",null,Ze("Editor Note:","digiblocks")),wp.element.createElement("br",null),Ze("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.","digiblocks")),wp.element.createElement(Xl,{label:Ze("Hide on Desktop","digiblocks"),checked:s.desktop,onChange:g=>e({visibility:{...s,desktop:g}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(Xl,{label:Ze("Hide on Tablet","digiblocks"),checked:s.tablet,onChange:g=>e({visibility:{...s,tablet:g}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(Xl,{label:Ze("Hide on Mobile","digiblocks"),checked:s.mobile,onChange:g=>e({visibility:{...s,mobile:g}}),__nextHasNoMarginBottom:!0})),wp.element.createElement(gt,{tab:"advanced",name:"additional",title:Ze("Additional","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control html-anchor-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"html-anchor"},Ze("HTML anchor","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"html-anchor",value:P||"",onChange:g=>e({anchor:g.target.value}),"aria-describedby":"html-anchor-help",autoCapitalize:"none",autoComplete:"off"})),wp.element.createElement("p",{id:"html-anchor-help",className:"components-base-control__help"},Ze(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`,"digiblocks")," ",wp.element.createElement("a",{className:"components-external-link",href:"https://wordpress.org/documentation/article/page-jumps/",target:"_blank",rel:"external noreferrer noopener"},wp.element.createElement("span",{className:"components-external-link__contents"},Ze("Learn more about anchors","digiblocks")),wp.element.createElement("span",{className:"components-external-link__icon","aria-label":"(opens in a new tab)"},"\u2197")))),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"additional-css-classes"},Ze("Additional CSS class(es)","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"additional-css-classes",value:oe||"",onChange:g=>e({customClasses:g.target.value}),"aria-describedby":"additional-css-classes-help",autoComplete:"off"})),wp.element.createElement("p",{id:"additional-css-classes-help",className:"components-base-control__help"},Ze("Separate multiple classes with spaces.","digiblocks")))));default:return null}},p=(g,q)=>wp.element.createElement("div",{key:g.id,className:"digiblocks-testimonial-item"},wp.element.createElement("div",{className:"digiblocks-testimonial-content"},Z&&wp.element.createElement("div",{className:"digiblocks-testimonial-quote-icon"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",fill:"currentColor"},wp.element.createElement("path",{d:"m54.75 61.7309799v-2.3699951c0-21.9786606 16.2715454-39.8894348 37.5211639-42.4388428 2.7931672-.3351097 5.2288361 1.917471 5.2288361 4.7306748v.0000095c0 2.4273148-1.8343735 4.4202805-4.2426605 4.7236137-7.4862671.9429264-14.1913986 4.3405972-19.203804 9.2676563-1.7802734 1.7499619-.5009689 4.7270927 1.9953613 4.7170334.0236969-.0000954.0474014-.000145.0710983-.000145 12.2492294 0 21.9682159 10.0996895 21.3522568 22.4834023-.538559 10.8274422-9.4114075 19.7002907-20.2388535 20.2388496-12.3837051.6159593-22.4833984-9.1030272-22.4833984-21.3522567z"}),wp.element.createElement("path",{d:"m2.5000021 61.2574081.000001-1.8964233c0-21.9786606 16.2715454-39.8894348 37.5211601-42.4388428 2.7931755-.3351097 5.2288368 1.917471 5.2288368 4.7306748v.0003147c0 2.4272079-1.8342209 4.4199734-4.2423592 4.7236252-7.481739.9434032-14.1888084 4.3410473-19.1987572 9.2678051-1.779623 1.7500687-.500473 4.7271957 1.9954643 4.7165833.025219-.0001068.0504398-.0001602.0756588-.0001602 11.8699932 0 21.3699932 9.5 21.3699932 21.3699951 0 12.0883865-9.8361855 21.7125397-21.996748 21.3711853-11.6399678-.3267442-20.7532557-10.200203-20.7532498-21.8447572z"}))),Ce&&wp.element.createElement("div",{className:"digiblocks-testimonial-rating"},G(g.rating)),wp.element.createElement(Sr,{tagName:"p",className:"digiblocks-testimonial-text",value:g.content,onChange:d=>j(d,q),placeholder:Ze("Enter testimonial content...","digiblocks"),allowedFormats:["core/bold","core/italic","core/link"]}),wp.element.createElement("div",{className:"digiblocks-testimonial-author"},wp.element.createElement(Dk,null,wp.element.createElement(Mk,{onSelect:d=>Qe(d,q),allowedTypes:["image"],value:g.imageId,render:({open:d})=>wp.element.createElement(pi,{className:`digiblocks-image-button ${g.imageUrl?"":"empty"}`,onClick:d,icon:g.imageUrl?"":"format-image"},g.imageUrl?wp.element.createElement("img",{src:g.imageUrl,alt:g.name,className:"digiblocks-testimonial-image"}):wp.element.createElement("div",{className:"digiblocks-testimonial-image",style:{background:D}}))})),wp.element.createElement("div",{className:"digiblocks-testimonial-info"},wp.element.createElement(Sr,{tagName:"h3",className:"digiblocks-testimonial-name",value:g.name,onChange:d=>je(d,q),placeholder:Ze("Testimonial Name","digiblocks"),allowedFormats:["core/bold","core/italic"]}),wp.element.createElement(Sr,{tagName:"p",className:"digiblocks-testimonial-position",value:g.position+(g.company?`, ${g.company}`:""),onChange:d=>{let ie=d.split(",");Fe(ie[0].trim(),q),ie[1]&&Ie(ie[1].trim(),q)},placeholder:Ze("Position, Company","digiblocks"),allowedFormats:["core/bold","core/italic"]}))),wp.element.createElement("div",{className:"digiblocks-testimonial-item-controls"},wp.element.createElement(dn,{text:Ze("Move Up","digiblocks")},wp.element.createElement(pi,{className:"digiblocks-testimonial-item-move-up",onClick:()=>ze(q),icon:"arrow-up-alt2",disabled:q===0,isSmall:!0})),wp.element.createElement(dn,{text:Ze("Move Down","digiblocks")},wp.element.createElement(pi,{className:"digiblocks-testimonial-item-move-down",onClick:()=>qe(q),icon:"arrow-down-alt2",disabled:q===l.length-1,isSmall:!0})),wp.element.createElement(dn,{text:Ze("Duplicate","digiblocks")},wp.element.createElement(pi,{className:"digiblocks-testimonial-item-duplicate",onClick:()=>fe(q),icon:"admin-page",isSmall:!0})),wp.element.createElement(dn,{text:Ze("Remove","digiblocks")},wp.element.createElement(pi,{className:"digiblocks-testimonial-item-remove",onClick:()=>U(q),icon:"trash",isSmall:!0}))))),re=()=>!l||l.length===0?wp.element.createElement("div",{className:"digiblocks-no-testimonials"},wp.element.createElement("p",null,Ze("No testimonials found. Please add some testimonials.","digiblocks"))):l.map((g,q)=>p(g,q)),n=Hk({className:`digiblocks-testimonials-block ${o} grid ${oe||""}`,id:P||null});return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(zk,null,wp.element.createElement(jk,{tabs:xe,activeTab:Q,onSelect:X},R())),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:pe()}}),wp.element.createElement("div",{...n},wp.element.createElement("div",{className:"digiblocks-testimonials-grid"},re()),wp.element.createElement(pi,{variant:"primary",icon:"plus",onClick:ke,style:{width:"100%",marginTop:"40px",justifyContent:"center"}},Ze("Add Testimonial","digiblocks"))))},_g=Vk;var{useBlockProps:Fk,RichText:Mr}=window.wp.blockEditor,Ek=({attributes:te})=>{let{id:e,anchor:K,customClasses:o,testimonials:P,showRating:s,showQuoteIcon:oe,animation:l,columns:$,autoplay:x,autoplaySpeed:H,showArrows:T,showDots:u,ratingColor:r}=te,S=["digiblocks-testimonials-block",e,"grid",l!=="none"?`animate-${l}`:"",o||""].filter(Boolean).join(" "),D=Fk.save({className:S,id:K||null}),y=_=>{let L=[];for(let B=1;B<=5;B++)L.push(wp.element.createElement("span",{key:B,className:`digiblocks-rating-star ${B<=_?"filled":""}`,style:{color:B<=_?r:"#e0e0e0"}},wp.element.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor"},wp.element.createElement("path",{d:"M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327l4.898.696c.441.062.612.636.282.95l-3.522 3.356l.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"}))));return L},v=()=>!P||P.length===0?null:P.map(_=>wp.element.createElement("div",{key:_.id,className:"digiblocks-testimonial-item"},wp.element.createElement("div",{className:"digiblocks-testimonial-content"},oe&&wp.element.createElement("div",{className:"digiblocks-testimonial-quote-icon"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",fill:"currentColor"},wp.element.createElement("path",{d:"m54.75 61.7309799v-2.3699951c0-21.9786606 16.2715454-39.8894348 37.5211639-42.4388428 2.7931672-.3351097 5.2288361 1.917471 5.2288361 4.7306748v.0000095c0 2.4273148-1.8343735 4.4202805-4.2426605 4.7236137-7.4862671.9429264-14.1913986 4.3405972-19.203804 9.2676563-1.7802734 1.7499619-.5009689 4.7270927 1.9953613 4.7170334.0236969-.0000954.0474014-.000145.0710983-.000145 12.2492294 0 21.9682159 10.0996895 21.3522568 22.4834023-.538559 10.8274422-9.4114075 19.7002907-20.2388535 20.2388496-12.3837051.6159593-22.4833984-9.1030272-22.4833984-21.3522567z"}),wp.element.createElement("path",{d:"m2.5000021 61.2574081.000001-1.8964233c0-21.9786606 16.2715454-39.8894348 37.5211601-42.4388428 2.7931755-.3351097 5.2288368 1.917471 5.2288368 4.7306748v.0003147c0 2.4272079-1.8342209 4.4199734-4.2423592 4.7236252-7.481739.9434032-14.1888084 4.3410473-19.1987572 9.2678051-1.779623 1.7500687-.500473 4.7271957 1.9954643 4.7165833.025219-.0001068.0504398-.0001602.0756588-.0001602 11.8699932 0 21.3699932 9.5 21.3699932 21.3699951 0 12.0883865-9.8361855 21.7125397-21.996748 21.3711853-11.6399678-.3267442-20.7532557-10.200203-20.7532498-21.8447572z"}))),s&&wp.element.createElement("div",{className:"digiblocks-testimonial-rating"},y(_.rating)),wp.element.createElement(Mr.Content,{tagName:"p",className:"digiblocks-testimonial-text",value:_.content}),wp.element.createElement("div",{className:"digiblocks-testimonial-author"},_.imageUrl&&wp.element.createElement("img",{src:_.imageUrl,alt:_.name,className:"digiblocks-testimonial-image"}),wp.element.createElement("div",{className:"digiblocks-testimonial-info"},wp.element.createElement(Mr.Content,{tagName:"h3",className:"digiblocks-testimonial-name",value:_.name}),wp.element.createElement(Mr.Content,{tagName:"p",className:"digiblocks-testimonial-position",value:_.position+(_.company?`, ${_.company}`:"")}))))));return wp.element.createElement("div",{...D},wp.element.createElement("div",{className:"digiblocks-testimonials-grid"},v()))},Bg=Ek;var{__:So}=window.wp.i18n,{registerBlockType:Wk}=window.wp.blocks,{getBlockActiveStatus:qk}=window.wp.digiBlocks;Wk("digiblocks/testimonials",{apiVersion:2,title:digiBlocksData.blocks.testimonials.title,category:"digiblocks",icon:{src:()=>{let{viewbox:te,path:e}=digiBlocksData.blocks.testimonials.icon;return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${te}`,className:"digiblocks-editor-icons"},wp.element.createElement("path",{d:e}))}},description:digiBlocksData.blocks.testimonials.description,keywords:[So("testimonials","digiblocks"),So("reviews","digiblocks"),So("quotes","digiblocks"),So("testimonial","digiblocks")],supports:{inserter:!!qk("testimonials"),html:!1,className:!1,customClassName:!1,anchor:!1},attributes:{id:{type:"string",default:""},anchor:{type:"string",default:""},visibility:{type:"object",default:{desktop:!1,tablet:!1,mobile:!1}},customClasses:{type:"string",default:""},testimonials:{type:"array",default:[{id:"testimonial-1",name:So("John Doe","digiblocks"),position:So("CEO","digiblocks"),company:So("Tech Innovations Inc.","digiblocks"),content:So("This product has completely transformed our business operations. The support team is incredibly responsive and helpful.","digiblocks"),imageUrl:"",imageId:"",rating:5},{id:"testimonial-2",name:So("Sarah Johnson","digiblocks"),position:So("Marketing Director","digiblocks"),company:So("Creative Solutions","digiblocks"),content:So("I cannot recommend this service enough. The quality and attention to detail exceeded our expectations.","digiblocks"),imageUrl:"",imageId:"",rating:5}]},columns:{type:"object",default:{desktop:2,tablet:2,mobile:1}},align:{type:"string",default:"left"},autoplay:{type:"boolean",default:!0},autoplaySpeed:{type:"number",default:3e3},showArrows:{type:"boolean",default:!0},showDots:{type:"boolean",default:!0},nameColor:{type:"string",default:"#333333"},nameHoverColor:{type:"string",default:""},positionColor:{type:"string",default:"#666666"},contentColor:{type:"string",default:"#444444"},backgroundColor:{type:"string",default:"#ffffff"},backgroundHoverColor:{type:"string",default:""},quoteIconColor:{type:"string",default:"#e0e0e0"},ratingColor:{type:"string",default:"#ffc107"},borderStyle:{type:"string",default:"default"},borderWidth:{type:"object",default:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderRadius:{type:"object",default:{desktop:{top:12,right:12,bottom:12,left:12,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderColor:{type:"string",default:"#e0e0e0"},boxShadow:{type:"object",default:{enable:!0,color:"rgba(0, 0, 0, 0.12)",horizontal:0,vertical:5,blur:15,spread:0,position:"outset"}},boxShadowHover:{type:"object",default:{enable:!0,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:10,blur:20,spread:0,position:"outset"}},padding:{type:"object",default:{desktop:{top:40,right:40,bottom:40,left:40,unit:"px"},tablet:{top:30,right:30,bottom:30,left:30,unit:"px"},mobile:{top:20,right:20,bottom:20,left:20,unit:"px"}}},margin:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},contentTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",fontWeight:"",fontStyle:"italic",textTransform:"",textDecoration:"",lineHeight:{desktop:1.7,tablet:1.6,mobile:1.5},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}},headingTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:20,tablet:18,mobile:16},fontSizeUnit:"px",fontWeight:"600",fontStyle:"normal",textTransform:"",textDecoration:"",lineHeight:{desktop:1.3,tablet:1.3,mobile:1.3},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}},textTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:14,tablet:13,mobile:12},fontSizeUnit:"px",fontWeight:"",fontStyle:"normal",textTransform:"",textDecoration:"",lineHeight:{desktop:1.4,tablet:1.4,mobile:1.4},lineHeightUnit:"em",letterSpacing:{desktop:.5,tablet:.5,mobile:.5},letterSpacingUnit:"px"}},imageSize:{type:"object",default:{desktop:64,tablet:56,mobile:48}},quoteIconSize:{type:"object",default:{desktop:80,tablet:50,mobile:30}},showRating:{type:"boolean",default:!0},showQuoteIcon:{type:"boolean",default:!0},animation:{type:"string",default:"none"},itemSpacing:{type:"object",default:{desktop:30,tablet:25,mobile:20}}},example:{attributes:{testimonials:[{id:"testimonial-1",name:So("John Doe","digiblocks"),position:So("CEO","digiblocks"),company:So("Tech Innovations Inc.","digiblocks"),content:So("This product has completely transformed our business operations. The support team is incredibly responsive and helpful.","digiblocks"),imageUrl:"",imageId:"",rating:5},{id:"testimonial-2",name:So("Charlotte Lebon","digiblocks"),position:So("Marketing","digiblocks"),company:So("Creative Solutions","digiblocks"),content:So("We've seen a 40% increase in customer engagement since implementing this solution. Highly recommended for any business.","digiblocks"),imageUrl:"",imageId:"",rating:5}],layout:"card",backgroundColor:"#ffffff"},viewportWidth:800},edit:_g,save:Bg});var{__:no}=window.wp.i18n,{useBlockProps:Gk,RichText:Qk,InspectorControls:Jk,PanelColorSettings:Dr}=window.wp.blockEditor,{SelectControl:bn,ToggleControl:Pr,Button:Yk,__experimentalToggleGroupControl:Zk,__experimentalToggleGroupControlOption:Tg}=window.wp.components,{useState:Ng,useEffect:Hg,useRef:Kk}=window.wp.element,{useBlockId:Xk,getDimensionCSS:un,animations:Rr,animationPreview:zg}=digi.utils,{tabIcons:Ir}=digi.icons,{ResponsiveControl:mn,DimensionControl:hn,TypographyControl:Ak,BoxShadowControl:e1,CustomTabPanel:o1,TabPanelBody:Ut,ResponsiveButtonGroup:t1}=digi.components,i1=({attributes:te,setAttributes:e,clientId:K})=>{let{id:o,anchor:P,visibility:s,customClasses:oe,content:l,align:$,htmlTag:x,textColor:H,textHoverColor:T,backgroundColor:u,backgroundHoverColor:r,typography:S,padding:D,margin:y,animation:v,boxShadow:_,boxShadowHover:L,borderStyle:B,borderWidth:O,borderRadius:Y,borderColor:A,borderHoverColor:V,backgroundGradient:k,textShadow:b,hoverEffect:M}=te;Xk(o,K,e);let[le,Ve]=Ng(window.digi.responsiveState.activeDevice);Hg(()=>window.digi.responsiveState.subscribe(xe=>{Ve(xe)}),[]);let[Ce,Z]=Ng(()=>{if(window.digi.uiState){let N=window.digi.uiState.getActiveTab(K);if(N)return N}return"options"}),I=Kk(null);Hg(()=>{if(v&&v!=="none"){let N=setTimeout(()=>{zg(o,v,Rr,I)},100);return()=>clearTimeout(N)}},[v]);let ee=()=>{zg(o,v,Rr,I)},F=[{label:no("Paragraph","digiblocks"),value:"p"},{label:no("Span","digiblocks"),value:"span"},{label:no("Div","digiblocks"),value:"div"}],Q=[{label:no("Default","digiblocks"),value:"default"},{label:no("None","digiblocks"),value:"none"},{label:no("Solid","digiblocks"),value:"solid"},{label:no("Dotted","digiblocks"),value:"dotted"},{label:no("Dashed","digiblocks"),value:"dashed"},{label:no("Double","digiblocks"),value:"double"},{label:no("Groove","digiblocks"),value:"groove"},{label:no("Inset","digiblocks"),value:"inset"},{label:no("Outset","digiblocks"),value:"outset"},{label:no("Ridge","digiblocks"),value:"ridge"}],X=[{label:no("None","digiblocks"),value:"none"},{label:no("Lift","digiblocks"),value:"lift"},{label:no("Scale","digiblocks"),value:"scale"},{label:no("Glow","digiblocks"),value:"glow"},{label:no("Bounce","digiblocks"),value:"bounce"}],se=[{label:no("None","digiblocks"),value:"none"},...Object.keys(Rr).map(N=>({label:N.replace(/-/g," ").replace(/\b\w/g,xe=>xe.toUpperCase()),value:N}))],ne=[{name:"options",title:no("Options","digiblocks"),icon:Ir.optionsIcon},{name:"style",title:no("Style","digiblocks"),icon:Ir.styleIcon},{name:"advanced",title:no("Advanced","digiblocks"),icon:Ir.advancedIcon}],ve=[{name:"normal",title:no("Normal","digiblocks"),className:"digiblocks-tab-1 normal"},{name:"hover",title:no("Hover","digiblocks"),className:"digiblocks-tab-2 hover"}],J=()=>{let N=window.digi.responsiveState.activeDevice,xe="";$[N]==="left"?xe="text-align: left;":$[N]==="center"?xe="text-align: center;":$[N]==="right"?xe="text-align: right;":$[N]==="justify"&&(xe="text-align: justify;");let w=un(Y,"border-radius",N),ke="";B&&B!=="default"&&B!=="none"?ke=`
                border-style: ${B};
                border-color: ${A||"#e0e0e0"};
                ${un(O,"border-width",N)}
            `:ke="border-style: none;";let U="box-shadow: none;";_&&_.enable&&(U=`box-shadow: ${_.position==="inset"?"inset ":""}${_.horizontal}px ${_.vertical}px ${_.blur}px ${_.spread}px ${_.color};`);let fe="";b&&b.enable&&(fe=`text-shadow: ${b.horizontal}px ${b.vertical}px ${b.blur}px ${b.color};`);let ze=`${un(D,"padding",N)}`,qe=`${un(y,"margin",N)}`,je="";S&&(S.fontFamily&&(je+=`font-family: ${S.fontFamily};`),S.fontSize&&S.fontSize[N]&&(je+=`font-size: ${S.fontSize[N]}${S.fontSizeUnit||"px"};`),S.fontWeight&&(je+=`font-weight: ${S.fontWeight};`),S.fontStyle&&(je+=`font-style: ${S.fontStyle};`),S.textTransform&&(je+=`text-transform: ${S.textTransform};`),S.textDecoration&&(je+=`text-decoration: ${S.textDecoration};`),S.lineHeight&&S.lineHeight[N]&&(je+=`line-height: ${S.lineHeight[N]}${S.lineHeightUnit||"em"};`),S.letterSpacing&&S.letterSpacing[N]&&(je+=`letter-spacing: ${S.letterSpacing[N]}${S.letterSpacingUnit||"px"};`));let Fe="";k&&k!=="none"?Fe=`background: ${k};`:u&&(Fe=`background-color: ${u};`);let Ie="";if(L&&L.enable){let j=L.position==="inset"?"inset ":"";Ie+=`box-shadow: ${j}${L.horizontal}px ${L.vertical}px ${L.blur}px ${L.spread}px ${L.color};`}return M==="lift"?Ie+="transform: translateY(-5px);":M==="scale"?Ie+="transform: scale(1.02);":M==="glow"?Ie+="filter: brightness(1.1);":M==="bounce"&&(Ie+="transform: translateY(-3px); transition: transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);"),`
            /* Main text block styles */
            .${o} {
                ${xe}
                color: ${H||"inherit"};
                ${Fe}
                ${U}
                ${fe}
                ${ze}
                ${qe}
                ${ke}
                ${w}
                ${je}
                transition: all 0.3s ease;
                word-wrap: break-word;
                overflow-wrap: break-word;
            }
            
            /* Hover effects */
            .${o}:hover {
                ${T?`color: ${T};`:""}
                ${r?`background-color: ${r};`:""}
                ${V?`border-color: ${V};`:""}
                ${Ie}
            }

            /* Visibility Controls */
            ${s.desktop?`
                @media (min-width: 992px) {
                    .${o} {
                        opacity: 0.5 !important;
                    }
                }
            `:""}

            ${s.tablet?`
                @media (min-width: 768px) and (max-width: 991px) {
                    .${o} {
                        opacity: 0.5 !important;
                    }
                }
            `:""}

            ${s.mobile?`
                @media (max-width: 767px) {
                    .${o} {
                        opacity: 0.5 !important;
                    }
                }
            `:""}
        `},ce=N=>N==="normal"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Dr,{title:no("Color Settings","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:H,onChange:xe=>e({textColor:xe}),label:no("Text Color","digiblocks")},{value:u,onChange:xe=>e({backgroundColor:xe}),label:no("Background Color","digiblocks")}]})):N==="hover"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Dr,{title:no("Hover Color Settings","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:T,onChange:xe=>e({textHoverColor:xe}),label:no("Text Color","digiblocks")},{value:r,onChange:xe=>e({backgroundHoverColor:xe}),label:no("Background Color","digiblocks")},{value:V,onChange:xe=>e({borderHoverColor:xe}),label:no("Border Color","digiblocks")}]})):null,Te=()=>{switch(Ce){case"options":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:"components-panel__body is-opened"},wp.element.createElement(bn,{label:no("HTML Tag","digiblocks"),value:x,options:F,onChange:N=>e({htmlTag:N}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(t1,{label:no("Text Alignment","digiblocks"),value:$,onChange:N=>e({align:N}),options:[{label:no("Left","digiblocks"),value:"left"},{label:no("Center","digiblocks"),value:"center"},{label:no("Right","digiblocks"),value:"right"},{label:no("Justify","digiblocks"),value:"justify"}]})));case"style":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Ut,{tab:"style",name:"colors",title:no("Colors","digiblocks"),initialOpen:!0},wp.element.createElement(Zk,{label:no("State","digiblocks"),value:"normal",isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(Tg,{value:"normal",label:no("Normal","digiblocks")}),wp.element.createElement(Tg,{value:"hover",label:no("Hover","digiblocks")})),ce("normal")),wp.element.createElement(Ut,{tab:"style",name:"typo",title:no("Typography","digiblocks"),initialOpen:!1},wp.element.createElement(Ak,{label:no("Typography","digiblocks"),value:S,onChange:N=>e({typography:N}),defaults:{fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em"}})),wp.element.createElement(Ut,{tab:"style",name:"border",title:no("Border","digiblocks"),initialOpen:!1},wp.element.createElement(bn,{label:no("Border Style","digiblocks"),value:B||"default",options:Q,onChange:N=>{N!=="default"&&N!=="none"&&(B==="default"||B==="none"||!B)&&(!O||Object.keys(O).length===0)&&e({borderWidth:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}}),e({borderStyle:N})},__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),B&&B!=="default"&&B!=="none"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Dr,{title:no("Border Color","digiblocks"),enableAlpha:!0,colorSettings:[{value:A,onChange:N=>e({borderColor:N}),label:no("Border Color","digiblocks")}]}),wp.element.createElement(mn,{label:no("Border Width","digiblocks")},wp.element.createElement(hn,{values:O[le],onChange:N=>e({borderWidth:{...O,[le]:N}})}))),wp.element.createElement(mn,{label:no("Border Radius","digiblocks")},wp.element.createElement(hn,{values:Y[le],onChange:N=>e({borderRadius:{...Y,[le]:N}}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]})),wp.element.createElement(bn,{label:no("Hover Effect","digiblocks"),value:M,options:X,onChange:N=>e({hoverEffect:N}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(Ut,{tab:"style",name:"shadow",title:no("Shadows","digiblocks"),initialOpen:!1},wp.element.createElement(e1,{normalValue:_,hoverValue:L,onNormalChange:N=>e({boxShadow:N}),onHoverChange:N=>e({boxShadowHover:N})})),wp.element.createElement(Ut,{tab:"style",name:"spacing",title:no("Spacing","digiblocks"),initialOpen:!1},wp.element.createElement(mn,{label:no("Padding","digiblocks")},wp.element.createElement(hn,{values:D[le],onChange:N=>e({padding:{...D,[le]:N}})})),wp.element.createElement(mn,{label:no("Margin","digiblocks")},wp.element.createElement(hn,{values:y[le],onChange:N=>e({margin:{...y,[le]:N}})}))));case"advanced":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Ut,{tab:"advanced",name:"animation",title:no("Animation","digiblocks"),initialOpen:!0},wp.element.createElement(bn,{label:no("Animation Effect","digiblocks"),value:v,options:se,onChange:N=>e({animation:N}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),v&&v!=="none"&&wp.element.createElement("div",{style:{marginTop:"10px"}},wp.element.createElement(Yk,{variant:"secondary",isSecondary:!0,onClick:ee,style:{width:"100%"}},no("Preview Animation","digiblocks")))),wp.element.createElement(Ut,{tab:"advanced",name:"visibility",title:no("Visibility","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control__help",style:{padding:"12px",backgroundColor:"#f0f6fc",border:"1px solid #c3ddfd",borderRadius:"4px",marginBottom:"16px"}},wp.element.createElement("strong",null,no("Editor Note:","digiblocks")),wp.element.createElement("br",null),no("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.","digiblocks")),wp.element.createElement(Pr,{label:no("Hide on Desktop","digiblocks"),checked:s.desktop,onChange:N=>e({visibility:{...s,desktop:N}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(Pr,{label:no("Hide on Tablet","digiblocks"),checked:s.tablet,onChange:N=>e({visibility:{...s,tablet:N}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(Pr,{label:no("Hide on Mobile","digiblocks"),checked:s.mobile,onChange:N=>e({visibility:{...s,mobile:N}}),__nextHasNoMarginBottom:!0})),wp.element.createElement(Ut,{tab:"advanced",name:"additional",title:no("Additional","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control html-anchor-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"html-anchor"},no("HTML anchor","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"html-anchor",value:P||"",onChange:N=>e({anchor:N.target.value}),"aria-describedby":"html-anchor-help",autoCapitalize:"none",autoComplete:"off"})),wp.element.createElement("p",{id:"html-anchor-help",className:"components-base-control__help"},no(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`,"digiblocks")," ",wp.element.createElement("a",{className:"components-external-link",href:"https://wordpress.org/documentation/article/page-jumps/",target:"_blank",rel:"external noreferrer noopener"},wp.element.createElement("span",{className:"components-external-link__contents"},no("Learn more about anchors","digiblocks")),wp.element.createElement("span",{className:"components-external-link__icon","aria-label":"(opens in a new tab)"},"\u2197")))),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"additional-css-classes"},no("Additional CSS class(es)","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"additional-css-classes",value:oe||"",onChange:N=>e({customClasses:N.target.value}),"aria-describedby":"additional-css-classes-help",autoComplete:"off"})),wp.element.createElement("p",{id:"additional-css-classes-help",className:"components-base-control__help"},no("Separate multiple classes with spaces.","digiblocks")))));default:return null}},be=Gk({className:`digiblocks-text ${o} ${oe||""}`,id:P||null});return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Jk,null,wp.element.createElement(o1,{tabs:ne,activeTab:Ce,onSelect:Z},Te())),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:J()}}),wp.element.createElement(Qk,{...be,tagName:x,value:l,onChange:N=>e({content:N}),placeholder:no("Start writing or type / to add blocks","digiblocks"),allowedFormats:["core/bold","core/italic","core/link","core/strikethrough","core/underline","core/text-color","core/code","core/superscript","core/subscript"]}))},Mg=i1;var{useBlockProps:l1,RichText:a1}=window.wp.blockEditor,n1=({attributes:te})=>{let{id:e,htmlTag:K,content:o,animation:P,hoverEffect:s,anchor:oe,customClasses:l}=te,$=["digiblocks-text",e,P!=="none"?`animate-${P}`:"",s!=="none"?`has-hover-${s}`:"",l||""].filter(Boolean).join(" "),x=l1.save({className:$,id:oe||null});return wp.element.createElement(a1.Content,{...x,tagName:K,value:o})},Dg=n1;var{__:Al}=window.wp.i18n,{registerBlockType:s1}=window.wp.blocks,{getBlockActiveStatus:r1}=window.wp.digiBlocks;s1("digiblocks/text",{apiVersion:2,title:digiBlocksData.blocks.text.title,category:"digiblocks",icon:{src:()=>{let{viewbox:te,path:e}=digiBlocksData.blocks.text.icon;return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${te}`,className:"digiblocks-editor-icons"},wp.element.createElement("path",{d:e}))}},description:digiBlocksData.blocks.text.description,keywords:[Al("text","digiblocks"),Al("paragraph","digiblocks"),Al("content","digiblocks")],supports:{inserter:!!r1("text"),html:!1,className:!1,customClassName:!1,anchor:!1},attributes:{id:{type:"string",default:""},anchor:{type:"string",default:""},visibility:{type:"object",default:{desktop:!1,tablet:!1,mobile:!1}},customClasses:{type:"string",default:""},content:{type:"string",default:Al("This is a powerful text block with advanced styling options.","digiblocks")},htmlTag:{type:"string",default:"p"},align:{type:"object",default:{desktop:"left",tablet:"left",mobile:"left"}},textColor:{type:"string",default:"#333333"},textHoverColor:{type:"string",default:""},backgroundColor:{type:"string",default:""},backgroundHoverColor:{type:"string",default:""},backgroundGradient:{type:"string",default:"none"},typography:{type:"object",default:{fontFamily:"",fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",fontWeight:"",fontStyle:"normal",textTransform:"",textDecoration:"",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}},textShadow:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.3)",horizontal:0,vertical:0,blur:0}},padding:{type:"object",default:{desktop:{top:0,right:0,bottom:0,left:0,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},margin:{type:"object",default:{desktop:{top:0,right:0,bottom:16,left:0,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},animation:{type:"string",default:"none"},borderStyle:{type:"string",default:"default"},borderRadius:{type:"object",default:{desktop:{top:0,right:0,bottom:0,left:0,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderWidth:{type:"object",default:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderColor:{type:"string",default:"#e0e0e0"},borderHoverColor:{type:"string",default:""},hoverEffect:{type:"string",default:"none"},boxShadow:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},boxShadowHover:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}}},example:{attributes:{content:Al("This is a powerful text block with advanced styling options. You can customize typography, colors, spacing, borders, shadows and add animations.","digiblocks"),textColor:"#2563eb",htmlTag:"h2"},viewportWidth:400},edit:Mg,save:Dg});})();
