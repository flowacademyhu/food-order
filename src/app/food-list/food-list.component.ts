import { Component, OnInit } from '@angular/core';
import {Food} from '../food.model';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foodList: Food[];

  constructor(private foodService: FoodService) { }

  ngOnInit() {
    this.foodList = this.foodService.getAll();
  }

}
