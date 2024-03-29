const express = require('express');
const router = express.Router();
const discountController = require('../controllers/discountController');
const authRequest = require("../middleware/authMiddleware");

router.get('/discounts', authRequest, discountController.getDiscounts);
router.get('/discount/:id', authRequest, discountController.getDiscountById);
router.delete('/discount/:id', authRequest, discountController.deleteDiscount);
router.post('/discount', authRequest, discountController.createDiscount);
router.put('/discount/:id', authRequest, discountController.updateById);
module.exports = router;
