/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const {
    useBlockProps,
    InspectorControls,
    PanelColorSettings,
} = wp.blockEditor;
const {
    TextControl,
    ToggleControl,
    SelectControl,
    RangeControl,
    Placeholder,
    Spinner,
    Button,
    RadioControl,
    __experimentalToggleGroupControl: ToggleGroupControl,
    __experimentalToggleGroupControlOption: ToggleGroupControlOption,
} = wp.components;
const { useState, useEffect, useRef } = wp.element;
const { MediaUpload, MediaUploadCheck } = wp.blockEditor;

/**
 * Internal dependencies
 */
const { useBlockId, animations, animationPreview } = digi.utils;
const { tabIcons } = digi.icons;
const { ResponsiveControl, DimensionControl, BoxShadowControl, CustomTabPanel, TabPanelBody } = digi.components;

// Track script loading state
let dotLottieScriptLoaded = false;
let dotLottieLoadPromise = null;

/**
 * Load the lottie.js script specified in digiBlocksData
 */
const loadDotLottieScript = () => {
    if (dotLottieScriptLoaded) {
        return Promise.resolve();
    }
    
    if (dotLottieLoadPromise) {
        return dotLottieLoadPromise;
    }
    
    dotLottieLoadPromise = new Promise((resolve, reject) => {
        // Get the script URL from digiBlocksData
        const scriptUrl = digiBlocksData.lottie;
        if (!scriptUrl) {
            reject(new Error('Lottie script URL not found in digiBlocksData'));
            return;
        }
        
        // Create script element
        const script = document.createElement('script');
        script.src = scriptUrl;
        script.async = true;
        
        // Set up event handlers
        script.onload = () => {
            dotLottieScriptLoaded = true;
            resolve();
        };
        
        script.onerror = () => {
            reject(new Error('Failed to load Lottie script from: ' + scriptUrl));
        };
        
        // Add script to document
        document.head.appendChild(script);
    });
    
    return dotLottieLoadPromise;
};

/**
 * Lottie Edit component
 */
