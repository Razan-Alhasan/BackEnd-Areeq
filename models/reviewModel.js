const { Schema, model } = require('mongoose');
const productService = require('../services/productService');
const reviewSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'please add userId']
    },
    product:{
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: [true, 'please add productId']
    },
    rate:{ 
        type:Number,
        min:0,
        max:5,
        default:0
    },
    description:{
        type:String,
        required:[true, 'please add your review'],
    }
},
    { timestamps:true }
);
reviewSchema.post('save', async function(req,res,next){
    const review = this;
    try{
        const product = await productService.getProductById(review.product);
        product.reviews.push(review);
        await product.save();
        next();
    }catch(error){
        next(error);
    }
});
reviewSchema.post('remove', async function(next){
    const review = this;
    try{
        await productService.deleteReview(review)
        next();
    }catch(error){
        next(error);
    }
});
const review = model('Review', reviewSchema);
module.exports = review;
