import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../customers/customers.service'
import { ProductsService } from '../products/products.service'
import { OrdersService } from './orders.service'
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
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
  onSubmit(formData){
    this._orderService.makeOrder(formData.value)
      .then( (orders) => {
        formData.reset()
        this.getOrders();
        console.log(orders)
      })
      .catch( (err) => console.log(err))
  }

}
