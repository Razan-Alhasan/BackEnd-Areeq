const User = require('../models/userModel');

module.exports.createUser = async userData => {
	return await User.create(userData);
};
module.exports.updateUser = async (id, newInformation) => {
	return await User.findByIdAndUpdate(id, newInformation, { new: true });
};
module.exports.removeUser = async user_id => {
	return await User.deleteOne({ _id : user_id });
};
module.exports.getUserById = async (id ) => {
	const user = await User.findById(id);
    delete user.password;
    return user; 
};
module.exports.getallusers = () =>{
const usersWithoutPassword = users.map(user => {
	const { password, ...userWithoutPassword } = user.toObject();
	return userWithoutPassword;
});
	return usersWithoutPassword;
}
	
 
