import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {Restaurant} from "./restaurant";

@Injectable()
export class SearchService {

  constructor(private http: Http) {
  }

  searchForRestaurantByName(term: string): Observable<Restaurant[]> {
    return this.http
        .get(`app/restaurants/?name=${term}`)
        .map((r: Response) => r.json().data as Restaurant[])
  }

  searchForRestaurantByAddress(term: string): Observable<Restaurant[]> {
    return this.http
        .get(`app/restaurants/?address=${term}`)
        .map((r: Response) => r.json().data as Restaurant[]);
  }

  // searchForRestaurantByMeal(term: string): Observable<Restaurant[]> {
  //   console.log('looking for restaurant');
  //   return this.http
  //       .get(`app/restaurants/?todays_meal=${term}`)
  //       .map((r: Response) => r.json().data as Restaurant[]);
  // }

}
