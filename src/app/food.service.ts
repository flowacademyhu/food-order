import { Injectable } from '@angular/core';
import { Food, FoodType } from './food.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  private API_URL = 'http://localhost:8080/api/foods/';

  constructor(
    private httpClient: HttpClient
  ) { }

  public getAll(): Observable<Food[]> {
    return this.httpClient.get<Food[]>(this.API_URL);
  }
}
