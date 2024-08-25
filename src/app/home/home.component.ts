import { Component, Input, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import { Products } from '../models/products.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
products:Products[] = [];
searchedProducts:Products[] = [];
cartProducts:Products[] = [];
filteredProducts:Products[] = [];

  constructor(private backend: BackendService) { }
  ngOnInit(): void {
    this.backend.getData().subscribe(resp => {
      console.log(resp);
      this.products = resp;
    })
    console.log(this.filteredProducts);
    
  }

  handleSearchedProducts(results: Products[]){
    console.log(results);
    
    this.searchedProducts = results;
  }

  // handleCartProducts(results: Products[]){
  //   console.log(results);
  //   this.cartProducts=results;
  // }
  handleFilteredProducts(results: Products[]){
    console.log(results);
    this.filteredProducts = results;
  }

}
