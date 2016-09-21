(function () {
  
function initGoogleMaps() {
  var map = new google.maps.Map(document.getElementById("map_canvas"), {
    center:new google.maps.LatLng(45.3998, -74.1378),
    zoom: 11,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });
}

$(window).load(function () {
  initGoogleMaps();
});

$('#contact, #res-contact').click(function () {
  google.maps.event.trigger(map, 'resize');
})

})();
