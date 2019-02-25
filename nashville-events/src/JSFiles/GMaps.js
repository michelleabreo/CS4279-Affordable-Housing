let map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 36.1627, lng: -86.7816 },
    zoom: 14,
  });
  map.data.loadGeoJson(
    'https://raw.githubusercontent.com/michelleabreo/CS4279-Affordable-Housing/master/Maps/Updated_Zillow.geojson',
  );
}
