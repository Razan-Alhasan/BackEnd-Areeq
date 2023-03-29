const discount = require('../models/discountModel');
module.exports.getDiscounts = async () => {
    return await discount.find().populate('value');
};
module.exports.createDiscount = async newDiscount => {
    return await discount.create(newDiscount);
};
module.exports.deleteDiscount = async _id => {
    return await discount.deleteOne({ _id });
};
module.exports.updateById = async (id, updatedFileds) => {
    return await discount.findByIdAndUpdate(id, { $set: updatedFileds }, { new: true }).populate('value');
};
module.exports.getDiscountById = async id => {
    return await discount.findById(id).populate('value');
};
