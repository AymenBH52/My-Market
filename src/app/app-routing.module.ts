import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { ProductsDetailsComponent } from './products/components/products-details/products-details.component';
import { CartComponent } from './carts/components/cart/cart.component';

const routes: Routes = [
  {path:"products" , component:AllProductsComponent},
  {path:"details" , component:ProductsDetailsComponent},
  {path:'cart' , component:CartComponent},
  {path:"**", redirectTo:"products", pathMatch:"full"} // redirect to products if the path is not found

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
