/**
 * WordPress dependencies
 */
const { useBlockProps } = wp.blockEditor;

/**
 * Save function for the Google Map block
 */
const GoogleMapSave = ({ attributes }) => {
    const {
        id,
        anchor,
        customClasses,
        mapHeight,
        zoom,
        mapType,
        mapStyle,
        customMapStyle,
        mapId,
        markers,
        address,
        animation,
        animationDuration,
        animationDelay,
        enableZoom,
        enableScroll,
        enableFullscreenControl,
        enableStreetViewControl,
        enableMapTypeControl
    } = attributes;

    // Build class names
    const blockClasses = [
        "digiblocks-google-map",
		id,
        animation !== "none" ? `animate-${animation} digi-animate-hidden` : "",
        customClasses || ""
    ]
        .filter(Boolean)
        .join(" ");

    // Get block props
    const blockProps = useBlockProps.save({
        className: blockClasses,
        id: anchor || null,
        "data-map-zoom": zoom || 10,
        "data-map-type": mapType || 'roadmap',
		"data-map-style": mapStyle || 'default',
		"data-custom-map-style": customMapStyle || '',
        "data-map-id": mapId || '',
        "data-enable-zoom": enableZoom !== false ? "true" : "false",
        "data-enable-scroll": enableScroll !== false ? "true" : "false",
        "data-enable-fullscreen": enableFullscreenControl !== false ? "true" : "false",
        "data-enable-streetview": enableStreetViewControl !== false ? "true" : "false",
        "data-enable-maptype": enableMapTypeControl !== false ? "true" : "false",
    });

    // Add animation data attributes only if animation is active
    if (animation && animation !== "none") {
        blockProps["data-animation-duration"] = animationDuration || "normal";
        blockProps["data-animation-delay"] = animationDelay || 0;
    }

    return (
        <div {...blockProps}>
            <div className="digiblocks-google-map-container"></div>
            
            {/* Hidden markers data that will be used by JavaScript */}
            {markers && markers.length > 0 && (
				<div className="digiblocks-google-map-markers" style={{ display: 'none' }}>
					{markers.map((marker) => (
						<div 
							key={marker.id}
							className="digiblocks-google-map-marker"
							data-lat={marker.latitude}
							data-lng={marker.longitude}
							data-title={marker.title || ''}
							data-description={marker.description || ''}
							data-address={marker.address || ''}
						/>
					))}
				</div>
			)}
            
            {/* Hidden address data for centering the map */}
            {address && (
                <div className="digiblocks-google-map-address" style={{ display: 'none' }} data-address={address} />
            )}
        </div>
    );
};

export default GoogleMapSave;