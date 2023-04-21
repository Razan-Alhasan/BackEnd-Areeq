const express = require('express');
const router = express.Router();
const offerController = require('../controllers/offerController');
const authRequest = require("../middleware/authMiddleware");

router.get('/offer/:id', authRequest, offerController.getOfferById); 
router.post('/offer', authRequest, offerController.createOffer); 
router.patch('/offer/:id', authRequest, offerController.updateOffer); 
router.delete('/offer/:id', authRequest, offerController.deleteOffer);
router.get('/offers', authRequest, offerController.getAllOffers); 
router.get('/offer/:id', offerController.getOfferById); 
router.post('/offer', offerController.createOffer); 
router.patch('/offer/:id', offerController.updateOffer); 
router.delete('/offer/:id', offerController.deleteOffer);
router.get('/offers', offerController.getAllOffers); 
module.exports = router;
