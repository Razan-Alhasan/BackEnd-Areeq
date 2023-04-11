const User = require('../models/userModel');
module.exports.createUser = async (userData) => {
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
module.exports.login = async (email, password) => {
	try {
		const user = await User.findOne({ email });
		if (!user) {
			return {
				result: false,
				error: "failed to login, password or email is incorrect",
			}
		} else {
			if (await user.comparePasswords(password)) {
				return {
					result: true,
					user
				}
			}
			else return {
				result: false,
				error: "failed to login, password or email is incorrect",
			}
		}
	} catch (error) {
		return {
			result: false,
			error: error.message,
		};
	}
};
module.exports.getAllUsers = () => {
	const usersWithoutPassword = users.map(user => {
		const { password, ...userWithoutPassword } = user.toObject();
		return userWithoutPassword;
	});
	return usersWithoutPassword;
};
