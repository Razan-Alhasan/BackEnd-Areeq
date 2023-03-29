const Product = require('../models/productModel');
module.exports.getProducts = async () => {
    return await Product.find().populate('offer').populate('user').populate('reviews')
};
module.exports.createProduct = async newProduct => {
	return await Product.create(newProduct);  
};
module.exports.updateProduct = async (productId, updateFields) => {
    return await Product.findByIdAndUpdate(productId, { $set: updateFields }, { new: true }); 
};
module.exports.changeArchiveStatus = async productId => {  
    const product = await Product.findById({productId}); 
    product.isArchived = !product.isArchived;
    await product.save();
};
module.exports.getProductsByCategory = async category => {
    return await Product.find({category}); 
};
module.exports.getProductsBySeller = async userId => {
    return await Product.find({userId }).populate('offer').populate('user').populate('reviews');
};
module.exports.getProductById = async productId => {
	return await Product.findById(productId);
};
