const { Schema, model } = require('mongoose');
const validator = require('validator');
const reviewService = require('../services/reviewService');
const productService = require('../services/productService');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: validator.isEmail,
            message: '{value} is not a valid email',
            isAsync: false
        },
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    photo: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        required: true,
    },
    isSeller: {
        type: Boolean,
        required: true,
    }
});
userSchema.virtual('fullName').get(function () {
    return `${this.firstName} ${this.lastName}`;
});
userSchema.pre('remove', async function(req,res,next){
    const user = this;
    try{
        await productService.deleteProductsIfSellerDeleted(user._id);
        if (typeof next === 'function') {
            next();
        }
    }catch(error){
        if (typeof next === 'function') {
            next(error);
        }
    }
});
userSchema.pre('remove', async function(req,res,next){
    const user = this;
    try{
        await reviewService.deleteReviewIfUserDeleted(user._id);
        if (typeof next === 'function') {
            next();
        }
    }catch(error){
        if (typeof next === 'function') {
            next(error);
        }
    }
});
userSchema.pre('save', async function (next) {
    let salt = await bcrypt.genSalt();
	this.password = await bcrypt.hash(this.password, salt);
	next();
});

userSchema.methods.comparePasswords = async function (candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
}
const user = model('user', userSchema);
module.exports = user;

