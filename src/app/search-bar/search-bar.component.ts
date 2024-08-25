import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Products } from '../models/products.interface';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  @Input() products: Products[] = [];
  results: Products[] = [];
  @Output() searchResults = new EventEmitter<Products[]>();

  search() {
    console.log(this.searchResults);
    this.searchResults.emit(this.results);
  }
  searchProducts(event: any) {
    this.results = this.products.filter(product =>
      (event.target.value.toLowerCase()) === (product.name.toLowerCase()) ||
      (event.target.value.toLowerCase()) === (product.color.toLowerCase()) ||
      (event.target.value.toLowerCase()) === (product.type.toLowerCase())
    );
  }
}
