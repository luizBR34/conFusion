import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOCAO } from '../shared/promotions';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor(private http: HttpClient) { }


  getPromotions(): Observable<Promotion[]> {
    //O mesmo que acessar: http://localhost:3000/promotions
    return this.http.get<Promotion[]>(baseURL + 'promotions');
  }

  getPromotion(id: string): Observable<Promotion> {
    return this.http.get<Promotion>(baseURL + 'promotions/' + id);
  }

  getFeaturePromotion(): Observable<Promotion> {
    return this.http.get<Promotion[]>(baseURL + 'promotions?featured=true')
    .pipe(map(promotions => promotions[0]));
  }

  getPromotionIds(): Observable<string[] | any> {
    return this.getPromotions().pipe(map(promotions => promotions.map(promotion => promotion.id)));
  }

}
