import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { OrderBoardComponent } from './order-board/order-board.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodComponent } from './food/food.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ContactComponent } from './contact/contact.component';
import { FoodService } from './food.service';
import { FoodTypeFilterPipe } from './food-type-filter.pipe';
import {AppStateService} from './app-state.service';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', component: OrderBoardComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    OrderBoardComponent,
    FoodListComponent,
    FoodComponent,
    ContactComponent,
    FoodTypeFilterPipe,
    CartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    NgbModule,
    HttpClientModule
  ],
  providers: [
    FoodService,
    AppStateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
