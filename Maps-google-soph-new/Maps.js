var map;

//Display popup containing region information
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
  return infowindow;
}

function initMap() {
  const trafficLayer = new google.maps.TrafficLayer();
  const bikeLayer = new google.maps.BicyclingLayer();
  var transitLayer = new google.maps.TransitLayer();

  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 36.1627, lng:-86.7816},
    zoom: 14
  });

  map.data.setStyle({
    fillColor: '#FFA500',
    strokeWeight: 1,
  });

  // Collect neighborhood information
  map.data.loadGeoJson(
    'https://raw.githubusercontent.com/michelleabreo/CS4279-Affordable-Housing/master/Maps/Updated_Zillow.geojson',
  );

  let infoWindow;
  let marker;

  // Create popup cards that appear on mouseover of appropriate region
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

  // Ensure that window closes on mouseout
  map.data.addListener('mouseout', () => {
    map.data.revertStyle();
    infoWindow.close();
    marker.setMap(null);
  });

  // Add the appropriate maplayers
  bikeLayer.setMap(map);
  trafficLayer.setMap(map);
  transitLayer.setMap(map);

  // Create the search box and link it to the UI element.
  var input = document.getElementById('pac-input');
  var searchBox = new google.maps.places.SearchBox(input);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

  // Bias the SearchBox results towards current map's viewport.
  map.addListener('bounds_changed', function() {
    searchBox.setBounds(map.getBounds());
  });

  var markers = [];
  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  searchBox.addListener('places_changed', function() {
    var places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }

    // Clear out the old markers.
    markers.forEach(function(marker) {
      marker.setMap(null);
    });
    markers = [];

    // For each place, get the icon, name and location.
    var bounds = new google.maps.LatLngBounds();
    places.forEach(function(place) {
      if (!place.geometry) {
        console.log("Returned place contains no geometry");
        return;
      }
      var icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };

      // Create a marker for each place.
      markers.push(new google.maps.Marker({
        map: map,
        icon: icon,
        title: place.name,
        position: place.geometry.location
      }));

      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);
  });

}
