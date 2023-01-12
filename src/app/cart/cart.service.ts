import { Injectable } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
 
  private orderObj:any;
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

  setOrder(order:any){
    this.orderObj = order;
  }

  getOrder(){
    return this.orderObj ;
  }

  removeProductsFromLocalStorage(){
    localStorage.removeItem('products');
  }

}
