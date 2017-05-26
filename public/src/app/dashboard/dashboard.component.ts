import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../customers/customers.service'
import { ProductsService } from '../products/products.service'
import { OrdersService } from '../orders/orders.service'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  customers: Array<any>;
  products: Array<any>;
  orders: Array<any>;
  constructor( private _productService: ProductsService, private _customerService: CustomersService, private _orderService: OrdersService) { }

  ngOnInit() {
    this.getCustomers();
    this.getProducts();
    this.getOrders();
  }

  getOrders(){
    this._orderService.getOrders()
      .then( (orders) => this.orders = orders)
      .catch( (err) => console.log(err))
  }
  getCustomers(){
    this._customerService.getCustomers()
      .then( (customers) => this.customers = customers)
      .catch( (err) => console.log(err))
  }
  getProducts(){
    this._productService.getProducts()
      .then( (products) => this.products = products)
      .catch( (err) => console.log(err))
  }

}
