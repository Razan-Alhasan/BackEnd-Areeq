const User = require('../models/userModel');
const userService = require('../service/userService');

module.exports.createuser = async (req = express.request,res = express.response) =>{
    try{
    let user = new user(req.body);
        pro.save();
        res.status(200).json(user);
    }catch (err) {
        const error = `Failed to create user, error: ${err}`;
		res.status(400).json({ error });
    }
};
module.exports.getuser = async (req = express.request,res = express.response) =>{
    try {
		const user = await userService.getuser();
		res.status(200).json(user);
	} catch (err) {
		const error = `Failed to get user, error: ${err}`;
		res.status(400).json({ error });
	}
};
module.exports.updateuser = async (req = express.request,res = express.response) =>{
    const id = req.params.id;
    const newInformation = req.body;
	try {
        userService.updateuser(userId, newInformation);
    }
    catch(err){
        const errors = `FAILD to Update user with id ${id}, err: ${error}`;
		res.status(400).json({ errors});
    }
};
module.exports.deleteuser = async (req = express.request,res = express.response) =>{
    try{
        const id = req.params.id;
        await userService.deleteuser(id);
        res.status(204);
    }
    catch(err){
        const errors = `FAILD to delete this user with id: ${id},error:${err}`;
		res.status(400).json({ errors});
    }
};