let map;

function buildInfoCard(nHoodData) {
  console.log(nHoodData.RegionID);
  const contentString = `${`${'<div id="content">'
      + '<div id="siteNotice">'
      + '</div>'
      + '<h1 id="firstHeading" class="firstHeading">'}${nHoodData.Name}</h1>`
      + '<div id="bodyContent">'
      + '<p>Average Price: $'}${nHoodData.zindex}</p>`
    + '</div>'
    + '</div>';
  const infowindow = new google.maps.InfoWindow({
    content: contentString,
  });
  return infowindow;
}

function initMap() {
  const trafficLayer = new google.maps.TrafficLayer();
  const bikeLayer = new google.maps.BicyclingLayer();

  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 36.1627, lng: -86.7816 },
    zoom: 14,
  });
  map.data.setStyle({
    fillColor: '#FFA500',
    strokeWeight: 1,
  });
  map.data.loadGeoJson(
    'https://raw.githubusercontent.com/michelleabreo/CS4279-Affordable-Housing/master/Maps/Zillow_w_index.geojson',
  );

  let infoWindow;
  let marker;
  map.data.addListener('mouseover', (event) => {
    map.data.revertStyle();
    map.data.overrideStyle(event.feature, { fillColor: 'white' });
    infoWindow = buildInfoCard(event.feature.l);
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    marker = new google.maps.Marker({
      position: {
        lat,
        lng,
      },
      map,
      title: 'RegionID',
    });
    infoWindow.open(map, marker);
  });
  map.data.addListener('mouseout', () => {
    map.data.revertStyle();
    infoWindow.close();
    marker.setMap(null);
  });
  bikeLayer.setMap(map);
  trafficLayer.setMap(map);
}
