/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const {
    useBlockProps,
    InspectorControls
} = wp.blockEditor;
const {
    ToggleControl,
    RangeControl
} = wp.components;
const { useState, useEffect } = wp.element;

/**
 * Internal dependencies
 */
const { useBlockId } = digi.utils;
const { tabIcons } = digi.icons;
const { ResponsiveControl, CustomTabPanel } = digi.components;

/**
 * Edit function for the Spacer block
 */
const SpacerEdit = ({ attributes, setAttributes, clientId }) => {
    const {
        id,
        anchor,
		visibility,
        customClasses,
        height
    } = attributes;

	// Create unique class
	useBlockId( id, clientId, setAttributes );

    // Use global responsive state for local rendering
    const [localActiveDevice, setLocalActiveDevice] = useState(window.digi.responsiveState.activeDevice);
    
    // Subscribe to global device state changes
    useEffect(() => {
        const unsubscribe = window.digi.responsiveState.subscribe((device) => {
            setLocalActiveDevice(device);
        });
        
        // Cleanup subscription on unmount
        return unsubscribe;
    }, []);
    
    // State for active tab
    const [activeTab, setActiveTab] = useState(() => {
		// Try to get the saved tab for this block
		if (window.digi.uiState) {
			const savedTab = window.digi.uiState.getActiveTab(clientId);
			if (savedTab) return savedTab;
		}
		return "options"; // Default fallback
	});

    // Define the tabs for the custom tab panel
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

    // Generate CSS for all styling
    const generateCSS = () => {
        const activeDevice = window.digi.responsiveState.activeDevice;
        
        // Determine current height
        const currentHeight = height[activeDevice] || (activeDevice === 'tablet' ? 60 : activeDevice === 'mobile' ? 40 : 80);
        
        // Assemble the full CSS
        return `
            /* Spacer Block Styles */
            .${id} {
                height: ${currentHeight}px;
                position: relative;
            }
            
            /* Editor-only styles */
            .editor-styles-wrapper .${id} .digiblocks-spacer-icon-wrapper {
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: #e4e4e4;
                height: 100%;
                border-radius: 4px;
                pointer-events: none;
            }
            
            .editor-styles-wrapper .${id} .digiblocks-spacer-icon-wrapper svg {
                width: 1em;
				min-width: 1.5rem;
                height: 100%;
                fill: #949494;
            }

			/* Visibility Controls */
			${visibility.desktop ? `
				@media (min-width: 992px) {
					.${id} {
						opacity: 0.5 !important;
					}
				}
			` : ''}

			${visibility.tablet ? `
				@media (min-width: 768px) and (max-width: 991px) {
					.${id} {
						opacity: 0.5 !important;
					}
				}
			` : ''}

			${visibility.mobile ? `
				@media (max-width: 767px) {
					.${id} {
						opacity: 0.5 !important;
					}
				}
			` : ''}
        `;
    };

    // Render tab content based on the active tab
    const renderTabContent = () => {
        switch (activeTab) {
            case 'options':
                return (
					<>
						<div className="components-panel__body is-opened">
							<ResponsiveControl
                                label={__("Height", "digiblocks")}
                            >
                                <RangeControl
                                    value={height[localActiveDevice]}
                                    onChange={(value) =>
                                        setAttributes({
                                            height: {
                                                ...height,
                                                [localActiveDevice]: value,
                                            },
                                        })
                                    }
                                    min={1}
                                    max={500}
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
							name="visibility"
							title={__('Visibility', 'digiblocks')}
							initialOpen={false}
						>
							<div className="components-base-control__help" style={{ 
								padding: '12px', 
								backgroundColor: '#f0f6fc', 
								border: '1px solid #c3ddfd', 
								borderRadius: '4px',
								marginBottom: '16px'
							}}>
								<strong>{__('Editor Note:', 'digiblocks')}</strong><br />
								{__('Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.', 'digiblocks')}
							</div>
							
							<ToggleControl
								label={__('Hide on Desktop', 'digiblocks')}
								checked={visibility.desktop}
								onChange={(value) => setAttributes({
									visibility: {
										...visibility,
										desktop: value
									}
								})}
								__nextHasNoMarginBottom={true}
							/>
							
							<ToggleControl
								label={__('Hide on Tablet', 'digiblocks')}
								checked={visibility.tablet}
								onChange={(value) => setAttributes({
									visibility: {
										...visibility,
										tablet: value
									}
								})}
								__nextHasNoMarginBottom={true}
							/>
							
							<ToggleControl
								label={__('Hide on Mobile', 'digiblocks')}
								checked={visibility.mobile}
								onChange={(value) => setAttributes({
									visibility: {
										...visibility,
										mobile: value
									}
								})}
								__nextHasNoMarginBottom={true}
							/>
						</TabPanelBody>
						
						<div className="components-panel__body is-opened">
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
						</div>
                    </>
                );
            default:
                return null;
        }
    };

    // Block props without any inline styles - we'll use the style tag for everything
    const blockProps = useBlockProps({
        className: `digiblocks-spacer ${id} ${customClasses || ''}`,
        id: anchor || null, // Set the anchor as ID if provided
    });

    return (
        <>
            <InspectorControls>
                <CustomTabPanel
                    tabs={tabList}
                    activeTab={activeTab}
                    onSelect={(tab) => {
                        // Prevent default focus behavior that causes scrolling
                        requestAnimationFrame(() => {
                            setActiveTab(tab);
                        });
                    }}
                >
                    {renderTabContent()}
                </CustomTabPanel>
            </InspectorControls>

            {/* Use dangerouslySetInnerHTML for the style tag */}
            <style dangerouslySetInnerHTML={{ __html: generateCSS() }} />

            <div {...blockProps}>
                <div className="digiblocks-spacer-icon-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M512 464c0-8.8-7.2-16-16-16L16 448c-8.8 0-16 7.2-16 16s7.2 16 16 16l480 0c8.8 0 16-7.2 16-16zM144 320c-8.8 0-16-7.2-16-16l0-96c0-8.8 7.2-16 16-16l224 0c8.8 0 16 7.2 16 16l0 96c0 8.8-7.2 16-16 16l-224 0zm224 32c26.5 0 48-21.5 48-48l0-96c0-26.5-21.5-48-48-48l-224 0c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48l224 0zM496 64c8.8 0 16-7.2 16-16s-7.2-16-16-16L16 32C7.2 32 0 39.2 0 48s7.2 16 16 16l480 0z" />
                    </svg>
                </div>
            </div>
        </>
    );
};

export default SpacerEdit;