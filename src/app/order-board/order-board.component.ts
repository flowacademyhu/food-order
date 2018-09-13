import {Component, OnInit} from '@angular/core';
import {FoodService} from '../food.service';
import {Food, FoodType} from '../food.model';

@Component({
  selector: 'app-order-board',
  templateUrl: './order-board.component.html',
  styleUrls: ['./order-board.component.css']
})
export class OrderBoardComponent implements OnInit {
  foodList: Food[];

  constructor(private foodService: FoodService) { }

  ngOnInit() {
    this.foodList = this.foodService.getAll();
  }
}
