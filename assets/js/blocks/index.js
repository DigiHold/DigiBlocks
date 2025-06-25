(()=>{var{__:ke}=window.wp.i18n,{useBlockProps:gp,useInnerBlocksProps:pp,InspectorControls:bp,PanelColorSettings:Dn,MediaUpload:Pn,MediaUploadCheck:Rn}=window.wp.blockEditor,{ToggleControl:Kt,SelectControl:Si,RangeControl:pl,Button:Jo,Tooltip:up,__experimentalToggleGroupControl:mp,__experimentalToggleGroupControlOption:ac}=window.wp.components,{useState:In,useEffect:Ln,useRef:hp}=window.wp.element,{useDispatch:fp,useSelect:nc}=window.wp.data,{createBlock:sc}=window.wp.blocks,{useBlockId:kp,getDimensionCSS:Pt,animations:bl,animationPreview:rc}=digi.utils,{tabIcons:da}=digi.icons,{ResponsiveControl:Xt,DimensionControl:ga,BoxShadowControl:vp,CustomTabPanel:xp,TabPanelBody:Oo,ResponsiveRangeControl:cc,ResponsiveButtonGroup:pa,GradientControl:yp}=digi.components,dc=[{name:"1-col",label:ke("1 Column","digiblocks"),icon:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"0 0 90 48"},wp.element.createElement("path",{d:"M88 48H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0h86c1.1 0 2 .9 2 2v44c0 1.1-.9 2-2 2z"})),columns:[100]},{name:"2-col-equal",label:ke("2 Columns Equal","digiblocks"),icon:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"0 0 90 48"},wp.element.createElement("path",{d:"M41.3 48H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0h39.2c1.1 0 2 .9 2 2v44c.1 1.1-.8 2-1.9 2zM88 48H48.7c-1.1 0-2-.9-2-2V2c0-1.1.9-2 2-2H88c1.1 0 2 .9 2 2v44c0 1.1-.9 2-2 2z"})),columns:[50,50]},{name:"3-col-equal",label:ke("3 Columns Equal","digiblocks"),icon:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"0 0 90 48"},wp.element.createElement("path",{d:"M26.2 48H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0h24.2c1.1 0 2 .9 2 2v44c.1 1.1-.9 2-2 2zM57.1 48H32.9c-1.1 0-2-.9-2-2V2c0-1.1.9-2 2-2h24.2c1.1 0 2 .9 2 2v44c0 1.1-.9 2-2 2zM88 48H63.8c-1.1 0-2-.9-2-2V2c0-1.1.9-2 2-2H88c1.1 0 2 .9 2 2v44c0 1.1-.9 2-2 2z"})),columns:[33.33,33.33,33.33]},{name:"4-col-equal",label:ke("4 Columns Equal","digiblocks"),icon:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"0 0 90 48"},wp.element.createElement("path",{d:"M19 48H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0h17c1.1 0 2 .9 2 2v44c0 1.1-.9 2-2 2zM42 48H25c-1.1 0-2-.9-2-2V2c0-1.1.9-2 2-2h17c1.1 0 2 .9 2 2v44c0 1.1-.9 2-2 2zM64.9 48H48c-1.1 0-2-.9-2-2V2c0-1.1.9-2 2-2h16.9c1.1 0 2 .9 2 2v44c.1 1.1-.8 2-2 2zM87.9 48H71c-1.1 0-2-.9-2-2V2c0-1.1.9-2 2-2h16.9c1.1 0 2 .9 2 2v44c.1 1.1-.9 2-2 2z"})),columns:[25,25,25,25]},{name:"1-3-col",label:ke("1/3 + 2/3","digiblocks"),icon:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"0 0 90 48"},wp.element.createElement("path",{d:"M24.1 48H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0h22c1.1 0 2 .9 2 2v44c.1 1.1-.8 2-1.9 2zM87.9 48H30.2c-1.1 0-2-.9-2-2V2c0-1.1.9-2 2-2h57.7c1.1 0 2 .9 2 2v44c.1 1.1-.9 2-2 2z"})),columns:[33.33,66.67]},{name:"3-1-col",label:ke("2/3 + 1/3","digiblocks"),icon:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"0 0 90 48"},wp.element.createElement("path",{d:"M60.6 48H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0h58.6c1.1 0 2 .9 2 2v44c0 1.1-.9 2-2 2zM87.9 48H66.7c-1.1 0-2-.9-2-2V2c0-1.1.9-2 2-2h21.2c1.1 0 2 .9 2 2v44c.1 1.1-.9 2-2 2z"})),columns:[66.67,33.33]},{name:"1-4-1-4-2-4-col",label:ke("1/4 + 1/4 + 2/4","digiblocks"),icon:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"0 0 90 48"},wp.element.createElement("path",{d:"M20.1 48H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0h18.1c1.1 0 2 .9 2 2v44c.1 1.1-.8 2-2 2zM44.6 48H26.5c-1.1 0-2-.9-2-2V2c0-1.1.9-2 2-2h18.1c1.1 0 2 .9 2 2v44c0 1.1-.9 2-2 2zM87.9 48h-37c-1.1 0-2-.9-2-2V2c0-1.1.9-2 2-2h37c1.1 0 2 .9 2 2v44c.1 1.1-.9 2-2 2z"})),columns:[25,25,50]},{name:"2-4-1-4-1-4-col",label:ke("2/4 + 1/4 + 1/4","digiblocks"),icon:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"0 0 90 48"},wp.element.createElement("path",{d:"M69.8 48h18.1c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2H69.8c-1.1 0-2 .9-2 2v44c0 1.1.9 2 2 2zM45.4 48h18.1c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2H45.4c-1.1 0-2 .9-2 2v44c0 1.1.9 2 2 2zM2 48h37c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2H2C.9 0 0 .9 0 2v44c0 1.1.9 2 2 2z"})),columns:[50,25,25]},{name:"1-4-2-4-1-4-col",label:ke("1/4 + 2/4 + 1/4","digiblocks"),icon:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"0 0 90 48"},wp.element.createElement("path",{d:"M69.8 48h18.1c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2H69.8c-1.1 0-2 .9-2 2v44c0 1.1.9 2 2 2zM2 48h18.1c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2H2C.9 0 0 .9 0 2v44c0 1.1.9 2 2 2zM26.4 48h37c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2h-37c-1.1 0-2 .9-2 2v44c0 1.1.9 2 2 2z"})),columns:[25,50,25]},{name:"5-col-equal",label:ke("5 Columns Equal","digiblocks"),icon:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"0 0 90 48"},wp.element.createElement("path",{d:"M20.3 48h12.6c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2H20.3c-1.1 0-2 .9-2 2v44c0 1.1.9 2 2 2zM38.7 48h12.6c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2H38.7c-1.1 0-2 .9-2 2v44c-.1 1.1.9 2 2 2zM57.1 48h12.6c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2H57.1c-1.1 0-2 .9-2 2v44c0 1.1.9 2 2 2zM75.4 48H88c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2H75.4c-1.1 0-2 .9-2 2v44c0 1.1.9 2 2 2zM2 48h12.6c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2H2C.9 0 0 .9 0 2v44c0 1.1.9 2 2 2z"})),columns:[20,20,20,20,20]},{name:"6-col-equal",label:ke("6 Columns Equal","digiblocks"),icon:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"0 0 90 48"},wp.element.createElement("path",{d:"M17.3 48H27c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2h-9.7c-1.1 0-2 .9-2 2v44c-.1 1.1.8 2 2 2zM32.4 48h9.7c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2h-9.7c-1.1 0-2 .9-2 2v44c0 1.1.9 2 2 2zM47.8 48h9.7c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2h-9.7c-1.1 0-2 .9-2 2v44c-.1 1.1.8 2 2 2zM62.9 48h9.7c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2h-9.7c-1.1 0-2 .9-2 2v44c-.1 1.1.8 2 2 2zM78.3 48H88c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2h-9.7c-1.1 0-2 .9-2 2v44c-.1 1.1.9 2 2 2zM2 48h9.7c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2H2C.9 0 0 .9 0 2v44c0 1.1.9 2 2 2z"})),columns:[16.67,16.67,16.67,16.67,16.67,16.67]},{name:"1-6-4-6-1-6-col",label:ke("1/6 + 4/6 + 1/6","digiblocks"),icon:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"0 0 90 48"},wp.element.createElement("path",{d:"M19.2 48h51.5c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2H19.2c-1.1 0-2 .9-2 2v44c0 1.1.9 2 2 2zM77.1 48H88c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2H77.1c-1.1 0-2 .9-2 2v44c-.1 1.1.8 2 2 2zM2 48h11.1c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2H2C.9 0 0 .9 0 2v44c0 1.1.9 2 2 2z"})),columns:[16.67,66.67,16.67]}],Cp=({attributes:ie,setAttributes:e,clientId:K})=>{let{flexWrap:o,id:O,anchor:a,visibility:le,customClasses:l,layout:_,contentLayout:y,contentWidth:$,contentMaxWidth:P,horizontalAlign:h,verticalAlign:s,heightType:z,minHeight:S,columnGap:C,rowGap:w,reverseColumnsMobile:T,stackOnTablet:U,stackOnMobile:L,overflowHidden:V,zIndex:Q,backgroundColor:be,backgroundGradient:N,backgroundImage:u,backgroundPosition:v,backgroundRepeat:I,backgroundSize:ne,backgroundVideo:Me,backgroundVideoFallbackImage:Le,backgroundOverlay:X,backgroundOverlayOpacity:H,backgroundOverlayBlendMode:Y,padding:W,margin:ce,borderStyle:ue,borderWidth:A,borderColor:J,borderRadius:me,boxShadow:oe,boxShadowHover:fe,animation:je}=ie;kp(O,K,e);let[te,to]=In(window.digi.responsiveState.activeDevice),[De,r]=In(()=>{if(window.digi.uiState){let f=window.digi.uiState.getActiveTab(K);if(f)return f}return"options"}),[D,xe]=In(!_),Pe=hp(null);Ln(()=>window.digi.responsiveState.subscribe(Ge=>{to(Ge)}),[]);let{isNested:Se}=nc(f=>{let{getBlockParentsByBlockName:Ge}=f("core/block-editor");return{isNested:Ge(K,"digiblocks/container").length>0}},[K]);Ln(()=>{e({isNested:Se})},[Se,e]);let{innerBlocks:Ue,hasChildBlocks:ee}=nc(f=>{let{getBlocks:Ge}=f("core/block-editor"),We=Ge(K);return{innerBlocks:We,hasChildBlocks:We.length>0}},[K]),{replaceInnerBlocks:Be}=fp("core/block-editor"),Xe=f=>{let Ge=dc.find(Ce=>Ce.name===f);if(!Ge)return;let We=Ue.map(Ce=>({clientId:Ce.clientId,attributes:Ce.attributes,innerBlocks:Ce.innerBlocks})),go=Ge.columns.length,t=We.length,b=[];if(Ge.columns.forEach((Ce,n)=>{if(n<t){let we=We[n];b.push(sc("digiblocks/column",{...we.attributes,width:{desktop:Ce,tablet:U?100:Ce,mobile:L?100:Ce}},[...we.innerBlocks]))}else b.push(sc("digiblocks/column",{id:`column-${O}-${n}`,width:{desktop:Ce,tablet:U?100:Ce,mobile:L?100:Ce}},[]))}),t>go&&go>0){let Ce=[];for(let n=go;n<t;n++)Ce.push(...We[n].innerBlocks);if(Ce.length>0){let n=b[b.length-1].innerBlocks;b[b.length-1].innerBlocks=[...n,...Ce]}}Be(K,b,!1),e({layout:f}),xe(!1)};Ln(()=>{if(je&&je!=="none"){let f=setTimeout(()=>{rc(O,je,bl,Pe)},100);return()=>clearTimeout(f)}},[je]);let q=()=>{if(!N.enable||!N.colors.length)return"";let f=N.colors.map(Ge=>`${Ge.color} ${Ge.position}%`).join(", ");return N.type==="radial"?`background-image: radial-gradient(circle at ${N.position}, ${f});`:`background-image: linear-gradient(${N.angle}deg, ${f});`},ye=[{label:ke("None","digiblocks"),value:"none"},...Object.keys(bl).map(f=>({label:f.replace(/-/g," ").replace(/\b\w/g,Ge=>Ge.toUpperCase()),value:f}))],qe=()=>{rc(O,je,bl,Pe)},E=[{label:ke("Top Left","digiblocks"),value:"top left"},{label:ke("Top Center","digiblocks"),value:"top center"},{label:ke("Top Right","digiblocks"),value:"top right"},{label:ke("Center Left","digiblocks"),value:"center left"},{label:ke("Center Center","digiblocks"),value:"center center"},{label:ke("Center Right","digiblocks"),value:"center right"},{label:ke("Bottom Left","digiblocks"),value:"bottom left"},{label:ke("Bottom Center","digiblocks"),value:"bottom center"},{label:ke("Bottom Right","digiblocks"),value:"bottom right"}],se=[{label:ke("No Repeat","digiblocks"),value:"no-repeat"},{label:ke("Repeat","digiblocks"),value:"repeat"},{label:ke("Repeat X","digiblocks"),value:"repeat-x"},{label:ke("Repeat Y","digiblocks"),value:"repeat-y"}],B=[{label:ke("Cover","digiblocks"),value:"cover"},{label:ke("Contain","digiblocks"),value:"contain"},{label:ke("Auto","digiblocks"),value:"auto"},{label:ke("100%","digiblocks"),value:"100%"}],c=[{label:ke("None","digiblocks"),value:"none"},{label:ke("Solid","digiblocks"),value:"solid"},{label:ke("Dashed","digiblocks"),value:"dashed"},{label:ke("Dotted","digiblocks"),value:"dotted"},{label:ke("Double","digiblocks"),value:"double"}],ge=[{label:ke("Normal","digiblocks"),value:"normal"},{label:ke("Multiply","digiblocks"),value:"multiply"},{label:ke("Screen","digiblocks"),value:"screen"},{label:ke("Overlay","digiblocks"),value:"overlay"},{label:ke("Darken","digiblocks"),value:"darken"},{label:ke("Lighten","digiblocks"),value:"lighten"},{label:ke("Color Dodge","digiblocks"),value:"color-dodge"},{label:ke("Color Burn","digiblocks"),value:"color-burn"},{label:ke("Hard Light","digiblocks"),value:"hard-light"},{label:ke("Soft Light","digiblocks"),value:"soft-light"},{label:ke("Difference","digiblocks"),value:"difference"},{label:ke("Exclusion","digiblocks"),value:"exclusion"},{label:ke("Hue","digiblocks"),value:"hue"},{label:ke("Saturation","digiblocks"),value:"saturation"},{label:ke("Color","digiblocks"),value:"color"},{label:ke("Luminosity","digiblocks"),value:"luminosity"}],M=[{name:"options",title:ke("Layout","digiblocks"),icon:da.optionsIcon},{name:"style",title:ke("Style","digiblocks"),icon:da.styleIcon},{name:"background",title:ke("Background","digiblocks"),icon:da.backgroundIcon},{name:"advanced",title:ke("Advanced","digiblocks"),icon:da.advancedIcon}],k=(f,Ge)=>{let We=p=>f&&f[p]&&(f[p].top!==void 0&&f[p].top!==""||f[p].right!==void 0&&f[p].right!==""||f[p].bottom!==void 0&&f[p].bottom!==""||f[p].left!==void 0&&f[p].left!==""),go;if(We(Ge))go=f[Ge];else if(Ge==="tablet"&&We("desktop"))go=f.desktop;else if(Ge==="mobile")if(We("tablet"))go=f.tablet;else if(We("desktop"))go=f.desktop;else return"";else return"";let t=(p,g)=>p===void 0||p===""?"0"+g:g==="px"&&parseFloat(p)<10?"10px":p+g,b=go.unit||"px",Ce=t(go.top,b),n=t(go.right,b),we=t(go.bottom,b),Ke=t(go.left,b);return`padding: ${Ce} ${n} ${we} ${Ke} !important;`},G=(f,Ge)=>f[Ge]&&f[Ge].value!==""?{value:f[Ge].value,unit:f[Ge].unit||"px"}:Ge==="tablet"?{value:f.desktop.value,unit:f.desktop.unit||"px"}:Ge==="mobile"?f.tablet&&f.tablet.value!==""?{value:f.tablet.value,unit:f.tablet.unit||"px"}:{value:f.desktop.value,unit:f.desktop.unit||"px"}:{value:0,unit:"px"},d=()=>{let f=te,Ge=k(W,f),We=k(W,"tablet"),go=k(W,"mobile"),t="";je&&je!=="none"&&bl[je]&&(t=bl[je].keyframes);let b="";be&&(b+=`background-color: ${be};`);let Ce=q();if(Ce&&(b+=Ce),u&&u.url){let Je=`url(${u.url})`;Ce?b=b.replace(/background-image: ([^;]+);/,`background-image: ${Je}, $1;`):b+=`background-image: ${Je};`,b+=`background-position: ${v};
            background-repeat: ${I};
            background-size: ${ne};`}let n="";X&&(n=`
            .${O}:before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: ${X};
                opacity: ${H};
                mix-blend-mode: ${Y};
                z-index: 1;
                pointer-events: none;
                border-radius: inherit;
            }
            .${O} > * {
                position: relative;
                z-index: 2;
            }`);let we="";oe&&oe.enable&&(we=`box-shadow: ${oe.horizontal}px ${oe.vertical}px ${oe.blur}px ${oe.spread}px ${oe.color};`);let Ke="";fe&&fe.enable&&(Ke=`box-shadow: ${fe.position==="inset"?"inset ":""}${fe.horizontal}px ${fe.vertical}px ${fe.blur}px ${fe.spread}px ${fe.color};`);let p="";z[f]==="full"?p="height: 100vh;":z[f]==="custom"&&(p=`min-height: ${S[f]}px !important;`);let g="";Se||(y==="full"?g="width: 100%;":g=`width: ${$[f]!==void 0&&$[f]!==""?$[f]:$.desktop}px;
				margin-left: auto;
				margin-right: auto;`);let He="";return Se||(y==="full"?He="max-width: 100%;":He=`max-width: ${P[f]!==void 0&&P[f]!==""?P[f]:P.desktop}%;`),`
            /* Container Block - ${O} */
            .${O} {
                position: relative;
                ${Ge}
				${Pt(ce,"margin",f)}
                width: 100%;
                ${p}
                ${b}
                ${ue!=="none"?`
                border-style: ${ue}!important;
				${Pt(A,"border-width",f,!0)}
                border-color: ${J}!important;`:""}
				${Pt(me,"border-radius",f)}
                ${we}
                ${V?"overflow: hidden;":""}
                ${Q?`z-index: ${Q};`:""}
                transition: all 0.3s ease;
            }
            
            /* Hover effects */
            .${O}:hover {
                ${Ke}
            }

			.${O} > .digiblocks-container-inner {
                display: flex;
				flex-wrap: ${o[f]};
                align-items: ${s[f]};
    			justify-content: ${h[f]};
				gap: ${G(w,f).value}${G(w,f).unit} ${G(C,f).value}${G(C,f).unit};
            }

			.${O}.alignfull > .digiblocks-container-inner {
				${Se?"":g}
				${Se?"":He}
            }
            
            ${n}
            
            /* Background video */
            .${O} > .digiblocks-bg-video-container {
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
            
            .${O} > .digiblocks-bg-video {
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
                .${O} {
                    ${We}
					${Pt(ce,"margin","tablet")}
					${z.tablet==="custom"?`min-height: ${S.tablet}px;`:""}
					${Pt(me,"border-radius","tablet")}
					${ue!=="none"?`${Pt(A,"border-width","tablet",!0)}`:""}
                }

				.${O} > .digiblocks-container-inner {
					${!Se&&y!=="full"?`
						width: ${$.tablet!==void 0&&$.tablet!==""?$.tablet:$.desktop}px;
						max-width: ${P.tablet!==void 0&&P.tablet!==""?P.tablet:P.desktop}%;
					`:""}
					flex-wrap: ${o.tablet};
					align-items: ${s.tablet};
					justify-content: ${h.tablet};
					gap: ${G(w,"tablet").value}${G(w,"tablet").unit} ${G(C,"tablet").value}${G(C,"tablet").unit};
                    ${U?"flex-direction: column;":""}
				}

				${U?`
					.${O} > .digiblocks-container-inner .digiblocks-column {
						width: 100%;
					}`:""}
            }
            
            /* Mobile styles */
            @media (max-width: 767px) {
                .${O} {
                    ${go}
					${Pt(ce,"margin","mobile")}
                    ${z.mobile==="custom"?`min-height: ${S.mobile}px;`:""}
					${Pt(me,"border-radius","mobile")}
                    ${ue!=="none"?`border-width: ${A.mobile.top}${A.mobile.unit} ${A.mobile.right}${A.mobile.unit} ${A.mobile.bottom}${A.mobile.unit} ${A.mobile.left}${A.mobile.unit};`:""}
                }

				.${O} > .digiblocks-container-inner {
					${!Se&&y!=="full"?`
						width: ${$.mobile!==void 0&&$.mobile!==""?$.mobile:$.tablet!==void 0&&$.tablet!==""?$.tablet:$.desktop}px;
						max-width: ${P.mobile!==void 0&&P.mobile!==""?P.mobile:P.tablet!==void 0&&P.tablet!==""?P.tablet:P.desktop}%;
					`:""}
					flex-wrap: ${o.mobile};
					align-items: ${s.mobile};
					justify-content: ${h.mobile};
					gap: ${G(w,"mobile").value}${G(w,"mobile").unit} ${G(C,"mobile").value}${G(C,"mobile").unit};
                    ${L?"flex-direction: column;":""}
                    ${T?"flex-direction: column-reverse;":""}
				}

				${L?`
					.${O} > .digiblocks-container-inner .digiblocks-column {
						width: 100%;
					}`:""}
            }
            
            /* Animation keyframes */
            ${t}

			/* Visibility Controls */
			${le.desktop?`
				@media (min-width: 992px) {
					.${O} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${le.tablet?`
				@media (min-width: 768px) and (max-width: 991px) {
					.${O} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${le.mobile?`
				@media (max-width: 767px) {
					.${O} {
						opacity: 0.5 !important;
					}
				}
			`:""}
        `},re=gp({className:`digiblocks-container ${Se?"":"alignfull"} ${O} ${l||""}`,id:a||null}),m=pp({className:"digiblocks-container-inner"},{allowedBlocks:D?[]:["digiblocks/column"],orientation:"horizontal",renderAppender:ee?void 0:window.wp.blockEditor.ButtonBlockAppender}),he=()=>{switch(De){case"options":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Oo,{tab:"options",name:"layout",title:ke("Container Layout","digiblocks"),initialOpen:!0},wp.element.createElement(Jo,{variant:"secondary",onClick:()=>xe(!0),className:"digiblocks-change-layout-button"},ke(_?"Change Layout":"Select Layout","digiblocks")),!Se&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(mp,{label:ke("Layout","digiblocks"),value:y,onChange:f=>e({contentLayout:f}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(ac,{value:"boxed",label:ke("Boxed","digiblocks")}),wp.element.createElement(ac,{value:"full",label:ke("Full Width","digiblocks")})),y==="boxed"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Xt,{label:ke("Content Width (px)","digiblocks")},wp.element.createElement(pl,{value:$[te]!==""?$[te]:te==="desktop"?digiBlocksData.contentWidth||1200:$.desktop||digiBlocksData.contentWidth||1200,onChange:f=>e({contentWidth:{...$,[te]:f}}),min:300,max:2e3,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(Xt,{label:ke("Content Max Width (%)","digiblocks")},wp.element.createElement(pl,{value:P[te]!==""?P[te]:te==="desktop"?digiBlocksData.contentMaxWidth||90:P.desktop||digiBlocksData.contentMaxWidth||90,onChange:f=>e({contentMaxWidth:{...P,[te]:f}}),min:0,max:100,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})))),wp.element.createElement(pa,{label:ke("Flex Wrap","digiblocks"),value:o,onChange:f=>e({flexWrap:f}),options:[{label:ke("No Wrap","digiblocks"),value:"nowrap"},{label:ke("Wrap","digiblocks"),value:"wrap"}]}),wp.element.createElement(pa,{label:ke("Height","digiblocks"),value:z,onChange:f=>e({heightType:f}),options:[{label:ke("Auto","digiblocks"),value:"auto"},{label:ke("Full","digiblocks"),value:"full"},{label:ke("Custom","digiblocks"),value:"custom"}]}),z[te]==="custom"&&wp.element.createElement(Xt,{label:ke("Min Height","digiblocks")},wp.element.createElement(pl,{value:S[te],onChange:f=>e({minHeight:{...S,[te]:f}}),min:0,max:1e3,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(pa,{label:ke("Horizontal Align","digiblocks"),value:h,onChange:f=>e({horizontalAlign:f}),options:[{label:ke("Left","digiblocks"),value:"flex-start"},{label:ke("Center","digiblocks"),value:"center"},{label:ke("Right","digiblocks"),value:"flex-end"},{label:ke("Space","digiblocks"),value:"space-between"}]}),wp.element.createElement(pa,{label:ke("Vertical Align","digiblocks"),value:s,onChange:f=>e({verticalAlign:f}),options:[{label:ke("Top","digiblocks"),value:"flex-start"},{label:ke("Middle","digiblocks"),value:"center"},{label:ke("Bottom","digiblocks"),value:"flex-end"}]})),wp.element.createElement(Oo,{tab:"layout",name:"spacing",title:ke("Spacing","digiblocks"),initialOpen:!1},wp.element.createElement(cc,{label:ke("Column Gap","digiblocks"),value:C,onChange:f=>e({columnGap:f}),units:[{label:"px",value:"px"},{label:"%",value:"%"},{label:"em",value:"em"},{label:"rem",value:"rem"}],defaultUnit:"px",min:0,max:100,step:1}),wp.element.createElement(cc,{label:ke("Row Gap","digiblocks"),value:w,onChange:f=>e({rowGap:f}),units:[{label:"px",value:"px"},{label:"em",value:"em"},{label:"rem",value:"rem"}],defaultUnit:"px",min:0,max:100,step:1}),wp.element.createElement(Xt,{label:ke("Padding","digiblocks")},wp.element.createElement(ga,{values:W[te],onChange:f=>e({padding:{...W,[te]:f}})})),wp.element.createElement(Xt,{label:ke("Margin","digiblocks")},wp.element.createElement(ga,{values:ce[te],onChange:f=>e({margin:{...ce,[te]:f}})}))),wp.element.createElement(Oo,{tab:"layout",name:"responsive",title:ke("Responsive","digiblocks"),initialOpen:!1},wp.element.createElement(Kt,{label:ke("Stack on Tablet","digiblocks"),checked:U,onChange:f=>e({stackOnTablet:f}),help:ke("Stack columns vertically on tablet devices.","digiblocks"),__nextHasNoMarginBottom:!0}),wp.element.createElement(Kt,{label:ke("Stack on Mobile","digiblocks"),checked:L,onChange:f=>e({stackOnMobile:f}),help:ke("Stack columns vertically on mobile devices.","digiblocks"),__nextHasNoMarginBottom:!0}),wp.element.createElement(Kt,{label:ke("Reverse Columns on Mobile","digiblocks"),checked:T,onChange:f=>e({reverseColumnsMobile:f}),help:ke("Reverse the order of columns on mobile devices.","digiblocks"),__nextHasNoMarginBottom:!0})),wp.element.createElement(Oo,{tab:"layout",name:"visibility",title:ke("Visibility","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control__help",style:{padding:"12px",backgroundColor:"#f0f6fc",border:"1px solid #c3ddfd",borderRadius:"4px",marginBottom:"16px"}},wp.element.createElement("strong",null,ke("Editor Note:","digiblocks")),wp.element.createElement("br",null),ke("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.","digiblocks")),wp.element.createElement(Kt,{label:ke("Hide on Desktop","digiblocks"),checked:le.desktop,onChange:f=>e({visibility:{...le,desktop:f}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(Kt,{label:ke("Hide on Tablet","digiblocks"),checked:le.tablet,onChange:f=>e({visibility:{...le,tablet:f}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(Kt,{label:ke("Hide on Mobile","digiblocks"),checked:le.mobile,onChange:f=>e({visibility:{...le,mobile:f}}),__nextHasNoMarginBottom:!0})));case"style":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Oo,{tab:"style",name:"borders",title:ke("Borders & Radius","digiblocks"),initialOpen:!0},wp.element.createElement(Si,{label:ke("Border Style","digiblocks"),value:ue,options:c,onChange:f=>e({borderStyle:f}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),ue!=="none"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Xt,{label:ke("Border Width","digiblocks")},wp.element.createElement(ga,{values:A[te],onChange:f=>e({borderWidth:{...A,[te]:f}})})),wp.element.createElement(Dn,{title:"",enableAlpha:!0,colorSettings:[{value:J,onChange:f=>e({borderColor:f}),label:ke("Border Color","digiblocks")}]})),wp.element.createElement(Xt,{label:ke("Border Radius","digiblocks")},wp.element.createElement(ga,{values:me[te],onChange:f=>e({borderRadius:{...me,[te]:f}}),units:[{label:"px",value:"px"},{label:"%",value:"%"},{label:"em",value:"em"}]})),wp.element.createElement(vp,{normalValue:oe,hoverValue:fe,onNormalChange:f=>e({boxShadow:f}),onHoverChange:f=>e({boxShadowHover:f})})),wp.element.createElement(Oo,{tab:"style",name:"advanced",title:ke("Advanced","digiblocks"),initialOpen:!1},wp.element.createElement(Kt,{label:ke("Overflow Hidden","digiblocks"),checked:V,onChange:f=>e({overflowHidden:f}),help:ke("Hide content that overflows the container boundaries.","digiblocks"),__nextHasNoMarginBottom:!0}),wp.element.createElement(pl,{label:ke("Z-Index","digiblocks"),value:Q,onChange:f=>e({zIndex:f}),min:-99,max:99,step:1,allowReset:!0,resetFallbackValue:0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})));case"background":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Oo,{tab:"background",name:"background",title:ke("Background","digiblocks"),initialOpen:!0},wp.element.createElement(Dn,{title:ke("Background Color","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:be,onChange:f=>e({backgroundColor:f}),label:ke("Background Color","digiblocks")}]}),wp.element.createElement("div",{className:"digiblocks-media-control"},wp.element.createElement("p",{className:"components-base-control__label"},ke("Background Image","digiblocks")),wp.element.createElement(Rn,null,wp.element.createElement(Pn,{onSelect:f=>{e({backgroundImage:{url:f.url,id:f.id,alt:f.alt||"",size:f.sizes?.full?.url?"full":""}})},allowedTypes:["image"],value:u?.id,render:({open:f})=>wp.element.createElement("div",{className:"digiblocks-media-upload-wrapper"},u?.url?wp.element.createElement("div",{className:"digiblocks-media-preview"},wp.element.createElement("img",{src:u.url,alt:u.alt||""}),wp.element.createElement("div",{className:"digiblocks-media-controls"},wp.element.createElement(Jo,{isPrimary:!0,onClick:f},wp.element.createElement("span",{class:"dashicon dashicons dashicons-edit"})),wp.element.createElement(Jo,{isDestructive:!0,onClick:()=>e({backgroundImage:{url:"",id:0,alt:"",size:""}})},wp.element.createElement("span",{class:"dashicon dashicons dashicons-trash"})))):wp.element.createElement(Jo,{className:"digiblocks-media-upload-button",isPrimary:!0,onClick:f},ke("Select Image","digiblocks")))}))),u?.url&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Si,{label:ke("Background Position","digiblocks"),value:v,options:E,onChange:f=>e({backgroundPosition:f}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Si,{label:ke("Background Repeat","digiblocks"),value:I,options:se,onChange:f=>e({backgroundRepeat:f}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Si,{label:ke("Background Size","digiblocks"),value:ne,options:B,onChange:f=>e({backgroundSize:f}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}))),wp.element.createElement(Oo,{tab:"background",name:"gradient",title:ke("Background Gradient","digiblocks"),initialOpen:!1},wp.element.createElement(yp,{value:N,onChange:f=>e({backgroundGradient:f})})),wp.element.createElement(Oo,{tab:"background",name:"backgroundVideo",title:ke("Background Video","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"digiblocks-media-control"},wp.element.createElement("p",{className:"components-base-control__label"},ke("Background Video","digiblocks")),wp.element.createElement(Rn,null,wp.element.createElement(Pn,{onSelect:f=>{e({backgroundVideo:{url:f.url,id:f.id}})},allowedTypes:["video"],value:Me?.id,render:({open:f})=>wp.element.createElement("div",{className:"digiblocks-media-upload-wrapper"},Me?.url?wp.element.createElement("div",{className:"digiblocks-media-preview"},wp.element.createElement("video",{controls:!0},wp.element.createElement("source",{src:Me.url}),ke("Your browser does not support the video tag.","digiblocks")),wp.element.createElement("div",{className:"digiblocks-media-controls"},wp.element.createElement(Jo,{isPrimary:!0,onClick:f},wp.element.createElement("span",{class:"dashicon dashicons dashicons-edit"})),wp.element.createElement(Jo,{isDestructive:!0,onClick:()=>e({backgroundVideo:{url:"",id:0}})},wp.element.createElement("span",{class:"dashicon dashicons dashicons-trash"})))):wp.element.createElement(Jo,{className:"digiblocks-media-upload-button",isPrimary:!0,onClick:f},ke("Select Video","digiblocks")))}))),Me?.url&&wp.element.createElement("div",{className:"digiblocks-media-control"},wp.element.createElement("p",{className:"components-base-control__label"},ke("Video Fallback Image","digiblocks")),wp.element.createElement(Rn,null,wp.element.createElement(Pn,{onSelect:f=>{e({backgroundVideoFallbackImage:{url:f.url,id:f.id,alt:f.alt||""}})},allowedTypes:["image"],value:Le?.id,render:({open:f})=>wp.element.createElement("div",{className:"digiblocks-media-upload-wrapper"},Le?.url?wp.element.createElement("div",{className:"digiblocks-media-preview"},wp.element.createElement("img",{src:Le.url,alt:Le.alt||""}),wp.element.createElement("div",{className:"digiblocks-media-controls"},wp.element.createElement(Jo,{isPrimary:!0,onClick:f},wp.element.createElement("span",{class:"dashicon dashicons dashicons-edit"})),wp.element.createElement(Jo,{isDestructive:!0,onClick:()=>e({backgroundVideoFallbackImage:{url:"",id:0,alt:""}})},wp.element.createElement("span",{class:"dashicon dashicons dashicons-trash"})))):wp.element.createElement(Jo,{className:"digiblocks-media-upload-button",isPrimary:!0,onClick:f},ke("Select Fallback Image","digiblocks")))})))),wp.element.createElement(Oo,{tab:"background",name:"overlay",title:ke("Background Overlay","digiblocks"),initialOpen:!1},wp.element.createElement(Dn,{title:ke("Overlay Color","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:X,onChange:f=>e({backgroundOverlay:f}),label:ke("Overlay Color","digiblocks")}]}),X&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(pl,{label:ke("Overlay Opacity","digiblocks"),value:H,onChange:f=>e({backgroundOverlayOpacity:f}),min:0,max:1,step:.01,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Si,{label:ke("Blend Mode","digiblocks"),value:Y,options:ge,onChange:f=>e({backgroundOverlayBlendMode:f}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}))));case"advanced":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Oo,{tab:"style",name:"animation",title:ke("Animation","digiblocks"),initialOpen:!0},wp.element.createElement(Si,{label:ke("Animation Effect","digiblocks"),value:je,options:ye,onChange:f=>e({animation:f}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),je&&je!=="none"&&wp.element.createElement("div",{style:{marginTop:"10px"}},wp.element.createElement(Jo,{variant:"secondary",isSecondary:!0,onClick:qe,style:{width:"100%"}},ke("Preview Animation","digiblocks")))),wp.element.createElement(Oo,{tab:"advanced",name:"additional",title:ke("Additional","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control html-anchor-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"html-anchor"},ke("HTML anchor","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"html-anchor",value:a||"",onChange:f=>e({anchor:f.target.value}),"aria-describedby":"html-anchor-help",autoCapitalize:"none",autoComplete:"off"})),wp.element.createElement("p",{id:"html-anchor-help",className:"components-base-control__help"},ke(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`,"digiblocks")," ",wp.element.createElement("a",{className:"components-external-link",href:"https://wordpress.org/documentation/article/page-jumps/",target:"_blank",rel:"external noreferrer noopener"},wp.element.createElement("span",{className:"components-external-link__contents"},ke("Learn more about anchors","digiblocks")),wp.element.createElement("span",{className:"components-external-link__icon","aria-label":"(opens in a new tab)"},"\u2197")))),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"additional-css-classes"},ke("Additional CSS class(es)","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"additional-css-classes",value:l||"",onChange:f=>e({customClasses:f.target.value}),"aria-describedby":"additional-css-classes-help",autoComplete:"off"})),wp.element.createElement("p",{id:"additional-css-classes-help",className:"components-base-control__help"},ke("Separate multiple classes with spaces.","digiblocks")))));default:return null}},j=()=>wp.element.createElement("div",{className:"digiblocks-layout-selector"},wp.element.createElement("h2",null,ke("Select a Layout","digiblocks")),wp.element.createElement("div",{className:"digiblocks-layout-grid"},dc.map(f=>wp.element.createElement(up,{text:f.label,key:f.name},wp.element.createElement("div",{className:"digiblocks-layout-option",onClick:()=>Xe(f.name),"aria-label":f.label},wp.element.createElement("div",{className:"digiblocks-layout-icon"},f.icon),wp.element.createElement("span",{className:"screen-reader-text"},f.label)))))),Ne=()=>Me?.url?wp.element.createElement("div",{className:"digiblocks-bg-video-container"},wp.element.createElement("video",{className:"digiblocks-bg-video",autoPlay:!0,muted:!0,loop:!0,playsInline:!0,poster:Le?.url||""},wp.element.createElement("source",{src:Me.url,type:"video/mp4"}))):null;return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(bp,null,wp.element.createElement(xp,{tabs:M,activeTab:De,onSelect:r,customClass:"four"},he())),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:d()}}),wp.element.createElement("div",{...re},Me?.url&&wp.element.createElement(Ne,null),D?wp.element.createElement(j,null):wp.element.createElement("div",{...m})))},gc=Cp;var{__:F0}=window.wp.i18n,{useBlockProps:Sp,useInnerBlocksProps:$p}=window.wp.blockEditor,_p=({attributes:ie})=>{let{isNested:e,id:K,anchor:o,customClasses:O,backgroundVideo:a,backgroundVideoFallbackImage:le,animation:l}=ie,_=`digiblocks-container ${e?"":"alignfull"} ${K} ${O||""}${l!=="none"?` animate-${l}`:""}`,y=Sp.save({className:_,id:o||null}),$=$p.save({className:"digiblocks-container-inner"});return wp.element.createElement("div",{...y},a&&a.url&&wp.element.createElement("div",{className:"digiblocks-bg-video-container"},wp.element.createElement("video",{className:"digiblocks-bg-video",autoPlay:!0,muted:!0,loop:!0,playsInline:!0,poster:le?.url||""},wp.element.createElement("source",{src:a.url,type:"video/mp4"}))),wp.element.createElement("div",{...$}))},pc=_p;var{__:ul}=window.wp.i18n,{registerBlockType:Bp}=window.wp.blocks,{getBlockActiveStatus:Tp}=window.wp.digiBlocks;Bp("digiblocks/container",{apiVersion:2,title:digiBlocksData.blocks.container.title,category:"digiblocks",icon:{src:()=>{let{viewbox:ie,path:e}=digiBlocksData.blocks.container.icon;return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${ie}`,className:"digiblocks-editor-icons"},wp.element.createElement("path",{d:e}))}},description:digiBlocksData.blocks.container.description,keywords:[ul("container","digiblocks"),ul("section","digiblocks"),ul("row","digiblocks"),ul("layout","digiblocks"),ul("columns","digiblocks")],supports:{inserter:!!Tp("container"),html:!1,className:!1,customClassName:!1,anchor:!1},attributes:{isNested:{type:"boolean",default:!1},id:{type:"string",default:""},visibility:{type:"object",default:{desktop:!1,tablet:!1,mobile:!1}},flexWrap:{type:"object",default:{desktop:"nowrap",tablet:"nowrap",mobile:"nowrap"}},anchor:{type:"string",default:""},customClasses:{type:"string",default:""},layout:{type:"string",default:""},contentLayout:{type:"string",default:"boxed"},contentWidth:{type:"object",default:{desktop:parseInt(digiBlocksData.contentWidth)||1200,tablet:"",mobile:""}},contentMaxWidth:{type:"object",default:{desktop:parseInt(digiBlocksData.contentMaxWidth)||90,tablet:"",mobile:""}},heightType:{type:"object",default:{desktop:"auto",tablet:"auto",mobile:"auto"}},horizontalAlign:{type:"object",default:{desktop:"center",tablet:"center",mobile:"center"}},verticalAlign:{type:"object",default:{desktop:"center",tablet:"center",mobile:"center"}},minHeight:{type:"object",default:{desktop:0,tablet:0,mobile:0}},columnGap:{type:"object",default:{desktop:{value:20,unit:"px"},tablet:{value:"",unit:"px"},mobile:{value:"",unit:"px"}}},rowGap:{type:"object",default:{desktop:{value:20,unit:"px"},tablet:{value:"",unit:"px"},mobile:{value:"",unit:"px"}}},reverseColumnsMobile:{type:"boolean",default:!1},stackOnTablet:{type:"boolean",default:!1},stackOnMobile:{type:"boolean",default:!0},overflowHidden:{type:"boolean",default:!1},zIndex:{type:"number",default:0},backgroundColor:{type:"string",default:""},backgroundGradient:{type:"object",default:{enable:!1,type:"linear",angle:90,position:"center center",colors:[{color:"#667eea",position:0},{color:"#764ba2",position:100}]}},backgroundImage:{type:"object",default:{url:"",id:0,alt:"",size:""}},backgroundPosition:{type:"string",default:"center center"},backgroundRepeat:{type:"string",default:"no-repeat"},backgroundSize:{type:"string",default:"cover"},backgroundVideo:{type:"object",default:{url:"",id:0,alt:"",size:""}},backgroundVideoFallbackImage:{type:"object",default:{url:"",id:0,alt:"",size:""}},backgroundOverlay:{type:"string",default:""},backgroundOverlayOpacity:{type:"number",default:.7},backgroundOverlayBlendMode:{type:"string",default:"normal"},padding:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},margin:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderStyle:{type:"string",default:"none"},borderWidth:{type:"object",default:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderColor:{type:"string",default:"#e0e0e0"},borderRadius:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},boxShadow:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},boxShadowHover:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},animation:{type:"string",default:"none"}},example:{attributes:{layout:"",backgroundColor:"#f8f9fa",padding:{desktop:{top:20,right:20,bottom:20,left:20,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},innerBlocks:[],viewportWidth:500},edit:gc,save:pc});var{__:io}=window.wp.i18n,{useBlockProps:Np,RichText:bc,InspectorControls:Hp,PanelColorSettings:nt}=window.wp.blockEditor,{SelectControl:uc,RangeControl:zp,ToggleControl:ba,Button:$i,Tooltip:ua,__experimentalToggleGroupControl:mc,__experimentalToggleGroupControlOption:ma,TabPanel:Mp}=window.wp.components,{useState:At,useEffect:hc,useRef:Dp}=window.wp.element,{useBlockId:Pp,animations:ml,animationPreview:fc}=digi.utils,{tabIcons:On}=digi.icons,{ResponsiveControl:hl,DimensionControl:ha,TypographyControl:kc,BoxShadowControl:Rp,CustomTabPanel:Ip,TabPanelBody:ei}=digi.components,Lp=({attributes:ie,setAttributes:e,clientId:K})=>{let{id:o,anchor:O,visibility:a,customClasses:le,items:l,titleColor:_,titleHoverColor:y,titleActiveColor:$,backgroundColor:P,backgroundHoverColor:h,backgroundActiveColor:s,contentColor:z,contentHoverColor:S,borderColor:C,borderHoverColor:w,borderRadius:T,borderWidth:U,borderStyle:L,boxShadow:V,boxShadowHover:Q,padding:be,margin:N,titleTypography:u,contentTypography:v,iconPosition:I,iconColor:ne,iconHoverColor:Me,iconActiveColor:Le,iconSize:X,animation:H,allowMultipleOpen:Y,iconType:W}=ie;Pp(o,K,e);let[ce,ue]=At(window.digi.responsiveState.activeDevice);hc(()=>window.digi.responsiveState.subscribe(re=>{ue(re)}),[]);let[A,J]=At(()=>{if(window.digi.uiState){let d=window.digi.uiState.getActiveTab(K);if(d)return d}return"options"}),[me,oe]=At("normal"),[fe,je]=At("normal"),[te,to]=At("normal"),[De,r]=At("normal"),[D,xe]=At("normal"),Pe=()=>{let d=[...l,{id:`item-${l.length+1}-${Date.now().toString(36)}`,title:io("New Accordion Item","digiblocks"),content:io("Add your content here.","digiblocks"),isOpen:!1}];e({items:d})},Se=d=>{let re=[...l];re.splice(d,1),e({items:re})},Ue=(d,re)=>{let x=[...l];x[re].title=d,e({items:x})},ee=(d,re)=>{let x=[...l];x[re].content=d,e({items:x})},Be=d=>{let re=[...l];Y||re.forEach((x,m)=>{m!==d&&(re[m].isOpen=!1)}),re[d].isOpen=!re[d].isOpen,e({items:re})},Xe=d=>{if(d===0)return;let re=[...l],x=re[d];re[d]=re[d-1],re[d-1]=x,e({items:re})},q=d=>{if(d===l.length-1)return;let re=[...l],x=re[d];re[d]=re[d+1],re[d+1]=x,e({items:re})},ye=d=>{let re=l[d],x=Date.now(),m={...re,id:`accordion-item-${K.substr(0,8)}-${x}`,isOpen:!1},he=[...l];he.splice(d+1,0,m),e({items:he})},qe=[{label:io("None","digiblocks"),value:"none"},{label:io("Solid","digiblocks"),value:"solid"},{label:io("Dotted","digiblocks"),value:"dotted"},{label:io("Dashed","digiblocks"),value:"dashed"},{label:io("Double","digiblocks"),value:"double"},{label:io("Groove","digiblocks"),value:"groove"},{label:io("Inset","digiblocks"),value:"inset"},{label:io("Outset","digiblocks"),value:"outset"},{label:io("Ridge","digiblocks"),value:"ridge"}],E=[{label:io("None","digiblocks"),value:"none"},...Object.keys(ml).map(d=>({label:d.replace(/-/g," ").replace(/\b\w/g,re=>re.toUpperCase()),value:d}))],se=Dp(null);hc(()=>{if(H&&H!=="none"){let d=setTimeout(()=>{fc(o,H,ml,se)},100);return()=>clearTimeout(d)}},[H]);let B=()=>{fc(o,H,ml,se)},c=[{name:"options",title:io("Options","digiblocks"),icon:On.optionsIcon},{name:"style",title:io("Style","digiblocks"),icon:On.styleIcon},{name:"advanced",title:io("Advanced","digiblocks"),icon:On.advancedIcon}],ge=d=>{let re=X[ce]||16;return W==="plusMinus"?wp.element.createElement("svg",{width:re,height:re,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},wp.element.createElement("path",{d:d?"M19 13H5v-2h14v2z":"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"})):W==="arrowUpDown"?wp.element.createElement("svg",{width:re,height:re,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},wp.element.createElement("path",{d:d?"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z":"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z"})):null},M=()=>{let d=window.digi.responsiveState.activeDevice,re="";if(L&&L!=="none"){let We=U&&U[d]?U[d]:{top:1,right:1,bottom:1,left:1,unit:"px"},go=T&&T[d]?T[d]:{top:8,right:8,bottom:8,left:8,unit:"px"};re=`
                border-style: ${L};
                border-color: ${C||"#e0e0e0"};
                border-width: ${We.top}${We.unit} ${We.right}${We.unit} ${We.bottom}${We.unit} ${We.left}${We.unit};
                border-radius: ${go.top}${go.unit} ${go.right}${go.unit} ${go.bottom}${go.unit} ${go.left}${go.unit};
            `}else re="border-style: none;";let x="box-shadow: none;";V&&V.enable&&(x=`box-shadow: ${V.position==="inset"?"inset ":""}${V.horizontal}px ${V.vertical}px ${V.blur}px ${V.spread}px ${V.color};`);let m="";Q&&Q.enable&&(m=`box-shadow: ${Q.position==="inset"?"inset ":""}${Q.horizontal}px ${Q.vertical}px ${Q.blur}px ${Q.spread}px ${Q.color};`);let he=`padding: ${be[d].top}${be[d].unit} ${be[d].right}${be[d].unit} ${be[d].bottom}${be[d].unit} ${be[d].left}${be[d].unit};`,j=`margin: ${N[d].top}${N[d].unit} ${N[d].right}${N[d].unit} ${N[d].bottom}${N[d].unit} ${N[d].left}${N[d].unit};`,Ne="";u&&(u.fontFamily&&(Ne+=`font-family: ${u.fontFamily};`),u.fontSize&&u.fontSize[d]&&(Ne+=`font-size: ${u.fontSize[d]}${u.fontSizeUnit||"px"};`),u.fontWeight&&(Ne+=`font-weight: ${u.fontWeight};`),u.fontStyle&&(Ne+=`font-style: ${u.fontStyle};`),u.textTransform&&(Ne+=`text-transform: ${u.textTransform};`),u.textDecoration&&(Ne+=`text-decoration: ${u.textDecoration};`),u.lineHeight&&u.lineHeight[d]&&(Ne+=`line-height: ${u.lineHeight[d]}${u.lineHeightUnit||"em"};`),u.letterSpacing&&u.letterSpacing[d]&&(Ne+=`letter-spacing: ${u.letterSpacing[d]}${u.letterSpacingUnit||"px"};`));let f="";v&&(v.fontFamily&&(f+=`font-family: ${v.fontFamily};`),v.fontSize&&v.fontSize[d]&&(f+=`font-size: ${v.fontSize[d]}${v.fontSizeUnit||"px"};`),v.fontWeight&&(f+=`font-weight: ${v.fontWeight};`),v.fontStyle&&(f+=`font-style: ${v.fontStyle};`),v.textTransform&&(f+=`text-transform: ${v.textTransform};`),v.textDecoration&&(f+=`text-decoration: ${v.textDecoration};`),v.lineHeight&&v.lineHeight[d]&&(f+=`line-height: ${v.lineHeight[d]}${v.lineHeightUnit||"em"};`),v.letterSpacing&&v.letterSpacing[d]&&(f+=`letter-spacing: ${v.letterSpacing[d]}${v.letterSpacingUnit||"px"};`));let Ge="";return H&&H!=="none"&&ml[H]&&(Ge=ml[H].keyframes),`
            /* Accordion item */
            .${o} .digiblocks-accordion-item {
                overflow: hidden;
                background-color: ${P||"#ffffff"};
                ${re}
                ${x}
				${j}
                transition: all 0.3s ease;
            }

			/* Hover effects */
            .${o} .digiblocks-accordion-item:hover {
                ${h?`background-color: ${h};`:""}
                ${w?`border-color: ${w};`:""}
				${Q&&Q.enable?m:""}
            }
            
            /* Accordion header */
            .${o} .digiblocks-accordion-header {
                position: relative;
                cursor: pointer;
                ${he}
                display: flex;
                align-items: center;
                justify-content: space-between;
				gap: .75rem;
                ${I==="left"?"flex-direction: row-reverse;":""}
                ${I==="left"?"justify-content: flex-end;":""}
                transition: background-color 0.3s ease;
            }
            
            /* Accordion title */
            .${o} .digiblocks-accordion-title {
                margin: 0;
                color: ${_||"#333333"};
                flex: 1;
                ${Ne}
                transition: color 0.3s ease;
            }
            
            /* Hover effects for title */
            .${o} .digiblocks-accordion-header:hover .digiblocks-accordion-title {
                ${y?`color: ${y};`:""}
            }
            
            /* Accordion title active state */
            .${o} .digiblocks-accordion-item.is-active .digiblocks-accordion-title {
                color: ${$||"#1e73be"};
            }
            
            /* Accordion icon */
            .${o} .digiblocks-accordion-icon {
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            /* SVG icon fill color */
            .${o} .digiblocks-accordion-icon svg {
                fill: ${ne||"#333333"};
                width: ${X[d]}px;
                height: ${X[d]}px;
                transition: transform 0.3s ease, fill 0.3s ease;
            }
            
            /* Hover effects for icon */
            .${o} .digiblocks-accordion-header:hover .digiblocks-accordion-icon svg {
                ${Me?`fill: ${Me};`:""}
            }
            
            /* Active icon color */
            .${o} .digiblocks-accordion-item.is-active .digiblocks-accordion-icon svg {
                fill: ${Le||"#1e73be"};
            }
            
            /* Active header background */
            .${o} .digiblocks-accordion-item.is-active .digiblocks-accordion-header {
                background-color: ${s||"#f7f7f7"};
            }
            
            /* Accordion content */
            .${o} .digiblocks-accordion-content {
                overflow: hidden;
                ${he}
                color: ${z||"#666666"};
                ${f}
                transition: color 0.3s ease;
            }
            
            /* Hover effects for content */
            .${o} .digiblocks-accordion-item:hover .digiblocks-accordion-content {
                ${S?`color: ${S};`:""}
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
            ${Ge}

			/* Visibility Controls */
			${a.desktop?`
				@media (min-width: 992px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${a.tablet?`
				@media (min-width: 768px) and (max-width: 991px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${a.mobile?`
				@media (max-width: 767px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}
        `},k=()=>{switch(A){case"options":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:"components-panel__body is-opened"},wp.element.createElement(ba,{label:io("Allow Multiple Open","digiblocks"),checked:Y,onChange:d=>e({allowMultipleOpen:d}),help:io("If enabled, multiple accordion items can be open at the same time.","digiblocks"),__nextHasNoMarginBottom:!0}),wp.element.createElement(mc,{label:io("Icon Type","digiblocks"),value:W,onChange:d=>e({iconType:d}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(ma,{value:"plusMinus",label:io("Plus/Minus","digiblocks")}),wp.element.createElement(ma,{value:"arrowUpDown",label:io("Up/Down","digiblocks")})),wp.element.createElement(mc,{label:io("Icon Position","digiblocks"),value:I,onChange:d=>e({iconPosition:d}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(ma,{value:"left",label:io("Left","digiblocks")}),wp.element.createElement(ma,{value:"right",label:io("Right","digiblocks")})),wp.element.createElement(hl,{label:io("Icon Size","digiblocks")},wp.element.createElement(zp,{value:X[ce],onChange:d=>e({iconSize:{...X,[ce]:d}}),min:12,max:48,step:1,__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0}))));case"style":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(ei,{tab:"style",name:"colors",title:io("Colors","digiblocks"),initialOpen:!0},wp.element.createElement(Mp,{className:"digiblocks-control-tabs",activeClass:"active-tab",tabs:[{name:"normal",title:io("Normal","digiblocks"),className:"digiblocks-tab-1 normal"},{name:"hover",title:io("Hover","digiblocks"),className:"digiblocks-tab-2 hover"}],onSelect:d=>{oe(d),je(d),to(d),r(d),xe(d)}},d=>d.name==="normal"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(nt,{title:io("Title Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:_,onChange:re=>e({titleColor:re}),label:io("Title Color","digiblocks")},{value:$,onChange:re=>e({titleActiveColor:re}),label:io("Active Title Color","digiblocks")}]}),wp.element.createElement(nt,{title:io("Icon Colors","digiblocks"),initialOpen:!1,enableAlpha:!0,colorSettings:[{value:ne,onChange:re=>e({iconColor:re}),label:io("Icon Color","digiblocks")},{value:Le,onChange:re=>e({iconActiveColor:re}),label:io("Active Icon Color","digiblocks")}]}),wp.element.createElement(nt,{title:io("Background Colors","digiblocks"),initialOpen:!1,enableAlpha:!0,colorSettings:[{value:P,onChange:re=>e({backgroundColor:re}),label:io("Background Color","digiblocks")},{value:s,onChange:re=>e({backgroundActiveColor:re}),label:io("Active Background Color","digiblocks")}]}),wp.element.createElement(nt,{title:io("Content Colors","digiblocks"),initialOpen:!1,enableAlpha:!0,colorSettings:[{value:z,onChange:re=>e({contentColor:re}),label:io("Content Text Color","digiblocks")}]}),wp.element.createElement(nt,{title:io("Border Colors","digiblocks"),initialOpen:!1,enableAlpha:!0,colorSettings:[{value:C,onChange:re=>e({borderColor:re}),label:io("Border Color","digiblocks")}]})):wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(nt,{title:io("Title Hover Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:y,onChange:re=>e({titleHoverColor:re}),label:io("Title Hover Color","digiblocks")}]}),wp.element.createElement(nt,{title:io("Icon Hover Colors","digiblocks"),initialOpen:!1,enableAlpha:!0,colorSettings:[{value:Me,onChange:re=>e({iconHoverColor:re}),label:io("Icon Hover Color","digiblocks")}]}),wp.element.createElement(nt,{title:io("Background Hover Colors","digiblocks"),initialOpen:!1,enableAlpha:!0,colorSettings:[{value:h,onChange:re=>e({backgroundHoverColor:re}),label:io("Background Hover Color","digiblocks")}]}),wp.element.createElement(nt,{title:io("Content Hover Colors","digiblocks"),initialOpen:!1,enableAlpha:!0,colorSettings:[{value:S,onChange:re=>e({contentHoverColor:re}),label:io("Content Hover Color","digiblocks")}]}),wp.element.createElement(nt,{title:io("Border Hover Colors","digiblocks"),initialOpen:!1,enableAlpha:!0,colorSettings:[{value:w,onChange:re=>e({borderHoverColor:re}),label:io("Border Hover Color","digiblocks")}]})))),wp.element.createElement(ei,{tab:"style",name:"typo",title:io("Typography","digiblocks"),initialOpen:!1},wp.element.createElement(kc,{label:io("Title Typography","digiblocks"),value:u,onChange:d=>e({titleTypography:d}),defaults:{fontSize:{desktop:18,tablet:16,mobile:16},fontSizeUnit:"px",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em"}}),wp.element.createElement(kc,{label:io("Content Typography","digiblocks"),value:v,onChange:d=>e({contentTypography:d}),defaults:{fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em"}})),wp.element.createElement(ei,{tab:"style",name:"border",title:io("Border & Shadow","digiblocks"),initialOpen:!1},wp.element.createElement(uc,{label:io("Border Style","digiblocks"),value:L,options:qe,onChange:d=>e({borderStyle:d}),__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0}),L!=="none"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(hl,{label:io("Border Width","digiblocks")},wp.element.createElement(ha,{values:U[ce],onChange:d=>e({borderWidth:{...U,[ce]:d}})})),wp.element.createElement(hl,{label:io("Border Radius","digiblocks")},wp.element.createElement(ha,{values:T[ce],onChange:d=>e({borderRadius:{...T,[ce]:d}}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]}))),wp.element.createElement(Rp,{normalValue:V,hoverValue:Q,onNormalChange:d=>e({boxShadow:d}),onHoverChange:d=>e({boxShadowHover:d})})),wp.element.createElement(ei,{tab:"style",name:"spacing",title:io("Spacing","digiblocks"),initialOpen:!1},wp.element.createElement(hl,{label:io("Padding","digiblocks")},wp.element.createElement(ha,{values:be[ce],onChange:d=>e({padding:{...be,[ce]:d}})})),wp.element.createElement(hl,{label:io("Margin","digiblocks")},wp.element.createElement(ha,{values:N[ce],onChange:d=>e({margin:{...N,[ce]:d}})}))));case"advanced":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(ei,{tab:"advanced",name:"animation",title:io("Animation","digiblocks"),initialOpen:!0},wp.element.createElement(uc,{label:io("Animation","digiblocks"),value:H,options:E,onChange:d=>e({animation:d}),__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0}),H&&H!=="none"&&wp.element.createElement("div",{style:{marginTop:"10px"}},wp.element.createElement($i,{variant:"secondary",isSecondary:!0,onClick:B,style:{width:"100%"}},io("Preview Animation","digiblocks")))),wp.element.createElement(ei,{tab:"advanced",name:"visibility",title:io("Visibility","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control__help",style:{padding:"12px",backgroundColor:"#f0f6fc",border:"1px solid #c3ddfd",borderRadius:"4px",marginBottom:"16px"}},wp.element.createElement("strong",null,io("Editor Note:","digiblocks")),wp.element.createElement("br",null),io("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.","digiblocks")),wp.element.createElement(ba,{label:io("Hide on Desktop","digiblocks"),checked:a.desktop,onChange:d=>e({visibility:{...a,desktop:d}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(ba,{label:io("Hide on Tablet","digiblocks"),checked:a.tablet,onChange:d=>e({visibility:{...a,tablet:d}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(ba,{label:io("Hide on Mobile","digiblocks"),checked:a.mobile,onChange:d=>e({visibility:{...a,mobile:d}}),__nextHasNoMarginBottom:!0})),wp.element.createElement(ei,{tab:"advanced",name:"additional",title:io("Additional","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control html-anchor-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"html-anchor"},io("HTML anchor","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"html-anchor",value:O||"",onChange:d=>e({anchor:d.target.value}),"aria-describedby":"html-anchor-help",autoCapitalize:"none",autoComplete:"off"})),wp.element.createElement("p",{id:"html-anchor-help",className:"components-base-control__help"},io(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`,"digiblocks")," ",wp.element.createElement("a",{className:"components-external-link",href:"https://wordpress.org/documentation/article/page-jumps/",target:"_blank",rel:"external noreferrer noopener"},wp.element.createElement("span",{className:"components-external-link__contents"},io("Learn more about anchors","digiblocks")),wp.element.createElement("span",{className:"components-external-link__icon","aria-label":"(opens in a new tab)"},"\u2197")))),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"additional-css-classes"},io("Additional CSS class(es)","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"additional-css-classes",value:le||"",onChange:d=>e({customClasses:d.target.value}),"aria-describedby":"additional-css-classes-help",autoComplete:"off"})),wp.element.createElement("p",{id:"additional-css-classes-help",className:"components-base-control__help"},io("Separate multiple classes with spaces.","digiblocks")))));default:return null}},G=Np({className:`digiblocks-accordion ${o} ${le||""}`,id:O||null});return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Hp,null,wp.element.createElement(Ip,{tabs:c,activeTab:A,onSelect:d=>{requestAnimationFrame(()=>{J(d)})}},k())),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:M()}}),wp.element.createElement("div",{...G},wp.element.createElement("div",{className:"digiblocks-accordion-wrapper"},l.map((d,re)=>wp.element.createElement("div",{key:d.id,className:`digiblocks-accordion-item ${d.isOpen?"is-active":""}`},wp.element.createElement("div",{className:"digiblocks-accordion-header",onClick:()=>Be(re)},wp.element.createElement(bc,{tagName:"h4",className:"digiblocks-accordion-title",value:d.title,onChange:x=>Ue(x,re),placeholder:io("Accordion Title","digiblocks")}),wp.element.createElement("span",{className:"digiblocks-accordion-icon"},ge(d.isOpen))),wp.element.createElement("div",{className:"digiblocks-accordion-content",style:{display:d.isOpen?"block":"none"}},wp.element.createElement(bc,{tagName:"div",value:d.content,onChange:x=>ee(x,re),placeholder:io("Add your content here.","digiblocks")})),wp.element.createElement("div",{className:"digiblocks-accordion-item-controls"},wp.element.createElement(ua,{text:io("Move Up","digiblocks")},wp.element.createElement($i,{className:"digiblocks-accordion-item-move-up",onClick:x=>{x.stopPropagation(),Xe(re)},icon:"arrow-up-alt2",disabled:re===0,isSmall:!0})),wp.element.createElement(ua,{text:io("Move Down","digiblocks")},wp.element.createElement($i,{className:"digiblocks-accordion-item-move-down",onClick:x=>{x.stopPropagation(),q(re)},icon:"arrow-down-alt2",disabled:re===l.length-1,isSmall:!0})),wp.element.createElement(ua,{text:io("Duplicate","digiblocks")},wp.element.createElement($i,{className:"digiblocks-accordion-item-duplicate",onClick:x=>{x.stopPropagation(),ye(re)},icon:"admin-page",isSmall:!0})),wp.element.createElement(ua,{text:io("Remove","digiblocks")},wp.element.createElement($i,{className:"digiblocks-accordion-item-remove",onClick:x=>{x.stopPropagation(),Se(re)},icon:"trash",isSmall:!0}))))),wp.element.createElement($i,{variant:"primary",icon:"plus",onClick:Pe,style:{width:"100%",marginTop:"20px",justifyContent:"center"}},io("Add Accordion Item","digiblocks")))))},vc=Lp;var{useBlockProps:Op,RichText:xc}=window.wp.blockEditor,jp=({attributes:ie})=>{let{id:e,anchor:K,customClasses:o,items:O,iconPosition:a,iconType:le,allowMultipleOpen:l,animation:_}=ie,y=h=>le==="plusMinus"?wp.element.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},wp.element.createElement("path",{d:h?"M19 13H5v-2h14v2z":"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"})):le==="arrowUpDown"?wp.element.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},wp.element.createElement("path",{d:h?"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z":"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z"})):null,$=["digiblocks-accordion",e,a==="left"?"icon-position-left":"icon-position-right",l?"allow-multiple-open":"single-open",_!=="none"?`animate-${_}`:"",o||""].filter(Boolean).join(" "),P=Op.save({className:$,id:K||null,"data-icon-type":le});return wp.element.createElement("div",{...P},wp.element.createElement("div",{className:"digiblocks-accordion-wrapper"},O.map(h=>wp.element.createElement("div",{key:h.id,className:`digiblocks-accordion-item ${h.isOpen?"is-active":""}`,"data-item-id":h.id},wp.element.createElement("div",{className:"digiblocks-accordion-header"},wp.element.createElement(xc.Content,{tagName:"h4",className:"digiblocks-accordion-title",value:h.title}),wp.element.createElement("span",{className:"digiblocks-accordion-icon"},y(h.isOpen))),wp.element.createElement("div",{className:"digiblocks-accordion-content",style:{display:h.isOpen?"block":"none"}},wp.element.createElement(xc.Content,{tagName:"div",value:h.content}))))))},yc=jp;var{__:jo}=window.wp.i18n,{registerBlockType:Up}=window.wp.blocks,{getBlockActiveStatus:Vp}=window.wp.digiBlocks;Up("digiblocks/accordion",{apiVersion:2,title:digiBlocksData.blocks.accordion.title,category:"digiblocks",icon:{src:()=>{let{viewbox:ie,path:e}=digiBlocksData.blocks.accordion.icon;return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${ie}`,className:"digiblocks-editor-icons"},wp.element.createElement("path",{d:e}))}},description:digiBlocksData.blocks.accordion.description,keywords:[jo("accordion","digiblocks"),jo("toggle","digiblocks"),jo("collapse","digiblocks"),jo("faq","digiblocks")],supports:{inserter:!!Vp("accordion"),html:!1,className:!1,customClassName:!1,anchor:!1},attributes:{id:{type:"string",default:""},anchor:{type:"string",default:""},visibility:{type:"object",default:{desktop:!1,tablet:!1,mobile:!1}},customClasses:{type:"string",default:""},items:{type:"array",default:[{id:"item-1",title:jo("Accordion Item 1","digiblocks"),content:jo("Add your content here. Edit or remove this text inline or in the module Content settings.","digiblocks"),isOpen:!0},{id:"item-2",title:jo("Accordion Item 2","digiblocks"),content:jo("Add your content here. Edit or remove this text inline or in the module Content settings.","digiblocks"),isOpen:!1}]},titleColor:{type:"string",default:"#333333"},titleHoverColor:{type:"string",default:""},titleActiveColor:{type:"string",default:"#1e73be"},backgroundColor:{type:"string",default:"#ffffff"},backgroundHoverColor:{type:"string",default:""},backgroundActiveColor:{type:"string",default:"#f7f7f7"},contentColor:{type:"string",default:"#666666"},contentHoverColor:{type:"string",default:""},borderColor:{type:"string",default:"#e0e0e0"},borderHoverColor:{type:"string",default:""},borderRadius:{type:"object",default:{desktop:{top:8,right:8,bottom:8,left:8,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderWidth:{type:"object",default:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderStyle:{type:"string",default:"solid"},boxShadow:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},boxShadowHover:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},padding:{type:"object",default:{desktop:{top:20,right:20,bottom:20,left:20,unit:"px"},tablet:{top:15,right:15,bottom:15,left:15,unit:"px"},mobile:{top:10,right:10,bottom:10,left:10,unit:"px"}}},margin:{type:"object",default:{desktop:{top:0,right:0,bottom:30,left:0,unit:"px"},tablet:{top:0,right:0,bottom:25,left:0,unit:"px"},mobile:{top:0,right:0,bottom:20,left:0,unit:"px"}}},titleTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:18,tablet:16,mobile:16},fontSizeUnit:"px",fontWeight:"600",fontStyle:"normal",textTransform:"none",textDecoration:"none",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}},contentTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",fontWeight:"",fontStyle:"normal",textTransform:"",textDecoration:"",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}},iconPosition:{type:"string",default:"right"},iconColor:{type:"string",default:"#333333"},iconHoverColor:{type:"string",default:""},iconActiveColor:{type:"string",default:"#1e73be"},iconSize:{type:"object",default:{desktop:16,tablet:14,mobile:12}},animation:{type:"string",default:"none"},allowMultipleOpen:{type:"boolean",default:!1},iconType:{type:"string",default:"plusMinus"}},example:{attributes:{items:[{id:"item-1",title:jo("Accordion Item 1","digiblocks"),content:jo("This is some sample content for the accordion item.","digiblocks"),isOpen:!0},{id:"item-2",title:jo("Accordion Item 2","digiblocks"),content:jo("Click on an accordion item to see it expand.","digiblocks"),isOpen:!1}]}},edit:vc,save:yc});var{__:no}=window.wp.i18n,{useBlockProps:Fp,RichText:Ep,InspectorControls:Wp,PanelColorSettings:Cc,LinkControl:qp}=window.wp.blockEditor,{SelectControl:wc,TabPanel:Sc,ToggleControl:fl,Spinner:Gp,__experimentalToggleGroupControl:$c,__experimentalToggleGroupControlOption:fa}=window.wp.components,{useState:ka,useEffect:_c}=window.wp.element,{useBlockId:Qp,getDimensionCSS:va}=digi.utils,{tabIcons:jn}=digi.icons,{ResponsiveControl:xa,DimensionControl:ya,BoxShadowControl:Jp,TypographyControl:Yp,CustomTabPanel:Zp,TabPanelBody:Yo,FontAwesomeControl:Z0}=digi.components,Kp=({attributes:ie,setAttributes:e,clientId:K,isSelected:o})=>{let{id:O,anchor:a,visibility:le,customClasses:l,text:_,url:y,opensInNewTab:$,rel:P,iconSource:h,customSvg:s,iconValue:z,iconPosition:S,size:C,fill:w,textColor:T,textHoverColor:U,backgroundColor:L,backgroundHoverColor:V,borderStyle:Q,borderWidth:be,borderRadius:N,borderColor:u,borderHoverColor:v,boxShadow:I,boxShadowHover:ne,padding:Me,margin:Le,onlyIcon:X,buttonTypography:H}=ie;Qp(O,K,e);let[Y,W]=ka(window.digi.responsiveState.activeDevice),[ce,ue]=ka(!1),[A,J]=ka(()=>{if(window.digi.uiState){let ee=window.digi.uiState.getActiveTab(K);if(ee)return ee}return"options"}),[me,oe]=ka(!1),fe=ee=>{e({iconValue:ee})};_c(()=>{let ee=()=>window.digi&&window.digi.components&&window.digi.components.FontAwesomeControl?(oe(!0),!0):!1;if(!ee()){let Be=setTimeout(()=>{ee()&&clearTimeout(Be)},500);return()=>clearTimeout(Be)}},[]),_c(()=>window.digi.responsiveState.subscribe(Be=>{W(Be)}),[]);let je=[{label:no("Default","digiblocks"),value:"default"},{label:no("None","digiblocks"),value:"none"},{label:no("Solid","digiblocks"),value:"solid"},{label:no("Dotted","digiblocks"),value:"dotted"},{label:no("Dashed","digiblocks"),value:"dashed"},{label:no("Double","digiblocks"),value:"double"},{label:no("Groove","digiblocks"),value:"groove"},{label:no("Inset","digiblocks"),value:"inset"},{label:no("Outset","digiblocks"),value:"outset"},{label:no("Ridge","digiblocks"),value:"ridge"}],te=[{label:no("Small","digiblocks"),value:"small"},{label:no("Medium","digiblocks"),value:"medium"},{label:no("Large","digiblocks"),value:"large"},{label:no("Custom","digiblocks"),value:"custom"}],to=[{name:"options",title:no("Options","digiblocks"),icon:jn.optionsIcon},{name:"style",title:no("Style","digiblocks"),icon:jn.styleIcon},{name:"advanced",title:no("Advanced","digiblocks"),icon:jn.advancedIcon}],De=[{name:"normal",title:no("Normal","digiblocks"),className:"digiblocks-tab-1 normal"},{name:"hover",title:no("Hover","digiblocks"),className:"digiblocks-tab-2 hover"}],r=me?window.digi.components.FontAwesomeControl:null,D=()=>{let ee=Y,Be="";C==="custom"?Be=va(Me,"padding",ee):C==="small"?Be="padding: 8px 16px;":C==="large"?Be="padding: 16px 32px;":Be="padding: 12px 24px;";let Xe="";if(Q&&Q!=="default"&&Q!=="none"){let c=va(be,"border-width",ee)||"border-width: 1px 1px 1px 1px;";Xe=`
                border-style: ${Q};
                border-color: ${u||"#333333"};
                ${c}
            `}else Xe="border: none;";let q="";q=va(N,"border-radius",ee);let ye="box-shadow: none;";I&&I.enable&&(ye=`box-shadow: ${I.position==="inset"?"inset ":""}${I.horizontal}px ${I.vertical}px ${I.blur}px ${I.spread}px ${I.color};`);let qe=va(Le,"margin",ee),E="";if(ne&&ne.enable){let B=ne.position==="inset"?"inset ":"";E+=`box-shadow: ${B}${ne.horizontal}px ${ne.vertical}px ${ne.blur}px ${ne.spread}px ${ne.color};`}let se="";return H&&(H.fontFamily&&(se+=`font-family: ${H.fontFamily};`),H.fontSize&&H.fontSize[ee]&&(se+=`font-size: ${H.fontSize[ee]}${H.fontSizeUnit||"px"};`),H.fontWeight&&(se+=`font-weight: ${H.fontWeight};`),H.fontStyle&&(se+=`font-style: ${H.fontStyle};`),H.textTransform&&(se+=`text-transform: ${H.textTransform};`),H.textDecoration&&(se+=`text-decoration: ${H.textDecoration};`),H.lineHeight&&H.lineHeight[ee]&&(se+=`line-height: ${H.lineHeight[ee]}${H.lineHeightUnit||"em"};`),H.letterSpacing&&H.letterSpacing[ee]&&(se+=`letter-spacing: ${H.letterSpacing[ee]}${H.letterSpacingUnit||"px"};`)),`
            /* Button Block - ${O} */
            .${O} {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                text-decoration: none;
                cursor: pointer;
                transition: all 0.3s ease;
                ${Be}
                ${Xe}
                ${q}
                ${ye}
                ${qe}
                ${w?"width: 100%;":""}
                gap: 8px; /* Space between icon and text */
                ${L?`background-color: ${L};`:""}
                ${T?`color: ${T};`:""}
            }
            
            .${O}:hover {
                ${U?`color: ${U};`:""}
                ${V?`background-color: ${V};`:""}
                ${v?`border-color: ${v};`:""}
                ${E}
            }
            
            /* Icon styles */
            .${O} .digiblocks-button-icon {
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .${O} .digiblocks-button-icon svg {
                width: 1em;
                height: 1em;
                fill: currentColor;
            }
            
            /* Button typography */
            .${O} {
                ${se}
            }

			/* Visibility Controls */
			${le.desktop?`
				@media (min-width: 992px) {
					.${O} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${le.tablet?`
				@media (min-width: 768px) and (max-width: 991px) {
					.${O} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${le.mobile?`
				@media (max-width: 767px) {
					.${O} {
						opacity: 0.5 !important;
					}
				}
			`:""}
        `},xe=()=>h==="library"&&z&&z.svg&&z.svg.trim()!==""?wp.element.createElement("span",{key:"icon",className:"digiblocks-button-icon",dangerouslySetInnerHTML:{__html:z.svg}}):h==="custom"&&s&&s.trim()!==""?wp.element.createElement("span",{key:"icon",className:"digiblocks-button-icon",dangerouslySetInnerHTML:{__html:s}}):null,Pe=()=>{let ee=xe(),Be=X?null:wp.element.createElement(Ep,{key:"text",value:_,onChange:Xe=>e({text:Xe}),placeholder:no("Add text\u2026","digiblocks"),allowedFormats:[],withoutInteractiveFormatting:!0,identifier:"text"});return S==="left"?[ee,Be].filter(Boolean):[Be,ee].filter(Boolean)},Se=()=>{switch(A){case"options":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Yo,{tab:"options",name:"icon",title:no("Icon","digiblocks"),initialOpen:!0},wp.element.createElement("div",{style:{marginBottom:"2rem"}},wp.element.createElement($c,{label:no("Icon Source","digiblocks"),value:h||"library",onChange:ee=>e({iconSource:ee}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(fa,{value:"library",label:no("Library","digiblocks")}),wp.element.createElement(fa,{value:"custom",label:no("Custom","digiblocks")})),h==="library"&&wp.element.createElement(wp.element.Fragment,null,me?wp.element.createElement(r,{label:no("Select Icon","digiblocks"),value:z,onChange:fe}):wp.element.createElement("div",{style:{textAlign:"center",padding:"20px 0"}},wp.element.createElement(Gp,null),wp.element.createElement("p",null,no("Loading icon selector...","digiblocks"))),z&&me&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{style:{marginTop:"15px",marginBottom:"15px",padding:"10px",background:"#f0f0f1",borderRadius:"3px"}},wp.element.createElement("p",{style:{margin:"0 0 5px 0"}},wp.element.createElement("strong",null,no("Selected Icon:","digiblocks"))," ",z.name),wp.element.createElement("p",{style:{margin:"0 0 5px 0"}},wp.element.createElement("strong",null,no("Style:","digiblocks"))," ",z.style),z.categories&&z.categories.length>0&&wp.element.createElement("p",{style:{margin:"0"}},wp.element.createElement("strong",null,no("Categories:","digiblocks"))," ",z.categories.join(", "))))),h==="custom"&&wp.element.createElement("div",{style:{marginTop:"15px"}},wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"custom-svg-input"},no("Custom SVG Code","digiblocks")),wp.element.createElement("textarea",{id:"custom-svg-input",className:"components-textarea-control__input",value:s||"",onChange:ee=>{let Be=ee.target.value;e({customSvg:Be,iconValue:{id:"custom-svg",name:"Custom SVG",svg:Be,style:"custom",categories:["custom"]}})},placeholder:no("Paste your SVG code here...","digiblocks"),rows:10,style:{width:"100%",marginTop:"8px"}}),wp.element.createElement("p",{className:"components-base-control__help"},no("Paste your SVG code here. Make sure it only contains valid SVG markup. For security reasons, scripts and external references will be removed.","digiblocks"))),s&&wp.element.createElement("div",{style:{marginTop:"15px",marginBottom:"15px"}},wp.element.createElement("p",null,wp.element.createElement("strong",null,no("Preview:","digiblocks"))),wp.element.createElement("div",{style:{padding:"20px",background:"#f0f0f1",borderRadius:"3px",display:"flex",justifyContent:"center",alignItems:"center"}},wp.element.createElement("div",{className:"digiblocks-custom-svg-preview",style:{width:"50px",height:"50px"},dangerouslySetInnerHTML:{__html:s}}))))),z&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(fl,{label:no("Only Icon","digiblocks"),checked:X,onChange:ee=>e({onlyIcon:ee}),__nextHasNoMarginBottom:!0}),!X&&wp.element.createElement($c,{label:no("Icon Position","digiblocks"),value:S,onChange:ee=>e({iconPosition:ee}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(fa,{value:"left",label:no("Left","digiblocks")}),wp.element.createElement(fa,{value:"right",label:no("Right","digiblocks")})))),wp.element.createElement(Yo,{tab:"options",name:"link",title:no("Link","digiblocks"),initialOpen:!1},wp.element.createElement(qp,{value:y?{url:y,opensInNewTab:$,rel:P}:void 0,onChange:ee=>{e({url:ee.url,opensInNewTab:ee.opensInNewTab,rel:ee.rel||""}),ue(!1)},settings:[{id:"opensInNewTab",title:no("Open in new tab")},{id:"rel",title:no("Add noopener noreferrer")}],onRemove:()=>{e({url:"",opensInNewTab:!1,rel:""}),ue(!1)}})),wp.element.createElement(Yo,{tab:"options",name:"size",title:no("Size and Fill","digiblocks"),initialOpen:!1},wp.element.createElement(wc,{label:no("Size","digiblocks"),value:C,options:te,onChange:ee=>e({size:ee}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(fl,{label:no("Expand to Container Width","digiblocks"),checked:w,onChange:ee=>e({fill:ee}),__nextHasNoMarginBottom:!0})));case"style":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Yo,{tab:"style",name:"typography",title:no("Typography","digiblocks"),initialOpen:!0},wp.element.createElement(Yp,{label:no("Button Typography","digiblocks"),value:H,onChange:ee=>e({buttonTypography:ee}),defaults:{fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em"}})),wp.element.createElement(Yo,{tab:"style",name:"colors",title:no("Colors","digiblocks"),initialOpen:!0},wp.element.createElement(Sc,{className:"digiblocks-control-tabs",activeClass:"active-tab",tabs:De},ee=>wp.element.createElement(Cc,{title:ee.name==="normal"?no("Normal Colors","digiblocks"):no("Hover Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:ee.name==="normal"?T:U,onChange:Be=>e(ee.name==="normal"?{textColor:Be}:{textHoverColor:Be}),label:no("Text Color","digiblocks")},{value:ee.name==="normal"?L:V,onChange:Be=>e(ee.name==="normal"?{backgroundColor:Be}:{backgroundHoverColor:Be}),label:no("Background Color","digiblocks")}]}))),C==="custom"&&wp.element.createElement(Yo,{tab:"style",name:"spacing",title:no("Spacing","digiblocks"),initialOpen:!1},wp.element.createElement(xa,{label:no("Padding","digiblocks")},wp.element.createElement(ya,{values:Me[Y],onChange:ee=>e({padding:{...Me,[Y]:ee}})}))),wp.element.createElement(Yo,{tab:"style",name:"margin",title:no("Margin","digiblocks"),initialOpen:!1},wp.element.createElement(xa,{label:no("Margin","digiblocks")},wp.element.createElement(ya,{values:Le[Y],onChange:ee=>e({margin:{...Le,[Y]:ee}})}))),wp.element.createElement(Yo,{tab:"style",name:"box-style",title:no("Box Style","digiblocks"),initialOpen:!1},wp.element.createElement(wc,{label:no("Border Style","digiblocks"),value:Q||"default",options:je,onChange:ee=>{ee!=="default"&&ee!=="none"&&(Q==="default"||Q==="none"||!Q)&&(!be||Object.keys(be).length===0)&&e({borderWidth:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}}),e({borderStyle:ee})},__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),Q&&Q!=="default"&&Q!=="none"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Sc,{className:"digiblocks-control-tabs",activeClass:"active-tab",tabs:De},ee=>wp.element.createElement(Cc,{title:no("Border Colors","digiblocks"),enableAlpha:!0,colorSettings:[{value:ee.name==="normal"?u:v,onChange:Be=>e(ee.name==="normal"?{borderColor:Be}:{borderHoverColor:Be}),label:no("Border Color","digiblocks")}]})),wp.element.createElement(xa,{label:no("Border Width","digiblocks")},wp.element.createElement(ya,{values:be[Y],onChange:ee=>e({borderWidth:{...be,[Y]:ee}})}))),wp.element.createElement(xa,{label:no("Border Radius","digiblocks")},wp.element.createElement(ya,{values:N[Y],onChange:ee=>e({borderRadius:{...N,[Y]:ee}}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]}))),wp.element.createElement(Yo,{tab:"style",name:"shadow",title:no("Box Shadow","digiblocks"),initialOpen:!1},wp.element.createElement(Jp,{normalValue:I,hoverValue:ne,onNormalChange:ee=>e({boxShadow:ee}),onHoverChange:ee=>e({boxShadowHover:ee})})));case"advanced":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Yo,{tab:"advanced",name:"visibility",title:no("Visibility","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control__help",style:{padding:"12px",backgroundColor:"#f0f6fc",border:"1px solid #c3ddfd",borderRadius:"4px",marginBottom:"16px"}},wp.element.createElement("strong",null,no("Editor Note:","digiblocks")),wp.element.createElement("br",null),no("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.","digiblocks")),wp.element.createElement(fl,{label:no("Hide on Desktop","digiblocks"),checked:le.desktop,onChange:ee=>e({visibility:{...le,desktop:ee}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(fl,{label:no("Hide on Tablet","digiblocks"),checked:le.tablet,onChange:ee=>e({visibility:{...le,tablet:ee}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(fl,{label:no("Hide on Mobile","digiblocks"),checked:le.mobile,onChange:ee=>e({visibility:{...le,mobile:ee}}),__nextHasNoMarginBottom:!0})),wp.element.createElement(Yo,{tab:"advanced",name:"additional",title:no("Additional","digiblocks"),initialOpen:!0},wp.element.createElement("div",{className:"components-base-control html-anchor-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"html-anchor"},no("HTML anchor","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"html-anchor",value:a||"",onChange:ee=>e({anchor:ee.target.value}),"aria-describedby":"html-anchor-help",autoCapitalize:"none",autoComplete:"off"})),wp.element.createElement("p",{id:"html-anchor-help",className:"components-base-control__help"},no(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`,"digiblocks")," ",wp.element.createElement("a",{className:"components-external-link",href:"https://wordpress.org/documentation/article/page-jumps/",target:"_blank",rel:"external noreferrer noopener"},wp.element.createElement("span",{className:"components-external-link__contents"},no("Learn more about anchors","digiblocks")),wp.element.createElement("span",{className:"components-external-link__icon","aria-label":"(opens in a new tab)"},"\u2197")))),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"additional-css-classes"},no("Additional CSS class(es)","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"additional-css-classes",value:l||"",onChange:ee=>e({customClasses:ee.target.value}),"aria-describedby":"additional-css-classes-help",autoComplete:"off"})),wp.element.createElement("p",{id:"additional-css-classes-help",className:"components-base-control__help"},no("Separate multiple classes with spaces.","digiblocks")))));default:return null}},Ue=Fp({className:`digiblocks-button ${O} ${C} ${w?"is-fill":""} ${l||""}`,id:a||null});return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Wp,null,wp.element.createElement(Zp,{tabs:to,activeTab:A,onSelect:J},Se())),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:D()}}),wp.element.createElement("div",{...Ue},Pe()))},Bc=Kp;var{useBlockProps:Tc,RichText:Xp}=window.wp.blockEditor,Ap=({attributes:ie})=>{let{id:e,anchor:K,customClasses:o,text:O,url:a,opensInNewTab:le,rel:l,iconSource:_,customSvg:y,iconValue:$,iconPosition:P,size:h,fill:s,onlyIcon:z}=ie,S=["digiblocks-button",e,h,s?"is-fill":"",o||""].filter(Boolean).join(" "),C=()=>_==="library"&&$&&$.svg&&$.svg.trim()!==""?wp.element.createElement("span",{className:"digiblocks-button-icon",dangerouslySetInnerHTML:{__html:$.svg}}):_==="custom"&&y&&y.trim()!==""?wp.element.createElement("span",{className:"digiblocks-button-icon",dangerouslySetInnerHTML:{__html:y}}):null,w=wp.element.createElement(wp.element.Fragment,null,P==="left"&&C(),!z&&wp.element.createElement(Xp.Content,{value:O}),P==="right"&&C());return a?wp.element.createElement("a",{...Tc.save({className:S,id:K||null,href:a,target:le?"_blank":void 0,rel:l?"noopener noreferrer":void 0})},w):wp.element.createElement("div",{...Tc.save({className:S,id:K||null})},w)},Nc=Ap;var{__:Ca}=window.wp.i18n,{registerBlockType:eb}=window.wp.blocks;eb("digiblocks/button",{apiVersion:2,title:Ca("Button","digiblocks"),parent:["digiblocks/buttons"],icon:{src:()=>wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24"},wp.element.createElement("path",{d:"M19 6.5H5c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7c0-1.1-.9-2-2-2zm0 9H5v-7h14v7z"}))},description:Ca("A single button within the buttons block","digiblocks"),supports:{inserter:!1,html:!1,className:!1,customClassName:!1,anchor:!1,reusable:!1},attributes:{id:{type:"string",default:""},anchor:{type:"string",default:""},visibility:{type:"object",default:{desktop:!1,tablet:!1,mobile:!1}},customClasses:{type:"string",default:""},text:{type:"string",default:Ca("Button","digiblocks")},url:{type:"string",default:""},opensInNewTab:{type:"boolean",default:!1},rel:{type:"boolean",default:!1},iconSource:{type:"string",default:"library"},customSvg:{type:"string",default:""},iconValue:{type:"object",default:null},iconPosition:{type:"string",default:"left"},size:{type:"string",default:"medium"},fill:{type:"boolean",default:!1},buttonTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",fontWeight:"",fontStyle:"normal",textTransform:"",textDecoration:"",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}},textColor:{type:"string",default:"#ffffff"},textHoverColor:{type:"string",default:""},backgroundColor:{type:"string",default:"#1e73be"},backgroundHoverColor:{type:"string",default:""},borderStyle:{type:"string",default:"default"},borderWidth:{type:"object",default:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderRadius:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderColor:{type:"string",default:""},borderHoverColor:{type:"string",default:""},boxShadow:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},boxShadowHover:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},padding:{type:"object",default:{desktop:{top:12,right:24,bottom:12,left:24,unit:"px"},tablet:{top:10,right:20,bottom:10,left:20,unit:"px"},mobile:{top:8,right:16,bottom:8,left:16,unit:"px"}}},margin:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},onlyIcon:{type:"boolean",default:!1}},example:{attributes:{text:Ca("Button","digiblocks"),backgroundColor:"#1e73be",textColor:"#ffffff"}},edit:Bc,save:Nc});var{__:ko}=window.wp.i18n,{useBlockProps:ob,useInnerBlocksProps:tb,InspectorControls:ib}=window.wp.blockEditor,{SelectControl:lb,RangeControl:ab,ToggleControl:Un,Button:nb,__experimentalToggleGroupControl:sb,__experimentalToggleGroupControlOption:Hc}=window.wp.components,{useState:zc,useEffect:rb}=window.wp.element,{useBlockId:cb,animations:db,animationPreview:o1}=digi.utils,{tabIcons:Mc}=digi.icons,{ResponsiveControl:gb,ResponsiveButtonGroup:Dc,CustomTabPanel:pb,TabPanelBody:Vn}=digi.components,bb=({attributes:ie,setAttributes:e,clientId:K})=>{let{id:o,anchor:O,visibility:a,customClasses:le,layout:l,horizontalAlign:_,verticalAlign:y,buttonSpacing:$,animation:P}=ie,[h,s]=zc(window.digi.responsiveState.activeDevice),[z,S]=zc(()=>{if(window.digi.uiState){let N=window.digi.uiState.getActiveTab(K);if(N)return N}return"options"});rb(()=>window.digi.responsiveState.subscribe(u=>{s(u)}),[]),cb(o,K,e);let C=[{label:ko("None","digiblocks"),value:"none"},...Object.keys(db).map(N=>({label:N.replace(/-/g," ").replace(/\b\w/g,u=>u.toUpperCase()),value:N}))],w=[{name:"options",title:ko("Options","digiblocks"),icon:Mc.optionsIcon},{name:"advanced",title:ko("Advanced","digiblocks"),icon:Mc.advancedIcon}],T=()=>{let N=window.digi.responsiveState.activeDevice;return`
            /* Buttons Block - ${o} */
            .${o} {
                display: flex;
                flex-wrap: wrap;
                ${l==="vertical"?"flex-direction: column;":""}
                align-items: ${y[N]};
    			justify-content: ${_[N]};
                gap: ${$[N]}px;
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
			${a.desktop?`
				@media (min-width: 992px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${a.tablet?`
				@media (min-width: 768px) and (max-width: 991px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${a.mobile?`
				@media (max-width: 767px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}
        `},U=()=>{switch(z){case"options":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:"components-panel__body is-opened"},wp.element.createElement(sb,{label:ko("Layout","digiblocks"),value:l,onChange:N=>e({layout:N}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(Hc,{value:"horizontal",label:ko("Horizontal","digiblocks")}),wp.element.createElement(Hc,{value:"vertical",label:ko("Vertical","digiblocks")})),wp.element.createElement(Dc,{label:ko("Horizontal Align","digiblocks"),value:_,onChange:N=>e({horizontalAlign:N}),options:[{label:ko("Left","digiblocks"),value:"flex-start"},{label:ko("Center","digiblocks"),value:"center"},{label:ko("Right","digiblocks"),value:"flex-end"},{label:ko("Space","digiblocks"),value:"space-between"}]}),wp.element.createElement(Dc,{label:ko("Vertical Align","digiblocks"),value:y,onChange:N=>e({verticalAlign:N}),options:[{label:ko("Top","digiblocks"),value:"flex-start"},{label:ko("Middle","digiblocks"),value:"center"},{label:ko("Bottom","digiblocks"),value:"flex-end"}]}),wp.element.createElement(gb,{label:ko("Button Spacing","digiblocks")},wp.element.createElement(ab,{value:$[h],onChange:N=>e({buttonSpacing:{...$,[h]:N}}),min:0,max:50,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}))));case"advanced":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Vn,{tab:"advanced",name:"animation",title:ko("Animation","digiblocks"),initialOpen:!0},wp.element.createElement(lb,{label:ko("Animation Effect","digiblocks"),value:P,options:C,onChange:N=>e({animation:N}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(Vn,{tab:"advanced",name:"visibility",title:ko("Visibility","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control__help",style:{padding:"12px",backgroundColor:"#f0f6fc",border:"1px solid #c3ddfd",borderRadius:"4px",marginBottom:"16px"}},wp.element.createElement("strong",null,ko("Editor Note:","digiblocks")),wp.element.createElement("br",null),ko("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.","digiblocks")),wp.element.createElement(Un,{label:ko("Hide on Desktop","digiblocks"),checked:a.desktop,onChange:N=>e({visibility:{...a,desktop:N}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(Un,{label:ko("Hide on Tablet","digiblocks"),checked:a.tablet,onChange:N=>e({visibility:{...a,tablet:N}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(Un,{label:ko("Hide on Mobile","digiblocks"),checked:a.mobile,onChange:N=>e({visibility:{...a,mobile:N}}),__nextHasNoMarginBottom:!0})),wp.element.createElement(Vn,{tab:"advanced",name:"additional",title:ko("Additional","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control html-anchor-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"html-anchor"},ko("HTML anchor","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"html-anchor",value:O||"",onChange:N=>e({anchor:N.target.value}),"aria-describedby":"html-anchor-help",autoCapitalize:"none",autoComplete:"off"})),wp.element.createElement("p",{id:"html-anchor-help",className:"components-base-control__help"},ko(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`,"digiblocks")," ",wp.element.createElement("a",{className:"components-external-link",href:"https://wordpress.org/documentation/article/page-jumps/",target:"_blank",rel:"external noreferrer noopener"},wp.element.createElement("span",{className:"components-external-link__contents"},ko("Learn more about anchors","digiblocks")),wp.element.createElement("span",{className:"components-external-link__icon","aria-label":"(opens in a new tab)"},"\u2197")))),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"additional-css-classes"},ko("Additional CSS class(es)","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"additional-css-classes",value:le||"",onChange:N=>e({customClasses:N.target.value}),"aria-describedby":"additional-css-classes-help",autoComplete:"off"})),wp.element.createElement("p",{id:"additional-css-classes-help",className:"components-base-control__help"},ko("Separate multiple classes with spaces.","digiblocks")))));default:return null}},L=ob({className:`digiblocks-buttons-block ${o} ${le||""}`,id:O||null}),be=tb(L,{allowedBlocks:["digiblocks/button"],template:[["digiblocks/button",{}]],renderAppender:!1,orientation:l==="vertical"?"vertical":"horizontal"});return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(ib,null,wp.element.createElement(pb,{tabs:w,activeTab:z,onSelect:S},U())),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:T()}}),wp.element.createElement("div",{...be},be.children,wp.element.createElement("div",{className:"digiblocks-button-inserter"},wp.element.createElement(nb,{variant:"primary",isSmall:!0,icon:"plus",onClick:()=>{let N=window.wp.blocks.createBlock("digiblocks/button");window.wp.data.dispatch("core/block-editor").insertBlock(N,void 0,K)}},ko("Add","digiblocks")))))},Pc=bb;var{useBlockProps:ub,useInnerBlocksProps:mb}=window.wp.blockEditor,hb=({attributes:ie})=>{let{id:e,anchor:K,customClasses:o,animation:O}=ie,a=["digiblocks-buttons-block",e,O!=="none"?`animate-${O}`:"",o||""].filter(Boolean).join(" "),le=ub.save({className:a,id:K||null}),l=mb.save(le);return wp.element.createElement("div",{...l})},Rc=hb;var{__:kl}=window.wp.i18n,{registerBlockType:fb}=window.wp.blocks,{getBlockActiveStatus:kb}=window.wp.digiBlocks;fb("digiblocks/buttons",{apiVersion:2,title:digiBlocksData.blocks.buttons.title,category:"digiblocks",icon:{src:()=>{let{viewbox:ie,path:e}=digiBlocksData.blocks.buttons.icon;return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${ie}`,className:"digiblocks-editor-icons"},wp.element.createElement("path",{d:e}))}},description:digiBlocksData.blocks.buttons.description,keywords:[kl("buttons","digiblocks"),kl("button group","digiblocks"),kl("link","digiblocks")],supports:{inserter:!!kb("buttons"),html:!1,className:!1,customClassName:!1,anchor:!1},attributes:{id:{type:"string",default:""},anchor:{type:"string",default:""},visibility:{type:"object",default:{desktop:!1,tablet:!1,mobile:!1}},customClasses:{type:"string",default:""},layout:{type:"string",default:"horizontal"},horizontalAlign:{type:"object",default:{desktop:"center",tablet:"center",mobile:"center"}},verticalAlign:{type:"object",default:{desktop:"flex-start",tablet:"flex-start",mobile:"flex-start"}},buttonSpacing:{type:"object",default:{desktop:10,tablet:8,mobile:6}},animation:{type:"string",default:"none"}},example:{innerBlocks:[{name:"digiblocks/button",attributes:{text:kl("Call to Action","digiblocks")}},{name:"digiblocks/button",attributes:{text:kl("Learn More","digiblocks")}}]},edit:Pc,save:Rc});var{__:ae}=window.wp.i18n,{useBlockProps:vb,RichText:_i,InspectorControls:xb,PanelColorSettings:Zo,BlockControls:yb,AlignmentToolbar:Cb,MediaUpload:Fn,MediaUploadCheck:En}=window.wp.blockEditor,{SelectControl:oi,RangeControl:Wn,ToggleControl:st,Button:ti,__experimentalToggleGroupControl:qn,__experimentalToggleGroupControlOption:Gn,TabPanel:wb,TextControl:wa,BaseControl:Ic}=window.wp.components,{useState:Qn,useEffect:Jn,useRef:Sb}=window.wp.element,{useBlockId:$b,getDimensionCSS:Co,animations:Yn,animationPreview:Lc}=digi.utils,{tabIcons:Zn}=digi.icons,{ResponsiveControl:Rt,DimensionControl:Bi,TypographyControl:Kn,BoxShadowControl:_b,CustomTabPanel:Bb,TabPanelBody:Uo}=digi.components,Tb=({attributes:ie,setAttributes:e,clientId:K})=>{let{id:o,anchor:O,visibility:a,customClasses:le,style:l,horizontalLayout:_,title:y,content:$,headingTag:P,titleColor:h,textColor:s,buttonColor:z,buttonTextColor:S,backgroundColor:C,backgroundType:w,backgroundImage:T,backgroundOverlayColor:U,backgroundOverlayOpacity:L,backgroundPosition:V,backgroundSize:Q,backgroundRepeat:be,borderStyle:N,borderWidth:u,borderRadius:v,borderColor:I,padding:ne,margin:Me,align:Le,titleTypography:X,contentTypography:H,buttonTypography:Y,contentWidth:W,width:ce,animation:ue,boxShadow:A,boxShadowHover:J,buttonBorderRadius:me,buttonPadding:oe,buttonsAlign:fe,buttons:je,titleHoverColor:te,textHoverColor:to,buttonHoverColor:De,buttonTextHoverColor:r,backgroundHoverColor:D,highlightText:xe,highlightColor:Pe,highlightType:Se,verticalAlign:Ue,reverseColumnsMobile:ee,minHeight:Be}=ie,[Xe,q]=Qn(window.digi.responsiveState.activeDevice),[ye,qe]=Qn(!1);Jn(()=>window.digi.responsiveState.subscribe(F=>{q(F)}),[]);let[E,se]=Qn(()=>{if(window.digi.uiState){let i=window.digi.uiState.getActiveTab(K);if(i)return i}return"options"});$b(o,K,e),Jn(()=>{(!je||!Array.isArray(je)||je.length===0)&&e({buttons:[{id:"button-1",text:ae("Click Here","digiblocks"),url:"#",openInNewTab:!1,rel:"",isPrimary:!0,isFullWidth:!1,customColors:!1,backgroundColor:"",textColor:"",hoverBackgroundColor:"",hoverTextColor:"",borderRadius:""}]}),X||e({titleTypography:{fontFamily:"",fontSize:{desktop:36,tablet:32,mobile:28},fontSizeUnit:"px",fontWeight:"700",fontStyle:"normal",textTransform:"none",textDecoration:"none",lineHeight:{desktop:1.2,tablet:1.2,mobile:1.2},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}}),H||e({contentTypography:{fontFamily:"",fontSize:{desktop:18,tablet:16,mobile:16},fontSizeUnit:"px",fontWeight:"400",fontStyle:"normal",textTransform:"none",textDecoration:"none",lineHeight:{desktop:1.6,tablet:1.6,mobile:1.5},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}}),Y||e({buttonTypography:{fontFamily:"",fontSize:{desktop:16,tablet:16,mobile:16},fontSizeUnit:"px",fontWeight:"500",fontStyle:"normal",textTransform:"none",textDecoration:"none",lineHeight:{desktop:1.5,tablet:1.5,mobile:1.5},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}}),J||e({boxShadowHover:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}})},[je,X,H,Y,J,e]);let B=Sb(null);Jn(()=>{if(ue&&ue!=="none"){let i=setTimeout(()=>{Lc(o,ue,Yn,B)},100);return()=>clearTimeout(i)}},[ue]);let c=()=>{Lc(o,ue,Yn,B)},ge=[{label:ae("None","digiblocks"),value:"none"},{label:ae("Solid","digiblocks"),value:"solid"},{label:ae("Dotted","digiblocks"),value:"dotted"},{label:ae("Dashed","digiblocks"),value:"dashed"},{label:ae("Double","digiblocks"),value:"double"},{label:ae("Groove","digiblocks"),value:"groove"},{label:ae("Ridge","digiblocks"),value:"ridge"},{label:ae("Inset","digiblocks"),value:"inset"},{label:ae("Outset","digiblocks"),value:"outset"}],M=[{label:ae("None","digiblocks"),value:"none"},...Object.keys(Yn).map(i=>({label:i.replace(/-/g," ").replace(/\b\w/g,F=>F.toUpperCase()),value:i}))],k=[{label:ae("Basic","digiblocks"),value:"basic"},{label:ae("Split","digiblocks"),value:"split"},{label:ae("Cover","digiblocks"),value:"cover"},{label:ae("Box","digiblocks"),value:"box"},{label:ae("Modern","digiblocks"),value:"modern"},{label:ae("Gradient","digiblocks"),value:"gradient"},{label:ae("Minimal","digiblocks"),value:"minimal"},{label:ae("Callout","digiblocks"),value:"callout"},{label:ae("Banner","digiblocks"),value:"banner"}],G=[{label:"H1",value:"h1"},{label:"H2",value:"h2"},{label:"H3",value:"h3"},{label:"H4",value:"h4"},{label:"H5",value:"h5"},{label:"H6",value:"h6"}],d=[{label:ae("Color","digiblocks"),value:"color"},{label:ae("Image","digiblocks"),value:"image"},{label:ae("Gradient","digiblocks"),value:"gradient"}],re=[{label:ae("Center Center","digiblocks"),value:"center center"},{label:ae("Center Top","digiblocks"),value:"center top"},{label:ae("Center Bottom","digiblocks"),value:"center bottom"},{label:ae("Left Top","digiblocks"),value:"left top"},{label:ae("Left Center","digiblocks"),value:"left center"},{label:ae("Left Bottom","digiblocks"),value:"left bottom"},{label:ae("Right Top","digiblocks"),value:"right top"},{label:ae("Right Center","digiblocks"),value:"right center"},{label:ae("Right Bottom","digiblocks"),value:"right bottom"}],x=[{label:ae("Cover","digiblocks"),value:"cover"},{label:ae("Contain","digiblocks"),value:"contain"},{label:ae("Auto","digiblocks"),value:"auto"}],m=[{label:ae("No Repeat","digiblocks"),value:"no-repeat"},{label:ae("Repeat","digiblocks"),value:"repeat"},{label:ae("Repeat X","digiblocks"),value:"repeat-x"},{label:ae("Repeat Y","digiblocks"),value:"repeat-y"}],he=[{label:ae("Left","digiblocks"),value:"left"},{label:ae("Center","digiblocks"),value:"center"},{label:ae("Right","digiblocks"),value:"right"}],j=[{label:ae("Top","digiblocks"),value:"flex-start"},{label:ae("Center","digiblocks"),value:"center"},{label:ae("Bottom","digiblocks"),value:"flex-end"}],Ne=[{label:ae("None","digiblocks"),value:"none"},{label:ae("Background","digiblocks"),value:"background"},{label:ae("Text","digiblocks"),value:"text"},{label:ae("Underline","digiblocks"),value:"underline"}],f={width:300,height:200},Ge=[{name:"options",title:ae("Options","digiblocks"),icon:Zn.optionsIcon},{name:"style",title:ae("Style","digiblocks"),icon:Zn.styleIcon},{name:"advanced",title:ae("Advanced","digiblocks"),icon:Zn.advancedIcon}],We=[{name:"normal",title:ae("Normal","digiblocks"),className:"digiblocks-tab-1 normal"},{name:"hover",title:ae("Hover","digiblocks"),className:"digiblocks-tab-2 hover"}],go=()=>{let i=`button-${je.length+1}`,F=[...je,{id:i,text:ae("Click Here","digiblocks"),url:"#",openInNewTab:!1,rel:"",isPrimary:!1,isFullWidth:!1,customColors:!1,backgroundColor:"",textColor:"",hoverBackgroundColor:"",hoverTextColor:"",borderRadius:""}];e({buttons:F})},t=i=>{let F=je.filter(Fe=>Fe.id!==i);e({buttons:F})},b=(i,F,Fe)=>{let po=je.map(R=>R.id===i?{...R,[F]:Fe}:R);e({buttons:po})},Ce=i=>{let F=l===i.value,Fe={display:"inline-flex",flexDirection:"column",width:"70px",height:"70px",margin:"5px",border:`1px solid ${F?"#007cba":"#ddd"}`,backgroundColor:F?"rgba(0,124,186,0.1)":"white",borderRadius:"4px",cursor:"pointer",overflow:"hidden",transition:"all 0.2s ease"},po={textAlign:"center",fontSize:"10px",padding:"3px 0",fontWeight:F?"500":"normal",borderBottom:`1px solid ${F?"#e0e0e0":"transparent"}`,backgroundColor:F?"rgba(0,124,186,0.05)":"transparent"},R={flex:1,display:"flex",justifyContent:"center",alignItems:"center",padding:"8px"},Ae=null;switch(i.value){case"basic":Ae=wp.element.createElement("div",{style:{width:"100%",height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}},wp.element.createElement("div",{style:{width:"80%",height:"4px",backgroundColor:"#333",marginBottom:"4px"}}),wp.element.createElement("div",{style:{width:"60%",height:"2px",backgroundColor:"#777",marginBottom:"6px"}}),wp.element.createElement("div",{style:{width:"40%",height:"6px",backgroundColor:"#007cba",borderRadius:"2px"}}));break;case"split":Ae=wp.element.createElement("div",{style:{width:"100%",height:"100%",display:"flex"}},wp.element.createElement("div",{style:{width:"50%",height:"100%",backgroundColor:"#007cba",display:"flex",alignItems:"center",justifyContent:"center"}},wp.element.createElement("div",{style:{width:"70%",height:"70%",backgroundColor:"#fff",opacity:.2}})),wp.element.createElement("div",{style:{width:"50%",height:"100%",backgroundColor:"#f5f5f5",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"2px"}},wp.element.createElement("div",{style:{width:"80%",height:"3px",backgroundColor:"#333",marginBottom:"2px"}}),wp.element.createElement("div",{style:{width:"60%",height:"2px",backgroundColor:"#777",marginBottom:"3px"}}),wp.element.createElement("div",{style:{width:"40%",height:"4px",backgroundColor:"#007cba",borderRadius:"2px"}})));break;case"cover":Ae=wp.element.createElement("div",{style:{width:"100%",height:"100%",backgroundColor:"#007cba",opacity:.7,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}},wp.element.createElement("div",{style:{width:"70%",height:"3px",backgroundColor:"#fff",marginBottom:"3px"}}),wp.element.createElement("div",{style:{width:"50%",height:"2px",backgroundColor:"#fff",marginBottom:"4px"}}),wp.element.createElement("div",{style:{width:"30%",height:"4px",backgroundColor:"#fff",borderRadius:"2px"}}));break;case"box":Ae=wp.element.createElement("div",{style:{width:"90%",height:"90%",margin:"auto",border:"2px solid #007cba",borderRadius:"3px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"3px"}},wp.element.createElement("div",{style:{width:"70%",height:"3px",backgroundColor:"#333",marginBottom:"3px"}}),wp.element.createElement("div",{style:{width:"50%",height:"2px",backgroundColor:"#777",marginBottom:"4px"}}),wp.element.createElement("div",{style:{width:"30%",height:"4px",backgroundColor:"#007cba",borderRadius:"2px"}}));break;case"modern":Ae=wp.element.createElement("div",{style:{width:"100%",height:"100%",display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"center",padding:"3px",position:"relative"}},wp.element.createElement("div",{style:{position:"absolute",left:"0",top:"20%",width:"5px",height:"60%",backgroundColor:"#007cba"}}),wp.element.createElement("div",{style:{width:"70%",height:"3px",backgroundColor:"#333",marginBottom:"3px",marginLeft:"8px"}}),wp.element.createElement("div",{style:{width:"50%",height:"2px",backgroundColor:"#777",marginBottom:"4px",marginLeft:"8px"}}),wp.element.createElement("div",{style:{width:"30%",height:"4px",backgroundColor:"#007cba",borderRadius:"2px",marginLeft:"8px"}}));break;case"gradient":Ae=wp.element.createElement("div",{style:{width:"100%",height:"100%",background:"linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}},wp.element.createElement("div",{style:{width:"70%",height:"3px",backgroundColor:"#fff",marginBottom:"3px"}}),wp.element.createElement("div",{style:{width:"50%",height:"2px",backgroundColor:"#fff",marginBottom:"4px"}}),wp.element.createElement("div",{style:{width:"30%",height:"4px",backgroundColor:"#fff",borderRadius:"2px"}}));break;case"minimal":Ae=wp.element.createElement("div",{style:{width:"100%",height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"3px"}},wp.element.createElement("div",{style:{width:"70%",height:"3px",backgroundColor:"#333",marginBottom:"3px"}}),wp.element.createElement("div",{style:{width:"50%",height:"2px",backgroundColor:"#777",marginBottom:"4px"}}),wp.element.createElement("div",{style:{width:"30%",height:"1px",backgroundColor:"#007cba",marginBottom:"1px"}}),wp.element.createElement("div",{style:{width:"30%",height:"4px",backgroundColor:"#007cba",borderRadius:"2px"}}));break;case"callout":Ae=wp.element.createElement("div",{style:{width:"100%",height:"100%",backgroundColor:"#fff",border:"1px solid #eee",borderLeft:"5px solid #007cba",display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"center",padding:"5px"}},wp.element.createElement("div",{style:{width:"70%",height:"3px",backgroundColor:"#333",marginBottom:"3px"}}),wp.element.createElement("div",{style:{width:"50%",height:"2px",backgroundColor:"#777",marginBottom:"4px"}}),wp.element.createElement("div",{style:{width:"30%",height:"4px",backgroundColor:"#007cba",borderRadius:"2px"}}));break;case"banner":Ae=wp.element.createElement("div",{style:{width:"100%",height:"100%",display:"flex",flexDirection:"column",backgroundColor:"#f0f7ff",position:"relative"}},wp.element.createElement("div",{style:{height:"4px",width:"100%",backgroundColor:"#007cba"}}),wp.element.createElement("div",{style:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"3px"}},wp.element.createElement("div",{style:{width:"70%",height:"3px",backgroundColor:"#333",marginBottom:"3px"}}),wp.element.createElement("div",{style:{width:"50%",height:"2px",backgroundColor:"#777",marginBottom:"4px"}}),wp.element.createElement("div",{style:{width:"30%",height:"4px",backgroundColor:"#007cba",borderRadius:"2px"}})));break;default:Ae=wp.element.createElement("div",{style:{width:"100%",height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}},wp.element.createElement("div",{style:{width:"80%",height:"4px",backgroundColor:"#333",marginBottom:"4px"}}),wp.element.createElement("div",{style:{width:"60%",height:"2px",backgroundColor:"#777",marginBottom:"6px"}}),wp.element.createElement("div",{style:{width:"40%",height:"6px",backgroundColor:"#007cba",borderRadius:"2px"}}))}return wp.element.createElement("div",{style:Fe,onClick:()=>e({style:i.value})},wp.element.createElement("div",{style:po},i.label),wp.element.createElement("div",{style:R},Ae))},n=()=>{let i=window.digi.responsiveState.activeDevice,F="";if(N&&N!=="none"){let Hn=Co(u,"border-width",i)||"border-width: 1px 1px 1px 1px;";F=`
				border-style: ${N};
				border-color: ${I||"#e0e0e0"};
				${Hn}
			`}else F="border-style: none;";let Fe="box-shadow: none;";A&&A.enable&&(Fe=`box-shadow: ${A.position==="inset"?"inset ":""}${A.horizontal}px ${A.vertical}px ${A.blur}px ${A.spread}px ${A.color};`);let po="";w==="color"?po=`background-color: ${C||"#f5f5f5"};`:w==="image"&&T&&T.url?po=`
                background-image: url(${T.url});
                background-position: ${V||"center center"};
                background-size: ${Q||"cover"};
                background-repeat: ${be||"no-repeat"};
            `:w==="gradient"&&(po=`background: linear-gradient(135deg, ${C||"#6a11cb"} 0%, ${D||"#2575fc"} 100%);`);let R=Be&&Be[i]?`min-height: ${Be[i]}px;`:"",Ae="";X&&(X.fontFamily&&(Ae+=`font-family: ${X.fontFamily};`),X.fontSize&&X.fontSize[i]&&(Ae+=`font-size: ${X.fontSize[i]}${X.fontSizeUnit||"px"};`),X.fontWeight&&(Ae+=`font-weight: ${X.fontWeight};`),X.fontStyle&&(Ae+=`font-style: ${X.fontStyle};`),X.textTransform&&(Ae+=`text-transform: ${X.textTransform};`),X.textDecoration&&(Ae+=`text-decoration: ${X.textDecoration};`),X.lineHeight&&X.lineHeight[i]&&(Ae+=`line-height: ${X.lineHeight[i]}${X.lineHeightUnit||"em"};`),X.letterSpacing&&X.letterSpacing[i]&&(Ae+=`letter-spacing: ${X.letterSpacing[i]}${X.letterSpacingUnit||"px"};`));let co="";H&&(H.fontFamily&&(co+=`font-family: ${H.fontFamily};`),H.fontSize&&H.fontSize[i]&&(co+=`font-size: ${H.fontSize[i]}${H.fontSizeUnit||"px"};`),H.fontWeight&&(co+=`font-weight: ${H.fontWeight};`),H.fontStyle&&(co+=`font-style: ${H.fontStyle};`),H.textTransform&&(co+=`text-transform: ${H.textTransform};`),H.textDecoration&&(co+=`text-decoration: ${H.textDecoration};`),H.lineHeight&&H.lineHeight[i]&&(co+=`line-height: ${H.lineHeight[i]}${H.lineHeightUnit||"em"};`),H.letterSpacing&&H.letterSpacing[i]&&(co+=`letter-spacing: ${H.letterSpacing[i]}${H.letterSpacingUnit||"px"};`));let uo="";Y&&(Y.fontFamily&&(uo+=`font-family: ${Y.fontFamily};`),Y.fontSize&&Y.fontSize[i]&&(uo+=`font-size: ${Y.fontSize[i]}${Y.fontSizeUnit||"px"};`),Y.fontWeight&&(uo+=`font-weight: ${Y.fontWeight};`),Y.fontStyle&&(uo+=`font-style: ${Y.fontStyle};`),Y.textTransform&&(uo+=`text-transform: ${Y.textTransform};`),Y.textDecoration&&(uo+=`text-decoration: ${Y.textDecoration};`),Y.lineHeight&&Y.lineHeight[i]&&(uo+=`line-height: ${Y.lineHeight[i]}${Y.lineHeightUnit||"em"};`),Y.letterSpacing&&Y.letterSpacing[i]&&(uo+=`letter-spacing: ${Y.letterSpacing[i]}${Y.letterSpacingUnit||"px"};`));let ho=W?`max-width: ${W}${typeof W=="number"?"%":""};`:"",fo=ce?`width: ${ce}${typeof ce=="number"?"px":""};`:"width: 100%;",mo=Le?`text-align: ${Le};`:"",yo=Ue?`justify-content: ${Ue};`:"justify-content: center;",Lo=fe?`text-align: ${fe};`:"text-align: left;",Bo=ee?"@media (max-width: 767px) { ."+o+" .digiblocks-cta-split-container { flex-direction: column-reverse; } }":"",$o="";if(xe&&Se&&Se!=="none"&&Pe)switch(Se){case"background":$o=`
                        .${o} .digiblocks-cta-highlight {
                            background-color: ${Pe};
                            padding: 0 5px;
                            border-radius: 3px;
                        }
                    `;break;case"text":$o=`
                        .${o} .digiblocks-cta-highlight {
                            color: ${Pe};
                        }
                    `;break;case"underline":$o=`
                        .${o} .digiblocks-cta-highlight {
                            border-bottom: 2px solid ${Pe};
                            padding-bottom: 2px;
                        }
                    `;break}let vo="";switch(l){case"split":vo=`
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
                        background-image: url(${T?.url||""});
                        background-position: ${V||"center center"};
                        background-size: ${Q||"cover"};
                        background-repeat: ${be||"no-repeat"};
                    }
                    
                    .${o} .digiblocks-cta-content-container {
                        flex: 1;
                        ${Co(ne,"padding",i)}
                        ${C?`background-color: ${C};`:""}
                        display: flex;
                        flex-direction: column;
                        ${yo}
                    }

					@media (max-width: 767px) {
                        .${o} .digiblocks-cta-split-container {
                            flex-direction: column;
                        }
                        
                        .${o} .digiblocks-cta-image-container {
                            min-height: 200px;
                        }
                    }
                `;break;case"cover":vo=`
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
                        background-color: ${U||"rgba(0,0,0,0.5)"};
                        opacity: ${L!==void 0?L/100:.5};
                    }
                    
                    .${o} .digiblocks-cta-title {
                        color: ${h||"#fff"};
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
                `;break;case"box":vo=`
                    .${o} {
                        border: 2px solid ${I||"#e0e0e0"};
                        border-radius: 8px;
                        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
                    }
                `;break;case"modern":vo=`
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
                        background-color: ${z||"#1e73be"};
                        border-radius: 4px;
                    }
                `;break;case"gradient":vo=`
                    .${o} {
                        background: linear-gradient(135deg, ${C||"#6a11cb"} 0%, ${D||"#2575fc"} 100%);
                        color: #fff;
                        border-radius: 10px;
                    }
                    
                    .${o} .digiblocks-cta-title {
                        color: ${h||"#fff"};
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
                `;break;case"minimal":vo=`
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
                        background-color: ${z||"#1e73be"};
                    }
                `;break;case"callout":vo=`
                    .${o} {
                        border-left: 5px solid ${z||"#1e73be"};
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
                        background-color: ${z||"#1e73be"};
                        border-radius: 4px 0 0 4px;
                    }
                    
                    .${o} .digiblocks-cta-title {
                        color: ${h||"#333"};
                        margin-bottom: 15px;
                    }
                    
                    .${o} .digiblocks-cta-content {
                        color: ${s||"#666"};
                        margin-bottom: 20px;
                    }
                `;break;case"banner":vo=`
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
                        background-color: ${z||"#1e73be"};
                    }
                    
                    .${o} .digiblocks-cta-title {
                        color: ${h||"#333"};
                        margin-bottom: 15px;
                    }
                    
                    .${o} .digiblocks-cta-content {
                        color: ${s||"#666"};
                        margin-bottom: 20px;
                    }
                    
                    .${o} .digiblocks-cta-button {
                        background-color: ${z||"#1e73be"};
                        color: ${S||"#fff"};
                        border-radius: 4px;
                        padding: 10px 20px;
                        transition: all 0.3s ease;
                    }
                    
                    .${o} .digiblocks-cta-button:hover {
                        transform: translateY(-2px);
                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    }
                `;break;default:vo=""}let zo="";_&&($o=`
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
						align-items: ${Le==="center"?"center":Le==="right"?"flex-end":"flex-start"};
						gap: 1rem;
					}
					
					.${o} .digiblocks-cta-horizontal .digiblocks-cta-content-wrapper {
						width: 100%;
						text-align: ${Le};
					}
				}
			`);let Yt=xe&&Se&&Se!=="none"?`
            .${o} .digiblocks-cta-title {
                white-space: pre-wrap;
            }
        `:"",Tn=`
            .${o} .digiblocks-cta-title {
                transition: color 0.3s ease;
            }
            
            .${o} .digiblocks-cta-content {
                transition: color 0.3s ease;
            }
            
            .${o}:hover .digiblocks-cta-title {
                ${te?`color: ${te};`:""}
            }
            
            .${o}:hover .digiblocks-cta-content {
                ${to?`color: ${to};`:""}
            }
            
            .${o}:hover {
                ${D&&l!=="gradient"&&l!=="split"?`background-color: ${D};`:""}
                
                ${J&&J.enable?`
                    ${J.position==="inset"?"box-shadow: inset":"box-shadow:"} 
                    ${J.horizontal}px 
                    ${J.vertical}px 
                    ${J.blur}px 
                    ${J.spread}px 
                    ${J.color};`:""}
            }
            
            .${o} .digiblocks-cta-button {
                transition: all 0.3s ease;
            }
            
            .${o} .digiblocks-cta-button:hover {
                ${De?`background-color: ${De};`:""}
                ${r?`color: ${r};`:""}
            }
        `;return`
            /* Call to Action Block - ${o} */
            .${o} {
                ${l!=="split"?po:""}
                ${F}
				${Co(v,"border-radius",i)}
                ${Fe}
                ${l!=="split"?`${Co(ne,"padding",i)}`:""}
                ${Co(Me,"margin",i)}
                ${fo}
                ${R}
                transition: all 0.3s ease;
                position: relative;
                overflow: hidden;
            }
            
            .${o} .digiblocks-cta-container {
                ${ho}
                margin: 0 auto;
                ${l!=="split"?mo:""}
            }
            
            .${o} .digiblocks-cta-title {
                color: ${h||"#333333"};
                margin-top: 0;
                margin-bottom: 20px;
                ${Ae}
            }
            
            .${o} .digiblocks-cta-content {
                color: ${s||"#666666"};
                margin-bottom: 30px;
                ${co}
            }
            
            .${o} .digiblocks-cta-buttons {
                ${Lo}
                display: flex;
                flex-wrap: wrap;
                gap: 10px;
                ${fe==="center"?"justify-content: center;":fe==="right"?"justify-content: flex-end;":"justify-content: flex-start;"}
            }
            
            .${o} .digiblocks-cta-button {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                text-decoration: none;
                border: none;
                cursor: pointer;
                background-color: ${z||"#1e73be"};
                color: ${S||"#ffffff"};
                ${Co(oe,"padding",i)}
                ${Co(me,"border-radius",i)}
                ${uo}
            }
            
            .${o} .digiblocks-cta-button.is-full-width {
                width: 100%;
            }
            
            .${o} .digiblocks-cta-button:not(.is-primary) {
                background-color: transparent;
                color: ${z||"#1e73be"};
                border: 2px solid ${z||"#1e73be"};
            }
            
            ${vo}
            ${zo}
            ${$o}
            ${Yt}
            ${Tn}
            ${Bo}
            
            /* Responsive styles */
			@media (max-width: 991px) {
                .${o} {
                    ${l!=="split"?`${Co(ne,"padding","tablet")}`:""}
                    
					${Co(Me,"margin","tablet")}
                    
                    ${Be&&Be.tablet?`min-height: ${Be.tablet}px;`:""}
                    
                    ${N&&N!=="none"&&u&&u.tablet?`${Co(u,"border-width","tablet")}`:""}
                    
                    ${N&&N!=="none"&&v&&v.tablet?`${Co(v,"border-radius","tablet")}`:""}
                }
                
                .${o} .digiblocks-cta-title {
                    ${X&&X.fontSize&&X.fontSize.tablet?`font-size: ${X.fontSize.tablet}${X.fontSizeUnit||"px"};`:""}
                    
                    ${X&&X.lineHeight&&X.lineHeight.tablet?`line-height: ${X.lineHeight.tablet}${X.lineHeightUnit||"em"};`:""}
                    
                    ${X&&X.letterSpacing&&X.letterSpacing.tablet?`letter-spacing: ${X.letterSpacing.tablet}${X.letterSpacingUnit||"px"};`:""}
                }
                
                .${o} .digiblocks-cta-content {
                    ${H&&H.fontSize&&H.fontSize.tablet?`font-size: ${H.fontSize.tablet}${H.fontSizeUnit||"px"};`:""}
                    
                    ${H&&H.lineHeight&&H.lineHeight.tablet?`line-height: ${H.lineHeight.tablet}${H.lineHeightUnit||"em"};`:""}
                    
                    ${H&&H.letterSpacing&&H.letterSpacing.tablet?`letter-spacing: ${H.letterSpacing.tablet}${H.letterSpacingUnit||"px"};`:""}
                }
                
                .${o} .digiblocks-cta-button {
                    ${Y&&Y.fontSize&&Y.fontSize.tablet?`font-size: ${Y.fontSize.tablet}${Y.fontSizeUnit||"px"};`:""}

					${Co(oe,"padding","tablet")}
					${Co(me,"border-radius","tablet")}
                }
            }

			@media (max-width: 767px) {
                .${o} {
					${l!=="split"?`${Co(ne,"padding","mobile")}`:""}

					${Co(Me,"margin","mobile")}
					
					${Be&&Be.mobile?`min-height: ${Be.mobile}px;`:""}
					
					${N&&N!=="none"&&u&&u.mobile?`${Co(u,"border-width","mobile")}`:""}
					
					${Co(v,"border-radius","mobile")}
                }
                
                ${l==="split"?`.${o} .digiblocks-cta-split-container {
                        flex-direction: ${ee?"column-reverse":"column"};
                    }
                    
                    .${o} .digiblocks-cta-image-container {
                        min-height: 200px;
                    }
                    
                    .${o} .digiblocks-cta-content-container {
                        ${Co(ne,"padding","mobile")}
                    }`:""}
                
                .${o} .digiblocks-cta-title {
                    ${X&&X.fontSize&&X.fontSize.mobile?`font-size: ${X.fontSize.mobile}${X.fontSizeUnit||"px"};`:""}
                    
                    ${X&&X.lineHeight&&X.lineHeight.mobile?`line-height: ${X.lineHeight.mobile}${X.lineHeightUnit||"em"};`:""}
                    
                    ${X&&X.letterSpacing&&X.letterSpacing.mobile?`letter-spacing: ${X.letterSpacing.mobile}${X.letterSpacingUnit||"px"};`:""}
                }
                
                .${o} .digiblocks-cta-content {
                    ${H&&H.fontSize&&H.fontSize.mobile?`font-size: ${H.fontSize.mobile}${H.fontSizeUnit||"px"};`:""}
                    
                    ${H&&H.lineHeight&&H.lineHeight.mobile?`line-height: ${H.lineHeight.mobile}${H.lineHeightUnit||"em"};`:""}
                    
                    ${H&&H.letterSpacing&&H.letterSpacing.mobile?`letter-spacing: ${H.letterSpacing.mobile}${H.letterSpacingUnit||"px"};`:""}
                }
                
                .${o} .digiblocks-cta-button {
                    ${Y&&Y.fontSize&&Y.fontSize.mobile?`font-size: ${Y.fontSize.mobile}${Y.fontSizeUnit||"px"};`:""}
                    
					${Co(oe,"padding","mobile")}
					${Co(me,"border-radius","mobile")}
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
			${a.desktop?`
				@media (min-width: 992px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${a.tablet?`
				@media (min-width: 768px) and (max-width: 991px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${a.mobile?`
				@media (max-width: 767px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}
        `},we=()=>{if(!xe||!y)return y;let i=y.indexOf(xe);if(i===-1)return y;let F=y.substring(0,i),Fe=y.substring(i,i+xe.length),po=y.substring(i+xe.length);return wp.element.createElement(wp.element.Fragment,null,F,wp.element.createElement("span",{className:"digiblocks-cta-highlight"},Fe),po)},Ke=(i,F)=>wp.element.createElement("div",{className:"digiblocks-button-editor",key:i.id,style:{marginBottom:"20px",padding:"15px",border:"1px solid #ddd",borderRadius:"5px"}},wp.element.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"15px"}},wp.element.createElement("h3",{style:{margin:0}},ae("Button","digiblocks")," ",F+1),je.length>1&&wp.element.createElement(ti,{isDestructive:!0,onClick:()=>t(i.id),icon:"trash"},ae("Remove","digiblocks"))),wp.element.createElement(wa,{label:ae("Button Text","digiblocks"),value:i.text||"",onChange:Fe=>b(i.id,"text",Fe),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement("div",{style:{marginTop:"10px"}},wp.element.createElement(wa,{label:ae("Button URL","digiblocks"),value:i.url||"",onChange:Fe=>b(i.id,"url",Fe),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement("div",{style:{marginTop:"15px"}},wp.element.createElement(st,{label:ae("Open in new tab","digiblocks"),checked:i.openInNewTab||!1,onChange:Fe=>b(i.id,"openInNewTab",Fe),__nextHasNoMarginBottom:!0}),wp.element.createElement(st,{label:ae("Add noopener noreferrer","digiblocks"),checked:!!i.rel,onChange:Fe=>b(i.id,"rel",Fe?"noopener noreferrer":""),__nextHasNoMarginBottom:!0}),wp.element.createElement(st,{label:ae("Primary Button","digiblocks"),checked:i.isPrimary||!1,onChange:Fe=>b(i.id,"isPrimary",Fe),__nextHasNoMarginBottom:!0}),wp.element.createElement(st,{label:ae("Full Width Button","digiblocks"),checked:i.isFullWidth||!1,onChange:Fe=>b(i.id,"isFullWidth",Fe),__nextHasNoMarginBottom:!0}),wp.element.createElement(st,{label:ae("Custom Colors","digiblocks"),checked:i.customColors||!1,onChange:Fe=>b(i.id,"customColors",Fe),__nextHasNoMarginBottom:!0})),i.customColors&&wp.element.createElement("div",{style:{marginTop:"15px"}},wp.element.createElement(Zo,{title:ae("Button Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:i.backgroundColor,onChange:Fe=>b(i.id,"backgroundColor",Fe),label:ae("Background Color","digiblocks")},{value:i.textColor,onChange:Fe=>b(i.id,"textColor",Fe),label:ae("Text Color","digiblocks")},{value:i.hoverBackgroundColor,onChange:Fe=>b(i.id,"hoverBackgroundColor",Fe),label:ae("Hover Background Color","digiblocks")},{value:i.hoverTextColor,onChange:Fe=>b(i.id,"hoverTextColor",Fe),label:ae("Hover Text Color","digiblocks")}]}),wp.element.createElement(wa,{label:ae("Border Radius","digiblocks"),type:"number",value:i.borderRadius||"",onChange:Fe=>b(i.id,"borderRadius",Fe),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}))),p=()=>{switch(E){case"options":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Uo,{tab:"options",name:"general",title:ae("General","digiblocks"),initialOpen:!0},wp.element.createElement(Ic,{label:ae("CTA Style","digiblocks"),id:"cta-style-selector",className:"digiblocks-cta-style-selector",__nextHasNoMarginBottom:!0},wp.element.createElement("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px",justifyContent:"center",margin:"0 -5px"}},k.map(i=>wp.element.createElement("div",{key:i.value},Ce(i))))),wp.element.createElement(st,{label:ae("Horizontal Layout","digiblocks"),help:ae("Display content and buttons side by side","digiblocks"),checked:_||!1,onChange:i=>e({horizontalLayout:i}),__nextHasNoMarginBottom:!0}),wp.element.createElement(oi,{label:ae("Heading Tag","digiblocks"),value:P||"h2",options:G,onChange:i=>e({headingTag:i}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),l==="split"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(qn,{label:ae("Vertical Align","digiblocks"),value:Ue||"center",onChange:i=>e({verticalAlign:i}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},j.map(i=>wp.element.createElement(Gn,{key:i.value,value:i.value,label:i.label}))),wp.element.createElement(st,{label:ae("Reverse Columns on Mobile","digiblocks"),help:ae("Place the image above the text on mobile devices","digiblocks"),checked:ee||!1,onChange:i=>e({reverseColumnsMobile:i}),__nextHasNoMarginBottom:!0})),wp.element.createElement(Rt,{label:ae("Content Width","digiblocks")},wp.element.createElement(Wn,{value:W,onChange:i=>e({contentWidth:i}),min:10,max:100,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(Rt,{label:ae("Min Height","digiblocks")},wp.element.createElement(Wn,{value:Be&&Be[Xe]?Be[Xe]:0,onChange:i=>e({minHeight:{...Be||{},[Xe]:i}}),min:0,max:1e3,step:10,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}))),wp.element.createElement(Uo,{tab:"options",name:"content",title:ae("Content","digiblocks"),initialOpen:!1},wp.element.createElement(Ic,{label:ae("Title Highlight","digiblocks"),id:"title-highlight",help:ae("Enter text within the title to highlight","digiblocks"),__nextHasNoMarginBottom:!0},wp.element.createElement(wa,{value:xe||"",onChange:i=>e({highlightText:i}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),xe&&wp.element.createElement(oi,{label:ae("Highlight Type","digiblocks"),value:Se||"background",options:Ne,onChange:i=>e({highlightType:i}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),xe&&Se&&Se!=="none"&&wp.element.createElement(Zo,{title:ae("Highlight Color","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:Pe,onChange:i=>e({highlightColor:i}),label:ae("Highlight Color","digiblocks")}]})),wp.element.createElement(Uo,{tab:"options",name:"buttons",title:ae("Buttons","digiblocks"),initialOpen:!1},wp.element.createElement(qn,{label:ae("Buttons Alignment","digiblocks"),value:fe||"left",onChange:i=>e({buttonsAlign:i}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},he.map(i=>wp.element.createElement(Gn,{key:i.value,value:i.value,label:i.label}))),wp.element.createElement(Rt,{label:ae("Padding","digiblocks")},wp.element.createElement(Bi,{values:oe&&oe[Xe]?oe[Xe]:{top:10,right:20,bottom:10,left:20,unit:"px"},onChange:i=>e({buttonPadding:{...oe||{},[Xe]:i}})})),wp.element.createElement(Rt,{label:ae("Border Radius","digiblocks")},wp.element.createElement(Bi,{values:me&&me[Xe]?me[Xe]:{top:4,right:4,bottom:4,left:4,unit:"px"},onChange:i=>e({buttonBorderRadius:{...me||{},[Xe]:i}}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]})),wp.element.createElement("div",{className:"digiblocks-button-list"},je&&je.map((i,F)=>Ke(i,F))),wp.element.createElement(ti,{variant:"secondary",onClick:go,style:{marginTop:"10px",width:"100%"}},ae("Add Button","digiblocks"))));case"style":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Uo,{tab:"style",name:"colors",title:ae("Colors","digiblocks"),initialOpen:!0},wp.element.createElement(wb,{className:"digiblocks-control-tabs",activeClass:"active-tab",tabs:We},i=>i.name==="normal"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Zo,{title:ae("Text Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:h,onChange:F=>e({titleColor:F}),label:ae("Title Color","digiblocks")},{value:s,onChange:F=>e({textColor:F}),label:ae("Text Color","digiblocks")}]}),wp.element.createElement(Zo,{title:ae("Button Colors","digiblocks"),initialOpen:!1,enableAlpha:!0,colorSettings:[{value:z,onChange:F=>e({buttonColor:F}),label:ae("Button Color","digiblocks")},{value:S,onChange:F=>e({buttonTextColor:F}),label:ae("Button Text Color","digiblocks")}]}),N&&N!=="none"&&wp.element.createElement(Zo,{title:ae("Border Color","digiblocks"),initialOpen:!1,enableAlpha:!0,colorSettings:[{value:I,onChange:F=>e({borderColor:F}),label:ae("Border Color","digiblocks")}]})):wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Zo,{title:ae("Text Hover Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:te,onChange:F=>e({titleHoverColor:F}),label:ae("Title Hover Color","digiblocks")},{value:to,onChange:F=>e({textHoverColor:F}),label:ae("Text Hover Color","digiblocks")}]}),wp.element.createElement(Zo,{title:ae("Button Hover Colors","digiblocks"),initialOpen:!1,enableAlpha:!0,colorSettings:[{value:De,onChange:F=>e({buttonHoverColor:F}),label:ae("Button Hover Color","digiblocks")},{value:r,onChange:F=>e({buttonTextHoverColor:F}),label:ae("Button Text Hover Color","digiblocks")}]}),w==="color"&&l!=="gradient"&&wp.element.createElement(Zo,{title:ae("Background Hover Color","digiblocks"),initialOpen:!1,enableAlpha:!0,colorSettings:[{value:D,onChange:F=>e({backgroundHoverColor:F}),label:ae("Background Hover Color","digiblocks")}]})))),wp.element.createElement(Uo,{tab:"style",name:"background",title:ae("Background","digiblocks"),initialOpen:!1},l!=="gradient"&&wp.element.createElement(qn,{label:ae("Background Type","digiblocks"),value:w||"color",onChange:i=>e({backgroundType:i}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},d.map(i=>wp.element.createElement(Gn,{key:i.value,value:i.value,label:i.label}))),w==="color"&&l!=="gradient"&&wp.element.createElement(Zo,{title:ae("Background Color","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:C,onChange:i=>e({backgroundColor:i}),label:ae("Background Color","digiblocks")}]}),w==="gradient"||l==="gradient"?wp.element.createElement(Zo,{title:ae("Gradient Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:C,onChange:i=>e({backgroundColor:i}),label:ae("Start Color","digiblocks")},{value:D,onChange:i=>e({backgroundHoverColor:i}),label:ae("End Color","digiblocks")}]}):null,w==="image"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{style:{marginBottom:"16px"}},wp.element.createElement(En,null,wp.element.createElement(Fn,{onSelect:i=>{e({backgroundImage:{id:i.id,url:i.url,alt:i.alt||"",width:i.width,height:i.height}})},allowedTypes:["image"],value:T?.id,render:({open:i})=>wp.element.createElement(wp.element.Fragment,null,T?.url?wp.element.createElement("div",{style:{marginBottom:"16px"}},wp.element.createElement("img",{src:T.url,alt:T.alt,style:{display:"block",width:"100%",height:"auto",maxHeight:"150px",objectFit:"cover",marginBottom:"8px"}}),wp.element.createElement("div",{style:{display:"flex",gap:"8px"}},wp.element.createElement(ti,{variant:"secondary",onClick:i,style:{flexGrow:1}},ae("Replace","digiblocks")),wp.element.createElement(ti,{variant:"secondary",onClick:()=>e({backgroundImage:null}),isDestructive:!0},ae("Remove","digiblocks")))):wp.element.createElement("div",{style:{marginBottom:"8px"}},wp.element.createElement(ti,{variant:"secondary",onClick:i,icon:"format-image",style:{width:"100%"}},ae("Select Image","digiblocks"))))}))),T?.url&&!l.includes("split")&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Wn,{label:ae("Overlay Opacity (%)","digiblocks"),value:L||50,onChange:i=>e({backgroundOverlayOpacity:i}),min:0,max:100,step:5,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Zo,{title:ae("Overlay Color","digiblocks"),enableAlpha:!0,colorSettings:[{value:U,onChange:i=>e({backgroundOverlayColor:i}),label:ae("Overlay Color","digiblocks")}]}),wp.element.createElement(oi,{label:ae("Background Position","digiblocks"),value:V||"center center",options:re,onChange:i=>e({backgroundPosition:i}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(oi,{label:ae("Background Size","digiblocks"),value:Q||"cover",options:x,onChange:i=>e({backgroundSize:i}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(oi,{label:ae("Background Repeat","digiblocks"),value:be||"no-repeat",options:m,onChange:i=>e({backgroundRepeat:i}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})))),wp.element.createElement(Uo,{tab:"style",name:"typography",title:ae("Typography","digiblocks"),initialOpen:!1},wp.element.createElement(Kn,{label:ae("Title Typography","digiblocks"),value:X,onChange:i=>e({titleTypography:i})}),wp.element.createElement(Kn,{label:ae("Content Typography","digiblocks"),value:H,onChange:i=>e({contentTypography:i})}),wp.element.createElement(Kn,{label:ae("Button Typography","digiblocks"),value:Y,onChange:i=>e({buttonTypography:i})})),wp.element.createElement(Uo,{tab:"style",name:"border",title:ae("Border","digiblocks"),initialOpen:!1},wp.element.createElement(oi,{label:ae("Border Style","digiblocks"),value:N||"none",options:ge,onChange:i=>e({borderStyle:i}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),N&&N!=="none"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Rt,{label:ae("Border Width","digiblocks")},wp.element.createElement(Bi,{values:u&&u[Xe]?u[Xe]:{top:1,right:1,bottom:1,left:1,unit:"px"},onChange:i=>e({borderWidth:{...u||{},[Xe]:i}})}))),wp.element.createElement(Rt,{label:ae("Border Radius","digiblocks")},wp.element.createElement(Bi,{values:v&&v[Xe]?v[Xe]:{top:0,right:0,bottom:0,left:0,unit:"px"},onChange:i=>e({borderRadius:{...v||{},[Xe]:i}}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]}))),wp.element.createElement(Uo,{tab:"style",name:"spacing",title:ae("Spacing","digiblocks"),initialOpen:!1},wp.element.createElement(Rt,{label:ae("Padding","digiblocks")},wp.element.createElement(Bi,{values:ne&&ne[Xe]?ne[Xe]:{top:40,right:30,bottom:40,left:30,unit:"px"},onChange:i=>e({padding:{...ne||{},[Xe]:i}})})),wp.element.createElement(Rt,{label:ae("Margin","digiblocks")},wp.element.createElement(Bi,{values:Me&&Me[Xe]?Me[Xe]:{top:0,right:0,bottom:30,left:0,unit:"px"},onChange:i=>e({margin:{...Me||{},[Xe]:i}})}))),wp.element.createElement(Uo,{tab:"style",name:"shadow",title:ae("Box Shadow","digiblocks"),initialOpen:!1},wp.element.createElement(_b,{normalValue:A||{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"},hoverValue:J||{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"},onNormalChange:i=>e({boxShadow:i}),onHoverChange:i=>e({boxShadowHover:i})})));case"advanced":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Uo,{tab:"advanced",name:"animation",title:ae("Animation","digiblocks"),initialOpen:!0},wp.element.createElement(oi,{label:ae("Animation Effect","digiblocks"),value:ue||"none",options:M,onChange:i=>e({animation:i}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),ue&&ue!=="none"&&wp.element.createElement("div",{style:{marginTop:"10px"}},wp.element.createElement(ti,{variant:"secondary",isSecondary:!0,onClick:c,style:{width:"100%"}},ae("Preview Animation","digiblocks")))),wp.element.createElement(Uo,{tab:"advanced",name:"visibility",title:ae("Visibility","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control__help",style:{padding:"12px",backgroundColor:"#f0f6fc",border:"1px solid #c3ddfd",borderRadius:"4px",marginBottom:"16px"}},wp.element.createElement("strong",null,ae("Editor Note:","digiblocks")),wp.element.createElement("br",null),ae("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.","digiblocks")),wp.element.createElement(st,{label:ae("Hide on Desktop","digiblocks"),checked:a.desktop,onChange:i=>e({visibility:{...a,desktop:i}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(st,{label:ae("Hide on Tablet","digiblocks"),checked:a.tablet,onChange:i=>e({visibility:{...a,tablet:i}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(st,{label:ae("Hide on Mobile","digiblocks"),checked:a.mobile,onChange:i=>e({visibility:{...a,mobile:i}}),__nextHasNoMarginBottom:!0})),wp.element.createElement(Uo,{tab:"advanced",name:"additional",title:ae("Additional","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control html-anchor-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"html-anchor"},ae("HTML anchor","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"html-anchor",value:O||"",onChange:i=>e({anchor:i.target.value}),"aria-describedby":"html-anchor-help",autoCapitalize:"none",autoComplete:"off"})),wp.element.createElement("p",{id:"html-anchor-help",className:"components-base-control__help"},ae(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`,"digiblocks")," ",wp.element.createElement("a",{className:"components-external-link",href:"https://wordpress.org/documentation/article/page-jumps/",target:"_blank",rel:"external noreferrer noopener"},wp.element.createElement("span",{className:"components-external-link__contents"},ae("Learn more about anchors","digiblocks")),wp.element.createElement("span",{className:"components-external-link__icon","aria-label":"(opens in a new tab)"},"\u2197")))),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"additional-css-classes"},ae("Additional CSS class(es)","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"additional-css-classes",value:le||"",onChange:i=>e({customClasses:i.target.value}),"aria-describedby":"additional-css-classes-help",autoComplete:"off"})),wp.element.createElement("p",{id:"additional-css-classes-help",className:"components-base-control__help"},ae("Separate multiple classes with spaces.","digiblocks")))));default:return null}},g=vb({className:`digiblocks-cta ${o} style-${l} ${ue!=="none"?`animate-${ue}`:""} ${le||""}`,id:O||null}),He=()=>!je||je.length===0?null:wp.element.createElement("div",{className:"digiblocks-cta-buttons"},je.map(i=>{let F=["digiblocks-cta-button",i.isPrimary?"is-primary":"",i.isFullWidth?"is-full-width":""].filter(Boolean).join(" "),Fe=i.customColors?{backgroundColor:i.isPrimary?i.backgroundColor||z:"transparent",color:i.isPrimary?i.textColor||S:i.backgroundColor||z,borderColor:i.backgroundColor||z,borderStyle:"solid",borderWidth:"2px",borderRadius:i.borderRadius?`${i.borderRadius}px`:void 0}:{};return wp.element.createElement("span",{key:i.id,className:F,style:i.customColors?Fe:{}},i.text||ae("Click Here","digiblocks"))})),Je=()=>{let i=P||"h2";switch(l){case"split":return wp.element.createElement("div",{className:"digiblocks-cta-split-container"},wp.element.createElement("div",{className:"digiblocks-cta-content-container"},wp.element.createElement("div",{className:`digiblocks-cta-container ${_?"digiblocks-cta-horizontal":""}`},wp.element.createElement("div",{className:"digiblocks-cta-content-wrapper"},wp.element.createElement(_i,{tagName:i,className:"digiblocks-cta-title",value:y,onChange:F=>e({title:F}),placeholder:ae("Add title...","digiblocks"),allowedFormats:["core/bold","core/italic"]}),wp.element.createElement(_i,{tagName:"p",className:"digiblocks-cta-content",value:$,onChange:F=>e({content:F}),placeholder:ae("Add content...","digiblocks")})),He())),wp.element.createElement("div",{className:"digiblocks-cta-image-container"},wp.element.createElement(En,null,wp.element.createElement(Fn,{onSelect:F=>{e({backgroundImage:{id:F.id,url:F.url,alt:F.alt||"",width:F.width,height:F.height}})},allowedTypes:["image"],value:T?.id,render:({open:F})=>wp.element.createElement("div",{className:"digiblocks-image-upload-container"},T?.url?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("img",{src:T.url,alt:T.alt||"",onClick:F}),wp.element.createElement("button",{className:"digiblocks-change-image-button",onClick:F},ae("Change Image","digiblocks"))):wp.element.createElement("div",{className:"digiblocks-image-placeholder",onClick:F},ae("Choose Image","digiblocks")))}))));case"cover":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:"digiblocks-cta-background"}),wp.element.createElement("div",{className:"digiblocks-cta-overlay"}),wp.element.createElement("div",{className:`digiblocks-cta-container ${_?"digiblocks-cta-horizontal":""}`},wp.element.createElement("div",{className:"digiblocks-cta-content-wrapper"},wp.element.createElement(_i,{tagName:i,className:"digiblocks-cta-title",value:y,onChange:F=>e({title:F}),placeholder:ae("Add title...","digiblocks"),allowedFormats:["core/bold","core/italic"]}),wp.element.createElement(_i,{tagName:"p",className:"digiblocks-cta-content",value:$,onChange:F=>e({content:F}),placeholder:ae("Add content...","digiblocks")})),He()),!T?.url&&wp.element.createElement("div",{className:"digiblocks-image-placeholder"},wp.element.createElement(En,null,wp.element.createElement(Fn,{onSelect:F=>{e({backgroundImage:{id:F.id,url:F.url,alt:F.alt||"",width:F.width,height:F.height}})},allowedTypes:["image"],value:T?.id,render:({open:F})=>wp.element.createElement(ti,{variant:"secondary",onClick:F,icon:"format-image"},ae("Select Background Image","digiblocks"))}))));default:return wp.element.createElement("div",{className:`digiblocks-cta-container ${_?"digiblocks-cta-horizontal":""}`},wp.element.createElement("div",{className:"digiblocks-cta-content-wrapper"},wp.element.createElement(_i,{tagName:i,className:"digiblocks-cta-title",value:y,onChange:F=>e({title:F}),placeholder:ae("Add title...","digiblocks"),allowedFormats:["core/bold","core/italic"],withoutInteractiveFormatting:!0}),wp.element.createElement(_i,{tagName:"p",className:"digiblocks-cta-content",value:$,onChange:F=>e({content:F}),placeholder:ae("Add content...","digiblocks"),withoutInteractiveFormatting:!0})),He())}};return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(xb,null,wp.element.createElement(Bb,{tabs:Ge,activeTab:E,onSelect:se},p())),wp.element.createElement(yb,null,wp.element.createElement(Cb,{value:Le,onChange:i=>e({align:i})})),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:n()}}),wp.element.createElement("div",{...g},Je()))},Oc=Tb;var{useBlockProps:Nb,RichText:Ti}=window.wp.blockEditor,Hb=({attributes:ie})=>{let{id:e,anchor:K,customClasses:o,style:O,horizontalLayout:a,title:le,content:l,headingTag:_,backgroundImage:y,backgroundType:$,align:P,animation:h,buttons:s,highlightText:z,highlightType:S,highlightColor:C}=ie,w=["digiblocks-cta",e,`style-${O}`,h!=="none"?`animate-${h}`:"",o].filter(Boolean).join(" "),T=_||"h2",U=()=>!s||s.length===0?null:wp.element.createElement("div",{className:"digiblocks-cta-buttons"},s.map(V=>{let Q=["digiblocks-cta-button",V.isPrimary?"is-primary":"",V.isFullWidth?"is-full-width":""].filter(Boolean).join(" "),be=V.openInNewTab?"_blank":void 0,N=V.rel||void 0;return wp.element.createElement("a",{key:V.id,className:Q,href:V.url||"#",target:be,rel:N,"data-button-id":V.id},V.text||"Click Here")})),L=()=>{switch(O){case"split":return wp.element.createElement("div",{className:"digiblocks-cta-split-container"},wp.element.createElement("div",{className:"digiblocks-cta-content-container"},wp.element.createElement("div",{className:`digiblocks-cta-container ${a?"digiblocks-cta-horizontal":""}`},wp.element.createElement("div",{className:"digiblocks-cta-content-wrapper"},wp.element.createElement(Ti.Content,{tagName:T,className:"digiblocks-cta-title",value:le}),wp.element.createElement(Ti.Content,{tagName:"p",className:"digiblocks-cta-content",value:l})),U())),wp.element.createElement("div",{className:"digiblocks-cta-image-container"}));case"cover":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:"digiblocks-cta-background"}),wp.element.createElement("div",{className:"digiblocks-cta-overlay"}),wp.element.createElement("div",{className:`digiblocks-cta-container ${a?"digiblocks-cta-horizontal":""}`},wp.element.createElement("div",{className:"digiblocks-cta-content-wrapper"},wp.element.createElement(Ti.Content,{tagName:T,className:"digiblocks-cta-title",value:le}),wp.element.createElement(Ti.Content,{tagName:"p",className:"digiblocks-cta-content",value:l})),U()));default:return wp.element.createElement("div",{className:`digiblocks-cta-container ${a?"digiblocks-cta-horizontal":""}`},wp.element.createElement("div",{className:"digiblocks-cta-content-wrapper"},wp.element.createElement(Ti.Content,{tagName:T,className:"digiblocks-cta-title",value:le}),wp.element.createElement(Ti.Content,{tagName:"p",className:"digiblocks-cta-content",value:l})),U())}};return wp.element.createElement("div",{...Nb.save({className:w,id:K||null,"data-style":O,"data-background-type":$||"color","data-align":P||"left","data-highlight-text":z||"","data-highlight-type":S||"none","data-highlight-color":C||"#ffde59"})},L())},jc=Hb;var{__:Ct}=window.wp.i18n,{registerBlockType:zb}=window.wp.blocks,{getBlockActiveStatus:Mb}=window.wp.digiBlocks;zb("digiblocks/call-to-action",{apiVersion:2,title:digiBlocksData.blocks["call-to-action"].title,category:"digiblocks",icon:{src:()=>{let{viewbox:ie,path:e}=digiBlocksData.blocks["call-to-action"].icon;return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${ie}`,className:"digiblocks-editor-icons"},wp.element.createElement("path",{d:e}))}},description:digiBlocksData.blocks["call-to-action"].description,keywords:[Ct("cta","digiblocks"),Ct("call to action","digiblocks"),Ct("button","digiblocks"),Ct("conversion","digiblocks")],supports:{inserter:!!Mb("call-to-action"),html:!1,className:!1,customClassName:!1,anchor:!1},attributes:{id:{type:"string",default:""},anchor:{type:"string",default:""},visibility:{type:"object",default:{desktop:!1,tablet:!1,mobile:!1}},customClasses:{type:"string",default:""},style:{type:"string",default:"basic"},horizontalLayout:{type:"boolean",default:!1},title:{type:"string",default:Ct("Ready to Get Started?","digiblocks")},content:{type:"string",default:Ct("Join thousands of satisfied customers who have already taken the next step. Sign up today and experience the difference.","digiblocks")},headingTag:{type:"string",default:"h2"},titleColor:{type:"string",default:"#333333"},textColor:{type:"string",default:"#666666"},buttonColor:{type:"string",default:"#1e73be"},buttonTextColor:{type:"string",default:"#ffffff"},backgroundColor:{type:"string",default:"#f5f5f5"},backgroundType:{type:"string",default:"color"},backgroundImage:{type:"object",default:null},backgroundOverlayColor:{type:"string",default:"rgba(0,0,0,0.5)"},backgroundOverlayOpacity:{type:"number",default:50},backgroundPosition:{type:"string",default:"center center"},backgroundSize:{type:"string",default:"cover"},backgroundRepeat:{type:"string",default:"no-repeat"},borderStyle:{type:"string",default:"none"},borderWidth:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderRadius:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderColor:{type:"string",default:"#e0e0e0"},padding:{type:"object",default:{desktop:{top:40,right:30,bottom:40,left:30,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},margin:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},align:{type:"string",default:"left"},titleTypography:{type:"object"},contentTypography:{type:"object"},buttonTypography:{type:"object"},contentWidth:{type:"number"},width:{type:"string",default:"100%"},animation:{type:"string",default:"none"},boxShadow:{type:"object"},boxShadowHover:{type:"object"},buttonBorderRadius:{type:"object",default:{desktop:{top:4,right:4,bottom:4,left:4,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},buttonPadding:{type:"object",default:{desktop:{top:10,right:20,bottom:10,left:20,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},buttonsAlign:{type:"string",default:"left"},buttons:{type:"array",default:[]},titleHoverColor:{type:"string",default:""},textHoverColor:{type:"string",default:""},buttonHoverColor:{type:"string",default:""},buttonTextHoverColor:{type:"string",default:""},backgroundHoverColor:{type:"string",default:""},highlightText:{type:"string",default:""},highlightColor:{type:"string",default:"#ffde59"},highlightType:{type:"string",default:"none"},verticalAlign:{type:"string",default:"center"},reverseColumnsMobile:{type:"boolean",default:!1},minHeight:{type:"object"},gradientDirection:{type:"number",default:135},ribbonColor:{type:"string",default:"#1e73be"},ribbonTextColor:{type:"string",default:"#ffffff"},ribbonPosition:{type:"string",default:"top-right"},ribbonText:{type:"string",default:"Special Offer"}},example:{attributes:{style:"basic",title:Ct("Ready to Get Started?","digiblocks"),content:Ct("Join us today and experience the difference.","digiblocks"),buttons:[{id:"button-1",text:Ct("Sign Up Now","digiblocks"),url:"#",isPrimary:!0}],backgroundColor:"#f5f5f5"}},edit:Oc,save:jc});var{__:ao}=window.wp.i18n,{useBlockProps:Db,useInnerBlocksProps:Pb,InspectorControls:Rb,PanelColorSettings:Xn,MediaUpload:Ib,MediaUploadCheck:Lb,ButtonBlockAppender:Ob}=window.wp.blockEditor,{ToggleControl:An,SelectControl:Ni,RangeControl:es,Button:os}=window.wp.components,{useState:ts,useEffect:jb}=window.wp.element,{useSelect:Ub,useDispatch:d1}=window.wp.data,{useBlockId:Vb,getDimensionCSS:wt}=digi.utils,{tabIcons:is}=digi.icons,{ResponsiveControl:Hi,DimensionControl:Sa,BoxShadowControl:Fb,CustomTabPanel:Eb,TabPanelBody:It,GradientControl:Wb}=digi.components,qb=({attributes:ie,setAttributes:e,clientId:K})=>{let{id:o,visibility:O,width:a,order:le,hoverEffect:l,backgroundColor:_,backgroundGradient:y,backgroundImage:$,backgroundPosition:P,backgroundRepeat:h,backgroundSize:s,backgroundOverlay:z,backgroundOverlayOpacity:S,backgroundOverlayBlendMode:C,padding:w,margin:T,borderStyle:U,borderWidth:L,borderColor:V,borderRadius:Q,boxShadow:be,boxShadowHover:N}=ie;Vb(o,K,e);let[u,v]=ts(window.digi.responsiveState.activeDevice),[I,ne]=ts(()=>{if(window.digi.uiState){let r=window.digi.uiState.getActiveTab(K);if(r)return r}return"options"}),[Me,Le]=ts(!1),{parentClientId:X,hasChildBlocks:H}=Ub(r=>{let{getBlockParents:D,getBlockCount:xe}=r("core/block-editor"),Pe=D(K);return{parentClientId:Pe.length>0?Pe[0]:null,hasChildBlocks:xe(K)>0}},[K]);jb(()=>window.digi.responsiveState.subscribe(D=>{v(D)}),[]);let Y=(r,D)=>{e({width:{...a,[D]:Math.round(r*100)/100}})},W=()=>{if(!y.enable||!y.colors.length)return"";let r=y.colors.map(D=>`${D.color} ${D.position}%`).join(", ");return y.type==="radial"?`background-image: radial-gradient(circle at ${y.position}, ${r});`:`background-image: linear-gradient(${y.angle}deg, ${r});`},ce=[{label:ao("Top Left","digiblocks"),value:"top left"},{label:ao("Top Center","digiblocks"),value:"top center"},{label:ao("Top Right","digiblocks"),value:"top right"},{label:ao("Center Left","digiblocks"),value:"center left"},{label:ao("Center Center","digiblocks"),value:"center center"},{label:ao("Center Right","digiblocks"),value:"center right"},{label:ao("Bottom Left","digiblocks"),value:"bottom left"},{label:ao("Bottom Center","digiblocks"),value:"bottom center"},{label:ao("Bottom Right","digiblocks"),value:"bottom right"}],ue=[{label:ao("No Repeat","digiblocks"),value:"no-repeat"},{label:ao("Repeat","digiblocks"),value:"repeat"},{label:ao("Repeat X","digiblocks"),value:"repeat-x"},{label:ao("Repeat Y","digiblocks"),value:"repeat-y"}],A=[{label:ao("Cover","digiblocks"),value:"cover"},{label:ao("Contain","digiblocks"),value:"contain"},{label:ao("Auto","digiblocks"),value:"auto"},{label:ao("100%","digiblocks"),value:"100%"}],J=[{label:ao("None","digiblocks"),value:"none"},{label:ao("Solid","digiblocks"),value:"solid"},{label:ao("Dashed","digiblocks"),value:"dashed"},{label:ao("Dotted","digiblocks"),value:"dotted"},{label:ao("Double","digiblocks"),value:"double"}],me=[{label:ao("Normal","digiblocks"),value:"normal"},{label:ao("Multiply","digiblocks"),value:"multiply"},{label:ao("Screen","digiblocks"),value:"screen"},{label:ao("Overlay","digiblocks"),value:"overlay"},{label:ao("Darken","digiblocks"),value:"darken"},{label:ao("Lighten","digiblocks"),value:"lighten"},{label:ao("Color Dodge","digiblocks"),value:"color-dodge"},{label:ao("Color Burn","digiblocks"),value:"color-burn"},{label:ao("Hard Light","digiblocks"),value:"hard-light"},{label:ao("Soft Light","digiblocks"),value:"soft-light"},{label:ao("Difference","digiblocks"),value:"difference"},{label:ao("Exclusion","digiblocks"),value:"exclusion"},{label:ao("Hue","digiblocks"),value:"hue"},{label:ao("Saturation","digiblocks"),value:"saturation"},{label:ao("Color","digiblocks"),value:"color"},{label:ao("Luminosity","digiblocks"),value:"luminosity"}],oe=[{label:ao("None","digiblocks"),value:"none"},{label:ao("Lift","digiblocks"),value:"lift"},{label:ao("Scale","digiblocks"),value:"scale"},{label:ao("Glow","digiblocks"),value:"glow"}],fe=[{name:"options",title:ao("Layout","digiblocks"),icon:is.optionsIcon},{name:"style",title:ao("Style","digiblocks"),icon:is.styleIcon},{name:"background",title:ao("Background","digiblocks"),icon:is.backgroundIcon}],je=()=>{let r=u,D=(qe,E)=>{let se=re=>qe&&qe[re]&&(qe[re].top!==void 0&&qe[re].top!==""||qe[re].right!==void 0&&qe[re].right!==""||qe[re].bottom!==void 0&&qe[re].bottom!==""||qe[re].left!==void 0&&qe[re].left!==""),B;if(se(E))B=qe[E];else if(E==="tablet"&&se("desktop"))B=qe.desktop;else if(E==="mobile")if(se("tablet"))B=qe.tablet;else if(se("desktop"))B=qe.desktop;else return"";else return"";let c=(re,x)=>re===void 0||re===""?x==="px"?"10px":"0"+x:x==="px"&&parseFloat(re)<10?"10px":re+x,ge=B.unit||"px",M=c(B.top,ge),k=c(B.right,ge),G=c(B.bottom,ge),d=c(B.left,ge);return`padding: ${M} ${k} ${G} ${d} !important;`},xe=D(w,r),Pe=D(w,"tablet"),Se=D(w,"mobile"),Ue="";_&&(Ue+=`background-color: ${_};`);let ee=W();if(ee&&(Ue+=ee),$&&$.url){let qe=`url(${$.url})`;ee?Ue=Ue.replace(/background-image: ([^;]+);/,`background-image: ${qe}, $1;`):Ue+=`background-image: ${qe};`,Ue+=`background-position: ${P};
            background-repeat: ${h};
            background-size: ${s};`}let Be="";z&&(Be=`
            .${o}:before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: ${z};
                opacity: ${S};
                mix-blend-mode: ${C};
                z-index: 1;
                pointer-events: none;
                border-radius: inherit;
            }
            .${o} > * {
                position: relative;
                z-index: 2;
            }`);let Xe="";be&&be.enable&&(Xe=`box-shadow: ${be.horizontal}px ${be.vertical}px ${be.blur}px ${be.spread}px ${be.color};`);let q="",ye="";if(N&&N.enable){let qe=N.position==="inset"?"inset ":"";q+=`box-shadow: ${qe}${N.horizontal}px ${N.vertical}px ${N.blur}px ${N.spread}px ${N.color};`}return l==="lift"?q+="transform: translateY(-10px);":l==="scale"?q+="transform: scale(1.05);":l==="glow"&&(q+="filter: brightness(1.1);"),`
            /* Column Block - ${o} */
            .${o} {
                position: relative;
                width: ${a[r]}%;
                ${xe}
				${wt(T,"margin",r)}
                display: flex;
                flex-direction: column;
                ${le[r]!==0?`order: ${le[r]};`:""}
                ${Ue}
                ${U!=="none"?`
					border-style: ${U}!important;
					${wt(L,"border-width",r,!0)}
					border-color: ${V}!important;`:""}
                ${wt(Q,"border-radius",r)}
				${Xe}
                transition: all 0.3s ease;
            }
            
            /* Hover effects */
            .${o}:hover {
                ${q}
            }

            .${o} > div {
                width: 100%;
            }
            
            ${Be}
            
            /* Tablet styles */
            @media (max-width: 991px) {
                .${o} {
                    width: ${a.tablet}%;
					${Pe}
					${wt(T,"margin","tablet")}
                    ${le.tablet!==0?`order: ${le.tablet};`:""}
					${wt(Q,"border-radius","tablet")}
                    ${U!=="none"?`${wt(L,"border-width","tablet",!0)}`:""}
                }
            }
            
            /* Mobile styles */
            @media (max-width: 767px) {
                .${o} {
                    width: ${a.mobile}%;
					${Se}
					${wt(T,"margin","mobile")}
                    ${le.mobile!==0?`order: ${le.mobile};`:""}
					${wt(Q,"border-radius","mobile")}
                    ${U!=="none"?`${wt(L,"border-width","mobile",!0)}`:""}
                }
            }

			/* Visibility Controls */
			${O.desktop?`
				@media (min-width: 992px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${O.tablet?`
				@media (min-width: 768px) and (max-width: 991px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${O.mobile?`
				@media (max-width: 767px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}
        `},te=Db({className:`digiblocks-column ${o}`}),to=Pb(te,{templateLock:!1,renderAppender:H?void 0:()=>wp.element.createElement(Ob,{rootClientId:K})});return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Rb,null,wp.element.createElement(Eb,{tabs:fe,activeTab:I,onSelect:ne},(()=>{switch(I){case"options":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(It,{tab:"options",name:"column",title:ao("Column","digiblocks"),initialOpen:!0},wp.element.createElement(Hi,{label:ao("Width (%)","digiblocks")},wp.element.createElement(es,{value:a[u],onChange:r=>Y(r,u),min:10,max:100,step:.01,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(Hi,{label:ao("Order","digiblocks")},wp.element.createElement(es,{value:le[u],onChange:r=>e({order:{...le,[u]:r}}),min:-10,max:10,step:1,allowReset:!0,resetFallbackValue:0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}))),wp.element.createElement(It,{tab:"layout",name:"spacing",title:ao("Spacing","digiblocks"),initialOpen:!1},wp.element.createElement(Hi,{label:ao("Padding","digiblocks")},wp.element.createElement(Sa,{values:w[u],onChange:r=>e({padding:{...w,[u]:r}})})),wp.element.createElement(Hi,{label:ao("Margin","digiblocks")},wp.element.createElement(Sa,{values:T[u],onChange:r=>e({margin:{...T,[u]:r}})}))),wp.element.createElement(It,{tab:"layout",name:"effect",title:ao("Hover Effect","digiblocks"),initialOpen:!1},wp.element.createElement(Ni,{label:ao("Hover Effect","digiblocks"),value:l||"none",options:oe,onChange:r=>e({hoverEffect:r}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(It,{tab:"layout",name:"visibility",title:ao("Visibility","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control__help",style:{padding:"12px",backgroundColor:"#f0f6fc",border:"1px solid #c3ddfd",borderRadius:"4px",marginBottom:"16px"}},wp.element.createElement("strong",null,ao("Editor Note:","digiblocks")),wp.element.createElement("br",null),ao("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.","digiblocks")),wp.element.createElement(An,{label:ao("Hide on Desktop","digiblocks"),checked:O.desktop,onChange:r=>e({visibility:{...O,desktop:r}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(An,{label:ao("Hide on Tablet","digiblocks"),checked:O.tablet,onChange:r=>e({visibility:{...O,tablet:r}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(An,{label:ao("Hide on Mobile","digiblocks"),checked:O.mobile,onChange:r=>e({visibility:{...O,mobile:r}}),__nextHasNoMarginBottom:!0})));case"style":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(It,{tab:"style",name:"borders",title:ao("Borders & Radius","digiblocks"),initialOpen:!0},wp.element.createElement(Ni,{label:ao("Border Style","digiblocks"),value:U,options:J,onChange:r=>e({borderStyle:r}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),U!=="none"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Hi,{label:ao("Border Width","digiblocks")},wp.element.createElement(Sa,{values:L[u],onChange:r=>e({borderWidth:{...L,[u]:r}})})),wp.element.createElement(Xn,{title:"",enableAlpha:!0,colorSettings:[{value:V,onChange:r=>e({borderColor:r}),label:ao("Border Color","digiblocks")}]})),wp.element.createElement(Hi,{label:ao("Border Radius","digiblocks")},wp.element.createElement(Sa,{values:Q[u],onChange:r=>e({borderRadius:{...Q,[u]:r}}),units:[{label:"px",value:"px"},{label:"%",value:"%"},{label:"em",value:"em"}]})),wp.element.createElement(Fb,{normalValue:be,hoverValue:N,onNormalChange:r=>e({boxShadow:r}),onHoverChange:r=>e({boxShadowHover:r})})));case"background":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(It,{tab:"background",name:"background",title:ao("Background","digiblocks"),initialOpen:!0},wp.element.createElement(Xn,{title:ao("Background Color","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:_,onChange:r=>e({backgroundColor:r}),label:ao("Background Color","digiblocks")}]}),wp.element.createElement("div",{className:"digiblocks-media-control"},wp.element.createElement("p",{className:"components-base-control__label"},ao("Background Image","digiblocks")),wp.element.createElement(Lb,null,wp.element.createElement(Ib,{onSelect:r=>{e({backgroundImage:{url:r.url,id:r.id,alt:r.alt||"",size:r.sizes?.full?.url?"full":""}})},allowedTypes:["image"],value:$?.id,render:({open:r})=>wp.element.createElement("div",{className:"digiblocks-media-upload-wrapper"},$?.url?wp.element.createElement("div",{className:"digiblocks-media-preview"},wp.element.createElement("img",{src:$.url,alt:$.alt||""}),wp.element.createElement("div",{className:"digiblocks-media-controls"},wp.element.createElement(os,{isPrimary:!0,onClick:r},wp.element.createElement("span",{class:"dashicon dashicons dashicons-edit"})),wp.element.createElement(os,{isDestructive:!0,onClick:()=>e({backgroundImage:{url:"",id:0,alt:"",size:""}})},wp.element.createElement("span",{class:"dashicon dashicons dashicons-trash"})))):wp.element.createElement(os,{className:"digiblocks-media-upload-button",isPrimary:!0,onClick:r},ao("Select Image","digiblocks")))}))),$?.url&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Ni,{label:ao("Background Position","digiblocks"),value:P,options:ce,onChange:r=>e({backgroundPosition:r}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Ni,{label:ao("Background Repeat","digiblocks"),value:h,options:ue,onChange:r=>e({backgroundRepeat:r}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Ni,{label:ao("Background Size","digiblocks"),value:s,options:A,onChange:r=>e({backgroundSize:r}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}))),wp.element.createElement(It,{tab:"background",name:"gradient",title:ao("Background Gradient","digiblocks"),initialOpen:!1},wp.element.createElement(Wb,{value:y,onChange:r=>e({backgroundGradient:r})})),wp.element.createElement(It,{tab:"background",name:"overlay",title:ao("Background Overlay","digiblocks"),initialOpen:!1},wp.element.createElement(Xn,{title:ao("Overlay Color","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:z,onChange:r=>e({backgroundOverlay:r}),label:ao("Overlay Color","digiblocks")}]}),z&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(es,{label:ao("Overlay Opacity","digiblocks"),value:S,onChange:r=>e({backgroundOverlayOpacity:r}),min:0,max:1,step:.01,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Ni,{label:ao("Blend Mode","digiblocks"),value:C,options:me,onChange:r=>e({backgroundOverlayBlendMode:r}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}))));default:return null}})())),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:je()}}),wp.element.createElement("div",{...to}))},Uc=qb;var{__:p1}=window.wp.i18n,{useBlockProps:Gb,useInnerBlocksProps:Qb}=window.wp.blockEditor,Jb=({attributes:ie})=>{let{id:e,backgroundOverlay:K}=ie,o=`digiblocks-column ${e}`,O=Gb.save({className:o}),a=Qb.save(O);return wp.element.createElement("div",{...a})},Vc=Jb;var{__:Fc}=window.wp.i18n,{registerBlockType:Yb}=window.wp.blocks;Yb("digiblocks/column",{apiVersion:2,title:Fc("Column","digiblocks"),parent:["digiblocks/container"],icon:{src:()=>wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512",width:"24",height:"24"},wp.element.createElement("path",{d:"M448 64l0 384 128 0c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L448 64zm-32 0L224 64l0 384 192 0 0-384zM192 448l0-384L64 64C46.3 64 32 78.3 32 96l0 320c0 17.7 14.3 32 32 32l128 0zM0 96C0 60.7 28.7 32 64 32l512 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96z"}))},description:Fc("Flexible column component to use within Container blocks","digiblocks"),supports:{inserter:!1,reusable:!1,html:!1,className:!1,customClassName:!1,anchor:!1},attributes:{id:{type:"string",default:""},visibility:{type:"object",default:{desktop:!1,tablet:!1,mobile:!1}},width:{type:"object",default:{desktop:100,tablet:100,mobile:100}},order:{type:"object",default:{desktop:0,tablet:0,mobile:0}},hoverEffect:{type:"string",default:"none"},backgroundColor:{type:"string",default:""},backgroundGradient:{type:"object",default:{enable:!1,type:"linear",angle:90,position:"center center",colors:[{color:"#667eea",position:0},{color:"#764ba2",position:100}]}},backgroundImage:{type:"object",default:{url:"",id:0,alt:"",size:""}},backgroundPosition:{type:"string",default:"center center"},backgroundRepeat:{type:"string",default:"no-repeat"},backgroundSize:{type:"string",default:"cover"},backgroundOverlay:{type:"string",default:""},backgroundOverlayOpacity:{type:"number",default:.7},backgroundOverlayBlendMode:{type:"string",default:"normal"},padding:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},margin:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderStyle:{type:"string",default:"none"},borderWidth:{type:"object",default:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderColor:{type:"string",default:"#e0e0e0"},borderRadius:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},boxShadow:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},boxShadowHover:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}}},edit:Uc,save:Vc});var{__:Qe}=window.wp.i18n,{useBlockProps:Zb,InspectorControls:Ec,PanelColorSettings:Wc,BlockControls:Kb,AlignmentToolbar:Xb}=window.wp.blockEditor,{SelectControl:$a,RangeControl:qc,TabPanel:Ab,ToggleControl:rt,TextControl:vl,DateTimePicker:eu,Button:ou,__experimentalToggleGroupControl:tu,__experimentalToggleGroupControlOption:iu,BaseControl:lu}=window.wp.components,{useState:xl,useEffect:ls,useRef:Gc}=window.wp.element,{useBlockId:au,getDimensionCSS:ct,animations:as,animationPreview:Qc}=digi.utils,{tabIcons:ns}=digi.icons,{ResponsiveControl:zi,DimensionControl:_a,TypographyControl:Jc,BoxShadowControl:nu,CustomTabPanel:Yc,TabPanelBody:ii}=digi.components,su=({attributes:ie,setAttributes:e,clientId:K})=>{let{id:o,anchor:O,visibility:a,customClasses:le,endDate:l,showDays:_,showHours:y,showMinutes:$,showSeconds:P,daysLabel:h,hoursLabel:s,minutesLabel:z,secondsLabel:S,digitColor:C,digitBackground:w,digitHoverColor:T,digitHoverBackground:U,labelColor:L,labelHoverColor:V,separatorColor:Q,separatorHoverColor:be,boxStyle:N,boxBorderRadius:u,boxPadding:v,boxMargin:I,boxBorderWidth:ne,boxBorderColor:Me,showBoxShadow:Le,boxShadow:X,boxShadowHover:H,itemSpacing:Y,align:W,labelPosition:ce,labelSpacing:ue,titleTypography:A,contentTypography:J,expiredMessage:me,animation:oe,displaySeparator:fe,separatorType:je,boxesEqual:te,style:to}=ie;au(o,K,e);let[De,r]=xl(window.digi.responsiveState.activeDevice),[D,xe]=xl({days:30,hours:23,minutes:59,seconds:59}),[Pe,Se]=xl(!1),Ue=Gc(null);ls(()=>window.digi.responsiveState.subscribe(Ne=>{r(Ne)}),[]);let[ee,Be]=xl(()=>{if(window.digi.uiState){let j=window.digi.uiState.getActiveTab(K);if(j)return j}return"options"}),[Xe,q]=xl("normal");ls(()=>{if(!l){let Ne=new Date;Ne.setDate(Ne.getDate()+7),e({endDate:Ne.toISOString()})}let j=()=>{let Ne=new Date,f=new Date;l?f=new Date(l):f.setDate(f.getDate()+30);let Ge=f-Ne;if(Ge>0){let We=Math.floor(Ge/864e5),go=Math.floor(Ge%(1e3*60*60*24)/(1e3*60*60)),t=Math.floor(Ge%(1e3*60*60)/(1e3*60)),b=Math.floor(Ge%(1e3*60)/1e3);xe({days:We,hours:go,minutes:t,seconds:b})}else xe({days:0,hours:0,minutes:0,seconds:0})};return j(),Ue.current=setInterval(j,1e3),()=>{Ue.current&&clearInterval(Ue.current)}},[l,e]);let ye=Gc(null);ls(()=>{if(oe&&oe!=="none"){let j=setTimeout(()=>{Qc(o,oe,as,ye)},100);return()=>clearTimeout(j)}},[oe]);let qe=()=>{Qc(o,oe,as,ye)},E=[{label:Qe("Default","digiblocks"),value:"default"},{label:Qe("Filled","digiblocks"),value:"filled"},{label:Qe("Outlined","digiblocks"),value:"outlined"},{label:Qe("Pill","digiblocks"),value:"pill"},{label:Qe("Rounded","digiblocks"),value:"rounded"},{label:Qe("Circle","digiblocks"),value:"circle"}],se=[{label:Qe("Bottom","digiblocks"),value:"bottom"},{label:Qe("Top","digiblocks"),value:"top"},{label:Qe("Inside","digiblocks"),value:"inside"}],B=[{label:Qe("Boxes","digiblocks"),value:"boxes"},{label:Qe("Simple","digiblocks"),value:"simple"}],c=[{label:Qe("Colon","digiblocks"),value:"colon"},{label:Qe("Hyphen","digiblocks"),value:"hyphen"},{label:Qe("Slash","digiblocks"),value:"slash"},{label:Qe("Dot","digiblocks"),value:"dot"}],ge=[{label:Qe("None","digiblocks"),value:"none"},...Object.keys(as).map(j=>({label:j.replace(/-/g," ").replace(/\b\w/g,Ne=>Ne.toUpperCase()),value:j}))],M=[{name:"options",title:Qe("Options","digiblocks"),icon:ns.optionsIcon},{name:"style",title:Qe("Style","digiblocks"),icon:ns.styleIcon},{name:"advanced",title:Qe("Advanced","digiblocks"),icon:ns.advancedIcon}],k=[{name:"normal",title:Qe("Normal","digiblocks"),className:"digiblocks-tab-1 normal"},{name:"hover",title:Qe("Hover","digiblocks"),className:"digiblocks-tab-2 hover"}],G=j=>j.toString().padStart(2,"0"),d=()=>{let j=De,Ne=Y&&Y[j]!==void 0?Y[j]:20,f=ue&&ue[j]!==void 0?ue[j]:5,Ge="";A&&(A.fontFamily&&(Ge+=`font-family: ${A.fontFamily};`),A.fontSize&&A.fontSize[j]&&(Ge+=`font-size: ${A.fontSize[j]}${A.fontSizeUnit||"px"};`),A.fontWeight&&(Ge+=`font-weight: ${A.fontWeight};`),A.fontStyle&&(Ge+=`font-style: ${A.fontStyle};`),A.textTransform&&(Ge+=`text-transform: ${A.textTransform};`),A.lineHeight&&A.lineHeight[j]&&(Ge+=`line-height: ${A.lineHeight[j]}${A.lineHeightUnit||"em"};`),A.letterSpacing&&A.letterSpacing[j]&&(Ge+=`letter-spacing: ${A.letterSpacing[j]}${A.letterSpacingUnit||"px"};`));let We="";J&&(J.fontFamily&&(We+=`font-family: ${J.fontFamily};`),J.fontSize&&J.fontSize[j]&&(We+=`font-size: ${J.fontSize[j]}${J.fontSizeUnit||"px"};`),J.fontWeight&&(We+=`font-weight: ${J.fontWeight};`),J.fontStyle&&(We+=`font-style: ${J.fontStyle};`),J.textTransform&&(We+=`text-transform: ${J.textTransform};`),J.lineHeight&&J.lineHeight[j]&&(We+=`line-height: ${J.lineHeight[j]}${J.lineHeightUnit||"em"};`),J.letterSpacing&&J.letterSpacing[j]&&(We+=`letter-spacing: ${J.letterSpacing[j]}${J.letterSpacingUnit||"px"};`));let go="";Le&&X&&X.enable&&(go=`box-shadow: ${X.position==="inset"?"inset ":""}${X.horizontal}px ${X.vertical}px ${X.blur}px ${X.spread}px ${X.color};`);let t="";Le&&H&&H.enable&&(t=`box-shadow: ${H.position==="inset"?"inset ":""}${H.horizontal}px ${H.vertical}px ${H.blur}px ${H.spread}px ${H.color};`);let b="";if(to==="boxes")switch(N){case"filled":b=`
                        .${o} .digiblocks-countdown-item-inner {
                            background-color: ${w||"#f0f0f0"};
                            color: ${C||"#333333"};
							${ct(v,"padding",j)}
							${ct(u,"border-radius",j)}
                            ${go}
                        }
                        .${o} .digiblocks-countdown-item:hover .digiblocks-countdown-item-inner {
                            background-color: ${U||w||"#e0e0e0"};
                            color: ${T||C||"#333333"};
                            ${t}
                        }
                    `;break;case"outlined":b=`
                        .${o} .digiblocks-countdown-item-inner {
                            background-color: transparent;
                            color: ${C||"#333333"};
							${ct(v,"padding",j)}
							border-style: solid;
							${ct(ne,"border-width",j)}
							border-color: ${Me||"#e0e0e0"};
							${ct(u,"border-radius",j)}
							${ct(v,"padding",j)}
                            ${go}
                        }
                        .${o} .digiblocks-countdown-item:hover .digiblocks-countdown-item-inner {
                            background-color: ${U||"transparent"};
                            color: ${T||C||"#333333"};
                            ${t}
                        }
                    `;break;case"pill":b=`
                        .${o} .digiblocks-countdown-item-inner {
                            background-color: ${w||"#f0f0f0"};
                            color: ${C||"#333333"};
                            border-radius: 50px;
							${ct(v,"padding",j)}
                            ${go}
                        }
                        .${o} .digiblocks-countdown-item:hover .digiblocks-countdown-item-inner {
                            background-color: ${U||w||"#e0e0e0"};
                            color: ${T||C||"#333333"};
                            ${t}
                        }
                    `;break;case"rounded":b=`
                        .${o} .digiblocks-countdown-item-inner {
                            background-color: ${w||"#f0f0f0"};
                            color: ${C||"#333333"};
                            border-radius: 8px;
							${ct(v,"padding",j)}
                            ${go}
                        }
                        .${o} .digiblocks-countdown-item:hover .digiblocks-countdown-item-inner {
                            background-color: ${U||w||"#e0e0e0"};
                            color: ${T||C||"#333333"};
                            ${t}
                        }
                    `;break;case"circle":b=`
                        .${o} .digiblocks-countdown-item-inner {
                            background-color: ${w||"#f0f0f0"};
                            color: ${C||"#333333"};
                            border-radius: 50%;
                            aspect-ratio: 1/1;
                            display: flex;
                            justify-content: center;
                            align-items: center;
							${ct(v,"padding",j)}
                            ${go}
                        }
                        .${o} .digiblocks-countdown-item:hover .digiblocks-countdown-item-inner {
                            background-color: ${U||w||"#e0e0e0"};
                            color: ${T||C||"#333333"};
                            ${t}
                        }
                    `;break;case"default":default:b=`
                        .${o} .digiblocks-countdown-item-inner {
                            color: ${C||"#333333"};
                            ${go}
                        }
                        .${o} .digiblocks-countdown-item:hover .digiblocks-countdown-item-inner {
                            color: ${T||C||"#333333"};
                            ${t}
                        }
                    `;break}else b=`
                .${o} .digiblocks-countdown-item-inner {
                    color: ${C||"#333333"};
                }
                .${o} .digiblocks-countdown-item:hover .digiblocks-countdown-item-inner {
                    color: ${T||C||"#333333"};
                }
            `;let Ce="";if(fe){let Ke="";switch(je){case"colon":Ke=":";break;case"hyphen":Ke="-";break;case"slash":Ke="/";break;case"dot":Ke="\u2022";break;default:Ke=":";break}Ce=`
                .${o} .digiblocks-countdown-separator {
                    color: ${Q||"#333333"};
                    font-size: ${A&&A.fontSize&&A.fontSize[j]?A.fontSize[j]+(A.fontSizeUnit||"px"):"2rem"};
                }
                .${o} .digiblocks-countdown-separator::before {
                    content: "${Ke}";
                }
                .${o}:hover .digiblocks-countdown-separator {
                    color: ${be||Q||"#333333"};
                }
            `}let n="";to==="boxes"&&te&&(n=`
                .${o} .digiblocks-countdown-item {
                    flex: 1 0 0;
                }
                .${o} .digiblocks-countdown-item-inner {
                    width: 100%;
                    text-align: center;
                    box-sizing: border-box;
                }
            `);let we="";return ce==="top"?we=`
                .${o} .digiblocks-countdown-item {
                    flex-direction: column-reverse;
                }
                .${o} .digiblocks-countdown-label {
                    margin-bottom: ${f}px;
                    margin-top: 0;
                }
            `:ce==="inside"?to==="boxes"?we=`
                    .${o} .digiblocks-countdown-item {
                        flex-direction: column;
                    }
                    .${o} .digiblocks-countdown-digit {
                        margin-bottom: ${f}px;
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
                `:we=`
                    .${o} .digiblocks-countdown-item {
                        flex-direction: column;
                    }
                    .${o} .digiblocks-countdown-label {
                        margin-top: ${f}px;
                    }
                `:we=`
                .${o} .digiblocks-countdown-item {
                    flex-direction: column;
                }
                .${o} .digiblocks-countdown-label {
                    margin-top: ${f}px;
                }
            `,`
            /* Countdown Block - ${o} */
            .${o} {
				${ct(I,"margin",j)}
                text-align: ${W};
                display: block;
            }
            
            .${o} .digiblocks-countdown-container {
                display: inline-flex;
                flex-wrap: wrap;
                justify-content: ${W==="center"?"center":W==="right"?"flex-end":"flex-start"};
                gap: ${Ne}px;
            }
            
            .${o} .digiblocks-countdown-item {
                display: flex;
                align-items: center;
            }
            
            .${o} .digiblocks-countdown-item-inner {
                transition: all 0.3s ease;
            }
            
            .${o} .digiblocks-countdown-digit {
                ${Ge}
            }
            
            .${o} .digiblocks-countdown-label {
                ${We}
                color: ${L||"#666666"};
                transition: color 0.3s ease;
            }
            
            .${o}:hover .digiblocks-countdown-label {
                color: ${V||L||"#666666"};
            }
            
            .${o} .digiblocks-countdown-expired {
                ${Ge}
                color: ${C||"#333333"};
                text-align: ${W};
            }
            
            /* Box style specific */
            ${b}
            
            /* Separator styles */
            ${Ce}
            
            /* Equal width styles */
            ${n}
            
            /* Label positioning */
            ${we}

			/* Visibility Controls */
			${a.desktop?`
				@media (min-width: 992px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${a.tablet?`
				@media (min-width: 768px) and (max-width: 991px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${a.mobile?`
				@media (max-width: 767px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}
        `},re=()=>{switch(ee){case"options":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:"components-panel__body is-opened"},wp.element.createElement(tu,{label:Qe("Style","digiblocks"),value:to,onChange:j=>e({style:j}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},B.map(j=>wp.element.createElement(iu,{key:j.value,value:j.value,label:j.label}))),to==="boxes"&&wp.element.createElement($a,{label:Qe("Box Style","digiblocks"),value:N,options:E,onChange:j=>e({boxStyle:j}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),to==="boxes"&&wp.element.createElement(rt,{label:Qe("Equal Width Boxes","digiblocks"),checked:!!te,onChange:()=>e({boxesEqual:!te}),help:Qe("Make all countdown boxes the same width","digiblocks"),__nextHasNoMarginBottom:!0}),wp.element.createElement($a,{label:Qe("Label Position","digiblocks"),value:ce,options:se,onChange:j=>e({labelPosition:j}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(rt,{label:Qe("Show Separators","digiblocks"),checked:!!fe,onChange:()=>e({displaySeparator:!fe}),__nextHasNoMarginBottom:!0}),fe&&wp.element.createElement($a,{label:Qe("Separator Type","digiblocks"),value:je,options:c,onChange:j=>e({separatorType:j}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(lu,{label:Qe("End Date & Time","digiblocks"),id:"countdown-date-time",__nextHasNoMarginBottom:!0},wp.element.createElement(eu,{currentDate:l,onChange:j=>e({endDate:j}),is12Hour:!0})),wp.element.createElement(vl,{label:Qe("Expired Message","digiblocks"),value:me,onChange:j=>e({expiredMessage:j}),placeholder:Qe("Time's up!","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(vl,{label:Qe("Days Label","digiblocks"),value:h,onChange:j=>e({daysLabel:j}),placeholder:Qe("Days","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(vl,{label:Qe("Hours Label","digiblocks"),value:s,onChange:j=>e({hoursLabel:j}),placeholder:Qe("Hours","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(vl,{label:Qe("Minutes Label","digiblocks"),value:z,onChange:j=>e({minutesLabel:j}),placeholder:Qe("Minutes","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(vl,{label:Qe("Seconds Label","digiblocks"),value:S,onChange:j=>e({secondsLabel:j}),placeholder:Qe("Seconds","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(rt,{label:Qe("Show Days","digiblocks"),checked:_,onChange:()=>e({showDays:!_}),__nextHasNoMarginBottom:!0}),wp.element.createElement(rt,{label:Qe("Show Hours","digiblocks"),checked:y,onChange:()=>e({showHours:!y}),__nextHasNoMarginBottom:!0}),wp.element.createElement(rt,{label:Qe("Show Minutes","digiblocks"),checked:$,onChange:()=>e({showMinutes:!$}),__nextHasNoMarginBottom:!0}),wp.element.createElement(rt,{label:Qe("Show Seconds","digiblocks"),checked:P,onChange:()=>e({showSeconds:!P}),__nextHasNoMarginBottom:!0})));case"style":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(ii,{tab:"style",name:"colors",title:Qe("Colors","digiblocks"),initialOpen:!0},wp.element.createElement(Ab,{className:"digiblocks-control-tabs",activeClass:"active-tab",tabs:k},j=>j.name==="normal"?wp.element.createElement(Wc,{title:Qe("Normal Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:C,onChange:Ne=>e({digitColor:Ne}),label:Qe("Digit Color","digiblocks")},...to==="boxes"?[{value:w,onChange:Ne=>e({digitBackground:Ne}),label:Qe("Box Background","digiblocks")}]:[],{value:L,onChange:Ne=>e({labelColor:Ne}),label:Qe("Label Color","digiblocks")},...fe?[{value:Q,onChange:Ne=>e({separatorColor:Ne}),label:Qe("Separator Color","digiblocks")}]:[],...to==="boxes"&&N==="outlined"?[{value:Me,onChange:Ne=>e({boxBorderColor:Ne}),label:Qe("Border Color","digiblocks")}]:[]]}):wp.element.createElement(Wc,{title:Qe("Hover Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:T,onChange:Ne=>e({digitHoverColor:Ne}),label:Qe("Digit Color","digiblocks")},...to==="boxes"?[{value:U,onChange:Ne=>e({digitHoverBackground:Ne}),label:Qe("Box Background","digiblocks")}]:[],{value:V,onChange:Ne=>e({labelHoverColor:Ne}),label:Qe("Label Color","digiblocks")},...fe?[{value:be,onChange:Ne=>e({separatorHoverColor:Ne}),label:Qe("Separator Color","digiblocks")}]:[]]}))),wp.element.createElement(ii,{tab:"style",name:"typography",title:Qe("Typography","digiblocks"),initialOpen:!1},wp.element.createElement(Jc,{label:Qe("Digit Typography","digiblocks"),value:A,onChange:j=>e({titleTypography:j}),defaults:{fontSize:{desktop:32,tablet:28,mobile:24},fontSizeUnit:"px",lineHeight:{desktop:1.2,tablet:1.2,mobile:1.2},lineHeightUnit:"em",fontWeight:"600"}}),wp.element.createElement(Jc,{label:Qe("Label Typography","digiblocks"),value:J,onChange:j=>e({contentTypography:j}),defaults:{fontSize:{desktop:14,tablet:13,mobile:12},fontSizeUnit:"px",lineHeight:{desktop:1.4,tablet:1.4,mobile:1.4},lineHeightUnit:"em"}})),to==="boxes"&&wp.element.createElement(ii,{tab:"style",name:"boxStyles",title:Qe("Box Style","digiblocks"),initialOpen:!1},wp.element.createElement(zi,{label:Qe("Border Radius","digiblocks")},wp.element.createElement(_a,{values:u&&u[De]?u[De]:{top:4,right:4,bottom:4,left:4,unit:"px"},onChange:j=>e({boxBorderRadius:{...u,[De]:j}}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]})),N==="outlined"&&wp.element.createElement(zi,{label:Qe("Border Width","digiblocks")},wp.element.createElement(_a,{values:ne&&ne[De]?ne[De]:{top:1,right:1,bottom:1,left:1,unit:"px"},onChange:j=>e({boxBorderWidth:{...ne,[De]:j}})})),wp.element.createElement(zi,{label:Qe("Padding","digiblocks")},wp.element.createElement(_a,{values:v&&v[De]?v[De]:{top:10,right:10,bottom:10,left:10,unit:"px"},onChange:j=>e({boxPadding:{...v,[De]:j}})})),wp.element.createElement(zi,{label:Qe("Margin","digiblocks")},wp.element.createElement(_a,{values:I&&I[De]?I[De]:{top:0,right:0,bottom:0,left:0,unit:"px"},onChange:j=>e({boxMargin:{...I,[De]:j}})})),wp.element.createElement(rt,{label:Qe("Box Shadow","digiblocks"),checked:!!Le,onChange:()=>e({showBoxShadow:!Le}),__nextHasNoMarginBottom:!0}),Le&&wp.element.createElement(nu,{normalValue:X,hoverValue:H,onNormalChange:j=>e({boxShadow:j}),onHoverChange:j=>e({boxShadowHover:j})})),wp.element.createElement(ii,{tab:"style",name:"spacing",title:Qe("Spacing","digiblocks"),initialOpen:!1},wp.element.createElement(zi,{label:Qe("Items Spacing","digiblocks")},wp.element.createElement(qc,{value:Y&&Y[De]!==void 0?Y[De]:20,onChange:j=>e({itemSpacing:{...Y,[De]:j}}),min:0,max:100,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(zi,{label:Qe("Label Spacing","digiblocks")},wp.element.createElement(qc,{value:ue&&ue[De]!==void 0?ue[De]:5,onChange:j=>e({labelSpacing:{...ue,[De]:j}}),min:0,max:50,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}))));case"advanced":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(ii,{tab:"advanced",name:"animation",title:Qe("Animation","digiblocks"),initialOpen:!0},wp.element.createElement($a,{label:Qe("Animation Effect","digiblocks"),value:oe,options:ge,onChange:j=>e({animation:j}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),oe&&oe!=="none"&&wp.element.createElement("div",{style:{marginTop:"10px"}},wp.element.createElement(ou,{variant:"secondary",isSecondary:!0,onClick:qe,disabled:Pe,style:{width:"100%"}},Qe(Pe?"Animating...":"Preview Animation","digiblocks")))),wp.element.createElement(ii,{tab:"advanced",name:"visibility",title:Qe("Visibility","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control__help",style:{padding:"12px",backgroundColor:"#f0f6fc",border:"1px solid #c3ddfd",borderRadius:"4px",marginBottom:"16px"}},wp.element.createElement("strong",null,Qe("Editor Note:","digiblocks")),wp.element.createElement("br",null),Qe("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.","digiblocks")),wp.element.createElement(rt,{label:Qe("Hide on Desktop","digiblocks"),checked:a.desktop,onChange:j=>e({visibility:{...a,desktop:j}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(rt,{label:Qe("Hide on Tablet","digiblocks"),checked:a.tablet,onChange:j=>e({visibility:{...a,tablet:j}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(rt,{label:Qe("Hide on Mobile","digiblocks"),checked:a.mobile,onChange:j=>e({visibility:{...a,mobile:j}}),__nextHasNoMarginBottom:!0})),wp.element.createElement(ii,{tab:"advanced",name:"additional",title:Qe("Additional","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control html-anchor-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"html-anchor"},Qe("HTML anchor","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"html-anchor",value:O||"",onChange:j=>e({anchor:j.target.value}),"aria-describedby":"html-anchor-help",autoCapitalize:"none",autoComplete:"off"})),wp.element.createElement("p",{id:"html-anchor-help",className:"components-base-control__help"},Qe(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`,"digiblocks")," ",wp.element.createElement("a",{className:"components-external-link",href:"https://wordpress.org/documentation/article/page-jumps/",target:"_blank",rel:"external noreferrer noopener"},wp.element.createElement("span",{className:"components-external-link__contents"},Qe("Learn more about anchors","digiblocks")),wp.element.createElement("span",{className:"components-external-link__icon","aria-label":"(opens in a new tab)"},"\u2197")))),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"additional-css-classes"},Qe("Additional CSS class(es)","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"additional-css-classes",value:le||"",onChange:j=>e({customClasses:j.target.value}),"aria-describedby":"additional-css-classes-help",autoComplete:"off"})),wp.element.createElement("p",{id:"additional-css-classes-help",className:"components-base-control__help"},Qe("Separate multiple classes with spaces.","digiblocks")))));default:return null}},x=Zb({className:`digiblocks-countdown ${o} ${le||""}`,id:O||null});if(!_&&!y&&!$&&!P)return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Ec,null,wp.element.createElement(Yc,{tabs:M,activeTab:ee,onSelect:Be},re())),wp.element.createElement("div",{...x,style:{textAlign:W}},wp.element.createElement("div",{className:"digiblocks-countdown-error"},Qe("Please enable at least one time unit in the block settings.","digiblocks"))));let m=()=>{let{days:j,hours:Ne,minutes:f,seconds:Ge}=D,We=[];return _&&(We.push(wp.element.createElement("div",{key:"days",className:"digiblocks-countdown-item digiblocks-countdown-days"},wp.element.createElement("div",{className:"digiblocks-countdown-item-inner"},ce==="inside"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:"digiblocks-countdown-digit"},G(j)),wp.element.createElement("div",{className:"digiblocks-countdown-label"},h||Qe("Days","digiblocks"))):wp.element.createElement("div",{className:"digiblocks-countdown-digit"},G(j))),ce!=="inside"&&wp.element.createElement("div",{className:"digiblocks-countdown-label"},h||Qe("Days","digiblocks")))),fe&&(y||$||P)&&We.push(wp.element.createElement("div",{key:"days-separator",className:"digiblocks-countdown-separator"}))),y&&(We.push(wp.element.createElement("div",{key:"hours",className:"digiblocks-countdown-item digiblocks-countdown-hours"},wp.element.createElement("div",{className:"digiblocks-countdown-item-inner"},ce==="inside"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:"digiblocks-countdown-digit"},G(Ne)),wp.element.createElement("div",{className:"digiblocks-countdown-label"},s||Qe("Hours","digiblocks"))):wp.element.createElement("div",{className:"digiblocks-countdown-digit"},G(Ne))),ce!=="inside"&&wp.element.createElement("div",{className:"digiblocks-countdown-label"},s||Qe("Hours","digiblocks")))),fe&&($||P)&&We.push(wp.element.createElement("div",{key:"hours-separator",className:"digiblocks-countdown-separator"}))),$&&(We.push(wp.element.createElement("div",{key:"minutes",className:"digiblocks-countdown-item digiblocks-countdown-minutes"},wp.element.createElement("div",{className:"digiblocks-countdown-item-inner"},ce==="inside"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:"digiblocks-countdown-digit"},G(f)),wp.element.createElement("div",{className:"digiblocks-countdown-label"},z||Qe("Minutes","digiblocks"))):wp.element.createElement("div",{className:"digiblocks-countdown-digit"},G(f))),ce!=="inside"&&wp.element.createElement("div",{className:"digiblocks-countdown-label"},z||Qe("Minutes","digiblocks")))),fe&&P&&We.push(wp.element.createElement("div",{key:"minutes-separator",className:"digiblocks-countdown-separator"}))),P&&We.push(wp.element.createElement("div",{key:"seconds",className:"digiblocks-countdown-item digiblocks-countdown-seconds"},wp.element.createElement("div",{className:"digiblocks-countdown-item-inner"},ce==="inside"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:"digiblocks-countdown-digit"},G(Ge)),wp.element.createElement("div",{className:"digiblocks-countdown-label"},S||Qe("Seconds","digiblocks"))):wp.element.createElement("div",{className:"digiblocks-countdown-digit"},G(Ge))),ce!=="inside"&&wp.element.createElement("div",{className:"digiblocks-countdown-label"},S||Qe("Seconds","digiblocks")))),We},he=D.days===0&&D.hours===0&&D.minutes===0&&D.seconds===0;return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Kb,null,wp.element.createElement(Xb,{value:W,onChange:j=>e({align:j})})),wp.element.createElement(Ec,null,wp.element.createElement(Yc,{tabs:M,activeTab:ee,onSelect:Be},re())),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:d()}}),wp.element.createElement("div",{...x},he?wp.element.createElement("div",{className:"digiblocks-countdown-expired"},me||Qe("Time's up!","digiblocks")):wp.element.createElement("div",{className:"digiblocks-countdown-container"},m())))},Zc=su;var{useBlockProps:ru}=window.wp.blockEditor,cu=({attributes:ie})=>{let{id:e,anchor:K,customClasses:o,endDate:O,showDays:a,showHours:le,showMinutes:l,showSeconds:_,daysLabel:y,hoursLabel:$,minutesLabel:P,secondsLabel:h,displaySeparator:s,separatorType:z,expiredMessage:S,animation:C,align:w,style:T,boxesEqual:U,labelPosition:L}=ie,V=["digiblocks-countdown",e,`align-${w}`,C!=="none"?`animate-${C}`:"",T==="boxes"?"digiblocks-countdown-boxes":"digiblocks-countdown-simple",U?"digiblocks-countdown-equal-width":"",`digiblocks-countdown-labels-${L}`,s?"digiblocks-countdown-has-separators":"",s?`digiblocks-countdown-separator-${z}`:"",o||""].filter(Boolean).join(" "),Q=ru.save({className:V,id:K||null,"data-end-date":O||"","data-show-days":a?"true":"false","data-show-hours":le?"true":"false","data-show-minutes":l?"true":"false","data-show-seconds":_?"true":"false","data-days-label":y||"Days","data-hours-label":$||"Hours","data-minutes-label":P||"Minutes","data-seconds-label":h||"Seconds","data-expired-message":S||"Time's up!","data-label-position":L||"bottom"});return wp.element.createElement("div",{...Q},wp.element.createElement("div",{className:"digiblocks-countdown-container"},a&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:"digiblocks-countdown-item digiblocks-countdown-days"},wp.element.createElement("div",{className:"digiblocks-countdown-item-inner"},L==="inside"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:"digiblocks-countdown-digit"},"00"),wp.element.createElement("div",{className:"digiblocks-countdown-label"},y||"Days")):wp.element.createElement("div",{className:"digiblocks-countdown-digit"},"00")),L!=="inside"&&wp.element.createElement("div",{className:"digiblocks-countdown-label"},y||"Days")),s&&(le||l||_)&&wp.element.createElement("div",{className:"digiblocks-countdown-separator"})),le&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:"digiblocks-countdown-item digiblocks-countdown-hours"},wp.element.createElement("div",{className:"digiblocks-countdown-item-inner"},L==="inside"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:"digiblocks-countdown-digit"},"00"),wp.element.createElement("div",{className:"digiblocks-countdown-label"},$||"Hours")):wp.element.createElement("div",{className:"digiblocks-countdown-digit"},"00")),L!=="inside"&&wp.element.createElement("div",{className:"digiblocks-countdown-label"},$||"Hours")),s&&(l||_)&&wp.element.createElement("div",{className:"digiblocks-countdown-separator"})),l&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:"digiblocks-countdown-item digiblocks-countdown-minutes"},wp.element.createElement("div",{className:"digiblocks-countdown-item-inner"},L==="inside"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:"digiblocks-countdown-digit"},"00"),wp.element.createElement("div",{className:"digiblocks-countdown-label"},P||"Minutes")):wp.element.createElement("div",{className:"digiblocks-countdown-digit"},"00")),L!=="inside"&&wp.element.createElement("div",{className:"digiblocks-countdown-label"},P||"Minutes")),s&&_&&wp.element.createElement("div",{className:"digiblocks-countdown-separator"})),_&&wp.element.createElement("div",{className:"digiblocks-countdown-item digiblocks-countdown-seconds"},wp.element.createElement("div",{className:"digiblocks-countdown-item-inner"},L==="inside"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:"digiblocks-countdown-digit"},"00"),wp.element.createElement("div",{className:"digiblocks-countdown-label"},h||"Seconds")):wp.element.createElement("div",{className:"digiblocks-countdown-digit"},"00")),L!=="inside"&&wp.element.createElement("div",{className:"digiblocks-countdown-label"},h||"Seconds"))),wp.element.createElement("div",{className:"digiblocks-countdown-expired",style:{display:"none"}},S||"Time's up!"))},Kc=cu;var{__:Lt}=window.wp.i18n,{registerBlockType:du}=window.wp.blocks,{getBlockActiveStatus:gu}=window.wp.digiBlocks;du("digiblocks/countdown",{apiVersion:2,title:digiBlocksData.blocks.countdown.title,category:"digiblocks",icon:{src:()=>{let{viewbox:ie,path:e}=digiBlocksData.blocks.countdown.icon;return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${ie}`,className:"digiblocks-editor-icons"},wp.element.createElement("path",{d:e}))}},description:digiBlocksData.blocks.countdown.description,keywords:[Lt("countdown","digiblocks"),Lt("timer","digiblocks"),Lt("clock","digiblocks")],supports:{inserter:!!gu("countdown"),html:!1,className:!1,customClassName:!1,anchor:!1},attributes:{id:{type:"string",default:""},anchor:{type:"string",default:""},visibility:{type:"object",default:{desktop:!1,tablet:!1,mobile:!1}},customClasses:{type:"string",default:""},endDate:{type:"string",default:""},showDays:{type:"boolean",default:!0},showHours:{type:"boolean",default:!0},showMinutes:{type:"boolean",default:!0},showSeconds:{type:"boolean",default:!0},daysLabel:{type:"string",default:Lt("Days","digiblocks")},hoursLabel:{type:"string",default:Lt("Hours","digiblocks")},minutesLabel:{type:"string",default:Lt("Minutes","digiblocks")},secondsLabel:{type:"string",default:Lt("Seconds","digiblocks")},digitColor:{type:"string",default:"#333333"},digitBackground:{type:"string",default:"#f0f0f0"},digitHoverColor:{type:"string",default:""},digitHoverBackground:{type:"string",default:""},labelColor:{type:"string",default:"#666666"},labelHoverColor:{type:"string",default:""},separatorColor:{type:"string",default:"#333333"},separatorHoverColor:{type:"string",default:""},boxStyle:{type:"string",default:"default"},boxBorderRadius:{type:"object",default:{desktop:{top:4,right:4,bottom:4,left:4,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},boxPadding:{type:"object",default:{desktop:{top:10,right:10,bottom:10,left:10,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},boxMargin:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},boxBorderWidth:{type:"object",default:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},boxBorderColor:{type:"string",default:"#e0e0e0"},showBoxShadow:{type:"boolean",default:!1},boxShadow:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},boxShadowHover:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},itemSpacing:{type:"object",default:{desktop:48,tablet:30,mobile:16}},align:{type:"string",default:"center"},labelPosition:{type:"string",default:"bottom"},labelSpacing:{type:"object",default:{desktop:5,tablet:4,mobile:3}},titleTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:70,tablet:38,mobile:26},fontSizeUnit:"px",fontWeight:"600",fontStyle:"normal",textTransform:"",textDecoration:"",lineHeight:{desktop:1.2,tablet:1.2,mobile:1.2},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}},contentTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:16,tablet:14,mobile:12},fontSizeUnit:"px",fontWeight:"",fontStyle:"normal",textTransform:"",textDecoration:"",lineHeight:{desktop:1.4,tablet:1.4,mobile:1.4},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}},expiredMessage:{type:"string",default:Lt("Time's up!","digiblocks")},animation:{type:"string",default:"none"},displaySeparator:{type:"boolean",default:!1},separatorType:{type:"string",default:"colon"},boxesEqual:{type:"boolean",default:!1},style:{type:"string",default:"boxes"}},example:{attributes:{endDate:new Date(Date.now()+2592e6).toISOString(),style:"boxes",boxStyle:"filled",digitColor:"#ffffff",digitBackground:"#1e73be",labelColor:"#333333",showDays:!0,showHours:!0,showMinutes:!0,showSeconds:!0,titleTypography:{fontSize:{desktop:32}},contentTypography:{fontSize:{desktop:14}}}},edit:Zc,save:Kc});var{__:Re}=window.wp.i18n,{useBlockProps:pu,InspectorControls:bu,PanelColorSettings:dt,BlockControls:uu,AlignmentToolbar:mu}=window.wp.blockEditor,{TabPanel:hu,SelectControl:yl,RangeControl:li,TextControl:Ot,ToggleControl:Cl,Button:Xc,__experimentalToggleGroupControl:x1,__experimentalToggleGroupControlOption:y1}=window.wp.components,{useState:ai,useEffect:ss,useRef:fu}=window.wp.element,{useBlockId:ku,getDimensionCSS:jt,animations:rs,animationPreview:Ac}=digi.utils,{tabIcons:cs}=digi.icons,{ResponsiveControl:St,DimensionControl:Ut,TypographyControl:ds,BoxShadowControl:vu,CustomTabPanel:xu,TabPanelBody:$t}=digi.components,yu=({attributes:ie,setAttributes:e,clientId:K})=>{let{id:o,anchor:O,visibility:a,customClasses:le,iconValue:l,startNumber:_,endNumber:y,title:$,description:P,counterColor:h,counterHoverColor:s,titleColor:z,titleHoverColor:S,textColor:C,textHoverColor:w,backgroundColor:T,backgroundHoverColor:U,iconColor:L,iconHoverColor:V,iconBackgroundColor:Q,iconHoverBackgroundColor:be,iconSize:N,iconPadding:u,iconMargin:v,iconBorderStyle:I,iconBorderWidth:ne,iconBorderRadius:Me,iconBorderColor:Le,iconHoverBorderColor:X,typography:H,titleTypography:Y,contentTypography:W,padding:ce,margin:ue,align:A,animation:J,boxShadow:me,boxShadowHover:oe,borderStyle:fe,borderWidth:je,borderRadius:te,borderColor:to,hoverEffect:De,animationDuration:r,animationDelay:D,thousandSeparator:xe,decimalPlaces:Pe,decimalSeparator:Se,layoutStyle:Ue,verticalSpacing:ee,counterPrefix:Be,counterPrefixSpacing:Xe,counterSuffix:q,counterSuffixSpacing:ye,numberWithCommas:qe,displayIcon:E}=ie;ku(o,K,e);let[se,B]=ai(window.digi.responsiveState.activeDevice),[c,ge]=ai(!1),[M,k]=ai(_||0),[G,d]=ai(!1),[re,x]=ai("normal");ss(()=>window.digi.responsiveState.subscribe(Ae=>{B(Ae)}),[]);let[m,he]=ai(()=>{if(window.digi.uiState){let R=window.digi.uiState.getActiveTab(K);if(R)return R}return"options"}),[j,Ne]=ai(!1);ss(()=>{let R=()=>window.digi&&window.digi.components&&window.digi.components.FontAwesomeControl?(Ne(!0),!0):!1;if(!R()){let Ae=setTimeout(()=>{R()&&clearTimeout(Ae)},500);return()=>clearTimeout(Ae)}},[]);let f=R=>{e({iconValue:R})},Ge=fu(null);ss(()=>{if(J&&J!=="none"){let R=setTimeout(()=>{Ac(o,J,rs,Ge)},100);return()=>clearTimeout(R)}},[J]);let We=()=>{Ac(o,J,rs,Ge)},go=()=>{if(G)return;let R=parseInt(_)||0,Ae=parseInt(y)||0,co=r||2e3,uo=50,ho=co/uo,fo=(Ae-R)/uo;d(!0),k(R);let mo=0,yo=setInterval(()=>{if(mo++,mo>=uo)k(Ae),clearInterval(yo),d(!1);else{let Lo=R+fo*mo;k(Math.round(Lo))}},ho);return()=>clearInterval(yo)},t=R=>{typeof R!="number"&&(R=parseFloat(R)||0);let Ae=R;Pe&&Pe>0?Ae=R.toFixed(Pe):Ae=Math.round(R);let co=Ae.toString();if(Pe>0&&Se&&Se!=="."&&(co=co.replace(".",Se)),qe&&xe){let uo=co.split(Se||".");uo[0]=uo[0].replace(/\B(?=(\d{3})+(?!\d))/g,xe),co=uo.join(Se||".")}return co},b=[{label:Re("Default","digiblocks"),value:"default"},{label:Re("None","digiblocks"),value:"none"},{label:Re("Solid","digiblocks"),value:"solid"},{label:Re("Dotted","digiblocks"),value:"dotted"},{label:Re("Dashed","digiblocks"),value:"dashed"},{label:Re("Double","digiblocks"),value:"double"},{label:Re("Groove","digiblocks"),value:"groove"},{label:Re("Inset","digiblocks"),value:"inset"},{label:Re("Outset","digiblocks"),value:"outset"},{label:Re("Ridge","digiblocks"),value:"ridge"}],Ce=[{label:Re("None","digiblocks"),value:"none"},{label:Re("Lift","digiblocks"),value:"lift"},{label:Re("Scale","digiblocks"),value:"scale"},{label:Re("Glow","digiblocks"),value:"glow"}],n=[{label:Re("None","digiblocks"),value:"none"},...Object.keys(rs).map(R=>({label:R.replace(/-/g," ").replace(/\b\w/g,Ae=>Ae.toUpperCase()),value:R}))],we=[{label:Re("Stacked","digiblocks"),value:"stacked"},{label:Re("Inline","digiblocks"),value:"inline"},{label:Re("Centered","digiblocks"),value:"centered"}],Ke=[{name:"options",title:Re("Options","digiblocks"),icon:cs.optionsIcon},{name:"style",title:Re("Style","digiblocks"),icon:cs.styleIcon},{name:"advanced",title:Re("Advanced","digiblocks"),icon:cs.advancedIcon}],p=[{name:"normal",title:Re("Normal","digiblocks"),className:"digiblocks-tab-1 normal"},{name:"hover",title:Re("Hover","digiblocks"),className:"digiblocks-tab-2 hover"}],g=()=>{let R=window.digi.responsiveState.activeDevice,Ae="";fe&&fe!=="default"&&fe!=="none"?Ae=`
                border-style: ${fe};
                border-color: ${to||"#e0e0e0"};
				${jt(je,"border-width",R)}
				${jt(te,"border-radius",R)}
            `:Ae="border-style: none;";let co="box-shadow: none;";me&&me.enable&&(co=`box-shadow: ${me.position==="inset"?"inset ":""}${me.horizontal}px ${me.vertical}px ${me.blur}px ${me.spread}px ${me.color};`);let uo=`${jt(ce,"padding",R)}`,ho=`${jt(ue,"margin",R)}`,fo="";Y&&(Y.fontFamily&&(fo+=`font-family: ${Y.fontFamily};`),Y.fontSize&&Y.fontSize[R]&&(fo+=`font-size: ${Y.fontSize[R]}${Y.fontSizeUnit||"px"};`),Y.fontWeight&&(fo+=`font-weight: ${Y.fontWeight};`),Y.fontStyle&&(fo+=`font-style: ${Y.fontStyle};`),Y.textTransform&&(fo+=`text-transform: ${Y.textTransform};`),Y.textDecoration&&(fo+=`text-decoration: ${Y.textDecoration};`),Y.lineHeight&&Y.lineHeight[R]&&(fo+=`line-height: ${Y.lineHeight[R]}${Y.lineHeightUnit||"em"};`),Y.letterSpacing&&Y.letterSpacing[R]&&(fo+=`letter-spacing: ${Y.letterSpacing[R]}${Y.letterSpacingUnit||"px"};`));let mo="";W&&(W.fontFamily&&(mo+=`font-family: ${W.fontFamily};`),W.fontSize&&W.fontSize[R]&&(mo+=`font-size: ${W.fontSize[R]}${W.fontSizeUnit||"px"};`),W.fontWeight&&(mo+=`font-weight: ${W.fontWeight};`),W.fontStyle&&(mo+=`font-style: ${W.fontStyle};`),W.textTransform&&(mo+=`text-transform: ${W.textTransform};`),W.textDecoration&&(mo+=`text-decoration: ${W.textDecoration};`),W.lineHeight&&W.lineHeight[R]&&(mo+=`line-height: ${W.lineHeight[R]}${W.lineHeightUnit||"em"};`),W.letterSpacing&&W.letterSpacing[R]&&(mo+=`letter-spacing: ${W.letterSpacing[R]}${W.letterSpacingUnit||"px"};`));let yo="";H&&(H.fontFamily&&(yo+=`font-family: ${H.fontFamily};`),H.fontSize&&H.fontSize[R]&&(yo+=`font-size: ${H.fontSize[R]}${H.fontSizeUnit||"px"};`),H.fontWeight&&(yo+=`font-weight: ${H.fontWeight};`),H.fontStyle&&(yo+=`font-style: ${H.fontStyle};`),H.textTransform&&(yo+=`text-transform: ${H.textTransform};`),H.textDecoration&&(yo+=`text-decoration: ${H.textDecoration};`),H.lineHeight&&H.lineHeight[R]&&(yo+=`line-height: ${H.lineHeight[R]}${H.lineHeightUnit||"em"};`),H.letterSpacing&&H.letterSpacing[R]&&(yo+=`letter-spacing: ${H.letterSpacing[R]}${H.letterSpacingUnit||"px"};`));let Lo="",Bo="",$o="";E&&l&&l.svg&&(Q&&(Lo+=`background-color: ${Q};`),I&&I!=="default"&&I!=="none"&&(Lo+=`
                    border-style: ${I};
                    border-color: ${Le||"#e0e0e0"};
					${jt(ne,"border-width",R)}
					${jt(Me,"border-radius",R)}
                `),u&&u[R]&&(Lo+=`${jt(u,"padding",R)}`),V&&(Bo+=`fill: ${V} !important; color: ${V} !important;`),be&&(Bo+=`background-color: ${be};`),X&&(Bo+=`border-color: ${X};`),v&&v[R]?$o=`${jt(v,"margin",R)}`:$o=`margin: 0px 0px ${R==="desktop"?20:R==="tablet"?15:10}px 0px;`);let vo="";if(oe&&oe.enable){let zo=oe.position==="inset"?"inset ":"";vo+=`box-shadow: ${zo}${oe.horizontal}px ${oe.vertical}px ${oe.blur}px ${oe.spread}px ${oe.color};`}return De==="lift"?vo+="transform: translateY(-10px);":De==="scale"?vo+="transform: scale(1.05);":De==="glow"&&(vo+="filter: brightness(1.1);"),`
            /* Main block styles */
            .${o} {
                background-color: ${T||"transparent"};
                ${co}
                ${uo}
                ${ho}
                ${Ae}
                transition: all 0.3s ease;
                text-align: ${A||"center"};
            }
            
            /* Hover effects */
            .${o}:hover {
                ${U?`background-color: ${U};`:""}
                ${vo}
            }
            
            /* Layout styles */
            .${o} .digiblocks-counter-inner {
                display: flex;
                flex-direction: ${Ue==="inline"?"row":"column"};
                align-items: ${Ue==="inline"?"center":A==="left"?"flex-start":A==="right"?"flex-end":"center"};
                justify-content: ${Ue==="inline"?"flex-start":"center"};
                gap: ${ee||15}px;
                ${Ue==="centered"?"text-align: center;":""}
            }
            
            ${E&&l&&l.svg?`
            /* Icon styles */
            .${o} .digiblocks-counter-icon {
				${$o}
                display: inline-flex;
                align-items: center;
                justify-content: center;
                ${Lo}
                transition: all 0.3s ease;
            }

            .${o} .digiblocks-counter-icon span {
                display: flex;
            }

            .${o} .digiblocks-counter-icon svg {
                width: ${N&&N[R]?N[R]:32}px;
                height: 100%;
                fill: ${L||"inherit"};
                transition: all 0.3s ease;
            }
            
            /* Icon hover styles */
            .${o}:hover .digiblocks-counter-icon {
                ${Bo}
            }
            
            .${o}:hover .digiblocks-counter-icon svg {
                ${V?`fill: ${V};`:""}
            }
            `:""}
            
            /* Counter styles */
            .${o} .digiblocks-counter-number-wrapper {
                display: flex;
                align-items: center;
                justify-content: ${A==="left"?"flex-start":A==="right"?"flex-end":"center"};
                margin-bottom: 10px;
            }
            
            .${o} .digiblocks-counter-prefix {
                margin-right: ${Xe||5}px;
                color: ${h||"#333333"};
                ${yo}
                transition: color 0.3s ease;
            }
            
            .${o} .digiblocks-counter-suffix {
                margin-left: ${ye||5}px;
                color: ${h||"#333333"};
                ${yo}
                transition: color 0.3s ease;
            }
            
            .${o} .digiblocks-counter-number {
                color: ${h||"#333333"};
                ${yo}
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
                color: ${z||"inherit"};
                margin-bottom: 10px;
                ${fo}
                transition: color 0.3s ease;
            }
            
            /* Title hover styles */
            .${o}:hover .digiblocks-counter-title {
                ${S?`color: ${S};`:""}
            }
            
            /* Content styles */
            .${o} .digiblocks-counter-description {
                color: ${C||"inherit"};
                ${mo}
                transition: color 0.3s ease;
            }
            
            /* Content hover styles */
            .${o}:hover .digiblocks-counter-description {
                ${w?`color: ${w};`:""}
            }

			/* Visibility Controls */
			${a.desktop?`
				@media (min-width: 992px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${a.tablet?`
				@media (min-width: 768px) and (max-width: 991px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${a.mobile?`
				@media (max-width: 767px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}
        `},He=j?window.digi.components.FontAwesomeControl:null,Je=()=>!E||!l||!l.svg||l.svg.trim()===""?null:wp.element.createElement("div",{className:"digiblocks-counter-icon"},wp.element.createElement("span",{dangerouslySetInnerHTML:{__html:l.svg}})),i=R=>R==="normal"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(dt,{title:Re("Counter Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:h,onChange:Ae=>e({counterColor:Ae}),label:Re("Counter Color","digiblocks")}]}),wp.element.createElement(dt,{title:Re("Content Colors","digiblocks"),initialOpen:!1,enableAlpha:!0,colorSettings:[{value:z,onChange:Ae=>e({titleColor:Ae}),label:Re("Title Color","digiblocks")},{value:C,onChange:Ae=>e({textColor:Ae}),label:Re("Description Color","digiblocks")}]}),E&&wp.element.createElement(dt,{title:Re("Icon Colors","digiblocks"),initialOpen:!1,enableAlpha:!0,colorSettings:[{value:L,onChange:Ae=>e({iconColor:Ae}),label:Re("Icon Color","digiblocks")},{value:Q,onChange:Ae=>e({iconBackgroundColor:Ae}),label:Re("Icon Background","digiblocks")}]}),wp.element.createElement(dt,{title:Re("Block Colors","digiblocks"),initialOpen:!1,enableAlpha:!0,colorSettings:[{value:T,onChange:Ae=>e({backgroundColor:Ae}),label:Re("Background Color","digiblocks")}]})):R==="hover"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(dt,{title:Re("Counter Hover Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:s,onChange:Ae=>e({counterHoverColor:Ae}),label:Re("Counter Hover Color","digiblocks")}]}),wp.element.createElement(dt,{title:Re("Content Hover Colors","digiblocks"),initialOpen:!1,enableAlpha:!0,colorSettings:[{value:S,onChange:Ae=>e({titleHoverColor:Ae}),label:Re("Title Hover Color","digiblocks")},{value:w,onChange:Ae=>e({textHoverColor:Ae}),label:Re("Description Hover Color","digiblocks")}]}),E&&wp.element.createElement(dt,{title:Re("Icon Hover Colors","digiblocks"),initialOpen:!1,enableAlpha:!0,colorSettings:[{value:V,onChange:Ae=>e({iconHoverColor:Ae}),label:Re("Icon Hover Color","digiblocks")},{value:be,onChange:Ae=>e({iconHoverBackgroundColor:Ae}),label:Re("Icon Hover Background","digiblocks")}]}),wp.element.createElement(dt,{title:Re("Block Hover Colors","digiblocks"),initialOpen:!1,enableAlpha:!0,colorSettings:[{value:U,onChange:Ae=>e({backgroundHoverColor:Ae}),label:Re("Background Hover Color","digiblocks")}]})):null,F=()=>{switch(m){case"options":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:"components-panel__body is-opened"},wp.element.createElement(Cl,{label:Re("Display Icon","digiblocks"),checked:E,onChange:R=>e({displayIcon:R}),__nextHasNoMarginBottom:!0}),E&&wp.element.createElement("div",{style:{marginBottom:"2rem"}},j?wp.element.createElement(He,{label:Re("Select Icon","digiblocks"),value:l,onChange:f}):wp.element.createElement("div",{style:{textAlign:"center",padding:"20px 0"}},wp.element.createElement("div",{className:"components-spinner"}),wp.element.createElement("p",null,Re("Loading icon selector...","digiblocks"))),l&&j&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{style:{marginTop:"15px",marginBottom:"15px",padding:"10px",background:"#f0f0f1",borderRadius:"3px"}},wp.element.createElement("p",{style:{margin:"0 0 5px 0"}},wp.element.createElement("strong",null,Re("Selected Icon:","digiblocks"))," ",l.name),wp.element.createElement("p",{style:{margin:"0 0 5px 0"}},wp.element.createElement("strong",null,Re("Style:","digiblocks"))," ",l.style),l.categories&&l.categories.length>0&&wp.element.createElement("p",{style:{margin:"0"}},wp.element.createElement("strong",null,Re("Categories:","digiblocks"))," ",l.categories.join(", "))))),wp.element.createElement(yl,{label:Re("Layout Style","digiblocks"),value:Ue||"stacked",options:we,onChange:R=>e({layoutStyle:R}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(li,{label:Re("Spacing","digiblocks"),value:ee||15,onChange:R=>e({verticalSpacing:R}),min:0,max:100,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Ot,{label:Re("Starting Number","digiblocks"),type:"number",value:_,onChange:R=>e({startNumber:R}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Ot,{label:Re("Ending Number","digiblocks"),type:"number",value:y,onChange:R=>e({endNumber:R}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Ot,{label:Re("Counter Prefix","digiblocks"),value:Be||"",onChange:R=>e({counterPrefix:R}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),Be&&wp.element.createElement(li,{label:Re("Prefix Spacing","digiblocks"),value:Xe||5,onChange:R=>e({counterPrefixSpacing:R}),min:0,max:30,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Ot,{label:Re("Counter Suffix","digiblocks"),value:q||"",onChange:R=>e({counterSuffix:R}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),q&&wp.element.createElement(li,{label:Re("Suffix Spacing","digiblocks"),value:ye||5,onChange:R=>e({counterSuffixSpacing:R}),min:0,max:30,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Ot,{label:Re("Title","digiblocks"),value:$||"",onChange:R=>e({title:R}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Ot,{label:Re("Description","digiblocks"),value:P||"",onChange:R=>e({description:R}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Cl,{label:Re("Use Thousand Separator","digiblocks"),checked:qe,onChange:R=>e({numberWithCommas:R}),__nextHasNoMarginBottom:!0}),qe&&wp.element.createElement(Ot,{label:Re("Thousand Separator","digiblocks"),value:xe||",",onChange:R=>e({thousandSeparator:R}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(li,{label:Re("Decimal Places","digiblocks"),value:Pe||0,onChange:R=>e({decimalPlaces:R}),min:0,max:10,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),Pe>0&&wp.element.createElement(Ot,{label:Re("Decimal Separator","digiblocks"),value:Se||".",onChange:R=>e({decimalSeparator:R}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement("div",{style:{marginTop:"10px"}},wp.element.createElement(Xc,{isPrimary:!0,onClick:go,disabled:G},Re("Preview Counter Animation","digiblocks")))));case"style":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement($t,{tab:"style",name:"colors",title:Re("Colors","digiblocks"),initialOpen:!0},wp.element.createElement(hu,{className:"digiblocks-control-tabs",activeClass:"active-tab",tabs:p,onSelect:R=>x(R.name)},R=>i(R.name))),wp.element.createElement($t,{tab:"style",name:"typography",title:Re("Typography","digiblocks"),initialOpen:!1},wp.element.createElement(ds,{label:Re("Counter Typography","digiblocks"),value:H||{},onChange:R=>e({typography:R}),defaults:{fontSize:{desktop:48,tablet:42,mobile:36},fontSizeUnit:"px",lineHeight:{desktop:1.2,tablet:1.2,mobile:1.2},lineHeightUnit:"em"}}),wp.element.createElement(ds,{label:Re("Title Typography","digiblocks"),value:Y||{},onChange:R=>e({titleTypography:R}),defaults:{fontSize:{desktop:20,tablet:18,mobile:16},fontSizeUnit:"px",lineHeight:{desktop:1.4,tablet:1.3,mobile:1.2},lineHeightUnit:"em"}}),wp.element.createElement(ds,{label:Re("Description Typography","digiblocks"),value:W||{},onChange:R=>e({contentTypography:R}),defaults:{fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em"}})),E&&wp.element.createElement($t,{tab:"style",name:"icon",title:Re("Icon","digiblocks"),initialOpen:!1},wp.element.createElement(St,{label:Re("Icon Size","digiblocks")},wp.element.createElement(li,{value:N&&N[se]?N[se]:32,onChange:R=>e({iconSize:{...N||{desktop:32,tablet:28,mobile:24},[se]:R}}),min:8,max:200,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(yl,{label:Re("Border Style","digiblocks"),value:I||"default",options:b,onChange:R=>{R!=="default"&&R!=="none"&&(I==="default"||I==="none"||!I)&&(!ne||Object.keys(ne).length===0)&&e({iconBorderWidth:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}}),e({iconBorderStyle:R})},__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),I&&I!=="default"&&I!=="none"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(dt,{title:Re("Border Colors","digiblocks"),enableAlpha:!0,colorSettings:[{value:Le,onChange:R=>e({iconBorderColor:R}),label:Re("Border Color","digiblocks")},{value:X,onChange:R=>e({iconHoverBorderColor:R}),label:Re("Border Hover Color","digiblocks")}]}),wp.element.createElement(St,{label:Re("Border Width","digiblocks")},wp.element.createElement(Ut,{values:ne[se],onChange:R=>e({iconBorderWidth:{...ne||{},[se]:R}})})),wp.element.createElement(St,{label:Re("Border Radius","digiblocks")},wp.element.createElement(Ut,{values:Me[se],onChange:R=>e({iconBorderRadius:{...Me||{},[se]:R}}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]}))),wp.element.createElement(St,{label:Re("Icon Padding","digiblocks")},wp.element.createElement(Ut,{values:u[se],onChange:R=>e({iconPadding:{...u||{},[se]:R}})})),wp.element.createElement(St,{label:Re("Icon Margin","digiblocks")},wp.element.createElement(Ut,{values:v&&v[se]?v[se]:{top:0,right:0,bottom:se==="desktop"?20:se==="tablet"?15:10,left:0,unit:"px"},onChange:R=>e({iconMargin:{...v||{desktop:{top:0,right:0,bottom:20,left:0,unit:"px"},tablet:{top:0,right:0,bottom:15,left:0,unit:"px"},mobile:{top:0,right:0,bottom:10,left:0,unit:"px"}},[se]:R}})}))),wp.element.createElement($t,{tab:"style",name:"animation",title:Re("Counter Animation","digiblocks"),initialOpen:!1},wp.element.createElement(li,{label:Re("Animation Duration (ms)","digiblocks"),value:r||2e3,onChange:R=>e({animationDuration:R}),min:100,max:1e4,step:100,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(li,{label:Re("Animation Delay (ms)","digiblocks"),value:D||0,onChange:R=>e({animationDelay:R}),min:0,max:1e4,step:100,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement($t,{tab:"style",name:"border",title:Re("Border & Shadow","digiblocks"),initialOpen:!1},wp.element.createElement(yl,{label:Re("Border Style","digiblocks"),value:fe||"default",options:b,onChange:R=>{R!=="default"&&R!=="none"&&(fe==="default"||fe==="none"||!fe)&&((!je||Object.keys(je).length===0)&&e({borderWidth:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}}),(!te||Object.keys(te).length===0)&&e({borderRadius:{desktop:{top:8,right:8,bottom:8,left:8,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}})),e({borderStyle:R})},__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),fe&&fe!=="default"&&fe!=="none"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(dt,{title:Re("Border Color","digiblocks"),enableAlpha:!0,colorSettings:[{value:to,onChange:R=>e({borderColor:R}),label:Re("Border Color","digiblocks")}]}),wp.element.createElement(St,{label:Re("Border Width","digiblocks")},wp.element.createElement(Ut,{values:je[se],onChange:R=>e({borderWidth:{...je,[se]:R}})})),wp.element.createElement(St,{label:Re("Border Radius","digiblocks")},wp.element.createElement(Ut,{values:te[se],onChange:R=>e({borderRadius:{...te,[se]:R}}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]}))),wp.element.createElement(yl,{label:Re("Hover Effect","digiblocks"),value:De||"none",options:Ce,onChange:R=>e({hoverEffect:R}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(vu,{normalValue:me,hoverValue:oe,onNormalChange:R=>e({boxShadow:R}),onHoverChange:R=>e({boxShadowHover:R})})),wp.element.createElement($t,{tab:"style",name:"spacing",title:Re("Spacing","digiblocks"),initialOpen:!1},wp.element.createElement(St,{label:Re("Padding","digiblocks")},wp.element.createElement(Ut,{values:ce&&ce[se]?ce[se]:{top:30,right:30,bottom:30,left:30,unit:"px"},onChange:R=>e({padding:{...ce,[se]:R}})})),wp.element.createElement(St,{label:Re("Margin","digiblocks")},wp.element.createElement(Ut,{values:ue&&ue[se]?ue[se]:{top:0,right:0,bottom:30,left:0,unit:"px"},onChange:R=>e({margin:{...ue,[se]:R}})}))));case"advanced":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement($t,{tab:"advanced",name:"animation",title:Re("Animation","digiblocks"),initialOpen:!0},wp.element.createElement(yl,{label:Re("Animation Effect","digiblocks"),value:J,options:n,onChange:R=>e({animation:R}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),J&&J!=="none"&&wp.element.createElement("div",{style:{marginTop:"10px"}},wp.element.createElement(Xc,{variant:"secondary",isSecondary:!0,onClick:We,style:{width:"100%"}},Re("Preview Animation","digiblocks")))),wp.element.createElement($t,{tab:"advanced",name:"visibility",title:Re("Visibility","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control__help",style:{padding:"12px",backgroundColor:"#f0f6fc",border:"1px solid #c3ddfd",borderRadius:"4px",marginBottom:"16px"}},wp.element.createElement("strong",null,Re("Editor Note:","digiblocks")),wp.element.createElement("br",null),Re("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.","digiblocks")),wp.element.createElement(Cl,{label:Re("Hide on Desktop","digiblocks"),checked:a.desktop,onChange:R=>e({visibility:{...a,desktop:R}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(Cl,{label:Re("Hide on Tablet","digiblocks"),checked:a.tablet,onChange:R=>e({visibility:{...a,tablet:R}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(Cl,{label:Re("Hide on Mobile","digiblocks"),checked:a.mobile,onChange:R=>e({visibility:{...a,mobile:R}}),__nextHasNoMarginBottom:!0})),wp.element.createElement($t,{tab:"advanced",name:"additional",title:Re("Additional","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control html-anchor-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"html-anchor"},Re("HTML anchor","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"html-anchor",value:O||"",onChange:R=>e({anchor:R.target.value}),"aria-describedby":"html-anchor-help",autoCapitalize:"none",autoComplete:"off"})),wp.element.createElement("p",{id:"html-anchor-help",className:"components-base-control__help"},Re(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`,"digiblocks")," ",wp.element.createElement("a",{className:"components-external-link",href:"https://wordpress.org/documentation/article/page-jumps/",target:"_blank",rel:"external noreferrer noopener"},wp.element.createElement("span",{className:"components-external-link__contents"},Re("Learn more about anchors","digiblocks")),wp.element.createElement("span",{className:"components-external-link__icon","aria-label":"(opens in a new tab)"},"\u2197")))),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"additional-css-classes"},Re("Additional CSS class(es)","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"additional-css-classes",value:le||"",onChange:R=>e({customClasses:R.target.value}),"aria-describedby":"additional-css-classes-help",autoComplete:"off"})),wp.element.createElement("p",{id:"additional-css-classes-help",className:"components-base-control__help"},Re("Separate multiple classes with spaces.","digiblocks")))));default:return null}},Fe=pu({className:`digiblocks-counter ${o} align-${A} ${le||""}`,id:O||null}),po=t(M);return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(uu,null,wp.element.createElement(mu,{value:A,onChange:R=>e({align:R})})),wp.element.createElement(bu,null,wp.element.createElement(xu,{tabs:Ke,activeTab:m,onSelect:he},F())),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:g()}}),wp.element.createElement("div",{...Fe},wp.element.createElement("div",{className:"digiblocks-counter-inner"},E&&Je(),wp.element.createElement("div",{className:"digiblocks-counter-content"},wp.element.createElement("div",{className:"digiblocks-counter-number-wrapper"},Be&&wp.element.createElement("span",{className:"digiblocks-counter-prefix"},Be),wp.element.createElement("span",{className:"digiblocks-counter-number"},po),q&&wp.element.createElement("span",{className:"digiblocks-counter-suffix"},q)),$&&wp.element.createElement("h3",{className:"digiblocks-counter-title"},$),P&&wp.element.createElement("p",{className:"digiblocks-counter-description"},P)))))},ed=yu;var{useBlockProps:Cu}=window.wp.blockEditor,wu=({attributes:ie})=>{let{id:e,anchor:K,customClasses:o,iconValue:O,startNumber:a,endNumber:le,counterPrefix:l,counterSuffix:_,title:y,description:$,align:P,animation:h,layoutStyle:s,displayIcon:z,numberWithCommas:S,thousandSeparator:C,decimalPlaces:w,decimalSeparator:T,animationDuration:U,animationDelay:L}=ie,V=["digiblocks-counter",e,`align-${P||"center"}`,`layout-${s||"stacked"}`,h!=="none"?`animate-${h}`:"",o||""].filter(Boolean).join(" "),Q=Cu.save({className:V,id:K||null,"data-start-value":a||0,"data-end-value":le||0,"data-animation-duration":U||2e3,"data-animation-delay":L||0,"data-thousand-separator":S?C||",":"","data-decimal-places":w||0,"data-decimal-separator":T||"."}),be=()=>!z||!O||!O.svg||O.svg.trim()===""?null:wp.element.createElement("div",{className:"digiblocks-counter-icon"},wp.element.createElement("span",{dangerouslySetInnerHTML:{__html:O.svg}}));return wp.element.createElement("div",{...Q},wp.element.createElement("div",{className:"digiblocks-counter-inner"},z&&be(),wp.element.createElement("div",{className:"digiblocks-counter-content"},wp.element.createElement("div",{className:"digiblocks-counter-number-wrapper"},l&&wp.element.createElement("span",{className:"digiblocks-counter-prefix"},l),wp.element.createElement("span",{className:"digiblocks-counter-number"},a||0),_&&wp.element.createElement("span",{className:"digiblocks-counter-suffix"},_)),y&&wp.element.createElement("h3",{className:"digiblocks-counter-title"},y),$&&wp.element.createElement("p",{className:"digiblocks-counter-description"},$))))},od=wu;var{__:Ba}=window.wp.i18n,{registerBlockType:Su}=window.wp.blocks,{getBlockActiveStatus:$u}=window.wp.digiBlocks;Su("digiblocks/counter",{apiVersion:2,title:digiBlocksData.blocks.counter.title,category:"digiblocks",icon:{src:()=>{let{viewbox:ie,path:e}=digiBlocksData.blocks.counter.icon;return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${ie}`,className:"digiblocks-editor-icons"},wp.element.createElement("path",{d:e}))}},description:digiBlocksData.blocks.counter.description,keywords:[Ba("counter","digiblocks"),Ba("number","digiblocks"),Ba("stats","digiblocks"),Ba("count up","digiblocks")],supports:{inserter:!!$u("counter"),html:!1,className:!1,customClassName:!1,anchor:!1},attributes:{id:{type:"string",default:""},anchor:{type:"string",default:""},visibility:{type:"object",default:{desktop:!1,tablet:!1,mobile:!1}},customClasses:{type:"string",default:""},iconValue:{type:"object",default:null},startNumber:{type:"string",default:"0"},endNumber:{type:"string",default:"100"},counterPrefix:{type:"string",default:""},counterPrefixSpacing:{type:"number",default:5},counterSuffix:{type:"string",default:""},counterSuffixSpacing:{type:"number",default:5},title:{type:"string",default:"Counter Title"},description:{type:"string",default:"Add description here."},counterColor:{type:"string",default:"#333333"},counterHoverColor:{type:"string",default:""},titleColor:{type:"string",default:"#333333"},titleHoverColor:{type:"string",default:""},textColor:{type:"string",default:"#666666"},textHoverColor:{type:"string",default:""},backgroundColor:{type:"string",default:"transparent"},backgroundHoverColor:{type:"string",default:""},iconColor:{type:"string",default:"#1e73be"},iconHoverColor:{type:"string",default:""},iconBackgroundColor:{type:"string",default:"transparent"},iconHoverBackgroundColor:{type:"string",default:""},iconSize:{type:"object",default:{desktop:32,tablet:28,mobile:24}},iconPadding:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},iconMargin:{type:"object",default:{desktop:{top:0,right:0,bottom:20,left:0,unit:"px"},tablet:{top:0,right:0,bottom:15,left:0,unit:"px"},mobile:{top:0,right:0,bottom:10,left:0,unit:"px"}}},iconBorderStyle:{type:"string",default:"default"},iconBorderWidth:{type:"object",default:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},iconBorderRadius:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},iconBorderColor:{type:"string",default:"#e0e0e0"},iconHoverBorderColor:{type:"string",default:""},typography:{type:"object",default:{fontFamily:"",fontSize:{desktop:48,tablet:42,mobile:36},fontSizeUnit:"px",fontWeight:"700",fontStyle:"normal",textTransform:"",textDecoration:"",lineHeight:{desktop:1.2,tablet:1.2,mobile:1.2},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}},titleTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:20,tablet:18,mobile:16},fontSizeUnit:"px",fontWeight:"500",fontStyle:"normal",textTransform:"",textDecoration:"",lineHeight:{desktop:1.4,tablet:1.3,mobile:1.2},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}},contentTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",fontWeight:"",fontStyle:"normal",textTransform:"",textDecoration:"",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}},padding:{type:"object",default:{desktop:{top:30,right:30,bottom:30,left:30,unit:"px"},tablet:{top:25,right:25,bottom:25,left:25,unit:"px"},mobile:{top:20,right:20,bottom:20,left:20,unit:"px"}}},margin:{type:"object",default:{desktop:{top:0,right:0,bottom:30,left:0,unit:"px"},tablet:{top:0,right:0,bottom:25,left:0,unit:"px"},mobile:{top:0,right:0,bottom:20,left:0,unit:"px"}}},align:{type:"string",default:"center"},animation:{type:"string",default:"none"},boxShadow:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},boxShadowHover:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},borderStyle:{type:"string",default:"default"},borderRadius:{type:"object",default:{desktop:{top:8,right:8,bottom:8,left:8,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderWidth:{type:"object",default:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderColor:{type:"string",default:"#e0e0e0"},hoverEffect:{type:"string",default:"none"},animationDuration:{type:"number",default:2e3},animationDelay:{type:"number",default:0},thousandSeparator:{type:"string",default:","},decimalPlaces:{type:"number",default:0},decimalSeparator:{type:"string",default:"."},layoutStyle:{type:"string",default:"stacked"},verticalSpacing:{type:"number",default:15},displayIcon:{type:"boolean",default:!1},numberWithCommas:{type:"boolean",default:!0}},example:{attributes:{startNumber:"0",endNumber:"100",counterPrefix:"",counterSuffix:"+",title:"Happy Clients",description:"Serving clients with excellence",displayIcon:!0,iconValue:{id:"user-check",name:"User Check",svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M274.7 304H173.3C77.61 304 0 381.6 0 477.3C0 496.5 15.52 512 34.66 512H413.3C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304zM224 256c70.7 0 128-57.31 128-128S294.7 0 224 0C153.3 0 96 57.31 96 128S153.3 256 224 256zM632.3 134.4c-9.703-9-24.91-8.453-33.92 1.266l-87.05 93.75l-38.39-38.39c-9.375-9.375-24.56-9.375-33.94 0s-9.375 24.56 0 33.94l56 56C499.5 285.5 505.6 288 512 288h.4375c6.531-.125 12.72-2.891 17.16-7.672l104-112C642.6 158.6 642 143.4 632.3 134.4z"/></svg>',style:"solid",categories:["users-people"]},counterColor:"#1e73be",iconColor:"#1e73be",backgroundColor:"#ffffff"}},edit:ed,save:od});var{__:_e}=window.wp.i18n,{useBlockProps:_u,RichText:td,InspectorControls:Bu,PanelColorSettings:Vt}=window.wp.blockEditor,{SelectControl:ni,RangeControl:id,ToggleControl:Ta,Button:Mi,TextControl:gs,Tooltip:Na,TabPanel:ld,__experimentalToggleGroupControl:_1,__experimentalToggleGroupControlOption:B1}=window.wp.components,{useState:ps,useEffect:bs,useRef:Tu}=window.wp.element,{useBlockId:Nu,getDimensionCSS:Vo,animations:wl,animationPreview:ad}=digi.utils,{tabIcons:us}=digi.icons,{ResponsiveControl:Di,DimensionControl:Ha,TypographyControl:nd,BoxShadowControl:Hu,CustomTabPanel:zu,TabPanelBody:Fo}=digi.components,Mu=({attributes:ie,setAttributes:e,clientId:K})=>{let{id:o,anchor:O,visibility:a,customClasses:le,items:l,titleColor:_,titleHoverColor:y,titleActiveColor:$,backgroundColor:P,backgroundHoverColor:h,backgroundActiveColor:s,contentColor:z,contentBackgroundColor:S,borderColor:C,borderHoverColor:w,borderRadius:T,borderWidth:U,borderStyle:L,boxShadow:V,boxShadowHover:Q,padding:be,margin:N,titleTypography:u,contentTypography:v,iconPosition:I,iconColor:ne,iconHoverColor:Me,iconActiveColor:Le,iconSize:X,animation:H,allowMultipleOpen:Y,iconType:W,titleTag:ce,questionPrefix:ue,questionPrefixColor:A,answerPrefix:J,answerPrefixColor:me,layout:oe,itemsSpacing:fe,schemaType:je,schemaName:te}=ie;Nu(o,K,e);let[to,De]=ps(()=>{if(window.digi.uiState){let t=window.digi.uiState.getActiveTab(K);if(t)return t}return"options"}),[r,D]=ps(window.digi.responsiveState.activeDevice),[xe,Pe]=ps(!1);bs(()=>window.digi.responsiveState.subscribe(b=>{D(b)}),[]),bs(()=>{if(l&&l.length>0){let t=l.map((b,Ce)=>b.id?b:{...b,id:`faq-item-${K.substr(0,8)}-${Ce}`});JSON.stringify(t)!==JSON.stringify(l)&&e({items:t})}},[K,l,e]);let Se=Tu(null);bs(()=>{if(H&&H!=="none"){let t=setTimeout(()=>{ad(o,H,wl,Se)},100);return()=>clearTimeout(t)}},[H]);let Ue=()=>{ad(o,H,wl,Se)},ee=[{label:_e("Default","digiblocks"),value:"default"},{label:_e("None","digiblocks"),value:"none"},{label:_e("Solid","digiblocks"),value:"solid"},{label:_e("Dotted","digiblocks"),value:"dotted"},{label:_e("Dashed","digiblocks"),value:"dashed"},{label:_e("Double","digiblocks"),value:"double"},{label:_e("Groove","digiblocks"),value:"groove"},{label:_e("Inset","digiblocks"),value:"inset"},{label:_e("Outset","digiblocks"),value:"outset"},{label:_e("Ridge","digiblocks"),value:"ridge"}],Be=[{label:_e("None","digiblocks"),value:"none"},...Object.keys(wl).map(t=>({label:t.replace(/-/g," ").replace(/\b\w/g,b=>b.toUpperCase()),value:t}))],Xe=[{label:_e("Plus/Minus","digiblocks"),value:"plusMinus"},{label:_e("Arrow","digiblocks"),value:"arrow"},{label:_e("Chevron","digiblocks"),value:"chevron"},{label:_e("Triangle","digiblocks"),value:"triangle"},{label:_e("Circle Plus/Minus","digiblocks"),value:"circlePlusMinus"}],q=[{label:_e("Right","digiblocks"),value:"right"},{label:_e("Left","digiblocks"),value:"left"}],ye=[{label:_e("H2","digiblocks"),value:"h2"},{label:_e("H3","digiblocks"),value:"h3"},{label:_e("H4","digiblocks"),value:"h4"},{label:_e("H5","digiblocks"),value:"h5"},{label:_e("H6","digiblocks"),value:"h6"},{label:_e("p","digiblocks"),value:"p"},{label:_e("div","digiblocks"),value:"div"}],qe=[{label:_e("Boxed","digiblocks"),value:"boxed"},{label:_e("Classic","digiblocks"),value:"classic"},{label:_e("Separated","digiblocks"),value:"separated"},{label:_e("Minimalist","digiblocks"),value:"minimalist"},{label:_e("Bordered","digiblocks"),value:"bordered"}],E=[{label:_e("Default FAQ Schema","digiblocks"),value:"FAQPage"},{label:_e("Q&A Schema","digiblocks"),value:"QAPage"}],se=[{name:"options",title:_e("Options","digiblocks"),icon:us.optionsIcon},{name:"style",title:_e("Style","digiblocks"),icon:us.styleIcon},{name:"advanced",title:_e("Advanced","digiblocks"),icon:us.advancedIcon}],B=[{name:"normal",title:_e("Normal","digiblocks"),className:"digiblocks-tab-1 normal"},{name:"hover",title:_e("Hover","digiblocks"),className:"digiblocks-tab-2 hover"},{name:"active",title:_e("Active","digiblocks"),className:"digiblocks-tab-3 active"}],c=()=>{let t=l.length,b={id:`faq-item-${K.substr(0,8)}-${t}`,title:_e("New FAQ Question","digiblocks"),content:_e("Add your answer here. Edit or remove this text inline or in the module Content settings.","digiblocks"),isOpen:!1};e({items:[...l,b]})},ge=t=>{let b=[...l];b.splice(t,1),e({items:b})},M=t=>{let b=l[t],Ce=Date.now(),n={...b,id:`faq-item-${K.substr(0,8)}-${Ce}`,isOpen:!1},we=[...l];we.splice(t+1,0,n),e({items:we})},k=t=>{if(t===0)return;let b=[...l],Ce=b[t];b.splice(t,1),b.splice(t-1,0,Ce),e({items:b})},G=t=>{if(t===l.length-1)return;let b=[...l],Ce=b[t];b.splice(t,1),b.splice(t+1,0,Ce),e({items:b})},d=t=>{let b=l.map((Ce,n)=>n===t?{...Ce,isOpen:!Ce.isOpen}:!Y&&n!==t&&Ce.isOpen?{...Ce,isOpen:!1}:Ce);e({items:b})},re=(t,b)=>{let Ce=[...l];Ce[b].title=t,e({items:Ce})},x=(t,b)=>{let Ce=[...l];Ce[b].content=t,e({items:Ce})},m=(t,b=W)=>{switch(b){case"plusMinus":return t?wp.element.createElement("span",{className:"digiblocks-faq-icon-minus"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:"1em",height:"1em"},wp.element.createElement("path",{fillRule:"evenodd",d:"M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"}))):wp.element.createElement("span",{className:"digiblocks-faq-icon-plus"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:"1em",height:"1em"},wp.element.createElement("path",{fillRule:"evenodd",d:"M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"})));case"arrow":return wp.element.createElement("span",{className:`digiblocks-faq-icon-arrow ${t?"is-open":""}`},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:"1em",height:"1em"},wp.element.createElement("path",{fillRule:"evenodd",d:"M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"})));case"chevron":return wp.element.createElement("span",{className:`digiblocks-faq-icon-chevron ${t?"is-open":""}`},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:"1em",height:"1em"},wp.element.createElement("path",{fillRule:"evenodd",d:"M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"})));case"triangle":return wp.element.createElement("span",{className:`digiblocks-faq-icon-triangle ${t?"is-open":""}`},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:"1em",height:"1em"},wp.element.createElement("path",{d:"m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"})));case"circlePlusMinus":return t?wp.element.createElement("span",{className:"digiblocks-faq-icon-circle-minus"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),wp.element.createElement("path",{d:"M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"}))):wp.element.createElement("span",{className:"digiblocks-faq-icon-circle-plus"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),wp.element.createElement("path",{d:"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"})));default:return t?wp.element.createElement("span",{className:"digiblocks-faq-icon-minus"},"\u2014"):wp.element.createElement("span",{className:"digiblocks-faq-icon-plus"},"+")}},he=()=>{let t=window.digi.responsiveState.activeDevice,b=fe[t]!==void 0?fe[t]:16,Ce="";L&&L!=="default"&&L!=="none"?Ce=`
				border-style: ${L};
				border-color: ${C||"#e0e0e0"};
				${Vo(U,"border-width",t)}
				${Vo(T,"border-radius",t)}
			`:Ce="border: none;";let n="box-shadow: none;";V&&V.enable&&(n=`box-shadow: ${V.position==="inset"?"inset ":""}${V.horizontal}px ${V.vertical}px ${V.blur}px ${V.spread}px ${V.color};`);let we=`${Vo(be,"padding",t)}`,Ke="";u&&(u.fontFamily&&(Ke+=`font-family: ${u.fontFamily};`),u.fontSize&&u.fontSize[t]&&(Ke+=`font-size: ${u.fontSize[t]}${u.fontSizeUnit||"px"};`),u.fontWeight&&(Ke+=`font-weight: ${u.fontWeight};`),u.fontStyle&&(Ke+=`font-style: ${u.fontStyle};`),u.textTransform&&(Ke+=`text-transform: ${u.textTransform};`),u.textDecoration&&(Ke+=`text-decoration: ${u.textDecoration};`),u.lineHeight&&u.lineHeight[t]&&(Ke+=`line-height: ${u.lineHeight[t]}${u.lineHeightUnit||"em"};`),u.letterSpacing&&u.letterSpacing[t]&&(Ke+=`letter-spacing: ${u.letterSpacing[t]}${u.letterSpacingUnit||"px"};`));let p="";v&&(v.fontFamily&&(p+=`font-family: ${v.fontFamily};`),v.fontSize&&v.fontSize[t]&&(p+=`font-size: ${v.fontSize[t]}${v.fontSizeUnit||"px"};`),v.fontWeight&&(p+=`font-weight: ${v.fontWeight};`),v.fontStyle&&(p+=`font-style: ${v.fontStyle};`),v.textTransform&&(p+=`text-transform: ${v.textTransform};`),v.textDecoration&&(p+=`text-decoration: ${v.textDecoration};`),v.lineHeight&&v.lineHeight[t]&&(p+=`line-height: ${v.lineHeight[t]}${v.lineHeightUnit||"em"};`),v.letterSpacing&&v.letterSpacing[t]&&(p+=`letter-spacing: ${v.letterSpacing[t]}${v.letterSpacingUnit||"px"};`));let g="";Q&&Q.enable&&(g=`box-shadow: ${Q.position==="inset"?"inset ":""}${Q.horizontal}px ${Q.vertical}px ${Q.blur}px ${Q.spread}px ${Q.color};`);let He=`
			/* FAQ Block - ${o} */
			.${o} {
				${Vo(N,"margin",t)}
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
				${I==="left"?"flex-direction: row-reverse; justify-content: flex-end;":"justify-content: space-between;"}
			}
			
			.${o} .digiblocks-faq-question-text {
				color: ${_};
				${Ke}
				margin: 0;
				flex: 1;
				${ue?"display: flex; align-items: center; gap: .5rem;":""}
				transition: color 0.3s ease;
			}
			
			.${o} .digiblocks-faq-question-prefix {
				${A?`color: ${A};`:""}
				font-weight: bold;
			}
			
			.${o} .digiblocks-faq-answer-prefix {
				${me?`color: ${me};`:""}
				font-weight: bold;
			}
			
			.${o} .digiblocks-faq-answer-content {
				display: flex;
				${J?"display: flex; gap: .5rem;":""}
				color: ${z};
				${p}
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
				color: ${ne};
				transition: all 0.3s ease;
				font-size: ${X[t]}px;
			}
			
			.${o} .digiblocks-faq-question-icon span {
				display: flex;
				align-items: center;
				justify-content: center;
			}
			
			.${o} .digiblocks-faq-question-icon svg {
				width: ${X[t]}px;
				height: ${X[t]}px;
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
				${y?`color: ${y};`:""}
			}
			
			.${o} .digiblocks-faq-question:hover .digiblocks-faq-question-icon {
				${Me?`color: ${Me};`:""}
			}
			
			/* Handle active state */
			.${o} .digiblocks-faq-item.is-active .digiblocks-faq-question-text {
				color: ${$};
			}
			
			.${o} .digiblocks-faq-item.is-active .digiblocks-faq-question-icon {
				color: ${Le};
			}

			/* Visibility Controls */
			${a.desktop?`
				@media (min-width: 992px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${a.tablet?`
				@media (min-width: 768px) and (max-width: 991px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${a.mobile?`
				@media (max-width: 767px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}
		`,Je="";switch(oe){case"boxed":Je=`
					.${o} .digiblocks-faq-item {
						${Ce}
						${n}
						background-color: ${P||"#ffffff"};
						transition: all 0.3s ease;
						margin-bottom: ${b}px;
					}
					
					.${o} .digiblocks-faq-item:hover {
						${g}
						${h?`background-color: ${h};`:""}
						${w?`border-color: ${w};`:""}
					}
					
					.${o} .digiblocks-faq-question {
						${we}
					}
					
					.${o} .digiblocks-faq-answer {
						${we}
						border-top: 1px solid ${C||"#e0e0e0"};
						${S?`background-color: ${S};`:""}
					}
					
					.${o} .digiblocks-faq-item.is-active {
						${s?`background-color: ${s};`:""}
					}
				`;break;case"classic":Je=`
					.${o} .digiblocks-faq-item {
						border: none;
						border-bottom: 1px solid ${C||"#e0e0e0"};
						background-color: transparent;
						margin-bottom: ${b}px;
						transition: all 0.3s ease;
					}
					
					.${o} .digiblocks-faq-question {
						${we}
					}
					
					.${o} .digiblocks-faq-answer {
						${Vo(be,"padding",t)}
						padding-top: 0;
					}
				`;break;case"separated":Je=`
					.${o} .digiblocks-faq-item {
						margin-bottom: ${b}px;
						transition: all 0.3s ease;
					}
					
					.${o} .digiblocks-faq-question {
						${we}
						${Ce}
						${n}
						background-color: ${P||"#ffffff"};
					}
					
					.${o} .digiblocks-faq-question:hover {
						${y?`color: ${y};`:""}
						${h?`background-color: ${h};`:""}
						${w?`border-color: ${w};`:""}
						${g}
					}
					
					.${o} .digiblocks-faq-item.is-active .digiblocks-faq-question {
						${$?`color: ${$};`:""}
						${s?`background-color: ${s};`:""}
					}
					
					.${o} .digiblocks-faq-answer {
						${we}
						${S?`background-color: ${S};`:""}
						${Ce}
						border-top: none;
						border-top-left-radius: 0;
						border-top-right-radius: 0;
						border-bottom-left-radius: ${T&&T[t]?T[t].left+T[t].unit:"8px"};
						border-bottom-right-radius: ${T&&T[t]?T[t].right+T[t].unit:"8px"};
						margin-top: -1px;
					}
				`;break;case"minimalist":Je=`
					.${o} .digiblocks-faq-item {
						margin-bottom: ${b}px;
						transition: all 0.3s ease;
						background-color: transparent;
					}
					
					.${o} .digiblocks-faq-question {
						${we}
						border-bottom: 2px solid ${C||"#e0e0e0"};
					}
					
					.${o} .digiblocks-faq-question:hover {
						${y?`color: ${y};`:""}
						border-color: ${y||w||"#cccccc"};
					}
					
					.${o} .digiblocks-faq-item.is-active .digiblocks-faq-question {
						${$?`color: ${$};`:""}
						border-color: ${$||"#1e73be"};
					}
					
					.${o} .digiblocks-faq-answer {
						${Vo(be,"padding",t)}
					}
				`;break;case"bordered":Je=`
					.${o} .digiblocks-faq-item {
						${Ce}
						background-color: transparent;
						margin-bottom: ${b}px;
						transition: all 0.3s ease;
						overflow: hidden;
					}
					
					.${o} .digiblocks-faq-item:hover {
						${w?`border-color: ${w};`:""}
					}
					
					.${o} .digiblocks-faq-question {
						${we}
						background-color: ${P||"#f8f9fa"};
					}
					
					.${o} .digiblocks-faq-question:hover {
						${y?`color: ${y};`:""}
						${h?`background-color: ${h};`:""}
					}
					
					.${o} .digiblocks-faq-item.is-active .digiblocks-faq-question {
						${$?`color: ${$};`:""}
						${s?`background-color: ${s};`:""}
					}
					
					.${o} .digiblocks-faq-answer {
						${we}
						${S?`background-color: ${S};`:""}
					}
					
					.${o} .digiblocks-faq-item.is-active {
						border-color: ${$||C||"#1e73be"};
					}
				`;break;default:Je=`
					.${o} .digiblocks-faq-item {
						${Ce}
						${n}
						background-color: ${P||"#ffffff"};
						transition: all 0.3s ease;
						margin-bottom: ${b}px;
					}
					
					.${o} .digiblocks-faq-question {
						${we}
					}
					
					.${o} .digiblocks-faq-answer {
						${we}
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
					${N.tablet?`${Vo(N,"margin","tablet")}`:""}
				}
				
				.${o} .digiblocks-faq-item {
					margin-bottom: ${fe.tablet!==void 0?fe.tablet:b}px;
				}
				
				.${o} .digiblocks-faq-question,
				.${o} .digiblocks-faq-answer {
					${be.tablet?`${Vo(be,"padding","tablet")}`:""}
				}
				
				${oe==="minimalist"?`
				.${o} .digiblocks-faq-answer {
					${Vo(be,"padding","tablet")}
					padding-left: 0;
					padding-right: 0;
				}
				`:""}
				
				${X&&X.tablet?`
				.${o} .digiblocks-faq-question-icon {
					font-size: ${X.tablet}px;
				}
				
				.${o} .digiblocks-faq-question-icon svg {
					width: ${X.tablet}px;
					height: ${X.tablet}px;
				}
				`:""}
				
				${u&&u.fontSize&&u.fontSize.tablet?`
				.${o} .digiblocks-faq-question-text {
					font-size: ${u.fontSize.tablet}${u.fontSizeUnit||"px"};
					${u.lineHeight&&u.lineHeight.tablet?`line-height: ${u.lineHeight.tablet}${u.lineHeightUnit||"em"};`:""}
				}
				`:""}
				
				${v&&v.fontSize&&v.fontSize.tablet?`
				.${o} .digiblocks-faq-answer-content {
					font-size: ${v.fontSize.tablet}${v.fontSizeUnit||"px"};
					${v.lineHeight&&v.lineHeight.tablet?`line-height: ${v.lineHeight.tablet}${v.lineHeightUnit||"em"};`:""}
				}
				`:""}
			}
		`,Fe=`
			@media (max-width: 767px) {
				.${o} {
					${N.mobile?`${Vo(N,"margin","mobile")}`:""}
				}
				
				.${o} .digiblocks-faq-item {
					margin-bottom: ${fe.mobile!==void 0?fe.mobile:b}px;
				}
				
				.${o} .digiblocks-faq-question,
				.${o} .digiblocks-faq-answer {
					${be.mobile?`${Vo(be,"padding","mobile")}`:""}
				}
				
				${oe==="minimalist"?`
				.${o} .digiblocks-faq-answer {
					${Vo(be,"padding","mobile")}
					padding-left: 0;
					padding-right: 0;
				}
				`:""}
				
				${X&&X.mobile?`
				.${o} .digiblocks-faq-question-icon {
					font-size: ${X.mobile}px;
				}
				
				.${o} .digiblocks-faq-question-icon svg {
					width: ${X.mobile}px;
					height: ${X.mobile}px;
				}
				`:""}
				
				${u&&u.fontSize&&u.fontSize.mobile?`
				.${o} .digiblocks-faq-question-text {
					font-size: ${u.fontSize.mobile}${u.fontSizeUnit||"px"};
					${u.lineHeight&&u.lineHeight.mobile?`line-height: ${u.lineHeight.mobile}${u.lineHeightUnit||"em"};`:""}
				}
				`:""}
				
				${v&&v.fontSize&&v.fontSize.mobile?`
				.${o} .digiblocks-faq-answer-content {
					font-size: ${v.fontSize.mobile}${v.fontSizeUnit||"px"};
					${v.lineHeight&&v.lineHeight.mobile?`line-height: ${v.lineHeight.mobile}${v.lineHeightUnit||"em"};`:""}
				}
				`:""}
			}
		`,po="";return H&&H!=="none"&&wl[H]&&(po=wl[H].keyframes),`
			${He}
			${Je}
			${i}
			${F}
			${Fe}
			${po}
		`},j=t=>t==="normal"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Vt,{title:_e("Question Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:_,onChange:b=>e({titleColor:b}),label:_e("Text Color","digiblocks")},{value:P,onChange:b=>e({backgroundColor:b}),label:_e("Background Color","digiblocks")},{value:A,onChange:b=>e({questionPrefixColor:b}),label:_e("Prefix Color","digiblocks"),disableCustomColors:!ue}]})):t==="hover"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Vt,{title:_e("Question Hover Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:y,onChange:b=>e({titleHoverColor:b}),label:_e("Text Color","digiblocks")},{value:h,onChange:b=>e({backgroundHoverColor:b}),label:_e("Background Color","digiblocks")}]})):t==="active"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Vt,{title:_e("Question Active Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:$,onChange:b=>e({titleActiveColor:b}),label:_e("Text Color","digiblocks")},{value:s,onChange:b=>e({backgroundActiveColor:b}),label:_e("Background Color","digiblocks")}]})):null,Ne=t=>t==="normal"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Vt,{title:_e("Icon Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:ne,onChange:b=>e({iconColor:b}),label:_e("Icon Color","digiblocks")}]})):t==="hover"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Vt,{title:_e("Icon Hover Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:Me,onChange:b=>e({iconHoverColor:b}),label:_e("Icon Color","digiblocks")}]})):t==="active"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Vt,{title:_e("Icon Active Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:Le,onChange:b=>e({iconActiveColor:b}),label:_e("Icon Color","digiblocks")}]})):null,f=()=>wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Vt,{title:_e("Answer Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:z,onChange:t=>e({contentColor:t}),label:_e("Text Color","digiblocks")},{value:S,onChange:t=>e({contentBackgroundColor:t}),label:_e("Background Color","digiblocks")},{value:me,onChange:t=>e({answerPrefixColor:t}),label:_e("Prefix Color","digiblocks"),disableCustomColors:!J}]})),Ge=()=>{switch(to){case"options":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Fo,{tab:"options",name:"content-settings",title:_e("Items","digiblocks"),initialOpen:!0},wp.element.createElement(Ta,{label:_e("Allow Multiple Open","digiblocks"),checked:Y,onChange:()=>e({allowMultipleOpen:!Y}),help:_e("When enabled, multiple FAQ items can be open at the same time.","digiblocks"),__nextHasNoMarginBottom:!0}),wp.element.createElement(ni,{label:_e("Layout","digiblocks"),value:oe,options:qe,onChange:t=>e({layout:t}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{htmlFor:"question-prefix",className:"components-base-control__label"},_e("Question Prefix","digiblocks")),wp.element.createElement(gs,{id:"question-prefix",value:ue||"",onChange:t=>e({questionPrefix:t}),placeholder:_e("Example: Q:","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement("p",{className:"components-base-control__help"},_e("Add a prefix to questions (e.g., 'Q:').","digiblocks")))),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{htmlFor:"answer-prefix",className:"components-base-control__label"},_e("Answer Prefix","digiblocks")),wp.element.createElement(gs,{id:"answer-prefix",value:J||"",onChange:t=>e({answerPrefix:t}),placeholder:_e("Example: A:","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement("p",{className:"components-base-control__help"},_e("Add a prefix to answers (e.g., 'A:').","digiblocks")))),wp.element.createElement(Di,{label:_e("Items Spacing","digiblocks")},wp.element.createElement(id,{value:fe[r],onChange:t=>e({itemsSpacing:{...fe,[r]:t}}),min:0,max:100,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}))),wp.element.createElement(Fo,{tab:"options",name:"icon-settings",title:_e("Icon Settings","digiblocks"),initialOpen:!1},wp.element.createElement(ni,{label:_e("Icon Type","digiblocks"),value:W,options:Xe,onChange:t=>e({iconType:t}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(ni,{label:_e("Icon Position","digiblocks"),value:I,options:q,onChange:t=>e({iconPosition:t}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Di,{label:_e("Icon Size","digiblocks")},wp.element.createElement(id,{value:X[r],onChange:t=>e({iconSize:{...X,[r]:t}}),min:8,max:100,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}))),wp.element.createElement(Fo,{tab:"options",name:"schema-settings",title:_e("SEO Schema","digiblocks"),initialOpen:!1},wp.element.createElement(ni,{label:_e("Schema Type","digiblocks"),value:je,options:E,onChange:t=>e({schemaType:t}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(gs,{label:_e("Schema Name","digiblocks"),value:te,onChange:t=>e({schemaName:t}),placeholder:_e("Example: Product FAQ","digiblocks"),help:_e("Name for your FAQ schema (e.g., Company FAQ, Product FAQ).","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(Fo,{tab:"options",name:"heading-settings",title:_e("HTML Settings","digiblocks"),initialOpen:!1},wp.element.createElement(ni,{label:_e("Question Tag","digiblocks"),value:ce,options:ye,onChange:t=>e({titleTag:t}),help:_e("HTML tag for questions. Default is h3.","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})));case"style":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Fo,{tab:"style",name:"question-styles",title:_e("Question Styles","digiblocks"),initialOpen:!0},wp.element.createElement(ld,{className:"digiblocks-control-tabs",activeClass:"active-tab",tabs:B},t=>j(t.name)),wp.element.createElement(nd,{label:_e("Question Typography","digiblocks"),value:u,onChange:t=>e({titleTypography:t}),defaults:{fontSize:{desktop:18,tablet:16,mobile:15},fontSizeUnit:"px",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em"}})),wp.element.createElement(Fo,{tab:"style",name:"answer-styles",title:_e("Answer Styles","digiblocks"),initialOpen:!1},f(),wp.element.createElement(nd,{label:_e("Answer Typography","digiblocks"),value:v,onChange:t=>e({contentTypography:t}),defaults:{fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em"}})),wp.element.createElement(Fo,{tab:"style",name:"icon-styles",title:_e("Icon Styles","digiblocks"),initialOpen:!1},wp.element.createElement(ld,{className:"digiblocks-control-tabs",activeClass:"active-tab",tabs:B},t=>Ne(t.name))),wp.element.createElement(Fo,{tab:"style",name:"border-box",title:_e("Border & Shadow","digiblocks"),initialOpen:!1},oe!=="classic"&&oe!=="minimalist"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(ni,{label:_e("Border Style","digiblocks"),value:L||"default",options:ee,onChange:t=>{t!=="default"&&t!=="none"&&(L==="default"||L==="none"||!L)&&((!U||Object.keys(U).length===0)&&e({borderWidth:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:1,right:1,bottom:1,left:1,unit:"px"},mobile:{top:1,right:1,bottom:1,left:1,unit:"px"}}}),(!T||Object.keys(T).length===0)&&e({borderRadius:{desktop:{top:8,right:8,bottom:8,left:8,unit:"px"},tablet:{top:8,right:8,bottom:8,left:8,unit:"px"},mobile:{top:8,right:8,bottom:8,left:8,unit:"px"}}})),e({borderStyle:t})},__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),L&&L!=="default"&&L!=="none"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Vt,{title:_e("Border Colors","digiblocks"),enableAlpha:!0,colorSettings:[{value:C,onChange:t=>e({borderColor:t}),label:_e("Border Color","digiblocks")},{value:w,onChange:t=>e({borderHoverColor:t}),label:_e("Border Hover Color","digiblocks")}]}),wp.element.createElement(Di,{label:_e("Border Width","digiblocks")},wp.element.createElement(Ha,{values:U&&U[r]?U[r]:{top:1,right:1,bottom:1,left:1,unit:"px"},onChange:t=>e({borderWidth:{...U,[r]:t}})})),wp.element.createElement(Di,{label:_e("Border Radius","digiblocks")},wp.element.createElement(Ha,{values:T&&T[r]?T[r]:{top:8,right:8,bottom:8,left:8,unit:"px"},onChange:t=>e({borderRadius:{...T,[r]:t}}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]})))),wp.element.createElement(Hu,{normalValue:V,hoverValue:Q,onNormalChange:t=>e({boxShadow:t}),onHoverChange:t=>e({boxShadowHover:t})})),wp.element.createElement(Fo,{tab:"style",name:"spacing",title:_e("Spacing","digiblocks"),initialOpen:!1},wp.element.createElement(Di,{label:_e("Padding","digiblocks")},wp.element.createElement(Ha,{values:be[r],onChange:t=>e({padding:{...be,[r]:t}})})),wp.element.createElement(Di,{label:_e("Margin","digiblocks")},wp.element.createElement(Ha,{values:N[r],onChange:t=>e({margin:{...N,[r]:t}})}))));case"advanced":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Fo,{tab:"advanced",name:"animation",title:_e("Animation","digiblocks"),initialOpen:!0},wp.element.createElement(ni,{label:_e("Animation Effect","digiblocks"),value:H,options:Be,onChange:t=>e({animation:t}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),H&&H!=="none"&&wp.element.createElement("div",{style:{marginTop:"10px"}},wp.element.createElement(Mi,{variant:"secondary",isSecondary:!0,onClick:Ue,style:{width:"100%"}},_e("Preview Animation","digiblocks")))),wp.element.createElement(Fo,{tab:"advanced",name:"visibility",title:_e("Visibility","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control__help",style:{padding:"12px",backgroundColor:"#f0f6fc",border:"1px solid #c3ddfd",borderRadius:"4px",marginBottom:"16px"}},wp.element.createElement("strong",null,_e("Editor Note:","digiblocks")),wp.element.createElement("br",null),_e("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.","digiblocks")),wp.element.createElement(Ta,{label:_e("Hide on Desktop","digiblocks"),checked:a.desktop,onChange:t=>e({visibility:{...a,desktop:t}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(Ta,{label:_e("Hide on Tablet","digiblocks"),checked:a.tablet,onChange:t=>e({visibility:{...a,tablet:t}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(Ta,{label:_e("Hide on Mobile","digiblocks"),checked:a.mobile,onChange:t=>e({visibility:{...a,mobile:t}}),__nextHasNoMarginBottom:!0})),wp.element.createElement(Fo,{tab:"advanced",name:"additional",title:_e("Additional","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control html-anchor-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"html-anchor"},_e("HTML anchor","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"html-anchor",value:O||"",onChange:t=>e({anchor:t.target.value}),"aria-describedby":"html-anchor-help",autoCapitalize:"none",autoComplete:"off"})),wp.element.createElement("p",{id:"html-anchor-help",className:"components-base-control__help"},_e(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`,"digiblocks")," ",wp.element.createElement("a",{className:"components-external-link",href:"https://wordpress.org/documentation/article/page-jumps/",target:"_blank",rel:"external noreferrer noopener"},wp.element.createElement("span",{className:"components-external-link__contents"},_e("Learn more about anchors","digiblocks")),wp.element.createElement("span",{className:"components-external-link__icon","aria-label":"(opens in a new tab)"},"\u2197")))),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"additional-css-classes"},_e("Additional CSS class(es)","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"additional-css-classes",value:le||"",onChange:t=>e({customClasses:t.target.value}),"aria-describedby":"additional-css-classes-help",autoComplete:"off"})),wp.element.createElement("p",{id:"additional-css-classes-help",className:"components-base-control__help"},_e("Separate multiple classes with spaces.","digiblocks")))))}},We=()=>!l||l.length===0?wp.element.createElement("div",{className:"digiblocks-no-items"},wp.element.createElement("p",null,_e("No FAQ items found. Please add some items.","digiblocks"))):l.map((t,b)=>{let Ce=b===l.length-1;return wp.element.createElement("div",{key:t.id,className:`digiblocks-faq-item ${t.isOpen?"is-active":""}`,style:Ce?{marginBottom:0}:{}},wp.element.createElement("div",{className:"digiblocks-faq-question",onClick:()=>d(b)},wp.element.createElement("div",{className:"digiblocks-faq-question-text"},ue&&wp.element.createElement("span",{className:"digiblocks-faq-question-prefix"},ue),wp.element.createElement(td,{tagName:"span",value:t.title,onChange:n=>re(n,b),placeholder:_e("Enter question...","digiblocks"),allowedFormats:["core/bold","core/italic"],className:"digiblocks-faq-question-text-content"})),wp.element.createElement("span",{className:"digiblocks-faq-question-icon"},m(t.isOpen))),wp.element.createElement("div",{className:"digiblocks-faq-answer"},wp.element.createElement("div",{className:"digiblocks-faq-answer-content"},J&&wp.element.createElement("span",{className:"digiblocks-faq-answer-prefix"},J),wp.element.createElement(td,{tagName:"div",value:t.content,onChange:n=>x(n,b),placeholder:_e("Enter answer...","digiblocks"),allowedFormats:["core/bold","core/italic","core/link","core/image","core/list"],className:"digiblocks-faq-answer-text"}))),wp.element.createElement("div",{className:"digiblocks-faq-item-controls"},wp.element.createElement(Na,{text:_e("Move Up","digiblocks")},wp.element.createElement(Mi,{className:"digiblocks-faq-item-move-up",onClick:()=>k(b),icon:"arrow-up-alt2",disabled:b===0,isSmall:!0})),wp.element.createElement(Na,{text:_e("Move Down","digiblocks")},wp.element.createElement(Mi,{className:"digiblocks-faq-item-move-down",onClick:()=>G(b),icon:"arrow-down-alt2",disabled:b===l.length-1,isSmall:!0})),wp.element.createElement(Na,{text:_e("Duplicate","digiblocks")},wp.element.createElement(Mi,{className:"digiblocks-faq-item-duplicate",onClick:()=>M(b),icon:"admin-page",isSmall:!0})),wp.element.createElement(Na,{text:_e("Remove","digiblocks")},wp.element.createElement(Mi,{className:"digiblocks-faq-item-remove",onClick:()=>ge(b),icon:"trash",isSmall:!0}))))}),go=_u({className:`digiblocks-faq-block ${o} ${oe||"boxed"} ${le||""}`,id:O||null});return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Bu,null,wp.element.createElement(zu,{tabs:se,activeTab:to,onSelect:De},Ge())),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:he()}}),wp.element.createElement("div",{...go},wp.element.createElement("div",{className:"digiblocks-faq-items"},We()),wp.element.createElement(Mi,{variant:"primary",icon:"plus",onClick:c,style:{width:"100%",marginTop:"20px",justifyContent:"center"}},_e("Add FAQ Item","digiblocks"))))},sd=Mu;var{useBlockProps:Du,RichText:rd}=window.wp.blockEditor,Pu=({attributes:ie})=>{let{id:e,anchor:K,customClasses:o,items:O,titleTag:a,layout:le,questionPrefix:l,answerPrefix:_,animation:y,allowMultipleOpen:$,iconType:P}=ie,h=["digiblocks-faq-block",e,le||"boxed",o||"",y!=="none"?`animate-${y}`:""].filter(Boolean).join(" "),s=(C,w=P)=>{switch(w){case"plusMinus":return C?wp.element.createElement("span",{className:"digiblocks-faq-icon-minus"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:"1em",height:"1em"},wp.element.createElement("path",{fillRule:"evenodd",d:"M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"}))):wp.element.createElement("span",{className:"digiblocks-faq-icon-plus"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:"1em",height:"1em"},wp.element.createElement("path",{fillRule:"evenodd",d:"M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"})));case"arrow":return wp.element.createElement("span",{className:`digiblocks-faq-icon-arrow ${C?"is-open":""}`},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:"1em",height:"1em"},wp.element.createElement("path",{fillRule:"evenodd",d:"M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"})));case"chevron":return wp.element.createElement("span",{className:`digiblocks-faq-icon-chevron ${C?"is-open":""}`},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:"1em",height:"1em"},wp.element.createElement("path",{fillRule:"evenodd",d:"M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"})));case"triangle":return wp.element.createElement("span",{className:`digiblocks-faq-icon-triangle ${C?"is-open":""}`},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:"1em",height:"1em"},wp.element.createElement("path",{d:"m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"})));case"circlePlusMinus":return C?wp.element.createElement("span",{className:"digiblocks-faq-icon-circle-minus"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),wp.element.createElement("path",{d:"M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"}))):wp.element.createElement("span",{className:"digiblocks-faq-icon-circle-plus"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),wp.element.createElement("path",{d:"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"})));default:return C?wp.element.createElement("span",{className:"digiblocks-faq-icon-minus"},"\u2014"):wp.element.createElement("span",{className:"digiblocks-faq-icon-plus"},"+")}},z=Du.save({className:h,id:K||null,"data-allow-multiple":$?"true":"false"}),S=()=>!O||O.length===0?null:O.map((C,w)=>wp.element.createElement("div",{key:C.id,className:`digiblocks-faq-item ${C.isOpen?"is-active":""}`,"data-item-id":C.id},wp.element.createElement("div",{className:"digiblocks-faq-question"},wp.element.createElement("div",{className:"digiblocks-faq-question-text"},l&&wp.element.createElement("span",{className:"digiblocks-faq-question-prefix"},l),wp.element.createElement(rd.Content,{tagName:a||"h3",value:C.title,className:"digiblocks-faq-question-text-content"})),wp.element.createElement("span",{className:"digiblocks-faq-question-icon"},s(C.isOpen))),wp.element.createElement("div",{className:"digiblocks-faq-answer"},wp.element.createElement("div",{className:"digiblocks-faq-answer-content"},_&&wp.element.createElement("span",{className:"digiblocks-faq-answer-prefix"},_),wp.element.createElement(rd.Content,{tagName:"div",className:"digiblocks-faq-answer-text",value:C.content})))));return wp.element.createElement("div",{...z},wp.element.createElement("div",{className:"digiblocks-faq-items"},S()))},cd=Pu;var{__:Eo}=window.wp.i18n,{registerBlockType:Ru}=window.wp.blocks,{getBlockActiveStatus:Iu}=window.wp.digiBlocks;Ru("digiblocks/faq",{apiVersion:2,title:digiBlocksData.blocks.faq.title,category:"digiblocks",icon:{src:()=>{let{viewbox:ie,path:e}=digiBlocksData.blocks.faq.icon;return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${ie}`,className:"digiblocks-editor-icons"},wp.element.createElement("path",{d:e}))}},description:digiBlocksData.blocks.faq.description,keywords:[Eo("faq","digiblocks"),Eo("questions","digiblocks"),Eo("answers","digiblocks"),Eo("schema","digiblocks")],supports:{inserter:!!Iu("faq"),html:!1,className:!1,customClassName:!1,anchor:!1},attributes:{id:{type:"string",default:""},anchor:{type:"string",default:""},visibility:{type:"object",default:{desktop:!1,tablet:!1,mobile:!1}},customClasses:{type:"string",default:""},items:{type:"array",default:[{id:"faq-item-1",title:Eo("What is a frequently asked question?","digiblocks"),content:Eo("A frequently asked question (FAQ) is a question that is commonly asked by users or customers. FAQs are typically displayed in a list with their answers to help visitors find information quickly.","digiblocks"),isOpen:!0},{id:"faq-item-2",title:Eo("How do I add more questions and answers?","digiblocks"),content:Eo('Simply click the "Add FAQ Item" button below to add more questions and answers to your FAQ section. You can also reorder, edit, or remove existing items using the control buttons.',"digiblocks"),isOpen:!1}]},titleColor:{type:"string",default:"#333333"},titleHoverColor:{type:"string",default:""},titleActiveColor:{type:"string",default:"#1e73be"},backgroundColor:{type:"string",default:"#ffffff"},backgroundHoverColor:{type:"string",default:""},backgroundActiveColor:{type:"string",default:"#f7f7f7"},contentColor:{type:"string",default:"#666666"},contentBackgroundColor:{type:"string",default:""},borderColor:{type:"string",default:"#e0e0e0"},borderHoverColor:{type:"string",default:""},borderRadius:{type:"object",default:{desktop:{top:8,right:8,bottom:8,left:8,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderWidth:{type:"object",default:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderStyle:{type:"string",default:"solid"},boxShadow:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},boxShadowHover:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},padding:{type:"object",default:{desktop:{top:20,right:20,bottom:20,left:20,unit:"px"},tablet:{top:15,right:15,bottom:15,left:15,unit:"px"},mobile:{top:10,right:10,bottom:10,left:10,unit:"px"}}},margin:{type:"object",default:{desktop:{top:0,right:0,bottom:30,left:0,unit:"px"},tablet:{top:0,right:0,bottom:25,left:0,unit:"px"},mobile:{top:0,right:0,bottom:20,left:0,unit:"px"}}},titleTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:18,tablet:16,mobile:15},fontSizeUnit:"px",fontWeight:"600",fontStyle:"normal",textTransform:"none",textDecoration:"none",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}},contentTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",fontWeight:"",fontStyle:"normal",textTransform:"",textDecoration:"",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}},iconPosition:{type:"string",default:"right"},iconColor:{type:"string",default:"#333333"},iconHoverColor:{type:"string",default:""},iconActiveColor:{type:"string",default:"#1e73be"},iconSize:{type:"object",default:{desktop:16,tablet:14,mobile:12}},animation:{type:"string",default:"none"},allowMultipleOpen:{type:"boolean",default:!1},iconType:{type:"string",default:"plusMinus"},titleTag:{type:"string",default:"h3"},questionPrefix:{type:"string",default:""},questionPrefixColor:{type:"string",default:""},answerPrefix:{type:"string",default:""},answerPrefixColor:{type:"string",default:""},layout:{type:"string",default:"boxed"},itemsSpacing:{type:"object",default:{desktop:16,tablet:12,mobile:8}},schemaType:{type:"string",default:"FAQPage"},schemaName:{type:"string",default:""}},example:{attributes:{items:[{id:"faq-item-1",title:Eo("What is a frequently asked question?","digiblocks"),content:Eo("A frequently asked question (FAQ) is a question that is commonly asked by users or customers.","digiblocks"),isOpen:!0},{id:"faq-item-2",title:Eo("How do I add more questions?","digiblocks"),content:Eo('Click the "Add FAQ Item" button to add more questions and answers.',"digiblocks"),isOpen:!1}],layout:"boxed",titleColor:"#333333",titleActiveColor:"#1e73be",backgroundColor:"#ffffff"}},edit:sd,save:cd});var{__:de}=window.wp.i18n,{useBlockProps:Lu,InspectorControls:Ou,PanelColorSettings:za,MediaUpload:ju,MediaUploadCheck:Uu}=window.wp.blockEditor,{SelectControl:Ma,RangeControl:dd,ToggleControl:Pi,TextControl:gt,Button:wo,TextareaControl:Sl,PanelBody:Vu,Tooltip:$l,Dashicon:Fu,__experimentalToggleGroupControl:gd,__experimentalToggleGroupControlOption:pt}=window.wp.components,{useState:ms,useEffect:hs,useRef:Eu}=window.wp.element,{useDispatch:Wu,useSelect:qu}=window.wp.data,{useBlockId:Gu,getDimensionCSS:si,animations:ri,animationPreview:pd}=digi.utils,{tabIcons:Da}=digi.icons,{ResponsiveControl:_t,DimensionControl:ci,TypographyControl:fs,BoxShadowControl:Qu,CustomTabPanel:Ju,TabPanelBody:Ro}=digi.components,Yu=({attributes:ie,setAttributes:e,clientId:K})=>{let{id:o,anchor:O,visibility:a,customClasses:le,formName:l,recipientEmail:_,successMessage:y,errorMessage:$,enableRecaptcha:P,emailSubject:h,useSiteLogo:s,customLogo:z,businessName:S,emailHeader:C,emailFooter:w,businessAddress:T,submitButtonText:U,buttonAlign:L,backgroundColor:V,textColor:Q,labelColor:be,buttonBackgroundColor:N,buttonTextColor:u,buttonBackgroundHoverColor:v,buttonTextHoverColor:I,borderStyle:ne,borderColor:Me,borderWidth:Le,borderRadius:X,padding:H,margin:Y,typography:W,textTypography:ce,buttonTypography:ue,boxShadow:A,boxShadowHover:J,inputBorderStyle:me,inputBorderColor:oe,inputBorderWidth:fe,inputBorderRadius:je,inputPadding:te,inputBackgroundColor:to,inputTextColor:De,inputFocusBorderColor:r,animation:D,fieldGap:xe,labelMargin:Pe,fields:Se}=ie;Gu(o,K,e);let[Ue,ee]=ms(window.digi.responsiveState.activeDevice),[Be,Xe]=ms(()=>{if(window.digi.uiState){let n=window.digi.uiState.getActiveTab(K);if(n)return n}return"options"}),[q,ye]=ms(-1),{selectBlock:qe}=Wu("core/block-editor"),E=qu(n=>n("core/block-editor").getSelectedBlockClientId());hs(()=>{E===K&&q===-1&&Se.length>0?ye(0):E!==K&&ye(-1)},[E,K,Se.length]),hs(()=>window.digi.responsiveState.subscribe(we=>{ee(we)}),[]);let se=Eu(null);hs(()=>{if(D&&D!=="none"){let n=setTimeout(()=>{pd(o,D,ri,se)},100);return()=>clearTimeout(n)}},[D]);let B=()=>{pd(o,D,ri,se)},c=[{label:de("None","digiblocks"),value:"none"},...Object.keys(ri).map(n=>({label:n.replace(/-/g," ").replace(/\b\w/g,we=>we.toUpperCase()),value:n}))],ge=[{label:de("Text","digiblocks"),value:"text"},{label:de("Email","digiblocks"),value:"email"},{label:de("Number","digiblocks"),value:"number"},{label:de("Phone","digiblocks"),value:"tel"},{label:de("URL","digiblocks"),value:"url"},{label:de("Date","digiblocks"),value:"date"},{label:de("Textarea","digiblocks"),value:"textarea"},{label:de("Select","digiblocks"),value:"select"},{label:de("Checkbox","digiblocks"),value:"checkbox"},{label:de("Radio","digiblocks"),value:"radio"},{label:de("Hidden","digiblocks"),value:"hidden"}],M=[{label:de("None","digiblocks"),value:"none"},{label:de("Solid","digiblocks"),value:"solid"},{label:de("Dotted","digiblocks"),value:"dotted"},{label:de("Dashed","digiblocks"),value:"dashed"},{label:de("Double","digiblocks"),value:"double"},{label:de("Groove","digiblocks"),value:"groove"},{label:de("Inset","digiblocks"),value:"inset"},{label:de("Outset","digiblocks"),value:"outset"},{label:de("Ridge","digiblocks"),value:"ridge"}],k=[{name:"options",title:de("Options","digiblocks"),icon:Da.optionsIcon},{name:"fields",title:de("Fields","digiblocks"),icon:Da.fieldIcon},{name:"style",title:de("Style","digiblocks"),icon:Da.styleIcon},{name:"advanced",title:de("Advanced","digiblocks"),icon:Da.advancedIcon}],G=(n="text")=>{let Ke={id:`field-${Date.now()}`,type:n,label:`New ${n.charAt(0).toUpperCase()+n.slice(1)} Field`,placeholder:"Enter value",required:!1,width:100,options:n==="select"||n==="radio"?[{label:"Option 1",value:"option1"},{label:"Option 2",value:"option2"}]:[]},p=[...Se,Ke];e({fields:p}),ye(p.length-1)},d=n=>{let we=[...Se];we.splice(n,1),e({fields:we}),q===n?ye(-1):q>n&&ye(q-1)},re=n=>{let Ke={...Se[n],id:`field-${Date.now()}`},p=[...Se];p.splice(n+1,0,Ke),e({fields:p}),ye(n+1)},x=(n,we,Ke)=>{let p=[...Se];p[n]={...p[n],[we]:Ke},e({fields:p})},m=(n,we,Ke,p)=>{let g=[...Se];g[n].options||(g[n].options=[]),g[n].options[we]={...g[n].options[we],[Ke]:p},e({fields:g})},he=n=>{let we=[...Se];we[n].options||(we[n].options=[]);let Ke=we[n].options.length;we[n].options.push({label:`Option ${Ke+1}`,value:`option${Ke+1}`}),e({fields:we})},j=(n,we)=>{let Ke=[...Se];Ke[n].options.splice(we,1),e({fields:Ke})},Ne=n=>{if(n<=0)return;let we=[...Se],Ke=we[n];we[n]=we[n-1],we[n-1]=Ke,e({fields:we}),q===n?ye(n-1):q===n-1&&ye(n)},f=n=>{if(n>=Se.length-1)return;let we=[...Se],Ke=we[n];we[n]=we[n+1],we[n+1]=Ke,e({fields:we}),q===n?ye(n+1):q===n+1&&ye(n)},Ge=()=>{let n=Ue,we="";D&&D!=="none"&&ri[D]&&(we=ri[D].keyframes);let Ke="";ne&&ne!=="none"?Ke=`
				border-style: ${ne};
				border-color: ${Me};
				${si(Le,"border-width",n)}
				${si(X,"border-radius",n)}
            `:Ke="border: none;";let p="box-shadow: none;";A&&A.enable&&(p=`box-shadow: ${A.position==="inset"?"inset ":""}${A.horizontal}px ${A.vertical}px ${A.blur}px ${A.spread}px ${A.color};`);let g="";J&&J.enable&&(g=`box-shadow: ${J.position==="inset"?"inset ":""}${J.horizontal}px ${J.vertical}px ${J.blur}px ${J.spread}px ${J.color};`);let He=`${si(H,"padding",n)}`,Je=`${si(Y,"margin",n)}`,i=`${si(te,"padding",n)}`,F=`${si(je,"border-radius",n)}`,Fe="";W&&(W.fontFamily&&(Fe+=`font-family: ${W.fontFamily};`),W.fontSize&&W.fontSize[n]&&(Fe+=`font-size: ${W.fontSize[n]}${W.fontSizeUnit||"px"};`),W.fontWeight&&(Fe+=`font-weight: ${W.fontWeight};`),W.fontStyle&&(Fe+=`font-style: ${W.fontStyle};`),W.textTransform&&(Fe+=`text-transform: ${W.textTransform};`),W.lineHeight&&W.lineHeight[n]&&(Fe+=`line-height: ${W.lineHeight[n]}${W.lineHeightUnit||"em"};`),W.letterSpacing&&W.letterSpacing[n]&&(Fe+=`letter-spacing: ${W.letterSpacing[n]}${W.letterSpacingUnit||"px"};`));let po="";ce&&(ce.fontFamily&&(po+=`font-family: ${ce.fontFamily};`),ce.fontSize&&ce.fontSize[n]&&(po+=`font-size: ${ce.fontSize[n]}${ce.fontSizeUnit||"px"};`),ce.fontWeight&&(po+=`font-weight: ${ce.fontWeight};`),ce.fontStyle&&(po+=`font-style: ${ce.fontStyle};`),ce.textTransform&&(po+=`text-transform: ${ce.textTransform};`),ce.lineHeight&&ce.lineHeight[n]&&(po+=`line-height: ${ce.lineHeight[n]}${ce.lineHeightUnit||"em"};`),ce.letterSpacing&&ce.letterSpacing[n]&&(po+=`letter-spacing: ${ce.letterSpacing[n]}${ce.letterSpacingUnit||"px"};`));let R="";ue&&(ue.fontFamily&&(R+=`font-family: ${ue.fontFamily};`),ue.fontSize&&ue.fontSize[n]&&(R+=`font-size: ${ue.fontSize[n]}${ue.fontSizeUnit||"px"};`),ue.fontWeight&&(R+=`font-weight: ${ue.fontWeight};`),ue.fontStyle&&(R+=`font-style: ${ue.fontStyle};`),ue.textTransform&&(R+=`text-transform: ${ue.textTransform};`),ue.lineHeight&&ue.lineHeight[n]&&(R+=`line-height: ${ue.lineHeight[n]}${ue.lineHeightUnit||"em"};`),ue.letterSpacing&&ue.letterSpacing[n]&&(R+=`letter-spacing: ${ue.letterSpacing[n]}${ue.letterSpacingUnit||"px"};`));let Ae=L==="full"?"width: 100%;":`text-align: ${L};`,co=xe&&xe[n]?xe[n]:20,uo=Pe&&Pe[n]?Pe[n]:8,ho="";return D&&D!=="none"&&ri[D]&&(ho=ri[D].keyframes),`
            /* Forms Block - ${o} */
            .${o} {
                ${He}
                ${Je}
                ${p}
                ${Ke}
                background-color: ${V};
                color: ${Q};
                width: 100%;
                transition: all 0.3s ease;
                ${Fe}
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
                gap: ${co}px;
                margin-bottom: ${co}px;
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
                margin-bottom: ${uo}px;
                color: ${be};
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
				border-style: ${me};
				border-color: ${oe};
				${si(fe,"border-width",n)}
                background-color: ${to};
                color: ${De};
                transition: all 0.3s ease;
                ${Fe}
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
                border-color: ${r};
            }
            
            /* Checkbox and radio styles */
            .${o} .digiblocks-form-checkbox-label,
            .${o} .digiblocks-form-radio-label {
                display: flex;
                align-items: center;
				gap: 8px;
                cursor: pointer;
                margin-bottom: 8px;
            }
            
            .${o} .digiblocks-form-checkbox-label span,
            .${o} .digiblocks-form-radio-label span {
                flex: 1;
            }
            
            /* Submit button container */
            .${o} .digiblocks-form-submit {
                ${Ae}
                margin-top: ${co}px;
            }
            
            /* Submit button */
            .${o} .digiblocks-form-submit-button {
                background-color: ${N};
                color: ${u};
                border: none;
                ${F}
                padding: 12px 24px;
                cursor: pointer;
                transition: all 0.3s ease;
                ${R}
                ${L==="full"?"width: 100%;":""}
            }
            
            /* Submit button hover */
            .${o} .digiblocks-form-submit-button:hover {
                background-color: ${v};
                color: ${I};
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
				width: calc(75% - (${co}px * 0.25));
			}
			
			.${o} .digiblocks-field-width-66 {
				width: calc(66.66% - (${co}px * 0.33));
			}
			
			.${o} .digiblocks-field-width-50 {
				width: calc(50% - (${co}px * 0.5));
			}
			
			.${o} .digiblocks-field-width-33 {
				width: calc(33.33% - (${co}px * 0.67));
			}
			
			.${o} .digiblocks-field-width-25 {
				width: calc(25% - (${co}px * 0.75));
			}
            
            .${o} .digiblocks-form-fields-empty {
                padding: 20px;
                border: 2px dashed #ddd;
                text-align: center;
                border-radius: 4px;
            }
            
            /* Animation keyframes */
            ${ho}
            
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
            ${we}

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
			${a.desktop?`
				@media (min-width: 992px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${a.tablet?`
				@media (min-width: 768px) and (max-width: 991px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${a.mobile?`
				@media (max-width: 767px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}
        `},We=n=>wp.element.createElement("div",{className:"digiblocks-field-actions"},wp.element.createElement($l,{text:de("Move Up","digiblocks")},wp.element.createElement(wo,{className:"digiblocks-field-action-button",onClick:we=>{we.stopPropagation(),Ne(n)},icon:"arrow-up-alt2",disabled:n===0,isSmall:!0})),wp.element.createElement($l,{text:de("Move Down","digiblocks")},wp.element.createElement(wo,{className:"digiblocks-field-action-button",onClick:we=>{we.stopPropagation(),f(n)},icon:"arrow-down-alt2",disabled:n===Se.length-1,isSmall:!0})),wp.element.createElement($l,{text:de("Duplicate","digiblocks")},wp.element.createElement(wo,{className:"digiblocks-field-action-button",onClick:we=>{we.stopPropagation(),re(n)},icon:"admin-page",isSmall:!0})),wp.element.createElement($l,{text:de("Remove","digiblocks")},wp.element.createElement(wo,{className:"digiblocks-field-action-button",onClick:we=>{we.stopPropagation(),d(n)},icon:"trash",isDestructive:!0,isSmall:!0}))),go=n=>{if(n<0||n>=Se.length)return null;let we=Se[n];return wp.element.createElement(Vu,{title:de("Field Settings","digiblocks"),initialOpen:!0},wp.element.createElement(gt,{label:de("Field Label","digiblocks"),value:we.label||"",onChange:Ke=>x(n,"label",Ke),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Ma,{label:de("Field Type","digiblocks"),value:we.type,options:ge,onChange:Ke=>{(Ke==="select"||Ke==="radio")&&(!we.options||we.options.length===0)&&x(n,"options",[{label:"Option 1",value:"option1"},{label:"Option 2",value:"option2"}]),x(n,"type",Ke)},__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),we.type!=="hidden"&&we.type!=="checkbox"&&we.type!=="radio"&&wp.element.createElement(gt,{label:de("Placeholder","digiblocks"),value:we.placeholder||"",onChange:Ke=>x(n,"placeholder",Ke),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),we.type==="hidden"&&wp.element.createElement(gt,{label:de("Value","digiblocks"),value:we.value||"",onChange:Ke=>x(n,"value",Ke),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Pi,{label:de("Required Field","digiblocks"),checked:we.required||!1,onChange:Ke=>x(n,"required",Ke),__nextHasNoMarginBottom:!0}),wp.element.createElement(gd,{label:de("Field Width (%)","digiblocks"),value:we.width?.toString()||"100",onChange:Ke=>x(n,"width",parseInt(Ke)),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(pt,{value:"100",label:de("100","digiblocks")}),wp.element.createElement(pt,{value:"75",label:de("75","digiblocks")}),wp.element.createElement(pt,{value:"66",label:de("66","digiblocks")}),wp.element.createElement(pt,{value:"50",label:de("50","digiblocks")}),wp.element.createElement(pt,{value:"33",label:de("33","digiblocks")}),wp.element.createElement(pt,{value:"25",label:de("25","digiblocks")})),(we.type==="select"||we.type==="radio")&&we.options&&wp.element.createElement("div",{className:"digiblocks-field-options"},wp.element.createElement("p",{className:"components-base-control__label"},de("Options","digiblocks")),we.options.map((Ke,p)=>wp.element.createElement("div",{key:p,className:"digiblocks-field-option"},wp.element.createElement("div",{style:{display:"flex",alignItems:"center",marginBottom:"15px"}},wp.element.createElement(gt,{label:de("Label","digiblocks"),value:Ke.label||"",onChange:g=>m(n,p,"label",g),style:{flexGrow:1,marginRight:"8px"},__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(gt,{label:de("Value","digiblocks"),value:Ke.value||"",onChange:g=>m(n,p,"value",g),style:{flexGrow:1,marginRight:"8px"},__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement($l,{text:de("Remove Option","digiblocks")},wp.element.createElement(wo,{isDestructive:!0,isSmall:!0,icon:"trash",onClick:()=>j(n,p),style:{alignSelf:"flex-end",marginBottom:"8px"}}))))),wp.element.createElement(wo,{isSecondary:!0,onClick:()=>he(n),style:{marginTop:"8px",width:"100%"}},de("Add Option","digiblocks"))))},t=(n,we)=>{let Ke=q===we,p=`digiblocks-form-field digiblocks-field-width-${n.width||"100"} ${Ke?"is-selected":""}`,g={readOnly:!0,tabIndex:-1,style:{pointerEvents:"none"}},He=({children:Je})=>wp.element.createElement("div",{className:p,onClick:()=>ye(we)},Ke&&We(we),Je);switch(n.type){case"text":case"email":case"number":case"tel":case"url":case"date":return wp.element.createElement(He,{key:n.id,index:we},wp.element.createElement("label",{className:"digiblocks-form-field-label"},n.label,n.required&&wp.element.createElement("span",{className:"digiblocks-form-field-required"},"*")),wp.element.createElement("input",{type:n.type,className:"digiblocks-form-input",placeholder:n.placeholder||"",...g}),wp.element.createElement("div",{className:"digiblocks-form-field-error"}));case"textarea":return wp.element.createElement(He,{key:n.id,index:we},wp.element.createElement("label",{className:"digiblocks-form-field-label"},n.label,n.required&&wp.element.createElement("span",{className:"digiblocks-form-field-required"},"*")),wp.element.createElement("textarea",{className:"digiblocks-form-textarea",placeholder:n.placeholder||"",...g}),wp.element.createElement("div",{className:"digiblocks-form-field-error"}));case"select":return wp.element.createElement(He,{key:n.id,index:we},wp.element.createElement("label",{className:"digiblocks-form-field-label"},n.label,n.required&&wp.element.createElement("span",{className:"digiblocks-form-field-required"},"*")),wp.element.createElement("select",{className:"digiblocks-form-select",...g},wp.element.createElement("option",{value:""},n.placeholder||de("Select an option","digiblocks")),n.options&&n.options.map((Je,i)=>wp.element.createElement("option",{key:i,value:Je.value},Je.label))),wp.element.createElement("div",{className:"digiblocks-form-field-error"}));case"checkbox":return wp.element.createElement(He,{key:n.id,index:we},wp.element.createElement("label",{className:"digiblocks-form-checkbox-label"},wp.element.createElement("input",{type:"checkbox",className:"digiblocks-form-checkbox",...g}),wp.element.createElement("span",null,n.label,n.required&&wp.element.createElement("span",{className:"digiblocks-form-field-required"},"*"))),wp.element.createElement("div",{className:"digiblocks-form-field-error"}));case"radio":return wp.element.createElement(He,{key:n.id,index:we},wp.element.createElement("label",{className:"digiblocks-form-field-label"},n.label,n.required&&wp.element.createElement("span",{className:"digiblocks-form-field-required"},"*")),n.options&&n.options.map((Je,i)=>wp.element.createElement("label",{key:i,className:"digiblocks-form-radio-label"},wp.element.createElement("input",{type:"radio",className:"digiblocks-form-radio",name:`radio-${n.id}`,value:Je.value,...g}),wp.element.createElement("span",null,Je.label))),wp.element.createElement("div",{className:"digiblocks-form-field-error"}));case"hidden":return wp.element.createElement(He,{key:n.id,index:we},wp.element.createElement("div",{style:{padding:"10px",background:"#f7f7f7",borderRadius:"4px"}},wp.element.createElement("div",{style:{display:"flex",alignItems:"center"}},wp.element.createElement(Fu,{icon:"hidden",style:{marginRight:"8px"}}),wp.element.createElement("span",null,wp.element.createElement("strong",null,de("Hidden Field:","digiblocks"))," ",n.label,wp.element.createElement("br",null),wp.element.createElement("small",{style:{opacity:.7}},de("Value:","digiblocks")," ",n.value||de("Not set","digiblocks"))))));default:return null}},b=()=>{switch(Be){case"options":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Ro,{tab:"options",name:"form-settings",title:de("Form Settings","digiblocks"),initialOpen:!0},wp.element.createElement(gt,{label:de("Form Name","digiblocks"),value:l,onChange:n=>e({formName:n}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(gt,{label:de("Recipient Email","digiblocks"),value:_,onChange:n=>e({recipientEmail:n}),help:de("Leave empty to use the admin email","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(gt,{label:de("Button Text","digiblocks"),value:U,onChange:n=>e({submitButtonText:n}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(gd,{label:de("Button Alignment","digiblocks"),value:L,onChange:n=>e({buttonAlign:n}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(pt,{value:"left",label:de("Left","digiblocks")}),wp.element.createElement(pt,{value:"center",label:de("Center","digiblocks")}),wp.element.createElement(pt,{value:"right",label:de("Right","digiblocks")}),wp.element.createElement(pt,{value:"full",label:de("Full","digiblocks")}))),wp.element.createElement(Ro,{tab:"options",name:"messages",title:de("Messages","digiblocks"),initialOpen:!1},wp.element.createElement(Sl,{label:de("Success Message","digiblocks"),value:y,onChange:n=>e({successMessage:n}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Sl,{label:de("Error Message","digiblocks"),value:$,onChange:n=>e({errorMessage:n}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(Ro,{tab:"options",name:"security",title:de("Security","digiblocks"),initialOpen:!1},wp.element.createElement(Pi,{label:de("Enable reCAPTCHA","digiblocks"),checked:P,onChange:n=>e({enableRecaptcha:n}),help:de("Enable Google reCAPTCHA to protect your form from spam.","digiblocks"),__nextHasNoMarginBottom:!0})),wp.element.createElement(Ro,{tab:"options",name:"email-settings",title:de("Email Settings","digiblocks"),initialOpen:!1},wp.element.createElement(gt,{label:de("Email Subject","digiblocks"),value:h,onChange:n=>e({emailSubject:n}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Pi,{label:de("Use Site Logo","digiblocks"),checked:s,onChange:n=>e({useSiteLogo:n}),help:de("Display the site logo in email header","digiblocks"),__nextHasNoMarginBottom:!0}),!s&&wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("label",{className:"components-base-control__label"},de("Custom Logo","digiblocks")),wp.element.createElement("div",{className:"editor-post-featured-image"},wp.element.createElement(Uu,null,wp.element.createElement(ju,{onSelect:n=>{e({customLogo:n.url})},allowedTypes:["image"],value:z,render:({open:n})=>wp.element.createElement("div",{className:"components-base-control__field"},z?wp.element.createElement("div",null,wp.element.createElement("img",{src:z,alt:de("Logo","digiblocks"),style:{maxWidth:"100%",maxHeight:"100px",marginBottom:"8px",display:"block"}}),wp.element.createElement("div",{className:"components-button-group",style:{display:"flex"}},wp.element.createElement(wo,{onClick:n,variant:"secondary",isSmall:!0},de("Replace","digiblocks")),wp.element.createElement(wo,{onClick:()=>e({customLogo:""}),variant:"secondary",isDestructive:!0,isSmall:!0,style:{marginLeft:"8px"}},de("Remove","digiblocks")))):wp.element.createElement(wo,{onClick:n,variant:"secondary",className:"editor-post-featured-image__toggle"},de("Upload Logo","digiblocks")))})))),wp.element.createElement(gt,{label:de("Business Name","digiblocks"),value:S,onChange:n=>e({businessName:n}),help:de("Leave empty to use the site name","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Sl,{label:de("Email Header Text","digiblocks"),value:C,onChange:n=>e({emailHeader:n}),help:de("Optional text to display above the form data","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Sl,{label:de("Email Footer Text","digiblocks"),value:w,onChange:n=>e({emailFooter:n}),help:de("Optional text for the email footer (e.g., business address)","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Sl,{label:de("Business Address","digiblocks"),value:T,onChange:n=>e({businessAddress:n}),help:de("Business address to display in email footer","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})));case"fields":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Ro,{tab:"fields",name:"field-types",title:de("Add Fields","digiblocks"),initialOpen:!0},wp.element.createElement("div",{className:"digi-field-select"},wp.element.createElement(wo,{onClick:()=>G("text")},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},wp.element.createElement("path",{d:"M64 96l0 32c0 17.7-14.3 32-32 32s-32-14.3-32-32L0 80C0 53.5 21.5 32 48 32l176 0 176 0c26.5 0 48 21.5 48 48l0 48c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-32L256 96l0 320 48 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-160 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l48 0 0-320L64 96z"})),wp.element.createElement("span",null,de("Text","digiblocks"))),wp.element.createElement(wo,{onClick:()=>G("email")},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},wp.element.createElement("path",{d:"M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"})),wp.element.createElement("span",null,de("Email","digiblocks"))),wp.element.createElement(wo,{onClick:()=>G("number")},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},wp.element.createElement("path",{d:"M181.3 32.4c17.4 2.9 29.2 19.4 26.3 36.8L197.8 128l95.1 0 11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3s29.2 19.4 26.3 36.8L357.8 128l58.2 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-68.9 0L325.8 320l58.2 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-68.9 0-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8l9.8-58.7-95.1 0-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8L90.2 384 32 384c-17.7 0-32-14.3-32-32s14.3-32 32-32l68.9 0 21.3-128L64 192c-17.7 0-32-14.3-32-32s14.3-32 32-32l68.9 0 11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3zM187.1 192L165.8 320l95.1 0 21.3-128-95.1 0z"})),wp.element.createElement("span",null,de("Number","digiblocks"))),wp.element.createElement(wo,{onClick:()=>G("tel")},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},wp.element.createElement("path",{d:"M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"})),wp.element.createElement("span",null,de("Phone","digiblocks"))),wp.element.createElement(wo,{onClick:()=>G("date")},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},wp.element.createElement("path",{d:"M96 32l0 32L48 64C21.5 64 0 85.5 0 112l0 48 448 0 0-48c0-26.5-21.5-48-48-48l-48 0 0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32L160 64l0-32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192L0 192 0 464c0 26.5 21.5 48 48 48l352 0c26.5 0 48-21.5 48-48l0-272z"})),wp.element.createElement("span",null,de("Date","digiblocks"))),wp.element.createElement(wo,{onClick:()=>G("textarea")},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},wp.element.createElement("path",{d:"M192 32l64 0 160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0 0 352c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-352-32 0 0 352c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-32 0c-88.4 0-160-71.6-160-160s71.6-160 160-160z"})),wp.element.createElement("span",null,de("Textarea","digiblocks"))),wp.element.createElement(wo,{onClick:()=>G("select")},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},wp.element.createElement("path",{d:"M384 480c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0zM224 352c-6.7 0-13-2.8-17.6-7.7l-104-112c-6.5-7-8.2-17.2-4.4-25.9s12.5-14.4 22-14.4l208 0c9.5 0 18.2 5.7 22 14.4s2.1 18.9-4.4 25.9l-104 112c-4.5 4.9-10.9 7.7-17.6 7.7z"})),wp.element.createElement("span",null,de("Select","digiblocks"))),wp.element.createElement(wo,{onClick:()=>G("checkbox")},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},wp.element.createElement("path",{d:"M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"})),wp.element.createElement("span",null,de("Checkbox","digiblocks"))),wp.element.createElement(wo,{onClick:()=>G("radio")},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},wp.element.createElement("path",{d:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-352a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"})),wp.element.createElement("span",null,de("Radio","digiblocks"))),wp.element.createElement(wo,{onClick:()=>G("hidden")},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512"},wp.element.createElement("path",{d:"M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"})),wp.element.createElement("span",null,de("Hidden","digiblocks")))),wp.element.createElement(_t,{label:de("Field Gap","digiblocks")},wp.element.createElement(dd,{value:xe[Ue],onChange:n=>e({fieldGap:{...xe,[Ue]:n}}),min:0,max:50,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(_t,{label:de("Label Margin","digiblocks")},wp.element.createElement(dd,{value:Pe[Ue],onChange:n=>e({labelMargin:{...Pe,[Ue]:n}}),min:0,max:30,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}))),q>=0&&go(q));case"style":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Ro,{tab:"style",name:"colors",title:de("Colors","digiblocks"),initialOpen:!0},wp.element.createElement(za,{title:de("Form Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:V,onChange:n=>e({backgroundColor:n}),label:de("Background Color","digiblocks")},{value:Q,onChange:n=>e({textColor:n}),label:de("Text Color","digiblocks")},{value:be,onChange:n=>e({labelColor:n}),label:de("Label Color","digiblocks")}]}),wp.element.createElement(za,{title:de("Input Colors","digiblocks"),initialOpen:!1,enableAlpha:!0,colorSettings:[{value:to,onChange:n=>e({inputBackgroundColor:n}),label:de("Input Background","digiblocks")},{value:De,onChange:n=>e({inputTextColor:n}),label:de("Input Text","digiblocks")},{value:oe,onChange:n=>e({inputBorderColor:n}),label:de("Input Border","digiblocks")},{value:r,onChange:n=>e({inputFocusBorderColor:n}),label:de("Input Focus Border","digiblocks")}]}),wp.element.createElement(za,{title:de("Button Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:N,onChange:n=>e({buttonBackgroundColor:n}),label:de("Background Color","digiblocks")},{value:u,onChange:n=>e({buttonTextColor:n}),label:de("Text Color","digiblocks")},{value:v,onChange:n=>e({buttonBackgroundHoverColor:n}),label:de("Hover Background Color","digiblocks")},{value:I,onChange:n=>e({buttonTextHoverColor:n}),label:de("Hover Text Color","digiblocks")}]})),wp.element.createElement(Ro,{tab:"style",name:"typography",title:de("Typography","digiblocks"),initialOpen:!1},wp.element.createElement(fs,{label:de("Form Typography","digiblocks"),value:W,onChange:n=>e({typography:n}),defaults:{fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em"}}),wp.element.createElement(fs,{label:de("Label Typography","digiblocks"),value:ce,onChange:n=>e({textTypography:n}),defaults:{fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em"}}),wp.element.createElement(fs,{label:de("Button Typography","digiblocks"),value:ue,onChange:n=>e({buttonTypography:n}),defaults:{fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em"}})),wp.element.createElement(Ro,{tab:"style",name:"form-border",title:de("Form Border","digiblocks"),initialOpen:!1},wp.element.createElement(Ma,{label:de("Border Style","digiblocks"),value:ne,options:M,onChange:n=>e({borderStyle:n}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),ne!=="none"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(_t,{label:de("Border Width","digiblocks")},wp.element.createElement(ci,{values:Le[Ue],onChange:n=>e({borderWidth:{...Le,[Ue]:n}}),units:[{label:"px",value:"px"},{label:"rem",value:"rem"},{label:"em",value:"em"},{label:"%",value:"%"}]})),wp.element.createElement(za,{title:de("Border Color","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:Me,onChange:n=>e({borderColor:n}),label:de("Border Color","digiblocks")}]}),wp.element.createElement(_t,{label:de("Border Radius","digiblocks")},wp.element.createElement(ci,{values:X[Ue],onChange:n=>e({borderRadius:{...X,[Ue]:n}}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]}))),wp.element.createElement(Qu,{normalValue:A,hoverValue:J,onNormalChange:n=>e({boxShadow:n}),onHoverChange:n=>e({boxShadowHover:n})})),wp.element.createElement(Ro,{tab:"style",name:"input-style",title:de("Input Style","digiblocks"),initialOpen:!1},wp.element.createElement(Ma,{label:de("Input Border Style","digiblocks"),value:me,options:M,onChange:n=>e({inputBorderStyle:n}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),me!=="none"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(_t,{label:de("Input Border Width","digiblocks")},wp.element.createElement(ci,{values:fe[Ue],onChange:n=>e({inputBorderWidth:{...fe,[Ue]:n}}),units:[{label:"px",value:"px"},{label:"rem",value:"rem"},{label:"em",value:"em"},{label:"%",value:"%"}]})),wp.element.createElement(_t,{label:de("Input Border Radius","digiblocks")},wp.element.createElement(ci,{values:je&&je[Ue]?je[Ue]:{top:4,right:4,bottom:4,left:4,unit:"px"},onChange:n=>e({inputBorderRadius:{...je,[Ue]:n}}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]}))),wp.element.createElement(_t,{label:de("Input Padding","digiblocks")},wp.element.createElement(ci,{values:te&&te[Ue]?te[Ue]:{top:12,right:15,bottom:12,left:15,unit:"px"},onChange:n=>e({inputPadding:{...te,[Ue]:n}})}))),wp.element.createElement(Ro,{tab:"style",name:"spacing",title:de("Spacing","digiblocks"),initialOpen:!1},wp.element.createElement(_t,{label:de("Padding","digiblocks")},wp.element.createElement(ci,{values:H&&H[Ue]?H[Ue]:{top:30,right:30,bottom:30,left:30,unit:"px"},onChange:n=>e({padding:{...H,[Ue]:n}})})),wp.element.createElement(_t,{label:de("Margin","digiblocks")},wp.element.createElement(ci,{values:Y&&Y[Ue]?Y[Ue]:{top:0,right:0,bottom:30,left:0,unit:"px"},onChange:n=>e({margin:{...Y,[Ue]:n}})}))));case"advanced":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Ro,{tab:"advanced",name:"animation",title:de("Animation","digiblocks"),initialOpen:!0},wp.element.createElement(Ma,{label:de("Animation Effect","digiblocks"),value:D,options:c,onChange:n=>e({animation:n}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),D&&D!=="none"&&wp.element.createElement("div",{style:{marginTop:"10px"}},wp.element.createElement(wo,{variant:"secondary",isSecondary:!0,onClick:B,style:{width:"100%"}},de("Preview Animation","digiblocks")))),wp.element.createElement(Ro,{tab:"advanced",name:"visibility",title:de("Visibility","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control__help",style:{padding:"12px",backgroundColor:"#f0f6fc",border:"1px solid #c3ddfd",borderRadius:"4px",marginBottom:"16px"}},wp.element.createElement("strong",null,de("Editor Note:","digiblocks")),wp.element.createElement("br",null),de("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.","digiblocks")),wp.element.createElement(Pi,{label:de("Hide on Desktop","digiblocks"),checked:a.desktop,onChange:n=>e({visibility:{...a,desktop:n}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(Pi,{label:de("Hide on Tablet","digiblocks"),checked:a.tablet,onChange:n=>e({visibility:{...a,tablet:n}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(Pi,{label:de("Hide on Mobile","digiblocks"),checked:a.mobile,onChange:n=>e({visibility:{...a,mobile:n}}),__nextHasNoMarginBottom:!0})),wp.element.createElement(Ro,{tab:"advanced",name:"additional",title:de("Additional","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control html-anchor-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"html-anchor"},de("HTML anchor","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"html-anchor",value:O||"",onChange:n=>e({anchor:n.target.value}),"aria-describedby":"html-anchor-help",autoCapitalize:"none",autoComplete:"off"})),wp.element.createElement("p",{id:"html-anchor-help",className:"components-base-control__help"},de(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`,"digiblocks")," ",wp.element.createElement("a",{className:"components-external-link",href:"https://wordpress.org/documentation/article/page-jumps/",target:"_blank",rel:"external noreferrer noopener"},wp.element.createElement("span",{className:"components-external-link__contents"},de("Learn more about anchors","digiblocks")),wp.element.createElement("span",{className:"components-external-link__icon","aria-label":"(opens in a new tab)"},"\u2197")))),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"additional-css-classes"},de("Additional CSS class(es)","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"additional-css-classes",value:le||"",onChange:n=>e({customClasses:n.target.value}),"aria-describedby":"additional-css-classes-help",autoComplete:"off"})),wp.element.createElement("p",{id:"additional-css-classes-help",className:"components-base-control__help"},de("Separate multiple classes with spaces.","digiblocks")))));default:return null}},Ce=Lu({className:`digiblocks-forms ${o} ${le||""}`,id:O||null});return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Ou,null,wp.element.createElement(Ju,{tabs:k,activeTab:Be,onSelect:Xe,customClass:"four"},b())),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:Ge()}}),wp.element.createElement("div",{...Ce},wp.element.createElement("div",{className:"digiblocks-form"},wp.element.createElement("div",{className:"digiblocks-form-fields"},Se&&Se.length>0?Se.map((n,we)=>t(n,we)):wp.element.createElement("div",{className:"digiblocks-form-fields-empty"},de('No fields added yet. Click the "Fields" tab to add form fields.',"digiblocks"))),wp.element.createElement("div",{className:"digiblocks-form-submit",style:{textAlign:L==="full"?"center":L}},wp.element.createElement("button",{className:"digiblocks-form-submit-button"},U)),wp.element.createElement("div",{className:"digiblocks-form-messages"},wp.element.createElement("div",{className:"digiblocks-form-success"},y),wp.element.createElement("div",{className:"digiblocks-form-error"},$)))))},bd=Yu;var{useBlockProps:Zu}=window.wp.blockEditor,Ku=({attributes:ie})=>{let{id:e,anchor:K,customClasses:o,animation:O,successMessage:a,errorMessage:le,submitButtonText:l,buttonAlign:_,fields:y}=ie,$=`digiblocks-forms ${e} ${O!=="none"?`animate-${O}`:""} ${o||""}`,P=Zu.save({className:$,id:K||null}),h=(s,z)=>{let S=`digiblocks-field-width-${s.width||"100"}`;switch(s.type){case"text":case"email":case"number":case"tel":case"url":case"date":return wp.element.createElement("div",{key:s.id,className:`digiblocks-form-field ${S}`,"data-field-id":s.id,"data-field-type":s.type},wp.element.createElement("label",{className:"digiblocks-form-field-label",htmlFor:`${e}-${s.id}`},s.label,s.required&&wp.element.createElement("span",{className:"digiblocks-form-field-required"},"*")),wp.element.createElement("input",{type:s.type,id:`${e}-${s.id}`,name:s.id,className:"digiblocks-form-input",placeholder:s.placeholder||"",required:s.required}),wp.element.createElement("div",{className:"digiblocks-form-field-error"}));case"textarea":return wp.element.createElement("div",{key:s.id,className:`digiblocks-form-field ${S}`,"data-field-id":s.id,"data-field-type":s.type},wp.element.createElement("label",{className:"digiblocks-form-field-label",htmlFor:`${e}-${s.id}`},s.label,s.required&&wp.element.createElement("span",{className:"digiblocks-form-field-required"},"*")),wp.element.createElement("textarea",{id:`${e}-${s.id}`,name:s.id,className:"digiblocks-form-textarea",placeholder:s.placeholder||"",required:s.required}),wp.element.createElement("div",{className:"digiblocks-form-field-error"}));case"select":return wp.element.createElement("div",{key:s.id,className:`digiblocks-form-field ${S}`,"data-field-id":s.id,"data-field-type":s.type},wp.element.createElement("label",{className:"digiblocks-form-field-label",htmlFor:`${e}-${s.id}`},s.label,s.required&&wp.element.createElement("span",{className:"digiblocks-form-field-required"},"*")),wp.element.createElement("select",{id:`${e}-${s.id}`,name:s.id,className:"digiblocks-form-select",required:s.required},wp.element.createElement("option",{value:""},s.placeholder||"Select an option"),s.options&&s.options.map((C,w)=>wp.element.createElement("option",{key:w,value:C.value},C.label))),wp.element.createElement("div",{className:"digiblocks-form-field-error"}));case"checkbox":return wp.element.createElement("div",{key:s.id,className:`digiblocks-form-field ${S}`,"data-field-id":s.id,"data-field-type":s.type},wp.element.createElement("label",{className:"digiblocks-form-checkbox-label"},wp.element.createElement("input",{type:"checkbox",id:`${e}-${s.id}`,name:s.id,className:"digiblocks-form-checkbox",value:"1",required:s.required}),wp.element.createElement("span",null,s.label,s.required&&wp.element.createElement("span",{className:"digiblocks-form-field-required"},"*"))),wp.element.createElement("div",{className:"digiblocks-form-field-error"}));case"radio":return wp.element.createElement("div",{key:s.id,className:`digiblocks-form-field ${S}`,"data-field-id":s.id,"data-field-type":s.type},wp.element.createElement("label",{className:"digiblocks-form-field-label"},s.label,s.required&&wp.element.createElement("span",{className:"digiblocks-form-field-required"},"*")),s.options&&s.options.map((C,w)=>wp.element.createElement("label",{key:w,className:"digiblocks-form-radio-label"},wp.element.createElement("input",{type:"radio",id:`${e}-${s.id}-${w}`,name:s.id,className:"digiblocks-form-radio",value:C.value,required:s.required&&w===0}),wp.element.createElement("span",null,C.label))),wp.element.createElement("div",{className:"digiblocks-form-field-error"}));case"hidden":return wp.element.createElement("input",{key:s.id,type:"hidden",id:`${e}-${s.id}`,name:s.id,value:s.value||"","data-field-id":s.id,"data-field-type":s.type});default:return null}};return wp.element.createElement("div",{...P},wp.element.createElement("form",{className:"digiblocks-form",id:`${e}-form`,"data-form-id":e,onSubmit:"return false;"},wp.element.createElement("div",{className:"digiblocks-form-fields"},y&&y.map((s,z)=>h(s,z))),wp.element.createElement("div",{className:"digiblocks-form-submit",style:{textAlign:_==="full"?"center":_}},wp.element.createElement("button",{type:"submit",className:"digiblocks-form-submit-button",style:_==="full"?{width:"100%"}:{}},l)),wp.element.createElement("div",{className:"digiblocks-form-messages"},wp.element.createElement("div",{className:"digiblocks-form-success"},a),wp.element.createElement("div",{className:"digiblocks-form-error"},le))))},ud=Ku;var{__:xo}=window.wp.i18n,{registerBlockType:Xu}=window.wp.blocks,{getBlockActiveStatus:Au}=window.wp.digiBlocks;Xu("digiblocks/forms",{apiVersion:2,title:digiBlocksData.blocks.forms.title,category:"digiblocks",icon:{src:()=>{let{viewbox:ie,path:e}=digiBlocksData.blocks.forms.icon;return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${ie}`,className:"digiblocks-editor-icons"},wp.element.createElement("path",{d:e}))}},description:digiBlocksData.blocks.forms.description,keywords:[xo("form","digiblocks"),xo("contact","digiblocks"),xo("input","digiblocks"),xo("email","digiblocks"),xo("field","digiblocks")],supports:{inserter:!!Au("forms"),html:!1,className:!1,customClassName:!1,anchor:!1},attributes:{id:{type:"string",default:""},anchor:{type:"string"},visibility:{type:"object",default:{desktop:!1,tablet:!1,mobile:!1}},customClasses:{type:"string"},formName:{type:"string",default:xo("Contact Form","digiblocks")},recipientEmail:{type:"string",default:""},emailSubject:{type:"string",default:xo("New form submission","digiblocks")},successMessage:{type:"string",default:xo("Thank you for your submission!","digiblocks")},errorMessage:{type:"string",default:xo("There was an error submitting the form. Please try again.","digiblocks")},enableRecaptcha:{type:"boolean",default:!1},useSiteLogo:{type:"boolean",default:!0},customLogo:{type:"string",default:""},emailHeader:{type:"string",default:""},emailFooter:{type:"string",default:""},businessName:{type:"string",default:""},businessAddress:{type:"string",default:""},submitButtonText:{type:"string",default:xo("Submit","digiblocks")},buttonAlign:{type:"string",default:"left"},backgroundColor:{type:"string",default:"#ffffff"},textColor:{type:"string",default:"#333333"},labelColor:{type:"string",default:"#333333"},buttonBackgroundColor:{type:"string",default:"#4a6cf7"},buttonTextColor:{type:"string",default:"#ffffff"},buttonBackgroundHoverColor:{type:"string",default:"#3a5ce5"},buttonTextHoverColor:{type:"string",default:"#ffffff"},borderStyle:{type:"string",default:"solid"},borderColor:{type:"string",default:"#e0e0e0"},borderWidth:{type:"object",default:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderRadius:{type:"object",default:{desktop:{top:8,right:8,bottom:8,left:8,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},padding:{type:"object",default:{desktop:{top:30,right:30,bottom:30,left:30,unit:"px"},tablet:{top:25,right:25,bottom:25,left:25,unit:"px"},mobile:{top:20,right:20,bottom:20,left:20,unit:"px"}}},margin:{type:"object",default:{desktop:{top:0,right:0,bottom:30,left:0,unit:"px"},tablet:{top:0,right:0,bottom:25,left:0,unit:"px"},mobile:{top:0,right:0,bottom:20,left:0,unit:"px"}}},typography:{type:"object",default:{}},textTypography:{type:"object",default:{}},buttonTypography:{type:"object",default:{}},boxShadow:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.1)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},boxShadowHover:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},inputBorderStyle:{type:"string",default:"solid"},inputBorderColor:{type:"string",default:"#e0e0e0"},inputBorderWidth:{type:"object",default:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},inputBorderRadius:{type:"object",default:{desktop:{top:4,right:4,bottom:4,left:4,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},inputPadding:{type:"object",default:{desktop:{top:12,right:15,bottom:12,left:15,unit:"px"},tablet:{top:10,right:12,bottom:10,left:12,unit:"px"},mobile:{top:8,right:10,bottom:8,left:10,unit:"px"}}},inputBackgroundColor:{type:"string",default:"#ffffff"},inputTextColor:{type:"string",default:"#333333"},inputFocusBorderColor:{type:"string",default:"#4a6cf7"},animation:{type:"string",default:"none"},fieldGap:{type:"object",default:{desktop:20,tablet:15,mobile:12}},labelMargin:{type:"object",default:{desktop:8,tablet:6,mobile:5}},fields:{type:"array",default:[{id:"name",type:"text",label:xo("Name","digiblocks"),placeholder:xo("Enter your name","digiblocks"),required:!0,width:100},{id:"email",type:"email",label:xo("Email","digiblocks"),placeholder:xo("Enter your email","digiblocks"),required:!0,width:100},{id:"message",type:"textarea",label:xo("Message","digiblocks"),placeholder:xo("Enter your message","digiblocks"),required:!0,width:100}]}},example:{attributes:{fields:[{id:"name",type:"text",label:xo("Name","digiblocks"),placeholder:xo("Enter your name","digiblocks"),required:!0,width:100},{id:"email",type:"email",label:xo("Email","digiblocks"),placeholder:xo("Enter your email","digiblocks"),required:!0,width:100},{id:"message",type:"textarea",label:xo("Message","digiblocks"),placeholder:xo("Enter your message","digiblocks"),required:!0,width:100}],formName:xo("Contact Form","digiblocks"),backgroundColor:"#ffffff",textColor:"#333333",labelColor:"#333333",borderStyle:"solid",borderColor:"#e0e0e0",buttonBackgroundColor:"#4a6cf7",buttonTextColor:"#ffffff",submitButtonText:xo("Submit","digiblocks"),viewportWidth:450}},edit:bd,save:ud});var{__:eo}=window.wp.i18n,{useBlockProps:em,InspectorControls:om,PanelColorSettings:tm}=window.wp.blockEditor,{TextControl:ks,TextareaControl:md,RangeControl:hd,SelectControl:Pa,Button:Ri,Placeholder:im,Spinner:lm,ToggleControl:Ft,BaseControl:am,__experimentalToggleGroupControl:I1,__experimentalToggleGroupControlOption:L1}=window.wp.components,{useState:di,useEffect:Ii,useRef:vs}=window.wp.element,{useBlockId:nm,getDimensionCSS:fd,animations:_l,animationPreview:kd}=digi.utils,{tabIcons:xs}=digi.icons,{ResponsiveControl:ys,DimensionControl:vd,CustomTabPanel:sm,BoxShadowControl:rm,TabPanelBody:Bt}=digi.components,cm=({attributes:ie,setAttributes:e,clientId:K})=>{let{id:o,anchor:O,visibility:a,customClasses:le,mapHeight:l,zoom:_,mapType:y,mapStyle:$,customMapStyle:P,markers:h,address:s,animation:z,enableZoom:S,enableScroll:C,enableFullscreenControl:w,enableStreetViewControl:T,enableMapTypeControl:U,borderStyle:L,borderWidth:V,borderRadius:Q,borderColor:be,boxShadow:N,boxShadowHover:u}=ie;nm(o,K,e);let[v,I]=di(window.digi.responsiveState.activeDevice),[ne,Me]=di(!1),[Le,X]=di(null),[H,Y]=di(!1),[W,ce]=di(null),[ue,A]=di([]),J=vs(null),me=vs(null),[oe,fe]=di(()=>{if(window.digi.uiState){let B=window.digi.uiState.getActiveTab(K);if(B)return B}return"options"});Ii(()=>window.digi.responsiveState.subscribe(c=>{I(c)}),[]),Ii(()=>{h||e({markers:[]})},[e]),Ii(()=>{if(!H&&typeof google>"u"&&!window.googleMapsLoading){if(!digiBlocksData.googleMapsApiKey){X(eo("Google Maps API key not found. Please add it in the DigiBlocks settings.","digiblocks"));return}window.googleMapsLoading=!0,window.digiblocksGoogleMapsCallbacks=window.digiblocksGoogleMapsCallbacks||[];let B=()=>{Y(!0),me.current=new google.maps.Geocoder};window.digiblocksGoogleMapsCallbacks.push(B),typeof window.digiblocksGoogleMapsCallback!="function"&&(window.digiblocksGoogleMapsCallback=()=>{window.googleMapsInitialized=!0,window.googleMapsLoading=!1,window.digiblocksGoogleMapsCallbacks.forEach(ge=>{typeof ge=="function"&&ge()})});let c=document.createElement("script");return c.src=`https://maps.googleapis.com/maps/api/js?key=${digiBlocksData.googleMapsApiKey}&callback=digiblocksGoogleMapsCallback&loading=async`,c.async=!0,c.defer=!0,document.head.appendChild(c),()=>{let ge=window.digiblocksGoogleMapsCallbacks.indexOf(B);ge>-1&&window.digiblocksGoogleMapsCallbacks.splice(ge,1)}}else if(!H&&typeof google<"u")Y(!0),me.current=new google.maps.Geocoder;else if(!H&&window.googleMapsLoading){let B=()=>{Y(!0),me.current=new google.maps.Geocoder};return window.digiblocksGoogleMapsCallbacks=window.digiblocksGoogleMapsCallbacks||[],window.digiblocksGoogleMapsCallbacks.push(B),()=>{let c=window.digiblocksGoogleMapsCallbacks.indexOf(B);c>-1&&window.digiblocksGoogleMapsCallbacks.splice(c,1)}}},[H]),Ii(()=>{if(H&&J.current&&!W){let c={center:{lat:40.7128,lng:-74.006},zoom:_||10,mapTypeId:y||"roadmap",zoomControl:S,scrollwheel:C,fullscreenControl:w,streetViewControl:T,mapTypeControl:U},ge=h&&h.length>0;if(ge&&digiBlocksData.googleMapsMapId)c.mapId=digiBlocksData.googleMapsMapId;else if($&&$!=="default")if($==="custom"&&P)try{let k=JSON.parse(P);c.styles=k}catch(k){console.error("Invalid map style JSON:",k)}else Be[$]&&(c.styles=Be[$]);let M=new google.maps.Map(J.current,c);ce(M),me.current||(me.current=new google.maps.Geocoder),s&&je(s,M),ge&&D(h,M)}},[H,J,W,_,y,$,P,s,h,S,C,w,T,U]),Ii(()=>{if(W){if(W.setZoom(_),W.setMapTypeId(y),$&&$!=="default")if($==="custom"&&P)try{let B=JSON.parse(P);W.setOptions({styles:B})}catch(B){console.error("Invalid map style JSON:",B)}else Be[$]&&W.setOptions({styles:Be[$]});else W.setOptions({styles:[]});W.setOptions({zoomControl:S,scrollwheel:C,fullscreenControl:w,streetViewControl:T,mapTypeControl:U})}},[W,_,y,$,P,S,C,w,T,U]);let je=(B,c,ge=-1)=>{me.current&&(Me(!0),X(null),me.current.geocode({address:B},(M,k)=>{if(Me(!1),k==="OK"&&M&&M.length>0){let G=M[0].geometry.location;if(ge>=0){let d=[...h];d[ge]={...d[ge],latitude:G.lat(),longitude:G.lng()},e({markers:d}),W&&D(d,W)}else if(c.setCenter(G),h&&h.length>0){let d=[...h];d[0]={...d[0],address:B,latitude:G.lat(),longitude:G.lng()},e({markers:d}),W&&D(d,W)}}else X(eo("Could not find address. Please try a different one or use the map to position your marker.","digiblocks"))}))},te=()=>{let B=[...h||[]],c=`marker-${Date.now()}`,ge=W?W.getCenter():{lat:40.7128,lng:-74.006};if(B.push({id:c,address:"",latitude:typeof ge.lat=="function"?ge.lat():ge.lat,longitude:typeof ge.lng=="function"?ge.lng():ge.lng,title:""}),e({markers:B}),B.length===1&&W&&digiBlocksData.googleMapsMapId){let M=W.getCenter(),k=W.getZoom(),G={center:M,zoom:k,mapTypeId:W.getMapTypeId(),zoomControl:S,scrollwheel:C,fullscreenControl:w,streetViewControl:T,mapTypeControl:U,mapId:digiBlocksData.googleMapsMapId};ue.length>0&&(ue.forEach(re=>re.map=null),A([]));let d=new google.maps.Map(J.current,G);ce(d),setTimeout(()=>{D(B,d)},100)}else W&&D(B,W)},to=(B,c,ge)=>{let M=[...h];M[B]={...M[B],[c]:ge},e({markers:M}),c==="address"&&ge&&me.current&&W&&je(ge,W)},De=B=>{let c=[...h];if(c.splice(B,1),e({markers:c}),c.length===0&&W&&(W.mapId=null,$&&$!=="default"))if($==="custom"&&P)try{let ge=JSON.parse(P);W.setOptions({styles:ge})}catch(ge){console.error("Invalid map style JSON:",ge)}else Be[$]&&W.setOptions({styles:Be[$]})},r=(B,c,ge)=>{if(B)if(c&&c!=="default")if(c==="custom"&&ge)try{let M=JSON.parse(ge);B.setOptions({styles:M})}catch(M){console.error("Invalid map style JSON:",M)}else Be[c]&&B.setOptions({styles:Be[c]});else B.setOptions({styles:[]})},D=async(B,c)=>{if(!(!B||B.length===0)){ue.length>0&&(ue.forEach(ge=>ge.map=null),A([]));try{google.maps.marker||await google.maps.importLibrary("marker");let ge=B.map(M=>{if(!M.latitude||!M.longitude)return null;let k={lat:M.latitude,lng:M.longitude},G=M.title||"",d=M.description||"",re=new google.maps.marker.AdvancedMarkerElement({map:c,position:k,title:G});if(d){let x=document.createElement("div");if(x.className="digiblocks-map-info-content",x.style.cssText="min-width: 200px; max-width: 300px; padding: 10px; background-color: white; border-radius: 8px; box-shadow: 0 2px 7px 1px rgba(0,0,0,0.3);",G){let j=document.createElement("div");j.className="digiblocks-map-info-title",j.style.cssText="font-weight: bold; margin-bottom: 5px; font-size: 16px;",j.textContent=G,x.appendChild(j)}let m=document.createElement("div");m.className="digiblocks-map-info-description",m.style.cssText="font-size: 14px;",m.innerHTML=d,x.appendChild(m);let he=new google.maps.InfoWindow({content:x});google.maps.event.addListener(re,"click",function(){he.open({anchor:re,map:c})}),B.length===1&&he.open({anchor:re,map:c})}return re}).filter(Boolean);A(ge)}catch(ge){console.error("Error creating advanced markers:",ge)}}},xe=vs(null);Ii(()=>{if(z&&z!=="none"){let B=setTimeout(()=>{kd(o,z,_l,xe)},100);return()=>clearTimeout(B)}},[z]);let Pe=()=>{kd(o,z,_l,xe)},Se=[{label:eo("None","digiblocks"),value:"none"},{label:eo("Solid","digiblocks"),value:"solid"},{label:eo("Dotted","digiblocks"),value:"dotted"},{label:eo("Dashed","digiblocks"),value:"dashed"},{label:eo("Double","digiblocks"),value:"double"},{label:eo("Groove","digiblocks"),value:"groove"},{label:eo("Ridge","digiblocks"),value:"ridge"},{label:eo("Inset","digiblocks"),value:"inset"},{label:eo("Outset","digiblocks"),value:"outset"}],Ue=[{label:eo("Roadmap","digiblocks"),value:"roadmap"},{label:eo("Satellite","digiblocks"),value:"satellite"},{label:eo("Hybrid","digiblocks"),value:"hybrid"},{label:eo("Terrain","digiblocks"),value:"terrain"}],ee=[{label:eo("Default","digiblocks"),value:"default"},{label:eo("Silver","digiblocks"),value:"silver"},{label:eo("Retro","digiblocks"),value:"retro"},{label:eo("Dark","digiblocks"),value:"dark"},{label:eo("Night","digiblocks"),value:"night"},{label:eo("Aubergine","digiblocks"),value:"aubergine"},{label:eo("Custom","digiblocks"),value:"custom"}],Be={default:[],silver:[{elementType:"geometry",stylers:[{color:"#f5f5f5"}]},{elementType:"labels.icon",stylers:[{visibility:"off"}]},{elementType:"labels.text.fill",stylers:[{color:"#616161"}]},{elementType:"labels.text.stroke",stylers:[{color:"#f5f5f5"}]},{featureType:"administrative.land_parcel",elementType:"labels.text.fill",stylers:[{color:"#bdbdbd"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#eeeeee"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#e5e5e5"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#ffffff"}]},{featureType:"road.arterial",elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#dadada"}]},{featureType:"road.highway",elementType:"labels.text.fill",stylers:[{color:"#616161"}]},{featureType:"road.local",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]},{featureType:"transit.line",elementType:"geometry",stylers:[{color:"#e5e5e5"}]},{featureType:"transit.station",elementType:"geometry",stylers:[{color:"#eeeeee"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#c9c9c9"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]}],retro:[{elementType:"geometry",stylers:[{color:"#ebe3cd"}]},{elementType:"labels.text.fill",stylers:[{color:"#523735"}]},{elementType:"labels.text.stroke",stylers:[{color:"#f5f1e6"}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#c9b2a6"}]},{featureType:"administrative.land_parcel",elementType:"geometry.stroke",stylers:[{color:"#dcd2be"}]},{featureType:"administrative.land_parcel",elementType:"labels.text.fill",stylers:[{color:"#ae9e90"}]},{featureType:"landscape.natural",elementType:"geometry",stylers:[{color:"#dfd2ae"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#dfd2ae"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#93817c"}]},{featureType:"poi.park",elementType:"geometry.fill",stylers:[{color:"#a5b076"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#447530"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#f5f1e6"}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#fdfcf8"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#f8c967"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#e9bc62"}]},{featureType:"road.highway.controlled_access",elementType:"geometry",stylers:[{color:"#e98d58"}]},{featureType:"road.highway.controlled_access",elementType:"geometry.stroke",stylers:[{color:"#db8555"}]},{featureType:"road.local",elementType:"labels.text.fill",stylers:[{color:"#806b63"}]},{featureType:"transit.line",elementType:"geometry",stylers:[{color:"#dfd2ae"}]},{featureType:"transit.line",elementType:"labels.text.fill",stylers:[{color:"#8f7d77"}]},{featureType:"transit.line",elementType:"labels.text.stroke",stylers:[{color:"#ebe3cd"}]},{featureType:"transit.station",elementType:"geometry",stylers:[{color:"#dfd2ae"}]},{featureType:"water",elementType:"geometry.fill",stylers:[{color:"#b9d3c2"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#92998d"}]}],dark:[{elementType:"geometry",stylers:[{color:"#212121"}]},{elementType:"labels.icon",stylers:[{visibility:"off"}]},{elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{elementType:"labels.text.stroke",stylers:[{color:"#212121"}]},{featureType:"administrative",elementType:"geometry",stylers:[{color:"#757575"}]},{featureType:"administrative.country",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]},{featureType:"administrative.land_parcel",stylers:[{visibility:"off"}]},{featureType:"administrative.locality",elementType:"labels.text.fill",stylers:[{color:"#bdbdbd"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#181818"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#616161"}]},{featureType:"poi.park",elementType:"labels.text.stroke",stylers:[{color:"#1b1b1b"}]},{featureType:"road",elementType:"geometry.fill",stylers:[{color:"#2c2c2c"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#8a8a8a"}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#373737"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#3c3c3c"}]},{featureType:"road.highway.controlled_access",elementType:"geometry",stylers:[{color:"#4e4e4e"}]},{featureType:"road.local",elementType:"labels.text.fill",stylers:[{color:"#616161"}]},{featureType:"transit",elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#000000"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#3d3d3d"}]}],night:[{elementType:"geometry",stylers:[{color:"#242f3e"}]},{elementType:"labels.text.fill",stylers:[{color:"#746855"}]},{elementType:"labels.text.stroke",stylers:[{color:"#242f3e"}]},{featureType:"administrative.locality",elementType:"labels.text.fill",stylers:[{color:"#d59563"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#d59563"}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#263c3f"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#6b9a76"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#38414e"}]},{featureType:"road",elementType:"geometry.stroke",stylers:[{color:"#212a37"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#9ca5b3"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#746855"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#1f2835"}]},{featureType:"road.highway",elementType:"labels.text.fill",stylers:[{color:"#f3d19c"}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#2f3948"}]},{featureType:"transit.station",elementType:"labels.text.fill",stylers:[{color:"#d59563"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#17263c"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#515c6d"}]},{featureType:"water",elementType:"labels.text.stroke",stylers:[{color:"#17263c"}]}],aubergine:[{elementType:"geometry",stylers:[{color:"#1d2c4d"}]},{elementType:"labels.text.fill",stylers:[{color:"#8ec3b9"}]},{elementType:"labels.text.stroke",stylers:[{color:"#1a3646"}]},{featureType:"administrative.country",elementType:"geometry.stroke",stylers:[{color:"#4b6878"}]},{featureType:"administrative.land_parcel",elementType:"labels.text.fill",stylers:[{color:"#64779e"}]},{featureType:"administrative.province",elementType:"geometry.stroke",stylers:[{color:"#4b6878"}]},{featureType:"landscape.man_made",elementType:"geometry.stroke",stylers:[{color:"#334e87"}]},{featureType:"landscape.natural",elementType:"geometry",stylers:[{color:"#023e58"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#283d6a"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#6f9ba5"}]},{featureType:"poi",elementType:"labels.text.stroke",stylers:[{color:"#1d2c4d"}]},{featureType:"poi.park",elementType:"geometry.fill",stylers:[{color:"#023e58"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#3C7680"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#304a7d"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#98a5be"}]},{featureType:"road",elementType:"labels.text.stroke",stylers:[{color:"#1d2c4d"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#2c6675"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#255763"}]},{featureType:"road.highway",elementType:"labels.text.fill",stylers:[{color:"#b0d5ce"}]},{featureType:"road.highway",elementType:"labels.text.stroke",stylers:[{color:"#023e58"}]},{featureType:"transit",elementType:"labels.text.fill",stylers:[{color:"#98a5be"}]},{featureType:"transit",elementType:"labels.text.stroke",stylers:[{color:"#1d2c4d"}]},{featureType:"transit.line",elementType:"geometry.fill",stylers:[{color:"#283d6a"}]},{featureType:"transit.station",elementType:"geometry",stylers:[{color:"#3a4762"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#0e1626"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#4e6d70"}]}]},Xe=[{label:eo("None","digiblocks"),value:"none"},...Object.keys(_l).map(B=>({label:B.replace(/-/g," ").replace(/\b\w/g,c=>c.toUpperCase()),value:B}))],q=[{name:"options",title:eo("Options","digiblocks"),icon:xs.optionsIcon},{name:"style",title:eo("Style","digiblocks"),icon:xs.styleIcon},{name:"advanced",title:eo("Advanced","digiblocks"),icon:xs.advancedIcon}],ye=()=>{let B=window.digi.responsiveState.activeDevice,c=l&&l[B]?l[B]:B==="desktop"?400:B==="tablet"?350:300,ge="";L&&L!=="none"&&(ge=`
                border-style: ${L};
                border-color: ${be||"#e0e0e0"};
				${fd(V,"border-width",B)}
				${fd(Q,"border-radius",B)}
            `);let M="";N&&N.enable&&(M=`box-shadow: ${N.position==="inset"?"inset ":""}${N.horizontal}px ${N.vertical}px ${N.blur}px ${N.spread}px ${N.color};`);let k="";u&&u.enable&&(k=`box-shadow: ${u.position==="inset"?"inset ":""}${u.horizontal}px ${u.vertical}px ${u.blur}px ${u.spread}px ${u.color};`);let G="";return z&&z!=="none"&&_l[z]&&(G=_l[z].keyframes),`
            /* Google Map Block - ${o} */
            .${o} {
                height: ${c}px;
                width: 100%;
                overflow: hidden;
                ${ge}
                ${M}
				transition: all .3s ease;
            }

            .${o}:hover {
                ${k}
            }
            
            /* Animation keyframes */
            ${G}
            
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
			${a.desktop?`
				@media (min-width: 992px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${a.tablet?`
				@media (min-width: 768px) and (max-width: 991px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${a.mobile?`
				@media (max-width: 767px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}
        `},qe=()=>{let B=Array.isArray(h)?h.length:0,c=!!digiBlocksData.googleMapsMapId;return B>0&&!c?wp.element.createElement("div",{className:"components-notice is-warning",style:{margin:"0 0 16px 0"}},wp.element.createElement("div",{className:"components-notice__content"},wp.element.createElement("p",null,eo("A Map ID is required to use markers with the Google Maps block.","digiblocks")),wp.element.createElement("p",null,eo("Please configure a Map ID in the DigiBlocks settings before adding markers.","digiblocks")),wp.element.createElement(Ri,{isPrimary:!0,href:`${window.ajaxurl?window.ajaxurl.replace("admin-ajax.php",""):"/wp-admin/"}admin.php?page=digiblocks-settings`,target:"_blank",style:{marginTop:"10px"}},eo("Go to Settings","digiblocks")))):wp.element.createElement(wp.element.Fragment,null,Array.isArray(h)&&h.length>0?wp.element.createElement("div",null,h.map((ge,M)=>wp.element.createElement("div",{key:ge.id||`marker-${M}`,className:"digiblocks-google-map-marker",style:{marginBottom:"16px",padding:"16px",backgroundColor:"#f0f0f0",borderRadius:"4px"}},wp.element.createElement("h3",{style:{margin:"0 0 10px 0"}},eo("Marker","digiblocks")," #",M+1),wp.element.createElement(ks,{label:eo("Title","digiblocks"),value:ge.title||"",onChange:k=>to(M,"title",k),placeholder:eo("Enter marker title","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(md,{label:eo("Description","digiblocks"),value:ge.description||"",onChange:k=>to(M,"description",k),placeholder:eo("Enter marker description (will appear above marker)","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(ks,{label:eo("Address","digiblocks"),value:ge.address||"",onChange:k=>{let G=[...h];G[M]={...G[M],address:k},e({markers:G})},onBlur:()=>{h[M]?.address&&me.current&&W&&je(h[M].address,W,M)},placeholder:eo("Enter marker address","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement("div",{style:{marginTop:"10px",display:"flex",justifyContent:"flex-end"}},wp.element.createElement(Ri,{isDestructive:!0,onClick:()=>De(M)},eo("Remove Marker","digiblocks"))))),wp.element.createElement(Ri,{isPrimary:!0,onClick:te,style:{marginTop:"10px",width:"100%",justifyContent:"center"}},eo("Add Marker","digiblocks"))):wp.element.createElement("div",null,wp.element.createElement("p",null,eo("No markers added yet. Add your first marker!","digiblocks")),wp.element.createElement(Ri,{isPrimary:!0,onClick:te,style:{width:"100%",justifyContent:"center"}},eo("Add Marker","digiblocks"))))},E=()=>{switch(oe){case"options":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Bt,{tab:"options",name:"map-settings",title:eo("Map Settings","digiblocks"),initialOpen:!0},wp.element.createElement(ks,{label:eo("Address","digiblocks"),value:s||"",onChange:B=>{e({address:B}),B&&me.current&&W&&je(B,W)},placeholder:eo("Enter location address","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),Le&&wp.element.createElement("div",{className:"components-notice is-error",style:{margin:"0 0 16px 0"}},wp.element.createElement("div",{className:"components-notice__content"},Le)),wp.element.createElement(Pa,{label:eo("Map Type","digiblocks"),value:y,options:Ue,onChange:B=>e({mapType:B}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),(!h||h.length===0)&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Pa,{label:eo("Map Style","digiblocks"),value:$,options:ee,onChange:B=>e({mapStyle:B}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),$==="custom"&&wp.element.createElement(md,{label:eo("Custom Map Style JSON","digiblocks"),help:eo("Paste a valid Google Maps style JSON. You can create styles with the Google Maps Styling Wizard.","digiblocks"),value:P||"",onChange:B=>e({customMapStyle:B}),rows:6,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),h&&h.length>0&&wp.element.createElement("div",{className:"components-notice is-info",style:{margin:"0 0 16px 0"}},wp.element.createElement("div",{className:"components-notice__content"},eo("Map Style options are not available when markers are present, as markers require a Map ID which overrides custom styling.","digiblocks"))),wp.element.createElement(hd,{label:eo("Zoom Level","digiblocks"),value:_,onChange:B=>e({zoom:B}),min:1,max:20,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(Bt,{tab:"options",name:"marker-settings",title:eo("Markers","digiblocks"),initialOpen:!1},qe()),wp.element.createElement(Bt,{tab:"options",name:"map-controls",title:eo("Map Controls","digiblocks"),initialOpen:!1},wp.element.createElement(am,{id:`${o}-map-controls`,__nextHasNoMarginBottom:!0},wp.element.createElement(Ft,{label:eo("Enable Zoom Control","digiblocks"),checked:S!==!1,onChange:B=>e({enableZoom:B}),__nextHasNoMarginBottom:!0}),wp.element.createElement(Ft,{label:eo("Enable Mousewheel Zoom","digiblocks"),checked:C!==!1,onChange:B=>e({enableScroll:B}),__nextHasNoMarginBottom:!0}),wp.element.createElement(Ft,{label:eo("Enable Fullscreen Control","digiblocks"),checked:w!==!1,onChange:B=>e({enableFullscreenControl:B}),__nextHasNoMarginBottom:!0}),wp.element.createElement(Ft,{label:eo("Enable Street View Control","digiblocks"),checked:T!==!1,onChange:B=>e({enableStreetViewControl:B}),__nextHasNoMarginBottom:!0}),wp.element.createElement(Ft,{label:eo("Enable Map Type Control","digiblocks"),checked:U!==!1,onChange:B=>e({enableMapTypeControl:B}),__nextHasNoMarginBottom:!0}))));case"style":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Bt,{tab:"style",name:"map-dimensions",title:eo("Map Size","digiblocks"),initialOpen:!0},wp.element.createElement(ys,{label:eo("Map Height","digiblocks")},wp.element.createElement(hd,{value:l&&l[v]?l[v]:v==="desktop"?400:v==="tablet"?350:300,onChange:B=>{e({mapHeight:{...l,[v]:B}})},min:150,max:800,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}))),wp.element.createElement(Bt,{tab:"style",name:"map-border",title:eo("Border","digiblocks"),initialOpen:!1},wp.element.createElement(Pa,{label:eo("Border Style","digiblocks"),value:L||"none",options:Se,onChange:B=>{B!=="none"&&(L==="none"||!L)&&((!V||Object.keys(V).length===0)&&e({borderWidth:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:1,right:1,bottom:1,left:1,unit:"px"},mobile:{top:1,right:1,bottom:1,left:1,unit:"px"}}}),(!Q||Object.keys(Q).length===0)&&e({borderRadius:{desktop:{top:0,right:0,bottom:0,left:0,unit:"px"},tablet:{top:0,right:0,bottom:0,left:0,unit:"px"},mobile:{top:0,right:0,bottom:0,left:0,unit:"px"}}})),e({borderStyle:B})},__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),L&&L!=="none"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(tm,{title:eo("Border Color","digiblocks"),enableAlpha:!0,colorSettings:[{value:be,onChange:B=>e({borderColor:B}),label:eo("Border Color","digiblocks")}]}),wp.element.createElement(ys,{label:eo("Border Width","digiblocks")},wp.element.createElement(vd,{values:V&&V[v]?V[v]:{top:1,right:1,bottom:1,left:1,unit:"px"},onChange:B=>e({borderWidth:{...V,[v]:B}})})),wp.element.createElement(ys,{label:eo("Border Radius","digiblocks")},wp.element.createElement(vd,{values:Q&&Q[v]?Q[v]:{top:0,right:0,bottom:0,left:0,unit:"px"},onChange:B=>e({borderRadius:{...Q,[v]:B}}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]})))),wp.element.createElement(Bt,{tab:"style",name:"box-shadow",title:eo("Box Shadow","digiblocks"),initialOpen:!1},wp.element.createElement(rm,{normalValue:N,hoverValue:u,onNormalChange:B=>e({boxShadow:B}),onHoverChange:B=>e({boxShadowHover:B})})));case"advanced":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Bt,{tab:"advanced",name:"animation",title:eo("Animation","digiblocks"),initialOpen:!0},wp.element.createElement(Pa,{label:eo("Animation Effect","digiblocks"),value:z,options:Xe,onChange:B=>e({animation:B}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),z&&z!=="none"&&wp.element.createElement("div",{style:{marginTop:"10px"}},wp.element.createElement(Ri,{variant:"secondary",isSecondary:!0,onClick:Pe,style:{width:"100%"}},eo("Preview Animation","digiblocks")))),wp.element.createElement(Bt,{tab:"advanced",name:"visibility",title:eo("Visibility","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control__help",style:{padding:"12px",backgroundColor:"#f0f6fc",border:"1px solid #c3ddfd",borderRadius:"4px",marginBottom:"16px"}},wp.element.createElement("strong",null,eo("Editor Note:","digiblocks")),wp.element.createElement("br",null),eo("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.","digiblocks")),wp.element.createElement(Ft,{label:eo("Hide on Desktop","digiblocks"),checked:a.desktop,onChange:B=>e({visibility:{...a,desktop:B}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(Ft,{label:eo("Hide on Tablet","digiblocks"),checked:a.tablet,onChange:B=>e({visibility:{...a,tablet:B}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(Ft,{label:eo("Hide on Mobile","digiblocks"),checked:a.mobile,onChange:B=>e({visibility:{...a,mobile:B}}),__nextHasNoMarginBottom:!0})),wp.element.createElement(Bt,{tab:"advanced",name:"additional",title:eo("Additional","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control html-anchor-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"html-anchor"},eo("HTML anchor","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"html-anchor",value:O||"",onChange:B=>e({anchor:B.target.value}),"aria-describedby":"html-anchor-help",autoCapitalize:"none",autoComplete:"off"})),wp.element.createElement("p",{id:"html-anchor-help",className:"components-base-control__help"},eo(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`,"digiblocks")," ",wp.element.createElement("a",{className:"components-external-link",href:"https://wordpress.org/documentation/article/page-jumps/",target:"_blank",rel:"external noreferrer noopener"},wp.element.createElement("span",{className:"components-external-link__contents"},eo("Learn more about anchors","digiblocks")),wp.element.createElement("span",{className:"components-external-link__icon","aria-label":"(opens in a new tab)"},"\u2197")))),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"additional-css-classes"},eo("Additional CSS class(es)","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"additional-css-classes",value:le||"",onChange:B=>e({customClasses:B.target.value}),"aria-describedby":"additional-css-classes-help",autoComplete:"off"})),wp.element.createElement("p",{id:"additional-css-classes-help",className:"components-base-control__help"},eo("Separate multiple classes with spaces.","digiblocks")))));default:return null}},se=em({className:`digiblocks-google-map ${o} ${z!=="none"?`animate-${z}`:""} ${le||""}`,id:O||null});return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(om,null,wp.element.createElement(sm,{tabs:q,activeTab:oe,onSelect:fe},E())),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:ye()}}),wp.element.createElement("div",{...se},digiBlocksData.googleMapsApiKey?ne?wp.element.createElement("div",{className:"digiblocks-google-map-loading",style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%"}},wp.element.createElement(lm,null),wp.element.createElement("span",{style:{marginLeft:"10px"}},eo("Loading map...","digiblocks"))):wp.element.createElement("div",{ref:J,className:"digiblocks-google-map-container",style:{width:"100%",height:"100%"}}):wp.element.createElement(im,{icon:"location-alt",label:eo("Google Map","digiblocks"),instructions:eo("You need to add your Google Maps API key in the DigiBlocks settings to use this block.","digiblocks")},wp.element.createElement(Ri,{isPrimary:!0,href:`${window.ajaxurl?window.ajaxurl.replace("admin-ajax.php",""):"/wp-admin/"}admin.php?page=digiblocks-settings`,target:"_blank"},eo("Go to Settings","digiblocks")))))},xd=cm;var{useBlockProps:dm}=window.wp.blockEditor,gm=({attributes:ie})=>{let{id:e,anchor:K,customClasses:o,mapHeight:O,zoom:a,mapType:le,mapStyle:l,customMapStyle:_,mapId:y,markers:$,address:P,animation:h,enableZoom:s,enableScroll:z,enableFullscreenControl:S,enableStreetViewControl:C,enableMapTypeControl:w}=ie,T=["digiblocks-google-map",e,h!=="none"?`animate-${h}`:"",o||""].filter(Boolean).join(" "),U=dm.save({className:T,id:K||null,"data-map-zoom":a||10,"data-map-type":le||"roadmap","data-map-style":l||"default","data-custom-map-style":_||"","data-map-id":y||"","data-enable-zoom":s!==!1?"true":"false","data-enable-scroll":z!==!1?"true":"false","data-enable-fullscreen":S!==!1?"true":"false","data-enable-streetview":C!==!1?"true":"false","data-enable-maptype":w!==!1?"true":"false"});return wp.element.createElement("div",{...U},wp.element.createElement("div",{className:"digiblocks-google-map-container"}),$&&$.length>0&&wp.element.createElement("div",{className:"digiblocks-google-map-markers",style:{display:"none"}},$.map(L=>wp.element.createElement("div",{key:L.id,className:"digiblocks-google-map-marker","data-lat":L.latitude,"data-lng":L.longitude,"data-title":L.title||"","data-description":L.description||"","data-address":L.address||""}))),P&&wp.element.createElement("div",{className:"digiblocks-google-map-address",style:{display:"none"},"data-address":P}))},yd=gm;var{__:Ra}=window.wp.i18n,{registerBlockType:pm}=window.wp.blocks,{getBlockActiveStatus:bm}=window.wp.digiBlocks;pm("digiblocks/google-map",{apiVersion:2,title:digiBlocksData.blocks["google-map"].title,category:"digiblocks",icon:{src:()=>{let{viewbox:ie,path:e}=digiBlocksData.blocks["google-map"].icon;return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${ie}`,className:"digiblocks-editor-icons"},wp.element.createElement("path",{d:e}))}},description:digiBlocksData.blocks["google-map"].description,keywords:[Ra("map","digiblocks"),Ra("google","digiblocks"),Ra("location","digiblocks"),Ra("marker","digiblocks")],supports:{inserter:!!bm("google-map"),html:!1,className:!1,customClassName:!1,anchor:!1},attributes:{id:{type:"string",default:""},anchor:{type:"string",default:""},visibility:{type:"object",default:{desktop:!1,tablet:!1,mobile:!1}},customClasses:{type:"string",default:""},address:{type:"string",default:""},mapHeight:{type:"object",default:{desktop:400,tablet:350,mobile:300}},zoom:{type:"number",default:10},mapType:{type:"string",default:"roadmap"},mapStyle:{type:"string",default:"default"},customMapStyle:{type:"string",default:""},mapId:{type:"string",default:""},markers:{type:"array",default:[]},animation:{type:"string",default:"none"},enableZoom:{type:"boolean",default:!0},enableScroll:{type:"boolean",default:!0},enableFullscreenControl:{type:"boolean",default:!0},enableStreetViewControl:{type:"boolean",default:!0},enableMapTypeControl:{type:"boolean",default:!0},borderStyle:{type:"string",default:"none"},borderWidth:{type:"object",default:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderRadius:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderColor:{type:"string",default:"#e0e0e0"},boxShadow:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},boxShadowHover:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}}},example:{attributes:{address:"New York, NY",mapHeight:{desktop:300},zoom:12,mapType:"roadmap"}},edit:xd,save:yd});var{__:Ze}=window.wp.i18n,{useBlockProps:um,RichText:mm,InspectorControls:hm,PanelColorSettings:Bl,LinkControl:fm,BlockControls:F1,AlignmentToolbar:E1}=window.wp.blockEditor,{SelectControl:Cd,RangeControl:Li,ToggleControl:Tl,Button:km,__experimentalToggleGroupControl:wd,__experimentalToggleGroupControlOption:Nl,TabPanel:vm,BaseControl:xm}=window.wp.components,{useState:Cs,useEffect:Sd,useRef:ym}=window.wp.element,{useBlockId:Cm,getDimensionCSS:Ko,animations:Hl,animationPreview:$d}=digi.utils,{tabIcons:ws}=digi.icons,{ResponsiveControl:Oi,ResponsiveButtonGroup:wm,DimensionControl:Ss,TypographyControl:Sm,CustomTabPanel:$m,TabPanelBody:bt}=digi.components,_m=({attributes:ie,setAttributes:e,clientId:K})=>{let{id:o,anchor:O,visibility:a,customClasses:le,content:l,headingTag:_,textColor:y,textHoverColor:$,backgroundColor:P,backgroundHoverColor:h,typography:s,align:z,padding:S,margin:C,animation:w,highlightText:T,highlightColor:U,highlightType:L,displaySeparator:V,separatorColor:Q,separatorSecondaryColor:be,separatorWidth:N,separatorHeight:u,separatorBorderRadius:v,separatorPosition:I,separatorStyle:ne,separatorSpacing:Me,linkEnabled:Le,linkUrl:X,linkOpenInNewTab:H,linkRel:Y,shadowEnabled:W,textShadow:ce}=ie;Cm(o,K,e);let[ue,A]=Cs(window.digi.responsiveState.activeDevice),[J,me]=Cs(!1);Sd(()=>window.digi.responsiveState.subscribe(ye=>{A(ye)}),[]);let[oe,fe]=Cs(()=>{if(window.digi.uiState){let q=window.digi.uiState.getActiveTab(K);if(q)return q}return"options"}),je=ym(null);Sd(()=>{if(w&&w!=="none"){let q=setTimeout(()=>{$d(o,w,Hl,je)},100);return()=>clearTimeout(q)}},[w]);let te=()=>{$d(o,w,Hl,je)},to=[{label:Ze("None","digiblocks"),value:"none"},...Object.keys(Hl).map(q=>({label:q.replace(/-/g," ").replace(/\b\w/g,ye=>ye.toUpperCase()),value:q}))],De=[{label:Ze("H1","digiblocks"),value:"h1"},{label:Ze("H2","digiblocks"),value:"h2"},{label:Ze("H3","digiblocks"),value:"h3"},{label:Ze("H4","digiblocks"),value:"h4"},{label:Ze("H5","digiblocks"),value:"h5"},{label:Ze("H6","digiblocks"),value:"h6"}],r=[{label:Ze("Background","digiblocks"),value:"background"},{label:Ze("Text Color","digiblocks"),value:"color"},{label:Ze("Underline","digiblocks"),value:"underline"}],D=[{name:"options",title:Ze("Options","digiblocks"),icon:ws.optionsIcon},{name:"style",title:Ze("Style","digiblocks"),icon:ws.styleIcon},{name:"advanced",title:Ze("Advanced","digiblocks"),icon:ws.advancedIcon}],xe=[{name:"normal",title:Ze("Normal","digiblocks"),className:"digiblocks-tab-1 normal"},{name:"hover",title:Ze("Hover","digiblocks"),className:"digiblocks-tab-2 hover"}],Pe=()=>{let q=window.digi.responsiveState.activeDevice,ye="";s&&(s.fontFamily&&(ye+=`font-family: ${s.fontFamily};`),s.fontSize&&s.fontSize[q]&&(ye+=`font-size: ${s.fontSize[q]}${s.fontSizeUnit||"px"};`),s.fontWeight&&(ye+=`font-weight: ${s.fontWeight};`),s.fontStyle&&(ye+=`font-style: ${s.fontStyle};`),s.textTransform&&(ye+=`text-transform: ${s.textTransform};`),s.textDecoration&&(ye+=`text-decoration: ${s.textDecoration};`),s.lineHeight&&s.lineHeight[q]&&(ye+=`line-height: ${s.lineHeight[q]}${s.lineHeightUnit||"em"};`),s.letterSpacing&&s.letterSpacing[q]&&(ye+=`letter-spacing: ${s.letterSpacing[q]}${s.letterSpacingUnit||"px"};`));let qe="";W&&ce&&(qe=`text-shadow: ${ce.horizontal}px ${ce.vertical}px ${ce.blur}px ${ce.color};`);let E=`${Ko(S,"padding",q)}`,se=`${Ko(C,"margin",q)}`,B="";w&&w!=="none"&&Hl[w]&&(B=Hl[w].keyframes);let c="";if(V&&Q){let k=N[q]||50,G=u[q]||3,d=Me[q]||10,re=I==="top"?"top: 0;":"bottom: 0;",x=z==="center"?"left: 50%; transform: translateX(-50%);":z==="right"?"right: 0;":"left: 0;";switch(ne){case"line-solid":c=`
                        .${o}::before {
                            content: '';
                            position: absolute;
                            ${re}
                            ${x}
                            width: ${k}px;
                            height: ${G}px;
                            background-color: ${Q};
							${Ko(v,"border-radius",q)}
                            ${I==="top"?`margin-top: ${d}px;`:`margin-bottom: ${d}px;`}
                        }
                    `;break;case"line-gradient":c=`
                        .${o}::before {
                            content: '';
                            position: absolute;
                            ${re}
                            ${x}
                            width: ${k}px;
                            height: ${G}px;
                            background: linear-gradient(to right, ${Q}, ${be||"#ffffff"}, ${Q});
							${Ko(v,"border-radius",q)}
                            ${I==="top"?`margin-top: ${d}px;`:`margin-bottom: ${d}px;`}
                        }
                    `;break;case"line-double":c=`
                        .${o}::before {
                            content: '';
                            position: absolute;
                            ${re}
                            ${x}
                            width: ${k}px;
                            height: ${G}px;
                            background-color: ${Q};
							${Ko(v,"border-radius",q)}
                            ${I==="top"?`margin-top: ${d}px;`:`margin-bottom: ${d}px;`}
                        }
                        
                        .${o}::after {
                            content: '';
                            position: absolute;
                            ${re}
                            ${x}
                            width: ${k}px;
                            height: ${G}px;
                            background-color: ${be||Q};
							${Ko(v,"border-radius",q)}
                            ${I==="top"?`margin-top: ${d+G+3}px;`:`margin-bottom: ${d+G+3}px;`}
                        }
                    `;break;case"line-dashed":c=`
                        .${o}::before {
                            content: '';
                            position: absolute;
                            ${re}
                            ${x}
                            width: ${k}px;
                            height: ${G}px;
                            background-image: repeating-linear-gradient(
                                to right, 
                                ${Q}, 
                                ${Q} 8px, 
                                transparent 8px, 
                                transparent 12px
                            );
							${Ko(v,"border-radius",q)}
                            ${I==="top"?`margin-top: ${d}px;`:`margin-bottom: ${d}px;`}
                        }
                    `;break;case"line-dotted":c=`
                        .${o}::before {
                            content: '';
                            position: absolute;
                            ${re}
                            ${x}
                            width: ${k}px;
                            height: ${G}px;
                            background-image: repeating-linear-gradient(
                                to right, 
                                ${Q}, 
                                ${Q} 3px, 
                                transparent 3px, 
                                transparent 6px
                            );
							${Ko(v,"border-radius",q)}
                            ${I==="top"?`margin-top: ${d}px;`:`margin-bottom: ${d}px;`}
                        }
                    `;break;case"wave":c=`
                        .${o}::before {
                            content: '';
                            position: absolute;
                            ${re}
                            ${x}
                            width: ${k}px;
                            height: ${G*4}px;
                            background-image: repeating-linear-gradient(
                                45deg, 
                                ${Q}, 
                                ${Q} 5px, 
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
                            ${I==="top"?`margin-top: ${d}px;`:`margin-bottom: ${d}px;`}
                        }
                    `;break;case"dots":c=`
                        .${o}::before {
                            content: '';
                            position: absolute;
                            ${re}
                            ${x}
                            width: ${k}px;
                            height: ${G*3}px;
                            background-image: radial-gradient(
                                circle, 
                                ${Q} 25%, 
                                transparent 25%
                            );
                            background-size: ${G*3}px ${G*3}px;
                            ${I==="top"?`margin-top: ${d}px;`:`margin-bottom: ${d}px;`}
                        }
                    `;break;case"glow":c=`
                        .${o}::before {
                            content: '';
                            position: absolute;
                            ${re}
                            ${x}
                            width: ${k}px;
                            height: ${G}px;
                            background-color: ${Q};
                            box-shadow: 0 0 ${G*3}px ${G}px ${Q};
							${Ko(v,"border-radius",q)}
                            ${I==="top"?`margin-top: ${d}px;`:`margin-bottom: ${d}px;`}
                        }
                    `;break;case"faded":c=`
                        .${o}::before {
                            content: '';
                            position: absolute;
                            ${re}
                            ${x}
                            width: ${k}px;
                            height: ${G}px;
                            background: linear-gradient(to right, transparent, ${Q}, transparent);
							${Ko(v,"border-radius",q)}
                            ${I==="top"?`margin-top: ${d}px;`:`margin-bottom: ${d}px;`}
                        }
                    `;break;default:c=`
                        .${o}::before {
                            content: '';
                            position: absolute;
                            ${re}
                            ${x}
                            width: ${k}px;
                            height: ${G}px;
                            background-color: ${Q};
							${Ko(v,"border-radius",q)}
                            ${I==="top"?`margin-top: ${d}px;`:`margin-bottom: ${d}px;`}
                        }
                    `}}let ge="";T&&T.trim()!==""&&(L==="background"?ge=`
                    .${o} .digiblocks-highlight {
                        background-color: ${U};
                        padding: 0 5px;
                        border-radius: 3px;
                    }
                `:L==="color"?ge=`
                    .${o} .digiblocks-highlight {
                        color: ${U};
                    }
                `:L==="underline"&&(ge=`
                    .${o} .digiblocks-highlight {
                        text-decoration: underline;
                        text-decoration-color: ${U};
                        text-decoration-thickness: 2px;
                        text-underline-offset: 2px;
                    }
                `));let M="";return Le&&(M=`
                .${o} {
                    cursor: pointer;
                    text-decoration: none;
                    transition: color 0.3s ease, background-color 0.3s ease;
                }
                
                .${o}:hover {
                    ${$?`color: ${$};`:""}
                    ${h?`background-color: ${h};`:""}
                }
            `),`
            /* Main heading styles */
            .${o} {
                display: flex;
                flex-direction: column;
                position: relative;
                text-align: ${z[q]};
                ${P?`background-color: ${P};`:""}
                ${E}
                ${se}
                transition: color 0.3s ease, background-color 0.3s ease;
            }

            .${o} .digiblocks-heading-text {
                ${ye}
                ${qe}
                color: ${y||"inherit"};
                margin: 0;
            }
            
            /* Hover effects */
            .${o}:hover {
                ${h?`background-color: ${h};`:""}
            }

            .${o}:hover .digiblocks-heading-text {
                ${$?`color: ${$};`:""}
            }
            
            /* Animation keyframes */
            ${B}
            
            /* Separator styles */
            ${c}
            
            /* Highlight styles */
            ${ge}
            
            /* Link styles */
            ${M}

			/* Visibility Controls */
			${a.desktop?`
				@media (min-width: 992px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${a.tablet?`
				@media (min-width: 768px) and (max-width: 991px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${a.mobile?`
				@media (max-width: 767px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}
        `},Se=()=>{if(!T||T.trim()==="")return l;let q=qe=>qe.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");return l.split(new RegExp(`(${q(T)})`,"g")).map((qe,E)=>qe===T?`<span class="digiblocks-highlight">${qe}</span>`:qe).join("")},Ue=({style:q,color:ye,secondaryColor:qe,isSelected:E,onClick:se})=>{let B={container:{display:"inline-block",width:"60px",height:"40px",margin:"5px",padding:"5px",border:`1px solid ${E?"#007cba":"#ddd"}`,backgroundColor:E?"rgba(0,124,186,0.1)":"white",borderRadius:"4px",cursor:"pointer",position:"relative"},preview:{position:"absolute",bottom:"5px",left:"5px",right:"5px",height:"5px",display:"flex",justifyContent:"center",alignItems:"center"}},c=null;switch(q){case"line-solid":c=wp.element.createElement("div",{style:{width:"100%",height:"3px",backgroundColor:ye,borderRadius:"1px"}});break;case"line-gradient":c=wp.element.createElement("div",{style:{width:"100%",height:"3px",background:`linear-gradient(to right, ${ye}, ${qe||"#ffffff"}, ${ye})`,borderRadius:"1px"}});break;case"line-double":c=wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{style:{width:"100%",height:"2px",backgroundColor:ye,borderRadius:"1px",marginBottom:"2px"}}),wp.element.createElement("div",{style:{width:"100%",height:"2px",backgroundColor:qe||ye,borderRadius:"1px"}}));break;case"line-dashed":c=wp.element.createElement("div",{style:{width:"100%",height:"3px",backgroundImage:`repeating-linear-gradient(to right, ${ye}, ${ye} 6px, transparent 6px, transparent 10px)`,borderRadius:"1px"}});break;case"line-dotted":c=wp.element.createElement("div",{style:{width:"100%",height:"3px",backgroundImage:`repeating-linear-gradient(to right, ${ye}, ${ye} 2px, transparent 2px, transparent 4px)`,borderRadius:"1px"}});break;case"wave":c=wp.element.createElement("div",{style:{width:"100%",height:"3px",backgroundImage:`repeating-linear-gradient(45deg, ${ye}, ${ye} 2px, transparent 2px, transparent 6px)`,borderRadius:"1px"}});break;case"dots":c=wp.element.createElement("div",{style:{width:"100%",height:"5px",display:"flex",justifyContent:"space-between"}},[...Array(5)].map((ge,M)=>wp.element.createElement("div",{key:M,style:{width:"4px",height:"4px",borderRadius:"50%",backgroundColor:ye}})));break;case"glow":c=wp.element.createElement("div",{style:{width:"50%",height:"3px",backgroundColor:ye,boxShadow:`0 0 5px 1px ${ye}`,borderRadius:"1px"}});break;case"faded":c=wp.element.createElement("div",{style:{width:"100%",height:"3px",background:`linear-gradient(to right, transparent, ${ye}, transparent)`,borderRadius:"1px"}});break;default:c=wp.element.createElement("div",{style:{width:"100%",height:"3px",backgroundColor:ye,borderRadius:"1px"}})}return wp.element.createElement("div",{style:B.container,onClick:se},wp.element.createElement("div",{style:{textAlign:"center",fontSize:"8px",marginBottom:"5px"}},q.replace("line-","").charAt(0).toUpperCase()+q.replace("line-","").slice(1)),wp.element.createElement("div",{style:B.preview},c))},ee=()=>{let q=[{label:Ze("Solid Line","digiblocks"),value:"line-solid"},{label:Ze("Gradient Line","digiblocks"),value:"line-gradient"},{label:Ze("Double Line","digiblocks"),value:"line-double"},{label:Ze("Dashed Line","digiblocks"),value:"line-dashed"},{label:Ze("Dotted Line","digiblocks"),value:"line-dotted"},{label:Ze("Wave","digiblocks"),value:"wave"},{label:Ze("Dot Pattern","digiblocks"),value:"dots"},{label:Ze("Glow","digiblocks"),value:"glow"},{label:Ze("Faded Edges","digiblocks"),value:"faded"}];return wp.element.createElement("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px",justifyContent:"center",margin:"0 -5px",maxHeight:"200px",overflow:"auto",padding:"4px 0",border:"1px solid #e0e0e0",borderRadius:"4px",backgroundColor:"#f9f9f9"}},q.map(qe=>wp.element.createElement(Ue,{key:qe.value,style:qe.value,color:Q,secondaryColor:be,isSelected:ne===qe.value,onClick:()=>e({separatorStyle:qe.value})})))},Be=()=>{switch(oe){case"options":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(bt,{tab:"options",name:"heading-settings",title:Ze("Heading Settings","digiblocks"),initialOpen:!0},wp.element.createElement(Cd,{label:Ze("Heading Tags","digiblocks"),value:_,options:De,onChange:q=>e({headingTag:q}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(wm,{label:Ze("Alignment","digiblocks"),value:z,onChange:q=>e({align:q}),options:[{label:Ze("Left","digiblocks"),value:"left"},{label:Ze("Center","digiblocks"),value:"center"},{label:Ze("Right","digiblocks"),value:"right"}]}),Le?wp.element.createElement(fm,{key:"link-control",value:{url:X,opensInNewTab:H,rel:Y},settings:[{id:"opensInNewTab",title:Ze("Open in new tab","digiblocks")},{id:"rel",title:Ze("Add noopener noreferrer","digiblocks")}],onChange:q=>{e({linkUrl:q.url,linkOpenInNewTab:q.opensInNewTab,linkRel:q.rel})},onRemove:()=>{e({linkEnabled:!1,linkUrl:"",linkOpenInNewTab:!1,linkRel:""})},suggestionsQuery:{type:"post",subtype:"any"},forceIsEditingLink:!X}):wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("button",{className:"components-button width-full is-primary",onClick:()=>e({linkEnabled:!0})},Ze("Add Link","digiblocks"))))),wp.element.createElement(bt,{tab:"options",name:"separator",title:Ze("Separator","digiblocks"),initialOpen:!1},wp.element.createElement(Tl,{label:Ze("Display Separator","digiblocks"),checked:V,onChange:q=>e({displaySeparator:q}),__nextHasNoMarginBottom:!0}),V&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(xm,{label:Ze("Separator Style","digiblocks"),className:"digiblocks-separator-style-selector",__nextHasNoMarginBottom:!0},ee()),wp.element.createElement(wd,{label:Ze("Position","digiblocks"),value:I,onChange:q=>e({separatorPosition:q}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(Nl,{value:"bottom",label:Ze("Bottom","digiblocks")}),wp.element.createElement(Nl,{value:"top",label:Ze("Top","digiblocks")})),wp.element.createElement(Bl,{title:Ze("Separator Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:Q,onChange:q=>e({separatorColor:q}),label:Ze("Primary Color","digiblocks")},...ne==="line-gradient"||ne==="line-double"?[{value:be,onChange:q=>e({separatorSecondaryColor:q}),label:Ze("Secondary Color","digiblocks")}]:[]]}),wp.element.createElement(Oi,{label:Ze("Width","digiblocks")},wp.element.createElement(Li,{value:N[ue],onChange:q=>e({separatorWidth:{...N,[ue]:q}}),min:10,max:300,step:1,__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0})),wp.element.createElement(Oi,{label:Ze("Height","digiblocks")},wp.element.createElement(Li,{value:u[ue],onChange:q=>e({separatorHeight:{...u,[ue]:q}}),min:1,max:20,step:1,__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0})),wp.element.createElement(Oi,{label:Ze("Spacing","digiblocks")},wp.element.createElement(Li,{value:Me[ue],onChange:q=>e({separatorSpacing:{...Me,[ue]:q}}),min:0,max:50,step:1,__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0})),["line-solid","line-gradient","line-double","line-dashed","line-dotted","glow","faded"].includes(ne)&&wp.element.createElement(Oi,{label:Ze("Border Radius","digiblocks")},wp.element.createElement(Ss,{values:v&&v[ue]?v[ue]:{top:0,right:0,bottom:0,left:0,unit:"px"},onChange:q=>e({separatorBorderRadius:{...v,[ue]:q}}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]})))),wp.element.createElement(bt,{tab:"options",name:"text-highlight",title:Ze("Text Highlight","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"highlight-text"},Ze("Text to Highlight","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"highlight-text",value:T||"",onChange:q=>e({highlightText:q.target.value}),placeholder:Ze("Enter text to highlight","digiblocks")})),wp.element.createElement("p",{className:"components-base-control__help"},Ze("The text you enter here will be highlighted in your heading.","digiblocks"))),T&&T.trim()!==""&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(wd,{label:Ze("Highlight Type","digiblocks"),value:L,onChange:q=>e({highlightType:q}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(Nl,{value:"background",label:Ze("Background","digiblocks")}),wp.element.createElement(Nl,{value:"color",label:Ze("Text","digiblocks")}),wp.element.createElement(Nl,{value:"underline",label:Ze("Underline","digiblocks")})),wp.element.createElement(Bl,{title:Ze("Highlight Color","digiblocks"),initialOpen:!0,colorSettings:[{value:U,onChange:q=>e({highlightColor:q}),label:Ze("Color","digiblocks")}]}))));case"style":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(bt,{tab:"style",name:"colors",title:Ze("Colors","digiblocks"),initialOpen:!0},wp.element.createElement(vm,{className:"digiblocks-control-tabs",activeClass:"active-tab",tabs:xe},q=>q.name==="normal"?wp.element.createElement(Bl,{title:Ze("Color Settings","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:y,onChange:ye=>e({textColor:ye}),label:Ze("Text Color","digiblocks")},{value:P,onChange:ye=>e({backgroundColor:ye}),label:Ze("Background Color","digiblocks")}]}):wp.element.createElement(Bl,{title:Ze("Hover Color Settings","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:$,onChange:ye=>e({textHoverColor:ye}),label:Ze("Text Hover Color","digiblocks")},{value:h,onChange:ye=>e({backgroundHoverColor:ye}),label:Ze("Background Hover Color","digiblocks")}]}))),wp.element.createElement(bt,{tab:"style",name:"typo",title:Ze("Typography","digiblocks"),initialOpen:!1},wp.element.createElement(Sm,{label:Ze("Typography Settings","digiblocks"),value:s,onChange:q=>e({typography:q}),defaults:{fontSize:{desktop:32,tablet:28,mobile:24},fontSizeUnit:"px",lineHeight:{desktop:1.2,tablet:1.2,mobile:1.2},lineHeightUnit:"em"}})),wp.element.createElement(bt,{tab:"style",name:"text-shadow",title:Ze("Text Shadow","digiblocks"),initialOpen:!1},wp.element.createElement(Tl,{label:Ze("Enable Text Shadow","digiblocks"),checked:W,onChange:q=>e({shadowEnabled:q}),__nextHasNoMarginBottom:!0}),W&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Bl,{title:Ze("Shadow Color","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:ce.color,onChange:q=>e({textShadow:{...ce,color:q}}),label:Ze("Color","digiblocks")}]}),wp.element.createElement(Li,{label:Ze("Horizontal Offset","digiblocks"),value:ce.horizontal,onChange:q=>e({textShadow:{...ce,horizontal:q}}),min:-20,max:20,step:1,__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0}),wp.element.createElement(Li,{label:Ze("Vertical Offset","digiblocks"),value:ce.vertical,onChange:q=>e({textShadow:{...ce,vertical:q}}),min:-20,max:20,step:1,__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0}),wp.element.createElement(Li,{label:Ze("Blur Radius","digiblocks"),value:ce.blur,onChange:q=>e({textShadow:{...ce,blur:q}}),min:0,max:20,step:1,__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0}))),wp.element.createElement(bt,{tab:"style",name:"spacing",title:Ze("Spacing","digiblocks"),initialOpen:!1},wp.element.createElement(Oi,{label:Ze("Padding","digiblocks")},wp.element.createElement(Ss,{values:S[ue],onChange:q=>e({padding:{...S,[ue]:q}})})),wp.element.createElement(Oi,{label:Ze("Margin","digiblocks")},wp.element.createElement(Ss,{values:C[ue],onChange:q=>e({margin:{...C,[ue]:q}})}))));case"advanced":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(bt,{tab:"advanced",name:"animation",title:Ze("Animation","digiblocks"),initialOpen:!0},wp.element.createElement(Cd,{label:Ze("Animation Effect","digiblocks"),value:w,options:to,onChange:q=>e({animation:q}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),w&&w!=="none"&&wp.element.createElement("div",{style:{marginTop:"10px"}},wp.element.createElement(km,{variant:"secondary",isSecondary:!0,onClick:te,style:{width:"100%"}},Ze("Preview Animation","digiblocks")))),wp.element.createElement(bt,{tab:"advanced",name:"visibility",title:Ze("Visibility","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control__help",style:{padding:"12px",backgroundColor:"#f0f6fc",border:"1px solid #c3ddfd",borderRadius:"4px",marginBottom:"16px"}},wp.element.createElement("strong",null,Ze("Editor Note:","digiblocks")),wp.element.createElement("br",null),Ze("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.","digiblocks")),wp.element.createElement(Tl,{label:Ze("Hide on Desktop","digiblocks"),checked:a.desktop,onChange:q=>e({visibility:{...a,desktop:q}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(Tl,{label:Ze("Hide on Tablet","digiblocks"),checked:a.tablet,onChange:q=>e({visibility:{...a,tablet:q}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(Tl,{label:Ze("Hide on Mobile","digiblocks"),checked:a.mobile,onChange:q=>e({visibility:{...a,mobile:q}}),__nextHasNoMarginBottom:!0})),wp.element.createElement(bt,{tab:"advanced",name:"additional",title:Ze("Additional","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control html-anchor-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"html-anchor"},Ze("HTML anchor","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"html-anchor",value:O||"",onChange:q=>e({anchor:q.target.value}),"aria-describedby":"html-anchor-help",autoCapitalize:"none",autoComplete:"off"})),wp.element.createElement("p",{id:"html-anchor-help",className:"components-base-control__help"},Ze(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`,"digiblocks")," ",wp.element.createElement("a",{className:"components-external-link",href:"https://wordpress.org/documentation/article/page-jumps/",target:"_blank",rel:"external noreferrer noopener"},wp.element.createElement("span",{className:"components-external-link__contents"},Ze("Learn more about anchors","digiblocks")),wp.element.createElement("span",{className:"components-external-link__icon","aria-label":"(opens in a new tab)"},"\u2197")))),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"additional-css-classes"},Ze("Additional CSS class(es)","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"additional-css-classes",value:le||"",onChange:q=>e({customClasses:q.target.value}),"aria-describedby":"additional-css-classes-help",autoComplete:"off"})),wp.element.createElement("p",{id:"additional-css-classes-help",className:"components-base-control__help"},Ze("Separate multiple classes with spaces.","digiblocks")))));default:return null}},Xe=um({className:`digiblocks-heading ${o} ${le||""}`,id:O||null});return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(hm,null,wp.element.createElement($m,{tabs:D,activeTab:oe,onSelect:fe},Be())),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:Pe()}}),wp.element.createElement("div",{...Xe},wp.element.createElement(mm,{tagName:_,className:"digiblocks-heading-text",value:l,onChange:q=>e({content:q}),placeholder:Ze("Add Your Heading","digiblocks"),allowedFormats:["core/bold","core/italic"]})))},_d=_m;var{useBlockProps:q1,RichText:Bm}=window.wp.blockEditor,Tm=({attributes:ie})=>{let{id:e,anchor:K,customClasses:o,content:O,headingTag:a,align:le,animation:l,highlightText:_,highlightType:y,displaySeparator:$,separatorStyle:P,linkEnabled:h,linkUrl:s,linkOpenInNewTab:z,linkRel:S}=ie,w={className:["digiblocks-heading",e,l!=="none"?`animate-${l}`:"",$?`has-separator separator-${P}`:"",o||""].filter(Boolean).join(" "),id:K||null},T=()=>{if(!_||_.trim()==="")return O;let V=be=>be.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");return O.split(new RegExp(`(${V(_)})`,"g")).map((be,N)=>be===_?`<span class="digiblocks-highlight">${be}</span>`:be).join("")},U=a,L=_&&_.trim()!==""?wp.element.createElement("span",{dangerouslySetInnerHTML:{__html:T()}}):wp.element.createElement(Bm.Content,{value:O});return h&&s?wp.element.createElement("a",{href:s,target:z?"_blank":"_self",rel:z?"noopener noreferrer":void 0,...w},wp.element.createElement(U,{className:"digiblocks-heading-text"},L)):wp.element.createElement("div",{...w},wp.element.createElement(U,{className:"digiblocks-heading-text"},L))},Bd=Tm;var{__:zl}=window.wp.i18n,{registerBlockType:Nm}=window.wp.blocks,{getBlockActiveStatus:Hm}=window.wp.digiBlocks;Nm("digiblocks/heading",{apiVersion:2,title:digiBlocksData.blocks.heading.title,category:"digiblocks",icon:{src:()=>{let{viewbox:ie,path:e}=digiBlocksData.blocks.heading.icon;return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${ie}`,className:"digiblocks-editor-icons"},wp.element.createElement("path",{d:e}))}},description:digiBlocksData.blocks.heading.description,keywords:[zl("heading","digiblocks"),zl("title","digiblocks"),zl("header","digiblocks")],supports:{inserter:!!Hm("heading"),html:!1,className:!1,customClassName:!1,anchor:!1},attributes:{id:{type:"string",default:""},anchor:{type:"string",default:""},visibility:{type:"object",default:{desktop:!1,tablet:!1,mobile:!1}},customClasses:{type:"string",default:""},content:{type:"string",default:zl("Add Your Heading","digiblocks")},headingTag:{type:"string",default:"h2"},textColor:{type:"string",default:"#333333"},textHoverColor:{type:"string",default:""},backgroundColor:{type:"string",default:""},backgroundHoverColor:{type:"string",default:""},typography:{type:"object",default:{fontFamily:"",fontSize:{desktop:32,tablet:28,mobile:24},fontSizeUnit:"px",fontWeight:"600",fontStyle:"normal",textTransform:"none",textDecoration:"none",lineHeight:{desktop:1.2,tablet:1.2,mobile:1.2},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}},align:{type:"object",default:{desktop:"left",tablet:"left",mobile:"left"}},padding:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},margin:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},animation:{type:"string",default:"none"},highlightText:{type:"string",default:""},highlightColor:{type:"string",default:"#ffde59"},highlightType:{type:"string",default:"background"},displaySeparator:{type:"boolean",default:!1},separatorColor:{type:"string",default:"#1e73be"},separatorSecondaryColor:{type:"string",default:"#e0e0e0"},separatorWidth:{type:"object",default:{desktop:50,tablet:40,mobile:30}},separatorHeight:{type:"object",default:{desktop:3,tablet:2,mobile:2}},separatorPosition:{type:"string",default:"bottom"},separatorStyle:{type:"string",default:"line-solid"},separatorSpacing:{type:"object",default:{desktop:10,tablet:8,mobile:6}},separatorBorderRadius:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},linkEnabled:{type:"boolean",default:!1},linkUrl:{type:"string",default:""},linkOpenInNewTab:{type:"boolean",default:!1},linkRel:{type:"string",default:""},shadowEnabled:{type:"boolean",default:!1},textShadow:{type:"object",default:{horizontal:2,vertical:2,blur:3,color:"rgba(0,0,0,0.3)"}}},example:{attributes:{content:zl("Beautiful Heading","digiblocks"),level:2,textColor:"#333333",typography:{fontSize:{desktop:32},fontWeight:"600",lineHeight:{desktop:1.2}},displaySeparator:!0,separatorStyle:"line-gradient",separatorColor:"#1e73be"}},edit:_d,save:Bd});var{__:Ye}=window.wp.i18n,{useBlockProps:zm,InspectorControls:Mm,PanelColorSettings:ji,LinkControl:Dm}=window.wp.blockEditor,{ToggleControl:$s,SelectControl:Ia,RangeControl:Td,TabPanel:Nd,Spinner:Pm,Button:Rm,__experimentalToggleGroupControl:_s,__experimentalToggleGroupControlOption:Ui}=window.wp.components,{useState:La,useEffect:Oa,useRef:Im}=window.wp.element,{useBlockId:Lm,getDimensionCSS:Vi,animations:Bs,animationPreview:Hd}=digi.utils,{tabIcons:Ts}=digi.icons,{ResponsiveControl:gi,ResponsiveButtonGroup:Om,DimensionControl:Fi,BoxShadowControl:jm,CustomTabPanel:Um,TabPanelBody:Ei}=digi.components,Vm=({attributes:ie,setAttributes:e,clientId:K})=>{let{id:o,anchor:O,visibility:a,customClasses:le,iconSource:l,customSvg:_,iconValue:y,iconSize:$,iconColor:P,iconBackgroundColor:h,iconBorderStyle:s,iconBorderWidth:z,iconBorderRadius:S,iconBorderColor:C,iconPadding:w,iconMargin:T,iconHoverColor:U,iconHoverBackgroundColor:L,iconHoverBorderColor:V,backgroundColor:Q,backgroundHoverColor:be,align:N,animation:u,boxShadow:v,boxShadowHover:I,borderStyle:ne,borderWidth:Me,borderRadius:Le,borderColor:X,hoverEffect:H,linkEnabled:Y,linkUrl:W,linkOpenInNewTab:ce,linkRel:ue,rotateIcon:A,flipHorizontal:J,flipVertical:me}=ie;Lm(o,K,e);let[oe,fe]=La(window.digi.responsiveState.activeDevice),[je,te]=La(!1);Oa(()=>window.digi.responsiveState.subscribe(k=>{fe(k)}),[]);let[to,De]=La(()=>{if(window.digi.uiState){let M=window.digi.uiState.getActiveTab(K);if(M)return M}return"options"});Oa(()=>{T||e({iconMargin:{desktop:{top:0,right:0,bottom:0,left:0,unit:"px"},tablet:{top:0,right:0,bottom:0,left:0,unit:"px"},mobile:{top:0,right:0,bottom:0,left:0,unit:"px"}}})},[T,e]);let[r,D]=La(!1);Oa(()=>{let M=()=>window.digi&&window.digi.components&&window.digi.components.FontAwesomeControl?(D(!0),!0):!1;if(!M()){let k=setTimeout(()=>{M()&&clearTimeout(k)},500);return()=>clearTimeout(k)}},[]);let xe=M=>{e({iconValue:M})},Pe=Im(null);Oa(()=>{if(u&&u!=="none"){let M=setTimeout(()=>{Hd(o,u,Bs,Pe)},100);return()=>clearTimeout(M)}},[u]);let Se=()=>{Hd(o,u,Bs,Pe)},Ue=[{label:Ye("Default","digiblocks"),value:"default"},{label:Ye("None","digiblocks"),value:"none"},{label:Ye("Solid","digiblocks"),value:"solid"},{label:Ye("Dotted","digiblocks"),value:"dotted"},{label:Ye("Dashed","digiblocks"),value:"dashed"},{label:Ye("Double","digiblocks"),value:"double"},{label:Ye("Groove","digiblocks"),value:"groove"},{label:Ye("Inset","digiblocks"),value:"inset"},{label:Ye("Outset","digiblocks"),value:"outset"},{label:Ye("Ridge","digiblocks"),value:"ridge"}],ee=[{label:Ye("None","digiblocks"),value:"none"},{label:Ye("Lift","digiblocks"),value:"lift"},{label:Ye("Scale","digiblocks"),value:"scale"},{label:Ye("Glow","digiblocks"),value:"glow"},{label:Ye("Spin","digiblocks"),value:"spin"},{label:Ye("Pulse","digiblocks"),value:"pulse"},{label:Ye("Shake","digiblocks"),value:"shake"}],Be=[{label:Ye("None","digiblocks"),value:"none"},...Object.keys(Bs).map(M=>({label:M.replace(/-/g," ").replace(/\b\w/g,k=>k.toUpperCase()),value:M}))],Xe=[{name:"options",title:Ye("Options","digiblocks"),icon:Ts.optionsIcon},{name:"style",title:Ye("Style","digiblocks"),icon:Ts.styleIcon},{name:"advanced",title:Ye("Advanced","digiblocks"),icon:Ts.advancedIcon}],q=[{name:"normal",title:Ye("Normal","digiblocks"),className:"digiblocks-tab-1 normal"},{name:"hover",title:Ye("Hover","digiblocks"),className:"digiblocks-tab-2 hover"}],ye=()=>{let M=window.digi.responsiveState.activeDevice,k="";ne&&ne!=="default"&&ne!=="none"&&(k+=`
                border-style: ${ne};
                border-color: ${X||"#e0e0e0"};
				${Vi(Me,"border-width",M)}
				${Vi(Le,"border-radius",M)}
            `);let G="";v&&v.enable&&(G=`box-shadow: ${v.position==="inset"?"inset ":""}${v.horizontal}px ${v.vertical}px ${v.blur}px ${v.spread}px ${v.color};`);let d="",re="",x="";if(y&&y.svg){h&&(d+=`background-color: ${h};`),s&&s!=="default"&&s!=="none"&&(d+=`
                    border-style: ${s};
                    border-color: ${C||"#e0e0e0"};
					${Vi(z,"border-width",M)}
					${Vi(S,"border-radius",M)}
                `),w&&w[M]&&(d+=`${Vi(w,"padding",M)}`),U&&(re+=`fill: ${U} !important; color: ${U} !important;`),L&&(re+=`background-color: ${L};`),V&&(re+=`border-color: ${V};`);let Ne=[];A&&Ne.push(`rotate(${A}deg)`),J&&Ne.push("scaleX(-1)"),me&&Ne.push("scaleY(-1)"),Ne.length>0&&(x=`transform: ${Ne.join(" ")};`)}let m="";if(I&&I.enable){let Ne=I.position==="inset"?"inset ":"";m+=`box-shadow: ${Ne}${I.horizontal}px ${I.vertical}px ${I.blur}px ${I.spread}px ${I.color};`}H==="lift"?m+="transform: translateY(-10px);":H==="scale"?m+="transform: scale(1.05);":H==="glow"?m+="filter: brightness(1.1);":H==="spin"?m+="animation: digiblocks-icon-spin 2s linear infinite;":H==="pulse"?m+="animation: digiblocks-icon-pulse 1.5s ease-in-out infinite;":H==="shake"&&(m+="animation: digiblocks-icon-shake 0.5s ease-in-out infinite;");let he="";Y&&(he=`
                cursor: pointer;
                text-decoration: none;
            `);let j="";return T&&T[M]&&(j=`${Vi(T,"margin",M)}`),`
            /* Icon Block - ${o} */
            .${o} {
                display: flex;
				justify-content: ${N[M]};
                align-items: center;
                background-color: ${Q||"transparent"};
                ${G}
                ${k}
                transition: all 0.3s ease;
                ${Y?he:""}
                ${j}
            }
            
            /* Hover effects */
            .${o}:hover {
                ${be?`background-color: ${be};`:""}
                ${m}
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
                ${x}
            }
            
            .${o} .digiblocks-icon svg {
                width: ${$[M]}px;
                height: auto;
                fill: ${P||"inherit"};
                transition: all 0.3s ease;
            }
            
            /* Icon hover styles */
            .${o}:hover .digiblocks-icon {
                ${re}
            }
            
            .${o}:hover .digiblocks-icon svg {
                ${U?`fill: ${U};`:""}
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
			${a.desktop?`
				@media (min-width: 992px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${a.tablet?`
				@media (min-width: 768px) and (max-width: 991px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${a.mobile?`
				@media (max-width: 767px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}
        `},qe=r?window.digi.components.FontAwesomeControl:null,E=()=>l==="library"&&y&&y.svg&&y.svg.trim()!==""?wp.element.createElement("div",{className:"digiblocks-icon"},wp.element.createElement("span",{dangerouslySetInnerHTML:{__html:y.svg}})):l==="custom"&&_&&_.trim()!==""?wp.element.createElement("div",{className:"digiblocks-icon"},wp.element.createElement("span",{dangerouslySetInnerHTML:{__html:_}})):null,se=M=>M==="normal"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(ji,{title:Ye("Icon Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:P,onChange:k=>e({iconColor:k}),label:Ye("Icon Color","digiblocks")},{value:h,onChange:k=>e({iconBackgroundColor:k}),label:Ye("Background Color","digiblocks")}]}),wp.element.createElement(Ia,{label:Ye("Border Style","digiblocks"),value:s||"default",options:Ue,onChange:k=>{k!=="default"&&k!=="none"&&(s==="default"||s==="none"||!s)&&(!z||Object.keys(z).length===0)&&e({iconBorderWidth:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:1,right:1,bottom:1,left:1,unit:"px"},mobile:{top:1,right:1,bottom:1,left:1,unit:"px"}}}),e({iconBorderStyle:k})},__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),s&&s!=="default"&&s!=="none"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(ji,{title:Ye("Border Color","digiblocks"),enableAlpha:!0,colorSettings:[{value:C,onChange:k=>e({iconBorderColor:k}),label:Ye("Border Color","digiblocks")}]}),wp.element.createElement(gi,{label:Ye("Border Width","digiblocks")},wp.element.createElement(Fi,{values:z[oe],onChange:k=>e({iconBorderWidth:{...z,[oe]:k}})})),wp.element.createElement(gi,{label:Ye("Border Radius","digiblocks")},wp.element.createElement(Fi,{values:S[oe],onChange:k=>e({iconBorderRadius:{...S,[oe]:k}}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]}))),wp.element.createElement(gi,{label:Ye("Padding","digiblocks")},wp.element.createElement(Fi,{values:w[oe],onChange:k=>e({iconPadding:{...w,[oe]:k}})})),wp.element.createElement(gi,{label:Ye("Margin","digiblocks")},wp.element.createElement(Fi,{values:T[oe],onChange:k=>e({iconMargin:{...T,[oe]:k}})}))):M==="hover"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(ji,{title:Ye("Icon Hover Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:U,onChange:k=>e({iconHoverColor:k}),label:Ye("Icon Color","digiblocks")},{value:L,onChange:k=>e({iconHoverBackgroundColor:k}),label:Ye("Background Color","digiblocks")},{value:V,onChange:k=>e({iconHoverBorderColor:k}),label:Ye("Border Color","digiblocks")}]})):null,B=M=>M==="normal"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(ji,{title:Ye("Container Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:Q,onChange:k=>e({backgroundColor:k}),label:Ye("Background Color","digiblocks")}]})):M==="hover"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(ji,{title:Ye("Container Hover Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:be,onChange:k=>e({backgroundHoverColor:k}),label:Ye("Background Color","digiblocks")}]})):null,c=()=>{switch(to){case"options":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:"components-panel__body is-opened"},wp.element.createElement("div",{style:{marginBottom:"2rem"}},wp.element.createElement(_s,{label:Ye("Icon Source","digiblocks"),value:l||"library",onChange:M=>e({iconSource:M}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(Ui,{value:"library",label:Ye("Library","digiblocks")}),wp.element.createElement(Ui,{value:"custom",label:Ye("Custom","digiblocks")})),l==="library"&&wp.element.createElement(wp.element.Fragment,null,r?wp.element.createElement(qe,{label:Ye("Select Icon","digiblocks"),value:y,onChange:xe}):wp.element.createElement("div",{style:{textAlign:"center",padding:"20px 0"}},wp.element.createElement(Pm,null),wp.element.createElement("p",null,Ye("Loading icon selector...","digiblocks"))),y&&r&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{style:{marginTop:"15px",marginBottom:"15px",padding:"10px",background:"#f0f0f1",borderRadius:"3px"}},wp.element.createElement("p",{style:{margin:"0 0 5px 0"}},wp.element.createElement("strong",null,Ye("Selected Icon:","digiblocks"))," ",y.name),wp.element.createElement("p",{style:{margin:"0 0 5px 0"}},wp.element.createElement("strong",null,Ye("Style:","digiblocks"))," ",y.style),y.categories&&y.categories.length>0&&wp.element.createElement("p",{style:{margin:"0"}},wp.element.createElement("strong",null,Ye("Categories:","digiblocks"))," ",y.categories.join(", "))))),l==="custom"&&wp.element.createElement("div",{style:{marginTop:"15px"}},wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"custom-svg-input"},Ye("Custom SVG Code","digiblocks")),wp.element.createElement("textarea",{id:"custom-svg-input",className:"components-textarea-control__input",value:_||"",onChange:M=>{let k=M.target.value;e({customSvg:k,iconValue:{id:"custom-svg",name:"Custom SVG",svg:k,style:"custom",categories:["custom"]}})},placeholder:Ye("Paste your SVG code here...","digiblocks"),rows:10,style:{width:"100%",marginTop:"8px"}}),wp.element.createElement("p",{className:"components-base-control__help"},Ye("Paste your SVG code here. Make sure it only contains valid SVG markup. For security reasons, scripts and external references will be removed.","digiblocks"))),_&&wp.element.createElement("div",{style:{marginTop:"15px",marginBottom:"15px"}},wp.element.createElement("p",null,wp.element.createElement("strong",null,Ye("Preview:","digiblocks"))),wp.element.createElement("div",{style:{padding:"20px",background:"#f0f0f1",borderRadius:"3px",display:"flex",justifyContent:"center",alignItems:"center"}},wp.element.createElement("div",{className:"digiblocks-custom-svg-preview",style:{width:"50px",height:"50px"},dangerouslySetInnerHTML:{__html:_}}))))),wp.element.createElement(Om,{label:Ye("Alignment","digiblocks"),value:N,onChange:M=>e({align:M}),options:[{label:Ye("Left","digiblocks"),value:"flex-start"},{label:Ye("Center","digiblocks"),value:"center"},{label:Ye("Right","digiblocks"),value:"flex-end"}]}),wp.element.createElement("div",{className:"icon-transform-controls"},wp.element.createElement(Td,{label:Ye("Rotate","digiblocks"),value:A||0,onChange:M=>e({rotateIcon:M}),min:0,max:360,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement("div",{className:"digiblocks-toggle-controls",style:{display:"flex",justifyContent:"space-between",marginBottom:"20px"}},wp.element.createElement(_s,{label:Ye("Flip Horizontal","digiblocks"),value:J?"yes":"no",onChange:M=>e({flipHorizontal:M==="yes"}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(Ui,{value:"no",label:Ye("Off","digiblocks")}),wp.element.createElement(Ui,{value:"yes",label:Ye("On","digiblocks")}))),wp.element.createElement("div",{className:"digiblocks-toggle-controls",style:{display:"flex",justifyContent:"space-between",marginBottom:"20px"}},wp.element.createElement(_s,{label:Ye("Flip Vertical","digiblocks"),value:me?"yes":"no",onChange:M=>e({flipVertical:M==="yes"}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(Ui,{value:"no",label:Ye("Off","digiblocks")}),wp.element.createElement(Ui,{value:"yes",label:Ye("On","digiblocks")})))),Y?wp.element.createElement(Dm,{key:"link-control",value:{url:W,opensInNewTab:ce,rel:ue},settings:[{id:"opensInNewTab",title:Ye("Open in new tab","digiblocks")},{id:"rel",title:Ye("Add noopener noreferrer","digiblocks")}],onChange:M=>{e({linkUrl:M.url,linkOpenInNewTab:M.opensInNewTab,linkRel:M.rel})},onRemove:()=>{e({linkEnabled:!1,linkUrl:"",linkOpenInNewTab:!1,linkRel:""})},suggestionsQuery:{type:"post",subtype:"any"},forceIsEditingLink:!W}):wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("button",{className:"components-button width-full is-primary",onClick:()=>e({linkEnabled:!0})},Ye("Add Link","digiblocks"))))));case"style":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Ei,{tab:"style",name:"icon",title:Ye("Icon","digiblocks"),initialOpen:!0},wp.element.createElement(gi,{label:Ye("Icon Size","digiblocks")},wp.element.createElement(Td,{value:$[oe],onChange:M=>e({iconSize:{...$,[oe]:M}}),min:8,max:500,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(Nd,{className:"digiblocks-control-tabs",activeClass:"active-tab",tabs:q},M=>se(M.name))),wp.element.createElement(Ei,{tab:"style",name:"container",title:Ye("Container","digiblocks"),initialOpen:!1},wp.element.createElement(Nd,{className:"digiblocks-control-tabs",activeClass:"active-tab",tabs:q},M=>B(M.name)),wp.element.createElement(Ia,{label:Ye("Border Style","digiblocks"),value:ne||"default",options:Ue,onChange:M=>{M!=="default"&&M!=="none"&&(ne==="default"||ne==="none"||!ne)&&((!Me||Object.keys(Me).length===0)&&e({borderWidth:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:1,right:1,bottom:1,left:1,unit:"px"},mobile:{top:1,right:1,bottom:1,left:1,unit:"px"}}}),(!Le||Object.keys(Le).length===0)&&e({borderRadius:{desktop:{top:8,right:8,bottom:8,left:8,unit:"px"},tablet:{top:8,right:8,bottom:8,left:8,unit:"px"},mobile:{top:8,right:8,bottom:8,left:8,unit:"px"}}})),e({borderStyle:M})},__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),ne&&ne!=="default"&&ne!=="none"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(ji,{title:Ye("Border Color","digiblocks"),enableAlpha:!0,colorSettings:[{value:X,onChange:M=>e({borderColor:M}),label:Ye("Border Color","digiblocks")}]}),wp.element.createElement(gi,{label:Ye("Border Width","digiblocks")},wp.element.createElement(Fi,{values:Me&&Me[oe]?Me[oe]:{top:1,right:1,bottom:1,left:1,unit:"px"},onChange:M=>e({borderWidth:{...Me,[oe]:M}})})),wp.element.createElement(gi,{label:Ye("Border Radius","digiblocks")},wp.element.createElement(Fi,{values:Le&&Le[oe]?Le[oe]:{top:0,right:0,bottom:0,left:0,unit:"px"},onChange:M=>e({borderRadius:{...Le,[oe]:M}}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]}))),wp.element.createElement(Ia,{label:Ye("Hover Effect","digiblocks"),value:H,options:ee,onChange:M=>e({hoverEffect:M}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(Ei,{tab:"style",name:"shadow",title:Ye("Box Shadow","digiblocks"),initialOpen:!1},wp.element.createElement(jm,{normalValue:v,hoverValue:I,onNormalChange:M=>e({boxShadow:M}),onHoverChange:M=>e({boxShadowHover:M})})));case"advanced":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Ei,{tab:"advanced",name:"animation",title:Ye("Animation","digiblocks"),initialOpen:!0},wp.element.createElement(Ia,{label:Ye("Animation Effect","digiblocks"),value:u,options:Be,onChange:M=>e({animation:M}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),u&&u!=="none"&&wp.element.createElement("div",{style:{marginTop:"10px"}},wp.element.createElement(Rm,{variant:"secondary",isSecondary:!0,onClick:Se,style:{width:"100%"}},Ye("Preview Animation","digiblocks")))),wp.element.createElement(Ei,{tab:"advanced",name:"visibility",title:Ye("Visibility","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control__help",style:{padding:"12px",backgroundColor:"#f0f6fc",border:"1px solid #c3ddfd",borderRadius:"4px",marginBottom:"16px"}},wp.element.createElement("strong",null,Ye("Editor Note:","digiblocks")),wp.element.createElement("br",null),Ye("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.","digiblocks")),wp.element.createElement($s,{label:Ye("Hide on Desktop","digiblocks"),checked:a.desktop,onChange:M=>e({visibility:{...a,desktop:M}}),__nextHasNoMarginBottom:!0}),wp.element.createElement($s,{label:Ye("Hide on Tablet","digiblocks"),checked:a.tablet,onChange:M=>e({visibility:{...a,tablet:M}}),__nextHasNoMarginBottom:!0}),wp.element.createElement($s,{label:Ye("Hide on Mobile","digiblocks"),checked:a.mobile,onChange:M=>e({visibility:{...a,mobile:M}}),__nextHasNoMarginBottom:!0})),wp.element.createElement(Ei,{tab:"advanced",name:"additional",title:Ye("Additional","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control html-anchor-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"html-anchor"},Ye("HTML anchor","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"html-anchor",value:O||"",onChange:M=>e({anchor:M.target.value}),"aria-describedby":"html-anchor-help",autoCapitalize:"none",autoComplete:"off"})),wp.element.createElement("p",{id:"html-anchor-help",className:"components-base-control__help"},Ye(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`,"digiblocks")," ",wp.element.createElement("a",{className:"components-external-link",href:"https://wordpress.org/documentation/article/page-jumps/",target:"_blank",rel:"external noreferrer noopener"},wp.element.createElement("span",{className:"components-external-link__contents"},Ye("Learn more about anchors","digiblocks")),wp.element.createElement("span",{className:"components-external-link__icon","aria-label":"(opens in a new tab)"},"\u2197")))),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"additional-css-classes"},Ye("Additional CSS class(es)","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"additional-css-classes",value:le||"",onChange:M=>e({customClasses:M.target.value}),"aria-describedby":"additional-css-classes-help",autoComplete:"off"})),wp.element.createElement("p",{id:"additional-css-classes-help",className:"components-base-control__help"},Ye("Separate multiple classes with spaces.","digiblocks")))));default:return null}},ge=zm({className:`digiblocks-icon ${o} ${le||""}`,id:O||null});return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Mm,null,wp.element.createElement(Um,{tabs:Xe,activeTab:to,onSelect:De},c())),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:ye()}}),wp.element.createElement("div",{...ge},E()))},zd=Vm;var{useBlockProps:Z1}=window.wp.blockEditor,Fm=({attributes:ie})=>{let{id:e,iconSource:K,customSvg:o,iconValue:O,animation:a,hoverEffect:le,anchor:l,customClasses:_,linkEnabled:y,linkUrl:$,linkOpenInNewTab:P}=ie,s={className:["digiblocks-icon",e,a!=="none"?`animate-${a}`:"",le!=="none"?`has-hover-${le}`:"",_||""].filter(Boolean).join(" "),id:l||null},z=()=>K==="library"&&O&&O.svg&&O.svg.trim()!==""?wp.element.createElement("div",{className:"digiblocks-icon"},wp.element.createElement("span",{dangerouslySetInnerHTML:{__html:O.svg}})):K==="custom"&&o&&o.trim()!==""?wp.element.createElement("div",{className:"digiblocks-icon"},wp.element.createElement("span",{dangerouslySetInnerHTML:{__html:o}})):null;return y&&$?wp.element.createElement("a",{href:$,target:P?"_blank":"_self",rel:P?"noopener noreferrer":void 0,...s},z()):wp.element.createElement("div",{...s},z())},Md=Fm;var{__:Ns}=window.wp.i18n,{registerBlockType:Em}=window.wp.blocks,{getBlockActiveStatus:Wm}=window.wp.digiBlocks;Em("digiblocks/icon",{apiVersion:2,title:digiBlocksData.blocks.icon.title,category:"digiblocks",icon:{src:()=>{let{viewbox:ie,path:e}=digiBlocksData.blocks.icon.icon;return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${ie}`,className:"digiblocks-editor-icons"},wp.element.createElement("path",{d:e}))}},description:digiBlocksData.blocks.icon.description,keywords:[Ns("icon","digiblocks"),Ns("symbol","digiblocks"),Ns("fontawesome","digiblocks")],supports:{inserter:!!Wm("icon"),html:!1,className:!1,customClassName:!1,anchor:!1},attributes:{id:{type:"string",default:""},anchor:{type:"string",default:""},visibility:{type:"object",default:{desktop:!1,tablet:!1,mobile:!1}},customClasses:{type:"string",default:""},iconSource:{type:"string",default:"library"},customSvg:{type:"string",default:""},iconValue:{type:"object",default:{id:"heart",name:"Heart",svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"></path></svg>',style:"solid",categories:["symbols","emoji"]}},align:{type:"object",default:{desktop:"flex-start",tablet:"",mobile:""}},iconColor:{type:"string",default:"#1e73be"},iconBackgroundColor:{type:"string",default:"transparent"},iconBorderStyle:{type:"string",default:"default"},iconBorderWidth:{type:"object",default:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},iconBorderRadius:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},iconBorderColor:{type:"string",default:"#e0e0e0"},iconPadding:{type:"object",default:{desktop:{top:10,right:10,bottom:10,left:10,unit:"px"},tablet:{top:8,right:8,bottom:8,left:8,unit:"px"},mobile:{top:5,right:5,bottom:5,left:5,unit:"px"}}},iconMargin:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},iconHoverColor:{type:"string",default:""},iconHoverBackgroundColor:{type:"string",default:""},iconHoverBorderColor:{type:"string",default:""},linkEnabled:{type:"boolean",default:!1},linkUrl:{type:"string",default:""},linkOpenInNewTab:{type:"boolean",default:!1},linkRel:{type:"string",default:""},iconSize:{type:"object",default:{desktop:48,tablet:40,mobile:32}},backgroundColor:{type:"string",default:"transparent"},backgroundHoverColor:{type:"string",default:""},animation:{type:"string",default:"none"},borderStyle:{type:"string",default:"default"},borderRadius:{type:"object",default:{desktop:{top:8,right:8,bottom:8,left:8,unit:"px"},tablet:{top:8,right:8,bottom:8,left:8,unit:"px"},mobile:{top:8,right:8,bottom:8,left:8,unit:"px"}}},borderWidth:{type:"object",default:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:1,right:1,bottom:1,left:1,unit:"px"},mobile:{top:1,right:1,bottom:1,left:1,unit:"px"}}},borderColor:{type:"string",default:"#e0e0e0"},hoverEffect:{type:"string",default:"none"},boxShadow:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},boxShadowHover:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},rotateIcon:{type:"number",default:0},flipHorizontal:{type:"boolean",default:!1},flipVertical:{type:"boolean",default:!1}},example:{attributes:{iconValue:{id:"star",name:"Star",svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="1em" height="1em"><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"></path></svg>',style:"solid",categories:["design","basic-shapes"]},iconColor:"#1e73be",backgroundColor:"transparent",iconSize:{desktop:80},iconPadding:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}}},edit:zd,save:Md});var{__:pe}=window.wp.i18n,{useBlockProps:qm,RichText:Hs,InspectorControls:Gm,PanelColorSettings:Wo,LinkControl:Qm}=window.wp.blockEditor,{SelectControl:Wi,RangeControl:ev,ToggleControl:qi,TabPanel:ja,Spinner:Jm,Button:Ym,TextControl:Dd,__experimentalToggleGroupControl:Pd,__experimentalToggleGroupControlOption:Ua}=window.wp.components,{useState:Va,useEffect:zs,useRef:Zm}=window.wp.element,{useBlockId:Km,getDimensionCSS:To,animations:Ms,animationPreview:Rd}=digi.utils,{tabIcons:Ds}=digi.icons,{ResponsiveControl:No,DimensionControl:Ho,TypographyControl:Fa,BoxShadowControl:Ps,CustomTabPanel:Xm,TabPanelBody:Xo,ResponsiveButtonGroup:Id,ResponsiveRangeControl:Rs}=digi.components,Am=({attributes:ie,setAttributes:e,clientId:K})=>{let{id:o,anchor:O,visibility:a,customClasses:le,iconSource:l,customSvg:_,iconValue:y,align:$,iconLayout:P,iconContentGap:h,showTitle:s,showContent:z,showBadge:S,badgeText:C,title:w,content:T,titleColor:U,titleHoverColor:L,textColor:V,textHoverColor:Q,backgroundColor:be,backgroundHoverColor:N,iconSize:u,iconHeight:v,iconColor:I,iconBackgroundColor:ne,iconBorderStyle:Me,iconBorderWidth:Le,iconBorderRadius:X,iconBorderColor:H,iconPadding:Y,iconMargin:W,iconHoverColor:ce,iconHoverBackgroundColor:ue,iconHoverBorderColor:A,titleTypography:J,contentTypography:me,padding:oe,margin:fe,animation:je,boxShadow:te,boxShadowHover:to,borderStyle:De,borderWidth:r,borderRadius:D,borderColor:xe,borderHoverColor:Pe,hoverEffect:Se,linkEnabled:Ue,linkType:ee,linkUrl:Be,linkOpenInNewTab:Xe,linkRel:q,buttonText:ye,buttonBackgroundColor:qe,buttonBackgroundHoverColor:E,buttonTextColor:se,buttonTextHoverColor:B,buttonBorderStyle:c,buttonBorderWidth:ge,buttonBorderRadius:M,buttonBorderColor:k,buttonBorderHoverColor:G,buttonBoxShadow:d,buttonBoxShadowHover:re,buttonPadding:x,buttonMargin:m,buttonTypography:he,badgeBackgroundColor:j,badgeBackgroundHoverColor:Ne,badgeTextColor:f,badgeTextHoverColor:Ge,badgeTypography:We,badgePadding:go,badgeBorderStyle:t,badgeBorderWidth:b,badgeBorderRadius:Ce,badgeBorderColor:n,badgeBorderHoverColor:we,badgeBoxShadow:Ke,badgeBoxShadowHover:p}=ie;Km(o,K,e);let[g,He]=Va(window.digi.responsiveState.activeDevice),[Je,i]=Va(!1);zs(()=>window.digi.responsiveState.subscribe(Oe=>{He(Oe)}),[]);let[F,Fe]=Va(()=>{if(window.digi.uiState){let Z=window.digi.uiState.getActiveTab(K);if(Z)return Z}return"options"}),[po,R]=Va(!1);zs(()=>{let Z=()=>window.digi&&window.digi.components&&window.digi.components.FontAwesomeControl?(R(!0),!0):!1;if(!Z()){let Oe=setTimeout(()=>{Z()&&clearTimeout(Oe)},500);return()=>clearTimeout(Oe)}},[]);let Ae=Z=>{e({iconValue:Z})},co=Zm(null);zs(()=>{if(je&&je!=="none"){let Z=setTimeout(()=>{Rd(o,je,Ms,co)},100);return()=>clearTimeout(Z)}},[je]);let uo=()=>{Rd(o,je,Ms,co)},ho=[{label:pe("Default","digiblocks"),value:"default"},{label:pe("None","digiblocks"),value:"none"},{label:pe("Solid","digiblocks"),value:"solid"},{label:pe("Dotted","digiblocks"),value:"dotted"},{label:pe("Dashed","digiblocks"),value:"dashed"},{label:pe("Double","digiblocks"),value:"double"},{label:pe("Groove","digiblocks"),value:"groove"},{label:pe("Inset","digiblocks"),value:"inset"},{label:pe("Outset","digiblocks"),value:"outset"},{label:pe("Ridge","digiblocks"),value:"ridge"}],fo=[{label:pe("None","digiblocks"),value:"none"},{label:pe("Lift","digiblocks"),value:"lift"},{label:pe("Scale","digiblocks"),value:"scale"},{label:pe("Glow","digiblocks"),value:"glow"}],mo=[{label:pe("None","digiblocks"),value:"none"},...Object.keys(Ms).map(Z=>({label:Z.replace(/-/g," ").replace(/\b\w/g,Oe=>Oe.toUpperCase()),value:Z}))],yo=[{label:pe("Box","digiblocks"),value:"box"},{label:pe("Button","digiblocks"),value:"button"}],Lo=[{name:"options",title:pe("Options","digiblocks"),icon:Ds.optionsIcon},{name:"style",title:pe("Style","digiblocks"),icon:Ds.styleIcon},{name:"advanced",title:pe("Advanced","digiblocks"),icon:Ds.advancedIcon}],Bo=[{name:"normal",title:pe("Normal","digiblocks"),className:"digiblocks-tab-1 normal"},{name:"hover",title:pe("Hover","digiblocks"),className:"digiblocks-tab-2 hover"}],$o=()=>{let Z=window.digi.responsiveState.activeDevice,Oe="";$[Z]==="flex-start"?Oe=`
				align-items: flex-start;
				text-align: left;
			`:$[Z]==="center"?Oe=`
				align-items: center;
				text-align: center;
			`:$[Z]==="flex-end"&&(Oe=`
				align-items: flex-end;
				text-align: right;
			`);let Xr=To(D,"border-radius",Z),zn="";De&&De!=="default"&&De!=="none"?zn=`
                border-style: ${De};
                border-color: ${xe||"#e0e0e0"};
                ${To(r,"border-width",Z)}
            `:zn="border-style: none;";let Ar="box-shadow: none;";te&&te.enable&&(Ar=`box-shadow: ${te.position==="inset"?"inset ":""}${te.horizontal}px ${te.vertical}px ${te.blur}px ${te.spread}px ${te.color};`);let cp=`${To(oe,"padding",Z)}`,dp=`${To(fe,"margin",Z)}`,kt="";J&&(J.fontFamily&&(kt+=`font-family: ${J.fontFamily};`),J.fontSize&&J.fontSize[Z]&&(kt+=`font-size: ${J.fontSize[Z]}${J.fontSizeUnit||"px"};`),J.fontWeight&&(kt+=`font-weight: ${J.fontWeight};`),J.fontStyle&&(kt+=`font-style: ${J.fontStyle};`),J.textTransform&&(kt+=`text-transform: ${J.textTransform};`),J.textDecoration&&(kt+=`text-decoration: ${J.textDecoration};`),J.lineHeight&&J.lineHeight[Z]&&(kt+=`line-height: ${J.lineHeight[Z]}${J.lineHeightUnit||"em"};`),J.letterSpacing&&J.letterSpacing[Z]&&(kt+=`letter-spacing: ${J.letterSpacing[Z]}${J.letterSpacingUnit||"px"};`));let vt="";me&&(me.fontFamily&&(vt+=`font-family: ${me.fontFamily};`),me.fontSize&&me.fontSize[Z]&&(vt+=`font-size: ${me.fontSize[Z]}${me.fontSizeUnit||"px"};`),me.fontWeight&&(vt+=`font-weight: ${me.fontWeight};`),me.fontStyle&&(vt+=`font-style: ${me.fontStyle};`),me.textTransform&&(vt+=`text-transform: ${me.textTransform};`),me.textDecoration&&(vt+=`text-decoration: ${me.textDecoration};`),me.lineHeight&&me.lineHeight[Z]&&(vt+=`line-height: ${me.lineHeight[Z]}${me.lineHeightUnit||"em"};`),me.letterSpacing&&me.letterSpacing[Z]&&(vt+=`letter-spacing: ${me.letterSpacing[Z]}${me.letterSpacingUnit||"px"};`));let xt="";he&&(he.fontFamily&&(xt+=`font-family: ${he.fontFamily};`),he.fontSize&&he.fontSize[Z]&&(xt+=`font-size: ${he.fontSize[Z]}${he.fontSizeUnit||"px"};`),he.fontWeight&&(xt+=`font-weight: ${he.fontWeight};`),he.fontStyle&&(xt+=`font-style: ${he.fontStyle};`),he.textTransform&&(xt+=`text-transform: ${he.textTransform};`),he.textDecoration&&(xt+=`text-decoration: ${he.textDecoration};`),he.lineHeight&&he.lineHeight[Z]&&(xt+=`line-height: ${he.lineHeight[Z]}${he.lineHeightUnit||"em"};`),he.letterSpacing&&he.letterSpacing[Z]&&(xt+=`letter-spacing: ${he.letterSpacing[Z]}${he.letterSpacingUnit||"px"};`));let yt="";We&&(We.fontFamily&&(yt+=`font-family: ${We.fontFamily};`),We.fontSize&&We.fontSize[Z]&&(yt+=`font-size: ${We.fontSize[Z]}${We.fontSizeUnit||"rem"};`),We.fontWeight&&(yt+=`font-weight: ${We.fontWeight};`),We.fontStyle&&(yt+=`font-style: ${We.fontStyle};`),We.textTransform&&(yt+=`text-transform: ${We.textTransform};`),We.textDecoration&&(yt+=`text-decoration: ${We.textDecoration};`),We.lineHeight&&We.lineHeight[Z]&&(yt+=`line-height: ${We.lineHeight[Z]}${We.lineHeightUnit||"em"};`),We.letterSpacing&&We.letterSpacing[Z]&&(yt+=`letter-spacing: ${We.letterSpacing[Z]}${We.letterSpacingUnit||"em"};`));let ra="",ca="",ec="",oc=y&&y.svg||l==="custom"&&_&&_.trim()!=="";if(oc){if(ne&&(ra+=`background-color: ${ne};`),Me&&Me!=="default"&&Me!=="none"){let Qo=Le&&Le[Z]?Le[Z]:{top:1,right:1,bottom:1,left:1,unit:"px"},wi=X&&X[Z]?X[Z]:{top:0,right:0,bottom:0,left:0,unit:"px"};ra+=`
                    border-style: ${Me};
                    border-color: ${H||"#e0e0e0"};
					${To(Le,"border-width",Z)}
					${To(X,"border-radius",Z)}
                `}Y&&Y[Z]&&(ra+=`${To(Y,"padding",Z)}`),ce&&(ca+=`fill: ${ce} !important; color: ${ce} !important;`),ue&&(ca+=`background-color: ${ue};`),A&&(ca+=`border-color: ${A};`),W&&W[Z]&&(ec=`${To(W,"margin",Z)}`)}let Ci="";if(to&&to.enable){let Qo=to.position==="inset"?"inset ":"";Ci+=`box-shadow: ${Qo}${to.horizontal}px ${to.vertical}px ${to.blur}px ${to.spread}px ${to.color};`}Pe&&(Ci+=`border-color: ${Pe};`),Se==="lift"?Ci+="transform: translateY(-10px);":Se==="scale"?Ci+="transform: scale(1.05);":Se==="glow"&&(Ci+="filter: brightness(1.1);");let tc="";Ue&&ee==="box"&&(tc=`
				cursor: pointer;
				text-decoration: none;
			`);let ic="",dl="";if(Ue&&ee==="button"){let Qo="";c&&c!=="default"&&c!=="none"?Qo=`
                    border-style: ${c};
                    border-color: ${k||qe};
                    ${To(ge,"border-width",Z)}
                `:Qo="border-style: none;";let wi="box-shadow: none;";d&&d.enable&&(wi=`box-shadow: ${d.position==="inset"?"inset ":""}${d.horizontal}px ${d.vertical}px ${d.blur}px ${d.spread}px ${d.color};`);let Mn=`${To(x,"padding",Z)}`,Zt=`${To(m,"margin",Z)}`;if(re&&re.enable){let gl=re.position==="inset"?"inset ":"";dl+=`box-shadow: ${gl}${re.horizontal}px ${re.vertical}px ${re.blur}px ${re.spread}px ${re.color};`}E&&(dl+=`background-color: ${E};`),B&&(dl+=`color: ${B};`),G&&(dl+=`border-color: ${G};`),ic=`
                .${o} .digiblocks-button-wrapper {
                    display: flex;
                    justify-content: ${$[Z]==="center"?"center":$[Z]==="flex-end"?"flex-end":"flex-start"};
                    ${Zt}
                }
                
                .${o} .digiblocks-button {
                    display: inline-block;
                    background-color: ${qe};
                    color: ${se};
                    ${Mn}
                    ${Qo}
                    ${To(M,"border-radius",Z)}
                    ${wi}
                    ${xt}
                    text-decoration: none;
                    transition: all 0.3s ease;
                }
                
                .${o} .digiblocks-button:hover {
                    ${dl}
                }
            `}let lc="";if(S){let Qo="";t&&t!=="default"&&t!=="none"?Qo=`
					border-style: ${t};
					border-color: ${n||"#e0e0e0"};
					${To(b,"border-width",Z)}
				`:Qo="border-style: none;";let wi="box-shadow: none;";Ke&&Ke.enable&&(wi=`box-shadow: ${Ke.position==="inset"?"inset ":""}${Ke.horizontal}px ${Ke.vertical}px ${Ke.blur}px ${Ke.spread}px ${Ke.color};`);let Mn=`${To(go,"padding",Z)}`,Zt="";if(p&&p.enable){let gl=p.position==="inset"?"inset ":"";Zt+=`box-shadow: ${gl}${p.horizontal}px ${p.vertical}px ${p.blur}px ${p.spread}px ${p.color};`}Ne&&(Zt+=`background-color: ${Ne};`),Ge&&(Zt+=`color: ${Ge};`),we&&(Zt+=`border-color: ${we};`),lc=`
				.${o} .digiblocks-icon-box-badge {
					position: absolute;
					top: 8px;
					right: 8px;
					background-color: ${j};
					color: ${f};
					${Mn}
					${Qo}
					${To(Ce,"border-radius",Z)}
					${wi}
					${yt}
					transition: all 0.3s ease;
					z-index: 1;
				}
				
				.${o}:hover .digiblocks-icon-box-badge {
					${Zt}
				}
			`}return`
            /* Main block styles */
            .${o} {
				display: flex;
				position: relative;
				${Oe}
                background-color: ${be||"transparent"};
                ${Ar}
                ${cp}
                ${dp}
                ${zn}
                ${Xr}
				${P[Z]==="above"?"flex-direction: column;":"flex-direction: row;"}
				${P[Z]==="after"?"flex-direction: row-reverse;":""}
				gap: ${h[Z].value}${h[Z].unit};
                transition: all 0.3s ease;
                ${Ue&&ee==="box"?tc:""}
            }
            
            /* Hover effects */
            .${o}:hover {
                ${N?`background-color: ${N};`:""}
                ${Ci}
            }
            
            ${oc?`
				/* Icon styles */
				.${o} .digiblocks-icon-box-icon {
					${ec}
					display: inline-flex;
					align-items: center;
					justify-content: center;
					${ra}
					transition: all 0.3s ease;
				}

				.${o} .digiblocks-icon-box-icon span {
					display: flex;
				}

				.${o} .digiblocks-icon-box-icon svg {
					width: ${u[Z].value}${u[Z].unit};
					height: ${v[Z].value?`${v[Z].value}${v[Z].unit}`:"100%"};
					fill: ${I||"inherit"};
					transition: all 0.3s ease;
				}
				
				/* Icon hover styles */
				.${o}:hover .digiblocks-icon-box-icon {
					${ca}
				}
				
				.${o}:hover .digiblocks-icon-box-icon svg {
					${ce?`fill: ${ce};`:""}
				}
				`:""}
            
            /* Title styles */
            .${o} .digiblocks-icon-box-title {
                color: ${U||"inherit"};
				margin-top: 0;
                margin-bottom: 10px;
                ${kt}
                transition: color 0.3s ease;
            }
            
            /* Title hover styles */
            .${o}:hover .digiblocks-icon-box-title {
                ${L?`color: ${L};`:""}
            }
            
            /* Content styles */
            .${o} .digiblocks-icon-box-content {
                display: flex;
                flex-direction: column;
            }

            .${o} .digiblocks-icon-box-text {
                color: ${V||"inherit"};
                ${vt}
				margin: 0;
                transition: color 0.3s ease;
            }
            
            /* Content hover styles */
            .${o}:hover .digiblocks-icon-box-text {
                ${Q?`color: ${Q};`:""}
            }
            
            /* Button styles */
            ${ic}

			/* Badge styles */
			${lc}

			/* Visibility Controls */
			${a.desktop?`
				@media (min-width: 992px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${a.tablet?`
				@media (min-width: 768px) and (max-width: 991px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${a.mobile?`
				@media (max-width: 767px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}
        `},vo=Z=>{switch(Z){case"%":return 100;case"em":case"rem":return 50;case"px":default:return 1500}},zo=Z=>{switch(Z){case"%":return 1;case"em":case"rem":return .1;case"px":default:return 1}},Yt=po?window.digi.components.FontAwesomeControl:null,Tn=()=>l==="library"&&y&&y.svg&&y.svg.trim()!==""?wp.element.createElement("div",{className:"digiblocks-icon-box-icon"},wp.element.createElement("span",{dangerouslySetInnerHTML:{__html:y.svg}})):l==="custom"&&_&&_.trim()!==""?wp.element.createElement("div",{className:"digiblocks-icon-box-icon"},wp.element.createElement("span",{dangerouslySetInnerHTML:{__html:_}})):!l&&y&&y.svg&&y.svg.trim()!==""?wp.element.createElement("div",{className:"digiblocks-icon-box-icon"},wp.element.createElement("span",{dangerouslySetInnerHTML:{__html:y.svg}})):null,Nn=()=>S?wp.element.createElement("span",{className:"digiblocks-icon-box-badge"},C||pe("Popular","digiblocks")):null,Hn=()=>!Ue||ee!=="button"?null:wp.element.createElement("div",{className:"digiblocks-button-wrapper"},wp.element.createElement("a",{className:"digiblocks-button",href:Be||"#",target:Xe?"_blank":"_self",rel:q,onClick:Z=>Z.preventDefault()},wp.element.createElement(Hs,{tagName:"span",value:ye,onChange:Z=>e({buttonText:Z}),placeholder:pe("Button Text","digiblocks")}))),op=Z=>Z==="normal"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Wo,{title:pe("Icon Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:I,onChange:Oe=>e({iconColor:Oe}),label:pe("Icon Color","digiblocks")},{value:ne,onChange:Oe=>e({iconBackgroundColor:Oe}),label:pe("Background Color","digiblocks")}]}),wp.element.createElement(Wi,{label:pe("Border Style","digiblocks"),value:Me||"default",options:ho,onChange:Oe=>{Oe!=="default"&&Oe!=="none"&&(Me==="default"||Me==="none"||!Me)&&(!Le||Object.keys(Le).length===0)&&e({iconBorderWidth:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}}),e({iconBorderStyle:Oe})},__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),Me&&Me!=="default"&&Me!=="none"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Wo,{title:pe("Border Color","digiblocks"),enableAlpha:!0,colorSettings:[{value:H,onChange:Oe=>e({iconBorderColor:Oe}),label:pe("Border Color","digiblocks")}]}),wp.element.createElement(No,{label:pe("Border Width","digiblocks")},wp.element.createElement(Ho,{values:Le[g],onChange:Oe=>e({iconBorderWidth:{...Le,[g]:Oe}})})),wp.element.createElement(No,{label:pe("Border Radius","digiblocks")},wp.element.createElement(Ho,{values:X[g],onChange:Oe=>e({iconBorderRadius:{...X,[g]:Oe}}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]}))),wp.element.createElement(No,{label:pe("Padding","digiblocks")},wp.element.createElement(Ho,{values:Y[g],onChange:Oe=>e({iconPadding:{...Y,[g]:Oe}})})),wp.element.createElement(No,{label:pe("Margin","digiblocks")},wp.element.createElement(Ho,{values:W[g],onChange:Oe=>e({iconMargin:{...W,[g]:Oe}})}))):Z==="hover"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Wo,{title:pe("Icon Hover Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:ce,onChange:Oe=>e({iconHoverColor:Oe}),label:pe("Icon Color","digiblocks")},{value:ue,onChange:Oe=>e({iconHoverBackgroundColor:Oe}),label:pe("Background Color","digiblocks")},{value:A,onChange:Oe=>e({iconHoverBorderColor:Oe}),label:pe("Border Color","digiblocks")}]})):null,tp=Z=>Z==="normal"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Wo,{title:pe("Color Settings","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:U,onChange:Oe=>e({titleColor:Oe}),label:pe("Title Color","digiblocks")},{value:V,onChange:Oe=>e({textColor:Oe}),label:pe("Text Color","digiblocks")},{value:be,onChange:Oe=>e({backgroundColor:Oe}),label:pe("Background Color","digiblocks")}]})):Z==="hover"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Wo,{title:pe("Hover Color Settings","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:L,onChange:Oe=>e({titleHoverColor:Oe}),label:pe("Title Color","digiblocks")},{value:Q,onChange:Oe=>e({textHoverColor:Oe}),label:pe("Text Color","digiblocks")},{value:N,onChange:Oe=>e({backgroundHoverColor:Oe}),label:pe("Background Color","digiblocks")},{value:Pe,onChange:Oe=>e({borderHoverColor:Oe}),label:pe("Border Color","digiblocks")}]})):null,ip=Z=>Z==="normal"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Wo,{title:pe("Button Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:se,onChange:Oe=>e({buttonTextColor:Oe}),label:pe("Text Color","digiblocks")},{value:qe,onChange:Oe=>e({buttonBackgroundColor:Oe}),label:pe("Background Color","digiblocks")}]}),wp.element.createElement(Wi,{label:pe("Border Style","digiblocks"),value:c||"default",options:ho,onChange:Oe=>{Oe!=="default"&&Oe!=="none"&&(c==="default"||c==="none"||!c)&&(!ge||Object.keys(ge).length===0)&&e({buttonBorderWidth:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}}),e({buttonBorderStyle:Oe})},__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),c&&c!=="default"&&c!=="none"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Wo,{title:pe("Border Color","digiblocks"),enableAlpha:!0,colorSettings:[{value:k,onChange:Oe=>e({buttonBorderColor:Oe}),label:pe("Border Color","digiblocks")}]}),wp.element.createElement(No,{label:pe("Border Width","digiblocks")},wp.element.createElement(Ho,{values:ge[g],onChange:Oe=>e({buttonBorderWidth:{...ge,[g]:Oe}})}))),wp.element.createElement(No,{label:pe("Border Radius","digiblocks")},wp.element.createElement(Ho,{values:M[g],onChange:Oe=>e({buttonBorderRadius:{...M,[g]:Oe}}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]})),wp.element.createElement(No,{label:pe("Padding","digiblocks")},wp.element.createElement(Ho,{values:x[g],onChange:Oe=>e({buttonPadding:{...x,[g]:Oe}})})),wp.element.createElement(No,{label:pe("Margin","digiblocks")},wp.element.createElement(Ho,{values:m[g],onChange:Oe=>e({buttonMargin:{...m,[g]:Oe}})})),wp.element.createElement(Ps,{normalValue:d,hoverValue:re,onNormalChange:Oe=>e({buttonBoxShadow:Oe}),onHoverChange:Oe=>e({buttonBoxShadowHover:Oe})})):Z==="hover"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Wo,{title:pe("Button Hover Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:B,onChange:Oe=>e({buttonTextHoverColor:Oe}),label:pe("Text Color","digiblocks")},{value:E,onChange:Oe=>e({buttonBackgroundHoverColor:Oe}),label:pe("Background Color","digiblocks")}]})):null,lp=Z=>Z==="normal"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Wo,{title:pe("Badge Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:f,onChange:Oe=>e({badgeTextColor:Oe}),label:pe("Text Color","digiblocks")},{value:j,onChange:Oe=>e({badgeBackgroundColor:Oe}),label:pe("Background Color","digiblocks")}]}),wp.element.createElement(Wi,{label:pe("Border Style","digiblocks"),value:t||"none",options:ho,onChange:Oe=>{Oe!=="default"&&Oe!=="none"&&(t==="default"||t==="none"||!t)&&(!b||Object.keys(b).length===0)&&e({badgeBorderWidth:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}}),e({badgeBorderStyle:Oe})},__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),t&&t!=="default"&&t!=="none"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Wo,{title:pe("Border Color","digiblocks"),enableAlpha:!0,colorSettings:[{value:n,onChange:Oe=>e({badgeBorderColor:Oe}),label:pe("Border Color","digiblocks")}]}),wp.element.createElement(No,{label:pe("Border Width","digiblocks")},wp.element.createElement(Ho,{values:b[g],onChange:Oe=>e({badgeBorderWidth:{...b,[g]:Oe}})}))),wp.element.createElement(No,{label:pe("Border Radius","digiblocks")},wp.element.createElement(Ho,{values:Ce[g],onChange:Oe=>e({badgeBorderRadius:{...Ce,[g]:Oe}}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]})),wp.element.createElement(No,{label:pe("Padding","digiblocks")},wp.element.createElement(Ho,{values:go[g],onChange:Oe=>e({badgePadding:{...go,[g]:Oe}}),units:[{label:"px",value:"px"},{label:"rem",value:"rem"},{label:"em",value:"em"},{label:"%",value:"%"}]})),wp.element.createElement(Ps,{normalValue:Ke,hoverValue:p,onNormalChange:Oe=>e({badgeBoxShadow:Oe}),onHoverChange:Oe=>e({badgeBoxShadowHover:Oe})})):Z==="hover"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Wo,{title:pe("Badge Hover Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:Ge,onChange:Oe=>e({badgeTextHoverColor:Oe}),label:pe("Text Color","digiblocks")},{value:Ne,onChange:Oe=>e({badgeBackgroundHoverColor:Oe}),label:pe("Background Color","digiblocks")},{value:we,onChange:Oe=>e({badgeBorderHoverColor:Oe}),label:pe("Border Color","digiblocks")}]})):null,ap=()=>wp.element.createElement(Fa,{label:pe("Button Typography","digiblocks"),value:he,onChange:Z=>e({buttonTypography:Z}),defaults:{fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em"}}),np=()=>wp.element.createElement(Fa,{label:pe("Badge Typography","digiblocks"),value:We,onChange:Z=>e({badgeTypography:Z}),defaults:{fontSize:{desktop:.7,tablet:.7,mobile:.7},fontSizeUnit:"rem",fontWeight:"700",textTransform:"uppercase",lineHeight:{desktop:1.2,tablet:1.2,mobile:1.2},lineHeightUnit:"em",letterSpacing:{desktop:.05,tablet:.05,mobile:.05},letterSpacingUnit:"em"}}),sp=()=>{switch(F){case"options":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:"components-panel__body is-opened"},wp.element.createElement("div",{style:{marginBottom:"2rem"}},wp.element.createElement(Pd,{label:pe("Icon Source","digiblocks"),value:l||"library",onChange:Z=>e({iconSource:Z}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(Ua,{value:"library",label:pe("Library","digiblocks")}),wp.element.createElement(Ua,{value:"custom",label:pe("Custom","digiblocks")})),l==="library"&&wp.element.createElement(wp.element.Fragment,null,po?wp.element.createElement(Yt,{label:pe("Select Icon","digiblocks"),value:y,onChange:Ae}):wp.element.createElement("div",{style:{textAlign:"center",padding:"20px 0"}},wp.element.createElement(Jm,null),wp.element.createElement("p",null,pe("Loading icon selector...","digiblocks"))),y&&po&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{style:{marginTop:"15px",marginBottom:"15px",padding:"10px",background:"#f0f0f1",borderRadius:"3px"}},wp.element.createElement("p",{style:{margin:"0 0 5px 0"}},wp.element.createElement("strong",null,pe("Selected Icon:","digiblocks"))," ",y.name),wp.element.createElement("p",{style:{margin:"0 0 5px 0"}},wp.element.createElement("strong",null,pe("Style:","digiblocks"))," ",y.style),y.categories&&y.categories.length>0&&wp.element.createElement("p",{style:{margin:"0"}},wp.element.createElement("strong",null,pe("Categories:","digiblocks"))," ",y.categories.join(", "))))),l==="custom"&&wp.element.createElement("div",{style:{marginTop:"15px"}},wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"custom-svg-input"},pe("Custom SVG Code","digiblocks")),wp.element.createElement("textarea",{id:"custom-svg-input",className:"components-textarea-control__input",value:_||"",onChange:Z=>{let Oe=Z.target.value;e({customSvg:Oe,iconValue:{id:"custom-svg",name:"Custom SVG",svg:Oe,style:"custom",categories:["custom"]}})},placeholder:pe("Paste your SVG code here...","digiblocks"),rows:10,style:{width:"100%",marginTop:"8px"}}),wp.element.createElement("p",{className:"components-base-control__help"},pe("Paste your SVG code here. Make sure it only contains valid SVG markup. For security reasons, scripts and external references will be removed.","digiblocks"))),_&&wp.element.createElement("div",{style:{marginTop:"15px",marginBottom:"15px"}},wp.element.createElement("p",null,wp.element.createElement("strong",null,pe("Preview:","digiblocks"))),wp.element.createElement("div",{style:{padding:"20px",background:"#f0f0f1",borderRadius:"3px",display:"flex",justifyContent:"center",alignItems:"center"}},wp.element.createElement("div",{className:"digiblocks-custom-svg-preview",style:{width:"50px",height:"50px"},dangerouslySetInnerHTML:{__html:_}}))))),wp.element.createElement(Id,{label:pe("Alignment","digiblocks"),value:$,onChange:Z=>e({align:Z}),options:[{label:pe("Left","digiblocks"),value:"flex-start"},{label:pe("Center","digiblocks"),value:"center"},{label:pe("Right","digiblocks"),value:"flex-end"}]}),wp.element.createElement(Id,{label:pe("Icon Layout","digiblocks"),value:P,onChange:Z=>e({iconLayout:Z}),options:[{label:pe("Before","digiblocks"),value:"before"},{label:pe("Above","digiblocks"),value:"above"},{label:pe("After","digiblocks"),value:"after"}]}),wp.element.createElement(Rs,{label:pe("Gap","digiblocks"),value:h,onChange:Z=>e({iconContentGap:Z}),units:[{label:"px",value:"px"},{label:"%",value:"%"},{label:"em",value:"em"},{label:"rem",value:"rem"}],defaultUnit:"px",min:0,max:100,step:1,defaultValues:{desktop:20,tablet:15,mobile:10}}),wp.element.createElement(qi,{label:pe("Show Title","digiblocks"),checked:s,onChange:Z=>e({showTitle:Z}),__nextHasNoMarginBottom:!0}),wp.element.createElement(qi,{label:pe("Show Description","digiblocks"),checked:z,onChange:Z=>e({showContent:Z}),__nextHasNoMarginBottom:!0}),wp.element.createElement(qi,{label:pe("Show Badge","digiblocks"),checked:S,onChange:Z=>e({showBadge:Z}),__nextHasNoMarginBottom:!0}),S&&wp.element.createElement(Dd,{label:pe("Badge Text","digiblocks"),value:C,onChange:Z=>e({badgeText:Z}),placeholder:pe("Popular","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),Ue?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Qm,{key:"link-control",value:{url:Be,opensInNewTab:Xe,rel:q},settings:[{id:"opensInNewTab",title:pe("Open in new tab","digiblocks")},{id:"rel",title:pe("Add noopener noreferrer","digiblocks")}],onChange:Z=>{e({linkUrl:Z.url,linkOpenInNewTab:Z.opensInNewTab,linkRel:Z.rel})},onRemove:()=>{e({linkEnabled:!1,linkUrl:"",linkOpenInNewTab:!1,linkRel:""})},suggestionsQuery:{type:"post",subtype:"any"},forceIsEditingLink:!Be}),wp.element.createElement("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},wp.element.createElement(Pd,{label:pe("Link Type","digiblocks"),value:ee,onChange:Z=>e({linkType:Z}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(Ua,{value:"box",label:pe("Box","digiblocks")}),wp.element.createElement(Ua,{value:"button",label:pe("Button","digiblocks")}))),ee==="button"&&wp.element.createElement(Dd,{label:pe("Button Text","digiblocks"),value:ye,onChange:Z=>e({buttonText:Z}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})):wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("button",{className:"components-button width-full is-primary",onClick:()=>e({linkEnabled:!0})},pe("Add Link","digiblocks"))))));case"style":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Xo,{tab:"style",name:"colors",title:pe("Colors","digiblocks"),initialOpen:!0},wp.element.createElement(ja,{className:"digiblocks-control-tabs",activeClass:"active-tab",tabs:Bo},Z=>tp(Z.name))),wp.element.createElement(Xo,{tab:"style",name:"typo",title:pe("Typography","digiblocks"),initialOpen:!1},wp.element.createElement(Fa,{label:pe("Title Typography","digiblocks"),value:J,onChange:Z=>e({titleTypography:Z}),defaults:{fontSize:{desktop:24,tablet:22,mobile:20},fontSizeUnit:"px",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em"}}),wp.element.createElement(Fa,{label:pe("Content Typography","digiblocks"),value:me,onChange:Z=>e({contentTypography:Z}),defaults:{fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em"}}),Ue&&ee==="button"&&ap(),S&&np()),wp.element.createElement(Xo,{tab:"style",name:"icon",title:pe("Icon","digiblocks"),initialOpen:!1},wp.element.createElement(Rs,{label:pe("Icon Width","digiblocks"),value:u,onChange:Z=>e({iconSize:Z}),units:[{label:"px",value:"px"},{label:"%",value:"%"},{label:"em",value:"em"},{label:"rem",value:"rem"}],defaultUnit:"px",min:0,max:vo(u?.[g]?.unit),step:zo(u?.[g]?.unit)}),wp.element.createElement(Rs,{label:pe("Icon Height","digiblocks"),value:v,onChange:Z=>e({iconHeight:Z}),units:[{label:"px",value:"px"},{label:"%",value:"%"},{label:"em",value:"em"},{label:"rem",value:"rem"}],defaultUnit:"px",min:0,max:vo(v?.[g]?.unit),step:zo(v?.[g]?.unit)}),wp.element.createElement(ja,{className:"digiblocks-control-tabs",activeClass:"active-tab",tabs:Bo},Z=>op(Z.name))),wp.element.createElement(Xo,{tab:"style",name:"box-style",title:pe("Box Style","digiblocks"),initialOpen:!1},wp.element.createElement(Wi,{label:pe("Border Style","digiblocks"),value:De||"default",options:ho,onChange:Z=>{Z!=="default"&&Z!=="none"&&(De==="default"||De==="none"||!De)&&(!r||Object.keys(r).length===0)&&e({borderWidth:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:1,right:1,bottom:1,left:1,unit:"px"},mobile:{top:1,right:1,bottom:1,left:1,unit:"px"}}}),e({borderStyle:Z})},__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),De&&De!=="default"&&De!=="none"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Wo,{title:pe("Border Color","digiblocks"),enableAlpha:!0,colorSettings:[{value:xe,onChange:Z=>e({borderColor:Z}),label:pe("Border Color","digiblocks")}]}),wp.element.createElement(No,{label:pe("Border Width","digiblocks")},wp.element.createElement(Ho,{values:r&&r[g]?r[g]:{top:1,right:1,bottom:1,left:1,unit:"px"},onChange:Z=>e({borderWidth:{...r,[g]:Z}})}))),wp.element.createElement(No,{label:pe("Border Radius","digiblocks")},wp.element.createElement(Ho,{values:D&&D[g]?D[g]:{top:0,right:0,bottom:0,left:0,unit:"px"},onChange:Z=>e({borderRadius:{...D,[g]:Z}}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]})),wp.element.createElement(Wi,{label:pe("Hover Effect","digiblocks"),value:Se,options:fo,onChange:Z=>e({hoverEffect:Z}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),Ue&&ee==="button"&&wp.element.createElement(Xo,{tab:"style",name:"button",title:pe("Button","digiblocks"),initialOpen:!1},wp.element.createElement(ja,{className:"digiblocks-control-tabs",activeClass:"active-tab",tabs:Bo},Z=>ip(Z.name))),S&&wp.element.createElement(Xo,{tab:"style",name:"badge",title:pe("Badge","digiblocks"),initialOpen:!1},wp.element.createElement(ja,{className:"digiblocks-control-tabs",activeClass:"active-tab",tabs:Bo},Z=>lp(Z.name))),wp.element.createElement(Xo,{tab:"style",name:"shadow",title:pe("Box Shadow","digiblocks"),initialOpen:!1},wp.element.createElement(Ps,{normalValue:te,hoverValue:to,onNormalChange:Z=>e({boxShadow:Z}),onHoverChange:Z=>e({boxShadowHover:Z})})),wp.element.createElement(Xo,{tab:"style",name:"spacing",title:pe("Spacing","digiblocks"),initialOpen:!1},wp.element.createElement(No,{label:pe("Padding","digiblocks")},wp.element.createElement(Ho,{values:oe[g],onChange:Z=>e({padding:{...oe,[g]:Z}})})),wp.element.createElement(No,{label:pe("Margin","digiblocks")},wp.element.createElement(Ho,{values:fe[g],onChange:Z=>e({margin:{...fe,[g]:Z}})}))));case"advanced":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Xo,{tab:"advanced",name:"animation",title:pe("Animation","digiblocks"),initialOpen:!0},wp.element.createElement(Wi,{label:pe("Animation Effect","digiblocks"),value:je,options:mo,onChange:Z=>e({animation:Z}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),je&&je!=="none"&&wp.element.createElement("div",{style:{marginTop:"10px"}},wp.element.createElement(Ym,{variant:"secondary",isSecondary:!0,onClick:uo,style:{width:"100%"}},pe("Preview Animation","digiblocks")))),wp.element.createElement(Xo,{tab:"advanced",name:"visibility",title:pe("Visibility","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control__help",style:{padding:"12px",backgroundColor:"#f0f6fc",border:"1px solid #c3ddfd",borderRadius:"4px",marginBottom:"16px"}},wp.element.createElement("strong",null,pe("Editor Note:","digiblocks")),wp.element.createElement("br",null),pe("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.","digiblocks")),wp.element.createElement(qi,{label:pe("Hide on Desktop","digiblocks"),checked:a.desktop,onChange:Z=>e({visibility:{...a,desktop:Z}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(qi,{label:pe("Hide on Tablet","digiblocks"),checked:a.tablet,onChange:Z=>e({visibility:{...a,tablet:Z}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(qi,{label:pe("Hide on Mobile","digiblocks"),checked:a.mobile,onChange:Z=>e({visibility:{...a,mobile:Z}}),__nextHasNoMarginBottom:!0})),wp.element.createElement(Xo,{tab:"advanced",name:"additional",title:pe("Additional","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control html-anchor-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"html-anchor"},pe("HTML anchor","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"html-anchor",value:O||"",onChange:Z=>e({anchor:Z.target.value}),"aria-describedby":"html-anchor-help",autoCapitalize:"none",autoComplete:"off"})),wp.element.createElement("p",{id:"html-anchor-help",className:"components-base-control__help"},pe(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`,"digiblocks")," ",wp.element.createElement("a",{className:"components-external-link",href:"https://wordpress.org/documentation/article/page-jumps/",target:"_blank",rel:"external noreferrer noopener"},wp.element.createElement("span",{className:"components-external-link__contents"},pe("Learn more about anchors","digiblocks")),wp.element.createElement("span",{className:"components-external-link__icon","aria-label":"(opens in a new tab)"},"\u2197")))),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"additional-css-classes"},pe("Additional CSS class(es)","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"additional-css-classes",value:le||"",onChange:Z=>e({customClasses:Z.target.value}),"aria-describedby":"additional-css-classes-help",autoComplete:"off"})),wp.element.createElement("p",{id:"additional-css-classes-help",className:"components-base-control__help"},pe("Separate multiple classes with spaces.","digiblocks")))));default:return null}},rp=qm({className:`digiblocks-icon-box ${o} ${le||""}`,id:O||null});return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Gm,null,wp.element.createElement(Xm,{tabs:Lo,activeTab:F,onSelect:Fe},sp())),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:$o()}}),wp.element.createElement("div",{...rp},Nn(),Tn(),wp.element.createElement("div",{className:"digiblocks-icon-box-content"},s&&wp.element.createElement(Hs,{tagName:"h3",className:"digiblocks-icon-box-title",value:w,onChange:Z=>e({title:Z}),placeholder:pe("Feature Title","digiblocks")}),z&&wp.element.createElement(Hs,{tagName:"p",className:"digiblocks-icon-box-text",value:T,onChange:Z=>e({content:Z}),placeholder:pe("Add your feature description here.","digiblocks")}),Hn())))},Ld=Am;var{useBlockProps:eh,RichText:Is}=window.wp.blockEditor,oh=({attributes:ie})=>{let{id:e,iconSource:K,customSvg:o,iconValue:O,title:a,showTitle:le,showContent:l,showBadge:_,badgeText:y,content:$,animation:P,hoverEffect:h,anchor:s,customClasses:z,linkEnabled:S,linkType:C,linkUrl:w,linkOpenInNewTab:T,linkRel:U,buttonText:L}=ie,V=["digiblocks-icon-box",e,P!=="none"?`animate-${P}`:"",h!=="none"?`has-hover-${h}`:"",z||""].filter(Boolean).join(" "),Q=eh.save({className:V,id:s||null}),be=()=>K==="library"&&O&&O.svg&&O.svg.trim()!==""?wp.element.createElement("div",{className:"digiblocks-icon-box-icon"},wp.element.createElement("span",{dangerouslySetInnerHTML:{__html:O.svg}})):K==="custom"&&o&&o.trim()!==""?wp.element.createElement("div",{className:"digiblocks-icon-box-icon"},wp.element.createElement("span",{dangerouslySetInnerHTML:{__html:o}})):null,N=()=>_?wp.element.createElement("span",{className:"digiblocks-icon-box-badge"},y||"Popular"):null,u=()=>!S||C!=="button"?null:wp.element.createElement("div",{className:"digiblocks-button-wrapper"},wp.element.createElement("a",{className:"digiblocks-button",href:w||"#",target:T?"_blank":"_self",rel:T?U||"noopener noreferrer":U},wp.element.createElement(Is.Content,{tagName:"span",value:L}))),v=wp.element.createElement(wp.element.Fragment,null,N(),be(),wp.element.createElement("div",{className:"digiblocks-icon-box-content"},le!==!1&&wp.element.createElement(Is.Content,{tagName:"h3",className:"digiblocks-icon-box-title",value:a}),l!==!1&&wp.element.createElement(Is.Content,{tagName:"p",className:"digiblocks-icon-box-text",value:$}),u()));return S&&C==="box"&&w?wp.element.createElement("a",{...Q,href:w,target:T?"_blank":"_self",rel:T?U||"noopener noreferrer":U},v):wp.element.createElement("div",{...Q},v)},Od=oh;var{__:ut}=window.wp.i18n,{registerBlockType:th}=window.wp.blocks,{getBlockActiveStatus:ih}=window.wp.digiBlocks;th("digiblocks/icon-box",{apiVersion:2,title:digiBlocksData.blocks["icon-box"].title,category:"digiblocks",icon:{src:()=>{let{viewbox:ie,path:e}=digiBlocksData.blocks["icon-box"].icon;return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${ie}`,className:"digiblocks-editor-icons"},wp.element.createElement("path",{d:e}))}},description:digiBlocksData.blocks["icon-box"].description,keywords:[ut("icon","digiblocks"),ut("box","digiblocks"),ut("feature","digiblocks"),ut("service","digiblocks")],supports:{inserter:!!ih("icon-box"),html:!1,className:!1,customClassName:!1,anchor:!1},attributes:{id:{type:"string",default:""},anchor:{type:"string",default:""},visibility:{type:"object",default:{desktop:!1,tablet:!1,mobile:!1}},customClasses:{type:"string",default:""},iconSource:{type:"string",default:"library"},customSvg:{type:"string",default:""},iconValue:{type:"object",default:null},align:{type:"object",default:{desktop:"center",tablet:"center",mobile:"center"}},iconLayout:{type:"object",default:{desktop:"above",tablet:"above",mobile:"above"}},iconContentGap:{type:"object",default:{desktop:{value:20,unit:"px"},tablet:{value:15,unit:"px"},mobile:{value:10,unit:"px"}}},showTitle:{type:"boolean",default:!0},showContent:{type:"boolean",default:!0},showBadge:{type:"boolean",default:!1},badgeText:{type:"string",default:ut("Popular","digiblocks")},title:{type:"string",default:ut("Feature Title","digiblocks")},content:{type:"string",default:ut("Add your feature description here. Explain what makes this feature special.","digiblocks")},iconColor:{type:"string",default:"#1e73be"},titleColor:{type:"string",default:"#333333"},titleHoverColor:{type:"string",default:""},textColor:{type:"string",default:"#666666"},textHoverColor:{type:"string",default:""},backgroundColor:{type:"string",default:"#ffffff"},backgroundHoverColor:{type:"string",default:""},iconBackgroundColor:{type:"string",default:"transparent"},iconBorderStyle:{type:"string",default:"default"},iconBorderWidth:{type:"object",default:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},iconBorderRadius:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},iconBorderColor:{type:"string",default:"#e0e0e0"},iconPadding:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},iconMargin:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},iconHoverColor:{type:"string",default:""},iconHoverBackgroundColor:{type:"string",default:""},iconHoverBorderColor:{type:"string",default:""},linkEnabled:{type:"boolean",default:!1},linkType:{type:"string",default:"box"},linkUrl:{type:"string",default:""},linkOpenInNewTab:{type:"boolean",default:!1},linkRel:{type:"string",default:""},buttonText:{type:"string",default:ut("Learn More","digiblocks")},buttonBackgroundColor:{type:"string",default:"#1e73be"},buttonBackgroundHoverColor:{type:"string",default:"#135e9e"},buttonTextColor:{type:"string",default:"#ffffff"},buttonTextHoverColor:{type:"string",default:"#ffffff"},buttonBorderStyle:{type:"string",default:"default"},buttonBorderWidth:{type:"object",default:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},buttonBorderRadius:{type:"object",default:{desktop:{top:4,right:4,bottom:4,left:4,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},buttonBorderColor:{type:"string",default:""},buttonBorderHoverColor:{type:"string",default:""},buttonBoxShadow:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},buttonBoxShadowHover:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},buttonPadding:{type:"object",default:{desktop:{top:10,right:20,bottom:10,left:20,unit:"px"},tablet:{top:8,right:16,bottom:8,left:16,unit:"px"},mobile:{top:6,right:12,bottom:6,left:12,unit:"px"}}},buttonMargin:{type:"object",default:{desktop:{top:15,right:0,bottom:0,left:0,unit:"px"},tablet:{top:10,right:0,bottom:0,left:0,unit:"px"},mobile:{top:8,right:0,bottom:0,left:0,unit:"px"}}},buttonTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",fontWeight:"500",fontStyle:"normal",textTransform:"",textDecoration:"",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}},badgeBackgroundColor:{type:"string",default:"#f59e0b"},badgeBackgroundHoverColor:{type:"string",default:""},badgeTextColor:{type:"string",default:"#ffffff"},badgeTextHoverColor:{type:"string",default:""},badgeTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:.7,tablet:.7,mobile:.7},fontSizeUnit:"rem",fontWeight:"700",fontStyle:"normal",textTransform:"uppercase",textDecoration:"",lineHeight:{desktop:1.2,tablet:1.2,mobile:1.2},lineHeightUnit:"em",letterSpacing:{desktop:.05,tablet:.05,mobile:.05},letterSpacingUnit:"em"}},badgePadding:{type:"object",default:{desktop:{top:.25,right:.5,bottom:.25,left:.5,unit:"rem"},tablet:{top:"",right:"",bottom:"",left:"",unit:"rem"},mobile:{top:"",right:"",bottom:"",left:"",unit:"rem"}}},badgeBorderStyle:{type:"string",default:"none"},badgeBorderWidth:{type:"object",default:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},badgeBorderRadius:{type:"object",default:{desktop:{top:4,right:4,bottom:4,left:4,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},badgeBorderColor:{type:"string",default:"#e0e0e0"},badgeBorderHoverColor:{type:"string",default:""},badgeBoxShadow:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},badgeBoxShadowHover:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},iconSize:{type:"object",default:{desktop:{value:"48",unit:"px"},tablet:{value:"",unit:"px"},mobile:{value:"",unit:"px"}}},iconHeight:{type:"object",default:{desktop:{value:"",unit:"px"},tablet:{value:"",unit:"px"},mobile:{value:"",unit:"px"}}},titleTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:22,tablet:20,mobile:18},fontSizeUnit:"px",fontWeight:"",fontStyle:"normal",textTransform:"",textDecoration:"",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}},contentTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",fontWeight:"",fontStyle:"normal",textTransform:"",textDecoration:"",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}},padding:{type:"object",default:{desktop:{top:30,right:30,bottom:30,left:30,unit:"px"},tablet:{top:25,right:25,bottom:25,left:25,unit:"px"},mobile:{top:20,right:20,bottom:20,left:20,unit:"px"}}},margin:{type:"object",default:{desktop:{top:0,right:0,bottom:30,left:0,unit:"px"},tablet:{top:0,right:0,bottom:25,left:0,unit:"px"},mobile:{top:0,right:0,bottom:20,left:0,unit:"px"}}},animation:{type:"string",default:"none"},borderStyle:{type:"string",default:"default"},borderRadius:{type:"object",default:{desktop:{top:8,right:8,bottom:8,left:8,unit:"px"},tablet:{top:8,right:8,bottom:8,left:8,unit:"px"},mobile:{top:8,right:8,bottom:8,left:8,unit:"px"}}},borderWidth:{type:"object",default:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:1,right:1,bottom:1,left:1,unit:"px"},mobile:{top:1,right:1,bottom:1,left:1,unit:"px"}}},borderColor:{type:"string",default:"#e0e0e0"},borderHoverColor:{type:"string",default:""},hoverEffect:{type:"string",default:"none"},boxShadow:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},boxShadowHover:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}}},example:{attributes:{iconValue:{id:"star",name:"Star",svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="1em" height="1em"><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"></path></svg>',style:"solid",categories:["design","lifestyle-and-hobbies","social"]},title:ut("Feature Title","digiblocks"),content:ut("Add your feature description here. Explain what makes this feature special.","digiblocks"),iconColor:"#1e73be",backgroundColor:"#ffffff"},viewportWidth:400},edit:Ld,save:Od});var{__:Ve}=window.wp.i18n,{useBlockProps:lh,RichText:ah,InspectorControls:nh,PanelColorSettings:Ea,LinkControl:sh}=window.wp.blockEditor,{SelectControl:Ls,RangeControl:Os,TabPanel:js,Button:Tt,ToggleControl:Us,Modal:jd,Tooltip:Gi,__experimentalToggleGroupControl:Ml,__experimentalToggleGroupControlOption:Ao}=window.wp.components,{useState:pi,useEffect:Vs,useRef:rh}=window.wp.element,{useBlockId:ch,getDimensionCSS:Wa,animations:Fs,animationPreview:Ud}=digi.utils,{tabIcons:Es}=digi.icons,{ResponsiveControl:bi,DimensionControl:qa,TypographyControl:dh,BoxShadowControl:gh,CustomTabPanel:ph,TabPanelBody:Nt,FontAwesomeControl:av}=digi.components,bh=({attributes:ie,setAttributes:e,clientId:K})=>{let{id:o,anchor:O,visibility:a,customClasses:le,items:l,defaultIconSource:_,defaultCustomSvg:y,defaultIcon:$,contentTypography:P,listLayout:h,listAlign:s,iconPosition:z,iconSize:S,iconSpace:C,itemSpace:w,iconColor:T,iconHoverColor:U,textColor:L,textHoverColor:V,animation:Q,padding:be,margin:N,borderStyle:u,borderWidth:v,borderRadius:I,borderColor:ne,borderHoverColor:Me,boxShadow:Le,boxShadowHover:X,backgroundColor:H,backgroundHoverColor:Y,hoverEffect:W}=ie;ch(o,K,e);let[ce,ue]=pi(window.digi.responsiveState.activeDevice),[A,J]=pi(!1),[me,oe]=pi(!1),[fe,je]=pi(null),[te,to]=pi(!1);Vs(()=>window.digi.responsiveState.subscribe(m=>{ue(m)}),[]);let[De,r]=pi(()=>{if(window.digi.uiState){let x=window.digi.uiState.getActiveTab(K);if(x)return x}return"options"}),[D,xe]=pi(!1);Vs(()=>{let x=()=>window.digi&&window.digi.components&&window.digi.components.FontAwesomeControl?(xe(!0),!0):!1;if(!x()){let m=setTimeout(()=>{x()&&clearTimeout(m)},500);return()=>clearTimeout(m)}},[]);let Pe=rh(null);Vs(()=>{if(Q&&Q!=="none"){let x=setTimeout(()=>{Ud(o,Q,Fs,Pe)},100);return()=>clearTimeout(x)}},[Q]);let Se=()=>{Ud(o,Q,Fs,Pe)},Ue=[{label:Ve("Default","digiblocks"),value:"default"},{label:Ve("None","digiblocks"),value:"none"},{label:Ve("Solid","digiblocks"),value:"solid"},{label:Ve("Dotted","digiblocks"),value:"dotted"},{label:Ve("Dashed","digiblocks"),value:"dashed"},{label:Ve("Double","digiblocks"),value:"double"},{label:Ve("Groove","digiblocks"),value:"groove"},{label:Ve("Inset","digiblocks"),value:"inset"},{label:Ve("Outset","digiblocks"),value:"outset"},{label:Ve("Ridge","digiblocks"),value:"ridge"}],ee=[{label:Ve("None","digiblocks"),value:"none"},{label:Ve("Lift","digiblocks"),value:"lift"},{label:Ve("Scale","digiblocks"),value:"scale"},{label:Ve("Glow","digiblocks"),value:"glow"}],Be=[{label:Ve("None","digiblocks"),value:"none"},...Object.keys(Fs).map(x=>({label:x.replace(/-/g," ").replace(/\b\w/g,m=>m.toUpperCase()),value:x}))],Xe=[{name:"options",title:Ve("Options","digiblocks"),icon:Es.optionsIcon},{name:"style",title:Ve("Style","digiblocks"),icon:Es.styleIcon},{name:"advanced",title:Ve("Advanced","digiblocks"),icon:Es.advancedIcon}],q=[{name:"normal",title:Ve("Normal","digiblocks"),className:"digiblocks-tab-1 normal"},{name:"hover",title:Ve("Hover","digiblocks"),className:"digiblocks-tab-2 hover"}],ye=()=>{let x=[...l];x.push({id:`item-${Date.now()}`,content:Ve("New list item","digiblocks"),icon:{...$},linkUrl:"",linkOpenInNewTab:!1,linkRel:""}),e({items:x})},qe=x=>{let m=[...l];m.splice(x,1),e({items:m})},E=(x,m,he)=>{let j=[...l];j[x][m]=he,e({items:j})},se=x=>{if(x===0)return;let m=[...l];[m[x-1],m[x]]=[m[x],m[x-1]],e({items:m})},B=x=>{if(x===l.length-1)return;let m=[...l];[m[x],m[x+1]]=[m[x+1],m[x]],e({items:m})},c=x=>{let m=[...l],he={...l[x],id:`item-${Date.now()}`};m.splice(x+1,0,he),e({items:m})},ge=(x,m)=>{let he=[...l];he[x].icon=m,e({items:he})},M=D?window.digi.components.FontAwesomeControl:null,k=()=>{let x=window.digi.responsiveState.activeDevice,m="";u&&u!=="default"&&u!=="none"?m=`
                border-style: ${u};
                border-color: ${ne||"#e0e0e0"};
				${Wa(v,"border-width",x)}
				${Wa(I,"border-radius",x)}
			`:m="border: none;";let he="box-shadow: none;";Le&&Le.enable&&(he=`box-shadow: ${Le.position==="inset"?"inset ":""}${Le.horizontal}px ${Le.vertical}px ${Le.blur}px ${Le.spread}px ${Le.color};`);let j=`${Wa(be,"padding",x)}`,Ne=`${Wa(N,"margin",x)}`,f="";P&&(P.fontFamily&&(f+=`font-family: ${P.fontFamily};`),P.fontSize&&P.fontSize[x]&&(f+=`font-size: ${P.fontSize[x]}${P.fontSizeUnit||"px"};`),P.fontWeight&&(f+=`font-weight: ${P.fontWeight};`),P.fontStyle&&(f+=`font-style: ${P.fontStyle};`),P.textTransform&&(f+=`text-transform: ${P.textTransform};`),P.textDecoration&&(f+=`text-decoration: ${P.textDecoration};`),P.lineHeight&&P.lineHeight[x]&&(f+=`line-height: ${P.lineHeight[x]}${P.lineHeightUnit||"em"};`),P.letterSpacing&&P.letterSpacing[x]&&(f+=`letter-spacing: ${P.letterSpacing[x]}${P.letterSpacingUnit||"px"};`));let Ge="";if(X&&X.enable){let We=X.position==="inset"?"inset ":"";Ge+=`box-shadow: ${We}${X.horizontal}px ${X.vertical}px ${X.blur}px ${X.spread}px ${X.color};`}return W==="lift"?Ge+="transform: translateY(-10px);":W==="scale"?Ge+="transform: scale(1.05);":W==="glow"&&(Ge+="filter: brightness(1.1);"),`
            /* Icon List Block - ${o} */
            .${o} {
                ${j}
                ${Ne}
                ${m}
                ${he}
                ${H?`background-color: ${H};`:""}
                transition: all 0.3s ease;
            }
            
            .${o}:hover {
                ${Y?`background-color: ${Y};`:""}
                ${Me?`border-color: ${Me};`:""}
                ${Ge}
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
				flex-direction: ${h==="horizontal"?"row":"column"};
				flex-wrap: wrap;
				gap: ${w[x]!==void 0?w[x]:16}px;
            }
            
            /* List item */
            .${o} .digiblocks-icon-list-item {
                display: inline-flex;
                align-items: center;
				gap: ${C[x]!==void 0?C[x]:12}px;
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
                color: ${T||"#1e73be"};
                transition: color 0.3s ease;
            }
            
            .${o} .digiblocks-icon-list-icon span {
                display: flex;
            }
            
            .${o} .digiblocks-icon-list-icon svg {
                width: ${S[x]!==void 0?S[x]:24}px;
                height: ${S[x]!==void 0?S[x]:24}px;
                fill: currentColor;
            }
            
            /* Text content */
            .${o} .digiblocks-icon-list-content {
                color: ${L||"#333333"};
                ${f}
                transition: color 0.3s ease;
            }
            
            /* Hover states */
            .${o} .digiblocks-icon-list-item:hover .digiblocks-icon-list-icon {
                color: ${U};
            }
            
            .${o} .digiblocks-icon-list-item:hover .digiblocks-icon-list-content {
                color: ${V};
            }

            .${o} .digiblocks-icon-list-child {
                display: inline-flex;
                ${z==="after"?"flex-direction: row-reverse;":""}
				gap: ${C[x]!==void 0?C[x]:12}px;
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
			${a.desktop?`
				@media (min-width: 992px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${a.tablet?`
				@media (min-width: 768px) and (max-width: 991px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${a.mobile?`
				@media (max-width: 767px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}
        `},G=()=>{switch(De){case"options":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Nt,{tab:"options",name:"list-items",title:Ve("List Items","digiblocks"),initialOpen:!0},wp.element.createElement(Ml,{label:Ve("Default Icon Source","digiblocks"),value:_||"library",onChange:x=>e({defaultIconSource:x}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(Ao,{value:"library",label:Ve("Library","digiblocks")}),wp.element.createElement(Ao,{value:"custom",label:Ve("Custom","digiblocks")})),(!_||_==="library")&&wp.element.createElement(wp.element.Fragment,null,D?wp.element.createElement(M,{label:Ve("Select Icon","digiblocks"),value:$,onChange:x=>e({defaultIcon:x})}):wp.element.createElement("div",{style:{textAlign:"center",padding:"20px 0"}},wp.element.createElement("div",{className:"components-spinner"}),wp.element.createElement("p",null,Ve("Loading icon selector...","digiblocks")))),_==="custom"&&wp.element.createElement("div",{style:{marginTop:"15px"}},wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"default-custom-svg-input"},Ve("Custom SVG Code","digiblocks")),wp.element.createElement("textarea",{id:"default-custom-svg-input",className:"components-textarea-control__input",value:y||"",onChange:x=>{let m=x.target.value;e({defaultCustomSvg:m,defaultIcon:{id:"custom-svg",name:"Custom SVG",svg:m,style:"custom",categories:["custom"]}})},placeholder:Ve("Paste your SVG code here...","digiblocks"),rows:6,style:{width:"100%",marginTop:"8px"}}),wp.element.createElement("p",{className:"components-base-control__help"},Ve("Paste your SVG code here. Make sure it only contains valid SVG markup.","digiblocks"))),y&&wp.element.createElement("div",{style:{marginTop:"15px",marginBottom:"15px"}},wp.element.createElement("p",null,wp.element.createElement("strong",null,Ve("Preview:","digiblocks"))),wp.element.createElement("div",{style:{padding:"20px",background:"#f0f0f1",borderRadius:"3px",display:"flex",justifyContent:"center",alignItems:"center"}},wp.element.createElement("div",{style:{width:"50px",height:"50px"},dangerouslySetInnerHTML:{__html:y}})))),wp.element.createElement(Ml,{label:Ve("List Layout","digiblocks"),value:h,onChange:x=>e({listLayout:x}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(Ao,{value:"horizontal",label:Ve("Horizontal","digiblocks")}),wp.element.createElement(Ao,{value:"vertical",label:Ve("Vertical","digiblocks")})),wp.element.createElement(Ml,{label:Ve("List Alignment","digiblocks"),value:s,onChange:x=>e({listAlign:x}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(Ao,{value:"left",label:Ve("Left","digiblocks")}),wp.element.createElement(Ao,{value:"center",label:Ve("Center","digiblocks")}),wp.element.createElement(Ao,{value:"right",label:Ve("Right","digiblocks")})),wp.element.createElement(Ml,{label:Ve("Icon Position","digiblocks"),value:z,onChange:x=>e({iconPosition:x}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(Ao,{value:"before",label:Ve("Before","digiblocks")}),wp.element.createElement(Ao,{value:"after",label:Ve("After","digiblocks")})),wp.element.createElement(bi,{label:Ve("Item Spacing","digiblocks")},wp.element.createElement(Os,{value:w[ce],onChange:x=>e({itemSpace:{...w,[ce]:x}}),min:0,max:100,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(bi,{label:Ve("Icon Spacing","digiblocks")},wp.element.createElement(Os,{value:C[ce],onChange:x=>e({iconSpace:{...C,[ce]:x}}),min:0,max:50,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}))));case"style":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Nt,{tab:"style",name:"icon-style",title:Ve("Icon Style","digiblocks"),initialOpen:!0},wp.element.createElement(bi,{label:Ve("Icon Size","digiblocks")},wp.element.createElement(Os,{value:S[ce],onChange:x=>e({iconSize:{...S,[ce]:x}}),min:8,max:100,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(js,{className:"digiblocks-control-tabs",activeClass:"active-tab",tabs:q},x=>wp.element.createElement(Ea,{title:x.name==="normal"?Ve("Icon Colors","digiblocks"):Ve("Icon Hover Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:x.name==="normal"?T:U,onChange:m=>e(x.name==="normal"?{iconColor:m}:{iconHoverColor:m}),label:Ve("Icon Color","digiblocks")}]}))),wp.element.createElement(Nt,{tab:"style",name:"text-style",title:Ve("Text Style","digiblocks"),initialOpen:!1},wp.element.createElement(js,{className:"digiblocks-control-tabs",activeClass:"active-tab",tabs:q},x=>wp.element.createElement(Ea,{title:x.name==="normal"?Ve("Text Colors","digiblocks"):Ve("Text Hover Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:x.name==="normal"?L:V,onChange:m=>e(x.name==="normal"?{textColor:m}:{textHoverColor:m}),label:Ve("Text Color","digiblocks")}]})),wp.element.createElement(dh,{label:Ve("Typography","digiblocks"),value:P,onChange:x=>e({contentTypography:x}),defaults:{fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em"}})),wp.element.createElement(Nt,{tab:"style",name:"box-style",title:Ve("Box Style","digiblocks"),initialOpen:!1},wp.element.createElement(Ls,{label:Ve("Border Style","digiblocks"),value:u||"default",options:Ue,onChange:x=>{e({borderStyle:x})},__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),u&&u!=="default"&&u!=="none"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Ea,{title:Ve("Border Colors","digiblocks"),enableAlpha:!0,colorSettings:[{value:ne,onChange:x=>e({borderColor:x}),label:Ve("Border Color","digiblocks")},{value:Me,onChange:x=>e({borderHoverColor:x}),label:Ve("Border Hover Color","digiblocks")}]}),wp.element.createElement(bi,{label:Ve("Border Width","digiblocks")},wp.element.createElement(qa,{values:v[ce],onChange:x=>e({borderWidth:{...v,[ce]:x}})})),wp.element.createElement(bi,{label:Ve("Border Radius","digiblocks")},wp.element.createElement(qa,{values:I[ce],onChange:x=>e({borderRadius:{...I,[ce]:x}}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]}))),wp.element.createElement(js,{className:"digiblocks-control-tabs",activeClass:"active-tab",tabs:q},x=>wp.element.createElement(Ea,{title:x.name==="normal"?Ve("Background Colors","digiblocks"):Ve("Background Hover Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:x.name==="normal"?H:Y,onChange:m=>e(x.name==="normal"?{backgroundColor:m}:{backgroundHoverColor:m}),label:Ve("Background Color","digiblocks")}]})),wp.element.createElement(Ls,{label:Ve("Hover Effect","digiblocks"),value:W,options:ee,onChange:x=>e({hoverEffect:x}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(Nt,{tab:"style",name:"shadow",title:Ve("Box Shadow","digiblocks"),initialOpen:!1},wp.element.createElement(gh,{normalValue:Le,hoverValue:X,onNormalChange:x=>e({boxShadow:x}),onHoverChange:x=>e({boxShadowHover:x})})),wp.element.createElement(Nt,{tab:"style",name:"spacing",title:Ve("Spacing","digiblocks"),initialOpen:!1},wp.element.createElement(bi,{label:Ve("Padding","digiblocks")},wp.element.createElement(qa,{values:be[ce],onChange:x=>e({padding:{...be,[ce]:x}})})),wp.element.createElement(bi,{label:Ve("Margin","digiblocks")},wp.element.createElement(qa,{values:N[ce],onChange:x=>e({margin:{...N,[ce]:x}})}))));case"advanced":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Nt,{tab:"advanced",name:"animation",title:Ve("Animation","digiblocks"),initialOpen:!0},wp.element.createElement(Ls,{label:Ve("Animation Effect","digiblocks"),value:Q,options:Be,onChange:x=>e({animation:x}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),Q&&Q!=="none"&&wp.element.createElement("div",{style:{marginTop:"10px"}},wp.element.createElement(Tt,{variant:"secondary",isSecondary:!0,onClick:Se,style:{width:"100%"}},Ve("Preview Animation","digiblocks")))),wp.element.createElement(Nt,{tab:"advanced",name:"visibility",title:Ve("Visibility","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control__help",style:{padding:"12px",backgroundColor:"#f0f6fc",border:"1px solid #c3ddfd",borderRadius:"4px",marginBottom:"16px"}},wp.element.createElement("strong",null,Ve("Editor Note:","digiblocks")),wp.element.createElement("br",null),Ve("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.","digiblocks")),wp.element.createElement(Us,{label:Ve("Hide on Desktop","digiblocks"),checked:a.desktop,onChange:x=>e({visibility:{...a,desktop:x}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(Us,{label:Ve("Hide on Tablet","digiblocks"),checked:a.tablet,onChange:x=>e({visibility:{...a,tablet:x}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(Us,{label:Ve("Hide on Mobile","digiblocks"),checked:a.mobile,onChange:x=>e({visibility:{...a,mobile:x}}),__nextHasNoMarginBottom:!0})),wp.element.createElement(Nt,{tab:"advanced",name:"additional",title:Ve("Additional","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control html-anchor-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"html-anchor"},Ve("HTML anchor","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"html-anchor",value:O||"",onChange:x=>e({anchor:x.target.value}),"aria-describedby":"html-anchor-help",autoCapitalize:"none",autoComplete:"off"})),wp.element.createElement("p",{id:"html-anchor-help",className:"components-base-control__help"},Ve(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`,"digiblocks"))),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"additional-css-classes"},Ve("Additional CSS class(es)","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"additional-css-classes",value:le||"",onChange:x=>e({customClasses:x.target.value}),"aria-describedby":"additional-css-classes-help",autoComplete:"off"})),wp.element.createElement("p",{id:"additional-css-classes-help",className:"components-base-control__help"},Ve("Separate multiple classes with spaces.","digiblocks")))));default:return null}},d=()=>l.map((x,m)=>{let he=m===l.length-1,j=wp.element.createElement(wp.element.Fragment,null,x.icon&&x.icon.svg&&wp.element.createElement("div",{className:"digiblocks-icon-list-icon"},wp.element.createElement("span",{dangerouslySetInnerHTML:{__html:x.icon.svg}})),wp.element.createElement(ah,{className:"digiblocks-icon-list-content",value:x.content,onChange:Ne=>E(m,"content",Ne),placeholder:Ve("Enter list item text...","digiblocks"),allowedFormats:["core/bold","core/italic","core/inline-code"]}));return wp.element.createElement("li",{key:x.id,className:"digiblocks-icon-list-item",style:he?{marginBottom:0}:{}},x.linkUrl?wp.element.createElement("a",{href:"#",onClick:Ne=>Ne.preventDefault(),className:"digiblocks-icon-list-child"},j):wp.element.createElement("div",{className:"digiblocks-icon-list-child"},j),wp.element.createElement("div",{className:"digiblocks-icon-list-item-controls"},wp.element.createElement(Gi,{text:Ve("Edit Icon","digiblocks")},wp.element.createElement(Tt,{icon:"admin-customizer",onClick:()=>{je(m),J(!0)},isSmall:!0})),wp.element.createElement(Gi,{text:Ve("Link","digiblocks")},wp.element.createElement(Tt,{icon:"admin-links",onClick:()=>{je(m),oe(!0)},isSmall:!0,variant:x.linkUrl?"primary":"secondary"})),wp.element.createElement(Gi,{text:Ve("Move Up","digiblocks")},wp.element.createElement(Tt,{icon:"arrow-up-alt2",onClick:()=>se(m),disabled:m===0,isSmall:!0})),wp.element.createElement(Gi,{text:Ve("Move Down","digiblocks")},wp.element.createElement(Tt,{icon:"arrow-down-alt2",onClick:()=>B(m),disabled:m===l.length-1,isSmall:!0})),wp.element.createElement(Gi,{text:Ve("Duplicate","digiblocks")},wp.element.createElement(Tt,{icon:"admin-page",onClick:()=>c(m),isSmall:!0})),wp.element.createElement(Gi,{text:Ve("Remove","digiblocks")},wp.element.createElement(Tt,{icon:"trash",onClick:()=>qe(m),isSmall:!0}))))}),re=lh({className:`digiblocks-icon-list-block ${o} ${le||""}`,id:O||null});return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(nh,null,wp.element.createElement(ph,{tabs:Xe,activeTab:De,onSelect:r},G())),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:k()}}),wp.element.createElement("div",{...re},wp.element.createElement("div",{className:"digiblocks-icon-list-wrapper"},wp.element.createElement("ul",{className:"digiblocks-icon-list"},d())),A&&fe!==null&&wp.element.createElement(jd,{title:Ve("Choose Icon","digiblocks"),onRequestClose:()=>J(!1),className:"digiblocks-icon-modal"},wp.element.createElement(Ml,{label:Ve("Icon Source","digiblocks"),value:l[fe].iconSource||"library",onChange:x=>{let m=[...l];m[fe].iconSource=x,e({items:m})},isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(Ao,{value:"library",label:Ve("Library","digiblocks")}),wp.element.createElement(Ao,{value:"custom",label:Ve("Custom","digiblocks")})),(!l[fe].iconSource||l[fe].iconSource==="library")&&wp.element.createElement(wp.element.Fragment,null,D?wp.element.createElement(M,{value:l[fe].icon,onChange:x=>{ge(fe,x),J(!1)}}):wp.element.createElement("div",{style:{textAlign:"center",padding:"20px 0"}},wp.element.createElement("div",{className:"components-spinner"}),wp.element.createElement("p",null,Ve("Loading icon selector...","digiblocks")))),l[fe].iconSource==="custom"&&wp.element.createElement("div",{style:{marginTop:"15px"}},wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"custom-svg-input"},Ve("Custom SVG Code","digiblocks")),wp.element.createElement("textarea",{id:"custom-svg-input",className:"components-textarea-control__input",value:l[fe].customSvg||"",onChange:x=>{let m=x.target.value,he=[...l],j={id:"custom-svg",name:"Custom SVG",svg:m,style:"custom",categories:["custom"]};he[fe].customSvg=m,he[fe].icon=j,e({items:he})},placeholder:Ve("Paste your SVG code here...","digiblocks"),rows:6,style:{width:"100%",marginTop:"8px"}}),wp.element.createElement("p",{className:"components-base-control__help"},Ve("Paste your SVG code here. Make sure it only contains valid SVG markup.","digiblocks"))),l[fe].customSvg&&wp.element.createElement("div",{style:{marginTop:"15px",marginBottom:"15px"}},wp.element.createElement("p",null,wp.element.createElement("strong",null,Ve("Preview:","digiblocks"))),wp.element.createElement("div",{style:{padding:"20px",background:"#f0f0f1",borderRadius:"3px",display:"flex",justifyContent:"center",alignItems:"center"}},wp.element.createElement("div",{style:{width:"50px",height:"50px"},dangerouslySetInnerHTML:{__html:l[fe].customSvg}}))),wp.element.createElement("div",{style:{marginTop:"15px",display:"flex",justifyContent:"flex-end"}},wp.element.createElement(Tt,{variant:"primary",onClick:()=>J(!1)},Ve("Apply","digiblocks"))))),me&&fe!==null&&wp.element.createElement(jd,{title:Ve("Link Settings","digiblocks"),onRequestClose:()=>oe(!1),className:"digiblocks-link-modal"},wp.element.createElement(sh,{value:l[fe].linkUrl?{url:l[fe].linkUrl,opensInNewTab:l[fe].linkOpenInNewTab,rel:l[fe].linkRel}:void 0,settings:[{id:"opensInNewTab",title:Ve("Open in new tab","digiblocks")},{id:"rel",title:Ve("Add nofollow","digiblocks")}],onChange:x=>{x&&x.url&&(E(fe,"linkUrl",x.url),E(fe,"linkOpenInNewTab",!!x.opensInNewTab),E(fe,"linkRel",x.rel||""),oe(!1))},onRemove:()=>{E(fe,"linkUrl",""),E(fe,"linkOpenInNewTab",!1),E(fe,"linkRel",""),oe(!1)},forceIsEditingLink:!l[fe].linkUrl,allowDirectEntry:!0,suggestionsQuery:{type:"post",subtype:"any"}})),wp.element.createElement(Tt,{variant:"primary",icon:"plus",onClick:ye,style:{marginTop:"20px",width:"100%",justifyContent:"center"}},Ve("Add Icon List Item","digiblocks"))))},Vd=bh;var{useBlockProps:uh,RichText:mh}=window.wp.blockEditor,hh=({attributes:ie})=>{let{id:e,anchor:K,customClasses:o,items:O,animation:a,hoverEffect:le,listLayout:l,listAlign:_,iconPosition:y}=ie,$=["digiblocks-icon-list-block",e,a!=="none"?`animate-${a}`:"",le!=="none"?`has-hover-${le}`:"",o||""].filter(Boolean).join(" "),P=uh.save({className:$,id:K||null}),h=()=>O.map(s=>{let S=wp.element.createElement(wp.element.Fragment,null,(!s.iconSource||s.iconSource==="library")&&s.icon&&s.icon.svg&&s.icon.svg.trim()!==""?wp.element.createElement("div",{className:"digiblocks-icon-list-icon"},wp.element.createElement("span",{dangerouslySetInnerHTML:{__html:s.icon.svg}})):s.iconSource==="custom"&&s.customSvg&&s.customSvg.trim()!==""?wp.element.createElement("div",{className:"digiblocks-icon-list-icon"},wp.element.createElement("span",{dangerouslySetInnerHTML:{__html:s.customSvg}})):null,wp.element.createElement("div",{className:"digiblocks-icon-list-content"},wp.element.createElement(mh.Content,{value:s.content})));if(s.linkUrl){let C=s.linkRel||"";if(s.linkOpenInNewTab){let w=C.split(" ").filter(Boolean);w.includes("noopener")||w.push("noopener"),w.includes("noreferrer")||w.push("noreferrer"),C=w.join(" ")}return wp.element.createElement("li",{key:s.id,className:"digiblocks-icon-list-item"},wp.element.createElement("a",{className:"digiblocks-icon-list-child",href:s.linkUrl,target:s.linkOpenInNewTab?"_blank":"_self",rel:C||void 0},S))}return wp.element.createElement("li",{key:s.id,className:"digiblocks-icon-list-item"},wp.element.createElement("div",{className:"digiblocks-icon-list-child"},S))});return wp.element.createElement("div",{...P},wp.element.createElement("div",{className:"digiblocks-icon-list-wrapper"},wp.element.createElement("ul",{className:`digiblocks-icon-list ${y==="after"?"icon-position-after":"icon-position-before"}`},h())))},Fd=hh;var{__:et}=window.wp.i18n,{registerBlockType:fh}=window.wp.blocks,{getBlockActiveStatus:kh}=window.wp.digiBlocks;fh("digiblocks/icon-list",{apiVersion:2,title:digiBlocksData.blocks["icon-list"].title,category:"digiblocks",icon:{src:()=>{let{viewbox:ie,path:e}=digiBlocksData.blocks["icon-list"].icon;return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${ie}`,className:"digiblocks-editor-icons"},wp.element.createElement("path",{d:e}))}},description:digiBlocksData.blocks["icon-list"].description,keywords:[et("icon","digiblocks"),et("list","digiblocks"),et("menu","digiblocks"),et("feature","digiblocks"),et("service","digiblocks")],supports:{inserter:!!kh("icon-list"),html:!1,className:!1,customClassName:!1,anchor:!1},attributes:{id:{type:"string",default:""},anchor:{type:"string",default:""},visibility:{type:"object",default:{desktop:!1,tablet:!1,mobile:!1}},customClasses:{type:"string",default:""},defaultIconSource:{type:"string",default:"library"},defaultCustomSvg:{type:"string",default:""},items:{type:"array",default:[{id:"item-1",content:et("First list item with icon","digiblocks"),iconSource:"library",icon:{id:"check",name:"Check",svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em"><path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>',style:"solid",categories:["design"]},customSvg:"",linkEnabled:!1,linkUrl:"",linkOpenInNewTab:!1,linkRel:""},{id:"item-2",content:et("Second list item with star icon","digiblocks"),iconSource:"library",icon:{id:"star",name:"Star",svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="1em" height="1em"><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"/></svg>',style:"solid",categories:["design"]},customSvg:"",linkUrl:"",linkOpenInNewTab:!1,linkRel:""},{id:"item-3",content:et("Third list item with heart icon","digiblocks"),iconSource:"library",icon:{id:"heart",name:"Heart",svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>',style:"solid",categories:["design"]},customSvg:"",linkUrl:"",linkOpenInNewTab:!1,linkRel:""}]},defaultIcon:{type:"object",default:{id:"check",name:"Check",svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em"><path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>',style:"solid",categories:["design"]}},contentTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",fontWeight:"",fontStyle:"normal",textTransform:"",textDecoration:"",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}},listLayout:{type:"string",default:"vertical"},listAlign:{type:"string",default:"left"},iconPosition:{type:"string",default:"before"},iconSize:{type:"object",default:{desktop:24,tablet:20,mobile:18}},iconSpace:{type:"object",default:{desktop:12,tablet:10,mobile:8}},itemSpace:{type:"object",default:{desktop:16,tablet:12,mobile:8}},iconColor:{type:"string",default:"#1e73be"},iconHoverColor:{type:"string",default:""},textColor:{type:"string",default:"#333333"},textHoverColor:{type:"string",default:""},animation:{type:"string",default:"none"},padding:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},margin:{type:"object",default:{desktop:{top:0,right:0,bottom:30,left:0,unit:"px"},tablet:{top:0,right:0,bottom:25,left:0,unit:"px"},mobile:{top:0,right:0,bottom:20,left:0,unit:"px"}}},borderStyle:{type:"string",default:"none"},borderWidth:{type:"object",default:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderRadius:{type:"object",default:{desktop:{top:8,right:8,bottom:8,left:8,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderColor:{type:"string",default:"#e0e0e0"},borderHoverColor:{type:"string",default:""},boxShadow:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},boxShadowHover:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},backgroundColor:{type:"string",default:""},backgroundHoverColor:{type:"string",default:""},hoverEffect:{type:"string",default:"none"}},example:{attributes:{items:[{id:"item-1",content:et("Professional feature","digiblocks"),icon:{id:"star",name:"Star",svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="1em" height="1em"><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"/></svg>',style:"solid",categories:["design"]}},{id:"item-2",content:et("24/7 support service","digiblocks"),icon:{id:"headset",name:"Headset",svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em"><path d="M256 48C141.1 48 48 141.1 48 256v40c0 13.3-10.7 24-24 24s-24-10.7-24-24V256C0 114.6 114.6 0 256 0S512 114.6 512 256V400.1c0 48.6-39.4 88-88.1 88L313.6 488c-8.3 14.3-23.8 24-41.6 24H240c-26.5 0-48-21.5-48-48s21.5-48 48-48h32c17.8 0 33.3 9.7 41.6 24l110.4 .1c22.1 0 40-17.9 40-40V256c0-114.9-93.1-208-208-208zM144 208h16c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H144c-35.3 0-64-28.7-64-64V272c0-35.3 28.7-64 64-64zm224 0c35.3 0 64 28.7 64 64v48c0 35.3-28.7 64-64 64H352c-17.7 0-32-14.3-32-32V240c0-17.7 14.3-32 32-32h16z"/></svg>',style:"solid",categories:["business","technology"]}},{id:"item-3",content:et("Free updates and documentation","digiblocks"),icon:{id:"download",name:"Download",svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em"><path d="M256 0c17.7 0 32 14.3 32 32V242.7l73.4-73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-128 128c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 242.7V32c0-17.7 14.3-32 32-32zM48 384c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H464c17.7 0 32-14.3 32-32V416c0-17.7-14.3-32-32-32H304 208 48zm272 80c0-8.8-7.2-16-16-16s-16 7.2-16 16s7.2 16 16 16s16-7.2 16-16zm80 0c0-8.8-7.2-16-16-16s-16 7.2-16 16s7.2 16 16 16s16-7.2 16-16z"/></svg>',style:"solid",categories:["arrows","technology"]}}],iconColor:"#1e73be",textColor:"#333333"},viewportWidth:800},edit:Vd,save:Fd});var{__:Ie}=window.wp.i18n,{useBlockProps:vh,InspectorControls:xh,RichText:dv,MediaUpload:Ws,MediaUploadCheck:Ed,LinkControl:yh,PanelColorSettings:qs}=window.wp.blockEditor,{TabPanel:Ch,Notice:wh,SelectControl:Dl,ToggleControl:Pl,Button:qo,RangeControl:Wd,__experimentalUnitControl:gv,__experimentalToggleGroupControl:Gs,__experimentalToggleGroupControlOption:Rl,Spinner:qd,Placeholder:Sh,TextControl:Gd,PanelRow:Qd,Modal:$h}=window.wp.components,{useState:ot,useEffect:Ga,useRef:Jd,useCallback:_h}=window.wp.element,{useBlockId:Bh,getDimensionCSS:Qa,animations:Qs,animationPreview:Yd}=digi.utils,{tabIcons:Js}=digi.icons,{ResponsiveControl:Ja,DimensionControl:Ya,TypographyControl:pv,BoxShadowControl:Th,CustomTabPanel:Nh,TabPanelBody:Ht}=digi.components,Hh=({attributes:ie,setAttributes:e,clientId:K})=>{let{id:o,anchor:O,visibility:a,customClasses:le,imageId:l,imageUrl:_,altText:y,title:$,caption:P,width:h,widthUnit:s,height:z,heightUnit:S,sizeSlug:C,align:w,alignTablet:T,alignMobile:U,objectFit:L,borderStyle:V,borderWidth:Q,borderRadius:be,borderColor:N,borderHoverColor:u,boxShadow:v,boxShadowHover:I,padding:ne,margin:Me,url:Le,opensInNewTab:X,rel:H,animation:Y,hoverEffect:W,overlayEnable:ce,overlayColor:ue,overlayHoverOnly:A}=ie;Bh(o,K,e);let[J,me]=ot(window.digi.responsiveState.activeDevice),[oe,fe]=ot(!1),[je,te]=ot(!1),[to,De]=ot(!1),[r,D]=ot(""),[xe,Pe]=ot([]),[Se,Ue]=ot(!1),[ee,Be]=ot(1),[Xe,q]=ot(!1),[ye,qe]=ot(!1),E=Jd(null);Ga(()=>window.digi.responsiveState.subscribe(He=>{me(He)}),[]);let[se,B]=ot(()=>{if(window.digi.uiState){let g=window.digi.uiState.getActiveTab(K);if(g)return g}return"options"});Ga(()=>{if(l&&C){let g=window.wp.media.attachment(l);g.get("url")?c(g):g.fetch().then(()=>{c(g)})}},[C,l]);let c=g=>{let He=g.get("url"),Je=g.get("sizes");Je&&Je[C]&&(He=Je[C].url),e({imageUrl:He})},ge=Jd(null);Ga(()=>{if(Y&&Y!=="none"){let g=setTimeout(()=>{Yd(o,Y,Qs,ge)},100);return()=>clearTimeout(g)}},[Y]);let M=()=>{Yd(o,Y,Qs,ge)},k=_h((g,He=1)=>{E.current&&clearTimeout(E.current),E.current=setTimeout(()=>{g.trim()?G(g,He):(Pe([]),q(!1))},500)},[]);Ga(()=>(to&&r&&k(r,1),()=>{E.current&&clearTimeout(E.current)}),[r,to,k]);let G=(g,He=1)=>{if(!g.trim())return;Ue(!0);let Je=new FormData;Je.append("action","digiblocks_search_images"),Je.append("query",g),Je.append("page",He),Je.append("per_page",20),Je.append("nonce",digiBlocksData.image_search_nonce||""),fetch(digiBlocksData.ajax_url,{method:"POST",body:Je}).then(i=>i.json()).then(i=>{Ue(!1),i.success?(Pe(He===1?i.data.images:F=>[...F,...i.data.images]),q(i.data.images.length===20),Be(He)):(console.error("Search error:",i.data),alert(Ie("Search failed. Please check your API configuration.","digiblocks")))}).catch(i=>{Ue(!1),console.error("Search error:",i),alert(Ie("Search failed. Please try again.","digiblocks"))})},d=g=>{qe(!0);let He=new FormData;He.append("action","digiblocks_download_image"),He.append("image_data",JSON.stringify(g)),He.append("nonce",digiBlocksData.image_search_nonce||""),fetch(digiBlocksData.ajax_url,{method:"POST",body:He}).then(Je=>Je.json()).then(Je=>{if(qe(!1),Je.success){let i=Je.data;e({imageUrl:i.url,imageId:i.id,altText:i.alt||"",title:i.title||""}),De(!1),D(""),Pe([]),Be(1),q(!1)}else console.error("Download error:",Je.data),alert(Ie("Failed to download image. Please try again.","digiblocks"))}).catch(Je=>{qe(!1),console.error("Download error:",Je),alert(Ie("Failed to download image. Please try again.","digiblocks"))})},re=()=>{!Se&&Xe&&G(r,ee+1)},x=digiBlocksData&&digiBlocksData.image_search_available,m=[{label:Ie("None","digiblocks"),value:"none"},{label:Ie("Solid","digiblocks"),value:"solid"},{label:Ie("Dotted","digiblocks"),value:"dotted"},{label:Ie("Dashed","digiblocks"),value:"dashed"},{label:Ie("Double","digiblocks"),value:"double"},{label:Ie("Groove","digiblocks"),value:"groove"},{label:Ie("Inset","digiblocks"),value:"inset"},{label:Ie("Outset","digiblocks"),value:"outset"},{label:Ie("Ridge","digiblocks"),value:"ridge"}],he=[{label:Ie("None","digiblocks"),value:"none"},{label:Ie("Zoom In","digiblocks"),value:"zoom-in"},{label:Ie("Zoom Out","digiblocks"),value:"zoom-out"},{label:Ie("Grayscale to Color","digiblocks"),value:"grayscale"},{label:Ie("Blur to Clear","digiblocks"),value:"blur"},{label:Ie("Rotate","digiblocks"),value:"rotate"},{label:Ie("Glow","digiblocks"),value:"glow"}],j=[{label:Ie("Cover","digiblocks"),value:"cover"},{label:Ie("Contain","digiblocks"),value:"contain"},{label:Ie("Fill","digiblocks"),value:"fill"},{label:Ie("None","digiblocks"),value:"none"}],Ne=[{label:Ie("None","digiblocks"),value:"none"},...Object.keys(Qs).map(g=>({label:g.replace(/-/g," ").replace(/\b\w/g,He=>He.toUpperCase()),value:g}))],f=[{label:Ie("Thumbnail","digiblocks"),value:"thumbnail"},{label:Ie("Medium","digiblocks"),value:"medium"},{label:Ie("Large","digiblocks"),value:"large"},{label:Ie("Full Size","digiblocks"),value:"full"}],Ge=[{name:"options",title:Ie("Options","digiblocks"),icon:Js.optionsIcon},{name:"style",title:Ie("Style","digiblocks"),icon:Js.styleIcon},{name:"advanced",title:Ie("Advanced","digiblocks"),icon:Js.advancedIcon}],We=[{name:"normal",title:Ie("Normal","digiblocks"),className:"digiblocks-tab-1 normal"},{name:"hover",title:Ie("Hover","digiblocks"),className:"digiblocks-tab-2 hover"}],go=[{label:"px",value:"px"},{label:"%",value:"%"},{label:"vw",value:"vw"}],t=[{label:"px",value:"px"},{label:"%",value:"%"},{label:"vh",value:"vh"}],b=g=>{if(!g||!g.url){e({imageUrl:void 0,imageId:void 0,altText:""});return}let He=g.url;C&&g.sizes&&g.sizes[C]&&(He=g.sizes[C].url),e({imageUrl:He,imageId:g.id,altText:g.alt||"",title:g.title||""})},Ce=()=>{e({imageUrl:void 0,imageId:void 0,altText:"",title:""})},n=()=>{let g=window.digi.responsiveState.activeDevice,He=h[g]?h[g]==="auto"?"auto":`${h[g]}${s}`:"100%",Je=z[g]?z[g]==="auto"?"auto":`${z[g]}${S}`:"auto",i="";V&&V!=="none"?i=`
                border-style: ${V};
                border-color: ${N||"#e0e0e0"};
				${Qa(Q,"border-width",g)}
            `:i="border-style: none;";let F="box-shadow: none;";v&&v.enable&&(F=`box-shadow: ${v.position==="inset"?"inset ":""}${v.horizontal}px ${v.vertical}px ${v.blur}px ${v.spread}px ${v.color};`);let Fe=ne&&ne[g]?`${Qa(ne,"padding",g)}`:"padding: 0;",po=Me&&Me[g]?`${Qa(Me,"margin",g)}`:"margin: 0 0 30px 0;",R="";ce&&(R=`
                .${o} .digiblocks-image-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: ${ue||"rgba(0,0,0,0.5)"};
                    opacity: ${A?"0":"1"};
                    transition: opacity 0.3s ease;
                }
                
                .${o}:hover .digiblocks-image-overlay {
                    opacity: 1;
                }
            `);let Ae="";if(I&&I.enable){let ho=I.position==="inset"?"inset ":"";Ae+=`box-shadow: ${ho}${I.horizontal}px ${I.vertical}px ${I.blur}px ${I.spread}px ${I.color};`}u&&(Ae+=`border-color: ${u};`);let co="";W==="zoom-in"?co="transform: scale(1.1);":W==="zoom-out"?co="transform: scale(1);":W==="grayscale"?co="filter: grayscale(0);":W==="blur"?co="filter: blur(0);":W==="rotate"?co="transform: rotate(5deg);":W==="glow"&&(co="filter: brightness(1.1);");let uo="";return W==="zoom-out"?uo="transform: scale(1.1);":W==="grayscale"?uo="filter: grayscale(100%);":W==="blur"&&(uo="filter: blur(5px);"),`
            /* Main block styles */
            .${o} {
                display: flex;
				${w==="left"?"justify-content: flex-start;":w==="right"?"justify-content: flex-end;":"justify-content: center;"}
                text-align: ${w};
                width: 100%;
                ${po}
                transition: all 0.3s ease;
            }
            
            /* Figure styles */
            .${o} figure {
                display: inline-block;
                position: relative;
                margin: 0;
                width: ${He};
                max-width: 100%;
                ${Fe}
                ${i}
                ${F}
				${Qa(be,"border-radius",g)}
                overflow: hidden;
                transition: all 0.3s ease;
            }
            
            /* Image styles */
            .${o} figure img {
                display: block;
                width: 100%;
                height: ${Je};
                object-fit: ${L};
                ${uo}
                transition: all 0.3s ease;
            }
            
            /* Hover styles */
            .${o} figure:hover {
                ${Ae}
            }
            
            .${o} figure:hover img {
                ${co}
            }
            
            /* Overlay */
            ${R}

			/* Visibility Controls */
			${a.desktop?`
				@media (min-width: 992px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${a.tablet?`
				@media (min-width: 768px) and (max-width: 991px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${a.mobile?`
				@media (max-width: 767px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}
        `},we=()=>`
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
		`,Ke=()=>{switch(se){case"options":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Ht,{tab:"options",name:"image",title:Ie("Image","digiblocks"),initialOpen:!0},wp.element.createElement(Ed,null,wp.element.createElement("div",{className:"digiblocks-image-upload-section"},_?wp.element.createElement("div",{className:"digiblocks-media-preview"},wp.element.createElement("img",{src:_,alt:y||""}),wp.element.createElement("div",{className:"digiblocks-media-controls"},x&&wp.element.createElement(qo,{isPrimary:!0,onClick:()=>De(!0),disabled:ye},wp.element.createElement("span",{className:"dashicon dashicons dashicons-search"})),wp.element.createElement(Ws,{onSelect:b,allowedTypes:["image"],value:l,render:({open:g})=>wp.element.createElement(qo,{isPrimary:!0,onClick:g,disabled:ye},wp.element.createElement("span",{className:"dashicon dashicons dashicons-edit"}))}),wp.element.createElement(qo,{isDestructive:!0,onClick:Ce,disabled:ye},wp.element.createElement("span",{className:"dashicon dashicons dashicons-trash"})))):wp.element.createElement("div",{className:"digiblocks-image-upload-buttons"},wp.element.createElement(Ws,{onSelect:b,allowedTypes:["image"],value:l,render:({open:g})=>wp.element.createElement(qo,{className:"digiblocks-media-upload-button",isPrimary:!0,onClick:g,disabled:ye},wp.element.createElement("span",{className:"dashicon dashicons dashicons-admin-media"}),Ie("Select Image","digiblocks"))}),x&&wp.element.createElement(qo,{className:"digiblocks-media-search-button",isSecondary:!0,onClick:()=>De(!0),disabled:ye},wp.element.createElement("span",{className:"dashicon dashicons dashicons-search"}),Ie("Search Images","digiblocks"))))),_&&wp.element.createElement("div",{style:{marginTop:"16px"}},wp.element.createElement(Gd,{label:Ie("Alt Text","digiblocks"),value:y,onChange:g=>e({altText:g}),help:Ie("Alternative text describes your image to people who cannot see it. Add a descriptive text to help screen-reader users.","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Gd,{label:Ie("Title","digiblocks"),value:$,onChange:g=>e({title:g}),help:Ie("Shown as a tooltip when a user hovers over the image.","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Dl,{label:Ie("Image Size","digiblocks"),value:C,options:f,onChange:g=>e({sizeSlug:g}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement("div",{style:{marginTop:"16px"}},wp.element.createElement("p",{className:"components-base-control__label"},Ie("Link Settings","digiblocks")),wp.element.createElement(yh,{value:Le?{url:Le,opensInNewTab:X,rel:H}:void 0,onChange:g=>{e({url:g.url,opensInNewTab:g.opensInNewTab,rel:g.rel||""}),te(!1)},settings:[{id:"opensInNewTab",title:Ie("Open in new tab")},{id:"rel",title:Ie("Add noopener noreferrer")}],onRemove:()=>{e({url:"",opensInNewTab:!1,rel:""}),te(!1)}}))),!x&&wp.element.createElement(wh,{status:"info",isDismissible:!1,style:{marginTop:"16px"}},wp.element.createElement("p",{style:{margin:"0 0 8px 0"}},wp.element.createElement("strong",null,Ie("\u{1F4A1} Enhanced Image Search Available","digiblocks"))),wp.element.createElement("p",{style:{margin:"0 0 12px 0"}},Ie("Configure API providers to search and download images directly from Unsplash, Pexels, and Pixabay.","digiblocks")),wp.element.createElement(qo,{isSecondary:!0,isSmall:!0,href:`${digiBlocksData.admin_url}admin.php?page=digiblocks-settings#image-providers`,target:"_blank",rel:"noopener noreferrer",icon:"admin-settings"},Ie("Configure Image Providers","digiblocks")))));case"style":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Ht,{tab:"style",name:"dimensions",title:Ie("Dimensions","digiblocks"),initialOpen:!0},wp.element.createElement("div",{className:"digiblocks-size-type-field-tabs"},wp.element.createElement("div",{className:"digiblocks-responsive-control-inner"},wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"digiblocks-range-control digiblocks-size-type-field-tabs"},wp.element.createElement("div",{className:"digiblocks-control__header"},wp.element.createElement("div",{className:"digiblocks-responsive-label-wrap"},wp.element.createElement("span",{className:"digiblocks-control-label"},Ie("Width","digiblocks")),wp.element.createElement("button",{type:"button","aria-label":Ie(`Switch to ${window.digi.responsiveState.getNextDevice()} view`,"digiblocks"),className:`components-button digiblocks-responsive-common-button digiblocks-device-${J}`,onClick:()=>window.digi.responsiveState.toggleDevice()},window.digi.icons.deviceIcons[J])),wp.element.createElement("div",{className:"digiblocks-range-control__actions digiblocks-control__actions"},wp.element.createElement("div",{tabIndex:"0"},wp.element.createElement("button",{type:"button",disabled:h[J]===100,className:"components-button digiblocks-reset is-secondary is-small",onClick:()=>e({width:{...h,[J]:100}})},wp.element.createElement("span",{className:"dashicon dashicons dashicons-image-rotate"}))),wp.element.createElement(Gs,{value:s,onChange:g=>e({widthUnit:g}),isBlock:!0,isSmall:!0,hideLabelFromVision:!0,"aria-label":Ie("Width Unit","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},go.map(g=>wp.element.createElement(Rl,{key:g.value,value:g.value,label:g.label}))))),wp.element.createElement("div",{className:"digiblocks-range-control__mobile-controls"},wp.element.createElement(Wd,{value:h[J],onChange:g=>e({width:{...h,[J]:g}}),min:1,max:s==="%"?100:1e3,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})))))),wp.element.createElement("div",{className:"digiblocks-size-type-field-tabs"},wp.element.createElement("div",{className:"digiblocks-responsive-control-inner"},wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"digiblocks-range-control digiblocks-size-type-field-tabs"},wp.element.createElement("div",{className:"digiblocks-control__header"},wp.element.createElement("div",{className:"digiblocks-responsive-label-wrap"},wp.element.createElement("span",{className:"digiblocks-control-label"},Ie("Height","digiblocks")),wp.element.createElement("button",{type:"button","aria-label":Ie(`Switch to ${window.digi.responsiveState.getNextDevice()} view`,"digiblocks"),className:`components-button digiblocks-responsive-common-button digiblocks-device-${J}`,onClick:()=>window.digi.responsiveState.toggleDevice()},window.digi.icons.deviceIcons[J])),wp.element.createElement("div",{className:"digiblocks-range-control__actions digiblocks-control__actions"},wp.element.createElement("div",{tabIndex:"0"},wp.element.createElement("button",{type:"button",disabled:z[J]===300,className:"components-button digiblocks-reset is-secondary is-small",onClick:()=>e({height:{...z,[J]:300}})},wp.element.createElement("span",{className:"dashicon dashicons dashicons-image-rotate"}))),wp.element.createElement(Gs,{value:S,onChange:g=>e({heightUnit:g}),isBlock:!0,isSmall:!0,hideLabelFromVision:!0,"aria-label":Ie("Height Unit","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},t.map(g=>wp.element.createElement(Rl,{key:g.value,value:g.value,label:g.label}))))),wp.element.createElement("div",{className:"digiblocks-range-control__mobile-controls"},wp.element.createElement(Wd,{value:z[J],onChange:g=>e({height:{...z,[J]:g}}),min:1,max:S==="%"?100:1e3,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})))))),wp.element.createElement(Dl,{label:Ie("Object Fit","digiblocks"),value:L,options:j,onChange:g=>e({objectFit:g}),help:Ie("Determines how the image should be resized to fit its container.","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Gs,{label:Ie("Alignment","digiblocks"),value:w,onChange:g=>e({align:g}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(Rl,{value:"left",label:Ie("Left","digiblocks")}),wp.element.createElement(Rl,{value:"center",label:Ie("Center","digiblocks")}),wp.element.createElement(Rl,{value:"right",label:Ie("Right","digiblocks")}))),wp.element.createElement(Ht,{tab:"style",name:"spacing",title:Ie("Spacing","digiblocks"),initialOpen:!1},wp.element.createElement(Ja,{label:Ie("Padding","digiblocks")},wp.element.createElement(Ya,{values:ne[J],onChange:g=>e({padding:{...ne,[J]:g}})})),wp.element.createElement(Ja,{label:Ie("Margin","digiblocks")},wp.element.createElement(Ya,{values:Me[J],onChange:g=>e({margin:{...Me,[J]:g}})}))),wp.element.createElement(Ht,{tab:"style",name:"border",title:Ie("Border","digiblocks"),initialOpen:!1},wp.element.createElement(Ch,{className:"digiblocks-control-tabs",activeClass:"active-tab",tabs:We},g=>g.name==="normal"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Dl,{label:Ie("Border Style","digiblocks"),value:V,options:m,onChange:He=>{He!=="none"&&(V==="none"||!V)&&((!Q||Object.keys(Q).length===0)&&e({borderWidth:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}}),(!be||Object.keys(be).length===0)&&e({borderRadius:{desktop:{top:0,right:0,bottom:0,left:0,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}})),e({borderStyle:He})},__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),V&&V!=="none"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(qs,{title:Ie("Border Color","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:N,onChange:He=>e({borderColor:He}),label:Ie("Border Color","digiblocks")}]}),wp.element.createElement(Ja,{label:Ie("Border Width","digiblocks")},wp.element.createElement(Ya,{values:Q&&Q[J]?Q[J]:{top:1,right:1,bottom:1,left:1,unit:"px"},onChange:He=>e({borderWidth:{...Q,[J]:He}})}))),wp.element.createElement(Ja,{label:Ie("Border Radius","digiblocks")},wp.element.createElement(Ya,{values:be&&be[J]?be[J]:{top:0,right:0,bottom:0,left:0,unit:"px"},onChange:He=>e({borderRadius:{...be,[J]:He}}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]}))):wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(qs,{title:Ie("Border Hover Color","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:u,onChange:He=>e({borderHoverColor:He}),label:Ie("Border Hover Color","digiblocks")}]})))),wp.element.createElement(Ht,{tab:"style",name:"shadow",title:Ie("Box Shadow","digiblocks"),initialOpen:!1},wp.element.createElement(Th,{normalValue:v,hoverValue:I,onNormalChange:g=>e({boxShadow:g}),onHoverChange:g=>e({boxShadowHover:g})})),wp.element.createElement(Ht,{tab:"style",name:"effects",title:Ie("Effects","digiblocks"),initialOpen:!1},wp.element.createElement(Dl,{label:Ie("Hover Effect","digiblocks"),value:W,options:he,onChange:g=>e({hoverEffect:g}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Qd,null,wp.element.createElement(Pl,{label:Ie("Enable Overlay","digiblocks"),checked:ce,onChange:()=>e({overlayEnable:!ce})})),ce&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(qs,{title:Ie("Overlay Color","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:ue,onChange:g=>e({overlayColor:g}),label:Ie("Overlay Color","digiblocks")}]}),wp.element.createElement(Qd,null,wp.element.createElement(Pl,{label:Ie("Show Overlay Only on Hover","digiblocks"),checked:A,onChange:()=>e({overlayHoverOnly:!A})})))));case"advanced":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Ht,{tab:"advanced",name:"animation",title:Ie("Animation","digiblocks"),initialOpen:!0},wp.element.createElement(Dl,{label:Ie("Animation Effect","digiblocks"),value:Y,options:Ne,onChange:g=>e({animation:g}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),Y&&Y!=="none"&&wp.element.createElement("div",{style:{marginTop:"10px"}},wp.element.createElement(qo,{variant:"secondary",isSecondary:!0,onClick:M,style:{width:"100%"}},Ie("Preview Animation","digiblocks")))),wp.element.createElement(Ht,{tab:"advanced",name:"visibility",title:Ie("Visibility","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control__help",style:{padding:"12px",backgroundColor:"#f0f6fc",border:"1px solid #c3ddfd",borderRadius:"4px",marginBottom:"16px"}},wp.element.createElement("strong",null,Ie("Editor Note:","digiblocks")),wp.element.createElement("br",null),Ie("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.","digiblocks")),wp.element.createElement(Pl,{label:Ie("Hide on Desktop","digiblocks"),checked:a.desktop,onChange:g=>e({visibility:{...a,desktop:g}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(Pl,{label:Ie("Hide on Tablet","digiblocks"),checked:a.tablet,onChange:g=>e({visibility:{...a,tablet:g}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(Pl,{label:Ie("Hide on Mobile","digiblocks"),checked:a.mobile,onChange:g=>e({visibility:{...a,mobile:g}}),__nextHasNoMarginBottom:!0})),wp.element.createElement(Ht,{tab:"advanced",name:"additional",title:Ie("Additional","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control html-anchor-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"html-anchor"},Ie("HTML anchor","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"html-anchor",value:O||"",onChange:g=>e({anchor:g.target.value}),"aria-describedby":"html-anchor-help",autoCapitalize:"none",autoComplete:"off"})),wp.element.createElement("p",{id:"html-anchor-help",className:"components-base-control__help"},Ie(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`,"digiblocks")," ",wp.element.createElement("a",{className:"components-external-link",href:"https://wordpress.org/documentation/article/page-jumps/",target:"_blank",rel:"external noreferrer noopener"},wp.element.createElement("span",{className:"components-external-link__contents"},Ie("Learn more about anchors","digiblocks")),wp.element.createElement("span",{className:"components-external-link__icon","aria-label":"(opens in a new tab)"},"\u2197")))),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"additional-css-classes"},Ie("Additional CSS class(es)","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"additional-css-classes",value:le||"",onChange:g=>e({customClasses:g.target.value}),"aria-describedby":"additional-css-classes-help",autoComplete:"off"})),wp.element.createElement("p",{id:"additional-css-classes-help",className:"components-base-control__help"},Ie("Separate multiple classes with spaces.","digiblocks")))));default:return null}},p=vh({className:`digiblocks-image ${o} ${Y!=="none"?`animate-${Y}`:""} ${le||""}`,id:O||null});return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(xh,null,wp.element.createElement(Nh,{tabs:Ge,activeTab:se,onSelect:B},Ke())),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:n()}}),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:we()}}),wp.element.createElement("div",{...p},wp.element.createElement("figure",null,_?wp.element.createElement(wp.element.Fragment,null,Le?wp.element.createElement("a",{href:"#",onClick:g=>g.preventDefault()},wp.element.createElement("img",{src:_,alt:y,title:$}),ce&&wp.element.createElement("div",{className:"digiblocks-image-overlay"})):wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("img",{src:_,alt:y,title:$}),ce&&wp.element.createElement("div",{className:"digiblocks-image-overlay"}))):wp.element.createElement(Sh,{icon:"format-image",label:Ie("Image","digiblocks"),instructions:Ie("Upload an image or select one from your media library.","digiblocks")},wp.element.createElement("div",{className:"digiblocks-image-upload-buttons"},wp.element.createElement(Ed,null,wp.element.createElement(Ws,{onSelect:b,allowedTypes:["image"],value:l,render:({open:g})=>wp.element.createElement(qo,{isPrimary:!0,onClick:g,disabled:ye},wp.element.createElement("span",{className:"dashicon dashicons dashicons-admin-media"}),Ie("Select Image","digiblocks"))})),x&&wp.element.createElement(qo,{isSecondary:!0,onClick:()=>De(!0),disabled:ye},wp.element.createElement("span",{className:"dashicon dashicons dashicons-search"}),Ie("Search Images","digiblocks")))))),to&&wp.element.createElement($h,{title:Ie("Search Images","digiblocks"),onRequestClose:()=>{De(!1),D(""),Pe([]),Be(1),q(!1)},className:"digiblocks-image-search-modal",overlayClassName:"digiblocks-modal-overlay",shouldCloseOnClickOutside:!1},wp.element.createElement("div",{className:"digiblocks-image-search-content"},wp.element.createElement("div",{className:"digiblocks-search-header"},wp.element.createElement("div",{className:"digiblocks-search-input-wrapper"},wp.element.createElement("input",{type:"text",placeholder:Ie("Search for images...","digiblocks"),value:r,onChange:g=>D(g.target.value),className:"digiblocks-search-input",autoFocus:!0}),wp.element.createElement(qo,{isPrimary:!0,onClick:()=>G(r,1),disabled:!r.trim()||Se},Ie(Se?"Searching...":"Search","digiblocks")))),wp.element.createElement("div",{className:"digiblocks-search-results"},Se&&xe.length===0&&wp.element.createElement("div",{className:"digiblocks-searching-state"},wp.element.createElement(qd,null),wp.element.createElement("p",null,Ie("Searching for images...","digiblocks"))),r&&!Se&&xe.length===0&&wp.element.createElement("div",{className:"digiblocks-typing-indicator"},wp.element.createElement("p",null,Ie("Type your search term and wait for results...","digiblocks"))),xe.length>0&&wp.element.createElement("div",{className:"digiblocks-image-grid"},xe.map((g,He)=>wp.element.createElement("div",{key:`${g.id}-${He}`,className:"digiblocks-image-item",onClick:()=>d(g)},wp.element.createElement("img",{src:g.thumb,alt:g.alt,loading:"lazy"}),wp.element.createElement("div",{className:"digiblocks-image-overlay"},wp.element.createElement("div",{className:"digiblocks-image-info"},wp.element.createElement("span",{className:"digiblocks-image-title"},g.title),wp.element.createElement("span",{className:"digiblocks-image-author"},"by ",g.author)),wp.element.createElement(qo,{isPrimary:!0,size:"small"},Ie("Use Image","digiblocks"))),ye&&wp.element.createElement("div",{className:"digiblocks-downloading-overlay"},wp.element.createElement(qd,null))))),Xe&&wp.element.createElement("div",{className:"digiblocks-load-more"},wp.element.createElement(qo,{isSecondary:!0,onClick:re,disabled:Se},Ie(Se?"Loading...":"Load More","digiblocks")))))))},Zd=Hh;var{useBlockProps:zh,RichText:uv}=window.wp.blockEditor,Mh=({attributes:ie})=>{let{id:e,anchor:K,customClasses:o,imageUrl:O,altText:a,title:le,animation:l,url:_,opensInNewTab:y,rel:$,overlayEnable:P}=ie,h=["digiblocks-image",e,l!=="none"?`animate-${l}`:"",o||""].filter(Boolean).join(" "),s=zh.save({className:h,id:K||void 0});if(!O)return null;let z=wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("img",{src:O,alt:a||"",title:le||""}),P&&wp.element.createElement("div",{className:"digiblocks-image-overlay"}));return _&&(z=wp.element.createElement("a",{href:_,target:y?"_blank":void 0,rel:$?"noopener noreferrer":void 0},z)),wp.element.createElement("div",{...s},wp.element.createElement("figure",null,z))},Kd=Mh;var{__:Za}=window.wp.i18n,{registerBlockType:Dh}=window.wp.blocks,{getBlockActiveStatus:Ph}=window.wp.digiBlocks;Dh("digiblocks/image",{apiVersion:2,title:digiBlocksData.blocks.image.title,category:"digiblocks",icon:{src:()=>{let{viewbox:ie,path:e}=digiBlocksData.blocks.image.icon;return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${ie}`,className:"digiblocks-editor-icons"},wp.element.createElement("path",{d:e}))}},description:digiBlocksData.blocks.image.description,keywords:[Za("image","digiblocks"),Za("picture","digiblocks"),Za("photo","digiblocks"),Za("media","digiblocks")],supports:{inserter:!!Ph("image"),html:!1,className:!1,customClassName:!1,anchor:!1},attributes:{id:{type:"string",default:""},anchor:{type:"string",default:""},visibility:{type:"object",default:{desktop:!1,tablet:!1,mobile:!1}},customClasses:{type:"string",default:""},imageId:{type:"number"},imageUrl:{type:"string",source:"attribute",selector:"img",attribute:"src"},altText:{type:"string",source:"attribute",selector:"img",attribute:"alt",default:""},title:{type:"string",source:"attribute",selector:"img",attribute:"title",default:""},caption:{type:"string",source:"html",selector:"figcaption",default:""},width:{type:"object",default:{desktop:100,tablet:100,mobile:100}},widthUnit:{type:"string",default:"%"},height:{type:"object",default:{desktop:"auto",tablet:"auto",mobile:"auto"}},heightUnit:{type:"string",default:"px"},sizeSlug:{type:"string",default:"large"},align:{type:"string",default:"center"},alignTablet:{type:"string",default:"center"},alignMobile:{type:"string",default:"center"},objectFit:{type:"string",default:"cover"},borderStyle:{type:"string",default:"none"},borderWidth:{type:"object",default:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderRadius:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderColor:{type:"string",default:"#e0e0e0"},borderHoverColor:{type:"string"},boxShadow:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.1)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},boxShadowHover:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},padding:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},margin:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},url:{type:"string",default:""},opensInNewTab:{type:"boolean",default:!1},rel:{type:"string",default:""},animation:{type:"string",default:"none"},hoverEffect:{type:"string",default:"none"},overlayEnable:{type:"boolean",default:!1},overlayColor:{type:"string",default:"rgba(0,0,0,0.5)"},overlayHoverOnly:{type:"boolean",default:!0}},example:{attributes:{imageUrl:"https://s.w.org/images/core/5.3/MtBlanc1.jpg",sizeSlug:"large",width:{desktop:100,tablet:100,mobile:100},widthUnit:"%"}},edit:Zd,save:Kd});var{__:so}=window.wp.i18n,{useBlockProps:Rh,InspectorControls:Ih,PanelColorSettings:Lh}=window.wp.blockEditor,{TextControl:Xd,ToggleControl:Qi,SelectControl:Ad,RangeControl:Ys,Placeholder:Oh,Spinner:kv,Button:ui,RadioControl:jh,__experimentalToggleGroupControl:Zs,__experimentalToggleGroupControlOption:Il}=window.wp.components,{useState:Ll,useEffect:Ji,useRef:Yi}=window.wp.element,{MediaUpload:eg,MediaUploadCheck:og}=window.wp.blockEditor,{useBlockId:Uh,getDimensionCSS:Ka,animations:Xa,animationPreview:Vh}=digi.utils,{tabIcons:Ks}=digi.icons,{ResponsiveControl:Aa,DimensionControl:en,BoxShadowControl:Fh,CustomTabPanel:Eh,TabPanelBody:zt}=digi.components,Xs=!1,on=null,Wh=()=>Xs?Promise.resolve():on||(on=new Promise((ie,e)=>{let K=digiBlocksData.lottie;if(!K){e(new Error("Lottie script URL not found in digiBlocksData"));return}let o=document.createElement("script");o.src=K,o.async=!0,o.onload=()=>{Xs=!0,ie()},o.onerror=()=>{e(new Error("Failed to load Lottie script from: "+K))},document.head.appendChild(o)}),on),qh=({attributes:ie,setAttributes:e,clientId:K})=>{let{id:o,anchor:O,visibility:a,customClasses:le,lottieSource:l,sourceType:_,lottieFile:y,autoplay:$,loop:P,speed:h,width:s,widthUnit:z,height:S,heightUnit:C,alignment:w,backgroundColor:T,showControls:U,padding:L,margin:V,borderStyle:Q,borderWidth:be,borderRadius:N,borderColor:u,shadow:v,animation:I}=ie;Uh(o,K,e);let[ne,Me]=Ll(window.digi.responsiveState.activeDevice),[Le,X]=Ll(()=>{if(window.digi.uiState){let c=window.digi.uiState.getActiveTab(K);if(c)return c}return"options"}),[H,Y]=Ll(!1),[W,ce]=Ll(null),[ue,A]=Ll(Xs),J=Yi(null),me=Yi(null),oe=Yi(null),fe=Yi(null),je=Yi(null),te=Yi(!0),to=[{label:"px",value:"px"},{label:"%",value:"%"},{label:"vw",value:"vw"}],De=[{label:"px",value:"px"},{label:"%",value:"%"},{label:"vh",value:"vh"}];Ji(()=>window.digi.responsiveState.subscribe(ge=>{Me(ge)}),[]),Ji(()=>(te.current=!0,()=>{if(te.current=!1,oe.current){try{oe.current.pause(),oe.current.destroy()}catch(c){console.warn("Error destroying animation during cleanup:",c)}oe.current=null}window.lottieResizeObserver&&(window.lottieResizeObserver.disconnect(),window.lottieResizeObserver=null)}),[]),Ji(()=>{ue||(Y(!0),Wh().then(()=>{te.current&&(A(!0),Y(!1),l&&me.current&&r())}).catch(c=>{te.current&&(ce("Failed to load animation library: "+c.message),Y(!1))}))},[]),Ji(()=>{ue&&l&&me.current&&r()},[ue,l,me.current]),Ji(()=>{oe.current&&(U&&!fe.current?xe():!U&&fe.current&&(fe.current.remove(),fe.current=null))},[U]);let r=()=>{if(!(!window.DotLottie||!l||!me.current)){Y(!0),ce(null);try{oe.current&&(oe.current.destroy?.(),oe.current=null),oe.current=new window.DotLottie({autoplay:$,loop:P,canvas:me.current,src:l}),oe.current.addEventListener("DOMLoaded",()=>{te.current&&(h!==1&&oe.current.setSpeed(h),P||oe.current.addEventListener("complete",()=>{oe.current.pause(),oe.current.goToFrame(0)}),$||(oe.current.pause(),oe.current.goToFrame(0)),Y(!1),U&&xe())}),oe.current.addEventListener("error",c=>{console.error("Animation failed to load:",c),te.current&&(ce("Animation failed to load. Check the file or URL."),Y(!1))}),setTimeout(()=>{te.current&&H&&Y(!1)},3e3)}catch(c){console.error("Error initializing animation:",c),ce("Failed to initialize animation: "+c.message),Y(!1)}}},D=()=>{setTimeout(()=>{te.current&&xe()},100)},xe=()=>{if(!J.current||!oe.current)return;fe.current&&fe.current.remove();let c=document.createElement("div");c.className="digiblocks-lottie-controls",c.style.position="absolute",c.style.bottom="10px",c.style.left="0",c.style.right="0",c.style.display="flex",c.style.justifyContent="center",c.style.zIndex="10";let ge=document.createElement("button");ge.className="digiblocks-lottie-play-pause";let M=$;ge.innerHTML=M?"\u23F8\uFE0F":"\u25B6\uFE0F",ge.style.background="rgba(0,0,0,0.3)",ge.style.color="white",ge.style.border="none",ge.style.borderRadius="4px",ge.style.padding="5px 10px",ge.style.cursor="pointer",ge.addEventListener("click",()=>{oe.current&&(M?(oe.current.pause(),ge.innerHTML="\u25B6\uFE0F"):(oe.current.play(),ge.innerHTML="\u23F8\uFE0F"),M=!M)}),c.appendChild(ge),J.current.appendChild(c),fe.current=c};Ji(()=>{if(!(!oe.current||!oe.current.isLoaded))try{oe.current.setLoop(P),oe.current.setSpeed(h),$?oe.current.play():(oe.current.pause(),oe.current.goToFrame(0)),P||(oe.current.removeEventListener("complete"),oe.current.addEventListener("complete",()=>{oe.current.pause(),oe.current.goToFrame(0)}))}catch(c){console.error("Error updating animation settings:",c)}},[$,P,h]);let Pe=c=>{!c||!c.url||e({lottieSource:c.url,lottieFile:c,sourceType:"file"})},Se=c=>{e({lottieSource:c,sourceType:"url"})},Ue=()=>{if(!l){ce("Please enter a valid URL");return}if(!ue){ce("Animation library is still loading. Please wait a moment.");return}r()},ee=()=>{Vh(o,I,Xa,je)},Be=()=>{let c=ne,ge="";return I&&I!=="none"&&Xa[I]&&(ge=Xa[I].keyframes),`
            /* Lottie Block - ${o} */
            .${o} {
				${Ka(L,"padding",c)}
				${Ka(V,"margin",c)}
                width: 100%;
                display: flex;
                justify-content: ${w==="left"?"flex-start":w==="right"?"flex-end":"center"};
            }
            
            .${o} .digiblocks-lottie-container {
                width: ${s[c]}${z};
                height: ${S[c]}${C};
                ${T?`background-color: ${T};`:""}
                overflow: hidden;
                position: relative;
                ${Q!=="none"?`
					border-style: ${Q};
					border-color: ${u};
					${Ka(be,"border-width",c)}
                `:""}
				${Ka(N,"border-radius",c)}
                ${v.enable?`box-shadow: ${v.horizontal}px ${v.vertical}px ${v.blur}px ${v.spread}px ${v.color};`:""}
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
            ${ge}

			/* Visibility Controls */
			${a.desktop?`
				@media (min-width: 992px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${a.tablet?`
				@media (min-width: 768px) and (max-width: 991px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${a.mobile?`
				@media (max-width: 767px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}
        `},Xe=[{label:so("None","digiblocks"),value:"none"},...Object.keys(Xa).map(c=>({label:c.replace(/-/g," ").replace(/\b\w/g,ge=>ge.toUpperCase()),value:c}))],q=[{label:so("None","digiblocks"),value:"none"},{label:so("Solid","digiblocks"),value:"solid"},{label:so("Dashed","digiblocks"),value:"dashed"},{label:so("Dotted","digiblocks"),value:"dotted"},{label:so("Double","digiblocks"),value:"double"}],ye=[{name:"options",title:so("Options","digiblocks"),icon:Ks.optionsIcon},{name:"style",title:so("Style","digiblocks"),icon:Ks.styleIcon},{name:"advanced",title:so("Advanced","digiblocks"),icon:Ks.advancedIcon}],qe=()=>{switch(Le){case"options":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(zt,{tab:"options",name:"source",title:so("Source","digiblocks"),initialOpen:!0},wp.element.createElement(jh,{label:so("Source Type","digiblocks"),selected:_,options:[{label:so("File","digiblocks"),value:"file"},{label:so("URL","digiblocks"),value:"url"}],onChange:c=>e({sourceType:c})}),_==="file"&&wp.element.createElement(og,null,wp.element.createElement("div",{style:{marginTop:"12px"}},wp.element.createElement(eg,{onSelect:Pe,allowedTypes:["application/json","text/plain","application/octet-stream"],value:y?.id||0,render:({open:c})=>wp.element.createElement("div",null,wp.element.createElement(ui,{variant:"secondary",onClick:c,style:{marginBottom:"8px",width:"100%"}},so(l?"Replace Lottie File":"Upload Lottie File","digiblocks")),l&&wp.element.createElement("div",{className:"digiblocks-lottie-file-name",style:{fontSize:"12px",overflow:"hidden",textOverflow:"ellipsis",marginBottom:"8px"}},y?.filename||l.split("/").pop()))}))),_==="url"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Xd,{label:so("Lottie URL","digiblocks"),value:l,onChange:Se,placeholder:"https://example.com/animation.json",help:so("Enter the URL to a JSON Lottie animation file","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(ui,{variant:"secondary",onClick:Ue,style:{marginTop:"8px"},disabled:!l},so("Load Animation","digiblocks")))),wp.element.createElement(zt,{tab:"options",name:"animation",title:so("Animation","digiblocks"),initialOpen:!1},wp.element.createElement(Qi,{label:so("Autoplay","digiblocks"),checked:$,onChange:c=>e({autoplay:c}),help:so("Automatically start the animation when the page loads","digiblocks"),__nextHasNoMarginBottom:!0}),wp.element.createElement(Qi,{label:so("Loop","digiblocks"),checked:P,onChange:c=>e({loop:c}),help:so("Repeat the animation indefinitely","digiblocks"),__nextHasNoMarginBottom:!0}),wp.element.createElement(Ys,{label:so("Animation Speed","digiblocks"),value:h,onChange:c=>e({speed:c}),min:.1,max:3,step:.1,help:so("1 = normal speed, 2 = double speed, 0.5 = half speed","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Qi,{label:so("Show Controls","digiblocks"),checked:U,onChange:c=>e({showControls:c}),help:so("Display play/pause control","digiblocks"),__nextHasNoMarginBottom:!0})),wp.element.createElement(zt,{tab:"options",name:"dimensions",title:so("Dimensions","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"digiblocks-size-type-field-tabs"},wp.element.createElement("div",{className:"digiblocks-responsive-control-inner"},wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"digiblocks-range-control digiblocks-size-type-field-tabs"},wp.element.createElement("div",{className:"digiblocks-control__header"},wp.element.createElement("div",{className:"digiblocks-responsive-label-wrap"},wp.element.createElement("span",{className:"digiblocks-control-label"},so("Width","digiblocks")),wp.element.createElement("button",{type:"button","aria-label":so(`Switch to ${window.digi.responsiveState.getNextDevice()} view`,"digiblocks"),className:`components-button digiblocks-responsive-common-button digiblocks-device-${ne}`,onClick:()=>window.digi.responsiveState.toggleDevice()},window.digi.icons.deviceIcons[ne])),wp.element.createElement("div",{className:"digiblocks-range-control__actions digiblocks-control__actions"},wp.element.createElement("div",{tabIndex:"0"},wp.element.createElement("button",{type:"button",disabled:s[ne]===(z==="%"||z==="vw"?100:300),className:"components-button digiblocks-reset is-secondary is-small",onClick:()=>e({width:{...s,[ne]:z==="%"||z==="vw"?100:300}})},wp.element.createElement("span",{className:"dashicon dashicons dashicons-image-rotate"}))),wp.element.createElement(Zs,{value:z,onChange:c=>{let ge=s[ne],M=ge;(c==="%"||c==="vw")&&ge>100?M=100:(z==="%"||z==="vw")&&c==="px"&&ge<50&&(M=300),e({widthUnit:c,width:{...s,[ne]:M}})},isBlock:!0,isSmall:!0,hideLabelFromVision:!0,"aria-label":so("Width Unit","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},to.map(c=>wp.element.createElement(Il,{key:c.value,value:c.value,label:c.label}))))),wp.element.createElement("div",{className:"digiblocks-range-control__mobile-controls"},wp.element.createElement(Ys,{value:s[ne],onChange:c=>e({width:{...s,[ne]:c}}),min:10,max:z==="%"||z==="vw"?100:1e3,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})))))),wp.element.createElement("div",{className:"digiblocks-size-type-field-tabs"},wp.element.createElement("div",{className:"digiblocks-responsive-control-inner"},wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"digiblocks-range-control digiblocks-size-type-field-tabs"},wp.element.createElement("div",{className:"digiblocks-control__header"},wp.element.createElement("div",{className:"digiblocks-responsive-label-wrap"},wp.element.createElement("span",{className:"digiblocks-control-label"},so("Height","digiblocks")),wp.element.createElement("button",{type:"button","aria-label":so(`Switch to ${window.digi.responsiveState.getNextDevice()} view`,"digiblocks"),className:`components-button digiblocks-responsive-common-button digiblocks-device-${ne}`,onClick:()=>window.digi.responsiveState.toggleDevice()},window.digi.icons.deviceIcons[ne])),wp.element.createElement("div",{className:"digiblocks-range-control__actions digiblocks-control__actions"},wp.element.createElement("div",{tabIndex:"0"},wp.element.createElement("button",{type:"button",disabled:S[ne]===(C==="%"||C==="vh"?100:300),className:"components-button digiblocks-reset is-secondary is-small",onClick:()=>e({height:{...S,[ne]:C==="%"||C==="vh"?100:300}})},wp.element.createElement("span",{className:"dashicon dashicons dashicons-image-rotate"}))),wp.element.createElement(Zs,{value:C,onChange:c=>{let ge=S[ne],M=ge;(c==="%"||c==="vh")&&ge>100?M=100:(C==="%"||C==="vh")&&c==="px"&&ge<50&&(M=300),e({heightUnit:c,height:{...S,[ne]:M}})},isBlock:!0,isSmall:!0,hideLabelFromVision:!0,"aria-label":so("Height Unit","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},De.map(c=>wp.element.createElement(Il,{key:c.value,value:c.value,label:c.label}))))),wp.element.createElement("div",{className:"digiblocks-range-control__mobile-controls"},wp.element.createElement(Ys,{value:S[ne],onChange:c=>e({height:{...S,[ne]:c}}),min:10,max:C==="%"||C==="vh"?100:1e3,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})))))),wp.element.createElement(Zs,{label:so("Alignment","digiblocks"),value:w,onChange:c=>e({alignment:c}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(Il,{value:"left",label:so("Left","digiblocks")}),wp.element.createElement(Il,{value:"center",label:so("Center","digiblocks")}),wp.element.createElement(Il,{value:"right",label:so("Right","digiblocks")}))));case"style":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(zt,{tab:"style",name:"colors",title:so("Colors","digiblocks"),initialOpen:!0},wp.element.createElement(Lh,{title:so("Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:T,onChange:c=>e({backgroundColor:c}),label:so("Background Color","digiblocks")},{value:u,onChange:c=>e({borderColor:c}),label:so("Border Color","digiblocks")}]})),wp.element.createElement(zt,{tab:"style",name:"borders",title:so("Borders & Shadows","digiblocks"),initialOpen:!1},wp.element.createElement(Ad,{label:so("Border Style","digiblocks"),value:Q,options:q,onChange:c=>e({borderStyle:c}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),Q!=="none"&&wp.element.createElement(Aa,{label:so("Border Width","digiblocks")},wp.element.createElement(en,{values:be[ne],onChange:c=>e({borderWidth:{...be,[ne]:c}})})),wp.element.createElement(Aa,{label:so("Border Radius","digiblocks")},wp.element.createElement(en,{values:N[ne],onChange:c=>e({borderRadius:{...N,[ne]:c}}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]})),wp.element.createElement(Fh,{label:so("Shadow","digiblocks"),normalValue:v,onNormalChange:c=>e({shadow:c})})),wp.element.createElement(zt,{tab:"style",name:"spacing",title:so("Spacing","digiblocks"),initialOpen:!1},wp.element.createElement(Aa,{label:so("Padding","digiblocks")},wp.element.createElement(en,{values:L[ne],onChange:c=>e({padding:{...L,[ne]:c}})})),wp.element.createElement(Aa,{label:so("Margin","digiblocks")},wp.element.createElement(en,{values:V[ne],onChange:c=>e({margin:{...V,[ne]:c}})}))));case"advanced":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(zt,{tab:"advanced",name:"animation",title:so("Animation","digiblocks"),initialOpen:!0},wp.element.createElement(Ad,{label:so("Animation Effect","digiblocks"),value:I,options:Xe,onChange:c=>e({animation:c}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),I&&I!=="none"&&wp.element.createElement("div",{style:{marginTop:"10px"}},wp.element.createElement(ui,{variant:"secondary",isSecondary:!0,onClick:ee,style:{width:"100%"}},so("Preview Animation","digiblocks")))),wp.element.createElement(zt,{tab:"advanced",name:"visibility",title:so("Visibility","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control__help",style:{padding:"12px",backgroundColor:"#f0f6fc",border:"1px solid #c3ddfd",borderRadius:"4px",marginBottom:"16px"}},wp.element.createElement("strong",null,so("Editor Note:","digiblocks")),wp.element.createElement("br",null),so("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.","digiblocks")),wp.element.createElement(Qi,{label:so("Hide on Desktop","digiblocks"),checked:a.desktop,onChange:c=>e({visibility:{...a,desktop:c}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(Qi,{label:so("Hide on Tablet","digiblocks"),checked:a.tablet,onChange:c=>e({visibility:{...a,tablet:c}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(Qi,{label:so("Hide on Mobile","digiblocks"),checked:a.mobile,onChange:c=>e({visibility:{...a,mobile:c}}),__nextHasNoMarginBottom:!0})),wp.element.createElement(zt,{tab:"advanced",name:"additional",title:so("Additional","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control html-anchor-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"html-anchor"},so("HTML anchor","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"html-anchor",value:O||"",onChange:c=>e({anchor:c.target.value}),"aria-describedby":"html-anchor-help",autoCapitalize:"none",autoComplete:"off"})),wp.element.createElement("p",{id:"html-anchor-help",className:"components-base-control__help"},so(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`,"digiblocks")," ",wp.element.createElement("a",{className:"components-external-link",href:"https://wordpress.org/documentation/article/page-jumps/",target:"_blank",rel:"external noreferrer noopener"},wp.element.createElement("span",{className:"components-external-link__contents"},so("Learn more about anchors","digiblocks")),wp.element.createElement("span",{className:"components-external-link__icon","aria-label":"(opens in a new tab)"},"\u2197")))),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"additional-css-classes"},so("Additional CSS class(es)","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"additional-css-classes",value:le||"",onChange:c=>e({customClasses:c.target.value}),"aria-describedby":"additional-css-classes-help",autoComplete:"off"})),wp.element.createElement("p",{id:"additional-css-classes-help",className:"components-base-control__help"},so("Separate multiple classes with spaces.","digiblocks")))));default:return null}},E=`digiblocks-lottie ${o} ${le||""}`,se=I&&I!=="none"?` animate-${I}`:"",B=Rh({className:E+se,id:O||null});return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Ih,null,wp.element.createElement(Eh,{tabs:ye,activeTab:Le,onSelect:X},qe())),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:Be()}}),wp.element.createElement("div",{...B},l?wp.element.createElement("div",{className:"digiblocks-lottie-container",ref:J,style:{width:`${s[ne]}${z}`,height:`${S[ne]}${C}`,position:"relative"}},wp.element.createElement("canvas",{ref:me,style:{width:"100%",height:"100%",display:"block"}}),W&&wp.element.createElement("div",{className:"digiblocks-lottie-error",style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",textAlign:"center",color:"#cc1818",maxWidth:"90%",padding:"10px"}},wp.element.createElement("p",null,W),wp.element.createElement(ui,{variant:"secondary",onClick:()=>{ce(null),r()}},so("Try Again","digiblocks")))):wp.element.createElement(Oh,{icon:"format-image",label:so("Lottie Animation","digiblocks"),instructions:so("Upload a Lottie animation file or provide a URL to a Lottie JSON file.","digiblocks")},_==="file"?wp.element.createElement(og,null,wp.element.createElement(eg,{onSelect:Pe,allowedTypes:["application/json","text/plain","application/octet-stream"],render:({open:c})=>wp.element.createElement(ui,{variant:"primary",onClick:c},so("Upload Lottie File","digiblocks"))})):wp.element.createElement("div",{style:{width:"100%",maxWidth:"400px"}},wp.element.createElement(Xd,{placeholder:so("Enter Lottie JSON URL","digiblocks"),value:l,onChange:Se,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(ui,{variant:"primary",onClick:Ue,style:{marginTop:"10px"},disabled:!l},so("Load Animation","digiblocks"))),wp.element.createElement("div",{style:{marginTop:"12px",display:"flex",justifyContent:"center"}},wp.element.createElement(ui,{variant:"link",onClick:()=>e({sourceType:_==="file"?"url":"file"})},so(_==="file"?"Or use URL instead":"Or upload a file instead","digiblocks"))))))},tg=qh;var{__:xv}=window.wp.i18n,{useBlockProps:Gh}=window.wp.blockEditor,Qh=({attributes:ie})=>{let{id:e,anchor:K,customClasses:o,lottieSource:O,autoplay:a,loop:le,speed:l,width:_,widthUnit:y,height:$,heightUnit:P,alignment:h,backgroundColor:s,showControls:z,animation:S,borderStyle:C,borderColor:w,borderWidth:T,borderRadius:U,shadow:L}=ie;if(!O)return null;let V=`digiblocks-lottie ${e} ${o||""}`,Q=S&&S!=="none"?` animate-${S}`:"",be=Gh.save({className:V+Q,id:K||void 0});return wp.element.createElement("div",{...be},wp.element.createElement("div",{className:"digiblocks-lottie-container","data-src":O,"data-autoplay":a.toString(),"data-loop":le.toString(),"data-speed":l.toString(),"data-controls":z.toString()},wp.element.createElement("canvas",{width:"100%",height:"100%",style:{width:"100%",height:"100%",display:"block"}})))},ig=Qh;var{__:tn}=window.wp.i18n,{registerBlockType:Jh}=window.wp.blocks,{getBlockActiveStatus:Yh}=window.wp.digiBlocks;Jh("digiblocks/lottie",{apiVersion:2,title:digiBlocksData.blocks.lottie.title,category:"digiblocks",icon:{src:()=>{let{viewbox:ie,path:e}=digiBlocksData.blocks.lottie.icon;return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${ie}`,className:"digiblocks-editor-icons"},wp.element.createElement("path",{d:e}))}},description:digiBlocksData.blocks.lottie.description,keywords:[tn("lottie","digiblocks"),tn("animation","digiblocks"),tn("dotlottie","digiblocks"),tn("motion","digiblocks")],supports:{inserter:!!Yh("lottie"),html:!1,className:!1,customClassName:!1,anchor:!1},attributes:{id:{type:"string",default:""},anchor:{type:"string",default:""},visibility:{type:"object",default:{desktop:!1,tablet:!1,mobile:!1}},customClasses:{type:"string",default:""},lottieSource:{type:"string",default:""},sourceType:{type:"string",default:"file"},lottieFile:{type:"object",default:null},autoplay:{type:"boolean",default:!0},loop:{type:"boolean",default:!0},speed:{type:"number",default:1},width:{type:"object",default:{desktop:300,tablet:300,mobile:300}},widthUnit:{type:"string",default:"px"},height:{type:"object",default:{desktop:300,tablet:300,mobile:300}},heightUnit:{type:"string",default:"px"},alignment:{type:"string",default:"center"},backgroundColor:{type:"string",default:""},showControls:{type:"boolean",default:!1},padding:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},margin:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderStyle:{type:"string",default:"none"},borderWidth:{type:"object",default:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderRadius:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderColor:{type:"string",default:"#e0e0e0"},shadow:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0}},animation:{type:"string",default:"none"}},example:{attributes:{lottieSource:"https://lottie.host/74c2e0cc-daa3-4269-b9a8-3205d6cd70d6/V7KchLpRt2.lottie",autoplay:!0,loop:!0,width:{desktop:300,tablet:300,mobile:300},height:{desktop:300,tablet:300,mobile:300}}},edit:tg,save:ig});var{__:Ee}=window.wp.i18n,{useBlockProps:Zh,InspectorControls:Kh,PanelColorSettings:Ol,RichText:As}=window.wp.blockEditor,{TextControl:ln,ToggleControl:Zi,SelectControl:an,RangeControl:er,TabPanel:Xh,Notice:Ah,Button:ef,__experimentalToggleGroupControl:of,__experimentalToggleGroupControlOption:lg}=window.wp.components,{useState:ag,useEffect:ng,useRef:tf}=window.wp.element,{useBlockId:lf,getDimensionCSS:jl,animations:Ul,animationPreview:sg}=digi.utils,{tabIcons:or}=digi.icons,{ResponsiveButtonGroup:af,ResponsiveControl:Et,DimensionControl:Vl,TypographyControl:nn,BoxShadowControl:tr,CustomTabPanel:nf,TabPanelBody:mt,ResponsiveRangeControl:rg}=digi.components,sf=({attributes:ie,setAttributes:e,clientId:K})=>{let{id:o,anchor:O,visibility:a,customClasses:le,layout:l,align:_,title:y,showTitle:$,description:P,showDescription:h,emailPlaceholder:s,namePlaceholder:z,buttonText:S,showNameField:C,successMessage:w,errorMessage:T,titleColor:U,titleHoverColor:L,descriptionColor:V,inputTextColor:Q,inputBackgroundColor:be,inputBorderColor:N,inputBorderFocusColor:u,inputPlaceholderColor:v,buttonTextColor:I,buttonBackgroundColor:ne,buttonTextHoverColor:Me,buttonBackgroundHoverColor:Le,buttonBorderColor:X,buttonBorderHoverColor:H,backgroundColor:Y,backgroundHoverColor:W,containerBorderColor:ce,containerBorderHoverColor:ue,titleTypography:A,contentTypography:J,textTypography:me,buttonTypography:oe,containerBorderRadius:fe,containerBorderWidth:je,containerBorderStyle:te,inputBorderRadius:to,inputBorderWidth:De,inputBorderStyle:r,buttonBorderRadius:D,buttonBorderWidth:xe,buttonBorderStyle:Pe,spacing:Se,inputSpacing:Ue,padding:ee,margin:Be,boxShadow:Xe,boxShadowHover:q,buttonBoxShadow:ye,buttonBoxShadowHover:qe,inputBoxShadow:E,inputBoxShadowHover:se,animation:B}=ie;lf(o,K,e);let[c,ge]=ag(window.digi.responsiveState.activeDevice),[M,k]=ag(()=>{if(window.digi.uiState){let t=window.digi.uiState.getActiveTab(K);if(t)return t}return"options"});ng(()=>window.digi.responsiveState.subscribe(b=>{ge(b)}),[]);let G=tf(null);ng(()=>{if(B&&B!=="none"){let t=setTimeout(()=>{sg(o,B,Ul,G)},100);return()=>clearTimeout(t)}},[B]);let d=()=>{sg(o,B,Ul,G)},re=[{label:Ee("None","digiblocks"),value:"none"},...Object.keys(Ul).map(t=>({label:t.replace(/-/g," ").replace(/\b\w/g,b=>b.toUpperCase()),value:t}))],x=[{label:Ee("Stacked","digiblocks"),value:"stacked"},{label:Ee("Inline","digiblocks"),value:"inline"}],m=[{label:Ee("None","digiblocks"),value:"none"},{label:Ee("Solid","digiblocks"),value:"solid"},{label:Ee("Dashed","digiblocks"),value:"dashed"},{label:Ee("Dotted","digiblocks"),value:"dotted"},{label:Ee("Double","digiblocks"),value:"double"}],he=[{name:"options",title:Ee("Options","digiblocks"),icon:or.optionsIcon},{name:"style",title:Ee("Style","digiblocks"),icon:or.styleIcon},{name:"advanced",title:Ee("Advanced","digiblocks"),icon:or.advancedIcon}],j=[{name:"normal",title:Ee("Normal","digiblocks"),className:"digiblocks-tab-1 normal"},{name:"hover",title:Ee("Hover","digiblocks"),className:"digiblocks-tab-2 hover"}],Ne=()=>{let t=c,b="";return B&&B!=="none"&&Ul[B]&&(b=Ul[B].keyframes),`
            /* Newsletter Block - ${o} */
            .${o} {
                ${jl(ee,"padding",t)}
                ${jl(Be,"margin",t)}
                ${Y?`background-color: ${Y};`:""}
                ${Xe?.enable?`box-shadow: ${Xe.horizontal}px ${Xe.vertical}px ${Xe.blur}px ${Xe.spread}px ${Xe.color};`:""}
				${te!=="none"?"border: "+(je[t]||1)+"px "+(te||"solid")+" "+ce+";":"border: none;"}
                ${jl(fe,"border-radius",t)}
                transition: all 0.3s ease;
                text-align: ${_[t]==="center"?"center":_[t]==="right"?"right":"left"};
            }

            .${o}:hover {
                ${W?`background-color: ${W};`:""}
                ${ue?`border-color: ${ue};`:""}
                ${q?.enable?`box-shadow: ${q.horizontal}px ${q.vertical}px ${q.blur}px ${q.spread}px ${q.color};`:""}
            }

            /* Newsletter Title */
            .${o} .digiblocks-newsletter-title {
                color: ${U};
                margin-top: 0;
                margin-bottom: ${Se[t]?.value||20}${Se[t]?.unit||"px"};
                ${A.fontFamily?`font-family: ${A.fontFamily};`:""}
                ${A.fontSize?.[t]?`font-size: ${A.fontSize[t]}${A.fontSizeUnit||"px"};`:""}
                ${A.fontWeight?`font-weight: ${A.fontWeight};`:""}
                ${A.fontStyle?`font-style: ${A.fontStyle};`:""}
                ${A.textTransform?`text-transform: ${A.textTransform};`:""}
                ${A.textDecoration?`text-decoration: ${A.textDecoration};`:""}
                ${A.lineHeight?.[t]?`line-height: ${A.lineHeight[t]}${A.lineHeightUnit||"em"};`:""}
                ${A.letterSpacing?.[t]?`letter-spacing: ${A.letterSpacing[t]}${A.letterSpacingUnit||"px"};`:""}
                transition: color 0.3s ease;
            }

            .${o}:hover .digiblocks-newsletter-title {
                ${L?`color: ${L};`:""}
            }

            /* Newsletter Description */
            .${o} .digiblocks-newsletter-description {
                color: ${V};
                margin-bottom: ${Se[t]?.value||20}${Se[t]?.unit||"px"};
                ${J.fontFamily?`font-family: ${J.fontFamily};`:""}
                ${J.fontSize?.[t]?`font-size: ${J.fontSize[t]}${J.fontSizeUnit||"px"};`:""}
                ${J.fontWeight?`font-weight: ${J.fontWeight};`:""}
                ${J.fontStyle?`font-style: ${J.fontStyle};`:""}
                ${J.textTransform?`text-transform: ${J.textTransform};`:""}
                ${J.textDecoration?`text-decoration: ${J.textDecoration};`:""}
                ${J.lineHeight?.[t]?`line-height: ${J.lineHeight[t]}${J.lineHeightUnit||"em"};`:""}
                ${J.letterSpacing?.[t]?`letter-spacing: ${J.letterSpacing[t]}${J.letterSpacingUnit||"px"};`:""}
            }

            /* Newsletter Form */
            .${o} .digiblocks-newsletter-form {
                display: flex;
                ${l==="stacked"?"flex-direction: column;":"flex-direction: row;"}
                gap: ${Ue[t]?.value||10}${Ue[t]?.unit||"px"};
                ${l==="inline"&&_[t]==="center"?"justify-content: center;":""}
                ${l==="inline"&&_[t]==="right"?"justify-content: flex-end;":""}
            }

            /* Form Fields */
            .${o} .digiblocks-newsletter-fields {
                display: flex;
                ${l==="stacked"?"flex-direction: column;":"flex-direction: row;"}
                gap: ${Ue[t]?.value||10}${Ue[t]?.unit||"px"};
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
                ${me.fontSize?.[t]?`width: ${me.fontSize[t]}${me.fontSizeUnit||"px"};`:"width: 1em;"}
                ${me.fontSize?.[t]?`height: ${me.fontSize[t]}${me.fontSizeUnit||"px"};`:"height: 1em;"}
                fill: ${Q};
                pointer-events: none;
                z-index: 2;
                opacity: 0.7;
                transition: all 0.3s ease;
            }

            /* Input Styles */
            .${o} .digiblocks-newsletter-input {
                width: 100%;
                padding: 12px 16px 12px 50px;
                color: ${Q};
                background-color: ${be};
				${r!=="none"?"border: "+(De[t]||1)+"px "+(r||"solid")+" "+N+";":"border: none;"}
                ${jl(to,"border-radius",t)}
                ${E?.enable?`box-shadow: ${E.horizontal}px ${E.vertical}px ${E.blur}px ${E.spread}px ${E.color};`:""}
                ${me.fontFamily?`font-family: ${me.fontFamily};`:""}
                ${me.fontSize?.[t]?`font-size: ${me.fontSize[t]}${me.fontSizeUnit||"px"};`:""}
                ${me.fontWeight?`font-weight: ${me.fontWeight};`:""}
                ${me.fontStyle?`font-style: ${me.fontStyle};`:""}
                ${me.textTransform?`text-transform: ${me.textTransform};`:""}
                ${me.textDecoration?`text-decoration: ${me.textDecoration};`:""}
                ${me.lineHeight?.[t]?`line-height: ${me.lineHeight[t]}${me.lineHeightUnit||"em"};`:""}
                ${me.letterSpacing?.[t]?`letter-spacing: ${me.letterSpacing[t]}${me.letterSpacingUnit||"px"};`:""}
                transition: all 0.3s ease;
                outline: none;
				box-shadow: none;
            }

            .${o} .digiblocks-newsletter-input::placeholder {
                color: ${v};
            }

            .${o} .digiblocks-newsletter-input:focus {
                border-color: ${u};
                ${se?.enable?`box-shadow: ${se.horizontal}px ${se.vertical}px ${se.blur}px ${se.spread}px ${se.color};`:""}
            }

            .${o} .digiblocks-newsletter-input:focus + .digiblocks-newsletter-input-icon {
                opacity: 1;
                fill: ${u||Q};
            }

            /* Button Styles */
            .${o} .digiblocks-newsletter-button {
                padding: 12px 24px;
                color: ${I};
                background-color: ${ne};
				${Pe!=="none"?"border: "+(xe[t]||1)+"px "+(Pe||"solid")+" "+X+";":"border: none;"}
                ${jl(D,"border-radius",t)}
                ${ye?.enable?`box-shadow: ${ye.horizontal}px ${ye.vertical}px ${ye.blur}px ${ye.spread}px ${ye.color};`:""}
                ${oe.fontFamily?`font-family: ${oe.fontFamily};`:""}
                ${oe.fontSize?.[t]?`font-size: ${oe.fontSize[t]}${oe.fontSizeUnit||"px"};`:""}
                ${oe.fontWeight?`font-weight: ${oe.fontWeight};`:""}
                ${oe.fontStyle?`font-style: ${oe.fontStyle};`:""}
                ${oe.textTransform?`text-transform: ${oe.textTransform};`:""}
                ${oe.textDecoration?`text-decoration: ${oe.textDecoration};`:""}
                ${oe.lineHeight?.[t]?`line-height: ${oe.lineHeight[t]}${oe.lineHeightUnit||"em"};`:""}
                ${oe.letterSpacing?.[t]?`letter-spacing: ${oe.letterSpacing[t]}${oe.letterSpacingUnit||"px"};`:""}
                cursor: pointer;
                transition: all 0.3s ease;
                ${l==="stacked"?"width: 100%;":"white-space: nowrap;"}
            }

            .${o} .digiblocks-newsletter-button:hover {
                color: ${Me||I};
                background-color: ${Le||ne};
                border-color: ${H||X};
                ${qe?.enable?`box-shadow: ${qe.horizontal}px ${qe.vertical}px ${qe.blur}px ${qe.spread}px ${qe.color};`:""}
            }

            /* Messages */
            .${o} .digiblocks-newsletter-message {
                margin-top: ${Se[t]}px;
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
            ${b}

			/* Responsive */
			@media (max-width: 767px) {
				.${o} .digiblocks-newsletter-form {
					flex-direction: column;
				}
			}

			/* Visibility Controls */
			${a.desktop?`
				@media (min-width: 992px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${a.tablet?`
				@media (min-width: 768px) and (max-width: 991px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${a.mobile?`
				@media (max-width: 767px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}
        `},f=()=>{switch(M){case"options":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(mt,{tab:"options",name:"content",title:Ee("Content","digiblocks"),initialOpen:!0},wp.element.createElement(Ah,{status:"warning",isDismissible:!1,className:"digiblocks-notice components-base-control"},wp.element.createElement(wp.element.Fragment,null,Ee("Configure your newsletter platform in ","digiblocks"),wp.element.createElement("a",{href:"/wp-admin/admin.php?page=digiblocks-settings",target:"_blank",rel:"noopener noreferrer"},Ee("DigiBlocks Settings","digiblocks")),Ee(" to enable subscriptions.","digiblocks"))),wp.element.createElement(Zi,{label:Ee("Show Title","digiblocks"),checked:$,onChange:t=>e({showTitle:t}),__nextHasNoMarginBottom:!0}),wp.element.createElement(Zi,{label:Ee("Show Description","digiblocks"),checked:h,onChange:t=>e({showDescription:t}),__nextHasNoMarginBottom:!0}),wp.element.createElement(Zi,{label:Ee("Show Name Field","digiblocks"),checked:C,onChange:t=>e({showNameField:t}),__nextHasNoMarginBottom:!0}),wp.element.createElement(ln,{label:Ee("Email Placeholder","digiblocks"),value:s,onChange:t=>e({emailPlaceholder:t}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),C&&wp.element.createElement(ln,{label:Ee("Name Placeholder","digiblocks"),value:z,onChange:t=>e({namePlaceholder:t}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(ln,{label:Ee("Success Message","digiblocks"),value:w,onChange:t=>e({successMessage:t}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(ln,{label:Ee("Error Message","digiblocks"),value:T,onChange:t=>e({errorMessage:t}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(mt,{tab:"options",name:"layout",title:Ee("Layout","digiblocks"),initialOpen:!1},wp.element.createElement(of,{label:Ee("Layout","digiblocks"),value:l,onChange:t=>e({layout:t}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(lg,{value:"stacked",label:Ee("Stacked","digiblocks")}),wp.element.createElement(lg,{value:"inline",label:Ee("Inline","digiblocks")})),wp.element.createElement(af,{label:Ee("Alignment","digiblocks"),value:_,onChange:t=>e({align:t}),options:[{label:Ee("Left","digiblocks"),value:"left"},{label:Ee("Center","digiblocks"),value:"center"},{label:Ee("Right","digiblocks"),value:"right"}]}),wp.element.createElement(rg,{label:Ee("Content Spacing","digiblocks"),value:Se,onChange:t=>e({spacing:t}),units:[{label:"px",value:"px"},{label:"em",value:"em"},{label:"rem",value:"rem"}],defaultUnit:"px",min:0,max:100,step:1,defaultValues:{desktop:{value:20,unit:"px"},tablet:{value:20,unit:"px"},mobile:{value:20,unit:"px"}}}),wp.element.createElement(rg,{label:Ee("Field Spacing","digiblocks"),value:Ue,onChange:t=>e({inputSpacing:t}),units:[{label:"px",value:"px"},{label:"em",value:"em"},{label:"rem",value:"rem"}],defaultUnit:"px",min:0,max:50,step:1,defaultValues:{desktop:{value:10,unit:"px"},tablet:{value:8,unit:"px"},mobile:{value:6,unit:"px"}}})));case"style":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(mt,{tab:"style",name:"colors",title:Ee("Colors","digiblocks"),initialOpen:!0},wp.element.createElement(Xh,{className:"digiblocks-control-tabs",activeClass:"active-tab",tabs:j},t=>t.name==="normal"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Ol,{title:Ee("Text Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:U,onChange:b=>e({titleColor:b}),label:Ee("Title Color","digiblocks")},{value:V,onChange:b=>e({descriptionColor:b}),label:Ee("Description Color","digiblocks")}]}),wp.element.createElement(Ol,{title:Ee("Input Colors","digiblocks"),initialOpen:!1,enableAlpha:!0,colorSettings:[{value:Q,onChange:b=>e({inputTextColor:b}),label:Ee("Input Text Color","digiblocks")},{value:be,onChange:b=>e({inputBackgroundColor:b}),label:Ee("Input Background","digiblocks")},{value:N,onChange:b=>e({inputBorderColor:b}),label:Ee("Input Border","digiblocks")},{value:u,onChange:b=>e({inputBorderFocusColor:b}),label:Ee("Input Border Focus","digiblocks")},{value:v,onChange:b=>e({inputPlaceholderColor:b}),label:Ee("Placeholder Color","digiblocks")}]}),wp.element.createElement(Ol,{title:Ee("Button Colors","digiblocks"),initialOpen:!1,enableAlpha:!0,colorSettings:[{value:I,onChange:b=>e({buttonTextColor:b}),label:Ee("Button Text","digiblocks")},{value:ne,onChange:b=>e({buttonBackgroundColor:b}),label:Ee("Button Background","digiblocks")},{value:X,onChange:b=>e({buttonBorderColor:b}),label:Ee("Button Border","digiblocks")}]}),wp.element.createElement(Ol,{title:Ee("Background Colors","digiblocks"),initialOpen:!1,enableAlpha:!0,colorSettings:[{value:Y,onChange:b=>e({backgroundColor:b}),label:Ee("Background Color","digiblocks")},{value:ce,onChange:b=>e({containerBorderColor:b}),label:Ee("Border Color","digiblocks")}]})):wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Ol,{title:Ee("Hover Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:L,onChange:b=>e({titleHoverColor:b}),label:Ee("Title Hover Color","digiblocks")},{value:Me,onChange:b=>e({buttonTextHoverColor:b}),label:Ee("Button Text Hover","digiblocks")},{value:Le,onChange:b=>e({buttonBackgroundHoverColor:b}),label:Ee("Button Background Hover","digiblocks")},{value:H,onChange:b=>e({buttonBorderHoverColor:b}),label:Ee("Button Border Hover","digiblocks")},{value:W,onChange:b=>e({backgroundHoverColor:b}),label:Ee("Background Hover","digiblocks")},{value:ue,onChange:b=>e({containerBorderHoverColor:b}),label:Ee("Border Hover","digiblocks")}]})))),wp.element.createElement(mt,{tab:"style",name:"typography",title:Ee("Typography","digiblocks"),initialOpen:!1},wp.element.createElement(nn,{label:Ee("Title Typography","digiblocks"),value:A,onChange:t=>e({titleTypography:t}),defaults:{fontSize:{desktop:24,tablet:22,mobile:20},fontWeight:"600",lineHeight:{desktop:1.4,tablet:1.3,mobile:1.2}}}),wp.element.createElement(nn,{label:Ee("Description Typography","digiblocks"),value:J,onChange:t=>e({contentTypography:t}),defaults:{fontSize:{desktop:16,tablet:15,mobile:14},lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3}}}),wp.element.createElement(nn,{label:Ee("Input Typography","digiblocks"),value:me,onChange:t=>e({textTypography:t}),defaults:{fontSize:{desktop:16,tablet:15,mobile:14},lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3}}}),wp.element.createElement(nn,{label:Ee("Button Typography","digiblocks"),value:oe,onChange:t=>e({buttonTypography:t}),defaults:{fontSize:{desktop:16,tablet:15,mobile:14},fontWeight:"500",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3}}})),wp.element.createElement(mt,{tab:"style",name:"borders",title:Ee("Borders & Radius","digiblocks"),initialOpen:!1},wp.element.createElement("h4",null,Ee("Container Border","digiblocks")),wp.element.createElement(an,{label:Ee("Container Border Style","digiblocks"),value:te,options:m,onChange:t=>e({containerBorderStyle:t}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Et,{label:Ee("Container Border Width","digiblocks")},wp.element.createElement(er,{value:je[c],onChange:t=>e({containerBorderWidth:{...je,[c]:t}}),min:0,max:10,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(Et,{label:Ee("Container Border Radius","digiblocks")},wp.element.createElement(Vl,{values:fe[c],onChange:t=>e({containerBorderRadius:{...fe,[c]:t}}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]})),wp.element.createElement("h4",null,Ee("Input Border","digiblocks")),wp.element.createElement(an,{label:Ee("Input Border Style","digiblocks"),value:r,options:m,onChange:t=>e({inputBorderStyle:t}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Et,{label:Ee("Input Border Width","digiblocks")},wp.element.createElement(er,{value:De[c],onChange:t=>e({inputBorderWidth:{...De,[c]:t}}),min:0,max:10,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(Et,{label:Ee("Input Border Radius","digiblocks")},wp.element.createElement(Vl,{values:to[c],onChange:t=>e({inputBorderRadius:{...to,[c]:t}}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]})),wp.element.createElement("h4",null,Ee("Button Border","digiblocks")),wp.element.createElement(an,{label:Ee("Button Border Style","digiblocks"),value:Pe,options:m,onChange:t=>e({buttonBorderStyle:t}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Et,{label:Ee("Button Border Width","digiblocks")},wp.element.createElement(er,{value:xe[c],onChange:t=>e({buttonBorderWidth:{...xe,[c]:t}}),min:0,max:10,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(Et,{label:Ee("Button Border Radius","digiblocks")},wp.element.createElement(Vl,{values:D[c],onChange:t=>e({buttonBorderRadius:{...D,[c]:t}}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]}))),wp.element.createElement(mt,{tab:"style",name:"shadow",title:Ee("Box Shadow","digiblocks"),initialOpen:!1},wp.element.createElement(tr,{label:Ee("Container Shadow","digiblocks"),normalValue:Xe,hoverValue:q,onNormalChange:t=>e({boxShadow:t}),onHoverChange:t=>e({boxShadowHover:t})}),wp.element.createElement(tr,{label:Ee("Input Shadow","digiblocks"),normalValue:E,hoverValue:se,onNormalChange:t=>e({inputBoxShadow:t}),onHoverChange:t=>e({inputBoxShadowHover:t})}),wp.element.createElement(tr,{label:Ee("Button Shadow","digiblocks"),normalValue:ye,hoverValue:qe,onNormalChange:t=>e({buttonBoxShadow:t}),onHoverChange:t=>e({buttonBoxShadowHover:t})})),wp.element.createElement(mt,{tab:"style",name:"spacing",title:Ee("Spacing","digiblocks"),initialOpen:!1},wp.element.createElement(Et,{label:Ee("Padding","digiblocks")},wp.element.createElement(Vl,{values:ee[c],onChange:t=>e({padding:{...ee,[c]:t}})})),wp.element.createElement(Et,{label:Ee("Margin","digiblocks")},wp.element.createElement(Vl,{values:Be[c],onChange:t=>e({margin:{...Be,[c]:t}})}))));case"advanced":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(mt,{tab:"advanced",name:"animation",title:Ee("Animation","digiblocks"),initialOpen:!0},wp.element.createElement(an,{label:Ee("Animation Effect","digiblocks"),value:B,options:re,onChange:t=>e({animation:t}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),B&&B!=="none"&&wp.element.createElement("div",{style:{marginTop:"10px"}},wp.element.createElement(ef,{variant:"secondary",isSecondary:!0,onClick:d,style:{width:"100%"}},Ee("Preview Animation","digiblocks")))),wp.element.createElement(mt,{tab:"advanced",name:"visibility",title:Ee("Visibility","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control__help",style:{padding:"12px",backgroundColor:"#f0f6fc",border:"1px solid #c3ddfd",borderRadius:"4px",marginBottom:"16px"}},wp.element.createElement("strong",null,Ee("Editor Note:","digiblocks")),wp.element.createElement("br",null),Ee("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.","digiblocks")),wp.element.createElement(Zi,{label:Ee("Hide on Desktop","digiblocks"),checked:a.desktop,onChange:t=>e({visibility:{...a,desktop:t}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(Zi,{label:Ee("Hide on Tablet","digiblocks"),checked:a.tablet,onChange:t=>e({visibility:{...a,tablet:t}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(Zi,{label:Ee("Hide on Mobile","digiblocks"),checked:a.mobile,onChange:t=>e({visibility:{...a,mobile:t}}),__nextHasNoMarginBottom:!0})),wp.element.createElement(mt,{tab:"advanced",name:"additional",title:Ee("Additional","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control html-anchor-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"html-anchor"},Ee("HTML anchor","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"html-anchor",value:O||"",onChange:t=>e({anchor:t.target.value}),"aria-describedby":"html-anchor-help",autoCapitalize:"none",autoComplete:"off"})),wp.element.createElement("p",{id:"html-anchor-help",className:"components-base-control__help"},Ee(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`,"digiblocks")," ",wp.element.createElement("a",{className:"components-external-link",href:"https://wordpress.org/documentation/article/page-jumps/",target:"_blank",rel:"external noreferrer noopener"},wp.element.createElement("span",{className:"components-external-link__contents"},Ee("Learn more about anchors","digiblocks")),wp.element.createElement("span",{className:"components-external-link__icon","aria-label":"(opens in a new tab)"},"\u2197")))),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"additional-css-classes"},Ee("Additional CSS class(es)","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"additional-css-classes",value:le||"",onChange:t=>e({customClasses:t.target.value}),"aria-describedby":"additional-css-classes-help",autoComplete:"off"})),wp.element.createElement("p",{id:"additional-css-classes-help",className:"components-base-control__help"},Ee("Separate multiple classes with spaces.","digiblocks")))));default:return null}},Ge=B!=="none"?` animate-${B}`:"",We=`digiblocks-newsletter ${o}${Ge} ${le||""}`,go=Zh({className:We,id:O||null});return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Kh,null,wp.element.createElement(nf,{tabs:he,activeTab:M,onSelect:k},f())),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:Ne()}}),wp.element.createElement("div",{...go},$&&wp.element.createElement(As,{tagName:"h3",className:"digiblocks-newsletter-title",value:y,onChange:t=>e({title:t}),placeholder:Ee("Subscribe to our Newsletter","digiblocks")}),h&&wp.element.createElement(As,{tagName:"p",className:"digiblocks-newsletter-description",value:P,onChange:t=>e({description:t}),placeholder:Ee("Stay updated with our latest news and offers","digiblocks")}),wp.element.createElement("form",{className:"digiblocks-newsletter-form",onSubmit:t=>t.preventDefault()},wp.element.createElement("div",{className:"digiblocks-newsletter-fields"},C&&wp.element.createElement("div",{className:"digiblocks-newsletter-field"},wp.element.createElement("div",{className:"digiblocks-newsletter-input-container"},wp.element.createElement("input",{type:"text",className:"digiblocks-newsletter-input",placeholder:z,disabled:!0}),wp.element.createElement("svg",{className:"digiblocks-newsletter-input-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M320 128a96 96 0 1 0 -192 0 96 96 0 1 0 192 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM32 480l384 0c-1.2-79.7-66.2-144-146.3-144l-91.4 0c-80 0-145 64.3-146.3 144zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z"})))),wp.element.createElement("div",{className:"digiblocks-newsletter-field"},wp.element.createElement("div",{className:"digiblocks-newsletter-input-container"},wp.element.createElement("input",{type:"email",className:"digiblocks-newsletter-input",placeholder:s,disabled:!0}),wp.element.createElement("svg",{className:"digiblocks-newsletter-input-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M392 32L120 32c-13.3 0-24 10.7-24 24l0 166.5L77.5 207.2c-4.2-3.4-8.7-6.3-13.5-8.6L64 56C64 25.1 89.1 0 120 0L392 0c30.9 0 56 25.1 56 56l0 142.6c-4.8 2.3-9.3 5.2-13.4 8.6L416 222.5 416 56c0-13.3-10.7-24-24-24zM35 256c-1.6 0-3 1.3-3 3l0 189c0 17.7 14.3 32 32 32l384 0c17.7 0 32-14.3 32-32l0-189c0-1.6-1.3-3-3-3c-.7 0-1.3 .2-1.9 .7L294.5 405.1C283.7 414 270 418.9 256 418.9s-27.7-4.9-38.5-13.8L36.8 256.7c-.5-.4-1.2-.7-1.9-.7zM0 259c0-19.3 15.6-35 35-35c8.1 0 15.9 2.8 22.2 7.9L237.8 380.3c5.1 4.2 11.6 6.5 18.2 6.5s13.1-2.3 18.2-6.5L454.9 231.9c6.3-5.1 14.1-7.9 22.2-7.9c19.3 0 35 15.6 35 35l0 189c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 259zM176 128l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 96l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"}))))),wp.element.createElement(As,{tagName:"button",className:"digiblocks-newsletter-button",value:S,onChange:t=>e({buttonText:t}),placeholder:Ee("Subscribe","digiblocks")})),wp.element.createElement("div",{className:"digiblocks-newsletter-message success"},w),wp.element.createElement("div",{className:"digiblocks-newsletter-message error"},T)))},cg=sf;var{useBlockProps:rf,RichText:ir}=window.wp.blockEditor,cf=({attributes:ie})=>{let{id:e,anchor:K,customClasses:o,title:O,showTitle:a,description:le,showDescription:l,emailPlaceholder:_,namePlaceholder:y,buttonText:$,showNameField:P,successMessage:h,errorMessage:s,animation:z}=ie,S=z!=="none"?` animate-${z}`:"",C=`digiblocks-newsletter ${e}${S} ${o||""}`,w=rf.save({className:C,id:K||null});return wp.element.createElement("div",{...w},a&&wp.element.createElement(ir.Content,{tagName:"h3",className:"digiblocks-newsletter-title",value:O}),l&&wp.element.createElement(ir.Content,{tagName:"p",className:"digiblocks-newsletter-description",value:le}),wp.element.createElement("form",{className:"digiblocks-newsletter-form",method:"post"},wp.element.createElement("div",{className:"digiblocks-newsletter-fields"},P&&wp.element.createElement("div",{className:"digiblocks-newsletter-field"},wp.element.createElement("div",{className:"digiblocks-newsletter-input-container"},wp.element.createElement("input",{type:"text",name:"digiblocks_newsletter_name",className:"digiblocks-newsletter-input",placeholder:y,required:P}),wp.element.createElement("svg",{className:"digiblocks-newsletter-input-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M320 128a96 96 0 1 0 -192 0 96 96 0 1 0 192 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM32 480l384 0c-1.2-79.7-66.2-144-146.3-144l-91.4 0c-80 0-145 64.3-146.3 144zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z"})))),wp.element.createElement("div",{className:"digiblocks-newsletter-field"},wp.element.createElement("div",{className:"digiblocks-newsletter-input-container"},wp.element.createElement("input",{type:"email",name:"digiblocks_newsletter_email",className:"digiblocks-newsletter-input",placeholder:_,required:!0}),wp.element.createElement("svg",{className:"digiblocks-newsletter-input-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M392 32L120 32c-13.3 0-24 10.7-24 24l0 166.5L77.5 207.2c-4.2-3.4-8.7-6.3-13.5-8.6L64 56C64 25.1 89.1 0 120 0L392 0c30.9 0 56 25.1 56 56l0 142.6c-4.8 2.3-9.3 5.2-13.4 8.6L416 222.5 416 56c0-13.3-10.7-24-24-24zM35 256c-1.6 0-3 1.3-3 3l0 189c0 17.7 14.3 32 32 32l384 0c17.7 0 32-14.3 32-32l0-189c0-1.6-1.3-3-3-3c-.7 0-1.3 .2-1.9 .7L294.5 405.1C283.7 414 270 418.9 256 418.9s-27.7-4.9-38.5-13.8L36.8 256.7c-.5-.4-1.2-.7-1.9-.7zM0 259c0-19.3 15.6-35 35-35c8.1 0 15.9 2.8 22.2 7.9L237.8 380.3c5.1 4.2 11.6 6.5 18.2 6.5s13.1-2.3 18.2-6.5L454.9 231.9c6.3-5.1 14.1-7.9 22.2-7.9c19.3 0 35 15.6 35 35l0 189c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 259zM176 128l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 96l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"}))))),wp.element.createElement("button",{type:"submit",className:"digiblocks-newsletter-button"},wp.element.createElement(ir.Content,{value:$})),wp.element.createElement("input",{type:"hidden",name:"action",value:"digiblocks_newsletter_subscribe"}),wp.element.createElement("input",{type:"hidden",name:"digiblocks_newsletter_nonce",value:""}),wp.element.createElement("input",{type:"hidden",name:"block_id",value:e})),wp.element.createElement("div",{className:"digiblocks-newsletter-message success",style:{display:"none"}},h),wp.element.createElement("div",{className:"digiblocks-newsletter-message error",style:{display:"none"}},s))},dg=cf;var{__:Mo}=window.wp.i18n,{registerBlockType:df}=window.wp.blocks,{getBlockActiveStatus:gf}=window.wp.digiBlocks;df("digiblocks/newsletter",{apiVersion:2,title:digiBlocksData.blocks.newsletter.title,category:"digiblocks",icon:{src:()=>{let{viewbox:ie,path:e}=digiBlocksData.blocks.newsletter.icon;return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${ie}`,className:"digiblocks-editor-icons"},wp.element.createElement("path",{d:e}))}},description:digiBlocksData.blocks.newsletter.description,keywords:[Mo("newsletter","digiblocks"),Mo("subscribe","digiblocks"),Mo("email","digiblocks"),Mo("mailchimp","digiblocks")],supports:{inserter:!!gf("newsletter"),html:!1,className:!1,customClassName:!1,anchor:!1},attributes:{id:{type:"string",default:""},anchor:{type:"string",default:""},visibility:{type:"object",default:{desktop:!1,tablet:!1,mobile:!1}},customClasses:{type:"string",default:""},layout:{type:"string",default:"stacked"},align:{type:"object",default:{desktop:"left",tablet:"left",mobile:"left"}},title:{type:"string",default:Mo("Subscribe to our Newsletter","digiblocks")},showTitle:{type:"boolean",default:!0},description:{type:"string",default:Mo("Stay updated with our latest news and offers","digiblocks")},showDescription:{type:"boolean",default:!0},emailPlaceholder:{type:"string",default:Mo("Enter your email address","digiblocks")},namePlaceholder:{type:"string",default:Mo("Enter your name","digiblocks")},buttonText:{type:"string",default:Mo("Subscribe","digiblocks")},showNameField:{type:"boolean",default:!1},successMessage:{type:"string",default:Mo("Thank you for subscribing!","digiblocks")},errorMessage:{type:"string",default:Mo("Something went wrong. Please try again.","digiblocks")},titleColor:{type:"string",default:"#333333"},titleHoverColor:{type:"string",default:""},descriptionColor:{type:"string",default:"#666666"},inputTextColor:{type:"string",default:"#333333"},inputBackgroundColor:{type:"string",default:"#ffffff"},inputBorderColor:{type:"string",default:"#e0e0e0"},inputBorderFocusColor:{type:"string",default:"#4a6cf7"},inputPlaceholderColor:{type:"string",default:"#999999"},buttonTextColor:{type:"string",default:"#ffffff"},buttonBackgroundColor:{type:"string",default:"#4a6cf7"},buttonTextHoverColor:{type:"string",default:""},buttonBackgroundHoverColor:{type:"string",default:""},buttonBorderColor:{type:"string",default:""},buttonBorderHoverColor:{type:"string",default:""},backgroundColor:{type:"string",default:""},backgroundHoverColor:{type:"string",default:""},containerBorderColor:{type:"string",default:""},containerBorderHoverColor:{type:"string",default:""},titleTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:24,tablet:22,mobile:20},fontSizeUnit:"px",fontWeight:"600",fontStyle:"normal",textTransform:"none",textDecoration:"none",lineHeight:{desktop:1.4,tablet:1.3,mobile:1.2},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}},contentTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",fontWeight:"normal",fontStyle:"normal",textTransform:"none",textDecoration:"none",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}},textTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",fontWeight:"normal",fontStyle:"normal",textTransform:"none",textDecoration:"none",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}},buttonTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",fontWeight:"500",fontStyle:"normal",textTransform:"none",textDecoration:"none",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}},containerBorderRadius:{type:"object",default:{desktop:{top:4,right:4,bottom:4,left:4,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},containerBorderWidth:{type:"object",default:{desktop:1,tablet:1,mobile:1}},containerBorderStyle:{type:"string",default:"none"},inputBorderRadius:{type:"object",default:{desktop:{top:4,right:4,bottom:4,left:4,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},inputBorderWidth:{type:"object",default:{desktop:1,tablet:1,mobile:1}},inputBorderStyle:{type:"string",default:"solid"},buttonBorderRadius:{type:"object",default:{desktop:{top:4,right:4,bottom:4,left:4,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},buttonBorderWidth:{type:"object",default:{desktop:1,tablet:1,mobile:1}},buttonBorderStyle:{type:"string",default:"solid"},spacing:{type:"object",default:{desktop:{value:20,unit:"px"},tablet:{value:15,unit:"px"},mobile:{value:10,unit:"px"}}},inputSpacing:{type:"object",default:{desktop:{value:10,unit:"px"},tablet:{value:8,unit:"px"},mobile:{value:6,unit:"px"}}},padding:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},margin:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},boxShadow:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.1)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},boxShadowHover:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},buttonBoxShadow:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.1)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},buttonBoxShadowHover:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.15)",horizontal:0,vertical:2,blur:8,spread:0,position:"outset"}},inputBoxShadow:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.1)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},inputBoxShadowHover:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.15)",horizontal:0,vertical:2,blur:4,spread:0,position:"outset"}},animation:{type:"string",default:"none"}},example:{attributes:{title:Mo("Subscribe to our Newsletter","digiblocks"),description:Mo("Stay updated with our latest news and offers","digiblocks"),layout:"stacked",showTitle:!0,showDescription:!0,showNameField:!1,buttonText:Mo("Subscribe","digiblocks")}},edit:cg,save:dg});var{__:Te}=window.wp.i18n,{useBlockProps:pf,InspectorControls:bf,PanelColorSettings:lr}=window.wp.blockEditor,{TextControl:uf,ToggleControl:Do,SelectControl:Ki,RangeControl:Xi,Placeholder:mf,Spinner:hf,TabPanel:ff,Button:kf,__experimentalToggleGroupControl:gg,__experimentalToggleGroupControlOption:Fl}=window.wp.components,{useState:pg,useEffect:bg,useMemo:ar,useRef:vf}=window.wp.element,{useSelect:ug}=window.wp.data,{useBlockId:xf,getDimensionCSS:Wt,animations:El,animationPreview:mg}=digi.utils,{tabIcons:nr}=digi.icons,{ResponsiveControl:tt,DimensionControl:mi,TypographyControl:sn,BoxShadowControl:yf,CustomTabPanel:Cf,TabPanelBody:it}=digi.components,wf=({attributes:ie,setAttributes:e,clientId:K})=>{let{id:o,anchor:O,visibility:a,customClasses:le,postsToShow:l,columns:_,postStyle:y,displayFeaturedImage:$,displayTitle:P,displayMeta:h,displayExcerpt:s,displayReadMoreButton:z,metaSettings:S,excerptLength:C,readMoreText:w,order:T,orderBy:U,categories:L,enablePagination:V,paginationAlign:Q,paginationBackgroundColor:be,paginationTextColor:N,paginationActiveBackgroundColor:u,paginationActiveTextColor:v,titleColor:I,titleHoverColor:ne,excerptColor:Me,catBackgroundColor:Le,catColor:X,catHoverBackgroundColor:H,catHoverColor:Y,metaColor:W,metaHoverColor:ce,buttonBackgroundColor:ue,buttonTextColor:A,buttonBackgroundHoverColor:J,buttonTextHoverColor:me,imageMargin:oe,contentMargin:fe,padding:je,margin:te,itemSpacing:to,titleTypography:De,textTypography:r,contentTypography:D,buttonTypography:xe,buttonPadding:Pe,buttonBorderRadius:Se,imageSize:Ue,imageBorderRadius:ee,cardStyle:Be,cardBackgroundColor:Xe,cardPadding:q,cardBorderRadius:ye,cardBorderStyle:qe,cardBorderWidth:E,cardBorderColor:se,cardShadow:B,cardShadowHover:c,animation:ge}=ie;xf(o,K,e);let[M,k]=pg(window.digi.responsiveState.activeDevice),[G,d]=pg(()=>{if(window.digi.uiState){let i=window.digi.uiState.getActiveTab(K);if(i)return i}return"options"});bg(()=>window.digi.responsiveState.subscribe(F=>{k(F)}),[]);let re=ar(()=>{let i={per_page:l,order:T,orderby:U,_embed:!0};return L&&L.length>0&&!L.includes(0)&&(i.categories=L),i},[l,T,U,L]),x=ar(()=>({postsToShow:l,order:T,orderBy:U,categories:L&&L.length>0?L.join(","):""}),[l,T,U,L]),m=ug(i=>{let{getEntityRecords:F}=i("core");return F("taxonomy","category",{per_page:-1})||[]},[]),he=ar(()=>[{label:Te("All Categories","digiblocks"),value:"0"},...m.map(i=>({label:i.name,value:i.id.toString()}))],[m]),j=ug(i=>{let{getEntityRecords:F}=i("core"),Fe={per_page:l,order:T,orderby:U,_embed:!0};return L&&L.length>0&&!L.includes(0)&&(Fe.categories=L),F("postType","post",Fe)},[JSON.stringify(x)]),Ne=vf(null);bg(()=>{if(ge&&ge!=="none"){let i=setTimeout(()=>{mg(o,ge,El,Ne)},100);return()=>clearTimeout(i)}},[ge]);let f=()=>{mg(o,ge,El,Ne)},Ge=[{label:Te("None","digiblocks"),value:"none"},...Object.keys(El).map(i=>({label:i.replace(/-/g," ").replace(/\b\w/g,F=>F.toUpperCase()),value:i}))],We=[{name:"options",title:Te("Options","digiblocks"),icon:nr.optionsIcon},{name:"style",title:Te("Style","digiblocks"),icon:nr.styleIcon},{name:"advanced",title:Te("Advanced","digiblocks"),icon:nr.advancedIcon}],go=[{name:"normal",title:Te("Normal","digiblocks"),className:"digiblocks-tab-1 normal"},{name:"hover",title:Te("Hover","digiblocks"),className:"digiblocks-tab-2 hover"}],t=[{label:Te("Thumbnail","digiblocks"),value:"thumbnail"},{label:Te("Medium","digiblocks"),value:"medium"},{label:Te("Large","digiblocks"),value:"large"},{label:Te("Full","digiblocks"),value:"full"}],b=[{label:Te("Ascending","digiblocks"),value:"asc"},{label:Te("Descending","digiblocks"),value:"desc"}],Ce=[{label:Te("Date","digiblocks"),value:"date"},{label:Te("Title","digiblocks"),value:"title"},{label:Te("Author","digiblocks"),value:"author"},{label:Te("Modified Date","digiblocks"),value:"modified"},{label:Te("Comment Count","digiblocks"),value:"comment_count"}],n=[{label:Te("None","digiblocks"),value:"none"},{label:Te("Solid","digiblocks"),value:"solid"},{label:Te("Dashed","digiblocks"),value:"dashed"},{label:Te("Dotted","digiblocks"),value:"dotted"},{label:Te("Double","digiblocks"),value:"double"}],we=(i,F)=>{e({metaSettings:{...S,[i]:F}})},Ke=()=>{let i=M,F="";return ge&&ge!=="none"&&El[ge]&&(F=El[ge].keyframes),`
            /* Posts Block - ${o} */
            .${o} {
				${Wt(je,"padding",i)}
				${Wt(te,"margin",i)}
                width: 100%;
            }
            
            /* Grid layout */
            .${o} .digiblocks-posts-container {
                display: ${y==="list"?"flex":"grid"};
				${y==="list"?"flex-direction: column;":""}
                ${y!=="list"?`grid-template-columns: repeat(${_[i]}, 1fr);`:""}
                gap: ${to[i]}px;
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
				gap: ${oe[i]}px;
                ${Be?`
					background-color: ${Xe};
					${Wt(q,"padding",i)}
					${Wt(ye,"border-radius",i)}
					`:""}
                
                ${Be&&qe!=="none"?`
					border-style: ${qe};
					border-color: ${se};
					${Wt(E,"border-width",i)}
					`:""}
                
                ${Be&&B?.enable?`box-shadow: ${B.horizontal}px ${B.vertical}px ${B.blur}px ${B.spread}px ${B.color};`:""}
                transition: all 0.3s ease;
            }

            .${o} .digiblocks-post-item:hover {
				transform: translateY(-3px);
                ${Be&&c?.enable?`box-shadow: ${c.horizontal}px ${c.vertical}px ${c.blur}px ${c.spread}px ${c.color};`:""}
				border-color: ${se}80;
            }
            
            /* Featured image */
            .${o} .digiblocks-post-image {
                width: 100%;
                overflow: hidden;
				${Wt(ee,"border-radius",i)}
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
				gap: ${fe[i]}px;
			}
            
            /* Post title */
            .${o} .digiblocks-post-title {
                margin: 0;
                color: ${I};
                ${De.fontFamily?`font-family: ${De.fontFamily};`:""}
                ${De.fontSize?.[i]?`font-size: ${De.fontSize[i]}${De.fontSizeUnit||"px"};`:""}
                ${De.fontWeight?`font-weight: ${De.fontWeight};`:""}
                ${De.fontStyle?`font-style: ${De.fontStyle};`:""}
                ${De.textTransform?`text-transform: ${De.textTransform};`:""}
                ${De.textDecoration?`text-decoration: ${De.textDecoration};`:""}
                ${De.lineHeight?.[i]?`line-height: ${De.lineHeight[i]}${De.lineHeightUnit||"em"};`:""}
                ${De.letterSpacing?.[i]?`letter-spacing: ${De.letterSpacing[i]}${De.letterSpacingUnit||"px"};`:""}
            }
            
            .${o} .digiblocks-post-title a {
                color: ${I};
                text-decoration: none;
            }
            
            /* Post excerpt */
            .${o} .digiblocks-post-excerpt {
                color: ${Me};
                ${D.fontFamily?`font-family: ${D.fontFamily};`:""}
                ${D.fontSize?.[i]?`font-size: ${D.fontSize[i]}${D.fontSizeUnit||"px"};`:""}
                ${D.fontWeight?`font-weight: ${D.fontWeight};`:""}
                ${D.fontStyle?`font-style: ${D.fontStyle};`:""}
                ${D.textTransform?`text-transform: ${D.textTransform};`:""}
                ${D.textDecoration?`text-decoration: ${D.textDecoration};`:""}
                ${D.lineHeight?.[i]?`line-height: ${D.lineHeight[i]}${D.lineHeightUnit||"em"};`:""}
                ${D.letterSpacing?.[i]?`letter-spacing: ${D.letterSpacing[i]}${D.letterSpacingUnit||"px"};`:""}
            }
            
            /* Categories */
            .${o} .digiblocks-post-categories {
                display: flex;
				flex-wrap: wrap;
				gap: .5rem;
                ${r.fontFamily?`font-family: ${r.fontFamily};`:""}
                ${r.fontSize?.[i]?`font-size: ${r.fontSize[i]}${r.fontSizeUnit||"px"};`:""}
                ${r.fontWeight?`font-weight: ${r.fontWeight};`:""}
                ${r.fontStyle?`font-style: ${r.fontStyle};`:""}
                ${r.textTransform?`text-transform: ${r.textTransform};`:""}
                ${r.textDecoration?`text-decoration: ${r.textDecoration};`:""}
                ${r.lineHeight?.[i]?`line-height: ${r.lineHeight[i]}${r.lineHeightUnit||"em"};`:""}
                ${r.letterSpacing?.[i]?`letter-spacing: ${r.letterSpacing[i]}${r.letterSpacingUnit||"px"};`:""}
            }
            
            .${o} .digiblocks-post-categories a {
				display: inline-flex;
				border-radius: 3px;
				padding: 3px 5px;
				background-color: ${Le};
				color: ${X};
				text-decoration: none;
				transition: all 0.3s ease;
			}
			
			.${o} .digiblocks-post-categories a:hover {
				background-color: ${H};
				color: ${Y};
			}

			/* Footer meta */
			.${o} .digiblocks-post-footer-meta {
				display: flex;
				align-items: center;
				gap: 10px;
				${r.fontFamily?`font-family: ${r.fontFamily};`:""}
				${r.fontSize?.[i]?`font-size: ${r.fontSize[i]}${r.fontSizeUnit||"px"};`:""}
				${r.fontWeight?`font-weight: ${r.fontWeight};`:""}
				color: ${W};
				padding-top: ${fe[i]}px;
				border-top: 1px solid ${se}40;
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
                ${r.fontFamily?`font-family: ${r.fontFamily};`:""}
                ${r.fontSize?.[i]?`font-size: ${r.fontSize[i]}${r.fontSizeUnit||"px"};`:""}
                ${r.fontWeight?`font-weight: ${r.fontWeight};`:""}
                ${r.fontStyle?`font-style: ${r.fontStyle};`:""}
                ${r.textTransform?`text-transform: ${r.textTransform};`:""}
                ${r.textDecoration?`text-decoration: ${r.textDecoration};`:""}
                ${r.lineHeight?.[i]?`line-height: ${r.lineHeight[i]}${r.lineHeightUnit||"em"};`:""}
                ${r.letterSpacing?.[i]?`letter-spacing: ${r.letterSpacing[i]}${r.letterSpacingUnit||"px"};`:""}
			}

			.${o} .digiblocks-footer-meta-items a {
				color: ${W};
				text-decoration: none;
				transition: color 0.3s ease;
			}

			.${o} .digiblocks-footer-meta-items a:hover {
				color: ${ce||I};
			}

			/* Footer actions */
			.${o} .digiblocks-post-footer-actions {
				display: flex;
				justify-content: space-between;
				align-items: center;
				flex-wrap: wrap;
				gap: 1rem;
                margin-top: ${fe[i]}px;
			}
            
            /* Read more button */
            .${o} .digiblocks-post-read-more {
                display: inline-flex;
                background-color: ${ue};
                color: ${A};
                ${xe.fontFamily?`font-family: ${xe.fontFamily};`:""}
                ${xe.fontSize?.[i]?`font-size: ${xe.fontSize[i]}${xe.fontSizeUnit||"px"};`:""}
                ${xe.fontWeight?`font-weight: ${xe.fontWeight};`:""}
                ${xe.fontStyle?`font-style: ${xe.fontStyle};`:""}
                ${xe.textTransform?`text-transform: ${xe.textTransform};`:""}
                ${xe.textDecoration?`text-decoration: ${xe.textDecoration};`:""}
                ${xe.lineHeight?.[i]?`line-height: ${xe.lineHeight[i]}${xe.lineHeightUnit||"em"};`:""}
                ${xe.letterSpacing?.[i]?`letter-spacing: ${xe.letterSpacing[i]}${xe.letterSpacingUnit||"px"};`:""}
                text-decoration: none;
				${Wt(Pe,"padding",i)}
				${Wt(Se,"border-radius",i)}
                transition: all 0.3s ease;
            }

			.${o} .digiblocks-post-read-more:hover {
				background-color: ${J||ue};
				color: ${me||A};
			}

			/* Date meta */
			.${o} .digiblocks-post-comments-count {
				color: ${W};
				text-decoration: none;
				transition: color 0.3s ease;
				${r.fontFamily?`font-family: ${r.fontFamily};`:""}
                ${r.fontSize?.[i]?`font-size: ${r.fontSize[i]}${r.fontSizeUnit||"px"};`:""}
                ${r.fontWeight?`font-weight: ${r.fontWeight};`:""}
                ${r.fontStyle?`font-style: ${r.fontStyle};`:""}
                ${r.textTransform?`text-transform: ${r.textTransform};`:""}
                ${r.textDecoration?`text-decoration: ${r.textDecoration};`:""}
                ${r.lineHeight?.[i]?`line-height: ${r.lineHeight[i]}${r.lineHeightUnit||"em"};`:""}
                ${r.letterSpacing?.[i]?`letter-spacing: ${r.letterSpacing[i]}${r.letterSpacingUnit||"px"};`:""}
				display: flex;
				align-items: center;
				gap: .5rem;
			}
			
			.${o} .digiblocks-post-comments-count:hover {
				color: ${ce||I};
			}

			/* Pagination */
            .${o} .digiblocks-pagination {
                margin-top: 40px;
                display: flex;
                flex-wrap: wrap;
                gap: 8px;
                justify-content: ${Q};
            }

            .${o} .digiblocks-pagination .page-numbers {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                min-width: 42px;
                height: 42px;
                padding: 0 12px;
                background-color: ${be};
                color: ${N};
                border-radius: 8px;
                text-decoration: none;
                transition: all 0.3s ease;
                font-weight: 500;
            }

            .${o} .digiblocks-pagination .page-numbers.current {
                background-color: ${u};
                color: ${v};
                transform: translateY(-1px);
                box-shadow: 0 4px 12px ${u}40;
            }

            .${o} .digiblocks-pagination .page-numbers:hover:not(.current) {
                background-color: ${u}20;
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
			${a.desktop?`
				@media (min-width: 992px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${a.tablet?`
				@media (min-width: 768px) and (max-width: 991px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${a.mobile?`
				@media (max-width: 767px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}
        `},p=()=>{switch(G){case"options":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(it,{tab:"options",name:"layout",title:Te("Layout","digiblocks"),initialOpen:!0},wp.element.createElement(gg,{label:Te("Post Style","digiblocks"),value:y,onChange:i=>e({postStyle:i}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(Fl,{value:"grid",label:Te("Grid","digiblocks")}),wp.element.createElement(Fl,{value:"list",label:Te("List","digiblocks")})),wp.element.createElement(Xi,{label:Te("Posts to Show","digiblocks"),value:l,onChange:i=>e({postsToShow:i}),min:1,max:20,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),y==="grid"&&wp.element.createElement(tt,{label:Te("Columns","digiblocks")},wp.element.createElement(Xi,{value:_[M],onChange:i=>e({columns:{..._,[M]:i}}),min:1,max:M==="desktop"?6:M==="tablet"?4:2,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(tt,{label:Te("Item Spacing","digiblocks")},wp.element.createElement(Xi,{value:to[M],onChange:i=>e({itemSpacing:{...to,[M]:i}}),min:0,max:80,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(Do,{label:Te("Card Style","digiblocks"),checked:Be,onChange:i=>e({cardStyle:i}),help:Te("Enable to show posts as cards with backgrounds and borders","digiblocks"),__nextHasNoMarginBottom:!0})),wp.element.createElement(it,{tab:"options",name:"content",title:Te("Content","digiblocks"),initialOpen:!1},wp.element.createElement(Do,{label:Te("Display Featured Image","digiblocks"),checked:$,onChange:i=>e({displayFeaturedImage:i}),__nextHasNoMarginBottom:!0}),$&&wp.element.createElement(Ki,{label:Te("Image Size","digiblocks"),value:Ue,options:t,onChange:i=>e({imageSize:i}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Do,{label:Te("Display Title","digiblocks"),checked:P,onChange:i=>e({displayTitle:i}),__nextHasNoMarginBottom:!0}),wp.element.createElement(Do,{label:Te("Display Meta","digiblocks"),checked:h,onChange:i=>e({displayMeta:i}),__nextHasNoMarginBottom:!0}),h&&wp.element.createElement("div",{className:"digiblocks-meta-options",style:{marginLeft:"24px",marginBottom:"16px"}},wp.element.createElement(Do,{label:Te("Show Author","digiblocks"),checked:S.displayAuthor,onChange:i=>we("displayAuthor",i),__nextHasNoMarginBottom:!0}),wp.element.createElement(Do,{label:Te("Show Date","digiblocks"),checked:S.displayDate,onChange:i=>we("displayDate",i),__nextHasNoMarginBottom:!0}),wp.element.createElement(Do,{label:Te("Show Categories","digiblocks"),checked:S.displayCategories,onChange:i=>we("displayCategories",i),__nextHasNoMarginBottom:!0}),wp.element.createElement(Do,{label:Te("Show Comments Count","digiblocks"),checked:S.displayComments,onChange:i=>we("displayComments",i),__nextHasNoMarginBottom:!0})),wp.element.createElement(Do,{label:Te("Display Excerpt","digiblocks"),checked:s,onChange:i=>e({displayExcerpt:i}),__nextHasNoMarginBottom:!0}),s&&wp.element.createElement(Xi,{label:Te("Excerpt Length (words)","digiblocks"),value:C,onChange:i=>e({excerptLength:i}),min:5,max:100,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Do,{label:Te("Display Read More Button","digiblocks"),checked:z,onChange:i=>e({displayReadMoreButton:i}),__nextHasNoMarginBottom:!0}),z&&wp.element.createElement(uf,{label:Te("Read More Text","digiblocks"),value:w,onChange:i=>e({readMoreText:i}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(it,{tab:"options",name:"pagination",title:Te("Pagination","digiblocks"),initialOpen:!1},wp.element.createElement(Do,{label:Te("Enable Pagination","digiblocks"),checked:V,onChange:i=>e({enablePagination:i}),__nextHasNoMarginBottom:!0}),V&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(gg,{label:Te("Pagination Alignment","digiblocks"),value:Q,onChange:i=>e({paginationAlign:i}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(Fl,{value:"flex-start",label:Te("Left","digiblocks")}),wp.element.createElement(Fl,{value:"center",label:Te("Center","digiblocks")}),wp.element.createElement(Fl,{value:"flex-end",label:Te("Right","digiblocks")})))),wp.element.createElement(it,{tab:"options",name:"query",title:Te("Query","digiblocks"),initialOpen:!1},wp.element.createElement(Ki,{label:Te("Order By","digiblocks"),value:U,options:Ce,onChange:i=>e({orderBy:i}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Ki,{label:Te("Order","digiblocks"),value:T,options:b,onChange:i=>e({order:i}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Ki,{label:Te("Category","digiblocks"),value:L.length===0?"0":L[0].toString(),options:he,onChange:i=>{let F=parseInt(i,10);e(F===0?{categories:[]}:{categories:[F]})},__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})));case"style":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(it,{tab:"style",name:"colors",title:Te("Colors","digiblocks"),initialOpen:!0},wp.element.createElement(ff,{className:"digiblocks-control-tabs",activeClass:"active-tab",tabs:go},i=>i.name==="normal"?wp.element.createElement(lr,{title:Te("Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:I,onChange:F=>e({titleColor:F}),label:Te("Title Color","digiblocks")},{value:Me,onChange:F=>e({excerptColor:F}),label:Te("Excerpt Color","digiblocks")},{value:Le,onChange:F=>e({catBackgroundColor:F}),label:Te("Categories Background Color","digiblocks")},{value:X,onChange:F=>e({catColor:F}),label:Te("Categories Color","digiblocks")},{value:W,onChange:F=>e({metaColor:F}),label:Te("Meta Color","digiblocks")},{value:ue,onChange:F=>e({buttonBackgroundColor:F}),label:Te("Button Background","digiblocks")},{value:A,onChange:F=>e({buttonTextColor:F}),label:Te("Button Text","digiblocks")},{value:be,onChange:F=>e({paginationBackgroundColor:F}),label:Te("Pagination Background","digiblocks")},{value:N,onChange:F=>e({paginationTextColor:F}),label:Te("Pagination Color","digiblocks")},{value:u,onChange:F=>e({paginationActiveBackgroundColor:F}),label:Te("Pagination Active Background","digiblocks")},{value:v,onChange:F=>e({paginationActiveTextColor:F}),label:Te("Pagination Active Color","digiblocks")}]}):wp.element.createElement(lr,{title:Te("Hover Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:ne,onChange:F=>e({titleHoverColor:F}),label:Te("Title Hover Color","digiblocks")},{value:H,onChange:F=>e({catHoverBackgroundColor:F}),label:Te("Categories Hover Background Color","digiblocks")},{value:Y,onChange:F=>e({catHoverColor:F}),label:Te("Categories Hover Color","digiblocks")},{value:ce,onChange:F=>e({metaHoverColor:F}),label:Te("Meta Hover Color","digiblocks")},{value:J,onChange:F=>e({buttonBackgroundHoverColor:F}),label:Te("Button Background Hover","digiblocks")},{value:me,onChange:F=>e({buttonTextHoverColor:F}),label:Te("Button Text Hover","digiblocks")}]})),Be&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("h3",null,Te("Card Colors","digiblocks")),wp.element.createElement(lr,{title:"",colorSettings:[{value:Xe,onChange:i=>e({cardBackgroundColor:i}),label:Te("Card Background","digiblocks")},{value:se,onChange:i=>e({cardBorderColor:i}),label:Te("Card Border","digiblocks")}]}))),wp.element.createElement(it,{tab:"style",name:"typography",title:Te("Typography","digiblocks"),initialOpen:!1},wp.element.createElement(sn,{label:Te("Title Typography","digiblocks"),value:De,onChange:i=>e({titleTypography:i}),defaults:{fontSize:{desktop:20,tablet:18,mobile:16},fontWeight:"600",lineHeight:{desktop:1.4,tablet:1.3,mobile:1.2}}}),wp.element.createElement(sn,{label:Te("Meta Typography","digiblocks"),value:r,onChange:i=>e({textTypography:i}),defaults:{fontSize:{desktop:14,tablet:13,mobile:12},lineHeight:{desktop:1.4,tablet:1.3,mobile:1.2}}}),wp.element.createElement(sn,{label:Te("Excerpt Typography","digiblocks"),value:D,onChange:i=>e({contentTypography:i}),defaults:{fontSize:{desktop:16,tablet:15,mobile:14},lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3}}}),wp.element.createElement(sn,{label:Te("Button Typography","digiblocks"),value:xe,onChange:i=>e({buttonTypography:i}),defaults:{fontSize:{desktop:16,tablet:15,mobile:14},fontWeight:"500",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3}}})),wp.element.createElement(it,{tab:"style",name:"spacing",title:Te("Spacing","digiblocks"),initialOpen:!1},wp.element.createElement(tt,{label:Te("Padding","digiblocks")},wp.element.createElement(mi,{values:je[M],onChange:i=>e({padding:{...je,[M]:i}})})),wp.element.createElement(tt,{label:Te("Margin","digiblocks")},wp.element.createElement(mi,{values:te[M],onChange:i=>e({margin:{...te,[M]:i}})})),wp.element.createElement(tt,{label:Te("Image Margin","digiblocks")},wp.element.createElement(Xi,{value:oe[M],onChange:i=>e({imageMargin:{...oe,[M]:i}}),min:1,max:100,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(tt,{label:Te("Content Margin","digiblocks")},wp.element.createElement(Xi,{value:fe[M],onChange:i=>e({contentMargin:{...fe,[M]:i}}),min:1,max:100,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(tt,{label:Te("Button Padding","digiblocks")},wp.element.createElement(mi,{values:Pe[M],onChange:i=>e({buttonPadding:{...Pe,[M]:i}})}))),wp.element.createElement(it,{tab:"style",name:"borders",title:Te("Borders & Radius","digiblocks"),initialOpen:!1},wp.element.createElement(tt,{label:Te("Image Border Radius","digiblocks")},wp.element.createElement(mi,{values:ee[M],onChange:i=>e({imageBorderRadius:{...ee,[M]:i}}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]})),wp.element.createElement(tt,{label:Te("Button Border Radius","digiblocks")},wp.element.createElement(mi,{values:Se[M],onChange:i=>e({buttonBorderRadius:{...Se,[M]:i}}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]})),Be&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Ki,{label:Te("Card Border Style","digiblocks"),value:qe,options:n,onChange:i=>e({cardBorderStyle:i}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),qe!=="none"&&wp.element.createElement(tt,{label:Te("Card Border Width","digiblocks")},wp.element.createElement(mi,{values:E[M],onChange:i=>e({cardBorderWidth:{...E,[M]:i}})})),wp.element.createElement(tt,{label:Te("Card Border Radius","digiblocks")},wp.element.createElement(mi,{values:ye[M],onChange:i=>e({cardBorderRadius:{...ye,[M]:i}}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]})),wp.element.createElement(yf,{label:Te("Card Shadow","digiblocks"),normalValue:B,hoverValue:c,onNormalChange:i=>e({cardShadow:i}),onHoverChange:i=>e({cardShadowHover:i})}))));case"advanced":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(it,{tab:"advanced",name:"animation",title:Te("Animation","digiblocks"),initialOpen:!0},wp.element.createElement(Ki,{label:Te("Animation Effect","digiblocks"),value:ge,options:Ge,onChange:i=>e({animation:i}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),ge&&ge!=="none"&&wp.element.createElement("div",{style:{marginTop:"10px"}},wp.element.createElement(kf,{variant:"secondary",isSecondary:!0,onClick:f,style:{width:"100%"}},Te("Preview Animation","digiblocks")))),wp.element.createElement(it,{tab:"advanced",name:"visibility",title:Te("Visibility","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control__help",style:{padding:"12px",backgroundColor:"#f0f6fc",border:"1px solid #c3ddfd",borderRadius:"4px",marginBottom:"16px"}},wp.element.createElement("strong",null,Te("Editor Note:","digiblocks")),wp.element.createElement("br",null),Te("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.","digiblocks")),wp.element.createElement(Do,{label:Te("Hide on Desktop","digiblocks"),checked:a.desktop,onChange:i=>e({visibility:{...a,desktop:i}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(Do,{label:Te("Hide on Tablet","digiblocks"),checked:a.tablet,onChange:i=>e({visibility:{...a,tablet:i}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(Do,{label:Te("Hide on Mobile","digiblocks"),checked:a.mobile,onChange:i=>e({visibility:{...a,mobile:i}}),__nextHasNoMarginBottom:!0})),wp.element.createElement(it,{tab:"advanced",name:"additional",title:Te("Additional","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control html-anchor-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"html-anchor"},Te("HTML anchor","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"html-anchor",value:O||"",onChange:i=>e({anchor:i.target.value}),"aria-describedby":"html-anchor-help",autoCapitalize:"none",autoComplete:"off"})),wp.element.createElement("p",{id:"html-anchor-help",className:"components-base-control__help"},Te(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`,"digiblocks")," ",wp.element.createElement("a",{className:"components-external-link",href:"https://wordpress.org/documentation/article/page-jumps/",target:"_blank",rel:"external noreferrer noopener"},wp.element.createElement("span",{className:"components-external-link__contents"},Te("Learn more about anchors","digiblocks")),wp.element.createElement("span",{className:"components-external-link__icon","aria-label":"(opens in a new tab)"},"\u2197")))),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"additional-css-classes"},Te("Additional CSS class(es)","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"additional-css-classes",value:le||"",onChange:i=>e({customClasses:i.target.value}),"aria-describedby":"additional-css-classes-help",autoComplete:"off"})),wp.element.createElement("p",{id:"additional-css-classes-help",className:"components-base-control__help"},Te("Separate multiple classes with spaces.","digiblocks")))));default:return null}},g=(i,F)=>{if(!i)return"";let Fe=document.createElement("div");Fe.innerHTML=i;let po=Fe.textContent||Fe.innerText||"",R=po.split(" ");return R.length<=F?po:R.slice(0,F).join(" ")+"..."},He=`digiblocks-posts ${o} style-${y} ${le||""}`,Je=pf({className:He,id:O||null});return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(bf,null,wp.element.createElement(Cf,{tabs:We,activeTab:G,onSelect:d},p())),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:Ke()}}),wp.element.createElement("div",{...Je},j?j.length===0?wp.element.createElement("p",{className:"digiblocks-posts-no-results"},Te("No posts found.","digiblocks")):wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:`digiblocks-posts-container layout-${y}`},j.map(i=>wp.element.createElement("div",{key:i.id,className:"digiblocks-post-item"},$&&i._embedded?.["wp:featuredmedia"]&&i._embedded["wp:featuredmedia"][0]&&wp.element.createElement("div",{className:"digiblocks-post-image"},wp.element.createElement("span",null,i._embedded["wp:featuredmedia"][0].source_url&&wp.element.createElement("img",{src:i._embedded["wp:featuredmedia"][0].source_url,alt:i._embedded["wp:featuredmedia"][0].alt_text||i.title.rendered}))),wp.element.createElement("div",{className:"digiblocks-post-content"},P&&wp.element.createElement("h3",{className:"digiblocks-post-title"},wp.element.createElement("a",{href:"#",onClick:F=>F.preventDefault()},i.title.rendered)),s&&wp.element.createElement("div",{className:"digiblocks-post-excerpt"},g(i.excerpt.rendered.replace(/<[^>]*>/g,""),C)),h&&S.displayCategories&&i._embedded?.["wp:term"]?.[0]&&wp.element.createElement("div",{className:"digiblocks-post-categories"},i._embedded["wp:term"][0].map(F=>wp.element.createElement("a",{key:F.id,href:"#",onClick:Fe=>Fe.preventDefault(),className:"digiblocks-category-link"},F.name))),h&&wp.element.createElement("div",{className:"digiblocks-post-footer-meta"},S.displayAuthor&&i._embedded?.author?.[0]&&wp.element.createElement("div",{className:"digiblocks-author-avatar"},wp.element.createElement("a",{href:"#",onClick:F=>F.preventDefault()},i._embedded.author[0].avatar_urls?.["96"]?wp.element.createElement("img",{src:i._embedded.author[0].avatar_urls[96],alt:i._embedded.author[0].name||""}):wp.element.createElement("span",{className:"digiblocks-avatar-placeholder"}))),wp.element.createElement("div",{className:"digiblocks-footer-meta-items"},S.displayAuthor&&i._embedded?.author?.[0]&&wp.element.createElement("span",{className:"digiblocks-posted-by"},wp.element.createElement("span",{className:"digiblocks-meta-prefix"},Te("by","digiblocks"))," ",wp.element.createElement("a",{href:"#",onClick:F=>F.preventDefault()},i._embedded.author[0].name)),S.displayDate&&wp.element.createElement("span",{className:"digiblocks-posted-on"},wp.element.createElement("span",{className:"digiblocks-meta-prefix"},Te("on","digiblocks"))," ",wp.element.createElement("time",{dateTime:i.date},new Date(i.date).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}))))),(z||h&&S.displayComments)&&wp.element.createElement("div",{className:"digiblocks-post-footer-actions"},z&&wp.element.createElement("a",{href:"#",onClick:F=>F.preventDefault(),className:"digiblocks-post-read-more"},w),h&&S.displayComments&&wp.element.createElement("a",{href:"#",className:"digiblocks-post-comments-count",onClick:F=>F.preventDefault()},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M256 64C125.8 64 32 148.6 32 240c0 37.1 15.5 70.6 40 100c5.2 6.3 8.4 14.8 7.4 23.9c-3.1 27-11.4 52.5-25.7 76.3c-.5 .9-1.1 1.8-1.6 2.6c11.1-2.9 22.2-7 32.7-11.5L91.2 446l-6.4-14.7c17-7.4 33-16.7 48.4-27.4c8.5-5.9 19.4-7.5 29.2-4.2C193 410.1 224.1 416 256 416c130.2 0 224-84.6 224-176s-93.8-176-224-176zM0 240C0 125.2 114.5 32 256 32s256 93.2 256 208s-114.5 208-256 208c-36 0-70.5-6.7-103.8-17.9c-.2-.1-.5 0-.7 .1c-16.9 11.7-34.7 22.1-53.9 30.5C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.8s-1.1-12.8 3.4-17.4c8.1-8.2 15.2-18.2 21.7-29c11.7-19.6 18.7-40.6 21.3-63.1c0 0-.1-.1-.1-.2C19.6 327.1 0 286.6 0 240z"})),i.comment_count===0?Te("Leave a Comment","digiblocks"):i.comment_count===1?Te("1 Comment","digiblocks"):sprintf(Te("%d Comments","digiblocks"),i.comment_count||0))))))),V&&wp.element.createElement("div",{className:"digiblocks-pagination"},wp.element.createElement("a",{className:"page-numbers",href:"#",onClick:i=>i.preventDefault()},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M47 239c-9.4 9.4-9.4 24.6 0 33.9L207 433c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L97.9 256 241 113c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L47 239z"}))),wp.element.createElement("a",{className:"page-numbers",href:"#",onClick:i=>i.preventDefault()},"1"),wp.element.createElement("span",{className:"page-numbers current"},"2"),wp.element.createElement("a",{className:"page-numbers",href:"#",onClick:i=>i.preventDefault()},"3"),wp.element.createElement("span",{className:"page-numbers dots"},"\u2026"),wp.element.createElement("a",{className:"page-numbers",href:"#",onClick:i=>i.preventDefault()},"8"),wp.element.createElement("a",{className:"page-numbers",href:"#",onClick:i=>i.preventDefault()},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M273 239c9.4 9.4 9.4 24.6 0 33.9L113 433c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l143-143L79 113c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L273 239z"}))))):wp.element.createElement(mf,{icon:"admin-post",label:Te("Posts","digiblocks")},wp.element.createElement(hf,null))))},hg=wf;var Sf=()=>null,fg=Sf;var{__:Wl}=window.wp.i18n,{registerBlockType:$f}=window.wp.blocks,{getBlockActiveStatus:_f}=window.wp.digiBlocks;$f("digiblocks/posts",{apiVersion:2,title:digiBlocksData.blocks.posts.title,category:"digiblocks",icon:{src:()=>{let{viewbox:ie,path:e}=digiBlocksData.blocks.posts.icon;return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${ie}`,className:"digiblocks-editor-icons"},wp.element.createElement("path",{d:e}))}},description:digiBlocksData.blocks.posts.description,keywords:[Wl("post","digiblocks"),Wl("blog","digiblocks"),Wl("article","digiblocks"),Wl("grid","digiblocks")],supports:{inserter:!!_f("posts"),html:!1,className:!1,customClassName:!1,anchor:!1},attributes:{id:{type:"string",default:""},anchor:{type:"string",default:""},visibility:{type:"object",default:{desktop:!1,tablet:!1,mobile:!1}},customClasses:{type:"string",default:""},postsToShow:{type:"number",default:3},columns:{type:"object",default:{desktop:3,tablet:2,mobile:1}},postStyle:{type:"string",default:"grid"},displayFeaturedImage:{type:"boolean",default:!0},displayTitle:{type:"boolean",default:!0},displayMeta:{type:"boolean",default:!0},displayExcerpt:{type:"boolean",default:!0},displayReadMoreButton:{type:"boolean",default:!0},metaSettings:{type:"object",default:{displayAuthor:!0,displayDate:!0,displayCategories:!0,displayComments:!0}},excerptLength:{type:"number",default:25},readMoreText:{type:"string",default:Wl("Read More","digiblocks")},order:{type:"string",default:"desc"},orderBy:{type:"string",default:"date"},categories:{type:"array",default:[]},enablePagination:{type:"boolean",default:!1},paginationAlign:{type:"string",default:"center"},paginationBackgroundColor:{type:"string",default:"#f8f9fa"},paginationTextColor:{type:"string",default:"#333333"},paginationActiveBackgroundColor:{type:"string",default:"#4a6cf7"},paginationActiveTextColor:{type:"string",default:"#ffffff"},titleColor:{type:"string",default:"#333333"},titleHoverColor:{type:"string",default:""},excerptColor:{type:"string",default:"#666666"},catBackgroundColor:{type:"string",default:"#52576b"},catColor:{type:"string",default:"#fff"},catHoverBackgroundColor:{type:"string",default:"#3f4a73"},catHoverColor:{type:"string",default:"#fff"},metaColor:{type:"string",default:"#666666"},metaHoverColor:{type:"string",default:""},buttonBackgroundColor:{type:"string",default:"#4a6cf7"},buttonTextColor:{type:"string",default:"#ffffff"},buttonBackgroundHoverColor:{type:"string",default:"#3a5ce5"},buttonTextHoverColor:{type:"string",default:"#ffffff"},imageMargin:{type:"object",default:{desktop:15,tablet:15,mobile:15}},contentMargin:{type:"object",default:{desktop:16,tablet:14,mobile:14}},padding:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},margin:{type:"object",default:{desktop:{top:0,right:0,bottom:30,left:0,unit:"px"},tablet:{top:0,right:0,bottom:25,left:0,unit:"px"},mobile:{top:0,right:0,bottom:20,left:0,unit:"px"}}},itemSpacing:{type:"object",default:{desktop:20,tablet:15,mobile:10}},titleTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:20,tablet:18,mobile:16},fontSizeUnit:"px",fontWeight:"600",fontStyle:"normal",textTransform:"none",textDecoration:"none",lineHeight:{desktop:1.4,tablet:1.3,mobile:1.2},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}},textTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:13,tablet:12,mobile:11},fontSizeUnit:"px",fontWeight:"normal",fontStyle:"normal",textTransform:"none",textDecoration:"none",lineHeight:{desktop:1.4,tablet:1.3,mobile:1.2},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}},contentTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",fontWeight:"normal",fontStyle:"normal",textTransform:"none",textDecoration:"none",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}},buttonTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:14,tablet:12,mobile:12},fontSizeUnit:"px",fontWeight:"500",fontStyle:"normal",textTransform:"none",textDecoration:"none",lineHeight:{desktop:1.4,tablet:1.4,mobile:1.3},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}},buttonPadding:{type:"object",default:{desktop:{top:8,right:16,bottom:8,left:16,unit:"px"},tablet:{top:7,right:14,bottom:7,left:14,unit:"px"},mobile:{top:6,right:12,bottom:6,left:12,unit:"px"}}},buttonBorderRadius:{type:"object",default:{desktop:{top:6,right:6,bottom:6,left:6,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},imageSize:{type:"string",default:"medium"},imageBorderRadius:{type:"object",default:{desktop:{top:12,right:12,bottom:12,left:12,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},cardStyle:{type:"boolean",default:!0},cardBackgroundColor:{type:"string",default:"#ffffff"},cardPadding:{type:"object",default:{desktop:{top:24,right:24,bottom:24,left:24,unit:"px"},tablet:{top:20,right:20,bottom:20,left:20,unit:"px"},mobile:{top:16,right:16,bottom:16,left:16,unit:"px"}}},cardBorderRadius:{type:"object",default:{desktop:{top:16,right:16,bottom:16,left:16,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},cardBorderStyle:{type:"string",default:"solid"},cardBorderWidth:{type:"object",default:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},cardBorderColor:{type:"string",default:"#e0e0e0"},cardShadow:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.1)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},cardShadowHover:{type:"object",default:{enable:!1,color:"rgba(74, 108, 247, 0.15)",horizontal:0,vertical:8,blur:25,spread:0,position:"outset"}},animation:{type:"string",default:"none"}},example:{attributes:{postStyle:"grid",postsToShow:1,columns:1,cardStyle:!0,displayFeaturedImage:!0,displayTitle:!0,displayExcerpt:!0,excerptLength:15,displayMeta:!0,titleColor:"#333333",excerptColor:"#666666",metaColor:"#666666",buttonBackgroundColor:"#4a6cf7",buttonTextColor:"#ffffff",itemSpacing:{desktop:20,tablet:15,mobile:10}},viewportWidth:600},edit:hg,save:fg});var{__:ve}=window.wp.i18n,{useBlockProps:Bf,RichText:hi,InspectorControls:Tf,PanelColorSettings:Ai,LinkControl:Nf}=window.wp.blockEditor,{SelectControl:el,RangeControl:kg,ToggleControl:ql,Button:Mt,Tooltip:ol,__experimentalToggleGroupControl:Hf,__experimentalToggleGroupControlOption:sr}=window.wp.components,{useState:Gl,useEffect:rn,useRef:zf}=window.wp.element,{useBlockId:Mf,getDimensionCSS:tl,animations:rr,animationPreview:vg}=digi.utils,{tabIcons:cr}=digi.icons,{ResponsiveControl:il,DimensionControl:ll,TypographyControl:Ql,BoxShadowControl:Df,CustomTabPanel:Pf,TabPanelBody:lt,FontAwesomeControl:Mv}=digi.components,Rf=({attributes:ie,setAttributes:e,clientId:K})=>{let{id:o,anchor:O,visibility:a,customClasses:le,tables:l,columns:_,tableStyle:y,align:$,animation:P,titleTypography:h,headingTypography:s,textTypography:z,contentTypography:S,buttonTypography:C,padding:w,margin:T,borderRadius:U,borderWidth:L,borderStyle:V,borderColor:Q,boxShadow:be,boxShadowHover:N,buttonRadius:u,buttonPadding:v,buttonBorderStyle:I,buttonBorderWidth:ne,buttonBorderColor:Me,buttonBorderHoverColor:Le,showRibbon:X,ribbonStyle:H,ribbonPosition:Y,tableTextColor:W,tableBackgroundColor:ce,headerBackgroundColor:ue,buttonTextColor:A,buttonBackgroundColor:J,buttonTextHoverColor:me,buttonBackgroundHoverColor:oe,ribbonTextColor:fe,ribbonBackgroundColor:je}=ie;Mf(o,K,e);let[te,to]=Gl(window.digi.responsiveState.activeDevice),[De,r]=Gl(!1),[D,xe]=Gl(()=>{if(window.digi.uiState){let t=window.digi.uiState.getActiveTab(K);if(t)return t}return"options"}),[Pe,Se]=Gl(0),[Ue,ee]=Gl(!1);rn(()=>{let t=()=>window.digi&&window.digi.components&&window.digi.components.FontAwesomeControl?(ee(!0),!0):!1;if(!t()){let b=setTimeout(()=>{t()&&clearTimeout(b)},500);return()=>clearTimeout(b)}},[]),rn(()=>window.digi.responsiveState.subscribe(b=>{to(b)}),[]),rn(()=>{(!l||l.length===0)&&e({tables:[{id:`table-1-${Date.now().toString(36)}`,title:ve("Basic Plan","digiblocks"),price:"$19",period:"/month",description:ve("Great for starters","digiblocks"),iconValue:null,features:[{text:ve("1 Website","digiblocks"),enabled:!0},{text:ve("5GB Storage","digiblocks"),enabled:!0},{text:ve("10k Visits Monthly","digiblocks"),enabled:!0},{text:ve("Premium Support","digiblocks"),enabled:!1}],buttonText:ve("Get Started","digiblocks"),buttonUrl:"",buttonOpenInNewTab:!1,buttonRel:"",isHighlighted:!1,ribbonText:ve("Popular","digiblocks"),backgroundColor:"",headerBackgroundColor:"",textColor:"",buttonBackgroundColor:"",buttonTextColor:""},{id:`table-2-${Date.now().toString(36)}`,title:ve("Pro Plan","digiblocks"),price:"$49",period:"/month",description:ve("For growing businesses","digiblocks"),iconValue:null,features:[{text:ve("5 Websites","digiblocks"),enabled:!0},{text:ve("20GB Storage","digiblocks"),enabled:!0},{text:ve("50k Visits Monthly","digiblocks"),enabled:!0},{text:ve("Premium Support","digiblocks"),enabled:!0}],buttonText:ve("Get Started","digiblocks"),buttonUrl:"",buttonOpenInNewTab:!1,buttonRel:"",isHighlighted:!0,ribbonText:ve("Popular","digiblocks"),backgroundColor:"",headerBackgroundColor:"",textColor:"",buttonBackgroundColor:"",buttonTextColor:""}],columns:2,tableStyle:"style1",align:"center",showRibbon:!0,ribbonStyle:"corner",ribbonPosition:"right",titleTypography:h||{fontSize:{desktop:24,tablet:20,mobile:18},fontSizeUnit:"px",lineHeight:{desktop:1.4,tablet:1.3,mobile:1.2},lineHeightUnit:"em",fontWeight:"",fontFamily:""},headingTypography:s||{fontSize:{desktop:36,tablet:30,mobile:26},fontSizeUnit:"px",lineHeight:{desktop:1.2,tablet:1.2,mobile:1.2},lineHeightUnit:"em",fontWeight:"bold",fontFamily:""},textTypography:z||{fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",lineHeight:{desktop:1.6,tablet:1.5,mobile:1.4},lineHeightUnit:"em",fontWeight:"",fontFamily:""},contentTypography:S||{fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",lineHeight:{desktop:1.6,tablet:1.5,mobile:1.4},lineHeightUnit:"em",fontWeight:"",fontFamily:""},buttonTypography:C||{fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em",fontWeight:"",fontFamily:""}})},[l,e]);let Be=zf(null);rn(()=>{if(P&&P!=="none"){let t=setTimeout(()=>{vg(o,P,rr,Be)},100);return()=>clearTimeout(t)}},[P]);let Xe=()=>{vg(o,P,rr,Be)},q=[{label:ve("Style 1","digiblocks"),value:"style1"},{label:ve("Style 2","digiblocks"),value:"style2"},{label:ve("Style 3","digiblocks"),value:"style3"},{label:ve("Style 4","digiblocks"),value:"style4"},{label:ve("Minimal","digiblocks"),value:"minimal"}],ye=[{label:ve("Corner","digiblocks"),value:"corner"},{label:ve("Banner","digiblocks"),value:"banner"},{label:ve("Side","digiblocks"),value:"side"},{label:ve("Flag","digiblocks"),value:"flag"}],qe=[{label:ve("Right","digiblocks"),value:"right"},{label:ve("Left","digiblocks"),value:"left"}],E=[{label:ve("None","digiblocks"),value:"none"},{label:ve("Solid","digiblocks"),value:"solid"},{label:ve("Dotted","digiblocks"),value:"dotted"},{label:ve("Dashed","digiblocks"),value:"dashed"},{label:ve("Double","digiblocks"),value:"double"}],se=[{label:ve("None","digiblocks"),value:"none"},...Object.keys(rr).map(t=>({label:t.replace(/-/g," ").replace(/\b\w/g,b=>b.toUpperCase()),value:t}))],B=[{name:"options",title:ve("Options","digiblocks"),icon:cr.optionsIcon},{name:"style",title:ve("Style","digiblocks"),icon:cr.styleIcon},{name:"advanced",title:ve("Advanced","digiblocks"),icon:cr.advancedIcon}],c=()=>{let t=[...l,{id:`table-${l.length+1}-${Date.now().toString(36)}`,title:ve("New Plan","digiblocks"),price:"$29",period:"/month",description:ve("Add your description","digiblocks"),iconValue:null,features:[{text:ve("Feature 1","digiblocks"),enabled:!0},{text:ve("Feature 2","digiblocks"),enabled:!0},{text:ve("Feature 3","digiblocks"),enabled:!1}],buttonText:ve("Get Started","digiblocks"),buttonUrl:"",buttonOpenInNewTab:!1,buttonRel:"",isHighlighted:!1,ribbonText:ve("Popular","digiblocks"),backgroundColor:"",headerBackgroundColor:"",textColor:"",buttonBackgroundColor:"",buttonTextColor:""}];e({tables:t}),Se(t.length-1)},ge=t=>{if(l.length<=1)return;let b=[...l];b.splice(t,1),e({tables:b}),Pe>=b.length&&Se(b.length-1)},M=t=>{let Ce={...l[t],id:`table-${l.length+1}-${Date.now().toString(36)}`},n=[...l];n.splice(t+1,0,Ce),e({tables:n}),Se(t+1)},k=t=>{if(t===0)return;let b=[...l],Ce=b[t];b[t]=b[t-1],b[t-1]=Ce,e({tables:b}),Se(t-1)},G=t=>{if(t===l.length-1)return;let b=[...l],Ce=b[t];b[t]=b[t+1],b[t+1]=Ce,e({tables:b}),Se(t+1)},d=(t,b,Ce)=>{let n=[...l];n[t]={...n[t],[b]:Ce},e({tables:n})},re=t=>{let b=[...l];b[t].features.push({text:ve("New Feature","digiblocks"),enabled:!0}),e({tables:b})},x=(t,b)=>{if(l[t].features.length<=1)return;let Ce=[...l];Ce[t].features.splice(b,1),e({tables:Ce})},m=(t,b,Ce,n)=>{let we=[...l];we[t].features[b]={...we[t].features[b],[Ce]:n},e({tables:we})},he=(t,b)=>{let Ce=[...l];Ce[t].features[b].enabled=!Ce[t].features[b].enabled,e({tables:Ce})},j=t=>{e({tableStyle:t});let b={};switch(t){case"style1":b={tableBackgroundColor:"#ffffff",headerBackgroundColor:"#f8f9fa",tableTextColor:"#333333",buttonBackgroundColor:"#4a6cf7",buttonTextColor:"#ffffff",buttonBackgroundHoverColor:"#3151e1",buttonTextHoverColor:"#ffffff",ribbonBackgroundColor:"#4a6cf7",ribbonTextColor:"#ffffff",borderStyle:"solid",borderWidth:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}},borderColor:"#e6e6e6",borderRadius:{desktop:{top:8,right:8,bottom:8,left:8,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}},boxShadow:{enable:!1,color:"rgba(0, 0, 0, 0.1)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}};break;case"style2":b={tableBackgroundColor:"#ffffff",headerBackgroundColor:"#4a6cf7",tableTextColor:"#333333",buttonBackgroundColor:"#4a6cf7",buttonTextColor:"#ffffff",buttonBackgroundHoverColor:"#3151e1",buttonTextHoverColor:"#ffffff",ribbonBackgroundColor:"#ff9800",ribbonTextColor:"#ffffff",borderStyle:"none",borderWidth:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}},borderColor:"#e6e6e6",borderRadius:{desktop:{top:8,right:8,bottom:8,left:8,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}},boxShadow:{enable:!0,color:"rgba(0, 0, 0, 0.1)",horizontal:0,vertical:4,blur:15,spread:0,position:"outset"}};break;case"style3":b={tableBackgroundColor:"#ffffff",headerBackgroundColor:"#ffffff",tableTextColor:"#333333",buttonBackgroundColor:"#4a6cf7",buttonTextColor:"#ffffff",buttonBackgroundHoverColor:"#3151e1",buttonTextHoverColor:"#ffffff",ribbonBackgroundColor:"#ff5252",ribbonTextColor:"#ffffff",borderStyle:"solid",borderWidth:{desktop:{top:3,right:3,bottom:3,left:3,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}},borderColor:"#4a6cf7",borderRadius:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}},boxShadow:{enable:!1,color:"rgba(0, 0, 0, 0.1)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}};break;case"style4":b={tableBackgroundColor:"#f8f9fa",headerBackgroundColor:"#ffffff",tableTextColor:"#333333",buttonBackgroundColor:"#333333",buttonTextColor:"#ffffff",buttonBackgroundHoverColor:"#000000",buttonTextHoverColor:"#ffffff",ribbonBackgroundColor:"#333333",ribbonTextColor:"#ffffff",borderStyle:"none",borderWidth:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}},borderColor:"#e6e6e6",borderRadius:{desktop:{top:16,right:16,bottom:16,left:16,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}},boxShadow:{enable:!0,color:"rgba(0, 0, 0, 0.08)",horizontal:0,vertical:10,blur:25,spread:0,position:"outset"}};break;case"minimal":b={tableBackgroundColor:"transparent",headerBackgroundColor:"transparent",tableTextColor:"#333333",buttonBackgroundColor:"transparent",buttonTextColor:"#4a6cf7",buttonBackgroundHoverColor:"transparent",buttonTextHoverColor:"#3151e1",ribbonBackgroundColor:"#f8f9fa",ribbonTextColor:"#333333",borderStyle:"solid",borderWidth:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}},borderColor:"#e6e6e6",borderRadius:{desktop:{top:"",right:"",bottom:0,left:0,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}},boxShadow:{enable:!1,color:"rgba(0, 0, 0, 0.1)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}};break;default:b={}}e(b)},Ne=Ue?window.digi.components.FontAwesomeControl:null,f=()=>{let t=te,b="";V&&V!=="none"?b=`
				border-style: ${V};
				border-color: ${Q||"#e6e6e6"};
				${tl(L,"border-width",t)}
				${tl(U,"border-radius",t)}
			`:b="border: none;";let Ce="box-shadow: none;";be&&be.enable&&(Ce=`box-shadow: ${be.position==="inset"?"inset ":""}${be.horizontal}px ${be.vertical}px ${be.blur}px ${be.spread}px ${be.color};`);let n="";N&&N.enable&&(n=`box-shadow: ${N.position==="inset"?"inset ":""}${N.horizontal}px ${N.vertical}px ${N.blur}px ${N.spread}px ${N.color};`);let we=`${tl(w,"padding",t)}`,Ke=`${tl(T,"margin",t)}`,p={fontFamily:"",fontSize:{desktop:24,tablet:20,mobile:18},fontSizeUnit:"px",fontWeight:"",fontStyle:"normal",textTransform:"",textDecoration:"",lineHeight:{desktop:1.4,tablet:1.3,mobile:1.2},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"},g={fontFamily:"",fontSize:{desktop:36,tablet:30,mobile:26},fontSizeUnit:"px",fontWeight:"bold",fontStyle:"normal",textTransform:"",textDecoration:"",lineHeight:{desktop:1.2,tablet:1.2,mobile:1.2},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"},He={fontFamily:"",fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",fontWeight:"",fontStyle:"normal",textTransform:"",textDecoration:"",lineHeight:{desktop:1.6,tablet:1.5,mobile:1.4},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"},Je={fontFamily:"",fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",fontWeight:"",fontStyle:"normal",textTransform:"",textDecoration:"",lineHeight:{desktop:1.6,tablet:1.5,mobile:1.4},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"},i={fontFamily:"",fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",fontWeight:"",fontStyle:"normal",textTransform:"",textDecoration:"",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"},F="",Fe=h||p;Fe.fontFamily&&(F+=`font-family: ${Fe.fontFamily};`),Fe.fontSize&&Fe.fontSize[t]?F+=`font-size: ${Fe.fontSize[t]}${Fe.fontSizeUnit||"px"};`:p.fontSize&&p.fontSize[t]&&(F+=`font-size: ${p.fontSize[t]}px;`),Fe.fontWeight&&(F+=`font-weight: ${Fe.fontWeight};`),Fe.fontStyle&&(F+=`font-style: ${Fe.fontStyle};`),Fe.textTransform&&(F+=`text-transform: ${Fe.textTransform};`),Fe.textDecoration&&(F+=`text-decoration: ${Fe.textDecoration};`),Fe.lineHeight&&Fe.lineHeight[t]?F+=`line-height: ${Fe.lineHeight[t]}${Fe.lineHeightUnit||"em"};`:p.lineHeight&&p.lineHeight[t]&&(F+=`line-height: ${p.lineHeight[t]}em;`),Fe.letterSpacing&&Fe.letterSpacing[t]&&(F+=`letter-spacing: ${Fe.letterSpacing[t]}${Fe.letterSpacingUnit||"px"};`);let po="",R=s||g;R.fontFamily&&(po+=`font-family: ${R.fontFamily};`),R.fontSize&&R.fontSize[t]?po+=`font-size: ${R.fontSize[t]}${R.fontSizeUnit||"px"};`:g.fontSize&&g.fontSize[t]&&(po+=`font-size: ${g.fontSize[t]}px;`),R.fontWeight?po+=`font-weight: ${R.fontWeight};`:po+="font-weight: bold;",R.fontStyle&&(po+=`font-style: ${R.fontStyle};`),R.textTransform&&(po+=`text-transform: ${R.textTransform};`),R.textDecoration&&(po+=`text-decoration: ${R.textDecoration};`),R.lineHeight&&R.lineHeight[t]?po+=`line-height: ${R.lineHeight[t]}${R.lineHeightUnit||"em"};`:g.lineHeight&&g.lineHeight[t]&&(po+=`line-height: ${g.lineHeight[t]}em;`),R.letterSpacing&&R.letterSpacing[t]&&(po+=`letter-spacing: ${R.letterSpacing[t]}${R.letterSpacingUnit||"px"};`);let Ae="",co=z||He;co.fontFamily&&(Ae+=`font-family: ${co.fontFamily};`),co.fontSize&&co.fontSize[t]?Ae+=`font-size: ${co.fontSize[t]}${co.fontSizeUnit||"px"};`:He.fontSize&&He.fontSize[t]&&(Ae+=`font-size: ${He.fontSize[t]}px;`),co.fontWeight&&(Ae+=`font-weight: ${co.fontWeight};`),co.fontStyle&&(Ae+=`font-style: ${co.fontStyle};`),co.textTransform&&(Ae+=`text-transform: ${co.textTransform};`),co.textDecoration&&(Ae+=`text-decoration: ${co.textDecoration};`),co.lineHeight&&co.lineHeight[t]?Ae+=`line-height: ${co.lineHeight[t]}${co.lineHeightUnit||"em"};`:He.lineHeight&&He.lineHeight[t]&&(Ae+=`line-height: ${He.lineHeight[t]}em;`),co.letterSpacing&&co.letterSpacing[t]&&(Ae+=`letter-spacing: ${co.letterSpacing[t]}${co.letterSpacingUnit||"px"};`);let uo="",ho=S||Je;ho.fontFamily&&(uo+=`font-family: ${ho.fontFamily};`),ho.fontSize&&ho.fontSize[t]?uo+=`font-size: ${ho.fontSize[t]}${ho.fontSizeUnit||"px"};`:Je.fontSize&&Je.fontSize[t]&&(uo+=`font-size: ${Je.fontSize[t]}px;`),ho.fontWeight&&(uo+=`font-weight: ${ho.fontWeight};`),ho.fontStyle&&(uo+=`font-style: ${ho.fontStyle};`),ho.textTransform&&(uo+=`text-transform: ${ho.textTransform};`),ho.textDecoration&&(uo+=`text-decoration: ${ho.textDecoration};`),ho.lineHeight&&ho.lineHeight[t]?uo+=`line-height: ${ho.lineHeight[t]}${ho.lineHeightUnit||"em"};`:Je.lineHeight&&Je.lineHeight[t]&&(uo+=`line-height: ${Je.lineHeight[t]}em;`),ho.letterSpacing&&ho.letterSpacing[t]&&(uo+=`letter-spacing: ${ho.letterSpacing[t]}${ho.letterSpacingUnit||"px"};`);let fo="",mo=C||i;mo.fontFamily&&(fo+=`font-family: ${mo.fontFamily};`),mo.fontSize&&mo.fontSize[t]?fo+=`font-size: ${mo.fontSize[t]}${mo.fontSizeUnit||"px"};`:i.fontSize&&i.fontSize[t]&&(fo+=`font-size: ${i.fontSize[t]}px;`),mo.fontWeight&&(fo+=`font-weight: ${mo.fontWeight};`),mo.fontStyle&&(fo+=`font-style: ${mo.fontStyle};`),mo.textTransform&&(fo+=`text-transform: ${mo.textTransform};`),mo.textDecoration&&(fo+=`text-decoration: ${mo.textDecoration};`),mo.lineHeight&&mo.lineHeight[t]?fo+=`line-height: ${mo.lineHeight[t]}${mo.lineHeightUnit||"em"};`:i.lineHeight&&i.lineHeight[t]&&(fo+=`line-height: ${i.lineHeight[t]}em;`),mo.letterSpacing&&mo.letterSpacing[t]&&(fo+=`letter-spacing: ${mo.letterSpacing[t]}${mo.letterSpacingUnit||"px"};`);let yo=u||4,Lo=v&&v[t]?`${tl(v,"padding",t)}`:"padding: 10px 20px",Bo="";I&&I!=="none"?Bo=`
				border-style: ${I};
				border-color: ${Me||J||"#4a6cf7"};
				${tl(ne,"border-width",t)}
			`:Bo="border: none;";let $o="";switch(y){case"style1":$o=`
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
				`;break;case"style2":$o=`
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
				`;break;case"style3":$o=`
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
				`;break;case"style4":$o=`
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
				`;break;case"minimal":$o=`
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
				`;break;default:$o=""}let vo="";if(X)switch(H){case"corner":vo=`
						.${o} .digiblocks-pricing-table-ribbon {
							position: absolute;
							top: 0;
							${Y==="right"?"right":"left"}: 0;
							background: ${je||"#4a6cf7"};
							color: ${fe||"#ffffff"};
							padding: 5px 10px;
							font-size: 12px;
							font-weight: bold;
							text-transform: uppercase;
							z-index: 2;
							${Y==="right"?"border-radius: 0 0 0 4px;":"border-radius: 0 0 4px 0;"}
						}
					`;break;case"banner":vo=`
						.${o} .digiblocks-pricing-table-highlighted {
							overflow: hidden;
						}

						.${o} .digiblocks-pricing-table-ribbon {
							position: absolute;
							top: 7px;
							${Y==="right"?"right":"left"}: -24px;
							background: ${je||"#4a6cf7"};
							color: ${fe||"#ffffff"};
							padding: 5px 30px;
							font-size: 12px;
							font-weight: bold;
							transform: ${Y==="right"?"rotate(45deg)":"rotate(-45deg)"};
							z-index: 2;
							transform-origin: center center;
						}
					`;break;case"side":vo=`
						.${o} .digiblocks-pricing-table-ribbon {
							position: absolute;
							top: 30px;
							${Y==="right"?"right":"left"}: 0;
							background: ${je||"#4a6cf7"};
							color: ${fe||"#ffffff"};
							padding: 5px 10px;
							font-size: 12px;
							font-weight: bold;
							${Y==="right"?"border-radius: 4px 0 0 4px;":"border-radius: 0 4px 4px 0;"}
							z-index: 2;
						}
					`;break;case"flag":vo=`
						.${o} .digiblocks-pricing-table-ribbon {
							position: absolute;
							top: 15px;
							${Y==="right"?"right":"left"}: 15px;
							background: ${je||"#4a6cf7"};
							color: ${fe||"#ffffff"};
							padding: 8px 15px;
							font-size: 12px;
							font-weight: bold;
							border-radius: 50px;
							z-index: 2;
						}
					`;break;default:vo=""}return`
			/* Pricing Table Block - ${o} */
			.${o} {
				${Ke}
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
				background-color: ${ce||"#ffffff"};
				color: ${W||"#333333"};
				${b}
				${Ce}
				${we}
				position: relative;
				transition: all 0.3s ease;
			}
			
			/* Highlighted table */
			.${o} .digiblocks-pricing-table-highlighted {
				z-index: 1;
			}
			
			/* Hover effect */
			.${o} .digiblocks-pricing-table:hover {
				${N&&N.enable?n:""}
			}
			
			/* Header section */
			.${o} .digiblocks-pricing-table-header {
				background-color: ${ue||"transparent"};
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
			
			${l.map((zo,Yt)=>`
				/* Custom colors for table ${Yt+1} */
				.${o} .digiblocks-pricing-table:nth-child(${Yt+1}) .digiblocks-pricing-table-icon svg {
					fill: ${zo.iconColor||W||"#333333"};
					transition: fill 0.3s ease;
				}
				
				.${o} .digiblocks-pricing-table:nth-child(${Yt+1}):hover .digiblocks-pricing-table-icon svg {
					fill: ${zo.iconHoverColor||zo.iconColor||W||"#333333"};
				}
			`).join("")}
			
			/* Title */
			.${o} .digiblocks-pricing-table-title {
				margin: 0;
				color: ${W||"#333333"};
				${F}
			}
			
			/* Price section */
			.${o} .digiblocks-pricing-table-price {
				color: ${W||"#333333"};
				${po}
			}
			
			.${o} .digiblocks-pricing-table-period {
				${Ae}
				opacity: 0.8;
			}
			
			/* Description */
			.${o} .digiblocks-pricing-table-description {
				${Ae}
			}
			
			/* Features section */
			.${o} .digiblocks-pricing-table-feature-wrapper {
				display: flex;
				align-items: center;
				justify-content: ${$==="center"?"center":$==="right"?"flex-end":"space-between"};
				gap: 10px;
			}

			.${o} .digiblocks-pricing-table-feature-item {
				display: flex;
				align-items: center;
				justify-content: ${$==="center"?"center":$==="right"?"flex-end":"flex-start"};
				gap: 10px;
				${uo}
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
				background-color: ${J||"#4a6cf7"};
				color: ${A||"#ffffff"};
				${Lo}
				border-radius: ${yo}px;
				cursor: pointer;
				display: inline-block;
				text-decoration: none;
				transition: all 0.3s ease;
				${Bo}
				${fo}
			}
			
			.${o} .digiblocks-pricing-table-button:hover {
				background-color: ${oe||"#3151e1"};
				color: ${me||"#ffffff"};
				${Le?`border-color: ${Le};`:""}
			}
			
			/* Ribbon */
			${vo}
			
			/* Table-specific styles */
			${$o}
			
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
			${a.desktop?`
				@media (min-width: 992px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${a.tablet?`
				@media (min-width: 768px) and (max-width: 991px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${a.mobile?`
				@media (max-width: 767px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}
		`},Ge=(t,b)=>wp.element.createElement("div",{key:t.id,className:`digiblocks-pricing-table ${Pe===b?"digiblocks-table-active":""} ${t.isHighlighted?"digiblocks-pricing-table-highlighted":""}`,onClick:()=>Se(b),style:t.backgroundColor?{backgroundColor:t.backgroundColor}:null},wp.element.createElement("div",{className:"digiblocks-table-item-controls"},wp.element.createElement(ol,{text:ve("Move Left","digiblocks")},wp.element.createElement(Mt,{icon:"arrow-left-alt2",isSmall:!0,onClick:Ce=>{Ce.stopPropagation(),k(b)},disabled:b===0})),wp.element.createElement(ol,{text:ve("Move Right","digiblocks")},wp.element.createElement(Mt,{icon:"arrow-right-alt2",isSmall:!0,onClick:Ce=>{Ce.stopPropagation(),G(b)},disabled:b===l.length-1})),wp.element.createElement(ol,{text:ve("Duplicate","digiblocks")},wp.element.createElement(Mt,{icon:"admin-page",isSmall:!0,onClick:Ce=>{Ce.stopPropagation(),M(b)}})),wp.element.createElement(ol,{text:ve("Remove","digiblocks")},wp.element.createElement(Mt,{icon:"trash",isSmall:!0,onClick:Ce=>{Ce.stopPropagation(),ge(b)},disabled:l.length<=1}))),X&&t.isHighlighted&&wp.element.createElement("div",{className:"digiblocks-pricing-table-ribbon"},wp.element.createElement(hi,{tagName:"span",value:t.ribbonText,onChange:Ce=>d(b,"ribbonText",Ce),placeholder:ve("Popular","digiblocks")})),wp.element.createElement("div",{className:"digiblocks-pricing-table-header",style:t.headerBackgroundColor?{backgroundColor:t.headerBackgroundColor}:null},t.iconValue&&t.iconValue.svg&&wp.element.createElement("div",{className:"digiblocks-pricing-table-icon"},wp.element.createElement("span",{dangerouslySetInnerHTML:{__html:t.iconValue.svg}})),wp.element.createElement(hi,{tagName:"h3",className:"digiblocks-pricing-table-title",value:t.title,onChange:Ce=>d(b,"title",Ce),placeholder:ve("Plan Title","digiblocks"),style:t.textColor?{color:t.textColor}:null}),wp.element.createElement("div",{className:"digiblocks-pricing-table-price",style:t.textColor?{color:t.textColor}:null},wp.element.createElement(hi,{tagName:"span",className:"digiblocks-pricing-table-amount",value:t.price,onChange:Ce=>d(b,"price",Ce),placeholder:ve("$0","digiblocks")}),wp.element.createElement(hi,{tagName:"span",className:"digiblocks-pricing-table-period",value:t.period,onChange:Ce=>d(b,"period",Ce),placeholder:ve("/month","digiblocks")})),wp.element.createElement(hi,{tagName:"div",className:"digiblocks-pricing-table-description",value:t.description,onChange:Ce=>d(b,"description",Ce),placeholder:ve("Short description","digiblocks"),style:t.textColor?{color:t.textColor}:null})),wp.element.createElement("div",{className:"digiblocks-pricing-table-features"},t.features.map((Ce,n)=>wp.element.createElement("div",{key:`feature-${n}`,className:"digiblocks-pricing-table-feature-wrapper"},wp.element.createElement("div",{className:`digiblocks-pricing-table-feature-item ${Ce.enabled?"":"digiblocks-pricing-table-feature-disabled"}`},wp.element.createElement("div",{className:"digiblocks-pricing-table-feature-icon"},Ce.enabled?wp.element.createElement("span",{className:"digiblocks-pricing-table-feature-check"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"16",height:"16",fill:"currentColor"},wp.element.createElement("path",{d:"M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"}))):wp.element.createElement("span",{className:"digiblocks-pricing-table-feature-cross"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",width:"16",height:"16",fill:"currentColor"},wp.element.createElement("path",{d:"M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"})))),wp.element.createElement(hi,{tagName:"div",className:"digiblocks-pricing-table-feature-text",value:Ce.text,onChange:we=>m(b,n,"text",we),placeholder:ve("Feature","digiblocks"),style:t.textColor?{color:t.textColor}:null})),wp.element.createElement("div",{className:"digiblocks-feature-item-controls"},wp.element.createElement(ol,{text:Ce.enabled?ve("Disable","digiblocks"):ve("Enable","digiblocks")},wp.element.createElement(Mt,{icon:Ce.enabled?"visibility":"hidden",isSmall:!0,onClick:we=>{we.stopPropagation(),he(b,n)}})),wp.element.createElement(ol,{text:ve("Remove","digiblocks")},wp.element.createElement(Mt,{icon:"trash",isSmall:!0,onClick:we=>{we.stopPropagation(),x(b,n)},disabled:t.features.length<=1}))))),wp.element.createElement(Mt,{variant:"secondary",isSmall:!0,onClick:Ce=>{Ce.stopPropagation(),re(b)},style:{width:"100%",marginTop:"10px"}},ve("Add Feature","digiblocks"))),wp.element.createElement("div",{className:"digiblocks-pricing-table-footer"},wp.element.createElement("div",{className:"digiblocks-pricing-table-button",style:t.buttonBackgroundColor?{backgroundColor:t.buttonBackgroundColor,color:t.buttonTextColor||A||"#ffffff"}:null},wp.element.createElement(hi,{tagName:"span",value:t.buttonText,onChange:Ce=>d(b,"buttonText",Ce),placeholder:ve("Get Started","digiblocks")})))),We=()=>{switch(D){case"options":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(lt,{tab:"options",name:"layout",title:ve("Layout","digiblocks"),initialOpen:!0},wp.element.createElement(kg,{label:ve("Columns","digiblocks"),value:_,onChange:t=>e({columns:t}),min:1,max:4,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(el,{label:ve("Table Style","digiblocks"),value:y,options:q,onChange:t=>j(t),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Hf,{label:ve("Alignment","digiblocks"),value:$,onChange:t=>e({align:t}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(sr,{value:"left",label:ve("Left","digiblocks")}),wp.element.createElement(sr,{value:"center",label:ve("Center","digiblocks")}),wp.element.createElement(sr,{value:"right",label:ve("Right","digiblocks")}))),wp.element.createElement(lt,{tab:"options",name:"ribbon",title:ve("Ribbon","digiblocks"),initialOpen:!1},wp.element.createElement(ql,{label:ve("Show Ribbon","digiblocks"),checked:X,onChange:t=>e({showRibbon:t}),help:ve("Display a ribbon on highlighted tables.","digiblocks"),__nextHasNoMarginBottom:!0}),X&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(el,{label:ve("Ribbon Style","digiblocks"),value:H,options:ye,onChange:t=>e({ribbonStyle:t}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(el,{label:ve("Ribbon Position","digiblocks"),value:Y,options:qe,onChange:t=>e({ribbonPosition:t}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Ai,{title:ve("Ribbon Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:je,onChange:t=>e({ribbonBackgroundColor:t}),label:ve("Background Color","digiblocks")},{value:fe,onChange:t=>e({ribbonTextColor:t}),label:ve("Text Color","digiblocks")}]}))),wp.element.createElement(lt,{tab:"options",name:"table-config",title:ve("Table Settings","digiblocks"),initialOpen:!1},l[Pe]&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("h3",null,ve("Editing Table","digiblocks")," #",Pe+1),wp.element.createElement(ql,{label:ve("Highlight This Table","digiblocks"),checked:l[Pe].isHighlighted,onChange:t=>d(Pe,"isHighlighted",t),help:ve("Apply special styling to highlight this table.","digiblocks"),__nextHasNoMarginBottom:!0}),Ue?wp.element.createElement(Ne,{label:ve("Select Icon","digiblocks"),value:l[Pe].iconValue,onChange:t=>d(Pe,"iconValue",t)}):wp.element.createElement("div",{style:{textAlign:"center",padding:"20px 0"}},wp.element.createElement("div",{className:"components-spinner"}),wp.element.createElement("p",null,ve("Loading icon selector...","digiblocks"))),l[Pe]&&l[Pe].iconValue&&wp.element.createElement(Ai,{title:ve("Icon Colors","digiblocks"),initialOpen:!1,enableAlpha:!0,colorSettings:[{value:l[Pe].iconColor,onChange:t=>d(Pe,"iconColor",t),label:ve("Icon Color","digiblocks")},{value:l[Pe].iconHoverColor,onChange:t=>d(Pe,"iconHoverColor",t),label:ve("Icon Hover Color","digiblocks")}]}),wp.element.createElement("div",{style:{marginTop:"15px",marginBottom:"10px"}},wp.element.createElement("p",null,wp.element.createElement("strong",null,ve("Button Link","digiblocks"))),wp.element.createElement(Nf,{value:l[Pe].buttonUrl?{url:l[Pe].buttonUrl,opensInNewTab:!!l[Pe].buttonOpenInNewTab,rel:l[Pe].buttonRel||""}:void 0,settings:[{id:"opensInNewTab",title:ve("Open in new tab","digiblocks")},{id:"rel",title:ve("Add noopener noreferrer","digiblocks")}],onChange:t=>{if(t&&t.url){let b=[...l];b[Pe]={...b[Pe],buttonUrl:t.url,buttonOpenInNewTab:!!t.opensInNewTab,buttonRel:t.rel||""},e({tables:b})}},onRemove:()=>{let t=[...l];t[Pe]={...t[Pe],buttonUrl:"",buttonOpenInNewTab:!1,buttonRel:""},e({tables:t})},suggestionsQuery:{type:"post",subtype:"any"},forceIsEditingLink:!l[Pe].buttonUrl})))));case"style":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(lt,{tab:"style",name:"colors",title:ve("Colors","digiblocks"),initialOpen:!0},wp.element.createElement(Ai,{title:ve("Table Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:ce,onChange:t=>e({tableBackgroundColor:t}),label:ve("Background Color","digiblocks")},{value:ue,onChange:t=>e({headerBackgroundColor:t}),label:ve("Header Background","digiblocks")},{value:W,onChange:t=>e({tableTextColor:t}),label:ve("Text Color","digiblocks")}]}),wp.element.createElement(Ai,{title:ve("Button Colors","digiblocks"),initialOpen:!1,enableAlpha:!0,colorSettings:[{value:J,onChange:t=>e({buttonBackgroundColor:t}),label:ve("Background Color","digiblocks")},{value:A,onChange:t=>e({buttonTextColor:t}),label:ve("Text Color","digiblocks")},{value:oe,onChange:t=>e({buttonBackgroundHoverColor:t}),label:ve("Hover Background","digiblocks")},{value:me,onChange:t=>e({buttonTextHoverColor:t}),label:ve("Hover Text","digiblocks")}]})),wp.element.createElement(lt,{tab:"style",name:"typography",title:ve("Typography","digiblocks"),initialOpen:!1},wp.element.createElement(Ql,{label:ve("Title Typography","digiblocks"),value:h,onChange:t=>e({titleTypography:t}),defaults:{fontSize:{desktop:24,tablet:20,mobile:18},fontSizeUnit:"px",lineHeight:{desktop:1.4,tablet:1.3,mobile:1.2},lineHeightUnit:"em"}}),wp.element.createElement(Ql,{label:ve("Price Typography","digiblocks"),value:s,onChange:t=>e({headingTypography:t}),defaults:{fontSize:{desktop:36,tablet:30,mobile:26},fontSizeUnit:"px",lineHeight:{desktop:1.2,tablet:1.2,mobile:1.2},lineHeightUnit:"em"}}),wp.element.createElement(Ql,{label:ve("Description Typography","digiblocks"),value:z,onChange:t=>e({textTypography:t}),defaults:{fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",lineHeight:{desktop:1.6,tablet:1.5,mobile:1.4},lineHeightUnit:"em"}}),wp.element.createElement(Ql,{label:ve("Features Typography","digiblocks"),value:S,onChange:t=>e({contentTypography:t}),defaults:{fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",lineHeight:{desktop:1.6,tablet:1.5,mobile:1.4},lineHeightUnit:"em"}}),wp.element.createElement(Ql,{label:ve("Button Typography","digiblocks"),value:C,onChange:t=>e({buttonTypography:t}),defaults:{fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em"}})),wp.element.createElement(lt,{tab:"style",name:"borders",title:ve("Borders & Shadow","digiblocks"),initialOpen:!1},wp.element.createElement(el,{label:ve("Border Style","digiblocks"),value:V,options:E,onChange:t=>e({borderStyle:t}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),V!=="none"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(il,{label:ve("Border Width","digiblocks")},wp.element.createElement(ll,{values:L&&L[te]?L[te]:{top:1,right:1,bottom:1,left:1,unit:"px"},onChange:t=>e({borderWidth:{...L,[te]:t}})})),wp.element.createElement(Ai,{title:ve("Border Color","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:Q,onChange:t=>e({borderColor:t}),label:ve("Border Color","digiblocks")}]})),wp.element.createElement(il,{label:ve("Border Radius","digiblocks")},wp.element.createElement(ll,{values:U&&U[te]?U[te]:{top:8,right:8,bottom:8,left:8,unit:"px"},onChange:t=>e({borderRadius:{...U,[te]:t}}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]})),wp.element.createElement(Df,{normalValue:be,hoverValue:N,onNormalChange:t=>e({boxShadow:t}),onHoverChange:t=>e({boxShadowHover:t})})),wp.element.createElement(lt,{tab:"style",name:"button-style",title:ve("Button Style","digiblocks"),initialOpen:!1},wp.element.createElement(kg,{label:ve("Border Radius","digiblocks"),value:u,onChange:t=>e({buttonRadius:t}),min:0,max:50,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(el,{label:ve("Border Style","digiblocks"),value:I,options:E,onChange:t=>e({buttonBorderStyle:t}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),I!=="none"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(il,{label:ve("Border Width","digiblocks")},wp.element.createElement(ll,{values:ne&&ne[te]?ne[te]:{top:1,right:1,bottom:1,left:1,unit:"px"},onChange:t=>e({buttonBorderWidth:{...ne,[te]:t}})})),wp.element.createElement(Ai,{title:ve("Border Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:Me,onChange:t=>e({buttonBorderColor:t}),label:ve("Border Color","digiblocks")},{value:Le,onChange:t=>e({buttonBorderHoverColor:t}),label:ve("Border Hover Color","digiblocks")}]})),wp.element.createElement(il,{label:ve("Button Padding","digiblocks")},wp.element.createElement(ll,{values:v&&v[te]?v[te]:{top:10,right:20,bottom:10,left:20,unit:"px"},onChange:t=>e({buttonPadding:{...v,[te]:t}})}))),wp.element.createElement(lt,{tab:"style",name:"spacing",title:ve("Spacing","digiblocks"),initialOpen:!1},wp.element.createElement(il,{label:ve("Padding","digiblocks")},wp.element.createElement(ll,{values:w&&w[te]?w[te]:{top:0,right:0,bottom:0,left:0,unit:"px"},onChange:t=>e({padding:{...w,[te]:t}})})),wp.element.createElement(il,{label:ve("Margin","digiblocks")},wp.element.createElement(ll,{values:T&&T[te]?T[te]:{top:0,right:0,bottom:30,left:0,unit:"px"},onChange:t=>e({margin:{...T,[te]:t}})}))));case"advanced":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(lt,{tab:"advanced",name:"animation",title:ve("Animation","digiblocks"),initialOpen:!0},wp.element.createElement(el,{label:ve("Animation Effect","digiblocks"),value:P,options:se,onChange:t=>e({animation:t}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),P&&P!=="none"&&wp.element.createElement("div",{style:{marginTop:"10px"}},wp.element.createElement(Mt,{variant:"secondary",isSecondary:!0,onClick:Xe,style:{width:"100%"}},ve("Preview Animation","digiblocks")))),wp.element.createElement(lt,{tab:"advanced",name:"visibility",title:ve("Visibility","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control__help",style:{padding:"12px",backgroundColor:"#f0f6fc",border:"1px solid #c3ddfd",borderRadius:"4px",marginBottom:"16px"}},wp.element.createElement("strong",null,ve("Editor Note:","digiblocks")),wp.element.createElement("br",null),ve("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.","digiblocks")),wp.element.createElement(ql,{label:ve("Hide on Desktop","digiblocks"),checked:a.desktop,onChange:t=>e({visibility:{...a,desktop:t}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(ql,{label:ve("Hide on Tablet","digiblocks"),checked:a.tablet,onChange:t=>e({visibility:{...a,tablet:t}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(ql,{label:ve("Hide on Mobile","digiblocks"),checked:a.mobile,onChange:t=>e({visibility:{...a,mobile:t}}),__nextHasNoMarginBottom:!0})),wp.element.createElement(lt,{tab:"advanced",name:"additional",title:ve("Additional","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control html-anchor-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"html-anchor"},ve("HTML anchor","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"html-anchor",value:O||"",onChange:t=>e({anchor:t.target.value}),"aria-describedby":"html-anchor-help",autoCapitalize:"none",autoComplete:"off"})),wp.element.createElement("p",{id:"html-anchor-help",className:"components-base-control__help"},ve(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`,"digiblocks")," ",wp.element.createElement("a",{className:"components-external-link",href:"https://wordpress.org/documentation/article/page-jumps/",target:"_blank",rel:"external noreferrer noopener"},wp.element.createElement("span",{className:"components-external-link__contents"},ve("Learn more about anchors","digiblocks")),wp.element.createElement("span",{className:"components-external-link__icon","aria-label":"(opens in a new tab)"},"\u2197")))),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"additional-css-classes"},ve("Additional CSS class(es)","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"additional-css-classes",value:le||"",onChange:t=>e({customClasses:t.target.value}),"aria-describedby":"additional-css-classes-help",autoComplete:"off"})),wp.element.createElement("p",{id:"additional-css-classes-help",className:"components-base-control__help"},ve("Separate multiple classes with spaces.","digiblocks")))));default:return null}},go=Bf({className:`digiblocks-pricing-table-block ${o} ${le||""}`,id:O||null});return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Tf,null,wp.element.createElement(Pf,{tabs:B,activeTab:D,onSelect:xe},We())),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:f()}}),wp.element.createElement("div",{...go},wp.element.createElement("div",{className:"digiblocks-pricing-tables-container"},l.map((t,b)=>Ge(t,b))),wp.element.createElement("div",{className:"digiblocks-pricing-table-controls"},wp.element.createElement(Mt,{variant:"primary",icon:"plus",onClick:c},ve("Add Pricing Table","digiblocks")))))},xg=Rf;var{__:Pv}=window.wp.i18n,{useBlockProps:Rv,RichText:fi}=window.wp.blockEditor,If=({attributes:ie})=>{let{id:e,anchor:K,customClasses:o,tables:O,columns:a,tableStyle:le,align:l,animation:_,showRibbon:y,ribbonStyle:$,ribbonPosition:P}=ie,h=["digiblocks-pricing-table-block",e,`align-${l}`,_!=="none"?`animate-${_}`:"",le?`style-${le}`:"",o||""].filter(Boolean).join(" ");return wp.element.createElement("div",{className:h,id:K||null},wp.element.createElement("div",{className:"digiblocks-pricing-tables-container"},O.map(s=>wp.element.createElement("div",{key:s.id,className:`digiblocks-pricing-table ${s.isHighlighted?"digiblocks-pricing-table-highlighted":""}`,style:s.backgroundColor?{backgroundColor:s.backgroundColor}:null},y&&s.isHighlighted&&wp.element.createElement("div",{className:"digiblocks-pricing-table-ribbon"},wp.element.createElement(fi.Content,{value:s.ribbonText})),wp.element.createElement("div",{className:"digiblocks-pricing-table-header",style:s.headerBackgroundColor?{backgroundColor:s.headerBackgroundColor}:null},s.iconValue&&s.iconValue.svg&&wp.element.createElement("div",{className:"digiblocks-pricing-table-icon"},wp.element.createElement("span",{dangerouslySetInnerHTML:{__html:s.iconValue.svg}})),wp.element.createElement(fi.Content,{tagName:"h3",className:"digiblocks-pricing-table-title",value:s.title,style:s.textColor?{color:s.textColor}:null}),wp.element.createElement("div",{className:"digiblocks-pricing-table-price",style:s.textColor?{color:s.textColor}:null},wp.element.createElement(fi.Content,{tagName:"span",className:"digiblocks-pricing-table-amount",value:s.price}),wp.element.createElement(fi.Content,{tagName:"span",className:"digiblocks-pricing-table-period",value:s.period})),wp.element.createElement(fi.Content,{tagName:"div",className:"digiblocks-pricing-table-description",value:s.description,style:s.textColor?{color:s.textColor}:null})),wp.element.createElement("div",{className:"digiblocks-pricing-table-features"},s.features.map((z,S)=>wp.element.createElement("div",{key:`feature-${S}`,className:`digiblocks-pricing-table-feature-item ${z.enabled?"":"digiblocks-pricing-table-feature-disabled"}`},wp.element.createElement("div",{className:"digiblocks-pricing-table-feature-icon"},z.enabled?wp.element.createElement("span",{className:"digiblocks-pricing-table-feature-check"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"16",height:"16",fill:"currentColor"},wp.element.createElement("path",{d:"M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"}))):wp.element.createElement("span",{className:"digiblocks-pricing-table-feature-cross"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",width:"16",height:"16",fill:"currentColor"},wp.element.createElement("path",{d:"M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"})))),wp.element.createElement(fi.Content,{tagName:"div",className:"digiblocks-pricing-table-feature-text",value:z.text,style:s.textColor?{color:s.textColor}:null})))),wp.element.createElement("div",{className:"digiblocks-pricing-table-footer"},wp.element.createElement("a",{href:s.buttonUrl||"#",className:"digiblocks-pricing-table-button",style:s.buttonBackgroundColor?{backgroundColor:s.buttonBackgroundColor,color:s.buttonTextColor||"#ffffff"}:null,target:s.buttonOpenInNewTab?"_blank":void 0,rel:s.buttonOpenInNewTab?`noopener noreferrer ${s.buttonRel||""}`.trim():s.buttonRel||void 0},wp.element.createElement(fi.Content,{tagName:"span",value:s.buttonText})))))))},yg=If;var{__:Jl}=window.wp.i18n,{registerBlockType:Lf}=window.wp.blocks,{getBlockActiveStatus:Of}=window.wp.digiBlocks;Lf("digiblocks/pricing-table",{apiVersion:2,title:digiBlocksData.blocks["pricing-table"].title,category:"digiblocks",icon:{src:()=>{let{viewbox:ie,path:e}=digiBlocksData.blocks["pricing-table"].icon;return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${ie}`,className:"digiblocks-editor-icons"},wp.element.createElement("path",{d:e}))}},description:digiBlocksData.blocks["pricing-table"].description,keywords:[Jl("pricing","digiblocks"),Jl("price","digiblocks"),Jl("table","digiblocks"),Jl("plan","digiblocks"),Jl("subscription","digiblocks")],supports:{inserter:!!Of("pricing-table"),html:!1,className:!1,customClassName:!1,anchor:!1},attributes:{id:{type:"string"},anchor:{type:"string"},visibility:{type:"object",default:{desktop:!1,tablet:!1,mobile:!1}},customClasses:{type:"string"},tables:{type:"array",default:[]},columns:{type:"number",default:2},tableStyle:{type:"string",default:"style1"},align:{type:"string",default:"center"},animation:{type:"string",default:"none"},titleTypography:{type:"object",default:{}},headingTypography:{type:"object",default:{}},textTypography:{type:"object",default:{}},contentTypography:{type:"object",default:{}},buttonTypography:{type:"object",default:{}},padding:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},margin:{type:"object",default:{desktop:{top:0,right:0,bottom:30,left:0,unit:"px"},tablet:{top:0,right:0,bottom:20,left:0,unit:"px"},mobile:{top:0,right:0,bottom:15,left:0,unit:"px"}}},borderRadius:{type:"object",default:{desktop:{top:8,right:8,bottom:8,left:8,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderStyle:{type:"string",default:"solid"},borderWidth:{type:"object",default:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderColor:{type:"string",default:"#e6e6e6"},boxShadow:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.1)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},boxShadowHover:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.15)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},buttonRadius:{type:"number",default:4},buttonPadding:{type:"object",default:{desktop:{top:10,right:20,bottom:10,left:20,unit:"px"},tablet:{top:8,right:16,bottom:8,left:16,unit:"px"},mobile:{top:6,right:12,bottom:6,left:12,unit:"px"}}},buttonBorderStyle:{type:"string",default:"none"},buttonBorderWidth:{type:"object",default:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},buttonBorderColor:{type:"string",default:""},buttonBorderHoverColor:{type:"string",default:""},showRibbon:{type:"boolean",default:!0},ribbonStyle:{type:"string",default:"corner"},ribbonPosition:{type:"string",default:"right"},tableTextColor:{type:"string",default:"#333333"},tableBackgroundColor:{type:"string",default:"#ffffff"},headerBackgroundColor:{type:"string",default:"#f8f9fa"},buttonTextColor:{type:"string",default:"#ffffff"},buttonBackgroundColor:{type:"string",default:"#4a6cf7"},buttonTextHoverColor:{type:"string",default:"#ffffff"},buttonBackgroundHoverColor:{type:"string",default:"#3151e1"},ribbonTextColor:{type:"string",default:"#ffffff"},ribbonBackgroundColor:{type:"string",default:"#4a6cf7"}},example:{attributes:{tables:[{id:"table-1-example",title:"Basic Plan",price:"$19",period:"/month",description:"Great for starters",features:[{text:"1 Website",enabled:!0},{text:"5GB Storage",enabled:!0},{text:"Premium Support",enabled:!1}],buttonText:"Get Started",isHighlighted:!1,ribbonText:"Popular"}],columns:1,tableStyle:"style1",showRibbon:!0}},edit:xg,save:yg});var{__:bo}=window.wp.i18n,{useBlockProps:jf,InspectorControls:Uf,PanelColorSettings:Vf,BlockControls:Ff,AlignmentToolbar:Ef}=window.wp.blockEditor,{ToggleControl:dr,SelectControl:Wf,RangeControl:ki,Button:qf,TextControl:Gf,__experimentalToggleGroupControl:gr,__experimentalToggleGroupControlOption:pr,BaseControl:Qf}=window.wp.components,{useState:br,useEffect:ur,useRef:Jf}=window.wp.element,{useBlockId:Yf,animations:Yl,animationPreview:Cg}=digi.utils,{tabIcons:mr}=digi.icons,{ResponsiveControl:Zf,TypographyControl:Kf,CustomTabPanel:Xf,TabPanelBody:al}=digi.components,Af=({style:ie,primaryColor:e,secondaryColor:K,isSelected:o,onClick:O})=>{let a={display:"inline-flex",flexDirection:"column",width:"60px",height:"60px",margin:"5px",border:`1px solid ${o?"#007cba":"#ddd"}`,backgroundColor:o?"rgba(0,124,186,0.1)":"white",borderRadius:"4px",cursor:"pointer",overflow:"hidden",transition:"all 0.2s ease"},le={textAlign:"center",fontSize:"10px",padding:"3px 0",fontWeight:o?"500":"normal",borderBottom:`1px solid ${o?"#e0e0e0":"transparent"}`,backgroundColor:o?"rgba(0,124,186,0.05)":"transparent"},l={flex:1,display:"flex",justifyContent:"center",alignItems:"center",padding:"8px"},_=null;switch(ie){case"line":_=wp.element.createElement("div",{style:{width:"100%",height:"3px",backgroundColor:e,borderRadius:"1px"}});break;case"dashed":_=wp.element.createElement("div",{style:{width:"100%",height:"2px",backgroundImage:`linear-gradient(to right, ${e} 50%, transparent 50%)`,backgroundSize:"8px 2px",backgroundRepeat:"repeat-x",borderRadius:"1px"}});break;case"dotted":_=wp.element.createElement("div",{style:{width:"100%",height:"3px",backgroundImage:`radial-gradient(circle, ${e} 1px, transparent 1px)`,backgroundSize:"4px 3px",backgroundPosition:"center",backgroundRepeat:"repeat-x"}});break;case"double":_=wp.element.createElement("div",{style:{display:"flex",flexDirection:"column",width:"100%",gap:"2px"}},wp.element.createElement("div",{style:{height:"1px",backgroundColor:e,borderRadius:"1px"}}),wp.element.createElement("div",{style:{height:"1px",backgroundColor:e,borderRadius:"1px"}}));break;case"gradient":_=wp.element.createElement("div",{style:{width:"100%",height:"3px",background:`linear-gradient(to right, ${K||"transparent"}, ${e}, ${K||"transparent"})`,borderRadius:"1px"}});break;case"shadow":_=wp.element.createElement("div",{style:{width:"100%",height:"2px",backgroundColor:e,boxShadow:"0 1px 2px rgba(0,0,0,0.3)",borderRadius:"1px"}});break;case"wave":_=wp.element.createElement("svg",{height:"20",width:"100%",viewBox:"0 0 100 20",preserveAspectRatio:"none"},wp.element.createElement("path",{d:"M0,10 C20,5 30,15 50,10 C70,5 80,15 100,10 L100,20 L0,20 Z",fill:e}));break;case"zigzag":_=wp.element.createElement("svg",{height:"10",width:"100%",viewBox:"0 0 100 10",preserveAspectRatio:"none"},wp.element.createElement("polyline",{points:"0,0 10,10 20,0 30,10 40,0 50,10 60,0 70,10 80,0 90,10 100,0",fill:"none",stroke:e,strokeWidth:"2"}));break;case"slant":_=wp.element.createElement("svg",{height:"10",width:"100%",viewBox:"0 0 100 10",preserveAspectRatio:"none"},wp.element.createElement("polygon",{points:"0,0 100,10 100,0",fill:e}));break;default:_=wp.element.createElement("div",{style:{width:"100%",height:"3px",backgroundColor:e,borderRadius:"1px"}})}return wp.element.createElement("div",{style:a,onClick:O},wp.element.createElement("div",{style:le},(()=>{switch(ie){case"line":return"Line";case"dashed":return"Dashed";case"dotted":return"Dotted";case"double":return"Double";case"gradient":return"Gradient";case"shadow":return"Shadow";case"wave":return"Wave";case"zigzag":return"Zigzag";case"slant":return"Slant";default:return ie.charAt(0).toUpperCase()+ie.slice(1)}})()),wp.element.createElement("div",{style:l},_))},ek=({attributes:ie,setAttributes:e,clientId:K})=>{let{id:o,anchor:O,visibility:a,customClasses:le,contentType:l,content:_,align:y,iconValue:$,separatorStyle:P,primaryColor:h,secondaryColor:s,width:z,widthUnit:S,height:C,heightUnit:w,borderRadius:T,margin:U,animation:L,typography:V,iconSize:Q,gap:be,textColor:N}=ie;Yf(o,K,e);let[u,v]=br(window.digi.responsiveState.activeDevice);ur(()=>window.digi.responsiveState.subscribe(D=>{v(D)}),[]);let[I,ne]=br("options"),[Me,Le]=br(!1);ur(()=>{let r=()=>window.digi&&window.digi.components&&window.digi.components.FontAwesomeControl?(Le(!0),!0):!1;if(!r()){let D=setTimeout(()=>{r()&&clearTimeout(D)},500);return()=>clearTimeout(D)}},[]);let X=r=>{e({iconValue:r})},H=Jf(null);ur(()=>{if(L&&L!=="none"){let r=setTimeout(()=>{Cg(o,L,Yl,H)},100);return()=>clearTimeout(r)}},[L]);let Y=()=>{Cg(o,L,Yl,H)},W=[{label:"px",value:"px"},{label:"%",value:"%"}],ce=[{label:"px",value:"px"},{label:"%",value:"%"}],ue=[{label:bo("None","digiblocks"),value:"none"},{label:bo("Text","digiblocks"),value:"text"},{label:bo("Icon","digiblocks"),value:"icon"}],A=[{label:bo("None","digiblocks"),value:"none"},...Object.keys(Yl).map(r=>({label:r.replace(/-/g," ").replace(/\b\w/g,D=>D.toUpperCase()),value:r}))],J=[{name:"options",title:bo("Options","digiblocks"),icon:mr.optionsIcon},{name:"style",title:bo("Style","digiblocks"),icon:mr.styleIcon},{name:"advanced",title:bo("Advanced","digiblocks"),icon:mr.advancedIcon}],me=Me?window.digi.components.FontAwesomeControl:null,oe=()=>{switch(P){case"wave":return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1200 120",preserveAspectRatio:"none"},wp.element.createElement("path",{d:"M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z",fill:h}));case"zigzag":return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1200 120",preserveAspectRatio:"none"},wp.element.createElement("path",{d:"M0,0 L100,120 L200,0 L300,120 L400,0 L500,120 L600,0 L700,120 L800,0 L900,120 L1000,0 L1100,120 L1200,0",fill:h}));case"slant":return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1200 120",preserveAspectRatio:"none"},wp.element.createElement("path",{d:"M1200 120L0 16.48 0 0 1200 0 1200 120z",fill:h}));default:return null}},fe=()=>{let r=window.digi.responsiveState.activeDevice,D="",xe=U[r]||{top:30,bottom:30,unit:"px"},Pe=z[r]||100,Se=C[r]||3,Ue="",ee="";switch(P){case"line":D=`
                    background-color: ${h};
                    height: ${Se}${w};
                    width: ${Pe}${S};
                    border-radius: ${T[r]||0}px;
                `;break;case"dashed":D=`
                    border-top: ${Se}${w} dashed ${h};
                    width: ${Pe}${S};
                `;break;case"dotted":D=`
                    border-top: ${Se}${w} dotted ${h};
                    width: ${Pe}${S};
                `;break;case"double":D=`
                    border-top: ${Math.max(1,Math.floor(Se/3))}${w} solid ${h};
                    border-bottom: ${Math.max(1,Math.floor(Se/3))}${w} solid ${h};
                    height: ${Se}${w};
                    width: ${Pe}${S};
                `;break;case"gradient":D=`
                    background: linear-gradient(90deg, ${s||"transparent"} 0%, ${h} 50%, ${s||"transparent"} 100%);
                    height: ${Se}${w};
                    width: ${Pe}${S};
                    border-radius: ${T[r]||0}px;
                `;break;case"shadow":D=`
                    height: ${Se}${w};
                    width: ${Pe}${S};
                    background-color: ${h};
                    border-radius: ${T[r]||0}px;
                    box-shadow: 0 ${Math.max(2,Se/2)}px ${Math.max(4,Se)}px rgba(0,0,0,0.2);
                `;break;case"wave":case"zigzag":case"slant":D=`
                    width: 100%;
                    height: 100%;
                    position: relative;
                `,Ue=`
                    .${o} .digiblocks-separator-shape {
                        width: 100%;
                        height: 100%;
                    }
                    .${o} .digiblocks-separator-shape svg {
                        width: 100%;
                        height: 100%;
                        display: block;
                    }
                `;break}let Be="";if((l==="text"||l==="icon")&&!["wave","zigzag","slant"].includes(P)){let ye=be[r]||15;Be=`
                .${o} .digiblocks-separator-content {
                    position: relative;
                    z-index: 2;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    background-color: #fff;
                    padding: 0 ${ye}px;
                    ${l==="text"&&N?`color: ${N};`:""}
                }
                
                .${o}.digiblocks-separator-has-content .digiblocks-separator-line {
                    position: absolute;
                    top: 50%;
                    left: 0;
                    right: 0;
                    z-index: 1;
                    transform: translateY(-50%);
                }
            `}if(l==="icon"&&$&&$.svg&&(Be+=`
                .${o} .digiblocks-separator-icon {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                
                .${o} .digiblocks-separator-icon svg {
                    width: ${Q[r]||24}px;
                    height: ${Q[r]||24}px;
                    fill: ${N||h};
                }
            `),l==="text"&&V){let ye="";V.fontFamily&&(ye+=`font-family: ${V.fontFamily};`),V.fontSize&&V.fontSize[r]&&(ye+=`font-size: ${V.fontSize[r]}${V.fontSizeUnit||"px"};`),V.fontWeight&&(ye+=`font-weight: ${V.fontWeight};`),V.fontStyle&&(ye+=`font-style: ${V.fontStyle};`),V.textTransform&&(ye+=`text-transform: ${V.textTransform};`),V.lineHeight&&V.lineHeight[r]&&(ye+=`line-height: ${V.lineHeight[r]}${V.lineHeightUnit||"em"};`),V.letterSpacing&&V.letterSpacing[r]&&(ye+=`letter-spacing: ${V.letterSpacing[r]}${V.letterSpacingUnit||"px"};`),Be+=`
                .${o} .digiblocks-separator-text {
                    ${ye}
                }
            `}let Xe="";L&&L!=="none"&&Yl[L]&&(Xe=Yl[L].keyframes);let q="";switch(y){case"center":q="margin-left: auto; margin-right: auto;";break;case"right":q="margin-left: auto; margin-right: 0;";break;default:q="margin-left: 0; margin-right: auto;";break}return`
            /* Separator Block - ${o} */
            .${o} {
                margin-top: ${xe.top}${xe.unit};
                margin-bottom: ${xe.bottom}${xe.unit};
                display: flex;
                align-items: center;
                justify-content: ${y==="center"?"center":y==="right"?"flex-end":"flex-start"};
                position: relative;
                clear: both;
                width: 100%;
            }
            
            .${o} .digiblocks-separator-container {
                position: relative;
                display: flex;
                flex-direction: column;
                align-items: ${y==="center"?"center":y==="right"?"flex-end":"flex-start"};
                width: 100%;
            }
            
            .${o} .digiblocks-separator-line {
                ${D}
                ${q}
            }
            
            ${Ue}
            ${Be}
            ${Xe}
            
            /* Responsive styles will be handled by media queries */
            @media (max-width: 991px) {
                .${o} {
                    margin-top: ${U.tablet?U.tablet.top+(U.tablet.unit||"px"):xe.top+xe.unit};
                    margin-bottom: ${U.tablet?U.tablet.bottom+(U.tablet.unit||"px"):xe.bottom+xe.unit};
                }
                
                .${o} .digiblocks-separator-line {
                    width: ${z.tablet?z.tablet+S:Pe+S};
                    height: ${C.tablet?C.tablet+w:Se+w};
                    ${T.tablet?`border-radius: ${T.tablet}px;`:""}
                }
                
                ${l==="icon"?`
                .${o} .digiblocks-separator-icon svg {
                    width: ${Q.tablet||20}px;
                    height: ${Q.tablet||20}px;
                }`:""}
            }
            
            @media (max-width: 767px) {
                .${o} {
                    margin-top: ${U.mobile?U.mobile.top+(U.mobile.unit||"px"):xe.top+xe.unit};
                    margin-bottom: ${U.mobile?U.mobile.bottom+(U.mobile.unit||"px"):xe.bottom+xe.unit};
                }
                
                .${o} .digiblocks-separator-line {
                    width: ${z.mobile?z.mobile+S:Pe+S};
                    height: ${C.mobile?C.mobile+w:Se+w};
                    ${T.mobile?`border-radius: ${T.mobile}px;`:""}
                }
                
                ${l==="icon"?`
                .${o} .digiblocks-separator-icon svg {
                    width: ${Q.mobile||16}px;
                    height: ${Q.mobile||16}px;
                }`:""}
            }

			/* Visibility Controls */
			${a.desktop?`
				@media (min-width: 992px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${a.tablet?`
				@media (min-width: 768px) and (max-width: 991px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${a.mobile?`
				@media (max-width: 767px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}
        `},je=()=>!$||!$.svg||$.svg.trim()===""?null:wp.element.createElement("div",{className:"digiblocks-separator-icon"},wp.element.createElement("span",{dangerouslySetInnerHTML:{__html:$.svg}})),te=()=>wp.element.createElement("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px",justifyContent:"center",margin:"0 -5px",maxHeight:"200px",overflow:"auto",padding:"4px 0",border:"1px solid #e0e0e0",borderRadius:"4px",backgroundColor:"#f9f9f9"}},[{label:"Line",value:"line"},{label:"Dashed",value:"dashed"},{label:"Dotted",value:"dotted"},{label:"Double",value:"double"},{label:"Gradient",value:"gradient"},{label:"Shadow",value:"shadow"},{label:"Wave",value:"wave"},{label:"Zigzag",value:"zigzag"},{label:"Slant",value:"slant"}].map(xe=>wp.element.createElement(Af,{key:xe.value,style:xe.value,primaryColor:h||"#1e73be",secondaryColor:s,isSelected:P===xe.value,onClick:()=>{["wave","zigzag","slant"].includes(xe.value)&&l!=="none"?e({separatorStyle:xe.value,contentType:"none"}):e({separatorStyle:xe.value})}}))),to=()=>{switch(I){case"options":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:"components-panel__body is-opened"},wp.element.createElement(Qf,{label:bo("Separator Style","digiblocks"),id:"separator-style-selector",__nextHasNoMarginBottom:!0},te()),["wave","zigzag","slant"].includes(P)?wp.element.createElement("div",{className:"components-notice is-warning",style:{margin:"0 0 16px 0"}},wp.element.createElement("div",{className:"components-notice__content"},bo("Content is not available with this separator style.","digiblocks"))):wp.element.createElement(gr,{label:bo("Content Type","digiblocks"),value:l,onChange:r=>e({contentType:r}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},ue.map(r=>wp.element.createElement(pr,{key:r.value,value:r.value,label:r.label}))),l==="text"&&wp.element.createElement(Gf,{label:bo("Text Content","digiblocks"),value:_,onChange:r=>e({content:r}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),l==="icon"&&wp.element.createElement("div",{style:{marginTop:"15px"}},Me?wp.element.createElement(me,{label:bo("Select Icon","digiblocks"),value:$,onChange:X}):wp.element.createElement("div",{style:{textAlign:"center",padding:"20px 0"}},wp.element.createElement("div",{className:"components-spinner"}),wp.element.createElement("p",null,bo("Loading icon selector...","digiblocks"))))));case"style":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(al,{tab:"style",name:"colors",title:bo("Colors","digiblocks"),initialOpen:!0},wp.element.createElement(Vf,{title:bo("Separator Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:h,onChange:r=>e({primaryColor:r}),label:bo("Primary Color","digiblocks")},...P==="gradient"?[{value:s,onChange:r=>e({secondaryColor:r}),label:bo("Secondary Color","digiblocks")}]:[],...l!=="none"?[{value:N,onChange:r=>e({textColor:r}),label:bo(l==="text"?"Text Color":"Icon Color","digiblocks")}]:[]]})),wp.element.createElement(al,{tab:"style",name:"dimensions",title:bo("Dimensions","digiblocks"),initialOpen:!1},!["wave","zigzag","slant"].includes(P)&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:"digiblocks-size-type-field-tabs"},wp.element.createElement("div",{className:"digiblocks-responsive-control-inner"},wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"digiblocks-range-control digiblocks-size-type-field-tabs"},wp.element.createElement("div",{className:"digiblocks-control__header"},wp.element.createElement("div",{className:"digiblocks-responsive-label-wrap"},wp.element.createElement("span",{className:"digiblocks-control-label"},bo("Width","digiblocks")),wp.element.createElement("button",{type:"button","aria-label":bo(`Switch to ${window.digi.responsiveState.getNextDevice()} view`,"digiblocks"),className:`components-button digiblocks-responsive-common-button digiblocks-device-${u}`,onClick:()=>window.digi.responsiveState.toggleDevice()},window.digi.icons.deviceIcons[u])),wp.element.createElement("div",{className:"digiblocks-range-control__actions digiblocks-control__actions"},wp.element.createElement("div",{tabIndex:"0"},wp.element.createElement("button",{type:"button",disabled:z[u]===100,className:"components-button digiblocks-reset is-secondary is-small",onClick:()=>e({width:{...z,[u]:100}})},wp.element.createElement("span",{className:"dashicon dashicons dashicons-image-rotate"}))),wp.element.createElement(gr,{value:S,onChange:r=>e({widthUnit:r}),isBlock:!0,isSmall:!0,hideLabelFromVision:!0,"aria-label":bo("Width Unit","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},W.map(r=>wp.element.createElement(pr,{key:r.value,value:r.value,label:r.label}))))),wp.element.createElement("div",{className:"digiblocks-range-control__mobile-controls"},wp.element.createElement(ki,{value:z[u],onChange:r=>e({width:{...z,[u]:r}}),min:1,max:S==="%"?100:1e3,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})))))),wp.element.createElement("div",{className:"digiblocks-size-type-field-tabs"},wp.element.createElement("div",{className:"digiblocks-responsive-control-inner"},wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"digiblocks-range-control digiblocks-size-type-field-tabs"},wp.element.createElement("div",{className:"digiblocks-control__header"},wp.element.createElement("div",{className:"digiblocks-responsive-label-wrap"},wp.element.createElement("span",{className:"digiblocks-control-label"},bo("Height","digiblocks")),wp.element.createElement("button",{type:"button","aria-label":bo(`Switch to ${window.digi.responsiveState.getNextDevice()} view`,"digiblocks"),className:`components-button digiblocks-responsive-common-button digiblocks-device-${u}`,onClick:()=>window.digi.responsiveState.toggleDevice()},window.digi.icons.deviceIcons[u])),wp.element.createElement("div",{className:"digiblocks-range-control__actions digiblocks-control__actions"},wp.element.createElement("div",{tabIndex:"0"},wp.element.createElement("button",{type:"button",disabled:C[u]===3,className:"components-button digiblocks-reset is-secondary is-small",onClick:()=>e({height:{...C,[u]:3}})},wp.element.createElement("span",{className:"dashicon dashicons dashicons-image-rotate"}))),wp.element.createElement(gr,{value:w,onChange:r=>e({heightUnit:r}),isBlock:!0,isSmall:!0,hideLabelFromVision:!0,"aria-label":bo("Height Unit","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},ce.map(r=>wp.element.createElement(pr,{key:r.value,value:r.value,label:r.label}))))),wp.element.createElement("div",{className:"digiblocks-range-control__mobile-controls"},wp.element.createElement(ki,{value:C[u],onChange:r=>e({height:{...C,[u]:r}}),min:1,max:w==="%"?20:100,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}))))))),["line","gradient","shadow"].includes(P)&&wp.element.createElement("div",{className:"digiblocks-responsive-control"},wp.element.createElement("div",{className:"digiblocks-control__header"},wp.element.createElement("div",{className:"digiblocks-responsive-label-wrap"},wp.element.createElement("span",{className:"digiblocks-control-label"},bo("Border Radius","digiblocks")),wp.element.createElement("button",{type:"button","aria-label":bo(`Switch to ${window.digi.responsiveState.getNextDevice()} view`,"digiblocks"),className:`components-button digiblocks-responsive-common-button digiblocks-device-${u}`,onClick:()=>window.digi.responsiveState.toggleDevice()},window.digi.icons.deviceIcons[u]))),wp.element.createElement("div",{className:"digiblocks-responsive-control-content"},wp.element.createElement("div",{className:"digiblocks-unit-control"},wp.element.createElement(ki,{value:T[u],onChange:r=>e({borderRadius:{...T,[u]:r}}),min:0,max:50,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})))),(l==="text"||l==="icon")&&wp.element.createElement("div",{className:"digiblocks-responsive-control"},wp.element.createElement("div",{className:"digiblocks-control__header"},wp.element.createElement("div",{className:"digiblocks-responsive-label-wrap"},wp.element.createElement("span",{className:"digiblocks-control-label"},bo("Gap","digiblocks")),wp.element.createElement("button",{type:"button","aria-label":bo(`Switch to ${window.digi.responsiveState.getNextDevice()} view`,"digiblocks"),className:`components-button digiblocks-responsive-common-button digiblocks-device-${u}`,onClick:()=>window.digi.responsiveState.toggleDevice()},window.digi.icons.deviceIcons[u]))),wp.element.createElement("div",{className:"digiblocks-responsive-control-content"},wp.element.createElement("div",{className:"digiblocks-unit-control"},wp.element.createElement(ki,{value:be[u],onChange:r=>e({gap:{...be,[u]:r}}),min:0,max:100,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})))),l==="icon"&&wp.element.createElement("div",{className:"digiblocks-responsive-control"},wp.element.createElement("div",{className:"digiblocks-control__header"},wp.element.createElement("div",{className:"digiblocks-responsive-label-wrap"},wp.element.createElement("span",{className:"digiblocks-control-label"},bo("Icon Size","digiblocks")),wp.element.createElement("button",{type:"button","aria-label":bo(`Switch to ${window.digi.responsiveState.getNextDevice()} view`,"digiblocks"),className:`components-button digiblocks-responsive-common-button digiblocks-device-${u}`,onClick:()=>window.digi.responsiveState.toggleDevice()},window.digi.icons.deviceIcons[u]))),wp.element.createElement("div",{className:"digiblocks-responsive-control-content"},wp.element.createElement("div",{className:"digiblocks-unit-control"},wp.element.createElement(ki,{value:Q[u],onChange:r=>e({iconSize:{...Q,[u]:r}}),min:8,max:100,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})))),wp.element.createElement(Zf,{label:bo("Margin","digiblocks")},wp.element.createElement("div",{className:"digiblocks-margin-control"},wp.element.createElement(ki,{label:bo("Top","digiblocks"),value:U[u]?.top||30,onChange:r=>{let D={...U,[u]:{...U[u],top:r,unit:U[u]?.unit||"px"}};e({margin:D})},min:0,max:200,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(ki,{label:bo("Bottom","digiblocks"),value:U[u]?.bottom||30,onChange:r=>{let D={...U,[u]:{...U[u],bottom:r,unit:U[u]?.unit||"px"}};e({margin:D})},min:0,max:200,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})))),l==="text"&&wp.element.createElement(al,{tab:"style",name:"typography",title:bo("Typography","digiblocks"),initialOpen:!1},wp.element.createElement(Kf,{label:bo("Text Typography","digiblocks"),value:V,onChange:r=>e({typography:r}),defaults:{fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",lineHeight:{desktop:1.5,tablet:1.5,mobile:1.5},lineHeightUnit:"em"}})));case"advanced":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(al,{tab:"advanced",name:"animation",title:bo("Animation","digiblocks"),initialOpen:!0},wp.element.createElement(Wf,{label:bo("Animation Effect","digiblocks"),value:L,options:A,onChange:r=>e({animation:r}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),L&&L!=="none"&&wp.element.createElement("div",{style:{marginTop:"10px"}},wp.element.createElement(qf,{variant:"secondary",isSecondary:!0,onClick:Y,style:{width:"100%"}},bo("Preview Animation","digiblocks")))),wp.element.createElement(al,{tab:"advanced",name:"visibility",title:bo("Visibility","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control__help",style:{padding:"12px",backgroundColor:"#f0f6fc",border:"1px solid #c3ddfd",borderRadius:"4px",marginBottom:"16px"}},wp.element.createElement("strong",null,bo("Editor Note:","digiblocks")),wp.element.createElement("br",null),bo("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.","digiblocks")),wp.element.createElement(dr,{label:bo("Hide on Desktop","digiblocks"),checked:a.desktop,onChange:r=>e({visibility:{...a,desktop:r}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(dr,{label:bo("Hide on Tablet","digiblocks"),checked:a.tablet,onChange:r=>e({visibility:{...a,tablet:r}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(dr,{label:bo("Hide on Mobile","digiblocks"),checked:a.mobile,onChange:r=>e({visibility:{...a,mobile:r}}),__nextHasNoMarginBottom:!0})),wp.element.createElement(al,{tab:"advanced",name:"additional",title:bo("Additional","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control html-anchor-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"html-anchor"},bo("HTML anchor","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"html-anchor",value:O||"",onChange:r=>e({anchor:r.target.value}),"aria-describedby":"html-anchor-help",autoCapitalize:"none",autoComplete:"off"})),wp.element.createElement("p",{id:"html-anchor-help",className:"components-base-control__help"},bo(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`,"digiblocks")," ",wp.element.createElement("a",{className:"components-external-link",href:"https://wordpress.org/documentation/article/page-jumps/",target:"_blank",rel:"external noreferrer noopener"},wp.element.createElement("span",{className:"components-external-link__contents"},bo("Learn more about anchors","digiblocks")),wp.element.createElement("span",{className:"components-external-link__icon","aria-label":"(opens in a new tab)"},"\u2197")))),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"additional-css-classes"},bo("Additional CSS class(es)","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"additional-css-classes",value:le||"",onChange:r=>e({customClasses:r.target.value}),"aria-describedby":"additional-css-classes-help",autoComplete:"off"})),wp.element.createElement("p",{id:"additional-css-classes-help",className:"components-base-control__help"},bo("Separate multiple classes with spaces.","digiblocks")))));default:return null}},De=jf({className:`digiblocks-separator ${o} ${l!=="none"&&!["wave","zigzag","slant"].includes(P)?"digiblocks-separator-has-content":""} ${le||""}`,id:O||null});return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Ff,null,wp.element.createElement(Ef,{value:y,onChange:r=>e({align:r})})),wp.element.createElement(Uf,null,wp.element.createElement(Xf,{tabs:J,activeTab:I,onSelect:ne},to())),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:fe()}}),wp.element.createElement("div",{...De},wp.element.createElement("div",{className:"digiblocks-separator-container"},l!=="none"&&!["wave","zigzag","slant"].includes(P)&&wp.element.createElement("div",{className:"digiblocks-separator-content"},l==="text"&&wp.element.createElement("span",{className:"digiblocks-separator-text"},_),l==="icon"&&je()),["wave","zigzag","slant"].includes(P)?wp.element.createElement("div",{className:"digiblocks-separator-shape"},oe()):wp.element.createElement("div",{className:"digiblocks-separator-line"}))))},wg=ek;var{useBlockProps:ok,RichText:Uv}=window.wp.blockEditor,tk=({attributes:ie})=>{let{id:e,anchor:K,customClasses:o,contentType:O,content:a,align:le,iconValue:l,separatorStyle:_,primaryColor:y,secondaryColor:$,animation:P}=ie,h=()=>{switch(_){case"wave":return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1200 120",preserveAspectRatio:"none"},wp.element.createElement("path",{d:"M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z",fill:y}));case"zigzag":return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1200 120",preserveAspectRatio:"none"},wp.element.createElement("path",{d:"M0,0 L100,120 L200,0 L300,120 L400,0 L500,120 L600,0 L700,120 L800,0 L900,120 L1000,0 L1100,120 L1200,0",fill:y}));case"slant":return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1200 120",preserveAspectRatio:"none"},wp.element.createElement("path",{d:"M1200 120L0 16.48 0 0 1200 0 1200 120z",fill:y}));default:return null}},s=()=>!l||!l.svg||l.svg.trim()===""?null:wp.element.createElement("div",{className:"digiblocks-separator-icon"},wp.element.createElement("span",{dangerouslySetInnerHTML:{__html:l.svg}})),z=["digiblocks-separator",e,O!=="none"&&!["wave","zigzag","slant"].includes(_)?"digiblocks-separator-has-content":"",`align-${le}`,P!=="none"?`animate-${P}`:"",o||""].filter(Boolean).join(" "),S=ok.save({className:z,id:K||null,"data-separator-style":_});return wp.element.createElement("div",{...S},wp.element.createElement("div",{className:"digiblocks-separator-container"},O!=="none"&&!["wave","zigzag","slant"].includes(_)&&wp.element.createElement("div",{className:"digiblocks-separator-content"},O==="text"&&wp.element.createElement("span",{className:"digiblocks-separator-text"},a),O==="icon"&&s()),["wave","zigzag","slant"].includes(_)?wp.element.createElement("div",{className:"digiblocks-separator-shape"},h()):wp.element.createElement("div",{className:"digiblocks-separator-line"})))},Sg=tk;var{__:cn}=window.wp.i18n,{registerBlockType:ik}=window.wp.blocks,{getBlockActiveStatus:lk}=window.wp.digiBlocks;ik("digiblocks/separator",{apiVersion:2,title:digiBlocksData.blocks.separator.title,category:"digiblocks",icon:{src:()=>{let{viewbox:ie,path:e}=digiBlocksData.blocks.separator.icon;return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${ie}`,className:"digiblocks-editor-icons"},wp.element.createElement("path",{d:e}))}},description:digiBlocksData.blocks.separator.description,keywords:[cn("separator","digiblocks"),cn("divider","digiblocks"),cn("horizontal rule","digiblocks"),cn("hr","digiblocks")],supports:{inserter:!!lk("separator"),html:!1,className:!1,customClassName:!1,anchor:!1},attributes:{id:{type:"string",default:""},anchor:{type:"string",default:""},visibility:{type:"object",default:{desktop:!1,tablet:!1,mobile:!1}},customClasses:{type:"string",default:""},contentType:{type:"string",default:"none"},content:{type:"string",default:"Separator"},iconValue:{type:"object",default:null},separatorStyle:{type:"string",default:"line"},primaryColor:{type:"string",default:"#222222"},secondaryColor:{type:"string",default:"#f0f0f0"},textColor:{type:"string",default:"#333333"},width:{type:"object",default:{desktop:100,tablet:100,mobile:100}},widthUnit:{type:"string",default:"%"},height:{type:"object",default:{desktop:3,tablet:2,mobile:2}},heightUnit:{type:"string",default:"px"},borderRadius:{type:"object",default:{desktop:0,tablet:0,mobile:0}},margin:{type:"object",default:{desktop:{top:30,bottom:30,unit:"px"},tablet:{top:25,bottom:25,unit:"px"},mobile:{top:20,bottom:20,unit:"px"}}},align:{type:"string",default:"center"},animation:{type:"string",default:"none"},typography:{type:"object",default:{fontFamily:"",fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",fontWeight:"",fontStyle:"normal",textTransform:"",textDecoration:"",lineHeight:{desktop:1.5,tablet:1.5,mobile:1.5},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}},iconSize:{type:"object",default:{desktop:24,tablet:20,mobile:16}},gap:{type:"object",default:{desktop:15,tablet:10,mobile:8}}},example:{attributes:{separatorStyle:"gradient",primaryColor:"#1e73be",secondaryColor:"#f0f0f0",width:{desktop:80},height:{desktop:4},contentType:"text",content:"Section",textColor:"#333333"}},edit:wg,save:Sg});var{__:lo}=window.wp.i18n,{useBlockProps:ak,InspectorControls:nk,PanelColorSettings:$g}=window.wp.blockEditor,{SelectControl:hr,RangeControl:fr,TabPanel:sk,Button:dn,ToggleControl:Zl,TextControl:kr,Popover:_g,__experimentalToggleGroupControl:rk,__experimentalToggleGroupControlOption:gn}=window.wp.components,{useState:pn,useEffect:vr,useRef:ck}=window.wp.element,{useBlockId:dk,getDimensionCSS:xr,animations:Kl,animationPreview:Bg}=digi.utils,{tabIcons:yr}=digi.icons,{ResponsiveControl:nl,ResponsiveButtonGroup:gk,DimensionControl:Cr,TypographyControl:pk,CustomTabPanel:bk,TabPanelBody:sl}=digi.components,Xl={facebook:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"})),twitter:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"})),linkedin:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"})),instagram:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"})),pinterest:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z"})),youtube:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"})),dribbble:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M86.6 64l85.2 85.2C194.5 121.7 208 86.4 208 48c0-14.7-2-28.9-5.7-42.4C158.6 15 119 35.5 86.6 64zM64 86.6C35.5 119 15 158.6 5.6 202.3C19.1 206 33.3 208 48 208c38.4 0 73.7-13.5 101.3-36.1L64 86.6zM256 0c-7.3 0-14.6 .3-21.8 .9C238 16 240 31.8 240 48c0 47.3-17.1 90.5-45.4 124L256 233.4 425.4 64C380.2 24.2 320.9 0 256 0zM48 240c-16.2 0-32-2-47.1-5.8C.3 241.4 0 248.7 0 256c0 64.9 24.2 124.2 64 169.4L233.4 256 172 194.6C138.5 222.9 95.3 240 48 240zm463.1 37.8c.6-7.2 .9-14.5 .9-21.8c0-64.9-24.2-124.2-64-169.4L278.6 256 340 317.4c33.4-28.3 76.7-45.4 124-45.4c16.2 0 32 2 47.1 5.8zm-4.7 31.9C492.9 306 478.7 304 464 304c-38.4 0-73.7 13.5-101.3 36.1L448 425.4c28.5-32.3 49.1-71.9 58.4-115.7zM340.1 362.7C317.5 390.3 304 425.6 304 464c0 14.7 2 28.9 5.7 42.4C353.4 497 393 476.5 425.4 448l-85.2-85.2zM317.4 340L256 278.6 86.6 448c45.1 39.8 104.4 64 169.4 64c7.3 0 14.6-.3 21.8-.9C274 496 272 480.2 272 464c0-47.3 17.1-90.5 45.4-124z"})),github:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 496 512",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"})),behance:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M232 237.2c31.8-15.2 48.4-38.2 48.4-74 0-70.6-52.6-87.8-113.3-87.8H0v354.4h171.8c64.4 0 124.9-30.9 124.9-102.9 0-44.5-21.1-77.4-64.7-89.7zM77.9 135.9H151c28.1 0 53.4 7.9 53.4 40.5 0 30.1-19.7 42.2-47.5 42.2h-79v-82.7zm83.3 233.7H77.9V272h84.9c34.3 0 56 14.3 56 50.6 0 35.8-25.9 47-57.6 47zm358.5-240.7H376V94h143.7v34.9zM576 305.2c0-75.9-44.4-139.2-124.9-139.2-78.2 0-131.3 58.8-131.3 135.8 0 79.9 50.3 134.7 131.3 134.7 61.3 0 101-27.6 120.1-86.3H509c-6.7 21.9-34.3 33.5-55.7 33.5-41.3 0-63-24.2-63-65.3h185.1c.3-4.2 .6-8.7 .6-13.2zM390.4 274c2.3-33.7 24.7-54.8 58.5-54.8 35.4 0 53.2 20.8 56.2 54.8H390.4z"})),vimeo:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M447.8 153.6c-2 43.6-32.4 103.3-91.4 179.1-60.9 79.2-112.4 118.8-154.6 118.8-26.1 0-48.2-24.1-66.3-72.3C100.3 250 85.3 174.3 56.2 174.3c-3.4 0-15.1 7.1-35.2 21.1L0 168.2c51.6-45.3 100.9-95.7 131.8-98.5 34.9-3.4 56.3 20.5 64.4 71.5 28.7 181.5 41.4 208.9 93.6 126.7 18.7-29.6 28.8-52.1 30.2-67.6 4.8-45.9-35.8-42.8-63.3-31 22-72.1 64.1-107.1 126.2-105.1 45.8 1.2 67.5 31.1 64.9 89.4z"})),tiktok:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"})),email:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"})),website:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"}))},uk=wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"})),mk=({attributes:ie,setAttributes:e,clientId:K})=>{let{id:o,anchor:O,visibility:a,customClasses:le,align:l,icons:_,iconSize:y,iconSpacing:$,iconColor:P,iconHoverColor:h,iconBackground:s,iconHoverBackground:z,iconBorderStyle:S,iconBorderWidth:C,iconBorderRadius:w,iconBorderColor:T,iconHoverBorderColor:U,labelColor:L,labelHoverColor:V,labelSpacing:Q,padding:be,animation:N,showLabels:u,labelPosition:v,textTypography:I}=ie;dk(o,K,e);let[ne,Me]=pn(window.digi.responsiveState.activeDevice),[Le,X]=pn(()=>{if(window.digi.uiState){let E=window.digi.uiState.getActiveTab(K);if(E)return E}return"options"}),[H,Y]=pn(null),[W,ce]=pn(null);vr(()=>window.digi.responsiveState.subscribe(se=>{Me(se)}),[]),vr(()=>{(!_||_.length===0)&&e({icons:[{id:`social-icon-${K.substr(0,8)}-1`,iconValue:{name:"Facebook",network:"facebook",svg:"M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"},url:"https://facebook.com",label:"Facebook",openInNewTab:!0,rel:"nofollow"}]})},[K,_,e,o]);let ue=ck(null);vr(()=>{if(N&&N!=="none"){let E=setTimeout(()=>{Bg(o,N,Kl,ue)},100);return()=>clearTimeout(E)}},[N]);let A=()=>{Bg(o,N,Kl,ue)},J=[{label:lo("None","digiblocks"),value:"none"},{label:lo("Solid","digiblocks"),value:"solid"},{label:lo("Dotted","digiblocks"),value:"dotted"},{label:lo("Dashed","digiblocks"),value:"dashed"},{label:lo("Double","digiblocks"),value:"double"}],me=[{label:lo("None","digiblocks"),value:"none"},...Object.keys(Kl).map(E=>({label:E.replace(/-/g," ").replace(/\b\w/g,se=>se.toUpperCase()),value:E}))],oe=[{label:lo("Facebook","digiblocks"),value:"facebook"},{label:lo("Twitter","digiblocks"),value:"twitter"},{label:lo("LinkedIn","digiblocks"),value:"linkedin"},{label:lo("Instagram","digiblocks"),value:"instagram"},{label:lo("Pinterest","digiblocks"),value:"pinterest"},{label:lo("YouTube","digiblocks"),value:"youtube"},{label:lo("Dribbble","digiblocks"),value:"dribbble"},{label:lo("GitHub","digiblocks"),value:"github"},{label:lo("Behance","digiblocks"),value:"behance"},{label:lo("Vimeo","digiblocks"),value:"vimeo"},{label:lo("TikTok","digiblocks"),value:"tiktok"},{label:lo("Email","digiblocks"),value:"email"},{label:lo("Website","digiblocks"),value:"website"}],fe=[{name:"options",title:lo("Options","digiblocks"),icon:yr.optionsIcon},{name:"style",title:lo("Style","digiblocks"),icon:yr.styleIcon},{name:"advanced",title:lo("Advanced","digiblocks"),icon:yr.advancedIcon}],je=[{name:"normal",title:lo("Normal","digiblocks"),className:"digiblocks-tab-1 normal"},{name:"hover",title:lo("Hover","digiblocks"),className:"digiblocks-tab-2 hover"}],te=()=>{to()},to=()=>{ce({target:document.querySelector(".add-social")})},De=()=>{ce(null)},r=E=>{if(_.map(ge=>ge.iconValue&&ge.iconValue.network?ge.iconValue.network:null).filter(Boolean).includes(E))return;let c={id:`social-icon-${K.substr(0,8)}-${Date.now()}`,iconValue:{name:E.charAt(0).toUpperCase()+E.slice(1),network:E,svg:Xl[E]?Xl[E].props.children.props.d:""},url:"",label:E.charAt(0).toUpperCase()+E.slice(1),openInNewTab:!0,rel:"nofollow"};e({icons:[..._,c]}),De(),setTimeout(()=>{let ge=_.length;Pe(ge)},100)},D=E=>{if(_.length>1){let se=[..._];se.splice(E,1),e({icons:se})}},xe=(E,se,B)=>{let c=[..._];c[E]={...c[E],[se]:B},e({icons:c})},Pe=E=>{Y({index:E,target:document.getElementById(`social-icon-${E}`)})},Se=()=>{Y(null)},Ue=()=>{let E=ne,se=y[E]||24,B=$[E]||10,c=Q[E]||5,ge="";S&&S!=="none"&&(ge=`
                border-style: ${S};
                border-color: ${T||"#e0e0e0"};
				${xr(C,"border-width",E)}
				${xr(w,"border-radius",E)}
            `);let M="";I&&(I.fontFamily&&(M+=`font-family: ${I.fontFamily};`),I.fontSize&&I.fontSize[E]&&(M+=`font-size: ${I.fontSize[E]}${I.fontSizeUnit||"px"};`),I.fontWeight&&(M+=`font-weight: ${I.fontWeight};`),I.fontStyle&&(M+=`font-style: ${I.fontStyle};`),I.textTransform&&(M+=`text-transform: ${I.textTransform};`),I.textDecoration&&(M+=`text-decoration: ${I.textDecoration};`),I.lineHeight&&I.lineHeight[E]&&(M+=`line-height: ${I.lineHeight[E]}${I.lineHeightUnit||"em"};`),I.letterSpacing&&I.letterSpacing[E]&&(M+=`letter-spacing: ${I.letterSpacing[E]}${I.letterSpacingUnit||"px"};`));let k=be&&be[E]?`${xr(be,"padding",E)}`:"",G="";N&&N!=="none"&&Kl[N]&&(G=Kl[N].keyframes);let d="";if(u&&v)switch(v){case"top":d=`
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
                gap: ${B}px;
                justify-content: ${l[E]};
            }
            
            .${o} .digiblocks-social-wrapper {
                position: relative;
				display: flex;
            }
            
            .${o} .digiblocks-social-icon {
                display: flex;
                align-items: center;
                text-decoration: none;
                gap: ${c}px;
            }
            
            .${o} .digiblocks-social-icon-icon {
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: ${s||"transparent"};
                color: ${P||"#333333"};
                ${ge}
                ${k}
                transition: all 0.3s ease;
                cursor: pointer;
            }
            
            .${o} .digiblocks-social-icon-icon span {
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .${o} .digiblocks-social-icon-icon svg {
                width: ${se}px;
                height: ${se}px;
                fill: currentColor;
                transition: all 0.3s ease;
            }
            
            .${o} .digiblocks-social-icon:hover .digiblocks-social-icon-icon {
                background-color: ${z||s||"transparent"};
                ${U?`border-color: ${U};`:""}
                ${h?`color: ${h};`:""}
            }
            
            .${o} .digiblocks-social-icon-label {
                ${M}
                color: ${L||P||"#333333"};
                transition: color 0.3s ease;
            }
            
            .${o} .digiblocks-social-icon:hover .digiblocks-social-icon-label {
                color: ${V||h||L||P||"#333333"};
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
            ${G}
            
            /* Responsive styles */
            @media (max-width: 991px) {
                .${o} {
                    gap: ${$.tablet||B}px;
                }
                
                .${o} .digiblocks-social-icon {
                    gap: ${Q.tablet||c}px;
                }
                
                .${o} .digiblocks-social-icon-icon svg {
                    width: ${y.tablet||se}px;
                    height: ${y.tablet||se}px;
                }
                
                ${I&&I.fontSize&&I.fontSize.tablet?`
                .${o} .digiblocks-social-icon-label {
                    font-size: ${I.fontSize.tablet}${I.fontSizeUnit||"px"};
                }
                `:""}
                
                .${o} .digiblocks-social-icon.add-social {
                    width: ${y.tablet||se}px;
                    height: ${y.tablet||se}px;
                }
            }
            
            @media (max-width: 767px) {
                .${o} {
                    gap: ${$.mobile||$.tablet||B}px;
                }
                
                .${o} .digiblocks-social-icon {
                    gap: ${Q.mobile||Q.tablet||c}px;
                }
                
                .${o} .digiblocks-social-icon-icon svg {
                    width: ${y.mobile||y.tablet||se}px;
                    height: ${y.mobile||y.tablet||se}px;
                }
                
                ${I&&I.fontSize&&I.fontSize.mobile?`
                .${o} .digiblocks-social-icon-label {
                    font-size: ${I.fontSize.mobile}${I.fontSizeUnit||"px"};
                }
                `:""}
                
                .${o} .digiblocks-social-icon.add-social {
                    width: ${y.mobile||y.tablet||se}px;
                    height: ${y.mobile||y.tablet||se}px;
                }
            }

			/* Visibility Controls */
			${a.desktop?`
				@media (min-width: 992px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${a.tablet?`
				@media (min-width: 768px) and (max-width: 991px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${a.mobile?`
				@media (max-width: 767px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}
        `},ee=E=>E==="normal"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement($g,{title:lo("Icon Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:P,onChange:se=>e({iconColor:se}),label:lo("Icon Color","digiblocks")},{value:s,onChange:se=>e({iconBackground:se}),label:lo("Background Color","digiblocks")},{value:T,onChange:se=>e({iconBorderColor:se}),label:lo("Border Color","digiblocks")},...u?[{value:L,onChange:se=>e({labelColor:se}),label:lo("Label Color","digiblocks")}]:[]]})):wp.element.createElement(wp.element.Fragment,null,wp.element.createElement($g,{title:lo("Icon Hover Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:h,onChange:se=>e({iconHoverColor:se}),label:lo("Icon Hover Color","digiblocks")},{value:z,onChange:se=>e({iconHoverBackground:se}),label:lo("Hover Background","digiblocks")},{value:U,onChange:se=>e({iconHoverBorderColor:se}),label:lo("Hover Border Color","digiblocks")},...u?[{value:V,onChange:se=>e({labelHoverColor:se}),label:lo("Label Hover Color","digiblocks")}]:[]]})),Be=()=>{if(!W)return null;let{target:E}=W,se=_.map(c=>c.iconValue&&c.iconValue.network?c.iconValue.network:null).filter(Boolean),B=oe.filter(c=>!se.includes(c.value));return B.length===0?(De(),null):wp.element.createElement(_g,{anchor:E,onClose:De,position:"bottom center",expandOnMobile:!0,className:"digiblocks-social-select-popover"},wp.element.createElement("div",{style:{padding:"12px",width:"280px",maxHeight:"400px",overflowY:"auto"}},wp.element.createElement("div",{style:{marginBottom:"10px",fontWeight:"bold"}},lo("Select Social Network","digiblocks")),wp.element.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"8px"}},B.map(c=>wp.element.createElement(dn,{key:c.value,variant:"secondary",onClick:()=>r(c.value),style:{display:"flex",alignItems:"center",justifyContent:"flex-start",padding:"8px",gap:"8px"}},wp.element.createElement("span",{style:{display:"inline-flex",alignItems:"center"}},Xl[c.value]),wp.element.createElement("span",null,c.label))))))},Xe=()=>{if(!H)return null;let{index:E,target:se}=H,B=_[E];return wp.element.createElement(_g,{anchor:se,onClose:Se,position:"bottom center",expandOnMobile:!0,className:"digiblocks-social-url-popover"},wp.element.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",padding:"12px",minWidth:"280px"}},wp.element.createElement(hr,{label:lo("Social Network","digiblocks"),value:B.iconValue?B.iconValue.network:"",options:oe,onChange:c=>{let ge=[..._];ge[E]={...ge[E],iconValue:{name:c.charAt(0).toUpperCase()+c.slice(1),network:c,svg:Xl[c]?Xl[c].props.children.props.d:""}},e({icons:ge})},__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(kr,{label:lo("URL","digiblocks"),value:B.url||"",onChange:c=>xe(E,"url",c),placeholder:B.iconValue&&B.iconValue.network==="email"?"mailto:example@domain.com":B.iconValue&&B.iconValue.network==="website"?"https://example.com":`https://${B.iconValue?B.iconValue.network:"example"}.com/username`,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(kr,{label:lo("Label","digiblocks"),value:B.label||"",onChange:c=>xe(E,"label",c),placeholder:B.iconValue?B.iconValue.name:lo("Social Media","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Zl,{label:lo("Open in new tab","digiblocks"),checked:B.openInNewTab===void 0?!0:B.openInNewTab,onChange:c=>xe(E,"openInNewTab",c),__nextHasNoMarginBottom:!0}),wp.element.createElement(kr,{label:lo("Rel Attribute","digiblocks"),value:B.rel||"",onChange:c=>xe(E,"rel",c),placeholder:lo("e.g. nofollow","digiblocks"),help:lo('Optional. Add rel attributes like "nofollow", "sponsored", etc.',"digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(dn,{variant:"primary",onClick:Se,style:{justifyContent:"center",width:"100%"}},lo("Done","digiblocks"))))},q=()=>{switch(Le){case"options":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:"components-panel__body is-opened"},wp.element.createElement(gk,{label:lo("Alignment","digiblocks"),value:l,onChange:E=>e({align:E}),options:[{label:lo("Left","digiblocks"),value:"flex-start"},{label:lo("Center","digiblocks"),value:"center"},{label:lo("Right","digiblocks"),value:"flex-end"}]}),wp.element.createElement(Zl,{label:lo("Show Labels","digiblocks"),checked:u,onChange:E=>e({showLabels:E}),__nextHasNoMarginBottom:!0}),u&&wp.element.createElement(rk,{label:lo("Label Position","digiblocks"),value:v,onChange:E=>e({labelPosition:E}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(gn,{value:"bottom",label:lo("Bottom","digiblocks")}),wp.element.createElement(gn,{value:"right",label:lo("Right","digiblocks")}),wp.element.createElement(gn,{value:"left",label:lo("Left","digiblocks")}),wp.element.createElement(gn,{value:"top",label:lo("Top","digiblocks")}))));case"style":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(sl,{tab:"style",name:"colors",title:lo("Colors","digiblocks"),initialOpen:!0},wp.element.createElement(sk,{className:"digiblocks-control-tabs",activeClass:"active-tab",tabs:je},E=>ee(E.name))),wp.element.createElement(sl,{tab:"style",name:"size-shape",title:lo("Size & Shape","digiblocks"),initialOpen:!1},wp.element.createElement(nl,{label:lo("Icon Size","digiblocks")},wp.element.createElement(fr,{value:y[ne],onChange:E=>e({iconSize:{...y,[ne]:E}}),min:0,max:100,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(nl,{label:lo("Icon Spacing","digiblocks")},wp.element.createElement(fr,{value:$[ne],onChange:E=>e({iconSpacing:{...$,[ne]:E}}),min:0,max:100,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),u&&wp.element.createElement(nl,{label:lo("Label Spacing","digiblocks")},wp.element.createElement(fr,{value:Q[ne],onChange:E=>e({labelSpacing:{...Q,[ne]:E}}),min:0,max:100,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(hr,{label:lo("Border Style","digiblocks"),value:S||"none",options:J,onChange:E=>{E!=="none"&&(!C||Object.keys(C).length===0)&&e({iconBorderWidth:{desktop:{value:1,unit:"px"},tablet:{value:1,unit:"px"},mobile:{value:1,unit:"px"}}}),E!=="none"&&(!w||Object.keys(w).length===0)&&e({iconBorderRadius:{desktop:{value:0,unit:"px"},tablet:{value:0,unit:"px"},mobile:{value:0,unit:"px"}}}),e({iconBorderStyle:E})},__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),S&&S!=="none"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(nl,{label:lo("Border Width","digiblocks")},wp.element.createElement(Cr,{values:C[ne],onChange:E=>e({iconBorderWidth:{...C,[ne]:E}})})),wp.element.createElement(nl,{label:lo("Border Radius","digiblocks")},wp.element.createElement(Cr,{values:w[ne],onChange:E=>e({iconBorderRadius:{...w,[ne]:E}})}))),wp.element.createElement(nl,{label:lo("Padding","digiblocks")},wp.element.createElement(Cr,{values:be[ne],onChange:E=>e({padding:{...be,[ne]:E}})}))),u&&wp.element.createElement(sl,{tab:"style",name:"typography",title:lo("Typography","digiblocks"),initialOpen:!1},wp.element.createElement(pk,{label:lo("Label Typography","digiblocks"),value:I,onChange:E=>e({textTypography:E}),defaults:{fontSize:{desktop:14,tablet:13,mobile:12},fontSizeUnit:"px",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em"}})));case"advanced":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(sl,{tab:"advanced",name:"animation",title:lo("Animation","digiblocks"),initialOpen:!0},wp.element.createElement(hr,{label:lo("Animation Effect","digiblocks"),value:N,options:me,onChange:E=>e({animation:E}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),N&&N!=="none"&&wp.element.createElement("div",{style:{marginTop:"10px"}},wp.element.createElement(dn,{variant:"secondary",isSecondary:!0,onClick:A,style:{width:"100%"}},lo("Preview Animation","digiblocks")))),wp.element.createElement(sl,{tab:"advanced",name:"visibility",title:lo("Visibility","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control__help",style:{padding:"12px",backgroundColor:"#f0f6fc",border:"1px solid #c3ddfd",borderRadius:"4px",marginBottom:"16px"}},wp.element.createElement("strong",null,lo("Editor Note:","digiblocks")),wp.element.createElement("br",null),lo("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.","digiblocks")),wp.element.createElement(Zl,{label:lo("Hide on Desktop","digiblocks"),checked:a.desktop,onChange:E=>e({visibility:{...a,desktop:E}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(Zl,{label:lo("Hide on Tablet","digiblocks"),checked:a.tablet,onChange:E=>e({visibility:{...a,tablet:E}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(Zl,{label:lo("Hide on Mobile","digiblocks"),checked:a.mobile,onChange:E=>e({visibility:{...a,mobile:E}}),__nextHasNoMarginBottom:!0})),wp.element.createElement(sl,{tab:"advanced",name:"additional",title:lo("Additional","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control html-anchor-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"html-anchor"},lo("HTML anchor","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"html-anchor",value:O||"",onChange:E=>e({anchor:E.target.value}),"aria-describedby":"html-anchor-help",autoCapitalize:"none",autoComplete:"off"})),wp.element.createElement("p",{id:"html-anchor-help",className:"components-base-control__help"},lo(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`,"digiblocks")," ",wp.element.createElement("a",{className:"components-external-link",href:"https://wordpress.org/documentation/article/page-jumps/",target:"_blank",rel:"external noreferrer noopener"},wp.element.createElement("span",{className:"components-external-link__contents"},lo("Learn more about anchors","digiblocks")),wp.element.createElement("span",{className:"components-external-link__icon","aria-label":"(opens in a new tab)"},"\u2197")))),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"additional-css-classes"},lo("Additional CSS class(es)","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"additional-css-classes",value:le||"",onChange:E=>e({customClasses:E.target.value}),"aria-describedby":"additional-css-classes-help",autoComplete:"off"})),wp.element.createElement("p",{id:"additional-css-classes-help",className:"components-base-control__help"},lo("Separate multiple classes with spaces.","digiblocks")))));default:return null}},ye=ak({className:`digiblocks-social-icons ${o} ${le||""}`,id:O||null}),qe=()=>{let E=_.map((se,B)=>wp.element.createElement("div",{key:se.id||B,className:"digiblocks-social-wrapper",id:`social-icon-${B}`},wp.element.createElement("div",{className:"digiblocks-social-icon",onClick:()=>{Pe(B)}},wp.element.createElement("div",{className:"digiblocks-social-icon-icon"},se.iconValue&&se.iconValue.network?wp.element.createElement("span",{dangerouslySetInnerHTML:{__html:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="${se.iconValue.network==="facebook"?"0 0 320 512":se.iconValue.network==="twitter"?"0 0 512 512":se.iconValue.network==="linkedin"||se.iconValue.network==="instagram"?"0 0 448 512":se.iconValue.network==="pinterest"?"0 0 384 512":se.iconValue.network==="youtube"?"0 0 576 512":se.iconValue.network==="dribbble"?"0 0 512 512":se.iconValue.network==="github"?"0 0 496 512":se.iconValue.network==="behance"?"0 0 576 512":se.iconValue.network==="vimeo"||se.iconValue.network==="tiktok"?"0 0 448 512":se.iconValue.network==="email"?"0 0 512 512":"0 0 640 512"}" fill="currentColor"><path d="${se.iconValue.svg}"/></svg>`}}):wp.element.createElement("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#f0f0f0",borderRadius:"50%",fontSize:"20px",color:"#555"}},"?")),u&&se.label&&wp.element.createElement("span",{className:"digiblocks-social-icon-label"},se.label)),_.length>1&&wp.element.createElement(dn,{className:"digiblocks-social-icon-remove",onClick:()=>D(B),icon:"no-alt",isSmall:!0,label:lo("Remove","digiblocks")})));return E.push(wp.element.createElement("div",{key:"add-social-icon",className:"digiblocks-social-icon add-social",onClick:te,title:lo("Add Social Icon","digiblocks")},uk)),E};return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(nk,null,wp.element.createElement(bk,{tabs:fe,activeTab:Le,onSelect:X},q())),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:Ue()}}),wp.element.createElement("div",{...ye},qe(),Be(),Xe()))},Tg=mk;var{useBlockProps:hk}=window.wp.blockEditor,fk=({attributes:ie})=>{let{id:e,anchor:K,customClasses:o,icons:O,align:a,animation:le,showLabels:l,labelPosition:_}=ie,y=["digiblocks-social-icons",e,`align-${a}`,le!=="none"?`animate-${le}`:"",o||""].filter(Boolean).join(" "),$=hk.save({className:y,id:K||null}),P=()=>O.map((h,s)=>{if(!h.iconValue||!h.iconValue.network||!h.url)return null;let z=h.openInNewTab?"noopener noreferrer":"";return h.rel&&(z=z?`${z} ${h.rel}`:h.rel),wp.element.createElement("a",{key:h.id||s,href:h.url,className:"digiblocks-social-icon",target:h.openInNewTab?"_blank":"_self",rel:z||void 0,"aria-label":h.label||h.iconValue.name||"Social icon"},wp.element.createElement("div",{className:"digiblocks-social-icon-icon"},wp.element.createElement("span",{dangerouslySetInnerHTML:{__html:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="${h.iconValue.network==="facebook"?"0 0 320 512":h.iconValue.network==="twitter"?"0 0 512 512":h.iconValue.network==="linkedin"||h.iconValue.network==="instagram"?"0 0 448 512":h.iconValue.network==="pinterest"?"0 0 384 512":h.iconValue.network==="youtube"?"0 0 576 512":h.iconValue.network==="dribbble"?"0 0 512 512":h.iconValue.network==="github"?"0 0 496 512":h.iconValue.network==="behance"?"0 0 576 512":h.iconValue.network==="vimeo"||h.iconValue.network==="tiktok"?"0 0 448 512":h.iconValue.network==="email"?"0 0 512 512":"0 0 640 512"}" fill="currentColor"><path d="${h.iconValue.network==="facebook"?"M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z":h.iconValue.network==="twitter"?"M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z":h.iconValue.network==="linkedin"?"M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z":h.iconValue.network==="instagram"?"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z":h.iconValue.network==="pinterest"?"M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z":h.iconValue.network==="youtube"?"M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z":h.iconValue.network==="dribbble"?"M86.6 64l85.2 85.2C194.5 121.7 208 86.4 208 48c0-14.7-2-28.9-5.7-42.4C158.6 15 119 35.5 86.6 64zM64 86.6C35.5 119 15 158.6 5.6 202.3C19.1 206 33.3 208 48 208c38.4 0 73.7-13.5 101.3-36.1L64 86.6zM256 0c-7.3 0-14.6 .3-21.8 .9C238 16 240 31.8 240 48c0 47.3-17.1 90.5-45.4 124L256 233.4 425.4 64C380.2 24.2 320.9 0 256 0zM48 240c-16.2 0-32-2-47.1-5.8C.3 241.4 0 248.7 0 256c0 64.9 24.2 124.2 64 169.4L233.4 256 172 194.6C138.5 222.9 95.3 240 48 240zm463.1 37.8c.6-7.2 .9-14.5 .9-21.8c0-64.9-24.2-124.2-64-169.4L278.6 256 340 317.4c33.4-28.3 76.7-45.4 124-45.4c16.2 0 32 2 47.1 5.8zm-4.7 31.9C492.9 306 478.7 304 464 304c-38.4 0-73.7 13.5-101.3 36.1L448 425.4c28.5-32.3 49.1-71.9 58.4-115.7zM340.1 362.7C317.5 390.3 304 425.6 304 464c0 14.7 2 28.9 5.7 42.4C353.4 497 393 476.5 425.4 448l-85.2-85.2zM317.4 340L256 278.6 86.6 448c45.1 39.8 104.4 64 169.4 64c7.3 0 14.6-.3 21.8-.9C274 496 272 480.2 272 464c0-47.3 17.1-90.5 45.4-124z":h.iconValue.network==="github"?"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z":h.iconValue.network==="behance"?"M232 237.2c31.8-15.2 48.4-38.2 48.4-74 0-70.6-52.6-87.8-113.3-87.8H0v354.4h171.8c64.4 0 124.9-30.9 124.9-102.9 0-44.5-21.1-77.4-64.7-89.7zM77.9 135.9H151c28.1 0 53.4 7.9 53.4 40.5 0 30.1-19.7 42.2-47.5 42.2h-79v-82.7zm83.3 233.7H77.9V272h84.9c34.3 0 56 14.3 56 50.6 0 35.8-25.9 47-57.6 47zm358.5-240.7H376V94h143.7v34.9zM576 305.2c0-75.9-44.4-139.2-124.9-139.2-78.2 0-131.3 58.8-131.3 135.8 0 79.9 50.3 134.7 131.3 134.7 61.3 0 101-27.6 120.1-86.3H509c-6.7 21.9-34.3 33.5-55.7 33.5-41.3 0-63-24.2-63-65.3h185.1c.3-4.2 .6-8.7 .6-13.2zM390.4 274c2.3-33.7 24.7-54.8 58.5-54.8 35.4 0 53.2 20.8 56.2 54.8H390.4z":h.iconValue.network==="vimeo"?"M447.8 153.6c-2 43.6-32.4 103.3-91.4 179.1-60.9 79.2-112.4 118.8-154.6 118.8-26.1 0-48.2-24.1-66.3-72.3C100.3 250 85.3 174.3 56.2 174.3c-3.4 0-15.1 7.1-35.2 21.1L0 168.2c51.6-45.3 100.9-95.7 131.8-98.5 34.9-3.4 56.3 20.5 64.4 71.5 28.7 181.5 41.4 208.9 93.6 126.7 18.7-29.6 28.8-52.1 30.2-67.6 4.8-45.9-35.8-42.8-63.3-31 22-72.1 64.1-107.1 126.2-105.1 45.8 1.2 67.5 31.1 64.9 89.4z":h.iconValue.network==="tiktok"?"M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z":h.iconValue.network==="email"?"M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z":"M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"}"/></svg>`}})),l&&h.label&&wp.element.createElement("span",{className:"digiblocks-social-icon-label"},h.label))}).filter(Boolean);return wp.element.createElement("div",{...$},P())},Ng=fk;var{__:bn}=window.wp.i18n,{registerBlockType:kk}=window.wp.blocks,{getBlockActiveStatus:vk}=window.wp.digiBlocks;kk("digiblocks/social-icons",{apiVersion:2,title:digiBlocksData.blocks["social-icons"].title,category:"digiblocks",icon:{src:()=>{let{viewbox:ie,path:e}=digiBlocksData.blocks["social-icons"].icon;return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${ie}`,className:"digiblocks-editor-icons"},wp.element.createElement("path",{d:e}))}},description:digiBlocksData.blocks["social-icons"].description,keywords:[bn("social","digiblocks"),bn("icons","digiblocks"),bn("networks","digiblocks"),bn("media","digiblocks")],supports:{inserter:!!vk("social-icons"),html:!1,className:!1,customClassName:!1,anchor:!1},attributes:{id:{type:"string",default:""},anchor:{type:"string",default:""},visibility:{type:"object",default:{desktop:!1,tablet:!1,mobile:!1}},customClasses:{type:"string",default:""},align:{type:"object",default:{desktop:"flex-start",tablet:"",mobile:""}},icons:{type:"array",default:[{id:"social-icon-1",iconValue:{name:"Facebook",network:"facebook",svg:"M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"},url:"https://facebook.com",label:"Facebook",openInNewTab:!0,rel:"nofollow"},{id:"social-icon-2",iconValue:{name:"Twitter",network:"twitter",svg:"M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"},url:"https://twitter.com",label:"Twitter",openInNewTab:!0,rel:"nofollow"},{id:"social-icon-3",iconValue:{name:"Instagram",network:"instagram",svg:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},url:"https://instagram.com",label:"Instagram",openInNewTab:!0,rel:"nofollow"}]},iconSize:{type:"object",default:{desktop:24,tablet:22,mobile:20}},iconSpacing:{type:"object",default:{desktop:10,tablet:8,mobile:6}},labelSpacing:{type:"object",default:{desktop:5,tablet:5,mobile:5}},iconColor:{type:"string",default:"#333333"},iconHoverColor:{type:"string",default:""},labelColor:{type:"string",default:""},labelHoverColor:{type:"string",default:""},iconBackground:{type:"string",default:"transparent"},iconHoverBackground:{type:"string",default:""},iconBorderStyle:{type:"string",default:"none"},iconBorderWidth:{type:"object",default:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},iconBorderRadius:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},iconBorderColor:{type:"string",default:"#e0e0e0"},iconHoverBorderColor:{type:"string",default:""},padding:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},animation:{type:"string",default:"none"},showLabels:{type:"boolean",default:!1},labelPosition:{type:"string",default:"bottom"},textTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:14,tablet:13,mobile:12},fontSizeUnit:"px",fontWeight:"",fontStyle:"normal",textTransform:"",textDecoration:"",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}}},example:{attributes:{icons:[{id:"example-icon-1",iconValue:{name:"Facebook",network:"facebook",svg:"M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"},url:"https://facebook.com",label:"Facebook",openInNewTab:!0,rel:"nofollow"},{id:"example-icon-2",iconValue:{name:"Twitter",network:"twitter",svg:"M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"},url:"https://twitter.com",label:"Twitter",openInNewTab:!0,rel:"nofollow"},{id:"example-icon-3",iconValue:{name:"Instagram",network:"instagram",svg:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},url:"https://instagram.com",label:"Instagram",openInNewTab:!0,rel:"nofollow"}],iconSpacing:{desktop:20},align:"center",iconColor:"#1e73be",labelColor:"#09053a",iconBackground:"transparent",showLabels:!0,labelPosition:"right"}},edit:Tg,save:Ng});var{__:Po}=window.wp.i18n,{useBlockProps:xk,InspectorControls:yk}=window.wp.blockEditor,{ToggleControl:wr,RangeControl:Ck}=window.wp.components,{useState:Hg,useEffect:wk}=window.wp.element,{useBlockId:Sk}=digi.utils,{tabIcons:zg}=digi.icons,{ResponsiveControl:$k,CustomTabPanel:_k}=digi.components,Bk=({attributes:ie,setAttributes:e,clientId:K})=>{let{id:o,anchor:O,visibility:a,customClasses:le,height:l}=ie;Sk(o,K,e);let[_,y]=Hg(window.digi.responsiveState.activeDevice);wk(()=>window.digi.responsiveState.subscribe(w=>{y(w)}),[]);let[$,P]=Hg(()=>{if(window.digi.uiState){let C=window.digi.uiState.getActiveTab(K);if(C)return C}return"options"}),h=[{name:"options",title:Po("Options","digiblocks"),icon:zg.optionsIcon},{name:"advanced",title:Po("Advanced","digiblocks"),icon:zg.advancedIcon}],s=()=>{let C=window.digi.responsiveState.activeDevice,w=l[C]||(C==="tablet"?60:C==="mobile"?40:80);return`
            /* Spacer Block Styles */
            .${o} {
                height: ${w}px;
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
			${a.desktop?`
				@media (min-width: 992px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${a.tablet?`
				@media (min-width: 768px) and (max-width: 991px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${a.mobile?`
				@media (max-width: 767px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}
        `},z=()=>{switch($){case"options":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:"components-panel__body is-opened"},wp.element.createElement($k,{label:Po("Height","digiblocks")},wp.element.createElement(Ck,{value:l[_],onChange:C=>e({height:{...l,[_]:C}}),min:1,max:500,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}))));case"advanced":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(TabPanelBody,{tab:"advanced",name:"visibility",title:Po("Visibility","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control__help",style:{padding:"12px",backgroundColor:"#f0f6fc",border:"1px solid #c3ddfd",borderRadius:"4px",marginBottom:"16px"}},wp.element.createElement("strong",null,Po("Editor Note:","digiblocks")),wp.element.createElement("br",null),Po("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.","digiblocks")),wp.element.createElement(wr,{label:Po("Hide on Desktop","digiblocks"),checked:a.desktop,onChange:C=>e({visibility:{...a,desktop:C}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(wr,{label:Po("Hide on Tablet","digiblocks"),checked:a.tablet,onChange:C=>e({visibility:{...a,tablet:C}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(wr,{label:Po("Hide on Mobile","digiblocks"),checked:a.mobile,onChange:C=>e({visibility:{...a,mobile:C}}),__nextHasNoMarginBottom:!0})),wp.element.createElement("div",{className:"components-panel__body is-opened"},wp.element.createElement("div",{className:"components-base-control html-anchor-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"html-anchor"},Po("HTML anchor","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"html-anchor",value:O||"",onChange:C=>e({anchor:C.target.value}),"aria-describedby":"html-anchor-help",autoCapitalize:"none",autoComplete:"off"})),wp.element.createElement("p",{id:"html-anchor-help",className:"components-base-control__help"},Po(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`,"digiblocks")," ",wp.element.createElement("a",{className:"components-external-link",href:"https://wordpress.org/documentation/article/page-jumps/",target:"_blank",rel:"external noreferrer noopener"},wp.element.createElement("span",{className:"components-external-link__contents"},Po("Learn more about anchors","digiblocks")),wp.element.createElement("span",{className:"components-external-link__icon","aria-label":"(opens in a new tab)"},"\u2197")))),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"additional-css-classes"},Po("Additional CSS class(es)","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"additional-css-classes",value:le||"",onChange:C=>e({customClasses:C.target.value}),"aria-describedby":"additional-css-classes-help",autoComplete:"off"})),wp.element.createElement("p",{id:"additional-css-classes-help",className:"components-base-control__help"},Po("Separate multiple classes with spaces.","digiblocks")))));default:return null}},S=xk({className:`digiblocks-spacer ${o} ${le||""}`,id:O||null});return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(yk,null,wp.element.createElement(_k,{tabs:h,activeTab:$,onSelect:C=>{requestAnimationFrame(()=>{P(C)})}},z())),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:s()}}),wp.element.createElement("div",{...S},wp.element.createElement("div",{className:"digiblocks-spacer-icon-wrapper"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},wp.element.createElement("path",{d:"M512 464c0-8.8-7.2-16-16-16L16 448c-8.8 0-16 7.2-16 16s7.2 16 16 16l480 0c8.8 0 16-7.2 16-16zM144 320c-8.8 0-16-7.2-16-16l0-96c0-8.8 7.2-16 16-16l224 0c8.8 0 16 7.2 16 16l0 96c0 8.8-7.2 16-16 16l-224 0zm224 32c26.5 0 48-21.5 48-48l0-96c0-26.5-21.5-48-48-48l-224 0c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48l224 0zM496 64c8.8 0 16-7.2 16-16s-7.2-16-16-16L16 32C7.2 32 0 39.2 0 48s7.2 16 16 16l480 0z"})))))},Mg=Bk;var{useBlockProps:Tk}=window.wp.blockEditor,Nk=({attributes:ie})=>{let{id:e,anchor:K,customClasses:o,height:O}=ie,a=["digiblocks-spacer",e,o||""].filter(Boolean).join(" "),le=Tk.save({className:a,id:K||null});return wp.element.createElement("div",{...le})},Dg=Nk;var{__:Sr}=window.wp.i18n,{registerBlockType:Hk}=window.wp.blocks,{getBlockActiveStatus:zk}=window.wp.digiBlocks;Hk("digiblocks/spacer",{apiVersion:2,title:digiBlocksData.blocks.spacer.title,category:"digiblocks",icon:{src:()=>{let{viewbox:ie,path:e}=digiBlocksData.blocks.spacer.icon;return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${ie}`,className:"digiblocks-editor-icons"},wp.element.createElement("path",{d:e}))}},description:digiBlocksData.blocks.spacer.description,keywords:[Sr("spacer","digiblocks"),Sr("gap","digiblocks"),Sr("spacing","digiblocks")],supports:{inserter:!!zk("spacer"),html:!1,className:!1,customClassName:!1,anchor:!1},attributes:{id:{type:"string",default:""},anchor:{type:"string",default:""},visibility:{type:"object",default:{desktop:!1,tablet:!1,mobile:!1}},customClasses:{type:"string",default:""},height:{type:"object",default:{desktop:80,tablet:60,mobile:40}}},example:{attributes:{height:{desktop:80}}},edit:Mg,save:Dg});var{__:ze}=window.wp.i18n,{useBlockProps:Mk,RichText:$r,InspectorControls:Dk,PanelColorSettings:un,BlockControls:Pk}=window.wp.blockEditor,{SelectControl:mn,RangeControl:Rk,ToggleControl:rl,Button:vi,ToolbarGroup:Pg,ToolbarButton:cl,BaseControl:hn,Popover:Ik,__experimentalToggleGroupControl:Al,__experimentalToggleGroupControlOption:Go}=window.wp.components,{useState:ea,useEffect:_r,useRef:Lk}=window.wp.element,{useBlockId:Ok,getDimensionCSS:Br,animations:oa,animationPreview:Rg}=digi.utils,{tabIcons:Tr}=digi.icons,{ResponsiveControl:Nr,DimensionControl:Hr,TypographyControl:zr,BoxShadowControl:jk,CustomTabPanel:Uk,TabPanelBody:at}=digi.components,Vk=({attributes:ie,setAttributes:e,clientId:K})=>{let{id:o,anchor:O,visibility:a,customClasses:le,tableData:l,hasHeader:_,hasFooter:y,tableBorderColor:$,tableBorderWidth:P,tableBorderStyle:h,cellPadding:s,tableBorderCollapse:z,headerBackgroundColor:S,headerTextColor:C,headingTypography:w,bodyBackgroundColor:T,altRowBackgroundColor:U,bodyTextColor:L,textTypography:V,footerBackgroundColor:Q,footerTextColor:be,contentTypography:N,borderRadius:u,boxShadow:v,boxShadowHover:I,margin:ne,cellAlignment:Me,headerAlignment:Le,footerAlignment:X,tablePreset:H,responsiveMode:Y,animation:W,firstColHeader:ce,cellControls:ue}=ie;Ok(o,K,e);let[A,J]=ea(window.digi.responsiveState.activeDevice),[me,oe]=ea(!1),[fe,je]=ea(()=>{if(window.digi.uiState){let m=window.digi.uiState.getActiveTab(K);if(m)return m}return"options"}),[te,to]=ea({row:-1,col:-1}),[De,r]=ea(!1);_r(()=>window.digi.responsiveState.subscribe(he=>{J(he)}),[]),_r(()=>{(!l||l.length===0)&&e({tableData:[["Header 1","Header 2","Header 3"],["Row 1, Cell 1","Row 1, Cell 2","Row 1, Cell 3"],["Row 2, Cell 1","Row 2, Cell 2","Row 2, Cell 3"]]}),ue||e({cellControls:{}})},[l,ue,e]);let D=Lk(null);_r(()=>{if(W&&W!=="none"){let m=setTimeout(()=>{Rg(o,W,oa,D)},100);return()=>clearTimeout(m)}},[W]);let xe=()=>{Rg(o,W,oa,D)},Pe=[{label:ze("Solid","digiblocks"),value:"solid"},{label:ze("Dotted","digiblocks"),value:"dotted"},{label:ze("Dashed","digiblocks"),value:"dashed"},{label:ze("Double","digiblocks"),value:"double"},{label:ze("None","digiblocks"),value:"none"}],Se=[{label:ze("Default","digiblocks"),value:"default"},{label:ze("Striped","digiblocks"),value:"striped"},{label:ze("Bordered","digiblocks"),value:"bordered"},{label:ze("Borderless","digiblocks"),value:"borderless"},{label:ze("Modern","digiblocks"),value:"modern"},{label:ze("Minimal","digiblocks"),value:"minimal"}],Ue=[{label:ze("None","digiblocks"),value:"none"},...Object.keys(oa).map(m=>({label:m.replace(/-/g," ").replace(/\b\w/g,he=>he.toUpperCase()),value:m}))],ee=[{name:"options",title:ze("Options","digiblocks"),icon:Tr.optionsIcon},{name:"style",title:ze("Style","digiblocks"),icon:Tr.styleIcon},{name:"advanced",title:ze("Advanced","digiblocks"),icon:Tr.advancedIcon}],Be=m=>{if(!l||l.length===0)return;let he=[...l],j=he[0].length,Ne=Array(j).fill("");he.splice(m+1,0,Ne),e({tableData:he})},Xe=m=>{if(!l||l.length<=1)return;let he=[...l];he.splice(m,1),e({tableData:he})},q=m=>{if(!l||l.length===0)return;let he=l.map(j=>{let Ne=[...j];return Ne.splice(m+1,0,""),Ne});e({tableData:he})},ye=m=>{if(!l||l[0].length<=1)return;let he=l.map(j=>{let Ne=[...j];return Ne.splice(m,1),Ne});e({tableData:he})},qe=(m,he,j)=>{let Ne=[...l];Ne[he][j]=m,e({tableData:Ne})},E=(m,he)=>{to({row:m,col:he})},se=(m,he,j)=>{if(!ue)return null;let Ne=`${m}-${he}`;return ue[Ne]&&ue[Ne][j]?ue[Ne][j]:null},B=(m,he,j,Ne)=>{let f=`${m}-${he}`,Ge={...ue||{}};Ge[f]||(Ge[f]={}),Ge[f][j]=Ne,e({cellControls:Ge})},c=(m,he,j)=>{if(!ue)return;let Ne=`${m}-${he}`,f={...ue};f[Ne]&&f[Ne][j]&&(delete f[Ne][j],Object.keys(f[Ne]).length===0&&delete f[Ne],e({cellControls:f}))},ge=m=>{let he={};switch(m){case"striped":he={tablePreset:m,tableBorderStyle:"solid",tableBorderWidth:1,tableBorderColor:"#dee2e6",tableBorderCollapse:"collapse",headerBackgroundColor:"#f8f9fa",headerTextColor:"#212529",bodyBackgroundColor:"#ffffff",altRowBackgroundColor:"#f2f2f2",bodyTextColor:"#212529"};break;case"bordered":he={tablePreset:m,tableBorderStyle:"solid",tableBorderWidth:2,tableBorderColor:"#dee2e6",tableBorderCollapse:"collapse",headerBackgroundColor:"#f8f9fa",headerTextColor:"#212529",bodyBackgroundColor:"#ffffff",altRowBackgroundColor:"",bodyTextColor:"#212529"};break;case"borderless":he={tablePreset:m,tableBorderStyle:"none",tableBorderWidth:0,tableBorderColor:"transparent",tableBorderCollapse:"collapse",headerBackgroundColor:"transparent",headerTextColor:"#212529",bodyBackgroundColor:"transparent",altRowBackgroundColor:"",bodyTextColor:"#212529"};break;case"modern":he={tablePreset:m,tableBorderStyle:"solid",tableBorderWidth:1,tableBorderColor:"#e0e0e0",tableBorderCollapse:"separate",headerBackgroundColor:"#4a6cf7",headerTextColor:"#ffffff",bodyBackgroundColor:"#ffffff",altRowBackgroundColor:"#f8f9fa",bodyTextColor:"#212529",boxShadow:{enable:!0,color:"rgba(0, 0, 0, 0.1)",horizontal:0,vertical:4,blur:15,spread:0,position:"outset"},borderRadius:{desktop:{top:8,right:8,bottom:8,left:8,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}};break;case"minimal":he={tablePreset:m,tableBorderStyle:"solid",tableBorderWidth:1,tableBorderColor:"#e0e0e0",tableBorderCollapse:"collapse",headerBackgroundColor:"#ffffff",headerTextColor:"#212529",bodyBackgroundColor:"#ffffff",altRowBackgroundColor:"",bodyTextColor:"#212529",boxShadow:{enable:!1,color:"rgba(0, 0, 0, 0.1)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"},borderRadius:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}};break;default:he={tablePreset:"default",tableBorderStyle:"solid",tableBorderWidth:1,tableBorderColor:"#e0e0e0",tableBorderCollapse:"collapse",headerBackgroundColor:"#f8f9fa",headerTextColor:"#333333",bodyBackgroundColor:"#ffffff",altRowBackgroundColor:"",bodyTextColor:"#666666",boxShadow:{enable:!1,color:"rgba(0, 0, 0, 0.1)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"},borderRadius:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}}}e(he)},M=()=>{let m=window.digi.responsiveState.activeDevice;if(!o)return"";let he=n=>{switch(n){case"left":return"flex-start";case"center":return"center";case"right":return"flex-end";default:return"flex-start"}},j="";h!=="none"?j=`
                border-style: ${h};
                border-width: ${P}px;
                border-color: ${$};
            `:j="border: none;";let Ne="box-shadow: none;";v&&v.enable&&(Ne=`box-shadow: ${v.position==="inset"?"inset ":""}${v.horizontal}px ${v.vertical}px ${v.blur}px ${v.spread}px ${v.color};`);let f="";I&&I.enable&&(f=`box-shadow: ${I.position==="inset"?"inset ":""}${I.horizontal}px ${I.vertical}px ${I.blur}px ${I.spread}px ${I.color};`);let Ge=`${Br(u,"border-radius",m)}`,We=`${Br(s,"padding",m)}`,go=`${Br(ne,"margin",m)}`,t="";w&&(w.fontFamily&&(t+=`font-family: ${w.fontFamily};`),w.fontSize&&w.fontSize[m]&&(t+=`font-size: ${w.fontSize[m]}${w.fontSizeUnit||"px"};`),w.fontWeight&&(t+=`font-weight: ${w.fontWeight};`),w.fontStyle&&(t+=`font-style: ${w.fontStyle};`),w.textTransform&&(t+=`text-transform: ${w.textTransform};`),w.textDecoration&&(t+=`text-decoration: ${w.textDecoration};`),w.lineHeight&&w.lineHeight[m]&&(t+=`line-height: ${w.lineHeight[m]}${w.lineHeightUnit||"em"};`),w.letterSpacing&&w.letterSpacing[m]&&(t+=`letter-spacing: ${w.letterSpacing[m]}${w.letterSpacingUnit||"px"};`));let b="";V&&(V.fontFamily&&(b+=`font-family: ${V.fontFamily};`),V.fontSize&&V.fontSize[m]&&(b+=`font-size: ${V.fontSize[m]}${V.fontSizeUnit||"px"};`),V.fontWeight&&(b+=`font-weight: ${V.fontWeight};`),V.fontStyle&&(b+=`font-style: ${V.fontStyle};`),V.textTransform&&(b+=`text-transform: ${V.textTransform};`),V.textDecoration&&(b+=`text-decoration: ${V.textDecoration};`),V.lineHeight&&V.lineHeight[m]&&(b+=`line-height: ${V.lineHeight[m]}${V.lineHeightUnit||"em"};`),V.letterSpacing&&V.letterSpacing[m]&&(b+=`letter-spacing: ${V.letterSpacing[m]}${V.letterSpacingUnit||"px"};`));let Ce="";return N&&(N.fontFamily&&(Ce+=`font-family: ${N.fontFamily};`),N.fontSize&&N.fontSize[m]&&(Ce+=`font-size: ${N.fontSize[m]}${N.fontSizeUnit||"px"};`),N.fontWeight&&(Ce+=`font-weight: ${N.fontWeight};`),N.fontStyle&&(Ce+=`font-style: ${N.fontStyle};`),N.textTransform&&(Ce+=`text-transform: ${N.textTransform};`),N.textDecoration&&(Ce+=`text-decoration: ${N.textDecoration};`),N.lineHeight&&N.lineHeight[m]&&(Ce+=`line-height: ${N.lineHeight[m]}${N.lineHeightUnit||"em"};`),N.letterSpacing&&N.letterSpacing[m]&&(Ce+=`letter-spacing: ${N.letterSpacing[m]}${N.letterSpacingUnit||"px"};`)),`
            /* Table Block - ${o} */
            .${o} {
                ${go}
                ${Ne}
                ${Ge}
                width: 100%;
                transition: all 0.3s ease;
            }

			/* Hover effects */
            ${I&&I.enable?`
                .${o}:hover {
                    ${f}
                }
            `:""}
            
            /* Set up main table styles */
            .${o} .digiblocks-table {
                width: 100%;
                border-collapse: ${z};
                border-spacing: 0;
                color: ${L};
                ${b}
                ${j}
                ${Ge}
            }
            
            /* Table header styles */
            .${o} .digiblocks-table thead th {
                background-color: ${S};
                color: ${C};
                ${t}
                ${We}
                vertical-align: middle;
                border: ${P}px ${h} ${$};
            }

            .${o} .digiblocks-table thead th .digiblocks-cell-content {
                justify-content: ${he(Le)};
            }
            
            /* Table body styles */
            .${o} .digiblocks-table tbody td {
                background-color: ${T};
                ${We}
                vertical-align: middle;
                border: ${P}px ${h} ${$};
            }

            .${o} .digiblocks-table tbody td .digiblocks-cell-content {
                justify-content: ${he(Me)};
            }
            
            /* First column styles if it's a header */
            ${ce?`
            .${o} .digiblocks-table tbody td:first-child {
                background-color: ${S};
                color: ${C};
                ${t}
                font-weight: bold;
            }

            .${o} .digiblocks-table tbody td:first-child .digiblocks-cell-content {
                justify-content: ${he(Le)};
            }
            `:""}
            
            /* Alternating row styles if enabled */
            ${U?`
            .${o} .digiblocks-table tbody tr:nth-child(even) td {
                background-color: ${U};
            }
            ${ce?`
            .${o} .digiblocks-table tbody tr:nth-child(even) td:first-child {
                background-color: ${S};
            }
            `:""}
            `:""}
            
            /* Footer styles if enabled */
            ${y?`
            .${o} .digiblocks-table tfoot td {
                background-color: ${Q};
                color: ${be};
                ${Ce}
                ${We}
                vertical-align: middle;
                border: ${P}px ${h} ${$};
            }

            .${o} .digiblocks-table tfoot td .digiblocks-cell-content {
                justify-content: ${he(X)};
            }
            `:""}
            
            /* Responsive styles */
            @media (max-width: 767px) {
                /* Stack mode */
                ${Y==="stack"?`
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
                    border: ${P}px ${h} ${$};
					${Ne}
					transition: all 0.3s ease;
                }

				/* Hover effects */
				${I&&I.enable?`
				.${o} .digiblocks-table tbody tr:hover {
						${f}
					}
				`:""}
                
                .${o} .digiblocks-table tbody td {
                    display: flex;
                    justify-content: space-between;
					gap: 1rem;
                    text-align: right;
                    border-bottom: 1px solid ${$};
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
                
                ${ce?`
                .${o} .digiblocks-table tbody td:first-child {
                    text-align: center;
                    background-color: ${S};
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
                ${Y==="scroll"?`
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
            ${W&&W!=="none"&&oa[W]?oa[W].keyframes:""}

			/* Visibility Controls */
			${a.desktop?`
				@media (min-width: 992px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${a.tablet?`
				@media (min-width: 768px) and (max-width: 991px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${a.mobile?`
				@media (max-width: 767px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}
        `},k=()=>te.row===-1||te.col===-1?null:wp.element.createElement("div",{className:"digiblocks-cell-controls-toolbar"},wp.element.createElement("div",{className:"digiblocks-cell-controls-label"},ze("Selected Cell:","digiblocks")," Row ",te.row+1,", Column ",te.col+1),wp.element.createElement("div",{className:"digiblocks-cell-controls-buttons"},wp.element.createElement("div",{className:"components-button-group"},wp.element.createElement(vi,{className:"digiblocks-cell-control-check-button",icon:()=>wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"20",height:"20",fill:"currentColor"},wp.element.createElement("path",{d:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"})),label:ze("Add Check","digiblocks"),onClick:()=>{c(te.row,te.col,"stars"),B(te.row,te.col,"icon","check")}}),wp.element.createElement(vi,{className:"digiblocks-cell-control-cross-button",icon:()=>wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"20",height:"20",fill:"currentColor"},wp.element.createElement("path",{d:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"})),label:ze("Add Cross","digiblocks"),onClick:()=>{c(te.row,te.col,"stars"),B(te.row,te.col,"icon","cross")}}),wp.element.createElement(vi,{className:"digiblocks-cell-control-rating-button",icon:()=>wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:"16",height:"16",fill:"currentColor"},wp.element.createElement("path",{d:"M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327l4.898.696c.441.062.612.636.282.95l-3.522 3.356l.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"})),label:ze("Add Rating","digiblocks"),onClick:()=>{c(te.row,te.col,"icon"),r(!0)}}),se(te.row,te.col,"icon")||se(te.row,te.col,"stars")?wp.element.createElement(vi,{className:"digiblocks-cell-control-remove-button",icon:()=>wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",width:"16",height:"16",fill:"currentColor"},wp.element.createElement("path",{d:"M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"})),label:ze("Remove Icons","digiblocks"),onClick:()=>{c(te.row,te.col,"icon"),c(te.row,te.col,"stars")}}):null),De&&wp.element.createElement(Ik,{className:"digiblocks-cell-control-popover",onClose:()=>r(!1),position:"bottom center"},wp.element.createElement("div",{className:"digiblocks-rating-selector"},wp.element.createElement("h3",null,ze("Select Rating","digiblocks")),wp.element.createElement(Al,{isBlock:!0,onChange:m=>{B(te.row,te.col,"stars",m.toString()),r(!1)},__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},[1,2,3,4,5].map(m=>wp.element.createElement(Go,{key:`star-${m}`,value:m,label:m.toString()}))))))),G=(m,he)=>{if(!ue)return null;let j=`${m}-${he}`;if(!ue[j])return null;if(ue[j].icon)switch(ue[j].icon){case"check":return wp.element.createElement("span",{className:"digiblocks-cell-icon digiblocks-cell-check"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"20",height:"20",fill:"currentColor"},wp.element.createElement("path",{d:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"})));case"cross":return wp.element.createElement("span",{className:"digiblocks-cell-icon digiblocks-cell-cross"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"20",height:"20",fill:"currentColor"},wp.element.createElement("path",{d:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"})));default:return null}if(ue[j].stars){let Ne=parseInt(ue[j].stars)||0,f=[];for(let Ge=0;Ge<5;Ge++)Ge<Ne?f.push(wp.element.createElement("span",{key:`star-${Ge}`,className:"digiblocks-cell-icon"},wp.element.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor"},wp.element.createElement("path",{d:"M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327l4.898.696c.441.062.612.636.282.95l-3.522 3.356l.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"})))):f.push(wp.element.createElement("span",{key:`star-empty-${Ge}`,className:"digiblocks-cell-icon"},wp.element.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",opacity:"0.5"},wp.element.createElement("path",{d:"M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256l4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73l3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L7.538.792c-.197-.39-.73-.39-.927 0L4.427 5.124l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73z"}))));return wp.element.createElement("div",{className:"digiblocks-cell-stars"},f)}return null},d=()=>{switch(fe){case"options":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(at,{tab:"options",name:"general-settings",title:ze("Table Structure","digiblocks"),initialOpen:!0},wp.element.createElement(rl,{label:ze("Enable Header Row","digiblocks"),checked:_,onChange:()=>e({hasHeader:!_}),help:ze("Display the first row as table header.","digiblocks"),__nextHasNoMarginBottom:!0}),wp.element.createElement(rl,{label:ze("Enable Footer Row","digiblocks"),checked:y,onChange:()=>e({hasFooter:!y}),help:ze("Display the last row as table footer.","digiblocks"),__nextHasNoMarginBottom:!0}),wp.element.createElement(rl,{label:ze("First Column as Header","digiblocks"),checked:ce,onChange:()=>e({firstColHeader:!ce}),help:ze("Use the first column as a header column.","digiblocks"),__nextHasNoMarginBottom:!0})),wp.element.createElement(at,{tab:"options",name:"preset-settings",title:ze("Table Presets","digiblocks"),initialOpen:!1},wp.element.createElement(mn,{label:ze("Table Style Preset","digiblocks"),value:H,options:Se,onChange:m=>ge(m),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(at,{tab:"options",name:"responsive-settings",title:ze("Responsive Settings","digiblocks"),initialOpen:!1},wp.element.createElement(hn,{label:ze("Mobile Behavior","digiblocks"),__nextHasNoMarginBottom:!0},wp.element.createElement(Al,{value:Y,onChange:m=>e({responsiveMode:m}),help:ze("How the table should behave on small screens.","digiblocks"),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(Go,{value:"stack",label:ze("Stack","digiblocks"),"aria-label":ze("Stack Behavior","digiblocks")}),wp.element.createElement(Go,{value:"scroll",label:ze("Scroll","digiblocks"),"aria-label":ze("Scroll Behavior","digiblocks")})))));case"style":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(at,{tab:"style",name:"border-settings",title:ze("Borders & Shadow","digiblocks"),initialOpen:!0},wp.element.createElement(mn,{label:ze("Border Style","digiblocks"),value:h,options:Pe,onChange:m=>e({tableBorderStyle:m}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),h!=="none"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Rk,{label:ze("Border Width","digiblocks"),value:P,onChange:m=>e({tableBorderWidth:m}),min:1,max:10,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(un,{title:ze("Border Color","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:$,onChange:m=>e({tableBorderColor:m}),label:ze("Border Color","digiblocks")}]})),wp.element.createElement(mn,{label:ze("Border Collapse","digiblocks"),value:z,options:[{label:ze("Collapse","digiblocks"),value:"collapse"},{label:ze("Separate","digiblocks"),value:"separate"}],onChange:m=>e({tableBorderCollapse:m}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Nr,{label:ze("Border Radius","digiblocks")},wp.element.createElement(Hr,{values:u[A],onChange:m=>e({borderRadius:{...u,[A]:m}}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]})),wp.element.createElement(jk,{label:ze("Box Shadow","digiblocks"),normalValue:v,hoverValue:I,onNormalChange:m=>e({boxShadow:m}),onHoverChange:m=>e({boxShadowHover:m})})),wp.element.createElement(at,{tab:"style",name:"header-settings",title:ze("Header Styles","digiblocks"),initialOpen:!1},wp.element.createElement(un,{title:ze("Header Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:S,onChange:m=>e({headerBackgroundColor:m}),label:ze("Background Color","digiblocks")},{value:C,onChange:m=>e({headerTextColor:m}),label:ze("Text Color","digiblocks")}]}),wp.element.createElement(zr,{label:ze("Header Typography","digiblocks"),value:w,onChange:m=>e({headingTypography:m}),defaults:{fontSize:{desktop:18,tablet:16,mobile:15},fontSizeUnit:"px",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em"}}),wp.element.createElement(hn,{label:ze("Text Alignment","digiblocks"),__nextHasNoMarginBottom:!0},wp.element.createElement(Al,{value:Le,onChange:m=>e({headerAlignment:m}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(Go,{value:"left",label:ze("Left","digiblocks"),"aria-label":ze("Left","digiblocks")}),wp.element.createElement(Go,{value:"center",label:ze("Center","digiblocks"),"aria-label":ze("Center","digiblocks")}),wp.element.createElement(Go,{value:"right",label:ze("Right","digiblocks"),"aria-label":ze("Right","digiblocks")})))),wp.element.createElement(at,{tab:"style",name:"body-settings",title:ze("Body Styles","digiblocks"),initialOpen:!1},wp.element.createElement(un,{title:ze("Body Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:T,onChange:m=>e({bodyBackgroundColor:m}),label:ze("Background Color","digiblocks")},{value:U,onChange:m=>e({altRowBackgroundColor:m}),label:ze("Alternate Row Color","digiblocks")},{value:L,onChange:m=>e({bodyTextColor:m}),label:ze("Text Color","digiblocks")}]}),wp.element.createElement(zr,{label:ze("Body Typography","digiblocks"),value:V,onChange:m=>e({textTypography:m}),defaults:{fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em"}}),wp.element.createElement(hn,{label:ze("Text Alignment","digiblocks"),__nextHasNoMarginBottom:!0},wp.element.createElement(Al,{value:Me,onChange:m=>e({cellAlignment:m}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(Go,{value:"left",label:ze("Left","digiblocks"),"aria-label":ze("Left","digiblocks")}),wp.element.createElement(Go,{value:"center",label:ze("Center","digiblocks"),"aria-label":ze("Center","digiblocks")}),wp.element.createElement(Go,{value:"right",label:ze("Right","digiblocks"),"aria-label":ze("Right","digiblocks")})))),y&&wp.element.createElement(at,{tab:"style",name:"footer-settings",title:ze("Footer Styles","digiblocks"),initialOpen:!1},wp.element.createElement(un,{title:ze("Footer Colors","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:Q,onChange:m=>e({footerBackgroundColor:m}),label:ze("Background Color","digiblocks")},{value:be,onChange:m=>e({footerTextColor:m}),label:ze("Text Color","digiblocks")}]}),wp.element.createElement(zr,{label:ze("Footer Typography","digiblocks"),value:N,onChange:m=>e({contentTypography:m}),defaults:{fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em"}}),wp.element.createElement(hn,{label:ze("Text Alignment","digiblocks"),__nextHasNoMarginBottom:!0},wp.element.createElement(Al,{value:X,onChange:m=>e({footerAlignment:m}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(Go,{value:"left",label:ze("Left","digiblocks"),"aria-label":ze("Left","digiblocks")}),wp.element.createElement(Go,{value:"center",label:ze("Center","digiblocks"),"aria-label":ze("Center","digiblocks")}),wp.element.createElement(Go,{value:"right",label:ze("Right","digiblocks"),"aria-label":ze("Right","digiblocks")})))),wp.element.createElement(at,{tab:"style",name:"spacing",title:ze("Spacing","digiblocks"),initialOpen:!1},wp.element.createElement(Nr,{label:ze("Cell Padding","digiblocks")},wp.element.createElement(Hr,{values:s&&s[A]?s[A]:{top:15,right:15,bottom:15,left:15,unit:"px"},onChange:m=>e({cellPadding:{...s,[A]:m}})})),wp.element.createElement(Nr,{label:ze("Margin","digiblocks")},wp.element.createElement(Hr,{values:ne&&ne[A]?ne[A]:{top:0,right:0,bottom:30,left:0,unit:"px"},onChange:m=>e({margin:{...ne,[A]:m}})}))));case"advanced":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(at,{tab:"advanced",name:"animation",title:ze("Animation","digiblocks"),initialOpen:!0},wp.element.createElement(mn,{label:ze("Animation Effect","digiblocks"),value:W,options:Ue,onChange:m=>e({animation:m}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),W&&W!=="none"&&wp.element.createElement("div",{style:{marginTop:"10px"}},wp.element.createElement(vi,{variant:"secondary",isSecondary:!0,onClick:xe,style:{width:"100%"}},ze("Preview Animation","digiblocks")))),wp.element.createElement(at,{tab:"advanced",name:"visibility",title:ze("Visibility","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control__help",style:{padding:"12px",backgroundColor:"#f0f6fc",border:"1px solid #c3ddfd",borderRadius:"4px",marginBottom:"16px"}},wp.element.createElement("strong",null,ze("Editor Note:","digiblocks")),wp.element.createElement("br",null),ze("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.","digiblocks")),wp.element.createElement(rl,{label:ze("Hide on Desktop","digiblocks"),checked:a.desktop,onChange:m=>e({visibility:{...a,desktop:m}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(rl,{label:ze("Hide on Tablet","digiblocks"),checked:a.tablet,onChange:m=>e({visibility:{...a,tablet:m}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(rl,{label:ze("Hide on Mobile","digiblocks"),checked:a.mobile,onChange:m=>e({visibility:{...a,mobile:m}}),__nextHasNoMarginBottom:!0})),wp.element.createElement(at,{tab:"advanced",name:"additional",title:ze("Additional","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control html-anchor-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"html-anchor"},ze("HTML anchor","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"html-anchor",value:O||"",onChange:m=>e({anchor:m.target.value}),"aria-describedby":"html-anchor-help",autoCapitalize:"none",autoComplete:"off"})),wp.element.createElement("p",{id:"html-anchor-help",className:"components-base-control__help"},ze(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`,"digiblocks")," ",wp.element.createElement("a",{className:"components-external-link",href:"https://wordpress.org/documentation/article/page-jumps/",target:"_blank",rel:"external noreferrer noopener"},wp.element.createElement("span",{className:"components-external-link__contents"},ze("Learn more about anchors","digiblocks")),wp.element.createElement("span",{className:"components-external-link__icon","aria-label":"(opens in a new tab)"},"\u2197")))),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"additional-css-classes"},ze("Additional CSS class(es)","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"additional-css-classes",value:le||"",onChange:m=>e({customClasses:m.target.value}),"aria-describedby":"additional-css-classes-help",autoComplete:"off"})),wp.element.createElement("p",{id:"additional-css-classes-help",className:"components-base-control__help"},ze("Separate multiple classes with spaces.","digiblocks")))));default:return null}},re=()=>wp.element.createElement("table",{className:"digiblocks-table"},_&&l.length>0&&wp.element.createElement("thead",null,wp.element.createElement("tr",null,l[0].map((m,he)=>wp.element.createElement("th",{key:`header-${he}`,onClick:()=>E(0,he),className:te.row===0&&te.col===he?"digiblocks-selected-cell":""},wp.element.createElement("div",{className:"digiblocks-cell-content"},G(0,he),wp.element.createElement($r,{tagName:"span",value:m,onChange:j=>qe(j,0,he),placeholder:ze("Header text","digiblocks")})))))),wp.element.createElement("tbody",null,l.slice(_?1:0,y?l.length-1:l.length).map((m,he)=>{let j=_?he+1:he;return wp.element.createElement("tr",{key:`row-${j}`},m.map((Ne,f)=>wp.element.createElement("td",{key:`cell-${j}-${f}`,"data-label":_&&l[0]&&l[0][f]?l[0][f]:"",onClick:()=>E(j,f),className:te.row===j&&te.col===f?"digiblocks-selected-cell":""},wp.element.createElement("div",{className:"digiblocks-cell-content"},G(j,f),wp.element.createElement($r,{tagName:"span",value:Ne,onChange:Ge=>qe(Ge,j,f),placeholder:ze("Cell text","digiblocks")})))))})),y&&l.length>1&&wp.element.createElement("tfoot",null,wp.element.createElement("tr",null,l[l.length-1].map((m,he)=>wp.element.createElement("td",{key:`footer-${he}`,onClick:()=>E(l.length-1,he),className:te.row===l.length-1&&te.col===he?"digiblocks-selected-cell":""},wp.element.createElement("div",{className:"digiblocks-cell-content"},G(l.length-1,he),wp.element.createElement($r,{tagName:"span",value:m,onChange:j=>qe(j,l.length-1,he),placeholder:ze("Footer text","digiblocks")}))))))),x=Mk({className:`digiblocks-table-block ${o} ${le||""}`,id:O||null});return!l||!Array.isArray(l)||l.length===0?wp.element.createElement("div",{...x},wp.element.createElement("p",null,ze("Initializing table...","digiblocks"))):wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Pk,null,wp.element.createElement(Pg,null,wp.element.createElement(cl,{icon:"table-row-before",label:ze("Add Row Before","digiblocks"),onClick:()=>{te.row>=0?Be(te.row-1):Be(0)}}),wp.element.createElement(cl,{icon:"table-row-after",label:ze("Add Row After","digiblocks"),onClick:()=>{te.row>=0?Be(te.row):Be(l.length-1)}}),wp.element.createElement(cl,{icon:"table-row-delete",label:ze("Delete Row","digiblocks"),onClick:()=>{te.row>=0&&(Xe(te.row),to({row:-1,col:-1}))},disabled:l.length<=1||te.row<0})),wp.element.createElement(Pg,null,wp.element.createElement(cl,{icon:"table-col-before",label:ze("Add Column Before","digiblocks"),onClick:()=>{te.col>=0?q(te.col-1):q(0)}}),wp.element.createElement(cl,{icon:"table-col-after",label:ze("Add Column After","digiblocks"),onClick:()=>{te.col>=0?q(te.col):q(l[0].length-1)}}),wp.element.createElement(cl,{icon:"table-col-delete",label:ze("Delete Column","digiblocks"),onClick:()=>{te.col>=0&&(ye(te.col),to({row:-1,col:-1}))},disabled:l[0].length<=1||te.col<0}))),wp.element.createElement(Dk,null,wp.element.createElement(Uk,{tabs:ee,activeTab:fe,onSelect:je},d())),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:M()}}),wp.element.createElement("div",{...x},wp.element.createElement("div",{className:"digiblocks-table-instructions"},wp.element.createElement("p",null,ze("Click on any cell to select it and add icons, checks, crosses, or star ratings.","digiblocks"))),te.row!==-1&&te.col!==-1&&k(),wp.element.createElement("div",{className:"digiblocks-table-container"},re()),wp.element.createElement("div",{className:"digiblocks-table-controls"},wp.element.createElement("div",{className:"digiblocks-row-controls"},wp.element.createElement(vi,{isPrimary:!0,icon:"plus",onClick:()=>Be(l.length-1)},ze("Add Row","digiblocks"))),wp.element.createElement("div",{className:"digiblocks-col-controls"},wp.element.createElement(vi,{isPrimary:!0,icon:"plus",onClick:()=>q(l[0].length-1)},ze("Add Column","digiblocks"))))))},Ig=Vk;var{__:Av}=window.wp.i18n,{useBlockProps:ex,RichText:Mr}=window.wp.blockEditor,Fk=({attributes:ie})=>{let{id:e,anchor:K,customClasses:o,tableData:O,hasHeader:a,hasFooter:le,responsiveMode:l,animation:_,cellControls:y}=ie,$=["digiblocks-table-block",e,`responsive-${l}`,_!=="none"?`animate-${_}`:"",o||""].filter(Boolean).join(" "),P=(z,S,C)=>{let w=`${z}-${S}`;return y[w]&&y[w][C]?y[w][C]:null},h=(z,S)=>{let C=`${z}-${S}`;if(!y[C])return null;if(y[C].icon)switch(y[C].icon){case"check":return wp.element.createElement("span",{className:"digiblocks-cell-icon digiblocks-cell-check"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"20",height:"20",fill:"currentColor"},wp.element.createElement("path",{d:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"})));case"cross":return wp.element.createElement("span",{className:"digiblocks-cell-icon digiblocks-cell-cross"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"20",height:"20",fill:"currentColor"},wp.element.createElement("path",{d:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"})));default:return null}if(y[C].stars){let w=parseInt(y[C].stars),T=[];for(let U=0;U<5;U++)U<w?T.push(wp.element.createElement("span",{key:`star-${U}`,className:"digiblocks-cell-icon"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor"},wp.element.createElement("path",{d:"M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327l4.898.696c.441.062.612.636.282.95l-3.522 3.356l.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"})))):T.push(wp.element.createElement("span",{key:`star-empty-${U}`,className:"digiblocks-cell-icon"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",opacity:"0.5"},wp.element.createElement("path",{d:"M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256l4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73l3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L7.538.792c-.197-.39-.73-.39-.927 0L4.427 5.124l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73z"}))));return wp.element.createElement("div",{className:"digiblocks-cell-stars"},T)}return null};return wp.element.createElement("div",{...{className:$,id:K||null}},wp.element.createElement("div",{className:"digiblocks-table-container"},wp.element.createElement("table",{className:"digiblocks-table"},a&&wp.element.createElement("thead",null,wp.element.createElement("tr",null,O[0].map((z,S)=>wp.element.createElement("th",{key:`header-${S}`},wp.element.createElement("div",{className:"digiblocks-cell-content"},h(0,S),wp.element.createElement(Mr.Content,{tagName:"span",value:z})))))),wp.element.createElement("tbody",null,O.slice(a?1:0,le?O.length-1:O.length).map((z,S)=>{let C=a?S+1:S;return wp.element.createElement("tr",{key:`row-${C}`},z.map((w,T)=>wp.element.createElement("td",{key:`cell-${C}-${T}`,"data-label":a?O[0][T]:""},wp.element.createElement("div",{className:"digiblocks-cell-content"},h(C,T),wp.element.createElement(Mr.Content,{tagName:"span",value:w})))))})),le&&wp.element.createElement("tfoot",null,wp.element.createElement("tr",null,O[O.length-1].map((z,S)=>wp.element.createElement("td",{key:`footer-${S}`},wp.element.createElement("div",{className:"digiblocks-cell-content"},h(O.length-1,S),wp.element.createElement(Mr.Content,{tagName:"span",value:z})))))))))},Lg=Fk;var{__:fn}=window.wp.i18n,{registerBlockType:Ek}=window.wp.blocks,{getBlockActiveStatus:Wk}=window.wp.digiBlocks;Ek("digiblocks/table",{apiVersion:2,title:digiBlocksData.blocks.table.title,category:"digiblocks",icon:{src:()=>{let{viewbox:ie,path:e}=digiBlocksData.blocks.table.icon;return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${ie}`,className:"digiblocks-editor-icons"},wp.element.createElement("path",{d:e}))}},description:digiBlocksData.blocks.table.description,keywords:[fn("table","digiblocks"),fn("comparison","digiblocks"),fn("grid","digiblocks"),fn("cells","digiblocks")],supports:{inserter:!!Wk("table"),html:!1,className:!1,customClassName:!1,anchor:!1},attributes:{id:{type:"string",default:""},anchor:{type:"string",default:""},visibility:{type:"object",default:{desktop:!1,tablet:!1,mobile:!1}},customClasses:{type:"string",default:""},tableData:{type:"array",default:[["Header 1","Header 2","Header 3"],["Cell 1,1","Cell 1,2","Cell 1,3"],["Cell 2,1","Cell 2,2","Cell 2,3"]]},hasHeader:{type:"boolean",default:!0},hasFooter:{type:"boolean",default:!1},tableBorderColor:{type:"string",default:"#e0e0e0"},tableBorderWidth:{type:"number",default:1},tableBorderStyle:{type:"string",default:"solid"},cellPadding:{type:"object",default:{desktop:{top:15,right:15,bottom:15,left:15,unit:"px"},tablet:{top:12,right:12,bottom:12,left:12,unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},tableBorderCollapse:{type:"string",default:"collapse"},headerBackgroundColor:{type:"string",default:"#f8f9fa"},headerTextColor:{type:"string",default:"#333333"},headingTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:18,tablet:16,mobile:15},fontSizeUnit:"px",fontWeight:"600",fontStyle:"normal",textTransform:"none",textDecoration:"none",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}},bodyBackgroundColor:{type:"string",default:"#ffffff"},altRowBackgroundColor:{type:"string",default:""},bodyTextColor:{type:"string",default:"#666666"},textTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",fontWeight:"",fontStyle:"normal",textTransform:"",textDecoration:"",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}},footerBackgroundColor:{type:"string",default:"#f8f9fa"},footerTextColor:{type:"string",default:"#333333"},contentTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",fontWeight:"600",fontStyle:"normal",textTransform:"none",textDecoration:"none",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}},borderRadius:{type:"object",default:{desktop:{top:8,right:8,bottom:8,left:8,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},boxShadow:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.1)",horizontal:0,vertical:2,blur:10,spread:0,position:"outset"}},boxShadowHover:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:10,blur:25,spread:0,position:"outset"}},margin:{type:"object",default:{desktop:{top:0,right:0,bottom:30,left:0,unit:"px"},tablet:{top:0,right:0,bottom:25,left:0,unit:"px"},mobile:{top:0,right:0,bottom:20,left:0,unit:"px"}}},cellAlignment:{type:"string",default:"left"},headerAlignment:{type:"string",default:"left"},footerAlignment:{type:"string",default:"left"},tablePreset:{type:"string",default:"default"},responsiveMode:{type:"string",default:"stack"},animation:{type:"string",default:"none"},firstColHeader:{type:"boolean",default:!1},cellControls:{type:"object",default:{}}},example:{attributes:{tableData:[["Feature","Basic","Premium"],["Storage","10GB","1TB"],["Users","1","Unlimited"],["Support","Email","24/7 Phone"],["Price","$9.99","$29.99"]],hasHeader:!0,headerBackgroundColor:"#f8f9fa",bodyBackgroundColor:"#ffffff",altRowBackgroundColor:"#f9f9f9"}},edit:Ig,save:Lg});var{__:$e}=window.wp.i18n,{useBlockProps:qk,RichText:Dr,InspectorControls:Gk,PanelColorSettings:kn,MediaUpload:Qk,MediaUploadCheck:Jk,URLPopover:lx}=window.wp.blockEditor,{SelectControl:ta,RangeControl:ia,Button:Dt,ToggleControl:xi,Tooltip:vn,TextControl:Yk,Popover:Og,__experimentalToggleGroupControl:jg,__experimentalToggleGroupControlOption:la,BaseControl:Ug,Icon:ax}=window.wp.components,{useState:aa,useEffect:Pr,useRef:Zk,Fragment:nx}=window.wp.element,{useBlockId:Kk,getDimensionCSS:qt,animations:Rr,animationPreview:Vg}=digi.utils,{tabIcons:Ir}=digi.icons,{ResponsiveControl:Io,DimensionControl:Gt,TypographyControl:Lr,BoxShadowControl:Xk,CustomTabPanel:Ak,TabPanelBody:ht}=digi.components,Fg={facebook:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"})),twitter:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"})),linkedin:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"})),instagram:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"})),pinterest:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z"})),youtube:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"})),dribbble:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M86.6 64l85.2 85.2C194.5 121.7 208 86.4 208 48c0-14.7-2-28.9-5.7-42.4C158.6 15 119 35.5 86.6 64zM64 86.6C35.5 119 15 158.6 5.6 202.3C19.1 206 33.3 208 48 208c38.4 0 73.7-13.5 101.3-36.1L64 86.6zM256 0c-7.3 0-14.6 .3-21.8 .9C238 16 240 31.8 240 48c0 47.3-17.1 90.5-45.4 124L256 233.4 425.4 64C380.2 24.2 320.9 0 256 0zM48 240c-16.2 0-32-2-47.1-5.8C.3 241.4 0 248.7 0 256c0 64.9 24.2 124.2 64 169.4L233.4 256 172 194.6C138.5 222.9 95.3 240 48 240zm463.1 37.8c.6-7.2 .9-14.5 .9-21.8c0-64.9-24.2-124.2-64-169.4L278.6 256 340 317.4c33.4-28.3 76.7-45.4 124-45.4c16.2 0 32 2 47.1 5.8zm-4.7 31.9C492.9 306 478.7 304 464 304c-38.4 0-73.7 13.5-101.3 36.1L448 425.4c28.5-32.3 49.1-71.9 58.4-115.7zM340.1 362.7C317.5 390.3 304 425.6 304 464c0 14.7 2 28.9 5.7 42.4C353.4 497 393 476.5 425.4 448l-85.2-85.2zM317.4 340L256 278.6 86.6 448c45.1 39.8 104.4 64 169.4 64c7.3 0 14.6-.3 21.8-.9C274 496 272 480.2 272 464c0-47.3 17.1-90.5 45.4-124z"})),github:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 496 512",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"})),behance:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M232 237.2c31.8-15.2 48.4-38.2 48.4-74 0-70.6-52.6-87.8-113.3-87.8H0v354.4h171.8c64.4 0 124.9-30.9 124.9-102.9 0-44.5-21.1-77.4-64.7-89.7zM77.9 135.9H151c28.1 0 53.4 7.9 53.4 40.5 0 30.1-19.7 42.2-47.5 42.2h-79v-82.7zm83.3 233.7H77.9V272h84.9c34.3 0 56 14.3 56 50.6 0 35.8-25.9 47-57.6 47zm358.5-240.7H376V94h143.7v34.9zM576 305.2c0-75.9-44.4-139.2-124.9-139.2-78.2 0-131.3 58.8-131.3 135.8 0 79.9 50.3 134.7 131.3 134.7 61.3 0 101-27.6 120.1-86.3H509c-6.7 21.9-34.3 33.5-55.7 33.5-41.3 0-63-24.2-63-65.3h185.1c.3-4.2 .6-8.7 .6-13.2zM390.4 274c2.3-33.7 24.7-54.8 58.5-54.8 35.4 0 53.2 20.8 56.2 54.8H390.4z"})),vimeo:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M447.8 153.6c-2 43.6-32.4 103.3-91.4 179.1-60.9 79.2-112.4 118.8-154.6 118.8-26.1 0-48.2-24.1-66.3-72.3C100.3 250 85.3 174.3 56.2 174.3c-3.4 0-15.1 7.1-35.2 21.1L0 168.2c51.6-45.3 100.9-95.7 131.8-98.5 34.9-3.4 56.3 20.5 64.4 71.5 28.7 181.5 41.4 208.9 93.6 126.7 18.7-29.6 28.8-52.1 30.2-67.6 4.8-45.9-35.8-42.8-63.3-31 22-72.1 64.1-107.1 126.2-105.1 45.8 1.2 67.5 31.1 64.9 89.4z"})),tiktok:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"})),email:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"})),website:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512",width:"1em",height:"1em"},wp.element.createElement("path",{d:"M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"}))},e0=wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},wp.element.createElement("path",{d:"M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"})),o0=({attributes:ie,setAttributes:e,clientId:K})=>{let{id:o,anchor:O,visibility:a,customClasses:le,members:l,columns:_,gutter:y,layout:$,alignment:P,imageStyle:h,imageSize:s,imageBorderRadius:z,imageBorderWidth:S,imageBorderColor:C,imageBorderStyle:w,typography:T,textTypography:U,contentTypography:L,nameColor:V,positionColor:Q,bioColor:be,iconColor:N,iconHoverColor:u,iconSize:v,iconSpacing:I,iconBackgroundColor:ne,iconBackgroundHoverColor:Me,iconBorderRadius:Le,iconPadding:X,boxBackgroundColor:H,boxBorderColor:Y,boxBorderRadius:W,boxBorderWidth:ce,boxBorderStyle:ue,boxPadding:A,boxMargin:J,boxShadow:me,boxShadowHover:oe,animation:fe,showName:je,showPosition:te,showBio:to,showSocial:De}=ie;Kk(o,K,e);let[r,D]=aa(()=>{if(window.digi.uiState){let p=window.digi.uiState.getActiveTab(K);if(p)return p}return"options"}),[xe,Pe]=aa(null),[Se,Ue]=aa(null),[ee,Be]=aa(window.digi.responsiveState.activeDevice),[Xe,q]=aa(!1);Pr(()=>window.digi.responsiveState.subscribe(g=>{Be(g)}),[]),Pr(()=>{if(l&&l.length>0){let p=l.map((g,He)=>{if(!g.id)return{...g,id:`team-member-${K.substr(0,8)}-${He}`};if(g.socials&&g.socials.length>0){let Je=g.socials.map((i,F)=>i.id?i:{...i,id:`social-${He}-${F}`});return{...g,socials:Je}}return g});JSON.stringify(p)!==JSON.stringify(l)&&e({members:p})}},[K,l,e]);let ye=Zk(null);Pr(()=>{if(fe&&fe!=="none"){let p=setTimeout(()=>{Vg(o,fe,Rr,ye)},100);return()=>clearTimeout(p)}},[fe]);let qe=()=>{Vg(o,fe,Rr,ye)},E=[{label:$e("Default","digiblocks"),value:"default"},{label:$e("Circle","digiblocks"),value:"circle"},{label:$e("Square","digiblocks"),value:"square"},{label:$e("Rounded","digiblocks"),value:"rounded"}],se=[{label:$e("None","digiblocks"),value:"none"},{label:$e("Solid","digiblocks"),value:"solid"},{label:$e("Dotted","digiblocks"),value:"dotted"},{label:$e("Dashed","digiblocks"),value:"dashed"},{label:$e("Double","digiblocks"),value:"double"},{label:$e("Groove","digiblocks"),value:"groove"},{label:$e("Ridge","digiblocks"),value:"ridge"},{label:$e("Inset","digiblocks"),value:"inset"},{label:$e("Outset","digiblocks"),value:"outset"}],B=[{label:$e("Facebook","digiblocks"),value:"facebook"},{label:$e("Twitter","digiblocks"),value:"twitter"},{label:$e("LinkedIn","digiblocks"),value:"linkedin"},{label:$e("Instagram","digiblocks"),value:"instagram"},{label:$e("Pinterest","digiblocks"),value:"pinterest"},{label:$e("YouTube","digiblocks"),value:"youtube"},{label:$e("Dribbble","digiblocks"),value:"dribbble"},{label:$e("GitHub","digiblocks"),value:"github"},{label:$e("Behance","digiblocks"),value:"behance"},{label:$e("Vimeo","digiblocks"),value:"vimeo"},{label:$e("TikTok","digiblocks"),value:"tiktok"},{label:$e("Email","digiblocks"),value:"email"},{label:$e("Website","digiblocks"),value:"website"}],c=[{label:$e("None","digiblocks"),value:"none"},...Object.keys(Rr).map(p=>({label:p.replace(/-/g," ").replace(/\b\w/g,g=>g.toUpperCase()),value:p}))],ge=[{name:"options",title:$e("Options","digiblocks"),icon:Ir.optionsIcon},{name:"style",title:$e("Style","digiblocks"),icon:Ir.styleIcon},{name:"advanced",title:$e("Advanced","digiblocks"),icon:Ir.advancedIcon}],M=()=>{let p=`team-member-${K.substr(0,8)}-${Date.now()}`,g={id:p,name:$e("New Team Member","digiblocks"),position:$e("Position","digiblocks"),bio:$e("Add a short bio about this team member.","digiblocks"),image:{url:"",id:"",alt:""},socials:[{id:`social-${p}-1`,network:"facebook",url:"https://facebook.com"},{id:`social-${p}-2`,network:"twitter",url:"https://twitter.com"}]};e({members:[...l,g]})},k=p=>{let g=[...l];g.splice(p,1),e({members:g})},G=p=>{let g=l[p],He=Date.now(),Je=`team-member-${K.substr(0,8)}-${He}`,i={...g,id:Je,socials:g.socials?g.socials.map((Fe,po)=>({...Fe,id:`social-${Je}-${po}`})):[]},F=[...l];F.splice(p+1,0,i),e({members:F})},d=p=>{if(p===0)return;let g=[...l],He=g[p];g.splice(p,1),g.splice(p-1,0,He),e({members:g})},re=p=>{if(p===l.length-1)return;let g=[...l],He=g[p];g.splice(p,1),g.splice(p+1,0,He),e({members:g})},x=(p,g,He)=>{let Je=[...l];Je[p]={...Je[p],[g]:He},e({members:Je})},m=(p,g)=>{let He=[...l];He[p].image||(He[p].image={}),He[p].image={url:g.url||"",id:g.id||"",alt:g.alt||""},e({members:He})},he=p=>{Pe({memberIndex:p,target:document.getElementById(`add-social-${p}`)})},j=()=>{Pe(null)},Ne=(p,g)=>{let He=[...l],Je=He[p],i=Je.socials||[];i.push({id:`social-${Je.id}-${Date.now()}`,network:g,url:""}),He[p]={...Je,socials:i},e({members:He}),j(),setTimeout(()=>{let F=i.length-1;go(p,F)},100)},f=()=>{if(!xe)return null;let{memberIndex:p,target:g}=xe,He=l[p].socials?l[p].socials.map(i=>i.network):[],Je=B.filter(i=>!He.includes(i.value));return wp.element.createElement(Og,{anchor:g,onClose:j,position:"bottom center",expandOnMobile:!0,className:"digiblocks-team-social-select-popover"},wp.element.createElement("div",{style:{padding:"12px",width:"280px",maxHeight:"400px",overflowY:"auto"}},wp.element.createElement("div",{style:{marginBottom:"10px",fontWeight:"bold"}},$e("Select Social Network","digiblocks")),wp.element.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"8px"}},Je.map(i=>wp.element.createElement(Dt,{key:i.value,variant:"secondary",onClick:()=>Ne(p,i.value),style:{display:"flex",alignItems:"center",justifyContent:"flex-start",padding:"8px",gap:"8px"}},wp.element.createElement("span",{style:{display:"inline-flex",alignItems:"center"}},Fg[i.value]),wp.element.createElement("span",null,i.label))))))},Ge=(p,g)=>{let He=[...l],Je=He[p],i=[...Je.socials];i.splice(g,1),He[p]={...Je,socials:i},e({members:He})},We=(p,g,He,Je)=>{let i=[...l],F=i[p],Fe=[...F.socials];Fe[g]={...Fe[g],[He]:Je},i[p]={...F,socials:Fe},e({members:i})},go=(p,g)=>{Ue({memberIndex:p,socialIndex:g,target:document.getElementById(`social-link-${p}-${g}`)})},t=()=>{Ue(null)},b=()=>{let p=ee,g={desktop:`calc((100% - ${(_.desktop-1)*y.desktop}px) / ${_.desktop})`,tablet:`calc((100% - ${(_.tablet-1)*y.tablet}px) / ${_.tablet})`,mobile:`calc((100% - ${(_.mobile-1)*y.mobile}px) / ${_.mobile})`},He="box-shadow: none;";me&&me.enable&&(He=`box-shadow: ${me.position==="inset"?"inset ":""}${me.horizontal}px ${me.vertical}px ${me.blur}px ${me.spread}px ${me.color};`);let Je="";oe&&oe.enable&&(Je=`box-shadow: ${oe.position==="inset"?"inset ":""}${oe.horizontal}px ${oe.vertical}px ${oe.blur}px ${oe.spread}px ${oe.color};`);let i="";T&&(T.fontFamily&&(i+=`font-family: ${T.fontFamily};`),T.fontSize&&T.fontSize[p]&&(i+=`font-size: ${T.fontSize[p]}${T.fontSizeUnit||"px"};`),T.fontWeight&&(i+=`font-weight: ${T.fontWeight};`),T.fontStyle&&(i+=`font-style: ${T.fontStyle};`),T.textTransform&&(i+=`text-transform: ${T.textTransform};`),T.textDecoration&&(i+=`text-decoration: ${T.textDecoration};`),T.lineHeight&&T.lineHeight[p]&&(i+=`line-height: ${T.lineHeight[p]}${T.lineHeightUnit||"em"};`),T.letterSpacing&&T.letterSpacing[p]&&(i+=`letter-spacing: ${T.letterSpacing[p]}${T.letterSpacingUnit||"px"};`));let F="";U&&(U.fontFamily&&(F+=`font-family: ${U.fontFamily};`),U.fontSize&&U.fontSize[p]&&(F+=`font-size: ${U.fontSize[p]}${U.fontSizeUnit||"px"};`),U.fontWeight&&(F+=`font-weight: ${U.fontWeight};`),U.fontStyle&&(F+=`font-style: ${U.fontStyle};`),U.textTransform&&(F+=`text-transform: ${U.textTransform};`),U.textDecoration&&(F+=`text-decoration: ${U.textDecoration};`),U.lineHeight&&U.lineHeight[p]&&(F+=`line-height: ${U.lineHeight[p]}${U.lineHeightUnit||"em"};`),U.letterSpacing&&U.letterSpacing[p]&&(F+=`letter-spacing: ${U.letterSpacing[p]}${U.letterSpacingUnit||"px"};`));let Fe="";L&&(L.fontFamily&&(Fe+=`font-family: ${L.fontFamily};`),L.fontSize&&L.fontSize[p]&&(Fe+=`font-size: ${L.fontSize[p]}${L.fontSizeUnit||"px"};`),L.fontWeight&&(Fe+=`font-weight: ${L.fontWeight};`),L.fontStyle&&(Fe+=`font-style: ${L.fontStyle};`),L.textTransform&&(Fe+=`text-transform: ${L.textTransform};`),L.textDecoration&&(Fe+=`text-decoration: ${L.textDecoration};`),L.lineHeight&&L.lineHeight[p]&&(Fe+=`line-height: ${L.lineHeight[p]}${L.lineHeightUnit||"em"};`),L.letterSpacing&&L.letterSpacing[p]&&(Fe+=`letter-spacing: ${L.letterSpacing[p]}${L.letterSpacingUnit||"px"};`));let po;h==="circle"?po="border-radius: 50%;":h==="square"?po="border-radius: 0;":h==="rounded"?po="border-radius: 8px;":po=`${qt(z,"border-radius",p)}`;let R=`${qt(W,"border-radius",p)}`,Ae=`${qt(ce,"border-width",p)}`,co=`${qt(A,"padding",p)}`,uo=`${qt(J,"margin",p)}`,ho=`${qt(S,"border-width",p)}`,fo=`${qt(Le,"border-radius",p)}`,mo=`${qt(X,"border-width",p)}`;return`
            /* Team Block - ${o} */
            .${o} {
                ${uo}
            }
            
            /* Grid Layout */
            .${o} .digiblocks-team-container {
                display: flex;
                flex-wrap: wrap;
                gap: ${y[p]}px;
                justify-content: ${P==="center"?"center":P==="right"?"flex-end":"flex-start"};
            }
            
            /* List Layout */
            .${o}.layout-list .digiblocks-team-container {
                display: flex;
				flex-direction: column;
				gap: ${y[p]}px;
            }
            
            .${o}.layout-list .digiblocks-team-member {
                display: flex;
                align-items: center;
                width: 100%;
				gap: ${y[p]}px;
            }
            
            .${o}.layout-list .digiblocks-team-member-image {
                margin: 0;
            }
            
            .${o}.layout-list .digiblocks-team-member-content {
				flex: 1;
                text-align: left !important;
            }

			.${o}.layout-list .digiblocks-team-member-social {
				justify-content: flex-start;
			}
            
            /* Team Member */
            .${o} .digiblocks-team-member {
				display: flex;
				align-items: ${P==="center"?"center":P==="right"?"flex-end":"flex-start"};
				gap: 15px;
                ${$==="grid"?`width: ${g[p]}; flex-direction: column;`:""}
                text-align: ${P};
                position: relative;
				background-color: ${H||"transparent"};
				${ue!=="none"?`
					border-style: ${ue};
					border-color: ${Y||"#e0e0e0"};
					${Ae}
				`:""}
				${R}
				${He}
				${co}
				transition: all 0.3s ease;
            }
            
            /* Hover effects */
            ${oe&&oe.enable?`
                .${o} .digiblocks-team-member:hover {
                    ${Je}
                }
            `:""}
            
            /* Team Member Image */
            .${o} .digiblocks-team-member-image {
                width: ${s[p]}px;
                height: ${s[p]}px;
				max-width: 100%;
                ${po}
                overflow: hidden;
                display: flex;
                ${w!=="none"?`
					${ho}
					border-style: ${w};
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
                color: ${Q};
                margin-bottom: 10px;
                ${F}
            }
            
            /* Team Member Bio */
            .${o} .digiblocks-team-member-bio {
                color: ${be};
                margin-bottom: ${De?"15px":"0"};
                ${Fe}
            }
            
            /* Team Member Social */
            .${o} .digiblocks-team-member-social {
				display: flex;
				align-items: center;
				justify-content: ${P==="center"?"center":P==="right"?"flex-end":"flex-start"};
				gap: ${I[p]}px;
				flex-wrap: wrap;
			}
			
			.${o} .digiblocks-team-member-social-icon {
				color: ${N};
				display: flex;
				align-items: center;
				justify-content: center;
				${fo}
				background-color: ${ne};
				${mo}
				transition: all 0.3s ease;
				cursor: pointer;
				position: relative;
				z-index: 1;
			}
			
			.${o} .digiblocks-team-member-social-icon:hover {
				color: ${u};
				${Me?`background-color: ${Me};`:""}
			}
			
			.${o} .digiblocks-team-member-social-icon svg {
				width: ${v[p]?`${v[p]}px`:"1.2rem"};
				height: ${v[p]?`${v[p]}px`:"1.2rem"};
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
			${a.desktop?`
				@media (min-width: 992px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${a.tablet?`
				@media (min-width: 768px) and (max-width: 991px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${a.mobile?`
				@media (max-width: 767px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}
        `},Ce=()=>l.map((p,g)=>wp.element.createElement("div",{key:p.id,className:"digiblocks-team-member"},wp.element.createElement("div",{className:"digiblocks-team-member-controls"},wp.element.createElement(vn,{text:$e("Move Up","digiblocks")},wp.element.createElement(Dt,{className:"digiblocks-team-member-move-up",onClick:()=>d(g),icon:"arrow-up-alt2",disabled:g===0,isSmall:!0})),wp.element.createElement(vn,{text:$e("Move Down","digiblocks")},wp.element.createElement(Dt,{className:"digiblocks-team-member-move-down",onClick:()=>re(g),icon:"arrow-down-alt2",disabled:g===l.length-1,isSmall:!0})),wp.element.createElement(vn,{text:$e("Duplicate","digiblocks")},wp.element.createElement(Dt,{className:"digiblocks-team-member-duplicate",onClick:()=>G(g),icon:"admin-page",isSmall:!0})),wp.element.createElement(vn,{text:$e("Remove","digiblocks")},wp.element.createElement(Dt,{className:"digiblocks-team-member-remove",onClick:()=>k(g),icon:"trash",isSmall:!0,disabled:l.length<=1}))),je&&wp.element.createElement("div",{className:"digiblocks-team-member-image"},wp.element.createElement(Jk,null,wp.element.createElement(Qk,{onSelect:He=>m(g,He),allowedTypes:["image"],value:p.image&&p.image.id?p.image.id:"",render:({open:He})=>wp.element.createElement("div",{className:"digiblocks-image-upload-container"},p.image&&p.image.url?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("img",{src:p.image.url,alt:p.image.alt||p.name,onClick:He}),wp.element.createElement("button",{className:"digiblocks-change-image-button",onClick:He},$e("Change Image","digiblocks"))):wp.element.createElement("div",{className:"digiblocks-team-member-placeholder",onClick:He},$e("Choose Image","digiblocks")))}))),wp.element.createElement("div",{className:"digiblocks-team-member-content"},je&&wp.element.createElement(Dr,{tagName:"h3",className:"digiblocks-team-member-name",value:p.name,onChange:He=>x(g,"name",He),placeholder:$e("Team Member Name","digiblocks"),allowedFormats:["core/bold","core/italic"]}),te&&wp.element.createElement(Dr,{tagName:"div",className:"digiblocks-team-member-position",value:p.position,onChange:He=>x(g,"position",He),placeholder:$e("Position or Role","digiblocks"),allowedFormats:["core/bold","core/italic"]}),to&&wp.element.createElement(Dr,{tagName:"div",className:"digiblocks-team-member-bio",value:p.bio,onChange:He=>x(g,"bio",He),placeholder:$e("Add a short bio about this team member.","digiblocks"),allowedFormats:["core/bold","core/italic","core/link"]}),De&&wp.element.createElement("div",{className:"digiblocks-team-member-social"},p.socials&&p.socials.map((He,Je)=>wp.element.createElement("div",{key:He.id,className:"digiblocks-team-member-social-icon-wrapper"},wp.element.createElement("div",{id:`social-link-${g}-${Je}`,className:"digiblocks-team-member-social-icon",onClick:()=>go(g,Je)},Fg[He.network]),wp.element.createElement(Dt,{className:"digiblocks-team-member-social-icon-remove",onClick:()=>Ge(g,Je),icon:"no-alt",isSmall:!0,label:$e("Remove","digiblocks"),style:{position:"absolute",top:"-12px",right:"-10px",background:"#fff",borderRadius:"50%",padding:"2px",boxShadow:"0 1px 3px rgba(0,0,0,0.2)",zIndex:2}}))),wp.element.createElement("div",{id:`add-social-${g}`,className:"digiblocks-team-member-social-icon add-social",onClick:()=>he(g),title:$e("Add Social Link","digiblocks")},e0))))),n=()=>{if(!Se)return null;let{memberIndex:p,socialIndex:g,target:He}=Se,Je=l[p].socials[g];return wp.element.createElement(Og,{anchor:He,onClose:t,position:"bottom center",expandOnMobile:!0,className:"digiblocks-team-social-url-popover"},wp.element.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",padding:"12px",minWidth:"280px"}},wp.element.createElement(ta,{label:$e("Social Network","digiblocks"),value:Je.network,options:B,onChange:i=>We(p,g,"network",i),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Yk,{label:$e("URL","digiblocks"),value:Je.url,onChange:i=>We(p,g,"url",i),placeholder:Je.network==="email"?"mailto:example@domain.com":Je.network==="website"?"https://example.com":`https://${Je.network}.com/username`,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Dt,{variant:"primary",onClick:t,style:{justifyContent:"center",width:"100%"}},$e("Done","digiblocks"))))},we=()=>{switch(r){case"options":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(ht,{tab:"options",name:"layout-settings",title:$e("Layout Settings","digiblocks"),initialOpen:!0},wp.element.createElement(Ug,{id:"team-alignment-control",label:$e("Layout Type","digiblocks"),__nextHasNoMarginBottom:!0},wp.element.createElement(jg,{value:$,onChange:p=>e({layout:p}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(la,{value:"grid",label:$e("Grid","digiblocks"),"aria-label":$e("Grid Layout","digiblocks")}),wp.element.createElement(la,{value:"list",label:$e("List","digiblocks"),"aria-label":$e("List Layout","digiblocks")}))),$==="grid"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Ug,{id:"team-alignment-control",label:$e("Alignment","digiblocks"),__nextHasNoMarginBottom:!0},wp.element.createElement(jg,{value:P,onChange:p=>e({alignment:p}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(la,{value:"left",label:$e("Left","digiblocks"),"aria-label":$e("Left alignment","digiblocks")}),wp.element.createElement(la,{value:"center",label:$e("Center","digiblocks"),"aria-label":$e("Center alignment","digiblocks")}),wp.element.createElement(la,{value:"right",label:$e("Right","digiblocks"),"aria-label":$e("Right alignment","digiblocks")}))),wp.element.createElement(Io,{label:$e("Columns","digiblocks")},wp.element.createElement(ia,{value:_[ee],onChange:p=>e({columns:{..._,[ee]:p}}),min:1,max:6,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(Io,{label:$e("Spacing","digiblocks")},wp.element.createElement(ia,{value:y[ee],onChange:p=>e({gutter:{...y,[ee]:p}}),min:0,max:100,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})))),wp.element.createElement(ht,{tab:"options",name:"content-settings",title:$e("Content Settings","digiblocks"),initialOpen:!1},wp.element.createElement(xi,{label:$e("Show Name","digiblocks"),checked:je,onChange:()=>e({showName:!je}),__nextHasNoMarginBottom:!0}),wp.element.createElement(xi,{label:$e("Show Position","digiblocks"),checked:te,onChange:()=>e({showPosition:!te}),__nextHasNoMarginBottom:!0}),wp.element.createElement(xi,{label:$e("Show Bio","digiblocks"),checked:to,onChange:()=>e({showBio:!to}),__nextHasNoMarginBottom:!0}),wp.element.createElement(xi,{label:$e("Show Social Icons","digiblocks"),checked:De,onChange:()=>e({showSocial:!De}),__nextHasNoMarginBottom:!0})),wp.element.createElement(ht,{tab:"options",name:"image-settings",title:$e("Image Settings","digiblocks"),initialOpen:!1},wp.element.createElement(ta,{label:$e("Image Style","digiblocks"),value:h,options:E,onChange:p=>e({imageStyle:p}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Io,{label:$e("Image Size","digiblocks")},wp.element.createElement(ia,{value:s[ee],onChange:p=>e({imageSize:{...s,[ee]:p}}),min:50,max:300,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(ta,{label:$e("Border Style","digiblocks"),value:w,options:se,onChange:p=>e({imageBorderStyle:p}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),w!=="none"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(kn,{title:$e("Border Color","digiblocks"),initialOpen:!1,enableAlpha:!0,colorSettings:[{value:C,onChange:p=>e({imageBorderColor:p}),label:$e("Border Color","digiblocks")}]}),wp.element.createElement(Io,{label:$e("Border Width","digiblocks")},wp.element.createElement(Gt,{values:S[ee],onChange:p=>e({imageBorderWidth:{...S,[ee]:p}})}))),h==="default"&&wp.element.createElement(Io,{label:$e("Border Radius","digiblocks")},wp.element.createElement(Gt,{values:z[ee],onChange:p=>e({imageBorderRadius:{...z,[ee]:p}})}))));case"style":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(ht,{tab:"style",name:"colors",title:$e("Colors","digiblocks"),initialOpen:!0},wp.element.createElement(kn,{title:$e("Text Colors","digiblocks"),initialOpen:!0,colorSettings:[{value:V,onChange:p=>e({nameColor:p}),label:$e("Name Color","digiblocks")},{value:Q,onChange:p=>e({positionColor:p}),label:$e("Position Color","digiblocks")},{value:be,onChange:p=>e({bioColor:p}),label:$e("Bio Color","digiblocks")}]}),wp.element.createElement(kn,{title:$e("Social Icon Colors","digiblocks"),initialOpen:!1,colorSettings:[{value:N,onChange:p=>e({iconColor:p}),label:$e("Icon Color","digiblocks")},{value:u,onChange:p=>e({iconHoverColor:p}),label:$e("Icon Hover Color","digiblocks")},{value:ne,onChange:p=>e({iconBackgroundColor:p}),label:$e("Icon Background","digiblocks")},{value:Me,onChange:p=>e({iconBackgroundHoverColor:p}),label:$e("Icon Background Hover","digiblocks")}]}),wp.element.createElement(kn,{title:$e("Box Colors","digiblocks"),initialOpen:!1,colorSettings:[{value:H,onChange:p=>e({boxBackgroundColor:p}),label:$e("Background Color","digiblocks")},{value:Y,onChange:p=>e({boxBorderColor:p}),label:$e("Border Color","digiblocks")}]})),wp.element.createElement(ht,{tab:"style",name:"typography",title:$e("Typography","digiblocks"),initialOpen:!1},wp.element.createElement(Lr,{label:$e("Name Typography","digiblocks"),value:T,onChange:p=>e({typography:p}),defaults:{fontSize:{desktop:22,tablet:20,mobile:18},fontSizeUnit:"px",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em"}}),wp.element.createElement(Lr,{label:$e("Position Typography","digiblocks"),value:U,onChange:p=>e({textTypography:p}),defaults:{fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em"}}),wp.element.createElement(Lr,{label:$e("Bio Typography","digiblocks"),value:L,onChange:p=>e({contentTypography:p}),defaults:{fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em"}})),wp.element.createElement(ht,{tab:"style",name:"social-icons",title:$e("Social Icons","digiblocks"),initialOpen:!1},wp.element.createElement(Io,{label:$e("Icon Size","digiblocks")},wp.element.createElement(ia,{value:v[ee],onChange:p=>e({iconSize:{...v,[ee]:p}}),min:10,max:50,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(Io,{label:$e("Icon Spacing","digiblocks")},wp.element.createElement(ia,{value:I[ee],onChange:p=>e({iconSpacing:{...I,[ee]:p}}),min:0,max:30,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(Io,{label:$e("Icon Padding","digiblocks")},wp.element.createElement(Gt,{values:X[ee],onChange:p=>e({iconPadding:{...X,[ee]:p}})})),wp.element.createElement(Io,{label:$e("Border Radius","digiblocks")},wp.element.createElement(Gt,{values:Le[ee],onChange:p=>e({iconBorderRadius:{...Le,[ee]:p}})}))),wp.element.createElement(ht,{tab:"style",name:"box-style",title:$e("Box Style","digiblocks"),initialOpen:!1},wp.element.createElement(ta,{label:$e("Border Style","digiblocks"),value:ue,options:se,onChange:p=>e({boxBorderStyle:p}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),ue!=="none"&&wp.element.createElement(Io,{label:$e("Border Width","digiblocks")},wp.element.createElement(Gt,{values:ce[ee],onChange:p=>e({boxBorderWidth:{...ce,[ee]:p}})})),wp.element.createElement(Io,{label:$e("Border Radius","digiblocks")},wp.element.createElement(Gt,{values:W[ee],onChange:p=>e({boxBorderRadius:{...W,[ee]:p}})})),wp.element.createElement(Xk,{label:$e("Box Shadow","digiblocks"),normalValue:me,hoverValue:oe,onNormalChange:p=>e({boxShadow:p}),onHoverChange:p=>e({boxShadowHover:p})}),wp.element.createElement(Io,{label:$e("Padding","digiblocks")},wp.element.createElement(Gt,{values:A[ee],onChange:p=>e({boxPadding:{...A,[ee]:p}})})),wp.element.createElement(Io,{label:$e("Margin","digiblocks")},wp.element.createElement(Gt,{values:J[ee],onChange:p=>e({boxMargin:{...J,[ee]:p}})}))));case"advanced":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(ht,{tab:"advanced",name:"animation",title:$e("Animation","digiblocks"),initialOpen:!0},wp.element.createElement(ta,{label:$e("Animation Effect","digiblocks"),value:fe,options:c,onChange:p=>e({animation:p}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),fe&&fe!=="none"&&wp.element.createElement("div",{style:{marginTop:"10px"}},wp.element.createElement(Dt,{variant:"secondary",onClick:qe,style:{width:"100%"},disabled:Xe},$e(Xe?"Previewing...":"Preview Animation","digiblocks")))),wp.element.createElement(ht,{tab:"advanced",name:"visibility",title:$e("Visibility","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control__help",style:{padding:"12px",backgroundColor:"#f0f6fc",border:"1px solid #c3ddfd",borderRadius:"4px",marginBottom:"16px"}},wp.element.createElement("strong",null,$e("Editor Note:","digiblocks")),wp.element.createElement("br",null),$e("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.","digiblocks")),wp.element.createElement(xi,{label:$e("Hide on Desktop","digiblocks"),checked:a.desktop,onChange:p=>e({visibility:{...a,desktop:p}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(xi,{label:$e("Hide on Tablet","digiblocks"),checked:a.tablet,onChange:p=>e({visibility:{...a,tablet:p}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(xi,{label:$e("Hide on Mobile","digiblocks"),checked:a.mobile,onChange:p=>e({visibility:{...a,mobile:p}}),__nextHasNoMarginBottom:!0})),wp.element.createElement(ht,{tab:"advanced",name:"additional",title:$e("Additional","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control html-anchor-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"html-anchor"},$e("HTML anchor","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"html-anchor",value:O||"",onChange:p=>e({anchor:p.target.value}),"aria-describedby":"html-anchor-help",autoCapitalize:"none",autoComplete:"off"})),wp.element.createElement("p",{id:"html-anchor-help",className:"components-base-control__help"},$e(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`,"digiblocks")," ",wp.element.createElement("a",{className:"components-external-link",href:"https://wordpress.org/documentation/article/page-jumps/",target:"_blank",rel:"external noreferrer noopener"},wp.element.createElement("span",{className:"components-external-link__contents"},$e("Learn more about anchors","digiblocks")),wp.element.createElement("span",{className:"components-external-link__icon","aria-label":"(opens in a new tab)"},"\u2197")))),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"additional-css-classes"},$e("Additional CSS class(es)","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"additional-css-classes",value:le||"",onChange:p=>e({customClasses:p.target.value}),"aria-describedby":"additional-css-classes-help",autoComplete:"off"})),wp.element.createElement("p",{id:"additional-css-classes-help",className:"components-base-control__help"},$e("Separate multiple classes with spaces.","digiblocks")))));default:return null}},Ke=qk({className:`digiblocks-team-block ${o} layout-${$} align-${P} ${le||""}`,id:O||null});return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Gk,null,wp.element.createElement(Ak,{tabs:ge,activeTab:r,onSelect:D},we())),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:b()}}),wp.element.createElement("div",{...Ke},wp.element.createElement("div",{className:"digiblocks-team-container"},Ce()),wp.element.createElement(Dt,{variant:"primary",icon:"plus",onClick:M,style:{width:"100%",marginTop:"20px",justifyContent:"center"}},$e("Add Team Member","digiblocks")),n(),f()))},Eg=o0;var{useBlockProps:t0,RichText:Or}=window.wp.blockEditor,i0={facebook:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512"},wp.element.createElement("path",{d:"M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"})),twitter:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},wp.element.createElement("path",{d:"M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"})),linkedin:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},wp.element.createElement("path",{d:"M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"})),instagram:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},wp.element.createElement("path",{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"})),pinterest:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},wp.element.createElement("path",{d:"M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z"})),youtube:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},wp.element.createElement("path",{d:"M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"})),dribbble:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},wp.element.createElement("path",{d:"M86.6 64l85.2 85.2C194.5 121.7 208 86.4 208 48c0-14.7-2-28.9-5.7-42.4C158.6 15 119 35.5 86.6 64zM64 86.6C35.5 119 15 158.6 5.6 202.3C19.1 206 33.3 208 48 208c38.4 0 73.7-13.5 101.3-36.1L64 86.6zM256 0c-7.3 0-14.6 .3-21.8 .9C238 16 240 31.8 240 48c0 47.3-17.1 90.5-45.4 124L256 233.4 425.4 64C380.2 24.2 320.9 0 256 0zM48 240c-16.2 0-32-2-47.1-5.8C.3 241.4 0 248.7 0 256c0 64.9 24.2 124.2 64 169.4L233.4 256 172 194.6C138.5 222.9 95.3 240 48 240zm463.1 37.8c.6-7.2 .9-14.5 .9-21.8c0-64.9-24.2-124.2-64-169.4L278.6 256 340 317.4c33.4-28.3 76.7-45.4 124-45.4c16.2 0 32 2 47.1 5.8zm-4.7 31.9C492.9 306 478.7 304 464 304c-38.4 0-73.7 13.5-101.3 36.1L448 425.4c28.5-32.3 49.1-71.9 58.4-115.7zM340.1 362.7C317.5 390.3 304 425.6 304 464c0 14.7 2 28.9 5.7 42.4C353.4 497 393 476.5 425.4 448l-85.2-85.2zM317.4 340L256 278.6 86.6 448c45.1 39.8 104.4 64 169.4 64c7.3 0 14.6-.3 21.8-.9C274 496 272 480.2 272 464c0-47.3 17.1-90.5 45.4-124z"})),github:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 496 512"},wp.element.createElement("path",{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"})),behance:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},wp.element.createElement("path",{d:"M232 237.2c31.8-15.2 48.4-38.2 48.4-74 0-70.6-52.6-87.8-113.3-87.8H0v354.4h171.8c64.4 0 124.9-30.9 124.9-102.9 0-44.5-21.1-77.4-64.7-89.7zM77.9 135.9H151c28.1 0 53.4 7.9 53.4 40.5 0 30.1-19.7 42.2-47.5 42.2h-79v-82.7zm83.3 233.7H77.9V272h84.9c34.3 0 56 14.3 56 50.6 0 35.8-25.9 47-57.6 47zm358.5-240.7H376V94h143.7v34.9zM576 305.2c0-75.9-44.4-139.2-124.9-139.2-78.2 0-131.3 58.8-131.3 135.8 0 79.9 50.3 134.7 131.3 134.7 61.3 0 101-27.6 120.1-86.3H509c-6.7 21.9-34.3 33.5-55.7 33.5-41.3 0-63-24.2-63-65.3h185.1c.3-4.2 .6-8.7 .6-13.2zM390.4 274c2.3-33.7 24.7-54.8 58.5-54.8 35.4 0 53.2 20.8 56.2 54.8H390.4z"})),vimeo:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},wp.element.createElement("path",{d:"M447.8 153.6c-2 43.6-32.4 103.3-91.4 179.1-60.9 79.2-112.4 118.8-154.6 118.8-26.1 0-48.2-24.1-66.3-72.3C100.3 250 85.3 174.3 56.2 174.3c-3.4 0-15.1 7.1-35.2 21.1L0 168.2c51.6-45.3 100.9-95.7 131.8-98.5 34.9-3.4 56.3 20.5 64.4 71.5 28.7 181.5 41.4 208.9 93.6 126.7 18.7-29.6 28.8-52.1 30.2-67.6 4.8-45.9-35.8-42.8-63.3-31 22-72.1 64.1-107.1 126.2-105.1 45.8 1.2 67.5 31.1 64.9 89.4z"})),tiktok:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},wp.element.createElement("path",{d:"M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"})),email:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},wp.element.createElement("path",{d:"M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"})),website:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512"},wp.element.createElement("path",{d:"M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"}))},l0=({attributes:ie})=>{let{id:e,members:K,layout:o,alignment:O,animation:a,anchor:le,customClasses:l,showName:_,showPosition:y,showBio:$,showSocial:P}=ie,h=`digiblocks-team-block ${e} layout-${o} align-${O} ${a!=="none"?`animate-${a}`:""} ${l||""}`,s=t0.save({className:h,id:le||null}),z=()=>K.map(S=>wp.element.createElement("div",{key:S.id,className:"digiblocks-team-member"},_&&S.image&&S.image.url&&wp.element.createElement("div",{className:"digiblocks-team-member-image"},wp.element.createElement("img",{src:S.image.url,alt:S.image.alt||S.name})),wp.element.createElement("div",{className:"digiblocks-team-member-content"},_&&wp.element.createElement(Or.Content,{tagName:"h3",className:"digiblocks-team-member-name",value:S.name}),y&&wp.element.createElement(Or.Content,{tagName:"div",className:"digiblocks-team-member-position",value:S.position}),$&&wp.element.createElement(Or.Content,{tagName:"div",className:"digiblocks-team-member-bio",value:S.bio}),P&&S.socials&&S.socials.length>0&&wp.element.createElement("div",{className:"digiblocks-team-member-social"},S.socials.map(C=>{let w=i0[C.network];return wp.element.createElement("a",{key:C.id,href:C.url,className:"digiblocks-team-member-social-icon",rel:"noopener noreferrer",target:"_blank","aria-label":C.network},w)})))));return wp.element.createElement("div",{...s},wp.element.createElement("div",{className:"digiblocks-team-container"},z()))},Wg=l0;var{__:_o}=window.wp.i18n,{registerBlockType:a0}=window.wp.blocks,{getBlockActiveStatus:n0}=window.wp.digiBlocks;a0("digiblocks/team",{apiVersion:2,title:digiBlocksData.blocks.team.title,category:"digiblocks",icon:{src:()=>{let{viewbox:ie,path:e}=digiBlocksData.blocks.team.icon;return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${ie}`,className:"digiblocks-editor-icons"},wp.element.createElement("path",{d:e}))}},description:digiBlocksData.blocks.team.description,keywords:[_o("team","digiblocks"),_o("members","digiblocks"),_o("staff","digiblocks"),_o("people","digiblocks")],supports:{inserter:!!n0("team"),html:!1,className:!1,customClassName:!1,anchor:!1},attributes:{id:{type:"string",default:""},anchor:{type:"string",default:""},visibility:{type:"object",default:{desktop:!1,tablet:!1,mobile:!1}},customClasses:{type:"string",default:""},members:{type:"array",default:[{id:"team-member-1",name:_o("John Doe","digiblocks"),position:_o("CEO & Founder","digiblocks"),bio:_o("John has over 15 years of experience in the industry and leads our team with vision and expertise.","digiblocks"),image:{url:"",id:"",alt:""},socials:[{id:"social-1",network:"facebook",url:"https://facebook.com"},{id:"social-2",network:"twitter",url:"https://twitter.com"}]},{id:"team-member-2",name:_o("Jane Smith","digiblocks"),position:_o("Creative Director","digiblocks"),bio:_o("Jane brings creativity and innovation to every project with her background in design and marketing.","digiblocks"),image:{url:"",id:"",alt:""},socials:[{id:"social-3",network:"linkedin",url:"https://linkedin.com"},{id:"social-4",network:"instagram",url:"https://instagram.com"}]},{id:"team-member-3",name:_o("Mike Johnson","digiblocks"),position:_o("Lead Developer","digiblocks"),bio:_o("Mike is our technical expert, specializing in cutting-edge technologies and solving complex problems.","digiblocks"),image:{url:"",id:"",alt:""},socials:[{id:"social-5",network:"github",url:"https://github.com"},{id:"social-6",network:"dribbble",url:"https://dribbble.com"}]}]},columns:{type:"object",default:{desktop:3,tablet:2,mobile:1}},gutter:{type:"object",default:{desktop:30,tablet:20,mobile:15}},layout:{type:"string",default:"grid"},alignment:{type:"string",default:"center"},imageStyle:{type:"string",default:"circle"},imageSize:{type:"object",default:{desktop:150,tablet:120,mobile:100}},imageBorderRadius:{type:"object",default:{desktop:{top:8,right:8,bottom:8,left:8,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},imageBorderWidth:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},imageBorderColor:{type:"string",default:"#e0e0e0"},imageBorderStyle:{type:"string",default:"none"},typography:{type:"object",default:{fontFamily:"",fontSize:{desktop:22,tablet:20,mobile:18},fontSizeUnit:"px",fontWeight:"600",fontStyle:"normal",textTransform:"none",textDecoration:"none",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}},textTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",fontWeight:"400",fontStyle:"normal",textTransform:"none",textDecoration:"none",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}},contentTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",fontWeight:"400",fontStyle:"normal",textTransform:"none",textDecoration:"none",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}},nameColor:{type:"string",default:"#333333"},positionColor:{type:"string",default:"#666666"},bioColor:{type:"string",default:"#666666"},iconColor:{type:"string",default:"#1e73be"},iconHoverColor:{type:"string",default:"#135e9e"},iconSize:{type:"object",default:{desktop:20,tablet:18,mobile:16}},iconSpacing:{type:"object",default:{desktop:10,tablet:8,mobile:6}},iconBackgroundColor:{type:"string",default:"transparent"},iconBackgroundHoverColor:{type:"string",default:""},iconBorderRadius:{type:"object",default:{desktop:{top:50,right:50,bottom:50,left:50,unit:"%"},tablet:{top:"",right:"",bottom:"",left:"",unit:"%"},mobile:{top:"",right:"",bottom:"",left:50,unit:"%"}}},iconPadding:{type:"object",default:{desktop:{top:8,right:8,bottom:8,left:8,unit:"px"},tablet:{top:6,right:6,bottom:6,left:6,unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},boxBackgroundColor:{type:"string",default:"#ffffff"},boxBorderColor:{type:"string",default:"#e0e0e0"},boxBorderRadius:{type:"object",default:{desktop:{top:8,right:8,bottom:8,left:8,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},boxBorderWidth:{type:"object",default:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},boxBorderStyle:{type:"string",default:"solid"},boxPadding:{type:"object",default:{desktop:{top:30,right:30,bottom:30,left:30,unit:"px"},tablet:{top:25,right:25,bottom:25,left:25,unit:"px"},mobile:{top:20,right:20,bottom:20,left:20,unit:"px"}}},boxMargin:{type:"object",default:{desktop:{top:0,right:0,bottom:30,left:0,unit:"px"},tablet:{top:0,right:0,bottom:25,left:0,unit:"px"},mobile:{top:0,right:0,bottom:20,left:0,unit:"px"}}},boxShadow:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.1)",horizontal:0,vertical:5,blur:15,spread:0,position:"outset"}},boxShadowHover:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:10,blur:25,spread:0,position:"outset"}},animation:{type:"string",default:"none"},showName:{type:"boolean",default:!0},showPosition:{type:"boolean",default:!0},showBio:{type:"boolean",default:!0},showSocial:{type:"boolean",default:!0}},example:{attributes:{members:[{id:"team-member-1",name:_o("John Doe","digiblocks"),position:_o("CEO & Founder","digiblocks"),bio:_o("John has over 15 years of experience in the industry.","digiblocks"),socials:[{id:"social-1",network:"facebook",url:"https://facebook.com"},{id:"social-2",network:"twitter",url:"https://twitter.com"}]},{id:"team-member-2",name:_o("Jane Smith","digiblocks"),position:_o("Creative Director","digiblocks"),bio:_o("Jane brings creativity to every project.","digiblocks"),socials:[{id:"social-3",network:"linkedin",url:"https://linkedin.com"}]}],columns:{desktop:2,tablet:2,mobile:1}}},edit:Eg,save:Wg});var{__:oo}=window.wp.i18n,{useBlockProps:s0,RichText:jr,InspectorControls:r0,PanelColorSettings:Ur,MediaUpload:c0,MediaUploadCheck:d0}=window.wp.blockEditor,{BaseControl:g0,SelectControl:qg,RangeControl:xn,ToggleControl:na,Button:yi,TabPanel:p0,Tooltip:yn,__experimentalToggleGroupControl:b0,__experimentalToggleGroupControlOption:Vr}=window.wp.components,{useState:Fr,useEffect:Er,useRef:u0}=window.wp.element,{useBlockId:m0,getDimensionCSS:Cn,animations:Wr,animationPreview:Gg}=digi.utils,{tabIcons:qr}=digi.icons,{ResponsiveControl:Qt,DimensionControl:wn,TypographyControl:Gr,BoxShadowControl:h0,CustomTabPanel:f0,TabPanelBody:ft}=digi.components,k0=({attributes:ie,setAttributes:e,clientId:K})=>{let{id:o,anchor:O,visibility:a,customClasses:le,testimonials:l,columns:_,nameColor:y,nameHoverColor:$,positionColor:P,contentColor:h,backgroundColor:s,backgroundHoverColor:z,quoteIconColor:S,ratingColor:C,borderStyle:w,borderWidth:T,borderRadius:U,borderColor:L,boxShadow:V,boxShadowHover:Q,padding:be,margin:N,contentTypography:u,headingTypography:v,textTypography:I,imageSize:ne,quoteIconSize:Me,showRating:Le,showQuoteIcon:X,animation:H,align:Y,itemSpacing:W}=ie;m0(o,K,e);let[ce,ue]=Fr(()=>{if(window.digi.uiState){let k=window.digi.uiState.getActiveTab(K);if(k)return k}return"options"}),[A,J]=Fr(window.digi.responsiveState.activeDevice),[me,oe]=Fr(!1);Er(()=>window.digi.responsiveState.subscribe(G=>{J(G)}),[]),Er(()=>{if(l&&l.length>0){let k=l.map((G,d)=>G.id?G:{...G,id:`testimonial-${K.substr(0,8)}-${d}`});JSON.stringify(k)!==JSON.stringify(l)&&e({testimonials:k})}},[K,l,e]);let fe=u0(null);Er(()=>{if(H&&H!=="none"){let k=setTimeout(()=>{Gg(o,H,Wr,fe)},100);return()=>clearTimeout(k)}},[H]);let je=()=>{Gg(o,H,Wr,fe)},te=[{label:oo("Default","digiblocks"),value:"default"},{label:oo("None","digiblocks"),value:"none"},{label:oo("Solid","digiblocks"),value:"solid"},{label:oo("Dotted","digiblocks"),value:"dotted"},{label:oo("Dashed","digiblocks"),value:"dashed"},{label:oo("Double","digiblocks"),value:"double"},{label:oo("Groove","digiblocks"),value:"groove"},{label:oo("Inset","digiblocks"),value:"inset"},{label:oo("Outset","digiblocks"),value:"outset"},{label:oo("Ridge","digiblocks"),value:"ridge"}],to=[{label:oo("None","digiblocks"),value:"none"},...Object.keys(Wr).map(k=>({label:k.replace(/-/g," ").replace(/\b\w/g,G=>G.toUpperCase()),value:k}))],De=[{name:"options",title:oo("Options","digiblocks"),icon:qr.optionsIcon},{name:"style",title:oo("Style","digiblocks"),icon:qr.styleIcon},{name:"advanced",title:oo("Advanced","digiblocks"),icon:qr.advancedIcon}],r=[{name:"normal",title:oo("Normal","digiblocks"),className:"digiblocks-tab-1 normal"},{name:"hover",title:oo("Hover","digiblocks"),className:"digiblocks-tab-2 hover"}],D=()=>{let k=l.length,G={id:`testimonial-${K.substr(0,8)}-${k}`,name:oo("New Name","digiblocks"),position:oo("Position","digiblocks"),company:oo("Company","digiblocks"),content:oo("Add your testimonial content here...","digiblocks"),imageUrl:"",imageId:"",rating:5};e({testimonials:[...l,G]})},xe=k=>{let G=[...l];G.splice(k,1),e({testimonials:G})},Pe=k=>{let G=l[k],d=Date.now(),re={...G,id:`testimonial-${K.substr(0,8)}-${d}`},x=[...l];x.splice(k+1,0,re),e({testimonials:x})},Se=k=>{if(k===0)return;let G=[...l],d=G[k];G.splice(k,1),G.splice(k-1,0,d),e({testimonials:G})},Ue=k=>{if(k===l.length-1)return;let G=[...l],d=G[k];G.splice(k,1),G.splice(k+1,0,d),e({testimonials:G})},ee=(k,G)=>{let d=[...l];d[G].name=k,e({testimonials:d})},Be=(k,G)=>{let d=[...l];d[G].position=k,e({testimonials:d})},Xe=(k,G)=>{let d=[...l];d[G].company=k,e({testimonials:d})},q=(k,G)=>{let d=[...l];d[G].content=k,e({testimonials:d})},ye=(k,G)=>{let d=[...l];d[G].rating=k,e({testimonials:d})},qe=(k,G)=>{let d=[...l];d[G].imageUrl=k.url,d[G].imageId=k.id,e({testimonials:d})},E=k=>{let G=[];for(let d=1;d<=5;d++)G.push(wp.element.createElement("span",{key:d,className:`digiblocks-rating-star ${d<=k?"filled":""}`,style:{color:d<=k?C:"#e0e0e0"}},wp.element.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor"},wp.element.createElement("path",{d:"M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327l4.898.696c.441.062.612.636.282.95l-3.522 3.356l.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"}))));return G},se=()=>{let k=window.digi.responsiveState.activeDevice,G="";w&&w!=="default"&&w!=="none"?G=`
                border-style: ${w};
                border-color: ${L||"#e0e0e0"};
				${Cn(T,"border-width",k)}
				${Cn(U,"border-radius",k)}
            `:G="border: none;";let d="box-shadow: none;";V&&V.enable&&(d=`box-shadow: ${V.position==="inset"?"inset ":""}${V.horizontal}px ${V.vertical}px ${V.blur}px ${V.spread}px ${V.color};`);let re=`${Cn(be,"padding",k)}`,x=`${Cn(N,"margin",k)}`,m="";u&&(u.fontFamily&&(m+=`font-family: ${u.fontFamily};`),u.fontSize&&u.fontSize[k]&&(m+=`font-size: ${u.fontSize[k]}${u.fontSizeUnit||"px"};`),u.fontWeight&&(m+=`font-weight: ${u.fontWeight};`),u.fontStyle&&(m+=`font-style: ${u.fontStyle};`),u.textTransform&&(m+=`text-transform: ${u.textTransform};`),u.textDecoration&&(m+=`text-decoration: ${u.textDecoration};`),u.lineHeight&&u.lineHeight[k]&&(m+=`line-height: ${u.lineHeight[k]}${u.lineHeightUnit||"em"};`),u.letterSpacing&&u.letterSpacing[k]&&(m+=`letter-spacing: ${u.letterSpacing[k]}${u.letterSpacingUnit||"px"};`));let he="";v&&(v.fontFamily&&(he+=`font-family: ${v.fontFamily};`),v.fontSize&&v.fontSize[k]&&(he+=`font-size: ${v.fontSize[k]}${v.fontSizeUnit||"px"};`),v.fontWeight&&(he+=`font-weight: ${v.fontWeight};`),v.fontStyle&&(he+=`font-style: ${v.fontStyle};`),v.textTransform&&(he+=`text-transform: ${v.textTransform};`),v.textDecoration&&(he+=`text-decoration: ${v.textDecoration};`),v.lineHeight&&v.lineHeight[k]&&(he+=`line-height: ${v.lineHeight[k]}${v.lineHeightUnit||"em"};`),v.letterSpacing&&v.letterSpacing[k]&&(he+=`letter-spacing: ${v.letterSpacing[k]}${v.letterSpacingUnit||"px"};`));let j="";I&&(I.fontFamily&&(j+=`font-family: ${I.fontFamily};`),I.fontSize&&I.fontSize[k]&&(j+=`font-size: ${I.fontSize[k]}${I.fontSizeUnit||"px"};`),I.fontWeight&&(j+=`font-weight: ${I.fontWeight};`),I.fontStyle&&(j+=`font-style: ${I.fontStyle};`),I.textTransform&&(j+=`text-transform: ${I.textTransform};`),I.textDecoration&&(j+=`text-decoration: ${I.textDecoration};`),I.lineHeight&&I.lineHeight[k]&&(j+=`line-height: ${I.lineHeight[k]}${I.lineHeightUnit||"em"};`),I.letterSpacing&&I.letterSpacing[k]&&(j+=`letter-spacing: ${I.letterSpacing[k]}${I.letterSpacingUnit||"px"};`));let Ne="";if(Q&&Q.enable){let We=Q.position==="inset"?"inset ":"";Ne+=`box-shadow: ${We}${Q.horizontal}px ${Q.vertical}px ${Q.blur}px ${Q.spread}px ${Q.color};`}let f=_[k]||2,Ge=W[k]||30;return`
            /* Testimonials Block - ${o} */
            .${o} {
                position: relative;
                width: 100%;
            }

			.${o} .digiblocks-testimonials-grid {
				display: grid;
				grid-template-columns: repeat(${f}, 1fr);
				gap: ${Ge}px;
			}
            
            .${o} .digiblocks-testimonial-content {
				display: flex;
				flex-direction: column;
				gap: 1rem;
                ${re}
                ${x}
                ${G}
                ${d}
                background-color: ${s||"transparent"};
                transition: all 0.3s ease;
                position: relative;
				text-align: ${Y};
            }
            
            .${o} .digiblocks-testimonial-content:hover {
                ${z?`background-color: ${z};`:""}
                ${Ne}
            }
            
            ${X?`
            .${o} .digiblocks-testimonial-quote-icon {
                position: absolute;
                top: 6px;
                left: 10px;
                color: ${S};
                opacity: 0.3;
                line-height: 1;
            }

            .${o} .digiblocks-testimonial-quote-icon svg {
                width: ${Me[k]}px;
				height: ${Me[k]}px;
            }
            `:""}
            
            .${o} .digiblocks-testimonial-text {
                ${m}
                color: ${h};
                margin: 0;
				position: relative;
				z-index: 1;
            }
            
            .${o} .digiblocks-testimonial-author {
                display: flex;
                align-items: center;
                gap: 15px;
				justify-content: ${Y==="center"?"center":"flex-start"};
				${Y==="center"?"flex-direction: column;":""}
				${Y==="right"?"flex-direction: row-reverse;":""}
				position: relative;
				z-index: 1;
            }
            
            .${o} .digiblocks-testimonial-image {
                width: ${ne[k]}px;
                height: ${ne[k]}px;
                border-radius: 50%;
                object-fit: cover;
                background: ${S};
                flex-shrink: 0;
            }
            
            .${o} .digiblocks-testimonial-name {
                ${he}
                color: ${y};
                margin: 0;
                transition: color 0.3s ease;
            }
            
            .${o} .digiblocks-testimonial-content:hover .digiblocks-testimonial-name {
                ${$?`color: ${$};`:""}
            }
            
            .${o} .digiblocks-testimonial-position {
                ${j}
                color: ${P};
                margin: 5px 0 0 0;
            }
            
            ${Le?`
            .${o} .digiblocks-testimonial-rating {
                display: flex;
				align-items: center;
				gap: 2px;
				justify-content: ${Y==="center"?"center":Y==="right"?"flex-end":"flex-start"};
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
			${a.desktop?`
				@media (min-width: 992px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${a.tablet?`
				@media (min-width: 768px) and (max-width: 991px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${a.mobile?`
				@media (max-width: 767px) {
					.${o} {
						opacity: 0.5 !important;
					}
				}
			`:""}
        `},B=()=>{switch(ce){case"options":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(ft,{tab:"options",name:"layouts",title:oo("Layout","digiblocks"),initialOpen:!0},wp.element.createElement(Qt,{label:oo("Columns","digiblocks")},wp.element.createElement(xn,{value:_[A],onChange:k=>e({columns:{..._,[A]:k}}),min:1,max:5,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(Qt,{label:oo("Item Spacing","digiblocks")},wp.element.createElement(xn,{value:W[A],onChange:k=>e({itemSpacing:{...W,[A]:k}}),min:0,max:100,step:5,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(g0,{label:oo("Alignment","digiblocks"),__nextHasNoMarginBottom:!0},wp.element.createElement(b0,{value:Y,onChange:k=>e({align:k}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(Vr,{value:"left",label:oo("Left","digiblocks"),"aria-label":oo("Left alignment","digiblocks")}),wp.element.createElement(Vr,{value:"center",label:oo("Center","digiblocks"),"aria-label":oo("Center alignment","digiblocks")}),wp.element.createElement(Vr,{value:"right",label:oo("Right","digiblocks"),"aria-label":oo("Right alignment","digiblocks")})))),wp.element.createElement(ft,{tab:"options",name:"testimonial-items",title:oo("Testimonials","digiblocks"),initialOpen:!1},wp.element.createElement(na,{label:oo("Show Ratings","digiblocks"),checked:Le,onChange:()=>e({showRating:!Le}),__nextHasNoMarginBottom:!0}),wp.element.createElement(na,{label:oo("Show Quote Icon","digiblocks"),checked:X,onChange:()=>e({showQuoteIcon:!X}),__nextHasNoMarginBottom:!0})));case"style":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(ft,{tab:"style",name:"colors",title:oo("Colors","digiblocks"),initialOpen:!0},wp.element.createElement(p0,{className:"digiblocks-control-tabs",activeClass:"active-tab",tabs:r},k=>k.name==="normal"?wp.element.createElement(Ur,{title:oo("Color Settings","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:y,onChange:G=>e({nameColor:G}),label:oo("Name Color","digiblocks")},{value:P,onChange:G=>e({positionColor:G}),label:oo("Position Color","digiblocks")},{value:h,onChange:G=>e({contentColor:G}),label:oo("Content Color","digiblocks")},{value:s,onChange:G=>e({backgroundColor:G}),label:oo("Background Color","digiblocks")},{value:S,onChange:G=>e({quoteIconColor:G}),label:oo("Quote Icon Color","digiblocks")},{value:C,onChange:G=>e({ratingColor:G}),label:oo("Rating Color","digiblocks")}]}):k.name==="hover"?wp.element.createElement(Ur,{title:oo("Hover Color Settings","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:$,onChange:G=>e({nameHoverColor:G}),label:oo("Name Color","digiblocks")},{value:z,onChange:G=>e({backgroundHoverColor:G}),label:oo("Background Color","digiblocks")}]}):null)),wp.element.createElement(ft,{tab:"style",name:"typography",title:oo("Typography","digiblocks"),initialOpen:!1},wp.element.createElement(Gr,{label:oo("Content Typography","digiblocks"),value:u,onChange:k=>e({contentTypography:k}),defaults:{fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",lineHeight:{desktop:1.7,tablet:1.6,mobile:1.5},lineHeightUnit:"em"}}),wp.element.createElement(Gr,{label:oo("Name Typography","digiblocks"),value:v,onChange:k=>e({headingTypography:k}),defaults:{fontSize:{desktop:20,tablet:18,mobile:16},fontSizeUnit:"px",lineHeight:{desktop:1.3,tablet:1.3,mobile:1.3},lineHeightUnit:"em"}}),wp.element.createElement(Gr,{label:oo("Position Typography","digiblocks"),value:I,onChange:k=>e({textTypography:k}),defaults:{fontSize:{desktop:14,tablet:13,mobile:12},fontSizeUnit:"px",lineHeight:{desktop:1.4,tablet:1.4,mobile:1.4},lineHeightUnit:"em"}})),wp.element.createElement(ft,{tab:"style",name:"sizes",title:oo("Sizes & Spacing","digiblocks"),initialOpen:!1},wp.element.createElement(Qt,{label:oo("Image Size","digiblocks")},wp.element.createElement(xn,{value:ne[A],onChange:k=>e({imageSize:{...ne,[A]:k}}),min:32,max:200,step:4,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(Qt,{label:oo("Quote Icon Size","digiblocks")},wp.element.createElement(xn,{value:Me[A],onChange:k=>e({quoteIconSize:{...Me,[A]:k}}),min:20,max:200,step:5,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}))),wp.element.createElement(ft,{tab:"style",name:"border-shadow",title:oo("Border & Shadow","digiblocks"),initialOpen:!1},wp.element.createElement(qg,{label:oo("Border Style","digiblocks"),value:w||"default",options:te,onChange:k=>{k!=="default"&&k!=="none"&&(w==="default"||w==="none"||!w)&&((!T||Object.keys(T).length===0)&&e({borderWidth:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}}),(!U||Object.keys(U).length===0)&&e({borderRadius:{desktop:{top:12,right:12,bottom:12,left:12,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}})),e({borderStyle:k})},__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),w&&w!=="default"&&w!=="none"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Ur,{title:oo("Border Color","digiblocks"),enableAlpha:!0,colorSettings:[{value:L,onChange:k=>e({borderColor:k}),label:oo("Border Color","digiblocks")}]}),wp.element.createElement(Qt,{label:oo("Border Width","digiblocks")},wp.element.createElement(wn,{values:T[A],onChange:k=>e({borderWidth:{...T,[A]:k}})})),wp.element.createElement(Qt,{label:oo("Border Radius","digiblocks")},wp.element.createElement(wn,{values:U[A],onChange:k=>e({borderRadius:{...U,[A]:k}}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]}))),wp.element.createElement(h0,{normalValue:V,hoverValue:Q,onNormalChange:k=>e({boxShadow:k}),onHoverChange:k=>e({boxShadowHover:k})})),wp.element.createElement(ft,{tab:"style",name:"spacing",title:oo("Spacing","digiblocks"),initialOpen:!1},wp.element.createElement(Qt,{label:oo("Padding","digiblocks")},wp.element.createElement(wn,{values:be[A],onChange:k=>e({padding:{...be,[A]:k}})})),wp.element.createElement(Qt,{label:oo("Margin","digiblocks")},wp.element.createElement(wn,{values:N[A],onChange:k=>e({margin:{...N,[A]:k}})}))));case"advanced":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(ft,{tab:"advanced",name:"animation",title:oo("Animation","digiblocks"),initialOpen:!0},wp.element.createElement(qg,{label:oo("Animation Effect","digiblocks"),value:H,options:to,onChange:k=>e({animation:k}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),H&&H!=="none"&&wp.element.createElement("div",{style:{marginTop:"10px"}},wp.element.createElement(yi,{variant:"secondary",isSecondary:!0,onClick:je,style:{width:"100%"}},oo("Preview Animation","digiblocks")))),wp.element.createElement(ft,{tab:"advanced",name:"visibility",title:oo("Visibility","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control__help",style:{padding:"12px",backgroundColor:"#f0f6fc",border:"1px solid #c3ddfd",borderRadius:"4px",marginBottom:"16px"}},wp.element.createElement("strong",null,oo("Editor Note:","digiblocks")),wp.element.createElement("br",null),oo("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.","digiblocks")),wp.element.createElement(na,{label:oo("Hide on Desktop","digiblocks"),checked:a.desktop,onChange:k=>e({visibility:{...a,desktop:k}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(na,{label:oo("Hide on Tablet","digiblocks"),checked:a.tablet,onChange:k=>e({visibility:{...a,tablet:k}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(na,{label:oo("Hide on Mobile","digiblocks"),checked:a.mobile,onChange:k=>e({visibility:{...a,mobile:k}}),__nextHasNoMarginBottom:!0})),wp.element.createElement(ft,{tab:"advanced",name:"additional",title:oo("Additional","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control html-anchor-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"html-anchor"},oo("HTML anchor","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"html-anchor",value:O||"",onChange:k=>e({anchor:k.target.value}),"aria-describedby":"html-anchor-help",autoCapitalize:"none",autoComplete:"off"})),wp.element.createElement("p",{id:"html-anchor-help",className:"components-base-control__help"},oo(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`,"digiblocks")," ",wp.element.createElement("a",{className:"components-external-link",href:"https://wordpress.org/documentation/article/page-jumps/",target:"_blank",rel:"external noreferrer noopener"},wp.element.createElement("span",{className:"components-external-link__contents"},oo("Learn more about anchors","digiblocks")),wp.element.createElement("span",{className:"components-external-link__icon","aria-label":"(opens in a new tab)"},"\u2197")))),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"additional-css-classes"},oo("Additional CSS class(es)","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"additional-css-classes",value:le||"",onChange:k=>e({customClasses:k.target.value}),"aria-describedby":"additional-css-classes-help",autoComplete:"off"})),wp.element.createElement("p",{id:"additional-css-classes-help",className:"components-base-control__help"},oo("Separate multiple classes with spaces.","digiblocks")))));default:return null}},c=(k,G)=>wp.element.createElement("div",{key:k.id,className:"digiblocks-testimonial-item"},wp.element.createElement("div",{className:"digiblocks-testimonial-content"},X&&wp.element.createElement("div",{className:"digiblocks-testimonial-quote-icon"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",fill:"currentColor"},wp.element.createElement("path",{d:"m54.75 61.7309799v-2.3699951c0-21.9786606 16.2715454-39.8894348 37.5211639-42.4388428 2.7931672-.3351097 5.2288361 1.917471 5.2288361 4.7306748v.0000095c0 2.4273148-1.8343735 4.4202805-4.2426605 4.7236137-7.4862671.9429264-14.1913986 4.3405972-19.203804 9.2676563-1.7802734 1.7499619-.5009689 4.7270927 1.9953613 4.7170334.0236969-.0000954.0474014-.000145.0710983-.000145 12.2492294 0 21.9682159 10.0996895 21.3522568 22.4834023-.538559 10.8274422-9.4114075 19.7002907-20.2388535 20.2388496-12.3837051.6159593-22.4833984-9.1030272-22.4833984-21.3522567z"}),wp.element.createElement("path",{d:"m2.5000021 61.2574081.000001-1.8964233c0-21.9786606 16.2715454-39.8894348 37.5211601-42.4388428 2.7931755-.3351097 5.2288368 1.917471 5.2288368 4.7306748v.0003147c0 2.4272079-1.8342209 4.4199734-4.2423592 4.7236252-7.481739.9434032-14.1888084 4.3410473-19.1987572 9.2678051-1.779623 1.7500687-.500473 4.7271957 1.9954643 4.7165833.025219-.0001068.0504398-.0001602.0756588-.0001602 11.8699932 0 21.3699932 9.5 21.3699932 21.3699951 0 12.0883865-9.8361855 21.7125397-21.996748 21.3711853-11.6399678-.3267442-20.7532557-10.200203-20.7532498-21.8447572z"}))),Le&&wp.element.createElement("div",{className:"digiblocks-testimonial-rating"},E(k.rating)),wp.element.createElement(jr,{tagName:"p",className:"digiblocks-testimonial-text",value:k.content,onChange:d=>q(d,G),placeholder:oo("Enter testimonial content...","digiblocks"),allowedFormats:["core/bold","core/italic","core/link"]}),wp.element.createElement("div",{className:"digiblocks-testimonial-author"},wp.element.createElement(d0,null,wp.element.createElement(c0,{onSelect:d=>qe(d,G),allowedTypes:["image"],value:k.imageId,render:({open:d})=>wp.element.createElement(yi,{className:`digiblocks-image-button ${k.imageUrl?"":"empty"}`,onClick:d,icon:k.imageUrl?"":"format-image"},k.imageUrl?wp.element.createElement("img",{src:k.imageUrl,alt:k.name,className:"digiblocks-testimonial-image"}):wp.element.createElement("div",{className:"digiblocks-testimonial-image",style:{background:S}}))})),wp.element.createElement("div",{className:"digiblocks-testimonial-info"},wp.element.createElement(jr,{tagName:"h3",className:"digiblocks-testimonial-name",value:k.name,onChange:d=>ee(d,G),placeholder:oo("Testimonial Name","digiblocks"),allowedFormats:["core/bold","core/italic"]}),wp.element.createElement(jr,{tagName:"p",className:"digiblocks-testimonial-position",value:k.position+(k.company?`, ${k.company}`:""),onChange:d=>{let re=d.split(",");Be(re[0].trim(),G),re[1]&&Xe(re[1].trim(),G)},placeholder:oo("Position, Company","digiblocks"),allowedFormats:["core/bold","core/italic"]}))),wp.element.createElement("div",{className:"digiblocks-testimonial-item-controls"},wp.element.createElement(yn,{text:oo("Move Up","digiblocks")},wp.element.createElement(yi,{className:"digiblocks-testimonial-item-move-up",onClick:()=>Se(G),icon:"arrow-up-alt2",disabled:G===0,isSmall:!0})),wp.element.createElement(yn,{text:oo("Move Down","digiblocks")},wp.element.createElement(yi,{className:"digiblocks-testimonial-item-move-down",onClick:()=>Ue(G),icon:"arrow-down-alt2",disabled:G===l.length-1,isSmall:!0})),wp.element.createElement(yn,{text:oo("Duplicate","digiblocks")},wp.element.createElement(yi,{className:"digiblocks-testimonial-item-duplicate",onClick:()=>Pe(G),icon:"admin-page",isSmall:!0})),wp.element.createElement(yn,{text:oo("Remove","digiblocks")},wp.element.createElement(yi,{className:"digiblocks-testimonial-item-remove",onClick:()=>xe(G),icon:"trash",isSmall:!0}))))),ge=()=>!l||l.length===0?wp.element.createElement("div",{className:"digiblocks-no-testimonials"},wp.element.createElement("p",null,oo("No testimonials found. Please add some testimonials.","digiblocks"))):l.map((k,G)=>c(k,G)),M=s0({className:`digiblocks-testimonials-block ${o} grid ${le||""}`,id:O||null});return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(r0,null,wp.element.createElement(f0,{tabs:De,activeTab:ce,onSelect:ue},B())),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:se()}}),wp.element.createElement("div",{...M},wp.element.createElement("div",{className:"digiblocks-testimonials-grid"},ge()),wp.element.createElement(yi,{variant:"primary",icon:"plus",onClick:D,style:{width:"100%",marginTop:"40px",justifyContent:"center"}},oo("Add Testimonial","digiblocks"))))},Qg=k0;var{useBlockProps:v0,RichText:Qr}=window.wp.blockEditor,x0=({attributes:ie})=>{let{id:e,anchor:K,customClasses:o,testimonials:O,showRating:a,showQuoteIcon:le,animation:l,columns:_,autoplay:y,autoplaySpeed:$,showArrows:P,showDots:h,ratingColor:s}=ie,z=["digiblocks-testimonials-block",e,"grid",l!=="none"?`animate-${l}`:"",o||""].filter(Boolean).join(" "),S=v0.save({className:z,id:K||null}),C=T=>{let U=[];for(let L=1;L<=5;L++)U.push(wp.element.createElement("span",{key:L,className:`digiblocks-rating-star ${L<=T?"filled":""}`,style:{color:L<=T?s:"#e0e0e0"}},wp.element.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor"},wp.element.createElement("path",{d:"M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327l4.898.696c.441.062.612.636.282.95l-3.522 3.356l.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"}))));return U},w=()=>!O||O.length===0?null:O.map(T=>wp.element.createElement("div",{key:T.id,className:"digiblocks-testimonial-item"},wp.element.createElement("div",{className:"digiblocks-testimonial-content"},le&&wp.element.createElement("div",{className:"digiblocks-testimonial-quote-icon"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",fill:"currentColor"},wp.element.createElement("path",{d:"m54.75 61.7309799v-2.3699951c0-21.9786606 16.2715454-39.8894348 37.5211639-42.4388428 2.7931672-.3351097 5.2288361 1.917471 5.2288361 4.7306748v.0000095c0 2.4273148-1.8343735 4.4202805-4.2426605 4.7236137-7.4862671.9429264-14.1913986 4.3405972-19.203804 9.2676563-1.7802734 1.7499619-.5009689 4.7270927 1.9953613 4.7170334.0236969-.0000954.0474014-.000145.0710983-.000145 12.2492294 0 21.9682159 10.0996895 21.3522568 22.4834023-.538559 10.8274422-9.4114075 19.7002907-20.2388535 20.2388496-12.3837051.6159593-22.4833984-9.1030272-22.4833984-21.3522567z"}),wp.element.createElement("path",{d:"m2.5000021 61.2574081.000001-1.8964233c0-21.9786606 16.2715454-39.8894348 37.5211601-42.4388428 2.7931755-.3351097 5.2288368 1.917471 5.2288368 4.7306748v.0003147c0 2.4272079-1.8342209 4.4199734-4.2423592 4.7236252-7.481739.9434032-14.1888084 4.3410473-19.1987572 9.2678051-1.779623 1.7500687-.500473 4.7271957 1.9954643 4.7165833.025219-.0001068.0504398-.0001602.0756588-.0001602 11.8699932 0 21.3699932 9.5 21.3699932 21.3699951 0 12.0883865-9.8361855 21.7125397-21.996748 21.3711853-11.6399678-.3267442-20.7532557-10.200203-20.7532498-21.8447572z"}))),a&&wp.element.createElement("div",{className:"digiblocks-testimonial-rating"},C(T.rating)),wp.element.createElement(Qr.Content,{tagName:"p",className:"digiblocks-testimonial-text",value:T.content}),wp.element.createElement("div",{className:"digiblocks-testimonial-author"},T.imageUrl&&wp.element.createElement("img",{src:T.imageUrl,alt:T.name,className:"digiblocks-testimonial-image"}),wp.element.createElement("div",{className:"digiblocks-testimonial-info"},wp.element.createElement(Qr.Content,{tagName:"h3",className:"digiblocks-testimonial-name",value:T.name}),wp.element.createElement(Qr.Content,{tagName:"p",className:"digiblocks-testimonial-position",value:T.position+(T.company?`, ${T.company}`:"")}))))));return wp.element.createElement("div",{...S},wp.element.createElement("div",{className:"digiblocks-testimonials-grid"},w()))},Jg=x0;var{__:So}=window.wp.i18n,{registerBlockType:y0}=window.wp.blocks,{getBlockActiveStatus:C0}=window.wp.digiBlocks;y0("digiblocks/testimonials",{apiVersion:2,title:digiBlocksData.blocks.testimonials.title,category:"digiblocks",icon:{src:()=>{let{viewbox:ie,path:e}=digiBlocksData.blocks.testimonials.icon;return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${ie}`,className:"digiblocks-editor-icons"},wp.element.createElement("path",{d:e}))}},description:digiBlocksData.blocks.testimonials.description,keywords:[So("testimonials","digiblocks"),So("reviews","digiblocks"),So("quotes","digiblocks"),So("testimonial","digiblocks")],supports:{inserter:!!C0("testimonials"),html:!1,className:!1,customClassName:!1,anchor:!1},attributes:{id:{type:"string",default:""},anchor:{type:"string",default:""},visibility:{type:"object",default:{desktop:!1,tablet:!1,mobile:!1}},customClasses:{type:"string",default:""},testimonials:{type:"array",default:[{id:"testimonial-1",name:So("John Doe","digiblocks"),position:So("CEO","digiblocks"),company:So("Tech Innovations Inc.","digiblocks"),content:So("This product has completely transformed our business operations. The support team is incredibly responsive and helpful.","digiblocks"),imageUrl:"",imageId:"",rating:5},{id:"testimonial-2",name:So("Sarah Johnson","digiblocks"),position:So("Marketing Director","digiblocks"),company:So("Creative Solutions","digiblocks"),content:So("I cannot recommend this service enough. The quality and attention to detail exceeded our expectations.","digiblocks"),imageUrl:"",imageId:"",rating:5}]},columns:{type:"object",default:{desktop:2,tablet:2,mobile:1}},align:{type:"string",default:"left"},autoplay:{type:"boolean",default:!0},autoplaySpeed:{type:"number",default:3e3},showArrows:{type:"boolean",default:!0},showDots:{type:"boolean",default:!0},nameColor:{type:"string",default:"#333333"},nameHoverColor:{type:"string",default:""},positionColor:{type:"string",default:"#666666"},contentColor:{type:"string",default:"#444444"},backgroundColor:{type:"string",default:"#ffffff"},backgroundHoverColor:{type:"string",default:""},quoteIconColor:{type:"string",default:"#e0e0e0"},ratingColor:{type:"string",default:"#ffc107"},borderStyle:{type:"string",default:"default"},borderWidth:{type:"object",default:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderRadius:{type:"object",default:{desktop:{top:12,right:12,bottom:12,left:12,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderColor:{type:"string",default:"#e0e0e0"},boxShadow:{type:"object",default:{enable:!0,color:"rgba(0, 0, 0, 0.12)",horizontal:0,vertical:5,blur:15,spread:0,position:"outset"}},boxShadowHover:{type:"object",default:{enable:!0,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:10,blur:20,spread:0,position:"outset"}},padding:{type:"object",default:{desktop:{top:40,right:40,bottom:40,left:40,unit:"px"},tablet:{top:30,right:30,bottom:30,left:30,unit:"px"},mobile:{top:20,right:20,bottom:20,left:20,unit:"px"}}},margin:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},contentTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",fontWeight:"",fontStyle:"italic",textTransform:"",textDecoration:"",lineHeight:{desktop:1.7,tablet:1.6,mobile:1.5},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}},headingTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:20,tablet:18,mobile:16},fontSizeUnit:"px",fontWeight:"600",fontStyle:"normal",textTransform:"",textDecoration:"",lineHeight:{desktop:1.3,tablet:1.3,mobile:1.3},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}},textTypography:{type:"object",default:{fontFamily:"",fontSize:{desktop:14,tablet:13,mobile:12},fontSizeUnit:"px",fontWeight:"",fontStyle:"normal",textTransform:"",textDecoration:"",lineHeight:{desktop:1.4,tablet:1.4,mobile:1.4},lineHeightUnit:"em",letterSpacing:{desktop:.5,tablet:.5,mobile:.5},letterSpacingUnit:"px"}},imageSize:{type:"object",default:{desktop:64,tablet:56,mobile:48}},quoteIconSize:{type:"object",default:{desktop:80,tablet:50,mobile:30}},showRating:{type:"boolean",default:!0},showQuoteIcon:{type:"boolean",default:!0},animation:{type:"string",default:"none"},itemSpacing:{type:"object",default:{desktop:30,tablet:25,mobile:20}}},example:{attributes:{testimonials:[{id:"testimonial-1",name:So("John Doe","digiblocks"),position:So("CEO","digiblocks"),company:So("Tech Innovations Inc.","digiblocks"),content:So("This product has completely transformed our business operations. The support team is incredibly responsive and helpful.","digiblocks"),imageUrl:"",imageId:"",rating:5},{id:"testimonial-2",name:So("Charlotte Lebon","digiblocks"),position:So("Marketing","digiblocks"),company:So("Creative Solutions","digiblocks"),content:So("We've seen a 40% increase in customer engagement since implementing this solution. Highly recommended for any business.","digiblocks"),imageUrl:"",imageId:"",rating:5}],layout:"card",backgroundColor:"#ffffff"},viewportWidth:800},edit:Qg,save:Jg});var{__:ro}=window.wp.i18n,{useBlockProps:w0,RichText:S0,InspectorControls:$0,PanelColorSettings:Jr}=window.wp.blockEditor,{SelectControl:Sn,ToggleControl:Yr,Button:_0,__experimentalToggleGroupControl:B0,__experimentalToggleGroupControlOption:Yg}=window.wp.components,{useState:Zg,useEffect:Kg,useRef:T0}=window.wp.element,{useBlockId:N0,getDimensionCSS:$n,animations:Zr,animationPreview:Xg}=digi.utils,{tabIcons:Kr}=digi.icons,{ResponsiveControl:_n,ResponsiveRangeControl:H0,DimensionControl:Bn,TypographyControl:z0,BoxShadowControl:M0,CustomTabPanel:D0,TabPanelBody:Jt,ResponsiveButtonGroup:P0}=digi.components,R0=({attributes:ie,setAttributes:e,clientId:K})=>{let{id:o,anchor:O,visibility:a,customClasses:le,content:l,align:_,htmlTag:y,maxWidth:$,textColor:P,textHoverColor:h,backgroundColor:s,backgroundHoverColor:z,typography:S,padding:C,margin:w,animation:T,boxShadow:U,boxShadowHover:L,borderStyle:V,borderWidth:Q,borderRadius:be,borderColor:N,borderHoverColor:u,backgroundGradient:v,textShadow:I,hoverEffect:ne}=ie;N0(o,K,e);let[Me,Le]=Zg(window.digi.responsiveState.activeDevice);Kg(()=>window.digi.responsiveState.subscribe(xe=>{Le(xe)}),[]);let[X,H]=Zg(()=>{if(window.digi.uiState){let D=window.digi.uiState.getActiveTab(K);if(D)return D}return"options"}),Y=T0(null);Kg(()=>{if(T&&T!=="none"){let D=setTimeout(()=>{Xg(o,T,Zr,Y)},100);return()=>clearTimeout(D)}},[T]);let W=()=>{Xg(o,T,Zr,Y)},ce=[{label:ro("Paragraph","digiblocks"),value:"p"},{label:ro("Span","digiblocks"),value:"span"},{label:ro("Div","digiblocks"),value:"div"}],ue=[{label:ro("Default","digiblocks"),value:"default"},{label:ro("None","digiblocks"),value:"none"},{label:ro("Solid","digiblocks"),value:"solid"},{label:ro("Dotted","digiblocks"),value:"dotted"},{label:ro("Dashed","digiblocks"),value:"dashed"},{label:ro("Double","digiblocks"),value:"double"},{label:ro("Groove","digiblocks"),value:"groove"},{label:ro("Inset","digiblocks"),value:"inset"},{label:ro("Outset","digiblocks"),value:"outset"},{label:ro("Ridge","digiblocks"),value:"ridge"}],A=[{label:ro("None","digiblocks"),value:"none"},{label:ro("Lift","digiblocks"),value:"lift"},{label:ro("Scale","digiblocks"),value:"scale"},{label:ro("Glow","digiblocks"),value:"glow"},{label:ro("Bounce","digiblocks"),value:"bounce"}],J=[{label:ro("None","digiblocks"),value:"none"},...Object.keys(Zr).map(D=>({label:D.replace(/-/g," ").replace(/\b\w/g,xe=>xe.toUpperCase()),value:D}))],me=[{name:"options",title:ro("Options","digiblocks"),icon:Kr.optionsIcon},{name:"style",title:ro("Style","digiblocks"),icon:Kr.styleIcon},{name:"advanced",title:ro("Advanced","digiblocks"),icon:Kr.advancedIcon}],oe=[{name:"normal",title:ro("Normal","digiblocks"),className:"digiblocks-tab-1 normal"},{name:"hover",title:ro("Hover","digiblocks"),className:"digiblocks-tab-2 hover"}],fe=D=>{switch(D){case"%":return 100;case"em":case"rem":return 50;case"px":default:return 1500}},je=D=>{switch(D){case"%":return 1;case"em":case"rem":return .1;case"px":default:return 1}},te=()=>{let D=window.digi.responsiveState.activeDevice,xe="";_[D]==="left"?xe="text-align: left;":_[D]==="center"?xe="text-align: center;":_[D]==="right"?xe="text-align: right;":_[D]==="justify"&&(xe="text-align: justify;");let Pe=$n(be,"border-radius",D),Se="";V&&V!=="default"&&V!=="none"?Se=`
                border-style: ${V};
                border-color: ${N||"#e0e0e0"};
                ${$n(Q,"border-width",D)}
            `:Se="border-style: none;";let Ue="box-shadow: none;";U&&U.enable&&(Ue=`box-shadow: ${U.position==="inset"?"inset ":""}${U.horizontal}px ${U.vertical}px ${U.blur}px ${U.spread}px ${U.color};`);let ee="";I&&I.enable&&(ee=`text-shadow: ${I.horizontal}px ${I.vertical}px ${I.blur}px ${I.color};`);let Be=`${$n(C,"padding",D)}`,Xe=`${$n(w,"margin",D)}`,q="";$&&(q=`max-width: ${$[D].value}${$[D].unit};margin-left: auto;margin-right: auto;`);let ye="";S&&(S.fontFamily&&(ye+=`font-family: ${S.fontFamily};`),S.fontSize&&S.fontSize[D]&&(ye+=`font-size: ${S.fontSize[D]}${S.fontSizeUnit||"px"};`),S.fontWeight&&(ye+=`font-weight: ${S.fontWeight};`),S.fontStyle&&(ye+=`font-style: ${S.fontStyle};`),S.textTransform&&(ye+=`text-transform: ${S.textTransform};`),S.textDecoration&&(ye+=`text-decoration: ${S.textDecoration};`),S.lineHeight&&S.lineHeight[D]&&(ye+=`line-height: ${S.lineHeight[D]}${S.lineHeightUnit||"em"};`),S.letterSpacing&&S.letterSpacing[D]&&(ye+=`letter-spacing: ${S.letterSpacing[D]}${S.letterSpacingUnit||"px"};`));let qe="";v&&v!=="none"?qe=`background: ${v};`:s&&(qe=`background-color: ${s};`);let E="";if(L&&L.enable){let se=L.position==="inset"?"inset ":"";E+=`box-shadow: ${se}${L.horizontal}px ${L.vertical}px ${L.blur}px ${L.spread}px ${L.color};`}return ne==="lift"?E+="transform: translateY(-5px);":ne==="scale"?E+="transform: scale(1.02);":ne==="glow"?E+="filter: brightness(1.1);":ne==="bounce"&&(E+="transform: translateY(-3px); transition: transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);"),`
            /* Main text block styles */
            .${o} {
                transition: all 0.3s ease;
            }

            .${o} ${y} {
                ${xe}
                color: ${P||"inherit"};
                ${qe}
                ${Ue}
                ${ee}
                ${Be}
                ${Xe}
                ${Se}
                ${Pe}
                ${q}
                ${ye}
                transition: all 0.3s ease;
                word-wrap: break-word;
                overflow-wrap: break-word;
            }
            
            /* Hover effects */
            .${o}:hover ${y} {
                ${h?`color: ${h};`:""}
                ${z?`background-color: ${z};`:""}
                ${u?`border-color: ${u};`:""}
                ${E}
            }

            /* Visibility Controls */
            ${a.desktop?`
                @media (min-width: 992px) {
                    .${o} ${y} {
                        opacity: 0.5 !important;
                    }
                }
            `:""}

            ${a.tablet?`
                @media (min-width: 768px) and (max-width: 991px) {
                    .${o} ${y} {
                        opacity: 0.5 !important;
                    }
                }
            `:""}

            ${a.mobile?`
                @media (max-width: 767px) {
                    .${o} ${y} {
                        opacity: 0.5 !important;
                    }
                }
            `:""}
        `},to=D=>D==="normal"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Jr,{title:ro("Color Settings","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:P,onChange:xe=>e({textColor:xe}),label:ro("Text Color","digiblocks")},{value:s,onChange:xe=>e({backgroundColor:xe}),label:ro("Background Color","digiblocks")}]})):D==="hover"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Jr,{title:ro("Hover Color Settings","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:h,onChange:xe=>e({textHoverColor:xe}),label:ro("Text Color","digiblocks")},{value:z,onChange:xe=>e({backgroundHoverColor:xe}),label:ro("Background Color","digiblocks")},{value:u,onChange:xe=>e({borderHoverColor:xe}),label:ro("Border Color","digiblocks")}]})):null,De=()=>{switch(X){case"options":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:"components-panel__body is-opened"},wp.element.createElement(Sn,{label:ro("HTML Tag","digiblocks"),value:y,options:ce,onChange:D=>e({htmlTag:D}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(P0,{label:ro("Text Alignment","digiblocks"),value:_,onChange:D=>e({align:D}),options:[{label:ro("Left","digiblocks"),value:"left"},{label:ro("Center","digiblocks"),value:"center"},{label:ro("Right","digiblocks"),value:"right"},{label:ro("Justify","digiblocks"),value:"justify"}]}),wp.element.createElement(H0,{label:ro("Max Width","digiblocks"),value:$,onChange:D=>e({maxWidth:D}),units:[{label:"px",value:"px"},{label:"%",value:"%"},{label:"em",value:"em"},{label:"rem",value:"rem"}],defaultUnit:"px",min:0,max:fe($?.[Me]?.unit),step:je($?.[Me]?.unit)})));case"style":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Jt,{tab:"style",name:"colors",title:ro("Colors","digiblocks"),initialOpen:!0},wp.element.createElement(B0,{label:ro("State","digiblocks"),value:"normal",isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(Yg,{value:"normal",label:ro("Normal","digiblocks")}),wp.element.createElement(Yg,{value:"hover",label:ro("Hover","digiblocks")})),to("normal")),wp.element.createElement(Jt,{tab:"style",name:"typo",title:ro("Typography","digiblocks"),initialOpen:!1},wp.element.createElement(z0,{label:ro("Typography","digiblocks"),value:S,onChange:D=>e({typography:D}),defaults:{fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em"}})),wp.element.createElement(Jt,{tab:"style",name:"border",title:ro("Border","digiblocks"),initialOpen:!1},wp.element.createElement(Sn,{label:ro("Border Style","digiblocks"),value:V||"default",options:ue,onChange:D=>{D!=="default"&&D!=="none"&&(V==="default"||V==="none"||!V)&&(!Q||Object.keys(Q).length===0)&&e({borderWidth:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}}),e({borderStyle:D})},__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),V&&V!=="default"&&V!=="none"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Jr,{title:ro("Border Color","digiblocks"),enableAlpha:!0,colorSettings:[{value:N,onChange:D=>e({borderColor:D}),label:ro("Border Color","digiblocks")}]}),wp.element.createElement(_n,{label:ro("Border Width","digiblocks")},wp.element.createElement(Bn,{values:Q[Me],onChange:D=>e({borderWidth:{...Q,[Me]:D}})}))),wp.element.createElement(_n,{label:ro("Border Radius","digiblocks")},wp.element.createElement(Bn,{values:be[Me],onChange:D=>e({borderRadius:{...be,[Me]:D}}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]})),wp.element.createElement(Sn,{label:ro("Hover Effect","digiblocks"),value:ne,options:A,onChange:D=>e({hoverEffect:D}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(Jt,{tab:"style",name:"shadow",title:ro("Shadows","digiblocks"),initialOpen:!1},wp.element.createElement(M0,{normalValue:U,hoverValue:L,onNormalChange:D=>e({boxShadow:D}),onHoverChange:D=>e({boxShadowHover:D})})),wp.element.createElement(Jt,{tab:"style",name:"spacing",title:ro("Spacing","digiblocks"),initialOpen:!1},wp.element.createElement(_n,{label:ro("Padding","digiblocks")},wp.element.createElement(Bn,{values:C[Me],onChange:D=>e({padding:{...C,[Me]:D}})})),wp.element.createElement(_n,{label:ro("Margin","digiblocks")},wp.element.createElement(Bn,{values:w[Me],onChange:D=>e({margin:{...w,[Me]:D}})}))));case"advanced":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Jt,{tab:"advanced",name:"animation",title:ro("Animation","digiblocks"),initialOpen:!0},wp.element.createElement(Sn,{label:ro("Animation Effect","digiblocks"),value:T,options:J,onChange:D=>e({animation:D}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),T&&T!=="none"&&wp.element.createElement("div",{style:{marginTop:"10px"}},wp.element.createElement(_0,{variant:"secondary",isSecondary:!0,onClick:W,style:{width:"100%"}},ro("Preview Animation","digiblocks")))),wp.element.createElement(Jt,{tab:"advanced",name:"visibility",title:ro("Visibility","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control__help",style:{padding:"12px",backgroundColor:"#f0f6fc",border:"1px solid #c3ddfd",borderRadius:"4px",marginBottom:"16px"}},wp.element.createElement("strong",null,ro("Editor Note:","digiblocks")),wp.element.createElement("br",null),ro("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.","digiblocks")),wp.element.createElement(Yr,{label:ro("Hide on Desktop","digiblocks"),checked:a.desktop,onChange:D=>e({visibility:{...a,desktop:D}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(Yr,{label:ro("Hide on Tablet","digiblocks"),checked:a.tablet,onChange:D=>e({visibility:{...a,tablet:D}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(Yr,{label:ro("Hide on Mobile","digiblocks"),checked:a.mobile,onChange:D=>e({visibility:{...a,mobile:D}}),__nextHasNoMarginBottom:!0})),wp.element.createElement(Jt,{tab:"advanced",name:"additional",title:ro("Additional","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control html-anchor-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"html-anchor"},ro("HTML anchor","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"html-anchor",value:O||"",onChange:D=>e({anchor:D.target.value}),"aria-describedby":"html-anchor-help",autoCapitalize:"none",autoComplete:"off"})),wp.element.createElement("p",{id:"html-anchor-help",className:"components-base-control__help"},ro(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`,"digiblocks")," ",wp.element.createElement("a",{className:"components-external-link",href:"https://wordpress.org/documentation/article/page-jumps/",target:"_blank",rel:"external noreferrer noopener"},wp.element.createElement("span",{className:"components-external-link__contents"},ro("Learn more about anchors","digiblocks")),wp.element.createElement("span",{className:"components-external-link__icon","aria-label":"(opens in a new tab)"},"\u2197")))),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"additional-css-classes"},ro("Additional CSS class(es)","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"additional-css-classes",value:le||"",onChange:D=>e({customClasses:D.target.value}),"aria-describedby":"additional-css-classes-help",autoComplete:"off"})),wp.element.createElement("p",{id:"additional-css-classes-help",className:"components-base-control__help"},ro("Separate multiple classes with spaces.","digiblocks")))));default:return null}},r=w0({className:`digiblocks-text ${o} ${le||""}`,id:O||null});return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement($0,null,wp.element.createElement(D0,{tabs:me,activeTab:X,onSelect:H},De())),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:te()}}),wp.element.createElement("div",{...r},wp.element.createElement(S0,{tagName:y,value:l,onChange:D=>e({content:D}),placeholder:ro("Start writing or type / to add blocks","digiblocks"),allowedFormats:["core/bold","core/italic","core/link","core/strikethrough","core/underline","core/text-color","core/code","core/superscript","core/subscript"]})))},Ag=R0;var{useBlockProps:I0,RichText:L0}=window.wp.blockEditor,O0=({attributes:ie})=>{let{id:e,htmlTag:K,content:o,animation:O,hoverEffect:a,anchor:le,customClasses:l}=ie,_=["digiblocks-text",e,O!=="none"?`animate-${O}`:"",a!=="none"?`has-hover-${a}`:"",l||""].filter(Boolean).join(" "),y=I0.save({className:_,id:le||null});return wp.element.createElement(L0.Content,{...y,tagName:K,value:o})},ep=O0;var{__:sa}=window.wp.i18n,{registerBlockType:j0}=window.wp.blocks,{getBlockActiveStatus:U0}=window.wp.digiBlocks;j0("digiblocks/text",{apiVersion:2,title:digiBlocksData.blocks.text.title,category:"digiblocks",icon:{src:()=>{let{viewbox:ie,path:e}=digiBlocksData.blocks.text.icon;return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${ie}`,className:"digiblocks-editor-icons"},wp.element.createElement("path",{d:e}))}},description:digiBlocksData.blocks.text.description,keywords:[sa("text","digiblocks"),sa("paragraph","digiblocks"),sa("content","digiblocks")],supports:{inserter:!!U0("text"),html:!1,className:!1,customClassName:!1,anchor:!1},attributes:{id:{type:"string",default:""},anchor:{type:"string",default:""},visibility:{type:"object",default:{desktop:!1,tablet:!1,mobile:!1}},customClasses:{type:"string",default:""},content:{type:"string",default:sa("This is a powerful text block with advanced styling options.","digiblocks")},htmlTag:{type:"string",default:"p"},align:{type:"object",default:{desktop:"left",tablet:"left",mobile:"left"}},maxWidth:{type:"object",default:{desktop:{value:"",unit:"px"},tablet:{value:"",unit:"px"},mobile:{value:"",unit:"px"}}},textColor:{type:"string",default:"#333333"},textHoverColor:{type:"string",default:""},backgroundColor:{type:"string",default:""},backgroundHoverColor:{type:"string",default:""},backgroundGradient:{type:"string",default:"none"},typography:{type:"object",default:{fontFamily:"",fontSize:{desktop:16,tablet:15,mobile:14},fontSizeUnit:"px",fontWeight:"",fontStyle:"normal",textTransform:"",textDecoration:"",lineHeight:{desktop:1.5,tablet:1.4,mobile:1.3},lineHeightUnit:"em",letterSpacing:{desktop:0,tablet:0,mobile:0},letterSpacingUnit:"px"}},textShadow:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.3)",horizontal:0,vertical:0,blur:0}},padding:{type:"object",default:{desktop:{top:0,right:0,bottom:0,left:0,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},margin:{type:"object",default:{desktop:{top:0,right:0,bottom:16,left:0,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},animation:{type:"string",default:"none"},borderStyle:{type:"string",default:"default"},borderRadius:{type:"object",default:{desktop:{top:0,right:0,bottom:0,left:0,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderWidth:{type:"object",default:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderColor:{type:"string",default:"#e0e0e0"},borderHoverColor:{type:"string",default:""},hoverEffect:{type:"string",default:"none"},boxShadow:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},boxShadowHover:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}}},example:{attributes:{content:sa("This is a powerful text block with advanced styling options. You can customize typography, colors, spacing, borders, shadows and add animations.","digiblocks"),textColor:"#2563eb",htmlTag:"h2"},viewportWidth:400},edit:Ag,save:ep});})();
