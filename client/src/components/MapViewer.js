import React, { Component } from 'react';
import { withScriptjs } from 'react-google-maps';
import Map from './Map';

const MapViewer = () => {
  const MapLoader = withScriptjs(Map);

  return (
    <MapLoader
      googleMapURL='https://maps.googleapis.com/maps/api/js?key=AIzaSyC_CpoA364Qp3ANxSx67t4DQoUljagmPeg'
      loadingElement={<div style={{ height: `100%` }} />}
    />
  );
};

export default MapViewer;
