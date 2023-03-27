const User = require('../models/userModel');

module.exports.createUser = async userData => {
	return await User.create(userData);
};
module.exports.updateUser = async (id, newInformation) => {
	return await User.findByIdAndUpdate(id, newInformation, { new: true });
};
module.exports.removeUser = async user_id => {
	await Order.deleteMany({ user: _id });
	return await User.deleteOne({ _id });
};
module.exports.getUserById = async () => {
	const user = await User.findById({ _id: id });
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
	
 
