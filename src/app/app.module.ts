import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { OrderBoardComponent } from './order-board/order-board.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodComponent } from './food/food.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FoodService } from './food.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    OrderBoardComponent,
    FoodListComponent,
    FoodComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    NgbModule
  ],
  providers: [FoodService],
  bootstrap: [AppComponent]
})
export class AppModule { }
