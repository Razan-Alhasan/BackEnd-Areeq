const offerService = require('../services/offerService');

module.exports.createOffer = async (req = express.request, res = express.response) =>{
    try{
        let offer = await offerService.createOffer(req.body);
        res.status(200).json(offer);
    }catch (err) {
        const error = `Failed to create offer, error: ${err}`;
		res.status(400).json({ error });
    }
};
module.exports.getOfferById = async (req = express.request, res = express.response) =>{
    try {
        const id = req.params.id;
		const offer = await offerService.getOfferById(id);
		res.status(200).json(offer);
	} catch (err) {
		const error = `Failed to get offer, error: ${err}`;
		res.status(400).json({ error });
	}
};
module.exports.getAllOffers = async (req = express.request, res = express.response) =>{
    try {
		const offers = await offerService.getAllOffers();
		res.status(200).json(offers);
	} catch (err) {
		const error = `Failed to get All offers, error: ${err}`;
		res.status(400).json({ error });
	}
};
module.exports.updateOffer = async (req = express.request, res = express.response) =>{
    const id = req.params.id;
    const newInformation = req.body;
	try {
        offerService.updateOffer(id, newInformation);
    }
    catch(err){
        const errors = `FAILD to Update offer with id ${id}, err: ${err}`;
		res.status(400).json({ errors});
    }
};
module.exports.deleteOffer = async (req = express.request, res = express.response) =>{
    try{
        const id = req.params.id;
        await offerService.deleteOffer(id);
        res.status(200).json('Deleted Success');
    }
    catch(err){
        const errors = `FAILD to delete this offer, error:${err}`;
		res.status(400).json({ errors});
    }
};
