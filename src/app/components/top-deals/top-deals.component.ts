import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';
import { OwlOptions } from 'ngx-owl-carousel-o'
import { CartService } from 'src/app/cart/cart.service';

@Component({
  selector: 'app-top-deals',
  templateUrl: './top-deals.component.html',
  styleUrls: ['./top-deals.component.scss']
})
export class TopDealsComponent implements OnInit {
  topDeals: any[] = [];
  constructor(private http: HttpService,private cart:CartService) { }

  ngOnInit(): void {
    this.getTopDeals();
  }

  getTopDeals() {

    this.http.getdetailsfromserver('top-deals').subscribe((response: any) => {

      if (response && response.length > 0) {
        this.topDeals = response;

      }
    })
  }
 addtocart(product:any){
this.cart.addselecteditemtocart(product)

 }

 
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

}
