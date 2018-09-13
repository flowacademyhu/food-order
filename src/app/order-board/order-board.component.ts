import {Component, OnInit} from '@angular/core';
import {FoodService} from '../food.service';
import {Food, FoodType} from '../food.model';

@Component({
  selector: 'app-order-board',
  templateUrl: './order-board.component.html',
  styleUrls: ['./order-board.component.css']
})
export class OrderBoardComponent implements OnInit {
  drinkList: Food[];
  foodList: Food[];
  dessertList: Food[];

  constructor(private foodService: FoodService) { }

  ngOnInit() {
    const list = this.foodService.getAll();
    this.foodList = list.filter(food => {
      return food.type === FoodType.Food;
    });
    this.drinkList = list.filter(food => {
      return food.type === FoodType.Drink;
    });
    this.dessertList = list.filter(food => {
      return food.type === FoodType.Dessert;
    });
  }

  sortFoods;

}
