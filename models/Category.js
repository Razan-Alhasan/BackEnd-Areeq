const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;

const CategorySchema = new Schema(
	{
		CategoryId: {
			type: Number,

		},
		Name: {
			type:String,
			required: true

		},
       
    })
	module.exports = model("Category",CategorySchema);
	