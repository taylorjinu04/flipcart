import { Component, OnInit } from '@angular/core';
import { CartService } from '../../service/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{

public cartCountHeader : number = 0

constructor(private cart : CartService){}

ngOnInit(): void {

  this.cart.cartCount.subscribe((res)=>{
  this.cartCountHeader = res
  })
  
}


}

  



