import React, { useEffect } from 'react';

const MapComponent = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBo8St_ilzkUBYZLR6BKYYyPqX6KxyBrtc&callback=initMap";
    script.async = true;

    window.initMap = () => {
      console.log('Maps JavaScript API loaded.');
      // Initialize your map here
      new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: 37.4220656, lng: -122.0840897 },
        zoom: 10,
        mapId: 'DEMO_MAP_ID'
      });
    };

    document.head.appendChild(script);
  }, []);

  return <div id="map" />;
};

export default MapComponent;
