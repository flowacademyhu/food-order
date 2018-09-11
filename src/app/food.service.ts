import { Injectable } from '@angular/core';
import { Food } from './food.model';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  public getAll(): Food[] {
    return [
      new Food(0, "Hambi", 99.99, "Hambi salival es husival"),
      new Food(1, "Sali", 77.99, "Friss sali"),
      new Food(2, "Uccsi", 14, "Finom hideg uccsi"),
      new Food(3, "Kolbaszos Rajas Pizza", 999.99, "Vasarlok kozt half-life 3 telepitokodot soroslunk ki."),
      new Food(4, "Al Gore kedvence", 88.12, "Szarvasgombas, uborkas kefires, vajas alapon."),
      new Food(5, "Medvedisznoemberes", 67, "A kaloz-szellemek is ezt eszik.")
    ]
  }
}
