import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs';
@Injectable()
export class OrdersService {

  constructor(private _http: Http) { }
  getOrders(){
    return this._http.get('/api/order')
      .map( (orders: Response) => orders.json())
      .toPromise()
  }
  makeOrder(order){
    return this._http.post('/api/order', order)
      .map( (order: Response) => order.json())
      .toPromise()
  }
}
