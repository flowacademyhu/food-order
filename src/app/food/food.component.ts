import {Component, Input, OnInit} from '@angular/core';
import {Food} from '../food.model';
import {AppStateService} from '../app-state.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {
  @Input() food: Food;

  constructor(private appStateService: AppStateService) { }

  ngOnInit() {
  }

  addToCart() {
    this.appStateService.addToCart(this.food);
  }
}
