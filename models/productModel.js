const { Schema, model } = require('mongoose');
const reviewService = require ('../services/reviewService');
const productSchema = new Schema({
    name:{
        type: String,
        required: [true, 'please set product Name']
    },
    description:{
        type:String,
        required:[true, 'please set the description'],
        lowercase:true,
    },
    category:{
        type:String,
        enum:["Clothes" , "Home Decor" , "Accessories" , "Soap", "Ceramic"],
        required:[true, 'please choose the Category'],
    },
    price:{
        type: Number,
        required: [true, 'please set the price'],
        min: 1,
        validate : {
            validator : Number.isInteger,
            message   : '{VALUE} is not an integer value'
        }
    },
    images:[{
        type: String, 
        required: [true, 'please add images for the product'],
    }], 
    offer:{
        type: Schema.Types.ObjectId,
        ref: 'offer',
    },
    user:{
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: [true, 'please add user ID']
    },
    reviews:[{
        type: Schema.Types.ObjectId,
        ref: 'review',
    }],
    isArchived:{
        type: Boolean,
        default: false,
        required: true
    }
});
productSchema.post('remove', async function(next){
    const product = this;
    try{
        await reviewService.deleteReviewIfProductDeleted(product);
        next();
    }catch(error){
        next(error);
    }
});
const product = model('Product', productSchema);
module.exports = product;
