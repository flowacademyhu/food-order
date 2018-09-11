import { Component, OnInit } from '@angular/core';
import {Food} from '../food.model';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foodList: Food[];

  constructor() { }

  ngOnInit() {
  }

}
