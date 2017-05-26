let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let OrderSchema = new Schema({
	customer: {type: Schema.Types.ObjectId, ref: 'Customer'},
	product: {type: Schema.Types.ObjectId, ref: 'Item'},
	quantity: {type: Number, required: [true, "You need to enter how much of the product was purchased."]},
}, {timestamps:true});
mongoose.model('Order', OrderSchema)