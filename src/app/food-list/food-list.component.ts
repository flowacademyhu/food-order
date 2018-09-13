import {Component, Input, OnInit} from '@angular/core';
import {Food} from '../food.model';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  @Input()
  foodList: Food[];

  constructor() { }

  ngOnInit() {
  }

}
