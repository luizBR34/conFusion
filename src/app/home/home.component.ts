import { Component, OnInit, Inject } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dish: Dish;
  promotion: Promotion;

  constructor(private dishService: DishService,
    private promotionService: PromotionService,
    @Inject('baseURL') private baseURL) { }

  ngOnInit() {
    this.dishService.getFeatureDish()
    .subscribe(dish => this.dish = dish);

    this.promotionService.getFeaturePromotion()
    .subscribe(promotion => this.promotion = promotion);                                 
  }

}
