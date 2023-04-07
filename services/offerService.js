const User = require('../models/offerModel');

module.exports.createoffer = async offerData => {
	return await offer.create(offerData);
};
module.exports.updateoffer = async (id, newInformation) => {
	return await offer.findByIdAndUpdate(id, newInformation, { new: true });
};
module.exports.removeoffer = async offer_id => {
	return await offer.deleteOne({ _id : offer_id });
};
module.exports.getofferById = async (id ) => {
	const offer = await offer.findById(id);
    delete offer.password;
    return offer; 
};
module.exports.getalloffers = () =>{
const offersWithoutPassword = offers.map(offer => {
	const { password, ...offerWithoutPassword } = offer.toObject();
	return offerWithoutPassword;
});
	return offersWithoutPassword;
}
