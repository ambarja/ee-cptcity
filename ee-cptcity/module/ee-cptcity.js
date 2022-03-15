/*
=====================
EE-CPTCITY 1.0.0
=====================

---------------------------------------------------------------------------------
cptcity color Palettes for the Google Earth Engine JavaScript API (Code Editor)
---------------------------------------------------------------------------------

===========
MIT License
===========

Copyright (c) 2022 Antony Marcos Barja Ingaruca

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

=================
GitHub Repository
=================

ee-cptcity module: https://github.com/ambarja/ee-cptcity

*/

/*
Original function is based in pokepalletes of David Montero
link: https://github.com/davemlz/ee-pokepalettes
*/

/**
 * Creates a color bar panel.
 *
 * @param {string} title - Title of the colorbar.
 * @param {numeric} minValue - Min label value.
 * @param {numeric} maxValue - Max label value.
 * @param {Array} palette - Palette to use.
 *
 */

exports.draw_pal = function (title, minValue, maxValue, palette) {
  function makeColorBarParams(palette) {
    return {
      bbox: [0, 0, 1, 0.1],
      dimensions: '100x10',
      format: 'png',
      min: 0,
      max: 1,
      palette: palette,
    };
  }

  function makeColorBar(palette) {
    return ui.Thumbnail({
      image: ee.Image.pixelLonLat().select(0),
      params: makeColorBarParams(palette),
      style: { stretch: 'horizontal', margin: '0px 8px', maxHeight: '24px' },
    });
  }

  function makeLabels(min, max) {
    return ui.Panel({
      widgets: [
        ui.Label(min, { margin: '4px 8px' }),
        ui.Label(
          (max / 2),
          { margin: '4px 8px', textAlign: 'center', stretch: 'horizontal' }),
        ui.Label(max, { margin: '4px 8px' })
      ],
      layout: ui.Panel.Layout.flow('horizontal')
    });
  }

  var legendTitle = ui.Label({
    value: title,
    style: { fontWeight: 'bold' }
  });

  return ui.Panel([
    legendTitle,
    makeColorBar(palette),
    makeLabels(minValue, maxValue)
  ]);

};

/**
* Returns the cptcity color palettes.
*/

