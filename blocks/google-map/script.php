<?php
// Exit if accessed directly.
if (!defined('ABSPATH')) {
    exit;
}

ob_start();
?>
(function() {
    // Check if Google Maps API is already loaded or loading
    if (window.googleMapsInitialized || window.googleMapsLoading) {
        // API already handled, just initialize our maps when ready
        if (window.googleMapsInitialized) {
            initDigiGoogleMaps();
        } else {
            // Add our initialization to the queue
            window.digiblocksGoogleMapsCallbacks = window.digiblocksGoogleMapsCallbacks || [];
            window.digiblocksGoogleMapsCallbacks.push(initDigiGoogleMaps);
        }
        return;
    }

    // Mark as loading to prevent duplicate loads
    window.googleMapsLoading = true;
    
    // Create global callback array if it doesn't exist
    window.digiblocksGoogleMapsCallbacks = window.digiblocksGoogleMapsCallbacks || [];
    window.digiblocksGoogleMapsCallbacks.push(initDigiGoogleMaps);
    
    // Global callback handler - will call all registered callbacks
    window.digiblocksGoogleMapsCallback = function() {
        window.googleMapsInitialized = true;
        window.googleMapsLoading = false;
        
        // Execute all callbacks
        window.digiblocksGoogleMapsCallbacks.forEach(function(callback) {
            if (typeof callback === 'function') {
                callback();
            }
        });
    };
    
    // Function to initialize Google Maps
    async function initDigiGoogleMaps() {
        console.log("DigiBlocks - Initializing Google Maps");
        
        // Find all map blocks
        const mapBlocks = document.querySelectorAll('.digiblocks-google-map');
        
        console.log("DigiBlocks Map Count:", mapBlocks.length);
        
        if (!mapBlocks.length) return;

        // Global geocoder for address lookup
        const geocoder = new google.maps.Geocoder();
        
        // Initialize each map
        mapBlocks.forEach(async function(mapBlock) {
            console.log("Processing map:", mapBlock.className);
            
            const mapContainer = mapBlock.querySelector('.digiblocks-google-map-container');
            const markersContainer = mapBlock.querySelector('.digiblocks-google-map-markers');
            const addressElement = mapBlock.querySelector('.digiblocks-google-map-address');
            
            if (!mapContainer) return;
            
            // Get map options from data attributes
            const zoom = parseInt(mapBlock.getAttribute('data-map-zoom'), 10) || 10;
            const mapType = mapBlock.getAttribute('data-map-type') || 'roadmap';
            const mapId = mapBlock.getAttribute('data-map-id') || '';
            const enableZoom = mapBlock.getAttribute('data-enable-zoom') !== 'false';
            const enableScroll = mapBlock.getAttribute('data-enable-scroll') !== 'false';
            const enableFullscreen = mapBlock.getAttribute('data-enable-fullscreen') !== 'false';
            const enableStreetView = mapBlock.getAttribute('data-enable-streetview') !== 'false';
            const enableMapType = mapBlock.getAttribute('data-enable-maptype') !== 'false';
            
            console.log("Map ID from data attribute:", mapId);
            console.log("Markers container exists:", !!markersContainer);
            
            // Get map style options from data attributes
            const mapStyle = mapBlock.getAttribute('data-map-style') || 'default';
            const customMapStyle = mapBlock.getAttribute('data-custom-map-style') || '';
            
            // Default center
            const defaultCenter = { lat: 40.7128, lng: -74.0060 };
            
            // Map options
            const mapOptions = {
                zoom: zoom,
                mapTypeId: mapType,
                center: defaultCenter,
                zoomControl: enableZoom,
                scrollwheel: enableScroll,
                fullscreenControl: enableFullscreen,
                streetViewControl: enableStreetView,
                mapTypeControl: enableMapType
            };
            
            // Check if we have markers
            let hasMarkers = false;
            let markerElements = [];
            
            if (markersContainer) {
                markerElements = markersContainer.querySelectorAll('.digiblocks-google-map-marker');
                hasMarkers = markerElements.length > 0;
                console.log("Marker count:", markerElements.length);
            }
            
            // Add Map ID if provided
            if (mapId) {
                mapOptions.mapId = mapId;
                console.log("Applied Map ID:", mapId);
            }
            
            // Only apply map styles if we don't have a Map ID (they can't be used together)
            if (!mapId && mapStyle && mapStyle !== 'default') {
                if (mapStyle === 'custom' && customMapStyle) {
                    try {
                        const customStyleObj = JSON.parse(customMapStyle);
                        mapOptions.styles = customStyleObj;
                    } catch (error) {
                        console.error('Invalid map style JSON:', error);
                    }
                } else {
                    // Add predefined styles
                    switch (mapStyle) {
                        case 'silver':
                            mapOptions.styles = [
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
                            ];
                            break;
                        case 'retro':
                            mapOptions.styles = [
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
                            ];
                            break;
                        case 'dark':
                            mapOptions.styles = [
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
                            ];
                            break;
                        case 'night':
                            mapOptions.styles = [
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
                            ];
                            break;
                        case 'aubergine':
                            mapOptions.styles = [
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
                            ];
                            break;
                    }
                }
            }
            
            // Create map
            const map = new google.maps.Map(mapContainer, mapOptions);
            
            // Process markers if we have any
            if (hasMarkers) {
                console.log("Processing markers - Map ID:", mapId);
                
                // Array to collect all markers
                const markers = [];
                
                // Process markers with appropriate type based on Map ID availability
                if (mapId) {
                    try {
                        // Load the marker library
                        await google.maps.importLibrary("marker");
                        
                        // Create map markers with Advanced Marker API
                        for (let i = 0; i < markerElements.length; i++) {
                            const markerElement = markerElements[i];
                            const lat = parseFloat(markerElement.getAttribute('data-lat'));
                            const lng = parseFloat(markerElement.getAttribute('data-lng'));
                            const title = markerElement.getAttribute('data-title') || '';
                            const description = markerElement.getAttribute('data-description') || '';
                            
                            console.log("Processing marker with lat/lng:", lat, lng);
                            
                            if (!isNaN(lat) && !isNaN(lng)) {
                                const position = { lat: lat, lng: lng };
                                
                                // Create the advanced marker
                                const advancedMarker = new google.maps.marker.AdvancedMarkerElement({
                                    map: map,
                                    position: position,
                                    title: title
                                });
                                
                                markers.push(advancedMarker);
                                
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
                                    if (markerElements.length === 1) {
                                        infoWindow.open({
                                            anchor: advancedMarker,
                                            map: map
                                        });
                                    }
                                }
                            } else {
                                console.error("Invalid marker coordinates:", lat, lng);
                            }
                        }
                    } catch (error) {
                        console.error('Error creating advanced markers, falling back to basic markers:', error);
                        createBasicMarkers();
                    }
                } else {
                    // No Map ID, use basic markers
                    console.log("No Map ID available, using basic markers");
                    createBasicMarkers();
                }
                
                // Helper function to create basic markers
                function createBasicMarkers() {
                    for (let i = 0; i < markerElements.length; i++) {
                        const markerElement = markerElements[i];
                        const lat = parseFloat(markerElement.getAttribute('data-lat'));
                        const lng = parseFloat(markerElement.getAttribute('data-lng'));
                        const title = markerElement.getAttribute('data-title') || '';
                        const description = markerElement.getAttribute('data-description') || '';
                        
                        if (!isNaN(lat) && !isNaN(lng)) {
                            const position = { lat: lat, lng: lng };
                            
                            // Create a basic marker
                            const basicMarker = new google.maps.Marker({
                                map: map,
                                position: position,
                                title: title
                            });
                            
                            markers.push(basicMarker);
                            
                            // If there's a description, create an info window
                            if (description) {
                                const infoContent = document.createElement('div');
                                infoContent.className = 'digiblocks-map-info-content';
                                infoContent.style.cssText = 'min-width: 200px; max-width: 300px; padding: 10px; background-color: white; border-radius: 8px; box-shadow: 0 2px 7px 1px rgba(0,0,0,0.3);';
                                
                                if (title) {
                                    const titleElement = document.createElement('div');
                                    titleElement.className = 'digiblocks-map-info-title';
                                    titleElement.style.cssText = 'font-weight: bold; margin-bottom: 5px; font-size: 16px;';
                                    titleElement.textContent = title;
                                    infoContent.appendChild(titleElement);
                                }
                                
                                const descElement = document.createElement('div');
                                descElement.className = 'digiblocks-map-info-description';
                                descElement.style.cssText = 'font-size: 14px;';
                                descElement.innerHTML = description;
                                infoContent.appendChild(descElement);
                                
                                const infoWindow = new google.maps.InfoWindow({
                                    content: infoContent
                                });
                                
                                basicMarker.addListener('click', function() {
                                    infoWindow.open({
                                        anchor: basicMarker,
                                        map: map
                                    });
                                });
                                
                                if (markerElements.length === 1) {
                                    infoWindow.open({
                                        anchor: basicMarker,
                                        map: map
                                    });
                                }
                            }
                        } else {
                            console.error("Invalid marker coordinates:", lat, lng);
                        }
                    }
                }
                
                // Center map on first marker if no address
                if (markers.length > 0 && !addressElement) {
                    if (typeof markers[0].position === 'function') {
                        map.setCenter(markers[0].position());
                    } else {
                        map.setCenter(markers[0].position);
                    }
                }
            }
            
            // If address is provided, center map on it
            if (addressElement) {
                const address = addressElement.getAttribute('data-address');
                
                if (address) {
                    geocoder.geocode({ address: address }, (results, status) => {
                        if (status === 'OK' && results && results.length > 0) {
                            const location = results[0].geometry.location;
                            map.setCenter(location);
                            
                            // Add marker at address if no markers exist
                            if (!hasMarkers && mapId) {
                                try {
                                    if (google.maps.marker && google.maps.marker.AdvancedMarkerElement) {
                                        new google.maps.marker.AdvancedMarkerElement({
                                            map: map,
                                            position: location,
                                            title: address
                                        });
                                    }
                                } catch (error) {
                                    console.error('Error creating marker at address:', error);
                                    
                                    // Fallback to basic marker if advanced marker fails
                                    new google.maps.Marker({
                                        map: map,
                                        position: location,
                                        title: address
                                    });
                                }
                            } else if (!hasMarkers) {
                                // Use basic marker if no Map ID
                                new google.maps.Marker({
                                    map: map,
                                    position: location,
                                    title: address
                                });
                            }
                        }
                    });
                }
            }
        });
    }
})();
<?php
$digiblocks_js_output = ob_get_clean();