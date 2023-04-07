const { Schema, model } = require('mongoose');
const offerSchema = new Schema({
      value:{
        type: String,
		required: [true],
      },
      startdate:{
        type: String,
	    required: [true],
      },
      enddate:{
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

