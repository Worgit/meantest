import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service'
//http://lorempixel.com/output/food-q-c-100-100-7.jpg
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Array<any>;
  constructor(private _productService: ProductsService) { }
  ngOnInit() {
    this.getProducts();
  }

  submit(formData){
    this._productService.addProduct(formData.value)
      .then( (product) => {
        formData.reset()
        this.getProducts();
        console.log(product)
      })
      .catch( (err) => console.log(err))
  }
  getProducts(){
    this._productService.getProducts()
      .then( (products) => this.products = products)
      .catch( (err) => console.log(err))
  }
}
