import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

productList : any;
constructor(private api : ApiService, private cart : CartService){ }

ngOnInit(): void {
this.api.getProduct().subscribe((res)=>{
this.productList = res;
})

}
 
addToCart(item : any){
this.cart.addToCartService(item)
// alert('item added to cart')
}






}
