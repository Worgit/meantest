var mongoose = require('mongoose');
var Customer = mongoose.model('Customer')
var Item = mongoose.model('Item')
var Order = mongoose.model('Order')
/*module.exports = app => {
	app.post('/api/order', controller.makeOrder);
	app.get('/api/order', controller.getOrders);
	app.get('/api/customer', controller.getCustomers);
	app.post('/api/customer', controller.createCustomer);
	app.get('/api/product', controller.getProducts);
	app.post('/api/product/', controller.addProduct);
}*/
module.exports = {
	
	makeOrder: (req, res) => {
		console.log("*********");
		Item.findOne({_id: req.body.product}, (err, product) => {
			console.log("*********");
			if(req.body.quantity > product.quantity){
				return res.status(500).send("Not enough in stock.")
			}
			var newOrder = new Order(req.body);
			newOrder.save( (err, savedOrder) => {
				if(err){
					console.log("Saving Order");
					console.log(err)
					let errors = "";
					for (let i in err.errors){
						errors+=err.errors[i].message + ",";
					}
					return res.status(500).send(errors)
				}
				else{
					console.log("*********");
					product.quantity -= req.body.quantity;
					product.save();
					return res.json(savedOrder);
				}
			})
		})
	},
	getOrders: (req, res) => {
		Order.find({}).populate('customer').populate('product').exec( (err, orders)=>{
			if(err){
				console.log(err);
				let errors = "";
				for (let i in err.errors){
					errors+=err.errors[i].message + ",";
				}
				return res.status(500).send(errors)
			}
			else{
				return res.json(orders);
			}
		})
	},
	createCustomer: (req, res) => {
		Customer.findOne({name: req.body.name}, (err, customer) =>{
			if(customer != null){
				return res.status(500).send("Customer already made")
			} 
			else{
				let customer = new Customer(req.body);
				customer.save((err, newCustomer) => {
					if(err){
						console.log(err);
						let errors = "";
							for (let i in err.errors){
								errors+=err.errors[i].message + ",";
						}
						return res.status(500).send(errors)
					}
					else{
						return res.json(newCustomer);
					}
				})
			}
		})
	},
	deleteCustomer: (req, res) => {
		//console.log("*********");
		//console.log(req.body.id);
		Customer.remove({_id: req.body.id}, (err, data) =>{
			if(err){
				console.log(err);
				let errors = "";
				for (let i in err.errors){
					errors+=err.errors[i].message + ",";
				}
				return res.status(500).send(errors)
			}
			else{
				return res.json(data);
			}
		})
	},
	getCustomers: (req, res) => {
		Customer.find({}).exec( (err, customers)=>{
			if(err){
				console.log(err);
				let errors = "";
				for (let i in err.errors){
					errors+=err.errors[i].message + ",";
				}
				return res.status(500).send(errors)
			}
			else{
				return res.json(customers);
			}
		})
	},
	createItem: (req, res) => {
		let item = new Item(req.body);
		item.save((err, newItem) => {
			if(err){
				console.log(err);
				let errors = "";
				for (let i in err.errors){
					errors+=err.errors[i].message + ",";
				}
				return res.status(500).send(errors)
			}
			else{
				return res.json(newItem);
			}
		})
	},
	getItems: (req, res) => {
		Item.find({}).exec( (err, items)=>{
			if(err){
				console.log(err);
				let errors = "";
				for (let i in err.errors){
					errors+=err.errors[i].message + ",";
				}
				return res.status(500).send(errors)
			}
			else{
				console.log(items);
				return res.json(items);
			}
		})
	},
}