import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList: any = [];
  public productList: any = [];

  public cartCount: BehaviorSubject<any> = new BehaviorSubject(0)

  constructor() { }

  addToCartService(item: any) {
    var existProdIndex = this.cartItemList.findIndex((res : any)=>{
      return res.id === item.id
    })

    if(existProdIndex == -1){
      item.quantity = 1
      this.cartItemList.push(item)
      this.cartCount.next(this.cartItemList.length)
    }

    else{
     this.cartItemList[existProdIndex].quantity ++ ;
    }

  }

  getCartData() {
    return this.cartItemList
  }

  removeCartService(id: any) {
    this.cartItemList = this.cartItemList.filter((res: any) => {
      return res.id !== id
    })
    this.cartCount.next(this.cartItemList.length)
    return this.cartItemList
  }

  emptyCartService() {
    this.cartItemList = []
    this.cartCount.next(0)
    return this.cartItemList
  }










  // getTotalPrice() {
  //   let grandTotal = 0;
  //   this.cartItemList.map((a: any) => {
  //     grandTotal += a.total;
  //   })
  // }



}
