import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.css'
})
export class AllProductsComponent implements OnInit{
 
  products: any[] = []; //Array pour stoker les produits
  categories: any[] = []; //Array pour stoker les catégories

  constructor(private service:ProductsService) { }

  ngOnInit(): void {
    this.getProducts(); //Appel de la méthode getProducts() pour afficher les produits lors de lancemnt de l'application
    this.getCategories();
    
  }


  //) Récupérer tous les produits

  getProducts() {
    //Prendre les données depuis le backend et stoker dans l'array products
    this.service.getAllProducts().subscribe((res:any) => {
      
      //console.log(res);
      
      this.products = res
    }, error => {
      alert(error);

    })
    }

      
    //Récupérer toutes les catégories

    getCategories() {
      this.service.getAllCategories().subscribe((res:any) => {
        // console.log(res);

        this.categories = res

      }, error => {
        alert(error)
      })
    }


    //Filtrer les produits par catégorie

    filterCategory(event:any) {

      let CategoryValue = event.target.value; //Récupérer la valeur de la catégorie sélectionnée

      // console.log(CategoryValue); // Afficher la valeur de la catégorie sélectionnée

      if(CategoryValue == "All") {
        this.getProducts();
      }

      else{
        this.getProductsCategory(CategoryValue); //Appel de la méthode getProductCategory() pour filtrer les produits par catégorie
      }
      
    }

    //Filtrer les produits par catégorie
    getProductsCategory(keyword: string) {
      this.service.getProductsByCategory(keyword).subscribe((res:any)=> {

        this.products = res
      })
    }
    
}
