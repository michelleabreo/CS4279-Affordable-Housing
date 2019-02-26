let map;

function buildInfoCard(nHoodData) {
  console.log(nHoodData.RegionID);
  const contentString = `${`${'<div id="content">'
      + '<div id="siteNotice">'
      + '</div>'
      + '<h1 id="firstHeading" class="firstHeading">'}${nHoodData.Name}</h1>`
      + '<div id="bodyContent">'
      + '<p>'}${nHoodData.RegionID}</p>`
    + '</div>'
    + '</div>';
  const infowindow = new google.maps.InfoWindow({
    content: contentString,
  });
  console.log(infowindow);
  return infowindow;
}

function initMap() {
  const trafficLayer = new google.maps.TrafficLayer();
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 36.1627, lng: -86.7816 },
    zoom: 14,
  });
  map.data.setStyle({
    fillColor: 'grey',
    strokeWeight: 1,
  });
  map.data.loadGeoJson(
    'https://raw.githubusercontent.com/michelleabreo/CS4279-Affordable-Housing/master/Maps/Updated_Zillow.geojson',
  );
  let infoWindow;
  map.data.addListener('mouseover', (event) => {
    map.data.revertStyle();
    map.data.overrideStyle(event.feature, { fillColor: 'blue' });
    infoWindow = buildInfoCard(event.feature.l);
    const marker = new google.maps.Marker({
      position: {
        lat: 36.1627,
        lng: -86.7816,
      },
      map,
      title: 'RegionID',
    });
    infoWindow.open(map, marker);
  });
  map.data.addListener('mouseout', () => {
    map.data.revertStyle();
    infoWindow.close();
  });
  trafficLayer.setMap(map);
}
