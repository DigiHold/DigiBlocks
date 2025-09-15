(()=>{var{__:o}=window.wp.i18n,{useBlockProps:eo,useInnerBlocksProps:oo,InspectorControls:to,PanelColorSettings:ne,MediaUpload:se,MediaUploadCheck:de}=window.wp.blockEditor,{ToggleControl:J,SelectControl:M,RangeControl:W,Button:h,__experimentalToggleGroupControl:po,__experimentalToggleGroupControlOption:mo}=window.wp.components,{useState:Be,useEffect:re,useRef:lo}=window.wp.element,{useSelect:io}=window.wp.data,{useBlockId:ao,getDimensionCSS:C,animations:j,animationPreview:_e}=digi.utils,{tabIcons:K}=digi.icons,{ResponsiveControl:P,DimensionControl:Q,BoxShadowControl:no,CustomTabPanel:so,TabPanelBody:v,ResponsiveRangeControl:ro,ResponsiveButtonGroup:A,GradientControl:co}=digi.components,bo=({attributes:R,setAttributes:t,clientId:B})=>{let{id:l,anchor:F,visibility:r,customClasses:G,contentWidth:i,contentMaxWidth:a,horizontalAlign:g,verticalAlign:p,heightType:f,minHeight:z,nestedWidth:E,gap:u,overflowHidden:ce,zIndex:ee,backgroundColor:oe,backgroundGradient:_,backgroundImage:$,backgroundPosition:be,backgroundRepeat:ue,backgroundSize:ge,backgroundVideo:S,backgroundVideoFallbackImage:H,backgroundOverlay:U,backgroundOverlayOpacity:pe,backgroundOverlayBlendMode:me,padding:D,margin:I,borderStyle:T,borderWidth:V,borderColor:ke,borderRadius:O,boxShadow:w,boxShadowHover:x,animation:m}=R;ao(l,B,t);let[n,Me]=Be(window.digi.responsiveState.activeDevice),[ve,Re]=Be(()=>{if(window.digi.uiState){let e=window.digi.uiState.getActiveTab(B);if(e)return e}return"options"}),he=lo(null);re(()=>window.digi.responsiveState.subscribe(d=>{Me(d)}),[]);let{isNested:c,hasChildBlocks:ze}=io(e=>{let{getBlockParentsByBlockName:d,getBlockCount:te}=e("core/block-editor");return{isNested:d(B,"digiblocks/row").length>0,hasChildBlocks:te(B)>0}},[B]);re(()=>{t({isNested:c})},[c,t]),re(()=>{if(m&&m!=="none"){let e=setTimeout(()=>{_e(l,m,j,he)},100);return()=>clearTimeout(e)}},[m]);let He=()=>{if(!_.enable||!_.colors.length)return"";let e=_.colors.map(d=>`${d.color} ${d.position}%`).join(", ");return _.type==="radial"?`background-image: radial-gradient(circle at ${_.position}, ${e});`:`background-image: linear-gradient(${_.angle}deg, ${e});`},De=[{label:o("None","digiblocks"),value:"none"},...Object.keys(j).map(e=>({label:e.replace(/-/g," ").replace(/\b\w/g,d=>d.toUpperCase()),value:e}))],Ie=()=>{_e(l,m,j,he)},Ve=[{label:o("Top Left","digiblocks"),value:"top left"},{label:o("Top Center","digiblocks"),value:"top center"},{label:o("Top Right","digiblocks"),value:"top right"},{label:o("Center Left","digiblocks"),value:"center left"},{label:o("Center Center","digiblocks"),value:"center center"},{label:o("Center Right","digiblocks"),value:"center right"},{label:o("Bottom Left","digiblocks"),value:"bottom left"},{label:o("Bottom Center","digiblocks"),value:"bottom center"},{label:o("Bottom Right","digiblocks"),value:"bottom right"}],Oe=[{label:o("No Repeat","digiblocks"),value:"no-repeat"},{label:o("Repeat","digiblocks"),value:"repeat"},{label:o("Repeat X","digiblocks"),value:"repeat-x"},{label:o("Repeat Y","digiblocks"),value:"repeat-y"}],We=[{label:o("Cover","digiblocks"),value:"cover"},{label:o("Contain","digiblocks"),value:"contain"},{label:o("Auto","digiblocks"),value:"auto"},{label:o("100%","digiblocks"),value:"100%"}],je=[{label:o("None","digiblocks"),value:"none"},{label:o("Solid","digiblocks"),value:"solid"},{label:o("Dashed","digiblocks"),value:"dashed"},{label:o("Dotted","digiblocks"),value:"dotted"},{label:o("Double","digiblocks"),value:"double"}],Le=[{label:o("Normal","digiblocks"),value:"normal"},{label:o("Multiply","digiblocks"),value:"multiply"},{label:o("Screen","digiblocks"),value:"screen"},{label:o("Overlay","digiblocks"),value:"overlay"},{label:o("Darken","digiblocks"),value:"darken"},{label:o("Lighten","digiblocks"),value:"lighten"},{label:o("Color Dodge","digiblocks"),value:"color-dodge"},{label:o("Color Burn","digiblocks"),value:"color-burn"},{label:o("Hard Light","digiblocks"),value:"hard-light"},{label:o("Soft Light","digiblocks"),value:"soft-light"},{label:o("Difference","digiblocks"),value:"difference"},{label:o("Exclusion","digiblocks"),value:"exclusion"},{label:o("Hue","digiblocks"),value:"hue"},{label:o("Saturation","digiblocks"),value:"saturation"},{label:o("Color","digiblocks"),value:"color"},{label:o("Luminosity","digiblocks"),value:"luminosity"}],Fe=[{name:"options",title:o("Layout","digiblocks"),icon:K.optionsIcon},{name:"style",title:o("Style","digiblocks"),icon:K.styleIcon},{name:"background",title:o("Background","digiblocks"),icon:K.backgroundIcon},{name:"advanced",title:o("Advanced","digiblocks"),icon:K.advancedIcon}],k=(e,d)=>e[d]&&e[d].value!==""?{value:e[d].value,unit:e[d].unit||"px"}:d==="tablet"?{value:e.desktop.value,unit:e.desktop.unit||"px"}:d==="mobile"?e.tablet&&e.tablet.value!==""?{value:e.tablet.value,unit:e.tablet.unit||"px"}:{value:e.desktop.value,unit:e.desktop.unit||"px"}:{value:0,unit:"px"},Ge=()=>{let e=n,d=(s,Y)=>{let X=b=>s&&s[b]&&(s[b].top!==void 0&&s[b].top!==""||s[b].right!==void 0&&s[b].right!==""||s[b].bottom!==void 0&&s[b].bottom!==""||s[b].left!==void 0&&s[b].left!==""),y;if(X(Y))y=s[Y];else if(Y==="tablet"&&X("desktop"))y=s.desktop;else if(Y==="mobile")if(X("tablet"))y=s.tablet;else if(X("desktop"))y=s.desktop;else return"";else return"";let q=(b,ae)=>b===void 0||b===""?"0"+ae:ae==="px"&&parseFloat(b)<10?"10px":b+ae,Z=y.unit||"px",Je=q(y.top,Z),Ke=q(y.right,Z),Qe=q(y.bottom,Z),Ae=q(y.left,Z);return`padding: ${Je} ${Ke} ${Qe} ${Ae} !important;`},te=d(D,e),qe=d(D,"tablet"),Ze=d(D,"mobile"),fe="";m&&m!=="none"&&j[m]&&(fe=j[m].keyframes);let N="";oe&&(N+=`background-color: ${oe};`);let le=He();if(le&&(N+=le),$&&$.url){let s=`url(${$.url})`;le?N=N.replace(/background-image: ([^;]+);/,`background-image: ${s}, $1;`):N+=`background-image: ${s};`,N+=`background-position: ${be};
            background-repeat: ${ue};
            background-size: ${ge};`}let xe="";U&&(xe=`
            .${l}:before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: ${U};
                opacity: ${pe};
                mix-blend-mode: ${me};
                z-index: 1;
                pointer-events: none;
                border-radius: inherit;
            }
            .${l} > * {
                position: relative;
                z-index: 2;
            }`);let ye="";w&&w.enable&&(ye=`box-shadow: ${w.horizontal}px ${w.vertical}px ${w.blur}px ${w.spread}px ${w.color};`);let Ce="";x&&x.enable&&(Ce=`box-shadow: ${x.position==="inset"?"inset ":""}${x.horizontal}px ${x.vertical}px ${x.blur}px ${x.spread}px ${x.color};`);let ie="";c||(f[e]==="full"?ie="height: 100vh;":f[e]==="custom"&&(ie=`min-height: ${z[e]}px !important;`));let $e="";c||($e=`width: ${i[e]!==void 0&&i[e]!==""?i[e]:i.desktop}px;
            margin-left: auto;
            margin-right: auto;`);let we="";return c||(we=`max-width: ${a[e]!==void 0&&a[e]!==""?a[e]:a.desktop}%;`),`
            /* Row Block - ${l} */
            .${l} {
                position: relative;
                ${te}
                ${C(I,"margin",e)}
                width: 100%;
                ${ie}
                ${N}
                ${T!=="none"?`
                border-style: ${T}!important;
                ${C(V,"border-width",e,!0)}
                border-color: ${ke}!important;`:""}
                ${C(O,"border-radius",e)}
                ${ye}
                ${ce?"overflow: hidden;":""}
                ${ee?`z-index: ${ee};`:""}
                transition: all 0.3s ease;
            }
            
            .${l}:hover {
                ${Ce}
            }

            .${l} > .digiblocks-row-inner {
                display: flex;
                align-items: ${p[e]};
                justify-content: ${g[e]};
                gap: ${k(u,e).value}${k(u,e).unit};
                ${c?"":$e}
                ${c?"":we}
            }

            .${l}.is-nested > .block-editor-block-list__layout {
				display: flex;
				align-items: ${p[e]};
				justify-content: ${g[e]};
				gap: ${k(u,e).value}${k(u,e).unit};
				width: ${E[e]==="full"?"100%":"auto"};
			}
            
            ${xe}
            
            /* Background video */
            .${l} > .digiblocks-bg-video-container {
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
            
            .${l} > .digiblocks-bg-video {
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
                .${l} {
                    ${qe}
                    ${C(I,"margin","tablet")}
                    ${!c&&f.tablet==="custom"?`min-height: ${z.tablet}px;`:""}
                    ${C(O,"border-radius","tablet")}
                    ${T!=="none"?`${C(V,"border-width","tablet",!0)}`:""}
                }

                .${l} > .digiblocks-row-inner {
                    ${c?"":`
                        width: ${i.tablet!==void 0&&i.tablet!==""?i.tablet:i.desktop}px;
                        max-width: ${a.tablet!==void 0&&a.tablet!==""?a.tablet:a.desktop}%;
                    `}
                    align-items: ${p.tablet};
                    justify-content: ${g.tablet};
                    gap: ${k(u,"tablet").value}${k(u,"tablet").unit};
                }

                .${l}.is-nested > .block-editor-block-list__layout {
					align-items: ${p.tablet};
					justify-content: ${g.tablet};
					gap: ${k(u,"tablet").value}${k(u,"tablet").unit};
					width: ${E.tablet==="full"?"100%":"auto"};
				}
            }
            
            /* Mobile styles */
            @media (max-width: 767px) {
                .${l} {
                    ${Ze}
                    ${C(I,"margin","mobile")}
                    ${!c&&f.mobile==="custom"?`min-height: ${z.mobile}px;`:""}
                    ${C(O,"border-radius","mobile")}
                    ${T!=="none"?`${C(V,"border-width","mobile",!0)}`:""}
                }

                .${l} > .digiblocks-row-inner {
                    ${c?"":`
                        width: ${i.mobile!==void 0&&i.mobile!==""?i.mobile:i.tablet!==void 0&&i.tablet!==""?i.tablet:i.desktop}px;
                        max-width: ${a.mobile!==void 0&&a.mobile!==""?a.mobile:a.tablet!==void 0&&a.tablet!==""?a.tablet:a.desktop}%;
                    `}
                    align-items: ${p.mobile};
                    justify-content: ${g.mobile};
                    gap: ${k(u,"mobile").value}${k(u,"mobile").unit};
                }

                .${l}.is-nested > .block-editor-block-list__layout {
					align-items: ${p.mobile};
					justify-content: ${g.mobile};
					gap: ${k(u,"mobile").value}${k(u,"mobile").unit};
					width: ${E.mobile==="full"?"100%":"auto"};
				}
            }
            
            /* Animation keyframes */
            ${fe}

            /* Visibility Controls */
            ${r.desktop?`
                @media (min-width: 992px) {
                    .${l} {
                        opacity: 0.5 !important;
                    }
                }
            `:""}

            ${r.tablet?`
                @media (min-width: 768px) and (max-width: 991px) {
                    .${l} {
                        opacity: 0.5 !important;
                    }
                }
            `:""}

            ${r.mobile?`
                @media (max-width: 767px) {
                    .${l} {
                        opacity: 0.5 !important;
                    }
                }
            `:""}
        `},Ee=eo({className:`digiblocks-row ${l} ${G||""} ${c?"is-nested":""}`,id:F||null}),Ue=oo(c?{}:{className:"digiblocks-row-inner"},{templateLock:!1,orientation:"horizontal",renderAppender:ze?window.wp.blockEditor.InnerBlocks.DefaultBlockAppender:window.wp.blockEditor.InnerBlocks.ButtonBlockAppender}),Ye=()=>{switch(ve){case"options":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(v,{tab:"options",name:"layout",title:o("Row Layout","digiblocks"),initialOpen:!0},!c&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(P,{label:o("Content Width (px)","digiblocks")},wp.element.createElement(W,{value:i[n]!==""?i[n]:n==="desktop"?digiBlocksData.contentWidth||1200:i.desktop||digiBlocksData.contentWidth||1200,onChange:e=>t({contentWidth:{...i,[n]:e}}),min:300,max:2e3,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(P,{label:o("Content Max Width (%)","digiblocks")},wp.element.createElement(W,{value:a[n]!==""?a[n]:n==="desktop"?digiBlocksData.contentMaxWidth||90:a.desktop||digiBlocksData.contentMaxWidth||90,onChange:e=>t({contentMaxWidth:{...a,[n]:e}}),min:0,max:100,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(A,{label:o("Height","digiblocks"),value:f,onChange:e=>t({heightType:e}),options:[{label:o("Auto","digiblocks"),value:"auto"},{label:o("Full","digiblocks"),value:"full"},{label:o("Custom","digiblocks"),value:"custom"}]}),f[n]==="custom"&&wp.element.createElement(P,{label:o("Min Height","digiblocks")},wp.element.createElement(W,{value:z[n],onChange:e=>t({minHeight:{...z,[n]:e}}),min:0,max:1e3,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}))),c&&wp.element.createElement(A,{label:o("Width","digiblocks"),value:E,onChange:e=>t({nestedWidth:e}),options:[{label:o("Auto","digiblocks"),value:"auto"},{label:o("Full","digiblocks"),value:"full"}]}),wp.element.createElement(A,{label:o("Horizontal Align","digiblocks"),value:g,onChange:e=>t({horizontalAlign:e}),options:[{label:o("Left","digiblocks"),value:"flex-start"},{label:o("Center","digiblocks"),value:"center"},{label:o("Right","digiblocks"),value:"flex-end"},{label:o("Space","digiblocks"),value:"space-between"}]}),wp.element.createElement(A,{label:o("Vertical Align","digiblocks"),value:p,onChange:e=>t({verticalAlign:e}),options:[{label:o("Top","digiblocks"),value:"flex-start"},{label:o("Middle","digiblocks"),value:"center"},{label:o("Bottom","digiblocks"),value:"flex-end"}]})),wp.element.createElement(v,{tab:"layout",name:"spacing",title:o("Spacing","digiblocks"),initialOpen:!1},wp.element.createElement(ro,{label:o("Gap","digiblocks"),value:u,onChange:e=>t({gap:e}),units:[{label:"px",value:"px"},{label:"%",value:"%"},{label:"em",value:"em"},{label:"rem",value:"rem"}],defaultUnit:"px",min:0,max:100,step:1}),wp.element.createElement(P,{label:o("Padding","digiblocks")},wp.element.createElement(Q,{values:D[n],onChange:e=>t({padding:{...D,[n]:e}})})),wp.element.createElement(P,{label:o("Margin","digiblocks")},wp.element.createElement(Q,{values:I[n],onChange:e=>t({margin:{...I,[n]:e}})}))),wp.element.createElement(v,{tab:"layout",name:"visibility",title:o("Visibility","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control__help",style:{padding:"12px",backgroundColor:"#f0f6fc",border:"1px solid #c3ddfd",borderRadius:"4px",marginBottom:"16px"}},wp.element.createElement("strong",null,o("Editor Note:","digiblocks")),wp.element.createElement("br",null),o("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.","digiblocks")),wp.element.createElement(J,{label:o("Hide on Desktop","digiblocks"),checked:r.desktop,onChange:e=>t({visibility:{...r,desktop:e}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(J,{label:o("Hide on Tablet","digiblocks"),checked:r.tablet,onChange:e=>t({visibility:{...r,tablet:e}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(J,{label:o("Hide on Mobile","digiblocks"),checked:r.mobile,onChange:e=>t({visibility:{...r,mobile:e}}),__nextHasNoMarginBottom:!0})));case"style":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(v,{tab:"style",name:"borders",title:o("Borders & Radius","digiblocks"),initialOpen:!0},wp.element.createElement(M,{label:o("Border Style","digiblocks"),value:T,options:je,onChange:e=>t({borderStyle:e}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),T!=="none"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(P,{label:o("Border Width","digiblocks")},wp.element.createElement(Q,{values:V[n],onChange:e=>t({borderWidth:{...V,[n]:e}})})),wp.element.createElement(ne,{title:"",enableAlpha:!0,colorSettings:[{value:ke,onChange:e=>t({borderColor:e}),label:o("Border Color","digiblocks")}]})),wp.element.createElement(P,{label:o("Border Radius","digiblocks")},wp.element.createElement(Q,{values:O[n],onChange:e=>t({borderRadius:{...O,[n]:e}}),units:[{label:"px",value:"px"},{label:"%",value:"%"},{label:"em",value:"em"}]})),wp.element.createElement(no,{normalValue:w,hoverValue:x,onNormalChange:e=>t({boxShadow:e}),onHoverChange:e=>t({boxShadowHover:e})})),wp.element.createElement(v,{tab:"style",name:"advanced",title:o("Advanced","digiblocks"),initialOpen:!1},wp.element.createElement(J,{label:o("Overflow Hidden","digiblocks"),checked:ce,onChange:e=>t({overflowHidden:e}),help:o("Hide content that overflows the row boundaries.","digiblocks"),__nextHasNoMarginBottom:!0}),wp.element.createElement(W,{label:o("Z-Index","digiblocks"),value:ee,onChange:e=>t({zIndex:e}),min:-99,max:99,step:1,allowReset:!0,resetFallbackValue:0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})));case"background":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(v,{tab:"background",name:"background",title:o("Background","digiblocks"),initialOpen:!0},wp.element.createElement(ne,{title:o("Background Color","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:oe,onChange:e=>t({backgroundColor:e}),label:o("Background Color","digiblocks")}]}),wp.element.createElement("div",{className:"digiblocks-media-control"},wp.element.createElement("p",{className:"components-base-control__label"},o("Background Image","digiblocks")),wp.element.createElement(de,null,wp.element.createElement(se,{onSelect:e=>{t({backgroundImage:{url:e.url,id:e.id,alt:e.alt||"",size:e.sizes?.full?.url?"full":""}})},allowedTypes:["image"],value:$?.id,render:({open:e})=>wp.element.createElement("div",{className:"digiblocks-media-upload-wrapper"},$?.url?wp.element.createElement("div",{className:"digiblocks-media-preview"},wp.element.createElement("img",{src:$.url,alt:$.alt||""}),wp.element.createElement("div",{className:"digiblocks-media-controls"},wp.element.createElement(h,{isPrimary:!0,onClick:e},wp.element.createElement("span",{class:"dashicon dashicons dashicons-edit"})),wp.element.createElement(h,{isDestructive:!0,onClick:()=>t({backgroundImage:{url:"",id:0,alt:"",size:""}})},wp.element.createElement("span",{class:"dashicon dashicons dashicons-trash"})))):wp.element.createElement(h,{className:"digiblocks-media-upload-button",isPrimary:!0,onClick:e},o("Select Image","digiblocks")))}))),$?.url&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(M,{label:o("Background Position","digiblocks"),value:be,options:Ve,onChange:e=>t({backgroundPosition:e}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(M,{label:o("Background Repeat","digiblocks"),value:ue,options:Oe,onChange:e=>t({backgroundRepeat:e}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(M,{label:o("Background Size","digiblocks"),value:ge,options:We,onChange:e=>t({backgroundSize:e}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}))),wp.element.createElement(v,{tab:"background",name:"gradient",title:o("Background Gradient","digiblocks"),initialOpen:!1},wp.element.createElement(co,{value:_,onChange:e=>t({backgroundGradient:e})})),wp.element.createElement(v,{tab:"background",name:"backgroundVideo",title:o("Background Video","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"digiblocks-media-control"},wp.element.createElement("p",{className:"components-base-control__label"},o("Background Video","digiblocks")),wp.element.createElement(de,null,wp.element.createElement(se,{onSelect:e=>{t({backgroundVideo:{url:e.url,id:e.id}})},allowedTypes:["video"],value:S?.id,render:({open:e})=>wp.element.createElement("div",{className:"digiblocks-media-upload-wrapper"},S?.url?wp.element.createElement("div",{className:"digiblocks-media-preview"},wp.element.createElement("video",{controls:!0},wp.element.createElement("source",{src:S.url}),o("Your browser does not support the video tag.","digiblocks")),wp.element.createElement("div",{className:"digiblocks-media-controls"},wp.element.createElement(h,{isPrimary:!0,onClick:e},wp.element.createElement("span",{class:"dashicon dashicons dashicons-edit"})),wp.element.createElement(h,{isDestructive:!0,onClick:()=>t({backgroundVideo:{url:"",id:0}})},wp.element.createElement("span",{class:"dashicon dashicons dashicons-trash"})))):wp.element.createElement(h,{className:"digiblocks-media-upload-button",isPrimary:!0,onClick:e},o("Select Video","digiblocks")))}))),S?.url&&wp.element.createElement("div",{className:"digiblocks-media-control"},wp.element.createElement("p",{className:"components-base-control__label"},o("Video Fallback Image","digiblocks")),wp.element.createElement(de,null,wp.element.createElement(se,{onSelect:e=>{t({backgroundVideoFallbackImage:{url:e.url,id:e.id,alt:e.alt||""}})},allowedTypes:["image"],value:H?.id,render:({open:e})=>wp.element.createElement("div",{className:"digiblocks-media-upload-wrapper"},H?.url?wp.element.createElement("div",{className:"digiblocks-media-preview"},wp.element.createElement("img",{src:H.url,alt:H.alt||""}),wp.element.createElement("div",{className:"digiblocks-media-controls"},wp.element.createElement(h,{isPrimary:!0,onClick:e},wp.element.createElement("span",{class:"dashicon dashicons dashicons-edit"})),wp.element.createElement(h,{isDestructive:!0,onClick:()=>t({backgroundVideoFallbackImage:{url:"",id:0,alt:""}})},wp.element.createElement("span",{class:"dashicon dashicons dashicons-trash"})))):wp.element.createElement(h,{className:"digiblocks-media-upload-button",isPrimary:!0,onClick:e},o("Select Fallback Image","digiblocks")))})))),wp.element.createElement(v,{tab:"background",name:"overlay",title:o("Background Overlay","digiblocks"),initialOpen:!1},wp.element.createElement(ne,{title:o("Overlay Color","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:U,onChange:e=>t({backgroundOverlay:e}),label:o("Overlay Color","digiblocks")}]}),U&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(W,{label:o("Overlay Opacity","digiblocks"),value:pe,onChange:e=>t({backgroundOverlayOpacity:e}),min:0,max:1,step:.01,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(M,{label:o("Blend Mode","digiblocks"),value:me,options:Le,onChange:e=>t({backgroundOverlayBlendMode:e}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}))));case"advanced":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(v,{tab:"style",name:"animation",title:o("Animation","digiblocks"),initialOpen:!0},wp.element.createElement(M,{label:o("Animation Effect","digiblocks"),value:m,options:De,onChange:e=>t({animation:e}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),m&&m!=="none"&&wp.element.createElement("div",{style:{marginTop:"10px"}},wp.element.createElement(h,{variant:"secondary",isSecondary:!0,onClick:Ie,style:{width:"100%"}},o("Preview Animation","digiblocks")))),wp.element.createElement(v,{tab:"advanced",name:"additional",title:o("Additional","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control html-anchor-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"html-anchor"},o("HTML anchor","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"html-anchor",value:F||"",onChange:e=>t({anchor:e.target.value}),"aria-describedby":"html-anchor-help",autoCapitalize:"none",autoComplete:"off"})),wp.element.createElement("p",{id:"html-anchor-help",className:"components-base-control__help"},o(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`,"digiblocks")," ",wp.element.createElement("a",{className:"components-external-link",href:"https://wordpress.org/documentation/article/page-jumps/",target:"_blank",rel:"external noreferrer noopener"},wp.element.createElement("span",{className:"components-external-link__contents"},o("Learn more about anchors","digiblocks")),wp.element.createElement("span",{className:"components-external-link__icon","aria-label":"(opens in a new tab)"},"\u2197")))),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"additional-css-classes"},o("Additional CSS class(es)","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"additional-css-classes",value:G||"",onChange:e=>t({customClasses:e.target.value}),"aria-describedby":"additional-css-classes-help",autoComplete:"off"})),wp.element.createElement("p",{id:"additional-css-classes-help",className:"components-base-control__help"},o("Separate multiple classes with spaces.","digiblocks")))));default:return null}},Xe=()=>S?.url?wp.element.createElement("div",{className:"digiblocks-bg-video-container"},wp.element.createElement("video",{className:"digiblocks-bg-video",autoPlay:!0,muted:!0,loop:!0,playsInline:!0,poster:H?.url||""},wp.element.createElement("source",{src:S.url,type:"video/mp4"}))):null;return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(to,null,wp.element.createElement(so,{tabs:Fe,activeTab:ve,onSelect:Re,customClass:"four"},Ye())),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:Ge()}}),wp.element.createElement("div",{...Ee},S?.url&&wp.element.createElement(Xe,null),wp.element.createElement("div",{...Ue})))},Se=bo;var{__:vo}=window.wp.i18n,{useBlockProps:Ne,useInnerBlocksProps:Pe}=window.wp.blockEditor,uo=({attributes:R})=>{let{isNested:t,id:B,anchor:l,customClasses:F,backgroundVideo:r,backgroundVideoFallbackImage:G,animation:i}=R,a=`digiblocks-row ${B} ${F||""} ${t?"is-nested":""}${i!=="none"?` animate-${i}`:""}`,g,p;t?(g=Ne.save({className:a,id:l||null}),p=Pe.save()):(g=Ne.save({className:a,id:l||null}),p=Pe.save({className:"digiblocks-row-inner"}));let f=()=>r?.url?wp.element.createElement("div",{className:"digiblocks-bg-video-container"},wp.element.createElement("video",{className:"digiblocks-bg-video",autoPlay:!0,muted:!0,loop:!0,playsInline:!0,poster:G?.url||""},wp.element.createElement("source",{src:r.url,type:"video/mp4"}))):null;return t?wp.element.createElement("div",{...g},r&&r.url&&wp.element.createElement(f,null),p.children):wp.element.createElement("div",{...g},r&&r.url&&wp.element.createElement(f,null),wp.element.createElement("div",{...p}))},Te=uo;var{__:L}=window.wp.i18n,{registerBlockType:go}=window.wp.blocks;go("digiblocks/row",{apiVersion:2,title:digiBlocksData.blocks.row.title,category:"digiblocks",icon:{src:()=>{let{viewbox:R,path:t}=digiBlocksData.blocks.row.icon;return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${R}`,className:"digiblocks-editor-icons"},wp.element.createElement("path",{d:t}))}},description:digiBlocksData.blocks.row.description,keywords:[L("row","digiblocks"),L("flex","digiblocks"),L("horizontal","digiblocks"),L("layout","digiblocks")],supports:{html:!1,className:!1,customClassName:!1,anchor:!1},attributes:{isNested:{type:"boolean",default:!1},id:{type:"string",default:""},visibility:{type:"object",default:{desktop:!1,tablet:!1,mobile:!1}},anchor:{type:"string",default:""},customClasses:{type:"string",default:""},contentWidth:{type:"object",default:{desktop:parseInt(digiBlocksData.contentWidth)||1200,tablet:"",mobile:""}},contentMaxWidth:{type:"object",default:{desktop:parseInt(digiBlocksData.contentMaxWidth)||90,tablet:"",mobile:""}},heightType:{type:"object",default:{desktop:"auto",tablet:"auto",mobile:"auto"}},nestedWidth:{type:"object",default:{desktop:"auto",tablet:"auto",mobile:"auto"}},horizontalAlign:{type:"object",default:{desktop:"flex-start",tablet:"",mobile:""}},verticalAlign:{type:"object",default:{desktop:"center",tablet:"",mobile:""}},minHeight:{type:"object",default:{desktop:0,tablet:0,mobile:0}},gap:{type:"object",default:{desktop:{value:20,unit:"px"},tablet:{value:"",unit:"px"},mobile:{value:"",unit:"px"}}},overflowHidden:{type:"boolean",default:!1},zIndex:{type:"number",default:0},backgroundColor:{type:"string",default:""},backgroundGradient:{type:"object",default:{enable:!1,type:"linear",angle:90,position:"center center",colors:[{color:"#667eea",position:0},{color:"#764ba2",position:100}]}},backgroundImage:{type:"object",default:{url:"",id:0,alt:"",size:""}},backgroundPosition:{type:"string",default:"center center"},backgroundRepeat:{type:"string",default:"no-repeat"},backgroundSize:{type:"string",default:"cover"},backgroundVideo:{type:"object",default:{url:"",id:0,alt:"",size:""}},backgroundVideoFallbackImage:{type:"object",default:{url:"",id:0,alt:"",size:""}},backgroundOverlay:{type:"string",default:""},backgroundOverlayOpacity:{type:"number",default:.7},backgroundOverlayBlendMode:{type:"string",default:"normal"},padding:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},margin:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderStyle:{type:"string",default:"none"},borderWidth:{type:"object",default:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderColor:{type:"string",default:"#e0e0e0"},borderRadius:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},boxShadow:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},boxShadowHover:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},animation:{type:"string",default:"none"}},example:{attributes:{backgroundColor:"#f8f9fa",padding:{desktop:{top:20,right:20,bottom:20,left:20,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},innerBlocks:[{name:"digiblocks/text",attributes:{content:L("Row content goes here...","digiblocks")}}],viewportWidth:500},edit:Se,save:Te});})();
