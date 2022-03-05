// REQUIRE THE EE-CPTCITY MODULE
var cpt = require("users/ambarja/ee-cptcity:cptcity");

// ACCESS THE COMPLETE LIST OF CPTCITY COLOR PALETTES
print("CPTCITY COLOR PALETTES", cpt.pal);

// ACCESS A CPTCITY PALETTE:
// 1.THE FIRST FORM
print("Grass elevation", cpt.pal.grass_elevation);

// 2.THE SECON FORM
print("Grass elevation pallete", cpt.pal["grass_elevation"]);

// CREATE A COLORBAR
print("CREATING A COLORBAR",
  cpt.colorbar("Grass elevation",0,100,cpt.pal.grass_elevation));
