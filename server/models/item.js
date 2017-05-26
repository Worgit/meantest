let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let ItemSchema = new Schema({
	name: {type: String, required: [true, "You need to enter the product's name."]},
	quantity: {type: Number, required: [true, "You need to enter the quantity of the product."]},
	link: {type: String, required: [true, "You need to enter an image url."]},
	description: {type: String, required: [true, "You need to enter the description."]},
}, {timestamps:true});
mongoose.model('Item', ItemSchema)