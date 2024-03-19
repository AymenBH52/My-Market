import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getAllProducts() {
    //Méthode 1 :
   // return this.http.get('https://fakestoreapi.com/products')

   //Méthode 2
   return this.http.get(environment.baseApi + 'products')
  }


  getAllCategories() {
    return this.http.get(environment.baseApi + 'products/categories')
  }

  getProductsByCategory(keyword: string) {
    return this.http.get(environment.baseApi + 'products/category/' + keyword)
  }
  


}

