export class Food {
  constructor (public id: Number,
               public name: String,
               public price: Number,
               public description: String,
               public type:  FoodType) {
  }
}

export enum FoodType {
  Drink = 1, Food, Dessert
}
