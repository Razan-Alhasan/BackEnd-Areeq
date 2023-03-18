const { Schema, model } = require('mongoose');

const productSchema=new Schema({
    productName:{
        type:String,
        required:[true,'please set product Name']
    },
    productDesc:{
        type:String,
        required:[true,'please set the description'],
        lowercase:true,
    },
    category:{
        type:String,
        enum:["Clothes" , "Home Decor" ,"Jewelry" ,"Soap","Ceramic"],
        required:[true,'please choose the Category'],
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
    images:[{
        type:String, 
        required:[true,'please add images for the product'],
    }], 
    offerId:{
        type:Schema.Types.ObjectId,
        ref:'Offer',
        required:[true,'please add offer ID']
    },
    userId:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:[true,'please add user ID']
    }
})

const Product=model('Product',productSchema);
module.exports=Product;
