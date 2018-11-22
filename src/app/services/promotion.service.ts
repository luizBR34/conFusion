import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOCAO } from '../shared/promotions';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }


  getPromotions(): Promotion[] {
    return PROMOCAO;
  }

  getPromotion(id: string): Promotion {
    return PROMOCAO.filter((promo) => (promo.id === id))[0];
  }

  getFeaturePromotion(): Promotion {
    return PROMOCAO.filter((promo) => promo.featured)[0];
  }

}
