let map;
let filteredMap;
let nonFilteredMap;
let nHoodData;

function usdFormat(x) {
  return x.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}

function createCORSRequest(method, url) {
  let xhr = new XMLHttpRequest();
  if ('withCredentials' in xhr) {
    // Check if the XMLHttpRequest object has a "withCredentials" property.
    // "withCredentials" only exists on XMLHTTPRequest2 objects.
    xhr.open(method, url, true);
  } else if (typeof XDomainRequest !== 'undefined') {
    // Otherwise, check if XDomainRequest.
    // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
    xhr = new XDomainRequest();
    xhr.open(method, url);
  } else {
    // Otherwise, CORS is not supported by the browser.
    xhr = null;
  }
  return xhr;
}

function populateNeighborhoodData() {
  const url = 'https://api.yelp.com/v3/businesses/search';
  const xhr = createCORSRequest('GET', url);
  if (!xhr) {
    throw new Error('CORS not supported');
  }
  // Http.open('GET', url);
  // Http.setRequestHeader('X-PINGOTHER', 'pingpong');
  xhr.setRequestHeader(
    'Authorization',
    'nJvRCUJ94q0VVptIYGXzrzauyTaITN9k2mHFyquWt_8-t_zS6Mdit2TmDw_Wtaw-5dYTUjHzw2v0uihDjEt8x8a_1LBv34IDp8RgVztNzVBNOrmyQNT42z8amWSIXHYx',
  );
  console.log(xhr.re)
  xhr.send();
  xhr.onreadystatechange = (e) => {
    console.log(xhr.responseText);
  };
}

function buildInfoCard() {
  console.log(nHoodData);
  const contentString = `${'<div id="content">' + '<h1 id="firstHeading" class="firstHeading">'}${
    nHoodData.Name
  }</h1>` + '</div>';
  const infowindow = new google.maps.InfoWindow({
    content: contentString,
  });
  document.getElementById('nName').innerHTML = nHoodData.Name;
  document.getElementById('nAvgVal').innerHTML = `Avg. Home Value: ${usdFormat(nHoodData.zindex)}`;
  populateNeighborhoodData();
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
  map.data.addListener('mouseover', (event) => {
    map.data.revertStyle();
    map.data.overrideStyle(event.feature, { fillColor: 'white' });
    nHoodData = event.feature.l;
    infoWindow = buildInfoCard();
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
