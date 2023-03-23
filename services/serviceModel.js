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
module.exports.updateById = async (id, newDiscount) => {
    return await discount.findByIdAndUpdate(id, newDiscount, { new: true }).populate('value');
};
