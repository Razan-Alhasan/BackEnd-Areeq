const { Schema } = require('mongoose');
const mongoose= require('mongoose');
const Schema =mongoose.Schema;
const model=mongoose.model;

const productSchema=new Schema({
    productId:Number,
    productName:{
        type:String,
        required:[true,'please set product Name']
    },
    productDesc:{
        type:String,
        required:[true,'please set the description'],
        lowercase:true,
    },
    categoryId:{
        type:Schema.Types.ObjectId,
        ref:'Category',
    },
    price:{
        type:Number,
        required:[true,'please set the price'],
        min: 1,
        validate : {
            validator : Number.isInteger,
            message   : '{VALUE} is not an integer value'
        }
    },
    images:{
        type:String, 
        required:[true,'please add images for the product']
    }, 
    offerId:{
        type:Schema.Types.ObjectId,
        ref:'Offer',
    },
    UserId:{
        type:Schema.Types.ObjectId,
        ref:'User',
    }
})

const Product=model('Product',productSchema);
module.exports=Product;