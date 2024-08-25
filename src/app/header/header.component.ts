import { Component, Input, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Products } from '../models/products.interface';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  constructor(private router: Router,
    private cartService: CartService,
  ) { }
  @Input() products: Products[] = [];
  cartProducts: Products[] = [];
  countValue: number=0;

  ngOnInit(): void {
      this.cartService.count$.subscribe(count => {
        this.countValue = count;
      })
  }
  cart(){
    this.router.navigate(['cart']);
  }
}
