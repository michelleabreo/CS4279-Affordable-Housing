import React from 'react';
import L from 'leaflet';
//import * as utils from './leaflet.ajax.min.js';
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';

// class Map extends React.Component {
//   render() {
//     var newmap = (<LeafletMap
//       center={[36.1627, -86.7816]}
//       zoom={13}
//       maxZoom={18}
//       attributionControl={true}
//       zoomControl={true}
//       doubleClickZoom={true}
//       scrollWheelZoom={true}
//       dragging={true}
//       animate={true}
//       easeLinearity={0.35}
//     >
//       <TileLayer
//         attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors '
//         url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
//       />
//       {/* <Marker position={[50, 10]}>
//         <Popup>
//           Popup for any custom information.
//         </Popup>
//       </Marker> */}
//     </LeafletMap>)
// 		// access neighborhood boundaries, create layer and overlay
// 		var geojsonLayer = <GeoJSON.AJAX "Updated_Zillow.geojson", {
// 			// filter: in_nashville, // filter only the regions in davidson county
// 			onEachFeature: function (feature, layer) {
// 				layer.bindTooltip(
// 					feature.properties.Name, // neighborhood name
// 					{
// 						permanent:true,
// 						direction:'center',
// 						className: 'hoodLabel'
// 					}
// 				);
// 			}
//     }
//     >
// 		geojsonLayer.addTo(newmap);
//     return(newmap);
//   }
// }

class Map extends React.Component {
  componentDidMount() {
    // create map
    this.map = L.map('map', {
      center: [36.1627, -86.7816],
      zoom: 13,
      maxZoom: 18,
      layers: [
        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoicGhvc2lheiIsImEiOiJjanJndXVvNjQwMjVwNDZucmtyMTU5M3pvIn0.OWp7ddaVV_UbXIs1qazqBw', {
          maxZoom: 18,
          attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
          '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
          'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          id: 'mapbox.streets'
        }),
        // L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        //   attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        // }),
      ]
    });

      // add marker
    //  this.marker = L.marker(this.props.markerPosition).addTo(this.map);

    		// access neighborhood boundaries, create layer and overlay
		//   var geojsonLayer = new L.GeoJSON.AJAX("Updated_Zillow.geojson", {
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
		// });


  }

  componentDidUpdate({ markerPosition }) {
    // check if position has changed 
    if (this.props.markerPosition !== markerPosition) {
      this.marker.setLatLng(this.props.markerPosition);
    }
  }


  render() {
    return <div id="map"></div>
  }
}

export default Map