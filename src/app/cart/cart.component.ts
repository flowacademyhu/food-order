import { Component, OnInit } from '@angular/core';
import {Food} from '../food.model';
import {AppStateService} from '../app-state.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Food[];

  constructor(private appStateService: AppStateService) { }

  ngOnInit() {
    this.cart = this.appStateService.getCart();
  }

}
