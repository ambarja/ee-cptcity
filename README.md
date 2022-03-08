<!-- README.md is generated from README.Rmd. Please edit that file -->

# **cptcity for the Google Earth Engine JavaScript API (Code Editor)** <a href="#"><img src="man/figures/ee-cptcity.gif" width="100%"></a>

<!-- badges: start -->
<!-- badges: end -->

## 📋 **Table of contents**

1.  What is Google Earth Engine ?
2.  What is cptcity and why ?
3.  Top of the cpt palettes
4.  Calling module and use it!
5.  Examples

### 🔴 **1. What is Google Earth Engine ?**

<a href="#"><img src="https://user-images.githubusercontent.com/23284899/152171996-54afdafa-4456-4d63-9c92-dca515b100a8.png" width="100%"></a>
Google Earth Engine is a cloud-based platform that helps access
high-performance computing resources for processing and analyzing large
geospatial datasets [(Noel Golerick et
al.,2017).](https://www.sciencedirect.com/science/article/pii/S0034425717302900)

### 🔴 **2. What is cptcity and why ?**

Cptcity is a solium platform where you can find multiple colour palettes for various themes related to cartography, technical illustration and design. The archive supports various formats and is organised by author. Cptcity currently has colour palettes for the most popular desktop Geographic Information Systems such as **QGIS**, **GRASS** , **SAGA** , **ARCGIS** , and others. Currently, it has **7000 colour palettes**, however in this second version of ee-cptcity module more than **300** colour palettes were incorporated along with 2 popular palettes like **rocket** , **mako** and **turbo**.

### 🔴 **3. Top of the cpt palettes**

The 75 most popular cpt files with the number downloaded shown in
parentheses. The arrows indicate the change in rank in the last month.
This list is compiled from the files downloaded in the last year (a
total of 21,647 files) and is updated irregularly, most recently on
04/03/2022.

<a href="http://soliton.vm.bytemark.co.uk/pub/cpt-city/views/totp-cpt.html">
<img src="man/figures/cptcitytop.png" width="100%"> </a>

### 🔴 **4. Calling module and use it!**

```r
var cpt = require('users/ambarja/ee-cptcity:cptcity');
```

```r
var srtm = ee.Image('NASA/NASADEM_HGT/001')
           .select('elevation')

var viz = {
  min: 400,
  max: 4000,
  palette:cpt.pal.dem_poster
  };
```

```r
Map.addLayer(srtm,viz,'Elevation(m)');
```

### 🔴 **5. Examples**

1.  **cptcity-example-1-intro**
    <a href="https://code.earthengine.google.com/c6879919ca2afb5b6b9dfc622ee78a4b"><img src="https://img.shields.io/badge/Open_Code_Editor-white?style=for-the-badge&logo=googleearth" align="center" width="150px"/></a>

<img src="man/figures/p1.png" width="100%"/>

<br/>

2.  **cptcity-example-2-ndvi**
    <a href="https://code.earthengine.google.com/fc6231e0cb1976919141a4a255baf78a"><img src="https://img.shields.io/badge/Open_Code_Editor-white?style=for-the-badge&logo=googleearth" align="center" width="150px"/></a>

<img src="man/figures/p2.png" width="100%"/>

<br/>

3.  **cptcity-example-3-precipitation**
    <a href="https://code.earthengine.google.com/84381f50bb9f021ad2a020da59c2440c"><img src="https://img.shields.io/badge/Open_Code_Editor-white?style=for-the-badge&logo=googleearth" align="center" width="150px"/></a>

<img src="man/figures/p3.png" width="100%"/>

<br/>

4.  **cptcity-example-4-NO2**
    <a href="https://code.earthengine.google.com/9f71b8b7ad985a88361d16f24f51cc75"><img src="https://img.shields.io/badge/Open_Code_Editor-white?style=for-the-badge&logo=googleearth" align="center" width="150px"/></a>

<img src="man/figures/p4.png" width="100%"/>

## 📚 **References**

- _David Montero, 2021, ee-pokepalettes,
  <https://github.com/davemlz/ee-pokepalettes>_

- _Gennadii Donchyts, Fedor Baart & Justin Braaten
  ,2020,<https://github.com/gee-community/ee-palettes>_

- _Sergio Ibarra Espinosa, 2017, cptcity,
  <https://github.com/ibarraespinosa/cptcity>_
