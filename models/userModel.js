const { Schema, model } = require('mongoose');
const validator = require('validator');
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
    },
    link: {
        type: String,
    },
    isAdmin: {
        type: Boolean,
    },
    description: {
        type: String,
    },
});
userSchema.virtual('fullName').get(function () {
    return `${this.firstName} ${this.lastName}`;
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
