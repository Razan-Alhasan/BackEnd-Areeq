const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');
const authRequest = require("../middleware/authMiddleware");

router.get('/reviews', reviewController.getReviews); 
router.get('/review/:id', reviewController.getReviewById); 
router.post('/review', authRequest,reviewController.createReview); 
router.patch('/review/:id', authRequest,reviewController.updateReview); 
router.delete('/review/:id', authRequest,reviewController.deleteReview);
module.exports = router;
