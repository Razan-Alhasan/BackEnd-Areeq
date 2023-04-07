const express = require('express');
const { model } = require('mongoose');
const router = express.Router();
const offerController = require('../controller/offerController');

router.get('/offer', offerController.getoffer); 
router.post('/offer', offerController.createoffer); 
router.patch('/offer/:id', offerController.updateoffer); 
router.delete('offer/:id',offerController.removeoffer);
router.get('/offer', offerController.getAlloffer); 

model.exports = router;