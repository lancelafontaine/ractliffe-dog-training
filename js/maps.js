(function () {

function initGoogleMaps() {
  var map = new google.maps.Map(document.getElementById("map_canvas"), {
    center:new google.maps.LatLng(45.3998, -74.1378),
    zoom: 11,
    maxZoom: 11,
    minZoom: 11,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });
  $('#contact, #res-contact').click(function () {
    google.maps.event.trigger(map, 'resize');
  });
}

$(window).load(function () {
  initGoogleMaps();
});


})();
