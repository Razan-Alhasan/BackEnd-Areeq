const { Schema, model } = require('mongoose');
const validator = require('validator');


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
		validate: {validator: validator.isEmail,
                   message: '{value} is not a valid email',
                   isAsync: false},
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
        type : String,
        required: true,
    },
    Type: {
        type : String,
        required: true,
    },
  });
  userSchema.virtual('fullName').get(function() {
     return ${this.firstName} ${this.lastName};
  });

userSchema.pre(save, function(next) {
    var user = this;
    if (!user.isModified('password')) return next();
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
    if (err) return next(err);
    bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) return next(err);
        user.password = hash;
        next();
    });
});
});

UserSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

  const User = model('User',userSchema); 
  module.exports = User;



  