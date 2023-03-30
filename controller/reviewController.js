const express = require('express');
const reviewService = require('../services/reviewService');

module.exports.createReview = async (req = express.request, res = express.response) =>{
    try{
        let review = new review(req.body);
        review.save();
        res.status(200).json(review);
    }catch (err) {
        const error = `Failed to add review, error: ${err}`;
		res.status(400).json({ error });
    }
};
module.exports.getReviews = async (req = express.request, res = express.response) =>{
    try {
		const reviews = await reviewService.getReviews();
		res.status(200).json(reviews);
	} catch (err) {
		const error = `Failed to get reviews, error: ${err}`;
		res.status(400).json({ error });
	}
};
module.exports.getReviewById = async (req = express.request, res = express.response) =>{
    try {
		const review = await ReviewService.getReviewById();
		res.status(200).json(review);
	} catch (err) {
		const error = `Failed to get review, error: ${err}`;
		res.status(404).json({ error });
	}
};
module.exports.updateReview = async (req = express.request, res = express.response) =>{
    const id = req.params.id;
    const newInformation = req.body;
	try {
        reviewService.updateReview(reviewId, newInformation);
    }
    catch(error){
        const errors = `FAILD to Update review with id ${id}, err: ${error}`;
		res.status(400).json({ errors});
    }
};
module.exports.deleteReview = async (req = express.request, res = express.response) => {
    try {
        const result = await reviewService.deleteReview(req.params.id);
        result.deletedCount != 0
            ? res.status(202).json('Deleted Success')
            : res.status(400).json('Faild to delete the review');
    } catch (e) {
        const errors = `Faild to delete review with Id ${req.params.id}, error: ${e.message}`;
        res.status(400).json({ errors });
    }
};
