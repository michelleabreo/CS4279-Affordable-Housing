let map;
let filteredMap;
let nonFilteredMap;
let nHoodData;
let yelpGroceries;
let yelpDaycares;

function usdFormat(x) {
  return x.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}

function sortJSONbyPrice(json) {
  const sArray = [];
  for (const i in json) {
    const jsonData = json[i];
    if (jsonData.price != undefined) {
      const yelpInfo = {
        name: jsonData.name,
        price: jsonData.price,
        rating: jsonData.rating,
        address: jsonData.location.address1,
        url: jsonData.url,
      };
      sArray.push([json[i].price, yelpInfo]);
    }
  }
  const resultArray = sArray.sort().reverse();
  if (resultArray.length > 3) {
    return resultArray.slice(0, 3);
  }
}

function sortJSONbyRating(json) {
  const sArray = [];
  for (const i in json) {
    const jsonData = json[i];
    const yelpInfo = {
      name: jsonData.name,
      price: jsonData.price,
      rating: jsonData.rating,
      address: jsonData.location.address1,
      url: jsonData.url,
    };
    sArray.push([json[i].rating, yelpInfo]);
  }
  const resultArray = sArray.sort().reverse();
  if (resultArray.length > 3) {
    return resultArray.slice(0, 3);
  }
}

function getYelpData(lat, lng, type) {
  console.log('Initiaiting Yelp Call...');
  const xmlHttp = new XMLHttpRequest();
  const url = `http://localhost:3001/${type}/${lat}/${lng}`;
  console.log(xmlHttp);
  xmlHttp.open('GET', url, false); // false for synchronous request
  xmlHttp.send(null);
  console.log('Finished!');
  const jsonResponse = JSON.parse(xmlHttp.responseText).businesses;
  console.log(jsonResponse);
  if (type === 'groceries') {
    return sortJSONbyPrice(jsonResponse);
  }
  return sortJSONbyRating(jsonResponse);
}

function buildInfoCard() {
  console.log(nHoodData);
  const contentString = `${'<div id="content">' + '<h1 id="firstHeading" class="firstHeading">'}${
    nHoodData.Name
  }</h1>` + '</div>';
  const infowindow = new google.maps.InfoWindow({
    content: contentString,
  });
  return infowindow;
}

function buildYelpCard(data, type) {
  const yelpDiv = document.createElement('div');
  const yelpTitle = document.createElement('h4');
  yelpTitle.innerHTML = data.name;
  yelpDiv.appendChild(yelpTitle);
  if (type === 'groceries') {
    const yelpPrice = document.createElement('h5');
    yelpPrice.innerHTML = `Price: ${data.price}`;
    yelpDiv.appendChild(yelpPrice);
  }
  const yelpRating = document.createElement('h5');
  yelpRating.innerHTML = `Rating: ${data.rating}`;
  yelpDiv.appendChild(yelpRating);
  const yelpStreet = document.createElement('h5');
  yelpStreet.innerHTML = `Street: ${data.address}`;
  yelpDiv.appendChild(yelpStreet);
  // const yelpLink = document.createElement('a');
  // yelpLink.href = data.url;
  // yelpLink.innerHTML = 'Visit Site';
  // yelpDiv.appendChild(yelpLink);
  return yelpDiv;
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
    if (infoWindow == null) {
      map.data.revertStyle();
      map.data.overrideStyle(event.feature, { fillColor: 'white' });
      nHoodData = event.feature.l;
      // update the side window
      document.getElementById('nName').innerHTML = nHoodData.Name;
      document.getElementById('nAvgVal').innerHTML = `Avg. Home Value: ${usdFormat(
        nHoodData.zindex,
      )}`;
    }
  });

  map.data.addListener('click', (event) => {
    map.data.revertStyle();
    if (open) {
      marker.setMap(null); // reset our cards if clicking new neighborhood
      infoWindow.close();
      open = false;
    }
    map.data.overrideStyle(event.feature, { fillColor: 'white' });
    nHoodData = event.feature.l;
    infoWindow = buildInfoCard();
    document.getElementById('nName').innerHTML = nHoodData.Name;
    document.getElementById('nAvgVal').innerHTML = `Avg. Home Value: ${usdFormat(
      nHoodData.zindex,
    )}`;
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
    infoWindow.open(map, marker);
    yelpGroceries = getYelpData(lat, lng, 'groceries');
    yelpDaycares = getYelpData(lat, lng, 'childcare');
    console.log(yelpDaycares);
    open = true;
  });

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

function showYelpData(type) {
  console.log(type);
  document.getElementById('yelpContent').innerHTML = '';
  let dataSrc = yelpDaycares;
  if (type === 'groceries') {
    dataSrc = yelpGroceries;
  }
  dataSrc.forEach((element) => {
    document.getElementById('yelpContent').appendChild(buildYelpCard(element[1], type));
  });
}

document.getElementById('zillowBtn').onclick = function () {
  const url = `https://www.zillow.com/homes/for_rent/${nHoodData.Name}-nashville-tn/`;
  window.open(url, '_blank');
};

document.getElementById('groceryBtn').onclick = function () {
  showYelpData('groceries');
};

document.getElementById('dayCareBtn').onclick = function () {
  showYelpData('daycare');
};

document.getElementById('allHoods').onclick = function () {
  switchToFullMap();
};

document.getElementById('pricedHoods').onclick = function () {
  switchToFilteredMap();
};
