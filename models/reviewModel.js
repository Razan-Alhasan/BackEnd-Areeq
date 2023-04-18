const { Schema, model } = require('mongoose');
const productService = require('../services/productService');
const reviewSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: [true, 'please add userId']
    },
    product:{
        type: Schema.Types.ObjectId,
        ref: 'product',
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
reviewSchema.pre('save', async function(next){
    let review = this;
    try{
        const product = await productService.getProductById(review.product._id);
        product.reviews.push(review);
        await product.save();
        next();
    }catch(error){
        next(error);
    }
});
reviewSchema.pre('remove', async function(next){
    const review = this;
    try{
        const product = await productService.deleteReviewFromProduct(review._id);
        await product.save();
        next();
    }catch(error){
        next(error);
        
    }
});
const review = model('review', reviewSchema);
module.exports = review;
