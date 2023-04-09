const express = require('express');
const discountService = require('../services/discountService');
module.exports.createDiscount = async (req = express.request, res = express.response) => {
    try {
        let discount = new discount(req.body);
        discount.save();
        res.status(200).json(discount);
    } catch (err) {
        const error = `Failed to create discount , error: ${err}`;
        res.status(400).json({ error });
    }
};
module.exports.getDiscounts = async (req = express.request, res = express.response) => {
    try {
        const discounts = await discountService.getDiscounts();
        res.status(200).json(discounts);
    } catch (err) {
        const error = `Failed to get discounts, error: ${err}`;
        res.status(400).json({ error });
    }
};
module.exports.getDiscountById = async (req = express.request, res = express.response) => {
    try {
        const discount = await discountService.getDiscountById(req.params.id);
        res.status(200).json(discount);
    } catch (err) {
        const error = `Failed to get discount, error: ${err}`;
        res.status(404).json({ error });
    }
};
module.exports.deleteDiscount = async (req = express.request, res = express.response) => {
    try {
        const result = await discountService.deleteDiscount(req.params.id);
        result.deletedCount != 0
            ? res.status(202).json('Deleted Success')
            : res.status(400).json('Faild to delete the discount');
    } catch (e) {
        const errors = `Faild to delete discount with Id ${req.params.id}, error: ${e.message}`;
        res.status(400).json({ errors });
    }
};
module.exports.updateById = async (req = express.request, res = express.response) => {
    try {
        const discount = await discountService.updateById(req.params.id, req.body);
        res.status(200).json({ discount });
    } catch (e) {
        const errors = `faild to update discount with id ${req.params.id}, err" ${e.message}`;
        res.status(400).json({ errors });
    }
};
