const Product = require('../models/productModel');
module.exports.getProducts = async (query) => {
    return await Product.find(query).populate('offer').populate('user').populate('reviews')
};
module.exports.createProduct = async newProduct => {
	return await Product.create(newProduct);  
};
module.exports.updateProduct = async (productId, updateFields) => {
    const updatedProduct = await Product.findByIdAndUpdate(productId, { $set: updateFields }, { new: true });
    return updatedProduct;
};
module.exports.changeArchiveStatus = async productId => {  
    const product = await Product.findById(productId);
    if(!product) {
        throw new Error(`Product with id ${productId} not found`);
    } 
    product.isArchived = !product.isArchived;
    const updatedProduct = await product.save();
    return updatedProduct;
};
module.exports.getProductById = async productId => {
	return await Product.findById(productId).populate('reviews').populate('user').populate('offer');
};
module.exports.deleteReviewFromProduct = async review => {
    return await Product.deleteMany(review)
};
module.exports.deleteOfferFromProducts = async (offer) => {
    return await Product.deleteMany(offer);
};
module.exports.getProductsBySeller = async userId => {
    return await Product.find({userId}).populate('offer').populate('user').populate('reviews');
};
module.exports.deleteProductsIfSellerDeleted = async userId => {
    const products = await Product.getProductsBySeller(userId);
    return await Product.deleteMany(products);
};
