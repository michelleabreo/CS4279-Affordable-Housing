import React from 'react';
import L from 'leaflet';
//import * as utils from './leaflet.ajax.min.js';
import { Map as LeafletMap, GeoJSON, TileLayer, Marker, Popup } from 'react-leaflet';

import hoods from "json!./Updated_Zillow.js";

let config = {};
config.params = {
  center:[36.1627, -86.7816],
  zoom:13,
  maxZoom:18,
  attributionControl:true,
  zoomControl:true,
  doubleClickZoom:true,
  scrollWheelZoom:true,
  dragging:true,
  animate:true,
  easeLinearity:0.35
};
config.tileLayer = {
  uri: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
  params: {
  minZoom: 11,
  attribution:'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors ',
  id: '',
  accessToken: ''
  }
};


class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      map: null,
      tileLayer: null,
      geojsonLayer: null,
      geojson: null,
      subwayLinesFilter: '*',
      numEntrances: null
    };
    this._mapNode = null;
    // this.updateMap = this.updateMap.bind(this);
    this.onEachFeature = this.onEachFeature.bind(this);
    this.pointToLayer = this.pointToLayer.bind(this);
    this.filterFeatures = this.filterFeatures.bind(this);
    this.filterGeoJSONLayer = this.filterGeoJSONLayer.bind(this);
  }

  componentDidMount() {
    // code to run just after the component "mounts" / DOM elements are created
    // we could make an AJAX request for the GeoJSON data here if it wasn't stored locally
    this.getData();
    // create the Leaflet map object
    if (!this.state.map) this.init(this._mapNode);
  }

  componentDidUpdate(prevProps, prevState) {
    // code to run when the component receives new props or state
    // check to see if geojson is stored, map is created, and geojson overlay needs to be added
    if (this.state.geojson && this.state.map && !this.state.geojsonLayer) {
      // add the geojson overlay
      this.addGeoJSONLayer(this.state.geojson);
    }

  }

  componentWillUnmount() {
    // code to run just before unmounting the component
    // this destroys the Leaflet map object & related event listeners
    this.state.map.remove();
  }


  addGeoJSONLayer(geojson) {
    // create a native Leaflet GeoJSON SVG Layer to add as an interactive overlay to the map
    // an options object is passed to define functions for customizing the layer
    const geojsonLayer = L.geoJson(geojson, {
      onEachFeature: function (feature, layer) {
				layer.bindTooltip(
					feature.properties.Name, // neighborhood name
					{
						permanent:true,
						direction:'center',
						className: 'hoodLabel'
					}
				);
			}
      // this.onEachFeature,
      // pointToLayer: this.pointToLayer,
      // filter: this.filterFeatures
    });
    // add our GeoJSON layer to the Leaflet map object
    geojsonLayer.addTo(this.state.map);
    // store the Leaflet GeoJSON layer in our component state for use later
    this.setState({ geojsonLayer });
    // fit the geographic extent of the GeoJSON layer within the map's bounds / viewport
    this.zoomToFeature(geojsonLayer);
  }

  render() {
    // var map = require('./Updated_Zillow.geojson');

    var newmap = (<LeafletMap
      center={[36.1627, -86.7816]}
      zoom={13}
      maxZoom={18}
      attributionControl={true}
      zoomControl={true}
      doubleClickZoom={true}
      scrollWheelZoom={true}
      dragging={true}
      animate={true}
      easeLinearity={0.35}
    >
    
    <TileLayer
      attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors '
      url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
    />

    <GeoJSON data={hoods} onEachFeature={this.onEachFeature} />{' '}

      {/* <Marker position={[50, 10]}>
        <Popup>
          Popup for any custom information.
        </Popup>
      </Marker> */}

    </LeafletMap>)
		// access neighborhood boundaries, create layer and overlay
		// var geojsonLayer = <GeoJSON "Updated_Zillow.geojson", {
		// 	// filter: in_nashville, // filter only the regions in davidson county
		// 	onEachFeature: function (feature, layer) {
		// 		layer.bindTooltip(
		// 			feature.properties.Name, // neighborhood name
		// 			{
		// 				permanent:true,
		// 				direction:'center',
		// 				className: 'hoodLabel'
		// 			}
		// 		);
		// 	}
    // }
    // >
    // geojsonLayer.addTo(newmap);
    console.log(typeof map)
    return(newmap);
  }

  onEachFeature = (feature, layer) => {
    console.log('onEachFeature fired: ');
    layer.on({
        mouseover: (e) => this.MouseOverFeature(e, feature),
        mouseout: (e) => this.MouseOutFeature(e, feature)

    });
  };
}

export default Map

