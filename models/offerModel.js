const { Schema, model } = require('mongoose');
const productService = require('../services/productService');
const offerSchema = new Schema({
      value:{
        type: String,
		    required: [true],
      },
      startDate:{
        type: String,
	      required: [true],
      },
      endDate:{
        type: String,
		    required: [true],
      },
});
offerSchema.post('remove', async function(next){
  const offer = this;
  try{
      await productService.deleteOffer(offer);
      next();
  }catch(error){
      next(error);
  }
});
const offer = model('offer', offerSchema);
module.exports = offer;
