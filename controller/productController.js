const express = require('express');
const productService = require('../services/productService');

module.exports.createProduct = async (req = express.request, res = express.response) =>{
    try{
    let product = new product(req.body);
        product.save();
        res.status(200).json(product);
    }catch (err) {
        const error = `Failed to create product, error: ${err}`;
		res.status(400).json({ error });
    }
};
module.exports.getProducts = async (req = express.request, res = express.response) =>{
    try {
		const products = await productService.getProducts();
		res.status(200).json(products);
	} catch (err) {
		const error = `Failed to get products, error: ${err}`;
		res.status(400).json({ error });
	}
};
module.exports.getProductById = async (req = express.request, res = express.response) =>{
    try {
		const product = await productService.getProductById();
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
        res.status(204);
    }
    catch(err){
        const errors = `FAILD to delete this product with id: ${id},error:${err}`;
		res.status(400).json({ errors});
    }
};
module.exports.updateProduct = async (req = express.request, res = express.response) =>{
    const id = req.params.id;
    const newInformation = req.body;
	try {
        productService.updateProduct(productId, newInformation);
    }
    catch(error){
        const errors = `FAILD to Update Product with id ${id}, err: ${error}`;
		res.status(400).json({ errors});
    }
};
module.exports.getProductsByCategory = async (req = express.request, res = express.response) =>{
    try{
        const products = await productService.getProductsByCategory();
		res.status(200).json(products);
    }
    catch(err){
        const errors = `FAILD to get Product  by category , err: ${err}`;
		res.status(400).json({ errors });
    }
};
module.exports.getProductsBySeller = async (req = express.request, res = express.response) =>{
    try{
        const products = await productService.getProductsBySeller();
		res.status(200).json(products);
    }
    catch(err){
        const errors = `Failed to get product by seler, error: ${err}`;
		res.status(400).json({ errors });
    }
};
