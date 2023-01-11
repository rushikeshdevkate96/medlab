import { Injectable } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private shared:SharedService) { }

  addselecteditemtocart(product:any){
    var products:any;
    products=localStorage.getItem('products');
    products=JSON.parse(products);
    if(!products){
      products=[];
    }
    products.push(product)
    localStorage.setItem('products',JSON.stringify(products))
    this.shared.emitselectedproduct.next(products.length);
  }
}
