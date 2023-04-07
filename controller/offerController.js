const offer = require('../models/offerModel');
const offerService = require('../service/offerService');

module.exports.createoffer = async (req = express.request,res = express.response) =>{
    try{
    let offer = new offer(req.body);
        pro.save();
        res.status(200).json(offer);
    }catch (err) {
        const error = `Failed to create offer, error: ${err}`;
		res.status(400).json({ error });
    }
};
module.exports.getoffer = async (req = express.request,res = express.response) =>{
    try {
		const offer = await offerService.getoffer();
		res.status(200).json(offer);
	} catch (err) {
		const error = `Failed to get offer, error: ${err}`;
		res.status(400).json({ error });
	}
};
module.exports.getAlloffer = async (req = express.request,res = express.response) =>{
    try {
		const offer = await offerService.getAlloffer();
		res.status(200).json(offer);
	} catch (err) {
		const error = `Failed to get All offer, error: ${err}`;
		res.status(400).json({ error });
	}
};
module.exports.updateoffer = async (req = express.request,res = express.response) =>{
    const id = req.params.id;
    const newInformation = req.body;
	try {
        offerService.updateoffer(offerId, newInformation);
    }
    catch(err){
        const errors = `FAILD to Update offer with id ${id}, err: ${error}`;
		res.status(400).json({ errors});
    }
};
module.exports.deleteoffer = async (req = express.request,res = express.response) =>{
    try{
        const id = req.params.id;
        await offerService.deleteoffer(id);
        res.status(204);
    }
    catch(err){
        const errors = `FAILD to delete this offer with id: ${id},error:${err}`;
		res.status(400).json({ errors});
    }
};
