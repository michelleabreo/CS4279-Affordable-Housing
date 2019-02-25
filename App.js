import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
  render() {
    return (
        <Map
            google={this.props.google}
            zoom={14}
            style={mapStyles}
            initialCenter={{
              lat: 36.1627,
              lng: 86.7816
            }}
        />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCPDWyH-VblsxfulXy-mEc4vX7zsZz5Le4'
})(MapContainer);