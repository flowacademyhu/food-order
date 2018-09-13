import { Injectable } from '@angular/core';
import {Food} from './food.model';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class AppStateService {
  theCart: Food[] = [];
  public cartChanged: BehaviorSubject<Food[]> = new BehaviorSubject(this.theCart);

  constructor() { }

  addToCart(food: Food) {
    this.theCart.push(food);
    console.log(this.theCart);
    this.cartChanged.next(this.theCart);
  }

  getCart() {
    return this.theCart;
  }

}
