import { Injectable } from '@angular/core';
import { Products } from './models/products.interface';
import { BehaviorSubject } from 'rxjs';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor( private store: Store) { }
  cartProducts: Products[] = [];
  private countSubject = new BehaviorSubject<number>(0);
  count$ = this.countSubject.asObservable();

  addToCart(product: any) {
    this.cartProducts.push(product);
    this.countSubject.next(this.cartProducts.length);
  }

  getCartProducts(): Products[] {
    return this.cartProducts;
  }

  removeProduct(index: number){
     this.cartProducts.splice(index, 1);
     this.countSubject.next(this.cartProducts.length);
     return this.cartProducts;
  }
}
