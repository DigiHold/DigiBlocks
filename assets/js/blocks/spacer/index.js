(()=>{var{__:o}=window.wp.i18n,{useBlockProps:N,InspectorControls:S}=window.wp.blockEditor,{ToggleControl:p,RangeControl:B}=window.wp.components,{useState:h,useEffect:T}=window.wp.element,{useBlockId:$}=digi.utils,{tabIcons:u}=digi.icons,{ResponsiveControl:H,CustomTabPanel:D}=digi.components,M=({attributes:a,setAttributes:t,clientId:n})=>{let{id:i,anchor:c,visibility:s,customClasses:l,height:r}=a;$(i,n,t);let[m,w]=h(window.digi.responsiveState.activeDevice);T(()=>window.digi.responsiveState.subscribe(d=>{w(d)}),[]);let[g,f]=h(()=>{if(window.digi.uiState){let e=window.digi.uiState.getActiveTab(n);if(e)return e}return"options"}),y=[{name:"options",title:o("Options","digiblocks"),icon:u.optionsIcon},{name:"advanced",title:o("Advanced","digiblocks"),icon:u.advancedIcon}],_=()=>{let e=window.digi.responsiveState.activeDevice,d=r[e]||(e==="tablet"?60:e==="mobile"?40:80);return`
            /* Spacer Block Styles */
            .${i} {
                height: ${d}px;
                position: relative;
            }
            
            /* Editor-only styles */
            .editor-styles-wrapper .${i} .digiblocks-spacer-icon-wrapper {
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: #e4e4e4;
                height: 100%;
                border-radius: 4px;
                pointer-events: none;
            }
            
            .editor-styles-wrapper .${i} .digiblocks-spacer-icon-wrapper svg {
                width: 1em;
				min-width: 1.5rem;
                height: 100%;
                fill: #949494;
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
        `},x=()=>{switch(g){case"options":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement("div",{className:"components-panel__body is-opened"},wp.element.createElement(H,{label:o("Height","digiblocks")},wp.element.createElement(B,{value:r[m],onChange:e=>t({height:{...r,[m]:e}}),min:1,max:500,step:1,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}))));case"advanced":return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(TabPanelBody,{tab:"advanced",name:"visibility",title:o("Visibility","digiblocks"),initialOpen:!1},wp.element.createElement("div",{className:"components-base-control__help",style:{padding:"12px",backgroundColor:"#f0f6fc",border:"1px solid #c3ddfd",borderRadius:"4px",marginBottom:"16px"}},wp.element.createElement("strong",null,o("Editor Note:","digiblocks")),wp.element.createElement("br",null),o("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.","digiblocks")),wp.element.createElement(p,{label:o("Hide on Desktop","digiblocks"),checked:s.desktop,onChange:e=>t({visibility:{...s,desktop:e}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(p,{label:o("Hide on Tablet","digiblocks"),checked:s.tablet,onChange:e=>t({visibility:{...s,tablet:e}}),__nextHasNoMarginBottom:!0}),wp.element.createElement(p,{label:o("Hide on Mobile","digiblocks"),checked:s.mobile,onChange:e=>t({visibility:{...s,mobile:e}}),__nextHasNoMarginBottom:!0})),wp.element.createElement("div",{className:"components-panel__body is-opened"},wp.element.createElement("div",{className:"components-base-control html-anchor-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"html-anchor"},o("HTML anchor","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"html-anchor",value:c||"",onChange:e=>t({anchor:e.target.value}),"aria-describedby":"html-anchor-help",autoCapitalize:"none",autoComplete:"off"})),wp.element.createElement("p",{id:"html-anchor-help",className:"components-base-control__help"},o(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`,"digiblocks")," ",wp.element.createElement("a",{className:"components-external-link",href:"https://wordpress.org/documentation/article/page-jumps/",target:"_blank",rel:"external noreferrer noopener"},wp.element.createElement("span",{className:"components-external-link__contents"},o("Learn more about anchors","digiblocks")),wp.element.createElement("span",{className:"components-external-link__icon","aria-label":"(opens in a new tab)"},"\u2197")))),wp.element.createElement("div",{className:"components-base-control"},wp.element.createElement("div",{className:"components-base-control__field"},wp.element.createElement("label",{className:"components-base-control__label",htmlFor:"additional-css-classes"},o("Additional CSS class(es)","digiblocks")),wp.element.createElement("input",{className:"components-text-control__input",type:"text",id:"additional-css-classes",value:l||"",onChange:e=>t({customClasses:e.target.value}),"aria-describedby":"additional-css-classes-help",autoComplete:"off"})),wp.element.createElement("p",{id:"additional-css-classes-help",className:"components-base-control__help"},o("Separate multiple classes with spaces.","digiblocks")))));default:return null}},C=N({className:`digiblocks-spacer ${i} ${l||""}`,id:c||null});return wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(S,null,wp.element.createElement(D,{tabs:y,activeTab:g,onSelect:e=>{requestAnimationFrame(()=>{f(e)})}},x())),wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:_()}}),wp.element.createElement("div",{...C},wp.element.createElement("div",{className:"digiblocks-spacer-icon-wrapper"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},wp.element.createElement("path",{d:"M512 464c0-8.8-7.2-16-16-16L16 448c-8.8 0-16 7.2-16 16s7.2 16 16 16l480 0c8.8 0 16-7.2 16-16zM144 320c-8.8 0-16-7.2-16-16l0-96c0-8.8 7.2-16 16-16l224 0c8.8 0 16 7.2 16 16l0 96c0 8.8-7.2 16-16 16l-224 0zm224 32c26.5 0 48-21.5 48-48l0-96c0-26.5-21.5-48-48-48l-224 0c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48l224 0zM496 64c8.8 0 16-7.2 16-16s-7.2-16-16-16L16 32C7.2 32 0 39.2 0 48s7.2 16 16 16l480 0z"})))))},v=M;var{useBlockProps:E}=window.wp.blockEditor,P=({attributes:a})=>{let{id:t,anchor:n,customClasses:i,height:c}=a,s=["digiblocks-spacer",t,i||""].filter(Boolean).join(" "),l=E.save({className:s,id:n||null});return wp.element.createElement("div",{...l})},k=P;var{__:b}=window.wp.i18n,{registerBlockType:L}=window.wp.blocks;L("digiblocks/spacer",{apiVersion:2,title:digiBlocksData.blocks.spacer.title,category:"digiblocks",icon:{src:()=>{let{viewbox:a,path:t}=digiBlocksData.blocks.spacer.icon;return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${a}`,className:"digiblocks-editor-icons"},wp.element.createElement("path",{d:t}))}},description:digiBlocksData.blocks.spacer.description,keywords:[b("spacer","digiblocks"),b("gap","digiblocks"),b("spacing","digiblocks")],supports:{html:!1,className:!1,customClassName:!1,anchor:!1},attributes:{id:{type:"string",default:""},anchor:{type:"string",default:""},visibility:{type:"object",default:{desktop:!1,tablet:!1,mobile:!1}},customClasses:{type:"string",default:""},height:{type:"object",default:{desktop:80,tablet:60,mobile:40}}},example:{attributes:{height:{desktop:80}}},edit:v,save:k});})();
