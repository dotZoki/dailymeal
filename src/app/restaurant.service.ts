import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Restaurant} from "./restaurant";
import 'rxjs/add/operator/toPromise';
import {Observable} from "rxjs";
import {ShareDataService} from "./share-data.service";

@Injectable()
export class RestaurantService {

  private url = 'app/restaurants';

  constructor(private http: Http, private shareData: ShareDataService) { }

  getRestaurants(): Observable<Restaurant[]> {

    return this.http
        .get(this.url)
        .map((r: Response) => r.json().data as Restaurant[])
        .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  search(term: string, searchFor: string): Observable<Restaurant[]> {
    switch (searchFor) {
      case "food":
        return this.searchForRestaurantByFood(term);
      case "address":
        return this.searchForRestaurantByAddress(term);
      default:
        return this.searchForRestaurantByName(term);

    }

  }

  searchForRestaurantByFood(term: string): Observable<Restaurant[]> {
    console.log("FOOD");
    return this.http
        .get(`app/restaurants/`)
        .map(function(r: Response) {
          var returnData = (r.json().data as Restaurant[]).filter(function(restaurant) {
            for (var meal of restaurant.todays_meals) {
              return meal.name.toLowerCase().indexOf(term.toLowerCase()) !== -1
            }
            return false;
          });
          return returnData;
        })
  }

  searchForRestaurantByName(term: string): Observable<Restaurant[]> {
    return this.http
        .get(`app/restaurants/?name=${term}`)
        .map((r: Response) => r.json().data as Restaurant[]);
  }

  searchForRestaurantByAddress(term: string): Observable<Restaurant[]> {
    return this.http
        .get(`app/restaurants/?address=${term}`)
        .map((r: Response) => r.json().data as Restaurant[]);
  }
}
