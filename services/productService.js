const Product = require('../models/productModel');
module.exports.getProducts = async () => {
    return await Product.find().populate('offer').populate('user').populate('reviews')
};
module.exports.createProduct = async newProduct => {
	return await Product.create(newProduct);  
};
module.exports.updateProduct = async (_id, newProduct) => {
    return await Product.findByIdAndUpdate(_id, newProduct, { new: true }); 
};
module.exports.archiveProduct = async _id => {  
    const product = await Product.findById({_id}); 
    product.isArchived = !product.isArchived;
    return product.save();
};
module.exports.getProductsByCategory = async category => {
    return await Product.find({category}); 
};
module.exports.getProductsBySeller = async user => {
    return await Product.find({user}).populate({
        path :'User',
        select:{productId},
    }); 
};
