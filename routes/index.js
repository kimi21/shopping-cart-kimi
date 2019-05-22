var express = require('express');
var router = express.Router();
var categoriesData = require('../server/banners/index.get.json');


router.get('/categories', function(req, res, next) {
    res.send(categoriesData);
});

module.exports = router;
