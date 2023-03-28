const express = require('express');
const router = express.Router();
const discountController = require('../controller/discountController');
router.get('/discounts', discountController.getDiscounts);
router.get('/discount/:id', discountController.getDiscountById);
router.delete('/discount/:id', discountController.deleteDiscount);
router.post('/discount', discountController.createDiscount);
router.put('/discount/:id', discountController.updateById);
module.exports = router;
