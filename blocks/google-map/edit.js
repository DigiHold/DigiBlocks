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
    TextareaControl,
    RangeControl,
    SelectControl,
    Button,
    Placeholder,
    Spinner,
    ToggleControl,
    BaseControl,
    __experimentalToggleGroupControl: ToggleGroupControl,
    __experimentalToggleGroupControlOption: ToggleGroupControlOption,
	__experimentalNumberControl: NumberControl,
} = wp.components;
const { useState, useEffect, useRef } = wp.element;

/**
 * Internal dependencies
 */
const { useBlockId, getDimensionCSS, animations, animationPreview } = digi.utils;
const { tabIcons } = digi.icons;
const { 
    ResponsiveControl,
	ResponsiveRangeControl,
    DimensionControl,
    CustomTabPanel,
	BoxShadowControl,
    TabPanelBody,
	TransformControl
} = digi.components;

/**
 * Edit function for the Google Map block
 */
const GoogleMapEdit = ({ attributes, setAttributes, clientId }) => {
    const {
        id,
        anchor,
		visibility,
        customClasses,
        mapHeight,
        zoom,
        mapType,
        mapStyle,
        customMapStyle,
        markers,
        address,
        animation,
		animationDuration,
		animationDelay,
        enableZoom,
        enableScroll,
        enableFullscreenControl,
        enableStreetViewControl,
        enableMapTypeControl,
        borderStyle,
        borderWidth,
        borderRadius,
        borderColor,
        boxShadow,
        boxShadowHover,
        position,
        horizontalOrientation,
        horizontalOffset,
        verticalOrientation,
        verticalOffset,
        zIndex,
		transform,
        transformHover,
    } = attributes;

	// Create unique class
	useBlockId( id, clientId, setAttributes );

    // Use global responsive state for local rendering
    const [localActiveDevice, setLocalActiveDevice] = useState(window.digi.responsiveState.activeDevice);
    
    // States for map preview
    const [isLoading, setIsLoading] = useState(false);
    const [geocodeError, setGeocodeError] = useState(null);
    const [mapLoaded, setMapLoaded] = useState(false);
    const [mapInstance, setMapInstance] = useState(null);
    const [markerInstances, setMarkerInstances] = useState([]);
    const mapContainerRef = useRef(null);
    const geocoder = useRef(null);
    
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

    // Use useEffect to set the ID only once when component mounts
    useEffect(() => {
        // Ensure markers is initialized as an array if null/undefined
		if (!markers) {
			setAttributes({ markers: [] });
		}
    }, [setAttributes]);

    // Load Google Maps API script and initialize map
	useEffect(() => {
		// Check if Google Maps API exists or is being loaded
		if (!mapLoaded && typeof google === 'undefined' && !window.googleMapsLoading) {
			// Check if API key exists
			if (!digiBlocksData.googleMapsApiKey) {
				setGeocodeError(__('Google Maps API key not found. Please add it in the DigiBlocks settings.', 'digiblocks'));
				return;
			}

			// Mark as loading to prevent duplicate loads
			window.googleMapsLoading = true;
			
			// Setup global callback array if it doesn't exist
			window.digiblocksGoogleMapsCallbacks = window.digiblocksGoogleMapsCallbacks || [];
			
			// Register our callback
			const ourCallback = () => {
				setMapLoaded(true);
				geocoder.current = new google.maps.Geocoder();
			};
			
			window.digiblocksGoogleMapsCallbacks.push(ourCallback);
			
			// Define the global callback if not already defined
			if (typeof window.digiblocksGoogleMapsCallback !== 'function') {
				window.digiblocksGoogleMapsCallback = () => {
					window.googleMapsInitialized = true;
					window.googleMapsLoading = false;
					
					// Execute all callbacks
					window.digiblocksGoogleMapsCallbacks.forEach(callback => {
						if (typeof callback === 'function') {
							callback();
						}
					});
				};
			}

			// Load Google Maps API
			const script = document.createElement('script');
			script.src = `https://maps.googleapis.com/maps/api/js?key=${digiBlocksData.googleMapsApiKey}&callback=digiblocksGoogleMapsCallback&loading=async`;
			script.async = true;
			script.defer = true;
			document.head.appendChild(script);

			return () => {
				// Cleanup if component unmounts before API loads
				const index = window.digiblocksGoogleMapsCallbacks.indexOf(ourCallback);
				if (index > -1) {
					window.digiblocksGoogleMapsCallbacks.splice(index, 1);
				}
			};
		} else if (!mapLoaded && typeof google !== 'undefined') {
			// API already loaded
			setMapLoaded(true);
			geocoder.current = new google.maps.Geocoder();
		} else if (!mapLoaded && window.googleMapsLoading) {
			// API is currently loading, register our callback
			const ourCallback = () => {
				setMapLoaded(true);
				geocoder.current = new google.maps.Geocoder();
			};
			
			window.digiblocksGoogleMapsCallbacks = window.digiblocksGoogleMapsCallbacks || [];
			window.digiblocksGoogleMapsCallbacks.push(ourCallback);
			
			return () => {
				// Cleanup if component unmounts before API loads
				const index = window.digiblocksGoogleMapsCallbacks.indexOf(ourCallback);
				if (index > -1) {
					window.digiblocksGoogleMapsCallbacks.splice(index, 1);
				}
			};
		}
	}, [mapLoaded]);

	// When initializing the map in useEffect
	useEffect(() => {
		if (mapLoaded && mapContainerRef.current && !mapInstance) {
			// Default center
			const center = { lat: 40.7128, lng: -74.0060 };
			
			// Map options
			const mapOptions = {
				center: center,
				zoom: zoom || 10,
				mapTypeId: mapType || 'roadmap',
				zoomControl: enableZoom,
				scrollwheel: enableScroll,
				fullscreenControl: enableFullscreenControl,
				streetViewControl: enableStreetViewControl,
				mapTypeControl: enableMapTypeControl
			};

			// Check if we have markers
			const hasMarkers = markers && markers.length > 0;
			
			// Apply Map ID only if we have markers
			if (hasMarkers && digiBlocksData.googleMapsMapId) {
				mapOptions.mapId = digiBlocksData.googleMapsMapId;
				// IMPORTANT: Do not set the styles property at all when Map ID is present
			} else if (mapStyle && mapStyle !== 'default') {
				// Only apply styles when there's no Map ID
				if (mapStyle === 'custom' && customMapStyle) {
					try {
						const customStyleObj = JSON.parse(customMapStyle);
						mapOptions.styles = customStyleObj;
					} catch (error) {
						console.error('Invalid map style JSON:', error);
					}
				} else if (predefinedMapStyles[mapStyle]) {
					mapOptions.styles = predefinedMapStyles[mapStyle];
				}
			}
			
			// Create map
			const map = new google.maps.Map(mapContainerRef.current, mapOptions);
			setMapInstance(map);
			
			// Initialize geocoder
			if (!geocoder.current) {
				geocoder.current = new google.maps.Geocoder();
			}
			
			// Geocode address if provided
			if (address) {
				geocodeAddress(address, map);
			}
			
			// Add markers if we have them
			if (hasMarkers) {
				addMarkers(markers, map);
			}
		}
	}, [mapLoaded, mapContainerRef, mapInstance, zoom, mapType, mapStyle, customMapStyle, address, markers, enableZoom, enableScroll, enableFullscreenControl, enableStreetViewControl, enableMapTypeControl]);

	// Update map when settings change
	useEffect(() => {
		if (mapInstance) {
			mapInstance.setZoom(zoom);
			mapInstance.setMapTypeId(mapType);
			
			// Update map styles if changed
			if (mapStyle && mapStyle !== 'default') {
				if (mapStyle === 'custom' && customMapStyle) {
					try {
						const customStyleObj = JSON.parse(customMapStyle);
						mapInstance.setOptions({ styles: customStyleObj });
					} catch (error) {
						console.error('Invalid map style JSON:', error);
					}
				} else if (predefinedMapStyles[mapStyle]) {
					mapInstance.setOptions({ styles: predefinedMapStyles[mapStyle] });
				}
			} else {
				// Reset to default style
				mapInstance.setOptions({ styles: [] });
			}
			
			mapInstance.setOptions({
				zoomControl: enableZoom,
				scrollwheel: enableScroll,
				fullscreenControl: enableFullscreenControl,
				streetViewControl: enableStreetViewControl,
				mapTypeControl: enableMapTypeControl
			});
		}
	}, [mapInstance, zoom, mapType, mapStyle, customMapStyle, enableZoom, enableScroll, enableFullscreenControl, enableStreetViewControl, enableMapTypeControl]);

    // Geocode address and update map
    const geocodeAddress = (address, map, markerIndex = -1) => {
		if (!geocoder.current) return;
		
		setIsLoading(true);
		setGeocodeError(null);
		
		geocoder.current.geocode({ address: address }, (results, status) => {
			setIsLoading(false);
			
			if (status === 'OK' && results && results.length > 0) {
				const location = results[0].geometry.location;
				
				if (markerIndex >= 0) {
					// We're updating a specific marker
					const updatedMarkers = [...markers];
					updatedMarkers[markerIndex] = {
						...updatedMarkers[markerIndex],
						latitude: location.lat(),
						longitude: location.lng(),
					};
					setAttributes({ markers: updatedMarkers });
					
					// Refresh the markers on the map
					if (mapInstance) {
						addMarkers(updatedMarkers, mapInstance);
					}
				} else {
					// We're updating the main map address
					map.setCenter(location);
					
					// Only update existing markers, don't create new ones automatically
					if (markers && markers.length > 0) {
						const updatedMarkers = [...markers];
						updatedMarkers[0] = {
							...updatedMarkers[0],
							address: address,
							latitude: location.lat(),
							longitude: location.lng(),
						};
						
						setAttributes({ markers: updatedMarkers });
						
						// Refresh the markers on the map
						if (mapInstance) {
							addMarkers(updatedMarkers, mapInstance);
						}
					}
				}
			} else {
				setGeocodeError(__('Could not find address. Please try a different one or use the map to position your marker.', 'digiblocks'));
			}
		});
	};

    // Add new marker
    const addNewMarker = () => {
		const newMarkers = [...(markers || [])];
		
		// Create a unique ID for the new marker
		const markerId = `marker-${Date.now()}`;
		
		// Use the current map center if available
		const center = mapInstance ? mapInstance.getCenter() : { lat: 40.7128, lng: -74.0060 };
		
		newMarkers.push({
			id: markerId,
			address: '',
			latitude: typeof center.lat === 'function' ? center.lat() : center.lat,
			longitude: typeof center.lng === 'function' ? center.lng() : center.lng,
			title: '',
		});
		
		setAttributes({ markers: newMarkers });
		
		// If this is the first marker and we have a Map ID, we need to recreate the map
		// to properly apply the Map ID
		if (newMarkers.length === 1 && mapInstance && digiBlocksData.googleMapsMapId) {
			// Get current center and zoom
			const currentCenter = mapInstance.getCenter();
			const currentZoom = mapInstance.getZoom();
			
			// Save current map options
			const mapOptions = {
				center: currentCenter,
				zoom: currentZoom,
				mapTypeId: mapInstance.getMapTypeId(),
				zoomControl: enableZoom,
				scrollwheel: enableScroll,
				fullscreenControl: enableFullscreenControl,
				streetViewControl: enableStreetViewControl,
				mapTypeControl: enableMapTypeControl,
				mapId: digiBlocksData.googleMapsMapId // Add Map ID
			};
			
			// First, clear marker instances
			if (markerInstances.length > 0) {
				markerInstances.forEach(marker => marker.map = null);
				setMarkerInstances([]);
			}
			
			// Create a new map
			const newMap = new google.maps.Map(mapContainerRef.current, mapOptions);
			setMapInstance(newMap);
			
			// Add the markers to the new map after a short delay to ensure map is fully initialized
			setTimeout(() => {
				addMarkers(newMarkers, newMap);
			}, 100);
		} else if (mapInstance) {
			// Just add the new marker to the existing map
			addMarkers(newMarkers, mapInstance);
		}
	};

    // Update marker
    const updateMarker = (index, field, value) => {
        const updatedMarkers = [...markers];
        updatedMarkers[index] = {
            ...updatedMarkers[index],
            [field]: value
        };
        
        setAttributes({ markers: updatedMarkers });
        
        // If address was updated, geocode it
        if (field === 'address' && value && geocoder.current && mapInstance) {
            geocodeAddress(value, mapInstance);
        }
    };

    // Remove marker
    const removeMarker = (index) => {
		const updatedMarkers = [...markers];
		updatedMarkers.splice(index, 1);
		
		// Update the markers attribute with the new array
		setAttributes({ markers: updatedMarkers });
		
		// If this was the last marker, we can apply styles
		if (updatedMarkers.length === 0 && mapInstance) {
			// Remove mapId
			mapInstance.mapId = null;
			
			// Re-apply map style if defined
			if (mapStyle && mapStyle !== 'default') {
				if (mapStyle === 'custom' && customMapStyle) {
					try {
						const customStyleObj = JSON.parse(customMapStyle);
						mapInstance.setOptions({ styles: customStyleObj });
					} catch (error) {
						console.error('Invalid map style JSON:', error);
					}
				} else if (predefinedMapStyles[mapStyle]) {
					mapInstance.setOptions({ styles: predefinedMapStyles[mapStyle] });
				}
			}
		}
	};

	// Map style
	const applyMapStyle = (map, style, customStyle) => {
		if (!map) return;
		
		if (style && style !== 'default') {
			if (style === 'custom' && customStyle) {
				try {
					const customStyleObj = JSON.parse(customStyle);
					map.setOptions({ styles: customStyleObj });
				} catch (error) {
					console.error('Invalid map style JSON:', error);
				}
			} else if (predefinedMapStyles[style]) {
				map.setOptions({ styles: predefinedMapStyles[style] });
			}
		} else {
			// Reset to default style
			map.setOptions({ styles: [] });
		}
	};

	// Add markers to map
	const addMarkers = async (markers, map) => {
		// Safely handle empty markers array
		if (!markers || markers.length === 0) {
			return;
		}
		
		// Clear existing markers
		if (markerInstances.length > 0) {
			markerInstances.forEach(marker => marker.map = null);
			setMarkerInstances([]);
		}
		
		try {
			// Make sure the marker library is loaded
			if (!google.maps.marker) {
				await google.maps.importLibrary("marker");
			}
			
			// Create new marker instances
			const newMarkerInstances = markers.map(marker => {
				if (!marker.latitude || !marker.longitude) return null;
				
				const position = { lat: marker.latitude, lng: marker.longitude };
				const title = marker.title || '';
				const description = marker.description || '';
				
				// Create the marker
				const advancedMarker = new google.maps.marker.AdvancedMarkerElement({
					map: map,
					position: position,
					title: title
				});
				
				// If there's a description, create an info window with the description
				if (description) {
					// Create info window content
					const infoContent = document.createElement('div');
					infoContent.className = 'digiblocks-map-info-content';
					infoContent.style.cssText = 'min-width: 200px; max-width: 300px; padding: 10px; background-color: white; border-radius: 8px; box-shadow: 0 2px 7px 1px rgba(0,0,0,0.3);';
					
					// Add title if exists
					if (title) {
						const titleElement = document.createElement('div');
						titleElement.className = 'digiblocks-map-info-title';
						titleElement.style.cssText = 'font-weight: bold; margin-bottom: 5px; font-size: 16px;';
						titleElement.textContent = title;
						infoContent.appendChild(titleElement);
					}
					
					// Add description
					const descElement = document.createElement('div');
					descElement.className = 'digiblocks-map-info-description';
					descElement.style.cssText = 'font-size: 14px;';
					descElement.innerHTML = description;
					infoContent.appendChild(descElement);
					
					// Create info window
					const infoWindow = new google.maps.InfoWindow({
						content: infoContent
					});
					
					// Add click listener to open info window
					google.maps.event.addListener(advancedMarker, 'click', function() {
						infoWindow.open({
							anchor: advancedMarker,
							map: map
						});
					});
					
					// If there's only one marker with description, open it by default
					if (markers.length === 1) {
						infoWindow.open({
							anchor: advancedMarker,
							map: map
						});
					}
				}
				
				return advancedMarker;
			}).filter(Boolean);
			
			setMarkerInstances(newMarkerInstances);
		} catch (error) {
			console.error('Error creating advanced markers:', error);
		}
	};

    // Use ref
	const previewTimeoutRef = useRef(null);

	// Effect to trigger animation preview when animation attribute changes
	useEffect(() => {
		if (animation && animation !== 'none') {
			const timeoutId = setTimeout(() => {
				animationPreview(id, animation, animations, previewTimeoutRef, animationDuration, animationDelay);
			}, 100);
			return () => clearTimeout(timeoutId);
		}
	}, [animation]);

	// Button click handler
	const handlePreviewClick = () => {
		animationPreview(id, animation, animations, previewTimeoutRef, animationDuration, animationDelay);
	};

    // Border style options
    const borderStyleOptions = [
        { label: __("None", "digiblocks"), value: "none" },
        { label: __("Solid", "digiblocks"), value: "solid" },
        { label: __("Dotted", "digiblocks"), value: "dotted" },
        { label: __("Dashed", "digiblocks"), value: "dashed" },
        { label: __("Double", "digiblocks"), value: "double" },
        { label: __("Groove", "digiblocks"), value: "groove" },
        { label: __("Ridge", "digiblocks"), value: "ridge" },
        { label: __("Inset", "digiblocks"), value: "inset" },
        { label: __("Outset", "digiblocks"), value: "outset" },
    ];

    // Map type options
    const mapTypeOptions = [
        { label: __("Roadmap", "digiblocks"), value: "roadmap" },
        { label: __("Satellite", "digiblocks"), value: "satellite" },
        { label: __("Hybrid", "digiblocks"), value: "hybrid" },
        { label: __("Terrain", "digiblocks"), value: "terrain" },
    ];

	// Map style options
	const mapStyleOptions = [
		{ label: __("Default", "digiblocks"), value: "default" },
		{ label: __("Silver", "digiblocks"), value: "silver" },
		{ label: __("Retro", "digiblocks"), value: "retro" },
		{ label: __("Dark", "digiblocks"), value: "dark" },
		{ label: __("Night", "digiblocks"), value: "night" },
		{ label: __("Aubergine", "digiblocks"), value: "aubergine" },
		{ label: __("Custom", "digiblocks"), value: "custom" }
	];

	// Predefined map styles
	const predefinedMapStyles = {
		default: [],
		silver: [
			{ elementType: "geometry", stylers: [{ color: "#f5f5f5" }] },
			{ elementType: "labels.icon", stylers: [{ visibility: "off" }] },
			{ elementType: "labels.text.fill", stylers: [{ color: "#616161" }] },
			{ elementType: "labels.text.stroke", stylers: [{ color: "#f5f5f5" }] },
			{ featureType: "administrative.land_parcel", elementType: "labels.text.fill", stylers: [{ color: "#bdbdbd" }] },
			{ featureType: "poi", elementType: "geometry", stylers: [{ color: "#eeeeee" }] },
			{ featureType: "poi", elementType: "labels.text.fill", stylers: [{ color: "#757575" }] },
			{ featureType: "poi.park", elementType: "geometry", stylers: [{ color: "#e5e5e5" }] },
			{ featureType: "poi.park", elementType: "labels.text.fill", stylers: [{ color: "#9e9e9e" }] },
			{ featureType: "road", elementType: "geometry", stylers: [{ color: "#ffffff" }] },
			{ featureType: "road.arterial", elementType: "labels.text.fill", stylers: [{ color: "#757575" }] },
			{ featureType: "road.highway", elementType: "geometry", stylers: [{ color: "#dadada" }] },
			{ featureType: "road.highway", elementType: "labels.text.fill", stylers: [{ color: "#616161" }] },
			{ featureType: "road.local", elementType: "labels.text.fill", stylers: [{ color: "#9e9e9e" }] },
			{ featureType: "transit.line", elementType: "geometry", stylers: [{ color: "#e5e5e5" }] },
			{ featureType: "transit.station", elementType: "geometry", stylers: [{ color: "#eeeeee" }] },
			{ featureType: "water", elementType: "geometry", stylers: [{ color: "#c9c9c9" }] },
			{ featureType: "water", elementType: "labels.text.fill", stylers: [{ color: "#9e9e9e" }] }
		],
		retro: [
			{ elementType: "geometry", stylers: [{ color: "#ebe3cd" }] },
			{ elementType: "labels.text.fill", stylers: [{ color: "#523735" }] },
			{ elementType: "labels.text.stroke", stylers: [{ color: "#f5f1e6" }] },
			{ featureType: "administrative", elementType: "geometry.stroke", stylers: [{ color: "#c9b2a6" }] },
			{ featureType: "administrative.land_parcel", elementType: "geometry.stroke", stylers: [{ color: "#dcd2be" }] },
			{ featureType: "administrative.land_parcel", elementType: "labels.text.fill", stylers: [{ color: "#ae9e90" }] },
			{ featureType: "landscape.natural", elementType: "geometry", stylers: [{ color: "#dfd2ae" }] },
			{ featureType: "poi", elementType: "geometry", stylers: [{ color: "#dfd2ae" }] },
			{ featureType: "poi", elementType: "labels.text.fill", stylers: [{ color: "#93817c" }] },
			{ featureType: "poi.park", elementType: "geometry.fill", stylers: [{ color: "#a5b076" }] },
			{ featureType: "poi.park", elementType: "labels.text.fill", stylers: [{ color: "#447530" }] },
			{ featureType: "road", elementType: "geometry", stylers: [{ color: "#f5f1e6" }] },
			{ featureType: "road.arterial", elementType: "geometry", stylers: [{ color: "#fdfcf8" }] },
			{ featureType: "road.highway", elementType: "geometry", stylers: [{ color: "#f8c967" }] },
			{ featureType: "road.highway", elementType: "geometry.stroke", stylers: [{ color: "#e9bc62" }] },
			{ featureType: "road.highway.controlled_access", elementType: "geometry", stylers: [{ color: "#e98d58" }] },
			{ featureType: "road.highway.controlled_access", elementType: "geometry.stroke", stylers: [{ color: "#db8555" }] },
			{ featureType: "road.local", elementType: "labels.text.fill", stylers: [{ color: "#806b63" }] },
			{ featureType: "transit.line", elementType: "geometry", stylers: [{ color: "#dfd2ae" }] },
			{ featureType: "transit.line", elementType: "labels.text.fill", stylers: [{ color: "#8f7d77" }] },
			{ featureType: "transit.line", elementType: "labels.text.stroke", stylers: [{ color: "#ebe3cd" }] },
			{ featureType: "transit.station", elementType: "geometry", stylers: [{ color: "#dfd2ae" }] },
			{ featureType: "water", elementType: "geometry.fill", stylers: [{ color: "#b9d3c2" }] },
			{ featureType: "water", elementType: "labels.text.fill", stylers: [{ color: "#92998d" }] }
		],
		dark: [
			{ elementType: "geometry", stylers: [{ color: "#212121" }] },
			{ elementType: "labels.icon", stylers: [{ visibility: "off" }] },
			{ elementType: "labels.text.fill", stylers: [{ color: "#757575" }] },
			{ elementType: "labels.text.stroke", stylers: [{ color: "#212121" }] },
			{ featureType: "administrative", elementType: "geometry", stylers: [{ color: "#757575" }] },
			{ featureType: "administrative.country", elementType: "labels.text.fill", stylers: [{ color: "#9e9e9e" }] },
			{ featureType: "administrative.land_parcel", stylers: [{ visibility: "off" }] },
			{ featureType: "administrative.locality", elementType: "labels.text.fill", stylers: [{ color: "#bdbdbd" }] },
			{ featureType: "poi", elementType: "labels.text.fill", stylers: [{ color: "#757575" }] },
			{ featureType: "poi.park", elementType: "geometry", stylers: [{ color: "#181818" }] },
			{ featureType: "poi.park", elementType: "labels.text.fill", stylers: [{ color: "#616161" }] },
			{ featureType: "poi.park", elementType: "labels.text.stroke", stylers: [{ color: "#1b1b1b" }] },
			{ featureType: "road", elementType: "geometry.fill", stylers: [{ color: "#2c2c2c" }] },
			{ featureType: "road", elementType: "labels.text.fill", stylers: [{ color: "#8a8a8a" }] },
			{ featureType: "road.arterial", elementType: "geometry", stylers: [{ color: "#373737" }] },
			{ featureType: "road.highway", elementType: "geometry", stylers: [{ color: "#3c3c3c" }] },
			{ featureType: "road.highway.controlled_access", elementType: "geometry", stylers: [{ color: "#4e4e4e" }] },
			{ featureType: "road.local", elementType: "labels.text.fill", stylers: [{ color: "#616161" }] },
			{ featureType: "transit", elementType: "labels.text.fill", stylers: [{ color: "#757575" }] },
			{ featureType: "water", elementType: "geometry", stylers: [{ color: "#000000" }] },
			{ featureType: "water", elementType: "labels.text.fill", stylers: [{ color: "#3d3d3d" }] }
		],
		night: [
			{ elementType: "geometry", stylers: [{ color: "#242f3e" }] },
			{ elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
			{ elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
			{ featureType: "administrative.locality", elementType: "labels.text.fill", stylers: [{ color: "#d59563" }] },
			{ featureType: "poi", elementType: "labels.text.fill", stylers: [{ color: "#d59563" }] },
			{ featureType: "poi.park", elementType: "geometry", stylers: [{ color: "#263c3f" }] },
			{ featureType: "poi.park", elementType: "labels.text.fill", stylers: [{ color: "#6b9a76" }] },
			{ featureType: "road", elementType: "geometry", stylers: [{ color: "#38414e" }] },
			{ featureType: "road", elementType: "geometry.stroke", stylers: [{ color: "#212a37" }] },
			{ featureType: "road", elementType: "labels.text.fill", stylers: [{ color: "#9ca5b3" }] },
			{ featureType: "road.highway", elementType: "geometry", stylers: [{ color: "#746855" }] },
			{ featureType: "road.highway", elementType: "geometry.stroke", stylers: [{ color: "#1f2835" }] },
			{ featureType: "road.highway", elementType: "labels.text.fill", stylers: [{ color: "#f3d19c" }] },
			{ featureType: "transit", elementType: "geometry", stylers: [{ color: "#2f3948" }] },
			{ featureType: "transit.station", elementType: "labels.text.fill", stylers: [{ color: "#d59563" }] },
			{ featureType: "water", elementType: "geometry", stylers: [{ color: "#17263c" }] },
			{ featureType: "water", elementType: "labels.text.fill", stylers: [{ color: "#515c6d" }] },
			{ featureType: "water", elementType: "labels.text.stroke", stylers: [{ color: "#17263c" }] }
		],
		aubergine: [
			{ elementType: "geometry", stylers: [{ color: "#1d2c4d" }] },
			{ elementType: "labels.text.fill", stylers: [{ color: "#8ec3b9" }] },
			{ elementType: "labels.text.stroke", stylers: [{ color: "#1a3646" }] },
			{ featureType: "administrative.country", elementType: "geometry.stroke", stylers: [{ color: "#4b6878" }] },
			{ featureType: "administrative.land_parcel", elementType: "labels.text.fill", stylers: [{ color: "#64779e" }] },
			{ featureType: "administrative.province", elementType: "geometry.stroke", stylers: [{ color: "#4b6878" }] },
			{ featureType: "landscape.man_made", elementType: "geometry.stroke", stylers: [{ color: "#334e87" }] },
			{ featureType: "landscape.natural", elementType: "geometry", stylers: [{ color: "#023e58" }] },
			{ featureType: "poi", elementType: "geometry", stylers: [{ color: "#283d6a" }] },
			{ featureType: "poi", elementType: "labels.text.fill", stylers: [{ color: "#6f9ba5" }] },
			{ featureType: "poi", elementType: "labels.text.stroke", stylers: [{ color: "#1d2c4d" }] },
			{ featureType: "poi.park", elementType: "geometry.fill", stylers: [{ color: "#023e58" }] },
			{ featureType: "poi.park", elementType: "labels.text.fill", stylers: [{ color: "#3C7680" }] },
			{ featureType: "road", elementType: "geometry", stylers: [{ color: "#304a7d" }] },
			{ featureType: "road", elementType: "labels.text.fill", stylers: [{ color: "#98a5be" }] },
			{ featureType: "road", elementType: "labels.text.stroke", stylers: [{ color: "#1d2c4d" }] },
			{ featureType: "road.highway", elementType: "geometry", stylers: [{ color: "#2c6675" }] },
			{ featureType: "road.highway", elementType: "geometry.stroke", stylers: [{ color: "#255763" }] },
			{ featureType: "road.highway", elementType: "labels.text.fill", stylers: [{ color: "#b0d5ce" }] },
			{ featureType: "road.highway", elementType: "labels.text.stroke", stylers: [{ color: "#023e58" }] },
			{ featureType: "transit", elementType: "labels.text.fill", stylers: [{ color: "#98a5be" }] },
			{ featureType: "transit", elementType: "labels.text.stroke", stylers: [{ color: "#1d2c4d" }] },
			{ featureType: "transit.line", elementType: "geometry.fill", stylers: [{ color: "#283d6a" }] },
			{ featureType: "transit.station", elementType: "geometry", stylers: [{ color: "#3a4762" }] },
			{ featureType: "water", elementType: "geometry", stylers: [{ color: "#0e1626" }] },
			{ featureType: "water", elementType: "labels.text.fill", stylers: [{ color: "#4e6d70" }] }
		]
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

    const getMaxValue = (unit) => {
        switch (unit) {
            case '%':
                return 100;
            case 'em':
            case 'rem':
                return 50;
            case 'vw':
            case 'vh':
                return 100;
            default:
                return 2000;
        }
    };

    const getStepValue = (unit) => {
        switch (unit) {
            case '%':
            case 'vw':
            case 'vh':
                return 1;
            case 'em':
            case 'rem':
                return 0.1;
            default:
                return 1;
        }
    };

	const getTransformOrigin = (transform, device) => {
        const xMap = { left: '0%', center: '50%', right: '100%' };
        const yMap = { top: '0%', center: '50%', bottom: '100%' };
        
        const x = xMap[transform.xAnchor?.[device] || 'center'];
        const y = yMap[transform.yAnchor?.[device] || 'center'];
        
        return `${x} ${y}`;
    };

	const getTransformCSS = (transform, device) => {
		if (!transform) return '';
		
		const transforms = [];
		
		const getValue = (prop) => {
			if (!prop) return '';
			
			let val = prop[device];
			
			// Check if value is empty
			const isEmpty = (v) => {
				if (v === '' || v === undefined || v === null) return true;
				if (typeof v === 'object' && v !== null) {
					return v.value === '' || v.value === undefined || v.value === null;
				}
				return false;
			};
			
			// Tablet fallback to desktop
			if (device === 'tablet' && isEmpty(val)) {
				val = prop.desktop;
			}
			
			// Mobile fallback to tablet, then desktop
			if (device === 'mobile' && isEmpty(val)) {
				val = prop.tablet;
				if (isEmpty(val)) {
					val = prop.desktop;
				}
			}
			
			return typeof val === 'object' && val !== null ? (val.value !== undefined ? val.value : '') : val;
		};
		
		const rotateValue = getValue(transform.rotate);
		if (rotateValue !== '' && rotateValue !== undefined && rotateValue !== null) {
			if (transform.rotate3d) {
				const perspectiveValue = getValue(transform.perspective);
				if (perspectiveValue !== '' && perspectiveValue !== undefined && perspectiveValue !== null) {
					transforms.push(`perspective(${perspectiveValue}px)`);
				}
			}
			transforms.push(`rotate(${rotateValue}deg)`);
		}
		
		if (transform.rotate3d) {
			const rotateXValue = getValue(transform.rotateX);
			if (rotateXValue !== '' && rotateXValue !== undefined && rotateXValue !== null) {
				transforms.push(`rotateX(${rotateXValue}deg)`);
			}
			const rotateYValue = getValue(transform.rotateY);
			if (rotateYValue !== '' && rotateYValue !== undefined && rotateYValue !== null) {
				transforms.push(`rotateY(${rotateYValue}deg)`);
			}
		}
		
		const offsetXValue = transform.offsetX?.[device]?.value;
		const offsetYValue = transform.offsetY?.[device]?.value;
		const hasOffsetX = offsetXValue !== '' && offsetXValue !== undefined && offsetXValue !== null;
		const hasOffsetY = offsetYValue !== '' && offsetYValue !== undefined && offsetYValue !== null;
		
		if (hasOffsetX || hasOffsetY) {
			const x = hasOffsetX ? `${offsetXValue}${transform.offsetX[device].unit || 'px'}` : '0';
			const y = hasOffsetY ? `${offsetYValue}${transform.offsetY[device].unit || 'px'}` : '0';
			transforms.push(`translate(${x}, ${y})`);
		}
		
		if (transform.keepProportions) {
			const scaleValue = getValue(transform.scale);
			if (scaleValue !== '' && scaleValue !== undefined && scaleValue !== null && scaleValue != 1) {
				transforms.push(`scale(${scaleValue})`);
			}
		} else {
			const scaleXValue = getValue(transform.scaleX);
			const scaleYValue = getValue(transform.scaleY);
			const scaleX = (scaleXValue !== '' && scaleXValue !== undefined && scaleXValue !== null) ? scaleXValue : 1;
			const scaleY = (scaleYValue !== '' && scaleYValue !== undefined && scaleYValue !== null) ? scaleYValue : 1;
			if (scaleX != 1 || scaleY != 1) {
				transforms.push(`scale(${scaleX}, ${scaleY})`);
			}
		}
		
		const skewXValue = getValue(transform.skewX);
		if (skewXValue !== '' && skewXValue !== undefined && skewXValue !== null) {
			transforms.push(`skewX(${skewXValue}deg)`);
		}
		const skewYValue = getValue(transform.skewY);
		if (skewYValue !== '' && skewYValue !== undefined && skewYValue !== null) {
			transforms.push(`skewY(${skewYValue}deg)`);
		}
		
		if (transform.flipHorizontal) {
			transforms.push('scaleX(-1)');
		}
		if (transform.flipVertical) {
			transforms.push('scaleY(-1)');
		}
		
		return transforms.length > 0 ? transforms.join(' ') : '';
	};
    
    // Generate CSS for block styling
    const generateCSS = () => {
        const activeDevice = window.digi.responsiveState.activeDevice;
        
        // Set map height based on device
        const currentHeight = mapHeight && mapHeight[activeDevice] 
            ? mapHeight[activeDevice] 
            : (activeDevice === 'desktop' ? 400 : activeDevice === 'tablet' ? 350 : 300);
        
        // Border styles
        let borderCSS = '';
        if (borderStyle && borderStyle !== 'none') {
            borderCSS = `
                border-style: ${borderStyle};
                border-color: ${borderColor || '#e0e0e0'};
				${getDimensionCSS(borderWidth, 'border-width', activeDevice)}
				${getDimensionCSS(borderRadius, 'border-radius', activeDevice)}
            `;
        }
        
        // Box shadow
        let boxShadowCSS = '';
        if (boxShadow && boxShadow.enable) {
            const inset = boxShadow.position === 'inset' ? 'inset ' : '';
            boxShadowCSS = `box-shadow: ${inset}${boxShadow.horizontal}px ${boxShadow.vertical}px ${boxShadow.blur}px ${boxShadow.spread}px ${boxShadow.color};`;
        }
        
        // Box shadow hover style
        let boxShadowHoverCSS = '';
        if (boxShadowHover && boxShadowHover.enable) {
            const inset = boxShadowHover.position === 'inset' ? 'inset ' : '';
            boxShadowHoverCSS = `box-shadow: ${inset}${boxShadowHover.horizontal}px ${boxShadowHover.vertical}px ${boxShadowHover.blur}px ${boxShadowHover.spread}px ${boxShadowHover.color};`;
        }

        // Position styles
        let positionCSS = '';
        if (position && position !== 'default') {
            positionCSS += `position: ${position} !important;`;
            
            const horizontalValue = horizontalOffset?.[activeDevice]?.value;
            const horizontalUnit = horizontalOffset?.[activeDevice]?.unit || 'px';
            if (horizontalValue !== '' && horizontalValue !== undefined) {
                if (horizontalOrientation === 'left') {
                    positionCSS += `left: ${horizontalValue}${horizontalUnit};`;
                } else {
                    positionCSS += `right: ${horizontalValue}${horizontalUnit};`;
                }
            }
            
            const verticalValue = verticalOffset?.[activeDevice]?.value;
            const verticalUnit = verticalOffset?.[activeDevice]?.unit || 'px';
            if (verticalValue !== '' && verticalValue !== undefined) {
                if (verticalOrientation === 'top') {
                    positionCSS += `top: ${verticalValue}${verticalUnit};`;
                } else {
                    positionCSS += `bottom: ${verticalValue}${verticalUnit};`;
                }
            }
        }

        if (zIndex !== '' && zIndex !== undefined && zIndex !== null) {
            positionCSS += `z-index: ${zIndex};`;
        }

		// Transform
		let transformCSS = '';
		const transformValue = getTransformCSS(transform, activeDevice);
		if (transformValue) {
			transformCSS += `transform: ${transformValue};`;
			transformCSS += `transform-origin: ${getTransformOrigin(transform, activeDevice)};`;
		}

		const transformHoverValue = getTransformCSS(transformHover, activeDevice);
		if (transformHoverValue && transformHover && transformHover.transitionDuration !== '' && transformHover.transitionDuration !== undefined && transformHover.transitionDuration !== null) {
			const duration = transformHover.transitionDuration;
			transformCSS += `transition: transform ${duration}ms ease;`;
		}

		let transformHoverCSS = '';
		if (transformHoverValue) {
			transformHoverCSS += `transform: ${transformHoverValue};`;
			transformHoverCSS += `transform-origin: ${getTransformOrigin(transformHover, activeDevice)};`;
		}
        
        return `
            /* Google Map Block - ${id} */
            .${id} {
                height: ${currentHeight}px;
                width: 100%;
                overflow: hidden;
                ${borderCSS}
                ${boxShadowCSS}
				transition: all .3s ease;
                ${positionCSS}
				${transformCSS}
            }

            .${id}:hover {
                ${boxShadowHoverCSS}
				${transformHoverCSS}
            }
            
            /* Responsive styles */
            @media (max-width: 991px) {
                .${id} {
                    height: ${mapHeight && mapHeight.tablet ? mapHeight.tablet : 350}px;
                }
            }
            
            @media (max-width: 767px) {
                .${id} {
                    height: ${mapHeight && mapHeight.mobile ? mapHeight.mobile : 300}px;
                }
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

	const renderMarkerSettings = () => {
		// Get the current number of markers - ensure it's a proper array check
		const markerCount = Array.isArray(markers) ? markers.length : 0;
		
		// Check if Map ID is configured in global settings
		const hasMapId = !!digiBlocksData.googleMapsMapId;
		
		if (markerCount > 0 && !hasMapId) {
			return (
				<div className="components-notice is-warning" style={{ margin: '0 0 16px 0' }}>
					<div className="components-notice__content">
						<p>{__("A Map ID is required to use markers with the Google Maps block.", "digiblocks")}</p>
						<p>{__("Please configure a Map ID in the DigiBlocks settings before adding markers.", "digiblocks")}</p>
						<Button
							isPrimary
							href={`${window.ajaxurl ? window.ajaxurl.replace('admin-ajax.php', '') : '/wp-admin/'}admin.php?page=digiblocks-settings`}
							target="_blank"
							style={{ marginTop: '10px' }}
						>
							{__("Go to Settings", "digiblocks")}
						</Button>
					</div>
				</div>
			);
		}
		
		return (
			<>
				{Array.isArray(markers) && markers.length > 0 ? (
					<div>
						{markers.map((marker, index) => (
							<div 
								key={marker.id || `marker-${index}`}
								className="digiblocks-google-map-marker"
								style={{
									marginBottom: '16px',
									padding: '16px',
									backgroundColor: '#f0f0f0',
									borderRadius: '4px',
								}}
							>
								<h3 style={{ margin: '0 0 10px 0' }}>
									{__("Marker", "digiblocks")} #{index + 1}
								</h3>
								
								<TextControl
									label={__("Title", "digiblocks")}
									value={marker.title || ""}
									onChange={(value) => updateMarker(index, 'title', value)}
									placeholder={__("Enter marker title", "digiblocks")}
									__next40pxDefaultSize={true}
									__nextHasNoMarginBottom={true}
								/>
	
								<TextareaControl
									label={__("Description", "digiblocks")}
									value={marker.description || ""}
									onChange={(value) => updateMarker(index, 'description', value)}
									placeholder={__("Enter marker description (will appear above marker)", "digiblocks")}
									__next40pxDefaultSize={true}
									__nextHasNoMarginBottom={true}
								/>
								
								<TextControl
									label={__("Address", "digiblocks")}
									value={marker.address || ""}
									onChange={(value) => {
										// Just update the address text field
										const updatedMarkers = [...markers];
										updatedMarkers[index] = {
											...updatedMarkers[index],
											address: value
										};
										setAttributes({ markers: updatedMarkers });
									}}
									onBlur={() => {
										// Only geocode when user is done typing
										if (markers[index]?.address && geocoder.current && mapInstance) {
											geocodeAddress(markers[index].address, mapInstance, index);
										}
									}}
									placeholder={__("Enter marker address", "digiblocks")}
									__next40pxDefaultSize={true}
									__nextHasNoMarginBottom={true}
								/>
								
								<div style={{ marginTop: '10px', display: 'flex', justifyContent: 'flex-end' }}>
									<Button
										isDestructive
										onClick={() => removeMarker(index)}
									>
										{__("Remove Marker", "digiblocks")}
									</Button>
								</div>
							</div>
						))}
						
						<Button
							isPrimary
							onClick={addNewMarker}
							style={{ marginTop: '10px', width: '100%', justifyContent: 'center' }}
						>
							{__("Add Marker", "digiblocks")}
						</Button>
					</div>
				) : (
					<div>
						<p>{__("No markers added yet. Add your first marker!", "digiblocks")}</p>
						<Button
							isPrimary
							onClick={addNewMarker}
							style={{ width: '100%', justifyContent: 'center' }}
						>
							{__("Add Marker", "digiblocks")}
						</Button>
					</div>
				)}
			</>
		);
	};

    // Render tab content based on the active tab
    const renderTabContent = () => {
        switch (activeTab) {
            case 'options':
                return (
                    <>
                        <TabPanelBody
                            tab="options"
                            name="map-settings"
                            title={__("Map Settings", "digiblocks")}
                            initialOpen={true}
                        >
                            <TextControl
                                label={__("Address", "digiblocks")}
                                value={address || ""}
                                onChange={(value) => {
                                    setAttributes({ address: value });
                                    if (value && geocoder.current && mapInstance) {
                                        geocodeAddress(value, mapInstance);
                                    }
                                }}
                                placeholder={__("Enter location address", "digiblocks")}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            {geocodeError && (
                                <div className="components-notice is-error" style={{ margin: '0 0 16px 0' }}>
                                    <div className="components-notice__content">{geocodeError}</div>
                                </div>
                            )}
                            
                            <SelectControl
                                label={__("Map Type", "digiblocks")}
                                value={mapType}
                                options={mapTypeOptions}
                                onChange={(value) => setAttributes({ mapType: value })}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />

							{/* Only show Map Style if no markers or if markers are empty */}
							{(!markers || markers.length === 0) && (
								<>
									<SelectControl
										label={__("Map Style", "digiblocks")}
										value={mapStyle}
										options={mapStyleOptions}
										onChange={(value) => setAttributes({ mapStyle: value })}
										__next40pxDefaultSize={true}
										__nextHasNoMarginBottom={true}
									/>

									{mapStyle === 'custom' && (
										<TextareaControl
											label={__("Custom Map Style JSON", "digiblocks")}
											help={__("Paste a valid Google Maps style JSON. You can create styles with the Google Maps Styling Wizard.", "digiblocks")}
											value={customMapStyle || ''}
											onChange={(value) => setAttributes({ customMapStyle: value })}
											rows={6}
											__next40pxDefaultSize={true}
											__nextHasNoMarginBottom={true}
										/>
									)}
								</>
							)}

							{/* Show a note about Map Style when markers are present */}
							{markers && markers.length > 0 && (
								<div className="components-notice is-info" style={{ margin: '0 0 16px 0' }}>
									<div className="components-notice__content">
										{__("Map Style options are not available when markers are present, as markers require a Map ID which overrides custom styling.", "digiblocks")}
									</div>
								</div>
							)}
                            
                            <RangeControl
                                label={__("Zoom Level", "digiblocks")}
                                value={zoom}
                                onChange={(value) => setAttributes({ zoom: value })}
                                min={1}
                                max={20}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />
                        </TabPanelBody>
                        
                        <TabPanelBody
							tab="options"
							name="marker-settings"
							title={__("Markers", "digiblocks")}
							initialOpen={false}
						>
							{renderMarkerSettings()}
						</TabPanelBody>
                        
                        <TabPanelBody
                            tab="options"
                            name="map-controls"
                            title={__("Map Controls", "digiblocks")}
                            initialOpen={false}
                        >
                            <BaseControl
								id={`${id}-map-controls`}
								__nextHasNoMarginBottom={true}
							>
                                <ToggleControl
                                    label={__("Enable Zoom Control", "digiblocks")}
                                    checked={enableZoom !== false}
                                    onChange={(value) => setAttributes({ enableZoom: value })}
									__nextHasNoMarginBottom={true}
                                />
                                
                                <ToggleControl
                                    label={__("Enable Mousewheel Zoom", "digiblocks")}
                                    checked={enableScroll !== false}
                                    onChange={(value) => setAttributes({ enableScroll: value })}
									__nextHasNoMarginBottom={true}
                                />
                                
                                <ToggleControl
                                    label={__("Enable Fullscreen Control", "digiblocks")}
                                    checked={enableFullscreenControl !== false}
                                    onChange={(value) => setAttributes({ enableFullscreenControl: value })}
									__nextHasNoMarginBottom={true}
                                />
                                
                                <ToggleControl
                                    label={__("Enable Street View Control", "digiblocks")}
                                    checked={enableStreetViewControl !== false}
                                    onChange={(value) => setAttributes({ enableStreetViewControl: value })}
									__nextHasNoMarginBottom={true}
                                />
                                
                                <ToggleControl
                                    label={__("Enable Map Type Control", "digiblocks")}
                                    checked={enableMapTypeControl !== false}
                                    onChange={(value) => setAttributes({ enableMapTypeControl: value })}
									__nextHasNoMarginBottom={true}
                                />
                            </BaseControl>
                        </TabPanelBody>
                    </>
                );
                
            case 'style':
                return (
                    <>
                        <TabPanelBody
                            tab="style"
                            name="map-dimensions"
                            title={__("Map Size", "digiblocks")}
                            initialOpen={true}
                        >
                            <ResponsiveControl
                                label={__("Map Height", "digiblocks")}
                            >
                                <RangeControl
                                    value={mapHeight && mapHeight[localActiveDevice] 
                                        ? mapHeight[localActiveDevice] 
                                        : (localActiveDevice === 'desktop' ? 400 : localActiveDevice === 'tablet' ? 350 : 300)
                                    }
                                    onChange={(value) => {
                                        setAttributes({
                                            mapHeight: {
                                                ...mapHeight,
                                                [localActiveDevice]: value,
                                            },
                                        });
                                    }}
                                    min={150}
                                    max={800}
                                    __next40pxDefaultSize={true}
                                    __nextHasNoMarginBottom={true}
                                />
                            </ResponsiveControl>
                        </TabPanelBody>
                        
                        <TabPanelBody
                            tab="style"
                            name="map-border"
                            title={__("Border", "digiblocks")}
                            initialOpen={false}
                        >
                            <SelectControl
                                label={__("Border Style", "digiblocks")}
                                value={borderStyle || 'none'}
                                options={borderStyleOptions}
                                onChange={(value) => {
                                    // Initialize border width and radius with defaults when a style is first selected
                                    if (value !== 'none' && (borderStyle === 'none' || !borderStyle)) {
                                        // Set initial border width if not already set
                                        if (!borderWidth || Object.keys(borderWidth).length === 0) {
                                            setAttributes({
                                                borderWidth: {
                                                    desktop: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' },
                                                    tablet: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' },
                                                    mobile: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' }
                                                }
                                            });
                                        }
                                        
                                        // Set initial border radius if not already set
                                        if (!borderRadius || Object.keys(borderRadius).length === 0) {
                                            setAttributes({
                                                borderRadius: {
                                                    desktop: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' },
                                                    tablet: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' },
                                                    mobile: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' }
                                                }
                                            });
                                        }
                                    }
                                    
                                    setAttributes({ borderStyle: value });
                                }}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            {borderStyle && borderStyle !== 'none' && (
                                <>
                                    <PanelColorSettings
                                        title={__("Border Color", "digiblocks")}
                                        enableAlpha={true}
                                        colorSettings={[
                                            {
                                                value: borderColor,
                                                onChange: (value) => setAttributes({ borderColor: value }),
                                                label: __("Border Color", "digiblocks")
                                            }
                                        ]}
                                    />
                                    
                                    <ResponsiveControl
                                        label={__("Border Width", "digiblocks")}
                                    >
                                        <DimensionControl
                                            values={borderWidth && borderWidth[localActiveDevice] 
                                                ? borderWidth[localActiveDevice] 
                                                : { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' }
                                            }
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
                                    
                                    <ResponsiveControl
                                        label={__("Border Radius", "digiblocks")}
                                    >
                                        <DimensionControl
                                            values={borderRadius && borderRadius[localActiveDevice] 
                                                ? borderRadius[localActiveDevice] 
                                                : { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' }
                                            }
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
                                </>
                            )}
                        </TabPanelBody>
                        
                        <TabPanelBody
                            tab="style"
                            name="box-shadow"
                            title={__("Box Shadow", "digiblocks")}
                            initialOpen={false}
                        >
							<BoxShadowControl
								normalValue={boxShadow}
								hoverValue={boxShadowHover}
								onNormalChange={(value) => setAttributes({ boxShadow: value })}
								onHoverChange={(value) => setAttributes({ boxShadowHover: value })}
							/>
                        </TabPanelBody>
                    </>
                );
                
            case 'advanced':
                return (
                    <>
                        <TabPanelBody
                            tab="advanced"
                            name="position"
                            title={__("Position", "digiblocks")}
                            initialOpen={false}
                        >
                            <SelectControl
                                label={__("Position", "digiblocks")}
                                value={position}
                                options={[
                                    { label: __("Default", "digiblocks"), value: "default" },
                                    { label: __("Relative", "digiblocks"), value: "relative" },
                                    { label: __("Absolute", "digiblocks"), value: "absolute" },
                                    { label: __("Fixed", "digiblocks"), value: "fixed" },
                                ]}
                                onChange={(value) => setAttributes({ position: value })}
                                __nextHasNoMarginBottom={true}
                            />

                            {position !== 'default' && (
                                <>
                                    <ToggleGroupControl
                                        label={__("Horizontal Orientation", "digiblocks")}
                                        value={horizontalOrientation}
                                        isBlock
                                        onChange={(value) => setAttributes({ horizontalOrientation: value })}
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

                                    <ResponsiveRangeControl
                                        label={__("Offset", "digiblocks")}
                                        value={horizontalOffset}
                                        onChange={(value) => setAttributes({ horizontalOffset: value })}
                                        units={[
                                            { label: 'px', value: 'px' },
                                            { label: '%', value: '%' },
                                            { label: 'em', value: 'em' },
                                            { label: 'rem', value: 'rem' },
                                            { label: 'vw', value: 'vw' },
                                            { label: 'vh', value: 'vh' },
                                        ]}
                                        defaultUnit="px"
                                        min={0}
                                        max={getMaxValue(horizontalOffset?.[localActiveDevice]?.unit)}
                                        step={getStepValue(horizontalOffset?.[localActiveDevice]?.unit)}
                                    />

                                    <ToggleGroupControl
                                        label={__("Vertical Orientation", "digiblocks")}
                                        value={verticalOrientation}
                                        isBlock
                                        onChange={(value) => setAttributes({ verticalOrientation: value })}
                                        __nextHasNoMarginBottom={true}
                                    >
                                        <ToggleGroupControlOption
                                            value="top"
                                            label={__("Top", "digiblocks")}
                                        />
                                        <ToggleGroupControlOption
                                            value="bottom"
                                            label={__("Bottom", "digiblocks")}
                                        />
                                    </ToggleGroupControl>

                                    <ResponsiveRangeControl
                                        label={__("Offset", "digiblocks")}
                                        value={verticalOffset}
                                        onChange={(value) => setAttributes({ verticalOffset: value })}
                                        units={[
                                            { label: 'px', value: 'px' },
                                            { label: '%', value: '%' },
                                            { label: 'em', value: 'em' },
                                            { label: 'rem', value: 'rem' },
                                            { label: 'vw', value: 'vw' },
                                            { label: 'vh', value: 'vh' },
                                        ]}
                                        defaultUnit="px"
                                        min={0}
                                        max={getMaxValue(verticalOffset?.[localActiveDevice]?.unit)}
                                        step={getStepValue(verticalOffset?.[localActiveDevice]?.unit)}
                                    />
                                </>
                            )}

                            <RangeControl
                                label={__("Z-Index", "digiblocks")}
                                value={zIndex}
                                onChange={(value) => setAttributes({ zIndex: value })}
                                min={-999}
                                max={9999}
                                allowReset={true}
                                __nextHasNoMarginBottom={true}
                            />
                        </TabPanelBody>

						<TabPanelBody
                            tab="advanced"
                            name="transform"
                            title={__('Transform', 'digiblocks')}
                            initialOpen={false}
                        >
                            <TransformControl
                                normalValue={transform}
                                hoverValue={transformHover}
                                onNormalChange={(value) => setAttributes({ transform: value })}
                                onHoverChange={(value) => setAttributes({ transformHover: value })}
                            />
                        </TabPanelBody>

						<TabPanelBody
                            tab="advanced"
                            name="animation"
                            title={__('Animation', 'digiblocks')}
                            initialOpen={false}
                        >
                            <SelectControl
                                label={__("Animation Effect", "digiblocks")}
                                value={animation}
                                options={animationOptions}
                                onChange={(value) => setAttributes({ animation: value })}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />

							{animation && animation !== 'none' && (
								<>
									<SelectControl
										label={__("Animation Duration", "digiblocks")}
										value={animationDuration}
										options={[
											{ label: __("Slow", "digiblocks"), value: "slow" },
											{ label: __("Normal", "digiblocks"), value: "normal" },
											{ label: __("Fast", "digiblocks"), value: "fast" }
										]}
										onChange={(value) => setAttributes({ animationDuration: value })}
										__next40pxDefaultSize={true}
										__nextHasNoMarginBottom={true}
									/>
									
									<NumberControl
										label={__("Animation Delay (ms)", "digiblocks")}
										value={animationDelay || 0}
										onChange={(value) => setAttributes({ animationDelay: parseInt(value) || 0 })}
										min={0}
										step={100}
										__next40pxDefaultSize={true}
										__nextHasNoMarginBottom={true}
									/>
								</>
							)}
                            
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
                                        onChange={(e) => setAttributes({ anchor: e.target.value })}
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
                                        onChange={(e) => setAttributes({ customClasses: e.target.value })}
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
        className: `digiblocks-google-map ${id} ${animation !== 'none' ? `animate-${animation}` : ''} ${customClasses || ''}`,
        id: anchor || null, // Set the anchor as ID if provided
    });
    
    // Render placeholder or map
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

            <style dangerouslySetInnerHTML={{ __html: generateCSS() }} />

            <div {...blockProps}>
                {!digiBlocksData.googleMapsApiKey ? (
                    <Placeholder
                        icon="location-alt"
                        label={__("Google Map", "digiblocks")}
                        instructions={__("You need to add your Google Maps API key in the DigiBlocks settings to use this block.", "digiblocks")}
                    >
                        <Button
                            isPrimary
                            href={`${window.ajaxurl ? window.ajaxurl.replace('admin-ajax.php', '') : '/wp-admin/'}admin.php?page=digiblocks-settings`}
                            target="_blank"
                        >
                            {__("Go to Settings", "digiblocks")}
                        </Button>
                    </Placeholder>
                ) : isLoading ? (
                    <div className="digiblocks-google-map-loading" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                        <Spinner />
                        <span style={{ marginLeft: '10px' }}>{__("Loading map...", "digiblocks")}</span>
                    </div>
                ) : (
                    <div 
                        ref={mapContainerRef}
                        className="digiblocks-google-map-container"
                        style={{ width: '100%', height: '100%' }}
                    />
                )}
            </div>
        </>
    );
};

export default GoogleMapEdit;