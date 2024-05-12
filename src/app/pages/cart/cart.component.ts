import { Component, OnInit } from '@angular/core';
import { CartService } from '../../shared/services/cart.service';
import { Cart } from '../../shared/models/Cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit{

  cartItems: any;

  constructor(private cartService: CartService){ }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
  }

  removeFromCart(item: Cart){
    this.cartService.removeFromCart(item.id);
      console.log('Termék törlésre került:' , item.name);
  }
}