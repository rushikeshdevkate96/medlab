import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { HttpService } from 'src/app/http.service';


@Component({
  selector: 'app-view-product-details-category',
  templateUrl: './view-product-details-category.component.html',
  styleUrls: ['./view-product-details-category.component.scss']
})
export class ViewProductDetailsCategoryComponent implements OnInit {
  
  topDealsByCategory:any;
  constructor(private http:HttpService ,private cart:CartService) { }

  ngOnInit(): void {
    this.getTopDealsByCategory()
  }

  getTopDealsByCategory(){
     this.http.getdetailsfromserver('top-deals-by-category').subscribe((response:any)=>{
      if(response && response.length > 0){
        this.topDealsByCategory = response ;
      }
     })
  }
 
  addtocart(product:any){
    this.cart.addselecteditemtocart(product)
    
     }
}
