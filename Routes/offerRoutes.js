const express = require('express');
const router = express.Router();
const offerController = require('../controller/offerController');

router.get('/offer', offerController.getOfferById); 
router.post('/offer', offerController.createOffer); 
router.patch('/offer/:id', offerController.updateOffer); 
router.delete('/offer/:id',offerController.removeOffer);
router.get('/offers', offerController.getAllOffers); 

module.exports = router;
