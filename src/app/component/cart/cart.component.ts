import { Component, OnInit } from '@angular/core';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {

  cartList: any = []

  constructor(private cart: CartService) { }

  ngOnInit() {
    this.cartList = this.cart.getCartData()
    // console.log(this.cartList)

}


removeCartItem(id : any){
  this.cartList = this.cart.removeCartService(id)
}



emptyCart() {
  this.cartList = this.cart.emptyCartService()
}



}




