const { Schema, model } = require('mongoose');

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
const review = model('Review', reviewSchema);
module.exports = review;
