import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Products } from '../models/products.interface';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() products: Products[] = [];
  @Output() cartProductsOutput = new EventEmitter<Products[]>();
  count: number = 1;
  clicked: boolean = false;
  currentIndex: number = 0;

  constructor(private cartService: CartService,
    private router: Router
  ) { }
  ngOnInit(): void {

  }
  addToCart(index: number, count: number) {

    const productInCart = this.cartService.getCartProducts().find(p => p.id === this.products[index].id);
    if (productInCart) {
      alert('This item is already in the cart!');
    } else {
      this.clicked = true;
      this.currentIndex = index;
      this.cartService.addToCart(this.products[index]);
      // this.products[index].addedToCart = true;
      console.log(this.products);
    }
  }

  goToCart() {
    this.router.navigate(['cart']);
  }

}
