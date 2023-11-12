import React, { useEffect } from 'react';
import geojsonData from '../../data/USA_CA_BayArea.json';

const MapComponent = () => {
  const drawLines = (path, map) => {
    const linePath = new window.google.maps.Polyline({
      path: path,
      geodesic: true,
      strokeColor: 'black',
      strokeOpacity: 1.0,
      strokeWeight: 2,
    });
  
    linePath.setMap(map);
  };
  

  useEffect(() => {
    const parseGeoJson = (geojsonData, map) => {
      geojsonData.features.forEach((feature) => {
        
        const { type } = feature.geometry;
        const coordinates = feature.geometry.coordinates;
    
        // Check if the feature is a LineString
        if (type === 'LineString') {
          // Map the GeoJSON coordinates to the format expected by Google Maps
          const googleMapsCoordinates = coordinates.map(([lng, lat]) => ({
            lat,
            lng,
          }));

          console.log(googleMapsCoordinates);
    
          // Draw the line on the map
          drawLines(googleMapsCoordinates, map);
        }
        // If you have MultiLineString or other types, handle them similarly
      });
    };
    
    // const drawRoadSegment = (coordinates, map) => {
    //   // Convert GeoJSON coordinates to Google Maps format
    //   const path = coordinates.map(([lng, lat]) => ({ lat, lng }));
    
    //   // Draw the line on the map using your existing function
    //   drawLines(path, map);
    // };

    const script = document.createElement('script');
    script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBo8St_ilzkUBYZLR6BKYYyPqX6KxyBrtc&callback=initMap";
    script.async = true;

    window.initMap = () => {
      const map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: 37.4220656, lng: -122.0840897 },
        zoom: 10,
        mapId: 'DEMO_MAP_ID'
      });

      const testPath = [
        { lat: 37.7749, lng: -122.4194 }, // Start at a recognizable location
        { lat: 37.7899, lng: -122.4020 }, // End at another recognizable location
      ];

      // Call drawLines with the test coordinates
      drawLines(testPath, map);
      //drawLines(37.666403, -122.425969, 37.676978, -122.147290, map);
      parseGeoJson(geojsonData, map);
     
      console.log("path");
    };

    document.head.appendChild(script);
  }, []);
 
  return <div id="map" />;
};

export default MapComponent;
