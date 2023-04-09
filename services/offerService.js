const offer = require('../models/offerModel');

module.exports.createOffer = async offerData => {
	return await offer.create(offerData);
};
module.exports.updateOffer = async (id, newInformation) => {
	return await offer.findByIdAndUpdate(id, newInformation, { new: true });
};
module.exports.removeOffer = async offer_id => {
	return await offer.deleteOne({ _id : offer_id });
};
module.exports.getOfferById = async (id ) => { 
	return await offer.findById(id);
};
module.exports.getAllOffers = async () =>{
	const offers = await offer.find();
    return offers; 
}
