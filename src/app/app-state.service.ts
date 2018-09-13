import { Injectable } from '@angular/core';
import {Food} from './food.model';

@Injectable()
export class AppStateService {
  theCart: Food[] = [];

  constructor() { }

  addToCart(food: Food) {
    this.theCart.push(food);
    console.log(this.theCart);
  }

}
