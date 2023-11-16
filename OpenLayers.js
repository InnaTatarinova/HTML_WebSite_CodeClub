var fromProjection = new OpenLayers.Projection("EPSG:4326"); // transform from WGS 1984
var toProjection = new OpenLayers.Projection("EPSG:900913"); // to Spherical Mercator Projection
var extent = new OpenLayers.Bounds(-1.32,51.71,-1.18,51.80).transform(fromProjection,toProjection);
function init() {
  var options = {
    restrictedExtent : extent,
    controls: [
      new OpenLayers.Control.Navigation(),
      new OpenLayers.Control.PanZoomBar(),
      new OpenLayers.Control.Attribution()
    ]
  };
  map = new OpenLayers.Map("Map", options);
  var newLayer = new OpenLayers.Layer.OSM(
    "New Layer", 
    "URL_TO_TILES/${z}/${x}/${y}.png", 
    {zoomOffset: 13, resolutions: [19.1092570678711,9.55462853393555,4.77731426696777,2.38865713348389]}
  );
  map.addLayer(newLayer);
  map.setCenter(new OpenLayers.LonLat(-1.25,51.75).transform(fromProjection,toProjection), 0); // 0=relative zoom level
}