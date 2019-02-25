import React from 'react';
import '../styling/homepage.css';
import MapContainer from './GoogleMaps';

export default function Home() {
  return (
    <div className="">
      <h1>HomePage</h1>
      <MapContainer />
    </div>
  );
}
