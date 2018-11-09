import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { PRATOS } from '../shared/dishes';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getDished(): Dish[] {
    return PRATOS;
  }
}