exports.pal = {
  "arendal_arctic": [
    "#2C3563",
    "#5D6695",
    "#BABBC9",
    "#CAE88B",
    "#EBCE6C",
    "#AE9E59"
  ],
  "arendal_temperature": [
    "#1E5CB3",
    "#04A1E6",
    "#99DBB8",
    "#F3EF1D",
    "#F57215",
    "#A4262C"
  ],
  "arendal_zambezi_focus": [
    "#98CB4E",
    "#DCE164",
    "#FAE584",
    "#C38C45",
    "#9C6A3E",
    "#FFFFFF"
  ],
  "cividis_cividis": [
    "#00204D",
    "#31446B",
    "#666970",
    "#958F78",
    "#CBBA69",
    "#FFEA46"
  ],
  "cmocean_algae": [
    "#D7F9D0",
    "#97CE8B",
    "#46A956",
    "#097E4B",
    "#1A5034",
    "#122414"
  ],
  "cmocean_amp": [
    "#F1EDEC",
    "#DCB1A3",
    "#CA775B",
    "#B33826",
    "#7F0E29",
    "#3C0912"
  ],
  "cmocean_balance": [
    "#181C43",
    "#1670BC",
    "#AAC2CB",
    "#DCB2A4",
    "#B33826",
    "#3C0912"
  ],
  "cmocean_curl": [
    "#151D44",
    "#117D79",
    "#B6CBB0",
    "#E6B8A2",
    "#AE4060",
    "#340D35"
  ],
  "cmocean_deep": [
    "#FDFECC",
    "#92D8A4",
    "#52A8A3",
    "#407598",
    "#41407B",
    "#281A2C"
  ],
  "cmocean_delta": [
    "#112040",
    "#2378A3",
    "#ACCEC6",
    "#D9C560",
    "#33801F",
    "#172313"
  ],
  "cmocean_dense": [
    "#E6F1F1",
    "#96C5E2",
    "#7390E3",
    "#7954BB",
    "#682471",
    "#360E24"
  ],
  "cmocean_diff": [
    "#082340",
    "#597386",
    "#C5C9CE",
    "#CDC6B6",
    "#796C40",
    "#1C2207"
  ],
  "cmocean_gray": [
    "#000000",
    "#2D2D2D",
    "#5B5B5A",
    "#8B8A8A",
    "#C1C0BF",
    "#FFFFFD"
  ],
  "cmocean_haline": [
    "#2A186C",
    "#0D4D96",
    "#2C7C89",
    "#4BAB81",
    "#95D35D",
    "#FDEF9A"
  ],
  "cmocean_ice": [
    "#040613",
    "#302F5F",
    "#3E5EA9",
    "#5296C1",
    "#8CCBD6",
    "#EAFDFD"
  ],
  "cmocean_matter": [
    "#FEEDB0",
    "#F5A773",
    "#E26253",
    "#B32E5F",
    "#721A60",
    "#2F0F3E"
  ],
  "cmocean_oxy": [
    "#400505",
    "#5C4441",
    "#80807F",
    "#B6B6B5",
    "#F6F7D8",
    "#DDAF19"
  ],
  "cmocean_phase": [
    "#A8780D",
    "#DC3C6D",
    "#B64BED",
    "#3B8CCB",
    "#199A5E",
    "#A8780D"
  ],
  "cmocean_rain": [
    "#EEEDF3",
    "#CBBA98",
    "#739D75",
    "#0C7B6E",
    "#1E4B5F",
    "#221B38"
  ],
  "cmocean_solar": [
    "#331418",
    "#732724",
    "#A54A17",
    "#C47F15",
    "#D8BA2A",
    "#E1FD4B"
  ],
  "cmocean_speed": [
    "#FFFDCD",
    "#D8C55F",
    "#8EA20B",
    "#33801E",
    "#10532C",
    "#172313"
  ],
  "cmocean_tarn": [
    "#17230E",
    "#846A25",
    "#E3BFA3",
    "#CACBA9",
    "#2E7E7E",
    "#101E4F"
  ],
  "cmocean_tempo": [
    "#FFF6F4",
    "#B6CBAF",
    "#5DA786",
    "#117D79",
    "#1C4D61",
    "#151D44"
  ],
  "cmocean_thermal": [
    "#042333",
    "#40349F",
    "#8B538D",
    "#D66C6C",
    "#FCA63C",
    "#E8FA5B"
  ],
  "cmocean_topo": [
    "#281A2C",
    "#407598",
    "#92D8A4",
    "#27511E",
    "#B3913F",
    "#F9FDE4"
  ],
  "cmocean_turbid": [
    "#E9F6AB",
    "#CFBC66",
    "#B58740",
    "#895D3A",
    "#563E30",
    "#221F1B"
  ],
  "em_NZ_blue": [
    "#0000FF",
    "#598A3B",
    "#FFBA77",
    "#FFB171",
    "#FFAD6D",
    "#FFFFFF"
  ],
  "esri_effects_park_boundary_1": [
    "#458A6F",
    "#5EBD9C",
    "#C1DEA9",
    "#EDEADA",
    "#EDEADA",
    "#EDEADA"
  ],
  "esri_effects_park_gradation_1": [
    "#458A6F",
    "#50A185",
    "#5EBD9D",
    "#84DA9E",
    "#BCF0B1",
    "#BCF0B1"
  ],
  "esri_events_current_dir_3": [
    "#73B2FF",
    "#E8EE93",
    "#FFE47A",
    "#EEE398",
    "#B0FFB5",
    "#73B2FF"
  ],
  "esri_events_current_dir_4": [
    "#73DEFF",
    "#E7F790",
    "#FFE47A",
    "#EEE398",
    "#B0FFB0",
    "#73DEFF"
  ],
  "esri_events_desertification_5": [
    "#FFFFE6",
    "#FFFFA4",
    "#F7EA59",
    "#E9AE14",
    "#C46C00",
    "#963C00"
  ],
  "esri_events_dry_wet_4": [
    "#FFFFC9",
    "#DFCE8B",
    "#BAAB56",
    "#7FA81E",
    "#00A33F",
    "#00109E"
  ],
  "esri_events_fire_active_1": [
    "#4F4F4F",
    "#887653",
    "#C79228",
    "#E67800",
    "#E63900",
    "#E60000"
  ],
  "esri_events_fire_active_2": [
    "#333333",
    "#81814F",
    "#D6D62B",
    "#F8C500",
    "#ED5B00",
    "#E60000"
  ],
  "esri_events_global_warming": [
    "#000000",
    "#6C1D81",
    "#1092DE",
    "#38A800",
    "#C3EB00",
    "#E60000"
  ],
  "esri_hillshade_illumination": [
    "#FFFFBF",
    "#D7DDB5",
    "#B1BDAC",
    "#899B9F",
    "#688094",
    "#46678A"
  ],
  "esri_hypsometry_bath_bath_111": [
    "#63ACFF",
    "#78C2FF",
    "#8CD3FF",
    "#A2E1FF",
    "#B5EDFF",
    "#C9F5FF"
  ],
  "esri_hypsometry_bath_bath_112": [
    "#002673",
    "#0041A8",
    "#005FE3",
    "#278FFF",
    "#75C3FF",
    "#BFE9FF"
  ],
  "esri_hypsometry_bath_bath_113": [
    "#002673",
    "#002673",
    "#003D91",
    "#005CCC",
    "#2990FF",
    "#BFE9FF"
  ],
  "esri_hypsometry_bath_bath_114": [
    "#C400FF",
    "#8900FB",
    "#4200F7",
    "#3C3CF2",
    "#689BED",
    "#74FCDF"
  ],
  "esri_hypsometry_bath_bath_115": [
    "#8A6F45",
    "#17D04A",
    "#00ACE6",
    "#0063EE",
    "#2E7BFF",
    "#73B2FF"
  ],
  "esri_hypsometry_planet_mars_1": [
    "#4F4F4F",
    "#705A50",
    "#9C623E",
    "#D48614",
    "#F0AD32",
    "#FFD280"
  ],
  "esri_hypsometry_planet_mars_2": [
    "#4F4F4F",
    "#705A50",
    "#96684B",
    "#BE975F",
    "#E0B970",
    "#FFD280"
  ],
  "gery_seismic": [
    "#FF2929",
    "#FFBFBF",
    "#FFEEEE",
    "#EEEEFF",
    "#C0C0FF",
    "#2828FF"
  ],
  "gist_earth": [
    "#000000",
    "#1F5E7C",
    "#3E915A",
    "#8DAD56",
    "#C5A56F",
    "#FFFFFF"
  ],
  "gist_gray": [
    "#000000",
    "#323232",
    "#656565",
    "#999999",
    "#CCCCCC",
    "#FFFFFF"
  ],
  "gist_heat": [
    "#000000",
    "#470000",
    "#920000",
    "#DC3C00",
    "#FF9E36",
    "#FFFDFB"
  ],
  "gist_ncar": [
    "#000080",
    "#00F1FF",
    "#74EA00",
    "#FFCA05",
    "#EA09FF",
    "#FFFFFF"
  ],
  "gist_rainbow": [
    "#FF002A",
    "#FFE600",
    "#05FF00",
    "#00ECFF",
    "#2300FF",
    "#FF00C9"
  ],
  "gist_stern": [
    "#000000",
    "#443162",
    "#6565CA",
    "#989897",
    "#CCCC3C",
    "#FEFEFB"
  ],
  "gmt_GMT_abyss": [
    "#000000",
    "#1E3054",
    "#2F538A",
    "#448CC8",
    "#6EC3EB",
    "#F5FFFF"
  ],
  "gmt_GMT_bathy": [
    "#000000",
    "#213059",
    "#325B95",
    "#4EA1CA",
    "#7DD0D3",
    "#F5FFFF"
  ],
  "gmt_GMT_cool": [
    "#00FFFF",
    "#33CCFF",
    "#6699FF",
    "#9965FF",
    "#CC32FF",
    "#FF00FF"
  ],
  "gmt_GMT_copper": [
    "#000000",
    "#663F28",
    "#CC7F51",
    "#FFA76B",
    "#FFB775",
    "#FFC880"
  ],
  "gmt_GMT_cubhelix": [
    "#000000",
    "#153C4D",
    "#53792E",
    "#CF7E92",
    "#C1CAF3",
    "#FFFFFF"
  ],
  "gmt_GMT_dem1": [
    "#336600",
    "#9ACF41",
    "#FAE495",
    "#9E6A22",
    "#663302",
    "#FFFFFF"
  ],
  "gmt_GMT_dem2": [
    "#006147",
    "#669F4E",
    "#AF6018",
    "#663E2A",
    "#C5C5C5",
    "#FFFFFF"
  ],
  "gmt_GMT_dem3": [
    "#3CB371",
    "#DAA76B",
    "#B25807",
    "#C69B75",
    "#EEE9D7",
    "#FFFAFA"
  ],
  "gmt_GMT_dem4": [
    "#AEEFD5",
    "#6EC24A",
    "#CFB11C",
    "#761002",
    "#8C654C",
    "#EBE9EB"
  ],
  "gmt_GMT_drywet": [
    "#86612A",
    "#E2CE6B",
    "#7FEEAF",
    "#1BA7EC",
    "#2018C1",
    "#083371"
  ],
  "gmt_GMT_elevation": [
    "#699885",
    "#83B59B",
    "#D3C9B3",
    "#D4C0B5",
    "#DEDDDE",
    "#F6F7F6"
  ],
  "gmt_GMT_gebco": [
    "#00F0FF",
    "#39FFFF",
    "#8CFFE6",
    "#C3FFD7",
    "#DEFFE6",
    "#EBFFFF"
  ],
  "gmt_GMT_globe": [
    "#9900FF",
    "#4455FF",
    "#36AFFF",
    "#DCF3FF",
    "#A07F0F",
    "#FFFFFF"
  ],
  "gmt_GMT_haxby": [
    "#0A0079",
    "#1A66F0",
    "#6DEBDB",
    "#F5DB6B",
    "#FF7C7C",
    "#FFFFFF"
  ],
  "gmt_GMT_hot": [
    "#000000",
    "#990000",
    "#FF3300",
    "#FFCC00",
    "#FFFF66",
    "#FFFFFF"
  ],
  "gmt_GMT_ibcso": [
    "#1F284F",
    "#2C4C7F",
    "#396FB0",
    "#4FA4DB",
    "#62C6F1",
    "#8DD2EF"
  ],
  "gmt_GMT_jet": [
    "#00007F",
    "#0066FF",
    "#CCFFFF",
    "#FFFF65",
    "#FF6500",
    "#7F0000"
  ],
  "gmt_GMT_nighttime": [
    "#08001A",
    "#29485E",
    "#4D7C7C",
    "#77884E",
    "#B6B081",
    "#FFE6E6"
  ],
  "gmt_GMT_no_green": [
    "#2060FF",
    "#00CFFF",
    "#7FFFFF",
    "#FFF000",
    "#FF8A00",
    "#FF0000"
  ],
  "gmt_GMT_ocean": [
    "#000000",
    "#000828",
    "#005E8C",
    "#44BBBB",
    "#BBF7B9",
    "#FAFFFF"
  ],
  "gmt_GMT_panoply": [
    "#040ED8",
    "#6DC1FF",
    "#AFF5FF",
    "#FFEB00",
    "#FF4800",
    "#9E0000"
  ],
  "gmt_GMT_polar": [
    "#0000FF",
    "#6666FF",
    "#CCCCFF",
    "#FFCBCB",
    "#FF6565",
    "#FF0000"
  ],
  "gmt_GMT_rainbow": [
    "#FF00FF",
    "#0000FF",
    "#00FFFF",
    "#00FF00",
    "#FFFF00",
    "#FF0000"
  ],
  "gmt_GMT_red2green": [
    "#FF0000",
    "#FF6666",
    "#FFCCCC",
    "#CBFFCB",
    "#65FF65",
    "#00FF00"
  ],
  "gmt_GMT_relief": [
    "#000000",
    "#007AAA",
    "#DAFBDB",
    "#8C783A",
    "#FAEB88",
    "#FFFFFF"
  ],
  "gmt_GMT_seafloor": [
    "#6900B6",
    "#6A10CC",
    "#344EDA",
    "#0F91E7",
    "#7BC5F4",
    "#F1FCFF"
  ],
  "gmt_GMT_sealand": [
    "#8C66FF",
    "#66D1FF",
    "#66FF9B",
    "#C1FF66",
    "#FFBDA6",
    "#FFCCF2"
  ],
  "gmt_GMT_seis": [
    "#AA0000",
    "#FF4400",
    "#FFDD00",
    "#BCFF0C",
    "#00CF8B",
    "#0000CD"
  ],
  "gmt_GMT_split": [
    "#8080FF",
    "#191999",
    "#000033",
    "#330000",
    "#991919",
    "#FF8080"
  ],
  "gmt_GMT_topo": [
    "#C877D9",
    "#8AC1E6",
    "#C5F285",
    "#D39E9E",
    "#97CC70",
    "#FFFFFF"
  ],
  "gmt_GMT_wysiwyg": [
    "#400040",
    "#0099FF",
    "#40FFD9",
    "#D9FF40",
    "#FF5340",
    "#FFE0E1"
  ],
  "grass_aspect": [
    "#000000",
    "#666666",
    "#CCCCCC",
    "#CBCBCB",
    "#656565",
    "#000000"
  ],
  "grass_aspectcolr": [
    "#FFFFFF",
    "#FFFF00",
    "#00FF00",
    "#00FFFF",
    "#FF0000",
    "#FFFF00"
  ],
  "grass_bcyr": [
    "#0000FF",
    "#0099FF",
    "#33FFCB",
    "#CCFF32",
    "#FF9800",
    "#FF0000"
  ],
  "grass_bgyr": [
    "#0000FF",
    "#009965",
    "#33FF00",
    "#CCFF00",
    "#FF9800",
    "#FF0000"
  ],
  "grass_byg": [
    "#0000FF",
    "#666699",
    "#CCCC32",
    "#CBFF00",
    "#65FF00",
    "#00FF00"
  ],
  "grass_byr": [
    "#0000FF",
    "#666699",
    "#CCCC32",
    "#FFCB00",
    "#FF6500",
    "#FF0000"
  ],
  "grass_celsius": [
    "#000028",
    "#08EEDF",
    "#2F9708",
    "#E07E08",
    "#803435",
    "#9B0A9B"
  ],
  "grass_differences": [
    "#0000FF",
    "#6666FF",
    "#CCCCFF",
    "#FFCBCB",
    "#FF6565",
    "#FF0000"
  ],
  "grass_elevation": [
    "#00BFBF",
    "#00FF00",
    "#FFFF00",
    "#FF7F00",
    "#BF7F3F",
    "#141414"
  ],
  "grass_etopo2": [
    "#000000",
    "#8282F4",
    "#5AAB5A",
    "#469F48",
    "#A4A87C",
    "#FFFFFF"
  ],
  "grass_evi": [
    "#051852",
    "#CEC5B4",
    "#A4C224",
    "#4A970D",
    "#004C00",
    "#000000"
  ],
  "grass_gdd": [
    "#8000FF",
    "#0000FF",
    "#00FF00",
    "#FFFF00",
    "#FF0000",
    "#B44D19"
  ],
  "grass_gyr": [
    "#00FF00",
    "#66FF00",
    "#CCFF00",
    "#FFCB00",
    "#FF6500",
    "#FF0000"
  ],
  "grass_haxby": [
    "#2539AF",
    "#32BEFF",
    "#8AECAE",
    "#F0EC79",
    "#FFA144",
    "#FFFFFF"
  ],
  "grass_ndvi": [
    "#051852",
    "#CEC5B4",
    "#90AA3C",
    "#65A300",
    "#005A01",
    "#000000"
  ],
  "grass_precipitation_monthly": [
    "#808080",
    "#E1B709",
    "#14E533",
    "#1319FF",
    "#B200FF",
    "#FF0000"
  ],
  "grass_precipitation": [
    "#FFFFFF",
    "#BFFFF8",
    "#0065FF",
    "#8E1EFF",
    "#2C002C",
    "#000000"
  ],
  "grass_rainbow": [
    "#FFFF00",
    "#00FF00",
    "#00FFFF",
    "#0000FF",
    "#FF00FF",
    "#FF0000"
  ],
  "grass_ramp": [
    "#000000",
    "#0000FF",
    "#000000",
    "#00FF00",
    "#000000",
    "#FF0000"
  ],
  "grass_rstcurv": [
    "#8000FF",
    "#004CFF",
    "#28FFF3",
    "#F4FF27",
    "#FF4C00",
    "#FF00C8"
  ],
  "grass_ryb": [
    "#FF0000",
    "#FF6600",
    "#FFCC00",
    "#CBCB33",
    "#656599",
    "#0000FF"
  ],
  "grass_ryg": [
    "#FF0000",
    "#FF6600",
    "#FFCC00",
    "#CBFF00",
    "#65FF00",
    "#00FF00"
  ],
  "grass_sepia": [
    "#000000",
    "#442F13",
    "#826031",
    "#B79360",
    "#E1C8A2",
    "#FFFEFB"
  ],
  "grass_slope": [
    "#FFFFFF",
    "#98FF00",
    "#00FFCC",
    "#3300FF",
    "#FF0065",
    "#000000"
  ],
  "grass_srtm": [
    "#000000",
    "#000046",
    "#6480FF",
    "#E5E57F",
    "#B99A64",
    "#FFFFFF"
  ],
  "grass_terrain": [
    "#000000",
    "#9696FF",
    "#5AA55A",
    "#46A946",
    "#969C64",
    "#FFFFFF"
  ],
  "grass_wave": [
    "#FF5555",
    "#98BB11",
    "#32DC77",
    "#3376DD",
    "#9910BA",
    "#FF5555"
  ],
  "h5_autumn": [
    "#FF0000",
    "#FF3300",
    "#FF6600",
    "#FF9900",
    "#FFCC00",
    "#FFFF00"
  ],
  "h5_bluered": [
    "#0000FF",
    "#6666FF",
    "#CCCCFF",
    "#FFCBCB",
    "#FF6565",
    "#FF0000"
  ],
  "h5_bone": [
    "#000001",
    "#2C2C3E",
    "#585C78",
    "#8599A5",
    "#B9D1D1",
    "#FFFFFF"
  ],
  "h5_cool": [
    "#00FFFF",
    "#33CCFF",
    "#6699FF",
    "#9965FF",
    "#CC32FF",
    "#FF00FF"
  ],
  "h5_copper": [
    "#000000",
    "#3F2719",
    "#7F4F32",
    "#BF774B",
    "#FD9F64",
    "#FFC77E"
  ],
  "h5_dkbluered": [
    "#070033",
    "#0F00DB",
    "#9BBAFF",
    "#FFB99A",
    "#DB000F",
    "#350007"
  ],
  "h5_green": [
    "#FFFFFF",
    "#CCFFCC",
    "#99FF99",
    "#65FF65",
    "#32FF32",
    "#00FF00"
  ],
  "h5_hot": [
    "#0A0000",
    "#900000",
    "#FF1700",
    "#FF9C00",
    "#FFFF35",
    "#FFFFFF"
  ],
  "h5_hsv": [
    "#FF0000",
    "#D0FF00",
    "#00FF5B",
    "#0073FF",
    "#B800FF",
    "#FF0017"
  ],
  "h5_jet": [
    "#0000BF",
    "#007FFF",
    "#3FFFFF",
    "#FFFF3E",
    "#FF7F00",
    "#BF0000"
  ],
  "h5_pink": [
    "#1E0000",
    "#905C5C",
    "#C58A83",
    "#D9C6A0",
    "#ECECC6",
    "#FFFFFF"
  ],
  "h5_spring": [
    "#FF00FF",
    "#FF33CC",
    "#FF6699",
    "#FF9965",
    "#FFCC33",
    "#FFFF00"
  ],
  "h5_summer": [
    "#007F66",
    "#339966",
    "#66B266",
    "#99CC66",
    "#CCE566",
    "#FFFF66"
  ],
  "h5_winter": [
    "#0000FF",
    "#0033E5",
    "#0066CB",
    "#0099B2",
    "#00CC98",
    "#00FF7F"
  ],
  "h5_yellow": [
    "#FFFFFF",
    "#FFFFCC",
    "#FFFF99",
    "#FFFF65",
    "#FFFF32",
    "#FFFF00"
  ],
  "heine_GTS2012_epochs": [
    "#FEF2EC",
    "#EBB05A",
    "#B168B1",
    "#B9C087",
    "#84CC99",
    "#8CB06C"
  ],
  "ibcso_ibcso_bath": [
    "#1F284F",
    "#2C4C7F",
    "#396FB0",
    "#4FA4DB",
    "#62C6F1",
    "#8DD2EF"
  ],
  "ibcso_ibcso": [
    "#1F284F",
    "#2E5085",
    "#3C77BC",
    "#5AB9E9",
    "#72CAEE",
    "#FFFFFF"
  ],
  "imagej_001_fire": [
    "#000000",
    "#6800DD",
    "#C9074B",
    "#FF8300",
    "#FFDC00",
    "#FFFFFF"
  ],
  "imagej_002_spectrum": [
    "#FF0000",
    "#CCFF00",
    "#00FF66",
    "#0066FF",
    "#CC00FF",
    "#FF0000"
  ],
  "imagej_003_ice": [
    "#009C8C",
    "#18BCD6",
    "#9860FA",
    "#FA5DDE",
    "#FA3470",
    "#E6001B"
  ],
  "imagej_004_phase": [
    "#0000FC",
    "#5050E8",
    "#A0A0D4",
    "#D0A0A0",
    "#E45050",
    "#FC0000"
  ],
  "imagej_16_colors": [
    "#000000",
    "#006EFF",
    "#01FE01",
    "#FF8D00",
    "#F5009E",
    "#FFFFFF"
  ],
  "imagej_16_equal": [
    "#000000",
    "#FC9000",
    "#00C408",
    "#1810E8",
    "#884898",
    "#FCFCFC"
  ],
  "imagej_20_colors": [
    "#310194",
    "#0101F0",
    "#019E80",
    "#80ED01",
    "#F0B201",
    "#C5C5C5"
  ],
  "imagej_amber": [
    "#E7F39B",
    "#FEEE66",
    "#F6AB2F",
    "#A44D01",
    "#511400",
    "#010101"
  ],
  "imagej_auxctq": [
    "#010401",
    "#013701",
    "#01315A",
    "#9F019E",
    "#D27421",
    "#FDFDFD"
  ],
  "imagej_blue_orange": [
    "#020303",
    "#333958",
    "#610D8D",
    "#C45C6D",
    "#FB7107",
    "#FEFBF9"
  ],
  "imagej_brain": [
    "#010301",
    "#055B44",
    "#080AE7",
    "#9610F6",
    "#FD7316",
    "#FEFEFE"
  ],
  "imagej_cequal": [
    "#010101",
    "#017198",
    "#8A18FE",
    "#E76875",
    "#FEE667",
    "#FEFEFE"
  ],
  "imagej_cmy_yellow": [
    "#000000",
    "#333300",
    "#666600",
    "#999900",
    "#CCCC00",
    "#FFFF00"
  ],
  "imagej_cold": [
    "#141414",
    "#01FEFE",
    "#8080FE",
    "#FE01FE",
    "#FE807F",
    "#FEFEEB"
  ],
  "imagej_gem_256": [
    "#010202",
    "#011B34",
    "#4B0D66",
    "#B1284D",
    "#FE8034",
    "#FEFCFA"
  ],
  "imagej_gold": [
    "#000000",
    "#894E07",
    "#D99D0E",
    "#FDE439",
    "#EAD272",
    "#FFFFFF"
  ],
  "imagej_gyr_centre": [
    "#000000",
    "#63C604",
    "#C8D601",
    "#FBB100",
    "#FA5800",
    "#FBF1F0"
  ],
  "imagej_heart": [
    "#010101",
    "#3D3D3D",
    "#300A01",
    "#8B4218",
    "#C49455",
    "#FDFDFD"
  ],
  "imagej_hue": [
    "#FF0000",
    "#708F00",
    "#00B649",
    "#004CB3",
    "#6E0091",
    "#F80007"
  ],
  "imagej_icool": [
    "#010302",
    "#016665",
    "#4B35CA",
    "#B1329B",
    "#FE9730",
    "#FEFAF6"
  ],
  "imagej_iman": [
    "#000000",
    "#FC3700",
    "#5BD904",
    "#0C42D9",
    "#8C40A0",
    "#FCFCFC"
  ],
  "imagej_neon_blue": [
    "#000000",
    "#000065",
    "#0000CB",
    "#3131FF",
    "#9797FF",
    "#FFFFFF"
  ],
  "imagej_neon_green": [
    "#000000",
    "#006500",
    "#00CB00",
    "#31FF31",
    "#97FF97",
    "#FFFFFF"
  ],
  "imagej_neon_magenta": [
    "#000000",
    "#650065",
    "#CB00CB",
    "#FF31FF",
    "#FF97FF",
    "#FFFFFF"
  ],
  "imagej_neon_red": [
    "#000000",
    "#650000",
    "#CB0000",
    "#FF3131",
    "#FF9797",
    "#FFFFFF"
  ],
  "imagej_rgb_blue": [
    "#000000",
    "#000033",
    "#000066",
    "#000099",
    "#0000CC",
    "#0000FF"
  ],
  "imagej_rgb_green": [
    "#000000",
    "#003300",
    "#006600",
    "#009900",
    "#00CC00",
    "#00FF00"
  ],
  "imagej_rgb_red": [
    "#000000",
    "#330000",
    "#660000",
    "#990000",
    "#CC0000",
    "#FF0000"
  ],
  "imagej_royal": [
    "#010107",
    "#0159FE",
    "#3EFE7E",
    "#FE9E01",
    "#EE5959",
    "#FEFEFE"
  ],
  "imagej_sepia": [
    "#000000",
    "#6B4D30",
    "#997B5E",
    "#C7A98C",
    "#F6D8BB",
    "#FFFFFF"
  ],
  "imagej_smart": [
    "#020202",
    "#2A2A2A",
    "#512E27",
    "#8C1001",
    "#F0A608",
    "#FEFDFC"
  ],
  "imagej_topography": [
    "#000000",
    "#000084",
    "#0B1DFF",
    "#2BD606",
    "#896D00",
    "#E9F6FE"
  ],
  "imagej_unionjack": [
    "#000000",
    "#000095",
    "#9797E4",
    "#E59B9B",
    "#CA3030",
    "#FFFFFF"
  ],
  "jjg_cbcont_div_cbcBrBG": [
    "#543005",
    "#B07222",
    "#F3E4BB",
    "#BFE7E1",
    "#258880",
    "#003C30"
  ],
  "jjg_cbcont_div_cbcPiYG": [
    "#8E0152",
    "#D65B9F",
    "#FBDBEC",
    "#E1F3C8",
    "#70AF37",
    "#276419"
  ],
  "jjg_cbcont_div_cbcPRGn": [
    "#40004B",
    "#8E5B9F",
    "#E3CFE5",
    "#D3EDCD",
    "#479D54",
    "#00441B"
  ],
  "jjg_cbcont_div_cbcPuOr": [
    "#7F3B08",
    "#D2750F",
    "#FEDCAD",
    "#D4D5E8",
    "#725CA1",
    "#2D004B"
  ],
  "jjg_cbcont_div_cbcRdBu": [
    "#67001F",
    "#CB4A42",
    "#FCD5C0",
    "#CAE1EE",
    "#3885BC",
    "#053061"
  ],
  "jjg_cbcont_div_cbcRdGy": [
    "#67001F",
    "#CB4A42",
    "#FCD5C0",
    "#DCDCDC",
    "#757575",
    "#1A1A1A"
  ],
  "jjg_cbcont_div_cbcRdYlBu": [
    "#A50026",
    "#EB5A3A",
    "#FEDB8B",
    "#DAF0F6",
    "#659CC7",
    "#313695"
  ],
  "jjg_cbcont_div_cbcRdYlGn": [
    "#A50026",
    "#EB5A3A",
    "#FEDB86",
    "#D3EC87",
    "#4FB25D",
    "#006837"
  ],
  "jjg_cbcont_div_cbcSpectral": [
    "#9E0142",
    "#EA5F46",
    "#FEDB86",
    "#DFF299",
    "#56B0AC",
    "#5E4FA2"
  ],
  "jjg_cbcont_seq_cbcBlues": [
    "#F7FBFF",
    "#D6E6F4",
    "#96C4E0",
    "#4793C7",
    "#115AA1",
    "#08306B"
  ],
  "jjg_cbcont_seq_cbcBuGn": [
    "#F7FCFD",
    "#DDF1F2",
    "#93D5C3",
    "#46AC7A",
    "#0E7433",
    "#00441B"
  ],
  "jjg_cbcont_seq_cbcBuPu": [
    "#F7FCFD",
    "#D5E3EF",
    "#9FB5D6",
    "#8B6FB3",
    "#7E2183",
    "#4D004B"
  ],
  "jjg_cbcont_seq_cbcGnBu": [
    "#F7FCF0",
    "#DAF0D4",
    "#A1DABC",
    "#54B3CA",
    "#1672AE",
    "#084081"
  ],
  "jjg_cbcont_seq_cbcGreens": [
    "#F7FCF5",
    "#DAF1D5",
    "#9AD597",
    "#49AC5F",
    "#0E7433",
    "#00441B"
  ],
  "jjg_cbcont_seq_cbcGreys": [
    "#FFFFFF",
    "#E8E8E8",
    "#B7B7B7",
    "#767676",
    "#333333",
    "#000000"
  ],
  "jjg_cbcont_seq_cbcOranges": [
    "#FFF5EB",
    "#FEDEBF",
    "#FDAB67",
    "#EF6C1B",
    "#B63B02",
    "#7F2704"
  ],
  "jjg_cbcont_seq_cbcOrRd": [
    "#FFF7EC",
    "#FEE1BA",
    "#FCB27B",
    "#EE6644",
    "#BC130C",
    "#7F0000"
  ],
  "jjg_cbcont_seq_cbcPuBu": [
    "#FFF7FB",
    "#E2DFEE",
    "#9FBBD9",
    "#3E90C1",
    "#035F95",
    "#023858"
  ],
  "jjg_cbcont_seq_cbcPuBuGn": [
    "#FFF7FB",
    "#E2DDEC",
    "#9BBBD9",
    "#3993B9",
    "#017069",
    "#014636"
  ],
  "jjg_cbcont_seq_cbcPuRd": [
    "#F7F4F9",
    "#E1D3E7",
    "#D18DC3",
    "#DF368A",
    "#A80747",
    "#67001F"
  ],
  "jjg_cbcont_seq_cbcPurples": [
    "#FCFBFD",
    "#E7E6F1",
    "#B9B8D8",
    "#847CB9",
    "#5A3395",
    "#3F007D"
  ],
  "jjg_cbcont_seq_cbcRdPu": [
    "#FFF7F3",
    "#FCD7D3",
    "#F996B1",
    "#DB3995",
    "#890078",
    "#49006A"
  ],
  "jjg_cbcont_seq_cbcReds": [
    "#FFF5F0",
    "#FDD3C1",
    "#FC8D6F",
    "#EB4131",
    "#AD1117",
    "#67000D"
  ],
  "jjg_cbcont_seq_cbcYlGn": [
    "#FFFFE5",
    "#EBF7B4",
    "#A5DA8C",
    "#4BAB60",
    "#0E6F3A",
    "#004529"
  ],
  "jjg_cbcont_seq_cbcYlGnBu": [
    "#FFFFD9",
    "#DFF2B5",
    "#7ACBBC",
    "#2891BC",
    "#214295",
    "#081D58"
  ],
  "jjg_cbcont_seq_cbcYlOrBr": [
    "#FFFFE5",
    "#FEEFAE",
    "#FEBC50",
    "#EB7416",
    "#A73B03",
    "#662506"
  ],
  "jjg_cbcont_seq_cbcYlOrRd": [
    "#FFFFCC",
    "#FEE693",
    "#FEAE4F",
    "#F7562C",
    "#C50A22",
    "#800026"
  ],
  "jjg_ccolo_adgrapho_500_LOVERS_ThankYou": [
    "#F23D3D",
    "#F8664E",
    "#FCB270",
    "#EEE695",
    "#AFE8B8",
    "#7DDBC7"
  ],
  "jjg_ccolo_adgrapho_Asleep": [
    "#8D9996",
    "#8FA6A0",
    "#9CC6AC",
    "#BCE3A6",
    "#E8F0A5",
    "#FFF4AB"
  ],
  "jjg_ccolo_adgrapho_Autumn_Harmony": [
    "#AB505E",
    "#C27868",
    "#D4B480",
    "#BABC90",
    "#829482",
    "#607873"
  ],
  "jjg_ccolo_adgrapho_Canzone_Per_Te": [
    "#E9F0C5",
    "#D6E2BC",
    "#AEC7AC",
    "#A0A395",
    "#B27679",
    "#BD606B"
  ],
  "jjg_ccolo_adgrapho_Latent": [
    "#D4D3A3",
    "#EABC9A",
    "#FF8E8E",
    "#F8607A",
    "#AE4466",
    "#6B4063"
  ],
  "jjg_ccolo_adgrapho_Never_See_The_Sun": [
    "#F2DCC2",
    "#EACBA5",
    "#DC9D79",
    "#C4626E",
    "#8E3C6D",
    "#683569"
  ],
  "jjg_ccolo_adgrapho_Oct": [
    "#733043",
    "#8C4248",
    "#BD7450",
    "#E0B272",
    "#C6C299",
    "#A1B3A1"
  ],
  "jjg_ccolo_adgrapho_Oktober_Silentium": [
    "#6B1233",
    "#742830",
    "#8B5E3B",
    "#A09862",
    "#A4C498",
    "#A3D6B4"
  ],
  "jjg_ccolo_adgrapho_Road": [
    "#FF8229",
    "#F8A456",
    "#F0D4A3",
    "#EEE6D0",
    "#D3DAC3",
    "#B9C9A9"
  ],
  "jjg_ccolo_alpen_friday_sunset": [
    "#FE2129",
    "#E21A31",
    "#B01640",
    "#811E46",
    "#4A2436",
    "#2C2527"
  ],
  "jjg_ccolo_alpen_mango_mystery": [
    "#4C4F4B",
    "#836247",
    "#DB8237",
    "#FEC516",
    "#BACE26",
    "#74A14A"
  ],
  "jjg_ccolo_alpen_natural_light": [
    "#FC683E",
    "#DE4C51",
    "#8B2668",
    "#301266",
    "#0D0D52",
    "#111143"
  ],
  "jjg_ccolo_alpen_road_spray": [
    "#F7F7E1",
    "#EBFBE0",
    "#C5F6CB",
    "#99E0BD",
    "#84B9AC",
    "#809E97"
  ],
  "jjg_ccolo_alpen_zone_out": [
    "#2C4561",
    "#4F5670",
    "#6D7E87",
    "#92AB92",
    "#BCB683",
    "#BAAA6F"
  ],
  "jjg_ccolo_angelafaye_Coloured_sky_in": [
    "#181427",
    "#743E24",
    "#D88022",
    "#CCA356",
    "#B2BC9B",
    "#ADCCAD"
  ],
  "jjg_ccolo_angelafaye_Mt_Fuji_Sumie": [
    "#E8D19B",
    "#D2C196",
    "#AFA688",
    "#929079",
    "#727566",
    "#616559"
  ],
  "jjg_ccolo_angelafaye_scent_of_spring": [
    "#F7D18F",
    "#FBC399",
    "#FEA387",
    "#F57C68",
    "#C3585F",
    "#9C4858"
  ],
  "jjg_ccolo_angelafaye_soothe_my_mind": [
    "#F2D19C",
    "#D8C593",
    "#BAAE90",
    "#A3887A",
    "#795450",
    "#613A3E"
  ],
  "jjg_ccolo_angelafaye_The_Calanques": [
    "#062F52",
    "#0A5074",
    "#1B818E",
    "#3C9A80",
    "#7EB893",
    "#ADCCAD"
  ],
  "jjg_ccolo_Bionic_Blender_Aphalara_Itadori": [
    "#FAE095",
    "#F1C670",
    "#CC8837",
    "#745223",
    "#383012",
    "#381D03"
  ],
  "jjg_ccolo_Bionic_Blender_Bad_Kitten": [
    "#261C21",
    "#4A1D42",
    "#8F2258",
    "#C7333B",
    "#E46C16",
    "#EB9605"
  ],
  "jjg_ccolo_Bionic_Blender_Death_Top_Work_Shop": [
    "#F7E099",
    "#E9CE7C",
    "#C59E50",
    "#6A7254",
    "#274D4D",
    "#293333"
  ],
  "jjg_ccolo_Bionic_Blender_Drunken_Cow_Woman": [
    "#F2EFE1",
    "#CADBD0",
    "#BAA3A3",
    "#95605F",
    "#382B26",
    "#171615"
  ],
  "jjg_ccolo_Bionic_Blender_IE_have_fun": [
    "#FCE4A6",
    "#FACC9D",
    "#EE9E95",
    "#CC65A4",
    "#763D74",
    "#3B3836"
  ],
  "jjg_ccolo_drumma_Asura": [
    "#D7F0B6",
    "#B8DCAF",
    "#7FAA94",
    "#597072",
    "#483C5E",
    "#432359"
  ],
  "jjg_ccolo_drumma_Buddha": [
    "#FFA578",
    "#FFD2A0",
    "#EEECC0",
    "#C0BBA1",
    "#827A70",
    "#615753"
  ],
  "jjg_ccolo_drumma_Debdebe": [
    "#FBFF8C",
    "#D8E492",
    "#7C9A88",
    "#404E5D",
    "#3C2537",
    "#3B182C"
  ],
  "jjg_ccolo_drumma_Disap_Pointedly": [
    "#33181E",
    "#3C2425",
    "#5D503F",
    "#8C9C72",
    "#CEE4A2",
    "#F7FFB3"
  ],
  "jjg_ccolo_drumma_Karantina": [
    "#F0CA9E",
    "#D3B693",
    "#99907E",
    "#5E6868",
    "#234255",
    "#05304D"
  ],
  "jjg_ccolo_drumma_MOS_6581": [
    "#8C0F2D",
    "#942D3F",
    "#A56E61",
    "#B6A984",
    "#DBCE9A",
    "#F7DA9E"
  ],
  "jjg_ccolo_drumma_Opaque": [
    "#E5E6B8",
    "#D6DDB8",
    "#99BDAE",
    "#788886",
    "#904E63",
    "#9C325C"
  ],
  "jjg_ccolo_drumma_Photosynthesis": [
    "#FFDD99",
    "#E2D091",
    "#A0AA7A",
    "#5D7861",
    "#2F4047",
    "#212236"
  ],
  "jjg_ccolo_drumma_Totoro": [
    "#FFA96B",
    "#F8C893",
    "#E2D1A3",
    "#A69C7A",
    "#5E5F52",
    "#42413D"
  ],
  "jjg_ccolo_electroluv_Beat_Around_The_Bush": [
    "#494A3D",
    "#405546",
    "#507353",
    "#8AA255",
    "#CAD37B",
    "#EBE7A3"
  ],
  "jjg_ccolo_electroluv_Everglowing_Wonder": [
    "#D9FAA8",
    "#C3EA88",
    "#A2BC5D",
    "#8E7350",
    "#7E3B48",
    "#762C43"
  ],
  "jjg_ccolo_electroluv_Hypothetical_Spite": [
    "#040423",
    "#0D0D2C",
    "#1F1F3A",
    "#3C4253",
    "#8E9DA6",
    "#CCDEE8"
  ],
  "jjg_ccolo_electroluv_iCreate": [
    "#ED9761",
    "#F6775C",
    "#EC385B",
    "#AF1850",
    "#6A1A39",
    "#4F1C32"
  ],
  "jjg_ccolo_electroluv_Justified_Reasons": [
    "#FFDA6C",
    "#DAB851",
    "#965038",
    "#6A0E3A",
    "#4C1431",
    "#3B172A"
  ],
  "jjg_ccolo_electroluv_My_Resolute_Heart": [
    "#779196",
    "#7E8086",
    "#8C5F65",
    "#8C3C4C",
    "#762D42",
    "#66303F"
  ],
  "jjg_ccolo_electroluv_Run_Away_Tonight": [
    "#DF9B78",
    "#C98E78",
    "#917274",
    "#544E5D",
    "#2B283A",
    "#1C1629"
  ],
  "jjg_ccolo_electroluv_seashells": [
    "#218695",
    "#70A0A5",
    "#AAA59D",
    "#807A70",
    "#5D544C",
    "#4E453E"
  ],
  "jjg_ccolo_electroluv_solaris": [
    "#F7B39E",
    "#E6A898",
    "#C08D89",
    "#966676",
    "#6C3F58",
    "#562E46"
  ],
  "jjg_ccolo_hana_Amikka": [
    "#DCEADB",
    "#D5DEC2",
    "#CBBFA0",
    "#B28684",
    "#764E54",
    "#513C37"
  ],
  "jjg_ccolo_hana_dammar": [
    "#F9E7C8",
    "#F8DCC0",
    "#C2C4AB",
    "#7DA69D",
    "#627F82",
    "#5B6A69"
  ],
  "jjg_ccolo_hana_Haiku": [
    "#2D1C2E",
    "#2F3A48",
    "#386868",
    "#4E8B70",
    "#7E9C72",
    "#9E9C73"
  ],
  "jjg_ccolo_hana_Maiko": [
    "#E06376",
    "#D25276",
    "#B13D6B",
    "#842E50",
    "#46182A",
    "#240C15"
  ],
  "jjg_ccolo_hana_naturally": [
    "#3B3039",
    "#5A4950",
    "#8A6D73",
    "#AF9391",
    "#C2B8A3",
    "#C1C2A3"
  ],
  "jjg_ccolo_hana_rainy": [
    "#460E8A",
    "#2E3A96",
    "#2880A2",
    "#6CA69F",
    "#ADB898",
    "#BDBC93"
  ],
  "jjg_ccolo_hana_Sea": [
    "#C6C7A9",
    "#B1C0A9",
    "#89ACAF",
    "#4F92B5",
    "#3C73C0",
    "#5062CC"
  ],
  "jjg_ccolo_hana_September": [
    "#3B6E69",
    "#427A6A",
    "#6E9974",
    "#B4C082",
    "#C9C378",
    "#BDB168"
  ],
  "jjg_ccolo_hana_Sugar": [
    "#CF8C76",
    "#CF9C86",
    "#CFBBA6",
    "#C6CCB5",
    "#B3CFBC",
    "#ABCFC3"
  ],
  "jjg_ccolo_phill_bad_moon_rising": [
    "#2F4C73",
    "#223D62",
    "#5B6567",
    "#C0B78E",
    "#EAE0B5",
    "#F5EDCB"
  ],
  "jjg_ccolo_phill_blueberry_pancakes": [
    "#D9D096",
    "#CAC086",
    "#87A08B",
    "#498293",
    "#2A6678",
    "#15576B"
  ],
  "jjg_ccolo_phill_moldy_bread": [
    "#74AB86",
    "#75B68B",
    "#98CE76",
    "#CDE05E",
    "#EDF17D",
    "#F9FC9A"
  ],
  "jjg_ccolo_Skyblue2u_Adrift_in_Dreams": [
    "#CFF09E",
    "#BCE5A3",
    "#90CCA1",
    "#5AA290",
    "#236778",
    "#0B486B"
  ],
  "jjg_ccolo_Skyblue2u_Deep_Skyblues": [
    "#107FC9",
    "#0F66BB",
    "#0C2F9C",
    "#0C1079",
    "#0A0C52",
    "#07093D"
  ],
  "jjg_ccolo_Skyblue2u_Gentle_Waves": [
    "#D3E2B6",
    "#CBDEB5",
    "#B6D3B2",
    "#98C4B1",
    "#78B8B0",
    "#68B3AF"
  ],
  "jjg_ccolo_Skyblue2u_mellon_ball_surprise": [
    "#D1F2A5",
    "#E0F6AC",
    "#F7DFA0",
    "#FFB286",
    "#FA8488",
    "#F56991"
  ],
  "jjg_ccolo_vredeling_After_Eight": [
    "#BAEC95",
    "#AAD488",
    "#88A36C",
    "#667250",
    "#444235",
    "#332927"
  ],
  "jjg_ccolo_vredeling_Another_Earth": [
    "#9ECC14",
    "#8CC62E",
    "#68BB63",
    "#42AF98",
    "#1EA3CC",
    "#0B9DE6"
  ],
  "jjg_ccolo_vredeling_Black_Hole_Sun": [
    "#FFEE99",
    "#E6D78C",
    "#B2A873",
    "#807A5A",
    "#4D4A40",
    "#333333"
  ],
  "jjg_ccolo_vredeling_British_Cheer": [
    "#704DA1",
    "#856EB4",
    "#C5C6C1",
    "#C6D084",
    "#908A2B",
    "#857409"
  ],
  "jjg_ccolo_vredeling_Cafe_88_Cafe": [
    "#CAFE88",
    "#C2F897",
    "#B2EBB4",
    "#A1DED2",
    "#90D0F0",
    "#88CAFE"
  ],
  "jjg_ccolo_vredeling_CHIC_Painted_Skies": [
    "#A19889",
    "#ACA38B",
    "#C8C6A2",
    "#B2BAAA",
    "#788C96",
    "#678190"
  ],
  "jjg_ccolo_vredeling_Dulled": [
    "#DBFFF1",
    "#D2ECDE",
    "#BEC6B9",
    "#AAA093",
    "#967A6E",
    "#8C675B"
  ],
  "jjg_ccolo_vredeling_Grand_Boucle": [
    "#F8B61A",
    "#F5C81C",
    "#F8EC8E",
    "#E4DFE0",
    "#A4969A",
    "#806C73"
  ],
  "jjg_ccolo_vredeling_Lucy_in_the_Sky": [
    "#DD1B7F",
    "#E2307A",
    "#EA5A6E",
    "#F28264",
    "#FBAC58",
    "#FFC053"
  ],
  "jjg_ccolo_vredeling_Mare_Nostrum": [
    "#638B77",
    "#759078",
    "#97997A",
    "#B9A27C",
    "#DBAB7E",
    "#ECAF7E"
  ],
  "jjg_ccolo_vredeling_Misty_Morning": [
    "#DDDDD3",
    "#CCCEC2",
    "#ACB1A0",
    "#8A937D",
    "#6A765A",
    "#596748"
  ],
  "jjg_ccolo_vredeling_Ninja_Wardrobe": [
    "#0D060D",
    "#160C1A",
    "#221A33",
    "#262846",
    "#2A3D53",
    "#2D4A59"
  ],
  "jjg_ccolo_vredeling_Office_Space": [
    "#948F92",
    "#9A9392",
    "#A49B92",
    "#B0A290",
    "#BAA990",
    "#BFAC8F"
  ],
  "jjg_ccolo_vredeling_OK_Computer": [
    "#FCFFFF",
    "#DFF3F8",
    "#ADD3E5",
    "#7EA0C0",
    "#4A5A6D",
    "#303333"
  ],
  "jjg_ccolo_vredeling_Optimus_Prime": [
    "#3A4959",
    "#405A79",
    "#96A6B4",
    "#E0887D",
    "#B2221C",
    "#8C120E"
  ],
  "jjg_ccolo_vredeling_Rationality": [
    "#0A6666",
    "#058888",
    "#80D4D4",
    "#CCC8D5",
    "#827895",
    "#6A6080"
  ],
  "jjg_ccolo_vredeling_Schindlers_List": [
    "#222223",
    "#333333",
    "#666663",
    "#B2B2AB",
    "#D66E6A",
    "#D00000"
  ],
  "jjg_ccolo_vredeling_Sleep_Deprevation": [
    "#62238C",
    "#6F3BAC",
    "#7E65D2",
    "#9191E0",
    "#B8C3EC",
    "#CEDCF2"
  ],
  "jjg_ccolo_vredeling_Super_Gran": [
    "#A2E8F5",
    "#8ECBD6",
    "#607678",
    "#706159",
    "#C4A99C",
    "#EFCDBE"
  ],
  "jjg_ccolo_vredeling_Tubular_Bells": [
    "#1F2620",
    "#3A403C",
    "#A6AAA8",
    "#BED1E2",
    "#5E85AC",
    "#38628C"
  ],
  "jjg_misc_rainfall": [
    "#E5B42C",
    "#F2B464",
    "#DFE378",
    "#52C185",
    "#34B485",
    "#069B42"
  ],
  "jjg_misc_seminf_haxby": [
    "#FFFFFF",
    "#3A58E7",
    "#31BEFF",
    "#8AECAE",
    "#F4DF6D",
    "#EE4F4D"
  ],
  "jjg_misc_subtle": [
    "#0075E2",
    "#0CE3FF",
    "#95FED0",
    "#E0DE6D",
    "#FFA391",
    "#CF5F3B"
  ],
  "jjg_misc_temperature": [
    "#1316B4",
    "#365FC6",
    "#7EB9E9",
    "#B0D692",
    "#D39242",
    "#C74528"
  ],
  "jjg_misc_virus": [
    "#000006",
    "#00415A",
    "#168B21",
    "#BC3000",
    "#E68A00",
    "#FEFA00"
  ],
  "jjg_misc_voxpop": [
    "#9CCDDC",
    "#C0DFE9",
    "#E4F1F6",
    "#FEF8F8",
    "#FADCDC",
    "#F7C0C0"
  ],
  "jjg_physics_bbrad": [
    "#FF0100",
    "#FF691D",
    "#FFB984",
    "#FFEDF6",
    "#BDC9FF",
    "#9AB1FF"
  ],
  "jjg_physics_visspec": [
    "#640065",
    "#007EFF",
    "#82FF00",
    "#FF7400",
    "#FE0000",
    "#610000"
  ],
  "jm_sd_sd_a": [
    "#54E597",
    "#CFFE90",
    "#FDF192",
    "#F4C587",
    "#DDC7B7",
    "#FFFFFF"
  ],
  "ma_gray_grayscale02": [
    "#AAAAAA",
    "#B7B7B7",
    "#C5C5C5",
    "#D2D2D2",
    "#E0E0E0",
    "#EEEEEE"
  ],
  "mby_mby": [
    "#000050",
    "#0F6094",
    "#9FDAFD",
    "#669F4E",
    "#883838",
    "#FFFFFF"
  ],
  "inferno": [
    "#000004",
    "#420A68",
    "#932667",
    "#DD5139",
    "#FCA50A",
    "#FCFFA4"
  ],
  "magma": [
    "#000004",
    "#3B0F70",
    "#8C2981",
    "#DE4968",
    "#FE9F6D",
    "#FCFDBF"
  ],
  "plasma": [
    "#0D0887",
    "#6A00A8",
    "#B12A90",
    "#E16461",
    "#FCA636",
    "#F0F921"
  ],
  "viridis": [
    "#440154",
    "#414487",
    "#2A788E",
    "#22A883",
    "#7AD151",
    "#FDE725"
  ],
  "ncl_amwg": [
    "#9370DB",
    "#789BF2",
    "#9ACD32",
    "#DEB887",
    "#FF4500",
    "#FF1493"
  ],
  "ncl_Cat12": [
    "#FFBF7F",
    "#FFFF99",
    "#98FF6F",
    "#34BDFF",
    "#654CFF",
    "#E51932"
  ],
  "ncl_cosam": [
    "#780088",
    "#4900E8",
    "#00BCD1",
    "#4EDE4A",
    "#FFEA00",
    "#FF0000"
  ],
  "ncl_cosam12": [
    "#640074",
    "#5A00B8",
    "#00B0DB",
    "#9CF418",
    "#FF6400",
    "#FF0000"
  ],
  "ncl_hotcold_18lev": [
    "#181870",
    "#4F8BF7",
    "#E5EFF9",
    "#FFE4B4",
    "#D84614",
    "#8B0000"
  ],
  "ncl_hotcolr_19lev": [
    "#000032",
    "#3E75F5",
    "#DDEEF4",
    "#FACA92",
    "#E2270B",
    "#320000"
  ],
  "ncl_mch_default": [
    "#FFFFFF",
    "#393939",
    "#939393",
    "#EC8686",
    "#3333CB",
    "#FF00FF"
  ],
  "ncl_nrl_sirkes_nowhite": [
    "#006180",
    "#00CCEC",
    "#66FCFC",
    "#FCBF00",
    "#FC4D00",
    "#800000"
  ],
  "ncl_nrl_sirkes": [
    "#006180",
    "#00E0FF",
    "#99FCFC",
    "#FCE000",
    "#FC6100",
    "#800000"
  ],
  "ncl_OceanLakeLandSnow": [
    "#1874CD",
    "#B1E457",
    "#F5EDB2",
    "#D2B13F",
    "#7F5327",
    "#F8F8FF"
  ],
  "ncl_perc2_9lev": [
    "#D7E3EE",
    "#96B7FF",
    "#99B8A1",
    "#F1F766",
    "#FFC71C",
    "#FF4C00"
  ],
  "ncl_percent_11lev": [
    "#640096",
    "#598DFC",
    "#51C383",
    "#CAE882",
    "#FC8D59",
    "#960064"
  ],
  "ncl_posneg_1": [
    "#FFFFFF",
    "#104E8B",
    "#7BBDEA",
    "#FFE4B4",
    "#F61405",
    "#8B0000"
  ],
  "ncl_posneg_2": [
    "#FFFFFF",
    "#156CBF",
    "#C2E4EA",
    "#FDEED1",
    "#D05B1A",
    "#8B0000"
  ],
  "ncl_prcp_1": [
    "#FFFFFF",
    "#1D00FF",
    "#2AAC39",
    "#FF9551",
    "#A53131",
    "#FAF0E6"
  ],
  "ncl_prcp_2": [
    "#F5F5F5",
    "#98FB98",
    "#61C184",
    "#FFB600",
    "#CD3700",
    "#ED82ED"
  ],
  "ncl_prcp_3": [
    "#FFFFFF",
    "#CF80DF",
    "#033CAF",
    "#FFFE00",
    "#660000",
    "#FFFFFF"
  ],
  "ncl_precip_11lev": [
    "#FFFFFF",
    "#CDFFCD",
    "#4CB89D",
    "#0D77B0",
    "#0A1F96",
    "#6A2C5A"
  ],
  "ncl_precip_diff_12lev": [
    "#B66A28",
    "#E1A564",
    "#FFF5BA",
    "#CCFECC",
    "#6EAAC8",
    "#023858"
  ],
  "ncl_precip2_15lev": [
    "#FFFFFF",
    "#DC00DC",
    "#009696",
    "#96FF00",
    "#FFC800",
    "#E11900"
  ],
  "ncl_precip2_17lev": [
    "#FFFFFF",
    "#B4C8FF",
    "#6370F8",
    "#B3D16E",
    "#E50000",
    "#000000"
  ],
  "ncl_precip3_16lev": [
    "#FFFFFF",
    "#8EB2FF",
    "#006DE9",
    "#8BFF00",
    "#FFC600",
    "#FF1900"
  ],
  "ncl_precip4_11lev": [
    "#FEFEFE",
    "#9AD9CA",
    "#3DAB7B",
    "#4694C8",
    "#072F6B",
    "#4C0073"
  ],
  "ncl_precip4_diff_19lev": [
    "#6B2107",
    "#B54744",
    "#E0A7AC",
    "#A7E0D3",
    "#42A3AC",
    "#072F6B"
  ],
  "ncl_radar": [
    "#00FFFF",
    "#0768BE",
    "#9CC607",
    "#F1000A",
    "#790A77",
    "#FFFFFF"
  ],
  "ncl_rh_19lev": [
    "#FEFEFE",
    "#FCD831",
    "#EA8772",
    "#EEE3F0",
    "#1194FB",
    "#00599F"
  ],
  "ncl_spread_15lev": [
    "#FFFFFF",
    "#FFA5A5",
    "#FF0000",
    "#FFC800",
    "#00FF00",
    "#0000FF"
  ],
  "ncl_StepSeq25": [
    "#990F0F",
    "#AD662F",
    "#A6B250",
    "#8FC3A7",
    "#95BAEA",
    "#BFB2FF"
  ],
  "ncl_sunshine_9lev": [
    "#FFFFFF",
    "#FFE982",
    "#FFBA33",
    "#FF8833",
    "#FA4B06",
    "#C81E14"
  ],
  "ncl_sunshine_diff_12lev": [
    "#510979",
    "#B74BF3",
    "#ECD0FC",
    "#FFF4CB",
    "#FFAF33",
    "#E6281E"
  ],
  "ncl_t2m_29lev": [
    "#6DE3FF",
    "#190080",
    "#BDBDBD",
    "#148A28",
    "#FF8E00",
    "#A370FF"
  ],
  "ncl_tbr_240_300": [
    "#000000",
    "#45286D",
    "#0FB50F",
    "#FFFF00",
    "#FC1134",
    "#FFFFFF"
  ],
  "ncl_tbr_stdev_0_30": [
    "#000000",
    "#27003D",
    "#3A415C",
    "#4CC80B",
    "#FF6D00",
    "#FFFFFF"
  ],
  "ncl_tbr_var_0_500": [
    "#000000",
    "#403365",
    "#B1E705",
    "#FF7500",
    "#F63090",
    "#FFFFFF"
  ],
  "ncl_tbrAvg1": [
    "#000000",
    "#45286D",
    "#08B30F",
    "#FFFF00",
    "#FB143C",
    "#FFFFFF"
  ],
  "ncl_tbrStd1": [
    "#000000",
    "#27003C",
    "#374858",
    "#5DCD0A",
    "#FF6500",
    "#FFFFFF"
  ],
  "ncl_tbrVar1": [
    "#000000",
    "#413167",
    "#ADE605",
    "#FF7900",
    "#F63090",
    "#FFFFFF"
  ],
  "ncl_temp_19lev": [
    "#071E46",
    "#3B8BC3",
    "#C7EBF5",
    "#FDD1CA",
    "#E83428",
    "#5F0000"
  ],
  "ncl_temp_diff_18lev": [
    "#071E46",
    "#2E7EBC",
    "#AADCE6",
    "#FCBBAA",
    "#DA2623",
    "#5F0000"
  ],
  "ncl_temp_diff_1lev": [
    "#F03C2B",
    "#F03C2B",
    "#C64646",
    "#4A6699",
    "#2171B5",
    "#2171B5"
  ],
  "ncl_topo_15lev": [
    "#28369A",
    "#5EE074",
    "#F6E595",
    "#8F6154",
    "#C7B0AA",
    "#FFFFFF"
  ],
  "ncl_wgne15": [
    "#A020F0",
    "#6C90EF",
    "#4EBE22",
    "#EBD3A7",
    "#FF9100",
    "#FF69B4"
  ],
  "ncl_wind_17lev": [
    "#FFFFFF",
    "#AACE62",
    "#F4D17F",
    "#DB7B3D",
    "#6370F7",
    "#B5C9FF"
  ],
  "ngdc_ETOPO1_Reed": [
    "#1006B4",
    "#0F68EF",
    "#5EDFFF",
    "#33CC66",
    "#E3B44E",
    "#B27676"
  ],
  "ngdc_ETOPO1": [
    "#0A0079",
    "#0021DA",
    "#34BFFF",
    "#C8E299",
    "#9D7409",
    "#FFFFFF"
  ],
  "oc_ndvi": [
    "#EBEBEB",
    "#F3BB58",
    "#96B613",
    "#3D8601",
    "#004800",
    "#011301"
  ],
  "oc_rainbow": [
    "#90006F",
    "#000DFF",
    "#00FFD5",
    "#C6FF00",
    "#FF5100",
    "#690000"
  ],
  "oc_sst": [
    "#63098B",
    "#08749C",
    "#08BF72",
    "#DDE508",
    "#6D0F0F",
    "#CCCCCC"
  ],
  "oc_zeu": [
    "#6F3B01",
    "#9AB918",
    "#00BB81",
    "#0042FF",
    "#6C55FF",
    "#340135"
  ],
  "pn_moon": [
    "#8CA6CC",
    "#A2B6D3",
    "#B8C7D7",
    "#CFDADE",
    "#E6ECE3",
    "#FBFCEA"
  ],
  "rc_aquamarinemermaid": [
    "#662A70",
    "#A25783",
    "#D89B72",
    "#ABA691",
    "#486EC1",
    "#662A70"
  ],
  "rc_autumnrose": [
    "#9C2224",
    "#D03429",
    "#EC573D",
    "#F38F49",
    "#F8B04C",
    "#FCCFA0"
  ],
  "rc_blackhorse": [
    "#45610D",
    "#6FA6F8",
    "#121751",
    "#632D5E",
    "#042D25",
    "#45610D"
  ],
  "rc_bluefly": [
    "#000000",
    "#004158",
    "#2C86A7",
    "#B0D2E3",
    "#848D94",
    "#000000"
  ],
  "rc_butterflyfairy": [
    "#A74D26",
    "#CD955B",
    "#A5BCA5",
    "#579CB2",
    "#0F4770",
    "#010609"
  ],
  "rc_butterflytalker": [
    "#060D39",
    "#56549A",
    "#B5BAE4",
    "#B5BAE4",
    "#56539A",
    "#000000"
  ],
  "rc_carousel": [
    "#2D3077",
    "#504A6C",
    "#E5BD37",
    "#E5BD37",
    "#B1596B",
    "#A74375"
  ],
  "rc_celticsun": [
    "#BF4F42",
    "#CB603F",
    "#D8713D",
    "#E5823B",
    "#F29339",
    "#FFA537"
  ],
  "rc_cloud": [
    "#FCC8A9",
    "#F5A0A2",
    "#EF789C",
    "#D66EA7",
    "#AB82C4",
    "#8096E2"
  ],
  "rc_daisyfae": [
    "#343600",
    "#74750C",
    "#AAAB29",
    "#CBCC66",
    "#E3CE49",
    "#F8C200"
  ],
  "rc_desertjewel": [
    "#8C8F74",
    "#9B924F",
    "#946F29",
    "#B95852",
    "#C79A9D",
    "#D7A487"
  ],
  "rc_faecat": [
    "#704D6F",
    "#887364",
    "#483C27",
    "#CE9B3A",
    "#ADAAD0",
    "#704D6F"
  ],
  "rc_fairygarden": [
    "#8E50B2",
    "#AF64C5",
    "#D973D5",
    "#C2DBF8",
    "#A7BAEB",
    "#5F6FB9"
  ],
  "rc_fireandice": [
    "#A41D0A",
    "#EB470F",
    "#FA671D",
    "#588BC2",
    "#2A5298",
    "#151F34"
  ],
  "rc_girlcat": [
    "#DCF386",
    "#CDE781",
    "#A0DC7A",
    "#68C05C",
    "#33902A",
    "#005800"
  ],
  "rc_halloween": [
    "#DC7D02",
    "#583100",
    "#2C1900",
    "#B06401",
    "#DC7D02",
    "#DC7D02"
  ],
  "rc_hangonfatboy": [
    "#EF923A",
    "#6A366E",
    "#1B4A83",
    "#1B4A83",
    "#6A366E",
    "#EF923A"
  ],
  "rc_healingangel": [
    "#AECCDB",
    "#9FACD9",
    "#C9B4DC",
    "#E5B1C0",
    "#E8B39F",
    "#EDEFBF"
  ],
  "rc_hopegoddess": [
    "#F59B06",
    "#DC831B",
    "#C36B30",
    "#AA5445",
    "#913C5A",
    "#792570"
  ],
  "rc_ildwinds": [
    "#5B3132",
    "#804949",
    "#BC9391",
    "#B2AAB8",
    "#6278A1",
    "#2B3A63"
  ],
  "rc_impatientfairy": [
    "#792E1D",
    "#9B501F",
    "#AE563C",
    "#BF656B",
    "#BB6184",
    "#6C284F"
  ],
  "rc_jeweleddragon": [
    "#2A1A2A",
    "#92678E",
    "#CA9FA7",
    "#F0A49E",
    "#E47F53",
    "#792E1D"
  ],
  "rc_lailah1": [
    "#521533",
    "#141943",
    "#865837",
    "#62C7B6",
    "#D8DC8D",
    "#DD8EA7"
  ],
  "rc_leo": [
    "#3F2E20",
    "#955635",
    "#DF8262",
    "#DF8262",
    "#955635",
    "#3F2E20"
  ],
  "rc_liahlah2": [
    "#7B91CC",
    "#8B68DE",
    "#6CA3F1",
    "#95A0EF",
    "#A77DDD",
    "#7B91CC"
  ],
  "rc_mistressnight": [
    "#272C6C",
    "#683964",
    "#A2785B",
    "#A2785B",
    "#683964",
    "#252A6A"
  ],
  "rc_otis": [
    "#6A1CA8",
    "#609243",
    "#48C822",
    "#117F8B",
    "#0067AE",
    "#0067AE"
  ],
  "rc_parrot": [
    "#C30021",
    "#DFA84A",
    "#E7D355",
    "#8A8A5F",
    "#001D70",
    "#001D70"
  ],
  "rc_patriot": [
    "#FF0000",
    "#FF0000",
    "#CB0E33",
    "#323BCC",
    "#004AFF",
    "#004AFF"
  ],
  "rc_praire": [
    "#98793C",
    "#AC8944",
    "#C19A4C",
    "#D5AA55",
    "#EABB5D",
    "#FFCC66"
  ],
  "rc_purplefly": [
    "#000000",
    "#950072",
    "#FA33B7",
    "#FDCCA5",
    "#98985F",
    "#000000"
  ],
  "rc_quagga": [
    "#263AA4",
    "#80589A",
    "#3E832B",
    "#AAD464",
    "#80589A",
    "#263AA4"
  ],
  "rc_rainbow": [
    "#C308CA",
    "#F35314",
    "#5BDC08",
    "#0ACBB8",
    "#4012CE",
    "#DB09E3"
  ],
  "rc_renmaiden": [
    "#329934",
    "#655267",
    "#E4B6BF",
    "#EEBCD6",
    "#E68C54",
    "#329934"
  ],
  "rc_scarletdragon": [
    "#1F130C",
    "#6F241D",
    "#AB4324",
    "#C06745",
    "#CE875E",
    "#F4A16C"
  ],
  "rc_scoutie": [
    "#FFCC00",
    "#65D936",
    "#05B460",
    "#142D72",
    "#1A0079",
    "#1A0079"
  ],
  "rc_serendil": [
    "#008000",
    "#949844",
    "#C69C48",
    "#EFEF7D",
    "#F8B0E0",
    "#E54F5B"
  ],
  "rc_shyviolet": [
    "#4A3970",
    "#8977AD",
    "#BDB8E3",
    "#A8B1DF",
    "#6882D4",
    "#3A58B2"
  ],
  "rc_snodraegon": [
    "#6990D1",
    "#759FD8",
    "#C9D9EF",
    "#C8BFD4",
    "#746195",
    "#6C5A8E"
  ],
  "rc_spellbound": [
    "#F6F67A",
    "#5DF789",
    "#8893FC",
    "#C5C1FE",
    "#BB4DA6",
    "#F5F681"
  ],
  "rc_springangel": [
    "#AFC9C9",
    "#9FA9B7",
    "#D8C4C4",
    "#E0B8AD",
    "#F19E6A",
    "#AD9C7B"
  ],
  "rc_springbird": [
    "#4A74CD",
    "#4A74CD",
    "#6981CE",
    "#C6A8D3",
    "#E5B6D5",
    "#E5B6D5"
  ],
  "rc_sunlitwave": [
    "#3B39A4",
    "#6C46A6",
    "#651F66",
    "#8A272E",
    "#E6904C",
    "#F9EAD3"
  ],
  "rc_tashangel": [
    "#C78CE6",
    "#2E1571",
    "#8968C3",
    "#E8F1F8",
    "#7FDEF4",
    "#C78CE6"
  ],
  "rc_titannightfall": [
    "#DC90B6",
    "#B46196",
    "#703A87",
    "#703A87",
    "#B46196",
    "#DC90B6"
  ],
  "rc_trove": [
    "#51574A",
    "#E4BF80",
    "#E16552",
    "#993767",
    "#E279A3",
    "#9ABF88"
  ],
  "rc_tubepreview": [
    "#BBA663",
    "#FFFFFF",
    "#323232",
    "#333333",
    "#FFFFFF",
    "#BBA663"
  ],
  "rc_wildwinds": [
    "#5B3132",
    "#804949",
    "#BC9391",
    "#B2AAB8",
    "#6278A1",
    "#2B3A63"
  ],
  "td_DEM_poster": [
    "#006147",
    "#669F4E",
    "#AF6018",
    "#941616",
    "#C5C5C5",
    "#FFFFFF"
  ],
  "td_DEM_print": [
    "#336600",
    "#9ACF41",
    "#FAE495",
    "#9E6A22",
    "#663302",
    "#FFFFFF"
  ],
  "td_DEM_screen": [
    "#008435",
    "#33CC00",
    "#F4F071",
    "#F4BD45",
    "#99642B",
    "#FFFFFF"
  ],
  "ukmo_wow_humidity": [
    "#31007E",
    "#00B0FF",
    "#10E92E",
    "#FFB700",
    "#FF0682",
    "#FFD7EB"
  ],
  "ukmo_wow_rain_mmh": [
    "#0000CC",
    "#3265FF",
    "#FFCC00",
    "#FF9700",
    "#FF00FF",
    "#CCFFFF"
  ],
  "ukmo_wow_temp_c": [
    "#4A001D",
    "#007DFF",
    "#21D32B",
    "#FFA200",
    "#FF2290",
    "#FFFFFF"
  ],
  "usgs_usgs_gswa2": [
    "#7F9F65",
    "#D2E39E",
    "#EBC98C",
    "#DFAE96",
    "#E4D9BF",
    "#FFFFFF"
  ],
  "usgs_usgs": [
    "#7F9F65",
    "#D2E19E",
    "#EBC98B",
    "#DFAFA8",
    "#F3DDE7",
    "#FFFFFF"
  ],
  "vh_Caribbean": [
    "#00007E",
    "#0AA0CD",
    "#A5BED2",
    "#828750",
    "#CDAF69",
    "#FAF0E6"
  ],
  "wkp_mars_wiki_mars": [
    "#784114",
    "#BC9059",
    "#CCA569",
    "#9F6E46",
    "#CCBFB4",
    "#FFFFFF"
  ],
  "wkp_plumbago_wiki_plumbago": [
    "#9700B0",
    "#443AA5",
    "#A1B5D5",
    "#A1C33A",
    "#997A47",
    "#E4BEE4"
  ],
  "wkp_precip_wiki_precip_in": [
    "#FFFFFF",
    "#06C9B2",
    "#0491B8",
    "#0059A3",
    "#02228E",
    "#000082"
  ],
  "wkp_precip_wiki_precip_mm": [
    "#FFFFFF",
    "#07C8CF",
    "#0691B8",
    "#0059A3",
    "#04218E",
    "#000082"
  ],
  "wkp_schwarzwald_wiki_schwarzwald_cont": [
    "#AEEFD5",
    "#6EC24A",
    "#CFB11C",
    "#761002",
    "#8C654C",
    "#EBE9EB"
  ],
  "wkp_shadowxfox_colombia": [
    "#001E50",
    "#007AAD",
    "#C6ECFF",
    "#BDCC96",
    "#D6B789",
    "#9B7B62"
  ],
  "wkp_template_wiki_1.02": [
    "#7FA8CB",
    "#B6D3EB",
    "#BEDCC8",
    "#C5D09E",
    "#E5DEB2",
    "#C3A76B"
  ],
  "wkp_template_wiki_2.0": [
    "#71ABD8",
    "#A5D5F8",
    "#94BF8B",
    "#E8E1B6",
    "#AF8D55",
    "#F5F4F2"
  ],
  "wkp_tubs_nrwc": [
    "#050603",
    "#183E29",
    "#3E8A59",
    "#A5BA6F",
    "#C7A75C",
    "#D77F3F"
  ],
  "wkp_tubs_nrwd": [
    "#050603",
    "#1E3C28",
    "#3A7C51",
    "#82AC67",
    "#E0CB73",
    "#B0783A"
  ],
  "mako": [
    "#0B0405",
    "#382A54",
    "#395D9C",
    "#3497A9",
    "#60CEAC",
    "#DEF5E5"
  ],
  "rocket": [
    "#03051A",
    "#4C1D4B",
    "#A11A5B",
    "#E83F3E",
    "#F69C73",
    "#FAEBDD"
  ],
  "turbo": [
    "#30123B",
    "#3E9BFE",
    "#46F884",
    "#E1DC37",
    "#F05B12",
    "#7A0403"
  ]
};