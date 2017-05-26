let controller = require('./../controllers/controller');
module.exports = app => {
	app.post('/api/order', controller.makeOrder);
	app.get('/api/order', controller.getOrders);
	app.get('/api/customer', controller.getCustomers);
	app.post('/api/customer', controller.createCustomer);
	app.post('/api/customer/delete', controller.deleteCustomer);
	app.get('/api/product', controller.getItems);
	app.post('/api/product', controller.createItem);
}