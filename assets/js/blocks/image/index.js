(()=>{var{__:i}=window.wp.i18n,{useBlockProps:di,InspectorControls:ci,RichText:$i,MediaUpload:pe,MediaUploadCheck:Ie,LinkControl:gi,PanelColorSettings:me}=window.wp.blockEditor,{TabPanel:bi,Notice:pi,SelectControl:j,ToggleControl:E,Button:r,RangeControl:De,__experimentalUnitControl:Ii,__experimentalToggleGroupControl:ue,__experimentalToggleGroupControlOption:F,Spinner:Pe,Placeholder:mi,TextControl:ze,PanelRow:Oe,Modal:ui}=window.wp.components,{useState:g,useEffect:K,useRef:He,useCallback:hi}=window.wp.element,{useBlockId:vi,getDimensionCSS:X,animations:he,animationPreview:Me}=digi.utils,{tabIcons:ve}=digi.icons,{ResponsiveControl:Y,DimensionControl:A,TypographyControl:Di,BoxShadowControl:ki,CustomTabPanel:fi,TabPanelBody:f}=digi.components,yi=({attributes:I,setAttributes:o,clientId:L})=>{let{id:n,anchor:D,visibility:d,customClasses:G,imageId:m,imageUrl:u,altText:B,title:P,caption:ke,width:h,widthUnit:z,height:c,heightUnit:ie,sizeSlug:y,align:V,alignTablet:Ci,alignMobile:Si,objectFit:fe,borderStyle:x,borderWidth:C,borderRadius:S,borderColor:ye,borderHoverColor:oe,boxShadow:v,boxShadowHover:k,padding:O,margin:H,url:ae,opensInNewTab:je,rel:Ee,animation:b,hoverEffect:p,overlayEnable:$,overlayColor:xe,overlayHoverOnly:te}=I;vi(n,L,o);let[t,Fe]=g(window.digi.responsiveState.activeDevice),[Ni,Ti]=g(!1),[Bi,we]=g(!1),[le,M]=g(!1),[w,se]=g(""),[W,U]=g([]),[N,ne]=g(!1),[Le,re]=g(1),[_e,Q]=g(!1),[_,de]=g(!1),R=He(null);K(()=>window.digi.responsiveState.subscribe(a=>{Fe(a)}),[]);let[Ce,Ge]=g(()=>{if(window.digi.uiState){let e=window.digi.uiState.getActiveTab(L);if(e)return e}return"options"});K(()=>{if(m&&y){let e=window.wp.media.attachment(m);e.get("url")?Se(e):e.fetch().then(()=>{Se(e)})}},[y,m]);let Se=e=>{let a=e.get("url"),l=e.get("sizes");l&&l[y]&&(a=l[y].url),o({imageUrl:a})},Ne=He(null);K(()=>{if(b&&b!=="none"){let e=setTimeout(()=>{Me(n,b,he,Ne)},100);return()=>clearTimeout(e)}},[b]);let Ve=()=>{Me(n,b,he,Ne)},Te=hi((e,a=1)=>{R.current&&clearTimeout(R.current),R.current=setTimeout(()=>{e.trim()?ce(e,a):(U([]),Q(!1))},500)},[]);K(()=>(le&&w&&Te(w,1),()=>{R.current&&clearTimeout(R.current)}),[w,le,Te]);let ce=(e,a=1)=>{if(!e.trim())return;ne(!0);let l=new FormData;l.append("action","digiblocks_search_images"),l.append("query",e),l.append("page",a),l.append("per_page",20),l.append("nonce",digiBlocksData.image_search_nonce||""),fetch(digiBlocksData.ajax_url,{method:"POST",body:l}).then(s=>s.json()).then(s=>{ne(!1),s.success?(U(a===1?s.data.images:q=>[...q,...s.data.images]),Q(s.data.images.length===20),re(a)):(console.error("Search error:",s.data),alert(i("Search failed. Please check your API configuration.","digiblocks")))}).catch(s=>{ne(!1),console.error("Search error:",s),alert(i("Search failed. Please try again.","digiblocks"))})},We=e=>{de(!0);let a=new FormData;a.append("action","digiblocks_download_image"),a.append("image_data",JSON.stringify(e)),a.append("nonce",digiBlocksData.image_search_nonce||""),fetch(digiBlocksData.ajax_url,{method:"POST",body:a}).then(l=>l.json()).then(l=>{if(de(!1),l.success){let s=l.data;o({imageUrl:s.url,imageId:s.id,altText:s.alt||"",title:s.title||""}),M(!1),se(""),U([]),re(1),Q(!1)}else console.error("Download error:",l.data),alert(i("Failed to download image. Please try again.","digiblocks"))}).catch(l=>{de(!1),console.error("Download error:",l),alert(i("Failed to download image. Please try again.","digiblocks"))})},Qe=()=>{!N&&_e&&ce(w,Le+1)},Z=digiBlocksData&&digiBlocksData.image_search_available,Ze=[{label:i("None","digiblocks"),value:"none"},{label:i("Solid","digiblocks"),value:"solid"},{label:i("Dotted","digiblocks"),value:"dotted"},{label:i("Dashed","digiblocks"),value:"dashed"},{label:i("Double","digiblocks"),value:"double"},{label:i("Groove","digiblocks"),value:"groove"},{label:i("Inset","digiblocks"),value:"inset"},{label:i("Outset","digiblocks"),value:"outset"},{label:i("Ridge","digiblocks"),value:"ridge"}],qe=[{label:i("None","digiblocks"),value:"none"},{label:i("Zoom In","digiblocks"),value:"zoom-in"},{label:i("Zoom Out","digiblocks"),value:"zoom-out"},{label:i("Grayscale to Color","digiblocks"),value:"grayscale"},{label:i("Blur to Clear","digiblocks"),value:"blur"},{label:i("Rotate","digiblocks"),value:"rotate"},{label:i("Glow","digiblocks"),value:"glow"}],Je=[{label:i("Cover","digiblocks"),value:"cover"},{label:i("Contain","digiblocks"),value:"contain"},{label:i("Fill","digiblocks"),value:"fill"},{label:i("None","digiblocks"),value:"none"}],Ke=[{label:i("None","digiblocks"),value:"none"},...Object.keys(he).map(e=>({label:e.replace(/-/g," ").replace(/\b\w/g,a=>a.toUpperCase()),value:e}))],Xe=[{label:i("Thumbnail","digiblocks"),value:"thumbnail"},{label:i("Medium","digiblocks"),value:"medium"},{label:i("Large","digiblocks"),value:"large"},{label:i("Full Size","digiblocks"),value:"full"}],Ye=[{name:"options",title:i("Options","digiblocks"),icon:ve.optionsIcon},{name:"style",title:i("Style","digiblocks"),icon:ve.styleIcon},{name:"advanced",title:i("Advanced","digiblocks"),icon:ve.advancedIcon}],Ae=[{name:"normal",title:i("Normal","digiblocks"),className:"digiblocks-tab-1 normal"},{name:"hover",title:i("Hover","digiblocks"),className:"digiblocks-tab-2 hover"}],ei=[{label:"px",value:"px"},{label:"%",value:"%"},{label:"vw",value:"vw"}],ii=[{label:"px",value:"px"},{label:"%",value:"%"},{label:"vh",value:"vh"}],ge=e=>{if(!e||!e.url){o({imageUrl:void 0,imageId:void 0,altText:""});return}let a=e.url;y&&e.sizes&&e.sizes[y]&&(a=e.sizes[y].url),o({imageUrl:a,imageId:e.id,altText:e.alt||"",title:e.title||""})},oi=()=>{o({imageUrl:void 0,imageId:void 0,altText:"",title:""})},ai=()=>{let e=window.digi.responsiveState.activeDevice,a=h[e]?h[e]==="auto"?"auto":`${h[e]}${z}`:"100%",l=c[e]?c[e]==="auto"?"auto":`${c[e]}${ie}`:"auto",s="";x&&x!=="none"?s=`
                border-style: ${x};
                border-color: ${ye||"#e0e0e0"};
				${X(C,"border-width",e)}
            `:s="border-style: none;";let q="box-shadow: none;";v&&v.enable&&(q=`box-shadow: ${v.position==="inset"?"inset ":""}${v.horizontal}px ${v.vertical}px ${v.blur}px ${v.spread}px ${v.color};`);let ni=O&&O[e]?`${X(O,"padding",e)}`:"padding: 0;",ri=H&&H[e]?`${X(H,"margin",e)}`:"margin: 0 0 30px 0;",Be="";$&&(Be=`
                .${n} .digiblocks-image-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: ${xe||"rgba(0,0,0,0.5)"};
                    opacity: ${te?"0":"1"};
                    transition: opacity 0.3s ease;
                }
                
                .${n}:hover .digiblocks-image-overlay {
                    opacity: 1;
                }
            `);let be="";if(k&&k.enable){let $e=k.position==="inset"?"inset ":"";be+=`box-shadow: ${$e}${k.horizontal}px ${k.vertical}px ${k.blur}px ${k.spread}px ${k.color};`}oe&&(be+=`border-color: ${oe};`);let T="";p==="zoom-in"?T="transform: scale(1.1);":p==="zoom-out"?T="transform: scale(1);":p==="grayscale"?T="filter: grayscale(0);":p==="blur"?T="filter: blur(0);":p==="rotate"?T="transform: rotate(5deg);":p==="glow"&&(T="filter: brightness(1.1);");let J="";return p==="zoom-out"?J="transform: scale(1.1);":p==="grayscale"?J="filter: grayscale(100%);":p==="blur"&&(J="filter: blur(5px);"),`
            /* Main block styles */
            .${n} {
                display: flex;
				${V==="left"?"justify-content: flex-start;":V==="right"?"justify-content: flex-end;":"justify-content: center;"}
                text-align: ${V};
                width: 100%;
                ${ri}
                transition: all 0.3s ease;
            }
            
            /* Figure styles */
            .${n} figure {
                display: inline-block;
                position: relative;
                margin: 0;
                width: ${a};
                max-width: 100%;
                ${ni}
                ${s}
                ${q}
				${X(S,"border-radius",e)}
                overflow: hidden;
                transition: all 0.3s ease;
            }
            
            /* Image styles */
            .${n} figure img {
                display: block;
                width: 100%;
                height: ${l};
                object-fit: ${fe};
                ${J}
                transition: all 0.3s ease;
            }
            
            /* Hover styles */
            .${n} figure:hover {
                ${be}
            }
            
            .${n} figure:hover img {
                ${T}
            }
            
            /* Overlay */
            ${Be}

			/* Visibility Controls */
			${d.desktop?`
				@media (min-width: 992px) {
					.${n} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${d.tablet?`
				@media (min-width: 768px) and (max-width: 991px) {
					.${n} {
						opacity: 0.5 !important;
					}
				}
			`:""}

			${d.mobile?`
				@media (max-width: 767px) {
					.${n} {
						opacity: 0.5 !important;
					}
				}
			`:""}
        `},ti=()=>`
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
		`,li=()=>{switch(Ce){case"options":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(f,{tab:"options",name:"image",title:i("Image","digiblocks"),initialOpen:!0},wp.element.createElement(Ie,null,wp.element.createElement("div",{className:"digiblocks-image-upload-section"},u?wp.element.createElement("div",{className:"digiblocks-media-preview"},wp.element.createElement("img",{src:u,alt:B||""}),wp.element.createElement("div",{className:"digiblocks-media-controls"},Z&&wp.element.createElement(r,{isPrimary:!0,onClick:()=>M(!0),disabled:_},wp.element.createElement("span",{className:"dashicon dashicons dashicons-search"})),wp.element.createElement(pe,{onSelect:ge,allowedTypes:["image"],value:m,render:({open:e})=>wp.element.createElement(r,{isPrimary:!0,onClick:e,disabled:_},wp.element.createElement("span",{className:"dashicon dashicons dashicons-edit"}))}),wp.element.createElement(r,{isDestructive:!0,onClick:oi,disabled:_},wp.element.createElement("span",{className:"dashicon dashicons dashicons-trash"})))):wp.element.createElement("div",{className:"digiblocks-image-upload-buttons"},wp.element.createElement(pe,{onSelect:ge,allowedTypes:["image"],value:m,render:({open:e})=>wp.element.createElement(r,{className:"digiblocks-media-upload-button",isPrimary:!0,onClick:e,disabled:_},wp.element.createElement("span",{className:"dashicon dashicons dashicons-admin-media"}),i("Select Image","digiblocks"))}),Z&&wp.element.createElement(r,{className:"digiblocks-media-search-button",isSecondary:!0,onClick:()=>M(!0),disabled:_},wp.element.createElement("span",{className:"dashicon dashicons dashicons-search"}),i("Search Images","digiblocks"))))),u&&wp.element.createElement("div",{style:{marginTop:"16px"}},wp.element.createElement(ze,{label:i("Alt Text","digiblocks"),value:B,onChange:e=>o({altText:e}),help:i("Alternative text describes your image to people who cannot see it. Add a descriptive text to help screen-reader users.","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(ze,{label:i("Title","digiblocks"),value:P,onChange:e=>o({title:e}),help:i("Shown as a tooltip when a user hovers over the image.","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(j,{label:i("Image Size","digiblocks"),value:y,options:Xe,onChange:e=>o({sizeSlug:e}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement("div",{style:{marginTop:"16px"}},wp.element.createElement("p",{className:"components-base-control__label"},i("Link Settings","digiblocks")),wp.element.createElement(gi,{value:ae?{url:ae,opensInNewTab:je,rel:Ee}:void 0,onChange:e=>{o({url:e.url,opensInNewTab:e.opensInNewTab,rel:e.rel||""}),we(!1)},settings:[{id:"opensInNewTab",title:i("Open in new tab")},{id:"rel",title:i("Add noopener noreferrer")}],onRemove:()=>{o({url:"",opensInNewTab:!1,rel:""}),we(!1)}}))),!Z&&wp.element.createElement(pi,{status:"info",isDismissible:!1,style:{marginTop:"16px"}},wp.element.createElement("p",{style:{margin:"0 0 8px 0"}},wp.element.createElement("strong",null,i("\u{1F4A1} Enhanced Image Search Available","digiblocks"))),wp.element.createElement("p",{style:{margin:"0 0 12px 0"}},i("Configure API providers to search and download images directly from Unsplash, Pexels, and Pixabay.","digiblocks")),wp.element.createElement(r,{isSecondary:!0,isSmall:!0,href:`${digiBlocksData.admin_url}admin.php?page=digiblocks-settings#image-providers`,target:"_blank",rel:"noopener noreferrer",icon:"admin-settings"},i("Configure Image Providers","digiblocks")))));case"style":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(f,{tab:"style",name:"dimensions",title:i("Dimensions","digiblocks"),initialOpen:!0},wp.element.createElement("div",{className:"digiblocks-size-type-field-tabs"},wp.element.createElement("div",{className:"digiblocks-responsive-control-inner"},wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"digiblocks-range-control digiblocks-size-type-field-tabs"},wp.element.createElement("div",{className:"digiblocks-control__header"},wp.element.createElement("div",{className:"digiblocks-responsive-label-wrap"},wp.element.createElement("span",{className:"digiblocks-control-label"},i("Width","digiblocks")),wp.element.createElement("button",{type:"button","aria-label":i(`Switch to ${window.digi.responsiveState.getNextDevice()} view`,"digiblocks"),className:`components-button digiblocks-responsive-common-button digiblocks-device-${t}`,onClick:()=>window.digi.responsiveState.toggleDevice()},window.digi.icons.deviceIcons[t])),wp.element.createElement("div",{className:"digiblocks-range-control__actions digiblocks-control__actions"},wp.element.createElement("div",{tabIndex:"0"},wp.element.createElement("button",{type:"button",disabled:h[t]===100,className:"components-button digiblocks-reset is-secondary is-small",onClick:()=>o({width:{...h,[t]:100}})},wp.element.createElement("span",{className:"dashicon dashicons dashicons-image-rotate"}))),wp.element.createElement(ue,{value:z,onChange:e=>o({widthUnit:e}),isBlock:!0,isSmall:!0,hideLabelFromVision:!0,"aria-label":i("Width Unit","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},ei.map(e=>wp.element.createElement(F,{key:e.value,value:e.value,label:e.label}))))),wp.element.createElement("div",{className:"digiblocks-range-control__mobile-controls"},wp.element.createElement(De,{value:h[t],onChange:e=>o({width:{...h,[t]:e}}),min:1,max:z==="%"?100:1e3,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})))))),wp.element.createElement("div",{className:"digiblocks-size-type-field-tabs"},wp.element.createElement("div",{className:"digiblocks-responsive-control-inner"},wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"digiblocks-range-control digiblocks-size-type-field-tabs"},wp.element.createElement("div",{className:"digiblocks-control__header"},wp.element.createElement("div",{className:"digiblocks-responsive-label-wrap"},wp.element.createElement("span",{className:"digiblocks-control-label"},i("Height","digiblocks")),wp.element.createElement("button",{type:"button","aria-label":i(`Switch to ${window.digi.responsiveState.getNextDevice()} view`,"digiblocks"),className:`components-button digiblocks-responsive-common-button digiblocks-device-${t}`,onClick:()=>window.digi.responsiveState.toggleDevice()},window.digi.icons.deviceIcons[t])),wp.element.createElement("div",{className:"digiblocks-range-control__actions digiblocks-control__actions"},wp.element.createElement("div",{tabIndex:"0"},wp.element.createElement("button",{type:"button",disabled:c[t]===300,className:"components-button digiblocks-reset is-secondary is-small",onClick:()=>o({height:{...c,[t]:300}})},wp.element.createElement("span",{className:"dashicon dashicons dashicons-image-rotate"}))),wp.element.createElement(ue,{value:ie,onChange:e=>o({heightUnit:e}),isBlock:!0,isSmall:!0,hideLabelFromVision:!0,"aria-label":i("Height Unit","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},ii.map(e=>wp.element.createElement(F,{key:e.value,value:e.value,label:e.label}))))),wp.element.createElement("div",{className:"digiblocks-range-control__mobile-controls"},wp.element.createElement(De,{value:c[t],onChange:e=>o({height:{...c,[t]:e}}),min:1,max:ie==="%"?100:1e3,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})))))),wp.element.createElement(j,{label:i("Object Fit","digiblocks"),value:fe,options:Je,onChange:e=>o({objectFit:e}),help:i("Determines how the image should be resized to fit its container.","digiblocks"),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(ue,{label:i("Alignment","digiblocks"),value:V,onChange:e=>o({align:e}),isBlock:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0},wp.element.createElement(F,{value:"left",label:i("Left","digiblocks")}),wp.element.createElement(F,{value:"center",label:i("Center","digiblocks")}),wp.element.createElement(F,{value:"right",label:i("Right","digiblocks")}))),wp.element.createElement(f,{tab:"style",name:"spacing",title:i("Spacing","digiblocks"),initialOpen:!1},wp.element.createElement(Y,{label:i("Padding","digiblocks")},wp.element.createElement(A,{values:O[t],onChange:e=>o({padding:{...O,[t]:e}})})),wp.element.createElement(Y,{label:i("Margin","digiblocks")},wp.element.createElement(A,{values:H[t],onChange:e=>o({margin:{...H,[t]:e}})}))),wp.element.createElement(f,{tab:"style",name:"border",title:i("Border","digiblocks"),initialOpen:!1},wp.element.createElement(bi,{className:"digiblocks-control-tabs",activeClass:"active-tab",tabs:Ae},e=>e.name==="normal"?wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(j,{label:i("Border Style","digiblocks"),value:x,options:Ze,onChange:a=>{a!=="none"&&(x==="none"||!x)&&((!C||Object.keys(C).length===0)&&o({borderWidth:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}}),(!S||Object.keys(S).length===0)&&o({borderRadius:{desktop:{top:0,right:0,bottom:0,left:0,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}})),o({borderStyle:a})},__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),x&&x!=="none"&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(me,{title:i("Border Color","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:ye,onChange:a=>o({borderColor:a}),label:i("Border Color","digiblocks")}]}),wp.element.createElement(Y,{label:i("Border Width","digiblocks")},wp.element.createElement(A,{values:C&&C[t]?C[t]:{top:1,right:1,bottom:1,left:1,unit:"px"},onChange:a=>o({borderWidth:{...C,[t]:a}})}))),wp.element.createElement(Y,{label:i("Border Radius","digiblocks")},wp.element.createElement(A,{values:S&&S[t]?S[t]:{top:0,right:0,bottom:0,left:0,unit:"px"},onChange:a=>o({borderRadius:{...S,[t]:a}}),units:[{label:"px",value:"px"},{label:"%",value:"%"}]}))):wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(me,{title:i("Border Hover Color","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:oe,onChange:a=>o({borderHoverColor:a}),label:i("Border Hover Color","digiblocks")}]})))),wp.element.createElement(f,{tab:"style",name:"shadow",title:i("Box Shadow","digiblocks"),initialOpen:!1},wp.element.createElement(ki,{normalValue:v,hoverValue:k,onNormalChange:e=>o({boxShadow:e}),onHoverChange:e=>o({boxShadowHover:e})})),wp.element.createElement(f,{tab:"style",name:"effects",title:i("Effects","digiblocks"),initialOpen:!1},wp.element.createElement(j,{label:i("Hover Effect","digiblocks"),value:p,options:qe,onChange:e=>o({hoverEffect:e}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),wp.element.createElement(Oe,null,wp.element.createElement(E,{label:i("Enable Overlay","digiblocks"),checked:$,onChange:()=>o({overlayEnable:!$})})),$&&wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(me,{title:i("Overlay Color","digiblocks"),initialOpen:!0,enableAlpha:!0,colorSettings:[{value:xe,onChange:e=>o({overlayColor:e}),label:i("Overlay Color","digiblocks")}]}),wp.element.createElement(Oe,null,wp.element.createElement(E,{label:i("Show Overlay Only on Hover","digiblocks"),checked:te,onChange:()=>o({overlayHoverOnly:!te})})))));case"advanced":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(f,{tab:"advanced",name:"animation",title:i("Animation","digiblocks"),initialOpen:!0},wp.element.createElement(j,{label:i("Animation Effect","digiblocks"),value:b,options:Ke,onChange:e=>o({animation:e}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),b&&b!=="none"&&wp.element.createElement("div",{style:{marginTop:"10px"}},wp.element.createElement(r,{variant:"secondary",isSecondary:!0,onClick:Ve,style:{width:"100%"}},i("Preview Animation","digiblocks")))),wp.element.createElement(f,{tab:"advanced",name:"visibility",title:i("Visibility","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control__help",style:{padding:"12px",backgroundColor:"#f0f6fc",border:"1px solid #c3ddfd",borderRadius:"4px",marginBottom:"16px"}},wp.element.createElement("strong",null,i("Editor Note:","digiblocks")),wp.element.createElement("br",null),i("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.","digiblocks")),wp.element.createElement(E,{label:i("Hide on Desktop","digiblocks"),checked:d.desktop,onChange:e=>o({visibility:{...d,desktop:e}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(E,{label:i("Hide on Tablet","digiblocks"),checked:d.tablet,onChange:e=>o({visibility:{...d,tablet:e}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(E,{label:i("Hide on Mobile","digiblocks"),checked:d.mobile,onChange:e=>o({visibility:{...d,mobile:e}}),__nextHasNoMarginBottom:!0})),wp.element.createElement(f,{tab:"advanced",name:"additional",title:i("Additional","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control html-anchor-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"html-anchor"},i("HTML anchor","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"html-anchor",value:D||"",onChange:e=>o({anchor:e.target.value}),"aria-describedby":"html-anchor-help",autoCapitalize:"none",autoComplete:"off"})),wp.element.createElement("p",{id:"html-anchor-help",className:"components-base-control__help"},i(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`,"digiblocks")," ",wp.element.createElement("a",{className:"components-external-link",href:"https://wordpress.org/documentation/article/page-jumps/",target:"_blank",rel:"external noreferrer noopener"},wp.element.createElement("span",{className:"components-external-link__contents"},i("Learn more about anchors","digiblocks")),wp.element.createElement("span",{className:"components-external-link__icon","aria-label":"(opens in a new tab)"},"\u2197")))),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"additional-css-classes"},i("Additional CSS class(es)","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"additional-css-classes",value:G||"",onChange:e=>o({customClasses:e.target.value}),"aria-describedby":"additional-css-classes-help",autoComplete:"off"})),wp.element.createElement("p",{id:"additional-css-classes-help",className:"components-base-control__help"},i("Separate multiple classes with spaces.","digiblocks")))));default:return null}},si=di({className:`digiblocks-image ${n} ${b!=="none"?`animate-${b}`:""} ${G||""}`,id:D||null});return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(ci,null,wp.element.createElement(fi,{tabs:Ye,activeTab:Ce,onSelect:Ge},li())),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:ai()}}),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:ti()}}),wp.element.createElement("div",{...si},wp.element.createElement("figure",null,u?wp.element.createElement(wp.element.Fragment,null,ae?wp.element.createElement("a",{href:"#",onClick:e=>e.preventDefault()},wp.element.createElement("img",{src:u,alt:B,title:P}),$&&wp.element.createElement("div",{className:"digiblocks-image-overlay"})):wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("img",{src:u,alt:B,title:P}),$&&wp.element.createElement("div",{className:"digiblocks-image-overlay"}))):wp.element.createElement(mi,{icon:"format-image",label:i("Image","digiblocks"),instructions:i("Upload an image or select one from your media library.","digiblocks")},wp.element.createElement("div",{className:"digiblocks-image-upload-buttons"},wp.element.createElement(Ie,null,wp.element.createElement(pe,{onSelect:ge,allowedTypes:["image"],value:m,render:({open:e})=>wp.element.createElement(r,{isPrimary:!0,onClick:e,disabled:_},wp.element.createElement("span",{className:"dashicon dashicons dashicons-admin-media"}),i("Select Image","digiblocks"))})),Z&&wp.element.createElement(r,{isSecondary:!0,onClick:()=>M(!0),disabled:_},wp.element.createElement("span",{className:"dashicon dashicons dashicons-search"}),i("Search Images","digiblocks")))))),le&&wp.element.createElement(ui,{title:i("Search Images","digiblocks"),onRequestClose:()=>{M(!1),se(""),U([]),re(1),Q(!1)},className:"digiblocks-image-search-modal",overlayClassName:"digiblocks-modal-overlay",shouldCloseOnClickOutside:!1},wp.element.createElement("div",{className:"digiblocks-image-search-content"},wp.element.createElement("div",{className:"digiblocks-search-header"},wp.element.createElement("div",{className:"digiblocks-search-input-wrapper"},wp.element.createElement("input",{type:"text",placeholder:i("Search for images...","digiblocks"),value:w,onChange:e=>se(e.target.value),className:"digiblocks-search-input",autoFocus:!0}),wp.element.createElement(r,{isPrimary:!0,onClick:()=>ce(w,1),disabled:!w.trim()||N},i(N?"Searching...":"Search","digiblocks")))),wp.element.createElement("div",{className:"digiblocks-search-results"},N&&W.length===0&&wp.element.createElement("div",{className:"digiblocks-searching-state"},wp.element.createElement(Pe,null),wp.element.createElement("p",null,i("Searching for images...","digiblocks"))),w&&!N&&W.length===0&&wp.element.createElement("div",{className:"digiblocks-typing-indicator"},wp.element.createElement("p",null,i("Type your search term and wait for results...","digiblocks"))),W.length>0&&wp.element.createElement("div",{className:"digiblocks-image-grid"},W.map((e,a)=>wp.element.createElement("div",{key:`${e.id}-${a}`,className:"digiblocks-image-item",onClick:()=>We(e)},wp.element.createElement("img",{src:e.thumb,alt:e.alt,loading:"lazy"}),wp.element.createElement("div",{className:"digiblocks-image-overlay"},wp.element.createElement("div",{className:"digiblocks-image-info"},wp.element.createElement("span",{className:"digiblocks-image-title"},e.title),wp.element.createElement("span",{className:"digiblocks-image-author"},"by ",e.author)),wp.element.createElement(r,{isPrimary:!0,size:"small"},i("Use Image","digiblocks"))),_&&wp.element.createElement("div",{className:"digiblocks-downloading-overlay"},wp.element.createElement(Pe,null))))),_e&&wp.element.createElement("div",{className:"digiblocks-load-more"},wp.element.createElement(r,{isSecondary:!0,onClick:Qe,disabled:N},i(N?"Loading...":"Load More","digiblocks")))))))},Ue=yi;var{useBlockProps:xi,RichText:zi}=window.wp.blockEditor,wi=({attributes:I})=>{let{id:o,anchor:L,customClasses:n,imageUrl:D,altText:d,title:G,animation:m,url:u,opensInNewTab:B,rel:P,overlayEnable:ke}=I,h=["digiblocks-image",o,m!=="none"?`animate-${m}`:"",n||""].filter(Boolean).join(" "),z=xi.save({className:h,id:L||void 0});if(!D)return null;let c=wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("img",{src:D,alt:d||"",title:G||""}),ke&&wp.element.createElement("div",{className:"digiblocks-image-overlay"}));return u&&(c=wp.element.createElement("a",{href:u,target:B?"_blank":void 0,rel:P?"noopener noreferrer":void 0},c)),wp.element.createElement("div",{...z},wp.element.createElement("figure",null,c))},Re=wi;var{__:ee}=window.wp.i18n,{registerBlockType:_i}=window.wp.blocks;_i("digiblocks/image",{apiVersion:2,title:digiBlocksData.blocks.image.title,category:"digiblocks",icon:{src:()=>{let{viewbox:I,path:o}=digiBlocksData.blocks.image.icon;return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${I}`,className:"digiblocks-editor-icons"},wp.element.createElement("path",{d:o}))}},description:digiBlocksData.blocks.image.description,keywords:[ee("image","digiblocks"),ee("picture","digiblocks"),ee("photo","digiblocks"),ee("media","digiblocks")],supports:{html:!1,className:!1,customClassName:!1,anchor:!1},attributes:{id:{type:"string",default:""},anchor:{type:"string",default:""},visibility:{type:"object",default:{desktop:!1,tablet:!1,mobile:!1}},customClasses:{type:"string",default:""},imageId:{type:"number"},imageUrl:{type:"string",source:"attribute",selector:"img",attribute:"src"},altText:{type:"string",source:"attribute",selector:"img",attribute:"alt",default:""},title:{type:"string",source:"attribute",selector:"img",attribute:"title",default:""},caption:{type:"string",source:"html",selector:"figcaption",default:""},width:{type:"object",default:{desktop:100,tablet:100,mobile:100}},widthUnit:{type:"string",default:"%"},height:{type:"object",default:{desktop:"auto",tablet:"auto",mobile:"auto"}},heightUnit:{type:"string",default:"px"},sizeSlug:{type:"string",default:"large"},align:{type:"string",default:"center"},alignTablet:{type:"string",default:"center"},alignMobile:{type:"string",default:"center"},objectFit:{type:"string",default:"cover"},borderStyle:{type:"string",default:"none"},borderWidth:{type:"object",default:{desktop:{top:1,right:1,bottom:1,left:1,unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderRadius:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},borderColor:{type:"string",default:"#e0e0e0"},borderHoverColor:{type:"string"},boxShadow:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.1)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},boxShadowHover:{type:"object",default:{enable:!1,color:"rgba(0, 0, 0, 0.2)",horizontal:0,vertical:0,blur:0,spread:0,position:"outset"}},padding:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},margin:{type:"object",default:{desktop:{top:"",right:"",bottom:"",left:"",unit:"px"},tablet:{top:"",right:"",bottom:"",left:"",unit:"px"},mobile:{top:"",right:"",bottom:"",left:"",unit:"px"}}},url:{type:"string",default:""},opensInNewTab:{type:"boolean",default:!1},rel:{type:"string",default:""},animation:{type:"string",default:"none"},hoverEffect:{type:"string",default:"none"},overlayEnable:{type:"boolean",default:!1},overlayColor:{type:"string",default:"rgba(0,0,0,0.5)"},overlayHoverOnly:{type:"boolean",default:!0}},example:{attributes:{imageUrl:"https://s.w.org/images/core/5.3/MtBlanc1.jpg",sizeSlug:"large",width:{desktop:100,tablet:100,mobile:100},widthUnit:"%"}},edit:Ue,save:Re});})();
