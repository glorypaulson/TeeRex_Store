import { Component, OnInit } from '@angular/core';
import { Products } from '../models/products.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cartProducts: Products[] = [];
  totalPrice: number = 0;
  product: Products = {
     currentQuantity: 1,
     id: 0,
     imageURL: '',
     name: '',
     type: '',
     price: 0,
     currency: '',
     color: '',
     gender: '',
     quantity: 0
   };

  constructor(
    private cartService: CartService,
    private router: Router
  ) { }

  ngOnInit() {
    this.cartProducts = this.cartService.getCartProducts();
    this.cartProducts.forEach(e => {
      this.totalPrice += e.currentPrice ? e.currentPrice : e.price;
      e.currentQuantity = e.currentQuantity ? e.currentQuantity : 1;
      e.currentPrice = e.currentPrice ? e.currentPrice : e.price;
    });
    console.log(this.cartProducts);
    
  }

  goToHome(){
    this.router.navigate(['home'])
  }
  deleteProduct(index: number) {
    console.log(this.cartProducts);
    this.cartService.removeProduct(index);
    this.decreaseTotalPrice();
  }

  increaseTotalPrice() {
  //  this.totalPrice += this.cartProducts.reduce( (sum , product) => {
  //     return product.currentPrice!;
  //   }, 0)
    this.totalPrice = 0;
    this.cartProducts.forEach( prod => {
      this.totalPrice += prod.currentPrice!
    })
  }

  decreaseTotalPrice() {
    this.totalPrice =0;
    this.cartProducts.forEach( prod => {
      this.totalPrice += prod.currentPrice!
    })
   }
  increase(i: number) {
    this.cartProducts.forEach(e => {
      if(e.id === this.cartProducts[i].id){
        if (e.currentQuantity! < e.quantity){
          e.currentQuantity!++;
        }
        else{
          alert("Available quantity exceeded!")
        }
        e.currentPrice = e.price * e.currentQuantity!;
        this.increaseTotalPrice();
      }
    })
    console.log(this.cartProducts);
    
  }
  decrease(i: number) {
      this.cartProducts.forEach(e => {
        if(e.id === this.cartProducts[i].id){
          e.currentQuantity!--;
          e.currentPrice = e.price * e.currentQuantity!;
          if(e.currentQuantity === 0){
            this.deleteProduct(i);
          }
          this.decreaseTotalPrice();
        }
      })
      console.log(this.cartProducts);

    
  }
}
