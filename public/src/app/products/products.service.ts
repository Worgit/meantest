import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs';
@Injectable()
export class ProductsService {

  constructor(private _http: Http) { }
  addProduct(product){
    return this._http.post('/api/product', product)
      .map( (product: Response) => product.json())
      .toPromise()
  }
  getProducts(){
    return this._http.get('/api/product')
      .map( (products: Response) => products.json())
      .toPromise()
  }
}
