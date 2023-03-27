const User = require('../models/userModel');
const userService = require('../service/userService');

module.exports.createUser = async (req = express.request,res = express.response) =>{
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
module.exports.getUser = async (req = express.request,res = express.response) =>{
    try {
		const user = await userService.getUser();
		res.status(200).json(user);
	} 
    catch (err) {
		const error = `Failed to get user, error: ${err}`;
		res.status(400).json({ error });
	}
};
module.exports.updateUser = async (req = express.request,res = express.response) =>{
    const id = req.params.id;
    const updateFields = req.body;
	try {
        userService.updateUser(userId, updateFields);
    }
    catch(err){
        const errors = `FAILD to Update user with id ${id}, err: ${error}`;
		res.status(400).json({ errors});
    }
};
module.exports.deleteUser = async (req = express.request,res = express.response) =>{
    try{
        const id = req.params.id;
        await userService.deleteUser(id);
        res.status(204);
    }
    catch(err){
        const errors = `FAILD to delete this user with id: ${id},error:${err}`;
		res.status(400).json({ errors});
    }
};

