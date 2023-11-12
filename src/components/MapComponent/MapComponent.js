import React, { useEffect } from 'react';

const MapComponent = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBo8St_ilzkUBYZLR6BKYYyPqX6KxyBrtc&callback=initMap";
    script.async = true;

    window.initMap = () => {
      const map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: 37.4220656, lng: -122.0840897 },
        zoom: 10,
        mapId: 'DEMO_MAP_ID'
      });
      
     this.drawLines(37.666403, -122.425969, 37.676978, -122.147290, map)
    };

    document.head.appendChild(script);
  }, []);
 
  return <div id="map" />;
};
drawLines = (lat1,long1,lat2,long2,map) => {
   // Coordinates for the freeway
   const freewayCoordinates = [
    // Example coordinates - replace with actual freeway coordinates
    { lat: lat1, lng: long1 }, 
    { lat: lat2, lng: long2 },
    // ... Add more coordinates
  ];

  // Create a polyline for the freeway
  const freewayPath = new window.google.maps.Polyline({
    path: freewayCoordinates,
    geodesic: true,
    strokeColor: '#FF0000',  // Red color
    strokeOpacity: 1.0,
    strokeWeight: 2,
  });
  
  freewayPath.setMap(map);
}
export default MapComponent;
