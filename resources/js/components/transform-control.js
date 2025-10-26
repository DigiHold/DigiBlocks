/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { 
    RangeControl, 
    TabPanel, 
    ToggleControl,
    Button,
    __experimentalToggleGroupControl: ToggleGroupControl,
    __experimentalToggleGroupControlOption: ToggleGroupControlOption 
} = wp.components;
const { useState, useEffect } = wp.element;

/**
 * TransformControl Component
 */
const TransformControl = ({
    normalValue = {},
    hoverValue = {},
    onNormalChange,
    onHoverChange,
    label = null
}) => {
    const defaultTransform = {
        rotate: { desktop: '', tablet: '', mobile: '' },
        rotate3d: false,
        rotateX: { desktop: '', tablet: '', mobile: '' },
        rotateY: { desktop: '', tablet: '', mobile: '' },
        perspective: { desktop: '', tablet: '', mobile: '' },
        offsetX: { 
            desktop: { value: '', unit: 'px' }, 
            tablet: { value: '', unit: 'px' }, 
            mobile: { value: '', unit: 'px' } 
        },
        offsetY: { 
            desktop: { value: '', unit: 'px' }, 
            tablet: { value: '', unit: 'px' }, 
            mobile: { value: '', unit: 'px' } 
        },
        keepProportions: true,
        scale: { desktop: '', tablet: '', mobile: '' },
        scaleX: { desktop: '', tablet: '', mobile: '' },
        scaleY: { desktop: '', tablet: '', mobile: '' },
        skewX: { desktop: '', tablet: '', mobile: '' },
        skewY: { desktop: '', tablet: '', mobile: '' },
        flipHorizontal: false,
        flipVertical: false,
        xAnchor: { desktop: '', tablet: '', mobile: '' },
        yAnchor: { desktop: '', tablet: '', mobile: '' },
        transitionDuration: ''
    };

    const normal = { ...defaultTransform, ...normalValue };
    const hover = { ...defaultTransform, ...hoverValue };

    const [controlId] = useState(`transform-${Math.random().toString(36).substr(2, 9)}`);
    const [isRotateOpen, setIsRotateOpen] = useState(() => {
        return window.digi.uiState.getPanelState('transform-rotate', controlId) ?? false;
    });
    const [isOffsetOpen, setIsOffsetOpen] = useState(() => {
        return window.digi.uiState.getPanelState('transform-offset', controlId) ?? false;
    });
    const [isScaleOpen, setIsScaleOpen] = useState(() => {
        return window.digi.uiState.getPanelState('transform-scale', controlId) ?? false;
    });
    const [isSkewOpen, setIsSkewOpen] = useState(() => {
        return window.digi.uiState.getPanelState('transform-skew', controlId) ?? false;
    });

    const [localActiveDevice, setLocalActiveDevice] = useState(window.digi.responsiveState.activeDevice);

    useEffect(() => {
        const unsubscribe = window.digi.responsiveState.subscribe((device) => {
            setLocalActiveDevice(device);
        });
        return unsubscribe;
    }, []);

    const tabs = [
        {
            name: 'normal',
            title: __('Normal', 'digiblocks'),
            className: 'digiblocks-tab-1 normal'
        },
        {
            name: 'hover',
            title: __('Hover', 'digiblocks'),
            className: 'digiblocks-tab-2 hover'
        }
    ];

    const updateTransformProperty = (tab, property, value) => {
        if (tab === 'normal') {
            onNormalChange({
                ...normal,
                [property]: value
            });
        } else {
            onHoverChange({
                ...hover,
                [property]: value
            });
        }
    };

    const getDeviceIcon = (device) => {
        if (window.digi?.icons?.deviceIcons?.[device]) {
            return window.digi.icons.deviceIcons[device];
        }
        return <span className={`dashicon dashicons dashicons-${device}`}></span>;
    };

    const handleToggleDevice = () => {
        if (window.digi?.responsiveState?.toggleDevice) {
            window.digi.responsiveState.toggleDevice();
        }
    };

    const hasTransformValues = (transform) => {
        const hasRotate = transform.rotate?.desktop !== '' || transform.rotate?.tablet !== '' || transform.rotate?.mobile !== '';
        const hasScale = transform.keepProportions ? 
            (transform.scale?.desktop !== '' || transform.scale?.tablet !== '' || transform.scale?.mobile !== '') :
            (transform.scaleX?.desktop !== '' || transform.scaleX?.tablet !== '' || transform.scaleX?.mobile !== '' ||
             transform.scaleY?.desktop !== '' || transform.scaleY?.tablet !== '' || transform.scaleY?.mobile !== '');
        const hasFlip = transform.flipHorizontal || transform.flipVertical;
        
        return hasRotate || hasScale || hasFlip;
    };

    const renderTransformControls = (tab) => {
        const currentValue = tab === 'normal' ? normal : hover;
        const showAnchorPoints = hasTransformValues(currentValue);
        
        const ResponsiveRangeControl = window.digi.components.ResponsiveRangeControl;
        const ResponsiveButtonGroup = window.digi.components.ResponsiveButtonGroup;

        return (
            <div className="digiblocks-transform-controls">
                {label && (
                    <h2 className="digiblocks-control-label">{label}</h2>
                )}

                <div className="digiblocks-control-popup__options">
                    <div className="digiblocks-control-popup__options--action-wrapper">
                        <span className="digiblocks-control-label">{__('Rotate', 'digiblocks')}</span>
                        <button 
                            type="button" 
                            aria-pressed={isRotateOpen}
                            className={`components-button digiblocks-pencil-button digiblocks-control-popup__options--action-button ${isRotateOpen ? 'is-pressed' : ''}`}
                            onClick={() => {
                                const newState = !isRotateOpen;
                                setIsRotateOpen(newState);
                                window.digi.uiState.setPanelState('transform-rotate', controlId, newState);
                            }}
                        >
                            <span className="dashicon dashicons dashicons-edit"></span>
                        </button>
                    </div>
                    
                    {isRotateOpen && (
                        <div className="digiblocks-popover digiblocks-control-popup">
                            <ResponsiveRangeControl
                                label={__('Rotate (deg)', 'digiblocks')}
                                value={currentValue.rotate}
                                onChange={(value) => updateTransformProperty(tab, 'rotate', value)}
                                min={-180}
                                max={180}
                                step={1}
                                units={null}
                            />
                            
                            <ToggleControl
                                label={__('3D Rotate', 'digiblocks')}
                                checked={currentValue.rotate3d}
                                onChange={(value) => updateTransformProperty(tab, 'rotate3d', value)}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />

                            {currentValue.rotate3d && (
                                <>
                                    <ResponsiveRangeControl
                                        label={__('Rotate X (deg)', 'digiblocks')}
                                        value={currentValue.rotateX}
                                        onChange={(value) => updateTransformProperty(tab, 'rotateX', value)}
                                        min={-180}
                                        max={180}
                                        step={1}
                                        units={null}
                                    />
                                    
                                    <ResponsiveRangeControl
                                        label={__('Rotate Y (deg)', 'digiblocks')}
                                        value={currentValue.rotateY}
                                        onChange={(value) => updateTransformProperty(tab, 'rotateY', value)}
                                        min={-180}
                                        max={180}
                                        step={1}
                                        units={null}
                                    />
                                    
                                    <ResponsiveRangeControl
                                        label={__('Perspective (px)', 'digiblocks')}
                                        value={currentValue.perspective}
                                        onChange={(value) => updateTransformProperty(tab, 'perspective', value)}
                                        min={0}
                                        max={2000}
                                        step={10}
                                        units={null}
                                    />
                                </>
                            )}
                        </div>
                    )}
                </div>

                <div className="digiblocks-control-popup__options">
                    <div className="digiblocks-control-popup__options--action-wrapper">
                        <span className="digiblocks-control-label">{__('Offset', 'digiblocks')}</span>
                        <button 
                            type="button" 
                            aria-pressed={isOffsetOpen}
                            className={`components-button digiblocks-pencil-button digiblocks-control-popup__options--action-button ${isOffsetOpen ? 'is-pressed' : ''}`}
                            onClick={() => {
                                const newState = !isOffsetOpen;
                                setIsOffsetOpen(newState);
                                window.digi.uiState.setPanelState('transform-offset', controlId, newState);
                            }}
                        >
                            <span className="dashicon dashicons dashicons-edit"></span>
                        </button>
                    </div>
                    
                    {isOffsetOpen && (
                        <div className="digiblocks-popover digiblocks-control-popup">
                            <ResponsiveRangeControl
                                label={__('Offset X', 'digiblocks')}
                                value={currentValue.offsetX}
                                onChange={(value) => updateTransformProperty(tab, 'offsetX', value)}
                                units={[
                                    { label: 'px', value: 'px' },
                                    { label: '%', value: '%' },
                                    { label: 'em', value: 'em' },
                                    { label: 'rem', value: 'rem' },
                                    { label: 'vw', value: 'vw' },
                                ]}
                                defaultUnit="px"
                                min={-1000}
                                max={1000}
                                step={1}
                            />
                            
                            <ResponsiveRangeControl
                                label={__('Offset Y', 'digiblocks')}
                                value={currentValue.offsetY}
                                onChange={(value) => updateTransformProperty(tab, 'offsetY', value)}
                                units={[
                                    { label: 'px', value: 'px' },
                                    { label: '%', value: '%' },
                                    { label: 'em', value: 'em' },
                                    { label: 'rem', value: 'rem' },
                                    { label: 'vh', value: 'vh' },
                                ]}
                                defaultUnit="px"
                                min={-1000}
                                max={1000}
                                step={1}
                            />
                        </div>
                    )}
                </div>

                <div className="digiblocks-control-popup__options">
                    <div className="digiblocks-control-popup__options--action-wrapper">
                        <span className="digiblocks-control-label">{__('Scale', 'digiblocks')}</span>
                        <button 
                            type="button" 
                            aria-pressed={isScaleOpen}
                            className={`components-button digiblocks-pencil-button digiblocks-control-popup__options--action-button ${isScaleOpen ? 'is-pressed' : ''}`}
                            onClick={() => {
                                const newState = !isScaleOpen;
                                setIsScaleOpen(newState);
                                window.digi.uiState.setPanelState('transform-scale', controlId, newState);
                            }}
                        >
                            <span className="dashicon dashicons dashicons-edit"></span>
                        </button>
                    </div>
                    
                    {isScaleOpen && (
                        <div className="digiblocks-popover digiblocks-control-popup">
                            <ToggleControl
                                label={__('Keep Proportions', 'digiblocks')}
                                checked={currentValue.keepProportions}
                                onChange={(value) => updateTransformProperty(tab, 'keepProportions', value)}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />

                            {currentValue.keepProportions ? (
                                <ResponsiveRangeControl
                                    label={__('Scale', 'digiblocks')}
                                    value={currentValue.scale}
                                    onChange={(value) => updateTransformProperty(tab, 'scale', value)}
                                    min={0}
                                    max={3}
                                    step={0.1}
                                    units={null}
                                />
                            ) : (
                                <>
                                    <ResponsiveRangeControl
                                        label={__('Scale X', 'digiblocks')}
                                        value={currentValue.scaleX}
                                        onChange={(value) => updateTransformProperty(tab, 'scaleX', value)}
                                        min={0}
                                        max={3}
                                        step={0.1}
                                        units={null}
                                    />
                                    
                                    <ResponsiveRangeControl
                                        label={__('Scale Y', 'digiblocks')}
                                        value={currentValue.scaleY}
                                        onChange={(value) => updateTransformProperty(tab, 'scaleY', value)}
                                        min={0}
                                        max={3}
                                        step={0.1}
                                        units={null}
                                    />
                                </>
                            )}
                        </div>
                    )}
                </div>

                <div className="digiblocks-control-popup__options">
                    <div className="digiblocks-control-popup__options--action-wrapper">
                        <span className="digiblocks-control-label">{__('Skew', 'digiblocks')}</span>
                        <button 
                            type="button" 
                            aria-pressed={isSkewOpen}
                            className={`components-button digiblocks-pencil-button digiblocks-control-popup__options--action-button ${isSkewOpen ? 'is-pressed' : ''}`}
                            onClick={() => {
                                const newState = !isSkewOpen;
                                setIsSkewOpen(newState);
                                window.digi.uiState.setPanelState('transform-skew', controlId, newState);
                            }}
                        >
                            <span className="dashicon dashicons dashicons-edit"></span>
                        </button>
                    </div>
                    
                    {isSkewOpen && (
                        <div className="digiblocks-popover digiblocks-control-popup">
                            <ResponsiveRangeControl
                                label={__('Skew X (deg)', 'digiblocks')}
                                value={currentValue.skewX}
                                onChange={(value) => updateTransformProperty(tab, 'skewX', value)}
                                min={-60}
                                max={60}
                                step={1}
                                units={null}
                            />
                            
                            <ResponsiveRangeControl
                                label={__('Skew Y (deg)', 'digiblocks')}
                                value={currentValue.skewY}
                                onChange={(value) => updateTransformProperty(tab, 'skewY', value)}
                                min={-60}
                                max={60}
                                step={1}
                                units={null}
                            />
                        </div>
                    )}
                </div>

                <div className="digiblocks-toggle-wrapper" style={{ marginTop: '1rem' }}>
                    <ToggleControl
                        label={__('Flip Horizontal', 'digiblocks')}
                        checked={currentValue.flipHorizontal}
                        onChange={(value) => updateTransformProperty(tab, 'flipHorizontal', value)}
                        __next40pxDefaultSize={true}
                        __nextHasNoMarginBottom={true}
                    />
                </div>

                <div className="digiblocks-toggle-wrapper" style={{ marginTop: '1rem' }}>
                    <ToggleControl
                        label={__('Flip Vertical', 'digiblocks')}
                        checked={currentValue.flipVertical}
                        onChange={(value) => updateTransformProperty(tab, 'flipVertical', value)}
                        __next40pxDefaultSize={true}
                        __nextHasNoMarginBottom={true}
                    />
                </div>

                {showAnchorPoints && (
                    <div className="digiblocks-anchor-wrapper" style={{ marginTop: '1rem' }}>
                        <ResponsiveButtonGroup
                            label={__('X Anchor Point', 'digiblocks')}
                            value={currentValue.xAnchor}
                            onChange={(value) => updateTransformProperty(tab, 'xAnchor', value)}
                            options={[
                                { label: __('Left', 'digiblocks'), value: 'left' },
                                { label: __('Center', 'digiblocks'), value: 'center' },
                                { label: __('Right', 'digiblocks'), value: 'right' },
                            ]}
                        />

                        <ResponsiveButtonGroup
                            label={__('Y Anchor Point', 'digiblocks')}
                            value={currentValue.yAnchor}
                            onChange={(value) => updateTransformProperty(tab, 'yAnchor', value)}
                            options={[
                                { label: __('Top', 'digiblocks'), value: 'top' },
                                { label: __('Center', 'digiblocks'), value: 'center' },
                                { label: __('Bottom', 'digiblocks'), value: 'bottom' },
                            ]}
                        />
                    </div>
                )}

                {tab === 'hover' && (
					<div className="digiblocks-anchor-wrapper" style={{ marginTop: '1rem' }}>
						<RangeControl
							label={__('Transition Duration (ms)', 'digiblocks')}
							value={currentValue.transitionDuration || undefined}
							onChange={(value) => updateTransformProperty(tab, 'transitionDuration', value === undefined ? '' : value)}
							min={0}
							max={3000}
							step={50}
							allowReset={true}
							resetFallbackValue={''}
							__next40pxDefaultSize={true}
							__nextHasNoMarginBottom={true}
						/>
					</div>
				)}
            </div>
        );
    };

    return (
        <div className="digiblocks-transform-control">
            <TabPanel
                className="digiblocks-control-tabs"
                activeClass="active-tab"
                tabs={tabs}
            >
                {(tab) => renderTransformControls(tab.name)}
            </TabPanel>
        </div>
    );
};

export default TransformControl;