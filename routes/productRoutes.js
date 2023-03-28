const express = require('express');
const router = express.Router();
const productController = require('../controller/productController');

router.get('/products', productController.getProducts);  //done
router.get('/product/:id', productController.getProductById);  //done
router.get('/products/:category', productController.getProductsByCategory);
router.get('/products/:user', productController.getProductsBySeller);
router.post('/product', productController.createProduct); 
router.patch('/product/:id', productController.updateProduct); 
router.patch('/product/archive/:id', productController.changeArchiveStatus);
module.exports = router;
