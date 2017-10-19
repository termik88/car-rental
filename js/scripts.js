var map;
function initMap() {
  map = new google.maps.Map(document.getElementsByClassName('map')[0], {
    zoom: 16,
    center: new google.maps.LatLng(59.938659, 30.323078),
    mapTypeId: 'roadmap'
  });

  var iconBase = 'img/';
  var icons = {
    mishka: {
      icon: iconBase + 'pin.png'
    }
  };

  var features = [
    {
      position: new google.maps.LatLng(59.93866, 30.3229),
      type: 'mishka'
    }
  ];

  // Create markers.
  features.forEach(function(feature) {
    var marker = new google.maps.Marker({
      position: feature.position,
      icon: icons[feature.type].icon,
      map: map
    });
  });
}
