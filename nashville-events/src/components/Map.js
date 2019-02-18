import React, {Component} from 'react';
import L from 'leaflet';
import { Map as LeafletMap, GeoJSON, TileLayer, Marker, Popup } from 'react-leaflet';

import geojson from "./attempt.json";

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

// const geojson = GeoJSON.getData

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      map: null,
      tileLayer: null,
      numHoods: null,
      geojsonLayer: null,
      geojson: null,
    };
    this._mapNode = null;
  }

  
  init = (id) => {
    console.log(geojson)
    if (this.state.map) return;
    // this function creates the Leaflet map object and is called after the Map component mounts
    let map = L.map(id, config.params);
    L.control.zoom({ position: "bottomleft"}).addTo(map);
    L.control.scale({ position: "bottomleft"}).addTo(map);

    // a TileLayer is used as the "basemap"
    const tileLayer = L.tileLayer(config.tileLayer.uri, config.tileLayer.params).addTo(map);

    // set our state to include the tile layer
    this.setState({map, tileLayer});
  }

  componentDidMount = () => {
    // code to run just after the component "mounts" / DOM elements are created
    // we could make an AJAX request for the GeoJSON data here if it wasn't stored locally
    // this.getData();
    // this.addGeoJSONLayer(geojson);
    // create the Leaflet map object
    if (!this.state.map) this.init(this._mapNode);
  }

  componentDidUpdate = (prevProps, prevState) => {
    // code to run when the component receives new props or state
    // check to see if geojson is stored, map is created, and geojson overlay needs to be added
    if (this.state.geojson && this.state.map && !this.state.geojsonLayer) {
      // add the geojson overlay
      this.addGeoJSONLayer(this.state.geojson);
    }

  }

  componentWillUnmount = () => {
    // code to run just before unmounting the component
    // this destroys the Leaflet map object & related event listeners
    // this.state.map.remove();
  }

  getData() {
    // could also be an AJAX request that results in setting state with the geojson data
    // for simplicity sake we are just importing the geojson data using webpack's json loader
    this.setState({
        numEntrances: geojson.features.length,
       geojson
    });
  }

  addGeoJSONLayer = (geojson) => {
    // create a native Leaflet GeoJSON SVG Layer to add as an interactive overlay to the map
    // an options object is passed to define functions for customizing the layer
    const geojsonLayer = L.geoJson(geojson, {
      onEachFeature: this.onEachFeature,
      // pointToLayer: this.pointToLayer,
      // filter: this.filterFeatures
    });

    console.log(geojson)

    // add our GeoJSON layer to the Leaflet map object
    geojsonLayer.addTo(this.state.map);
    // store the Leaflet GeoJSON layer in our component state for use later
    this.setState({ geojsonLayer });
    // fit the geographic extent of the GeoJSON layer within the map's bounds / viewport
    this.zoomToFeature(geojsonLayer);
  }


  onEachFeature(feature,layer){
    layer.bindTooltip(
      feature.properties.Name, // neighborhood name
      {
        permanent:true,
        direction:'center',
        className: 'hoodLabel'
      }
    );
  }
  render = () =>{
    // var map = require('./Updated_Zillow.geojson');

    // var newmap = (<LeafletMap
    //   center={[36.1627, -86.7816]}
    //   zoom={13}
    //   maxZoom={18}
    //   attributionControl={true}
    //   zoomControl={true}
    //   doubleClickZoom={true}
    //   scrollWheelZoom={true}
    //   dragging={true}
    //   animate={true}
    //   easeLinearity={0.35}
    // >
    
    // <TileLayer
    //   attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors '
    //   url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
    // />

    // <GeoJSON data={hoods} onEachFeature={this.onEachFeature} />{' '}

    //   {/* <Marker position={[50, 10]}>
    //     <Popup>
    //       Popup for any custom information.
    //     </Popup>
    //   </Marker> */}

    // </LeafletMap>)
		// // access neighborhood boundaries, create layer and overlay
		// // var geojsonLayer = <GeoJSON "Updated_Zillow.geojson", {
		// // 	// filter: in_nashville, // filter only the regions in davidson county
		// // 	onEachFeature: function (feature, layer) {
		// // 		layer.bindTooltip(
		// // 			feature.properties.Name, // neighborhood name
		// // 			{
		// // 				permanent:true,
		// // 				direction:'center',
		// // 				className: 'hoodLabel'
		// // 			}
		// // 		);
		// // 	}
    // // }
    // // >
    // // geojsonLayer.addTo(newmap);
    // return(newmap);
    // this.state.geojsonLayer.addGeoJSONLayer(hoods);

    return (
      <div id="mapUI">
        <div ref={(node) => this._mapNode = node} id="map" />
        {/* <ForkMe /> */}
      </div>
    );
  }

  // onEachFeature = (feature, layer) => {
  //   console.log('onEachFeature fired: ');
  //   layer.on({
  //       mouseover: (e) => this.MouseOverFeature(e, feature),
  //       mouseout: (e) => this.MouseOutFeature(e, feature)

  //   });
  // };
}

export default Map;

