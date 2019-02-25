import React, { Component } from 'react';
import {
  Map, DataLayer, Feature,
} from 'google-react-maps';

export default function MapContainer() {
  return (
    <Map
      onClick={e => console.log(e)}
      api-key="AIzaSyD5wccCYTitdg6VXMT2PPu4VzE2i2mce_s"
      zoom={12}
      center={{
        lat: 36.17,
        lng: -86.76,
      }}
      style={{ height: 500, width: 1000 }}
    >
    </Map>
  );
}
