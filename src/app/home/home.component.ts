import { Component, OnInit } from '@angular/core';
import { ProductService } from './services/products.service';
import { Product } from './models/products.model';


@Component({
  selector: 'app-home',

  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  productsInfo: any;
  products: Product[] = [];
  categories:any[]=[];
  constructor(private prodService: ProductService) {


  }
  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts = () => {
    this.prodService.getProducts().subscribe(products => {

      this.productsInfo = products;
      this.products = this.productsInfo.data;
      console.log("Products", this.products)
      this.getCategories(this.products)
      
    })
  }


  getCategories=(products)=>{
    console.log("Categories",products)
 products.map((cateee,index)=>{
  const category ={
    name:cateee.product_category.name
  }
    this.categories.push(category)
    });
    console.log(this.categories,"singe category arraybsssss")
  }


}
