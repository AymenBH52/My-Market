import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.css'
})
export class AllProductsComponent implements OnInit{
 
  products: any[] = [];

  constructor(private service:ProductsService) { }

  ngOnInit(): void {
    this.getProducts(); //Appel de la méthode getProducts() pour afficher les produits lors de lancemnt de l'application
    
  }

  getProducts() {
    //Prendre les données depuis le backend et stoker dans l'array products
    this.service.getAllProducts().subscribe((res:any) => {
      
      //console.log(res);
      
      this.products = res
    }, error => {
      console.log(error.message);

    }
      )
    }
      

    
}
