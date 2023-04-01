const User = require('../models/userModel');
const userService = require('../service/userService');

module.exports.createUser = async (req = express.request, res = express.response) =>{
    try{
        let user = new user(req.body);
        user.save();
        res.status(200).json(user);
    }
    catch (err) {
        const error = `Failed to create user, error: ${err}`;
		res.status(400).json({ error });
    }
};
module.exports.getUser = async (req = express.request, res = express.response) =>{
    try {
        const user = await userService.getUserById(req.params.id);
		res.status(200).json(user);
	} 
    catch (err) {
		const error = `Failed to get user, error: ${err}`;
		res.status(400).json({ error });
	}
};
module.exports.updateUser = async (req = express.request, res = express.response) =>{
    const updateFields = req.body;
	try {
        userService.updateUser(req.params.id, updateFields);
    }
    catch(err){
        const errors = `FAILD to Update user with id ${id}, err: ${error}`;
		res.status(400).json({ errors});
    }
};
module.exports.removeUser = async (req = express.request, res = express.response) =>{
    try{
        await userService.removeUser(req.params.id);
        res.status(204);
    }
    catch(err){
        const errors = `FAILD to delete this user with id: ${id},error:${err}`;
		res.status(400).json({ errors});
    }
};

