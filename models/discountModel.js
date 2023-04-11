const { Schema, model } = require('mongoose');
const discountSchema = new Schema({
    code: {
        type: String,
        required: [true, 'Please enter the code']

    },
    value: {
        type: Schema.Types.ObjectId,
        ref: 'Offer',
        required: [true, 'Please enter the value']
    }
})
const discount = model('Discount', discountSchema);
module.exports = discount;
