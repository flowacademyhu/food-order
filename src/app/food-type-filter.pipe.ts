import { Pipe, PipeTransform } from '@angular/core';
import {Food, FoodType} from './food.model';

@Pipe({
  name: 'foodTypeFilter'
})
export class FoodTypeFilterPipe implements PipeTransform {

  transform(value: Food[], args?: FoodType): Food[] {
    return value.filter(food => {
      return food.type === args;
    });
  }

}
