const User = require('../models/userModel');
module.exports.createUser = async userData => {
	return await User.create(userData);
};
module.exports.updateUser = async (id, updateFields) => {
	return await User.findByIdAndUpdate(id, { $set: updateFields }, { new: true });
};
module.exports.removeUser = async _id => {
	return await User.deleteOne({ _id });
};
module.exports.getUserById = async (userId) => {
	const user = await User.findById(userId);
	delete user.password;
	return user;
};
module.exports.login = async (req, res, next) => {
	try {
		const user = await user.findOne({ email, password })
		if (!user) {
			res.status(401).json({
				message: "Login not successful",
				error: "User not found",
			})
		} else {
			res.status(200).json({
				message: "Login successful",
				user,
			})
		}
	} catch (error) {
		res.status(400).json({
			message: "An error occurred",
			error: error.message,
		});
	}
};
module.exports.getAllUsers = () => {
	const usersWithoutPassword = users.map(user => {
		const { password, ...userWithoutPassword } = user.toObject();
		return userWithoutPassword;
	});
	return usersWithoutPassword;
};
