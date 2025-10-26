(() => {
  // blocks/google-map/edit.js
  var { __ } = window.wp.i18n;
  var {
    useBlockProps,
    InspectorControls,
    PanelColorSettings
  } = window.wp.blockEditor;
  var {
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
    __experimentalNumberControl: NumberControl
  } = window.wp.components;
  var { useState, useEffect, useRef } = window.wp.element;
  var { useBlockId, getDimensionCSS, animations, animationPreview } = digi.utils;
  var { tabIcons } = digi.icons;
  var {
    ResponsiveControl,
    ResponsiveRangeControl,
    DimensionControl,
    CustomTabPanel,
    BoxShadowControl,
    TabPanelBody,
    TransformControl
  } = digi.components;
  var GoogleMapEdit = ({ attributes, setAttributes, clientId }) => {
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
      transformHover
    } = attributes;
    useBlockId(id, clientId, setAttributes);
    const [localActiveDevice, setLocalActiveDevice] = useState(window.digi.responsiveState.activeDevice);
    const [isLoading, setIsLoading] = useState(false);
    const [geocodeError, setGeocodeError] = useState(null);
    const [mapLoaded, setMapLoaded] = useState(false);
    const [mapInstance, setMapInstance] = useState(null);
    const [markerInstances, setMarkerInstances] = useState([]);
    const mapContainerRef = useRef(null);
    const geocoder = useRef(null);
    const [activeTab, setActiveTab] = useState(() => {
      if (window.digi.uiState) {
        const savedTab = window.digi.uiState.getActiveTab(clientId);
        if (savedTab)
          return savedTab;
      }
      return "options";
    });
    useEffect(() => {
      const unsubscribe = window.digi.responsiveState.subscribe((device) => {
        setLocalActiveDevice(device);
      });
      return unsubscribe;
    }, []);
    useEffect(() => {
      if (!markers) {
        setAttributes({ markers: [] });
      }
    }, [setAttributes]);
    useEffect(() => {
      if (!mapLoaded && typeof google === "undefined" && !window.googleMapsLoading) {
        if (!digiBlocksData.googleMapsApiKey) {
          setGeocodeError(__("Google Maps API key not found. Please add it in the DigiBlocks settings.", "digiblocks"));
          return;
        }
        window.googleMapsLoading = true;
        window.digiblocksGoogleMapsCallbacks = window.digiblocksGoogleMapsCallbacks || [];
        const ourCallback = () => {
          setMapLoaded(true);
          geocoder.current = new google.maps.Geocoder();
        };
        window.digiblocksGoogleMapsCallbacks.push(ourCallback);
        if (typeof window.digiblocksGoogleMapsCallback !== "function") {
          window.digiblocksGoogleMapsCallback = () => {
            window.googleMapsInitialized = true;
            window.googleMapsLoading = false;
            window.digiblocksGoogleMapsCallbacks.forEach((callback) => {
              if (typeof callback === "function") {
                callback();
              }
            });
          };
        }
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=${digiBlocksData.googleMapsApiKey}&callback=digiblocksGoogleMapsCallback&loading=async`;
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
        return () => {
          const index = window.digiblocksGoogleMapsCallbacks.indexOf(ourCallback);
          if (index > -1) {
            window.digiblocksGoogleMapsCallbacks.splice(index, 1);
          }
        };
      } else if (!mapLoaded && typeof google !== "undefined") {
        setMapLoaded(true);
        geocoder.current = new google.maps.Geocoder();
      } else if (!mapLoaded && window.googleMapsLoading) {
        const ourCallback = () => {
          setMapLoaded(true);
          geocoder.current = new google.maps.Geocoder();
        };
        window.digiblocksGoogleMapsCallbacks = window.digiblocksGoogleMapsCallbacks || [];
        window.digiblocksGoogleMapsCallbacks.push(ourCallback);
        return () => {
          const index = window.digiblocksGoogleMapsCallbacks.indexOf(ourCallback);
          if (index > -1) {
            window.digiblocksGoogleMapsCallbacks.splice(index, 1);
          }
        };
      }
    }, [mapLoaded]);
    useEffect(() => {
      if (mapLoaded && mapContainerRef.current && !mapInstance) {
        const center = { lat: 40.7128, lng: -74.006 };
        const mapOptions = {
          center,
          zoom: zoom || 10,
          mapTypeId: mapType || "roadmap",
          zoomControl: enableZoom,
          scrollwheel: enableScroll,
          fullscreenControl: enableFullscreenControl,
          streetViewControl: enableStreetViewControl,
          mapTypeControl: enableMapTypeControl
        };
        const hasMarkers = markers && markers.length > 0;
        if (hasMarkers && digiBlocksData.googleMapsMapId) {
          mapOptions.mapId = digiBlocksData.googleMapsMapId;
        } else if (mapStyle && mapStyle !== "default") {
          if (mapStyle === "custom" && customMapStyle) {
            try {
              const customStyleObj = JSON.parse(customMapStyle);
              mapOptions.styles = customStyleObj;
            } catch (error) {
              console.error("Invalid map style JSON:", error);
            }
          } else if (predefinedMapStyles[mapStyle]) {
            mapOptions.styles = predefinedMapStyles[mapStyle];
          }
        }
        const map = new google.maps.Map(mapContainerRef.current, mapOptions);
        setMapInstance(map);
        if (!geocoder.current) {
          geocoder.current = new google.maps.Geocoder();
        }
        if (address) {
          geocodeAddress(address, map);
        }
        if (hasMarkers) {
          addMarkers(markers, map);
        }
      }
    }, [mapLoaded, mapContainerRef, mapInstance, zoom, mapType, mapStyle, customMapStyle, address, markers, enableZoom, enableScroll, enableFullscreenControl, enableStreetViewControl, enableMapTypeControl]);
    useEffect(() => {
      if (mapInstance) {
        mapInstance.setZoom(zoom);
        mapInstance.setMapTypeId(mapType);
        if (mapStyle && mapStyle !== "default") {
          if (mapStyle === "custom" && customMapStyle) {
            try {
              const customStyleObj = JSON.parse(customMapStyle);
              mapInstance.setOptions({ styles: customStyleObj });
            } catch (error) {
              console.error("Invalid map style JSON:", error);
            }
          } else if (predefinedMapStyles[mapStyle]) {
            mapInstance.setOptions({ styles: predefinedMapStyles[mapStyle] });
          }
        } else {
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
    const geocodeAddress = (address2, map, markerIndex = -1) => {
      if (!geocoder.current)
        return;
      setIsLoading(true);
      setGeocodeError(null);
      geocoder.current.geocode({ address: address2 }, (results, status) => {
        setIsLoading(false);
        if (status === "OK" && results && results.length > 0) {
          const location = results[0].geometry.location;
          if (markerIndex >= 0) {
            const updatedMarkers = [...markers];
            updatedMarkers[markerIndex] = {
              ...updatedMarkers[markerIndex],
              latitude: location.lat(),
              longitude: location.lng()
            };
            setAttributes({ markers: updatedMarkers });
            if (mapInstance) {
              addMarkers(updatedMarkers, mapInstance);
            }
          } else {
            map.setCenter(location);
            if (markers && markers.length > 0) {
              const updatedMarkers = [...markers];
              updatedMarkers[0] = {
                ...updatedMarkers[0],
                address: address2,
                latitude: location.lat(),
                longitude: location.lng()
              };
              setAttributes({ markers: updatedMarkers });
              if (mapInstance) {
                addMarkers(updatedMarkers, mapInstance);
              }
            }
          }
        } else {
          setGeocodeError(__("Could not find address. Please try a different one or use the map to position your marker.", "digiblocks"));
        }
      });
    };
    const addNewMarker = () => {
      const newMarkers = [...markers || []];
      const markerId = `marker-${Date.now()}`;
      const center = mapInstance ? mapInstance.getCenter() : { lat: 40.7128, lng: -74.006 };
      newMarkers.push({
        id: markerId,
        address: "",
        latitude: typeof center.lat === "function" ? center.lat() : center.lat,
        longitude: typeof center.lng === "function" ? center.lng() : center.lng,
        title: ""
      });
      setAttributes({ markers: newMarkers });
      if (newMarkers.length === 1 && mapInstance && digiBlocksData.googleMapsMapId) {
        const currentCenter = mapInstance.getCenter();
        const currentZoom = mapInstance.getZoom();
        const mapOptions = {
          center: currentCenter,
          zoom: currentZoom,
          mapTypeId: mapInstance.getMapTypeId(),
          zoomControl: enableZoom,
          scrollwheel: enableScroll,
          fullscreenControl: enableFullscreenControl,
          streetViewControl: enableStreetViewControl,
          mapTypeControl: enableMapTypeControl,
          mapId: digiBlocksData.googleMapsMapId
          // Add Map ID
        };
        if (markerInstances.length > 0) {
          markerInstances.forEach((marker) => marker.map = null);
          setMarkerInstances([]);
        }
        const newMap = new google.maps.Map(mapContainerRef.current, mapOptions);
        setMapInstance(newMap);
        setTimeout(() => {
          addMarkers(newMarkers, newMap);
        }, 100);
      } else if (mapInstance) {
        addMarkers(newMarkers, mapInstance);
      }
    };
    const updateMarker = (index, field, value) => {
      const updatedMarkers = [...markers];
      updatedMarkers[index] = {
        ...updatedMarkers[index],
        [field]: value
      };
      setAttributes({ markers: updatedMarkers });
      if (field === "address" && value && geocoder.current && mapInstance) {
        geocodeAddress(value, mapInstance);
      }
    };
    const removeMarker = (index) => {
      const updatedMarkers = [...markers];
      updatedMarkers.splice(index, 1);
      setAttributes({ markers: updatedMarkers });
      if (updatedMarkers.length === 0 && mapInstance) {
        mapInstance.mapId = null;
        if (mapStyle && mapStyle !== "default") {
          if (mapStyle === "custom" && customMapStyle) {
            try {
              const customStyleObj = JSON.parse(customMapStyle);
              mapInstance.setOptions({ styles: customStyleObj });
            } catch (error) {
              console.error("Invalid map style JSON:", error);
            }
          } else if (predefinedMapStyles[mapStyle]) {
            mapInstance.setOptions({ styles: predefinedMapStyles[mapStyle] });
          }
        }
      }
    };
    const applyMapStyle = (map, style, customStyle) => {
      if (!map)
        return;
      if (style && style !== "default") {
        if (style === "custom" && customStyle) {
          try {
            const customStyleObj = JSON.parse(customStyle);
            map.setOptions({ styles: customStyleObj });
          } catch (error) {
            console.error("Invalid map style JSON:", error);
          }
        } else if (predefinedMapStyles[style]) {
          map.setOptions({ styles: predefinedMapStyles[style] });
        }
      } else {
        map.setOptions({ styles: [] });
      }
    };
    const addMarkers = async (markers2, map) => {
      if (!markers2 || markers2.length === 0) {
        return;
      }
      if (markerInstances.length > 0) {
        markerInstances.forEach((marker) => marker.map = null);
        setMarkerInstances([]);
      }
      try {
        if (!google.maps.marker) {
          await google.maps.importLibrary("marker");
        }
        const newMarkerInstances = markers2.map((marker) => {
          if (!marker.latitude || !marker.longitude)
            return null;
          const position2 = { lat: marker.latitude, lng: marker.longitude };
          const title = marker.title || "";
          const description = marker.description || "";
          const advancedMarker = new google.maps.marker.AdvancedMarkerElement({
            map,
            position: position2,
            title
          });
          if (description) {
            const infoContent = document.createElement("div");
            infoContent.className = "digiblocks-map-info-content";
            infoContent.style.cssText = "min-width: 200px; max-width: 300px; padding: 10px; background-color: white; border-radius: 8px; box-shadow: 0 2px 7px 1px rgba(0,0,0,0.3);";
            if (title) {
              const titleElement = document.createElement("div");
              titleElement.className = "digiblocks-map-info-title";
              titleElement.style.cssText = "font-weight: bold; margin-bottom: 5px; font-size: 16px;";
              titleElement.textContent = title;
              infoContent.appendChild(titleElement);
            }
            const descElement = document.createElement("div");
            descElement.className = "digiblocks-map-info-description";
            descElement.style.cssText = "font-size: 14px;";
            descElement.innerHTML = description;
            infoContent.appendChild(descElement);
            const infoWindow = new google.maps.InfoWindow({
              content: infoContent
            });
            google.maps.event.addListener(advancedMarker, "click", function() {
              infoWindow.open({
                anchor: advancedMarker,
                map
              });
            });
            if (markers2.length === 1) {
              infoWindow.open({
                anchor: advancedMarker,
                map
              });
            }
          }
          return advancedMarker;
        }).filter(Boolean);
        setMarkerInstances(newMarkerInstances);
      } catch (error) {
        console.error("Error creating advanced markers:", error);
      }
    };
    const previewTimeoutRef = useRef(null);
    useEffect(() => {
      if (animation && animation !== "none") {
        const timeoutId = setTimeout(() => {
          animationPreview(id, animation, animations, previewTimeoutRef, animationDuration, animationDelay);
        }, 100);
        return () => clearTimeout(timeoutId);
      }
    }, [animation]);
    const handlePreviewClick = () => {
      animationPreview(id, animation, animations, previewTimeoutRef, animationDuration, animationDelay);
    };
    const borderStyleOptions = [
      { label: __("None", "digiblocks"), value: "none" },
      { label: __("Solid", "digiblocks"), value: "solid" },
      { label: __("Dotted", "digiblocks"), value: "dotted" },
      { label: __("Dashed", "digiblocks"), value: "dashed" },
      { label: __("Double", "digiblocks"), value: "double" },
      { label: __("Groove", "digiblocks"), value: "groove" },
      { label: __("Ridge", "digiblocks"), value: "ridge" },
      { label: __("Inset", "digiblocks"), value: "inset" },
      { label: __("Outset", "digiblocks"), value: "outset" }
    ];
    const mapTypeOptions = [
      { label: __("Roadmap", "digiblocks"), value: "roadmap" },
      { label: __("Satellite", "digiblocks"), value: "satellite" },
      { label: __("Hybrid", "digiblocks"), value: "hybrid" },
      { label: __("Terrain", "digiblocks"), value: "terrain" }
    ];
    const mapStyleOptions = [
      { label: __("Default", "digiblocks"), value: "default" },
      { label: __("Silver", "digiblocks"), value: "silver" },
      { label: __("Retro", "digiblocks"), value: "retro" },
      { label: __("Dark", "digiblocks"), value: "dark" },
      { label: __("Night", "digiblocks"), value: "night" },
      { label: __("Aubergine", "digiblocks"), value: "aubergine" },
      { label: __("Custom", "digiblocks"), value: "custom" }
    ];
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
    const animationOptions = [
      { label: __("None", "digiblocks"), value: "none" },
      ...Object.keys(animations).map((animation2) => ({
        label: animation2.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
        value: animation2
      }))
    ];
    const tabList = [
      {
        name: "options",
        title: __("Options", "digiblocks"),
        icon: tabIcons.optionsIcon
      },
      {
        name: "style",
        title: __("Style", "digiblocks"),
        icon: tabIcons.styleIcon
      },
      {
        name: "advanced",
        title: __("Advanced", "digiblocks"),
        icon: tabIcons.advancedIcon
      }
    ];
    const getMaxValue = (unit) => {
      switch (unit) {
        case "%":
          return 100;
        case "em":
        case "rem":
          return 50;
        case "vw":
        case "vh":
          return 100;
        default:
          return 2e3;
      }
    };
    const getStepValue = (unit) => {
      switch (unit) {
        case "%":
        case "vw":
        case "vh":
          return 1;
        case "em":
        case "rem":
          return 0.1;
        default:
          return 1;
      }
    };
    const getTransformOrigin = (transform2, device) => {
      const xMap = { left: "0%", center: "50%", right: "100%" };
      const yMap = { top: "0%", center: "50%", bottom: "100%" };
      const x = xMap[transform2.xAnchor?.[device] || "center"];
      const y = yMap[transform2.yAnchor?.[device] || "center"];
      return `${x} ${y}`;
    };
    const getTransformCSS = (transform2, device) => {
      if (!transform2)
        return "";
      const transforms = [];
      const getValue = (prop) => {
        if (!prop)
          return "";
        let val = prop[device];
        const isEmpty = (v) => {
          if (v === "" || v === void 0 || v === null)
            return true;
          if (typeof v === "object" && v !== null) {
            return v.value === "" || v.value === void 0 || v.value === null;
          }
          return false;
        };
        if (device === "tablet" && isEmpty(val)) {
          val = prop.desktop;
        }
        if (device === "mobile" && isEmpty(val)) {
          val = prop.tablet;
          if (isEmpty(val)) {
            val = prop.desktop;
          }
        }
        return typeof val === "object" && val !== null ? val.value !== void 0 ? val.value : "" : val;
      };
      const rotateValue = getValue(transform2.rotate);
      if (rotateValue !== "" && rotateValue !== void 0 && rotateValue !== null) {
        if (transform2.rotate3d) {
          const perspectiveValue = getValue(transform2.perspective);
          if (perspectiveValue !== "" && perspectiveValue !== void 0 && perspectiveValue !== null) {
            transforms.push(`perspective(${perspectiveValue}px)`);
          }
        }
        transforms.push(`rotate(${rotateValue}deg)`);
      }
      if (transform2.rotate3d) {
        const rotateXValue = getValue(transform2.rotateX);
        if (rotateXValue !== "" && rotateXValue !== void 0 && rotateXValue !== null) {
          transforms.push(`rotateX(${rotateXValue}deg)`);
        }
        const rotateYValue = getValue(transform2.rotateY);
        if (rotateYValue !== "" && rotateYValue !== void 0 && rotateYValue !== null) {
          transforms.push(`rotateY(${rotateYValue}deg)`);
        }
      }
      const offsetXValue = transform2.offsetX?.[device]?.value;
      const offsetYValue = transform2.offsetY?.[device]?.value;
      const hasOffsetX = offsetXValue !== "" && offsetXValue !== void 0 && offsetXValue !== null;
      const hasOffsetY = offsetYValue !== "" && offsetYValue !== void 0 && offsetYValue !== null;
      if (hasOffsetX || hasOffsetY) {
        const x = hasOffsetX ? `${offsetXValue}${transform2.offsetX[device].unit || "px"}` : "0";
        const y = hasOffsetY ? `${offsetYValue}${transform2.offsetY[device].unit || "px"}` : "0";
        transforms.push(`translate(${x}, ${y})`);
      }
      if (transform2.keepProportions) {
        const scaleValue = getValue(transform2.scale);
        if (scaleValue !== "" && scaleValue !== void 0 && scaleValue !== null && scaleValue != 1) {
          transforms.push(`scale(${scaleValue})`);
        }
      } else {
        const scaleXValue = getValue(transform2.scaleX);
        const scaleYValue = getValue(transform2.scaleY);
        const scaleX = scaleXValue !== "" && scaleXValue !== void 0 && scaleXValue !== null ? scaleXValue : 1;
        const scaleY = scaleYValue !== "" && scaleYValue !== void 0 && scaleYValue !== null ? scaleYValue : 1;
        if (scaleX != 1 || scaleY != 1) {
          transforms.push(`scale(${scaleX}, ${scaleY})`);
        }
      }
      const skewXValue = getValue(transform2.skewX);
      if (skewXValue !== "" && skewXValue !== void 0 && skewXValue !== null) {
        transforms.push(`skewX(${skewXValue}deg)`);
      }
      const skewYValue = getValue(transform2.skewY);
      if (skewYValue !== "" && skewYValue !== void 0 && skewYValue !== null) {
        transforms.push(`skewY(${skewYValue}deg)`);
      }
      if (transform2.flipHorizontal) {
        transforms.push("scaleX(-1)");
      }
      if (transform2.flipVertical) {
        transforms.push("scaleY(-1)");
      }
      return transforms.length > 0 ? transforms.join(" ") : "";
    };
    const generateCSS = () => {
      const activeDevice = window.digi.responsiveState.activeDevice;
      const currentHeight = mapHeight && mapHeight[activeDevice] ? mapHeight[activeDevice] : activeDevice === "desktop" ? 400 : activeDevice === "tablet" ? 350 : 300;
      let borderCSS = "";
      if (borderStyle && borderStyle !== "none") {
        borderCSS = `
                border-style: ${borderStyle};
                border-color: ${borderColor || "#e0e0e0"};
				${getDimensionCSS(borderWidth, "border-width", activeDevice)}
				${getDimensionCSS(borderRadius, "border-radius", activeDevice)}
            `;
      }
      let boxShadowCSS = "";
      if (boxShadow && boxShadow.enable) {
        const inset = boxShadow.position === "inset" ? "inset " : "";
        boxShadowCSS = `box-shadow: ${inset}${boxShadow.horizontal}px ${boxShadow.vertical}px ${boxShadow.blur}px ${boxShadow.spread}px ${boxShadow.color};`;
      }
      let boxShadowHoverCSS = "";
      if (boxShadowHover && boxShadowHover.enable) {
        const inset = boxShadowHover.position === "inset" ? "inset " : "";
        boxShadowHoverCSS = `box-shadow: ${inset}${boxShadowHover.horizontal}px ${boxShadowHover.vertical}px ${boxShadowHover.blur}px ${boxShadowHover.spread}px ${boxShadowHover.color};`;
      }
      let positionCSS = "";
      if (position && position !== "default") {
        positionCSS += `position: ${position} !important;`;
        const horizontalValue = horizontalOffset?.[activeDevice]?.value;
        const horizontalUnit = horizontalOffset?.[activeDevice]?.unit || "px";
        if (horizontalValue !== "" && horizontalValue !== void 0) {
          if (horizontalOrientation === "left") {
            positionCSS += `left: ${horizontalValue}${horizontalUnit};`;
          } else {
            positionCSS += `right: ${horizontalValue}${horizontalUnit};`;
          }
        }
        const verticalValue = verticalOffset?.[activeDevice]?.value;
        const verticalUnit = verticalOffset?.[activeDevice]?.unit || "px";
        if (verticalValue !== "" && verticalValue !== void 0) {
          if (verticalOrientation === "top") {
            positionCSS += `top: ${verticalValue}${verticalUnit};`;
          } else {
            positionCSS += `bottom: ${verticalValue}${verticalUnit};`;
          }
        }
      }
      if (zIndex !== "" && zIndex !== void 0 && zIndex !== null) {
        positionCSS += `z-index: ${zIndex};`;
      }
      let transformCSS = "";
      const transformValue = getTransformCSS(transform, activeDevice);
      if (transformValue) {
        transformCSS += `transform: ${transformValue};`;
        transformCSS += `transform-origin: ${getTransformOrigin(transform, activeDevice)};`;
      }
      const transformHoverValue = getTransformCSS(transformHover, activeDevice);
      if (transformHoverValue && transformHover && transformHover.transitionDuration !== "" && transformHover.transitionDuration !== void 0 && transformHover.transitionDuration !== null) {
        const duration = transformHover.transitionDuration;
        transformCSS += `transition: transform ${duration}ms ease;`;
      }
      let transformHoverCSS = "";
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
			` : ""}

			${visibility.tablet ? `
				@media (min-width: 768px) and (max-width: 991px) {
					.${id} {
						opacity: 0.5 !important;
					}
				}
			` : ""}

			${visibility.mobile ? `
				@media (max-width: 767px) {
					.${id} {
						opacity: 0.5 !important;
					}
				}
			` : ""}
        `;
    };
    const renderMarkerSettings = () => {
      const markerCount = Array.isArray(markers) ? markers.length : 0;
      const hasMapId = !!digiBlocksData.googleMapsMapId;
      if (markerCount > 0 && !hasMapId) {
        return /* @__PURE__ */ wp.element.createElement("div", { className: "components-notice is-warning", style: { margin: "0 0 16px 0" } }, /* @__PURE__ */ wp.element.createElement("div", { className: "components-notice__content" }, /* @__PURE__ */ wp.element.createElement("p", null, __("A Map ID is required to use markers with the Google Maps block.", "digiblocks")), /* @__PURE__ */ wp.element.createElement("p", null, __("Please configure a Map ID in the DigiBlocks settings before adding markers.", "digiblocks")), /* @__PURE__ */ wp.element.createElement(
          Button,
          {
            isPrimary: true,
            href: `${window.ajaxurl ? window.ajaxurl.replace("admin-ajax.php", "") : "/wp-admin/"}admin.php?page=digiblocks-settings`,
            target: "_blank",
            style: { marginTop: "10px" }
          },
          __("Go to Settings", "digiblocks")
        )));
      }
      return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, Array.isArray(markers) && markers.length > 0 ? /* @__PURE__ */ wp.element.createElement("div", null, markers.map((marker, index) => /* @__PURE__ */ wp.element.createElement(
        "div",
        {
          key: marker.id || `marker-${index}`,
          className: "digiblocks-google-map-marker",
          style: {
            marginBottom: "16px",
            padding: "16px",
            backgroundColor: "#f0f0f0",
            borderRadius: "4px"
          }
        },
        /* @__PURE__ */ wp.element.createElement("h3", { style: { margin: "0 0 10px 0" } }, __("Marker", "digiblocks"), " #", index + 1),
        /* @__PURE__ */ wp.element.createElement(
          TextControl,
          {
            label: __("Title", "digiblocks"),
            value: marker.title || "",
            onChange: (value) => updateMarker(index, "title", value),
            placeholder: __("Enter marker title", "digiblocks"),
            __next40pxDefaultSize: true,
            __nextHasNoMarginBottom: true
          }
        ),
        /* @__PURE__ */ wp.element.createElement(
          TextareaControl,
          {
            label: __("Description", "digiblocks"),
            value: marker.description || "",
            onChange: (value) => updateMarker(index, "description", value),
            placeholder: __("Enter marker description (will appear above marker)", "digiblocks"),
            __next40pxDefaultSize: true,
            __nextHasNoMarginBottom: true
          }
        ),
        /* @__PURE__ */ wp.element.createElement(
          TextControl,
          {
            label: __("Address", "digiblocks"),
            value: marker.address || "",
            onChange: (value) => {
              const updatedMarkers = [...markers];
              updatedMarkers[index] = {
                ...updatedMarkers[index],
                address: value
              };
              setAttributes({ markers: updatedMarkers });
            },
            onBlur: () => {
              if (markers[index]?.address && geocoder.current && mapInstance) {
                geocodeAddress(markers[index].address, mapInstance, index);
              }
            },
            placeholder: __("Enter marker address", "digiblocks"),
            __next40pxDefaultSize: true,
            __nextHasNoMarginBottom: true
          }
        ),
        /* @__PURE__ */ wp.element.createElement("div", { style: { marginTop: "10px", display: "flex", justifyContent: "flex-end" } }, /* @__PURE__ */ wp.element.createElement(
          Button,
          {
            isDestructive: true,
            onClick: () => removeMarker(index)
          },
          __("Remove Marker", "digiblocks")
        ))
      )), /* @__PURE__ */ wp.element.createElement(
        Button,
        {
          isPrimary: true,
          onClick: addNewMarker,
          style: { marginTop: "10px", width: "100%", justifyContent: "center" }
        },
        __("Add Marker", "digiblocks")
      )) : /* @__PURE__ */ wp.element.createElement("div", null, /* @__PURE__ */ wp.element.createElement("p", null, __("No markers added yet. Add your first marker!", "digiblocks")), /* @__PURE__ */ wp.element.createElement(
        Button,
        {
          isPrimary: true,
          onClick: addNewMarker,
          style: { width: "100%", justifyContent: "center" }
        },
        __("Add Marker", "digiblocks")
      )));
    };
    const renderTabContent = () => {
      switch (activeTab) {
        case "options":
          return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "options",
              name: "map-settings",
              title: __("Map Settings", "digiblocks"),
              initialOpen: true
            },
            /* @__PURE__ */ wp.element.createElement(
              TextControl,
              {
                label: __("Address", "digiblocks"),
                value: address || "",
                onChange: (value) => {
                  setAttributes({ address: value });
                  if (value && geocoder.current && mapInstance) {
                    geocodeAddress(value, mapInstance);
                  }
                },
                placeholder: __("Enter location address", "digiblocks"),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ),
            geocodeError && /* @__PURE__ */ wp.element.createElement("div", { className: "components-notice is-error", style: { margin: "0 0 16px 0" } }, /* @__PURE__ */ wp.element.createElement("div", { className: "components-notice__content" }, geocodeError)),
            /* @__PURE__ */ wp.element.createElement(
              SelectControl,
              {
                label: __("Map Type", "digiblocks"),
                value: mapType,
                options: mapTypeOptions,
                onChange: (value) => setAttributes({ mapType: value }),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ),
            (!markers || markers.length === 0) && /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
              SelectControl,
              {
                label: __("Map Style", "digiblocks"),
                value: mapStyle,
                options: mapStyleOptions,
                onChange: (value) => setAttributes({ mapStyle: value }),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ), mapStyle === "custom" && /* @__PURE__ */ wp.element.createElement(
              TextareaControl,
              {
                label: __("Custom Map Style JSON", "digiblocks"),
                help: __("Paste a valid Google Maps style JSON. You can create styles with the Google Maps Styling Wizard.", "digiblocks"),
                value: customMapStyle || "",
                onChange: (value) => setAttributes({ customMapStyle: value }),
                rows: 6,
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            )),
            markers && markers.length > 0 && /* @__PURE__ */ wp.element.createElement("div", { className: "components-notice is-info", style: { margin: "0 0 16px 0" } }, /* @__PURE__ */ wp.element.createElement("div", { className: "components-notice__content" }, __("Map Style options are not available when markers are present, as markers require a Map ID which overrides custom styling.", "digiblocks"))),
            /* @__PURE__ */ wp.element.createElement(
              RangeControl,
              {
                label: __("Zoom Level", "digiblocks"),
                value: zoom,
                onChange: (value) => setAttributes({ zoom: value }),
                min: 1,
                max: 20,
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            )
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "options",
              name: "marker-settings",
              title: __("Markers", "digiblocks"),
              initialOpen: false
            },
            renderMarkerSettings()
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "options",
              name: "map-controls",
              title: __("Map Controls", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              BaseControl,
              {
                id: `${id}-map-controls`,
                __nextHasNoMarginBottom: true
              },
              /* @__PURE__ */ wp.element.createElement(
                ToggleControl,
                {
                  label: __("Enable Zoom Control", "digiblocks"),
                  checked: enableZoom !== false,
                  onChange: (value) => setAttributes({ enableZoom: value }),
                  __nextHasNoMarginBottom: true
                }
              ),
              /* @__PURE__ */ wp.element.createElement(
                ToggleControl,
                {
                  label: __("Enable Mousewheel Zoom", "digiblocks"),
                  checked: enableScroll !== false,
                  onChange: (value) => setAttributes({ enableScroll: value }),
                  __nextHasNoMarginBottom: true
                }
              ),
              /* @__PURE__ */ wp.element.createElement(
                ToggleControl,
                {
                  label: __("Enable Fullscreen Control", "digiblocks"),
                  checked: enableFullscreenControl !== false,
                  onChange: (value) => setAttributes({ enableFullscreenControl: value }),
                  __nextHasNoMarginBottom: true
                }
              ),
              /* @__PURE__ */ wp.element.createElement(
                ToggleControl,
                {
                  label: __("Enable Street View Control", "digiblocks"),
                  checked: enableStreetViewControl !== false,
                  onChange: (value) => setAttributes({ enableStreetViewControl: value }),
                  __nextHasNoMarginBottom: true
                }
              ),
              /* @__PURE__ */ wp.element.createElement(
                ToggleControl,
                {
                  label: __("Enable Map Type Control", "digiblocks"),
                  checked: enableMapTypeControl !== false,
                  onChange: (value) => setAttributes({ enableMapTypeControl: value }),
                  __nextHasNoMarginBottom: true
                }
              )
            )
          ));
        case "style":
          return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "style",
              name: "map-dimensions",
              title: __("Map Size", "digiblocks"),
              initialOpen: true
            },
            /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl,
              {
                label: __("Map Height", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                RangeControl,
                {
                  value: mapHeight && mapHeight[localActiveDevice] ? mapHeight[localActiveDevice] : localActiveDevice === "desktop" ? 400 : localActiveDevice === "tablet" ? 350 : 300,
                  onChange: (value) => {
                    setAttributes({
                      mapHeight: {
                        ...mapHeight,
                        [localActiveDevice]: value
                      }
                    });
                  },
                  min: 150,
                  max: 800,
                  __next40pxDefaultSize: true,
                  __nextHasNoMarginBottom: true
                }
              )
            )
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "style",
              name: "map-border",
              title: __("Border", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              SelectControl,
              {
                label: __("Border Style", "digiblocks"),
                value: borderStyle || "none",
                options: borderStyleOptions,
                onChange: (value) => {
                  if (value !== "none" && (borderStyle === "none" || !borderStyle)) {
                    if (!borderWidth || Object.keys(borderWidth).length === 0) {
                      setAttributes({
                        borderWidth: {
                          desktop: { top: 1, right: 1, bottom: 1, left: 1, unit: "px" },
                          tablet: { top: 1, right: 1, bottom: 1, left: 1, unit: "px" },
                          mobile: { top: 1, right: 1, bottom: 1, left: 1, unit: "px" }
                        }
                      });
                    }
                    if (!borderRadius || Object.keys(borderRadius).length === 0) {
                      setAttributes({
                        borderRadius: {
                          desktop: { top: 0, right: 0, bottom: 0, left: 0, unit: "px" },
                          tablet: { top: 0, right: 0, bottom: 0, left: 0, unit: "px" },
                          mobile: { top: 0, right: 0, bottom: 0, left: 0, unit: "px" }
                        }
                      });
                    }
                  }
                  setAttributes({ borderStyle: value });
                },
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ),
            borderStyle && borderStyle !== "none" && /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
              PanelColorSettings,
              {
                title: __("Border Color", "digiblocks"),
                enableAlpha: true,
                colorSettings: [
                  {
                    value: borderColor,
                    onChange: (value) => setAttributes({ borderColor: value }),
                    label: __("Border Color", "digiblocks")
                  }
                ]
              }
            ), /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl,
              {
                label: __("Border Width", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                DimensionControl,
                {
                  values: borderWidth && borderWidth[localActiveDevice] ? borderWidth[localActiveDevice] : { top: 1, right: 1, bottom: 1, left: 1, unit: "px" },
                  onChange: (value) => setAttributes({
                    borderWidth: {
                      ...borderWidth,
                      [localActiveDevice]: value
                    }
                  })
                }
              )
            ), /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl,
              {
                label: __("Border Radius", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                DimensionControl,
                {
                  values: borderRadius && borderRadius[localActiveDevice] ? borderRadius[localActiveDevice] : { top: 0, right: 0, bottom: 0, left: 0, unit: "px" },
                  onChange: (value) => setAttributes({
                    borderRadius: {
                      ...borderRadius,
                      [localActiveDevice]: value
                    }
                  }),
                  units: [
                    { label: "px", value: "px" },
                    { label: "%", value: "%" }
                  ]
                }
              )
            ))
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "style",
              name: "box-shadow",
              title: __("Box Shadow", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              BoxShadowControl,
              {
                normalValue: boxShadow,
                hoverValue: boxShadowHover,
                onNormalChange: (value) => setAttributes({ boxShadow: value }),
                onHoverChange: (value) => setAttributes({ boxShadowHover: value })
              }
            )
          ));
        case "advanced":
          return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "advanced",
              name: "position",
              title: __("Position", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              SelectControl,
              {
                label: __("Position", "digiblocks"),
                value: position,
                options: [
                  { label: __("Default", "digiblocks"), value: "default" },
                  { label: __("Relative", "digiblocks"), value: "relative" },
                  { label: __("Absolute", "digiblocks"), value: "absolute" },
                  { label: __("Fixed", "digiblocks"), value: "fixed" }
                ],
                onChange: (value) => setAttributes({ position: value }),
                __nextHasNoMarginBottom: true
              }
            ),
            position !== "default" && /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
              ToggleGroupControl,
              {
                label: __("Horizontal Orientation", "digiblocks"),
                value: horizontalOrientation,
                isBlock: true,
                onChange: (value) => setAttributes({ horizontalOrientation: value }),
                __nextHasNoMarginBottom: true
              },
              /* @__PURE__ */ wp.element.createElement(
                ToggleGroupControlOption,
                {
                  value: "left",
                  label: __("Left", "digiblocks")
                }
              ),
              /* @__PURE__ */ wp.element.createElement(
                ToggleGroupControlOption,
                {
                  value: "right",
                  label: __("Right", "digiblocks")
                }
              )
            ), /* @__PURE__ */ wp.element.createElement(
              ResponsiveRangeControl,
              {
                label: __("Offset", "digiblocks"),
                value: horizontalOffset,
                onChange: (value) => setAttributes({ horizontalOffset: value }),
                units: [
                  { label: "px", value: "px" },
                  { label: "%", value: "%" },
                  { label: "em", value: "em" },
                  { label: "rem", value: "rem" },
                  { label: "vw", value: "vw" },
                  { label: "vh", value: "vh" }
                ],
                defaultUnit: "px",
                min: 0,
                max: getMaxValue(horizontalOffset?.[localActiveDevice]?.unit),
                step: getStepValue(horizontalOffset?.[localActiveDevice]?.unit)
              }
            ), /* @__PURE__ */ wp.element.createElement(
              ToggleGroupControl,
              {
                label: __("Vertical Orientation", "digiblocks"),
                value: verticalOrientation,
                isBlock: true,
                onChange: (value) => setAttributes({ verticalOrientation: value }),
                __nextHasNoMarginBottom: true
              },
              /* @__PURE__ */ wp.element.createElement(
                ToggleGroupControlOption,
                {
                  value: "top",
                  label: __("Top", "digiblocks")
                }
              ),
              /* @__PURE__ */ wp.element.createElement(
                ToggleGroupControlOption,
                {
                  value: "bottom",
                  label: __("Bottom", "digiblocks")
                }
              )
            ), /* @__PURE__ */ wp.element.createElement(
              ResponsiveRangeControl,
              {
                label: __("Offset", "digiblocks"),
                value: verticalOffset,
                onChange: (value) => setAttributes({ verticalOffset: value }),
                units: [
                  { label: "px", value: "px" },
                  { label: "%", value: "%" },
                  { label: "em", value: "em" },
                  { label: "rem", value: "rem" },
                  { label: "vw", value: "vw" },
                  { label: "vh", value: "vh" }
                ],
                defaultUnit: "px",
                min: 0,
                max: getMaxValue(verticalOffset?.[localActiveDevice]?.unit),
                step: getStepValue(verticalOffset?.[localActiveDevice]?.unit)
              }
            )),
            /* @__PURE__ */ wp.element.createElement(
              RangeControl,
              {
                label: __("Z-Index", "digiblocks"),
                value: zIndex,
                onChange: (value) => setAttributes({ zIndex: value }),
                min: -999,
                max: 9999,
                allowReset: true,
                __nextHasNoMarginBottom: true
              }
            )
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "advanced",
              name: "transform",
              title: __("Transform", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              TransformControl,
              {
                normalValue: transform,
                hoverValue: transformHover,
                onNormalChange: (value) => setAttributes({ transform: value }),
                onHoverChange: (value) => setAttributes({ transformHover: value })
              }
            )
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "advanced",
              name: "animation",
              title: __("Animation", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              SelectControl,
              {
                label: __("Animation Effect", "digiblocks"),
                value: animation,
                options: animationOptions,
                onChange: (value) => setAttributes({ animation: value }),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ),
            animation && animation !== "none" && /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
              SelectControl,
              {
                label: __("Animation Duration", "digiblocks"),
                value: animationDuration,
                options: [
                  { label: __("Slow", "digiblocks"), value: "slow" },
                  { label: __("Normal", "digiblocks"), value: "normal" },
                  { label: __("Fast", "digiblocks"), value: "fast" }
                ],
                onChange: (value) => setAttributes({ animationDuration: value }),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ), /* @__PURE__ */ wp.element.createElement(
              NumberControl,
              {
                label: __("Animation Delay (ms)", "digiblocks"),
                value: animationDelay || 0,
                onChange: (value) => setAttributes({ animationDelay: parseInt(value) || 0 }),
                min: 0,
                step: 100,
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            )),
            animation && animation !== "none" && /* @__PURE__ */ wp.element.createElement("div", { style: { marginTop: "10px" } }, /* @__PURE__ */ wp.element.createElement(
              Button,
              {
                variant: "secondary",
                isSecondary: true,
                onClick: handlePreviewClick,
                style: { width: "100%" }
              },
              __("Preview Animation", "digiblocks")
            ))
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "advanced",
              name: "visibility",
              title: __("Visibility", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control__help", style: {
              padding: "12px",
              backgroundColor: "#f0f6fc",
              border: "1px solid #c3ddfd",
              borderRadius: "4px",
              marginBottom: "16px"
            } }, /* @__PURE__ */ wp.element.createElement("strong", null, __("Editor Note:", "digiblocks")), /* @__PURE__ */ wp.element.createElement("br", null), __("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.", "digiblocks")),
            /* @__PURE__ */ wp.element.createElement(
              ToggleControl,
              {
                label: __("Hide on Desktop", "digiblocks"),
                checked: visibility.desktop,
                onChange: (value) => setAttributes({
                  visibility: {
                    ...visibility,
                    desktop: value
                  }
                }),
                __nextHasNoMarginBottom: true
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              ToggleControl,
              {
                label: __("Hide on Tablet", "digiblocks"),
                checked: visibility.tablet,
                onChange: (value) => setAttributes({
                  visibility: {
                    ...visibility,
                    tablet: value
                  }
                }),
                __nextHasNoMarginBottom: true
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              ToggleControl,
              {
                label: __("Hide on Mobile", "digiblocks"),
                checked: visibility.mobile,
                onChange: (value) => setAttributes({
                  visibility: {
                    ...visibility,
                    mobile: value
                  }
                }),
                __nextHasNoMarginBottom: true
              }
            )
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "advanced",
              name: "additional",
              title: __("Additional", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control html-anchor-control" }, /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control__field" }, /* @__PURE__ */ wp.element.createElement("label", { className: "components-base-control__label", htmlFor: "html-anchor" }, __("HTML anchor", "digiblocks")), /* @__PURE__ */ wp.element.createElement(
              "input",
              {
                className: "components-text-control__input",
                type: "text",
                id: "html-anchor",
                value: anchor || "",
                onChange: (e) => setAttributes({ anchor: e.target.value }),
                "aria-describedby": "html-anchor-help",
                autoCapitalize: "none",
                autoComplete: "off"
              }
            )), /* @__PURE__ */ wp.element.createElement("p", { id: "html-anchor-help", className: "components-base-control__help" }, __(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`, "digiblocks"), " ", /* @__PURE__ */ wp.element.createElement(
              "a",
              {
                className: "components-external-link",
                href: "https://wordpress.org/documentation/article/page-jumps/",
                target: "_blank",
                rel: "external noreferrer noopener"
              },
              /* @__PURE__ */ wp.element.createElement("span", { className: "components-external-link__contents" }, __("Learn more about anchors", "digiblocks")),
              /* @__PURE__ */ wp.element.createElement("span", { className: "components-external-link__icon", "aria-label": "(opens in a new tab)" }, "\u2197")
            ))),
            /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control" }, /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control__field" }, /* @__PURE__ */ wp.element.createElement("label", { className: "components-base-control__label", htmlFor: "additional-css-classes" }, __("Additional CSS class(es)", "digiblocks")), /* @__PURE__ */ wp.element.createElement(
              "input",
              {
                className: "components-text-control__input",
                type: "text",
                id: "additional-css-classes",
                value: customClasses || "",
                onChange: (e) => setAttributes({ customClasses: e.target.value }),
                "aria-describedby": "additional-css-classes-help",
                autoComplete: "off"
              }
            )), /* @__PURE__ */ wp.element.createElement("p", { id: "additional-css-classes-help", className: "components-base-control__help" }, __("Separate multiple classes with spaces.", "digiblocks")))
          ));
        default:
          return null;
      }
    };
    const blockProps = useBlockProps({
      className: `digiblocks-google-map ${id} ${animation !== "none" ? `animate-${animation}` : ""} ${customClasses || ""}`,
      id: anchor || null
      // Set the anchor as ID if provided
    });
    return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(InspectorControls, null, /* @__PURE__ */ wp.element.createElement(
      CustomTabPanel,
      {
        tabs: tabList,
        activeTab,
        onSelect: setActiveTab
      },
      renderTabContent()
    )), /* @__PURE__ */ wp.element.createElement("style", { dangerouslySetInnerHTML: { __html: generateCSS() } }), /* @__PURE__ */ wp.element.createElement("div", { ...blockProps }, !digiBlocksData.googleMapsApiKey ? /* @__PURE__ */ wp.element.createElement(
      Placeholder,
      {
        icon: "location-alt",
        label: __("Google Map", "digiblocks"),
        instructions: __("You need to add your Google Maps API key in the DigiBlocks settings to use this block.", "digiblocks")
      },
      /* @__PURE__ */ wp.element.createElement(
        Button,
        {
          isPrimary: true,
          href: `${window.ajaxurl ? window.ajaxurl.replace("admin-ajax.php", "") : "/wp-admin/"}admin.php?page=digiblocks-settings`,
          target: "_blank"
        },
        __("Go to Settings", "digiblocks")
      )
    ) : isLoading ? /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-google-map-loading", style: { display: "flex", alignItems: "center", justifyContent: "center", height: "100%" } }, /* @__PURE__ */ wp.element.createElement(Spinner, null), /* @__PURE__ */ wp.element.createElement("span", { style: { marginLeft: "10px" } }, __("Loading map...", "digiblocks"))) : /* @__PURE__ */ wp.element.createElement(
      "div",
      {
        ref: mapContainerRef,
        className: "digiblocks-google-map-container",
        style: { width: "100%", height: "100%" }
      }
    )));
  };
  var edit_default = GoogleMapEdit;

  // blocks/google-map/save.js
  var { useBlockProps: useBlockProps2 } = window.wp.blockEditor;
  var GoogleMapSave = ({ attributes }) => {
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
    const blockClasses = [
      "digiblocks-google-map",
      id,
      animation !== "none" ? `animate-${animation} digi-animate-hidden` : "",
      customClasses || ""
    ].filter(Boolean).join(" ");
    const blockProps = useBlockProps2.save({
      className: blockClasses,
      id: anchor || null,
      "data-map-zoom": zoom || 10,
      "data-map-type": mapType || "roadmap",
      "data-map-style": mapStyle || "default",
      "data-custom-map-style": customMapStyle || "",
      "data-map-id": mapId || "",
      "data-enable-zoom": enableZoom !== false ? "true" : "false",
      "data-enable-scroll": enableScroll !== false ? "true" : "false",
      "data-enable-fullscreen": enableFullscreenControl !== false ? "true" : "false",
      "data-enable-streetview": enableStreetViewControl !== false ? "true" : "false",
      "data-enable-maptype": enableMapTypeControl !== false ? "true" : "false"
    });
    if (animation && animation !== "none") {
      blockProps["data-animation-duration"] = animationDuration || "normal";
      blockProps["data-animation-delay"] = animationDelay || 0;
    }
    return /* @__PURE__ */ wp.element.createElement("div", { ...blockProps }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-google-map-container" }), markers && markers.length > 0 && /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-google-map-markers", style: { display: "none" } }, markers.map((marker) => /* @__PURE__ */ wp.element.createElement(
      "div",
      {
        key: marker.id,
        className: "digiblocks-google-map-marker",
        "data-lat": marker.latitude,
        "data-lng": marker.longitude,
        "data-title": marker.title || "",
        "data-description": marker.description || "",
        "data-address": marker.address || ""
      }
    ))), address && /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-google-map-address", style: { display: "none" }, "data-address": address }));
  };
  var save_default = GoogleMapSave;

  // blocks/google-map/index.js
  var { __: __2 } = window.wp.i18n;
  var { registerBlockType } = window.wp.blocks;
  registerBlockType("digiblocks/google-map", {
    apiVersion: 2,
    title: digiBlocksData.blocks["google-map"].title,
    category: "digiblocks",
    icon: {
      src: () => {
        const { viewbox, path } = digiBlocksData.blocks["google-map"].icon;
        return /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: `0 0 ${viewbox}`, className: "digiblocks-editor-icons" }, /* @__PURE__ */ wp.element.createElement("path", { d: path }));
      }
    },
    description: digiBlocksData.blocks["google-map"].description,
    keywords: [__2("map", "digiblocks"), __2("google", "digiblocks"), __2("location", "digiblocks"), __2("marker", "digiblocks")],
    supports: {
      html: false,
      className: false,
      customClassName: false,
      anchor: false
    },
    attributes: {
      id: {
        type: "string",
        default: ""
      },
      anchor: {
        type: "string",
        default: ""
      },
      visibility: {
        type: "object",
        default: {
          desktop: false,
          tablet: false,
          mobile: false
        }
      },
      customClasses: {
        type: "string",
        default: ""
      },
      address: {
        type: "string",
        default: ""
      },
      mapHeight: {
        type: "object",
        default: {
          desktop: 400,
          tablet: 350,
          mobile: 300
        }
      },
      zoom: {
        type: "number",
        default: 10
      },
      mapType: {
        type: "string",
        default: "roadmap"
      },
      mapStyle: {
        type: "string",
        default: "default"
      },
      customMapStyle: {
        type: "string",
        default: ""
      },
      mapId: {
        type: "string",
        default: ""
      },
      markers: {
        type: "array",
        default: []
      },
      animation: {
        type: "string",
        default: "none"
      },
      animationDuration: {
        type: "string",
        default: "normal"
      },
      animationDelay: {
        type: "number",
        default: ""
      },
      enableZoom: {
        type: "boolean",
        default: true
      },
      enableScroll: {
        type: "boolean",
        default: true
      },
      enableFullscreenControl: {
        type: "boolean",
        default: true
      },
      enableStreetViewControl: {
        type: "boolean",
        default: true
      },
      enableMapTypeControl: {
        type: "boolean",
        default: true
      },
      borderStyle: {
        type: "string",
        default: "none"
      },
      borderWidth: {
        type: "object",
        default: {
          desktop: { top: 1, right: 1, bottom: 1, left: 1, unit: "px" },
          tablet: { top: "", right: "", bottom: "", left: "", unit: "px" },
          mobile: { top: "", right: "", bottom: "", left: "", unit: "px" }
        }
      },
      borderRadius: {
        type: "object",
        default: {
          desktop: { top: "", right: "", bottom: "", left: "", unit: "px" },
          tablet: { top: "", right: "", bottom: "", left: "", unit: "px" },
          mobile: { top: "", right: "", bottom: "", left: "", unit: "px" }
        }
      },
      borderColor: {
        type: "string",
        default: "#e0e0e0"
      },
      boxShadow: {
        type: "object",
        default: {
          enable: false,
          color: "rgba(0, 0, 0, 0.2)",
          horizontal: 0,
          vertical: 0,
          blur: 0,
          spread: 0,
          position: "outset"
        }
      },
      boxShadowHover: {
        type: "object",
        default: {
          enable: false,
          color: "rgba(0, 0, 0, 0.2)",
          horizontal: 0,
          vertical: 0,
          blur: 0,
          spread: 0,
          position: "outset"
        }
      },
      position: {
        type: "string",
        default: "default"
      },
      horizontalOrientation: {
        type: "string",
        default: "left"
      },
      horizontalOffset: {
        type: "object",
        default: {
          desktop: { value: 0, unit: "px" },
          tablet: { value: 0, unit: "px" },
          mobile: { value: 0, unit: "px" }
        }
      },
      verticalOrientation: {
        type: "string",
        default: "top"
      },
      verticalOffset: {
        type: "object",
        default: {
          desktop: { value: 0, unit: "px" },
          tablet: { value: 0, unit: "px" },
          mobile: { value: 0, unit: "px" }
        }
      },
      zIndex: {
        type: "number",
        default: ""
      },
      transform: {
        type: "object",
        default: {
          rotate: { desktop: "", tablet: "", mobile: "" },
          rotate3d: false,
          rotateX: { desktop: "", tablet: "", mobile: "" },
          rotateY: { desktop: "", tablet: "", mobile: "" },
          perspective: { desktop: "", tablet: "", mobile: "" },
          offsetX: { desktop: { value: "", unit: "px" }, tablet: { value: "", unit: "px" }, mobile: { value: "", unit: "px" } },
          offsetY: { desktop: { value: "", unit: "px" }, tablet: { value: "", unit: "px" }, mobile: { value: "", unit: "px" } },
          keepProportions: true,
          scale: { desktop: "", tablet: "", mobile: "" },
          scaleX: { desktop: "", tablet: "", mobile: "" },
          scaleY: { desktop: "", tablet: "", mobile: "" },
          skewX: { desktop: "", tablet: "", mobile: "" },
          skewY: { desktop: "", tablet: "", mobile: "" },
          flipHorizontal: false,
          flipVertical: false,
          xAnchor: { desktop: "center", tablet: "", mobile: "" },
          yAnchor: { desktop: "center", tablet: "", mobile: "" },
          transitionDuration: ""
        }
      },
      transformHover: {
        type: "object",
        default: {
          rotate: { desktop: "", tablet: "", mobile: "" },
          rotate3d: false,
          rotateX: { desktop: "", tablet: "", mobile: "" },
          rotateY: { desktop: "", tablet: "", mobile: "" },
          perspective: { desktop: "", tablet: "", mobile: "" },
          offsetX: { desktop: { value: "", unit: "px" }, tablet: { value: "", unit: "px" }, mobile: { value: "", unit: "px" } },
          offsetY: { desktop: { value: "", unit: "px" }, tablet: { value: "", unit: "px" }, mobile: { value: "", unit: "px" } },
          keepProportions: true,
          scale: { desktop: "", tablet: "", mobile: "" },
          scaleX: { desktop: "", tablet: "", mobile: "" },
          scaleY: { desktop: "", tablet: "", mobile: "" },
          skewX: { desktop: "", tablet: "", mobile: "" },
          skewY: { desktop: "", tablet: "", mobile: "" },
          flipHorizontal: false,
          flipVertical: false,
          xAnchor: { desktop: "center", tablet: "", mobile: "" },
          yAnchor: { desktop: "center", tablet: "", mobile: "" },
          transitionDuration: ""
        }
      }
    },
    example: {
      attributes: {
        address: "New York, NY",
        mapHeight: {
          desktop: 300
        },
        zoom: 12,
        mapType: "roadmap"
      }
    },
    edit: edit_default,
    save: save_default
  });
})();
