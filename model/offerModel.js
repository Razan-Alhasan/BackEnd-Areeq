const { Schema, model } = require('mongoose');
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
      id:{
        type: String,
		    required: [true],
      },
})

const offer = model('offer', offerSchema);
module.exports = offer;
