/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Button } = wp.components;
const { cloneElement, Children, isValidElement, useEffect, useState } = wp.element;

/**
 * Responsive Control Component
 *
 * A universal responsive wrapper that works with any control.
 * Uses the global digi.responsiveState to keep all responsive controls in sync.
 *
 * @param {Object} props - Component props
 * @param {string} props.label - Control label
 * @param {ReactNode} props.children - Child components
 * @return {JSX.Element} Responsive control component
 */
const ResponsiveControl = ({
    label,
    children,
}) => {
    // Local state to trigger re-renders when global state changes
    const [activeDevice, setLocalActiveDevice] = useState(
        window.digi?.responsiveState?.activeDevice || 'desktop'
    );
    
    // Subscribe to global device state changes
    useEffect(() => {
        // Skip if global state doesn't exist
        if (!window.digi?.responsiveState?.subscribe) return;
        
        const unsubscribe = window.digi.responsiveState.subscribe((device) => {
            setLocalActiveDevice(device);
        });
        
        // Cleanup subscription on unmount
        return unsubscribe;
    }, []);

    // Get device icon with fallback
    const getDeviceIcon = (device) => {
        // If global icons exist, use them
        if (window.digi?.icons?.deviceIcons?.[device]) {
            return window.digi.icons.deviceIcons[device];
        }
        // Otherwise use fallback icons
        return fallbackIcons[device];
    };

    // Handle toggle device click
    const handleToggleDevice = () => {
        if (window.digi?.responsiveState?.toggleDevice) {
            window.digi.responsiveState.toggleDevice();
        } else {
            // Fallback toggle logic
            const nextDevice = activeDevice === "desktop" ? "tablet" : 
                               activeDevice === "tablet" ? "mobile" : "desktop";
            setLocalActiveDevice(nextDevice);
        }
    };

    // Get next device for aria label
    const getNextDevice = () => {
        if (window.digi?.responsiveState?.getNextDevice) {
            return window.digi.responsiveState.getNextDevice();
        }
        
        // Fallback
        if (activeDevice === "desktop") return "tablet";
        if (activeDevice === "tablet") return "mobile";
        return "desktop";
    };

    // Create toggle button directly instead of using global function
    const createToggleButton = () => {
        return (
            <Button 
                className={`digiblocks-responsive-common-button digiblocks-device-${activeDevice}`}
                onClick={handleToggleDevice}
                aria-label={__(`Switch to ${getNextDevice()} view`, "digiblocks")}
            >
                {getDeviceIcon(activeDevice)}
            </Button>
        );
    };

    // Check if the child component is a DimensionControl
    const isDimensionControl = () => {
        if (!children) return false;
        
        try {
            // Try to check the displayName if available
            const childType = Children.only(children).type;
            if (childType && childType.name === 'DimensionControl') {
                return true;
            }
            
            // Otherwise check for props that might indicate DimensionControl
            const childProps = Children.only(children).props;
            return childProps && childProps.values && childProps.values.unit;
        } catch (e) {
            // If there's an error (like Children.only() failing), return false
            return false;
        }
    };

    // For DimensionControl, we pass responsive props
    if (isDimensionControl()) {
        const childrenWithProps = Children.map(children, child => {
            if (isValidElement(child)) {
                return cloneElement(child, {
                    isResponsive: true,
                    label,
                    deviceIcon: getDeviceIcon(activeDevice),
                    toggleDevice: handleToggleDevice,
                    deviceLabel: __(`Switch to ${getNextDevice()} view`, "digiblocks")
                });
            }
            return child;
        });

        return (
            <div className="digiblocks-responsive-control">
                <div className="digiblocks-responsive-control-content">
                    {childrenWithProps}
                </div>
            </div>
        );
    }
    
    // For other controls (like RangeControl), we render our own header
    return (
        <div className="digiblocks-responsive-control">
            <div className="digiblocks-control__header">
                <div className="digiblocks-responsive-label-wrap">
                    <span className="digiblocks-control-label">{label}</span>
                    {createToggleButton()}
                </div>
            </div>
            <div className="digiblocks-responsive-control-content">
                {children}
            </div>
        </div>
    );
};

export default ResponsiveControl;