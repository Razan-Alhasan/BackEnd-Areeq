const Product = require('../models/productModel');
module.exports.getProducts = async () => {
    return await Product.find().populate('offer').populate('user').populate('reviews')
};
module.exports.createProduct = async newProduct => {
	return await Product.create(newProduct);  
};
module.exports.updateProduct = async (productId, newProduct) => {
    return await Product.findByIdAndUpdate(productId, newProduct, { new: true }); 
};
module.exports.archiveProduct = async productId => {  
    const product = await Product.findById({productId}); 
    product.isArchived = !product.isArchived;
    return product.save();
};
module.exports.getProductsByCategory = async category => {
    return await Product.find({category}); 
};
module.exports.getProductsBySeller = async userId => {
    return await Product.find({userId }).populate('offer').populate('user').populate('reviews');
};
module.exports.findProduct = async productId => {
	return await Product.findById(productId);
};
