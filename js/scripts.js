var searchMap = L.map('map').setView([43.2994, -74.2179], 7);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw', {
  maxZoom: 18,
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
    '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    'Imagery © <a href="http://mapbox.com">Mapbox</a>',
  id: 'mapbox.streets'
}).addTo(searchMap);

$('#results-panel').hide();

$('.filter').on('click', function() {
  $('#welcome-panel').hide();
  $('#results-panel').fadeIn(400);
});

$('button#showSearchResults').on('click', function(e) {
  e.preventDefault();
  $('#welcome-panel').hide();
  $('#results-panel').fadeIn(400);
});

$('#startOver').on('click', function() {
  $('#results-panel').hide();
  $('#welcome-panel').fadeIn(400);
});
