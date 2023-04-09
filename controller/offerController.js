const offer = require('../models/offerModel');
const offerService = require('../services/offerService');

module.exports.createOffer = async (req = express.request, res = express.response) =>{
    try{
        const offer = await offerService.createOffer(req.body);
        offer.save();
        res.status(200).json(offer);
    }catch (err) {
        const error = `Failed to create offer, error: ${err}`;
		res.status(400).json({ error });
    }
};
module.exports.getOffer = async (req = express.request, res = express.response) =>{
    try {
		const offer = await offerService.getOffer();
		res.status(200).json(offer);
	} catch (err) {
		const error = `Failed to get offer, error: ${err}`;
		res.status(400).json({ error });
	}
};
module.exports.getAllOffers = async (req = express.request, res = express.response) =>{
    try {
		const offer = await offerService.getAllOffers();
		res.status(200).json(offer);
	} catch (err) {
		const error = `Failed to get All offer, error: ${err}`;
		res.status(400).json({ error });
	}
};
module.exports.updateOffer = async (req = express.request, res = express.response) =>{
    const Id = req.params.id;
    const newInformation = req.body;
	try {
        offerService.updateOffer(offerId, newInformation);
    }
    catch(err){
        const errors = `FAILD to Update offer with id ${id}, err: ${error}`;
		res.status(400).json({ errors});
    }
};
module.exports.deleteOffer = async (req = express.request, res = express.response) =>{
    try{
        const id = req.params.id;
        await offerService.deleteOffer(id);
        res.status(204);
    }
    catch(err){
        const errors = `FAILD to delete this offer with id: ${id}, error:${err}`;
		res.status(400).json({ errors});
    }
};
