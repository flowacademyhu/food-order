import { Component, OnInit } from '@angular/core';
import {AppStateService} from '../app-state.service';
import {Food} from '../food.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cart: Food[];

  constructor(private appStateService: AppStateService) { }

  ngOnInit() {
    this.appStateService.cartChanged.subscribe(value => this.cart = value);
  }

}
