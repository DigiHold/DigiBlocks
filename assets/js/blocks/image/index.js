(()=>{var{__:a}=window.wp.i18n,{useBlockProps:Da,InspectorControls:Oa,RichText:Ka,MediaUpload:He,MediaUploadCheck:ta,LinkControl:Ia,PanelColorSettings:Pe}=window.wp.blockEditor,{TextControl:Me,TabPanel:za,Notice:Ha,SelectControl:R,ToggleControl:ee,Button:m,RangeControl:Pa,__experimentalToggleGroupControl:ae,__experimentalToggleGroupControlOption:k,Spinner:oa,Placeholder:Ma,PanelRow:la,Modal:ja}=window.wp.components,{useState:x,useEffect:pe,useRef:na,useCallback:Ra}=window.wp.element,{useBlockId:Va,getDimensionCSS:me,animations:je,animationPreview:sa}=digi.utils,{tabIcons:Re}=digi.icons,{DimensionControl:fe,ResponsiveRangeControl:he,BoxShadowControl:Ua,TransformControl:Ea,CustomTabPanel:Xa,TabPanelBody:y}=digi.components,Ya=({attributes:F,setAttributes:i,clientId:ie})=>{let{id:d,anchor:L,visibility:f,customClasses:te,imageId:h,imageUrl:T,altText:V,title:U,dimensionType:G,containerWidth:oe,caption:Ve,width:E,height:B,sizeSlug:g,align:le,alignTablet:Wa,alignMobile:Za,objectFit:Ue,borderStyle:D,borderWidth:ne,borderRadius:se,borderColor:Ee,borderHoverColor:ke,boxShadow:_,boxShadowHover:N,padding:re,margin:de,url:xe,opensInNewTab:ca,rel:ga,animation:u,animationDuration:ye,animationDelay:we,hoverEffect:w,overlayEnable:X,overlayColor:Xe,overlayHoverOnly:Ce,position:W,horizontalOrientation:Ye,horizontalOffset:C,verticalOrientation:Fe,verticalOffset:S,zIndex:Z,transform:Se,transformHover:O}=F;Va(d,ie,i);let[I,ua]=x(window.digi.responsiveState.activeDevice),[Qa,qa]=x(!1),[Ja,Le]=x(!1),[_e,Q]=x(!1),[z,Ne]=x(""),[ce,q]=x([]),[j,$e]=x(!1),[ba,Te]=x(1),[Ge,ge]=x(!1),[H,Be]=x(!1),J=na(null);pe(()=>window.digi.responsiveState.subscribe(t=>{ua(t)}),[]);let[We,pa]=x(()=>{if(window.digi.uiState){let e=window.digi.uiState.getActiveTab(ie);if(e)return e}return"options"});pe(()=>{if(h&&g){let e=window.wp.media.attachment(h);e.get("url")?Ze(e):e.fetch().then(()=>{Ze(e)})}},[g,h]);let Ze=e=>{let t=e.get("url"),o=e.get("sizes");o&&o[g]&&(t=o[g].url),i({imageUrl:t})},Qe=na(null);pe(()=>{if(u&&u!=="none"){let e=setTimeout(()=>{sa(d,u,je,Qe,ye,we)},100);return()=>clearTimeout(e)}},[u]);let ma=()=>{sa(d,u,je,Qe,ye,we)},qe=Ra((e,t=1)=>{J.current&&clearTimeout(J.current),J.current=setTimeout(()=>{e.trim()?De(e,t):(q([]),ge(!1))},500)},[]);pe(()=>(_e&&z&&qe(z,1),()=>{J.current&&clearTimeout(J.current)}),[z,_e,qe]);let De=(e,t=1)=>{if(!e.trim())return;$e(!0);let o=new FormData;o.append("action","digiblocks_search_images"),o.append("query",e),o.append("page",t),o.append("per_page",20),o.append("nonce",digiBlocksData.image_search_nonce||""),fetch(digiBlocksData.ajax_url,{method:"POST",body:o}).then(n=>n.json()).then(n=>{$e(!1),n.success?(q(t===1?n.data.images:b=>[...b,...n.data.images]),ge(n.data.images.length===20),Te(t)):(console.error("Search error:",n.data),alert(a("Search failed. Please check your API configuration.","digiblocks")))}).catch(n=>{$e(!1),console.error("Search error:",n),alert(a("Search failed. Please try again.","digiblocks"))})},fa=e=>{Be(!0);let t=new FormData;t.append("action","digiblocks_download_image"),t.append("image_data",JSON.stringify(e)),t.append("nonce",digiBlocksData.image_search_nonce||""),fetch(digiBlocksData.ajax_url,{method:"POST",body:t}).then(o=>o.json()).then(o=>{if(Be(!1),o.success){let n=o.data;i({imageUrl:n.url,imageId:n.id,altText:n.alt||"",title:n.title||""}),Q(!1),Ne(""),q([]),Te(1),ge(!1)}else console.error("Download error:",o.data),alert(a("Failed to download image. Please try again.","digiblocks"))}).catch(o=>{Be(!1),console.error("Download error:",o),alert(a("Failed to download image. Please try again.","digiblocks"))})},ha=()=>{!j&&Ge&&De(z,ba+1)},ue=digiBlocksData&&digiBlocksData.image_search_available,va=[{label:a("None","digiblocks"),value:"none"},{label:a("Solid","digiblocks"),value:"solid"},{label:a("Dotted","digiblocks"),value:"dotted"},{label:a("Dashed","digiblocks"),value:"dashed"},{label:a("Double","digiblocks"),value:"double"},{label:a("Groove","digiblocks"),value:"groove"},{label:a("Inset","digiblocks"),value:"inset"},{label:a("Outset","digiblocks"),value:"outset"},{label:a("Ridge","digiblocks"),value:"ridge"}],ka=[{label:a("None","digiblocks"),value:"none"},{label:a("Zoom In","digiblocks"),value:"zoom-in"},{label:a("Zoom Out","digiblocks"),value:"zoom-out"},{label:a("Grayscale to Color","digiblocks"),value:"grayscale"},{label:a("Blur to Clear","digiblocks"),value:"blur"},{label:a("Rotate","digiblocks"),value:"rotate"},{label:a("Glow","digiblocks"),value:"glow"}],xa=[{label:a("Cover","digiblocks"),value:"cover"},{label:a("Contain","digiblocks"),value:"contain"},{label:a("Fill","digiblocks"),value:"fill"},{label:a("None","digiblocks"),value:"none"}],ya=[{label:a("None","digiblocks"),value:"none"},...Object.keys(je).map(e=>({label:e.replace(/-/g," ").replace(/\b\w/g,t=>t.toUpperCase()),value:e}))],wa=[{label:a("Thumbnail","digiblocks"),value:"thumbnail"},{label:a("Medium","digiblocks"),value:"medium"},{label:a("Large","digiblocks"),value:"large"},{label:a("Full Size","digiblocks"),value:"full"}],Ca=[{name:"options",title:a("Options","digiblocks"),icon:Re.optionsIcon},{name:"style",title:a("Style","digiblocks"),icon:Re.styleIcon},{name:"advanced",title:a("Advanced","digiblocks"),icon:Re.advancedIcon}],Sa=[{name:"normal",title:a("Normal","digiblocks"),className:"digiblocks-tab-1 normal"},{name:"hover",title:a("Hover","digiblocks"),className:"digiblocks-tab-2 hover"}],Je=(e,t="desktop")=>{if(!e||typeof e!="object")return"";let o=e[t];if(!o)return"";if(typeof o=="object"&&o.value!==void 0){if(o.value===""||o.value===null)return"";let n=o.unit||"px";return`${o.value}${n}`}return o},Ke=e=>{switch(e){case"%":return 100;case"em":case"rem":return 50;case"vw":case"vh":return 100;default:return 2e3}},Ae=e=>{switch(e){case"%":case"vw":case"vh":return 1;case"em":case"rem":return .1;default:return 1}},Oe=e=>{if(!e||!e.url){i({imageUrl:void 0,imageId:void 0,altText:""});return}let t=e.url;g&&e.sizes&&e.sizes[g]&&(t=e.sizes[g].url),i({imageUrl:t,imageId:e.id,altText:e.alt||"",title:e.title||""})},_a=()=>{i({imageUrl:void 0,imageId:void 0,altText:"",title:""})},ea=(e,t)=>{let o={left:"0%",center:"50%",right:"100%"},n={top:"0%",center:"50%",bottom:"100%"},b=o[e.xAnchor?.[t]||"center"],$=n[e.yAnchor?.[t]||"center"];return`${b} ${$}`},aa=(e,t)=>{if(!e)return"";let o=[],n=l=>{if(!l)return"";let s=l[t],v=c=>c===""||c===void 0||c===null?!0:typeof c=="object"&&c!==null?c.value===""||c.value===void 0||c.value===null:!1;return t==="tablet"&&v(s)&&(s=l.desktop),t==="mobile"&&v(s)&&(s=l.tablet,v(s)&&(s=l.desktop)),typeof s=="object"&&s!==null?s.value!==void 0?s.value:"":s},b=n(e.rotate);if(b!==""&&b!==void 0&&b!==null){if(e.rotate3d){let l=n(e.perspective);l!==""&&l!==void 0&&l!==null&&o.push(`perspective(${l}px)`)}o.push(`rotate(${b}deg)`)}if(e.rotate3d){let l=n(e.rotateX);l!==""&&l!==void 0&&l!==null&&o.push(`rotateX(${l}deg)`);let s=n(e.rotateY);s!==""&&s!==void 0&&s!==null&&o.push(`rotateY(${s}deg)`)}let $=e.offsetX?.[t]?.value,Y=e.offsetY?.[t]?.value,be=$!==""&&$!==void 0&&$!==null,K=Y!==""&&Y!==void 0&&Y!==null;if(be||K){let l=be?`${$}${e.offsetX[t].unit||"px"}`:"0",s=K?`${Y}${e.offsetY[t].unit||"px"}`:"0";o.push(`translate(${l}, ${s})`)}if(e.keepProportions){let l=n(e.scale);l!==""&&l!==void 0&&l!==null&&l!=1&&o.push(`scale(${l})`)}else{let l=n(e.scaleX),s=n(e.scaleY),v=l!==""&&l!==void 0&&l!==null?l:1,c=s!==""&&s!==void 0&&s!==null?s:1;(v!=1||c!=1)&&o.push(`scale(${v}, ${c})`)}let P=n(e.skewX);P!==""&&P!==void 0&&P!==null&&o.push(`skewX(${P}deg)`);let p=n(e.skewY);return p!==""&&p!==void 0&&p!==null&&o.push(`skewY(${p}deg)`),e.flipHorizontal&&o.push("scaleX(-1)"),e.flipVertical&&o.push("scaleY(-1)"),o.length>0?o.join(" "):""},Na=()=>{let e=window.digi.responsiveState.activeDevice,t="",o="";if(G==="custom"){let r=Je(E,e),A=Je(B,e);t=r?`width: ${r};`:"",o=A?`height: ${A};`:""}let n="";oe==="full"&&(n="width: 100%;");let b="";D&&D!=="none"?b=`
                border-style: ${D};
                border-color: ${Ee||"#e0e0e0"};
				${me(ne,"border-width",e)}
            `:b="border-style: none;";let $="box-shadow: none;";_&&_.enable&&($=`box-shadow: ${_.position==="inset"?"inset ":""}${_.horizontal}px ${_.vertical}px ${_.blur}px ${_.spread}px ${_.color};`);let Y=re&&re[e]?`${me(re,"padding",e)}`:"padding: 0;",be=de&&de[e]?`${me(de,"margin",e)}`:"margin: 0 0 30px 0;",K="";X&&(K=`
                .${d} .digiblocks-image-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: ${Xe||"rgba(0,0,0,0.5)"};
                    opacity: ${Ce?"0":"1"};
                    transition: opacity 0.3s ease;
                }
                
                .${d}:hover .digiblocks-image-overlay {
                    opacity: 1;
                }
            `);let P="";if(N&&N.enable){let r=N.position==="inset"?"inset ":"";P+=`box-shadow: ${r}${N.horizontal}px ${N.vertical}px ${N.blur}px ${N.spread}px ${N.color};`}ke&&(P+=`border-color: ${ke};`);let p="";w==="zoom-in"?p="transform: scale(1.1);":w==="zoom-out"?p="transform: scale(1);":w==="grayscale"?p="filter: grayscale(0);":w==="blur"?p="filter: blur(0);":w==="rotate"?p="transform: rotate(5deg);":w==="glow"&&(p="filter: brightness(1.1);");let l="";w==="zoom-out"?l="transform: scale(1.1);":w==="grayscale"?l="filter: grayscale(100%);":w==="blur"&&(l="filter: blur(5px);");let s="";if(W&&W!=="default"){s+=`position: ${W} !important;`;let r=C?.[e]?.value,A=C?.[e]?.unit||"px";(r===""||r===void 0)&&(e==="tablet"?r=C?.desktop?.value:e==="mobile"&&(r=C?.tablet?.value!==""&&C?.tablet?.value!==void 0?C?.tablet?.value:C?.desktop?.value)),r!==""&&r!==void 0&&(Ye==="left"?s+=`left: ${r}${A};`:s+=`right: ${r}${A};`);let M=S?.[e]?.value,ia=S?.[e]?.unit||"px";(M===""||M===void 0)&&(e==="tablet"?M=S?.desktop?.value:e==="mobile"&&(M=S?.tablet?.value!==""&&S?.tablet?.value!==void 0?S?.tablet?.value:S?.desktop?.value)),M!==""&&M!==void 0&&(Fe==="top"?s+=`top: ${M}${ia};`:s+=`bottom: ${M}${ia};`)}Z!==""&&Z!==void 0&&Z!==null&&(s+=`z-index: ${Z};`);let v="",c=aa(Se,e);c&&(v+=`transform: ${c};`,v+=`transform-origin: ${ea(Se,e)};`);let Ie=aa(O,e);if(Ie&&O&&O.transitionDuration!==""&&O.transitionDuration!==void 0&&O.transitionDuration!==null){let r=O.transitionDuration;v+=`transition: transform ${r}ms ease;`}let ze="";return Ie&&(ze+=`transform: ${Ie};`,ze+=`transform-origin: ${ea(O,e)};`),`
            /* Main block styles */
            .${d} {
                display: flex;
				${le==="left"?"justify-content: flex-start;":le==="right"?"justify-content: flex-end;":"justify-content: center;"}
                text-align: ${le};
                ${Y}
                ${be}
                ${s}
                ${n}
				${v}
                transition: all 0.3s ease;
            }
            
            /* Image styles */
            .${d} img {
                display: flex;
                ${t}
                ${o}
                max-width: 100%;
                object-fit: ${Ue};
                ${l}
                ${b}
                ${$}
				${me(se,"border-radius",e)}
                transition: all 0.3s ease;
            }
            
            /* Hover styles */
            .${d}:hover {
                ${P}
				${ze}
            }
            
            .${d}:hover img {
                ${p}
            }
            
            /* Overlay */
            ${K}

			/* Visibility Controls */
			${f.desktop?`
				@media (min-width: 992px) {
					.${d} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${f.tablet?`
				@media (min-width: 768px) and (max-width: 991px) {
					.${d} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${f.mobile?`
				@media (max-width: 767px) {
					.${d} {
						opacity: 0.5 !important;
					}
				}
			`:""}
        `},$a=()=>`
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
		`,Ta=()=>{switch(We){case"options":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(y,{tab:"options",name:"image",title:a("Image","digiblocks"),initialOpen:!0},wp.element.createElement(ta,null,wp.element.createElement("div",{className:"digiblocks-image-upload-section"},T?wp.element.createElement("div",{className:"digiblocks-media-preview"},wp.element.createElement("img",{src:T,alt:V||""}),wp.element.createElement("div",{className:"digiblocks-media-controls"},ue&&wp.element.createElement(m,{isPrimary:!0,onClick:()=>Q(!0),disabled:H},wp.element.createElement("span",{className:"dashicon dashicons dashicons-search"})),wp.element.createElement(He,{onSelect:Oe,allowedTypes:["image"],value:h,render:({open:e})=>wp.element.createElement(m,{isPrimary:!0,onClick:e,disabled:H},wp.element.createElement("span",{className:"dashicon dashicons dashicons-edit"}))}),wp.element.createElement(m,{isDestructive:!0,onClick:_a,disabled:H},wp.element.createElement("span",{className:"dashicon dashicons dashicons-trash"})))):wp.element.createElement("div",{className:"digiblocks-image-upload-buttons"},wp.element.createElement(He,{onSelect:Oe,allowedTypes:["image"],value:h,render:({open:e})=>wp.element.createElement(m,{className:"digiblocks-media-upload-button",isPrimary:!0,onClick:e,disabled:H},wp.element.createElement("span",{className:"dashicon dashicons dashicons-admin-media"}),a("Select Image","digiblocks"))}),ue&&wp.element.createElement(m,{className:"digiblocks-media-search-button",isSecondary:!0,onClick:()=>Q(!0),disabled:H},wp.element.createElement("span",{className:"dashicon dashicons dashicons-search"}),a("Search Images","digiblocks"))))),T&&wp.element.createElement("div",{style:{marginTop:"16px"}},wp.element.createElement(Me,{label:a("Alt Text","digiblocks"),value:V,onChange:e=>i({altText:e}),help:a("Alternative text describes your image to people who cannot see it. Add a descriptive text to help screen-reader users.","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Me,{label:a("Title","digiblocks"),value:U,onChange:e=>i({title:e}),help:a("Shown as a tooltip when a user hovers over the image.","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(R,{label:a("Image Size","digiblocks"),value:g,options:wa,onChange:e=>i({sizeSlug:e}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement("div",{style:{marginTop:"16px"}},wp.element.createElement("p",{className:"components-base-control__label"},a("Link Settings","digiblocks")),wp.element.createElement(Ia,{value:xe?{url:xe,opensInNewTab:ca,rel:ga}:void 0,onChange:e=>{i({url:e.url,opensInNewTab:e.opensInNewTab,rel:e.rel||""}),Le(!1)},settings:[{id:"opensInNewTab",title:a("Open in new tab")},{id:"rel",title:a("Add noopener noreferrer")}],onRemove:()=>{i({url:"",opensInNewTab:!1,rel:""}),Le(!1)}}))),!ue&&wp.element.createElement(Ha,{status:"info",isDismissible:!1,style:{marginTop:"16px"}},wp.element.createElement("p",{style:{margin:"0 0 8px 0"}},wp.element.createElement("strong",null,a("\u{1F4A1} Enhanced Image Search Available","digiblocks"))),wp.element.createElement("p",{style:{margin:"0 0 12px 0"}},a("Configure API providers to search and download images directly from Unsplash, Pexels, and Pixabay.","digiblocks")),wp.element.createElement(m,{isSecondary:!0,isSmall:!0,href:`${digiBlocksData.admin_url}admin.php?page=digiblocks-settings#image-providers`,target:"_blank",rel:"noopener noreferrer",icon:"admin-settings"},a("Configure Image Providers","digiblocks")))));case"style":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(y,{tab:"style",name:"dimensions",title:a("Dimensions","digiblocks"),initialOpen:!0},wp.element.createElement(ae,{label:a("Dimension Type","digiblocks"),value:G,onChange:e=>i({dimensionType:e}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(k,{value:"default",label:a("Default","digiblocks")}),wp.element.createElement(k,{value:"custom",label:a("Custom","digiblocks")})),G==="custom"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(he,{label:a("Width","digiblocks"),value:E,onChange:e=>i({width:e}),units:[{label:"px",value:"px"},{label:"%",value:"%"},{label:"vw",value:"vw"}],defaultValues:{desktop:{value:100,unit:"%"},tablet:{value:"",unit:""},mobile:{value:"",unit:""}},min:0,max:E?.[I]?.unit==="%"||E?.[I]?.unit==="vw"?100:1e3,step:1}),wp.element.createElement(he,{label:a("Height","digiblocks"),value:B,onChange:e=>i({height:e}),units:[{label:"px",value:"px"},{label:"%",value:"%"},{label:"vh",value:"vh"}],defaultUnit:"px",min:0,max:B?.[I]?.unit==="%"||B?.[I]?.unit==="vh"?100:1e3,step:1})),wp.element.createElement(ae,{label:a("Container Width","digiblocks"),value:oe,onChange:e=>i({containerWidth:e}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(k,{value:"auto",label:a("Auto","digiblocks")}),wp.element.createElement(k,{value:"full",label:a("Full","digiblocks")})),wp.element.createElement(R,{label:a("Object Fit","digiblocks"),value:Ue,options:xa,onChange:e=>i({objectFit:e}),help:a("Determines how the image should be resized to fit its container.","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(ae,{label:a("Alignment","digiblocks"),value:le,onChange:e=>i({align:e}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(k,{value:"left",label:a("Left","digiblocks")}),wp.element.createElement(k,{value:"center",label:a("Center","digiblocks")}),wp.element.createElement(k,{value:"right",label:a("Right","digiblocks")}))),wp.element.createElement(y,{tab:"style",name:"border",title:a("Border","digiblocks"),initialOpen:!1},wp.element.createElement(za,{className:"digiblocks-control-tabs",activeClass:"active-tab",tabs:Sa},e=>e.name==="normal"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(R,{label:a("Border Style","digiblocks"),value:D,options:va,onChange:t=>{t!=="none"&&(D==="none"||!D)&&((!ne||Object.keys(ne).length===0)&&i({borderWidth:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}}),(!se||Object.keys(se).length===0)&&i({borderRadius:{desktop:{top:0,right:0,bottom:0,left:0,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}})),i({borderStyle:t})},__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),D&&D!=="none"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Pe,{title:a("Border Color","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:Ee,onChange:t=>i({borderColor:t}),label:a("Border Color","digiblocks")}]}),wp.element.createElement(fe,{label:a("Border Width","digiblocks"),value:ne,onChange:t=>i({borderWidth:t})})),wp.element.createElement(fe,{label:a("Border Radius","digiblocks"),value:se,onChange:t=>i({borderRadius:t}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]})):wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Pe,{title:a("Border Hover Color","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:ke,onChange:t=>i({borderHoverColor:t}),label:a("Border Hover Color","digiblocks")}]})))),wp.element.createElement(y,{tab:"style",name:"shadow",title:a("Box Shadow","digiblocks"),initialOpen:!1},wp.element.createElement(Ua,{normalValue:_,hoverValue:N,onNormalChange:e=>i({boxShadow:e}),onHoverChange:e=>i({boxShadowHover:e})})),wp.element.createElement(y,{tab:"style",name:"effects",title:a("Effects","digiblocks"),initialOpen:!1},wp.element.createElement(R,{label:a("Hover Effect","digiblocks"),value:w,options:ka,onChange:e=>i({hoverEffect:e}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(la,null,wp.element.createElement(ee,{label:a("Enable Overlay","digiblocks"),checked:X,onChange:()=>i({overlayEnable:!X})})),X&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Pe,{title:a("Overlay Color","digiblocks"),enableAlpha:!0,colorSettings:[{value:Xe,onChange:e=>i({overlayColor:e}),label:a("Overlay Color","digiblocks")}]}),wp.element.createElement(la,null,wp.element.createElement(ee,{label:a("Show Overlay Only on Hover","digiblocks"),checked:Ce,onChange:()=>i({overlayHoverOnly:!Ce})})))));case"advanced":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(y,{tab:"advanced",name:"spacing",title:a("Spacing","digiblocks"),initialOpen:!0},wp.element.createElement(fe,{label:a("Padding","digiblocks"),value:re,onChange:e=>i({padding:e})}),wp.element.createElement(fe,{label:a("Margin","digiblocks"),value:de,onChange:e=>i({margin:e})})),wp.element.createElement(y,{tab:"advanced",name:"position",title:a("Position","digiblocks"),initialOpen:!1},wp.element.createElement(R,{label:a("Position","digiblocks"),value:W,options:[{label:a("Default","digiblocks"),value:"default"},{label:a("Relative","digiblocks"),value:"relative"},{label:a("Absolute","digiblocks"),value:"absolute"},{label:a("Fixed","digiblocks"),value:"fixed"}],onChange:e=>i({position:e}),__nextHasNoMarginBottom:!0}),W!=="default"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(ae,{label:a("Horizontal Orientation","digiblocks"),value:Ye,isBlock:!0,onChange:e=>i({horizontalOrientation:e}),__nextHasNoMarginBottom:!0},wp.element.createElement(k,{value:"left",label:a("Left","digiblocks")}),wp.element.createElement(k,{value:"right",label:a("Right","digiblocks")})),wp.element.createElement(he,{label:a("Offset","digiblocks"),value:C,onChange:e=>i({horizontalOffset:e}),units:[{label:"px",value:"px"},{label:"%",value:"%"},{label:"em",value:"em"},{label:"rem",value:"rem"},{label:"vw",value:"vw"},{label:"vh",value:"vh"}],defaultUnit:"px",min:0,max:Ke(C?.[I]?.unit||"px"),step:Ae(C?.[I]?.unit||"px")}),wp.element.createElement(ae,{label:a("Vertical Orientation","digiblocks"),value:Fe,isBlock:!0,onChange:e=>i({verticalOrientation:e}),__nextHasNoMarginBottom:!0},wp.element.createElement(k,{value:"top",label:a("Top","digiblocks")}),wp.element.createElement(k,{value:"bottom",label:a("Bottom","digiblocks")})),wp.element.createElement(he,{label:a("Offset","digiblocks"),value:S,onChange:e=>i({verticalOffset:e}),units:[{label:"px",value:"px"},{label:"%",value:"%"},{label:"em",value:"em"},{label:"rem",value:"rem"},{label:"vw",value:"vw"},{label:"vh",value:"vh"}],defaultUnit:"px",min:0,max:Ke(S?.[I]?.unit||"px"),step:Ae(S?.[I]?.unit||"px")})),wp.element.createElement(Pa,{label:a("Z-Index","digiblocks"),value:Z,onChange:e=>i({zIndex:e}),min:-999,max:9999,allowReset:!0,__nextHasNoMarginBottom:!0})),wp.element.createElement(y,{tab:"advanced",name:"transform",title:a("Transform","digiblocks"),initialOpen:!1},wp.element.createElement(Ea,{normalValue:Se,hoverValue:O,onNormalChange:e=>i({transform:e}),onHoverChange:e=>i({transformHover:e})})),wp.element.createElement(y,{tab:"advanced",name:"animation",title:a("Animation","digiblocks"),initialOpen:!1},wp.element.createElement(R,{label:a("Animation Effect","digiblocks"),value:u,options:ya,onChange:e=>i({animation:e}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),u&&u!=="none"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(R,{label:a("Animation Duration","digiblocks"),value:ye,options:[{label:a("Slow","digiblocks"),value:"slow"},{label:a("Normal","digiblocks"),value:"normal"},{label:a("Fast","digiblocks"),value:"fast"}],onChange:e=>i({animationDuration:e}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Me,{label:a("Animation Delay (ms)","digiblocks"),value:we||0,onChange:e=>i({animationDelay:parseInt(e)||0}),type:"number",min:0,step:100,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})),u&&u!=="none"&&wp.element.createElement("div",{style:{marginTop:"10px"}},wp.element.createElement(m,{variant:"secondary",isSecondary:!0,onClick:ma,style:{width:"100%"}},a("Preview Animation","digiblocks")))),wp.element.createElement(y,{tab:"advanced",name:"visibility",title:a("Visibility","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control__help",style:{padding:"12px",backgroundColor:"#f0f6fc",border:"1px solid #c3ddfd",borderRadius:"4px",marginBottom:"16px"}},wp.element.createElement("strong",null,a("Editor Note:","digiblocks")),wp.element.createElement("br",null),a("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.","digiblocks")),wp.element.createElement(ee,{label:a("Hide on Desktop","digiblocks"),checked:f.desktop,onChange:e=>i({visibility:{...f,desktop:e}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(ee,{label:a("Hide on Tablet","digiblocks"),checked:f.tablet,onChange:e=>i({visibility:{...f,tablet:e}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(ee,{label:a("Hide on Mobile","digiblocks"),checked:f.mobile,onChange:e=>i({visibility:{...f,mobile:e}}),__nextHasNoMarginBottom:!0})),wp.element.createElement(y,{tab:"advanced",name:"additional",title:a("Additional","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control html-anchor-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"html-anchor"},a("HTML anchor","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"html-anchor",value:L||"",onChange:e=>i({anchor:e.target.value}),"aria-describedby":"html-anchor-help",autoCapitalize:"none",autoComplete:"off"})),wp.element.createElement("p",{id:"html-anchor-help",className:"components-base-control__help"},a(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`,"digiblocks")," ",wp.element.createElement("a",{className:"components-external-link",href:"https://wordpress.org/documentation/article/page-jumps/",target:"_blank",rel:"external noreferrer noopener"},wp.element.createElement("span",{className:"components-external-link__contents"},a("Learn more about anchors","digiblocks")),wp.element.createElement("span",{className:"components-external-link__icon","aria-label":"(opens in a new tab)"},"\u2197")))),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"additional-css-classes"},a("Additional CSS class(es)","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"additional-css-classes",value:te||"",onChange:e=>i({customClasses:e.target.value}),"aria-describedby":"additional-css-classes-help",autoComplete:"off"})),wp.element.createElement("p",{id:"additional-css-classes-help",className:"components-base-control__help"},a("Separate multiple classes with spaces.","digiblocks")))));default:return null}},Ba=Da({className:`digiblocks-image ${d} ${u!=="none"?`animate-${u}`:""} ${te||""}`,id:L||null});return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(Oa,null,wp.element.createElement(Xa,{tabs:Ca,activeTab:We,onSelect:pa},Ta())),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:Na()}}),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:$a()}}),wp.element.createElement("div",{...Ba},T?wp.element.createElement(wp.element.Fragment,null,xe?wp.element.createElement("a",{href:"#",onClick:e=>e.preventDefault()},wp.element.createElement("img",{src:T,alt:V,title:U}),X&&wp.element.createElement("div",{className:"digiblocks-image-overlay"})):wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("img",{src:T,alt:V,title:U}),X&&wp.element.createElement("div",{className:"digiblocks-image-overlay"}))):wp.element.createElement(Ma,{icon:"format-image",label:a("Image","digiblocks"),instructions:a("Upload an image or select one from your media library.","digiblocks")},wp.element.createElement("div",{className:"digiblocks-image-upload-buttons"},wp.element.createElement(ta,null,wp.element.createElement(He,{onSelect:Oe,allowedTypes:["image"],value:h,render:({open:e})=>wp.element.createElement(m,{isPrimary:!0,onClick:e,disabled:H},wp.element.createElement("span",{className:"dashicon dashicons dashicons-admin-media"}),a("Select Image","digiblocks"))})),ue&&wp.element.createElement(m,{isSecondary:!0,onClick:()=>Q(!0),disabled:H},wp.element.createElement("span",{className:"dashicon dashicons dashicons-search"}),a("Search Images","digiblocks"))))),_e&&wp.element.createElement(ja,{title:a("Search Images","digiblocks"),onRequestClose:()=>{Q(!1),Ne(""),q([]),Te(1),ge(!1)},className:"digiblocks-image-search-modal",overlayClassName:"digiblocks-modal-overlay",shouldCloseOnClickOutside:!1},wp.element.createElement("div",{className:"digiblocks-image-search-content"},wp.element.createElement("div",{className:"digiblocks-search-header"},wp.element.createElement("div",{className:"digiblocks-search-input-wrapper"},wp.element.createElement("input",{type:"text",placeholder:a("Search for images...","digiblocks"),value:z,onChange:e=>Ne(e.target.value),className:"digiblocks-search-input",autoFocus:!0}),wp.element.createElement(m,{isPrimary:!0,onClick:()=>De(z,1),disabled:!z.trim()||j},a(j?"Searching...":"Search","digiblocks")))),wp.element.createElement("div",{className:"digiblocks-search-results"},j&&ce.length===0&&wp.element.createElement("div",{className:"digiblocks-searching-state"},wp.element.createElement(oa,null),wp.element.createElement("p",null,a("Searching for images...","digiblocks"))),z&&!j&&ce.length===0&&wp.element.createElement("div",{className:"digiblocks-typing-indicator"},wp.element.createElement("p",null,a("Type your search term and wait for results...","digiblocks"))),ce.length>0&&wp.element.createElement("div",{className:"digiblocks-image-grid"},ce.map((e,t)=>wp.element.createElement("div",{key:`${e.id}-${t}`,className:"digiblocks-image-item",onClick:()=>fa(e)},wp.element.createElement("img",{src:e.thumb,alt:e.alt,loading:"lazy"}),wp.element.createElement("div",{className:"digiblocks-image-overlay"},wp.element.createElement("div",{className:"digiblocks-image-info"},wp.element.createElement("span",{className:"digiblocks-image-title"},e.title),wp.element.createElement("span",{className:"digiblocks-image-author"},"by ",e.author)),wp.element.createElement(m,{isPrimary:!0,size:"small"},a("Use Image","digiblocks"))),H&&wp.element.createElement("div",{className:"digiblocks-downloading-overlay"},wp.element.createElement(oa,null))))),Ge&&wp.element.createElement("div",{className:"digiblocks-load-more"},wp.element.createElement(m,{isSecondary:!0,onClick:ha,disabled:j},a(j?"Loading...":"Load More","digiblocks")))))))},ra=Ya;var{useBlockProps:Fa,RichText:ei}=window.wp.blockEditor,La=({attributes:F})=>{let{id:i,anchor:ie,customClasses:d,imageUrl:L,altText:f,title:te,animation:h,animationDuration:T,animationDelay:V,url:U,opensInNewTab:G,rel:oe,overlayEnable:Ve}=F,E=["digiblocks-image",i,h!=="none"?`animate-${h} digi-animate-hidden`:"",d||""].filter(Boolean).join(" "),B=Fa.save({className:E,id:ie||void 0});if(h&&h!=="none"&&(B["data-animation-duration"]=T||"normal",B["data-animation-delay"]=V||0),!L)return null;let g=wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("img",{src:L,alt:f||"",title:te||""}),Ve&&wp.element.createElement("div",{className:"digiblocks-image-overlay"}));return U&&(g=wp.element.createElement("a",{href:U,target:G?"_blank":void 0,rel:oe?"noopener noreferrer":void 0},g)),wp.element.createElement("div",{...B},g)},da=La;var{__:ve}=window.wp.i18n,{registerBlockType:Ga}=window.wp.blocks;Ga("digiblocks/image",{apiVersion:2,title:digiBlocksData.blocks.image.title,category:"digiblocks",icon:{src:()=>{let{viewbox:F,path:i}=digiBlocksData.blocks.image.icon;return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${F}`,className:"digiblocks-editor-icons"},wp.element.createElement("path",{d:i}))}},description:digiBlocksData.blocks.image.description,keywords:[ve("image","digiblocks"),ve("picture","digiblocks"),ve("photo","digiblocks"),ve("media","digiblocks")],supports:{html:!1,className:!1,customClassName:!1,anchor:!1},attributes:{id:{type:"string",default:""},anchor:{type:"string",default:""},visibility:{type:"object",default:{desktop:!1,tablet:!1,mobile:!1}},customClasses:{type:"string",default:""},imageId:{type:"number"},imageUrl:{type:"string",source:"attribute",selector:"img",attribute:"src"},altText:{type:"string",source:"attribute",selector:"img",attribute:"alt",default:""},title:{type:"string",source:"attribute",selector:"img",attribute:"title",default:""},caption:{type:"string",source:"html",selector:"figcaption",default:""},dimensionType:{type:"string",default:"default"},containerWidth:{type:"string",default:"auto"},width:{type:"object",default:{desktop:{value:100,unit:"%"},tablet:{value:"",unit:""},mobile:{value:"",unit:""}}},height:{type:"object",default:{desktop:{value:"",unit:"px"},tablet:{value:"",unit:""},mobile:{value:"",unit:""}}},sizeSlug:{type:"string",default:"large"},align:{type:"string",default:"center"},alignTablet:{type:"string",default:"center"},alignMobile:{type:"string",default:"center"},objectFit:{type:"string",default:"cover"},borderStyle:{type:"string",default:"none"},borderWidth:{type:"object",default:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderRadius:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderColor:{type:"string",default:"#e0e0e0"},borderHoverColor:{type:"string"},boxShadow:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.1)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},boxShadowHover:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},padding:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},margin:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},url:{type:"string",default:""},opensInNewTab:{type:"boolean",default:!1},rel:{type:"string",default:""},animation:{type:"string",default:"none"},animationDuration:{type:"string",default:"normal"},animationDelay:{type:"number",default:""},hoverEffect:{type:"string",default:"none"},overlayEnable:{type:"boolean",default:!1},overlayColor:{type:"string",default:"rgba(0,0,0,0.5)"},overlayHoverOnly:{type:"boolean",default:!0},position:{type:"string",default:"default"},horizontalOrientation:{type:"string",default:"left"},horizontalOffset:{type:"object",default:{desktop:{value:0,unit:"px"},tablet:{value:"",unit:"px"},mobile:{value:"",unit:"px"}}},verticalOrientation:{type:"string",default:"top"},verticalOffset:{type:"object",default:{desktop:{value:0,unit:"px"},tablet:{value:"",unit:"px"},mobile:{value:"",unit:"px"}}},zIndex:{type:"number",default:""},transform:{type:"object",default:{rotate:{desktop:"",tablet:"",mobile:""},rotate3d:!1,rotateX:{desktop:"",tablet:"",mobile:""},rotateY:{desktop:"",tablet:"",mobile:""},perspective:{desktop:"",tablet:"",mobile:""},offsetX:{desktop:{value:"",unit:"px"},tablet:{value:"",unit:"px"},mobile:{value:"",unit:"px"}},offsetY:{desktop:{value:"",unit:"px"},tablet:{value:"",unit:"px"},mobile:{value:"",unit:"px"}},keepProportions:!0,scale:{desktop:"",tablet:"",mobile:""},scaleX:{desktop:"",tablet:"",mobile:""},scaleY:{desktop:"",tablet:"",mobile:""},skewX:{desktop:"",tablet:"",mobile:""},skewY:{desktop:"",tablet:"",mobile:""},flipHorizontal:!1,flipVertical:!1,xAnchor:{desktop:"center",tablet:"",mobile:""},yAnchor:{desktop:"center",tablet:"",mobile:""},transitionDuration:""}},transformHover:{type:"object",default:{rotate:{desktop:"",tablet:"",mobile:""},rotate3d:!1,rotateX:{desktop:"",tablet:"",mobile:""},rotateY:{desktop:"",tablet:"",mobile:""},perspective:{desktop:"",tablet:"",mobile:""},offsetX:{desktop:{value:"",unit:"px"},tablet:{value:"",unit:"px"},mobile:{value:"",unit:"px"}},offsetY:{desktop:{value:"",unit:"px"},tablet:{value:"",unit:"px"},mobile:{value:"",unit:"px"}},keepProportions:!0,scale:{desktop:"",tablet:"",mobile:""},scaleX:{desktop:"",tablet:"",mobile:""},scaleY:{desktop:"",tablet:"",mobile:""},skewX:{desktop:"",tablet:"",mobile:""},skewY:{desktop:"",tablet:"",mobile:""},flipHorizontal:!1,flipVertical:!1,xAnchor:{desktop:"center",tablet:"",mobile:""},yAnchor:{desktop:"center",tablet:"",mobile:""},transitionDuration:""}}},example:{attributes:{imageUrl:"https://s.w.org/images/core/5.3/MtBlanc1.jpg",sizeSlug:"large",width:{desktop:{value:100,unit:"%"},tablet:100,mobile:100}}},edit:ra,save:da});})();
