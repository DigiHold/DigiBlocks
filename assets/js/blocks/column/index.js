(()=>{var{__:e}=window.wp.i18n,{useBlockProps:Be,useInnerBlocksProps:we,InspectorControls:_e,PanelColorSettings:V,MediaUpload:Oe,MediaUploadCheck:Pe,ButtonBlockAppender:Me}=window.wp.blockEditor,{ToggleControl:W,SelectControl:y,RangeControl:G,Button:U}=window.wp.components,{useState:F,useEffect:Ne}=window.wp.element,{useSelect:ze,useDispatch:Xe}=window.wp.data,{useBlockId:He,getDimensionCSS:b}=digi.utils,{tabIcons:Y}=digi.icons,{ResponsiveControl:x,DimensionControl:D,BoxShadowControl:Re,CustomTabPanel:Te,TabPanelBody:k,GradientControl:De}=digi.components,Ie=({attributes:I,setAttributes:t,clientId:m})=>{let{id:i,visibility:s,width:f,order:u,hoverEffect:O,backgroundColor:L,backgroundGradient:v,backgroundImage:g,backgroundPosition:X,backgroundRepeat:q,backgroundSize:J,backgroundOverlay:P,backgroundOverlayOpacity:K,backgroundOverlayBlendMode:Q,padding:S,margin:$,borderStyle:C,borderWidth:B,borderColor:Z,borderRadius:w,boxShadow:p,boxShadowHover:d}=I;He(i,m,t);let[n,ne]=F(window.digi.responsiveState.activeDevice),[A,re]=F(()=>{if(window.digi.uiState){let o=window.digi.uiState.getActiveTab(m);if(o)return o}return"options"}),[We,Ge]=F(!1),{parentClientId:Ue,hasChildBlocks:se}=ze(o=>{let{getBlockParents:r,getBlockCount:E}=o("core/block-editor"),M=r(m);return{parentClientId:M.length>0?M[0]:null,hasChildBlocks:E(m)>0}},[m]);Ne(()=>window.digi.responsiveState.subscribe(r=>{ne(r)}),[]);let de=(o,r)=>{t({width:{...f,[r]:Math.round(o*100)/100}})},ce=()=>{if(!v.enable||!v.colors.length)return"";let o=v.colors.map(r=>`${r.color} ${r.position}%`).join(", ");return v.type==="radial"?`background-image: radial-gradient(circle at ${v.position}, ${o});`:`background-image: linear-gradient(${v.angle}deg, ${o});`},be=[{label:e("Top Left","digiblocks"),value:"top left"},{label:e("Top Center","digiblocks"),value:"top center"},{label:e("Top Right","digiblocks"),value:"top right"},{label:e("Center Left","digiblocks"),value:"center left"},{label:e("Center Center","digiblocks"),value:"center center"},{label:e("Center Right","digiblocks"),value:"center right"},{label:e("Bottom Left","digiblocks"),value:"bottom left"},{label:e("Bottom Center","digiblocks"),value:"bottom center"},{label:e("Bottom Right","digiblocks"),value:"bottom right"}],ue=[{label:e("No Repeat","digiblocks"),value:"no-repeat"},{label:e("Repeat","digiblocks"),value:"repeat"},{label:e("Repeat X","digiblocks"),value:"repeat-x"},{label:e("Repeat Y","digiblocks"),value:"repeat-y"}],ge=[{label:e("Cover","digiblocks"),value:"cover"},{label:e("Contain","digiblocks"),value:"contain"},{label:e("Auto","digiblocks"),value:"auto"},{label:e("100%","digiblocks"),value:"100%"}],pe=[{label:e("None","digiblocks"),value:"none"},{label:e("Solid","digiblocks"),value:"solid"},{label:e("Dashed","digiblocks"),value:"dashed"},{label:e("Dotted","digiblocks"),value:"dotted"},{label:e("Double","digiblocks"),value:"double"}],ke=[{label:e("Normal","digiblocks"),value:"normal"},{label:e("Multiply","digiblocks"),value:"multiply"},{label:e("Screen","digiblocks"),value:"screen"},{label:e("Overlay","digiblocks"),value:"overlay"},{label:e("Darken","digiblocks"),value:"darken"},{label:e("Lighten","digiblocks"),value:"lighten"},{label:e("Color Dodge","digiblocks"),value:"color-dodge"},{label:e("Color Burn","digiblocks"),value:"color-burn"},{label:e("Hard Light","digiblocks"),value:"hard-light"},{label:e("Soft Light","digiblocks"),value:"soft-light"},{label:e("Difference","digiblocks"),value:"difference"},{label:e("Exclusion","digiblocks"),value:"exclusion"},{label:e("Hue","digiblocks"),value:"hue"},{label:e("Saturation","digiblocks"),value:"saturation"},{label:e("Color","digiblocks"),value:"color"},{label:e("Luminosity","digiblocks"),value:"luminosity"}],me=[{label:e("None","digiblocks"),value:"none"},{label:e("Lift","digiblocks"),value:"lift"},{label:e("Scale","digiblocks"),value:"scale"},{label:e("Glow","digiblocks"),value:"glow"}],fe=[{name:"options",title:e("Layout","digiblocks"),icon:Y.optionsIcon},{name:"style",title:e("Style","digiblocks"),icon:Y.styleIcon},{name:"background",title:e("Background","digiblocks"),icon:Y.backgroundIcon}],ve=()=>{let o=n,r=(l,N)=>{let z=a=>l&&l[a]&&(l[a].top!==void 0&&l[a].top!==""||l[a].right!==void 0&&l[a].right!==""||l[a].bottom!==void 0&&l[a].bottom!==""||l[a].left!==void 0&&l[a].left!==""),c;if(z(N))c=l[N];else if(N==="tablet"&&z("desktop"))c=l.desktop;else if(N==="mobile")if(z("tablet"))c=l.tablet;else if(z("desktop"))c=l.desktop;else return"";else return"";let H=(a,T)=>a===void 0||a===""?T==="px"?"10px":"0"+T:T==="px"&&parseFloat(a)<10?"10px":a+T,R=c.unit||"px",ye=H(c.top,R),xe=H(c.right,R),Se=H(c.bottom,R),$e=H(c.left,R);return`padding: ${ye} ${xe} ${Se} ${$e} !important;`},E=r(S,o),M=r(S,"tablet"),ee=r(S,"mobile"),h="";L&&(h+=`background-color: ${L};`);let j=ce();if(j&&(h+=j),g&&g.url){let l=`url(${g.url})`;j?h=h.replace(/background-image: ([^;]+);/,`background-image: ${l}, $1;`):h+=`background-image: ${l};`,h+=`background-position: ${X};
            background-repeat: ${q};
            background-size: ${J};`}let oe="";P&&(oe=`
            .${i}:before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: ${P};
                opacity: ${K};
                mix-blend-mode: ${Q};
                z-index: 1;
                pointer-events: none;
                border-radius: inherit;
            }
            .${i} > * {
                position: relative;
                z-index: 2;
            }`);let te="";p&&p.enable&&(te=`box-shadow: ${p.horizontal}px ${p.vertical}px ${p.blur}px ${p.spread}px ${p.color};`);let _="",Ye="";if(d&&d.enable){let l=d.position==="inset"?"inset ":"";_+=`box-shadow: ${l}${d.horizontal}px ${d.vertical}px ${d.blur}px ${d.spread}px ${d.color};`}return O==="lift"?_+="transform: translateY(-10px);":O==="scale"?_+="transform: scale(1.05);":O==="glow"&&(_+="filter: brightness(1.1);"),`
            /* Column Block - ${i} */
            .${i} {
                position: relative;
                width: ${f[o]}%;
                ${E}
				${b($,"margin",o)}
                display: flex;
                flex-direction: column;
                ${u[o]!==0?`order: ${u[o]};`:""}
                ${h}
                ${C!=="none"?`
					border-style: ${C}!important;
					${b(B,"border-width",o,!0)}
					border-color: ${Z}!important;`:""}
                ${b(w,"border-radius",o)}
				${te}
                transition: all 0.3s ease;
            }
            
            /* Hover effects */
            .${i}:hover {
                ${_}
            }

            .${i} > div {
                width: 100%;
            }
            
            ${oe}
            
            /* Tablet styles */
            @media (max-width: 991px) {
                .${i} {
                    width: ${f.tablet}%;
					${M}
					${b($,"margin","tablet")}
                    ${u.tablet!==0?`order: ${u.tablet};`:""}
					${b(w,"border-radius","tablet")}
                    ${C!=="none"?`${b(B,"border-width","tablet",!0)}`:""}
                }
            }
            
            /* Mobile styles */
            @media (max-width: 767px) {
                .${i} {
                    width: ${f.mobile}%;
					${ee}
					${b($,"margin","mobile")}
                    ${u.mobile!==0?`order: ${u.mobile};`:""}
					${b(w,"border-radius","mobile")}
                    ${C!=="none"?`${b(B,"border-width","mobile",!0)}`:""}
                }
            }

			/* Visibility Controls */
			${s.desktop?`
				@media (min-width: 992px) {
					.${i} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${s.tablet?`
				@media (min-width: 768px) and (max-width: 991px) {
					.${i} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${s.mobile?`
				@media (max-width: 767px) {
					.${i} {
						opacity: 0.5 !important;
					}
				}
			`:""}
        `},he=Be({className:`digiblocks-column ${i}`}),Ce=we(he,{templateLock:!1,renderAppender:se?void 0:()=>wp.element.createElement(Me,{rootClientId:m})});return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(_e,null,wp.element.createElement(Te,{tabs:fe,activeTab:A,onSelect:re},(()=>{switch(A){case"options":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(k,{tab:"options",name:"column",title:e("Column","digiblocks"),initialOpen:!0},wp.element.createElement(x,{label:e("Width (%)","digiblocks")},wp.element.createElement(G,{value:f[n],onChange:o=>de(o,n),min:10,max:100,step:.01,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(x,{label:e("Order","digiblocks")},wp.element.createElement(G,{value:u[n],onChange:o=>t({order:{...u,[n]:o}}),min:-10,max:10,step:1,allowReset:!0,resetFallbackValue:0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}))),wp.element.createElement(k,{tab:"layout",name:"spacing",title:e("Spacing","digiblocks"),initialOpen:!1},wp.element.createElement(x,{label:e("Padding","digiblocks")},wp.element.createElement(D,{values:S[n],onChange:o=>t({padding:{...S,[n]:o}})})),wp.element.createElement(x,{label:e("Margin","digiblocks")},wp.element.createElement(D,{values:$[n],onChange:o=>t({margin:{...$,[n]:o}})}))),wp.element.createElement(k,{tab:"layout",name:"effect",title:e("Hover Effect","digiblocks"),initialOpen:!1},wp.element.createElement(y,{label:e("Hover Effect","digiblocks"),value:O||"none",options:me,onChange:o=>t({hoverEffect:o}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(k,{tab:"layout",name:"visibility",title:e("Visibility","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control__help",style:{padding:"12px",backgroundColor:"#f0f6fc",border:"1px solid #c3ddfd",borderRadius:"4px",marginBottom:"16px"}},wp.element.createElement("strong",null,e("Editor Note:","digiblocks")),wp.element.createElement("br",null),e("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.","digiblocks")),wp.element.createElement(W,{label:e("Hide on Desktop","digiblocks"),checked:s.desktop,onChange:o=>t({visibility:{...s,desktop:o}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(W,{label:e("Hide on Tablet","digiblocks"),checked:s.tablet,onChange:o=>t({visibility:{...s,tablet:o}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(W,{label:e("Hide on Mobile","digiblocks"),checked:s.mobile,onChange:o=>t({visibility:{...s,mobile:o}}),__nextHasNoMarginBottom:!0})));case"style":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(k,{tab:"style",name:"borders",title:e("Borders & Radius","digiblocks"),initialOpen:!0},wp.element.createElement(y,{label:e("Border Style","digiblocks"),value:C,options:pe,onChange:o=>t({borderStyle:o}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),C!=="none"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(x,{label:e("Border Width","digiblocks")},wp.element.createElement(D,{values:B[n],onChange:o=>t({borderWidth:{...B,[n]:o}})})),wp.element.createElement(V,{title:"",enableAlpha:!0,colorSettings:[{value:Z,onChange:o=>t({borderColor:o}),label:e("Border Color","digiblocks")}]})),wp.element.createElement(x,{label:e("Border Radius","digiblocks")},wp.element.createElement(D,{values:w[n],onChange:o=>t({borderRadius:{...w,[n]:o}}),units:[{label:"px",value:"px"},{label:"%",value:"%"},{label:"em",value:"em"}]})),wp.element.createElement(Re,{normalValue:p,hoverValue:d,onNormalChange:o=>t({boxShadow:o}),onHoverChange:o=>t({boxShadowHover:o})})));case"background":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(k,{tab:"background",name:"background",title:e("Background","digiblocks"),initialOpen:!0},wp.element.createElement(V,{title:e("Background Color","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:L,onChange:o=>t({backgroundColor:o}),label:e("Background Color","digiblocks")}]}),wp.element.createElement("div",{className:"digiblocks-media-control"},wp.element.createElement("p",{className:"components-base-control__label"},e("Background Image","digiblocks")),wp.element.createElement(Pe,null,wp.element.createElement(Oe,{onSelect:o=>{t({backgroundImage:{url:o.url,id:o.id,alt:o.alt||"",size:o.sizes?.full?.url?"full":""}})},allowedTypes:["image"],value:g?.id,render:({open:o})=>wp.element.createElement("div",{className:"digiblocks-media-upload-wrapper"},g?.url?wp.element.createElement("div",{className:"digiblocks-media-preview"},wp.element.createElement("img",{src:g.url,alt:g.alt||""}),wp.element.createElement("div",{className:"digiblocks-media-controls"},wp.element.createElement(U,{isPrimary:!0,onClick:o},wp.element.createElement("span",{class:"dashicon dashicons dashicons-edit"})),wp.element.createElement(U,{isDestructive:!0,onClick:()=>t({backgroundImage:{url:"",id:0,alt:"",size:""}})},wp.element.createElement("span",{class:"dashicon dashicons dashicons-trash"})))):wp.element.createElement(U,{className:"digiblocks-media-upload-button",isPrimary:!0,onClick:o},e("Select Image","digiblocks")))}))),g?.url&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(y,{label:e("Background Position","digiblocks"),value:X,options:be,onChange:o=>t({backgroundPosition:o}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(y,{label:e("Background Repeat","digiblocks"),value:q,options:ue,onChange:o=>t({backgroundRepeat:o}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(y,{label:e("Background Size","digiblocks"),value:J,options:ge,onChange:o=>t({backgroundSize:o}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}))),wp.element.createElement(k,{tab:"background",name:"gradient",title:e("Background Gradient","digiblocks"),initialOpen:!1},wp.element.createElement(De,{value:v,onChange:o=>t({backgroundGradient:o})})),wp.element.createElement(k,{tab:"background",name:"overlay",title:e("Background Overlay","digiblocks"),initialOpen:!1},wp.element.createElement(V,{title:e("Overlay Color","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:P,onChange:o=>t({backgroundOverlay:o}),label:e("Overlay Color","digiblocks")}]}),P&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(G,{label:e("Overlay Opacity","digiblocks"),value:K,onChange:o=>t({backgroundOverlayOpacity:o}),min:0,max:1,step:.01,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(y,{label:e("Blend Mode","digiblocks"),value:Q,options:ke,onChange:o=>t({backgroundOverlayBlendMode:o}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}))));default:return null}})())),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:ve()}}),wp.element.createElement("div",{...Ce}))},le=Ie;var{__:Je}=window.wp.i18n,{useBlockProps:Le,useInnerBlocksProps:Ee}=window.wp.blockEditor,je=({attributes:I})=>{let{id:t,backgroundOverlay:m}=I,i=`digiblocks-column ${t}`,s=Le.save({className:i}),f=Ee.save(s);return wp.element.createElement("div",{...f})},ie=je;var{__:ae}=window.wp.i18n,{registerBlockType:Ve}=window.wp.blocks;Ve("digiblocks/column",{apiVersion:2,title:ae("Column","digiblocks"),parent:["digiblocks/container"],icon:{src:()=>wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512",width:"24",height:"24"},wp.element.createElement("path",{d:"M448 64l0 384 128 0c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L448 64zm-32 0L224 64l0 384 192 0 0-384zM192 448l0-384L64 64C46.3 64 32 78.3 32 96l0 320c0 17.7 14.3 32 32 32l128 0zM0 96C0 60.7 28.7 32 64 32l512 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96z"}))},description:ae("Flexible column component to use within Container blocks","digiblocks"),supports:{inserter:!1,reusable:!1,html:!1,className:!1,customClassName:!1,anchor:!1},attributes:{id:{type:"string",default:""},visibility:{type:"object",default:{desktop:!1,tablet:!1,mobile:!1}},width:{type:"object",default:{desktop:100,tablet:100,mobile:100}},order:{type:"object",default:{desktop:0,tablet:0,mobile:0}},hoverEffect:{type:"string",default:"none"},backgroundColor:{type:"string",default:""},backgroundGradient:{type:"object",default:{enable:!1,type:"linear",angle:90,position:"center center",colors:[{color:"#667eea",position:0},{color:"#764ba2",position:100}]}},backgroundImage:{type:"object",default:{url:"",id:0,alt:"",size:""}},backgroundPosition:{type:"string",default:"center center"},backgroundRepeat:{type:"string",default:"no-repeat"},backgroundSize:{type:"string",default:"cover"},backgroundOverlay:{type:"string",default:""},backgroundOverlayOpacity:{type:"number",default:.7},backgroundOverlayBlendMode:{type:"string",default:"normal"},padding:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},margin:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderStyle:{type:"string",default:"none"},borderWidth:{type:"object",default:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderColor:{type:"string",default:"#e0e0e0"},borderRadius:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},boxShadow:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},boxShadowHover:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}}},edit:le,save:ie});})();