const LottieEdit = ({ attributes, setAttributes, clientId }) => {
    const {
        id,
        anchor,
        customClasses,
        lottieSource,
        sourceType,
        lottieFile,
        autoplay,
        loop,
        speed,
        width,
        widthUnit,
        height,
        heightUnit,
        alignment,
        backgroundColor,
        showControls,
        padding,
        margin,
        borderStyle,
        borderWidth,
        borderRadius,
        borderColor,
        shadow,
        animation,
    } = attributes;

    // Create unique class
    useBlockId(id, clientId, setAttributes);

    // Use global responsive state
    const [localActiveDevice, setLocalActiveDevice] = useState(window.digi.responsiveState.activeDevice);
    
    // State for active tab
    const [activeTab, setActiveTab] = useState("options");

    // State for animation loading
    const [isLoading, setIsLoading] = useState(false);
    const [animationError, setAnimationError] = useState(null);
    const [isScriptLoaded, setIsScriptLoaded] = useState(dotLottieScriptLoaded);
    
    // References
    const containerRef = useRef(null);
    const canvasRef = useRef(null);
    const dotLottieRef = useRef(null);
    const controlsRef = useRef(null);
    const previewTimeoutRef = useRef(null);
    const isMounted = useRef(true);
    
    // Width and height unit options
    const widthUnitOptions = [
        { label: 'px', value: 'px' },
        { label: '%', value: '%' },
        { label: 'vw', value: 'vw' },
    ];

    const heightUnitOptions = [
        { label: 'px', value: 'px' },
        { label: '%', value: '%' },
        { label: 'vh', value: 'vh' },
    ];

    // Subscribe to device state changes
    useEffect(() => {
        const unsubscribe = window.digi.responsiveState.subscribe((device) => {
            setLocalActiveDevice(device);
        });
        
        return unsubscribe;
    }, []);

    // Track mount state
    useEffect(() => {
        isMounted.current = true;
        return () => {
            isMounted.current = false;
            
            // Clean up animation when unmounted
            if (dotLottieRef.current) {
                try {
                    dotLottieRef.current.pause();
                    dotLottieRef.current.destroy();
                } catch (e) {
                    console.warn('Error destroying animation during cleanup:', e);
                }
                dotLottieRef.current = null;
            }
            
            // Clean up resize observer
            if (window.lottieResizeObserver) {
                window.lottieResizeObserver.disconnect();
                window.lottieResizeObserver = null;
            }
        };
    }, []);

    // Load the Lottie script
    useEffect(() => {
        if (isScriptLoaded) return;
        
        setIsLoading(true);
        loadDotLottieScript()
            .then(() => {
                if (isMounted.current) {
                    console.log('DotLottie script loaded successfully');
                    setIsScriptLoaded(true);
                    setIsLoading(false);
                    
                    // If we have a source, initialize animation
                    if (lottieSource && canvasRef.current) {
                        initializeAnimation();
                    }
                }
            })
            .catch((error) => {
                console.error('Error loading dotlottie script:', error);
                if (isMounted.current) {
                    setAnimationError('Failed to load animation library: ' + error.message);
                    setIsLoading(false);
                }
            });
    }, []);

    // Initialize or update animation when source or canvas changes
    useEffect(() => {
        if (isScriptLoaded && lottieSource && canvasRef.current) {
            console.log('Source or critical settings changed, reinitializing animation');
            initializeAnimation();
        }
    }, [isScriptLoaded, lottieSource, canvasRef.current]);
    
    // Effect for handling control visibility
    useEffect(() => {
        if (!dotLottieRef.current) return;
        
        if (showControls && !controlsRef.current) {
            createControls();
        } else if (!showControls && controlsRef.current) {
            controlsRef.current.remove();
            controlsRef.current = null;
        }
    }, [showControls]);

    // Initialize animation with current settings
    const initializeAnimation = () => {
		// Skip if needed components aren't available
		if (!window.DotLottie || !lottieSource || !canvasRef.current) {
			console.log('Cannot initialize animation: missing requirements', {
				DotLottie: !!window.DotLottie,
				lottieSource,
				canvasRef: !!canvasRef.current
			});
			return;
		}
		
		setIsLoading(true);
		setAnimationError(null);
		
		try {
			// Destroy previous animation if it exists
			if (dotLottieRef.current) {
				dotLottieRef.current.destroy?.();
				dotLottieRef.current = null;
			}
			
			console.log('Initializing DotLottie animation with source:', lottieSource);
			
			// Initialize DotLottie player with window.DotLottie from the loaded script
			dotLottieRef.current = new window.DotLottie({
				autoplay: autoplay,
				loop: loop,
				canvas: canvasRef.current,
				src: lottieSource,
			});
			
			// Add event listener for load - will set speed after loaded
			dotLottieRef.current.addEventListener('DOMLoaded', () => {
				console.log('Animation loaded');
				if (isMounted.current) {
					// Set speed AFTER animation is loaded
					if (speed !== 1) {
						console.log('Setting animation speed to:', speed);
						dotLottieRef.current.setSpeed(speed);
					}
					
					// If loop is false, we need to handle "play once" behavior
					if (!loop) {
						dotLottieRef.current.addEventListener('complete', () => {
							// When animation finishes, ensure it stops
							dotLottieRef.current.pause();
							// Move to the first frame
							dotLottieRef.current.goToFrame(0);
						});
					}
					
					// If autoplay is false, ensure animation is paused
					if (!autoplay) {
						dotLottieRef.current.pause();
						dotLottieRef.current.goToFrame(0);
					}
					
					setIsLoading(false);
					
					// Create controls if needed
					if (showControls) {
						createControls();
					}
				}
			});
			
			// Add error handler
			dotLottieRef.current.addEventListener('error', (error) => {
				console.error('Animation failed to load:', error);
				if (isMounted.current) {
					setAnimationError('Animation failed to load. Check the file or URL.');
					setIsLoading(false);
				}
			});
			
			// Safety timeout to ensure we don't show the loading spinner forever
			setTimeout(() => {
				if (isMounted.current && isLoading) {
					console.log('Animation load timeout - stopping spinner');
					setIsLoading(false);
				}
			}, 3000);
		} catch (error) {
			console.error('Error initializing animation:', error);
			setAnimationError('Failed to initialize animation: ' + error.message);
			setIsLoading(false);
		}
	};

    // Create controls with a slight delay to ensure animation is ready
    const createControlsWithDelay = () => {
        // Use a short delay to ensure animation state is stable
        setTimeout(() => {
            if (isMounted.current) {
                createControls();
            }
        }, 100);
    };

    // Create play/pause controls
    const createControls = () => {
        if (!containerRef.current || !dotLottieRef.current) return;
        
        // Remove existing controls if any
        if (controlsRef.current) {
            controlsRef.current.remove();
        }
        
        // Create controls wrapper
        const controls = document.createElement('div');
        controls.className = 'digiblocks-lottie-controls';
        controls.style.position = 'absolute';
        controls.style.bottom = '10px';
        controls.style.left = '0';
        controls.style.right = '0';
        controls.style.display = 'flex';
        controls.style.justifyContent = 'center';
        controls.style.zIndex = '10';
        
        // Create play/pause button
        const playPauseBtn = document.createElement('button');
        playPauseBtn.className = 'digiblocks-lottie-play-pause';
        
        // Determine current playing state based on autoplay setting
        let isPlaying = autoplay;
        playPauseBtn.innerHTML = isPlaying ? '⏸️' : '▶️';
        
        playPauseBtn.style.background = 'rgba(0,0,0,0.3)';
        playPauseBtn.style.color = 'white';
        playPauseBtn.style.border = 'none';
        playPauseBtn.style.borderRadius = '4px';
        playPauseBtn.style.padding = '5px 10px';
        playPauseBtn.style.cursor = 'pointer';
        
        // Add click handler
        playPauseBtn.addEventListener('click', () => {
            if (!dotLottieRef.current) return;
            
            if (isPlaying) {
                dotLottieRef.current.pause();
                playPauseBtn.innerHTML = '▶️';
            } else {
                dotLottieRef.current.play();
                playPauseBtn.innerHTML = '⏸️';
            }
            
            isPlaying = !isPlaying;
        });
        
        // Add button to controls and controls to container
        controls.appendChild(playPauseBtn);
        containerRef.current.appendChild(controls);
        controlsRef.current = controls;
    };

    // Update animation settings when they change
    useEffect(() => {
        if (!dotLottieRef.current || !dotLottieRef.current.isLoaded) return;
        
        console.log('Updating animation settings:', { 
            autoplay, 
            loop, 
            speed, 
            showControls 
        });
        
        try {
            // Update loop setting
            dotLottieRef.current.setLoop(loop);
            
            // Update speed setting
            dotLottieRef.current.setSpeed(speed);
            
            // Update play/pause state
            if (autoplay) {
                dotLottieRef.current.play();
            } else {
                dotLottieRef.current.pause();
                dotLottieRef.current.goToFrame(0);
            }
            
            // If loop is false, ensure we have the complete event handler
            if (!loop) {
                // Remove any existing handlers
                dotLottieRef.current.removeEventListener('complete');
                
                // Add new handler
                dotLottieRef.current.addEventListener('complete', () => {
                    dotLottieRef.current.pause();
                    dotLottieRef.current.goToFrame(0);
                });
            }
        } catch (error) {
            console.error('Error updating animation settings:', error);
        }
    }, [autoplay, loop, speed]);

    // Handle file upload
    const onFileSelect = (media) => {
        if (!media || !media.url) return;
        
        setAttributes({
            lottieSource: media.url,
            lottieFile: media,
            sourceType: 'file'
        });
    };

    // Handle URL input
    const onURLChange = (url) => {
        setAttributes({
            lottieSource: url,
            sourceType: 'url'
        });
    };

    // Load animation from URL
    const loadFromUrl = () => {
        if (!lottieSource) {
            setAnimationError('Please enter a valid URL');
            return;
        }
        
        if (!isScriptLoaded) {
            setAnimationError('Animation library is still loading. Please wait a moment.');
            return;
        }
        
        initializeAnimation();
    };

    // Button click handler for animation preview
    const handlePreviewClick = () => {
        animationPreview(id, animation, animations, previewTimeoutRef);
    };

    // Generate CSS for block styling
    const generateCSS = () => {
        const activeDevice = localActiveDevice;
        
        // Animation CSS if provided
        let animationCSS = '';
        if (animation && animation !== 'none' && animations[animation]) {
            animationCSS = animations[animation].keyframes;
        }
        
        return `
            /* Lottie Block - ${id} */
            .${id} {
                margin: ${margin[activeDevice].top}${margin[activeDevice].unit} ${margin[activeDevice].right}${margin[activeDevice].unit} ${margin[activeDevice].bottom}${margin[activeDevice].unit} ${margin[activeDevice].left}${margin[activeDevice].unit};
                padding: ${padding[activeDevice].top}${padding[activeDevice].unit} ${padding[activeDevice].right}${padding[activeDevice].unit} ${padding[activeDevice].bottom}${padding[activeDevice].unit} ${padding[activeDevice].left}${padding[activeDevice].unit};
                width: 100%;
                display: flex;
                justify-content: ${alignment === 'left' ? 'flex-start' : (alignment === 'right' ? 'flex-end' : 'center')};
            }
            
            .${id} .digiblocks-lottie-container {
                width: ${width[activeDevice]}${widthUnit};
                height: ${height[activeDevice]}${heightUnit};
                ${backgroundColor ? `background-color: ${backgroundColor};` : ''}
                overflow: hidden;
                position: relative;
                ${borderStyle !== 'none' ? `
                border-style: ${borderStyle};
                border-color: ${borderColor};
                border-width: ${borderWidth[activeDevice].top}${borderWidth[activeDevice].unit} ${borderWidth[activeDevice].right}${borderWidth[activeDevice].unit} ${borderWidth[activeDevice].bottom}${borderWidth[activeDevice].unit} ${borderWidth[activeDevice].left}${borderWidth[activeDevice].unit};
                ` : ''}
                border-radius: ${borderRadius[activeDevice].top}${borderRadius[activeDevice].unit} ${borderRadius[activeDevice].right}${borderRadius[activeDevice].unit} ${borderRadius[activeDevice].bottom}${borderRadius[activeDevice].unit} ${borderRadius[activeDevice].left}${borderRadius[activeDevice].unit};
                ${shadow.enable ? `box-shadow: ${shadow.horizontal}px ${shadow.vertical}px ${shadow.blur}px ${shadow.spread}px ${shadow.color};` : ''}
            }
            
            .${id} canvas {
                width: 100%;
                height: 100%;
            }
            
            .${id} .digiblocks-lottie-error {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                text-align: center;
            }
            
            .${id} .digiblocks-lottie-error {
                color: #cc1818;
                max-width: 90%;
                padding: 10px;
            }
            
            /* Animation keyframes */
            ${animationCSS}
        `;
    };

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

    // Border style options
    const borderStyleOptions = [
        { label: __('None', 'digiblocks'), value: 'none' },
        { label: __('Solid', 'digiblocks'), value: 'solid' },
        { label: __('Dashed', 'digiblocks'), value: 'dashed' },
        { label: __('Dotted', 'digiblocks'), value: 'dotted' },
        { label: __('Double', 'digiblocks'), value: 'double' },
    ];

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

    // Render tab content based on the active tab
    const renderTabContent = () => {
        switch (activeTab) {
            case 'options':
                return (
                    <>
                        <TabPanelBody
                            tab="options"
                            name="source"
                            title={__('Source', 'digiblocks')}
                            initialOpen={true}
                        >
                            <RadioControl
                                label={__('Source Type', 'digiblocks')}
                                selected={sourceType}
                                options={[
                                    { label: __('File', 'digiblocks'), value: 'file' },
                                    { label: __('URL', 'digiblocks'), value: 'url' },
                                ]}
                                onChange={(value) => setAttributes({ sourceType: value })}
                            />
                            
                            {sourceType === 'file' && (
                                <MediaUploadCheck>
                                    <div style={{ marginTop: '12px' }}>
                                        <MediaUpload
                                            onSelect={onFileSelect}
                                            allowedTypes={['application/json', 'text/plain', 'application/octet-stream']}
                                            value={lottieFile?.id || 0}
                                            render={({ open }) => (
                                                <div>
                                                    <Button
                                                        variant="secondary"
                                                        onClick={open}
                                                        style={{ marginBottom: '8px', width: '100%' }}
                                                    >
                                                        {lottieSource
                                                            ? __('Replace Lottie File', 'digiblocks')
                                                            : __('Upload Lottie File', 'digiblocks')}
                                                    </Button>
                                                    
                                                    {lottieSource && (
                                                        <div className="digiblocks-lottie-file-name" style={{
                                                            fontSize: '12px',
                                                            overflow: 'hidden',
                                                            textOverflow: 'ellipsis',
                                                            marginBottom: '8px'
                                                        }}>
                                                            {lottieFile?.filename || lottieSource.split('/').pop()}
                                                        </div>
                                                    )}
                                                </div>
                                            )}
                                        />
                                    </div>
                                </MediaUploadCheck>
                            )}
                            
                            {sourceType === 'url' && (
                                <>
                                    <TextControl
                                        label={__('Lottie URL', 'digiblocks')}
                                        value={lottieSource}
                                        onChange={onURLChange}
                                        placeholder="https://example.com/animation.json"
                                        help={__('Enter the URL to a JSON Lottie animation file', 'digiblocks')}
                                    />
                                    <Button 
                                        variant="secondary"
                                        onClick={loadFromUrl}
                                        style={{ marginTop: '8px' }}
                                        disabled={!lottieSource}
                                    >
                                        {__('Load Animation', 'digiblocks')}
                                    </Button>
                                </>
                            )}
                        </TabPanelBody>
                        
                        <TabPanelBody
                            tab="options"
                            name="animation"
                            title={__('Animation', 'digiblocks')}
                            initialOpen={false}
                        >
                            <ToggleControl
                                label={__('Autoplay', 'digiblocks')}
                                checked={autoplay}
                                onChange={(value) => setAttributes({ autoplay: value })}
                                help={__('Automatically start the animation when the page loads', 'digiblocks')}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            <ToggleControl
                                label={__('Loop', 'digiblocks')}
                                checked={loop}
                                onChange={(value) => setAttributes({ loop: value })}
                                help={__('Repeat the animation indefinitely', 'digiblocks')}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            <RangeControl
                                label={__('Animation Speed', 'digiblocks')}
                                value={speed}
                                onChange={(value) => setAttributes({ speed: value })}
                                min={0.1}
                                max={3}
                                step={0.1}
                                help={__('1 = normal speed, 2 = double speed, 0.5 = half speed', 'digiblocks')}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            <ToggleControl
                                label={__('Show Controls', 'digiblocks')}
                                checked={showControls}
                                onChange={(value) => setAttributes({ showControls: value })}
                                help={__('Display play/pause control', 'digiblocks')}
                                __nextHasNoMarginBottom={true}
                            />
                        </TabPanelBody>
                        
                        <TabPanelBody
                            tab="options"
                            name="dimensions"
                            title={__('Dimensions', 'digiblocks')}
                            initialOpen={false}
                        >
                            {/* Width control */}
                            <div className="digiblocks-size-type-field-tabs">
                                <div className="digiblocks-responsive-control-inner">
                                    <div className="components-base-control">
                                        <div className="digiblocks-range-control digiblocks-size-type-field-tabs">
                                            <div className="digiblocks-control__header">
                                                <div className="digiblocks-responsive-label-wrap">
                                                    <span className="digiblocks-control-label">{__('Width', 'digiblocks')}</span>
                                                    <button 
                                                        type="button" 
                                                        aria-label={__(`Switch to ${window.digi.responsiveState.getNextDevice()} view`, "digiblocks")}
                                                        className={`components-button digiblocks-responsive-common-button digiblocks-device-${localActiveDevice}`}
                                                        onClick={() => window.digi.responsiveState.toggleDevice()}
                                                    >
                                                        {window.digi.icons.deviceIcons[localActiveDevice]}
                                                    </button>
                                                </div>
                                                <div className="digiblocks-range-control__actions digiblocks-control__actions">
                                                    <div tabIndex="0">
                                                        <button 
                                                            type="button" 
                                                            disabled={width[localActiveDevice] === (widthUnit === '%' || widthUnit === 'vw' ? 100 : 300)}
                                                            className="components-button digiblocks-reset is-secondary is-small"
                                                            onClick={() => setAttributes({
                                                                width: {
                                                                    ...width,
                                                                    [localActiveDevice]: widthUnit === '%' || widthUnit === 'vw' ? 100 : 300
                                                                }
                                                            })}
                                                        >
                                                            <span className="dashicon dashicons dashicons-image-rotate"></span>
                                                        </button>
                                                    </div>
                                                    <ToggleGroupControl
                                                        value={widthUnit}
                                                        onChange={(value) => {
                                                            // Get current width value
                                                            const currentWidth = width[localActiveDevice];
                                                            
                                                            // If switching to percentage and value is over 100, cap it at 100
                                                            let newWidth = currentWidth;
                                                            if ((value === '%' || value === 'vw') && currentWidth > 100) {
                                                                newWidth = 100;
                                                            }
                                                            // If switching from percentage to px and value is small, set reasonable default
                                                            else if ((widthUnit === '%' || widthUnit === 'vw') && value === 'px' && currentWidth < 50) {
                                                                newWidth = 300; // Default px width for small percentage values
                                                            }
                                                            
                                                            // Update both unit and the width value if needed
                                                            setAttributes({ 
                                                                widthUnit: value,
                                                                width: {
                                                                    ...width,
                                                                    [localActiveDevice]: newWidth
                                                                }
                                                            });
                                                        }}
                                                        isBlock
                                                        isSmall
                                                        hideLabelFromVision
                                                        aria-label={__("Width Unit", "digiblocks")}
                                                        __next40pxDefaultSize={true}
                                                        __nextHasNoMarginBottom={true}
                                                    >
                                                        {widthUnitOptions.map(option => (
                                                            <ToggleGroupControlOption
                                                                key={option.value}
                                                                value={option.value}
                                                                label={option.label}
                                                            />
                                                        ))}
                                                    </ToggleGroupControl>
                                                </div>
                                            </div>
                                            <div className="digiblocks-range-control__mobile-controls">
                                                <RangeControl
                                                    value={width[localActiveDevice]}
                                                    onChange={(value) => setAttributes({
                                                        width: {
                                                            ...width,
                                                            [localActiveDevice]: value
                                                        }
                                                    })}
                                                    min={10}
                                                    max={widthUnit === '%' || widthUnit === 'vw' ? 100 : 1000}
                                                    step={1}
                                                    __next40pxDefaultSize={true}
                                                    __nextHasNoMarginBottom={true}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Height control */}
                            <div className="digiblocks-size-type-field-tabs">
                                <div className="digiblocks-responsive-control-inner">
                                    <div className="components-base-control">
                                        <div className="digiblocks-range-control digiblocks-size-type-field-tabs">
                                            <div className="digiblocks-control__header">
                                                <div className="digiblocks-responsive-label-wrap">
                                                    <span className="digiblocks-control-label">{__('Height', 'digiblocks')}</span>
                                                    <button 
                                                        type="button" 
                                                        aria-label={__(`Switch to ${window.digi.responsiveState.getNextDevice()} view`, "digiblocks")}
                                                        className={`components-button digiblocks-responsive-common-button digiblocks-device-${localActiveDevice}`}
                                                        onClick={() => window.digi.responsiveState.toggleDevice()}
                                                    >
                                                        {window.digi.icons.deviceIcons[localActiveDevice]}
                                                    </button>
                                                </div>
                                                <div className="digiblocks-range-control__actions digiblocks-control__actions">
                                                    <div tabIndex="0">
                                                        <button 
                                                            type="button" 
                                                            disabled={height[localActiveDevice] === (heightUnit === '%' || heightUnit === 'vh' ? 100 : 300)}
                                                            className="components-button digiblocks-reset is-secondary is-small"
                                                            onClick={() => setAttributes({
                                                                height: {
                                                                    ...height,
                                                                    [localActiveDevice]: heightUnit === '%' || heightUnit === 'vh' ? 100 : 300
                                                                }
                                                            })}
                                                        >
                                                            <span className="dashicon dashicons dashicons-image-rotate"></span>
                                                        </button>
                                                    </div>
                                                    <ToggleGroupControl
                                                        value={heightUnit}
                                                        onChange={(value) => {
                                                            // Get current height value
                                                            const currentHeight = height[localActiveDevice];
                                                            
                                                            // If switching to percentage and value is over 100, cap it at 100
                                                            let newHeight = currentHeight;
                                                            if ((value === '%' || value === 'vh') && currentHeight > 100) {
                                                                newHeight = 100;
                                                            }
                                                            // If switching from percentage to px and value is small, set reasonable default
                                                            else if ((heightUnit === '%' || heightUnit === 'vh') && value === 'px' && currentHeight < 50) {
                                                                newHeight = 300; // Default px height for small percentage values
                                                            }
                                                            
                                                            // Update both unit and the height value if needed
                                                            setAttributes({ 
                                                                heightUnit: value,
                                                                height: {
                                                                    ...height,
                                                                    [localActiveDevice]: newHeight
                                                                }
                                                            });
                                                        }}
                                                        isBlock
                                                        isSmall
                                                        hideLabelFromVision
                                                        aria-label={__("Height Unit", "digiblocks")}
                                                        __next40pxDefaultSize={true}
                                                        __nextHasNoMarginBottom={true}
                                                    >
                                                        {heightUnitOptions.map(option => (
                                                            <ToggleGroupControlOption
                                                                key={option.value}
                                                                value={option.value}
                                                                label={option.label}
                                                            />
                                                        ))}
                                                    </ToggleGroupControl>
                                                </div>
                                            </div>
                                            <div className="digiblocks-range-control__mobile-controls">
                                                <RangeControl
                                                    value={height[localActiveDevice]}
                                                    onChange={(value) => setAttributes({
                                                        height: {
                                                            ...height,
                                                            [localActiveDevice]: value
                                                        }
                                                    })}
                                                    min={10}
                                                    max={heightUnit === '%' || heightUnit === 'vh' ? 100 : 1000}
                                                    step={1}
                                                    __next40pxDefaultSize={true}
                                                    __nextHasNoMarginBottom={true}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <ToggleGroupControl
                                label={__("Alignment", "digiblocks")}
                                value={alignment}
                                onChange={(value) => setAttributes({ alignment: value })}
                                isBlock
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            >
                                <ToggleGroupControlOption 
                                    value="left" 
                                    label={__("Left", "digiblocks")}
                                />
                                <ToggleGroupControlOption 
                                    value="center" 
                                    label={__("Center", "digiblocks")}
                                />
                                <ToggleGroupControlOption 
                                    value="right" 
                                    label={__("Right", "digiblocks")}
                                />
                            </ToggleGroupControl>
                        </TabPanelBody>
                    </>
                );
                
            case 'style':
                return (
                    <>
                        <TabPanelBody
                            tab="style"
                            name="colors"
                            title={__('Colors', 'digiblocks')}
                            initialOpen={true}
                        >
                            <PanelColorSettings
                                title={__("Colors", "digiblocks")}
                                initialOpen={true}
                                enableAlpha={true}
                                colorSettings={[
                                    {
                                        value: backgroundColor,
                                        onChange: (value) => setAttributes({ backgroundColor: value }),
                                        label: __("Background Color", "digiblocks"),
                                    },
                                    {
                                        value: borderColor,
                                        onChange: (value) => setAttributes({ borderColor: value }),
                                        label: __("Border Color", "digiblocks"),
                                    },
                                ]}
                            />
                        </TabPanelBody>
                        
                        <TabPanelBody
                            tab="style"
                            name="borders"
                            title={__('Borders & Shadows', 'digiblocks')}
                            initialOpen={false}
                        >
                            <SelectControl
                                label={__('Border Style', 'digiblocks')}
                                value={borderStyle}
                                options={borderStyleOptions}
                                onChange={(value) => setAttributes({ borderStyle: value })}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            {borderStyle !== 'none' && (
                                <ResponsiveControl
                                    label={__('Border Width', 'digiblocks')}
                                >
                                    <DimensionControl
                                        values={borderWidth[localActiveDevice]}
                                        onChange={(value) =>
                                            setAttributes({
                                                borderWidth: {
                                                    ...borderWidth,
                                                    [localActiveDevice]: value,
                                                },
                                            })
                                        }
                                    />
                                </ResponsiveControl>
                            )}
                            
                            <ResponsiveControl
                                label={__('Border Radius', 'digiblocks')}
                            >
                                <DimensionControl
                                    values={borderRadius[localActiveDevice]}
                                    onChange={(value) =>
                                        setAttributes({
                                            borderRadius: {
                                                ...borderRadius,
                                                [localActiveDevice]: value,
                                            },
                                        })
                                    }
                                    units={[
                                        { label: 'px', value: 'px' },
                                        { label: '%', value: '%' }
                                    ]}
                                />
                            </ResponsiveControl>
                            
                            <BoxShadowControl
                                label={__('Shadow', 'digiblocks')}
                                normalValue={shadow}
                                onNormalChange={(value) => setAttributes({ shadow: value })}
                            />
                        </TabPanelBody>
                        
                        <TabPanelBody
                            tab="style"
                            name="spacing"
                            title={__('Spacing', 'digiblocks')}
                            initialOpen={false}
                        >
                            <ResponsiveControl
                                label={__('Padding', 'digiblocks')}
                            >
                                <DimensionControl
                                    values={padding[localActiveDevice]}
                                    onChange={(value) =>
                                        setAttributes({
                                            padding: {
                                                ...padding,
                                                [localActiveDevice]: value,
                                            },
                                        })
                                    }
                                />
                            </ResponsiveControl>
                            
                            <ResponsiveControl
                                label={__('Margin', 'digiblocks')}
                            >
                                <DimensionControl
                                    values={margin[localActiveDevice]}
                                    onChange={(value) =>
                                        setAttributes({
                                            margin: {
                                                ...margin,
                                                [localActiveDevice]: value,
                                            },
                                        })
                                    }
                                />
                            </ResponsiveControl>
                        </TabPanelBody>
                    </>
                );
            case 'advanced':
                return (
                    <>
                        <TabPanelBody
                            tab="advanced"
                            name="animation"
                            title={__('Animation', 'digiblocks')}
                            initialOpen={true}
                        >
                            <SelectControl
                                label={__('Animation Effect', 'digiblocks')}
                                value={animation}
                                options={animationOptions}
                                onChange={(value) => setAttributes({ animation: value })}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            {/* Animation Preview Button */}
                            {animation && animation !== 'none' && (
                                <div style={{ marginTop: '10px' }}>
                                    <Button
                                        variant="secondary"
                                        isSecondary
                                        onClick={handlePreviewClick}
                                        style={{ width: '100%' }}
                                    >
                                        {__("Preview Animation", "digiblocks")}
                                    </Button>
                                </div>
                            )}
                        </TabPanelBody>
                        
                        <TabPanelBody
                            tab="advanced"
                            name="additional"
                            title={__('Additional', 'digiblocks')}
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

    // Build class names
    const blockClasses = `digiblocks-lottie ${id} ${customClasses || ""}`;
    const animationClass = animation && animation !== 'none' ? ` animate-${animation}` : '';

    // Block props without inline styles
    const blockProps = useBlockProps({
        className: blockClasses + animationClass,
        id: anchor || null,
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

            <div {...blockProps}>
                {!lottieSource ? (
                    <Placeholder
                        icon="format-image"
                        label={__('Lottie Animation', 'digiblocks')}
                        instructions={__('Upload a Lottie animation file or provide a URL to a Lottie JSON file.', 'digiblocks')}
                    >
                        {sourceType === 'file' ? (
                            <MediaUploadCheck>
                                <MediaUpload
                                    onSelect={onFileSelect}
                                    allowedTypes={['application/json', 'text/plain', 'application/octet-stream']}
                                    render={({ open }) => (
                                        <Button variant="primary" onClick={open}>
                                            {__('Upload Lottie File', 'digiblocks')}
                                        </Button>
                                    )}
                                />
                            </MediaUploadCheck>
                        ) : (
                            <div style={{ width: '100%', maxWidth: '400px' }}>
                                <TextControl
                                    placeholder={__('Enter Lottie JSON URL', 'digiblocks')}
                                    value={lottieSource}
                                    onChange={onURLChange}
                                />
                                <Button
                                    variant="primary"
                                    onClick={loadFromUrl}
                                    style={{ marginTop: '10px' }}
                                    disabled={!lottieSource}
                                >
                                    {__('Load Animation', 'digiblocks')}
                                </Button>
                            </div>
                        )}
                        
                        <div style={{ marginTop: '12px', display: 'flex', justifyContent: 'center' }}>
                            <Button
                                variant="link"
                                onClick={() => setAttributes({ sourceType: sourceType === 'file' ? 'url' : 'file' })}
                            >
                                {sourceType === 'file'
                                    ? __('Or use URL instead', 'digiblocks')
                                    : __('Or upload a file instead', 'digiblocks')}
                            </Button>
                        </div>
                    </Placeholder>
                ) : (
                    <div 
                        className="digiblocks-lottie-container" 
                        ref={containerRef} 
                        style={{
                            width: `${width[localActiveDevice]}${widthUnit}`,
                            height: `${height[localActiveDevice]}${heightUnit}`,
                            position: 'relative'
                        }}
                    >
                        <canvas 
                            ref={canvasRef}
                            style={{
                                width: '100%',
                                height: '100%',
                                display: 'block'
                            }}
                        ></canvas>
                        
                        {animationError && (
                            <div className="digiblocks-lottie-error" style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                textAlign: 'center',
                                color: '#cc1818',
                                maxWidth: '90%',
                                padding: '10px'
                            }}>
                                <p>{animationError}</p>
                                <Button
                                    variant="secondary"
                                    onClick={() => {
                                        setAnimationError(null);
                                        initializeAnimation();
                                    }}
                                >
                                    {__('Try Again', 'digiblocks')}
                                </Button>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </>
    );
};

export default LottieEdit;