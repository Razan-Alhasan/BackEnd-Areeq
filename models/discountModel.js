const { Schema, model } = require('mongoose');
const discountSchema = new Schema({
    code: {
        type: String,
        required: [true, 'Please enter the code']
    },
    offer: {
        type: Schema.Types.ObjectId,
        ref: 'offer',
        required: [true, 'Please enter the value']
    }
});
const discount = model('discount', discountSchema);
module.exports = discount;
