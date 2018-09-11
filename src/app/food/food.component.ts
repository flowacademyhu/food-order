import { Component, OnInit } from '@angular/core';
import {Food} from '../food.model';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {
  food: Food;

  constructor() { }

  ngOnInit() {
  }

}
