/*             Example 2: Visualization of precipitation
      GitHub Repository: https://github.com/ambarja/ee-cptcity
-------------------------------------------------------------------------
*/

// REQUIRE THE EE-CPTCITY MODULE
var cpt = require("users/ambarja/ee-cptcity:cptcity");

// LET'S USE THE PRECIPITATION FROM GLOBAL PRECIPITATION MEASUREMENT (GPM)
var gpm = ee.ImageCollection('NASA/GPM_L3/IMERG_V06')
           .filterDate('2022-02-01', '2022-02-15')
           .max()  // Select the max precipitation.

// MASK OUT LOW PRECIPITATION VALUES
var mask = gpm.gt(0.5);
var data = gpm.updateMask(mask);

// GET THE PRECIPITATION DATA
var PP = data.select('precipitationCal');

// SET THE MIN AND MAX VALUE OF THE VISUALIZATION
var MIN = 0.9;
var MAX = 40;

// VISUALIZATION OF PRECIPITATION DATA WITH CPTCITY PALLETS
Map.addLayer(PP,{min:MIN, max:MAX, palette:cpt.pal.ncl_precip1}, 'ncl_precip1');
Map.addLayer(PP,{min:MIN, max:MAX, palette:cpt.pal.ncl_precip2}, 'ncl_precip2');

// VISUALIZATION OF PRECIPITATION DATA WITH INVERTED CPTCITY PALLETES

Map.addLayer(PP,{min:MIN, max:MAX, palette:cpt.pal.ncl_precip1.reverse()}, 'ncl_precip1-inv');
Map.addLayer(PP,{min:MIN, max:MAX, palette:cpt.pal.ncl_precip2.reverse()}, 'ncl_precip2-inv');



