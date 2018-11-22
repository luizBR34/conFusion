import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { PRATOS } from '../shared/dishes';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getDishes(): Dish[] {
    return PRATOS;
  }

  getDish(id: string): Dish {
    return PRATOS.filter((dish) => (dish.id === id))[0];
  }

  getFeatureDish(): Dish {
    return PRATOS.filter((dish) => dish.featured)[0];
  }
}
