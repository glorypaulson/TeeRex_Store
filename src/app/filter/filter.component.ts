import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Products } from '../models/products.interface';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Input() products: Products[] = [];
  filteredResults: Products[] = [];
  @Output() filteredProducts = new EventEmitter<Products[]>();

  constructor(private cartService: CartService) { }


  ngOnInit(): void { }

  onFilterChange(filtertype: string, filter: string, event: any) {
    if (event.target.checked === false) {
      if (filtertype === 'color' && filter === 'Red') {
        this.filteredResults = this.filteredResults.filter(prod => prod.color !== 'Red');
      }
      else if (filtertype === 'color' && filter === 'Blue') {
        this.filteredResults = this.filteredResults.filter(prod => prod.color !== 'Blue');
      }
      else if (filtertype === 'color' && filter === 'Green') {
        this.filteredResults = this.filteredResults.filter(prod => prod.color !== 'Green');
      }
      else if (filtertype === 'gender' && filter === 'Men') {
        this.filteredResults = this.filteredResults.filter(prod => prod.gender!== 'Men');
      }
      else if (filtertype === 'gender' && filter === 'Women') {
        this.filteredResults = this.filteredResults.filter(prod => prod.gender!== 'Women');
      }
      else if(filtertype === 'type' && filter === 'Polo') {
        this.filteredResults = this.filteredResults.filter(prod => prod.type!== 'Polo');
      }
      else if(filtertype === 'type' && filter === 'Hoodie') {
        this.filteredResults = this.filteredResults.filter(prod => prod.type!== 'Hoodie');
      }
      else if(filtertype === 'type' && filter === 'Basic') {
        this.filteredResults = this.filteredResults.filter(prod => prod.type!== 'Hoodie');
      }
      else if(filtertype === 'price' && filter === '250') {
        this.filteredResults = this.filteredResults.filter(prod => prod.price >= 250); 
      }
      else if(filtertype === 'price' && filter === '251') {
        this.filteredResults = this.filteredResults.filter(prod => prod.price < 250 && prod.price > 450);
      }
      else if(filtertype === 'price' && filter === '450') {
        this.filteredResults = this.filteredResults.filter(prod => prod.price < 450);
      }
      this.filteredProducts.emit(this.filteredResults);
    }
    else {
      if (filtertype === 'color' && filter === 'Red') {
        this.filteredResults = this.filteredResults.concat(this.products.filter(prod => prod.color === 'Red'));
      }
      else if (filtertype === 'color' && filter === 'Blue') {
        this.filteredResults = this.filteredResults.concat(this.products.filter(prod => prod.color === 'Blue'));
      }
      else if (filtertype === 'color' && filter === 'Green') {
        this.filteredResults = this.filteredResults.concat(this.products.filter(prod => prod.color === 'Green'));
      }
      else if (filtertype === 'gender' && filter === 'Men') {
        this.filteredResults = this.filteredResults.concat(this.products.filter(prod => prod.gender === 'Men'));
      }
      else if (filtertype === 'gender' && filter === 'Women') {
        this.filteredResults = this.filteredResults.concat(this.products.filter(prod => prod.gender === 'Women'));
      }
      else if (filtertype === 'price' && filter === '250') {
        this.filteredResults = this.filteredResults.concat(this.products.filter(prod => prod.price <= 250)); 
      }
      else if (filtertype === 'price' && filter === '251') {
        this.filteredResults = this.filteredResults.concat(this.products.filter(prod => prod.price > 250 && prod.price <= 450));
      }
      else if (filtertype === 'price' && filter === '450') {
        this.filteredResults = this.filteredResults.concat(this.products.filter(prod => prod.price >= 450));   
      }
      else if (filtertype === 'type' && filter === 'Polo') {
        this.filteredResults = this.filteredResults.concat(this.products.filter(prod => prod.type === 'Polo'));
      }
      else if (filtertype === 'type' && filter === 'Hoodie') {
        this.filteredResults = this.filteredResults.concat(this.products.filter(prod => prod.type === 'Hoodie'));
      }
      else if (filtertype === 'type' && filter === 'Basic') {
        this.filteredResults = this.filteredResults.concat(this.products.filter(prod => prod.type === 'Basic'));
      }
      this.filteredProducts.emit(this.filteredResults);
    }
  }

}
