const mapboxgl = require('mapbox-gl');

const iconURLs = {
  hotel: 'http://i.imgur.com/D9574Cu.png',
  restaurant: 'http://i.imgur.com/cqR6pUI.png',
  activity: 'http://i.imgur.com/WbMOfMl.png',
};

const buildMarker = function (type, coords) {
  const markerDomEl = document.createElement('div');
  markerDomEl.style.width = '32px';
  markerDomEl.style.height = '39px';
  markerDomEl.style.backgroundImage = `url(${iconURLs[type]})`;
  return new mapboxgl.Marker(markerDomEl).setLngLat(coords);
};

module.exports = buildMarker;
