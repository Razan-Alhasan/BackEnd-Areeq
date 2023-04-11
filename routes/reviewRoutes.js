const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');

router.get('/reviews', reviewController.getReviews); 
router.get('/review/:id', reviewController.getReviewById); 
router.post('/review', reviewController.createReview); 
router.patch('/review/:id', reviewController.updateReview); 
router.delete('/review/:id', reviewController.deleteReview);
module.exports = router;
