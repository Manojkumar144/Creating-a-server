const express = require('express');

const productsController = require('../controllers/product');
const router= express.Router();

//admin/add-product-get
router.get('/add-product',productsController.getAddProduct);

//admin/add-product/post
router.post('/add-product',productsController.postAddProduct);

module.exports= router;