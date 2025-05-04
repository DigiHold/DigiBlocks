/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const {
    useBlockProps,
    useInnerBlocksProps,
    InspectorControls,
} = wp.blockEditor;
const {
    SelectControl,
    RangeControl,
    TabPanel,
    Button,
    __experimentalToggleGroupControl: ToggleGroupControl,
    __experimentalToggleGroupControlOption: ToggleGroupControlOption,
} = wp.components;
const { useState, useEffect } = wp.element;

/**
 * Internal dependencies
 */
const { animations } = digi.utils;
const { tabIcons } = digi.icons;
const { ResponsiveControl, CustomTabPanel, TabPanelBody } = digi.components;

/**
 * Edit function for the Buttons block
 */
const ButtonsEdit = ({ attributes, setAttributes, clientId }) => {
    const {
        id,
        anchor,
        customClasses,
        layout,
        align,
        buttonSpacing,
        animation,
    } = attributes;

    // Use global responsive state for local rendering
    const [localActiveDevice, setLocalActiveDevice] = useState(window.digi.responsiveState.activeDevice);
    
    // State for active tab
    const [activeTab, setActiveTab] = useState("options");
    
    // Subscribe to global device state changes
    useEffect(() => {
        const unsubscribe = window.digi.responsiveState.subscribe((device) => {
            setLocalActiveDevice(device);
        });
        
        // Cleanup subscription on unmount
        return unsubscribe;
    }, []);
    
    // Use useEffect to set the ID only once when component mounts
    useEffect(() => {
        // Check if the ID needs to be regenerated using clientId
        if (!id || !id.includes(clientId.substr(0, 8))) {
            setAttributes({ id: `digi-${clientId.substr(0, 8)}` });
        }
    }, [clientId, setAttributes]);

    // Animation options
    const animationOptions = [
        { label: __("None", "digiblocks"), value: "none" },
        ...Object.keys(animations).map((animation) => ({
            label: animation
                .replace(/-/g, " ")
                .replace(/\b\w/g, (l) => l.toUpperCase()),
            value: animation,
        })),
    ];

    // Define the tabs for our custom tab panel
    const tabList = [
        { 
            name: 'options', 
            title: __('Options', 'digiblocks'),
            icon: tabIcons.optionsIcon
        },
        { 
            name: 'advanced', 
            title: __('Advanced', 'digiblocks'),
            icon: tabIcons.advancedIcon
        }
    ];

    // Generate CSS for block styling
    const generateCSS = () => {
        const activeDevice = window.digi.responsiveState.activeDevice;
        const blockId = id;
        
        return `
            /* Buttons Block - ${blockId} */
            [data-custom-id="${blockId}"] {
                display: flex;
                flex-wrap: wrap;
                ${layout === 'vertical' ? 'flex-direction: column;' : ''}
                align-items: ${align};
                gap: ${buttonSpacing[activeDevice]}px;
                transition: all 0.3s ease;
            }

			/* Editor Style */
			.digiblocks-button-inserter {
				display: flex;
				position: absolute;
				bottom: 0;
				right: 0;
			}
        `;
    };

    // Render tab content
    const renderTabContent = () => {
        switch (activeTab) {
            case 'options':
                return (
                    <>
                        <div className="components-panel__body is-opened">
                            <ToggleGroupControl
                                label={__("Layout", "digiblocks")}
                                value={layout}
                                onChange={(value) => setAttributes({ layout: value })}
                                isBlock
                                __nextHasNoMarginBottom={true}
                                __next40pxDefaultSize={true}
                            >
                                <ToggleGroupControlOption 
                                    value="horizontal" 
                                    label={__("Horizontal", "digiblocks")} 
                                />
                                <ToggleGroupControlOption 
                                    value="vertical" 
                                    label={__("Vertical", "digiblocks")} 
                                />
                            </ToggleGroupControl>
                            
                            <ToggleGroupControl
                                label={__("Alignment", "digiblocks")}
                                value={align}
                                onChange={(value) => setAttributes({ align: value })}
                                isBlock
                                __nextHasNoMarginBottom={true}
                                __next40pxDefaultSize={true}
                            >
                                <ToggleGroupControlOption 
                                    value="flex-start" 
                                    label={layout === 'horizontal' ? __("Top", "digiblocks") : __("Left", "digiblocks")} 
                                />
                                <ToggleGroupControlOption 
                                    value="center" 
                                    label={__("Center", "digiblocks")} 
                                />
                                <ToggleGroupControlOption 
                                    value="flex-end" 
                                    label={layout === 'horizontal' ? __("Bottom", "digiblocks") : __("Right", "digiblocks")} 
                                />
                            </ToggleGroupControl>
                            
                            <ResponsiveControl
                                label={__("Button Spacing", "digiblocks")}
                            >
                                <RangeControl
                                    value={buttonSpacing[localActiveDevice]}
                                    onChange={(value) =>
                                        setAttributes({
                                            buttonSpacing: {
                                                ...buttonSpacing,
                                                [localActiveDevice]: value,
                                            },
                                        })
                                    }
                                    min={0}
                                    max={50}
                                    step={1}
                                    __next40pxDefaultSize={true}
                                    __nextHasNoMarginBottom={true}
                                />
                            </ResponsiveControl>
                        </div>
                    </>
                );
            case 'advanced':
                return (
                    <>
                        <TabPanelBody
                            tab="advanced"
                            name="animation"
                            title={__("Animation", "digiblocks")}
                            initialOpen={true}
                        >
                            <SelectControl
                                label={__("Animation Effect", "digiblocks")}
                                value={animation}
                                options={animationOptions}
                                onChange={(value) => setAttributes({ animation: value })}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />
                        </TabPanelBody>
                        <TabPanelBody
                            tab="advanced"
                            name="additional"
                            title={__("Additional", "digiblocks")}
                            initialOpen={false}
                        >
                            {/* HTML Anchor field */}
                            <div className="components-base-control html-anchor-control">
                                <div className="components-base-control__field">
                                    <label className="components-base-control__label" htmlFor="html-anchor">
                                        {__("HTML anchor", "digiblocks")}
                                    </label>
                                    <input
                                        className="components-text-control__input"
                                        type="text"
                                        id="html-anchor"
                                        value={anchor || ""}
                                        onChange={(e) =>
                                            setAttributes({ anchor: e.target.value })
                                        }
                                        aria-describedby="html-anchor-help"
                                        autoCapitalize="none"
                                        autoComplete="off"
                                    />
                                </div>
                                <p id="html-anchor-help" className="components-base-control__help">
                                    {__("Enter a word or two — without spaces — to make a unique web address just for this block, called an \"anchor\". Then, you'll be able to link directly to this section of your page.", "digiblocks")}
                                    {' '}
                                    <a 
                                        className="components-external-link" 
                                        href="https://wordpress.org/documentation/article/page-jumps/" 
                                        target="_blank" 
                                        rel="external noreferrer noopener"
                                    >
                                        <span className="components-external-link__contents">
                                            {__("Learn more about anchors", "digiblocks")}
                                        </span>
                                        <span className="components-external-link__icon" aria-label="(opens in a new tab)">↗</span>
                                    </a>
                                </p>
                            </div>

                            {/* Additional CSS classes field */}
                            <div className="components-base-control">
                                <div className="components-base-control__field">
                                    <label className="components-base-control__label" htmlFor="additional-css-classes">
                                        {__("Additional CSS class(es)", "digiblocks")}
                                    </label>
                                    <input
                                        className="components-text-control__input"
                                        type="text"
                                        id="additional-css-classes"
                                        value={customClasses || ""}
                                        onChange={(e) =>
                                            setAttributes({ customClasses: e.target.value })
                                        }
                                        aria-describedby="additional-css-classes-help"
                                        autoComplete="off"
                                    />
                                </div>
                                <p id="additional-css-classes-help" className="components-base-control__help">
                                    {__("Separate multiple classes with spaces.", "digiblocks")}
                                </p>
                            </div>
                        </TabPanelBody>
                    </>
                );
            default:
                return null;
        }
    };

    // Block props
    const blockProps = useBlockProps({
        className: `digiblocks-buttons-block ${customClasses || ''}`,
        id: anchor || null,
        "data-custom-id": id,
    });

    // Inner blocks props
    const ALLOWED_BLOCKS = ['digiblocks/button'];
    const BUTTON_TEMPLATE = [
        ['digiblocks/button', {}],
    ];

    const innerBlocksProps = useInnerBlocksProps(blockProps, {
        allowedBlocks: ALLOWED_BLOCKS,
        template: BUTTON_TEMPLATE,
        renderAppender: false,
        orientation: layout === 'vertical' ? 'vertical' : 'horizontal',
    });

    return (
		<>
			<InspectorControls>
				<CustomTabPanel
					tabs={tabList}
					activeTab={activeTab}
					onSelect={setActiveTab}
				>
					{renderTabContent()}
				</CustomTabPanel>
			</InspectorControls>
	
			{/* Use dangerouslySetInnerHTML for the style tag */}
			<style dangerouslySetInnerHTML={{ __html: generateCSS() }} />
	
			<div {...innerBlocksProps}>
				{innerBlocksProps.children}
				<div className="digiblocks-button-inserter">
					<Button
						variant="primary"
						isSmall
						icon="plus"
						onClick={() => {
							const buttonBlock = wp.blocks.createBlock('digiblocks/button');
							wp.data.dispatch('core/block-editor').insertBlock(buttonBlock, undefined, clientId);
						}}
					>
						{__('Add', 'digiblocks')}
					</Button>
				</div>
			</div>
		</>
	);
};

export default ButtonsEdit;