import { Injectable } from '@angular/core'

@Injectable({
  providedIn : 'root'
  }
)

export class CartService
{
  constructor(){}

  items = [];

  addToCart(product)
  {
    this.items.push(product)
  }
}