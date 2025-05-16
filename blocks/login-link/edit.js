/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const {
    useBlockProps,
    RichText,
    InspectorControls,
    PanelColorSettings,
    LinkControl,
} = wp.blockEditor;
const {
    TextControl,
    RangeControl,
    __experimentalToggleGroupControl: ToggleGroupControl,
    __experimentalToggleGroupControlOption: ToggleGroupControlOption,
} = wp.components;
const { useState, useEffect } = wp.element;

/**
 * Internal dependencies
 */
const { useBlockId } = digi.utils;
const { tabIcons } = digi.icons;
const { ResponsiveControl, TypographyControl, CustomTabPanel, TabPanelBody, FontAwesomeControl } = digi.components;

/**
 * Edit function for the Login Link block
 */
const LoginLinkEdit = ({ attributes, setAttributes, clientId }) => {
    const {
        id,
        anchor,
        customClasses,
        loginText,
        loginIconValue,
        loginIconPosition,
        loginUrl,
        loginOpenInNewTab,
        loginRel,
        loggedInText,
        loggedInIconValue,
        loggedInIconPosition,
        loggedInUrl,
        loggedInOpenInNewTab,
        loggedInRel,
        textColor,
        textHoverColor,
        typography,
        iconSize
    } = attributes;

    // Create unique class
    useBlockId(id, clientId, setAttributes);

    // Use global responsive state for local rendering
    const [localActiveDevice, setLocalActiveDevice] = useState(window.digi.responsiveState.activeDevice);
    
    // State for active tab
    const [activeTab, setActiveTab] = useState(() => {
		// Try to get the saved tab for this block
		if (window.digi.uiState) {
			const savedTab = window.digi.uiState.getActiveTab(clientId);
			if (savedTab) return savedTab;
		}
		return "options"; // Default fallback
	});
    
    // Subscribe to global device state changes
    useEffect(() => {
        const unsubscribe = window.digi.responsiveState.subscribe((device) => {
            setLocalActiveDevice(device);
        });
        
        // Cleanup subscription on unmount
        return unsubscribe;
    }, []);

    // Initialize icon size if it doesn't exist
    useEffect(() => {
        if (!iconSize) {
            setAttributes({
                iconSize: {
                    desktop: 16,
                    tablet: 15,
                    mobile: 14
                }
            });
        }
    }, [iconSize, setAttributes]);

    // Define the tabs for our custom tab panel
    const tabList = [
        { 
            name: 'options', 
            title: __('Options', 'digiblocks'),
            icon: tabIcons.optionsIcon
        },
        { 
            name: 'style', 
            title: __('Style', 'digiblocks'),
            icon: tabIcons.styleIcon
        },
        { 
            name: 'advanced', 
            title: __('Advanced', 'digiblocks'),
            icon: tabIcons.advancedIcon
        }
    ];

    // Generate CSS for login link styling
    const generateCSS = () => {
        const currentIconSize = iconSize && iconSize[localActiveDevice] ? iconSize[localActiveDevice] : 16;
        
        return `
            /* Login Link Block - ${id} */
            .${id} {
                text-decoration: none;
                transition: all 0.3s ease;
                color: ${textColor || 'inherit'};
            }
            
            .${id}:hover {
                color: ${textHoverColor || 'currentColor'};
            }
            
            /* Icon styles */
            .${id} .digiblocks-login-link-icon {
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .${id} .digiblocks-login-link-icon svg {
                width: ${currentIconSize}px;
                height: ${currentIconSize}px;
                fill: currentColor;
            }
            
            /* For the editor preview */
            .${id} .digiblocks-login-link-preview {
				display: flex;
				flex-direction: column;
				gap: 10px;
			}

			.${id} .digiblocks-login-link-logged-out,
			.${id} .digiblocks-login-link-logged-in {
				display: flex;
				flex-direction: column;
				gap: 5px;
			}
            
            .${id} .digiblocks-login-link-content {
                display: inline-flex;
                align-items: center;
                gap: 8px;
            }
            
            /* Typography */
            .${id}, 
            .${id} .digiblocks-login-link-content {
                ${typography && typography.fontFamily ? `font-family: ${typography.fontFamily};` : ''}
                ${typography && typography.fontSize && typography.fontSize[localActiveDevice] ? `font-size: ${typography.fontSize[localActiveDevice]}${typography.fontSizeUnit || 'px'};` : ''}
                ${typography && typography.fontWeight ? `font-weight: ${typography.fontWeight};` : ''}
                ${typography && typography.fontStyle ? `font-style: ${typography.fontStyle};` : ''}
                ${typography && typography.textTransform ? `text-transform: ${typography.textTransform};` : ''}
                ${typography && typography.textDecoration ? `text-decoration: ${typography.textDecoration};` : ''}
                ${typography && typography.lineHeight && typography.lineHeight[localActiveDevice] ? `line-height: ${typography.lineHeight[localActiveDevice]}${typography.lineHeightUnit || 'em'};` : ''}
                ${typography && typography.letterSpacing && typography.letterSpacing[localActiveDevice] ? `letter-spacing: ${typography.letterSpacing[localActiveDevice]}${typography.letterSpacingUnit || 'px'};` : ''}
            }
        `;
    };

    // Render login link content
    const renderLinkContent = (isLoggedIn = false) => {
        const text = isLoggedIn ? loggedInText : loginText;
        const iconValue = isLoggedIn ? loggedInIconValue : loginIconValue;
        const iconPosition = isLoggedIn ? loggedInIconPosition : loginIconPosition;

        const iconElement = iconValue && iconValue.svg ? (
            <span 
                key="icon"
                className="digiblocks-login-link-icon"
                dangerouslySetInnerHTML={{ __html: iconValue.svg }}
            />
        ) : null;
        
        const textElement = (
            <RichText
                key="text"
                tagName="span"
                className="digiblocks-login-link-text"
                value={text}
                onChange={(value) => isLoggedIn 
                    ? setAttributes({ loggedInText: value }) 
                    : setAttributes({ loginText: value })
                }
                placeholder={isLoggedIn 
                    ? __('Logged in text…', 'digiblocks') 
                    : __('Login text…', 'digiblocks')
                }
                allowedFormats={[]}
                withoutInteractiveFormatting
            />
        );
        
        if (iconPosition === 'left') {
            return [iconElement, textElement].filter(Boolean);
        } else {
            return [textElement, iconElement].filter(Boolean);
        }
    };

    // Render tab content
    const renderTabContent = () => {
        switch (activeTab) {
            case 'options':
                return (
                    <>
                        <TabPanelBody
                            tab="options"
                            name="login-section"
                            title={__("Login Settings", "digiblocks")}
                            initialOpen={true}
                        >
                            <TextControl
                                label={__("Login Text", "digiblocks")}
                                value={loginText}
                                onChange={(value) => setAttributes({ loginText: value })}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            <FontAwesomeControl
                                label={__('Login Icon', 'digiblocks')}
                                value={loginIconValue}
                                onChange={(value) => setAttributes({ loginIconValue: value })}
                            />
                            
                            {loginIconValue && (
                                <ToggleGroupControl
                                    label={__("Icon Position", "digiblocks")}
                                    value={loginIconPosition}
                                    onChange={(value) => setAttributes({ loginIconPosition: value })}
                                    isBlock
                                    __next40pxDefaultSize={true}
                                    __nextHasNoMarginBottom={true}
                                >
                                    <ToggleGroupControlOption 
                                        value="left" 
                                        label={__("Left", "digiblocks")} 
                                    />
                                    <ToggleGroupControlOption 
                                        value="right" 
                                        label={__("Right", "digiblocks")}
                                    />
                                </ToggleGroupControl>
                            )}
                            
                            <div style={{ marginTop: '20px' }}>
                                <p style={{ marginBottom: '8px' }}>{__("Login URL", "digiblocks")}</p>
                                <LinkControl
                                    value={loginUrl ? {
                                        url: loginUrl,
                                        opensInNewTab: loginOpenInNewTab,
                                        rel: loginRel
                                    } : undefined}
                                    onChange={(linkObject) => {
                                        setAttributes({
                                            loginUrl: linkObject.url,
                                            loginOpenInNewTab: linkObject.opensInNewTab,
                                            loginRel: linkObject.rel || ''
                                        });
                                    }}
                                    settings={[
                                        {
                                            id: 'opensInNewTab',
                                            title: __('Open in new tab'),
                                        },
                                        {
                                            id: 'rel',
                                            title: __('Add noopener noreferrer'),
                                        }
                                    ]}
                                    onRemove={() => {
                                        setAttributes({
                                            loginUrl: '',
                                            loginOpenInNewTab: false,
                                            loginRel: ''
                                        });
                                    }}
                                />
                                <p className="components-base-control__help">
                                    {__("Leave empty to use default WordPress login page", "digiblocks")}
                                </p>
                            </div>
                        </TabPanelBody>
                        
                        <TabPanelBody
                            tab="options"
                            name="logged-in-section"
                            title={__("Logged In Settings", "digiblocks")}
                            initialOpen={false}
                        >
                            <TextControl
                                label={__("Logged In Text", "digiblocks")}
                                value={loggedInText}
                                onChange={(value) => setAttributes({ loggedInText: value })}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            <FontAwesomeControl
                                label={__('Logged In Icon', 'digiblocks')}
                                value={loggedInIconValue}
                                onChange={(value) => setAttributes({ loggedInIconValue: value })}
                            />
                            
                            {loggedInIconValue && (
                                <ToggleGroupControl
                                    label={__("Icon Position", "digiblocks")}
                                    value={loggedInIconPosition}
                                    onChange={(value) => setAttributes({ loggedInIconPosition: value })}
                                    isBlock
                                    __next40pxDefaultSize={true}
                                    __nextHasNoMarginBottom={true}
                                >
                                    <ToggleGroupControlOption 
                                        value="left" 
                                        label={__("Left", "digiblocks")} 
                                    />
                                    <ToggleGroupControlOption 
                                        value="right" 
                                        label={__("Right", "digiblocks")}
                                    />
                                </ToggleGroupControl>
                            )}
                            
                            <div style={{ marginTop: '20px' }}>
                                <p style={{ marginBottom: '8px' }}>{__("Logged In URL", "digiblocks")}</p>
                                <LinkControl
                                    value={loggedInUrl ? {
                                        url: loggedInUrl,
                                        opensInNewTab: loggedInOpenInNewTab,
                                        rel: loggedInRel
                                    } : undefined}
                                    onChange={(linkObject) => {
                                        setAttributes({
                                            loggedInUrl: linkObject.url,
                                            loggedInOpenInNewTab: linkObject.opensInNewTab,
                                            loggedInRel: linkObject.rel || ''
                                        });
                                    }}
                                    settings={[
                                        {
                                            id: 'opensInNewTab',
                                            title: __('Open in new tab'),
                                        },
                                        {
                                            id: 'rel',
                                            title: __('Add noopener noreferrer'),
                                        }
                                    ]}
                                    onRemove={() => {
                                        setAttributes({
                                            loggedInUrl: '',
                                            loggedInOpenInNewTab: false,
                                            loggedInRel: ''
                                        });
                                    }}
                                />
                                <p className="components-base-control__help">
                                    {__("URL for logged in users", "digiblocks")}
                                </p>
                            </div>
                        </TabPanelBody>
                    </>
                );
                
            case 'style':
                return (
                    <>
                        <TabPanelBody
                            tab="style"
                            name="typography"
                            title={__("Typography", "digiblocks")}
                            initialOpen={true}
                        >
                            <TypographyControl
                                label={__("Link Typography", "digiblocks")}
                                value={typography}
                                onChange={(value) => setAttributes({ typography: value })}
                                defaults={{
                                    fontSize: { desktop: 16, tablet: 15, mobile: 14 },
                                    fontSizeUnit: 'px',
                                    lineHeight: { desktop: 1.5, tablet: 1.4, mobile: 1.3 },
                                    lineHeightUnit: 'em',
                                }}
                            />
                            
                            <ResponsiveControl
                                label={__("Icon Size", "digiblocks")}
                            >
                                <RangeControl
                                    value={iconSize && iconSize[localActiveDevice] ? iconSize[localActiveDevice] : 16}
                                    onChange={(value) =>
                                        setAttributes({
                                            iconSize: {
                                                ...iconSize,
                                                [localActiveDevice]: value,
                                            },
                                        })
                                    }
                                    min={8}
                                    max={48}
                                    step={1}
                                    __nextHasNoMarginBottom={true}
                                    __next40pxDefaultSize={true}
                                />
                            </ResponsiveControl>
                        </TabPanelBody>
                        
                        <TabPanelBody
                            tab="style"
                            name="colors"
                            title={__("Colors", "digiblocks")}
                            initialOpen={false}
                        >
                            <PanelColorSettings
                                title={__("Link Colors", "digiblocks")}
                                initialOpen={true}
                                enableAlpha={true}
                                colorSettings={[
                                    {
                                        value: textColor,
                                        onChange: (value) => setAttributes({ textColor: value }),
                                        label: __("Text Color", "digiblocks"),
                                    },
                                    {
                                        value: textHoverColor,
                                        onChange: (value) => setAttributes({ textHoverColor: value }),
                                        label: __("Text Hover Color", "digiblocks"),
                                    }
                                ]}
                            />
                        </TabPanelBody>
                    </>
                );
                
            case 'advanced':
                return (
                    <>
                        <TabPanelBody
                            tab="advanced"
                            name="additional"
                            title={__("Additional", "digiblocks")}
                            initialOpen={true}
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

    const blockProps = useBlockProps({
        className: `digiblocks-login-link ${id} ${customClasses || ''}`,
        id: anchor || null,
    });

    // Preview both logged out and logged in states for the editor
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

            <div {...blockProps}>
                <div className="digiblocks-login-link-preview">
                    <div className="digiblocks-login-link-logged-out">
                        <strong>{__("Logged Out Preview:", "digiblocks")}</strong>
                        <div className="digiblocks-login-link-content">
                            {renderLinkContent(false)}
                        </div>
                    </div>
                    
                    <div className="digiblocks-login-link-logged-in">
                        <strong>{__("Logged In Preview:", "digiblocks")}</strong>
                        <div className="digiblocks-login-link-content">
                            {renderLinkContent(true)}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginLinkEdit;