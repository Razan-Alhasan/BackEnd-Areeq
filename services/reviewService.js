const Review = require('../models/reviewModel');

module.exports.getReviews = async () => {
    return await Review.find().populate('user').populate('product')
};
module.exports.createReview = async newReview => {
	return await Review.create(newReview);  
};
module.exports.updateReview = async (reviewId, updateField) => {
    const updatedReview =  await Review.findByIdAndUpdate(reviewId, { $set: updateField }, { new: true });
	return updatedReview; 
};
module.exports.deleteReview = async reviewId => {  
    return await Review.findByIdAndDelete(reviewId);
};
module.exports.getReviewById = async reviewId => {
	return await Review.findById(reviewId);
};
module.exports.getReviewsByProduct = async product => {
	return await Review.find(product);
};
module.exports.getReviewsByUser = async user => {
	return await Review.find(user);
};
module.exports.deleteReviewsIfProductDeleted = async productId => {
    const productReviews = this.getReviewsByProduct(productId);
	return await Review.deleteMany(productReviews);
};
module.exports.deleteReviewsIfUserDeleted = async user => {
    const userReviews = this.getReviewsByUser(user);
	return await Review.deleteMany(userReviews);
};

