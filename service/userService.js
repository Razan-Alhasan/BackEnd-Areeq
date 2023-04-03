const { default: mongoose } = require('mongoose');
const User = require('../models/userModel');

module.exports.createUser = async userData => {
	return await User.create(userData);
};
module.exports.updateUser = async (id, updateFields) => {
	return await User.findByIdAndUpdate(id, {$set: updateFields}, { new: true });
};
module.exports.removeUser = async user_id => {
	return await User.deleteOne({id});
};
module.exports.getUserById = async () => {
	const user = await User.findById({id});
    delete user.password;
    return user; 
};
module.exports.getAllUsers = () =>{
const usersWithoutPassword = users.map(user => {
	const { password, ...userWithoutPassword } = user.toObject();
	return userWithoutPassword;
});
	return usersWithoutPassword;
}
	
 
