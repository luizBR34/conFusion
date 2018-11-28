import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor(private http: HttpClient) { }

  getDishes(): Observable<Dish[]> {
    //O mesmo que acessar: http://localhost:3000/dishes
    return this.http.get<Dish[]>(baseURL + 'dishes');
  }

  getDish(id: string): Observable<Dish> {
    return this.http.get<Dish>(baseURL + 'dishes/' + id);
  }

  getFeatureDish(): Observable<Dish> {
    return this.http.get<Dish[]>(baseURL + 'dishes?featured=true')
    .pipe(map(dishes => dishes[0]));
  }

  getDishIds(): Observable<string[] | any> {
    return this.getDishes().pipe(map(dishes => dishes.map(dish => dish.id)));
  }


}
