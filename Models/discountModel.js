const { Schema, model } = require('mongoose');
const discountSchema = new Schema({
    code: {
        type: string,
        required: [true, 'Please enter the code']

    },
    value: {
        type: Schema.Types.ObjectId,
        ref: 'Offer',
        required: [true, 'Please enter the value']
    }
})
const Discount = model('Discount', discountSchema);
module.exports = Discount;
