const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const authRequest = require("../middleware/authMiddleware");

router.get('/products', authRequest, productController.getProducts);
router.get('/product/:id', authRequest, productController.getProductById);
router.post('/product', authRequest, productController.createProduct); 
router.patch('/product/:id', authRequest, productController.updateProduct);
router.patch('/product/archive/:id', authRequest, productController.changeArchiveStatus);
module.exports = router;
