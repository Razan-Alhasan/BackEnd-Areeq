const Discount = require('../models/discountModel');
module.exports.getDiscount = async () => {
    return await Discount.find().populate('value', 'value -_id')
};
module.exports.createDiscount = async newDiscount => {
    return await Discount.create(newDiscount);
};
module.exports.deleteDiscount = async _id => {
    return await Discount.deleteOne({ _id });
};
module.exports.updateById = async (id, newDiscount) => {
    return await Discount.findByIdAndUpdate(id, newDiscount, { new: true }).populate('value');
};
