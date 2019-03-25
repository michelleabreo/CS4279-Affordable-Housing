let map;
let filteredMap;
let nonFilteredMap;
let nHoodData;

function usdFormat(x) {
  return x.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}

function buildInfoCard() {
  console.log(nHoodData);
  const contentString = `${'<div id="content">' + '<h1 id="firstHeading" class="firstHeading">'}${
    nHoodData.Name
  }</h1>` + '</div>';
  const infowindow = new google.maps.InfoWindow({
    content: contentString,
  });
  // document.getElementById('nName').innerHTML = nHoodData.Name;
  // document.getElementById('nAvgVal').innerHTML = `Avg. Home Value: ${usdFormat(nHoodData.zindex)}`;
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
  bikeLayer.setMap(map);
  trafficLayer.setMap(map);

  let infoWindow;
  let marker;
  let open = false;
  
  map.data.addListener('mouseover', (event) => {
    if(infoWindow==null){
      map.data.revertStyle();
      map.data.overrideStyle(event.feature, { fillColor: 'white' });
      nHoodData = event.feature.l;
      // update the side window
      document.getElementById('nName').innerHTML = nHoodData.Name;
      document.getElementById('nAvgVal').innerHTML = `Avg. Home Value: ${usdFormat(nHoodData.zindex)}`;

    }
  });

  map.data.addListener('click', (event) => {
    map.data.revertStyle();
    if(open){
      marker.setMap(null); // reset our cards if clicking new neighborhood
      infoWindow.close();
      open = false;
    }
    map.data.overrideStyle(event.feature, { fillColor: 'white' });
    nHoodData = event.feature.l;
    infoWindow = buildInfoCard();
    document.getElementById('nName').innerHTML = nHoodData.Name;
    document.getElementById('nAvgVal').innerHTML = `Avg. Home Value: ${usdFormat(nHoodData.zindex)}`;
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    console.log(lat);
    console.log(lng);
    marker = new google.maps.Marker({
      position: {
        lat,
        lng,
      },
      map,
      title: 'RegionID',
    });
    infoWindow.open(map, marker)
    open = true;
  });

  // map.data.addListener(infoWindow, 'closeclick', function() {
  //   map.data.revertStyle();
  //   open = false;
  // });

  map.data.addListener('mouseout', () => {
    map.data.revertStyle();
  });

  nonFilteredMap = map.data.loadGeoJson(
    'https://raw.githubusercontent.com/michelleabreo/CS4279-Affordable-Housing/master/Maps/Zillow_w_index.geojson',
  );
}

function switchToFilteredMap() {
  map.data.setStyle({});
  google.maps.event.addListenerOnce(map, 'idle', () => {
    map.data.forEach((feature) => {
      console.log(feature.l.zindex);
      if (feature.l.zindex == 0) {
        map.data.remove(feature);
      }
    });
  });
  map.data.setStyle({
    fillColor: 'green',
    strokeWeight: 1,
  });
  google.maps.event.trigger(map, 'resize');
}

function switchToFullMap() {
  map.data.setStyle({});
  map.data.loadGeoJson(
    'https://raw.githubusercontent.com/michelleabreo/CS4279-Affordable-Housing/master/Maps/Zillow_w_index.geojson',
  );
  map.data.setStyle({
    fillColor: '#FFA500',
    strokeWeight: 1,
  });
  google.maps.event.trigger(map, 'resize');
}

document.getElementById('zillowBtn').onclick = function () {
  const url = `https://www.zillow.com/homes/for_rent/${nHoodData.Name}-nashville-tn/`;
  window.open(url, '_blank');
};

document.getElementById('allHoods').onclick = function () {
  switchToFullMap();
};

document.getElementById('pricedHoods').onclick = function () {
  switchToFilteredMap();
};
