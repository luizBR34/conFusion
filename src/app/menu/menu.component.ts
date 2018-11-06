import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { PRATOS } from '../shared/dishes';

 
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  dishes: Dish[] = PRATOS;

  pratoSelecionado: Dish;

  constructor() { }

  ngOnInit() {
  }

  onSelect(dish: Dish) {
    this.pratoSelecionado = dish;
  }

}
