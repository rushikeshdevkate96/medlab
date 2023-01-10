import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MedicineComponent } from './components/medicine/medicine.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { ViewProductDetailsCategoryComponent } from './components/view-product-details-category/view-product-details-category.component';
import { ViewProductDetailsComponent } from './components/view-product-details/view-product-details.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'medicine',component:MedicineComponent},
  {path:'view-product-details/:drug-code',component:ViewProductDetailsComponent},
  {path:'view-top-details-by-category',component:ViewProductDetailsCategoryComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
