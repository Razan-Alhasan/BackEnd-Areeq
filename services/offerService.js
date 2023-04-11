const offer = require('../models/offerModel');

module.exports.createOffer = async (newOffer) => {
	return await offer.create(newOffer);
};
module.exports.updateOffer = async (id, newInformation) => {
	return await offer.findByIdAndUpdate(id, newInformation, { new: true });
};
module.exports.deleteOffer = async id => {
	return await offer.findByIdAndDelete(id);
};
module.exports.getOfferById = async offerId => { 
	return await offer.findById(offerId);
};
module.exports.getAllOffers = async () =>{
	const offers = await offer.find();
    return offers; 
}
