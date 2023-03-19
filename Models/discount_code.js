const { Schema, model } = require('mongoose');
const discountSchema = new Schema(
	{
		Code: {
			type: string,},
        Value:{
           type:Schema.Types.ObjectId,
            ref:'Offer'
        }
        })
const Discount=model('Discount',discountSchema);
module.exports=Discount;
