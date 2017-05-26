import { Component, OnInit } from '@angular/core';
import { CustomersService } from './customers.service'
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers: Array<any>;
  constructor(private _customerService: CustomersService) { }
  errors: Array<string>;
  ngOnInit() {
    this.getCustomers();
  }
  submit(formData){
    this._customerService.addCustomer(formData.value)
      .then( (customer) => {
        formData.reset()
        this.getCustomers();
        console.log(customer)
      })
      .catch( (err) => {
        console.log(err)
        this.errors = err._body.split(",")
        console.log(this.errors);
      })
  }
  getCustomers(){
    console.log("*******")
    this._customerService.getCustomers()
      .then( (customers) => this.customers = customers)
      .catch( (err) => {
        console.log(err)
        this.errors = err._body.split(",")
        console.log(this.errors);
      })
  }
  delete(customerId){
    this._customerService.deleteCustomer(customerId)
      .then( (customer) => {
        this.getCustomers();
        console.log(customer)
      })
      .catch( (err) => console.log(err))
  }
}
