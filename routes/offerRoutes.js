const express = require('express');
const router = express.Router();
const offerController = require('../controllers/offerController');

router.get('/offer/:id', offerController.getOfferById); 
router.post('/offer', offerController.createOffer); 
router.patch('/offer/:id', offerController.updateOffer); 
router.delete('/offer/:id', offerController.deleteOffer);
router.get('/offers', offerController.getAllOffers); 
module.exports = router;
