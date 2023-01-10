import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { LoginModule } from './login/login.module';
import{ HttpClientModule} from '@angular/common/http'
import { CartModule } from './cart/cart.module';
import { FormsModule } from '@angular/forms';
import { ViewProductDetailsComponent } from './components/view-product-details/view-product-details.component';
import { TopDealsComponent } from './components/top-deals/top-deals.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { MedicineComponent } from './components/medicine/medicine.component';
import { ViewProductDetailsCategoryComponent } from './components/view-product-details-category/view-product-details-category.component'



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PagenotfoundComponent,
    ViewProductDetailsComponent,
    TopDealsComponent,
    MedicineComponent,
    ViewProductDetailsCategoryComponent
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    HttpClientModule,
    CartModule,
    CarouselModule,
    FormsModule,
    BrowserAnimationsModule
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
