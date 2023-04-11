const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/products', productController.getProducts);
router.get('/product/:id', productController.getProductById); 
router.get('/products/:category', productController.getProductsByCategory);
router.get('/products/:user', productController.getProductsBySeller);
router.post('/product', productController.createProduct); 
router.patch('/product/:id', productController.updateProduct); 
router.patch('/products/offer/:id', productController.updateProductsIfOfferDeleted);
router.patch('/product/archive/:id', productController.changeArchiveStatus);
router.delete('/products/user/:id', productController.deleteProductsIfSellerDeleted);
router.delete('/product/review/:id', productController.deleteReviewFromProduct);
module.exports = router;
