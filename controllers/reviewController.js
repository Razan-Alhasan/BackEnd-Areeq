const express = require('express');
const reviewService = require('../services/reviewService');

module.exports.createReview = async (req = express.request, res = express.response) =>{
    try{
        const review = await reviewService.createReview(req.body);
        res.status(201).json(review);
    }catch (err) {
        const error = `Failed to add review, error: ${err.message}`;
		res.status(400).json({ error });
    }
};
module.exports.getReviews = async (req = express.request, res = express.response) =>{
    try {
		const reviews = await reviewService.getReviews();
		res.status(200).json(reviews);
	} catch (err) {
		const error = `Failed to get reviews, error: ${err.message}`;
		res.status(400).json({ error });
	}
};
module.exports.getReviewById = async (req = express.request, res = express.response) =>{
    try {
		const review = await reviewService.getReviewById(req.params.id);
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
        reviewService.updateReview(id, newInformation);
        res.status(200).json({message: "updated successfully"})
    }
    catch(error){
        const errors = `FAILD to Update review with id ${id}, err: ${error.message}`;
		res.status(400).json({ errors});
    }
};
module.exports.deleteReview = async (req = express.request, res = express.response) => {
    try {
        const result = await reviewService.deleteReview(req.params.id);
        result.deletedCount != 0
            ? res.status(204).json({message: 'Deleted Success'})
            : res.status(400).json({message: 'Faild to delete the review'});
    } catch (e) {
        const errors = `Faild to delete review with Id ${req.params.id}, error: ${e.message}`;
        res.status(404).json({ errors });
    }
};
module.exports.deleteReviewsIfProductDeleted = async (req = express.request, res = express.response) => {
    try {
        const result = await reviewService.deleteReviewIfProductDeleted(req.params.product);
        result.deletedCount != 0
            ? res.status(202).json({message: 'Deleted Success'})
            : res.status(400).json({message: 'Faild to delete the review'});
    } catch (e) {
        const errors = `Faild to delete reviews, error: ${e.message}`;
        res.status(404).json({ errors });
    }
};
module.exports.deleteReviewsIfUserDeleted = async (req = express.request, res = express.response) => {
    try {
        const result = await reviewService.deleteReviewIfUserDeleted(req.params.user);
        result.deletedCount != 0
            ? res.status(202).json({message: 'Deleted Success'})
            : res.status(400).json({message: 'Faild to delete the review'});
    } catch (e) {
        const errors = `Faild to delete reviews, error: ${e.message}`;
        res.status(404).json({ errors });
    }
};
