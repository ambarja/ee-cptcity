/*             Example 2: Visualization of NDVI 
      GitHub Repository: https://github.com/ambarja/ee-cptcity
-------------------------------------------------------------------------
*/

// REQUIRE THE EE-CPTCITY MODULE
var cpt = require("users/ambarja/ee-cptcity:cptcity");

// LET'S USE THE NDVI FROM MODIS TERRA OF 500M
var modis = ee.ImageCollection('MODIS/006/MOD13Q1')
           .filterDate('2018-01-01', '2018-05-01')
           .median()
           .multiply(0.0001);

// GET THE NDVI DATA
var NDVI = modis.select('NDVI');

// SET THE MIN AND MAX VALUE OF THE VISUALIZATION
var MIN = -0.09;
var MAX = 0.8;

// VISUALIZATION OF NDVI DATA WITH CPTCITY PALLETS
Map.addLayer(NDVI,{min:MIN, max:MAX, palette:cpt.pal.grass_ndvi}, 'grass_ndvi');
Map.addLayer(NDVI,{min:MIN, max:MAX, palette:cpt.pal.oc_ndvi}, 'oc_ndvi');

