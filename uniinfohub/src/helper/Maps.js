import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

// University of Windsor coordinates
const uofWindsorCoordinates = {
  lat: 42.3078,
  lng: -83.0670
};

const Maps = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyCuoYkOyDGgZJvPja5TbAOXtfgn8xW0r70">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={uofWindsorCoordinates}
        zoom={15}
      >
        {/* Standard Marker */}
        <Marker 
          position={uofWindsorCoordinates}
          title="University of Windsor"
        />
      </GoogleMap>
    </LoadScript>
  );
}

export default Maps;