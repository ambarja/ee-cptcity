/*             Example 2: Visualization of nitrogen dioxide
      GitHub Repository: https://github.com/ambarja/ee-cptcity
-------------------------------------------------------------------------
*/

// REQUIRE THE EE-CPTCITY MODULE
var cpt = require("users/ambarja/ee-cptcity:cptcity");

// LET'S USE THE NITROGEN DIOXIDE FROM SENTINEL-5P NRTI NO2
var sen5p = ee.ImageCollection('COPERNICUS/S5P/NRTI/L3_NO2')
           .filterDate('2022-02-01', '2022-02-15')
           .max()  // Select the maximmum value of NO2 .

// GET THE NO2 COLUMN NUMBER DENSITY DATA
var NO2 = sen5p.select('NO2_column_number_density');

// SET THE MIN AND MAX VALUE OF THE VISUALIZATION
var MIN = 0.00004;
var MAX = 0.00014;

// VISUALIZATION OF NO2 COLUMN NUMBER DENSITY DATA WITH CPTCITY PALLETS
Map.addLayer(NO2,{min:MIN, max:MAX, palette:cpt.pal.grass_bcyr}, 'grass_bcyr');
Map.addLayer(NO2,{min:MIN, max:MAX, palette:cpt.pal.cividis}, 'cividis');

// VISUALIZATION OF NO2 COLUMN NUMBER DENSITY DATA WITH INVERTED CPTCITY PALLETES
Map.addLayer(NO2,{min:MIN, max:MAX, palette:cpt.pal.grass_bcyr.reverse()}, 'grass_bcyr-inv');
Map.addLayer(NO2,{min:MIN, max:MAX, palette:cpt.pal.cividis.reverse()}, 'cividis-inv');
