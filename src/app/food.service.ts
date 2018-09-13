import { Injectable } from '@angular/core';
import {Food, FoodType} from './food.model';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  public getAll(): Food[] {
    return [
      new Food(0, "Hambi", 99.99, "Hambi salival es husival", FoodType.Food),
      new Food(1, "Sali", 77.99, "Friss sali", FoodType.Food),
      new Food(2, "Uccsi", 14, "Finom hideg uccsi", FoodType.Drink),
      new Food(3, "Kolbaszos Rajas Pizza", 999.99, "Vasarlok kozt half-life 3 telepitokodot soroslunk ki.", FoodType.Food),
      new Food(4, "Al Gore kedvence", 88.12, "Szarvasgombas, uborkas kefires, vajas alapon.", FoodType.Food),
      new Food(5, "Medvedisznoemberes", 67, "A kaloz-szellemek is ezt eszik.", FoodType.Dessert)
    ]
  }
}
