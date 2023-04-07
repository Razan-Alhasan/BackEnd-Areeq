const reviewSchema = require('../models/reviewModel');
const offerSchema = require('../models/offerModel');
const Product = require('../models/productModel');

reviewSchema.pre('save',async function(next){
    const review = this;
    try{
        const product = await Product.findById(review.product);
        product.reviews.push(review);
        await product.save();
        next();
    }catch(error){
        next(error);
    }
})
offerSchema.pre('save',async function(next){
    const offer = this;
    try{
        const product = await Product.findById(offer.product);
        product.offer.push(offer);
        await product.save();
        next();
    }catch(error){
        next(error);
    }
})
