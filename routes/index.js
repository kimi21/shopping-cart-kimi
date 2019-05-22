var express = require('express');
var router = express.Router();
var categoriesData = require('../server/categories/index.get.json');
var bannersData = require('../server/banners/index.get.json');
var productsData = require('../server/products/index.get.json');

//Categories data for home
router.get('/categories', function(req, res, next) {
    res.send(categoriesData);
});

//Carousel data for home
router.get('/banners', function(req, res, next) {
  res.send(bannersData);
});

//Products data
router.get('/products', function(req, res, next) {
  res.send(productsData);
});

module.exports = router;
