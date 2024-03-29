const express = require('express');
const productService = require('../services/productService');

module.exports.createProduct = async (req = express.request, res = express.response) =>{
    try{ 
     const productData = {...req.body, user: res.locals.userId};
     const product = await productService.createProduct(productData);
        res.status(201).json(product);
    }catch (err) {
        const error = `Failed to create product, error: ${err.message}`;
		res.status(400).json({ error });
    }
};
module.exports.getProducts = async (req = express.request, res = express.response) =>{
    try {
        let query = {};
        if (req.query.category){
            query = {category: req.query.category};
        }
        if (req.query.user){
            query = {user: req.query.user};
        }
		const products = await productService.getProducts(query);
		res.status(200).json(products);
	} catch (err) {
		const error = `Failed to get products, error: ${err}`;
		res.status(400).json({ error });
	}
};
module.exports.getProductById = async (req = express.request, res = express.response) =>{
    try {
		const product = await productService.getProductById(req.params.id);
		res.status(200).json(product);
	} catch (err) {
		const error = `Failed to get product, error: ${err}`;
		res.status(404).json({ error });
	}
};
module.exports.changeArchiveStatus = async (req = express.request, res = express.response) =>{
    try{
        const id = req.params.id;
        await productService.changeArchiveStatus(id);
        res.status(200).json({message: "product is archived"});
    }
    catch(err){
        const errors = `FAILD to delete this product ,error:${err}`;
		res.status(400).json({ errors});
    }
};
module.exports.updateProduct = async (req = express.request, res = express.response) =>{
    const id = req.params.id;
    const newInformation = req.body;
	try {
        const updatedProduct = await productService.updateProduct(id, newInformation);
        await updatedProduct.save();
        res.status(200).json(updatedProduct);
    }
    catch(error){
        const errors = `FAILD to Update Product with id ${id}, err: ${error}`;
		res.status(400).json({ errors});
    }
};
module.exports.deleteReviewFromProduct = async (req = express.request, res = express.response) =>{
    try{
        const products = await productService.deleteReviewFromProduct(req.params.review);
		res.status(200).json({message: "review is deleted sucessfuly"});
    }
    catch(err){
        const errors = `Failed to delete review, error: ${err}`;
		res.status(400).json({ errors });
    }
};
module.exports.deleteOfferFromProducts = async (req = express.request, res = express.response) =>{
    try{
        const products = await productService.deleteOfferFromProducts({offer: req.body.offer});
		res.status(200).json(products);
    }
    catch(err){
        const errors = `Failed to delete offer, error: ${err}`;
		res.status(400).json({ errors });
    }
};
module.exports.deleteProductsIfSellerDeleted = async (req = express.request, res = express.response) =>{
    try{
        const products = await productService.deleteProductsIfSellerDeleted(req.params.user);
		res.status(200).json(products);
    }
    catch(err){
        const errors = `Failed to delete products, error: ${err}`;
		res.status(400).json({ errors });
    }
};
