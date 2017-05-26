import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs';
@Injectable()
export class CustomersService {

  constructor(private _http: Http) { }
  addCustomer(customer){
    return this._http.post('/api/customer', customer)
      .map( (customer: Response) => customer.json())
      .toPromise()
  }
  getCustomers(){
    return this._http.get('/api/customer')
      .map( (customers: Response) => customers.json())
      .toPromise()
  }
  deleteCustomer(customerId){
    //console.log("*******");
    //console.log(customerId);
    var temp ={id: customerId};
    console.log(temp);
    return this._http.post('/api/customer/delete', temp)
      .map( (customers: Response) => customers.json())
      .toPromise()
  }

}
